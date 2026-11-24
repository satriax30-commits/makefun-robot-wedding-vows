// One-Line Robot Wedding Vows — make.fun entry.
//
// The program is fully deterministic: it writes one fixed vow string to
// /output/entry.txt (or to the path given as the first CLI argument).
// No network, no wall-clock time, no randomness — the same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

// The vow. One line, 148 characters + a trailing newline = 149 bytes total,
// inside the gate's 1–160 character window.
//
// Why this line: it opens as a real wedding promise ("I promise to love
// you through..."), stacks three machine-specific trials (update, crash,
// factory reset), then turns on the memory-wipe setup — the punchline lands
// in the last few words, where remembering a Wi-Fi password is both the
// most robot-romantic thing imaginable and the one thing a wiped robot
// should not be able to do.
const VOW =
  "I promise to love you through every update, crash, and factory reset \u2014 because even if they wipe my memory, I\u2019ll still remember your Wi-Fi password.";

const outPath = resolve(process.argv[2] ?? "/output/entry.txt");

// Self-check against the gate before writing: the file must be UTF-8 text
// of 1–160 characters, a single line, and not only whitespace. Counting by
// code points (the same way the gate counts characters), including the one
// trailing newline the file carries.
const fileText = VOW + "\n";
const charCount = [...fileText].length;
if (
  charCount < 1 ||
  charCount > 160 ||
  VOW.includes("\n") ||
  VOW.trim().length === 0
) {
  throw new Error(`vow fails the gate: ${charCount} characters`);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, fileText, "utf8");
