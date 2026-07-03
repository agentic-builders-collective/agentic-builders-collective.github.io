# Add A Job Post

Use this when someone asks an agent: "I want to add a job post."

Job posts are reviewed through GitHub pull requests. A job is public only after an admin approves and merges the PR.

## Agent Prompt

```text
Add this job post to the Agentic Builders Collective website.

Follow docs/add-job.md.
Follow docs/id-guidelines.md for the filename/job anchor.
Create one new Markdown file in src/content/jobs/.
Use a kebab-case filename because it becomes the job anchor.
Use personId for a listed member or organiser in submittedBy.
Keep the change additive and do not reformat unrelated entries.
Run pnpm check and pnpm build.

Job:
- Title:
- Company:
- Company URL:
- Location:
- Work mode: onsite | hybrid | remote
- Employment type: full-time | part-time | contract | internship | fractional
- Employment types, for a combined post:
- Apply URL:
- Contact email:
- Posted at:
- Expires at:
- Submitted by:
- Tags:
- Body:
```

## File

Create `src/content/jobs/<job-id>.md`.

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
  - evals
status: open
---

Short role description here.

## What you will do

- Build agentic workflows for internal teams.
- Design evals and deployment guardrails.

## What we are looking for

- Practical experience shipping software with LLMs.
- Strong TypeScript or Python fundamentals.
```

## Fields

- `title`: role title.
- `company`: hiring organisation.
- `companyUrl`: optional company website.
- `location`: role location, for example `Singapore`, `Remote`, or `APAC`.
- `workMode`: one of `onsite`, `hybrid`, or `remote`.
- `employmentType`: one of `full-time`, `part-time`, `contract`, `internship`, or `fractional`.
- `employmentTypes`: optional array of the same values for a combined post covering multiple roles.
- `applyUrl`: application link. Required unless `contactEmail` is present.
- `contactEmail`: fallback contact email. Required unless `applyUrl` is present.
- `postedAt`: date the post should appear as published.
- `expiresAt`: date the post should stop appearing under open roles.
- `submittedBy`: use `personId` for listed members or organisers.
- `tags`: short searchable labels.
- `status`: use `open`, `closed`, or `draft`. Draft posts do not render.

## Review Rules

- One job post per PR.
- The role must have a clear company identity.
- The role must include either `applyUrl` or `contactEmail`.
- `expiresAt` should normally be within 90 days of `postedAt`.
- `submittedBy.personId` must match an entry in `members` or `organisers`.
- Do not accept spam, affiliate links, discriminatory requirements, or vague "DM me" posts.
- Admin approval happens by approving and merging the pull request.

## Notes

- The filename is the job anchor and detail page path: `src/content/jobs/founding-agent-engineer-example-labs.md` becomes `/jobs/founding-agent-engineer-example-labs/`.
- If the title collides, add the company or location to the filename.
- To close a job before expiry, set `status: closed` in a follow-up PR.
- To extend a post, update `expiresAt` in a follow-up PR.
