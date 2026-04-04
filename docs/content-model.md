# Content Model

The site uses Astro content collections defined in `src/content.config.ts`.

There are two patterns in the current repo:

- Structured collections loaded from a single YAML file with Astro `file()` loaders
- Narrative collections loaded from Markdown files with Astro `glob()` loaders

For YAML-backed collections, the file contains an array of entries. For Markdown-backed collections, each file is one entry and the filename acts as the stable identifier.

## Collections

### `people`

File: `src/content/people/people.yaml`

Use YAML when the entry is mostly structured profile data. Keep entries in the array compact and reviewable.

```yaml
- id: jane-doe
  name: Jane Doe
  aliases:
    - JD
  tagline: Building internal agent systems for operations teams.
  company: Example Labs
  linkedin: https://linkedin.com/in/janedoe
  github: https://github.com/janedoe
  featured: false
```

### `organisers`

File: `src/content/organisers/organisers.yaml`

Use YAML for organiser profiles that appear on site pages.

```yaml
- id: jane-doe
  name: Jane Doe
  aliases:
    - JD
  role: Organiser
  company: Example Labs
  companyUrl: https://example.com
  tagline: Building the local agent tooling community.
  linkedin: https://linkedin.com/in/janedoe
  github: https://github.com/janedoe
  website: https://example.com
  email: jane@example.com
  photo: /images/people/jane.jpg
```

### `resources`

File: `src/content/resources/resources.yaml`

Use YAML for links, repositories, articles, videos, tools, and similar references.

```yaml
- title: Building Eval Loops
  url: https://example.com/evals
  category: guide
  contributor: Jane Doe
  date: 2026-03-12
  description: Practical notes on setting up an eval loop for agent workflows.
```

### `articles`

File: `src/content/articles/articles.yaml`

Use YAML for external coverage, interviews, or press-style links.

```yaml
- title: How Singapore's builders are using coding agents
  author: Jane Doe
  url: https://example.com/story
  publication: Example Times
  date: 2026-03-24
  tags:
    - community
    - agents
```

### `sponsors`

File: `src/content/sponsors/sponsors.yaml`

Use YAML for sponsor names, links, and optional logos.

```yaml
- name: Example Labs
  logo: /images/sponsors/example-labs.svg
  url: https://example.com
```

### `faq`

File: `src/content/faq/faq.yaml`

Use YAML for short homepage FAQs. Keep entries in one array and use an explicit `order` field so the front page reads well for someone arriving cold.

```yaml
- id: what-is-the-agentic-builders-collective
  order: 1
  question: What is the Agentic Builders Collective?
  answer: A short, plain-language explanation of the community and what people do here.
```

### `events`

Directory: `src/content/events/`

Use Markdown when the entry needs body copy as well as event metadata. Each file is one event.

```md
---
title: "#7 - Agentic Builders at Example Labs"
date: 2026-05-14
kind: meetup
time: 7:00 PM - 9:00 PM SGT
venue: Example Labs
registrationUrl: https://example.com/register
hosts:
  - Jane Doe
tags:
  - meetup
status: upcoming
---

An evening of demos, discussions, and community building.
```

### `blog`

Directory: `src/content/blog/`

Use Markdown for posts that need prose, links, code blocks, or richer formatting.

```md
---
title: How we review AI-assisted code changes
date: 2026-03-24
author: Jane Doe
summary: A short guide to keeping generated changes reviewable.
tags:
  - review
  - workflow
---

Write the post here.
```

### `showcase`

Directory: `src/content/showcase/`

Use Markdown for projects that need screenshots, summaries, and body copy.

```md
---
title: Eval Dashboard
author: Jane Doe
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

## Naming guidance

- Use kebab-case filenames for Markdown entries.
- Keep YAML arrays tidy and append new items without reformatting unrelated entries.
- Keep each pull request focused on one content type when possible.
