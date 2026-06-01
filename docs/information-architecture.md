# Information Architecture

This site is for the Agentic Builders Collective, so its IA should preserve the community's actual operating model rather than forcing a generic marketing-site shape.

## Accepted Principles

- Keep the primary nav compact, but do not over-abstract it away from the real community surfaces.
- `community` is the right public label for the member and organiser surface. Do not rename it to `people` unless the community direction changes.
- `events` can be a broad hub. It is acceptable for Events to carry meetups, calendar access, external events, speaker nomination, recaps, and related participation actions.
- `showcase` is not perfect, but `library` is not an accepted replacement. Do not rename Showcase to Library without a better naming decision.
- `about` can absorb institutional context, especially partners and guidelines.
- The footer should carry secondary navigation, contribution actions, and governance/contact links so the top nav does not grow every time a new page appears.

## Current Primary Nav

- about
- community
- showcase
- events
- jobs

The WhatsApp CTA stays separate from the nav list.

## Footer Grouping

### explore

- about
- community
- showcase
- events
- jobs

### contribute

- nominate speaker
- github
- add member
- add project
- add event
- add article

Keep `nominate speaker` and `github` before the pull-request contribution links.

### collective

- partners
- guidelines
- email
- logo generator

## Route Ownership

- `/events/` owns the event experience. `/calendar/` may remain a direct view, but it should feel subordinate to Events rather than becoming a primary nav item.
- `/nominate/` is an event participation action, not a primary nav item.
- `/partners/` and `/guidelines/` are institutional pages. Keep them discoverable through About and the footer.
- `/articles/` duplicates the article section inside Showcase. Prefer linking users to the Showcase article section unless a standalone articles experience gets a clearer purpose.
- `/newsletters/...` is archival/community context. It should be surfaced through Events or Showcase only when it supports a specific story or recap.

## Rejected Directions

- Do not rename `community` to `people`.
- Do not rename `showcase` to `library` as a default cleanup.
- Do not treat Events as too broad merely because it includes calendar and participation actions.
- Do not make every collection or contribution type a top-level nav item.
