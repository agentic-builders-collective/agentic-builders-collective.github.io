# Content Model

The site is designed around small, reviewable pull requests. Default to one file per entry and use the filename as the stable identifier.

## Collections

### `people`

Directory: `src/data/people/`

Use YAML when the entry is mostly structured profile data.

```yaml
name: Jane Doe
role: Founder
organisation: Example Labs
location: Singapore
topics:
  - agents
  - tooling
links:
  github: https://github.com/janedoe
  website: https://example.com
bio: Building internal agent systems for operations teams.
```

### `resources`

Directory: `src/data/resources/`

Use YAML for links, repositories, articles, videos, tools, and similar references.

```yaml
title: Building Eval Loops
url: https://example.com/evals
kind: guide
tags:
  - evals
  - prompting
summary: Practical notes on setting up an eval loop for agent workflows.
addedBy: Jane Doe
```

### `shares`

Directory: `src/data/shares/`

Use YAML for a chronological log of items that were shared with the group.

```yaml
title: Notes from the March tooling round-up
sharedAt: 2026-03-12T19:30:00+08:00
sharedBy: Jane Doe
channel: meetup
resourceUrl: https://example.com/notes
note: Follow-up references from the discussion on code review agents.
```

### `meetups`

Directory: `src/data/meetups/`

Use YAML for event metadata. If a meetup later needs a longer recap, link that from the entry or add a separate Markdown tip.

```yaml
title: Agentic Builders #1
startsAt: 2026-05-14T19:00:00+08:00
status: planned
city: Singapore
venue: TBC
hosts:
  - Jane Doe
registrationUrl: https://example.com/register
summary: First community meet-up for people building with AI coding tools.
```

### `tips`

Directory: `src/content/tips/`

Use Markdown when the entry needs real prose, code blocks, or a narrative structure.

```md
---
title: How we review AI-assisted code changes
summary: A short guide to keeping generated changes reviewable.
publishedAt: 2026-03-24
tags:
  - review
  - workflow
---

Write the tip here.
```

## Naming guidance

- Use kebab-case filenames.
- Keep each pull request focused on one content type when possible.
- Prefer adding new files over editing shared aggregate files.
