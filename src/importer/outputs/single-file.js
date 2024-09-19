const fs = require('fs/promises');
const path = require('path');

const pathToQuestionsJson = path.resolve(__dirname, '../../../tech2022/hugo/data/questions.json');

/**
 * 
 * @returns {Promise<{questions: Record<string, Question>}>}
 */
async function loadQuestionsJson() {
    const content = await fs.readFile(pathToQuestionsJson, 'utf-8');
    return JSON.parse(content);
}

/**
 * @typedef {Object} Answer
 * @property {string} letter - The letter of the answer (e.g., "A").
 * @property {string} text - The text of the answer.
 */

/**
 * @typedef {Object} Question
 * @property {string} id - The unique identifier for the question (e.g., "T1A01").
 * @property {string} text - The question being asked.
 * @property {string} answer - The correct answer letter (e.g., "C").
 * @property {Answer[]} answers - An array of possible answer options, each with a letter and description.
 */

/**
 * 
 * @param {Question} question 
 * @returns 
 */
function formatQuestionMarkdown(question) {
    const correctAnswer = question.answers.find((answer) => answer.letter === question.answer);
    let content = '\n';
    if (correctAnswer.text.toLowerCase().includes('all of these')) {
        content += `**${question.id}**: (${question.answer}) ${question.text}\n\n`;
        for (const answer of question.answers) {
            content += `* **${answer.letter}.**: ${answer.text}\n`;
        }
    } else {
        // We only show the text and correct answer
        content = `\n**${question.id}**: ${question.text}\n\n`;
        let correctAnswerText = question.answers.find((answer) => answer.letter === question.answer).text;
        content += `* **Answer**: ${correctAnswerText}\n\n`;
    }
    return content + '\n';
}

async function writeSingleFileMarkdown(book, outputPath) {
    const qMap = (await loadQuestionsJson()).questions;

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
                content += formatQuestionMarkdown(q);
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