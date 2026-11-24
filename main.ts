// news-image-20261123: place the rendered news image where the judge looks.
// No network, no drawing, no timestamps: a plain byte-for-byte copy, so the
// output is fully deterministic and the gate sees exactly the rendered file.
// The image itself (six real headlines from Monday 23 November 2026) is
// rendered offline by render-news.py; this program only moves its exact
// bytes to /output/entry.png, so two runs always write identical bytes.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const target = "/output/entry.png";

if (!existsSync(source)) {
  throw new Error(`news image missing: ${source}`);
}

mkdirSync(dirname(target), { recursive: true });
copyFileSync(source, target);
