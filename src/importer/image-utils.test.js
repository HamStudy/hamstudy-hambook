const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const { test } = require('node:test');
const { processImages } = require('./image-utils');

test('shared artwork is copied for exports and book-specific images take precedence', async t => {
    const root = await fs.mkdtemp(path.join(os.tmpdir(), 'hambook-shared-images-'));
    t.after(() => fs.rm(root, { recursive: true, force: true }));
    const source = path.join(root, 'book');
    await fs.mkdir(path.join(source, 'images'), { recursive: true });
    const shared = path.resolve(__dirname, '../../hugo-common/static/images/hamstudy_a.svg');
    const sharedBytes = await fs.readFile(shared);
    const output = path.join(root, 'epub');
    const content = await processImages('![HamStudy icon](../../../hugo-common/static/images/hamstudy_a.svg)', source, output, 'images');
    assert.equal(content, '![HamStudy icon](images/hamstudy_a.svg)');
    assert.deepEqual(await fs.readFile(path.join(output, 'images/hamstudy_a.svg')), sharedBytes);

    const localBytes = '<svg xmlns="http://www.w3.org/2000/svg"><title>Local override</title></svg>';
    await fs.writeFile(path.join(source, 'images/hamstudy_a.svg'), localBytes);
    const localOutput = path.join(root, 'local');
    const localContent = await processImages('![Local icon](../../images/hamstudy_a.svg)', source, localOutput, '/images');
    assert.equal(localContent, '![Local icon](/images/hamstudy_a.svg)');
    assert.equal(await fs.readFile(path.join(localOutput, 'images/hamstudy_a.svg'), 'utf8'), localBytes);
    assert.deepEqual(await fs.readFile(shared), sharedBytes);
});

test('official pool figures are copied unchanged for manuscript exports', async t => {
    const root = await fs.mkdtemp(path.join(os.tmpdir(), 'hambook-pool-figures-'));
    t.after(() => fs.rm(root, { recursive: true, force: true }));
    const source = path.join(root, 'book');
    const figures = path.join(source, 'hugo/static/figures');
    await fs.mkdir(path.join(source, 'images'), { recursive: true });
    await fs.mkdir(figures, { recursive: true });
    const figure = path.join(figures, 'E5-1.svg');
    const bytes = '<svg xmlns="http://www.w3.org/2000/svg"><title>Pool figure</title></svg>';
    await fs.writeFile(figure, bytes);
    const output = path.join(root, 'export');
    const content = await processImages('![Impedance graph](../../../hugo/static/figures/E5-1.svg)', source, output, 'images');
    assert.equal(content, '![Impedance graph](images/E5-1.svg)');
    assert.equal(await fs.readFile(path.join(output, 'images/E5-1.svg'), 'utf8'), bytes);
    assert.equal(await fs.readFile(figure, 'utf8'), bytes);
    await assert.rejects(fs.access(path.join(source, 'images/E5-1.svg')));
});
