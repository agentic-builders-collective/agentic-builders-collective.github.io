# Agent Notes

This repo is an Astro site for the Agentic Builders Collective. Keep durable behaviour and content structure in versioned docs, and keep this file as a concise map.

## Repo map

- `.github/workflows/` contains deployment automation for GitHub Pages.
- `src/content/` contains typed Astro content collections for YAML and Markdown entries.
- `src/pages/` contains Astro routes and collection-driven index pages.
- `logo-generator/` is a submodule for logo exploration and related brand assets.
- `docs/content-model.md` is the source of truth for contributor-facing content shape.

## Content conventions

- For contributor requests, open the matching guide first:
  - Add a person/profile/member: `docs/add-person.md`.
  - Add slides/a presentation/a talk: `docs/add-presentation.md`.
  - Add an event/meetup/workshop/learning session: `docs/add-event.md`.
  - Add a project/showcase item: `docs/add-project.md`.
  - Add an article/link/guide: `docs/add-article.md`.
- For any new `id`, filename, `personId`, or `eventId`, follow `docs/id-guidelines.md`.
- Default to one file per Markdown entry; YAML collections stay in their existing array file.
- Use YAML for `members`, `organisers`, `articles`, `presentations`, `sponsors`, and `faq`.
- Use Markdown for `events` and `projects`.
- Prefer kebab-case filenames or explicit `id` values because Astro uses them as stable ids.
- Keep contributor changes additive and localised to a single collection where possible.
- Use `personId` for listed members/organisers and `name` for external people; use `eventId` to link presentations to events.

## Visual design

- Terminal-like theme uses **consistent font sizes** throughout.
- Base font size is **15px** on `html` element.
- **Always use `1rem` for all visible text** — no exceptions. This is critical for the terminal-like aesthetic.
- Do not vary font sizes for hierarchy; instead, differentiate using:
  - **Brighter colours** for headers/important elements (e.g., `--accent`)
  - **Bold weight** for emphasis
  - **Slightly dimmed opacity** for body/secondary text
- Standard size:
  - `1rem` (15px) for **all** text including cards, body copy, links, headings, metadata, timestamps, code, everything
  - `13px` acceptable only for inline symbols/arrows (e.g., ▶ characters)
- Box/card backgrounds use `--box-bg: rgba(30, 30, 40, 0.45)` — neutral grey with slight blue tint, 45% opacity

## Style change policy

- Do not introduce visual or typography changes unless the user explicitly requests them.
- Avoid touching global styles or unrelated component styles when a scoped change can satisfy the request.
- Never alter existing font sizes as part of functional edits unless the change is explicitly about typography.
- Keep spacing, alignment, and box styling stable unless the user explicitly asks for a visual adjustment.
