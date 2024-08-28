const fs = require('fs/promises');
const path = require('path');

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
                await processSections(section.sections);
            } else {
                await saveSection(section, fileIndex++);
            }
        }
    };

    await fs.mkdir(outputPath, { recursive: true });

    await processSections(book.parts);

    if (book.conclusion) {
        await saveSection(book.conclusion, fileIndex++);
    }
}

module.exports = {
    writeSingleDirectoryBook
};
