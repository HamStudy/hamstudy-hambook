const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const { test } = require('node:test');
const { writeSingleDirectoryBook } = require('./single-directory');

test('directory-book cleanup preserves hand-maintained Markdown without Git', async t => {
    const root = await fs.mkdtemp(path.join(os.tmpdir(), 'hambook-dirbook-stale-'));
    t.after(() => fs.rm(root, { recursive: true, force: true }));
    const source = path.join(root, 'source');
    const output = path.join(root, 'output');
    const content = path.join(output, 'content');
    await fs.mkdir(source, { recursive: true });

    const book = {
        pool: {
            valid_from: '2023-07-01',
            expires: '2027-06-30',
            updated: '2026-11-18',
            class: 'General',
            pool: [],
        },
        parts: [{ title: 'Old Section', frontMatter: {}, content: 'Teaching text.' }],
    };
    await writeSingleDirectoryBook(book, output, source);
    const oldPage = path.join(content, '01-old-section.en.md');
    assert.ok((await fs.stat(oldPage)).isFile());

    // These belong to the EPUB template, not the numbered generated chapter set.
    const foreignFiles = new Map([
        ['cover.en.md', '---\nlayout: cover\n---\n'],
        ['notes.md', 'Hand-maintained EPUB notes.\n'],
    ]);
    for (const [filename, text] of foreignFiles) {
        await fs.writeFile(path.join(content, filename), text);
    }

    book.parts[0].title = 'Current Section';
    await writeSingleDirectoryBook(book, output, source);

    for (const [filename, text] of foreignFiles) {
        assert.equal(await fs.readFile(path.join(content, filename), 'utf8'), text);
    }
    await assert.rejects(fs.stat(oldPage), { code: 'ENOENT' });
    const currentPage = path.join(content, '01-current-section.en.md');
    assert.match(await fs.readFile(currentPage, 'utf8'), /Teaching text\./);
    assert.ok((await fs.stat(path.join(content, '00-table-of-contents.md'))).isFile());
});
