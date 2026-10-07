// Locale loader: one JSON file per language under locales/.
//
// A language is a config file, not a code module — drop locales/<code>.json
// in and it becomes a locale (see README "Adding a language"). Everything a
// translator touches is plain data there; the handful of keys render.mjs
// calls as functions carry {n}/{v}/{en}/{nn}/{site} placeholders that this
// runtime binds back into functions, so no language ever needs its own .mjs.
//
// The leaf pages stay English-only until the pilot earns it: their copy is
// 70k words of interpretive gloss, while the overview tier is ~1.6k words of
// prose plus table chrome. Every English string is byte-for-byte the text
// render.mjs used to carry inline, so the `en` rebuild must be identical to
// the shipped tree — that equality is the regression gate.
//
// Japanese is written, not machine-turned: no kana readings are invented (a
// wrong 読み is worse than none), so names keep their kanji plus the existing
// romanisation. Shinjitai is used for Japanese-side labels; traditional forms
// stay on the Chinese spans, which carry lang="zh" and keep the 楷 font.
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const dir = join(root, "locales");

export const DEFAULT_LOCALE = "en";

// Keys whose JSON values are templates rather than plain strings, with the
// positional argument names render.mjs passes them. shell.footer is an array
// of templates that additionally receives {siteBare} (the origin sans scheme).
const CALLABLE = {
  "rail.hint": ["n"],
  "rail.cardAria": ["en"],
  "rail.cardAlt": ["en", "nn"],
  "jw.all": ["n"],
  "jw.seoDesc": ["n"],
  "rc.all": ["n"],
  "rc.hint": ["v"],
  "rc.seoDesc": ["n", "v"],
  "tk.all": ["n"],
};
const fill = (tpl, vars) => tpl.replace(/\{(\w+)\}/g, (_, k) => String(vars[k]));

function wrapStrings(strings) {
  const out = {};
  for (const [k, v] of Object.entries(strings)) {
    if (k === "shell.footer") {
      out[k] = v.map((tpl) => (site) => fill(tpl, { site, siteBare: site.replace(/^https?:\/\//, "") }));
    } else if (CALLABLE[k]) {
      const names = CALLABLE[k];
      out[k] = (...args) => fill(v, Object.fromEntries(names.map((n, i) => [n, args[i]])));
    } else {
      out[k] = v;
    }
  }
  return out;
}

const raw = new Map();
for (const f of readdirSync(dir).filter((x) => x.endsWith(".json")).sort()) {
  const code = f.slice(0, -".json".length);
  const parsed = JSON.parse(readFileSync(join(dir, f), "utf8"));
  if (parsed.code !== code) throw new Error(`locales/${f}: "code" is "${parsed.code}", expected "${code}"`);
  raw.set(code, parsed);
}
if (!raw.has(DEFAULT_LOCALE)) throw new Error(`locales/${DEFAULT_LOCALE}.json is missing`);

// Each table spreads over its parent (default: the default locale), exactly
// as the old handwritten JA table spread over EN. Inheritance is runtime
// grace only — the parity gate in build.mjs is what refuses a real leak.
function buildTable(code, seen = new Set()) {
  if (seen.has(code)) throw new Error(`locales: circular extends at "${code}"`);
  seen.add(code);
  const { extends: parent = DEFAULT_LOCALE, tiers = [], strings = {}, ...meta } = raw.get(code);
  const base = parent === code ? {} : buildTable(parent, seen);
  return { ...base, ...meta, tiers, ...wrapStrings(strings) };
}

export const LOCALES = Object.fromEntries([...raw.keys()].map((c) => [c, buildTable(c)]));
export const LOCALE_ORDER = [DEFAULT_LOCALE, ...[...raw.keys()].filter((c) => c !== DEFAULT_LOCALE)];
export const localeTiers = (code) => LOCALES[code]?.tiers ?? [];

// Key parity is a build-time gate, not a hope: a locale missing a key would
// silently fall through to its parent table and ship English inside a
// translated page. Because the spread makes every inherited key an own
// property, the only detectable symptom is a value that still equals
// English — so that is what gets tested. Keys ending in .zh hold the Chinese
// source title shown under a translated heading; those read the same in every
// locale by design, so equality there proves nothing. Functions can't be
// compared by value: the gate lists them as unchecked, and the rendered page
// is where they get read.
const ZH_TITLES = /\.(zh|titleZh)$/;

export function keyDiff(base, other) {
  const keys = (o) => Object.keys(o).filter((k) => k.includes("."));
  const missing = keys(base).filter((k) => !(k in other));
  // A function — or an array holding one, like the footer — has no comparable
  // value: JSON.stringify flattens every function to null, so two different
  // builders look identical. Those keys go to `uncheckable` instead.
  const hasFn = (v) => typeof v === "function"
    || (v && typeof v === "object" && Object.values(v).some(hasFn));
  const comparable = (k) => !ZH_TITLES.test(k) && !hasFn(base[k]);
  return {
    missing,
    untranslated: keys(base).filter((k) => comparable(k) && JSON.stringify(base[k]) === JSON.stringify(other[k])),
    uncheckable: keys(base).filter((k) => hasFn(base[k])),
  };
}
