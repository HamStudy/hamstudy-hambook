const fs = require('fs/promises');
const path = require('path');
const { formatPoolData } = require('../pool-utils');
const { writeFrontMatter } = require('../utils');

async function loadSpokenOverrides(sourceDir, lang) {
    const candidates = [];
    if (lang && lang !== 'default') {
        candidates.push(path.join(sourceDir, `pool.spoken.${lang}.json`));
    }
    candidates.push(path.join(sourceDir, 'pool.spoken.json'));

    for (const candidatePath of candidates) {
        try {
            const raw = await fs.readFile(candidatePath, 'utf8');
            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== 'object' || !parsed.questions || typeof parsed.questions !== 'object' || Array.isArray(parsed.questions)) {
                return {};
            }
            return parsed.questions;
        } catch (error) {
            if (error && typeof error === 'object' && error.code === 'ENOENT') {
                continue;
            }
            throw error;
        }
    }

    return {};
}

function applySpokenOverrides(poolData, spokenOverrides) {
    if (!poolData || typeof poolData !== 'object' || !poolData.questions || typeof poolData.questions !== 'object') {
        return;
    }

    for (const [questionId, override] of Object.entries(spokenOverrides || {})) {
        if (!override || typeof override !== 'object') {
            continue;
        }

        const target = poolData.questions[questionId];
        if (!target || typeof target !== 'object') {
            continue;
        }

        if (typeof override.questionReadAs === 'string' && override.questionReadAs.trim()) {
            target.questionReadAs = override.questionReadAs.trim();
        }

        if (override.answerReadAs && typeof override.answerReadAs === 'object' && !Array.isArray(override.answerReadAs)) {
            const answerReadAs = {};
            for (const [answerId, text] of Object.entries(override.answerReadAs)) {
                if (typeof text === 'string' && text.trim()) {
                    answerReadAs[answerId] = text.trim();
                }
            }
            if (Object.keys(answerReadAs).length > 0) {
                target.answerReadAs = answerReadAs;
            }
        }
    }
}

async function fileExists(filePath) {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
}

function getRootIndexSection(book) {
    return (book.parts || []).find(section => section?.filePath === 'index.md' && !Array.isArray(section?.sections)) || null;
}

function extractFirstMarkdownImagePath(content) {
    if (typeof content !== 'string') {
        return null;
    }
    const match = content.match(/!\[[^\]]*\]\(([^)]+)\)/);
    if (!match || !match[1]) {
        return null;
    }
    const rawPath = match[1].trim();
    if (!rawPath || /^https?:\/\//i.test(rawPath)) {
        return null;
    }
    return rawPath;
}

async function copyCoverImageIntoOutput(sourceDir, outDir, rootIndexSection) {
    const rootFrontMatter = rootIndexSection?.frontMatter || {};
    const configured = rootFrontMatter.coverImage || rootFrontMatter.cover || extractFirstMarkdownImagePath(rootIndexSection?.content);
    const candidates = configured
        ? [configured]
        : ['cover.jpg', 'cover.jpeg', 'cover.png', 'book-cover.jpg', 'book-cover.jpeg', 'book-cover.png'];

    for (const candidate of candidates) {
        const sourceCoverPath = path.isAbsolute(candidate)
            ? candidate
            : path.resolve(sourceDir, candidate);
        if (!(await fileExists(sourceCoverPath))) {
            continue;
        }

        const fileName = path.basename(sourceCoverPath);
        const targetCoverPath = path.join(outDir, fileName);
        if (path.resolve(sourceCoverPath) !== path.resolve(targetCoverPath)) {
            await fs.copyFile(sourceCoverPath, targetCoverPath);
        }
        return fileName;
    }

    return null;
}

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
    const spokenOverrides = await loadSpokenOverrides(sourceDir, lang);
    applySpokenOverrides(poolData, spokenOverrides);
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

    const rootIndexSection = getRootIndexSection(book);
    const rootFrontMatter = rootIndexSection?.frontMatter || {};
    const titleBase = rootFrontMatter.title || rootIndexSection?.title || book.toc?.title || "Book Title";
    const subtitle = typeof rootFrontMatter.subtitle === 'string' && rootFrontMatter.subtitle.trim()
        ? rootFrontMatter.subtitle.trim()
        : '';
    const metadataTitle = subtitle ? `${titleBase} (${subtitle})` : titleBase;
    const coverImage = await copyCoverImageIntoOutput(sourceDir, outDir, rootIndexSection);
    const tocFrontMatter = book.toc?.frontMatter || {};

    // Write a metadata file
    const metadata = {
        title: metadataTitle,
        author: rootFrontMatter.author || "",
        sections: sectionFiles,
        date: rootFrontMatter.date || new Date().toISOString().split('T')[0],
        language: rootFrontMatter.language || tocFrontMatter.language || "en-US",
        publisher: rootFrontMatter.publisher || "",
        genre: rootFrontMatter.genre || "",
        comment: rootFrontMatter.comment || "",
        album: rootFrontMatter.album || "",
        coverImage: coverImage || "",
        m4bProfiles: (rootFrontMatter.m4bProfiles && typeof rootFrontMatter.m4bProfiles === 'object' && !Array.isArray(rootFrontMatter.m4bProfiles))
            ? rootFrontMatter.m4bProfiles
            : {}
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
