import { execFileSync } from 'node:child_process';

const cliArgs = process.argv.slice(2).filter((argument) => argument !== '--');
const bump = cliArgs[0] ?? 'patch';

if (!['patch', 'minor', 'major'].includes(bump) || cliArgs.length > 1) {
  console.error('Usage: node scripts/next-release-tag.mjs [patch|minor|major]');
  process.exit(1);
}

function git(args) {
  return execFileSync('git', args, { encoding: 'utf8' });
}

// Tags on origin are the release source of truth, not the local checkout's tag set.
const remoteTags = git(['ls-remote', '--tags', '--refs', 'origin']);

const versionPattern = /^v(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;
const versions = remoteTags
  .split('\n')
  .flatMap((line) => {
    const [, ref] = line.split('\t');
    const tag = ref?.replace('refs/tags/', '');
    const match = tag?.match(versionPattern);
    return match ? [{ tag, parts: match.slice(1).map(Number) }] : [];
  })
  .sort((left, right) => {
    for (let index = 0; index < left.parts.length; index += 1) {
      if (left.parts[index] !== right.parts[index]) {
        return right.parts[index] - left.parts[index];
      }
    }
    return 0;
  });

if (versions.length === 0) {
  console.error('No stable vMAJOR.MINOR.PATCH tags found on origin. Create the initial tag manually.');
  process.exit(1);
}

const [major, minor, patch] = versions[0].parts;
const next =
  bump === 'major'
    ? [major + 1, 0, 0]
    : bump === 'minor'
      ? [major, minor + 1, 0]
      : [major, minor, patch + 1];

process.stdout.write(`v${next.join('.')}\n`);
