const fs = require('fs/promises');
const path = require('path');

async function writeSingleFileMarkdown(book, outputPath) {
    await fs.writeFile(outputPath, '');

    const appendSection = async (section) => {
        let content = section.content;

        if (section.frontMatter && section.frontMatter.gistMap) {
            const gistMap = section.frontMatter.gistMap;

            content = content.replace(/<img[^>]*src=["']([^"']+)["'][^>]*>/g, (match, src) => {
                const filename = path.basename(src);
                if (gistMap[filename]) {
                    return match.replace(src, gistMap[filename]);
                }
                return match;
            });

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

module.exports = {
    writeSingleFileMarkdown
};