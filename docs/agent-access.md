# Agent Contribution Map

This document maps common contribution tasks to the repository files coding agents should edit.

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
- For members, set `addedAt` to an ISO 8601 UTC timestamp; the Community page sorts members by that value, oldest first. This keeps the list first-come, first-shown for now.
- Avoid global style changes unless explicitly requested.

## Public discovery

- Website: `https://www.agenticbuilders.sg/`
- LLM orientation file: `https://www.agenticbuilders.sg/llms.txt`
- Repository: `https://github.com/agentic-builders-collective/agentic-builders-collective.github.io`

Repository paths in this document are not public website routes. Agents browsing the live site should use the GitHub repository links from `public/llms.txt` for source files and docs.
