
// THIS IS THE OLD VERSION, USE IMPORT NOW!

const fs = require('fs/promises');
const path = require('path');
const yaml = require('yaml');

/**
 * Capitalizes a string to title case, where the first letter of each major word is capitalized.
 * Minor words like 'and', 'or', 'the', etc., remain lowercase unless they are the first or last word.
 * @param {string} str - The string to be capitalized
 * @returns {string} - The title-cased string
 */
function toTitleCase(str) {
    const minorWords = ['and', 'or', 'the', 'a', 'an', 'in', 'on', 'at', 'to', 'by', 'with', 'of', 'for', 'but', 'nor'];
    return str
        .split(' ')
        .map((word, index, arr) => {
            // Capitalize the first and last word regardless of minor word rules
            if (
                index === 0 ||
                index === arr.length - 1 ||
                !minorWords.includes(word.toLowerCase())
            ) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
            return word.toLowerCase();
        })
        .join(' ');
}

/**
 * @typedef {Object} Section
 * @property {string} title - The title of the section
 * @property {string} content - The markdown content of the section
 * @property {Object} [frontMatter] - Optional front-matter data in the section
 */

/**
 * @typedef {Object} Chapter
 * @property {string} title - The title of the chapter
 * @property {Section[]} sections - List of sections in the chapter
 */

/**
 * @typedef {Object} Part
 * @property {string} title - The title of the part
 * @property {Chapter[]} chapters - List of chapters in the part
 */

/**
 * @typedef {Object} Book
 * @property {Section} toc - The table of contents
 * @property {Part[]} parts - List of parts in the book
 * @property {Section} conclusion - The conclusion section
 */

/**
 * Reads and parses a markdown file, extracting the front matter and content.
 * @param {string} filePath - The path to the markdown file
 * @returns {Promise<Section>} The parsed section
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

    // Extract the title from front matter, first header, or filename
    let title = frontMatter.title;

    if (!title) {
        // Find the first non-empty line that starts with "# " (indicating a primary header)
        const lines = content.split('\n');
        const primaryHeader = lines.find(line => line.trim().startsWith('# '));

        if (primaryHeader) {
            title = primaryHeader.trim().slice(2).trim(); // Remove the "# " prefix
        } else {
            // Extract the filename, remove the extension, and apply title case
            const filename = path.basename(filePath, '.md').replace(/-/g, ' ');
            title = toTitleCase(filename);
        }

        frontMatter.title = title; // Ensure title is set in frontMatter
    }

    return { title, content, frontMatter };
}

/**
 * Recursively processes a directory to build a data structure representing the book's content.
 * @param {string} dirPath - The directory to process
 * @returns {Promise<Chapter[] | Section[]>} The list of chapters or sections
 */
async function processDirectory(dirPath) {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    const sortedEntries = entries.sort((a, b) => a.name.localeCompare(b.name));
    const chapters = [];
    let sections = [];
    let introSection = null;

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
            } else {
                sections.push(section);
            }
        }
    }

    if (introSection) {
        sections = [introSection, ...sections];
    }

    return [...sections, ...chapters];
}

/**
 * Loads the book's contents from the directory structure.
 * @param {string} rootDir - The root directory of the book
 * @returns {Promise<Book>} The loaded book data structure
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

    return { toc, parts, conclusion };
}

/**
 * Main function to run the script.
 */
(async () => {
    try {
        const rootDir = process.argv[2];

        if (!rootDir) {
            throw new Error('Please provide the root directory as a command line argument.');
        }

        const book = await loadBook(rootDir);
        console.log(JSON.stringify(book, null, 2));
    } catch (error) {
        console.error('Error loading book:', error);
    }
})();
