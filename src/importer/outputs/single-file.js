const fs = require('fs/promises');
const path = require('path');

/**
 * @typedef {Object} PoolQuestion
 * @property {string} id - The unique identifier for the question (e.g., "T1A01").
 * @property {string} text - The question being asked.
 * @property {string} answer - The correct answer letter (e.g., "C").
 * @property {Object<string, string>} answers - Answer options keyed by letter.
 */

/**
 * Builds a flat question map from the pool.json structure
 * @param {Object} pool - The pool object from pool.json
 * @returns {Record<string, PoolQuestion>}
 */
function buildQuestionMap(pool) {
    const qMap = {};
    if (pool && pool.pool) {
        for (const subelement of pool.pool) {
            if (subelement.sections) {
                for (const section of subelement.sections) {
                    if (section.questions) {
                        for (const question of section.questions) {
                            qMap[question.id] = question;
                        }
                    }
                }
            }
        }
    }
    return qMap;
}

/**
 * @param {PoolQuestion} question 
 * @param {string} qId
 * @returns {string}
 */
function formatQuestionMarkdown(question, qId) {
    const correctAnswerLetter = question.answer;
    const correctAnswerText = question.answers[correctAnswerLetter];
    let content = '\n';
    if (correctAnswerText.toLowerCase().includes('all of these') || 
        correctAnswerText.toLowerCase().includes('all these choices')) {
        content += `**${qId}**: (${question.answer}) ${question.text}\n\n`;
        for (const [letter, text] of Object.entries(question.answers)) {
            content += `* **${letter}.**: ${text}\n`;
        }
    } else {
        // We only show the text and correct answer
        content = `\n**${qId}**: ${question.text}\n\n`;
        content += `* **Answer**: ${correctAnswerText}\n\n`;
    }
    return content + '\n';
}

async function writeSingleFileMarkdown(book, outputPath, sourcePath) {
    const qMap = buildQuestionMap(book.pool);

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

        if (section.frontMatter && section.frontMatter.questions && section.frontMatter.questions.length) {
            content += '\n\n---\n\n';
            content += '#### Questions\n\n';
            for (const question of section.frontMatter.questions) {
                const q = qMap[question];
                if (!q) {
                    throw new Error(`Question not found: ${question}`);
                }
                content += formatQuestionMarkdown(q, question);
            }
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