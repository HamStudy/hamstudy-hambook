const path = require('path');
const yaml = require('yaml');

function toTitleCase(str) {
    const minorWords = ['and', 'or', 'the', 'a', 'an', 'in', 'on', 'at', 'to', 'by', 'with', 'of', 'for', 'but', 'nor'];
    return str
        .split(' ')
        .map((word, index, arr) => {
            if (index === 0 || index === arr.length - 1 || !minorWords.includes(word.toLowerCase())) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
            return word.toLowerCase();
        })
        .join(' ');
}

function writeFrontMatter(data) {
    return '---\n' + yaml.stringify(data) + '---\n\n';
}

function getTitleSlug(chapterOrSection) {
    const intro = (chapterOrSection.sections || []).find(s => s.intro);
    if (intro) {
        const src = intro.frontMatter?.slug || intro.title;
        return src.replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').toLowerCase();
    } else {
        const title = chapterOrSection.frontMatter?.slug || chapterOrSection.title;
        return title.replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').toLowerCase();
    }
}

function adjustMarkdownHeaders(markdown) {
    const headers = [...markdown.matchAll(/^#+\s.*$/gm)];

    if (!headers.length) {
        return markdown;
    }

    let minLevel = Math.min(...headers.map(header => header[0].match(/^#+/)[0].length));

    let targetLevel = 1;
    if (minLevel > 1) {
        const h1s = headers.filter(header => header[0].match(/^#+/)[0].length === minLevel);
        if (h1s.length > 1) {
            targetLevel = 2;
        }
    }

    if (minLevel > targetLevel) {
        return reduceHeadingLevels(markdown, minLevel - targetLevel);
    } else {
        return markdown;
    }
}

function reduceHeadingLevels(content, level) {
    return content.replace(/(^#+)/gm, (match, p1) => {
        const newLevel = Math.max(1, p1.length - level);
        return '#'.repeat(newLevel);
    });
}

function getLinkSlug(chapterOrSection) {
    return chapterOrSection.frontMatter?.slug || path.basename(chapterOrSection.filename, '.md');
}

function getBookStructure(book) {
    const out = {...book};
    out.parts = out.parts.map(part => {
        if (part.content) {
            part.content = part.content.slice(0, 100) + '...';
        }
        if (part.sections) {
            part.sections = part.sections.map(section => {
                if (section.sections) {
                    section.sections = section.sections.map(subSection => {
                        if (subSection.content) {
                            subSection.content = subSection.content.slice(0, 100) + '...';
                        }
                        return subSection;
                    });
                } else if (section.content) {
                    section.content = section.content.slice(0, 100) + '...';
                }
                return section;
            });
        }
        return part;
    });
    return out;
}

module.exports = {
    toTitleCase,
    writeFrontMatter,
    getTitleSlug,
    adjustMarkdownHeaders,
    reduceHeadingLevels,
    getLinkSlug,
    getBookStructure
};