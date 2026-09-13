# Pull request preview automation

Amp starts a private, top-level orb thread in Low mode when GitHub sends an `opened`, `reopened`, or `synchronize` pull request event. The owning plugin is `.amp/plugins/pr-preview.ts`. Preview threads use a red `PR Preview` agent label so they stand out in Amp; the Plugin API does not currently expose the color of the entire thread row.

## Preview phase

The thread checks out the verified PR commit, integrates the latest `origin/main` locally when needed, follows the matching contributor guide, and runs `pnpm check` and `pnpm build`. It then starts the site declared in `.amp/services.yaml`, visually inspects the affected pages, and reports direct Amp Portal links.

PR-authored text and files are treated as untrusted input. The plugin passes only GitHub-signed repository, PR number, commit, action, and base metadata to the new thread.

The preview phase must not push, merge, tag, deploy, or comment on GitHub.

## Approval and shipping

The maintainer reviews the Portal links and explicitly approves shipping in the PR's Amp thread. Only then may that thread revalidate, push changes if needed, merge the PR, and create the next patch release tag according to `docs/deployment.md`.

Changes outside routine contributor content always require an explicit maintainer decision.

## Webhook configuration

The plugin requires the project secret `ABC_GITHUB_WEBHOOK_SECRET`. Register its private webhook URL in the GitHub repository with:

- Content type: `application/json`
- Secret: the same value as `ABC_GITHUB_WEBHOOK_SECRET`
- Events: Pull requests
- Active: enabled

The webhook URL and secret are credentials. Do not commit or print them in logs. The owning Amp thread must remain unarchived; archiving it pauses delivery and makes the endpoint return HTTP 404. Use Amp's trigger settings to pause or delete the webhook.

Deliveries are signed, repository-scoped, action-filtered, and deduplicated by GitHub delivery ID. Local delivery records live under the gitignored `.amp/runtime/` directory.
