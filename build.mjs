// Build-time prerender: every page ships its full content in HTML.
import { mkdirSync, writeFileSync, statSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { renderAll } from "./render.mjs";
import { LOCALES, DEFAULT_LOCALE, LOCALE_ORDER, keyDiff } from "./locales.mjs";
import { STARS, LEAVES } from "./data/water-margin.mjs";
import { TRIBULATIONS, PEOPLE as JW_PEOPLE } from "./data/journey-west.mjs";
import { TREE, BEAUTIES, PEOPLE as RC_PEOPLE } from "./data/red-chamber.mjs";

const root = dirname(fileURLToPath(import.meta.url));

// Confirm the GitHub account + repo name before deploying; canonical, og:url
// and sitemap all derive from this one constant.
const ORIGIN = "https://dreamofxm.github.io";
const BASE = "/chinese-literature";

// Every locale table is spread over EN, so a key that was never translated is
// invisible at runtime — it just resolves to the English string. Parity is
// therefore checked here, where a leak fails the build instead of shipping.
for (const code of LOCALE_ORDER.filter((c) => c !== DEFAULT_LOCALE)) {
  const { missing, untranslated, uncheckable } = keyDiff(LOCALES[DEFAULT_LOCALE], LOCALES[code]);
  if (missing.length || untranslated.length) {
    throw new Error(`locale ${code}: missing [${missing}] still-English [${untranslated}]`);
  }
  // HTML renders a source line break as a space. Invisible in English, mid-sentence
  // in Japanese, so every non-default locale's prose is written on one line.
  const wrapped = Object.entries(LOCALES[code])
    .filter(([k, v]) => k.includes(".") && typeof v === "string" && v.includes("\n")).map(([k]) => k);
  if (wrapped.length) throw new Error(`locale ${code}: line-broken strings [${wrapped}]`);
  console.log(`locale ${code}: ${uncheckable.length} templated strings unchecked by parity — read them in the built page`);
}

// Buster covers every file that feeds a page, shared runtime included, or a
// runtime-only edit ships with an unchanged buster and browsers serve stale JS.
const SRCS = [
  "data/water-margin.mjs", "data/journey-west.mjs", "data/red-chamber.mjs",
  "locales.mjs", "render.mjs", "build.mjs", "assets/codex.js", "assets/style.css", "assets/og.jpg",
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

// Pages ship as <dir>/index.html but are canonicalised at <dir>/, so the sitemap has
// to list the same URLs the pages point at — or it advertises a second copy of everything.
const locOf = (rel) => `${ORIGIN}${BASE}/${rel.replace(/index\.html$/, "")}`;
const urlset = (rels) => `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${
  rels.map((rel) => `  <url><loc>${locOf(rel)}</loc><lastmod>${lastmod}</lastmod></url>`).join("\n")}\n</urlset>\n`;
// One sitemap per locale, so a locale can be submitted and retired on its own and
// an expanding /ja/ set never eats the crawl budget of the 141 English URLs.
const BOOTH = /(?:^|\/)three-kingdoms\/index\.html$/; // reserved booth: noindex teaser, not for crawlers
const localeOf = (rel) => (/^[a-z]{2}\//.test(rel) ? rel.slice(0, 2) : "en");
const mapName = (code) => (code === "en" ? "sitemap.xml" : `sitemap-${code}.xml`);
const byLocale = {};
for (const [rel] of pages) {
  if (BOOTH.test(rel)) continue;
  (byLocale[localeOf(rel)] ??= []).push(rel);
}
for (const [code, rels] of Object.entries(byLocale)) writeFileSync(join(root, mapName(code)), urlset(rels));
writeFileSync(
  join(root, "robots.txt"),
  `User-agent: *\nAllow: /\n${Object.keys(byLocale).map((c) => `Sitemap: ${ORIGIN}${BASE}/${mapName(c)}`).join("\n")}\n`
);
console.log(`wrote robots.txt, ${Object.values(byLocale).reduce((n, r) => n + r.length, 0)} sitemap urls in ${Object.keys(byLocale).join("+")} · buster v=${buster}`);
