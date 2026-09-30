const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const { test } = require('node:test');
const { processDirectory, parseMarkdownFile } = require('../parser');
const { writeHugoBook } = require('./hugo');

// Exercise the real parser and writer: shorter labels must not change page addresses.
test('Hugo shortens numbered labels while preserving URLs, headings and overrides', async t => {
    const root = await fs.mkdtemp(path.join(os.tmpdir(), 'hambook-titles-'));
    t.after(() => fs.rm(root, { recursive: true, force: true }));
    const source = path.join(root, 'source');
    const content = path.join(source, 'content');
    const output = path.join(root, 'output');
    const chapter = 'Part 1/Chapter 12. Outdated folder subject';
    const cases = [
        ['Section 12.1: Series and Parallel Circuits', '12.1 Series and Parallel Circuits', '', 'section-121-series-and-parallel-circuits'],
        ['Section 12.2.1: Receiver Controls', '12.2.1 Receiver Controls', '', 'section-1221-receiver-controls'],
        ['Section 12.3: Hidden Heading', 'Quick Reference', 'title: Quick Reference\nslug: custom-reference\n', 'custom-reference'],
        ['Section 12.4: Preserved Address', '12.4 Preserved Address', 'slug: old-address\n', 'old-address'],
        ['12.5 Already Short', '12.5 Already Short', '', '125-already-short'],
        ['Section Control Basics', 'Section Control Basics', '', 'section-control-basics'],
        ['Capítulo 12: Radio', 'Capítulo 12: Radio', '', 'captulo-12-radio'],
        ['Chapter 12 Without a Colon', 'Chapter 12 Without a Colon', '', 'chapter-12-without-a-colon'],
        ['Section 12.9:', 'Section 12.9:', '', 'section-129'],
        ['Section 12.11:  ', 'Section 12.11:  ', '', 'section-1211-'],
        ['Section 12.10: Original', '12.10 Explicit Title', 'title: "Section 12.10: Explicit Title"\n', 'section-1210-explicit-title'],
    ];
    const files = new Map([
        ['Part 1/index.md', '---\nslug: pt1\n---\n\n# Part 1: Radio\n'],
        [`${chapter}/index.md`, '---\nquestions: []\n---\n\n## Chapter 12: Electrical Foundations\n\nIntroduction.\n'],
        ...cases.map(([heading, , metadata], i) => [
            `${chapter}/section-${String(i).padStart(2, '0')}.md`,
            `---\n${metadata}questions: []\n---\n\n### ${heading}\n\nTeaching text.\n`,
        ]),
    ]);
    for (const [filename, text] of files) {
        const target = path.join(content, filename);
        await fs.mkdir(path.dirname(target), { recursive: true });
        await fs.writeFile(target, text);
    }
    const parts = await processDirectory(content, content);
    const parsedChapter = parts[0].sections.find(section => section.sections);
    const rawTitles = parsedChapter.sections.map(section => section.title);
    await writeHugoBook({ parts }, output, source);
    const chapterDir = 'pt1/chapter-12-electrical-foundations';
    const chapterPage = await parseMarkdownFile(path.join(output, 'content', chapterDir, '_index.md'));
    assert.equal(chapterPage.title, '12. Electrical Foundations');
    assert.match(chapterPage.content, /^# Chapter 12: Electrical Foundations\n/);
    const toc = await fs.readFile(path.join(output, 'content', '_index.md'), 'utf8');
    assert.ok(toc.includes(`[12. Electrical Foundations]({{% relref "${chapterDir}" %}})`));
    assert.ok(!toc.includes('Outdated folder subject'));
    for (const [heading, title, metadata, slug] of cases) {
        const page = await parseMarkdownFile(path.join(output, 'content', chapterDir, `${slug}.md`));
        assert.equal(page.title, title);
        assert.equal(page.content, `# ${heading}\n\nTeaching text.`);
        assert.ok(toc.includes(`[${title}]({{% relref "${chapterDir}/${slug}" %}})`));
        assert.equal(page.frontMatter.slug, metadata.match(/^slug: (.+)$/m)?.[1]);
    }
    assert.deepEqual(parsedChapter.sections.map(section => section.title), rawTitles);
    for (const [filename, text] of files) {
        assert.equal(await fs.readFile(path.join(content, filename), 'utf8'), text);
    }
});
