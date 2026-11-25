// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

const joke = "Bought the dip with my emergency fund. The emergency was me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
