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
whose mother in the Jia house. All four great novels now hold a table here; the fourth's painted
leaves arrive when the ink dries.`,
  "hub.tools": "The tools",
  "hub.card.wm.t": "The 108 Stars of Water Margin",
  "hub.card.wm.b": "Every star in rank order: heavenly or earthly, nickname in Chinese and English, name, and a condensed fate from the campaign chapters. Stars with a leaf of their own open into a painted portrait and their deeds in chapter order.",
  "hub.card.jw.t": "Demons &amp; Tribulations of Journey to the West",
  "hub.card.jw.b": "Each named antagonist episode: place, demon, magic treasure or ability, how it was resolved, and the chapter range — with a painted leaf for everyone in it, pilgrim, god or monster.",
  "hub.card.rc.t": "Red Chamber: Family Tree &amp; Twelve Beauties",
  "hub.card.rc.b": "The Jia house as an expandable tree, the Jinling register with its verses, glosses and fates, and a painted leaf for every named person in the house — many headed by the 判詞 written about them in chapter five.",
  "hub.card.tk.t": "Romance of the Three Kingdoms",
  "hub.card.tk.b": "The era as two dated tables: the lords, strategists and warriors who moved it — allegiance, courtesy name, fate — and the battles that turned provinces, every row cited to its chapters. Painted leaves for the oath brothers follow the ink.",
  "hub.why": "Why tables and not articles",
  "hub.why.b": `The novels are public domain; the readings are not. A table makes its claims checkable —
rank against rank, chapter against chapter — where prose hides them. Where a field is a
gloss or a condensation, the page says so.`,
  "hub.start.link": "New here? Which of the four to read first →",

  "start.lede": "One page for the reader who has heard of the four great Chinese novels and wants to know which one to open first: what each is, how long it runs, and where this site's tools would send you into it.",
  "start.th": ["Novel", "Written", "What it is", "Start here"],
  "start.rows": [
    ["Water Margin 水滸傳", "c. 1400 · 120 ch.", "The outlaws' tragedy: 108 stars who take the marsh, win every campaign they are sent on, and are destroyed by the reward.", "<a href=\"/chinese-literature/water-margin/\">The 108-star roster</a>, or <a href=\"/chinese-literature/water-margin/how-does-water-margin-end/\">how it ends</a>"],
    ["Journey to the West 西遊記", "c. 1592 · 100 ch.", "A pilgrimage comedy: one monk, three reformed monsters, eighty-one trials, and a scripture that arrives blank.", "<a href=\"/chinese-literature/journey-west/\">The demons index</a>, or <a href=\"/chinese-literature/journey-west/why-sun-wukong-500-years/\">why the monkey was pinned</a>"],
    ["Dream of the Red Chamber 紅樓夢", "c. 1791 · 120 ch.", "The family chronicle: a great house spending itself while its children marry into the wrong futures.", "<a href=\"/chinese-literature/red-chamber/jia-family-tree/\">The family tree</a>, or <a href=\"/chinese-literature/red-chamber/plot-summary/\">the story in five bands</a>"],
    ["Romance of the Three Kingdoms 三國演義", "c. 1522 · 120 ch.", "War and statecraft: forty years of the empire cut three ways, told battle by battle.", "<a href=\"/chinese-literature/three-kingdoms/\">The cast & battles tables</a>"],
  ],
  "start.paras": [
    "Any order works — the four share a shelf, not a storyline, and each is complete on its own. If you want the easiest entry, Journey to the West is the most immediately funny; the deepest is Red Chamber; Water Margin moves fastest.",
    "How long? Each runs past a hundred chapters. Red Chamber in English is the size of five volumes — about 2,339 pages of story — and our <a href=\"/chinese-literature/red-chamber/how-long/\">length guide</a> does the arithmetic in the open.",
    "Which translation? For Red Chamber see <a href=\"/chinese-literature/red-chamber/which-translation/\">the two aims, Hawkes and the Yangs</a>; for Journey to the West, <a href=\"/chinese-literature/journey-west/which-translation/\">Waley, Jenner and Yu</a>. Water Margin is best known in Sidney Shapiro's Outlaws of the Marsh.",
  ],
  "start.faq": [
    ["Which of the four great novels should I read first?", "Journey to the West if you want jokes and momentum; Red Chamber if you want the masterpiece; Water Margin if you want plot at speed. Three Kingdoms rewards readers who already like history and strategy."],
    ["Do I need to read the four novels in order?", "No — they share a canon, not a plot. Any one of them is a complete first novel."],
    ["Are the four great novels connected?", "Only as a shelf: all four read the same world of omens and officialdom, but no storyline carries from one to another."],
    ["Which of the four is the longest?", "Dream of the Red Chamber — about 2,339 pages of story in English across five volumes. Journey to the West runs 100 chapters; Water Margin and Three Kingdoms 120 each."],
  ],
  "start.seoTitle": "Where to Start: The Four Great Chinese Novels",
  "start.seoDesc": "Which of the four great Chinese novels to read first: what each is, how long it runs, and where to open it — one comparison page with every tool linked.",
  "start.crumb": "Where to start",
  "hub.seoTitle": "Four Great Chinese Novels — Characters & Family Trees",
  "hub.seoDesc": "The four great Chinese novels as lookup tools: all 108 Water Margin stars ranked, every Journey to the West demon, the Jia family tree, the era dated.",

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

  "tk.alt": "Ink-wash banner: a marsh boat, a mountain bridge, a stone staff and a moon-gate garden — one vignette per novel.",
  "tk.kicker": "Leaf IV · The three kingdoms · c. 1522",
  "tk.title": "Romance of the Three Kingdoms",
  "tk.titleZh": "三國演義",
  "tk.lede": `The era as two dated tables. The cast: the lords, strategists and warriors who moved
it, with courtesy names, allegiance and a condensed fate. The battles: which lord, which
strategist, which fight turned which province — every row citing the chapters, so a claim can
be checked against the novel. Painted leaves for the oath brothers and their rivals follow
when the ink is dry.`,
  "tk.cast": "The cast",
  "tk.ph": "Search name, courtesy name, fate…",
  "tk.all": (n) => `All ${n}`,
  "tk.side": { lord: "Lord", strategist: "Strategist", warrior: "Warrior" },
  "tk.lord": "Lords",
  "tk.strategist": "Strategists",
  "tk.warrior": "Warriors",
  "tk.alleg": { wei: "Wei", shu: "Shu", wu: "Wu", other: "—" },
  "tk.th": ["#", "Role", "Name", "Courtesy name", "Allegiance", "Fate"],
  "tk.era": "The era, dated",
  "tk.ph2": "Search battle, lord, year…",
  "tk.th2": ["Year", "Event", "Sides", "How it ended", "Ch."],
  "tk.seoTitle": "Romance of the Three Kingdoms — Cast & Battles Dated",
  "tk.seoDesc": "Every major figure of the Three Kingdoms — lord, strategist or warrior — with allegiance and a condensed fate, plus the era's battles dated by chapter.",
  "tk.crumb": "Three Kingdoms Cast & Battles",
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
  "hub.lede": "随筆ではなく、表・系図・索引・めくれる冊葉です。それぞれの道具は一行か一枝で答えます。誰が何位の星だったか、どの妖がどの法宝を持っていたか、賈府では誰が誰の母か。四大名著の四つの表がここに揃いました。最後の冊の肖像は、墨の乾くときに。",
  "hub.tools": "四つの冊",
  "hub.card.wm.t": "水滸伝 一百八星",
  "hub.card.wm.b": "全108星を座次順に。天罡か地煞か、綽号（あだ名）の漢字と英訳、姓名、そして九十回以降の結末の要約まで。冊葉を持つ星は、その人のページに水墨の肖像と回目順の大事記が続きます。",
  "hub.card.jw.t": "西遊記 妖怪と難",
  "hub.card.jw.b": "名前が残る障害の回を、場所・妖・法宝または法力・収め方・回目範囲まで一行に。旅の僧も天界の神も妖魔も、名のある者は全員が冊葉を持ちます。",
  "hub.card.rc.t": "紅楼夢 族譜と十二釵",
  "hub.card.rc.b": "広げられる賈氏の系図、判詞と訓読と結末を並べた金陵十二釵の冊、そして名前の出る人物一人に一葉。多くの葉の頭には、第五回で先に書かれていた予言の詩が置かれています。",
  "hub.card.tk.t": "三國演義",
  "hub.card.tk.b": "年代入りの二つの表にまとめました。群雄・軍師・武将の氏字と所属と結末、そして州を動かした戦いの数々——どの行も回目つきです。結義兄弟の冊葉は、墨の乾く後に。",
  "hub.why": "なぜ文章でなく表か",
  "hub.why.b": "原作はパブリックドメインですが、読み方は人それぞれです。表なら主張を検証できます——星と星、回と回を突き合わせる。散文ではそれが隠れます。訓読や要約にとどめた欄には、その旨をページに書いています。",
  "hub.start.link": "初めての方は「四大名著の読みはじめ」へ →",

  "start.lede": "四大名著を一度に見渡す一頁です。それぞれ何の本か、どれだけ長いか、このサイトのどこを開けばいいか——初めて読む人のための入口。",
  "start.th": ["小説", "成立", "どんな本", "読みはじめ"],
  "start.rows": [
    ["水滸伝", "1400年頃・120回", "好漢たちの悲劇。百八星が梁山泊に拠り、遣された戦には全て勝ち、恩賞に滅びる。", "<a href=\"/chinese-literature/water-margin/\">一百八星の座次表</a>、または<a href=\"/chinese-literature/water-margin/how-does-water-margin-end/\">結末の頁</a>"],
    ["西遊記", "1592年頃・100回", "取経の道中喜劇。僧一人、改心した妖怪三匹、八十一難。", "<a href=\"/chinese-literature/journey-west/\">妖怪の索引</a>、または<a href=\"/chinese-literature/journey-west/why-sun-wukong-500-years/\">五行山の五百年</a>"],
    ["紅楼夢", "1791年頃・120回", "名門の衰亡録。賈府が傾いていく間に、子らは間違った縁組みへ進む。", "<a href=\"/chinese-literature/red-chamber/jia-family-tree/\">賈氏の系図</a>、または<a href=\"/chinese-literature/red-chamber/plot-summary/\">五回帯のあらすじ</a>"],
    ["三國演義", "1522年頃・120回", "戦争と覇権。天下三分の四十年を、戦ごとに描く。", "<a href=\"/chinese-literature/three-kingdoms/\">群雄と戦いの年表</a>"],
  ],
  "start.paras": [
    "順番は自由です。四冊は一つの棚を共有しても筋を共有せず、どれ単体でも完結します。一番とっつきやすいのは西遊記、最も深いのは紅楼夢、最も速いのは水滸伝です。",
    "長さは？ どれも百回を超えます。紅楼夢の英訳は全五巻・本文だけで約2,339頁——<a href=\"/chinese-literature/red-chamber/how-long/\">分量の頁</a>が計算を公開しています。",
    "訳は？ 紅楼夢は<a href=\"/chinese-literature/red-chamber/which-translation/\">二つの狙い（霍克斯と楊憲益）</a>、西遊記は<a href=\"/chinese-literature/journey-west/which-translation/\">ウェーリー、ジェンナー、余国藩</a>の選択頁を。水滸伝はシドニー・シャピロ訳 Outlaws of the Marsh が定番です。",
  ],
  "start.faq": [
    ["四大名著はどれから読めばよい？", "笑いと勢いなら西遊記、最高峰なら紅楼夢、速い物語なら水滸伝。三國演義は歴史と戦略が好きな読者に報います。"],
    ["順番はある？", "ありません。四冊は一つの正典を共有しても筋は繋がらず、どれから読んでも完結します。"],
    ["四冊に繋がりは？", "棚としてのみ。同じ讖と官界の世界を読みますが、物語が冊を越えて続くことはありません。"],
    ["最も長いのは？", "紅楼夢——英訳で本文約2,339頁・全五巻。西遊記は一百回、水滸伝と三國演義は百二十回です。"],
  ],
  "start.seoTitle": "四大名著 どれから読むか",
  "start.seoDesc": "四大名著の読みはじめ：それぞれ何の本か、どれだけ長いか、どこを開けばいいか。全ツールへの近道を一枚の表に。",
  "start.crumb": "読みはじめ",
  "hub.seoTitle": "四大名著 人物検索・系図・回目索引",
  "hub.seoDesc": "中国の四大名著を検索用の表にまとめました。水滸伝の108星を座次順、西遊記の妖怪と法宝・収め方、紅楼夢の賈氏系図と十二釵の判詞、三國演義の群雄と戦いの年表。人物ページは肖像付き。",

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

  "tk.alt": "水墨の横断画——葦原の舟、山の橋、錫杖、月門の庭。四つの小説にそれぞれ一場面。",
  "tk.kicker": "冊 IV · 三國・1522年頃",
  "tk.title": "三國演義",
  "tk.titleZh": "三國志演義",
  "tk.lede": "時代を二つの年代付きの表にまとめました。群雄・軍師・武将の人柄を、氏字・所属・要約した結末まで一行に。官渡から赤壁、夷陵へ——州を動かした戦いは、どの行も回目をかいているので、原作と突き合わせて確かめられます。結義兄弟とその敵たちの冊葉は、墨の乾いた後に。",
  "tk.cast": "群雄・軍師・武将",
  "tk.ph": "姓名・氏字・結末を検索…",
  "tk.all": (n) => `全${n}`,
  "tk.side": { lord: "群雄", strategist: "軍師", warrior: "武将" },
  "tk.lord": "群雄",
  "tk.strategist": "軍師",
  "tk.warrior": "武将",
  "tk.alleg": { wei: "魏", shu: "蜀", wu: "呉", other: "群" },
  "tk.th": ["#", "立場", "姓名", "氏字", "所属", "結末"],
  "tk.era": "時代の年表",
  "tk.ph2": "戦い・君主・年を検索…",
  "tk.th2": ["年", "出来事", "陣営", "収まり", "回"],
  "tk.seoTitle": "三國演義 群雄と軍師と戦いの年表",
  "tk.seoDesc": "三國演義の群雄・軍師・武将を、所属と結末まで一行に。官渡から赤壁、夷陵まで、戦いは年代と回目つきの表で。",
  "tk.crumb": "三國演義 群雄と戦いの年表",
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
