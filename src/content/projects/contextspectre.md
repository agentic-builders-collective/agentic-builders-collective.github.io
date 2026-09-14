---
title: ContextSpectre
makers:
  - personId: pavel-piankov
github: https://github.com/ppiankov/contextspectre
builtWith:
  - Go
  - Bubble Tea
  - Cobra
featured: false
summary: A TUI over Claude Code's local session files — see what is filling the context window, what it is costing per turn, and cut the parts that no longer earn their place.
date: 2026-09-14
---

Long agent sessions hit automatic compaction, and compaction summarises. Ten compactions in, the model is reasoning from a summary of a summary, and the early specifics that made the work correct are gone. Meanwhile the bill is mostly cache reads — the same context re-processed every turn, including the debugging detour that got compacted away an hour ago.

ContextSpectre reads the JSONL session files Claude Code writes locally (CLI and the Mac app) and makes that visible: a context meter with compaction history, cost attribution from the real usage records, per-model breakdown, and a signal grade for how much of the window is still doing work. Then it lets you act on it — nine cleanup operations sorted into safety tiers, a backup taken before each one, and a single key to undo.

There is also surgery for the cases cleanup does not cover: extract a range to portable markdown, repair `parentUuid` chains, recover a session that has deadlocked. And a cross-session layer that measures the re-explanation tax — how much you pay each time a new session relearns the same architecture. Go, MIT, `go install` or a release binary.
