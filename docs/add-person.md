# Add A Person

Use this when someone asks an agent: "I want to add a new person."

For beginner setup, including Git, GitHub, Node.js, pnpm, terminal, and optional GitHub CLI, see `CONTRIBUTING.md`.

## Agent Prompt

```text
Add this person to the Agentic Builders Collective website.

Follow docs/add-person.md.
Follow docs/id-guidelines.md for the id.
Edit only src/content/members/members.yaml unless you need to update docs.
Create a kebab-case id from the person's name.
Set addedAt to the current UTC ISO timestamp.
Keep the change additive and do not reformat unrelated entries.
Run pnpm check and pnpm build.

Person:
- Name:
- Aliases:
- Tagline:
- Company:
- Website:
- LinkedIn:
- GitHub:
- Youtube:
- Twitter:
- Added at:
```

## File

Edit `src/content/members/members.yaml`.

If the file contains `[]`, replace it with the first list entry. Otherwise append a new entry.

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
  youtube: https://youtube.com/@janedoe
  twitter: https://twitter.com/janedoe
  addedAt: "2026-03-24T12:00:00Z"
  featured: false
```

## Notes

- Use full `https://` URLs.
- `id` must be kebab-case and unique across members and organisers.
- `addedAt` must be an ISO 8601 UTC timestamp. It controls Community page order, oldest first, so the list is first-come, first-shown for now. Repository admins may adjust it based on PR timing or review history.
- Do not add random numbers. If there is a real collision, prefer a meaningful suffix such as middle initial, handle, or company.
- Linked articles, projects, presentations, and events will automatically show on the person's Community card once other entries reference this `id`.
- Contributors without write access can still open a pull request from a fork. See `CONTRIBUTING.md`.
