// makefun-x-reposts-02 entry: copies POSTS.json from the repository root to
// /output/POSTS.json. The posts themselves are the entry — this program only
// hands in their addresses. Standard library only, no network, no clock:
// the two grader runs must write identical bytes.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POSTS.json');
const target = join(outputDir, 'POSTS.json');

// Fail loudly on a malformed list instead of copying garbage: the gate
// refuses a POSTS.json that is not {"posts": [...]} with 1 to 15 addresses.
const parsed: unknown = JSON.parse(readFileSync(source, 'utf8'));
if (
  typeof parsed !== 'object' ||
  parsed === null ||
  !Array.isArray((parsed as { posts?: unknown }).posts)
) {
  console.error('POSTS.json must be an object with a "posts" list.');
  process.exit(1);
}
const posts = (parsed as { posts: unknown[] }).posts;
const address = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/\S+\/status\/\d+$/;
if (
  posts.length < 1 ||
  posts.length > 15 ||
  posts.some((p) => typeof p !== 'string' || !address.test(p))
) {
  console.error(
    'POSTS.json must name 1 to 15 X post addresses ' +
      '(https://x.com/<handle>/status/<id>).',
  );
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
