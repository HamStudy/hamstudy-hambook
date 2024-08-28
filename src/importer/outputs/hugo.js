const fs = require('fs/promises');
const path = require('path');
const { writeFrontMatter, getTitleSlug, adjustMarkdownHeaders, getLinkSlug } = require('../utils');

async function writeHugoBook(book, outputPath) {
    const contentPath = path.join(outputPath, 'content', 'docs');
    const sourceDir = path.dirname(outputPath);

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

            introContent = await processImages(introContent, sourceDir, outputPath, path.relative(outputPath, chapterPath));
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

                sectionContent = await processImages(sectionContent, sourceDir, outputPath, path.relative(outputPath, chapterPath));
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

            conclusionContent = await processImages(conclusionContent, sourceDir, outputPath, path.relative(outputPath, contentPath));
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

        result += content.slice(lastIndex, match.index);

        const imagePath = await findImage(imageDir, imageName);

        if (imagePath) {
            const relativePath = path.relative(imageDir, imagePath);
            const newImagePath = path.join(staticDir, relativePath);
            await fs.mkdir(path.dirname(newImagePath), { recursive: true });
            await fs.copyFile(imagePath, newImagePath);

            const newImageUrl = path.join('/images', relativePath).replace(/\\/g, '/');

            if (mdSrc) {
                result += `![${alt}](${newImageUrl})`;
            } else {
                result += fullMatch.replace(htmlSrc, newImageUrl);
            }
        } else {
            result += fullMatch;
        }

        lastIndex = imageRegex.lastIndex;
    }

    result += content.slice(lastIndex);

    return result;
}

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

module.exports = {
    writeHugoBook
};