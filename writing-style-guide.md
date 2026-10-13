# Writing and Revising the HamBooks

Readers use the HamBooks to prepare for an exam, understand radio, and decide whether to pursue another license class. They should be able to find what they need without unnecessary reading. Extra material consumes attention, raises printing costs, and lengthens the audiobook; missing explanation can leave readers confused or acting on an unsafe misunderstanding.

We aim for **Minimum Viable Teaching**: the smallest coherent explanation that supplies the understanding this reader needs. Brevity serves that purpose only while the teaching remains complete, approachable, and useful.

Teaching, tone, accuracy, accessibility, and exam-emphasis principles apply across manuscripts, figures, audio, and video. Source syntax applies to its specified medium; adapting presentation within the approved format is not an exception to those principles. **Requirements** are binding author decisions. **Preferences** allow judgment where another choice better serves learning. **Implementation notes** describe current publishing conventions; verify the code when behavior matters. New explicit author instructions control the current task, and generic skill defaults do not override project requirements.

## Start a task without losing context

A useful edit solves the requested problem while preserving the author's work. Establish the book, language, pool, files, and scope before editing. Read applicable repository instructions, inspect staged and unstaged changes, and consult history when the original wording matters. Existing diffs may belong to someone else.

Read this guide fully when joining the project; later, revisit the relevant guidance and skills. For a passage-level edit, understand the whole section, its assigned questions, and the surrounding teaching before choosing an intervention suited to its editorial stage. See [Revision and verification](#revision-and-verification) for scope and completion criteria.

The author often reviews while work continues. Deliver reviewable sections or chapters, announce completed units, and check for concurrent edits before writing. Preserve user edits and staged work; never reset, blindly revert, or overwrite unrelated changes. Resolve only the affected write if ownership becomes unclear.

**Standing boundaries:** leave changes unstaged and uncommitted unless asked otherwise. Do not push, merge, publish, or deploy without authorization. Render a PDF only when requested; one previous request does not authorize recurring rebuilds. Legacy instructions to “always push before finishing” do not override these boundaries.

### Find the relevant guidance

- [Readers and study paths](#readers-and-study-paths).
- [Purpose-first explanation](#purpose-first-explanation).
- [Depth and length](#depth-and-length).
- [Book structure and continuity](#book-structure-and-continuity).
- [Voice, grammar, and terminology](#voice-grammar-and-terminology).
- [Exam facts and Key Information](#exam-facts-and-key-information).
- [Manuscript files and syntax](#manuscript-files-and-syntax).
- [Mathematics](#mathematics).
- [Figures, illustrations, and accessibility](#figures-illustrations-and-accessibility).
- [Video lessons](#video-lessons).
- [Accuracy and safe simplification](#accuracy-and-safe-simplification).
- [Revision and verification](#revision-and-verification).
- [Skills and supporting tools](#skills-and-supporting-tools).
- [Handoff and completion](#handoff-and-completion).

## Readers and study paths

### Build on the right starting knowledge

Accessibility means making the next idea understandable without treating familiar material as a new discovery.

| Book | Knowledge the text may assume | Knowledge it must not assume |
| --- | --- | --- |
| Technician | Everyday experience; teach the radio and electrical foundations the pool needs. | Prior licensing, electronics training, or operating experience. |
| General | Knowledge required by the Technician examination. | Reading the Technician HamBook, extensive operating experience, or already holding General privileges. |
| Amateur Extra | Knowledge required by the Technician and General examinations. | Reading either earlier HamBook, extensive operating experience, professional electronics expertise, or already holding Extra privileges. |

Establish this baseline from the **earlier question pools**, checking which edition each book covers. The current local references are `tech2026`, `general2023`, and `extra2024`. Their explanations help with continuity, but optional material in an earlier book is not automatically prerequisite knowledge.

A brief refresher should connect existing knowledge to new learning. An Extra lesson about diode behavior can build on rectification without reteaching AC-to-DC conversion. Apply familiar ideas instead of repeatedly saying “as you already know.” Define genuinely new terms when needed and expand unfamiliar abbreviations, such as “log-periodic dipole array (LPDA).”

Never tell readers they already know or understand something technical unless a typical high-school student would know it. Readers reach each book by different routes: some take several exams in one session, some studied with other materials, and some passed an earlier exam years ago. “You learned…” or “You can already…” is untrue for some of them, and a reader who doesn't recall the idea is left feeling behind or out of place. Hedge instead, as in “you probably met” or “you likely learned,” or simply state the fact so the sentence teaches it either way. Where the background matters, point readers who missed it to the earlier HamBook at [hambook.org](https://hambook.org).

### Keep both ways of studying useful

Both study paths are nonnegotiable:

- **Exam-focused study:** scan Key Information blocks and italicized exam facts, practice the assigned questions, and consult explanations when an answer is unclear.
- **Deeper learning:** follow the prose, examples, calculations, and diagrams as a coherent lesson, then test understanding.

Do not shame cramming or turn the full reading path into a disconnected answer list. HamStudy integration supports both paths: explain Study Mode, practice exams, progress tracking, and section-specific study links or print QR codes. Those links must open the intended questions.

### Let the introduction answer real entry questions

The introduction may be all someone reads before deciding to study. It must orient them to:

- What the license enables, who the book serves, its prerequisites, and what is inside.
- How the license classes work: higher classes require credit for lower examinations; a prepared candidate may take multiple elements in one session. Explain this briefly, and direct candidates who lack the prerequisite preparation to start there.
- Both study paths and their connection to KI blocks, italics, questions, and HamStudy.
- What the exam involves, including verified math expectations for its pool.
- Arranging an exam, the FRN, and the distinction between passing and receiving or using privileges.
- The pool edition covered and where to find the latest book.

For upgrades, explain reusing the FRN on the existing FCC record. Briefly describe its application role and the CORES route for someone without one; do not encourage duplicate FRNs.

Keep motives broad. General candidates need not plan to operate HF. Extra candidates may want more privileges, deeper knowledge, the satisfaction or status of the highest class, or eligibility to administer all exam classes as an appropriately accredited Volunteer Examiner. The license alone does not grant examiner accreditation.

Use [hambook.org](https://hambook.org) for the latest book and for references to other HamBooks, rather than directing readers to dated editions. Put that link near statements about changing pools, rules, or editions. Preserve useful “What's Inside” orientation even when later chapters have introductions.

## Purpose-first explanation

Readers understand a concept more readily when they recognize a situation in which it is useful. Establish a concrete problem, practical decision, opportunity, or familiar experience; introduce the concept through its role; then develop its behavior and mechanism from that connection.

**Anchor where the reader enters, then keep the thread.** An entry point is anywhere the reader arrives without a thread from the text just before: the start of a part, chapter, or section, or a point where the subject really changes. Start there from something the reader probably knows, then show what it leaves unanswered.

Everywhere else, the previous passage is the starting point. Check each join by asking whether the next idea follows from the last one, either as a result or as a complication. If it does, the reader has their footing, so keep going. If the only honest link is “here's another thing,” try reordering first. Otherwise, have the introduction set up a frame that the later parts hang from, as a diode section that opens with the jobs diodes can do gives each later subsection its place. Add a new starting point only when neither works. This is a check on the logic, not a phrase to write. Usually the content carries the link: an echoed term, a contrast, or simply putting the right idea next.

Terms, materials, and the steps of a mechanism don't get their own lead-ins; explain them in place. Most sections need one entry point, and few need two.

The pattern can recur across the book, but its phrasing shouldn't, much as a piece of music can return to a theme without repeating the same rhythm. Entry points can open with a familiar job or experience, a question a reader might be wondering about, a result from the previous section, a contrast, or a short concrete situation. Vary sentence length, rhythm, and structure as well. Section endings needn't all hand off to the next section the same way, and many need no handoff at all. Reading several consecutive openings or endings aloud is a good test; if they fall into the same cadence, rework a few.

A broad promise to help readers choose components or understand radio is not enough: connect the unfamiliar mechanism to a concrete result before asking readers to work through it. A section introduction or transition can supply that connection.

Choose the situation for the author's stated audience and purpose. A component's possible uses do not all belong in this book. Reuse settled answers, ask when missing context affects the teaching angle, and verify uncertain factual claims.

For a reader learning about capacitors:

> A circuit's demand for current can change suddenly. When the power supply cannot respond immediately, the voltage can briefly dip. A capacitor placed nearby provides a small reserve of energy that can help meet that demand and keep the voltage steadier. It stores energy when charged and releases energy as it discharges.

The voltage dip gives energy storage a job. Further explanation of capacitance and charging can develop that connection; this example does not define every use of a capacitor.

Always try to begin from something familiar to the intended reader. Often that means building on what the preceding passage just established. When changing topics, establish a recognizable starting point first, then develop the new idea from it. Give readers a clear path into and through the section.

For Technician, start from general knowledge or everyday experience. For General, build on what a Technician probably knows; for Extra, use a General Class perspective. Establish the starting fact briefly where needed, without claiming the reader remembers it or has read an earlier HamBook. A useful refresher welcomes someone who needs it without reteaching the whole prerequisite topic.

A lead-in should reduce the initial learning burden. If understanding the motivating example requires several unfamiliar devices or mechanisms, choose a more familiar starting point or develop those ideas first. Preserve the causal connection rather than simplifying the example by skipping steps. The capacitor example illustrates a strategy, not a mandatory opening template.

Carry the connection through the explanation: link properties to consequences and show how those consequences serve the need. “This improves performance” supplies neither the mechanism nor the conditions under which it helps. Keep the definitions, examples, and qualifications needed to understand the result. An appealing use cannot substitute for accurate explanation, and a benefit sentence before or after a catalogue of facts does not organize that catalogue into a lesson.

Vary both the form of the connection and how you refer to familiar material. Apply an idea directly when that reads naturally; do not repeatedly announce “you probably learned…” or “in the previous section.” A preceding passage or chapter introduction may already establish the need. A brief definition may be necessary for orientation. Required formats, including concise pool-aligned KI blocks, can rely on surrounding prose for context. Do not force a new scenario into every block or procedure.

Let transitions carry a useful idea forward and reveal what the next passage can explain. Avoid forced crises, repeated “Imagine…” openings, stock claims of importance, rhetorical “Why does this matter?” questions, and WHY/HOW/WHAT labels. Natural signposts and conversational questions remain useful when they do real work. The reader should experience the connection without being told about the writing technique.

## Depth and length

Required exam knowledge comes first; essential operating and safety knowledge also belongs. Other material earns space by helping this reader understand or apply those things. Preserve enough context, terms, reasoning, examples, and qualifications to make the lesson usable without adding every engineering derivation, exception, or troubleshooting procedure.

Judge a proposed cut by both the burden removed and the support lost:

1. Which assigned question, operating need, safety concern, or necessary learning step does it support?
2. Does it build on prerequisite knowledge or repeat teaching already supplied? Is a refresher needed here?
3. Would removing it lose a term, causal step, qualification, motivation, transition, or distinct helpful example?
4. Can the same understanding be achieved with less space? Does the pool require the procedure or calculation, or only the concept?
5. Is a figure doing something the text cannot do just as clearly, and could its layout do that job more compactly?
6. Does the shorter version still read naturally, including aloud, and preserve every required answer, necessary reasoning step, and essential operating point?

There is no deletion quota. Keep practical connections that make exam knowledge useful; they quietly counter the idea that the material is pointless. Do not add speeches defending the exam. For niche topics, an orientation and route to further learning may suffice, but a link cannot replace required teaching. Recall facts may need context or a mnemonic rather than an invented mechanism.

Depth follows the particular pool. A decision to omit a nonexam reactance formula or complex-impedance calculation from General does not prohibit teaching it in Extra. Assess the required understanding rather than carrying cuts forward as universal rules.

Preserve the authorized scope: a style pass keeps the information taught; a trimming pass may remove unnecessary material and repair transitions. Removing a substantial prerequisite tutorial changes depth, even if the reader should know it already. Do that when authorized, or propose it separately.

A dense page may need better ordering, clearer sentences, or a missing intermediate step before it needs art. Use lists for parallel choices, comparisons, and ordered actions. Convert one to prose only when the result is more natural and clearer, not merely shorter. Short paragraphs can provide emphasis; unrelated isolated sentences need integration. Combining KI blocks does not justify flattening ordinary lists.

## Book structure and continuity

### Build a teaching sequence

Every HamBook has **Part 1: science and theory** and **Part 2: practical application, operation, and responsibilities**, supported by introductions, appendices, and references. The parts need not have equal lengths or question counts.

Plan from conceptual dependencies and reader needs, then map questions into that progression. Do not copy another publisher's table of contents or default to question-pool order. Earlier HamBooks provide useful series continuity where topics play similar teaching roles, not a template to copy mechanically.

Give each active question a primary teaching home and maintain its question-to-section mapping. Normally an ID belongs to one section; any deliberate duplicate needs a teaching reason. Later applications can use brief refreshers rather than reteaching the topic. Balance question counts only when a move preserves prerequisites and coherent grouping; account for teaching difficulty as well as counts.

Extra should ease readers in before the densest mathematics, placing math early enough to support later work—typically Chapter 2 or 3, rather than first or last.

### Make titles and references useful

Aim for descriptive titles of roughly **30 characters or fewer** so the print ToC fits, without becoming vague or overpromising. A chapter about components should not promise to teach circuit construction. Check the fit of the complete numbered title.

Keep **Part 1** and **Part 2** visible in the ToC and preserve approved wording:

- Technician: “The Science Behind Amateur Radio” / “The Person Behind Amateur Radio.”
- General: “Expanding on Radio Science” / “Expanding on Radio Operation.”
- Extra: confirm the current approved wording. “Advancing” was rejected because it implies contributing to the field; “Advanced” was discussed but is not established here as final.

Directory names may lag behind titles; they do not establish approval or justify an unrelated rename.

For nearby material, prefer audio-friendly references such as “in the previous section” or “later in this chapter.” Use numbers when the destination is distant or ambiguous, and full titles only when they help locate material in a substantially different part of the book.

After moves or renames, update references in both directions throughout prose, figures, captions, introductions, ToC material, and maintained outlines. Check translated structure when relevant. A working link can still describe the wrong subject; [metadata and link rules](#manuscript-files-and-syntax) protect both navigation and studying.

## Voice, grammar, and terminology

Aim for **tenth-grade reading level or easier**, with a conversational, friendly tone, believable personality, and cheerfulness that does not feel forced. Name concrete things and what they do. Keep useful humor and lively observations; avoid patronizing simplification, exaggerated excitement, and buildup that delivers only an ordinary fact.

### Use variety to help readers follow meaning

**Do not begin sentences with coordinating conjunctions, especially And, Or, or But.** This does not prohibit conditional openings such as “When…” or “If…,” or phrases such as “For example….” A skill's “therefore/but” diagnostic describes conceptual connections, not prescribed sentence starters.

The following are soft preferences, not rewriting quotas:

- Prefer active voice; retain passive wording when the actor is irrelevant or the pool's phrasing matters.
- Vary sentence length and structure. Short sentences can emphasize a point; longer ones can show relationships.
- Avoid distracting word repetition and repeated sentence patterns. Keep technical terms stable and use parallelism when it helps comparison or emphasis.
- Give each paragraph one main point with enough support to develop it.

Do not minimize difficulty with “obviously” or claims that readers “just” need to understand something. Ordinary uses of “just” or “simple” are not automatically wrong. Scrutinize canned phrasing and repeated metaphors across the book, including “the bottom line,” “let's dive in,” and “Swiss Army knife.” A natural expression used once need not become a ban; a repeated template needs attention.

Readability scores flag passages to inspect, not words to delete. Check whether readers can follow the point and causal steps with their expected knowledge. Keep necessary technical terms instead of replacing them with vague language to lower a score.

### Keep language recognizable and precise

Use **HamBook** for the series, not “license manual” or “handbook,” and preserve the approved full title. Write **General Class License**, not “General License,” and use unambiguous class names for Technician and Amateur Extra. Use community terms such as **Volunteer Examiners** or **Administering Exams**, not “Volunteer Examining.”

Match pool terminology and spelling where recognition matters: use **alpha** if the pool does. An alternate spelling may belong in an appendix, not repeated qualifications. Keep distinctions such as PEP/ERP/EIRP and allocation/emission permission/band plan consistent after teaching them.

The author's diode term is **forward threshold voltage**, not “turn-on voltage.” Explain the sharp current increase without implying linear behavior, a perfect switch, or unlimited current.

Check literal meaning and pronoun references, especially for audio. Name what is supplied, received, measured, or changed: a cable supplies power to a radio. A listener should not have to reconstruct which device or quantity “it” means.

Use numerals for measured quantities, calculations, frequencies, and identifiers, with a space before the unit: **146.52 MHz**, **50 Ω**, **100 W**. Ordinary prose generally spells out one through nine and uses numerals from 10 onward. Round only where precision adds no needed meaning; never change a legal boundary or exam answer through rounding.

Use code styling for literal syntax, paths, and commands. Preserve the target book's established typography for call signs and technical values rather than normalizing it during an unrelated edit.

## Exam facts and Key Information

Readers scanning highlights need a dependable examination layer; readers following the lesson need enough explanation to understand those facts.

### Preserve coverage and answer recognition

The section's `questions` frontmatter defines its assignments. Read each actual question, correct answer, and relevant distractors in the intended pool. Honor an existing deliberate `questionPool` override; never add one merely to hide unknown IDs.

For each assigned ID, teach enough to select and understand the answer, including every component of an “all these choices” answer. In manuscript source, include **exactly one** body anchor, `{{< link id="E6A02" >}}`, at its teaching point, usually in KI. The frontmatter IDs must match the anchor order; do not add unassigned anchors.

**Most questions should connect to KI blocks, and every KI block must directly support assigned questions.** Motivation, general advice, and interesting facts belong in ordinary prose. Teach a coherent lesson rather than quoting stems or writing a miniature answer explanation for each ID; the separate question review supplies canonical questions. Distractors reveal distinctions that need teaching, not an obligation to explain every wrong choice.

**Each KI item is a statement that answers one or more assigned questions.** Match the pool's phrasing as exactly as the sentence allows, usually by combining the question's own words with the keyed answer. After reading the KI, a reader should be able to look at the question and know the answer at once, without doubt. Before changing KI, check the exact question and its correctness-determining qualifiers. Active voice and variety do not justify weakening exam recognition. Keep qualifiers such as “nearly” or “among common types” out of the KI statement; when a practical qualification matters, put it in the nearby prose. A KI statement never refers to the exam or pool (“the exam's answer,” “the question says,” “among the listed choices”) and never lists the answer choices. Replacing an antenna fact with a different true antenna fact still breaks coverage.

**Key Information is part of the teaching, not a recap of it.** The prose leads up to a fact: it supplies the context, mechanism, or reasoning. The KI then states the fact. Don't state the same fact in a prose sentence and again in the KI, whether the prose version is italicized or not. A term may first appear in a KI statement when the surrounding prose has given the reader what they need to understand it. Prose after a KI builds on it rather than restating it.

**Italicize exam facts that are not stated in a KI block. Inside KI, italicize only for helpful emphasis, never the whole block or more than about 70% of its text.** Do not bold whole blocks; the bold **Key Information:** label identifies them.

Reserve italics in prose for those exam facts so readers scanning for them aren't misled. Bold a genuinely new term where it is defined, and only there. Write variables as math (`$d$`, not `*d*`), and use bold or plain wording rather than italics for emphasis.

### Group related facts coherently

Combine closely related KI items into one bulleted block when the text that teaches them is nearby. Two KI blocks under the same subheading separated by only a sentence or two should rarely remain separate, and immediately consecutive blocks never should. Do not go to the other extreme: a single combined block at the top or end of a section pulls each answer away from its explanation. Each block belongs near the prose that teaches its items. Optimize first for readability and then for space; every KI block adds visual padding, so a few well-placed blocks serve better than many small ones. If the items are unrelated, fix placement or supply a real transition rather than forcing them together. After combining, reconsider the surrounding paragraphs: merge shared explanations, but preserve distinct steps and useful lists.

Single-fact and related-fact forms:

```markdown
> **Key Information:** The most useful characteristic of a Zener diode is a constant voltage drop under conditions of varying current. {{< link id="E6B01" >}}

Ordinary explanatory prose separates distinct teaching groups.

> **Key Information:**
> - N-type semiconductor material contains excess free electrons. {{< link id="E6A02" >}}
> - An impurity atom that adds holes to a semiconductor crystal structure is called an acceptor impurity. {{< link id="E6A04" >}}
```

End KI statements, list items, captions, and other read-aloud prose with punctuation so speech systems can end utterances properly. Put punctuation before the question anchor.

## Manuscript files and syntax

These concrete conventions keep teaching, navigation, and study links intact across formats. Their exact syntax matters even when the surrounding editorial approach changes.

### Edit maintained sources

Paths are relative to the `hambook/` repository inside the parent print project.

| Location | Role |
| --- | --- |
| `<book>/content/` | English source manuscript. |
| `<book>/content.es/` | Spanish source; edit only within translation scope. |
| `<book>/pool.json` and translated pool data | Exam baseline; do not silently change it during editing. |
| `<book>/images/`, including `<book>/images/illus/` | Book-specific source art. |
| `<book>/hugo/static/figures/` | Tracked official pool figures: a source-asset exception within Hugo structure. |
| `hugo-common/` | Shared web behavior and genuinely shared assets. |
| `../hugo-pdf/`, `../scss/` | Shared print content/templates and styles. |
| Under `<book>/hugo/`: `content/`, `content.*/`, `public/`, `resources/`, `static/images/`, `data/questions*.json` | Normally generated or ignored Hugo outputs. |
| `../output/` | Generated publishing output. |

A generated edit can disappear at the next import. Conversely, tracked configuration and book-specific CSS under `<book>/hugo/` are not disposable. Inspect tracking and ignore rules before deciding what to edit or copy.

Keep book-specific assets with their book, even when several of its pages reuse them. Use shared sources for genuinely common logos, templates, and behavior. For a new book, compare current Technician and General configuration, establish source content, pool and root `poolid`, and required tracked Hugo files without copying generated output or duplicating shared behavior. Preserve the requested initial status.

### Preserve study and publication metadata

```markdown
---
chapter: "1"
section: "1.1"
questions: ["E6A02", "E6A04"]
status: generated1
---

### Section 1.1: Diodes and Junctions

Opening prose.

#### Building a Junction

Teaching and the relevant question anchors.
```

This is a syntax example, not a complete lesson. **Every page assigning one or more questions needs `chapter` and `section`** for grouping, HamStudy links, and QR codes. Keep them as strings: `"1.10"` must not become `1.1`. An introduction with `questions: []` needs no invented section assignment.

Preserve metadata unless the task requires changing it. `status` records editorial workflow. **Never set the Hugo `draft` boolean on a manuscript page:** the web, watcher, and print builds all run without `--buildDrafts`, so a draft page is silently excluded from the build and every table-of-contents entry and reference to it fails with page-not-found errors. Editorial readiness belongs to `status`, not `draft`. Keep fields such as `epub`, `print`, `pagebreak`, `epubtype`, and `poolid` until their purpose and authority for change are clear.

### Understand editorial status

The status tells the next editor what review the material has received and how carefully to preserve settled work. It consists of a **category prefix followed by a revision number**, such as `reviewed1`, `draft2`, or `published1`. In the table, `N` represents that number, not a literal character.

| Status category | Meaning |
| --- | --- |
| `generatedN` (also unnumbered `generated`) | AI-created content following the author's layout and assigned question list. Further generated versions may be completely new AI drafts; the content has not yet received the guided review represented by `reviewedN`. |
| `reviewedN` | AI-reviewed and updated under a human reviewer's direction. The improvements are guided, but the material is still AI-generated. |
| `draftN` | Human review and editing have been completed. The manuscript may still be rough or lack images and figures, but it should be content-complete and cover every assigned question. |
| `publishedN` | The content has been finalized and is ready for publication, with all required images and figures present. |

The number tracks **major revisions within the same category**: a major draft revision advances `draft1` to `draft2`; a major revision of publication-ready content advances `published1` to `published2`. A minor correction does not by itself require a new number, and increasing the number does not change the category.

Older manuscripts use `publishN`, such as `publish1`, for the same publication-ready category. Apply the same editing care to those pages; do not rename their statuses during unrelated work.

**Update a page's status only when instructed**, preserving any explicitly requested value. Completing an agent pass does not establish that human review or final approval occurred. These labels track editorial work; they do not establish copyright ownership or legal protectability. See [the revision rules](#match-the-intervention-to-the-stage-and-request) for how the category affects editing scope.

### Keep source names and navigation aligned

The parser derives a title from the first nonblank heading of any level. Omit frontmatter `title` unless the intended navigation/metadata title differs. Add `slug` only for a concrete need, inspecting references before deleting an existing one. Do not add aliases to unreleased pages for imagined backward compatibility.

Use the established source hierarchy; the exporter normalizes headings for individual pages:

```markdown
# Part 1: Approved Part Title

## Chapter 1: Chapter Title

### Section 1.1: Section Title

#### Subsection Heading

##### A Necessary Deeper Heading
```

These occur in their appropriate files, not all on one page. An introduction may use H1; instructional files do not all need it. The importer shortens chapter/section navigation labels, so preserve complete source headings rather than adding redundant title overrides. Part labels remain visible.

Part and chapter `index.md` files hold introductions. `conclusion.md` follows ordinary sections and child chapters; `toc.md` is skipped in ordinary manuscript traversal. Filename order affects reading order. Preserve the book's numbering/padding convention, and keep filenames meaningfully aligned with titles; abbreviations are fine.

Prefer distinct, useful headings across the book. Where repeated wording is genuinely preferable, supply a unique ID:

```markdown
#### Checking the Match {#checking-the-feed-line-match}
```

The print system currently scopes heading IDs by page, but that does not replace meaningful headings or verification after structural changes.

### Keep references and translations aligned

Question anchors identify teaching points; they are not generic page links. Use `pageref` for internal destinations:

```markdown
[the previous section]({{% pageref "4.3" %}})
[the matching discussion]({{% pageref "4.3#matching-heading" %}})
[Chapter 7]({{% pageref "chpt7" %}})
```

Use a section number, existing unique explicit slug, or supported content path. `chpt7` works only when that destination exists; do not add a slug to imitate the example. Validate the destination and its subject, with visible wording that follows the relative-reference preference.

Translations require matching structural order and **identical question arrays in identical order**. If a source move affects translation structure outside the task's scope, report the dependency rather than silently editing another language or claiming the combined build is ready.

Use ordinary Markdown with blank lines around blocks. Bold important new terms sparingly; reserve italics according to the exam-fact rules. Tables should compare parallel information, fit print and small screens, and have enough prose that audio understanding does not depend on column alignment. Do not align columns with manual spaces.

## Mathematics

A calculation should help readers predict, compare, or interpret something. Explain the quantities, units, needed steps, and meaning of the result. Include required methods and useful worked examples; neither skip difficult exam math nor reteach familiar arithmetic mechanically.

When the pool tests only a relationship, a conceptual explanation may suffice. When it requires a numerical result, teach the method. In the Extra exam introduction, explain the verified maximum number of math-related questions a candidate could see and what the count includes. Derive it from selection rules and relevant subgroups, not the total number of numerical questions in the pool. Give other books the expectations appropriate to their pools; do not describe required math as safely skippable.

Use proper KaTeX-compatible notation, including subscripts and units:

```markdown
Inline: $P = I \times E$.

$$
\begin{aligned}
I &= \frac{E}{R} \\
  &= \frac{12\text{ V}}{6\ \Omega} \\
  &= 2\text{ A}.
\end{aligned}
$$
```

The established **PIE** mnemonic may support the power law. Explain symbol choices and keep them consistent with the section and pool. Use **E** for voltage in formulas, symbols, and figure labels ($E = I \times R$, $P = I \times E$, $Z = E/I$, $E_{\mathrm{in}}$), as the question pools do; V remains the unit.

Show a formula when it clarifies how to calculate something, even if a nearby KI states the same relationship in words. Remove a displayed formula only when it adds nothing to the surrounding explanation. Apply proper typography inside figures too; use the existing equation-rendering approach where suitable, not fake subscripts or awkwardly positioned plain letters.

Check calculations independently, including units, signs, phase conventions, logarithms, and rounding. Supply enough prose for listeners to understand the operation and conclusion without seeing the equation.

## Figures, illustrations, and accessibility

### Make each image earn its space

A diagram should reveal a relationship, mechanism, geometry, comparison, or sequence more clearly than prose alone. A sparse, compact character illustration can make a dense page approachable. Judge both by their contribution to learning relative to their printed footprint, audio description, production difficulty, and distraction. Do not decorate around an unresolved explanation problem.

A replacement must preserve the original teaching purpose. A circle-to-sine-wave animation and a phase comparison teach different relationships even though both show sine waves. Keep useful web animation; its first frame or an adequate static equivalent can support print.

For compactness, improve arrangement, spacing, or relative sizes where needed. Side-by-side panels often save height if they remain legible. Use CSS for display size: changing an SVG's outer dimensions without changing its geometry does not improve its layout. Inspect aspect ratio, margins, labels, and rendering after asset replacements, including PNG-to-SVG conversions.

### Design for every edition

Prefer shapes, arrows, familiar symbols, and short variable labels over embedded explanatory sentences. Captions and surrounding prose translate more easily and use the book's fonts. Keep any labels necessary to interpret the figure; language reduction must not make it a puzzle.

Use tasteful color to improve contrast and distinctions in this color book. Also distinguish important traces by markers, line styles, position, or labels. Check actual light- and dark-mode behavior, intended print size, and narrow screens: transparency alone does not make black lines visible, and indiscriminate inversion can damage colored art.

### Use supported image markup

Use Markdown images, never raw HTML image tags:

```markdown
![A shared node divides incoming current into two outgoing branches. One carries I1 and the other I2. Arrows show that the incoming current equals I1 plus I2.](../../../images/s1-1-branch-currents.svg)
{.img-centered .img-large .img-mobile-full caption="At the junction, incoming current equals the sum of the branch currents."}
```

The example path must be replaced with an actual matching asset. Put attributes **immediately after the image**. `caption="..."` renders a visible caption; with it, classes attach to the figure, otherwise to the image.

| Existing class | Use |
| --- | --- |
| `.img-centered` | Center art. |
| `.img-xsmall`, `.img-small` | Compact illustrations. |
| `.img-med`, `.img-large`, `.img-xlarge`, `.img-full` | Increasing or context-dependent sizes; `.img-med` and `.img-large` differ in print despite similar screen widths. Check current styles. |
| `.img-mobile-full` | Expand on narrow screens independently of print width. |
| `.float-left`, `.float-right`, `.clear` | Wrap text around compact art and end the float when needed. Inspect the resulting text column. |
| `.img-pgcap`, `.img-portrait` | Capped or portrait sizing; verify screen and print behavior. |
| `.img-bw` | Theme filtering for suitable monochrome art, not arbitrary colored images. |

Class names do not guarantee good layout. Book-specific classes such as Technician's `.illustration-gutter` work elsewhere only if their styles are available.

### Give listeners access to the image's teaching

Alt text is used by screen readers and the audiobook. It must convey the intended lesson as fully as words reasonably can: relevant connections, direction of flow or time, axes and values, comparisons, symbol meanings, and the conclusion the arrangement supports. “Diagram of a circuit” is insufficient.

Describe the actual art, including left/right or above/below relationships. The **alt** supplies its information; the **caption** identifies its point or context. Coordinate these with nearby prose to avoid pointless repetition without making access depend on sight. Decorative characters need brief accurate descriptions, not invented technical meanings. Read the paragraph, alt, caption, and following prose as a sequence.

### Keep artwork credible and maintainable

Custom referenced SVGs need the section prefix **`s1-1-description.svg`**, not `1-1-description.svg`. Official pool figures retain their official names and exam content, such as `G7-1.svg` and `E6-2.svg`; do not redesign or recolor them as a style exercise.

Use the source locations described under [Manuscript files and syntax](#manuscript-files-and-syntax). After asset moves, verify every affected reference and book. Basename lookup can hide a mistaken relative path; use accurate paths and avoid ambiguous duplicate filenames.

Favor simple diagrams and original, consistent illustrations where photography adds little. Use suitable vector tools for diagrams and plots, and image generation for raster art when appropriate. Renaming or wrapping a PNG does not create a useful vector drawing.

Inspect physical plausibility and visual quality: controls face operators, cables connect sensibly, antenna pointing works in three dimensions, and anatomy is proportionate. Nonsensical devices, impossible geometry, inconsistent line work, and conspicuous generation artifacts undermine credibility. Cover art should be inclusive and fun, without disproportionately centering white men. Match approved series art; clean cel-shaded forms can help planned vector conversion without imposing one scene on every cover.

Use original work or assets with verified permission and suitable licensing. Retain provenance and required attribution; do not copy distinctive outside artwork or another book's layout, or promise that generation guarantees legal clearance. Resolve actual provenance uncertainty before incorporating an asset.

## Video lessons

Video combines narration, images, and timing to make relationships visible. Viewers must receive a complete lesson without needing to read the book first. The shared audience, purpose-first teaching, voice, exam, accuracy, and accessibility requirements apply to scripts, authored screen text, diagrams, and review.

An older video README, renderer limitation, or production habit does not override those requirements. If a video need requires an exception, explain the conflict and obtain author confirmation while continuing independent work. The approved closed-caption exception appears below.

### Preserve the teaching while adapting the presentation

Use the matching book's license-level prerequisites and question assignments. A course may build on its earlier lessons, but it must supply necessary reasoning, terms, calculations, safety conditions, and useful context before practice. KI coverage alone does not establish a complete lesson.

Preserve part and chapter introductions' orientation, roadmap, and practical motivation. They may be separate videos or part of the first section video; combined versions need distinct navigation markers. The conclusion may accompany the final section, as agreed for tech2026.

Present videos positively as amateur radio lessons, with HamBook as a companion and HamStudy for practice, rather than pitching them as replacing the book. Planned paid availability does not establish a release date or implemented app feature.

Aim for less runtime than equivalent audiobook material when visual teaching allows it. This is a preference, not a quota: give difficult or interesting concepts enough time, preserve useful examples and personality, and compare equivalent scope when reporting durations, including introductions and practice.

### Coordinate sight, speech, and time

Let images show arrangement and change while narration explains relationships and consequences. Speak essential conditions, values, and reasoning so understanding does not depend on sight. Integrate useful alt-text information naturally rather than reading prose, alt, and caption mechanically. Make references such as “this branch” identifiable at that moment and give the object a useful name too.

Reveal or animate changes that matter, then allow time to understand the result. Highlights and zooms must preserve relevant connections. Mark schematic, slowed, or exaggerated motion when viewers might mistake it for measurement. Reuse or adapt art for its teaching contribution rather than restarting each scene with a definition or hook.

Keep labels, equations, and choices readable at ordinary player size and on small screens, clear of captions and controls. Regroup dense material instead of shrinking it beyond readability. Keep explanatory wording editable where practical. Sound examples should explain what to listen for, use meaningful comparisons, and describe the audible distinction in captions or accompanying text; check recording levels and timing. Decorative sound or motion must not compete with teaching.

Speak equations understandably while displaying proper notation. Verify generated pronunciation of symbols, acronyms, call signs, numbers, and units; speech overrides must preserve accurate visible wording and captions. Caption limits are not a reason to flatten narration into uniformly short sentences.

### Make exam emphasis and practice dependable

Teach all assigned knowledge whether or not its question appears in practice. Highlight source KI facts near their explanation, using cards or identified takeaways as appropriate; related facts need not create repeated full-screen interruptions. Authored teaching text follows the book's exam-fact emphasis rules.

**Approved exception:** closed captions may be plain, faithful transcripts without italicized exam facts. The exception does not extend to authored teaching text on screen.

Preserve the author-requested fuller practice blocks: canonical question, choices, required figure, thinking time, correct-answer reveal, and reasoning. Keep question wording, answer identity, and the approved selection unchanged during a wording pass. Select new practice for the distinctions and reasoning it exercises, accounting for section size; the old “about six questions” heuristic is not a ceiling. Video practice does not require an extra book quiz or question-by-question instructional narration.

At the practice transition, offer video questions or the section in HamStudy through a legible QR code and readable link, with a clickable player link where available. Keep this brief. The destination must contain **all** assigned questions, even if practice uses a selection. Verify book, pool, section, question set, and any claimed app-opening behavior.

### Verify the delivered lesson

Review complete scripts and captions for meaning, then watch and listen to the final video at normal speed. Check pacing, transitions, pronunciation, emphasis, visual timing, intermediate animation states, answer reveals, and caption accuracy, timing, and placement. For a delivered player, verify navigation, study links, and downloads.

Stills, contact sheets, transcription, coverage checks, and technical media checks support review but do not substitute for complete viewing and listening. Report which checks occurred and leave missing review explicit. Rendering success is not editorial approval or evidence of learning effectiveness.

After corrections, regenerate affected outputs and review changed passages, transitions, and dependent timing or layout. Keep evidence tied to the delivered version: scripts, media, captions, chapter times, and preview packages must agree.

**Current implementation:** maintained episode YAML lives in `<book>/video/episodes/`, settings in `<book>/video/series.yaml`, and video-specific art in `<book>/video/art/`. Episode `source` references account for included introductions, sections, and conclusions; the manuscript and pool determine teaching scope. Edit maintained sources rather than generated video or captions. Output lives under `../output/video/`, with a separately refreshed preview package. This does not authorize unrelated asset migration.

Consult the [video engine README](../video/README.md) and code for production details and generation/cache side effects. A guide-only edit does not require speech generation or course rebuilding. Source changes, rendered changes, and completed review are distinct states.

## Accuracy and safe simplification

A useful model is accurate at the depth needed for the reader's decision. State conditions that change the answer, behavior, or safe action without burying the main point under irrelevant qualifications. Avoid both false generality and false specificity: a broadly applicable AC rule should not appear limited to 120 V, and advice to watch a meter should not assume every radio has one. Describe common approaches as common rather than making them sound exceptional.

Analogies must preserve the behavior being taught. Use a clear mapping, connect it to the actual mechanism, and mention limits where misunderstanding could change the reader's conclusion. Reuse a helpful established analogy for continuity rather than multiplying competing ones. Hypothetical examples are fine; fabricated events, quotations, statistics, attributions, and “true” anecdotes are not.

Verify uncertain technical claims against primary or authoritative sources and changing rules against current official regulations or agency publications. Record dates and specific provisions when currency matters. Review diagrams, tables, examples, and appendices too: correct prose does not repair a stale band chart. Check distinctions such as geographic limits, channel versus continuous-segment rules, power references, control methods, and withdrawn question IDs wherever relevant.

The pool establishes exam expectations, not current permission to operate. For a confirmed conflict, teach the expected answer clearly and explain the operational distinction nearby. Do not silently substitute an answer or present an obsolete rule as safe permission.

Put necessary safety constraints where readers might act, using brief reminders and references when fuller treatment exists elsewhere. Preserve hazard controls and warnings without adding unrelated hypothetical dangers. Omit unsupported optional advice while still teaching exam topics accurately.

Treat another model's review as hypotheses: confirm factual problems before fixing them, distinguish preferences from errors, and ask about consequential preference changes the author has not settled. Account for rejected recommendations when the review task calls for it.

## Revision and verification

### Match the intervention to the stage and request

Early generated material needs room to find a sound teaching structure. Human-edited drafts and publication-ready material need greater care to protect settled work and keep review diffs manageable. Choose the editing approach from the [status category prefix](#understand-editorial-status), regardless of its revision number:

- **`generated…` and `reviewed…`:** Material is still AI-generated and open to substantial revision. Reorder, regroup, replace, or rewrite explanations when that will meaningfully improve the section. Do not preserve a weak structure merely to minimize the diff; judge the resulting lesson by its teaching, flow, and reading burden.
- **`draft…` and `published…` (including older `publish…` values):** Make careful, targeted edits. Prefer the smallest change that fully solves the problem, preserve settled wording and structure, and keep revision diffs easy to review. Make larger changes only when necessary or explicitly requested, with a clear reason. This applies equally to `draft1`, `draft3`, `published1`, and later revisions within those categories.

The Hugo `draft` flag (prohibited in manuscript sources, above) does **not** put `status: generated1` material into the editorial draft category. Preserve identifiable author edits and explicit decisions at every stage.

The request still determines scope: a request for one sentence is not permission to rewrite the book, while a full generated-section revision may require rebuilding its progression. Minimum Viable Teaching limits unnecessary reader burden; it is not a minimum-edit rule.

| Requested pass | Scope |
| --- | --- |
| Review or recommendations | Findings and focused questions; no manuscript edits unless requested. |
| Style, accessibility, or purpose-first revision | Improve clarity, tone, and progression while preserving information taught, technical meaning, and coverage. |
| Trimming/MVT | Remove unnecessary material and repair flow while retaining required teaching, safety, and essential operating knowledge. |
| Factual correction | Fix the verified claim and affected examples, figures, KI, and references. |
| Structural revision | Move or regroup within scope while preserving coverage, dependencies, navigation, and series design. |
| New draft | Develop complete teaching within the approved outline, assignments, format, and status. |

Ask when the answer changes a consequential edit: describe the passage and tradeoff, reuse established decisions, and continue independent work. Do not invent approval steps for authorized work or treat silence as approval where a decision is needed. If a tool or rule blocks work, name the action and source of the restriction.

### Check the outcomes independently

Consider coverage, style, accuracy, and presentation independently so improvement in one does not hide damage to another. Use separate passes for substantial revisions; choose and repeat the relevant checks according to the scope and risks of the edit:

| Outcome | Evidence to seek |
| --- | --- |
| Complete, recognizable exam teaching | Every active question has a home, with no accidental unknown or withdrawn assignments; anchors, order, KI, and italics agree with the actual pool; all required answers and reasoning remain. |
| A coherent reader journey | Appropriate prerequisites, clear need and mechanism, sufficient depth, natural transitions, and introductions that match the settled sections. |
| Clear, engaging language | Understandable causal steps, suitable reading difficulty, natural rhythm and personality, correct terminology, punctuation, and grammar. |
| Reliable facts and actions | Verified changed claims, calculations, analogies, qualifications, and safety instructions. |
| Accessible, economical presentation | Useful figures with matching alt/captions, readable math, helpful lists and KI grouping, and working visual/audio flow. |
| An intact publishing contract | Correct metadata, filenames, headings, references, translations within scope, and real image paths; preserved user work and publication state. |

After revising each section, reread it uninterrupted and across its boundaries from the intended reader's perspective: someone starting out for Technician, someone with Technician-level preparation for General, or someone with General-level preparation for Extra. Consider what that reader has encountered earlier in this book. Reading the preceding HamBook is one useful perspective to test, but the section must also work for readers who prepared elsewhere or need a brief reminder.

Ask during that reread:

- Does the opening connect smoothly to something familiar, and does each later idea follow naturally?
- Have we explained the new material well enough, including the steps needed to understand it?
- Are we overexplaining or repeating knowledge that needs only a brief refresher?
- Does anything else need to change for this reader to follow the lesson comfortably and accurately?

Review and revise **up to five times per section, as needed, before moving on**. Match the scale of each change to the section's [status category](#match-the-intervention-to-the-stage-and-request). Each iteration should address a real teaching or reading problem; stop when the criteria hold rather than inventing changes to reach five. Report any unresolved issue rather than treating the iteration limit as proof of completion.

Settle sections before revising their chapter introduction, then check part introductions and “How to Use” for changed promises.

Use automation where it can detect a failure, and editorial review where it cannot. A successful build does not establish explanation quality; word counts and readability scores are measurements, not proof of reader understanding.

### Verify without changing the baseline accidentally

For prose work, read-only source and diff checks often suffice. **Importing can refresh tracked `pool.json`** from HamStudy using the language root's `poolid`; current CLI behavior has no documented pool-freeze switch. Check side effects before running [publishing scripts](package.json), account for resulting changes, and do not accept an incidental pool update as part of prose editing. Import sanity checks can warn without failing, so inspect warnings.

When output inspection is needed, verify that it reflects current sources. Check changed figures visually and inspect layout in appropriate web or print HTML, including light/dark behavior. Test shared changes in affected books. PDF generation still requires a request; do not claim verified page counts or print layout from source checks alone. Report any unperformed checks that limit the conclusion.

## Skills and supporting tools

Skills supply methods; this guide supplies the project decisions those methods must serve. Read the relevant installed skill and supporting references, locating equivalents if paths differ. The established purpose does not need reconfirmation before routine authorized work.

| Skill | Use |
| --- | --- |
| [accessible-technical-writing](/Users/richard/.agents/skills/accessible-technical-writing/SKILL.md) | Audience, depth, structure, voice, analogies, and review. References include `depth-calibration`, `structure-and-flow`, `voice-and-style`, `cognitive-load`, `analogies-and-accuracy`, `anti-patterns`, and `review-passes`. |
| [purpose-led-writing](/Users/richard/.agents/skills/purpose-led-writing/SKILL.md) | Connect relevance, role, behavior, and mechanism. |
| [purpose-led-development](/Users/richard/.agents/skills/purpose-led-development/SKILL.md) | Preserve author purpose, scope, and commitments while adapting methods. Use `book-scope-and-depth` for trimming and `authoring-instructions` for guidance documents. |
| `imagegen` | Raster illustration work; locate the installed skill. |
| [ham-radio-marketing-copy](/Users/richard/.agents/skills/ham-radio-marketing-copy/SKILL.md) | Covers and promotional text, whose persuasive role differs from instruction. |
| `pdf` | Requested PDF inspection or rendering; locate the installed skill. |

Apply generic defaults with judgment: “assume no knowledge” does not erase license prerequisites; rigid example, sentence, paragraph, or quiz quotas are not project requirements. Do not force every section into one framework or add redundant quizzes to the book manuscript; video practice follows its separately approved format. The project's reading target, KI fidelity, and explicit author choices govern conflicts.

For publishing questions about software libraries, APIs, frameworks, or CLIs, follow repository Context7 documentation instructions. Ordinary prose editing does not need unrelated software research.

### Implementation references

Consult these for current behavior, without treating implementation as authority to change editorial requirements:

- [Parser and metadata](src/importer/parser.js), [import/pool refresh](src/import.js), and [question sanity checks](src/importer/sanity-check.js).
- [Image processing](src/importer/image-utils.js), [Hugo/title output](src/importer/outputs/hugo.js), [image attributes/captions](hugo-common/layouts/_default/_markup/render-image.html), and [page references](hugo-common/layouts/shortcodes/pageref.html).
- [Shared web styles](hugo-common/assets/_custom.scss), [print styles](../scss/_pageSettings.scss), and [combined print content](../hugo-pdf/layouts/_default/allcontent.html).

Conditional output supports:

```markdown
{{< web-only >}}
Web-specific material.
{{< /web-only >}}

{{< print-only >}}
Print-specific material.
{{< /print-only >}}
```

Verify exporter behavior before relying on audio-specific shortcodes. Every edition needs an adequate explanation; conditional output must not hide essential instruction from one audience.

## Handoff and completion

Leave enough state for the next agent to continue without reconstructing decisions: book/language/pool and scope, author decisions and open questions, completed units, constraints, sources for nonobvious corrections, checks performed and outstanding, pending work or side effects, and the next step.

Report material changes, intended reader benefit, evidence, and limitations without defending every sentence. Distinguish source edits from rendered output and completed review. Do not claim perfection, factual verification from a style pass, or layout review without inspecting it.

The completion test is whether both readers—the one preparing quickly and the one learning in depth—have a clearer, dependable path with no unnecessary burden.
