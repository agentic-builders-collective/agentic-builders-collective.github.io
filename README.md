# Agentic Builders Collective Website

This repository contains the public website for the Agentic Builders Collective. The site is built with Astro and uses Astro content collections for both structured YAML data and Markdown content.

## Stack

- Astro for the site framework
- Astro content collections for typed content and data loading
- Single YAML files loaded into collections for structured lists such as people, organisers, resources, articles, sponsors, and FAQ entries
- Markdown collections for event pages, blog posts, and showcase entries

## Getting started

```sh
pnpm install
pnpm dev
```

Open `http://localhost:4321/` during development.

## Content model

Content is defined in [`src/content.config.ts`](./src/content.config.ts). That file is the quickest way to see what exists, how Astro loads it, and which fields are validated.

This repo currently uses two content patterns:

- `file()` loaders for collections stored as a single YAML array in one file
- `glob()` loaders for collections stored as one Markdown file per entry

Structured content currently lives under `src/content/` as single YAML files:

- `src/content/people/people.yaml`
- `src/content/organisers/organisers.yaml`
- `src/content/resources/resources.yaml`
- `src/content/articles/articles.yaml`
- `src/content/sponsors/sponsors.yaml`
- `src/content/faq/faq.yaml`

Narrative or page-like content lives under `src/content/` as Markdown entries:

- `src/content/events/*.md`
- `src/content/blog/*.md`
- `src/content/showcase/*.md`

In practice, that means contributors usually edit one of the YAML array files for short structured additions, or add one new Markdown file when the content needs body copy and richer formatting.

See `docs/content-model.md` for collection-by-collection guidance and examples.

## Available scripts

```sh
pnpm dev
pnpm build
pnpm check
```

## GitHub Pages deployment

This repo is configured to deploy to GitHub Pages via [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) and expects the canonical site URL to be `https://agentic-builders-collective.github.io/`.

For that URL to work as the root `github.io` site, the GitHub repository itself must be named `agentic-builders-collective.github.io`. If the repository stays named `website`, GitHub Pages will publish it as a project site at `https://agentic-builders-collective.github.io/website/` instead.

After the repository name is correct:

1. Open the repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main` to trigger the deployment workflow.

## Notes

- `logo-generator/` is a Git submodule for logo and brand experiments.
- The site currently favours PR-based contribution over in-browser editing or user submissions.
