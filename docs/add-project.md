# Add A Project

Use this when someone asks an agent: "I want to add a project."

## Agent Prompt

```text
Add this project to the Agentic Builders Collective website.

Follow docs/add-project.md.
Create one new Markdown file in src/content/projects/.
Use a kebab-case filename because it becomes the project anchor.
Use personId for listed makers, or name for external makers.
Keep the change additive and do not reformat unrelated entries.
Run pnpm check and pnpm build.

Project:
- Title:
- Makers:
- Live URL:
- GitHub URL:
- Screenshot path:
- Built with:
- Featured:
- Summary:
- Date:
- Body:
```

## File

Create `src/content/projects/<project-id>.md`.

```md
---
title: Eval Dashboard
makers:
  - personId: jane-doe
  - name: External Maker
url: https://example.com
github: https://github.com/janedoe/eval-dashboard
screenshot: /images/showcase/eval-dashboard.png
builtWith:
  - Astro
  - TypeScript
featured: false
summary: A lightweight dashboard for tracking agent eval runs.
date: 2026-03-24
---

Short write-up here.
```

## Notes

- `personId` must match an entry in `members` or `organisers`; otherwise `pnpm build` fails.
- Use `name` for makers who are not listed on the Community page.
- Put screenshots under `public/images/showcase/` and reference them as `/images/showcase/file-name.png`.
