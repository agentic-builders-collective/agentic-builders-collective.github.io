# abc-website scratchpad

- Repository starts intentionally minimal.
- `logo-generator/` is a Git submodule pointing at `../abc-logo-generator`.
- Astro is the chosen site framework.
- Content model is hybrid: YAML-first for `people`, `resources`, `shares`, and `meetups`; Markdown for `tips`.
- Empty collections currently emit expected Astro warnings during `pnpm build` because there is no seed content yet.
