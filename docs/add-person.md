# Add A Person

Use this when someone asks an agent: "I want to add a new person."

## Agent Prompt

```text
Add this person to the Agentic Builders Collective website.

Follow docs/add-person.md.
Follow docs/id-guidelines.md for the id.
Edit only src/content/members/members.yaml unless you need to update docs.
Create a kebab-case id from the person's name.
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
  featured: false
```

## Notes

- Use full `https://` URLs.
- `id` must be kebab-case and unique across members and organisers.
- Do not add random numbers. If there is a real collision, prefer a meaningful suffix such as middle initial, handle, or company.
- Linked articles, projects, presentations, and events will automatically show on the person's Community card once other entries reference this `id`.
