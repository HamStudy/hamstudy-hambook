const fs = require('fs/promises');
const path = require('path');
const yargs = require('yargs');
const chokidar = require('chokidar');
const _ = require('lodash');

const { loadBook, loadMultilingualBook } = require('./importer/parser');
const { writeSingleFileMarkdown } = require('./importer/outputs/single-file');
const { writeSingleDirectoryBook } = require('./importer/outputs/single-directory');
const { writeHugoBook, writeHugoMultilingualBook } = require('./importer/outputs/hugo');
const { getBookStructure } = require('./importer/utils');

const formatTypes = {
    singleFileMarkdown: 'mdfile',
    singleDirectoryBook: 'dirbook',
    jsonStructure: 'jsonStruct',
    hugo: 'hugo'
};

async function processBook(book, outputFormat, outputPath, sourcePath, isMultilingual = false) {
    switch (outputFormat) {
        case formatTypes.singleFileMarkdown:
            await writeSingleFileMarkdown(book, outputPath, sourcePath);
            break;
        case formatTypes.singleDirectoryBook:
            await writeSingleDirectoryBook(book, outputPath, sourcePath);
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

    // Watch all files in all content dirs and all files in images dir
    const watchPatterns = [
        ...contentDirs.map(dir => path.join(dir, '**', '*')), // all files in content dirs
        path.join(rootDir, 'images', '**', '*') // all files in images
    ];

    const watcher = chokidar.watch(watchPatterns, {
        ignored: /(^|[\/\\])\../, // ignore dotfiles
        persistent: true
    });

    console.log(`Watching for changes in: ${watchPatterns.join(', ')}`);

    const processChanges = async () => {
        console.log('Changes detected, reprocessing...');
        try {
            const book = await loadBook(rootDir);
            await processBook(book, outputFormat, outputPath, rootDir);
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
    const argv = yargs
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

        let book, isMultilingual = false;

        if (argv['output-format'] === formatTypes.hugo) {
            // Detect multilingual content
            const dirEntries = await fs.readdir(rootDir, { withFileTypes: true });
            const contentDirs = dirEntries.filter(e => e.isDirectory() && /^content(\.[a-z]{2})?$/.test(e.name));
            if (contentDirs.length > 1) {
                book = await loadMultilingualBook(rootDir);
                isMultilingual = true;
            } else {
                book = await loadBook(rootDir);
            }
        } else {
            book = await loadBook(rootDir);
        }

        await processBook(book, argv['output-format'], argv['output-path'], rootDir, isMultilingual);
        console.log(`Initial output generated at ${argv['output-path']}`);

        if (argv.watch) {
            watchAndProcess(rootDir, argv['output-format'], argv['output-path']);
        }
    } catch (error) {
        console.error('Error:', error);
    }
})().catch(error => {
    console.error('Error:', error);
});
