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
summary: A CLI and TUI over Claude Code's local session files — see what is filling the context window and what the session has cost, then cut the parts that no longer earn their place.
date: 2026-09-14
---

Long agent sessions hit automatic compaction, and compaction summarises. Ten compactions in, the model is reasoning from a summary of a summary, and the early specifics that made the work correct are gone. Cost is hard to see from inside the session too: the breakdown separates cache reads from fresh tokens, so you can tell which one the money actually went to.

ContextSpectre reads the JSONL files a session leaves on disk, from either Claude Code client, and makes that visible: a context meter with compaction history, per-model cost from the recorded usage data, and a signal grade for how much of the window is still doing work. Then it lets you act on it — cleanup operations sorted into safety tiers, from stripping progress noise up to truncating tool output. The quieter payoff is that a session file which stays tidy stays intact, and an intact file loads faster every time you reopen it.

One binary, two surfaces. The TUI is for browsing — sessions, messages, cleanup, ghost panels, vim keys throughout. The CLI is for everything you would rather not do by hand: `status-line` feeds Claude Code's own status line, `watch` tracks a session in flight, `clean --all` runs unattended, `export` and `doctor` fit in a script.

There is also surgery: extract a range to portable markdown, repair `parentUuid` chains, amputate a wedged region. Each cleanup operation writes a backup first, though a chained run supersedes the earlier ones — a checkpoint is the restore point that holds across a chain. Honestly, sessions misbehave less than they used to and most days you will not need any of it, but the morning after a reboot, when a long session is broken and will not open, it is the difference between recovering the thread and starting over. macOS, Linux and Windows, arm64 and amd64. Homebrew tap or Scoop. MIT.
