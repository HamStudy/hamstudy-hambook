const fs = require('fs/promises');
const path = require('path');
const yargs = require('yargs');
const chokidar = require('chokidar');
const _ = require('lodash');

const { loadBook: loadBookUnchecked, loadMultilingualBook: loadMultilingualBookUnchecked, parseMarkdownFile } = require('./importer/parser');
const { fetchPoolRemote } = require('./importer/pool-fetcher');
const { writeSingleFileMarkdown } = require('./importer/outputs/single-file');
const { writeSingleDirectoryBook } = require('./importer/outputs/single-directory');
const { writeAudiobookDirectoryBook } = require('./importer/outputs/audiobook-directory');
const { writeHugoBook, writeHugoMultilingualBook } = require('./importer/outputs/hugo');
const { getBookStructure } = require('./importer/utils');
const { sanityCheckBook } = require('./importer/sanity-check');

const formatTypes = {
    singleFileMarkdown: 'mdfile',
    singleDirectoryBook: 'dirbook',
    jsonStructure: 'jsonStruct',
    hugo: 'hugo',
    audiobookDirectoryBook: 'audiobookdir'
};

async function loadAndCheckBook(rootDir) {
    const book = await loadBookUnchecked(rootDir);
    sanityCheckBook(book);
    return book;
}

async function loadAndCheckMultilingualBook(rootDir) {
    // Question arrays are identical across languages, so checking default covers all.
    const books = await loadMultilingualBookUnchecked(rootDir);
    if (books.default) {
        sanityCheckBook(books.default);
    }
    return books;
}

async function readPoolId(contentDir) {
    const indexPath = path.join(contentDir, 'index.md');
    const exists = await fs.access(indexPath).then(() => true, () => false);
    if (!exists) return null;
    const { frontMatter } = await parseMarkdownFile(indexPath, contentDir);
    const poolId = frontMatter?.poolid;
    return typeof poolId === 'string' && poolId.trim() ? poolId.trim() : null;
}

async function syncPoolFile(poolId, poolPath) {
    let remotePool;
    try {
        remotePool = await fetchPoolRemote(poolId);
    } catch (error) {
        const existing = await fs.readFile(poolPath, 'utf8').catch(() => null);
        if (existing === null) {
            throw new Error(`Could not fetch pool ${poolId} and no local pool file exists at ${poolPath}: ${error.message}`);
        }
        console.warn(`WARNING: could not refresh pool ${poolId} (${error.message}); keeping existing ${poolPath}`);
        return;
    }

    const existing = await fs.readFile(poolPath, 'utf8').catch(() => null);
    if (existing !== null) {
        try {
            if (_.isEqual(JSON.parse(existing), remotePool)) {
                console.log(`Pool ${poolId} is up to date (${poolPath})`);
                return;
            }
        } catch (error) {
            console.warn(`WARNING: could not parse existing ${poolPath} (${error.message}); rewriting it`);
        }
    }

    const indentMatch = existing !== null ? /\n([ \t]+)\S/.exec(existing) : null;
    const indent = indentMatch ? indentMatch[1] : '  ';
    const trailingNewline = existing === null || existing.endsWith('\n');
    await fs.writeFile(poolPath, JSON.stringify(remotePool, null, indent) + (trailingNewline ? '\n' : ''));
    console.log(`Updated ${poolPath} from pool ${poolId}`);
}

// Refreshes each book's pool files from the HamStudy API before the book is
// loaded, based on the `poolid` frontmatter of each content root index.md
// (content/index.md -> pool.json, content.es/index.md -> pool.es.json, ...).
async function syncQuestionPools(rootDir) {
    const dirEntries = await fs.readdir(rootDir, { withFileTypes: true });
    const contentDirs = dirEntries
        .filter(e => e.isDirectory() && /^content(\.[a-z]{2})?$/.test(e.name))
        .map(e => e.name)
        .sort((a, b) => (a === 'content' ? -1 : b === 'content' ? 1 : a.localeCompare(b)));

    for (const dirName of contentDirs) {
        const lang = dirName === 'content' ? null : dirName.slice('content.'.length);
        const poolId = await readPoolId(path.join(rootDir, dirName));
        if (!poolId) continue;
        const poolFile = lang ? `pool.${lang}.json` : 'pool.json';
        await syncPoolFile(poolId, path.join(rootDir, poolFile));
    }
}

async function processBook(book, outputFormat, outputPath, sourcePath, isMultilingual = false, lang = undefined) {
    switch (outputFormat) {
        case formatTypes.singleFileMarkdown:
            await writeSingleFileMarkdown(book, outputPath, sourcePath);
            break;
        case formatTypes.singleDirectoryBook:
            await writeSingleDirectoryBook(book, outputPath, sourcePath, lang);
            break;
        case formatTypes.audiobookDirectoryBook:
            if (isMultilingual) {
                // book is an object: { lang: { toc, parts, pool } }
                for (const [curLang, bookObj] of Object.entries(book)) {
                    await writeAudiobookDirectoryBook(bookObj, outputPath + (curLang === 'default' ? '' : `-${curLang}`), sourcePath, curLang === 'default' ? undefined : curLang);
                }
            } else {
                await writeAudiobookDirectoryBook(book, outputPath, sourcePath, lang);
            }
            break;
        case formatTypes.jsonStructure:
            await fs.writeFile(outputPath, JSON.stringify(getBookStructure(book), null, 2));
            break;
        case formatTypes.hugo:
            if (isMultilingual) {
                await writeHugoMultilingualBook(book, outputPath, sourcePath);
            } else {
                await writeHugoBook(book, outputPath, sourcePath);
            }
            break;
        default:
            throw new Error('Invalid output format specified.');
    }
}

function watchAndProcess(rootDir, outputFormat, outputPath) {
    // Dynamically find all content directories (e.g., content, content.es, content.fr, etc.)
    const fsSync = require('fs');
    const contentDirs = fsSync.readdirSync(rootDir, { withFileTypes: true })
        .filter(e => e.isDirectory() && /^content(\.[a-z]{2})?$/.test(e.name))
        .map(e => path.join(rootDir, e.name));

    const watchPatterns = [
        ...contentDirs.map(dir => path.join(dir, '**', '*')),
        path.join(rootDir, 'images', '**', '*')
    ];

    const watcher = chokidar.watch(watchPatterns, {
        ignored: /(^|[\/\\])\../, // ignore dotfiles
        persistent: true
    });

    console.log(`Watching for changes in: ${watchPatterns.join(', ')}`);

    const processChanges = async () => {
        console.log('Changes detected, reprocessing...');
        try {
            let book, isMultilingual = false;
            if (outputFormat === formatTypes.hugo) {
                const dirEntries = await fs.readdir(rootDir, { withFileTypes: true });
                const contentDirs = dirEntries.filter(e => e.isDirectory() && /^content(\.[a-z]{2})?$/.test(e.name));
                if (contentDirs.length > 1) {
                    book = await loadAndCheckMultilingualBook(rootDir);
                    isMultilingual = true;
                } else {
                    book = await loadAndCheckBook(rootDir);
                }
            } else if (outputFormat === formatTypes.singleDirectoryBook) {
                const dirEntries = await fs.readdir(rootDir, { withFileTypes: true });
                const contentDirs = dirEntries.filter(e => e.isDirectory() && /^content(\.[a-z]{2})?$/.test(e.name));
                if (contentDirs.length > 1) {
                    const books = await loadAndCheckMultilingualBook(rootDir);
                    for (const [lang, bookObj] of Object.entries(books)) {
                        const langSuffix = lang === 'default' ? '' : `-${lang}`;
                        await processBook(bookObj, outputFormat, outputPath + langSuffix, rootDir, false, lang === 'default' ? undefined : lang);
                    }
                    console.log(`Output regenerated at ${outputPath}`);
                    return;
                } else {
                    book = await loadAndCheckBook(rootDir);
                }
            } else {
                book = await loadAndCheckBook(rootDir);
            }
            await processBook(book, outputFormat, outputPath, rootDir, isMultilingual);
            console.log(`Output regenerated at ${outputPath}`);
        } catch (error) {
            console.error('Error processing changes:', error);
        }
    };
    const debouncedProcessChanges = _.debounce(processChanges, 1000);

    watcher
        .on('add', filePath => {
            console.log(`File ${filePath} has been added`);
            debouncedProcessChanges();
        })
        .on('change', filePath => {
            console.log(`File ${filePath} has been changed`);
            debouncedProcessChanges();
        })
        .on('unlink', filePath => {
            console.log(`File ${filePath} has been removed`);
            debouncedProcessChanges();
        });
}

(async () => {
    const argv = yargs(process.argv.slice(2))
        .positional('root-dir', {
            description: 'The root directory of the source content',
            type: 'string'
        })
        .option('output-format', {
            alias: 'f',
            description: 'Specify the output format',
            choices: Object.values(formatTypes),
            demandOption: true,
            type: 'string'
        })
        .option('output-path', {
            alias: 'o',
            description: 'Specify the output path',
            type: 'string',
            demandOption: true,
        })
        .option('lang', {
            alias: 'l',
            description: 'Language code for multilingual books (e.g., es)',
            type: 'string'
        })
        .option('watch', {
            alias: 'w',
            description: 'Watch for changes and reprocess',
            type: 'boolean',
            default: false
        })
        .argv;

    try {
        const rootDir = argv._[0];

        if (!rootDir) {
            throw new Error('Please provide the root directory as a command line argument.');
        }

        await syncQuestionPools(rootDir);

        let book, isMultilingual = false;

        const requestedLang = argv.lang;

        if (argv['output-format'] === formatTypes.hugo) {
            // Detect multilingual content
            const dirEntries = await fs.readdir(rootDir, { withFileTypes: true });
            const contentDirs = dirEntries.filter(e => e.isDirectory() && /^content(\.[a-z]{2})?$/.test(e.name));
            if (contentDirs.length > 1) {
                book = await loadAndCheckMultilingualBook(rootDir);
                isMultilingual = true;
            } else {
                book = await loadAndCheckBook(rootDir);
            }
        } else if (argv['output-format'] === formatTypes.singleDirectoryBook || argv['output-format'] === formatTypes.audiobookDirectoryBook) {
            // Detect multilingual content for single-directory or audiobook output
            const dirEntries = await fs.readdir(rootDir, { withFileTypes: true });
            const contentDirs = dirEntries.filter(e => e.isDirectory() && /^content(\.[a-z]{2})?$/.test(e.name));
            if (contentDirs.length > 1) {
                const books = await loadAndCheckMultilingualBook(rootDir);
                if (requestedLang && books[requestedLang]) {
                    // Output only the requested language
                    await processBook(books[requestedLang], argv['output-format'], argv['output-path'], rootDir, false, requestedLang);
                    console.log(`Initial ${requestedLang} output generated at ${argv['output-path']}`);
                } else if (requestedLang && books['default']) {
                    // Requested 'default' language
                    await processBook(books['default'], argv['output-format'], argv['output-path'], rootDir, false, undefined);
                    console.log(`Initial default output generated at ${argv['output-path']}`);
                } else {
                    // Multilingual: load each language and output with lang extension
                    for (const [lang, bookObj] of Object.entries(books)) {
                        // lang === 'default' for the main language
                        const langSuffix = lang === 'default' ? '' : `-${lang}`;
                        await processBook(bookObj, argv['output-format'], argv['output-path'] + langSuffix, rootDir, false, lang === 'default' ? undefined : lang);
                    }
                    console.log(`Initial multilingual output generated at ${argv['output-path']}`);
                }
                if (argv.watch) {
                    watchAndProcess(rootDir, argv['output-format'], argv['output-path']);
                }
                return;
            } else {
                book = await loadAndCheckBook(rootDir);
            }
        } else {
            book = await loadAndCheckBook(rootDir);
        }

        await processBook(book, argv['output-format'], argv['output-path'], rootDir, isMultilingual);
        console.log(`Initial output generated at ${argv['output-path']}`);

        if (argv.watch) {
            watchAndProcess(rootDir, argv['output-format'], argv['output-path']);
        }
    } catch (error) {
        console.error('Error:', error);
        process.exitCode = 1;
    }
})().catch(error => {
    console.error('Error:', error);
    process.exitCode = 1;
});
