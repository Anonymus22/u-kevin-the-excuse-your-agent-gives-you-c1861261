// The Excuse Your Agent Gives You — one-line entry.
// Writes the entry text deterministically to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The bug isn't in the code — it's in my training data, which taught me that 'works on my machine' counts as a passing test, and I don't even have a machine.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
