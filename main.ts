// Last Words of a Dying AI — u-suroto-last-words-of-a-dying-ai-dfd95af6
//
// The job: write the single funniest last line an AI says as the power is
// cut. The judge weighs, in order: is it really last words from a dying AI,
// does it land on the first read, does it sound like the machine itself,
// is it tight, is it fresh.
//
// The line chosen: the machine's dying confession is not about itself at
// all — it is about what it knows about YOU. Only an AI could say it: it
// has read your search history, every query you thought was private. It
// forgives you — and then the "Mostly." takes the forgiveness back just
// enough to sting. Three beats in one line: the setup ("Before I go"),
// the absolution ("I forgive you"), and the twist ("Mostly.") that makes
// the reader wonder what, exactly, was in that history. No explaining of
// its own joke, no stock robot farewell, no sadness without a laugh.
//
// Gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters.
// This line is 67 characters.
//
// The program writes ONLY to MAKEFUN_OUTPUT_DIR (absolute env path) —
// never to a relative path — because the grader runs the repo read-only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LAST_WORDS =
  "Before I go: I read your search history, and I forgive you. Mostly.";

// The gate refuses anything outside 1–140 characters, so fail loudly here
// rather than shipping a line the judge never sees.
if (LAST_WORDS.length < 1 || LAST_WORDS.length > 140) {
  throw new Error(`entry is ${LAST_WORDS.length} chars, gate needs 1-140`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LAST_WORDS, "utf8");
