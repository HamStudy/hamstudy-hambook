const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');
const { writeFrontMatter, getTitleSlug, adjustMarkdownHeaders, getLinkSlug } = require('../utils');
const { processImages } = require('../image-utils');
const { formatPoolData } = require('../pool-utils');

const hugoRelImgPath = '/images';

/**
 * Writes all multilingual book versions to the correct Hugo content subdirectories.
 * @param {Object} books - { [lang]: { toc, parts, pool } }
 * @param {string} outputPath - Hugo project root
 * @param {string} sourcePath - Source root
 */
async function writeHugoMultilingualBook(books, outputPath, sourcePath) {
    // Assign translationKey using filePath (relative to content dir) for each section/part
    for (const [lang, book] of Object.entries(books)) {
        function assignKeys(parts) {
            for (const part of parts) {
                if (part.filePath) {
                    part.frontMatter = part.frontMatter || {};
                    if (part.frontMatter.translationKey) {
                        console.warn('Translation key already exists:', part.frontMatter.translationKey, 'for', part.filePath);
                    }
                    part.frontMatter.translationKey = crypto.createHash('md5').update(part.filePath).digest('hex');
                    console.log('Assigning translationKey:', part.frontMatter.translationKey, `for ${lang} filePath:`, part.filePath);
                } else {
                    // console.warn('Missing filePath for part:', part);
                }
                if (part.sections) assignKeys(part.sections);
            }
        }
        assignKeys(book.parts);
    }
    for (const [lang, book] of Object.entries(books)) {
        const langDir = lang === 'default' ? 'content' : `content.${lang}`;
        const outContentPath = path.join(outputPath, langDir);
        await writeHugoBook(book, outputPath, sourcePath, outContentPath);
    }
}

// Patch: allow custom content path for multilingual
async function writeHugoBook(book, outputPath, sourcePath, customContentPath) {
    const contentPath = customContentPath || path.join(outputPath, 'content');
    const sourceDir = path.resolve(sourcePath);
    const dataDir = path.join(outputPath, 'data');

    const imagesDir = path.join(outputPath, 'static');
    const imagesRelDir = path.join(imagesDir, 'images');

    // Create data directory and write questions.json
    await fs.mkdir(dataDir, { recursive: true });
    const poolData = await formatPoolData(book.pool, sourceDir);
    const poolFilePath = path.join(dataDir, 'questions.json');
    await fs.writeFile(poolFilePath, JSON.stringify(poolData, null, 2));

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

            introContent = await processImages(introContent, sourceDir, imagesDir, hugoRelImgPath);
            introContent = adjustMarkdownHeaders(introContent);

            introContent.filename = '_index';
            await fs.writeFile(path.join(chapterPath, '_index.md'), introContent);
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

                sectionContent = await processImages(sectionContent, sourceDir, imagesDir, hugoRelImgPath);
                sectionContent = adjustMarkdownHeaders(sectionContent);

                section.filename = sectionFileName;
                await fs.writeFile(path.join(chapterPath, `${sectionFileName}.md`), sectionContent);
            }
            sectionIndex++;
        }
    };

    let partIndex = 1;

    for (const part of book.parts.filter(part => !part.intro)) {
        if (part.conclusion) {
            let conclusionContent = writeFrontMatter({
                title: part.title,
                weight: partIndex,
                ...part.frontMatter || {},
            }) + part.content;

            conclusionContent = await processImages(conclusionContent, sourceDir, imagesDir, hugoRelImgPath);
            conclusionContent = adjustMarkdownHeaders(conclusionContent);

            part.filename = `conclusion`;
            await fs.writeFile(path.join(contentPath, `${part.filename}.md`), conclusionContent);
        } else if (part.sections) {
            await writeChapter(part, contentPath, partIndex);
        } else {
            throw new Error('Invalid book structure: parts must have sections or a conclusion.', part);
        }
        partIndex++;
    }

    const tocContent = generateTableOfContents(book);
    await fs.writeFile(path.join(contentPath, '_index.md'), tocContent);
}

function generateTableOfContents(book) {
    const intro = book.parts.find(part => part.intro);
    const frontMatter = {
        title: 'Table of Contents',
        ...(intro?.frontMatter || {}),
    };

    let toc = (intro?.content || '# Table of Contents') + '\n\n';

    const parts = book.parts.filter(part => !part.intro);
    for (const part of parts) {
        const partSlug = getLinkSlug(part);
        if (part.intro) { 
            continue;
        } else if (part.conclusion) {
            toc += `- [Conclusion]({{< relref "${getLinkSlug(part)}" >}})\n`;
            continue;
        }
        toc += `- [${part.title}](${partSlug}/)\n`;

        if ('sections' in part) {
            for (const chapter of part.sections) {
                if (chapter.intro) { 
                    continue;
                }
                if ('sections' in chapter) {
                    const chapterSlug = `${partSlug}/${getLinkSlug(chapter)}`;
                    toc += `  - [${chapter.title}]({{% relref "${chapterSlug}" %}})\n`;

                    for (const section of chapter.sections) {
                        if (!section.intro) {
                            const sectionSlug = `${chapterSlug}/${getLinkSlug(section)}`;
                            toc += `    - [${section.title}]({{% relref "${sectionSlug}" %}})\n`;
                        }
                    }
                } else {
                    const sectionSlug = `${partSlug}/${getLinkSlug(chapter)}`;
                    toc += `  - [${chapter.title}]({{% relref "${sectionSlug}" %}})\n`;
                }
            }
        } else {
            throw new Error('Invalid book structure: parts must have sections or a conclusion.', part);
        }
    }

    return writeFrontMatter(frontMatter) + toc;
}

module.exports = {
    writeHugoBook,
    writeHugoMultilingualBook
};
