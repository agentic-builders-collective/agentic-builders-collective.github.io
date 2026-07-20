# Deployment

This repository has two deployment steps:

1. Every push to `main` deploys the staging site at `agentic-builders-collective.github.io` through GitHub Pages.
2. A pushed version tag matching `v*` deploys production to `agenticbuilders.sg` through S3 + CloudFront, and sends a Resend notification email.

## Staging

Staging is handled by [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml).

The workflow runs on:

- Pushes to `main`.
- Manual `workflow_dispatch` runs.

It checks out submodules, builds the Astro site, and deploys the static output to GitHub Pages.

## Production

Production is handled by [`.github/workflows/deploy-s3.yml`](../.github/workflows/deploy-s3.yml).

The workflow runs on pushed tags matching `v*`. It checks out submodules, installs dependencies, builds the Astro site, syncs `dist/` to `s3://agenticbuilders.sg`, and invalidates the CloudFront distribution.

After the release commit is merged to `main`, create and push the next version tag from the updated `main` branch:

```sh
git switch main
git pull --ff-only origin main
next_tag="$(corepack pnpm run --silent next-release-tag)"
git tag "$next_tag"
git push origin "$next_tag"
```

`next-release-tag` queries tags from `origin`, finds the highest stable `vMAJOR.MINOR.PATCH` tag, and increments the patch version. For an intentional minor or major release, pass the bump explicitly:

```sh
next_tag="$(corepack pnpm run --silent next-release-tag -- minor)"
# or: corepack pnpm run --silent next-release-tag -- major
git tag "$next_tag"
git push origin "$next_tag"
```

## Production notification

When a version tag matching `v*` is pushed, [`.github/workflows/notify-production-deploy.yml`](../.github/workflows/notify-production-deploy.yml) also sends an email through Resend.

The email is sent:

- From the `RESEND_FROM_EMAIL` repository variable.
- To the comma-separated addresses in the `RESEND_TO_EMAILS` repository variable.

The message records the tagged version and can be used as a production deploy notification.

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
