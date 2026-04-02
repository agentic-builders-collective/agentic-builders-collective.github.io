# Agent Notes

This repo is an Astro site for the Agentic Builders Collective. Keep durable behaviour and content structure in versioned docs, and keep this file as a concise map.

## Repo map

- `.github/workflows/` contains deployment automation for GitHub Pages.
- `src/data/` contains structured YAML entries intended for small, reviewable pull requests.
- `src/content/` contains Markdown content where prose matters.
- `src/pages/` contains Astro routes and collection-driven index pages.
- `logo-generator/` is a submodule for logo exploration and related brand assets.
- `docs/content-model.md` is the source of truth for contributor-facing content shape.

## Content conventions

- Default to one file per entry.
- Use YAML for `people`, `resources`, `shares`, and `meetups`.
- Use Markdown for `tips`.
- Prefer kebab-case filenames because Astro uses filenames as stable ids.
- Keep contributor changes additive and localised to a single collection where possible.

## Visual design

- Terminal-like theme uses **consistent font sizes** throughout.
- Base font size is **15px** on `html` element.
- Default to **`1rem` for nearly all visible text**, including cards, body copy, links, and headings where possible.
- Use smaller text only when there is a clear secondary/meta purpose and no reasonable `1rem` alternative.
- Do not vary font sizes for hierarchy; instead, differentiate using:
  - **Brighter colours** for headers/important elements (e.g., `--accent`)
  - **Bold weight** for emphasis
  - **Slightly dimmed opacity** for body/secondary text
- Standard sizes:
  - `1rem` (15px) for primary text and the default across the interface
  - `0.875rem` (~13px) only for clearly secondary/meta text when necessary
- Box/card backgrounds use `--box-bg: rgba(30, 30, 40, 0.45)` — neutral grey with slight blue tint, 45% opacity
