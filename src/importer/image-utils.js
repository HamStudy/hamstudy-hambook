const fs = require('fs/promises');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

// Map of original image file location to the processed image file location
const imgCache = {};
const imagesSeen = new Set();

/**
 * Recursively searches for an image in a directory
 * @param {string} dir - The directory to search in
 * @param {string} imageName - The name of the image to find
 * @returns {Promise<string|null>} - The path to the image if found, null otherwise
 */
async function findImage(dir, imageName) {
    try {
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
    } catch (error) {
        console.error(`Error searching for image in ${dir}:`, error);
    }

    return null;
}

/**
 * Uses `magick identify -format '%w %h' to get image dimentions
 * @param {string} imagePath 
 */
async function getImageInfo(imagePath) {
    try {
        const { stdout } = await execPromise(`magick identify -format "%m %w %h" "${imagePath}"`);
        const [format, width, height] = stdout.trim().split(' ');
        return { format, width: parseInt(width), height: parseInt(height) };
    } catch (error) {
        console.error(`Error getting image info: ${imagePath}`, error);
        return null;
    }
}

const mediaTypes = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.css': 'text/css',
    '.xhtml': 'application/xhtml+xml',
    '.html': 'application/xhtml+xml',
    '.ncx': 'application/x-dtbncx+xml'
};

/**
 * Get the media type for a file based on its extension
 * @param {string} filename - The filename to check
 * @returns {string} - The media type
 */
function getMediaType(filename) {
    const ext = path.extname(filename).toLowerCase();
    
    return mediaTypes[ext] || 'application/octet-stream';
}


/**
 * Converts a PNG image to SVG using inkscape
 * @param {string} sourcePath - The source image path
 * @param {string} destPath - The destination image path
 * @returns {Promise<string>} - The path to the converted image
 */
async function convertPngToSvg(sourcePath, destPath) {
    try {
        // First get the width and height
        const { format, width, height } = await getImageInfo(sourcePath);

        if (format !== 'SVG') {
            throw new Error("This is not an SVG");
        }

        await execPromise(`inkscape "${sourcePath}" --export-filename="${destPath}" --export-type=png`);
        return destPath;
    } catch (error) {
        console.error(`Error converting PNG to SVG: ${sourcePath}`, error);
        return sourcePath;
    }
}

/**
 * Checks if a file exists and is a file (not a directory)
 * @param {string} filePath - The path to check
 * @returns {Promise<boolean>} - True if the path exists and is a file
 */
async function fileExists(filePath) {
    try {
      const stats = await fs.stat(filePath);
      return stats.isFile();
    } catch (error) {
      // File doesn't exist or other error
      return false;
    }
  }

/**
 * Default image processor; does nothing, just returns the source path
 * @param {string} sourcePath - The source image path
 * @param {string} destPath - The destination image path
 * @param {Object} options - Processing options
 * @returns {Promise<string>} - The path to the processed image
 */
async function defaultImageProcessor(sourcePath, destPath, options = {}) {
    return sourcePath;
}

/**
 * Processes images in content, copying and converting them as needed.
 * If an SVG image is converted to a PNG, both images are copied and the HTML is rewritten
 * to use an <object> with a PNG fallback.
 * @param {string} content - The markdown or HTML content.
 * @param {string} sourceDir - The source directory to search for images.
 * @param {string} outputDir - The output directory where processed images will be stored.
 * @param {string} relativePath - The relative path from output directory to the content file's directory.
 * @param {Object} options - Processing options.
 * @param {Function} [options.preprocess] - Optional function to preprocess images (sourcePath, destPath) => Promise<newDestPath>
 * @returns {Promise<string>} - The processed content with updated image paths.
 */
async function processImages(content, sourceDir, outputDir, relativePath = '/images', options = {}) {
    // Matches markdown images or HTML <img> tags.
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)|<img\b[^>]*src=["']([^"']+)["'][^>]*>/g;
    const imageDir = path.join(sourceDir, 'images');
    const imagesOutputDir = path.join(outputDir, options.imagesDir || 'images');
    
    // Use provided processor or default.
    const imageProcessor = options.preprocess || defaultImageProcessor;
    let lastIndex = 0;
    let result = '';
    let match;

    while ((match = imageRegex.exec(content)) !== null) {
        const [fullMatch, mdAlt, mdSrc, htmlSrc] = match;
        const imageSrc = mdSrc || htmlSrc;
        const imageName = path.basename(imageSrc);

        // Append any content before this match.
        result += content.slice(lastIndex, match.index);

        // Extract alt text.
        let altText = '';
        if (mdSrc) {
            altText = mdAlt;
        } else {
            const altMatch = fullMatch.match(/alt=["']([^"']*)["']/);
            altText = altMatch ? altMatch[1] : '';
        }
        // Extract style attribute if present.
        let styleAttr = '';
        const styleMatch = fullMatch.match(/style=["']([^"']+)["']/);
        if (styleMatch) {
            styleAttr = ` style="${styleMatch[1]}"`;
        }

        const imagePath = await findImage(imageDir, imageName);

        if (imagePath && imgCache[imagePath]) {
            // Use cached result.
            const cached = imgCache[imagePath];
            result += cached;
        } else if (imagePath) {
            const { ext: originalExt } = path.parse(imagePath);
            let newImagePath = path.join(imagesOutputDir, imageName);

            // Ensure output directory exists.
            await fs.mkdir(path.dirname(newImagePath), { recursive: true });
            let n = 1;
            while (imagesSeen.has(newImagePath)) {
                const { name, ext } = path.parse(newImagePath);
                newImagePath = path.join(imagesOutputDir, `${name}-${n}${ext}`);
                n++;
            }

            // Process image (may convert its format).
            let processedImagePath = await imageProcessor(imagePath, newImagePath, options);
            const { ext: processedExt } = path.parse(processedImagePath);
            
            // Update newImagePath if extension changed.
            if (processedExt !== originalExt) {
                const { name } = path.parse(imagePath);
                newImagePath = path.join(imagesOutputDir, `${name}${processedExt}`);
            }

            // If an SVG was converted to PNG, copy both files and output an <object> snippet.
            if (originalExt.toLowerCase() === '.svg' && processedExt.toLowerCase() === '.png') {
                const baseName = path.parse(imageName).name;
                let svgOutputPath = path.join(imagesOutputDir, `${baseName}.svg`);
                let pngOutputPath = path.join(imagesOutputDir, `${baseName}.png`);

                await fs.mkdir(path.dirname(svgOutputPath), { recursive: true });
                await fs.mkdir(path.dirname(pngOutputPath), { recursive: true });

                // Ensure unique filenames.
                n = 1;
                let uniqueSvgOutputPath = svgOutputPath;
                while (imagesSeen.has(uniqueSvgOutputPath)) {
                    uniqueSvgOutputPath = path.join(imagesOutputDir, `${baseName}-${n}.svg`);
                    n++;
                }
                svgOutputPath = uniqueSvgOutputPath;

                n = 1;
                let uniquePngOutputPath = pngOutputPath;
                while (imagesSeen.has(uniquePngOutputPath)) {
                    uniquePngOutputPath = path.join(imagesOutputDir, `${baseName}-${n}.png`);
                    n++;
                }
                pngOutputPath = uniquePngOutputPath;

                // Copy both files.
                await fs.copyFile(imagePath, svgOutputPath);
                await fs.copyFile(processedImagePath, pngOutputPath);
                imagesSeen.add(svgOutputPath);
                imagesSeen.add(pngOutputPath);

                // Generate relative URLs.
                const svgUrl = path.join(relativePath, path.relative(imagesOutputDir, svgOutputPath)).replace(/\\/g, '/');
                const pngUrl = path.join(relativePath, path.relative(imagesOutputDir, pngOutputPath)).replace(/\\/g, '/');

                // Optionally, call imageCallback for both.
                if (options.imageCallback && typeof options.imageCallback === 'function') {
                    const mediaTypeSvg = getMediaType(svgOutputPath);
                    const mediaTypePng = getMediaType(pngOutputPath);
                    options.imageCallback(imagePath, svgOutputPath, mediaTypeSvg);
                    options.imageCallback(imagePath, pngOutputPath, mediaTypePng);
                }

                // Build snippet that replaces the entire tag.
                const snippet = `<object data="${svgUrl}" type="image/svg+xml"${styleAttr}>` +
                                `<img src="${pngUrl}" alt="${altText}" />` +
                                `</object>`;
                result += snippet;
                imgCache[imagePath] = snippet;
            } else {
                // For non-conversion cases, copy the file and rebuild the tag.
                await fs.copyFile(processedImagePath, newImagePath);
                imagesSeen.add(newImagePath);
                const newImageUrl = path.join(relativePath, path.relative(imagesOutputDir, newImagePath)).replace(/\\/g, '/');

                let replacement;
                if (mdSrc) {
                    // For markdown, rebuild the markdown syntax.
                    replacement = `![${altText}](${newImageUrl})`;
                } else {
                    // For HTML, rebuild a new <img> tag rather than replacing just the src attribute.
                    replacement = fullMatch.replace(htmlSrc, newImageUrl);
                }
                result += replacement;
                imgCache[imagePath] = replacement;
            }
        } else {
            // If the image wasn't found, leave the match unchanged.
            result += fullMatch;
        }

        lastIndex = imageRegex.lastIndex;
    }

    result += content.slice(lastIndex);
    return result;
}


module.exports = {
    findImage,
    processImages,
    defaultImageProcessor,
    convertPngToSvg,
};