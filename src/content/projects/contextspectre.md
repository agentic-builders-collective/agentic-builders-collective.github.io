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
summary: A CLI and TUI over Claude Code's local session files — see what is filling the context window, what it is costing per turn, and cut the parts that no longer earn their place.
date: 2026-09-14
---

Long agent sessions hit automatic compaction, and compaction summarises. Ten compactions in, the model is reasoning from a summary of a summary, and the early specifics that made the work correct are gone. Meanwhile the bill is mostly cache reads — the same context re-processed every turn, including the debugging detour that got compacted away an hour ago.

ContextSpectre reads the JSONL files a session leaves on disk, from either Claude Code client, and makes that visible: a context meter with compaction history, cost attribution from the real usage records, per-model breakdown, and a signal grade for how much of the window is still doing work. Then it lets you act on it — nine cleanup operations sorted into safety tiers, a backup taken before each one, and a single key to undo. The quieter payoff is that a session file which stays tidy stays intact, and an intact file loads faster every time you reopen it.

One binary, two surfaces. The TUI is for browsing — sessions, messages, cleanup, ghost panels, vim keys throughout. The CLI is for everything you would rather not do by hand: `statusline` feeds Claude Code's own status line, `watch` tracks a session in flight, `clean --all` runs unattended, `export` and `doctor` fit in a script.

There is also surgery: extract a range to portable markdown, repair `parentUuid` chains, amputate a wedged region. Honestly, sessions misbehave less than they used to and most days you will not need any of it — but the morning after a reboot, when a long session is broken and will not open, it is the difference between recovering the thread and starting over. macOS, Linux and Windows, arm64 and amd64. Homebrew tap or Scoop. MIT.
