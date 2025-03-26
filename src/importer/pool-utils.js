
async function formatPoolData(poolDoc) {
    /**  */
    const startDate = new Date(poolDoc.valid_from);
    const endDate = new Date(poolDoc.expires);
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();
    const updated = new Date(poolDoc.updated);

    const title = `${startYear} - ${endYear} ${poolDoc['class']} Class Question Pool`;

    // Record<string, Question>
    const questionMap = {};
    const subelements = [];

    for (const subel of poolDoc.pool) {
        const subDoc = {
            id: subel.id,
            name: subel.name,
            sections: [],
        };
        for (const sec of subel.sections) {
            const secDoc = {
                id: sec.id,
                summary: sec.summary,
                questions: [],
            }
            const qIds = secDoc.questions;

            for (const q of sec.questions) {
                const answers = q.answers;
                const allCorrect = answers[q.answer].toLowerCase().includes('all these choices');
                questionMap[q.id] = {
                    text: q.text,
                    fccpart: q.fccpart,
                    image: q.image,
                    allCorrect,
                    answers: Object.keys(q.answers).sort().map((key) => ({
                        letter: key,
                        text: q.answers[key],
                        correct: key === q.answer,
                    })),
                };
                qIds.push(q.id);
            }

            subDoc.sections.push(secDoc);
        }
        subelements.push(subDoc);
    }

    const poolOutput = {
        title,
        // e.g. "Mar 4, 2025",
        lastUpdate: updated.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),

        questions: questionMap,

        // Record<string, {id: string, name: string, sections: Section[]}>
        subelements,
    };

    return poolOutput;
}

module.exports = {
    formatPoolData,
};
