---
title: Metrograf
makers:
  - personId: michael-duyvesteijn
url: https://metrograf.xyz/?utm_source=agenticbuilders&utm_campaign=launch
github: ""
builtWith:
  - Claude Code
  - Claude Opus 5.5
  - Claude Fable 5.1
  - three.js
  - React Three Fiber
  - TypeScript
  - Vite
  - Vercel
  - Cloudflare Workers
  - LTA DataMall
featured: false
summary: Every MRT and LRT line in Singapore as a 3D world in your browser. Drive the train, or ride along, walk through the cars and change platforms, with the hour's real crowds and frequencies. Rebuilt in 10 days with Claude Code from a passenger-flow map made a year earlier.
date: 2026-10-21
---

Metrograf is Singapore's MRT in your browser. Ride puts you on a train on any MRT or LRT line, on the track as built, through tunnels and over viaducts: drive it, or ride along, walk through the cars and change platforms. Explore shows passenger flows across the network, hour by hour. Play, a game to play together, is coming. It's free, with no sign-up.

It started at the front window: when they can, Michael and his kids go to the front of the train to look out into the tunnel. Now his kids love just watching it at home. It's made as real as it could be:

- each line's own trains, modeled from photos, their sound measured from recordings
- the announcements as the trains say them, and a chime for each line
- Singapore's time of day: the sun, the city lights and how often trains run, with each hour's crowds from LTA DataMall's passenger numbers
- timings from ride videos on YouTube, transcribed with yt-dlp and Whisper

The map was vibe-coded in three weeks in 2025; the 3D world was rebuilt in 10 days with Claude Code. Claude co-authored 852 of the repo's 1,105 commits. Opus 5.5 at xhigh effort did almost all of it, the 3D included; Fable comes in for judgment calls on architecture. What made the difference:

- **Ranked values instead of a pile of rules.** The CLAUDE.md lists ten values in order: ground truth over claims, understand before fixing, delete over add, and so on. When two conflict, the higher one wins: Claude names it and carries on, and asks only when two tie on something users see or can't undo. A hook before every commit asks: does this remove the cause, or add one more copy?
- **Checked by eye.** Claude can't see the game, so every visual change comes with before and after stills from headless Chrome, and design choices go through artifacts: the options side by side as real stills, approved by eye.
- **Sessions in parallel.** Several Claude Code sessions work at once, each in its own git worktree, merging through one script that rebases and runs the checks.

Even the theme song is code: every instrument synthesized in Python. The trailer too: filmed inside the game by scripted cameras and cut to the theme's beat.

Built with three.js (React Three Fiber) and Vite on Vercel, and a Cloudflare Worker relaying shared trains for multiplayer (not public yet).
