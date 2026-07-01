# Add A Presentation

Use this when someone asks an agent: "I want to add slides" or "I want to add a presentation."

## Agent Prompt

```text
Add this presentation to the Agentic Builders Collective website.

Follow docs/add-presentation.md.
Follow docs/id-guidelines.md for the id.
Edit only src/content/presentations/presentations.yaml unless you need to add the linked person or event first.
Use personId for listed members/organisers, or name for external speakers.
Link the presentation to an existing eventId.
Keep the change additive and do not reformat unrelated entries.
Run pnpm check and pnpm build.

Presentation:
- Title:
- Speaker names or personIds:
- Event:
- Slides URL:
- Video URL:
- Summary:
- Tags:
```

## Files

Edit `src/content/presentations/presentations.yaml`.

The `eventId` is the event filename without `.md`, for example `2026-05-14-agentic-builders-at-example-labs` from `src/content/events/2026-05-14-agentic-builders-at-example-labs.md`.

```yaml
- id: evals-for-agents
  title: Evals for Agents
  speakers:
    - personId: jane-doe
    - name: External Speaker
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

## Notes

- `personId` must match an entry in `members` or `organisers`; otherwise `pnpm build` fails.
- Use `name` for speakers who are not listed on the Community page.
- `eventId` must match an existing event; otherwise `pnpm build` fails.
- Use `urlLabel` when the primary URL should render as something more specific than `Page`, for example `Blog Post`.
- Do not use random numeric suffixes. If the presentation title collides, add the event or year to the `id`.
- Presentations appear on `/showcase` and are linked from their event.
