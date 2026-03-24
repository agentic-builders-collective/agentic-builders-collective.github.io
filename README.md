# Agentic Builders Collective Website

This repository contains the public website for the Agentic Builders Collective. The site is built with Astro and uses a hybrid content model: structured community data lives in YAML, while longer-form tips live in Markdown.

## Stack

- Astro for the site framework
- Astro content collections for typed content and data loading
- YAML entries for structured lists such as people, resources, shares, and meetups
- Markdown for richer editorial content such as tips

## Getting started

```sh
pnpm install
pnpm dev
```

Open `http://localhost:4321/` during development.

## Content model

The main goal is to make contribution pull requests small and obvious:

- `src/data/people/*.yaml`
- `src/data/resources/*.yaml`
- `src/data/shares/*.yaml`
- `src/data/meetups/*.yaml`
- `src/content/tips/*.md`

See `docs/content-model.md` for field-level guidance and example frontmatter.

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
