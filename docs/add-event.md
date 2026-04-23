# Add An Event

Use this when someone asks an agent: "I want to add a new event."

## Agent Prompt

```text
Add this event to the Agentic Builders Collective website.

Follow docs/add-event.md.
Follow docs/id-guidelines.md for the filename/eventId.
Create one new Markdown file in src/content/events/.
Use a kebab-case filename because it becomes the eventId.
Use personId for listed hosts/speakers, or name for external people.
Keep the change additive and do not reformat unrelated entries.
Run pnpm check and pnpm build.

Event:
- Title:
- Date:
- Kind: meetup or learning
- Time:
- Venue:
- Venue URL:
- Registration URL:
- Hosts:
- Speakers:
- Tags:
- Status: upcoming or past
- Description:
```

## File

Create `src/content/events/<event-id>.md`.

```md
---
title: "#7 - Agentic Builders at Example Labs"
date: 2026-05-14
kind: meetup
time: 7:00 PM - 9:00 PM SGT
venue: Example Labs
venueUrl: https://example.com
registrationUrl: https://example.com/register
hosts:
  - personId: jane-doe
  - name: External Host
speakers:
  - name: External Speaker
tags:
  - meetup
status: upcoming
---

An evening of demos, discussions, and community building.
```

## Notes

- The filename becomes the `eventId` used by presentations.
- Do not use random numeric suffixes. If the event title collides, add the date or venue to the filename.
- `kind` must be `meetup` or `learning`.
- `status` must be `upcoming` or `past`.
- Use `personId` only when the person exists in `members` or `organisers`.
- Presentation slides are added separately in `src/content/presentations/presentations.yaml`.
