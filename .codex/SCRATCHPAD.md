# abc-website scratchpad

- Repository starts intentionally minimal.
- `logo-generator/` is a Git submodule pointing at `../abc-logo-generator`.
- Astro is the chosen site framework.
- Content model is hybrid: YAML-first for `people`, `resources`, `shares`, and `meetups`; Markdown for `tips`.
- Empty collections currently emit expected Astro warnings during `pnpm build` because there is no seed content yet.
- For a root GitHub Pages site on `*.github.io`, the repository name must exactly match `<owner>.github.io`; workflow/config changes alone are not enough.
- Homepage logo colours should stay aligned with the palette list in `logo-generator/app.js`; mirror from the submodule rather than inventing a separate set.
- Typography preference: keep visible UI text at `1rem` as far as possible to preserve the terminal feel; treat smaller text as an exception for true meta content only.
- README should describe `agentic-builders-collective.github.io` as the staging site for `agenticbuilders.sg`, not as the primary destination.
- Current content IA: Community has organisers and members; Showcase has projects and presentations; Resources was renamed to Articles.
- Astro content-layer cache can retain deleted temporary collection entries in `node_modules/.astro/data-store.json`; clear `node_modules/.astro` after seeded dry runs.
- Static builds copy the root `logo-generator/` submodule into `dist/logo-generator/` via an Astro build hook; CI/deploy hosts need submodules initialised first.
- Collection index pages should keep contributor guide links visible near populated section titles, not only inside empty states.
- Prefer terminal-like text affordances such as `[ℹ]` over circular info icons; hover-only popovers need mobile/touch-friendly inline behaviour.
- Link-attached note popovers are now codified in `src/components/TerminalNoteLink.astro`; reuse it rather than rebuilding note tooltip markup locally.
- Event sponsor metadata should render as a normal dotted card-meta row with linked names only, no `sponsored by` or `Hosted by` prefix. Numbered meetups #1 and #2 show Tinkercademy only; #3 through #7 show SG Code Campus, with venue partner links appended using `+` where applicable.
