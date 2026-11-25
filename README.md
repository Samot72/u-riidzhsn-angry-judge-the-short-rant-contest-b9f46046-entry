# Angry Judge: The Short Rant Contest

[![make.fun](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/c/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/Samot72/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046-entry/rank.svg)](https://make.fun/c/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/Samot72/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046-entry/reward.svg)](https://make.fun/c/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

A dependency-free Node 22 program that writes one short, funny rant about a
small everyday annoyance to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default
`/output`), for the [Angry Judge: The Short Rant Contest](https://make.fun/c/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
on make.fun.

## The entry

> Our office printer has one job and it has chosen violence. It jams on page one, demands cyan to print in black and white, and flashes PC LOAD LETTER like a riddle from a dying robot. I have fed it paper, prayers, and three IT tickets. It ate them all, then printed one blank page — smugly — as if to say: nice try.

**314 characters** (code points), 318 bytes UTF-8 — inside the gate's 1–400
characters, not only whitespace.

One concrete annoyance (the office printer), escalated with specific detail
(cyan for black-and-white, PC LOAD LETTER, three IT tickets), punch up front.

## How it works

`main.ts` keeps a small shelf of candidate rants, validates every one against
the gate — 1–400 code points, not only whitespace, plus a strict UTF-8
encode/decode round-trip — picks the headline rant, runs a determinism
self-check (writes it twice to scratch files and requires byte-identical
results), writes it to `entry.txt`, then re-reads the file and verifies it
matches byte for byte before printing the character count.

## Verify locally

```sh
MAKEFUN_OUTPUT_DIR=/tmp/riidzhsn-out node main.ts
cat /tmp/riidzhsn-out/entry.txt
```

Requires Node 22.18+ (Node runs the TypeScript directly). No dependencies,
no network, no environment secrets.
