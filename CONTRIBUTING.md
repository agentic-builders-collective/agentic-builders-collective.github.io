# Contributing

This site uses GitHub as the CMS. Content changes should be small, readable pull requests that edit the relevant YAML or Markdown file.

## Agent Guides

Start with the guide matching the thing you want to add:

- ID and filename rules: [`docs/id-guidelines.md`](./docs/id-guidelines.md)
- Add a person: [`docs/add-person.md`](./docs/add-person.md)
- Add slides or a presentation: [`docs/add-presentation.md`](./docs/add-presentation.md)
- Add an event: [`docs/add-event.md`](./docs/add-event.md)
- Add a project: [`docs/add-project.md`](./docs/add-project.md)
- Add an article: [`docs/add-article.md`](./docs/add-article.md)
- Agent contribution map (exact paths for coding agents): [`docs/agent-access.md`](./docs/agent-access.md)

## Add Your Community Profile

Ask your agent to make one localised edit to `src/content/members/members.yaml`, then run validation before opening a pull request.

Agent prompt:

```text
Add my profile to the Agentic Builders Collective website.

Use `src/content/members/members.yaml`.
Create a kebab-case `id` from my name.
Use full `https://` URLs for links.
Keep the change additive and do not reformat unrelated entries.
Run `pnpm check` and `pnpm build`.

Profile:
- Name:
- Aliases:
- Tagline:
- Company:
- Website:
- LinkedIn:
- GitHub:
```

Entry shape:

```yaml
- id: jane-doe
  name: Jane Doe
  aliases:
    - JD
  tagline: Building internal agent systems for operations teams.
  company: Example Labs
  website: https://example.com
  linkedin: https://linkedin.com/in/janedoe
  github: https://github.com/janedoe
  featured: false
```

Required fields:

- `name`
- `id`

Optional fields:

- `aliases`
- `tagline`
- `company`
- `website`
- `linkedin`
- `github`
- `featured`

If the file currently contains `[]`, replace it with the first list entry. Otherwise, append a new list entry.

## Open A Pull Request Without Write Access

You do not need write access to contribute.

1. Fork the repository to your own GitHub account.
2. Make your change in your fork.
3. Commit and push the change to a branch in your fork.
4. Open a pull request back to `agentic-builders-collective/agentic-builders-collective.github.io`.

On GitHub, use **Fork**, then after committing use **Contribute -> Open pull request**.

## Linked People And Events

Use `personId` when an author, maker, or speaker is listed in `src/content/members/members.yaml` or `src/content/organisers/organisers.yaml`. Use `name` for external people who should render as plain text.

```yaml
authors:
  - personId: jane-doe
  - name: External Author
```

Presentations must link to an event by filename-derived `eventId`.

```yaml
- id: evals-for-agents
  title: Evals for Agents
  speakers:
    - personId: jane-doe
  eventId: 2026-05-14-agentic-builders-at-example-labs
  slidesUrl: https://example.com/slides
  summary: A practical walkthrough of eval loops for agentic coding.
```

If a `personId` or `eventId` is wrong, `pnpm build` fails.

## Validate Locally

```sh
pnpm check
pnpm build
```

If both commands pass, submit a pull request. Keep the PR focused on the profile addition unless you are intentionally improving the workflow or docs.
