# HamStudy HamBook Writing Style Guide

## Structure

These sections are designed to be published using Hugo. Each should have "front matter" which will have a chapter and section, indicating where in the book it lives, an array of questions, and a status field.

The array of questions in the front matter is the "source of truth" for the content; if there are questions mentioned in the front matter they must be addressed, while if there are links to questions (e.g. {{< link id="G9B05" >}}) that aren't in the front matter it's probably a mistake. All questions from the question pool must be covered by at least one section, and there may be cases where it makes sense to have them discussed in multiple places, but generally we'll only link it in one section.

There should be exactly 1 - no more, no fewer - link in the content for each question in the front matter.

While the Set of question IDs in the front matter is the source of truth, the order should follow the order they appear (are discussed) in the content, so if the order doesn't match please reorder the questions in the front matter.

### Status

The status field is to help me keep track of where in the writing process we are. Here are the levels:

- generated: Initial content has been created by an AI following the layout and question list I specified
- generated_n_: Used if additional "Generated" content is created later where a completely new generated draft without direction is created
- reviewed1: Content has been reviewed and updated by the AI under direction from a human reviewer. Still all AI-generated, but with guided improvements. Additional "reviewed_n_" stages may be added for further revisions.
- draft1: A final human review and edit stage has been completed, this is considered the "first draft" as it's the first stage that is fully copyrightable by humans. Likely missing images and figures. Still considered rough, but should be "content complete", covering all questions. Additional "draft_n_" stages may be added for further revisions.
- publish1: The content has been finalized and is ready for publication; all images and figures have been added. Additional "publish_n_" stages may be added for further revisions in the future.

IMPORTANT: The status should not be updated unless instructed; when in doubt, ask before making changes.

## Book Organization and Cross-Referencing

### Two-Part Structure
Each HamBook follows a deliberate two-part structure:

**Part 1: The Science** - Covers concepts, science, and theory
- Focuses on understanding the "how" and "why"
- Builds foundational knowledge
- Explains principles that underlie amateur radio

**Part 2: Operating as a [Technician/General/Extra]** - Covers practical application
- Shows how to use the concepts from Part 1
- Focuses on real-world operation
- Connects theory to practice

### Avoiding Redundancy While Maintaining Clarity
We aim to teach each concept thoroughly once, then reference it when needed later:

**First Teaching**: When introducing a concept for the first time, provide complete explanation with context, examples, and exam information.

**Later References**: When the same concept appears again in a different context, briefly remind the reader and reference back to the original discussion.

### Cross-Reference Format
When referencing earlier material, use clear, helpful pointers:

**Good Examples**:
- "As we discussed in Chapter 3's exploration of antenna basics, a dipole's radiation pattern..."
- "Remember from Section 2.4 how SWR affects your signal? Here's where that knowledge becomes critical..."
- "Building on the frequency allocation principles from Chapter 1, let's see how they apply to DX operation..."

**Avoid**:
- Vague references like "as mentioned earlier"
- Repeating full explanations of previously covered material
- Assuming readers remember everything without any reminder

### Practical Guidelines
1. **Track Key Concepts**: Major topics that will be referenced multiple times should be noted during initial writing
2. **Use Descriptive References**: Include both chapter/section numbers and topic descriptions
3. **Brief Refreshers**: A single sentence reminder often suffices before applying a previously learned concept
4. **Progressive Building**: Each part should clearly build on the previous, with Part 2 applying what Part 1 taught

## Core Writing Philosophy: Start with Why

We're writing the **HamStudy Technician License HamBook** or **HamStudy General Class License HamBook** (never call it a "license manual" or "handbook"). Following Simon Sinek's "Start with Why" principle, we begin every topic by establishing purpose and meaning before diving into details. That doesn't mean that we begin by literally asking "why" questions, however.

**The Purpose-First Framework:**
- **Purpose Layer**: What this enables the reader to do or achieve
- **Method Layer**: How or why this approach works in practice  
- **Details Layer**: The concrete facts, numbers, or procedures

This creates emotional connection and context that makes technical information meaningful and memorable.

## Core teaching philosophy: MVT, or Minimum Viable Teaching

Without being too extreme about this, we need to remember that we are primarily aiming to help a reader to pass the exam and be able to operate with the license. There are *many* topics we could spend a lot of time on, but we want to teach the minimum amount needed to give them enough grounding to be able to use things that are common or understand well enough to look for more information on things that are less universally applicable to all operators.

We want to be as brief as possible, but not more brief than is truly viable; it's a fine line to walk, but we fail if we underteach just as we fail if we overteach.

## Voice and Tone

### Conversational Teaching Style
- Write as a friendly, experienced ham explaining to an eager newcomer
- Use "you" to address the reader directly
- Maintain enthusiasm without condescension
- Build confidence while acknowledging complexity
- Avoid being "over the top" and overusing metafors

**Good**: "When you key up your mic for the first time, you'll be joining a global community that spans generations."

**Avoid**: "Students often struggle with this concept" or overly formal academic language.

### Real-World Connection
- Connect every concept to actual amateur radio activities
- Use concrete examples and scenarios
- Include practical anecdotes (🔥 for dramatic stories)
- Explain how concepts enable amateur radio magic

## Content Structure

### Purpose-First Content Structure
When explaining any technical concept, regulation, or procedure, organize using this three-layer approach:

#### 1. Purpose Layer (Connect to Goals)
**Lead with what this enables the reader to do or achieve:**
- Connect to practical ham radio activities (DXing, emergency communication, experimentation)
- Explain the problem this solves or opportunity it creates
- Make it personal to their experience as an operator
- Show how this expands their capabilities

#### 2. Method Layer (Explain the Principle)
**Describe how or why this approach works in practice:**
- Provide the reasoning that makes it effective
- Explain the practical logic behind rules or procedures
- Show how it fits into the bigger picture of amateur radio
- Connect to established amateur radio practices

#### 3. Details Layer (Present Specifics)
**Give the concrete facts, numbers, or procedures:**
- State actual regulations, frequencies, formulas, or specifications
- Provide precise technical details for exam preparation
- Include memorization aids and key exam points
- Reference specific question requirements

**Example Structure:**

❌ **Don't write:** "What are frequency allocations? The FCC assigns different frequency bands..."

✅ **Do write:** "Ham radio gives you access to communicate across the globe, but only if everyone follows the same roadmap *(Purpose)*. Frequency allocations are that roadmap—they ensure when you tune to 20 meters, you'll find other hams doing similar activities, and you won't accidentally interfere with emergency services *(Method)*. The amateur bands are divided into segments: 80 meters (3.5-4.0 MHz), 40 meters (7.0-7.3 MHz), 20 meters (14.0-14.35 MHz)... *(Details)*"

**Key Guidelines:**
- Start every major concept with purpose, not definition
- Avoid chains of "why" questions—integrate purpose naturally
- Avoid headers with "why" questions–headers should declare the purpose
- Connect abstract rules to concrete amateur radio activities
- Use active voice and direct language

### Key Information Blocks
Use **only** for information that directly answers exam questions:

> **Key Information:** The maximum power for Technician Class operators on HF is 200 watts PEP.

**Strict criteria:**
- Must relate to a specific exam question
- Contains exact facts needed for test
- Never for general concepts or background
- Avoid duplicating other text exactly
- Can introduce a topic, then continue with details in regular text
- Use bullet lists only when multiple related exam facts belong together
- _Never_ bold or italicize _entire_ Key Information blocks (only _small emphasized parts_)
- While we prefer to have them spread throughout the text, they can be grouped together if it improves clarity or prevents lots of micro sections. For example, having multiple key information blocks separated only by a sentence or two of regular text can feel fragmented and it can be better to combine the key information blocks into a bulleted list which has several facts relevant to the surrounding flow of the document

Always remember that key information blocks are to focus attention on something that may be needed to pass the exam, but they should never impede understanding of the text.

### Formatting and Media
- *Italicize* exam-specific information
- **Bold** for important concepts and definitions
- `Code formatting` for technical values and callsigns
- Tables for organizing related data
- Images in markdown format only (never HTML)
- Use `![alt text](path)` for images

### Mathematical Content
- Inline math: `$P = I \times E# HamStudy HamBook Writing Style Guide

## Core Philosophy: Start with Why

We're writing the **HamStudy Technician License HamBook** or **HamStudy General Class License HamBook** (never call it a "license manual" or "handbook"). Following Simon Sinek's "Start with Why" principle, we begin every topic by establishing purpose and meaning before diving into details.

**The Why Framework:**
- **Why does this matter?** (Purpose/belief)
- **How does it work?** (Process/method) 
- **What are the specifics?** (Facts/details)

This creates emotional connection and context that makes technical information meaningful and memorable.

## Voice and Tone

### Conversational Teaching Style
- Write as a friendly, experienced ham explaining to an eager newcomer
- Use "you" to address the reader directly
- Maintain enthusiasm without condescension
- Build confidence while acknowledging complexity

**Good**: "When you key up your mic for the first time, you'll be joining a global community that spans generations."

**Avoid**: "Students often struggle with this concept" or overly formal academic language.

### Real-World Connection
- Connect every concept to actual amateur radio activities
- Use concrete examples and scenarios
- Include practical anecdotes (🔥 for dramatic stories)
- Explain how concepts enable amateur radio magic

## Content Structure

### Start with Why Pattern
1. **Purpose**: Why this topic matters to amateur radio
2. **Connection**: How it enables communication/community/service
3. **Method**: How it works in practice
4. **Details**: Specific facts and exam requirements

### Key Information Blocks
Use **only** for information that directly answers exam questions, and only ever italicize things that need particular emphasis:

> **Key Information:** The maximum power for Technician Class operators on HF is 200 watts PEP.

**Strict criteria:**
- Must relate to a specific exam question
- Contains exact facts needed for test
- Never for general concepts or background
- Never bold or italicize the entire block; parts are okay if emphasis is needed.

### Emphasis and Formatting
- *Italicize* exam-specific information
- **Bold** for important concepts and definitions
- `Code formatting` for technical values and callsigns
- Tables for organizing related data

 (use "PIE" format for Power Law for memorability)
- Display blocks: `$P = I^2 \times R$`
- Multi-step calculations: `$\begin{align*}...\end{align*}$` surrounded by `$` on each side
- Always explain variables and include units
- Provide worked examples
- Acknowledge limited math on exam with "escape hatches"

## Language Conventions

### General
- Never start a sentence with a conjunction (and, or, but...)

### Technical Terms
- Define when first introduced
- Build vocabulary gradually
- Use consistent terminology
- Prefer simpler terms when equivalent

### Analogies and Metaphors
Use relatable analogies that truly clarify:
- Water flow for electrical concepts
- Highway systems for frequency allocation
- Mail slots for antenna polarization

**Quality test**: Does this analogy actually help understanding or just sound clever?

### Writing Variety and Flow
- Avoid repetitive conclusions: "The bottom line," "In conclusion," etc.
- Vary transitional phrases beyond "let's dive in"
- Minimize overused metaphors like "swiss army knife of"
- Keep language fresh and engaging throughout
- Maintain conversational flow while covering technical content

### Numbers and Units
- Spell out one through nine, numerals for 10+
- Always include units: "146.52 MHz"
- Use standard abbreviations consistently

## Educational Approach

### Question Integration and Linking
- Address exam questions through natural explanation
- Never quote questions directly
- Include question links like `{{< link id="G2D07" >}}` at the relevant point in text
- Order questions in front matter to match their appearance in the text
- Explain reasoning behind correct answers
- Cover all question IDs in section metadata
- Connect facts to broader understanding
- Ignore question pool organization—group by content logic instead

### Building Understanding vs. Memorization
- Explain the "why" behind rules and procedures
- Connect new concepts to previous learning
- Provide context that makes information stick
- Acknowledge when memorization is appropriate

### Handling Complexity
For challenging topics:
1. Start with practical importance (why)
2. Provide big picture context
3. Break into digestible pieces
4. Offer multiple explanation approaches
5. Include "skip if needed" guidance for non-essential details

## Content Guidelines

### Include
- Concepts needed for exam understanding
- Practical operating information for new Technicians
- Background that aids comprehension
- Real-world applications and examples
- Safety woven throughout

### Question/Remove
- Topics not relevant to Technician privileges
- Complex math beyond basic applications
- Advanced theory not needed for understanding
- Content that confuses rather than clarifies

### Safety Integration
- Emphasize safety within technical discussions
- Use real examples to show importance
- Connect safety to successful operation
- Balance information with avoiding fear

## Quality Checks

### Content Review
- Does this explain why the topic matters?
- Will this help a new ham succeed?
- Is exam information clearly marked?
- Are we building understanding or just cramming facts?
- Does this connect to real amateur radio activities?

### Voice Check
- Is the tone conversational and encouraging?
- Are concepts explained at appropriate level?
- Is enthusiasm for amateur radio evident?
- Would a beginner feel welcomed and capable?

## Screen reader compatibility

Some screen readers will not properly end sentences without punctuation, so all list items, blocks (including key information blocks), etc must end with punctuation, e.g. a period.

## Mission Statement

We're not just preparing people for a test—we're introducing them to expanded amateur radio privileges and capabilities. Every section should help readers understand why General Class matters, how they can use new privileges, and what specific knowledge they need to operate safely and successfully at the next level.

Success means creating operators who pass with understanding, feel confident using new frequency privileges, appreciate expanded opportunities, and have a foundation for continued growth in amateur radio.
