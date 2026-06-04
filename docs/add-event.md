# Add An Event

Use this when someone asks an agent: "I want to add a new event."

## Agent Prompt

```text
Add this event to the Agentic Builders Collective website.

Follow docs/add-event.md.
Follow docs/id-guidelines.md for the filename/eventId.
Create one new Markdown file in src/content/events/.
Use a YYYY-MM-DD-prefixed kebab-case filename because it becomes the eventId.
Use personId for listed hosts/speakers, or name for external people.
Keep the change additive and do not reformat unrelated entries.
Run pnpm check and pnpm build.

Event:
- Title:
- Date:
- Kind: meetup, learning, or external
- Time:
- Venue:
- Venue URL:
- Registration URL:
- Hosts:
- Speakers:
- Shared by:
- Photo gallery URL:
- Tags:
- Status: upcoming or past
- Description:
```

## File

Create `src/content/events/<yyyy-mm-dd-event-name>.md`.

### ABC-hosted events

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

### External events

Use `kind: external` for community events, hackathons, workshops, or conferences hosted by other organisations that ABC members may want to attend.

```md
---
title: "Agentic AI Summit 2026"
date: 2026-07-15
kind: external
time: 9:00 AM - 5:00 PM SGT
venue: Marina Bay Sands
venueUrl: https://example.com/venue
registrationUrl: https://example.com/register
hosts:
  - name: Example Conf Organisers
sharedBy:
  - personId: jane-doe
tags:
  - conference
  - agentic-ai
status: upcoming
---

A full-day conference on agentic AI. Open to ABC members and the public.
```

## Notes

- The filename becomes the `eventId` used by presentations.
- Event filenames must start with the event date as `YYYY-MM-DD`, for example `2026-05-14-agentic-builders-at-example-labs.md`.
- Do not use random numeric suffixes. If the event title collides, add the venue or format to the filename.
- `kind` must be `meetup`, `learning`, or `external`.
- `status` must be `upcoming` or `past`.
- Use `personId` only when the person exists in `members` or `organisers`.
- External events do not need to list ABC hosts or speakers.
- Use `sharedBy` when a listed member or organiser surfaced the event for the community.
- Use `photoGallery` only after compressed site-local images have been added under `public/images/events/<eventId>/`.
- Presentation slides are added separately in `src/content/presentations/presentations.yaml`.
