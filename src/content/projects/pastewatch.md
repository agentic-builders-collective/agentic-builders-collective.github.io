---
title: Pastewatch
makers:
  - personId: pavel-piankov
github: https://github.com/ppiankov/pastewatch
builtWith:
  - Swift
  - SwiftUI
  - Model Context Protocol
featured: false
summary: Secret redaction on the way out — an agent's file reads, shell commands, and outbound API traffic are scanned locally and replaced with typed placeholders before they reach a model.
date: 2026-09-14
---

Every coding agent ships file contents, command output, and tool results to a cloud API. Pastewatch sits on the paths where that happens. Its MCP server returns redacted file reads and resolves the originals again on write-back, so the agent edits code it never actually saw. A pre-execution hook blocks shell commands carrying a connection string or a token. A local proxy scans Anthropic-shaped request bodies and redacts what the hooks missed, including traffic from subagents.

Detection is regex over about thirty pattern types. Mutation fires only on intrinsic evidence — a sourced provider token, a complete private key, a Luhn-valid card — and `--severity` changes how much it tells you, never what it rewrites. Ambiguous matches are reported and left alone. That asymmetry is deliberate: a false positive corrupts a working agent response, so the tool would rather miss.

Placeholders are typed and numbered. Only the MCP layer keeps a map, in process memory for the session, because only it has to put the real value back; clipboard and proxy replacement is one-way. Runs offline, no telemetry, no accounts. `brew install ppiankov/tap/pastewatch`, then `pastewatch-cli launch claude`. Menubar app is macOS; the CLI runs on macOS and Linux. MIT.
