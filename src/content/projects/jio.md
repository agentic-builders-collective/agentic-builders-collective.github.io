---
title: jio
makers:
  - personId: maximilien-bouchet
url: https://www.jiosg.app/
github: ""
builtWith:
  - Claude Code
  - Claude Opus 5
  - Next.js
  - TypeScript
  - Turso
  - Expo
  - Model Context Protocol
  - Vercel
featured: false
summary: A weekly shortlist of what's worth doing in Singapore. Every night 23 scrapers feed a Claude Opus 5 pipeline that filters, writes, researches on the web, and ranks 5 to 10 picks, served on the web, in a Thursday email, in an iOS app, and over an MCP server. Built solo with Claude Code.
date: 2026-10-16
---

jio is a weekly shortlist of what's worth doing in Singapore: concerts, exhibitions, food, sport, film, and one-offs. It goes out on the web, in a Thursday email, and in an iOS app, and it never pads: the lineup is 5 to 10 events, fewer in a quiet week.

Every night, 23 scrapers pull public listings from venues, ticketing platforms, and weekend roundups. An algorithmic pass removes duplicates across sources before any model call, then a chain of Claude Opus 5 calls takes over:

- **Filter**: include or exclude each event against written curation rules (no corporate conferences, bar promos, webinars, or kids-only workshops).
- **Writer**: a clean title, a one-sentence blurb, category tags, and a 1-10 score.
- **Research**: for the week's contenders, the model reads the event's own page and searches the web for how notable it is, whether it's selling out, and the price, under a nightly spend cap. The writer then revises the listing with what it found.
- **Editor**: ranks this week's and next week's lineup against a house-taste brief, chooses the pick of the week, and writes a one-line "why go" for each event.

Admin calls always win over the pipeline, and an eval script re-runs the prompts on hand-rated events and reports precision, recall, and every disagreement, so prompt changes can be checked against real taste. The same lineup is served by an MCP server at `https://www.jiosg.app/api/mcp` with six tools, so Claude Desktop, Cursor, or any MCP client can ask what's on this weekend.

Built solo with Claude Code: 144 of the 145 commits were written or co-authored by Claude, guided by a CLAUDE.md, a maker-checker planning workflow, and custom skills for QA and for triaging and fixing tester feedback. Next.js, TypeScript, Turso, Resend, and Vercel on the web side; Expo for the iOS app.
