// Build-time prerender: every page ships its full content in HTML.
import { mkdirSync, writeFileSync, statSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { renderAll } from "./render.mjs";
import { STARS, LEAVES } from "./data/water-margin.mjs";
import { TRIBULATIONS, PEOPLE as JW_PEOPLE } from "./data/journey-west.mjs";
import { TREE, BEAUTIES, PEOPLE as RC_PEOPLE } from "./data/red-chamber.mjs";

const root = dirname(fileURLToPath(import.meta.url));

// Confirm the GitHub account + repo name before deploying; canonical, og:url
// and sitemap all derive from this one constant.
const ORIGIN = "https://dreamofxm.github.io";
const BASE = "/chinese-literature";

// Buster covers every file that feeds a page, shared runtime included, or a
// runtime-only edit ships with an unchanged buster and browsers serve stale JS.
const SRCS = [
  "data/water-margin.mjs", "data/journey-west.mjs", "data/red-chamber.mjs",
  "render.mjs", "build.mjs", "assets/codex.js", "assets/style.css", "assets/og.jpg",
  ...readdirSync(join(root, "assets/img")).filter((f) => f.endsWith(".jpg")).map((f) => `assets/img/${f}`),
];
let last = 0;
for (const s of SRCS) {
  const t = statSync(join(root, s)).mtimeMs;
  if (t > last) last = t;
}
const lastmod = new Date(last).toISOString().slice(0, 10); // sitemaps stay date-granular
const buster = new Date(last).toISOString().replace(/[-:T]/g, "").slice(0, 12); // minute-granular: a same-day edit must bust

const pages = renderAll({ origin: ORIGIN, buster, STARS, LEAVES, JW_PEOPLE, TRIBULATIONS, TREE, BEAUTIES, RC_PEOPLE });
for (const [rel, html] of pages) {
  const p = join(root, rel);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, html);
  console.log(`wrote ${rel} (${html.length} bytes)`);
}

writeFileSync(join(root, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${ORIGIN}${BASE}/sitemap.xml\n`);
// Pages ship as <dir>/index.html but are canonicalised at <dir>/, so the sitemap has
// to list the same URLs the pages point at — or it advertises a second copy of everything.
const urls = pages
  .filter(([rel]) => rel !== "three-kingdoms/index.html") // reserved booth: noindex teaser, not for crawlers
  .map(([rel]) => `  <url><loc>${ORIGIN}${BASE}/${rel.replace(/index\.html$/, "")}</loc><lastmod>${lastmod}</lastmod></url>`)
  .join("\n");
writeFileSync(
  join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
console.log(`wrote robots.txt, sitemap.xml · buster v=${buster}`);
