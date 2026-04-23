# Agentic Builders Collective Website

This repository contains the public website for the Agentic Builders Collective — a Singapore community of builders exploring agentic coding with Claude Code, Codex, Antigravity, and beyond.

The `agentic-builders-collective.github.io` site is the staging environment for the production site at `agenticbuilders.sg`.

## Philosophy: GitHub as CMS

This site intentionally uses **GitHub as its content management system**. All data lives in YAML and Markdown files that are version-controlled, reviewable, and contributed via Pull Requests.

> **Why?** Because we're the Agentic Builders Collective. Contributing to this site should itself be an exercise in using GitHub and AI coding tools — or learning how to with your agent's help.

### How to contribute content

| Page | What to add | File to edit | How |
|------|-------------|--------------|-----|
| `/community` | Your profile | `src/content/members/members.yaml` | Add YAML entry, submit PR |
| `/showcase` | Your project | `src/content/projects/*.md` | Create Markdown file, submit PR |
| `/showcase` | Your presentation | `src/content/presentations/presentations.yaml` | Add YAML entry, submit PR |
| `/articles` | Articles/guides | `src/content/articles/articles.yaml` | Add YAML entry, submit PR |
| `/events` | Event details | `src/content/events/*.md` | Create Markdown file, submit PR |
| `/blog` | Blog posts | `src/content/blog/*.md` | Create Markdown file, submit PR |

**Don't know Git?** Ask Claude/Codex/Cursor to help you: *"Help me submit a PR to add my profile to this YAML file."*

For a copyable agent prompt and profile template, see [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Stack

- **Astro** — static site framework
- **Astro Content Collections** — typed content and data loading
- **Single YAML files** — for structured lists (members, organisers, articles, presentations, sponsors, FAQ)
- **Markdown collections** — for narrative content (events, blog, projects)
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
- `src/content/blog/*.md` — Blog posts
- `src/content/projects/*.md` — Project showcases

Contributors usually edit a YAML array file for short structured additions, or add one new Markdown file when the content needs body copy and richer formatting.

See `docs/content-model.md` for collection-by-collection guidance and examples.

## Available scripts

```sh
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm check    # Type check with Astro
```

## Environments

- Production: `https://agenticbuilders.sg/`
- Staging: `https://agentic-builders-collective.github.io/`

Deployment automation lives in [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml).

## Notes

- `logo-generator/` is a Git submodule for logo and brand experiments
- The site favours **PR-based contribution** over in-browser editing or user submissions
- **Terminal/CLI aesthetic** — single font size (1rem), monospace fonts, minimal hierarchy via color/bold rather than size
- Design principle: *"Make it look like a CLI"*
