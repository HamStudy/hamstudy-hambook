const fs = require('fs/promises');
const path = require('path');
const { formatPoolData } = require('../pool-utils');
const { writeFrontMatter } = require('../utils');

/**
 * Writes book content to a flat directory for audiobook input.
 * - Ignores images
 * - Puts questions json in the same output directory
 * - Skips ToC
 * - All sections as numbered .md files
 * @param {Object} book - The book object with parts and sections
 * @param {string} outputPath - The path to the output directory
 * @param {string} sourcePath - The path to the source directory
 * @param {string|undefined} lang - Language code (e.g., 'es'), or undefined for default
 */
async function writeAudiobookDirectoryBook(book, outputPath, sourcePath, lang = undefined) {
    let fileIndex = 1;
    const outDir = outputPath;
    const sourceDir = path.resolve(sourcePath);

    // Write language-specific questions file
    const poolData = formatPoolData(book.pool, sourceDir);
    const poolFilePath = lang && lang !== 'default'
        ? path.join(outDir, `questions-${lang}.json`)
        : path.join(outDir, 'questions.json');
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(poolFilePath, JSON.stringify(poolData, null, 2));

    const sectionFiles = [];

    const saveSection = async (section, index) => {
        const sanitizedTitle = section.title.replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').toLowerCase();
        // Use .md for default, .<lang>.md for others
        const ext = lang && lang !== 'default' ? `.${lang}.md` : '.md';
        const filename = `${String(index).padStart(2, '0')}-${sanitizedTitle}${ext}`;
        const filePath = path.join(outDir, filename);

        // Add weight to the frontmatter
        const frontMatter = {
            ...section.frontMatter,
            weight: index,
            title: section.title
        };
        const contentWithFrontmatter = writeFrontMatter(frontMatter) + section.content;
        await fs.writeFile(filePath, contentWithFrontmatter);
        sectionFiles.push({ title: section.title, filename });
    };

    const processSections = async (sections) => {
        for (const section of sections) {
            if (section.frontMatter?.epub === false) {
                continue;
            }
            if ('sections' in section && Array.isArray(section.sections)) {
                const intro = (section.sections?.find(s => s.intro));
                if (intro) {
                    await saveSection(intro, fileIndex++);
                    section.sections = section.sections.filter(s => !s.intro);
                }
                if (section.sections.length > 0) {
                    await processSections(section.sections);
                }
            } else {
                await saveSection(section, fileIndex++);
            }
        }
    };

    await processSections(book.parts);

    if (book.conclusion) {
        await saveSection(book.conclusion, fileIndex++);
    }

    // Write a metadata file
    const metadata = {
        title: book.toc?.title || "Book Title",
        author: book.toc?.frontMatter?.author || "Unknown Author",
        sections: sectionFiles,
        date: new Date().toISOString().split('T')[0],
        language: book.toc?.frontMatter?.language || "en-US"
    };
    await fs.writeFile(
        path.join(outDir, 'book.json'),
        JSON.stringify(metadata, null, 2)
    );

    return {
        sections: sectionFiles,
        metadata
    };
}

module.exports = {
    writeAudiobookDirectoryBook
};
