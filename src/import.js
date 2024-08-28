const fs = require('fs/promises');
const path = require('path');
const yaml = require('yaml');
const yargs = require('yargs');
const chokidar = require('chokidar');
const _ = require('lodash');

const preprocessMarkdown = v => v;

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
 * @property {boolean} [intro] - Indicates if the section is an introduction to a chapter or part.
 * @property {boolean} [conclusion] - Indicates if the section is a conclusion to a chapter or part.
 * @property {string} [filename] - The filename of the section when writing to disk.
 */

/**
 * @typedef {Object} Chapter
 * @property {string} title - The title of the chapter.
 * @property {Array<Chapter | Section>} sections - List of sections in the chapter.
 * @property {string} [filename] - The filename of the section when writing to disk.
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
            if (entry.name.toLowerCase() === 'toc.md') {
                continue; // skip the toc file
            } else if (entry.name.toLowerCase() === 'index.md') {
                introSection = section;
                introSection.intro = true;
            } else if (entry.name.toLowerCase() === 'conclusion.md') {
                conclusionSection = section;
                conclusionSection.conclusion = true;
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
    const contentDir = path.join(rootDir, 'content');
    const tocPath = path.join(contentDir, 'toc.md');
    const toc = await parseMarkdownFile(tocPath);
    const parts = await processDirectory(contentDir);

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
        let content = section.content;

        // Check if there's a gistMap in the frontmatter
        if (section.frontMatter && section.frontMatter.gistMap) {
            const gistMap = section.frontMatter.gistMap;

            // Replace image URLs in HTML img tags
            content = content.replace(/<img[^>]*src=["']([^"']+)["'][^>]*>/g, (match, src) => {
                const filename = path.basename(src);
                if (gistMap[filename]) {
                    return match.replace(src, gistMap[filename]);
                }
                return match;
            });

            // Replace image URLs in markdown syntax
            content = content.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
                const filename = path.basename(src);
                if (gistMap[filename]) {
                    return `![${alt}](${gistMap[filename]})`;
                }
                return match;
            });
        }

        content += '\n\n---\n\n';
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


/**
 * Returns front matter as a yaml string
 * @param {Record<string, any>} data 
 * @returns 
 */
function writeFrontMatter(data) {
    return '---\n' + yaml.stringify(data) + '---\n\n';
}

/**
 * Returns the sanitized title for a chapter or section
 * @param {Chapter | Section} chapterOrSection
 * @returns {string}
 */
function getTitleSlug(chapterOrSection) {
    // If there is an intro, use that title
    const intro = (chapterOrSection.sections || []).find(s => s.intro);
    if (intro) {
        const src = intro.frontMatter?.slug || intro.title;
        return src.replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').toLowerCase();
    } else {
        const title = chapterOrSection.frontMatter?.slug || chapterOrSection.title;
        return title.replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').toLowerCase();
    }
}

/**
 * 
 * @param {string} markdown 
 * @returns 
 */
function adjustMarkdownHeaders(markdown) {
    // Match all headers in the document
    const headers = [...markdown.matchAll(/^#+\s.*$/gm)];

    if (!headers.length) {
        return markdown; // No headers found, return the document unchanged
    }

    // Determine the lowest level header
    let minLevel = Math.min(...headers.map(header => header[0].match(/^#+/)[0].length));

    let targetLevel = 1;
    // There can be only one H1, so if there are more than one at the min level we need to bump them up
    if (minLevel > 1) {
        const h1s = headers.filter(header => header[0].match(/^#+/)[0].length === minLevel);
        if (h1s.length > 1) {
            targetLevel = 2;
        }
    }

    if (minLevel > targetLevel) {
        return reduceHeadingLevels(markdown, minLevel - targetLevel);
    } else {
        return markdown;
    }
}

function reduceHeadingLevels(content, level) {
    content = content.replace(/(^#+)/gm, (match, p1) => {
        const newLevel = Math.max(1, p1.length - level);
        return '#'.repeat(newLevel);
    });
    return content;
}

/**
 * Writes the book content in Hugo-compatible format.
 * @param {Book} book - The book object containing all the sections and chapters.
 * @param {string} outputPath - The root directory of the Hugo project.
 * @returns {Promise<void>}
 */
async function writeHugoBook(book, outputPath) {
    const contentPath = path.join(outputPath, 'content', 'docs');
    const sourceDir = path.dirname(outputPath); // This is now the root of the source files

    const writeChapter = async (chapter, currentPath, index, level = 1) => {
        const chptSlug = getTitleSlug(chapter);
        const chapterPath = path.join(currentPath, chptSlug);
        chapter.filename = chptSlug;
        await fs.mkdir(chapterPath, { recursive: true });

        if (chapter.sections?.length) {
            const intro = chapter.sections.find(s => s.intro);
            let introContent = writeFrontMatter({
                title: intro?.title || chapter.title,
                weight: index,
                ...intro?.frontMatter || {},
            }) + (intro?.content || '');
            
            // Process images in the intro content
            introContent = await processImages(introContent, sourceDir, outputPath, path.relative(outputPath, chapterPath));
            introContent = adjustMarkdownHeaders(preprocessMarkdown(introContent));
            
            introContent.filename = '_index';
            await fs.writeFile(path.join(chapterPath, '${introContent.filename}.md'), introContent);
        }

        let sectionIndex = 1;
        for (const section of chapter.sections) {
            if (section.intro) continue;
            if ('sections' in section) {
                await writeChapter(section, chapterPath, sectionIndex, level + 1);
            } else {
                const sectionSlug = getTitleSlug(section);
                const sectionFileName = `${sectionSlug}`;
                let sectionContent = writeFrontMatter({
                    title: section.title,
                    weight: sectionIndex,
                    ...section.frontMatter || {},
                }) + section.content;

                // Process images in the section content
                sectionContent = await processImages(sectionContent, sourceDir, outputPath, path.relative(outputPath, chapterPath));
                sectionContent = adjustMarkdownHeaders(preprocessMarkdown(sectionContent));

                section.filename = sectionFileName;
                await fs.writeFile(path.join(chapterPath, `${sectionFileName}.md`), sectionContent);
            }
            sectionIndex++;
        }
    };

    // Write parts and chapters
    let partIndex = 1;
    for (const part of book.parts) {
        if (part.conclusion) {
            let conclusionContent = writeFrontMatter({
                title: part.title,
                weight: partIndex,
                ...part.frontMatter || {},
            }) + part.content;

            // Process images in the conclusion content
            conclusionContent = await processImages(conclusionContent, sourceDir, outputPath, path.relative(outputPath, contentPath));
            conclusionContent = adjustMarkdownHeaders(preprocessMarkdown(conclusionContent));

            part.filename = `conclusion`;
            await fs.writeFile(path.join(contentPath, `${part.filename}.md`), conclusionContent);
        } else if (part.sections) {
            await writeChapter(part, contentPath, partIndex);
        } else {
            throw new Error('Invalid book structure: parts must have sections or a conclusion.', part);
        }
        partIndex++;
    }

    // Generate and write table of contents
    const tocContent = generateTableOfContents(book);
    await fs.writeFile(path.join(contentPath, '_index.md'), tocContent);
}

function getLinkSlug(chapterOrSection) {
    // The slug for this will either be the frontmatter slug without modification
    // or else the filename without the extension
    return chapterOrSection.frontMatter?.slug || path.basename(chapterOrSection.filename, '.md');
}

/**
 * Generates a table of contents for the Hugo book.
 * @param {Book} book - The book object containing all the sections and chapters.
 * @returns {string} The generated table of contents in markdown format.
 */
function generateTableOfContents(book) {
    let toc = '# Table of Contents\n\n';

    for (const part of book.parts) {
        const partSlug = getLinkSlug(part);
        if (part.intro) { 
            continue; // Skip intro
        } else if (part.conclusion) {
            toc += `- [Conclusion](${getLinkSlug(part)})\n`;
            continue;
        }
        toc += `- [${part.title}](${partSlug}/)\n`;

        if ('sections' in part) {
            for (const chapter of part.sections) {
                if (chapter.intro) { 
                    continue; // Skip intro
                }
                if ('sections' in chapter) {
                    const chapterSlug = `${partSlug}/${getLinkSlug(chapter)}`;
                    toc += `  - [${chapter.title}](${chapterSlug}/)\n`;

                    for (const section of chapter.sections) {
                        if (!section.intro) {
                            const sectionSlug = `${chapterSlug}/${getLinkSlug(section)}`;
                            toc += `    - [${section.title}](${sectionSlug})\n`;
                        }
                    }
                } else {
                    const sectionSlug = `${partSlug}/${getLinkSlug(chapter)}`;
                    toc += `  - [${chapter.title}](${sectionSlug})\n`;
                }
            }
        } else {
            throw new Error('Invalid book structure: parts must have sections or a conclusion.', part);
        }
    }

    return writeFrontMatter({ title: 'Table of Contents' }) + toc;
}

function getBookStructure(book) {
    // Recursively process the parts of the book, truncate the content for brevity to the first 100 characters
    const out = {...book};
    out.parts = out.parts.map(part => {
        if (part.content) {
            part.content = part.content.slice(0, 100) + '...';
        }
        if (part.sections) {
            part.sections = part.sections.map(section => {
                if (section.sections) {
                    section.sections = section.sections.map(subSection => {
                        if (subSection.content) {
                            subSection.content = subSection.content.slice(0, 100) + '...';
                        }
                        return subSection;
                    });
                } else if (section.content) {
                    section.content = section.content.slice(0, 100) + '...';
                }
                return section;
            });
        }
        return part;
    });
    return out;
}

/**
 * Processes images in the content, copying them to the Hugo static directory and updating URLs.
 * @param {string} content - The markdown content to process.
 * @param {string} sourceDir - The root directory of the source files.
 * @param {string} outputDir - The root directory of the Hugo project.
 * @param {string} relativeOutputPath - The relative path where the markdown file will be in the Hugo structure.
 * @returns {Promise<string>} - The processed content with updated image URLs.
 */
async function processImages(content, sourceDir, outputDir, relativeOutputPath) {
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)|<img[^>]*src=["']([^"']+)["'][^>]*>/g;
    const imageDir = path.join(sourceDir, 'images');
    const staticDir = path.join(outputDir, 'static', 'images');

    let lastIndex = 0;
    let result = '';
    let match;

    while ((match = imageRegex.exec(content)) !== null) {
        const [fullMatch, alt, mdSrc, htmlSrc] = match;
        const imageSrc = mdSrc || htmlSrc;
        const imageName = path.basename(imageSrc);

        // Add the text between the last match and this match
        result += content.slice(lastIndex, match.index);

        // Search for the image in the images directory
        const imagePath = await findImage(imageDir, imageName);

        if (imagePath) {
            // Copy the image to the static directory
            const relativePath = path.relative(imageDir, imagePath);
            const newImagePath = path.join(staticDir, relativePath);
            await fs.mkdir(path.dirname(newImagePath), { recursive: true });
            await fs.copyFile(imagePath, newImagePath);

            // Update the image URL in the content
            const newImageUrl = path.join('/images', relativePath).replace(/\\/g, '/');
            
            if (mdSrc) {
                result += `![${alt}](${newImageUrl})`;
            } else {
                result += fullMatch.replace(htmlSrc, newImageUrl);
            }
        } else {
            // If image not found, keep the original text
            result += fullMatch;
        }

        lastIndex = imageRegex.lastIndex;
    }

    // Add any remaining content after the last match
    result += content.slice(lastIndex);

    return result;
}

/**
 * Recursively searches for an image in the given directory.
 * @param {string} dir - The directory to search in.
 * @param {string} imageName - The name of the image to find.
 * @returns {Promise<string|null>} - The full path of the found image, or null if not found.
 */
async function findImage(dir, imageName) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            const result = await findImage(fullPath, imageName);
            if (result) return result;
        } else if (entry.isFile() && entry.name === imageName) {
            return fullPath;
        }
    }

    return null;
}

const formatTypes = {
    singleFileMarkdown: 'mdfile',
    singleDirectoryBook: 'dirbook',
    jsonStructure: 'jsonStruct',
    hugo: 'hugo'
};

/**
 * Processes the book based on the specified output format.
 * @param {Book} book - The book object to process.
 * @param {string} outputFormat - The desired output format.
 * @param {string} outputPath - The path where the output should be written.
 * @returns {Promise<void>}
 */
async function processBook(book, outputFormat, outputPath) {
    switch (outputFormat) {
        case formatTypes.singleFileMarkdown:
            await writeSingleFileMarkdown(book, outputPath);
            break;
        case formatTypes.singleDirectoryBook:
            await writeSingleDirectoryBook(book, outputPath);
            break;
        case formatTypes.jsonStructure:
            await fs.writeFile(outputPath, JSON.stringify(getBookStructure(book), null, 2));
            break;
        case formatTypes.hugo:
            await writeHugoBook(book, outputPath);
            break;
        default:
            throw new Error('Invalid output format specified.');
    }
}


/**
 * Watches for changes in the source directory and re-runs the book processing.
 * @param {string} rootDir - The root directory to watch.
 * @param {string} outputFormat - The desired output format.
 * @param {string} outputPath - The path where the output should be written.
 */
function watchAndProcess(rootDir, outputFormat, outputPath) {
    const watchPatterns = [
        path.join(rootDir, 'content', '**', '*.md'),
        path.join(rootDir, 'images', '**')
    ];

    const watcher = chokidar.watch(watchPatterns, {
        ignored: /(^|[\/\\])\../, // ignore dotfiles
        persistent: true
    });

    console.log(`Watching for changes in ${rootDir}`);

    const processChanges = async () => {
        console.log('Changes detected, reprocessing...');
        try {
            const book = await loadBook(rootDir);
            await processBook(book, outputFormat, outputPath);
            console.log(`Output regenerated at ${outputPath}`);
        } catch (error) {
            console.error('Error processing changes:', error);
        }
    };
    const debouncedProcessChanges = _.debounce(processChanges, 1000);

    watcher
        .on('add', path => {
            if (path.endsWith('.md')) {
                console.log(`File ${path} has been added`);
                debouncedProcessChanges();
            }
        })
        .on('change', path => {
            if (path.endsWith('.md')) {
                console.log(`File ${path} has been changed`);
                debouncedProcessChanges();
            }
        })
        .on('unlink', path => {
            if (path.endsWith('.md')) {
                console.log(`File ${path} has been removed`);
                debouncedProcessChanges();
            }
        });
}

// Main function
(async () => {
    const argv = yargs
        .positional('root-dir', {
            description: 'The root directory of the source content',
            type: 'string'
        })
        .option('output-format', {
            alias: 'f',
            description: 'Specify the output format',
            choices: Object.values(formatTypes),
            demandOption: true,
            type: 'string'
        })
        .option('output-path', {
            alias: 'o',
            description: 'Specify the output path',
            type: 'string',
            demandOption: true,
        })
        .option('watch', {
            alias: 'w',
            description: 'Watch for changes and reprocess',
            type: 'boolean',
            default: false
        })
        .argv;

    try {
        const rootDir = argv._[0];

        if (!rootDir) {
            throw new Error('Please provide the root directory as a command line argument.');
        }

        const book = await loadBook(rootDir);
        await processBook(book, argv['output-format'], argv['output-path']);
        console.log(`Initial output generated at ${argv['output-path']}`);

        if (argv.watch) {
            watchAndProcess(rootDir, argv['output-format'], argv['output-path']);
        }
    } catch (error) {
        console.error('Error:', error);
    }
})();