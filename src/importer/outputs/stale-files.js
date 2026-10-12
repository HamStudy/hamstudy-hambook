const fs = require('fs/promises');
const path = require('path');
const { execFile } = require('child_process');
const { promisify } = require('util');

const execFileAsync = promisify(execFile);

// Tracked files were committed on purpose, so they are never swept.
// Outside a git work tree nothing is tracked and this returns an empty set.
// Returned relative to dir; git reports realpaths, so resolve first or
// symlinked prefixes (e.g. /var -> /private/var) would mismatch.
async function getGitTrackedFiles(dir) {
    try {
        const dirReal = await fs.realpath(dir);
        const { stdout: rootOut } = await execFileAsync('git', ['-C', dirReal, 'rev-parse', '--show-toplevel']);
        const root = await fs.realpath(rootOut.trim());
        const relDir = path.relative(root, dirReal) || '.';
        const { stdout } = await execFileAsync(
            'git', ['-C', root, 'ls-files', '--cached', '-z', '--', relDir],
            { maxBuffer: 32 * 1024 * 1024 }
        );
        return new Set(stdout.split('\0').filter(Boolean).map(file => path.relative(relDir, file)));
    } catch {
        return new Set();
    }
}

async function sweep(rootDir, dir, keep, trackedFiles, filePattern, removed) {
    let entries;
    try {
        entries = await fs.readdir(dir, { withFileTypes: true });
    } catch {
        return;
    }

    for (const entry of entries) {
        const entryPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            await sweep(rootDir, entryPath, keep, trackedFiles, filePattern, removed);
            const remaining = await fs.readdir(entryPath);
            if (remaining.length === 0) {
                await fs.rmdir(entryPath);
                console.log(`Removed empty generated directory: ${entryPath}`);
            }
        } else if (filePattern.test(entry.name)) {
            const relPath = path.relative(rootDir, entryPath);
            if (!keep.has(relPath) && !trackedFiles.has(relPath)) {
                await fs.unlink(entryPath);
                removed.push(entryPath);
                console.log(`Removed stale generated file: ${entryPath}`);
            }
        }
    }
}

/**
 * Removes generated files under dir that were not written during this run
 * (e.g. a renamed source section leaves its old slugged file behind).
 * Only files matching filePattern are considered, files tracked by git are
 * never removed, and empty directories left behind are pruned.
 * @param {string} dir - Directory to sweep (recursively)
 * @param {string[]} keepFiles - Absolute paths written during this run
 * @param {RegExp} filePattern - Names eligible for removal (non-global)
 * @returns {Promise<string[]>} Paths that were removed
 */
async function removeStaleFiles(dir, keepFiles, filePattern) {
    const keep = new Set(keepFiles.map(file => path.relative(dir, path.resolve(file))));
    const trackedFiles = await getGitTrackedFiles(dir);
    const removed = [];
    await sweep(dir, dir, keep, trackedFiles, filePattern, removed);
    return removed;
}

module.exports = {
    removeStaleFiles
};
