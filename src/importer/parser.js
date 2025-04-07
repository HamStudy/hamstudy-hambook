const fs = require('fs/promises');
const path = require('path');
const yaml = require('yaml');
const { toTitleCase } = require('./utils');

async function parseMarkdownFile(filePath) {
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

    return { title, content, frontMatter };
}

async function processDirectory(dirPath) {    
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    const sortedEntries = entries.sort((a, b) => a.name.localeCompare(b.name));
    const chapters = [];
    let sections = [];
    let introSection = null;
    let conclusionSection = null;

    for (const entry of sortedEntries) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
            const chapterSections = await processDirectory(fullPath);
            const chapter = {
                title: entry.name,
                sections: chapterSections,
            };
            chapters.push(chapter);
        } else if (entry.isFile() && entry.name.endsWith('.md')) {
            const section = await parseMarkdownFile(fullPath);
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
    const toc = await parseMarkdownFile(tocPath);
    const parts = await processDirectory(contentDir);

    const poolFilePath = path.join(rootDir, 'pool.json');
    const poolFileContent = await fs.readFile(poolFilePath, 'utf8');
    const pool = JSON.parse(poolFileContent);

    return { toc, parts, pool };
}

module.exports = {
    parseMarkdownFile,
    processDirectory,
    loadBook
};