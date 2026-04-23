# Contributing

This site uses GitHub as the CMS. Content changes should be small, readable pull requests that edit the relevant YAML or Markdown file.

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

## Validate Locally

```sh
pnpm check
pnpm build
```

If both commands pass, submit a pull request. Keep the PR focused on the profile addition unless you are intentionally improving the workflow or docs.
