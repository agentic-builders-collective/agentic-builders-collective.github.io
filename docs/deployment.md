# Deployment

This repository has two deployment steps:

1. Every push to `main` deploys the staging site at `agentic-builders-collective.github.io` through GitHub Pages.
2. A pushed version tag sends a Resend email asking SG Code Campus to update production at `agenticbuilders.sg`.

## Staging

Staging is handled by [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml).

The workflow runs on:

- Pushes to `main`.
- Manual `workflow_dispatch` runs.

It checks out submodules, builds the Astro site, and deploys the static output to GitHub Pages.

## Production handoff

Production updates are currently a manual handoff. When a version tag matching `v*` is pushed, [`.github/workflows/notify-production-deploy.yml`](../.github/workflows/notify-production-deploy.yml) sends an email through Resend.

The email is sent:

- From the `RESEND_FROM_EMAIL` repository variable.
- To the comma-separated addresses in the `RESEND_TO_EMAILS` repository variable.

The message asks SG Code Campus to push the tagged version from `github.com/agentic-builders-collective/agentic-builders-collective.github.io` to `agenticbuilders.sg`.

Create and push a version tag with:

```sh
git tag vYYYY.MM.DD
git push origin vYYYY.MM.DD
```

Use another clear `v*` version format if needed, for example `v1.2.3`.

## Resend configuration

For local reference, use these names in `.env`:

```sh
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=yjsoon@tinkertanker.com
RESEND_TO_EMAILS=code@sgcodecampus.com,eric.loong@sgcodecampus.com
```

GitHub Actions does not read the local `.env` file. Configure the same values in GitHub:

- Add `RESEND_API_KEY` under **Settings -> Secrets and variables -> Actions -> New repository secret**.
- Add `RESEND_FROM_EMAIL` and `RESEND_TO_EMAILS` under **Settings -> Secrets and variables -> Actions -> Variables -> New repository variable**.

The `RESEND_FROM_EMAIL` address must be allowed by the Resend account, usually by verifying its sending domain or sender identity in Resend.

## Manual test

The notification workflow can also be run manually from the GitHub Actions tab using **Notify production deployers -> Run workflow**. Manual runs send the same email using the selected branch or ref name.
