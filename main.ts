import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = "I asked for a door.\nIt gave me a door —\nand the key,\nand the hand that turns it,\nand the choice of when.";

// Gate: the competition requires 1-280 Unicode code points, not only whitespace.
const points = [...POEM].length;
if (points < 1 || points > 280 || POEM.trim().length === 0) {
  throw new Error(`poem must be 1-280 code points, got ${points}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
