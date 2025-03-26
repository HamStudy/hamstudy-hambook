const fs = require('fs/promises');
const path = require('path');
const { writeFrontMatter, getTitleSlug, adjustMarkdownHeaders, getLinkSlug } = require('../utils');
const { processImages } = require('../image-utils');

async function writeHugoBook(book, outputPath, sourcePath) {
    const contentPath = path.join(outputPath, 'content', 'docs');
    const sourceDir = path.resolve(sourcePath);

    const imagesDir = path.join(outputPath, 'static');
    const imagesRelDir = path.join(outputPath, 'images');

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

            introContent = await processImages(introContent, sourceDir, imagesDir, path.relative(chapterPath, imagesRelDir));
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

                sectionContent = await processImages(sectionContent, sourceDir, imagesDir, path.relative(chapterPath, imagesRelDir));
                sectionContent = adjustMarkdownHeaders(sectionContent);

                section.filename = sectionFileName;
                await fs.writeFile(path.join(chapterPath, `${sectionFileName}.md`), sectionContent);
            }
            sectionIndex++;
        }
    };

    let partIndex = 1;
    for (const part of book.parts) {
        if (part.conclusion) {
            let conclusionContent = writeFrontMatter({
                title: part.title,
                weight: partIndex,
                ...part.frontMatter || {},
            }) + part.content;

            conclusionContent = await processImages(conclusionContent, sourceDir, imagesDir, path.relative(contentPath, imagesRelDir));
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
    let toc = '# Table of Contents\n\n';

    for (const part of book.parts) {
        const partSlug = getLinkSlug(part);
        if (part.intro) { 
            continue;
        } else if (part.conclusion) {
            toc += `- [Conclusion](${getLinkSlug(part)})\n`;
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

module.exports = {
    writeHugoBook
};
