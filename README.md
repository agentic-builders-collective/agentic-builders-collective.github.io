# Agentic Builders Collective Website

This repository contains the public website for the Agentic Builders Collective — a Singapore community of builders exploring agentic coding with Claude Code, Codex, Antigravity, and beyond.

The `agentic-builders-collective.github.io` site is the staging environment for the production site at `agenticbuilders.sg`.

## Philosophy: GitHub as CMS

This site intentionally uses **GitHub as its content management system**. All data lives in YAML and Markdown files that are version-controlled, reviewable, and contributed via Pull Requests.

> **Why?** Because we're the Agentic Builders Collective. Contributing to this site should itself be an exercise in using GitHub and AI coding tools — or learning how to with your agent's help.

### Ask your coding agent

You should be able to start with a simple request:

```text
I want to add a new person to the ABC website.
```

Then point your agent at the matching guide:

| Request | Public page | Agent guide |
|---------|-------------|-------------|
| Add a person | `/community` | [`docs/add-person.md`](./docs/add-person.md) |
| Add slides / a presentation | `/showcase` | [`docs/add-presentation.md`](./docs/add-presentation.md) |
| Add an event | `/events` | [`docs/add-event.md`](./docs/add-event.md) |
| Add a project | `/showcase` | [`docs/add-project.md`](./docs/add-project.md) |
| Add an article | `/articles` | [`docs/add-article.md`](./docs/add-article.md) |

Each guide includes a copyable agent prompt, target file, example entry, and validation commands.

For IDs and filenames, follow [`docs/id-guidelines.md`](./docs/id-guidelines.md): readable kebab-case first, deterministic suffixes for collisions, and no random numbers.

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the compact contributor overview.

## Stack

- **Astro** — static site framework
- **Astro Content Collections** — typed content and data loading
- **Single YAML files** — for structured lists (members, organisers, articles, presentations, sponsors, FAQ)
- **Markdown collections** — for narrative content (events and projects)
- **No database** — by design (see Philosophy above)

## Getting started

```sh
pnpm install
pnpm dev
```

Open `http://localhost:4321/` during development.

## Content model

Content is defined in [`src/content.config.ts`](./src/content.config.ts). That file shows what exists, how Astro loads it, and which fields are validated.

This repo uses two content patterns:

- `file()` loaders for collections stored as a single YAML array
- `glob()` loaders for collections stored as one Markdown file per entry

### Where content lives

**Structured YAML files** (edit for short additions):

- `src/content/members/members.yaml` — Community member profiles
- `src/content/organisers/organisers.yaml` — Event organisers
- `src/content/articles/articles.yaml` — Articles, guides, and external writing
- `src/content/presentations/presentations.yaml` — Talk, demo, and workshop presentation links
- `src/content/sponsors/sponsors.yaml` — Sponsors
- `src/content/faq/faq.yaml` — Homepage FAQ

**Markdown files** (add one new file per entry):

- `src/content/events/*.md` — Event listings
- `src/content/projects/*.md` — Project showcases

Contributors usually edit a YAML array file for short structured additions, or add one new Markdown file when the content needs body copy and richer formatting.

See `docs/content-model.md` for collection-by-collection guidance and examples.

For task-specific instructions, use the `docs/add-*.md` guides listed above.

## Available scripts

```sh
pnpm dev      # Start development server
pnpm build    # Build for production, including /logo-generator from the submodule
pnpm check    # Type check with Astro
```

## Environments

- Production: `https://agenticbuilders.sg/`
- Staging: `https://agentic-builders-collective.github.io/`

Deployment automation lives in [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml).

## Notes

- `logo-generator/` is a Git submodule for logo and brand experiments
- Production builds copy `logo-generator/` into `dist/logo-generator/`; deploy hosts must initialise submodules before running `pnpm build`
- The site favours **PR-based contribution** over in-browser editing or user submissions
- **Terminal/CLI aesthetic** — single font size (1rem), monospace fonts, minimal hierarchy via color/bold rather than size
- Design principle: *"Make it look like a CLI"*
