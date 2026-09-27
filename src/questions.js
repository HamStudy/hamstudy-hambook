#!/usr/bin/env node

const HAMSTUDY_POOL_URL = 'https://hamstudy.org/api/pools';

function usage() {
    return [
        'Usage: npm run questions -- <pool-id> <question-id,...>',
        '',
        'Example:',
        '  npm run questions -- E2_2026 T1A05,T4B06,T3C03'
    ].join('\n');
}

function buildQuestionMap(pool) {
    const questions = new Map();

    for (const element of pool.pool || []) {
        for (const section of element.sections || []) {
            for (const question of section.questions || []) {
                questions.set(question.id, question);
            }
        }
    }

    return questions;
}

function formatQuestion(question) {
    const lines = [`${question.id} (${question.answer})`, question.text];

    for (const [letter, answer] of Object.entries(question.answers)) {
        lines.push(`${letter}. ${answer}`);
    }

    return lines.join('\n');
}

async function fetchPool(poolId) {
    const url = `${HAMSTUDY_POOL_URL}/${encodeURIComponent(poolId)}/`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Could not fetch pool ${poolId}: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

async function main(args = process.argv.slice(2)) {
    if (args.includes('--help') || args.includes('-h')) {
        console.log(usage());
        return;
    }

    if (args.length !== 2) {
        throw new Error(`Expected a pool ID and a comma-separated list of question IDs.\n\n${usage()}`);
    }

    const [poolId, questionList] = args;
    const questionIds = questionList.split(',').map((id) => id.trim()).filter(Boolean);
    if (questionIds.length === 0) {
        throw new Error('Provide at least one question ID.');
    }

    const pool = await fetchPool(poolId);
    const questionMap = buildQuestionMap(pool);
    const missingIds = questionIds.filter((id) => !questionMap.has(id));

    if (missingIds.length > 0) {
        throw new Error(`Question${missingIds.length === 1 ? '' : 's'} not found in ${poolId}: ${missingIds.join(', ')}`);
    }

    console.log(questionIds.map((id) => formatQuestion(questionMap.get(id))).join('\n\n'));
}

if (require.main === module) {
    main().catch((err) => {
        console.error(`Error: ${err.message}`);
        process.exitCode = 1;
    });
}

module.exports = {
    buildQuestionMap,
    fetchPool,
    formatQuestion,
    main
};
