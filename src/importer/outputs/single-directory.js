const fs = require('fs/promises');
const path = require('path');
const { processImages, convertPngToSvg } = require('../image-utils');
const { formatPoolData } = require('../pool-utils');
const { writeFrontMatter } = require('../utils');

/**
 * 
 * @param {string} sourcePath 
 * @param {string} destPath 
 * @param {Record<string, any>} options 
 */
async function convertToPdfImageProcessor(sourcePath, destPath, options = {}) {
    const TmpFile = (await import('tempfile')).default;

    if (sourcePath.endsWith('.svg')) {
        const outFile = TmpFile({ extension: 'png' });
        await convertPngToSvg(sourcePath, outFile);
        return outFile;
    } else {
        return sourcePath;
    }
}

/**
 * Writes book content to a Hugo project structure
 * @param {Object} book - The book object with parts and sections
 * @param {string} outputPath - The path to the Hugo project root
 * @param {string} sourcePath - The path to the source directory
 */
async function writeSingleDirectoryBook(book, outputPath, sourcePath) {
    let fileIndex = 1;
    const contentDir = path.join(outputPath, 'content');
    const staticDir = path.join(outputPath, 'static', 'OEBPS');
    const imagesOutputDir = path.join(staticDir, 'images');
    const dataDir = path.join(outputPath, 'data');
    const sourceDir = path.resolve(sourcePath);

    const poolData = await formatPoolData(book.pool, sourceDir);
    const poolFilePath = path.join(dataDir, 'questions.json');
    await fs.writeFile(poolFilePath, JSON.stringify(poolData, null, 2));
    
    // Create the necessary directories
    await fs.mkdir(contentDir, { recursive: true });
    await fs.mkdir(imagesOutputDir, { recursive: true });
    await fs.mkdir(dataDir, { recursive: true });
    
    // Keep track of processed images
    const processedImages = [];

    const saveSection = async (section, index) => {
        const sanitizedTitle = section.title.replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').toLowerCase();
        const filename = `${String(index).padStart(2, '0')}-${sanitizedTitle}.md`;
        const filePath = path.join(contentDir, filename);
        
        // Add weight to the frontmatter
        const frontMatter = {
            ...section.frontMatter,
            weight: index,
            title: section.title
        };
        
        // Create content with frontmatter
        const contentWithFrontmatter = writeFrontMatter(frontMatter) + section.content;
        
        // Process the content to handle images and collect image info
        const processedContent = await processImages(contentWithFrontmatter, sourceDir, outputPath, 'images', {
            imagesDir: path.relative(outputPath, imagesOutputDir),
            urlPrefix: 'images',
            preprocess: convertToPdfImageProcessor,
            imageCallback: (imagePath, imgOutPath, mediaType) => {
                // Add to processed images list if not already included
                const relativePath = path.relative(path.join(imagesOutputDir, '..'), imgOutPath);
                const imageId = relativePath.replace(/[^a-zA-Z0-9]/g, '-');
                
                // Check if this image is already in the list
                if (!processedImages.some(img => img.id === imageId)) {
                    processedImages.push({
                        id: imageId,
                        path: relativePath,
                        mediaType
                    });
                }
            }
        });
        
        await fs.writeFile(filePath, processedContent);
        return filename;
    };

    // Table of contents content
    let tocContent = "";
    const sectionFiles = [];

    const processSections = async (sections, level = 0) => {
        const indent = '    '.repeat(level);
        let n = 1;
        for (const section of sections) {
            if ('sections' in section && Array.isArray(section.sections)) {
                const intro = (section.sections?.find(s => s.intro));
                // Add a header for this section group
                if (intro) {
                    const title = section.title.replace(/[0-9]+\. /, '');
                    const filename = await saveSection(intro, fileIndex++);
                    tocContent += `${indent}${n++}. [${title}]({{% booklink "${filename}" %}})\n`;
                    sectionFiles.push({ title: section.title, filename });
                    section.sections = section.sections.filter(s => !s.intro);
                } else {
                    tocContent += `${indent}${n++}. ${section.title}\n`;
                }

                // Process subsections
                await processSections(section.sections, level + 1);
            } else {
                // Save the section and add to TOC
                const filename = await saveSection(section, fileIndex++);
                tocContent += `${indent}${n++}. [${section.title}]({{% booklink "${filename}" %}})\n`;
                sectionFiles.push({ title: section.title, filename });
            }
        }
    };

    await processSections(book.parts);

    if (book.conclusion) {
        const filename = await saveSection(book.conclusion, fileIndex++);
        tocContent += `- [${book.conclusion.title}](${filename})\n`;
        sectionFiles.push({ title: book.conclusion.title, filename });
    }

    // Write the table of contents with frontmatter
    const tocFrontMatter = {
        title: "Table of Contents",
        weight: 0,
        layout: "toc",
    };
    const tocWithFrontMatter = writeFrontMatter(tocFrontMatter) + tocContent;
    await fs.writeFile(path.join(contentDir, '00-table-of-contents.md'), tocWithFrontMatter);
    
    // Write a metadata file that can be used for EPUB generation
    const metadata = {
        title: book.toc?.title || "Book Title",
        author: book.toc?.frontMatter?.author || "Unknown Author",
        sections: sectionFiles,
        date: new Date().toISOString().split('T')[0],
        language: book.toc?.frontMatter?.language || "en-US"
    };
    
    // Write bookImages.json for EPUB generation
    await fs.writeFile(
        path.join(dataDir, 'bookImages.json'),
        JSON.stringify(processedImages, null, 2)
    );
    
    await fs.writeFile(
        path.join(dataDir, 'book.json'), 
        JSON.stringify(metadata, null, 2)
    );
    
    await fs.mkdir(path.join(outputPath, 'data'), { recursive: true });
    
    return {
        tocFile: '00-table-of-contents.md',
        sections: sectionFiles,
        metadata,
        images: processedImages
    };
}

module.exports = {
    writeSingleDirectoryBook
};
