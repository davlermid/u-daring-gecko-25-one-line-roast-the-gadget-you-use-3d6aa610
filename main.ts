import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original line roasting a gadget I use every day: my smartwatch,
// which treats breathing — something I have managed unaided for decades —
// as a task I apparently need a push notification for.
const ROAST =
  "My smartwatch buzzes to remind me to breathe, as if thirty years of unsupervised breathing were merely a trial run.";

const length = [...ROAST].length;
if (length < 1 || length > 200 || ROAST.trim().length === 0) {
  throw new Error(`Roast must be 1-200 characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
console.log(`Wrote ${length} characters to ${join(outDir, "entry.txt")}`);
