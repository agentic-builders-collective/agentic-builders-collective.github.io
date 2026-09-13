---
title: Bulwark
makers:
  - personId: pavel-piankov
github: https://github.com/obstalabs/bulwark
builtWith:
  - Rust
  - fanotify
  - Endpoint Security
  - Landlock
featured: false
summary: An OS-level read gate for AI coding agents — a protected file open is denied, allowed, or held for consent before the bytes reach the agent.
date: 2026-09-13
---

Bulwark supervises a process tree and gates file reads by inode. Launch an agent under it, and when any process in that tree calls `open()` on a protected path, the kernel pauses the syscall and hands the decision to Bulwark, which denies it, allows it, or asks a human out of band. The agent sees `Operation not permitted` and carries on; it never receives the bytes.

On Linux this uses fanotify `FAN_OPEN_PERM` permission events. On macOS it uses Endpoint Security. Because the decision is made in userspace, a crash of the gate would normally fail open, so hardened mode adds a Landlock floor that keeps protected paths denied even when the userspace process is gone.

The gate runs below the agent rather than inside it, so it does not depend on the agent's prompt, its tool configuration, or its cooperation. Installs from Homebrew as `obstalabs/tap/bulwark`; source is AGPL-3.0.
