# Agent Notes

Astro site for the Agentic Builders Collective.

## Content conventions

- For contributor requests (add a person, presentation, event, project or article), follow the matching `docs/add-*.md` guide. Follow `docs/id-guidelines.md` for any new `id`, filename, `personId` or `eventId`. `docs/content-model.md` is the source of truth for content shape.
- YAML collections (`members`, `organisers`, `articles`, `presentations`, `faq`) stay in their existing array file. `events` and `projects` are Markdown, one file per entry.
- Name event files `YYYY-MM-DD-name.md`; the filename becomes the `eventId`. Use kebab-case filenames or explicit `id` values, because Astro uses them as stable ids.
- Keep contributor changes additive and within a single collection where possible.
- Use `personId` for listed members/organisers and `name` for external people; use `eventId` to link presentations to events.

## Visual design

- All visible text is `1rem` (15px, set on `html`), with no exceptions: headings, section and subsection headers, grouped-list headings, cards, body copy, links, metadata, timestamps, controls, labels, code, inline symbols, arrows and annotations. This is critical to the terminal-like aesthetic.
- Never use font size for hierarchy. Use brighter colours (e.g. `--accent`), bold weight, or slightly dimmed opacity for secondary text.
- Box/card backgrounds use `--box-bg: rgba(30, 30, 40, 0.45)`.
- Use the `TerminalNoteLink` component for link-attached notes/popovers. It codifies the `[ℹ]` disclosure, `[×]` close control, dynamic close-corner placement, desktop popover and mobile inline expansion.

## Style change policy

- Do not change visuals, typography, spacing, alignment or box styling unless the user explicitly asks.
- Prefer scoped changes over edits to global or unrelated component styles.
