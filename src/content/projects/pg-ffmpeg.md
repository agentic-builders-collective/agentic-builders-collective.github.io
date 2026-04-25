---
title: pg_ffmpeg
makers:
  - personId: han-qiao
github: https://github.com/sweatybridge/pg_ffmpeg
builtWith:
  - Rust
  - pgrx
  - PostgreSQL
  - FFmpeg
featured: false
summary: A PostgreSQL extension that brings FFmpeg media processing into SQL, with safe filter graphs and optional hardware acceleration.
date: 2026-04-25
---

pg_ffmpeg is a PostgreSQL extension that exposes FFmpeg's media processing capabilities directly inside the database. It provides SQL functions for extracting metadata and thumbnails, transcoding and remuxing audio and video, trimming with keyframe-aligned or frame-accurate precision, generating waveforms, spectrograms, and animated previews, running complex filter graphs across multiple inputs, concatenating compatible segments, and encoding videos from arrays of image frames.

Built in Rust with the pgrx framework and linked against the FFmpeg libraries, the extension validates filter graphs against an allow-list to keep operations safe, supports hardware acceleration as an opt-in, and includes aggregate functions for ordered concatenation as well as HLS segment generation from remote URLs.
