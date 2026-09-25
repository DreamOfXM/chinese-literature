// Pure string builders. build.mjs calls these at build time so every page
// ships its full content in HTML — no client-side-rendered empty shells.
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

// Local server and GitHub Pages both mount the site at this path prefix.
const BASE = "/chinese-literature";

const GA4_ID = "G-LY9LGVESBH";

function shell({ origin, buster, path, title, desc, body, jsonld, og, ogType, noindex }) {
  // One choke point for the SERP budget: no page can ship a title or description
  // Google would cut off mid-word.
  title = clip(title, TITLE_MAX);
  desc = clip(desc, DESC_MAX);
  const url = origin + path;
  const o = og || {
    img: "/assets/og.jpg", w: 1200, h: 630,
    alt: "Ink-wash banner: marsh boat, mountain bridge, stone staff and moon-gate garden, one vignette per novel.",
  };
  const lds = (Array.isArray(jsonld) ? jsonld : [jsonld])
    .map((j) => `<script type="application/ld+json">${JSON.stringify(j)}</script>`).join("\n");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${noindex ? '<meta name="robots" content="noindex">\n' : ""}<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${esc(url)}">
<meta property="og:type" content="${ogType || "website"}">
<meta property="og:site_name" content="Chinese Literature">
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
  <a class="brand" href="${BASE}/"><span class="seal" lang="zh" aria-hidden="true">譜</span>Chinese Literature</a>
  <nav>
    <a href="${BASE}/water-margin/">Water Margin</a>
    <a href="${BASE}/journey-west/">Journey to the West</a>
    <a href="${BASE}/red-chamber/">Red Chamber</a>
    <a href="${BASE}/three-kingdoms/">Three Kingdoms <span class="soon-chip" lang="zh">籌備中</span></a>
  </nav>
</header>
<main>
${body}
</main>
<footer class="site">
  <span class="seal" lang="zh" aria-hidden="true">譜</span>
  <p class="sig"><a href="${esc(origin + BASE)}/"><b>Chinese Literature</b> · <span class="url">${esc((origin + BASE).replace(/^https?:\/\//, ""))}/</span></a></p>
  <p>Built from public-domain texts. The rankings, notes and ink illustrations are original to this site; republication without a link back is not permitted.</p>
  <p>English nicknames and verse glosses are interpretive, not official translations.</p>
  <p>The paintings are modern ink interpretations made for this site; no scan, studio still or game asset appears anywhere on it. This site measures aggregate usage through Google Analytics — page views, how far pages are scrolled, and which painted leaves are opened. No personal data is collected, nothing is sold, and the site carries no advertising.</p>
  <p>Maintained by <a href="https://github.com/DreamOfXM" rel="me">DreamOfXM</a>. Every row cites a chapter, so corrections can be checked — <a href="https://github.com/DreamOfXM/chinese-literature/issues">open an issue</a>.</p>
</footer>
<script src="${BASE}/assets/codex.js?v=${buster}" defer></script>
</body>
</html>`;
}

const NAV_CRUMB = (origin, path, name) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Chinese Literature", item: origin + BASE + "/" },
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
  return out.replace(/\s*\S*$/, "").replace(/[,;:.\s]+$/, "") + "…";
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

const PLATE_NOTE = "Modern ink interpretations painted for this site after the Ming drinking-leaf tradition — not historical portraits and not scans of any edition.";

function hub({ origin, buster }) {
  const body = `${hero(buster, {
    img: "og",
    alt: "Ink-wash banner: a marsh boat, a mountain bridge, a stone staff and a moon-gate garden — one vignette per novel.",
    kicker: "The Ming–Qing canon · 冊頁",
    title: "The classical novels, as lookup tools",
    zh: "四大名著",
    lede: `Not essays — tables, trees, indexes and painted leaves you can filter. Each tool answers a
question with a row or a branch: who held which rank, which demon carried which treasure, who is
whose mother in the Jia house. Three of the four great novels have tools here today; the fourth
holds a reserved booth below, and its tables arrive when they can beat an essay.`,
  })}
<section class="plates">
  <h2 class="rule">The tools <span class="zh-h" lang="zh">三冊</span></h2>
  <div class="cards">
    <a class="card" href="${BASE}/water-margin/">
      <span class="card-zh" lang="zh" aria-hidden="true">水滸</span>
      <h2>The 108 Stars of Water Margin</h2>
      <p>Every star in rank order: heavenly or earthly, nickname in Chinese and English, name, and a condensed fate from the campaign chapters. Stars with a leaf of their own open into a painted portrait and their deeds in chapter order.</p>
    </a>
    <a class="card" href="${BASE}/journey-west/">
      <span class="card-zh" lang="zh" aria-hidden="true">西遊</span>
      <h2>Demons &amp; Tribulations of Journey to the West</h2>
      <p>Each named antagonist episode: place, demon, magic treasure or ability, how it was resolved, and the chapter range — with a painted leaf for everyone in it, pilgrim, god or monster.</p>
    </a>
    <a class="card" href="${BASE}/red-chamber/">
      <span class="card-zh" lang="zh" aria-hidden="true">紅樓</span>
      <h2>Red Chamber: Family Tree &amp; Twelve Beauties</h2>
      <p>The Jia house as an expandable tree, the Jinling register with its verses, glosses and fates, and a painted leaf for every named person in the house — many headed by the 判詞 written about them in chapter five.</p>
    </a>
    <a class="card soon" href="${BASE}/three-kingdoms/">
      <span class="card-zh" lang="zh" aria-hidden="true">三國</span>
      <h2>Romance of the Three Kingdoms <span class="soon-chip" lang="zh">籌備中</span></h2>
      <p>Booth reserved for the fourth great novel. The plan: the era as a dated table — which lord, which strategist, which battle turned which province — plus painted leaves for the oath brothers and their rivals. The ink is still drying.</p>
    </a>
  </div>
</section>
<section class="plates">
  <h2 class="rule">Why tables and not articles <span class="zh-h" lang="zh">以表代文</span></h2>
  <p class="plate-note" style="font-style:normal;font-size:1rem;color:var(--ink-soft)">The novels are public domain; the readings are not. A table makes its claims checkable —
rank against rank, chapter against chapter — where prose hides them. Where a field is a
gloss or a condensation, the page says so.</p>
</section>`;
  return shell({
    origin, buster, path: `${BASE}/`,
    title: "Four Great Chinese Novels — Characters & Family Trees",
    desc: "Searchable lookup tools for the Chinese literary canon in English: all 108 Water Margin characters ranked, every Journey to the West demon and how its fight ended, and the Dream of the Red Chamber family tree.",
    body,
    jsonld: { "@context": "https://schema.org", "@type": "WebSite", name: "Chinese Literature", url: origin + BASE + "/" },
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

function leafRail(buster, nv) {
  const cards = nv.rows.map((r, i) => `    <button class="leafcard" data-lb="${i}" aria-label="Open the leaf of ${esc(r.en)} full size">
${pic(buster, leafPic(nv, r), `Ink leaf portrait of ${esc(r.en)}, ${esc(r.nng)}.`, 720, 900)}
      <span class="leaf-zh" lang="zh">${esc(r.zh)}</span>
      <span class="leaf-en">${esc(r.en)} · ${esc(r.tagShort)}</span>
    </button>`).join("\n");
  return `
<section class="rail-sec">
  <h2 class="rule">${nv.railHeading} <span class="zh-h" lang="zh">${nv.railHeadingZh}</span></h2>
  <p class="rail-hint">All ${nv.rows.length} painted leaves are in this rail. Swipe it sideways, click one to open it full size, then arrow or drag through the rest.</p>
  <div class="rail" tabindex="0" aria-label="${esc(nv.railAria)}">
${cards}
  </div>
  <p class="plate-note">${esc(nv.plateNote)}</p>
${lbData(nv)}
</section>`;
}

function leafPage({ origin, buster }, nv, r) {
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
    origin, buster, path,
    title: seoTitle(r, nv),
    desc: seoDesc(r, nv),
    body,
    ogType: "article",
    og: { img: `/assets/${leafPic(nv, r)}.jpg`, w: 720, h: 900, alt: `Ink leaf portrait of ${r.en}, ${r.nng}.` },
    jsonld: [
      NAV_CRUMB(origin, path, `${r.en} ${r.zh}`),
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
  dir: "water-margin",
  imgOf: (r) => `img/wm-s${String(r.id).padStart(3, "0")}`,
  rows: STARS.filter(([rank]) => LEAVES[rank]).map(([rank, label, nn, nng, zh, en, fate]) =>
    ({ id: rank, tag: `rank ${rank}`, tagShort: String(rank), label, nn, nng, zh, en, fate, ...LEAVES[rank] })),
  railHeading: "The leaves", railHeadingZh: "水滸葉子",
  railAria: "Portrait leaves of the Water Margin characters, scrollable sideways",
  plateNote: PLATE_NOTE,
  leafWord: "Leaf", unit: "of the marsh",
  deedsHeading: "The great deeds", deedsHeadingZh: "大事記",
  endLabel: "結局", endLabelEn: "The ending",
  indexLink: "The roster", indexLinkZh: "天罡地煞",
  seoNovel: "Water Margin", novelZh: "水滸傳", novelDate: "c. 1400",
  seoRole: (r) => `rank ${r.id} of the 108 Stars`,
  relatedHeading: { en: "In the same chapters", zh: "同回" },
});

const jwNovel = (PEOPLE) => ({
  dir: "journey-west",
  imgOf: (r) => `img/jw-${slugOf(r.en)}`,
  rows: PEOPLE.map((r) => ({ ...r, tag: `no. ${r.id}`, tagShort: String(r.id) })),
  railHeading: "The leaves", railHeadingZh: "取經葉子",
  railAria: "Portrait leaves of the Journey to the West characters, scrollable sideways",
  plateNote: PLATE_NOTE,
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
  dir: "red-chamber",
  imgOf: (r) => `img/rc-${slugOf(r.en)}`,
  rows: PEOPLE.map((r) => ({ ...r, tag: `no. ${r.id}`, tagShort: String(r.id) })),
  railHeading: "The leaves", railHeadingZh: "金陵葉子",
  railAria: "Portrait leaves of the Dream of the Red Chamber characters, scrollable sideways",
  plateNote: PLATE_NOTE,
  leafWord: "Leaf", unit: "of the Red Chamber",
  verseLabel: "判詞", verseLabelEn: "The register verse",
  deedsHeading: "The great deeds", deedsHeadingZh: "大事記",
  endLabel: "結局", endLabelEn: "The ending",
  indexLink: "The register", indexLinkZh: "金陵十二釵",
  seoNovel: "Dream of the Red Chamber", novelZh: "紅樓夢", novelDate: "c. 1791",
  seoRole: (r) => { const roll = rollOf(r.grp); return roll.zh ? `in the ${roll.en.replace(/^The\s+/i, "")} (${roll.zh})` : ""; },
  relatedHeading: { en: "In the same register & chapters", zh: "同冊" },
});

function waterMargin({ origin, buster, STARS, nv }) {
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
    alt: "Ink-wash painting of the Liangshan marsh at dawn: a palisade stronghold with unmarked banners, reed beds and boats on still water.",
    kicker: "Leaf I · The marsh · c. 1400",
    title: "The 108 Stars of Water Margin",
    zh: "水滸傳",
    lede: `The Liangshan roster in rank order. The first 36 are the Heavenly Spirits, the remaining 72
the Earthly Fiends. Fates are condensed from chapters 90–120; a dash means this table's source
summary does not record that person individually. Every row with a leaf opens into that
character's own page — painted portrait, great deeds in chapter order, and the ending.`,
  })}
${leafRail(buster, nv)}
<h2 class="rule">The roster <span class="zh-h" lang="zh">天罡地煞</span></h2>
<div class="controls">
  <input type="search" id="q" data-filter-table="#stars" placeholder="Search nickname, name, star…">
  <button data-group-filter="#stars" data-group="all" class="on">All 108</button>
  <button data-group-filter="#stars" data-group="heavenly">Heavenly 36</button>
  <button data-group-filter="#stars" data-group="earthly">Earthly 72</button>
  <span class="count" data-count="#stars"></span>
</div>
<div class="scroll-x">
<table id="stars">
  <thead><tr><th>#</th><th>Star</th><th>Nickname</th><th>Name</th><th>Fate</th></tr></thead>
  <tbody>
${rows}
  </tbody>
</table>
</div>`;
  return shell({
    origin, buster, path: `${BASE}/water-margin/`,
    title: "Water Margin's 108 Stars — All Characters Ranked & Fates",
    desc: "Every Water Margin character in rank order: the 108 Stars of Destiny with star name, nickname in Chinese and English, and condensed fate. 45 characters open into their own page with deeds and ending.",
    body,
    jsonld: NAV_CRUMB(origin, `${BASE}/water-margin/`, "Water Margin 108 Stars"),
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

const GROUP_LABEL = { pilgrim: "Pilgrim", heaven: "Heaven", demon: "Demon" };

function journeyWest({ origin, buster, TRIBULATIONS, nv }) {
  const { demon: demonLeaf, fetcher, cell } = tribLinks(nv);
  const cast = nv.rows.map((r) => {
    const href = leafHref(nv, r);
    return `      <tr data-group="${r.grp}" class="${r.id % 2 === 0 ? "zebra" : ""} has-leaf" data-leaf="${href}"><td class="num">${r.id}</td><td class="gloss">${GROUP_LABEL[r.grp] || r.grp}</td><td><a class="rowlink" href="${href}"><span class="zh">${esc(r.zh)}</span> <span class="gloss">${esc(r.en)}</span></a></td><td><span class="zh">${esc(r.nn)}</span> <span class="gloss">${esc(r.nng)}</span></td><td class="zh">${esc(r.label)}</td><td>${esc(r.hook)}</td></tr>`;
  }).join("\n");
  const tribs = TRIBULATIONS.map(([place, fiend, treasure, resolution, ch]) =>
    `      <tr><td>${esc(place)}</td><td>${cell(demonLeaf, ch, fiend)}</td><td>${esc(treasure)}</td><td>${cell(fetcher, ch, resolution)}</td><td class="num">${esc(ch)}</td></tr>`).join("\n");
  const n = nv.rows.length;
  const body = `${hero(buster, {
    img: "img/jw-hero",
    alt: "Ink-wash painting of four pilgrims crossing a stone bridge among karst peaks and cloud, on the road west.",
    kicker: "Leaf II · The road west · c. 1592",
    title: "Demons &amp; Tribulations of Journey to the West",
    zh: "西遊記",
    lede: `The novel's own register counts eighty-one calamities. This index covers the named antagonist
episodes — the ones people actually look up: which demon, which magic treasure, and who had to
come and fetch it. Every named person below opens into their own leaf: painted portrait, deeds
in chapter order, and the ending.`,
  })}
${leafRail(buster, nv)}
<h2 class="rule">The cast <span class="zh-h" lang="zh">取經人物</span></h2>
<div class="controls">
  <input type="search" id="q" data-filter-table="#cast" placeholder="Search name, epithet, title…">
  <button data-group-filter="#cast" data-group="all" class="on">All ${n}</button>
  <button data-group-filter="#cast" data-group="pilgrim">Pilgrims</button>
  <button data-group-filter="#cast" data-group="heaven">Heaven</button>
  <button data-group-filter="#cast" data-group="demon">Demons</button>
  <span class="count" data-count="#cast"></span>
</div>
<div class="scroll-x">
<table id="cast">
  <thead><tr><th>#</th><th>Side</th><th>Name</th><th>Epithet</th><th>Style / seat</th><th>Why this leaf exists</th></tr></thead>
  <tbody>
${cast}
  </tbody>
</table>
</div>
<h2 class="rule">The index <span class="zh-h" lang="zh">八十一難</span></h2>
<div class="controls">
  <input type="search" id="q2" data-filter-table="#tribs" placeholder="Search demon, place, treasure…">
  <span class="count" data-count="#tribs"></span>
</div>
<div class="scroll-x">
<table id="tribs">
  <thead><tr><th>Place</th><th>Demon / antagonist</th><th>Treasure or ability</th><th>Resolution</th><th>Ch.</th></tr></thead>
  <tbody>
${tribs}
  </tbody>
</table>
</div>`;
  return shell({
    origin, buster, path: `${BASE}/journey-west/`,
    title: "Journey to the West Demons — Fiends, Treasures & Endings",
    desc: `Every demon episode of Journey to the West: place, antagonist, treasure or ability, how it was resolved, and the chapter range. ${n} characters open as painted leaves.`,
    body,
    jsonld: NAV_CRUMB(origin, `${BASE}/journey-west/`, "Journey to the West Index"),
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

function redChamber({ origin, buster, TREE, BEAUTIES, nv }) {
  const cast = nv.rows.map((r) => {
    const roll = rollOf(r.grp);
    const href = leafHref(nv, r);
    return `      <tr data-group="${r.grp}" class="${r.id % 2 === 0 ? "zebra" : ""} has-leaf" data-leaf="${href}"><td class="num">${r.id}</td><td><span class="zh">${esc(roll.zh)}</span> <span class="gloss">${esc(roll.en)}</span></td><td><a class="rowlink" href="${href}"><span class="zh">${esc(r.zh)}</span> <span class="gloss">${esc(r.en)}</span></a></td><td><span class="zh">${esc(r.nn)}</span> <span class="gloss">${esc(r.nng)}</span></td><td class="zh">${esc(r.label)}</td><td>${esc(r.hook)}</td></tr>`;
  }).join("\n");
  const rows = BEAUTIES.map(([name, verse, gloss, fate]) =>
    `      <tr><td>${linkNames(nv, name)}</td><td class="zh verse">${esc(verse)}</td><td class="gloss">${esc(gloss)}</td><td>${esc(fate)}</td></tr>`).join("\n");
  const grps = [...new Set(nv.rows.map((r) => r.grp))];
  const buttons = grps.map((g) => {
    const roll = rollOf(g);
    return `  <button data-group-filter="#people" data-group="${g}">${esc(roll.en)}${roll.zh ? ` <span class="zh" lang="zh">${roll.zh}</span>` : ""}</button>`;
  }).join("\n");
  const n = nv.rows.length;
  const verses = nv.rows.filter((r) => r.verse).length;
  const body = `${hero(buster, {
    img: "img/rc-hero",
    alt: "Ink-wash painting of a classical Chinese garden: moon gate, pavilion, zigzag bridge over a pond with falling petals.",
    kicker: "Leaf III · The garden · c. 1791",
    title: "Dream of the Red Chamber: Family Tree &amp; Twelve Beauties",
    zh: "紅樓夢",
    lede: `The Jia house is the plot: who is whose mother decides who can marry whom and who mourns
whom. Expand the branches, then read the Jinling register — the verses that foretell each
woman's ending, with glosses. Every named person below opens into their own leaf: painted
portrait, the register verse that was written about them before they did anything, the deeds
in chapter order, and the ending.`,
  })}
${leafRail(buster, nv)}
<h2 class="rule">The household <span class="zh-h" lang="zh">寧榮二府</span></h2>
<div class="controls">
  <input type="search" id="q" data-filter-table="#people" placeholder="Search name, epithet, role…">
  <button data-group-filter="#people" data-group="all" class="on">All ${n}</button>
${buttons}
  <span class="count" data-count="#people"></span>
</div>
<div class="scroll-x">
<table id="people">
  <thead><tr><th>#</th><th>Roll</th><th>Name</th><th>Epithet</th><th>Seat / role</th><th>Why this leaf exists</th></tr></thead>
  <tbody>
${cast}
  </tbody>
</table>
</div>
<h2 class="rule">The family tree <span class="zh-h" lang="zh">賈府</span></h2>
${treeHTML(TREE, nv)}
<h2 class="rule">The Twelve Beauties of Jinling <span class="zh-h" lang="zh">金陵十二釵</span></h2>
<p class="rail-hint">${verses} of these people keep their own leaf, with the ${verses === 1 ? "verse" : "verses"} quoted in full above their deeds; the register rows below carry the condensed couplets as the chapter-5 book keeps them.</p>
<div class="scroll-x">
<table id="beauties">
  <thead><tr><th>Name</th><th>Register verse</th><th>Gloss</th><th>Fate</th></tr></thead>
  <tbody>
${rows}
  </tbody>
</table>
</div>`;
  return shell({
    origin, buster, path: `${BASE}/red-chamber/`,
    title: "Dream of the Red Chamber Family Tree & Twelve Beauties",
    desc: `The Jia family tree, the Twelve Beauties of Jinling with their verses, and ${n} characters who open into their own painted leaf — ${verses} headed by their 判词.`,
    body,
    jsonld: NAV_CRUMB(origin, `${BASE}/red-chamber/`, "Red Chamber Tree & Register"),
  });
}

// Reserved booth for the fourth great novel: a teaser leaf, kept out of the
// sitemap and noindex until its tables exist.
function threeKingdoms({ origin, buster }) {
  const body = `
<section class="soon-page">
  <div class="soon-plate" aria-hidden="true">
    <span class="soon-zh" lang="zh">三國</span>
    <span class="soon-seal" lang="zh">籌備中</span>
  </div>
  <p class="kicker">Leaf IV · The three kingdoms · c. 1522 · booth reserved</p>
  <h1>Romance of the Three Kingdoms <span class="zh-h" lang="zh">三國演義</span></h1>
  <p class="lede">The fourth of the four great novels holds its slot on the shelf. The tools are being drafted:
  the era as a dated table — which lord, which strategist, which battle turned which province — the
  campaigns indexed by river and pass, and painted leaves for the oath brothers and their rivals.
  Each answer a row, not an essay.</p>
  <p class="soon-note">The ink is still drying — check back after the next kiln firing.</p>
  <nav class="soon-nav"><a href="${BASE}/">← The four great novels</a></nav>
</section>`;
  return shell({
    origin, buster, path: `${BASE}/three-kingdoms/`, noindex: true,
    title: "Romance of the Three Kingdoms — booth reserved",
    desc: "A reserved booth: lookup tables and painted leaves for Romance of the Three Kingdoms are in preparation.",
    body,
    jsonld: NAV_CRUMB(origin, `${BASE}/three-kingdoms/`, "Romance of the Three Kingdoms"),
  });
}

export function renderAll(cfg) {
  const specs = [wmNovel(cfg.STARS, cfg.LEAVES)];
  if (cfg.JW_PEOPLE) specs.push(jwNovel(cfg.JW_PEOPLE));
  if (cfg.RC_PEOPLE) specs.push(rcNovel(cfg.RC_PEOPLE));

  const index = { "water-margin": waterMargin, "journey-west": journeyWest, "red-chamber": redChamber };
  const pages = [["index.html", hub(cfg)], ["three-kingdoms/index.html", threeKingdoms(cfg)]];
  for (const nv of specs) {
    pages.push([`${nv.dir}/index.html`, index[nv.dir]({ ...cfg, nv })]);
    for (const r of nv.rows) pages.push([`${nv.dir}/${slugOf(r.en)}/index.html`, leafPage(cfg, nv, r)]);
  }
  return pages;
}
