---
title: Open Agent API
makers:
  - name: StarFans
url: https://openagentapi.pages.dev/
github: https://github.com/jiangxingfan1-coder/Open-Agent-API
builtWith:
  - TypeScript
  - Node.js
  - Codex
featured: false
summary: Turn a local coding agent into an HTTP endpoint that an existing OpenAI SDK client can call.
date: 2026-11-22
---

Open Agent API is an Apache-2.0 gateway for apps that want to call a coding agent, not just a model. You publish a configured agent and give the calling app a key scoped to that agent. A real coding CLI still uses its own sign-in and usage limits.

The [offline quickstart](https://github.com/jiangxingfan1-coder/Open-Agent-API/blob/v0.0.71/docs/quickstart.md) runs a sample agent on loopback without a model provider key. The [Node-RED example](https://flows.nodered.org/flow/5e64afe9675363adfa3dfcbf5977219e) reads the status of that same task before and after approval; the flow cannot start or approve a task.
