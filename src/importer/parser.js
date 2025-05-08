const fs = require('fs/promises');
const path = require('path');
const yaml = require('yaml');
const { toTitleCase } = require('./utils');

async function parseMarkdownFile(filePath, contentDir) {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const frontMatterMatch = /^---\n([\s\S]*?)\n---/.exec(fileContent);
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
            title = firstNotBlankLine.replace(/^#+\s*/, '');
        } else {
            const filename = path.basename(filePath, '.md').replace(/-/g, ' ');
            title = toTitleCase(filename);
        }

        frontMatter.title = title;
    }

    // Add filePath relative to contentDir
    let relPath = filePath;
    if (contentDir) {
        relPath = path.relative(contentDir, filePath);
    }

    return { title, content, frontMatter, filePath: relPath };
}

async function processDirectory(dirPath, contentDir) {    
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    const sortedEntries = entries.sort((a, b) => a.name.localeCompare(b.name));
    const chapters = [];
    let sections = [];
    let introSection = null;
    let conclusionSection = null;

    for (const entry of sortedEntries) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
            const chapterSections = await processDirectory(fullPath, contentDir);
            const chapter = {
                title: entry.name,
                sections: chapterSections,
            };
            chapters.push(chapter);
        } else if (entry.isFile() && entry.name.endsWith('.md')) {
            const section = await parseMarkdownFile(fullPath, contentDir);
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

async function loadBook(rootDir) {
    const contentDir = path.join(rootDir, 'content');
    const tocPath = path.join(contentDir, 'toc.md');
    const toc = await parseMarkdownFile(tocPath, contentDir);
    const parts = await processDirectory(contentDir, contentDir);

    const poolFilePath = path.join(rootDir, 'pool.json');
    const poolFileContent = await fs.readFile(poolFilePath, 'utf8');
    const pool = JSON.parse(poolFileContent);

    return { toc, parts, pool };
}

/**
 * Loads all multilingual book versions from content* directories, checks structure and question consistency.
 * Throws if any translation is missing files or has mismatched questions.
 * Returns: { [lang]: { toc, parts, pool } }
 */
async function loadMultilingualBook(rootDir) {
    const dirEntries = await fs.readdir(rootDir, { withFileTypes: true });
    const contentDirs = dirEntries
        .filter(e => e.isDirectory() && /^content(\.[a-z]{2})?$/.test(e.name))
        .map(e => e.name);
    if (!contentDirs.includes('content')) {
        throw new Error('Default content directory missing');
    }
    // Load all pools (default and per-language if present)
    const poolFiles = dirEntries.filter(e => e.isFile() && /^pool(\.[a-z]{2})?\.json$/.test(e.name));
    const pools = {};
    for (const pf of poolFiles) {
        const lang = pf.name === 'pool.json' ? 'default' : pf.name.match(/^pool\.([a-z]{2})\.json$/)[1];
        const poolFileContent = await fs.readFile(path.join(rootDir, pf.name), 'utf8');
        pools[lang] = JSON.parse(poolFileContent);
    }
    // Load all books
    const books = {};
    for (const dir of contentDirs) {
        const lang = dir === 'content' ? 'default' : dir.match(/^content\.([a-z]{2})$/)[1];
        const contentDir = path.join(rootDir, dir);
        const tocPath = path.join(contentDir, 'toc.md');
        const toc = await parseMarkdownFile(tocPath, contentDir);
        const parts = await processDirectory(contentDir, contentDir);
        books[lang] = { toc, parts, pool: pools[lang] || pools['default'] };
    }
    // Compare structure and questions
    function compareParts(baseParts, transParts, basePath = '') {
        if (baseParts.length !== transParts.length) {
            throw new Error(`Structure mismatch at ${basePath}: different number of parts/sections`);
        }
        for (let i = 0; i < baseParts.length; ++i) {
            const base = baseParts[i];
            const trans = transParts[i];
            const curPath = basePath + '/' + (base.title || '');
            if (base.sections && trans.sections) {
                compareParts(base.sections, trans.sections, curPath);
            } else if (!base.sections && !trans.sections) {
                // Compare questions in frontmatter
                const bq = base.frontMatter?.questions || [];
                const tq = trans.frontMatter?.questions || [];
                if (JSON.stringify(bq) !== JSON.stringify(tq)) {
                    throw new Error(`Question mismatch at ${curPath}`);
                }
            } else {
                throw new Error(`Structure mismatch at ${curPath}`);
            }
        }
    }
    const base = books['default'];
    for (const [lang, book] of Object.entries(books)) {
        if (lang === 'default') continue;
        compareParts(base.parts, book.parts);
    }
    return books;
}

module.exports = {
    parseMarkdownFile,
    processDirectory,
    loadBook,
    loadMultilingualBook
};