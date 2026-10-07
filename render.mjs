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
  <details class="lang-switch">
    <summary aria-label="${esc(L.langLabel)}">
      <svg class="globe" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><ellipse cx="12" cy="12" rx="4" ry="9"></ellipse><path d="M3.5 9.5h17M3.5 14.5h17"></path></svg>
      <span>${esc(L.selfName)}</span>
      <svg class="caret" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5"></path></svg>
    </summary>
    <ul>
${cluster.map((c) => `      <li><a href="${esc(c.href)}" hreflang="${c.code}" lang="${c.code}"${c.code === L.code ? ' class="on" aria-current="true"' : ""}>${esc(LOCALES[c.code].selfName)}</a></li>`).join("\n")}
    </ul>
  </details>` : "";
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
    <a href="${BASE}${lp(L.code)}/three-kingdoms/">${esc(L["shell.nav.tk"])}</a>
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
<script src="${BASE}/assets/interact.js?v=${buster}" defer></script>
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

function hero(buster, { img, alt, kicker, title, zh, lede, cls }) {
  return `
<section class="hero${cls ? ` ${cls}` : ""}">
${pic(buster, img, alt, 1600, 766, true)}
  <div class="hero-inner">
    <p class="kicker">${esc(kicker)}</p>
    <h1>${title}</h1>
    <p class="zh-title" lang="zh">${zh}</p>
    <p class="lede">${lede}</p>
  </div>
</section>`;
}

// The daily game needs the marsh's roll call in the page: rank, nickname pair,
// name, and whether that seat has a leaf to link to. Compact on purpose — it
// rides inside every hub and the quiz page.
const compactStars = (STARS, LEAVES) => JSON.stringify(
  STARS.map(([rank, , nickZh, nickEn, nameZh, pinyin]) => [rank, nickZh, nickEn, nameZh, pinyin, LEAVES[rank] ? 1 : 0])
);

function hub({ origin, buster, L, alt, STARS, LEAVES, JW_PEOPLE, RC_PEOPLE }) {
  const p = `${BASE}${lp(L.code)}/`;
  const card = (dir, key, zhCard, title, body) => `    <a class="card${key}" href="${BASE}${lp(L.code)}/${dir}/">
      <span class="card-zh" lang="zh" aria-hidden="true">${zhCard}</span>
      <h2>${title}</h2>
      <p>${body}</p>
    </a>`;
  // The bookshelf needs stored-key → (name) for every leaf that exists, so a
  // saved shelf can link back without a second lookup. Keys match what leaf
  // pages store: "dir/slug".
  const leafIndex = {};
  for (const [rank, , , , zh, en] of STARS) if (LEAVES[rank]) leafIndex[`water-margin/${slugOf(en)}`] = [zh, en];
  for (const r of JW_PEOPLE || []) leafIndex[`journey-west/${slugOf(r.en)}`] = [r.zh, r.en];
  for (const r of RC_PEOPLE || []) leafIndex[`red-chamber/${slugOf(r.en)}`] = [r.zh, r.en];
  const body = `${hero(buster, {
    img: "og",
    alt: L["hub.alt"],
    kicker: L["hub.kicker"],
    title: L["hub.title"],
    zh: L["hub.zh"],
    lede: L["hub.lede"],
  })}
<section class="plates">
  <h2 class="rule">${esc(L["hub.tools"])} <span class="zh-h" lang="zh">四冊</span></h2>
  <div class="cards">
${card("water-margin", "", "水滸", L["hub.card.wm.t"], L["hub.card.wm.b"])}
${card("journey-west", "", "西遊", L["hub.card.jw.t"], L["hub.card.jw.b"])}
${card("red-chamber", "", "紅樓", L["hub.card.rc.t"], L["hub.card.rc.b"])}
${card("three-kingdoms", "", "三國", L["hub.card.tk.t"], L["hub.card.tk.b"])}
  </div>
</section>
<section class="plates" id="daily">
  <h2 class="rule">${esc(L["daily.title"])} <span class="zh-h" lang="zh">${esc(L["daily.zh"])}</span></h2>
  <div class="daily-card" id="daily-slot" data-base="${BASE}${lp(L.code)}" data-buster="${buster}" data-kicker="${esc(L["daily.kicker"])}" data-cta="${esc(L["daily.cta"])}" data-cta-leaf="${esc(L["daily.ctaLeaf"])}"></div>
</section>
<section class="plates" id="shelf">
  <h2 class="rule">${esc(L["shelf.title"])} <span class="zh-h" lang="zh">${esc(L["shelf.zh"])}</span></h2>
  <p class="plate-note shelf-progress" style="font-style:normal" id="shelf-progress" data-favs="${esc(L["shelf.favs"])}" data-seen="${esc(L["shelf.seen"])}"></p>
  <ul class="shelf-list" id="shelf-list" data-base="${BASE}${lp(L.code)}"></ul>
  <p class="plate-note" style="font-style:normal" id="shelf-empty" hidden>${L["shelf.empty"]}</p>
</section>
<script type="application/json" id="stars-data">${compactStars(STARS, LEAVES)}</script>
<script type="application/json" id="leaf-index">${JSON.stringify(leafIndex)}</script>
<section class="plates">
  <h2 class="rule">${esc(L["hub.why"])} <span class="zh-h" lang="zh">以表代文</span></h2>
  <p class="plate-note" style="font-style:normal;font-size:1rem;color:var(--ink-soft)">${L["hub.why.b"]}</p>
  <p class="plate-note" style="font-style:normal;font-size:1rem"><a class="rowlink" href="${BASE}/where-to-start/">${L["hub.start.link"]}</a></p>
  <p class="plate-note" style="font-style:normal;font-size:1rem"><a class="rowlink" href="${BASE}${lp(L.code)}/quiz/">${L["hub.quiz.link"]}</a></p>
  <p class="plate-note" style="font-style:normal;font-size:1rem"><a class="rowlink" href="https://dreamofxm.github.io/bambooscroll/">${L["hub.bs.link"]}</a></p>
</section>`;
  return shell({
    origin, buster, path: p, L, alt,
    title: L["hub.seoTitle"],
    desc: L["hub.seoDesc"],
    body,
    jsonld: { "@context": "https://schema.org", "@type": "WebSite", name: L["shell.site"], url: origin + p },
  });
}

// ---------- answer pages ----------
// The overview tiers answer "who is in this book"; these answer the questions a
// reader types before they have opened it — what happens, how long it takes,
// which translation to buy. Same chrome as a leaf (English-only, `lp-body`
// typography), so nothing here enters the locale parity gate: the copy lives in
// the novel's data module, where the sourced numbers can be checked row by row.
const guideHref = (nv, g) => `${BASE}/${nv.dir}/${g.slug}/`;

function guidePage({ origin, buster }, nv, g) {
  const L = LOCALES[DEFAULT_LOCALE];
  const link = pageLinker(nv, null, 20);
  const at = nv.guidePages.indexOf(g);
  const prev = nv.guidePages[at - 1];
  const next = nv.guidePages[at + 1];
  const go = (x, label) => x
    ? `<a href="${guideHref(nv, x)}">${label} <span>${esc(x.navLabel)}</span></a>`
    : "";
  const answer = g.answer && g.answer.length
    ? `    <dl class="lp-meta">\n${g.answer.map(([k, v]) => `      <div><dt>${esc(k)}</dt><dd>${link(v)}</dd></div>`).join("\n")}\n    </dl>`
    : "";
  const table = (t) => `    <div class="scroll-x">
    <table${t.id ? ` id="${t.id}"` : ""}>
      <thead><tr>${t.th.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
      <tbody>
${t.rows.map((r) => `        <tr>${r.map((c, j) => `<td${t.num && j === 0 ? ' class="num"' : ""}>${link(c)}</td>`).join("")}</tr>`).join("\n")}
      </tbody>
    </table>
    </div>`;
  const blocks = g.blocks.map((b) => `    <h2 class="rule">${esc(b.h)}${b.zh ? ` <span class="zh-h" lang="zh">${esc(b.zh)}</span>` : ""}</h2>
${(b.paras || []).map((p) => `    <p>${link(p)}</p>`).join("\n")}${b.table ? "\n" + table(b.table) : ""}${b.note ? `
    <p class="plate-note">${esc(b.note)}</p>` : ""}`).join("\n");
  const sources = `    <h2 class="rule">${esc(nv.guideSourcesHeading.en)} <span class="zh-h" lang="zh">${esc(nv.guideSourcesHeading.zh)}</span></h2>
    <ul class="guide-src">
${g.sources.map(([label, url]) => `      <li><a href="${esc(url)}" rel="noopener">${esc(label)}</a></li>`).join("\n")}
    </ul>`;
  const body = `
${hero(buster, {
    img: nv.heroImg, cls: "compact",
    alt: L[`${nv.key}.alt`],
    kicker: g.kicker, title: esc(g.h1), zh: esc(g.h1zh), lede: link(g.lede),
  })}
<section class="lp-body guide">
${answer}
${blocks}
${sources}
    <nav class="leaf-nav">
      ${go(prev, "←")}
      <a href="${BASE}/${nv.dir}/">${esc(nv.indexLink)} <span lang="zh">${nv.indexLinkZh}</span></a>
      ${go(next, "→")}
    </nav>
</section>`;
  const path = guideHref(nv, g);
  return shell({
    origin, buster, path, L,
    title: g.seoTitle,
    desc: g.seoDesc,
    body,
    ogType: "article",
    jsonld: [
      NAV_CRUMB(origin, path, g.h1, L),
      {
        "@context": "https://schema.org", "@type": "Article",
        headline: g.seoTitle, description: g.seoDesc, inLanguage: "en",
        isPartOf: { "@type": "WebSite", name: L["shell.site"], url: origin + BASE + "/" },
        about: { "@type": "Book", name: nv.seoNovel, alternateName: nv.novelZh },
      },
      // Question-shaped pages also answer "People also ask" boxes; without
      // FAQPage markup they are invisible to that surface.
      ...(g.faq && g.faq.length ? [{
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: g.faq.map(([q, a]) => ({
          "@type": "Question", name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      }] : []),
    ],
  });
}

// The tool block on an overview page: the same card plate the hub uses, so an
// answer page is reachable from the page that already ranks.
function guideCards(nv, L) {
  if (!nv.guidePages || !nv.guidePages.length) return "";
  const cards = nv.guidePages.map((g) => `    <a class="card" href="${guideHref(nv, g)}">
      <span class="card-zh" lang="zh" aria-hidden="true">${esc(g.cardZh)}</span>
      <h2>${esc(g.cardTitle)}</h2>
      <p>${esc(g.cardBody)}</p>
    </a>`).join("\n");
  return `
<h2 class="rule">${esc(nv.guideHeading.en)} <span class="zh-h" lang="zh">${esc(nv.guideHeading.zh)}</span></h2>
  <div class="cards">
${cards}
  </div>`;
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
<section class="leafpage" data-leaf-slug="${nv.dir}/${slugOf(r.en)}">
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
    <button class="fav-btn" type="button" data-leaf-slug="${nv.dir}/${slugOf(r.en)}" data-off="${esc(L["fav.add"])}" data-on="${esc(L["fav.on"])}" aria-pressed="false"><span class="seal-fav" lang="zh" aria-hidden="true">藏</span><span class="fav-t">${esc(L["fav.add"])}</span></button>
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
    </nav>${nv.guidePages && nv.guidePages.length ? `
    <p class="rail-hint">${esc(nv.guideLeafHint.en)} ${nv.guidePages.map((g) => `<a href="${guideHref(nv, g)}">${esc(g.navLabel)}</a>`).join(" · ")}</p>` : ""}
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
      // Two stable questions per leaf: who they are, and how their story ends.
      // Both answers come from the record's own fields, so the markup can never
      // drift from the page the way hand-copied FAQ blocks do.
      ...(r.hook ? [{
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question", name: `Who is ${r.en} in ${nv.seoNovel}?`,
            acceptedAnswer: { "@type": "Answer", text: clip(`${r.zh} ${r.en}${r.nng ? ` (“${r.nng}”)` : ""} — ${nv.seoRole(r)}. ${r.hook}`, 300) },
          },
          ...(r.end || r.fate ? [{
            "@type": "Question", name: `What happens to ${r.en} in the end?`,
            acceptedAnswer: { "@type": "Answer", text: String(r.end || r.fate) },
          }] : []),
        ],
      }] : []),
    ],
  });
}

const wmNovel = (STARS, LEAVES, GUIDES) => ({
  dir: "water-margin", key: "wm",
  imgOf: (r) => `img/wm-s${String(r.id).padStart(3, "0")}`,
  rows: STARS.filter(([rank]) => LEAVES[rank]).map(([rank, label, nn, nng, zh, en, fate]) =>
    ({ id: rank, tag: `rank ${rank}`, tagShort: String(rank), label, nn, nng, zh, en, fate, ...LEAVES[rank] })),
  guidePages: GUIDES || [],
  guideHeading: { en: "Reading notes", zh: "讀前須知" },
  guideSourcesHeading: { en: "Where these figures come from", zh: "出處" },
  guideLeafHint: { en: "The book itself: how it ends, and who was left —" },
 railHeadingZh: "水滸葉子",
  leafWord: "Leaf", unit: "of the marsh",
  deedsHeading: "The great deeds", deedsHeadingZh: "大事記",
  endLabel: "結局", endLabelEn: "The ending",
  indexLink: "The roster", indexLinkZh: "天罡地煞",
  seoNovel: "Water Margin", novelZh: "水滸傳", novelDate: "c. 1400",
  seoRole: (r) => `rank ${r.id} of the 108 Stars`,
  relatedHeading: { en: "In the same chapters", zh: "同回" },
});

const jwNovel = (PEOPLE, GUIDES) => ({
  dir: "journey-west", key: "jw",
  imgOf: (r) => `img/jw-${slugOf(r.en)}`,
  rows: PEOPLE.map((r) => ({ ...r, tag: `no. ${r.id}`, tagShort: String(r.id) })),
  guidePages: GUIDES || [],
  guideHeading: { en: "Reading notes", zh: "讀前須知" },
  guideSourcesHeading: { en: "Where these figures come from", zh: "出處" },
  guideLeafHint: { en: "The book itself: why the monkey was pinned, which translation —" },
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

const rcNovel = (PEOPLE, GUIDES) => ({
  dir: "red-chamber", key: "rc",
  imgOf: (r) => `img/rc-${slugOf(r.en)}`,
  heroImg: "img/rc-hero",
  rows: PEOPLE.map((r) => ({ ...r, tag: `no. ${r.id}`, tagShort: String(r.id) })),
  guidePages: GUIDES || [],
  guideHeading: { en: "Before you start reading", zh: "先讀這三頁" },
  guideSourcesHeading: { en: "Where these figures come from", zh: "出處" },
  guideLeafHint: { en: "The book itself: what happens, how long it is, which English version to read —" },
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
</div>${guideCards(nv, L)}`;
  const path = `${BASE}${lp(L.code)}/red-chamber/`;
  return shell({
    origin, buster, path, L, alt,
    title: L["rc.seoTitle"],
    desc: L["rc.seoDesc"](n, verses),
    body,
    jsonld: NAV_CRUMB(origin, path, L["rc.crumb"], L),
  });
}

// The fourth tool: the era as two dated tables — the cast of the people who
// moved it, and the battles that moved the map. No painted leaves yet, so cast
// rows carry no data-leaf and nothing here promises a page with no painting.
function threeKingdoms({ origin, buster, TK_CAST, TK_ERA, L, alt }) {
  const side = (g) => L["tk.side"][g] || g;
  const cast = TK_CAST.map((r) => {
    const al = r.al || "other";
    return `      <tr data-group="${r.grp}" class="${r.id % 2 === 0 ? "zebra" : ""}"><td class="num">${r.id}</td><td>${esc(side(r.grp))}</td><td><span class="zh">${esc(r.zh)}</span> <span class="gloss">${esc(r.en)}</span></td><td><span class="zh">${esc(r.nn)}</span> <span class="gloss">${esc(r.nng)}</span></td><td><span class="zh">${esc(AL_ZH[al])}</span> <span class="gloss">${esc(L["tk.alleg"][al] || "")}</span></td><td>${esc(r.fate)}</td></tr>`;
  }).join("\n");
  const era = TK_ERA.map(([year, event, sides, end, ch], i) =>
    `      <tr${i % 2 === 0 ? ' class="zebra"' : ""}><td class="num">${year}</td><td>${esc(event)}</td><td>${esc(sides)}</td><td>${esc(end)}</td><td class="num">${esc(ch)}</td></tr>`).join("\n");
  const n = TK_CAST.length;
  const body = `${hero(buster, {
    img: "og",
    alt: L["hub.alt"],
    kicker: L["tk.kicker"],
    title: L["tk.title"],
    zh: L["tk.titleZh"],
    lede: L["tk.lede"],
  })}
<h2 class="rule">${esc(L["tk.cast"])} <span class="zh-h" lang="zh">群英</span></h2>
<div class="controls">
  <input type="search" id="q" data-filter-table="#cast" placeholder="${esc(L["tk.ph"])}">
  <button data-group-filter="#cast" data-group="all" class="on">${esc(L["tk.all"](n))}</button>
  <button data-group-filter="#cast" data-group="lord">${esc(L["tk.lord"])}</button>
  <button data-group-filter="#cast" data-group="strategist">${esc(L["tk.strategist"])}</button>
  <button data-group-filter="#cast" data-group="warrior">${esc(L["tk.warrior"])}</button>
  <span class="count" data-count="#cast"></span>
</div>
<div class="scroll-x">
<table id="cast">
  <thead><tr>${L["tk.th"].map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
  <tbody>
${cast}
  </tbody>
</table>
</div>
<h2 class="rule">${esc(L["tk.era"])} <span class="zh-h" lang="zh">大事記</span></h2>
<div class="controls">
  <input type="search" id="q2" data-filter-table="#era" placeholder="${esc(L["tk.ph2"])}">
  <span class="count" data-count="#era"></span>
</div>
<div class="scroll-x">
<table id="era">
  <thead><tr>${L["tk.th2"].map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
  <tbody>
${era}
  </tbody>
</table>
</div>
<p class="plate-note" style="font-style:normal;font-size:1rem;max-width:46rem;margin:1.4rem auto 0"><a class="rowlink" href="https://dreamofxm.github.io/bambooscroll/dynasty/three-kingdoms/">${L["tk.bs.link"]}</a></p>`;
  const path = `${BASE}${lp(L.code)}/three-kingdoms/`;
  return shell({
    origin, buster, path, L, alt,
    title: L["tk.seoTitle"],
    desc: L["tk.seoDesc"],
    body,
    jsonld: NAV_CRUMB(origin, path, L["tk.crumb"], L),
  });
}

// Allegiance glyphs are Chinese on every page, whatever the locale: the span
// keeps lang="zh" styling; the romanised label beside it comes from locales.
const AL_ZH = { wei: "魏", shu: "蜀", wu: "吳", other: "群" };

// The front-door question: a reader who has heard of the four novels and
// wants to know which to open first. Sits above any novel, so it is built
// here rather than in a data module; every row links to a tool that exists.
function whereToStart({ origin, buster }) {
  const L = LOCALES[DEFAULT_LOCALE];
  // No novel in scope here; the table's anchors are authored in the locale
  // strings (the same trust the hub cards run on), so this only passes through.
  const link = (t) => t;
  const body = `
<section class="lp-body guide">
  <h1 class="lp-h1">Where to start with the Four Great Novels <span class="zh-h" lang="zh">四大名著讀法</span></h1>
  <p class="lede">${L["start.lede"]}</p>
  <h2 class="rule">The four, side by side <span class="zh-h" lang="zh">四書對照</span></h2>
  <div class="scroll-x">
  <table id="four">
    <thead><tr>${L["start.th"].map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
    <tbody>
${L["start.rows"].map((row) => `      <tr>${row.map((c) => `<td>${link(c)}</td>`).join("")}</tr>`).join("\n")}
    </tbody>
  </table>
  </div>
  <h2 class="rule">How to choose <span class="zh-h" lang="zh">如何選</span></h2>
${L["start.paras"].map((p) => `  <p>${link(p)}</p>`).join("\n")}
</section>`;
  return shell({
    origin, buster, path: `${BASE}/where-to-start/`, L,
    title: L["start.seoTitle"],
    desc: L["start.seoDesc"],
    body,
    ogType: "article",
    jsonld: [
      NAV_CRUMB(origin, `${BASE}/where-to-start/`, L["start.crumb"], L),
      {
        "@context": "https://schema.org", "@type": "Article",
        headline: L["start.seoTitle"], description: L["start.seoDesc"], inLanguage: "en",
        isPartOf: { "@type": "WebSite", name: L["shell.site"], url: origin + BASE + "/" },
      },
      {
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: L["start.faq"].map(([q, a]) => ({
          "@type": "Question", name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  });
}


// The daily game: ten nicknames dealt by the date, four names to a question.
// A tier like any other, so every locale's /quiz/ gets hreflang twins for free.
function quizPage({ origin, buster, L, alt, STARS, LEAVES }) {
  const p = `${BASE}${lp(L.code)}/quiz/`;
  const body = `
<section class="lp-body quiz-page">
  <p class="kicker">${esc(L["quiz.kicker"])}</p>
  <h1>${esc(L["quiz.title"])} <span class="zh-h" lang="zh">${esc(L["quiz.zh"])}</span></h1>
  <p class="lede">${esc(L["quiz.lede"])}</p>
  <div id="quiz-root" data-base="${BASE}${lp(L.code)}" data-q="${esc(L["quiz.q"])}" data-t10="${esc(L["quiz.t10"])}" data-t8="${esc(L["quiz.t8"])}" data-t6="${esc(L["quiz.t6"])}" data-t3="${esc(L["quiz.t3"])}" data-t0="${esc(L["quiz.t0"])}" data-tomorrow="${esc(L["quiz.tomorrow"])}" data-copy="${esc(L["quiz.copy"])}" data-copied="${esc(L["quiz.copied"])}" data-share="${esc(L["quiz.share"])}" data-roster="${esc(L["quiz.roster"])}"></div>
</section>
<script type="application/json" id="stars-data">${compactStars(STARS, LEAVES)}</script>`;
  return shell({
    origin, buster, path: p, L, alt,
    title: L["quiz.seoTitle"],
    desc: L["quiz.seoDesc"],
    body,
    ogType: "article",
    jsonld: [
      NAV_CRUMB(origin, p, L["quiz.crumb"], L),
      {
        "@context": "https://schema.org", "@type": "Article",
        headline: L["quiz.seoTitle"], description: L["quiz.seoDesc"], inLanguage: L.htmlLang,
        isPartOf: { "@type": "WebSite", name: L["shell.site"], url: origin + BASE + "/" },
      },
    ],
  });
}


const TIERS_NOVEL = { "water-margin": waterMargin, "journey-west": journeyWest, "red-chamber": redChamber };

export function renderAll(cfg) {
  const specs = [wmNovel(cfg.STARS, cfg.LEAVES, cfg.WM_GUIDES)];
  if (cfg.JW_PEOPLE) specs.push(jwNovel(cfg.JW_PEOPLE, cfg.JW_GUIDES));
  if (cfg.RC_PEOPLE) specs.push(rcNovel(cfg.RC_PEOPLE, cfg.RC_GUIDES));
  const byDir = Object.fromEntries(specs.map((nv) => [nv.dir, nv]));

  const relOf = (code, tier) => `${code === DEFAULT_LOCALE ? "" : `${code}/`}${tier ? `${tier}/` : ""}index.html`;
  const pathOf = (code, tier) => `${BASE}${lp(code)}${tier ? `/${tier}` : ""}/`;

  const overview = (code, tier) => {
    const alt = Object.fromEntries(
      LOCALE_ORDER.filter((other) => other !== code && localeTiers(other).includes(tier)).map((other) => [other, pathOf(other, tier)])
    );
    const args = { ...cfg, L: LOCALES[code], alt };
    const builder = tier === "" ? hub : tier === "quiz" ? quizPage : tier === "three-kingdoms" ? threeKingdoms : TIERS_NOVEL[tier];
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
  for (const tier of ["", "quiz", "three-kingdoms", ...specs.map((nv) => nv.dir)]) {
    const built = localeTiers(DEFAULT_LOCALE).includes(tier) ? overview(DEFAULT_LOCALE, tier) : null;
    if (!built) continue;
    pages.push(built);
    for (const r of byDir[tier]?.rows || []) {
      pages.push([`${tier}/${slugOf(r.en)}/index.html`, leafPage(cfg, byDir[tier], r)]);
    }
    // Answer pages ride with their novel so the sitemap's existing lines keep
    // their order and only the new ones are added.
    for (const g of byDir[tier]?.guidePages || []) {
      pages.push([`${tier}/${g.slug}/index.html`, guidePage(cfg, byDir[tier], g)]);
    }
  }
  for (const code of LOCALE_ORDER.filter((c) => c !== DEFAULT_LOCALE)) {
    for (const tier of localeTiers(code)) {
      const built = overview(code, tier);
      if (built) pages.push(built);
    }
  }
  // English-only front door; sits above every novel, so it rides outside the
  // locale loops and never enters the parity gate.
  pages.push(["where-to-start/index.html", whereToStart(cfg)]);
  return pages;
}
