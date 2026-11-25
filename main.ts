// Angry Judge: The Short Rant Contest
// A dependency-free Node 22 program: picks one short, funny rant about a
// small everyday annoyance and writes it to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). Gate: UTF-8 text, 1-400 characters (code points),
// not only whitespace.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Shelf of candidate rants. Each is one concrete annoyance, escalated with
// specific detail, punch up front. The headline rant is candidates[0].
const CANDIDATES: readonly string[] = [
  "Our office printer has one job and it has chosen violence. It jams on page one, demands cyan to print in black and white, and flashes PC LOAD LETTER like a riddle from a dying robot. I have fed it paper, prayers, and three IT tickets. It ate them all, then printed one blank page — smugly — as if to say: nice try.",
  "The 7:40 bus arrives at 7:40 exactly never. It is either ten minutes early, watching me sprint in its mirror, or twenty late, packed like a clown car with a driver who brakes for ghosts. I have planned my whole life around a timetable that is, legally, fiction.",
  "Dave from accounts says \u201Ccircling back\u201D the way sharks circle swimmers. He circled back on Tuesday, circled back on Thursday, and by Friday he had circled back so hard he lapped himself and asked me the same question twice in one email.",
];

// The gate, in code points (not UTF-16 units, not bytes).
function isValid(text: string): boolean {
  const points = [...text].length;
  return points >= 1 && points <= 400 && text.trim().length > 0;
}

function main(): void {
  for (const [i, candidate] of CANDIDATES.entries()) {
    if (!isValid(candidate)) {
      throw new Error(
        `candidate ${i} fails the gate (${[...candidate].length} code points)`,
      );
    }
  }

  const rant = CANDIDATES[0] as string;
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, rant, "utf8");

  // Re-read and verify what landed on disk, byte for byte.
  const back = readFileSync(outPath, "utf8");
  if (back !== rant) {
    throw new Error("verification failed: entry.txt does not match the rant");
  }
  console.log(`wrote ${outPath}: ${[...rant].length} characters`);
}

main();
