# AGENTS.md - HamBook Codebase Guide

## Project Overview

HamBook is a small library of ham radio license exam preparation guides published at hambook.org. It consists of multiple interconnected components:

### Architecture

```
hambook/
├── diagrams/              # various (mostly python) scripts for generating diagrams used in the books
├── src/importer/          # Node.js import/transform pipeline
├── hugo-common/           # Shared Hugo theme, layouts, shortcodes, assets
├── hugo-root/             # Root site (hambook.org landing page)
|     # (multiple license books, e.g:)
├── tech2022/              # Technician 2022-2026 book
├── tech2026/              # Technician 2026-2030 book
├── general2023/           # General 2023-2027 book
├── extra2024/             # Extra class book
|     # (books will be added for new question pools and to expand the library)
└── ci-scripts/            # Build watcher for Kubernetes deployment
```

### Data Flow

1. **Source content** lives in `<book>/content/` as markdown with YAML frontmatter
2. **Import script** (`src/import.js`) transforms content into Hugo-compatible format, as well as some other formats for different publishing options
3. **Hugo builds** each book using shared `hugo-common` module
4. **Watcher** (`ci-scripts/watcher.sh`) monitors for changes, rebuilds, uploads to S3

---

## Build Commands

### Local Development

```bash
# Install dependencies (required first)
npm ci

# Import and build a specific book
node src/import.js -f hugo tech2022 -o tech2022/hugo
hugo -s tech2022/hugo --config hugo.yaml

# Import only (one-time)
npm run import:tech2022           # Preprocess tech2022 content for Hugo

# Import with watch mode (rebuilds on source changes)
npm run import:tech2022:watch     # Watch tech2022 source and rebuild

# Hugo serve only (assumes import already run)
npm run serve:tech2022            # Serve tech2022 on port 1313

# Full development mode (import + watch + serve)
npm run dev:tech2022          # tech2022 on port 1313
npm run dev:tech2026          # tech2026 on port 1314
npm run dev:general2023       # general2023 on port 1315

# Production build (minified)
hugo -s tech2022/hugo --minify --config hugo.yaml,hugo-prod.yaml --cleanDestinationDir

# Build all projects (CI pattern)
./testbuild.sh
```

### Import Script Options

```bash
node src/import.js -f <format> <project> -o <output> [--watch]

# Formats:
#   hugo         - Hugo static site (primary)
#   mdfile       - Single markdown file
#   dirbook      - Directory-based book
#   audiobookdir - Audiobook structure
#   jsonStruct   - JSON structure output
```

### CI/CD Build Pattern

The watcher script (`ci-scripts/watcher.sh`) runs continuously:
1. Polls git for changes every 60s
2. Runs imports for changed projects
3. Builds Hugo with `--minify --config hugo.yaml,hugo-prod.yaml`
4. Compresses static assets (gzip + brotli)
5. Uploads tar.gz to S3, updates Kubernetes ConfigMap

---

## Code Style Guidelines

### JavaScript (src/importer/)

- **Module system**: CommonJS (`require`/`module.exports`)
- **Async**: Use `async/await` throughout, avoid raw Promises
- **No TypeScript**: Plain JavaScript, no type annotations
- **Naming**: camelCase for functions/variables, PascalCase avoided
- **Exports**: Named exports preferred (`module.exports = { func1, func2 }`)

```javascript
// Good
const { someUtil } = require('./utils');
async function processBook(bookPath) {
  const data = await loadBook(bookPath);
  return transformData(data);
}
module.exports = { processBook };

// Avoid
module.exports = async (bookPath) => { ... };  // Anonymous default
```

### File Organization

```
src/importer/
├── parser.js       # Markdown/YAML parsing, book loading
├── utils.js        # Helper functions (slugify, frontmatter)
├── pool-utils.js   # Question pool utilities
├── image-utils.js  # Image processing
└── outputs/
    ├── hugo.js     # Hugo output format
    └── ...         # Other output formats
```

### Hugo Templates

- **Config chain**: `hugo.yaml` (base) + `hugo-prod.yaml` (production overrides)
- **Module imports**: Books import `hambook.org/hambook/common`
- **Goldmark**: Unsafe HTML enabled, KaTeX math passthrough
- **Multilingual**: Supported via `content.<lang>/` directories (e.g., `content.es/`)

---

## Content Structure

### Book Organization

```
<book>/
├── content/
│   ├── 1. Introduction/
│   │   ├── index.md          # Section intro (epubtype: introduction)
│   │   ├── 0 Intro.md
│   │   └── 1 About.md
│   ├── Part 1. Science/
│   │   └── ...
│   └── toc.md                # Table of contents (skipped by importer)
├── content.es/               # Spanish translation (mirrors content/)
├── hugo/                     # Generated Hugo site (output)
├── images/                   # Book-specific images
└── pool.json                 # Question pool data
```

### Frontmatter Format

```yaml
---
title: "Chapter Title"
slug: chapter-slug
epubtype: chapter           # or: introduction, appendix, etc.
questions:                  # Optional: related exam questions
  - T1A01
  - T1A02
---
```

### Special Files

- `index.md` - Section introduction, gets `epubtype: introduction`
- `toc.md` - Skipped by importer
- `conclusion.md` - Section conclusion

### Hugo Shortcodes

| Shortcode | Purpose |
|-----------|---------|
| `{{< qid >}}T1A01{{< /qid >}}` | Question ID reference |
| `{{< questionList >}}` | Render full question pool |
| `{{< link "slug" >}}` | Internal cross-reference |
| `{{< pageref "page" >}}` | Page reference |
| `{{< captioned >}}` | Image with caption |
| `{{< web-only >}}` | Web-only content |
| `{{< print-only >}}` | Print-only content |
| `{{< audiobook-only >}}` | Audiobook-only content |

### Markdown Conventions

- Images: `![alt](../../images/filename.jpg)` (relative to content dir)
- CSS classes: `{.class-name}` after element
- Math: KaTeX syntax with `$...$` or `$$...$$`

---

## Project-Specific Notes

### Question Pools

Each book has a `pool.json` (and optionally `pool.es.json`) containing exam questions. The `questionList` shortcode renders these from `.Site.Data.questions`.

### Hugo Module System

Books extend `hugo-common` via Go modules:
```yaml
# In <book>/hugo/go.mod
module hambook.org/hambook/<book>
require hambook.org/hambook/common v0.0.0
```

### Static Assets

- Common assets: `hugo-common/static/` (SVGs, vendor files)
- Book assets: `<book>/images/` → copied to `<book>/hugo/static/images/`
- Illustrations: `<book>/images/illus/` for diagrams

### Multilingual Support

Spanish translations mirror English structure:
- `content/` → English (default)
- `content.es/` → Spanish
- Translation keys generated via MD5 hash of file path

---

## Common Tasks

### Adding a New Book

1. Create directory structure: `<exam><year>/content/`, `<exam><year>/hugo/`
2. Add to `PROJECTS` in `ci-scripts/watcher.sh`
3. Create `hugo/hugo.yaml` importing common module
4. Add pool.json with question data
5. Add npm scripts for dev server

### Modifying Shared Styles

Edit `hugo-common/assets/`:
- `_custom.scss` - General customizations
- `_poolCustom.scss` - Question pool styling
- `_questionList.scss` - Question list styling
- `_variables.scss` - SCSS variables

### Adding a New Shortcode

1. Create `hugo-common/layouts/shortcodes/<name>.html`
2. Available in all books automatically via module import

---

## Environment Requirements

- Node.js (for import scripts)
- Hugo extended (for SCSS compilation)
- Dart Sass (not Node Sass - see watcher.sh SASSPATH logic)
- Git LFS (for large binary assets)

---

## License

Content is CC BY-NC-ND 4.0 for web. Contributions grant copyright to HamStudy.org LLC.
