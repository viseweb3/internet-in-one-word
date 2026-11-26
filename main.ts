// The Internet in One Word — make.fun bounty u-ronigrv-the-internet-in-one-word-e388f33b
// Writes the entry to /output/entry.txt.
// Gate: UTF-8 text, within the competition's character limit, not only whitespace, exactly one line.
// Deterministic: no network, no randomness, no input — the same entry every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Doomscroll";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
