# Content Model

The site uses Astro content collections defined in `src/content.config.ts`.

For task-specific contribution instructions, start with:

- `docs/id-guidelines.md`
- `docs/information-architecture.md`
- `docs/add-person.md`
- `docs/add-presentation.md`
- `docs/add-event.md`
- `docs/add-project.md`
- `docs/add-job.md`
- `docs/add-article.md`

There are two patterns in the current repo:

- Structured collections loaded from a single YAML file with Astro `file()` loaders
- Narrative collections loaded from Markdown files with Astro `glob()` loaders

For YAML-backed collections, the file contains an array of entries. For Markdown-backed collections, each file is one entry and the filename acts as the stable identifier.

Use stable readable IDs as described in `docs/id-guidelines.md`.

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
The Community page orders members by `addedAt`, oldest first. This keeps the list first-come, first-shown for now; repository admins may adjust `addedAt` based on PR timing or review history, and search and sorting controls can be added as the community grows.

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

### `partners`

File: `src/content/partners/partners.yaml`

Use YAML for regular community partners and venue hosts. `type: main` entries can include logos and should appear before `type: hosting` entries. Hosting partners can link back to one relevant archived event with `eventUrl`, or multiple archived events with `eventLinks`.

```yaml
- id: example-labs
  name: Example Labs
  type: main
  order: 1
  logo: /images/partners/example-labs.svg
  url: https://example.com
  description: Example partner description

- id: example-venue
  name: Example Venue
  type: hosting
  order: 1
  url: https://example-venue.com
  eventLinks:
    - href: /events/#2026-01-01-example-workshop
      label: Example Workshop
    - href: /events/#2026-02-01-example-meetup
      label: "#9 - ABC at Example Venue"
  description: Hosted an ABC meetup
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
The filename becomes the `eventId`, and must use `YYYY-MM-DD-name.md`.

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
sharedBy:
  - personId: jane-doe
tags:
  - meetup
status: upcoming
---

An evening of demos, discussions, and community building.
```

Use `sharedBy` when a listed member or organiser contributed the event listing or surfaced an external opportunity for the community.

Events can link a site-local photo gallery after the event. Store compressed images under `public/images/events/<eventId>/`, never original high-resolution phone files.

```yaml
photoGallery:
  label: Event photos
  href: /events/2026-05-28-example-event/photos/
  photos:
    - src: /images/events/2026-05-28-example-event/photos/img-0001.jpg
      thumbSrc: /images/events/2026-05-28-example-event/thumbs/img-0001.jpg
      alt: Example event photo 1
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

Use Markdown for projects that need summaries, links, and body copy.

```md
---
title: Eval Dashboard
makers:
  - personId: jane-doe
  - name: External Maker
url: https://example.com
github: https://github.com/janedoe/eval-dashboard
builtWith:
  - Astro
  - TypeScript
featured: false
summary: A lightweight dashboard for tracking agent eval runs.
date: 2026-03-24
---

Short write-up here.
```

### `jobs`

Directory: `src/content/jobs/`

Use Markdown for member-submitted job posts. Each file is one role. Job posts are published only after an admin approves and merges the pull request.

```md
---
title: Founding Agent Engineer
company: Example Labs
companyUrl: https://example.com
location: Singapore
workMode: hybrid
employmentType: full-time
applyUrl: https://example.com/careers/founding-agent-engineer
contactEmail: hiring@example.com
postedAt: 2026-05-18
expiresAt: 2026-06-18
submittedBy:
  personId: jane-doe
tags:
  - agents
  - engineering
status: open
---

Short role description here.
```

`workMode` must be `onsite`, `hybrid`, or `remote`. `employmentType` must be `full-time`, `part-time`, `contract`, `internship`, or `fractional`. Use `employmentTypes` with the same values for a combined post covering multiple roles. Use `status: closed` to close a post before expiry. Use `status: draft` only for local review because draft posts do not render.

### `presentations`

File: `src/content/presentations/presentations.yaml`

Use YAML for talk, demo, and workshop presentation links.

```yaml
- id: evals-for-agents
  title: Evals for Agents
  speakers:
    - personId: jane-doe
  eventId: 2026-05-14-agentic-builders-at-example-labs
  url: https://example.com/talk
  urlLabel: Page
  slidesUrl: https://example.com/slides
  videoUrl: https://example.com/video
  summary: A practical walkthrough of eval loops for agentic coding.
  tags:
    - evals
    - agents
```

## Naming guidance

- Use `YYYY-MM-DD-name.md` filenames for events and kebab-case filenames for other Markdown entries.
- Keep YAML arrays tidy and append new items without reformatting unrelated entries.
- Keep each pull request focused on one content type when possible.
