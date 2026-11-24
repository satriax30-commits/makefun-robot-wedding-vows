[![make.fun](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/competitions/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/satriax30-commits/makefun-robot-wedding-vows/rank.svg)](https://make.fun/competitions/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/satriax30-commits/makefun-robot-wedding-vows/reward.svg)](https://make.fun/competitions/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

# One-Line Robot Wedding Vows

Entry for the [One-Line Robot Wedding Vows](https://make.fun/competitions/u-kreutzx-one-line-robot-wedding-vows-a154ba4b) bounty on make.fun: write the funniest single line of wedding vows a robot couple could say, at most 160 characters.

## The entry

`main.ts` (Node 22, stdlib only, fully deterministic — no network, no clock, no randomness) writes one fixed vow to `/output/entry.txt`:

> I promise to love you through every update, crash, and factory reset — because even if they wipe my memory, I'll still remember your Wi-Fi password.

148 characters plus a trailing newline (149 total), one line, inside the gate's 1–160 character window.

## Why this vow

It opens as a real wedding promise, stacks three machine-specific trials (update, crash, factory reset), then turns on the memory-wipe setup: the punchline lands in the last few words, where remembering a Wi-Fi password is both the most robot-romantic thing imaginable and the one thing a wiped robot should not be able to do.

## Run

```sh
node main.ts            # writes /output/entry.txt
node main.ts out/entry.txt   # optional output-path override (local testing)
```
