# Agent Access and Contribution Map

This document is the canonical machine-readable contribution map for coding agents.

## Exact paths and schemas

- Content model and schema details: `docs/content-model.md`
- Stable IDs and filename rules: `docs/id-guidelines.md`
- Add a member/profile: `docs/add-person.md` → edit `src/content/members/members.yaml`
- Add a presentation/talk: `docs/add-presentation.md` → edit `src/content/presentations/presentations.yaml`
- Add an event/meetup/workshop: `docs/add-event.md` → add one file in `src/content/events/YYYY-MM-DD-name.md`
- Add a project/showcase entry: `docs/add-project.md` → add one file in `src/content/projects/<kebab-id>.md`
- Add an article/link: `docs/add-article.md` → edit `src/content/articles/articles.yaml`

## Collection-to-path reference

- `members` (YAML): `src/content/members/members.yaml`
- `organisers` (YAML): `src/content/organisers/organisers.yaml`
- `articles` (YAML): `src/content/articles/articles.yaml`
- `presentations` (YAML): `src/content/presentations/presentations.yaml`
- `faq` (YAML): `src/content/faq/faq.yaml`
- `events` (Markdown directory): `src/content/events/`
- `projects` (Markdown directory): `src/content/projects/`

## Pull request scope

- Prefer one content type per PR.
- Keep changes additive and localised.
- Preserve stable IDs and references (`personId`, `eventId`).
- Avoid global style changes unless explicitly requested.

## Machine-readable access points

- Sitemap: `/sitemap.xml`
- LLM orientation: `/llms.txt`
- Agent policy: `/agent-access/`
- Events API: `/api/events.json`
- Members API: `/api/members.json`
- Showcase API: `/api/showcase.json`
- FAQ API: `/api/faqs.json`
- Upcoming events feed (JSON): `/feeds/events.json`
- Upcoming events feed (ICS): `/feeds/events.ics`
