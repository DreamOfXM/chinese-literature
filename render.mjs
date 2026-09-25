// Pure string builders. build.mjs calls these at build time so every page
// ships its full content in HTML — no client-side-rendered empty shells.
import { LOCALES, DEFAULT_LOCALE, LOCALE_ORDER, localeTiers } from "./locales.mjs";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

// Local server and GitHub Pages both mount the site at this path prefix.
const BASE = "/chinese-literature";

const GA4_ID = "G-LY9LGVESBH";

// Non-default locales live under /<code>/; English keeps the bare paths it has
// always had, because its 141 URLs are already in Google's index.
const lp = (code) => (code === DEFAULT_LOCALE ? "" : `/${code}`);

function shell({ origin, buster, path, title, desc, body, jsonld, og, ogType, noindex, L, alt = {} }) {
  // One choke point for the SERP budget: no page can ship a title or description
  // Google would cut off mid-word.
  title = clip(title, TITLE_MAX);
  desc = clip(desc, DESC_MAX);
  const url = origin + path;
  const o = og || {
    img: "/assets/og.jpg", w: 1200, h: 630,
    alt: L["shell.ogAlt"],
  };
  const lds = (Array.isArray(jsonld) ? jsonld : [jsonld])
    .map((j) => `<script type="application/ld+json">${JSON.stringify(j)}</script>`).join("\n");
  // Only pages that really have a translated twin declare a cluster — an
  // hreflang to a page that doesn't exist is worse than no hreflang.
  const cluster = [{ code: L.code, href: path },
    ...Object.entries(alt).map(([code, href]) => ({ code, href }))].sort((a, b) => a.code.localeCompare(b.code));
  const alts = cluster.length > 1
    ? cluster.map((c) => `<link rel="alternate" hreflang="${c.code}" href="${esc(origin + c.href)}">`).join("\n")
      + `\n<link rel="alternate" hreflang="x-default" href="${esc(origin + (cluster.find((c) => c.code === DEFAULT_LOCALE) || cluster[0]).href)}">`
    : "";
  const switcher = cluster.length > 1 ? `
  <nav class="lang-switch" aria-label="${esc(L.langLabel)}">
${cluster.map((c) => `    <a href="${esc(c.href)}" hreflang="${c.code}" lang="${c.code}"${c.code === L.code ? ' class="on" aria-current="true"' : ""}>${esc(LOCALES[c.code].selfName)}</a>`).join("\n")}
  </nav>` : "";
  return `<!doctype html>
<html lang="${L.htmlLang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${noindex ? '<meta name="robots" content="noindex">\n' : ""}<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${esc(url)}">
${alts}${alts ? "\n" : ""}<meta property="og:type" content="${ogType || "website"}">
<meta property="og:site_name" content="${esc(L["shell.site"])}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${esc(url)}">
<meta property="og:image" content="${esc(origin + BASE + o.img)}">
<meta property="og:image:width" content="${o.w}">
<meta property="og:image:height" content="${o.h}">
<meta property="og:image:alt" content="${esc(o.alt)}">
<meta name="twitter:card" content="summary_large_image">
<link rel="stylesheet" href="${BASE}/assets/style.css?v=${buster}">
${lds}
<script async src="https://www.googletagmanager.com/gtag/js?id=${GA4_ID}"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}');
</script>
</head>
<body>
<header class="site">
  <a class="brand" href="${BASE}${lp(L.code)}/"><span class="seal" lang="zh" aria-hidden="true">譜</span>${esc(L["shell.site"])}</a>
  <nav>
    <a href="${BASE}${lp(L.code)}/water-margin/">${esc(L["shell.nav.wm"])}</a>
    <a href="${BASE}${lp(L.code)}/journey-west/">${esc(L["shell.nav.jw"])}</a>
    <a href="${BASE}${lp(L.code)}/red-chamber/">${esc(L["shell.nav.rc"])}</a>
    <a href="${BASE}${lp(L.code)}/three-kingdoms/">${esc(L["shell.nav.tk"])} <span class="soon-chip" lang="zh">籌備中</span></a>
  </nav>${switcher}
</header>
<main>
${body}
</main>
<footer class="site">
  <span class="seal" lang="zh" aria-hidden="true">譜</span>
${L["shell.footer"].map((f) => "  " + f(origin + BASE + lp(L.code))).join("\n")}
</footer>
<script src="${BASE}/assets/codex.js?v=${buster}" defer></script>
</body>
</html>`;
}

const NAV_CRUMB = (origin, path, name, L) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: L["shell.site"], item: origin + BASE + lp(L.code) + "/" },
    { "@type": "ListItem", position: 2, name, item: origin + path },
  ],
});

// ---------- search-facing wording ----------
// Inside the site a page is "Leaf 13 of the marsh"; a reader arriving from a search
// box typed "Lu Zhishen Water Margin character" instead, so <title> and the meta
// description carry their vocabulary rather than ours. Display width counts one CJK
// glyph as two latin cells, which is roughly how a SERP renders it.
const TITLE_MAX = 58;
const DESC_MAX = 155;
const dispLen = (s) => [...String(s)].reduce((n, ch) => n + (/[\u2e80-\u9fff\uf900-\ufaff\uff00-\uffef]/.test(ch) ? 2 : 1), 0);
const clip = (s, max) => {
  if (dispLen(s) <= max) return s;
  let out = "";
  for (const ch of s) {
    if (dispLen(out + ch) > max) break;
    out += ch;
  }
  // Space-delimited text can drop its last partial word. Japanese and Chinese
  // carry no spaces, so that same rule would eat the whole string and ship a
  // description of one ellipsis — they cut at the last clause mark instead.
  if (/\s/.test(out)) return out.replace(/\s*\S*$/, "").replace(/[,;:.\s]+$/, "") + "…";
  const at = Math.max(out.lastIndexOf("。"), out.lastIndexOf("、"), out.lastIndexOf("・"));
  return (at > out.length / 2 ? out.slice(0, at) : out) + "…";
};

const seoTitle = (r, nv) => {
  let t = `${r.en} — ${nv.seoNovel} Character`;
  const add = (s) => { if (dispLen(t + s) <= TITLE_MAX) t += s; };
  if (r.nng && dispLen(r.nng) <= 26) add(`: ${r.nng}`);
  add(" & Fate");
  if (r.zh) add(` ${r.zh}`);
  return t;
};

const seoDesc = (r, nv) => {
  const bits = [`${r.en} ${r.zh} — ${nv.seoNovel} character`];
  if (nv.seoRole(r)) bits.push(nv.seoRole(r));
  if (r.nng) bits.push(`nicknamed “${r.nng}”`);
  return clip(`${bits.join(", ")}. ${r.hook}`, DESC_MAX);
};

// Chapters a record appears in, read off its own deed labels plus its tribulation key.
const chaptersOf = (r) => {
  const s = new Set();
  const scan = (text) => {
    // "32-35" names four chapters, not two endpoints
    for (const m of text.matchAll(/(\d+)\s*[-–—]\s*(\d+)/g)) {
      const a = +m[1];
      const b = +m[2];
      if (b > a && b - a <= 20) for (let c = a; c <= b; c++) s.add(c);
    }
    for (const m of text.matchAll(/\d+/g)) s.add(+m[0]);
  };
  for (const e of r.events || []) scan(String(e[0]));
  scan(String(r.trib || ""));
  return s;
};

// Roll-call chapters (the ch. 119 death list, the ch. 5 register) set a crowd on one
// page without letting them meet, so sharing one proves nothing. Cut at 6 leaves:
// the busiest ordinary chapter in these three books reaches 5.
const ROLL_CALL = new WeakMap();
const rollCallChapters = (nv) => {
  let crowd = ROLL_CALL.get(nv);
  if (!crowd) {
    const freq = new Map();
    for (const r of nv.rows) for (const c of chaptersOf(r)) freq.set(c, (freq.get(c) || 0) + 1);
    crowd = new Set([...freq].filter(([, n]) => n >= 6).map(([c]) => c));
    ROLL_CALL.set(nv, crowd);
  }
  return crowd;
};

// Who else stands in the same chapters; ties broken by rank so the set is stable
// across rebuilds.
const peersOf = (nv, r) => {
  const crowd = rollCallChapters(nv);
  const mine = new Set([...chaptersOf(r)].filter((c) => !crowd.has(c)));
  return nv.rows
    .filter((o) => o !== r)
    .map((o) => {
      const theirs = chaptersOf(o);
      let shared = 0;
      for (const c of mine) if (theirs.has(c)) shared++;
      return { o, score: shared + (o.grp && o.grp === r.grp ? 0.4 : 0) };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.o.id - b.o.id)
    .slice(0, 6);
};

const pic = (buster, name, alt, w, h, eager) => `  <picture>
    <source srcset="${BASE}/assets/${name}.avif?v=${buster}" type="image/avif">
    <source srcset="${BASE}/assets/${name}.webp?v=${buster}" type="image/webp">
    <img src="${BASE}/assets/${name}.jpg?v=${buster}" alt="${esc(alt)}" width="${w}" height="${h}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'}>
  </picture>`;

function hero(buster, { img, alt, kicker, title, zh, lede }) {
  return `
<section class="hero">
${pic(buster, img, alt, 1600, 766, true)}
  <div class="hero-inner">
    <p class="kicker">${esc(kicker)}</p>
    <h1>${title}</h1>
    <p class="zh-title" lang="zh">${zh}</p>
    <p class="lede">${lede}</p>
  </div>
</section>`;
}

function hub({ origin, buster, L, alt }) {
  const p = `${BASE}${lp(L.code)}/`;
  const card = (dir, key, zhCard, title, body) => `    <a class="card${key}" href="${BASE}${lp(L.code)}/${dir}/">
      <span class="card-zh" lang="zh" aria-hidden="true">${zhCard}</span>
      <h2>${title}</h2>
      <p>${body}</p>
    </a>`;
  const body = `${hero(buster, {
    img: "og",
    alt: L["hub.alt"],
    kicker: L["hub.kicker"],
    title: L["hub.title"],
    zh: L["hub.zh"],
    lede: L["hub.lede"],
  })}
<section class="plates">
  <h2 class="rule">${esc(L["hub.tools"])} <span class="zh-h" lang="zh">三冊</span></h2>
  <div class="cards">
${card("water-margin", "", "水滸", L["hub.card.wm.t"], L["hub.card.wm.b"])}
${card("journey-west", "", "西遊", L["hub.card.jw.t"], L["hub.card.jw.b"])}
${card("red-chamber", "", "紅樓", L["hub.card.rc.t"], L["hub.card.rc.b"])}
${card("three-kingdoms", " soon", "三國", `${L["hub.card.tk.t"]} <span class="soon-chip" lang="zh">籌備中</span>`, L["hub.card.tk.b"])}
  </div>
</section>
<section class="plates">
  <h2 class="rule">${esc(L["hub.why"])} <span class="zh-h" lang="zh">以表代文</span></h2>
  <p class="plate-note" style="font-style:normal;font-size:1rem;color:var(--ink-soft)">${L["hub.why.b"]}</p>
</section>`;
  return shell({
    origin, buster, path: p, L, alt,
    title: L["hub.seoTitle"],
    desc: L["hub.seoDesc"],
    body,
    jsonld: { "@context": "https://schema.org", "@type": "WebSite", name: L["shell.site"], url: origin + p },
  });
}

const slugOf = (py) => py.toLowerCase().replace(/ü/g, "u").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

// ---------- the leaf engine ----------
// Shared by every novel. A novel is a spec: where its pages live, how its images
// are named, the wording its leaves carry, and `rows` — one record per character
// that has a page, already merged with that character's hook / events / end.
//   record = { id, tag, tagShort, zh, en, nn, nng, label, hook, end, events,
//              verse?, verseGloss?, painting?, meta? }
const leafHref = (nv, r) => `${BASE}/${nv.dir}/${slugOf(r.en)}/`;
const leafPic = (nv, r) => nv.imgOf(r);

// The lightbox reads its gallery from this payload, so the rail and every leaf
// page share one swipeable set without duplicating markup.
const lbData = (nv) => `  <script type="application/json" class="lb-data">${JSON.stringify(nv.rows.map((r) => ({
  id: r.id, tag: r.tag, zh: r.zh, en: r.en, nn: r.nng || "", label: r.label || "",
  href: leafHref(nv, r),
  webp: `${BASE}/assets/${leafPic(nv, r)}.webp`, jpg: `${BASE}/assets/${leafPic(nv, r)}.jpg`,
})))}</script>`;

function leafRail(buster, nv, L) {
  const cards = nv.rows.map((r, i) => `    <button class="leafcard" data-lb="${i}" aria-label="${esc(L["rail.cardAria"](r.en))}">
${pic(buster, leafPic(nv, r), L["rail.cardAlt"](r.en, r.nng), 720, 900)}
      <span class="leaf-zh" lang="zh">${esc(r.zh)}</span>
      <span class="leaf-en">${esc(r.en)} · ${esc(r.tagShort)}</span>
    </button>`).join("\n");
  return `
<section class="rail-sec">
  <h2 class="rule">${esc(L["rail.heading"])} <span class="zh-h" lang="zh">${nv.railHeadingZh}</span></h2>
  <p class="rail-hint">${L["rail.hint"](nv.rows.length)}</p>
  <div class="rail" tabindex="0" aria-label="${esc(L[`rail.aria.${nv.key}`])}">
${cards}
  </div>
  <p class="plate-note">${esc(L["rail.plateNote"])}</p>
${lbData(nv)}
</section>`;
}

function leafPage({ origin, buster }, nv, r) {
  // Leaves are English-only in the pilot, so they carry the default locale's
  // chrome and no hreflang cluster — a cluster pointing at a /ja/ leaf that was
  // never written would be worse than declaring nothing.
  const L = LOCALES[DEFAULT_LOCALE];
  const at = nv.rows.indexOf(r);
  const prev = nv.rows[at - 1];
  const next = nv.rows[at + 1];
  const link = pageLinker(nv, r);
  const nav = (o, label) => o
    ? `<a href="${leafHref(nv, o)}">${label} <span lang="zh">${esc(o.zh)}</span></a>`
    : `<span class="end">${label}</span>`;
  const deeds = r.events.map(([ch, zh, ten, text]) =>
    `      <li><span class="ch">${esc(ch)}</span><h3 class="en-t">${esc(ten)}</h3><span class="zh-t" lang="zh">${esc(zh)}</span><p>${link(text)}</p></li>`).join("\n");
  const meta = r.meta && r.meta.length
    ? `    <dl class="lp-meta">\n${r.meta.map(([k, v]) => `      <div><dt>${esc(k)}</dt><dd>${link(v)}</dd></div>`).join("\n")}\n    </dl>`
    : "";
  const verse = r.verse
    ? `    <figure class="judgement">
      <figcaption><span lang="zh">${nv.verseLabel}</span> ${esc(nv.verseLabelEn)}</figcaption>
      <p class="jm-verse" lang="zh">${r.verse.map(esc).join("\n")}</p>
      <p class="jm-gloss">${esc(r.verseGloss)}</p>${r.painting ? `
      <p class="jm-paint"><span lang="zh">畫</span> ${esc(r.painting)}</p>` : ""}
    </figure>`
    : "";
  const peers = peersOf(nv, r);
  const related = peers.length >= 1 ? `
    <section class="lp-related">
      <h2 class="rule">${esc(nv.relatedHeading.en)} <span class="zh-h" lang="zh">${nv.relatedHeading.zh}</span></h2>
      <ul class="kin">
${peers.map(({ o }) => `        <li><a class="rowlink" href="${leafHref(nv, o)}"><span class="zh" lang="zh">${esc(o.zh)}</span> ${esc(o.en)}</a>${o.nng ? `<span class="gloss">${esc(o.nng)}</span>` : ""}</li>`).join("\n")}
      </ul>
    </section>` : "";
  const body = `
<section class="leafpage">
  <div class="lp-mount">
    <button class="lp-open" data-lb="${at}" aria-label="Open the portrait of ${esc(r.en)} full size">
${pic(buster, leafPic(nv, r), `Ink leaf portrait of ${esc(r.en)}, ${esc(r.nng)}.`, 720, 900, true)}
      <span class="lp-zoom" aria-hidden="true">放大 ⤢</span>
    </button>
    <p class="lp-name"><span class="lp-zh" lang="zh">${esc(r.zh)}</span><span class="lp-star" lang="zh">${esc(r.label)} · ${esc(r.tagShort)}</span></p>
  </div>
  <div class="lp-body">
    <p class="kicker">${esc(nv.leafWord)} ${esc(r.tagShort)} ${esc(nv.unit)}${r.nn ? ` · <span lang="zh">${esc(r.nn)}</span> ${esc(r.nng)}` : ""}</p>
    <h1>${esc(r.en)} <span class="zh-h" lang="zh">${esc(r.zh)}</span></h1>
    <p class="lp-context">In <a href="${BASE}/${nv.dir}/">${esc(nv.seoNovel)}</a> <span lang="zh">${esc(nv.novelZh)}</span> (${esc(nv.novelDate)}) · ${nv.seoRole(r)}${r.nn ? ` · nicknamed <span lang="zh">${esc(r.nn)}</span> “${esc(r.nng)}”` : ""}</p>
    <p class="lede">${esc(r.hook)}</p>
${meta}
${verse}
    <h2 class="rule">${esc(nv.deedsHeading)} <span class="zh-h" lang="zh">${nv.deedsHeadingZh}</span></h2>
    <ol class="deeds">
${deeds}
    </ol>
    <div class="colophon">
      <p class="col-label"><span lang="zh">${nv.endLabel}</span> ${esc(nv.endLabelEn)}</p>
      <p class="col-text">${link(r.end)}</p>
    </div>
${related}
    <nav class="leaf-nav">
      ${nav(prev, "← Prev")}
      <a href="${BASE}/${nv.dir}/">${esc(nv.indexLink)} <span lang="zh">${nv.indexLinkZh}</span></a>
      ${nav(next, "Next →")}
    </nav>
  </div>
${lbData(nv)}
</section>`;
  const path = `${BASE}/${nv.dir}/${slugOf(r.en)}/`;
  return shell({
    origin, buster, path, L,
    title: seoTitle(r, nv),
    desc: seoDesc(r, nv),
    body,
    ogType: "article",
    og: { img: `/assets/${leafPic(nv, r)}.jpg`, w: 720, h: 900, alt: `Ink leaf portrait of ${r.en}, ${r.nng}.` },
    jsonld: [
      NAV_CRUMB(origin, path, `${r.en} ${r.zh}`, L),
      {
        "@context": "https://schema.org", "@type": "Person", name: r.en,
        alternateName: [r.zh, r.nn, r.nng, r.label].filter(Boolean),
        description: r.hook,
        image: `${origin}${BASE}/assets/${leafPic(nv, r)}.jpg`,
      },
    ],
  });
}

const wmNovel = (STARS, LEAVES) => ({
  dir: "water-margin", key: "wm",
  imgOf: (r) => `img/wm-s${String(r.id).padStart(3, "0")}`,
  rows: STARS.filter(([rank]) => LEAVES[rank]).map(([rank, label, nn, nng, zh, en, fate]) =>
    ({ id: rank, tag: `rank ${rank}`, tagShort: String(rank), label, nn, nng, zh, en, fate, ...LEAVES[rank] })),
 railHeadingZh: "水滸葉子",
  leafWord: "Leaf", unit: "of the marsh",
  deedsHeading: "The great deeds", deedsHeadingZh: "大事記",
  endLabel: "結局", endLabelEn: "The ending",
  indexLink: "The roster", indexLinkZh: "天罡地煞",
  seoNovel: "Water Margin", novelZh: "水滸傳", novelDate: "c. 1400",
  seoRole: (r) => `rank ${r.id} of the 108 Stars`,
  relatedHeading: { en: "In the same chapters", zh: "同回" },
});

const jwNovel = (PEOPLE) => ({
  dir: "journey-west", key: "jw",
  imgOf: (r) => `img/jw-${slugOf(r.en)}`,
  rows: PEOPLE.map((r) => ({ ...r, tag: `no. ${r.id}`, tagShort: String(r.id) })),
 railHeadingZh: "取經葉子",
  leafWord: "Leaf", unit: "of the pilgrimage",
  deedsHeading: "The great deeds", deedsHeadingZh: "大事記",
  endLabel: "結局", endLabelEn: "The ending",
  indexLink: "The index", indexLinkZh: "八十一難",
  seoNovel: "Journey to the West", novelZh: "西遊記", novelDate: "c. 1592",
  seoRole: (r) => (r.grp === "pilgrim" ? "one of the four pilgrims"
    : r.grp === "demon" ? "a demon on the road west"
    : r.grp === "heaven" ? "a heaven-sent power who ends the fight"
    : ""),
  relatedHeading: { en: "In the same episode", zh: "同難" },
});

// Which roll of the Taixu Huanjing register a record sits in, or where else in the
// house it stands. Unknown values fall through to their own name so the table never
// renders an empty cell.
const RC_ROLL = {
  register: { zh: "正冊", en: "Main register" },
  sub: { zh: "副冊", en: "Second register" },
  deputy: { zh: "又副冊", en: "Third register" },
  household: { zh: "当家", en: "The household" },
  maid: { zh: "丫鬟", en: "Maids" },
};
const rollOf = (grp) => RC_ROLL[grp] || { zh: "", en: grp };

const rcNovel = (PEOPLE) => ({
  dir: "red-chamber", key: "rc",
  imgOf: (r) => `img/rc-${slugOf(r.en)}`,
  rows: PEOPLE.map((r) => ({ ...r, tag: `no. ${r.id}`, tagShort: String(r.id) })),
 railHeadingZh: "金陵葉子",
  leafWord: "Leaf", unit: "of the Red Chamber",
  verseLabel: "判詞", verseLabelEn: "The register verse",
  deedsHeading: "The great deeds", deedsHeadingZh: "大事記",
  endLabel: "結局", endLabelEn: "The ending",
  indexLink: "The register", indexLinkZh: "金陵十二釵",
  seoNovel: "Dream of the Red Chamber", novelZh: "紅樓夢", novelDate: "c. 1791",
  seoRole: (r) => { const roll = rollOf(r.grp); return roll.zh ? `in the ${roll.en.replace(/^The\s+/i, "")} (${roll.zh})` : ""; },
  relatedHeading: { en: "In the same register & chapters", zh: "同冊" },
});

function waterMargin({ origin, buster, STARS, nv, L, alt }) {
  const byId = new Map(nv.rows.map((r) => [r.id, r]));
  const rows = STARS.map(([rank, star, nz, ne, mz, py, fate]) => {
    const group = rank <= 36 ? "heavenly" : "earthly";
    const leaf = byId.get(rank);
    const href = leaf ? leafHref(nv, leaf) : "";
    const nameCell = leaf
      ? `<a class="rowlink" href="${href}"><span class="zh">${esc(mz)}</span> <span class="gloss">${esc(py)}</span></a>`
      : `<span class="zh">${esc(mz)}</span> <span class="gloss">${esc(py)}</span>`;
    const cls = `${rank % 2 === 0 ? "zebra" : ""}${leaf ? " has-leaf" : ""}`.trim();
    return `      <tr data-group="${group}" data-rank="${rank}" class="${cls}"${leaf ? ` data-leaf="${href}"` : ""}><td class="num">${rank}</td><td class="zh">${esc(star)}</td><td><span class="zh">${esc(nz)}</span> <span class="gloss">${esc(ne)}</span></td><td>${nameCell}</td><td>${fate ? esc(fate) : "<span class=\"na\">—</span>"}</td></tr>`;
  }).join("\n");
  const body = `${hero(buster, {
    img: "img/wm-hero",
    alt: L["wm.alt"],
    kicker: L["wm.kicker"],
    title: L["wm.title"],
    zh: L["wm.zh"],
    lede: L["wm.lede"],
  })}
${leafRail(buster, nv, L)}
<h2 class="rule">${esc(L["wm.roster"])} <span class="zh-h" lang="zh">天罡地煞</span></h2>
<div class="controls">
  <input type="search" id="q" data-filter-table="#stars" placeholder="${esc(L["wm.ph"])}">
  <button data-group-filter="#stars" data-group="all" class="on">${esc(L["wm.all"])}</button>
  <button data-group-filter="#stars" data-group="heavenly">${esc(L["wm.heavenly"])}</button>
  <button data-group-filter="#stars" data-group="earthly">${esc(L["wm.earthly"])}</button>
  <span class="count" data-count="#stars"></span>
</div>
<div class="scroll-x">
<table id="stars">
  <thead><tr>${L["wm.th"].map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
  <tbody>
${rows}
  </tbody>
</table>
</div>`;
  const path = `${BASE}${lp(L.code)}/water-margin/`;
  return shell({
    origin, buster, path, L, alt,
    title: L["wm.seoTitle"],
    desc: L["wm.seoDesc"],
    body,
    jsonld: NAV_CRUMB(origin, path, L["wm.crumb"], L),
  });
}

// A leaf's `trib` names the tribulation chapter key(s) its episode sits on: demon
// records light up the antagonist cell, heaven records the resolution cell.
const tribLinks = (nv) => {
  const demon = new Map();
  const fetcher = new Map();
  for (const r of nv.rows) {
    const bucket = r.grp === "demon" ? demon : r.grp === "heaven" ? fetcher : null;
    if (!bucket) continue;
    for (const k of (r.trib || "").split(",").map((s) => s.trim()).filter(Boolean)) {
      if (!bucket.has(k)) bucket.set(k, r);
    }
  }
  const cell = (map, ch, text) => {
    const r = map.get(ch);
    return r ? `<a class="rowlink" href="${leafHref(nv, r)}">${esc(text)}</a>` : esc(text);
  };
  return { demon, fetcher, cell };
};

function journeyWest({ origin, buster, TRIBULATIONS, nv, L, alt }) {
  const { demon: demonLeaf, fetcher, cell } = tribLinks(nv);
  const cast = nv.rows.map((r) => {
    const href = leafHref(nv, r);
    return `      <tr data-group="${r.grp}" class="${r.id % 2 === 0 ? "zebra" : ""} has-leaf" data-leaf="${href}"><td class="num">${r.id}</td><td class="gloss">${esc(L["jw.side"][r.grp] || r.grp)}</td><td><a class="rowlink" href="${href}"><span class="zh">${esc(r.zh)}</span> <span class="gloss">${esc(r.en)}</span></a></td><td><span class="zh">${esc(r.nn)}</span> <span class="gloss">${esc(r.nng)}</span></td><td class="zh">${esc(r.label)}</td><td>${esc(r.hook)}</td></tr>`;
  }).join("\n");
  const tribs = TRIBULATIONS.map(([place, fiend, treasure, resolution, ch]) =>
    `      <tr><td>${esc(place)}</td><td>${cell(demonLeaf, ch, fiend)}</td><td>${esc(treasure)}</td><td>${cell(fetcher, ch, resolution)}</td><td class="num">${esc(ch)}</td></tr>`).join("\n");
  const n = nv.rows.length;
  const body = `${hero(buster, {
    img: "img/jw-hero",
    alt: L["jw.alt"],
    kicker: L["jw.kicker"],
    title: L["jw.title"],
    zh: L["jw.zh"],
    lede: L["jw.lede"],
  })}
${leafRail(buster, nv, L)}
<h2 class="rule">${esc(L["jw.cast"])} <span class="zh-h" lang="zh">取經人物</span></h2>
<div class="controls">
  <input type="search" id="q" data-filter-table="#cast" placeholder="${esc(L["jw.ph"])}">
  <button data-group-filter="#cast" data-group="all" class="on">${esc(L["jw.all"](n))}</button>
  <button data-group-filter="#cast" data-group="pilgrim">${esc(L["jw.pilgrim"])}</button>
  <button data-group-filter="#cast" data-group="heaven">${esc(L["jw.heaven"])}</button>
  <button data-group-filter="#cast" data-group="demon">${esc(L["jw.demon"])}</button>
  <span class="count" data-count="#cast"></span>
</div>
<div class="scroll-x">
<table id="cast">
  <thead><tr>${L["jw.th"].map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
  <tbody>
${cast}
  </tbody>
</table>
</div>
<h2 class="rule">${esc(L["jw.index"])} <span class="zh-h" lang="zh">八十一難</span></h2>
<div class="controls">
  <input type="search" id="q2" data-filter-table="#tribs" placeholder="${esc(L["jw.ph2"])}">
  <span class="count" data-count="#tribs"></span>
</div>
<div class="scroll-x">
<table id="tribs">
  <thead><tr>${L["jw.th2"].map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
  <tbody>
${tribs}
  </tbody>
</table>
</div>`;
  const path = `${BASE}${lp(L.code)}/journey-west/`;
  return shell({
    origin, buster, path, L, alt,
    title: L["jw.seoTitle"],
    desc: L["jw.seoDesc"](n),
    body,
    jsonld: NAV_CRUMB(origin, path, L["jw.crumb"], L),
  });
}

// Anywhere a person's English name appears inside a label or a deed — a tree node, a
// register row, a chapter summary — it becomes the link to their leaf. Longest name
// wins so "Grandmother Jia" is never eaten by a shorter match. `self` stops a page
// linking to itself; each name links once and a page caps out, so the prose stays
// readable rather than turning into a field of blue.
const linkNames = (nv, text, self, budget = 12, seen = new Set()) => {
  let out = "";
  let rest = String(text);
  let links = 0;
  while (rest && links < budget) {
    let hit = null;
    for (const r of nv.rows) {
      if (r === self || seen.has(r.en)) continue;
      const i = rest.indexOf(r.en);
      if (i < 0) continue;
      const before = i > 0 ? rest[i - 1] : " ";
      const after = rest[i + r.en.length] || " ";
      if (/[A-Za-z]/.test(before) || /[A-Za-z]/.test(after)) continue;
      if (!hit || i < hit.i || (i === hit.i && r.en.length > hit.r.en.length)) hit = { i, r };
    }
    if (!hit) return out + esc(rest);
    seen.add(hit.r.en);
    links++;
    out += esc(rest.slice(0, hit.i)) + `<a class="rowlink" href="${leafHref(nv, hit.r)}">${esc(hit.r.en)}</a>`;
    rest = rest.slice(hit.i + hit.r.en.length);
  }
  return out + esc(rest);
};

// One linker per leaf page: a name becomes a link the first time the page says it,
// and the whole page stops at `cap`, so the deeds read as prose with handholds.
const pageLinker = (nv, self, cap = 14) => {
  const seen = new Set();
  let used = 0;
  return (text) => {
    const out = linkNames(nv, text, self, cap - used, seen);
    used = seen.size;
    return out;
  };
};

function treeHTML(nodes, nv) {
  return `<ul class="tree">\n${nodes.map(([label, note, kids]) => `  <li${kids && kids.length ? ' class="has-kids"' : ""}>` +
    `<span class="node">${linkNames(nv, label)}${note ? ` <span class="gloss">${esc(note)}</span>` : ""}</span>` +
    (kids && kids.length ? `<button class="tw" aria-label="expand">+</button>\n${treeHTML(kids, nv)}` : "") +
    `</li>`).join("\n")}\n</ul>`;
}

function redChamber({ origin, buster, TREE, BEAUTIES, nv, L, alt }) {
  const rollName = (g) => L["rc.roll"][g] || g;
  const cast = nv.rows.map((r) => {
    const roll = rollOf(r.grp);
    const href = leafHref(nv, r);
    return `      <tr data-group="${r.grp}" class="${r.id % 2 === 0 ? "zebra" : ""} has-leaf" data-leaf="${href}"><td class="num">${r.id}</td><td><span class="zh">${esc(roll.zh)}</span> <span class="gloss">${esc(rollName(r.grp))}</span></td><td><a class="rowlink" href="${href}"><span class="zh">${esc(r.zh)}</span> <span class="gloss">${esc(r.en)}</span></a></td><td><span class="zh">${esc(r.nn)}</span> <span class="gloss">${esc(r.nng)}</span></td><td class="zh">${esc(r.label)}</td><td>${esc(r.hook)}</td></tr>`;
  }).join("\n");
  const rows = BEAUTIES.map(([name, verse, gloss, fate]) =>
    `      <tr><td>${linkNames(nv, name)}</td><td class="zh verse">${esc(verse)}</td><td class="gloss">${esc(gloss)}</td><td>${esc(fate)}</td></tr>`).join("\n");
  const grps = [...new Set(nv.rows.map((r) => r.grp))];
  const buttons = grps.map((g) => {
    const roll = rollOf(g);
    return `  <button data-group-filter="#people" data-group="${g}">${esc(rollName(g))}${roll.zh ? ` <span class="zh" lang="zh">${roll.zh}</span>` : ""}</button>`;
  }).join("\n");
  const n = nv.rows.length;
  const verses = nv.rows.filter((r) => r.verse).length;
  const body = `${hero(buster, {
    img: "img/rc-hero",
    alt: L["rc.alt"],
    kicker: L["rc.kicker"],
    title: L["rc.title"],
    zh: L["rc.zh"],
    lede: L["rc.lede"],
  })}
${leafRail(buster, nv, L)}
<h2 class="rule">${esc(L["rc.household"])} <span class="zh-h" lang="zh">寧榮二府</span></h2>
<div class="controls">
  <input type="search" id="q" data-filter-table="#people" placeholder="${esc(L["rc.ph"])}">
  <button data-group-filter="#people" data-group="all" class="on">${esc(L["rc.all"](n))}</button>
${buttons}
  <span class="count" data-count="#people"></span>
</div>
<div class="scroll-x">
<table id="people">
  <thead><tr>${L["rc.th"].map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
  <tbody>
${cast}
  </tbody>
</table>
</div>
<h2 class="rule">${esc(L["rc.tree"])} <span class="zh-h" lang="zh">賈府</span></h2>
${treeHTML(TREE, nv)}
<h2 class="rule">${esc(L["rc.beauties"])} <span class="zh-h" lang="zh">金陵十二釵</span></h2>
<p class="rail-hint">${L["rc.hint"](verses)}</p>
<div class="scroll-x">
<table id="beauties">
  <thead><tr>${L["rc.th2"].map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
  <tbody>
${rows}
  </tbody>
</table>
</div>`;
  const path = `${BASE}${lp(L.code)}/red-chamber/`;
  return shell({
    origin, buster, path, L, alt,
    title: L["rc.seoTitle"],
    desc: L["rc.seoDesc"](n, verses),
    body,
    jsonld: NAV_CRUMB(origin, path, L["rc.crumb"], L),
  });
}

// Reserved booth for the fourth great novel: a teaser leaf, kept out of the
// sitemap and noindex until its tables exist.
function threeKingdoms({ origin, buster, L, alt }) {
  const body = `
<section class="soon-page">
  <div class="soon-plate" aria-hidden="true">
    <span class="soon-zh" lang="zh">三國</span>
    <span class="soon-seal" lang="zh">籌備中</span>
  </div>
  <p class="kicker">${esc(L["tk.kicker"])}</p>
  <h1>${esc(L["tk.title"])}${L["tk.titleZh"] ? ` <span class="zh-h" lang="zh">${esc(L["tk.titleZh"])}</span>` : ""}</h1>
  <p class="lede">${L["tk.lede"]}</p>
  <p class="soon-note">${esc(L["tk.note"])}</p>
  <nav class="soon-nav"><a href="${BASE}${lp(L.code)}/">${esc(L["tk.back"])}</a></nav>
</section>`;
  const path = `${BASE}${lp(L.code)}/three-kingdoms/`;
  return shell({
    origin, buster, path, noindex: true, L, alt,
    title: L["tk.seoTitle"],
    desc: L["tk.seoDesc"],
    body,
    jsonld: NAV_CRUMB(origin, path, L["tk.crumb"], L),
  });
}

// The three novel overviews share their builder call signature — they all need
// the novel spec (`nv`) on top of cfg — so the tier doubles as its data lookup.
const TIERS_NOVEL = { "water-margin": waterMargin, "journey-west": journeyWest, "red-chamber": redChamber };

export function renderAll(cfg) {
  const specs = [wmNovel(cfg.STARS, cfg.LEAVES)];
  if (cfg.JW_PEOPLE) specs.push(jwNovel(cfg.JW_PEOPLE));
  if (cfg.RC_PEOPLE) specs.push(rcNovel(cfg.RC_PEOPLE));
  const byDir = Object.fromEntries(specs.map((nv) => [nv.dir, nv]));

  const relOf = (code, tier) => `${code === DEFAULT_LOCALE ? "" : `${code}/`}${tier ? `${tier}/` : ""}index.html`;
  const pathOf = (code, tier) => `${BASE}${lp(code)}${tier ? `/${tier}` : ""}/`;

  const overview = (code, tier) => {
    // A noindex page declares no hreflang cluster: Google can't honour a
    // translation pair where one side asks to be left out of the index.
    const alt = tier === "three-kingdoms" ? {} : Object.fromEntries(
      LOCALE_ORDER.filter((other) => other !== code && localeTiers(other).includes(tier)).map((other) => [other, pathOf(other, tier)])
    );
    const args = { ...cfg, L: LOCALES[code], alt };
    const builder = tier === "" ? hub : tier === "three-kingdoms" ? threeKingdoms : TIERS_NOVEL[tier];
    if (builder === undefined) return null;
    if (TIERS_NOVEL[tier]) {
      if (!byDir[tier]) return null; // a tier whose data isn't loaded ships nothing
      args.nv = byDir[tier];
    }
    return [relOf(code, tier), builder(args)];
  };

  const pages = [];
  // English keeps its historical emission order so sitemap.xml doesn't churn,
  // and its leaves stay interleaved with its overviews.
  for (const tier of ["", "three-kingdoms", ...specs.map((nv) => nv.dir)]) {
    const built = localeTiers(DEFAULT_LOCALE).includes(tier) ? overview(DEFAULT_LOCALE, tier) : null;
    if (!built) continue;
    pages.push(built);
    for (const r of byDir[tier]?.rows || []) {
      pages.push([`${tier}/${slugOf(r.en)}/index.html`, leafPage(cfg, byDir[tier], r)]);
    }
  }
  for (const code of LOCALE_ORDER.filter((c) => c !== DEFAULT_LOCALE)) {
    for (const tier of localeTiers(code)) {
      const built = overview(code, tier);
      if (built) pages.push(built);
    }
  }
  return pages;
}
