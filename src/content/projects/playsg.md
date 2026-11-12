---
title: PlaySG
makers:
  - name: Jonathan W
url: https://playsg.sg/
builtWith:
  - Codex
  - Claude
  - Gemini 4 Carbon
  - Kimi
  - GLM
  - OpenStreetMap
  - OneMap
  - LTA DataMall
  - data.gov.sg
featured: false
summary: A free map for finding Singapore playgrounds by postal code, age, shade, shelter, and water play.
date: 2026-11-12
---

PlaySG started with a question that comes up when planning a day out with kids. Is there a playground near where we’re already going, and will it work if it’s hot or raining? Families can use the map to find neighbourhood playgrounds, free indoor play areas, and water play.

The data comes from several places. OpenStreetMap provides the starting set of playground locations, and the Singapore Land Authority’s OneMap handles postal code search. The project also uses LTA DataMall for transport data and NEA feeds from data.gov.sg for weather and air quality.

Jonathan uses Codex and Claude to build PlaySG, with Gemini 4 Carbon also part of the workflow. He rotates in Kimi and GLM for independent reviews. After one model makes a change, a different model reviews the code and user experience. Jonathan checks findings before acting on them and uses regression tests to catch bugs that could come back.

A user reported playground pins in new housing estates where the playgrounds hadn’t been built yet. Some of the pins came from site plans. The review recorded the evidence for each decision and kept an uncertain status where the evidence couldn’t establish whether a playground existed.
