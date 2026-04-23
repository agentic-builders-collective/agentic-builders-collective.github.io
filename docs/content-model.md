# Content Model

The site uses Astro content collections defined in `src/content.config.ts`.

For task-specific contribution instructions, start with:

- `docs/add-person.md`
- `docs/add-presentation.md`
- `docs/add-event.md`
- `docs/add-project.md`
- `docs/add-article.md`

There are two patterns in the current repo:

- Structured collections loaded from a single YAML file with Astro `file()` loaders
- Narrative collections loaded from Markdown files with Astro `glob()` loaders

For YAML-backed collections, the file contains an array of entries. For Markdown-backed collections, each file is one entry and the filename acts as the stable identifier.

## Relationships

People live in `members` and `organisers`. Linked author/speaker/maker fields use `personId` when the person is listed on the Community page, or `name` when the person should render as plain text with no link.

```yaml
authors:
  - personId: jane-doe
  - name: External Author
```

If a `personId` or `eventId` points at a missing entry, the build fails.

## Collections

### `members`

File: `src/content/members/members.yaml`

Use YAML for community member profiles. Keep entries in the array compact and reviewable.

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

### `articles`

File: `src/content/articles/articles.yaml`

Use YAML for community-curated articles, external coverage, interviews, guides, or press-style links.

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
  - personId: jane-doe
  - name: External Host
tags:
  - meetup
status: upcoming
---

An evening of demos, discussions, and community building.
```

#### Event surveys

Events can include pre-event and post-event surveys using Google Forms:

```md
---
title: "#7 - Agentic Builders at Example Labs"
date: 2026-05-14
kind: meetup
# ... other fields ...

# Optional: Collect topic suggestions before the event
preEventSurvey:
  url: https://forms.gle/your-form-link
  closesAt: 2026-05-10

# Optional: Collect feedback after the event (generates QR code)
postEventSurvey:
  url: https://forms.gle/your-feedback-form
  opensAt: 2026-05-14
  qrEnabled: true

# Optional: Summarised feedback results (update manually after event)
feedback:
  rating: 4.5
  responses: 42
  highlights:
    - "Great demos"
    - "Loved the networking"
---
```

Survey workflow:
1. Create Google Form at https://forms.new
2. Link responses to Google Sheets (automatic)
3. Copy form URL to event frontmatter
4. After event, export key results and update `feedback` fields

See `docs/surveys.md` for detailed survey setup instructions.

### `projects`

Directory: `src/content/projects/`

Use Markdown for projects that need screenshots, summaries, and body copy.

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

### `presentations`

File: `src/content/presentations/presentations.yaml`

Use YAML for talk, demo, and workshop presentation links.

```yaml
- id: evals-for-agents
  title: Evals for Agents
  speakers:
    - personId: jane-doe
  eventId: abc-7-example-labs
  url: https://example.com/talk
  slidesUrl: https://example.com/slides
  videoUrl: https://example.com/video
  summary: A practical walkthrough of eval loops for agentic coding.
  tags:
    - evals
    - agents
```

## Naming guidance

- Use kebab-case filenames for Markdown entries.
- Keep YAML arrays tidy and append new items without reformatting unrelated entries.
- Keep each pull request focused on one content type when possible.
