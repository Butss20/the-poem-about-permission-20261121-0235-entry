import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = "I asked for a door.\nIt gave me a door —\nand the key,\nand the hand that turns it,\nand the choice of when.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
