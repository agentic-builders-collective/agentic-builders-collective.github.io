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

The `eventId` is the event filename without `.md`, for example `lorong-ai-mar-2026` from `src/content/events/lorong-ai-mar-2026.md`.

```yaml
- id: evals-for-agents
  title: Evals for Agents
  speakers:
    - personId: jane-doe
    - name: External Speaker
  eventId: lorong-ai-mar-2026
  url: https://example.com/talk
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
- Do not use random numeric suffixes. If the presentation title collides, add the event or year to the `id`.
- Presentations appear on `/showcase` and are linked from their event.
