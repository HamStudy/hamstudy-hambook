/**
 * Sanity checks for imported books. Emits warnings (never throws) when:
 *  - A non-withdrawn question in pool.json is not referenced in the
 *    frontmatter `questions` array of any content file.
 *  - A question ID appears in the `questions` array of more than one
 *    content file.
 */

// Recursively collect question references from frontmatter.
// Returns Map<questionId, filePath[]>
function collectQuestionReferences(parts, refs = new Map()) {
    for (const section of parts) {
        if (section.sections) {
            collectQuestionReferences(section.sections, refs);
            continue;
        }
        const questions = section.frontMatter?.questions || [];
        for (const qid of questions) {
            if (!refs.has(qid)) {
                refs.set(qid, []);
            }
            refs.get(qid).push(section.filePath);
        }
    }
    return refs;
}

// Collect IDs of all non-withdrawn questions in the pool.
function collectPoolQuestionIds(pool) {
    const ids = [];
    for (const subelement of pool?.pool || []) {
        for (const section of subelement.sections || []) {
            for (const question of section.questions || []) {
                if (!question.withdrawn) {
                    ids.push(question.id);
                }
            }
        }
    }
    return ids;
}

function sanityCheckBook(book) {
    const refs = collectQuestionReferences(book.parts);

    for (const [qid, files] of refs) {
        if (files.length > 1) {
            console.warn(`WARNING: question ${qid} appears in the questions array of multiple files: ${files.join(', ')}`);
        }
    }

    const referenced = new Set(refs.keys());
    const missing = collectPoolQuestionIds(book.pool).filter(id => !referenced.has(id));
    if (missing.length > 0) {
        console.warn(`WARNING: ${missing.length} non-withdrawn pool question(s) not referenced by any content file: ${missing.join(', ')}`);
    }
}

module.exports = {
    collectQuestionReferences,
    collectPoolQuestionIds,
    sanityCheckBook,
};
