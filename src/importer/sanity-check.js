/**
 * Sanity checks for imported books. Emits warnings (never throws) when:
 *  - A non-withdrawn question in pool.json is not referenced in the
 *    frontmatter `questions` array of any content file.
 *  - A question ID appears in the `questions` array of more than one
 *    content file.
 *  - A referenced question ID does not exist in the pool at all.
 *  - A referenced question has been withdrawn from the pool.
 *  - A content file with questions is missing the `section` or `chapter`
 *    frontmatter params required by the study-prompt partial.
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

// Recursively find sections that list questions but are missing the
// `section`/`chapter` frontmatter params required by the study-prompt
// partial. Returns [{ filePath, missing: string[] }]
function collectMissingStudyPromptParams(parts, problems = []) {
    for (const section of parts) {
        if (section.sections) {
            collectMissingStudyPromptParams(section.sections, problems);
            continue;
        }
        const questions = section.frontMatter?.questions || [];
        if (!questions.length) continue;
        const missing = [];
        if (!section.frontMatter?.section) missing.push('section');
        if (!section.frontMatter?.chapter) missing.push('chapter');
        if (missing.length > 0) {
            problems.push({ filePath: section.filePath, missing });
        }
    }
    return problems;
}

// Collect all pool questions, including withdrawn ones.
// Returns Map<questionId, { withdrawn: boolean }>
function collectPoolQuestions(pool) {
    const questions = new Map();
    for (const subelement of pool?.pool || []) {
        for (const section of subelement.sections || []) {
            for (const question of section.questions || []) {
                questions.set(question.id, { withdrawn: Boolean(question.withdrawn) });
            }
        }
    }
    return questions;
}

// Collect IDs of all non-withdrawn questions in the pool.
function collectPoolQuestionIds(pool) {
    return [...collectPoolQuestions(pool).entries()]
        .filter(([, question]) => !question.withdrawn)
        .map(([id]) => id);
}

function sanityCheckBook(book) {
    for (const { filePath, missing } of collectMissingStudyPromptParams(book.parts)) {
        console.warn(`WARNING: ${filePath} has questions but is missing frontmatter param(s) required by study-prompt: ${missing.join(', ')}`);
    }

    const refs = collectQuestionReferences(book.parts);

    // IDs may legitimately come from external pools declared via `questionPool`
    // frontmatter, so a reference is valid if any loaded pool knows it and has
    // it active (not withdrawn).
    const knownPools = [collectPoolQuestions(book.pool)];
    for (const externalPool of Object.values(book.externalPools || {})) {
        knownPools.push(collectPoolQuestions(externalPool));
    }

    for (const [qid, files] of refs) {
        if (files.length > 1) {
            console.warn(`WARNING: question ${qid} appears in the questions array of multiple files: ${files.join(', ')}`);
        }
        const knownIn = knownPools.filter(pool => pool.has(qid));
        if (knownIn.length === 0) {
            console.warn(`WARNING: question ${qid} does not exist in the pool but is referenced in: ${files.join(', ')}`);
        } else if (!knownIn.some(pool => !pool.get(qid).withdrawn)) {
            console.warn(`WARNING: question ${qid} is withdrawn from the pool but is referenced in: ${files.join(', ')}`);
        }
    }

    const referenced = new Set(refs.keys());
    const missing = collectPoolQuestionIds(book.pool).filter(id => !referenced.has(id));
    if (missing.length > 0) {
        console.warn(`WARNING: ${missing.length} non-withdrawn pool question(s) not referenced by any content file: ${missing.join(', ')}`);
    }
}

module.exports = {
    collectMissingStudyPromptParams,
    collectQuestionReferences,
    collectPoolQuestionIds,
    sanityCheckBook,
};
