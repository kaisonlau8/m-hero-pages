import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const siteDir = resolve(root, "site");
const distDir = resolve(root, "dist");

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });
await cp(siteDir, distDir, { recursive: true });
