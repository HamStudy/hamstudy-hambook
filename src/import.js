const fs = require('fs/promises');
const path = require('path');
const yaml = require('yaml');
const yargs = require('yargs');

/**
 * Capitalizes a string to title case, where the first letter of each major word is capitalized.
 * Minor words like 'and', 'or', 'the', etc., remain lowercase unless they are the first or last word.
 * @param {string} str - The string to be capitalized.
 * @returns {string} - The title-cased string.
 */
function toTitleCase(str) {
    const minorWords = ['and', 'or', 'the', 'a', 'an', 'in', 'on', 'at', 'to', 'by', 'with', 'of', 'for', 'but', 'nor'];
    return str
        .split(' ')
        .map((word, index, arr) => {
            if (index === 0 || index === arr.length - 1 || !minorWords.includes(word.toLowerCase())) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
            return word.toLowerCase();
        })
        .join(' ');
}

/**
 * @typedef {Object} Section
 * @property {string} title - The title of the section.
 * @property {string} content - The markdown content of the section.
 * @property {Object} [frontMatter] - Optional front-matter data in the section.
 */

/**
 * @typedef {Object} Chapter
 * @property {string} title - The title of the chapter.
 * @property {Array<Chapter | Section>} sections - List of sections in the chapter.
 */

/**
 * @typedef {Object} Book
 * @property {Section} toc - The table of contents.
 * @property {Chapter[]} parts - List of parts in the book.
 */

/**
 * Reads and parses a markdown file, extracting the front matter and content.
 * @param {string} filePath - The path to the markdown file.
 * @returns {Promise<Section>} The parsed section.
 */
async function parseMarkdownFile(filePath) {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const frontMatterMatch = /^---\n([\s\S]+?)\n---/.exec(fileContent);
    let frontMatter = {};
    let content = fileContent;

    if (frontMatterMatch) {
        frontMatter = yaml.parse(frontMatterMatch[1]);
        content = fileContent.slice(frontMatterMatch[0].length).trim();
    }

    let title = frontMatter.title;

    if (!title) {
        const lines = content.split('\n');
        const firstNotBlankLine = lines.find(line => line.trim() !== '');
        if (firstNotBlankLine && firstNotBlankLine.startsWith('#')) {
            title = firstNotBlankLine.replace(/\./g, '-').replace(/^#+\s*/, '');
        } else {
            const filename = path.basename(filePath, '.md').replace(/-/g, ' ');
            title = toTitleCase(filename);
        }

        frontMatter.title = title;
    }

    return { title, content, frontMatter };
}

/**
 * Recursively processes a directory to build a data structure representing the book's content.
 * @param {string} dirPath - The directory to process.
 * @returns {Promise<Chapter[] | Section[]>} The list of chapters or sections.
 */
async function processDirectory(dirPath) {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    const sortedEntries = entries.sort((a, b) => a.name.localeCompare(b.name));
    const chapters = [];
    let sections = [];
    let introSection = null;
    let conclusionSection = null;

    for (const entry of sortedEntries) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
            const chapterSections = await processDirectory(fullPath);
            const chapter = {
                title: entry.name,
                sections: chapterSections,
            };
            chapters.push(chapter);
        } else if (entry.isFile() && entry.name.endsWith('.md')) {
            const section = await parseMarkdownFile(fullPath);
            if (entry.name.toLowerCase() === 'intro.md') {
                introSection = section;
            } else if (entry.name.toLowerCase() === 'conclusion.md') {
                conclusionSection = section;
            } else {
                sections.push(section);
            }
        }
    }

    return [introSection, ...sections, ...chapters, conclusionSection].filter(Boolean);
}

/**
 * Loads the book's contents from the directory structure.
 * @param {string} rootDir - The root directory of the book.
 * @returns {Promise<Book>} The loaded book data structure.
 */
async function loadBook(rootDir) {
    const tocPath = path.join(rootDir, 'toc.md');
    const toc = await parseMarkdownFile(tocPath);
    const parts = await processDirectory(rootDir);

    const conclusionPath = path.join(rootDir, 'conclusion.md');
    let conclusion = null;
    try {
        conclusion = await parseMarkdownFile(conclusionPath);
    } catch (err) {
        if (err.code !== 'ENOENT') {
            throw err;
        }
    }

    return { toc, parts };
}

/**
 * Writes the entire book as a single markdown file, adding a horizontal rule between each section.
 * @param {Book} book - The book object containing all the sections and chapters.
 * @param {string} outputPath - The file path where the markdown output should be saved.
 * @returns {Promise<void>}
 */
async function writeSingleFileMarkdown(book, outputPath) {
    // Ensure the file is empty before starting
    await fs.writeFile(outputPath, '');

    const appendSection = async (section) => {
        const content = section.content + '\n\n---\n\n';
        await fs.appendFile(outputPath, content);
    };

    for (const part of book.parts) {
        if (part.content) {
            await appendSection(part);
            continue;
        }
        for (const section of part.sections) {
            if (section.sections) {
                for (const subSection of section.sections) {
                    await appendSection(subSection);
                }
            } else {
                await appendSection(section);
            }
        }
    }
}

/**
 * Writes each section of the book as a separate file in a target directory.
 * Filenames are based on the section title and include an index to maintain order.
 * All files are placed in the same output directory.
 * @param {Book} book - The book object containing all the sections and chapters.
 * @param {string} outputPath - The directory path where the markdown files should be saved.
 * @returns {Promise<void>}
 */
async function writeSingleDirectoryBook(book, outputPath) {
    let fileIndex = 1;

    const saveSection = async (section, index) => {
        const sanitizedTitle = section.title.replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').toLowerCase();
        const filename = `${String(index).padStart(2, '0')}-${sanitizedTitle}.md`;
        const filePath = path.join(outputPath, filename);
        await fs.writeFile(filePath, section.content);
    };

    const processSections = async (sections) => {
        for (const section of sections) {
            if ('sections' in section && Array.isArray(section.sections)) {
                await processSections(section.sections);  // Recursively process subsections
            } else {
                await saveSection(section, fileIndex++);
            }
        }
    };

    // Ensure the output directory exists
    await fs.mkdir(outputPath, { recursive: true });

    // Start processing parts (which include chapters and sections)
    await processSections(book.parts);

    if (book.conclusion) {
        await saveSection(book.conclusion, fileIndex++);
    }
}


const formatTypes = {
    singleFileMarkdown: 'mdfile',
    singleDirectoryBook: 'dirbook'
};

/**
 * Main function to handle the script execution with command-line arguments.
 * @returns {Promise<void>}
 */
(async () => {
    const argv = yargs
        .positional('root-dir', {
            description: 'The root directory of the source content',
            type: 'string'
        })
        .option('output-format', {
            alias: 'f',
            description: 'Specify the output format',
            choices: [formatTypes.singleFileMarkdown, formatTypes.singleDirectoryBook],
            demandOption: true,
            type: 'string'
        })
        .option('output-path', {
            alias: 'o',
            description: 'Specify the output path',
            type: 'string',
            demandOption: true,
        })
        .argv;

    try {
        const rootDir = argv._[0];

        if (!rootDir) {
            throw new Error('Please provide the root directory as a command line argument.');
        }

        const book = await loadBook(rootDir);

        switch (argv['output-format']) {
            case formatTypes.singleFileMarkdown:
                await writeSingleFileMarkdown(book, argv['output-path']);
                break;

            case formatTypes.singleDirectoryBook:
                await writeSingleDirectoryBook(book, argv['output-path']);
                break;

            default:
                throw new Error('Invalid output format specified.');
        }

        console.log(`Output generated at ${argv['output-path']}`);
    } catch (error) {
        console.error('Error:', error);
    }
})();
