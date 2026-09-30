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
