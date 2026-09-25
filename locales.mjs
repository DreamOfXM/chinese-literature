// Locale string tables for the five overview pages.
//
// The leaf pages stay English-only until the pilot earns it: their copy is
// 70k words of interpretive gloss, while the overview tier is ~1.6k words of
// prose plus table chrome. Every English value here is the string render.mjs
// used to carry inline, byte for byte, so the `en` rebuild must be identical
// to the shipped tree — that equality is the regression gate.
//
// Japanese is written, not machine-turned: no kana readings are invented (a
// wrong 読み is worse than none), so names keep their kanji plus the existing
// romanisation. Shinjitai is used for Japanese-side labels; traditional forms
// stay on the Chinese spans, which carry lang="zh" and keep the 楷 font.

const EN = {
  code: "en",
  htmlLang: "en",
  selfName: "English",
  langLabel: "Language",

  "shell.site": "Chinese Literature",
  "shell.ogAlt": "Ink-wash banner: marsh boat, mountain bridge, stone staff and moon-gate garden, one vignette per novel.",
  "shell.nav.wm": "Water Margin",
  "shell.nav.jw": "Journey to the West",
  "shell.nav.rc": "Red Chamber",
  "shell.nav.tk": "Three Kingdoms",
  "shell.footer": [
    (site) => `<p class="sig"><a href="${site}/"><b>Chinese Literature</b> · <span class="url">${site.replace(/^https?:\/\//, "")}/</span></a></p>`,
    () => `<p>Built from public-domain texts. The rankings, notes and ink illustrations are original to this site; republication without a link back is not permitted.</p>`,
    () => `<p>English nicknames and verse glosses are interpretive, not official translations.</p>`,
    () => `<p>The paintings are modern ink interpretations made for this site; no scan, studio still or game asset appears anywhere on it. This site measures aggregate usage through Google Analytics — page views, how far pages are scrolled, and which painted leaves are opened. No personal data is collected, nothing is sold, and the site carries no advertising.</p>`,
    () => `<p>Maintained by <a href="https://github.com/DreamOfXM" rel="me">DreamOfXM</a>. Every row cites a chapter, so corrections can be checked — <a href="https://github.com/DreamOfXM/chinese-literature/issues">open an issue</a>.</p>`,
  ],

  "hub.alt": "Ink-wash banner: a marsh boat, a mountain bridge, a stone staff and a moon-gate garden — one vignette per novel.",
  "hub.kicker": "The Ming–Qing canon · 冊頁",
  "hub.title": "The classical novels, as lookup tools",
  "hub.zh": "四大名著",
  "hub.lede": `Not essays — tables, trees, indexes and painted leaves you can filter. Each tool answers a
question with a row or a branch: who held which rank, which demon carried which treasure, who is
whose mother in the Jia house. Three of the four great novels have tools here today; the fourth
holds a reserved booth below, and its tables arrive when they can beat an essay.`,
  "hub.tools": "The tools",
  "hub.card.wm.t": "The 108 Stars of Water Margin",
  "hub.card.wm.b": "Every star in rank order: heavenly or earthly, nickname in Chinese and English, name, and a condensed fate from the campaign chapters. Stars with a leaf of their own open into a painted portrait and their deeds in chapter order.",
  "hub.card.jw.t": "Demons &amp; Tribulations of Journey to the West",
  "hub.card.jw.b": "Each named antagonist episode: place, demon, magic treasure or ability, how it was resolved, and the chapter range — with a painted leaf for everyone in it, pilgrim, god or monster.",
  "hub.card.rc.t": "Red Chamber: Family Tree &amp; Twelve Beauties",
  "hub.card.rc.b": "The Jia house as an expandable tree, the Jinling register with its verses, glosses and fates, and a painted leaf for every named person in the house — many headed by the 判詞 written about them in chapter five.",
  "hub.card.tk.t": "Romance of the Three Kingdoms",
  "hub.card.tk.b": "Booth reserved for the fourth great novel. The plan: the era as a dated table — which lord, which strategist, which battle turned which province — plus painted leaves for the oath brothers and their rivals. The ink is still drying.",
  "hub.why": "Why tables and not articles",
  "hub.why.b": `The novels are public domain; the readings are not. A table makes its claims checkable —
rank against rank, chapter against chapter — where prose hides them. Where a field is a
gloss or a condensation, the page says so.`,
  "hub.seoTitle": "Four Great Chinese Novels — Characters & Family Trees",
  "hub.seoDesc": "Searchable lookup tools for the Chinese literary canon in English: all 108 Water Margin characters ranked, every Journey to the West demon and how its fight ended, and the Dream of the Red Chamber family tree.",

  "rail.heading": "The leaves",
  "rail.hint": (n) => `All ${n} painted leaves are in this rail. Swipe it sideways, click one to open it full size, then arrow or drag through the rest.`,
  "rail.plateNote": "Modern ink interpretations painted for this site after the Ming drinking-leaf tradition — not historical portraits and not scans of any edition.",
  "rail.aria.wm": "Portrait leaves of the Water Margin characters, scrollable sideways",
  "rail.aria.jw": "Portrait leaves of the Journey to the West characters, scrollable sideways",
  "rail.aria.rc": "Portrait leaves of the Dream of the Red Chamber characters, scrollable sideways",
  "rail.cardAria": (en) => `Open the leaf of ${en} full size`,
  "rail.cardAlt": (en, nn) => `Ink leaf portrait of ${en}, ${nn}.`,

  "wm.alt": "Ink-wash painting of the Liangshan marsh at dawn: a palisade stronghold with unmarked banners, reed beds and boats on still water.",
  "wm.kicker": "Leaf I · The marsh · c. 1400",
  "wm.title": "The 108 Stars of Water Margin",
  "wm.zh": "水滸傳",
  "wm.lede": `The Liangshan roster in rank order. The first 36 are the Heavenly Spirits, the remaining 72
the Earthly Fiends. Fates are condensed from chapters 90–120; a dash means this table's source
summary does not record that person individually. Every row with a leaf opens into that
character's own page — painted portrait, great deeds in chapter order, and the ending.`,
  "wm.roster": "The roster",
  "wm.ph": "Search nickname, name, star…",
  "wm.all": "All 108",
  "wm.heavenly": "Heavenly 36",
  "wm.earthly": "Earthly 72",
  "wm.th": ["#", "Star", "Nickname", "Name", "Fate"],
  "wm.seoTitle": "Water Margin's 108 Stars — All Characters Ranked & Fates",
  "wm.seoDesc": "Every Water Margin character in rank order: the 108 Stars of Destiny with star name, nickname in Chinese and English, and condensed fate. 45 characters open into their own page with deeds and ending.",
  "wm.crumb": "Water Margin 108 Stars",

  "jw.alt": "Ink-wash painting of four pilgrims crossing a stone bridge among karst peaks and cloud, on the road west.",
  "jw.kicker": "Leaf II · The road west · c. 1592",
  "jw.title": "Demons &amp; Tribulations of Journey to the West",
  "jw.zh": "西遊記",
  "jw.lede": `The novel's own register counts eighty-one calamities. This index covers the named antagonist
episodes — the ones people actually look up: which demon, which magic treasure, and who had to
come and fetch it. Every named person below opens into their own leaf: painted portrait, deeds
in chapter order, and the ending.`,
  "jw.cast": "The cast",
  "jw.ph": "Search name, epithet, title…",
  "jw.all": (n) => `All ${n}`,
  "jw.side": { pilgrim: "Pilgrim", heaven: "Heaven", demon: "Demon" },
  "jw.pilgrim": "Pilgrims",
  "jw.heaven": "Heaven",
  "jw.demon": "Demons",
  "jw.th": ["#", "Side", "Name", "Epithet", "Style / seat", "Why this leaf exists"],
  "jw.index": "The index",
  "jw.ph2": "Search demon, place, treasure…",
  "jw.th2": ["Place", "Demon / antagonist", "Treasure or ability", "Resolution", "Ch."],
  "jw.seoTitle": "Journey to the West Demons — Fiends, Treasures & Endings",
  "jw.seoDesc": (n) => `Every demon episode of Journey to the West: place, antagonist, treasure or ability, how it was resolved, and the chapter range. ${n} characters open as painted leaves.`,
  "jw.crumb": "Journey to the West Index",

  "rc.alt": "Ink-wash painting of a classical Chinese garden: moon gate, pavilion, zigzag bridge over a pond with falling petals.",
  "rc.kicker": "Leaf III · The garden · c. 1791",
  "rc.title": "Dream of the Red Chamber: Family Tree &amp; Twelve Beauties",
  "rc.zh": "紅樓夢",
  "rc.lede": `The Jia house is the plot: who is whose mother decides who can marry whom and who mourns
whom. Expand the branches, then read the Jinling register — the verses that foretell each
woman's ending, with glosses. Every named person below opens into their own leaf: painted
portrait, the register verse that was written about them before they did anything, the deeds
in chapter order, and the ending.`,
  "rc.household": "The household",
  "rc.ph": "Search name, epithet, role…",
  "rc.all": (n) => `All ${n}`,
  "rc.roll": {
    register: "Main register", sub: "Second register", deputy: "Third register",
    household: "The household", maid: "Maids",
  },
  "rc.th": ["#", "Roll", "Name", "Epithet", "Seat / role", "Why this leaf exists"],
  "rc.tree": "The family tree",
  "rc.beauties": "The Twelve Beauties of Jinling",
  "rc.hint": (v) => `${v} of these people keep their own leaf, with the ${v === 1 ? "verse" : "verses"} quoted in full above their deeds; the register rows below carry the condensed couplets as the chapter-5 book keeps them.`,
  "rc.th2": ["Name", "Register verse", "Gloss", "Fate"],
  "rc.seoTitle": "Dream of the Red Chamber Family Tree & Twelve Beauties",
  "rc.seoDesc": (n, v) => `The Jia family tree, the Twelve Beauties of Jinling with their verses, and ${n} characters who open into their own painted leaf — ${v} headed by their 判词.`,
  "rc.crumb": "Red Chamber Tree & Register",

  "tk.kicker": "Leaf IV · The three kingdoms · c. 1522 · booth reserved",
  "tk.title": "Romance of the Three Kingdoms",
  "tk.titleZh": "三國演義",
  "tk.lede": `The fourth of the four great novels holds its slot on the shelf. The tools are being drafted:
  the era as a dated table — which lord, which strategist, which battle turned which province — the
  campaigns indexed by river and pass, and painted leaves for the oath brothers and their rivals.
  Each answer a row, not an essay.`,
  "tk.note": "The ink is still drying — check back after the next kiln firing.",
  "tk.back": "← The four great novels",
  "tk.seoTitle": "Romance of the Three Kingdoms — booth reserved",
  "tk.seoDesc": "A reserved booth: lookup tables and painted leaves for Romance of the Three Kingdoms are in preparation.",
  "tk.crumb": "Romance of the Three Kingdoms",
};

const JA = {
  ...EN,
  code: "ja",
  htmlLang: "ja",
  selfName: "日本語",
  langLabel: "言語",

  "shell.site": "中国古典文学",
  "shell.ogAlt": "水墨の横断画——葦原の舟、山の橋、錫杖、月門の庭。四つの小説にそれぞれ一場面。",
  "shell.nav.wm": "水滸伝",
  "shell.nav.jw": "西遊記",
  "shell.nav.rc": "紅楼夢",
  "shell.nav.tk": "三國演義",
  "shell.footer": [
    (site) => `<p class="sig"><a href="${site}/"><b>中国古典文学</b> · <span class="url">${site.replace(/^https?:\/\//, "")}/</span></a></p>`,
    () => `<p>底本はパブリックドメインの原文です。序列の組み立て方、注、水墨の絵はこのサイトが独自に書いたもので、転載時は出典へのリンクを付けてください。</p>`,
    () => `<p>あだ名や韻文の言い当ては解釈訳です。正式訳ではなく、日本語見出しも同じ扱いになります。</p>`,
    () => `<p>絵はすべてこのサイトのために描いた現代的な水墨の解釈画です。版本のスキャン、映画のスチル、ゲーム素材は一切使っていません。アクセス統計は Google Analytics の集計値だけを見ています——ページビュー、スクロール位置、開かれた冊葉。個人情報は取得せず、物を売ることも広告を載せることもありません。</p>`,
    () => `<p>管理: <a href="https://github.com/DreamOfXM" rel="me">DreamOfXM</a>。どの行も回目をかいているので、誤りは確かめられます。<a href="https://github.com/DreamOfXM/chinese-literature/issues">指摘はこちら</a>（issue は英語で書かれています）。</p>`,
  ],

  "hub.alt": "水墨の横断画——葦原の舟、山の橋、錫杖、月門の庭。四つの小説にそれぞれ一場面。",
  "hub.kicker": "明清の四大名著 · 冊頁",
  "hub.title": "古典小説を、引ける形で",
  "hub.zh": "四大名著",
  "hub.lede": "随筆ではなく、表・系図・索引・めくれる冊葉です。それぞれの道具は一行か一枝で答えます。誰が何位の星だったか、どの妖がどの法宝を持っていたか、賈府では誰が誰の母か。四大名著のうち三つはすでにここにあり、残り一つは下の席に場所を確保しています。表が文章に勝てるものができるまで、その棚は空いたままです。",
  "hub.tools": "三つの冊",
  "hub.card.wm.t": "水滸伝 一百八星",
  "hub.card.wm.b": "全108星を座次順に。天罡か地煞か、綽号（あだ名）の漢字と英訳、姓名、そして九十回以降の結末の要約まで。冊葉を持つ星は、その人のページに水墨の肖像と回目順の大事記が続きます。",
  "hub.card.jw.t": "西遊記 妖怪と難",
  "hub.card.jw.b": "名前が残る障害の回を、場所・妖・法宝または法力・収め方・回目範囲まで一行に。旅の僧も天界の神も妖魔も、名のある者は全員が冊葉を持ちます。",
  "hub.card.rc.t": "紅楼夢 族譜と十二釵",
  "hub.card.rc.b": "広げられる賈氏の系図、判詞と訓読と結末を並べた金陵十二釵の冊、そして名前の出る人物一人に一葉。多くの葉の頭には、第五回で先に書かれていた予言の詩が置かれています。",
  "hub.card.tk.t": "三國演義",
  "hub.card.tk.b": "四つ目のための空席です。予定しているのは、年代入りの表——どの諸侯にどの軍師、どの戦いでどの州が動いたか——と、川と関で引く戦役索引、結義兄弟とその敵たちの冊葉。まだ墨が乾いていません。",
  "hub.why": "なぜ文章でなく表か",
  "hub.why.b": "原作はパブリックドメインですが、読み方は人それぞれです。表なら主張を検証できます——星と星、回と回を突き合わせる。散文ではそれが隠れます。訓読や要約にとどめた欄には、その旨をページに書いています。",
  "hub.seoTitle": "四大名著 人物検索・系図・回目索引",
  "hub.seoDesc": "中国の四大名著を検索用の表にまとめました。水滸伝の108星を座次順、西遊記の妖怪と法宝・収め方、紅楼夢の賈氏系図と金陵十二釵の判詞。人物ページは肖像付き。",

  "rail.heading": "肖像の冊葉",
  "rail.hint": (n) => `${n}枚の冊葉をこの列にまとめています。横になぞるか、一枚をクリックして拡大し、矢印かドラッグで続きを見てください。`,
  "rail.plateNote": "明の飲酒葉子の伝統にならって、このサイトのために描いた現代的な水墨の解釈画です。歴代の肖像画でも、版本のスキャンでもありません。",
  "rail.aria.wm": "水滸伝の人物冊葉、横にスクロールできます",
  "rail.aria.jw": "西遊記の人物冊葉、横にスクロールできます",
  "rail.aria.rc": "紅楼夢の人物冊葉、横にスクロールできます",
  "rail.cardAria": (en) => `${en} の冊葉を拡大して見る`,
  "rail.cardAlt": (en, nn) => `${en}（綽号 ${nn}）の水墨の冊葉肖像。`,

  "wm.alt": "水墨画——暁の梁山泊。幟のない柵の砦、葦原、静かな水面に舟。",
  "wm.kicker": "冊 I · 水滸・1400年頃",
  "wm.title": "水滸伝 一百八星",
  "wm.zh": "水滸傳",
  "wm.lede": "梁山泊の座次を順番に並べた表です。上から三十六が天星、残りの七十二が地星。結末は九十回から百二十回までを要約しています。横線は、底本とする回目の要約がその人物を個別に記録していないことを意味します。冊葉のある行は、その人自身のページへつながります——水墨の肖像、回目順の大事記、そして最期まで。",
  "wm.roster": "星の配列",
  "wm.ph": "綽号・姓名・星名を検索…",
  "wm.all": "全108",
  "wm.heavenly": "天罡36",
  "wm.earthly": "地煞72",
  "wm.th": ["#", "星", "綽号", "姓名", "結末"],
  "wm.seoTitle": "水滸伝 108星 全人物と結末",
  "wm.seoDesc": "水滸伝の108星を座次順に。星名・綽号（漢字と英訳）・姓名・九十回以降の結末の要約を一行に。45人は人物ページを持ち、大事記と最期まで書かれています。",
  "wm.crumb": "水滸伝 一百八星",

  "jw.alt": "水墨画——カルストの峰と雲の間、石橋を渡る四人の行者と馬。",
  "jw.kicker": "冊 II · 西行・1592年頃",
  "jw.title": "西遊記 妖怪と難",
  "jw.zh": "西遊記",
  "jw.lede": "原作の冊は八十一難を数えます。ここの索引は、名前が残る障害の回だけを扱っています——探されるのは大抵「どの妖で、どの法宝で、誰が回収に来たか」です。下に名前の出る人物は全員が冊葉を持ち、水墨の肖像、回目順の大事記、最期までつながります。",
  "jw.cast": "取経一行",
  "jw.ph": "姓名・称号を検索…",
  "jw.all": (n) => `全${n}`,
  "jw.side": { pilgrim: "一行", heaven: "天界", demon: "妖魔" },
  "jw.pilgrim": "一行",
  "jw.heaven": "天界",
  "jw.demon": "妖魔",
  "jw.th": ["#", "陣営", "姓名", "称号", "職掌・座次", "この葉に書いたこと"],
  "jw.index": "八十一難",
  "jw.ph2": "妖・場所・法宝を検索…",
  "jw.th2": ["場所", "妖・障害", "法宝・法力", "収め方", "回"],
  "jw.seoTitle": "西遊記 妖怪と法宝と結末 回目順",
  "jw.seoDesc": (n) => `西遊記の妖怪の回を、場所・妖・法宝または法力・収め方・回目範囲まで一行に。${n}人が水墨の冊葉として開けます。`,
  "jw.crumb": "西遊記 八十一難索引",

  "rc.alt": "水墨画——中華の庭園、月門、亭、散る花の吹く池の蛇行橋。",
  "rc.kicker": "冊 III · 紅楼・1791年頃",
  "rc.title": "紅楼夢 族譜と十二釵",
  "rc.zh": "紅樓夢",
  "rc.lede": "賈府の系図がそのまま筋です。誰が誰の母かが、誰と誰が結婚でき、誰が誰を悼むのかを決めます。枝を広げたあと、金陵十二釵の冊をどうぞ——女性の最期を予言する判詞と、その訓読を並べました。名前の出る人物は全員冊葉になり、肖像、何をする前に書かれていた判詞、回目順の大事記、最期までつながります。",
  "rc.household": "寧栄二府",
  "rc.ph": "姓名・称号・立場を検索…",
  "rc.all": (n) => `全${n}`,
  "rc.roll": {
    register: "正冊", sub: "副冊", deputy: "又副冊",
    household: "当家", maid: "丫鬟",
  },
  "rc.th": ["#", "冊", "姓名", "称号", "立場・役目", "この葉に書いたこと"],
  "rc.tree": "賈氏の系図",
  "rc.beauties": "金陵十二釵",
  "rc.hint": (v) => `この中の ${v} 人が自身の冊葉を持ち、判詞は大事記の頭に全文で引用しています。下の冊の行は、第五回の冊どおりに短くまとめた対句を載せています。`,
  "rc.th2": ["姓名", "判詞", "訓読", "結末"],
  "rc.seoTitle": "紅楼夢 賈一族の系図と十二釵",
  "rc.seoDesc": (n, v) => `賈氏の広げられる系図、判詞つきの金陵十二釵、そして ${n} 人の人物冊葉——うち ${v} 人は判詞を頭に戴いています。`,
  "rc.crumb": "紅楼夢 系図と冊",

  "tk.kicker": "冊 IV · 三國・1522年頃 · 席を確保中",
  "tk.title": "三國演義",
  "tk.titleZh": "",
  "tk.lede": "四大名著の四つ目は、棚の場所を取ってあります。いま描いているのは、年代入りの表——どの諸侯にどの軍師、どの戦いでどの州が動いたか——と、川と関で引く戦役索引、結義兄弟とその敵たちの冊葉です。答えは一行で出し、随筆では置きません。",
  "tk.note": "墨が乾き次第に。窯が冷めたら、またどうぞ。",
  "tk.back": "← 四大名著の一覧へ",
  "tk.seoTitle": "三國演義 準備中",
  "tk.seoDesc": "四つ目の名著のための空席です。検索用の表と人物冊葉を用意しています。",
  "tk.crumb": "三國演義",
};

// The overview tiers each locale carries. Leaf pages are deliberately absent,
// so nothing can link to a /ja/ character page that was never written.
const TIERS = {
  en: ["", "water-margin", "journey-west", "red-chamber", "three-kingdoms"],
  ja: ["", "water-margin", "journey-west", "red-chamber", "three-kingdoms"],
};

export const LOCALES = { en: EN, ja: JA };
export const LOCALE_ORDER = ["en", "ja"];
export const DEFAULT_LOCALE = "en";
export const localeTiers = (code) => TIERS[code] || [];

// Key parity is a build-time gate, not a hope: a locale missing a key would
// silently fall through to `...EN` and ship English inside a ja page. Because
// the spread makes every inherited key an own property, the only detectable
// symptom is a value that still equals English — so that is what gets tested.
// Keys ending in .zh hold the Chinese source title shown under a translated
// heading; those read the same in every locale by design, so equality there
// proves nothing. Functions can't be compared by value: the gate lists them as
// unchecked, and the rendered page is where they get read.
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
