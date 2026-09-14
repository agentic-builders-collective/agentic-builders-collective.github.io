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

Every coding agent ships file contents, command output, and tool results to a cloud API. Pastewatch sits on the paths where that happens. Its MCP server returns redacted file reads and restores the originals in the file it writes back, so the agent edits code it never actually saw. A pre-execution hook blocks shell commands that carry a connection string or a token. A local proxy scans Anthropic-shaped request bodies and redacts whatever the hooks missed, including traffic from subagents.

Detection is regex across about thirty pattern types. Mutation fires only on intrinsic evidence — a sourced provider token, a complete private key, a Luhn-valid card — and `--severity` changes how much it tells you, never what it rewrites. Ambiguous matches are reported and left untouched. The asymmetry is deliberate: a false positive corrupts a working agent response, so the tool would rather miss.

Placeholders are typed and numbered. Only the MCP layer keeps a map — in process memory, for the session — because only it has to put a real value back into a local file. Nothing is restored on the wire: clipboard and proxy replacement are one-way. Runs offline: no telemetry, no accounts. `brew install ppiankov/tap/pastewatch`, then `pastewatch-cli launch claude`. The menubar app is macOS; the CLI runs on macOS and Linux. MIT.
