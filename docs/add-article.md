# Add An Article

Use this when someone asks an agent: "I want to add an article."

## Agent Prompt

```text
Add this article to the Agentic Builders Collective website.

Follow docs/add-article.md.
Edit only src/content/articles/articles.yaml unless you need to add a linked person first.
Use personId for listed authors, or name for external authors.
Keep the change additive and do not reformat unrelated entries.
Run pnpm check and pnpm build.

Article:
- Title:
- Authors:
- URL:
- Publication:
- Date:
- Summary:
- Tags:
```

## File

Edit `src/content/articles/articles.yaml`.

If the file contains `[]`, replace it with the first list entry. Otherwise append a new entry.

```yaml
- id: singapore-agent-builders
  title: How Singapore's builders are using coding agents
  authors:
    - personId: jane-doe
    - name: External Author
  url: https://example.com/story
  publication: Example Times
  date: 2026-03-24
  summary: A short summary of the article.
  tags:
    - community
    - agents
```

## Notes

- `personId` must match an entry in `members` or `organisers`; otherwise `pnpm build` fails.
- Use `name` for authors who are not listed on the Community page.
- Use full `https://` URLs.
