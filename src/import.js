const fs = require('fs/promises');
const path = require('path');
const yargs = require('yargs');
const chokidar = require('chokidar');
const _ = require('lodash');

const { loadBook } = require('./importer/parser');
const { writeSingleFileMarkdown } = require('./importer/outputs/single-file');
const { writeSingleDirectoryBook } = require('./importer/outputs/single-directory');
const { writeHugoBook } = require('./importer/outputs/hugo');
const { getBookStructure } = require('./importer/utils');

const formatTypes = {
    singleFileMarkdown: 'mdfile',
    singleDirectoryBook: 'dirbook',
    jsonStructure: 'jsonStruct',
    hugo: 'hugo'
};

async function processBook(book, outputFormat, outputPath, sourcePath) {
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
            await writeHugoBook(book, outputPath, sourcePath);
            break;
        default:
            throw new Error('Invalid output format specified.');
    }
}

function watchAndProcess(rootDir, outputFormat, outputPath) {
    const watchPatterns = [
        path.join(rootDir, 'content', '**', '*.md'),
        path.join(rootDir, 'images', '**')
    ];

    const watcher = chokidar.watch(watchPatterns, {
        ignored: /(^|[\/\\])\../, // ignore dotfiles
        persistent: true
    });

    console.log(`Watching for changes in ${rootDir}`);

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
        .on('add', path => {
            if (path.endsWith('.md')) {
                console.log(`File ${path} has been added`);
                debouncedProcessChanges();
            }
        })
        .on('change', path => {
            if (path.endsWith('.md')) {
                console.log(`File ${path} has been changed`);
                debouncedProcessChanges();
            }
        })
        .on('unlink', path => {
            if (path.endsWith('.md')) {
                console.log(`File ${path} has been removed`);
                debouncedProcessChanges();
            }
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

        const book = await loadBook(rootDir);
        await processBook(book, argv['output-format'], argv['output-path'], rootDir);
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
