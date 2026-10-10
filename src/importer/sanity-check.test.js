const assert = require('node:assert/strict');
const { test } = require('node:test');
const {
    extractBodyQuestionLinkIds,
    checkBodyQuestionLinks,
    sanityCheckBook,
} = require('./sanity-check');

function makePool(ids, withdrawnIds = []) {
    return {
        pool: [{
            sections: [{
                questions: ids.map(id => ({ id, withdrawn: withdrawnIds.includes(id) })),
            }],
        }],
    };
}

function makeSection(filePath, questions, bodyLinkIds, extraFrontMatter = {}) {
    return {
        title: filePath,
        filePath,
        frontMatter: { section: '1.1', chapter: '1', questions, ...extraFrontMatter },
        content: bodyLinkIds.map(id => `Key fact. {{< link id="${id}" >}}`).join('\n\n'),
    };
}

function captureWarnings(fn) {
    const warnings = [];
    const original = console.warn;
    console.warn = message => warnings.push(message);
    try {
        fn();
    } finally {
        console.warn = original;
    }
    return warnings;
}

test('extractBodyQuestionLinkIds returns link shortcode IDs in order', () => {
    const content = [
        'Intro {{< link id="E6A02" >}} text',
        'More {{<link id = "E6A03">}} and {{< link pool="E4_2024" id="E6A04" >}}',
        'A positional link {{< link "some-slug" >}} is not a question link',
    ].join('\n');
    assert.deepEqual(extractBodyQuestionLinkIds(content), ['E6A02', 'E6A03', 'E6A04']);
    assert.deepEqual(extractBodyQuestionLinkIds('no links here'), []);
});

test('clean book emits no warnings', () => {
    const book = {
        parts: [makeSection('a.md', ['E1A01', 'E1A02'], ['E1A01', 'E1A02'])],
        pool: makePool(['E1A01', 'E1A02']),
        externalPools: {},
    };
    assert.deepEqual(captureWarnings(() => sanityCheckBook(book)), []);
});

test('warns when a non-withdrawn pool question has no body link', () => {
    const book = {
        parts: [makeSection('a.md', ['E1A01'], ['E1A01'])],
        pool: makePool(['E1A01', 'E1A02']),
    };
    const warnings = captureWarnings(() => checkBodyQuestionLinks(book));
    assert.equal(warnings.length, 1);
    assert.match(warnings[0], /E1A02 has no body question link/);
});

test('warns when a pool question has more than one body link', () => {
    const book = {
        parts: [
            makeSection('a.md', ['E1A01'], ['E1A01', 'E1A02']),
            makeSection('b.md', ['E1A02', 'E1A03'], ['E1A02', 'E1A03']),
        ],
        pool: makePool(['E1A01', 'E1A02', 'E1A03']),
    };
    const warnings = captureWarnings(() => checkBodyQuestionLinks(book));
    const duplicates = warnings.filter(w => w.includes('body question links across'));
    assert.equal(duplicates.length, 1);
    assert.match(duplicates[0], /E1A02 has 2 body question links/);
    assert.match(duplicates[0], /a\.md/);
    assert.match(duplicates[0], /b\.md/);
});

test('withdrawn pool questions require no body link', () => {
    const book = {
        parts: [makeSection('a.md', ['E1A01'], ['E1A01'])],
        pool: makePool(['E1A01', 'E1A02'], ['E1A02']),
    };
    assert.deepEqual(captureWarnings(() => checkBodyQuestionLinks(book)), []);
});

test('warns when frontmatter order does not match body link order', () => {
    const book = {
        parts: [makeSection('a.md', ['E1A01', 'E1A02', 'E1A03'], ['E1A01', 'E1A03', 'E1A02'])],
        pool: makePool(['E1A01', 'E1A02', 'E1A03']),
    };
    const warnings = captureWarnings(() => checkBodyQuestionLinks(book));
    assert.equal(warnings.length, 1);
    assert.match(warnings[0], /a\.md frontmatter questions order does not match body link order/);
});

test('a frontmatter-only question does not break order checking', () => {
    // E1A02 is withdrawn so it needs no link; the remaining links are in order.
    const book = {
        parts: [makeSection('a.md', ['E1A01', 'E1A02', 'E1A03'], ['E1A01', 'E1A03'])],
        pool: makePool(['E1A01', 'E1A02', 'E1A03'], ['E1A02']),
    };
    assert.deepEqual(captureWarnings(() => checkBodyQuestionLinks(book)), []);
});

test('warns when a body link is missing from the frontmatter questions array', () => {
    const book = {
        parts: [makeSection('a.md', ['E1A01'], ['E1A01', 'E1A02'])],
        pool: makePool(['E1A01', 'E1A02']),
    };
    const warnings = captureWarnings(() => checkBodyQuestionLinks(book));
    const notInFrontmatter = warnings.filter(w => w.includes('not in its frontmatter questions array'));
    assert.equal(notInFrontmatter.length, 1);
    assert.match(notInFrontmatter[0], /E1A02/);
});

test('links in questionPool files do not count toward the book pool', () => {
    // The appendix links T1A01 from an external pool; the book pool's own
    // T1A01 is linked exactly once in a regular section.
    const book = {
        parts: [
            makeSection('a.md', ['T1A01'], ['T1A01']),
            makeSection('appendix.md', ['T1A01'], ['T1A01'], { questionPool: 'E2_2026' }),
        ],
        pool: makePool(['T1A01']),
    };
    assert.deepEqual(captureWarnings(() => checkBodyQuestionLinks(book)), []);
});

test('single-string questions frontmatter is normalized', () => {
    const book = {
        parts: [makeSection('a.md', 'E1A01', ['E1A01'])],
        pool: makePool(['E1A01']),
    };
    assert.deepEqual(captureWarnings(() => checkBodyQuestionLinks(book)), []);
});
