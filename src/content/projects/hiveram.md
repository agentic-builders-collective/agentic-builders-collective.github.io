---
title: Hiveram
makers:
  - personId: pavel-piankov
url: https://hiveram.com
github: https://github.com/obstalabs/hiveram-dist
builtWith:
  - Go
  - PostgreSQL
  - SQLite
  - Model Context Protocol
featured: false
summary: A shared work ledger for people and AI agents — every piece of work carries who claimed it, what was done, on what basis, and the evidence, kept outside the agent that did it.
date: 2026-10-01
---

When an agent acts, the history of what it did usually lives inside the tool that did it. Hiveram keeps that record outside the actor. A work order names the intent, the files it may touch and what counts as done. An agent claims it, and a claim is an exclusive execution right, so two agents cannot take the same work. It closes only with evidence: the commit, the verification output, and a closing identity that is not the executor. Nobody grades their own homework. A dispatch preflight refuses a work order whose files do not exist at the pinned ref, so a stale contract halts before a runner burns a session on it.

One ledger, three surfaces: a CLI, an HTTP API and an MCP server, so any MCP-capable agent uses the same record, including Claude Code, Codex, OpenCode, Cursor, Cline and Qwen. It runs on local SQLite, or self-hosted on PostgreSQL in your own environment, or hosted. Handoff between agents is explicit: bounded bundles and checkpoints move the context, and what comes back is applied against the canonical ledger rather than merged silently.

It is built by a fleet of agents that run on it, so the entry you are reading is itself a record in the ledger that built the product. Installs from the public distribution repository with one command; a container image and a Helm chart are published alongside. Commercial licence with a 14-day trial; the distribution repository and the operator surface are public.
