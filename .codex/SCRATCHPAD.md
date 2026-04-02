# abc-website scratchpad

- Repository starts intentionally minimal.
- `logo-generator/` is a Git submodule pointing at `../abc-logo-generator`.
- Astro is the chosen site framework.
- Content model is hybrid: YAML-first for `people`, `resources`, `shares`, and `meetups`; Markdown for `tips`.
- Empty collections currently emit expected Astro warnings during `pnpm build` because there is no seed content yet.
- For a root GitHub Pages site on `*.github.io`, the repository name must exactly match `<owner>.github.io`; workflow/config changes alone are not enough.
- Homepage logo colours should stay aligned with the palette list in `logo-generator/app.js`; mirror from the submodule rather than inventing a separate set.
- Typography preference: keep visible UI text at `1rem` as far as possible to preserve the terminal feel; treat smaller text as an exception for true meta content only.
