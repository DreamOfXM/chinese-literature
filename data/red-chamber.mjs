// Dream of the Red Chamber — Jia family tree and the Twelve Beauties register.
// Tree: nested arrays [label, note, [children]]
export const TREE = [
  ["Jia Dai-shan × Grandmother Jia (Lady Shi)", "founders of the Rongguo branch", [
    ["Jia She × Lady Xing", "elder son", [
      ["Jia Lian × Wang Xifeng", "their daughter: Qiaojie; concubine Ping'er", []],
      ["Jia Yingchun", "daughter by a concubine", []],
    ]],
    ["Jia Zheng × Lady Wang", "second son", [
      ["Jia Zhu × Li Wan", "died young; their son: Jia Lan", []],
      ["Jia Yuanchun", "eldest daughter, Imperial Consort", []],
      ["Jia Baoyu", "the stone; protagonist", []],
      ["Jia Tanchun / Jia Huan", "by concubine Zhao", []],
    ]],
    ["Jia Min × Lin Ruhai", "daughter", [
      ["Lin Daiyu", "the crimson pearl flower", []],
    ]],
  ]],
  ["Jia Jing", "Ningguo branch, Taoist recluse", [
    ["Jia Zhen × Lady You", [
      ["Jia Rong × Qin Keqing", "Qin Keqing dies early", []],
    ]],
    ["Jia Xichun", "daughter, becomes a nun", []],
  ]],
  ["Xue family (relatives by marriage)", "Lady Xue's children", [
    ["Xue Baochai", "the gold locket", []],
    ["Xue Pan × Xia Jingui", "the oaf", []],
  ]],
  ["Shi Xiangyun", "Grandmother Jia's grand-niece", []],
  ["Miaoyu", "lay nun at Longcui nunnery", []],
  ["Maids of note", "", [
    ["Xiren", "Baoyu's chief maid", []],
    ["Qingwen", "Baoyu's maid, expelled and dies", []],
    ["Zijuan", "Daiyu's maid", []],
    ["Yuanyang", "Grandmother Jia's maid", []],
    ["Xiangling (Zhen Yinglian)", "Xue Pan's concubine, kidnapped child", []],
  ]],
];

// Twelve Beauties of Jinling — main register.
// Row: [name, verseZH, glossEN, fate]
export const BEAUTIES = [
  ["Lin Daiyu & Xue Baochai", "可叹停机德，堪怜咏絮才。玉带林中挂，金簪雪里埋。", "Alas the virtue that stopped the loom, alas the wit of the willow-catkin; a jade belt hangs in the forest, a gold pin lies buried in snow.", "one dies of grief, one marries into an empty room"],
  ["Jia Yuanchun", "二十年来辨是非，榴花开处照宫闱。三春争及初春景，虎兕相逢大梦归。", "Twenty years judging right from wrong; pomegranate bloom lights the palace. Yet the three springs cannot match the first — when tiger and rhinoceros meet, the great dream ends.", "dies in the palace as the house falls"],
  ["Jia Tanchun", "才自精明志自高，生于末世运偏消。清明涕送江边望，千里东风一梦遥。", "Bright of talent, high of aim, born as the house declines. At Qingming, tears by the river — a thousand li of east wind, one far dream.", "married far away, never returns"],
  ["Shi Xiangyun", "富贵又何为，襁褓之间父母违。展眼吊斜晖，湘江水逝楚云飞。", "What good was wealth, when her parents died in her infancy? In a blink she mourns the setting sun — the Xiang river runs off, the Chu clouds fly.", "widowed young, life scattered"],
  ["Miaoyu", "欲洁何曾洁，云空未必空。可怜金玉质，终陷淖泥中。", "She sought purity — was she ever pure? She called emptiness — was it ever empty? Pity the gold-and-jade substance, sunk at last into the mire.", "carried off when the house falls"],
  ["Jia Yingchun", "子系中山狼，得志便猖狂。金闺花柳质，一载赴黄粱。", "Her husband is the wolf of Zhongshan, savage once he prevails. A golden-bower flower-and-willow frame — one year, and she goes to the millet dream.", "abused to death within a year of marriage"],
  ["Jia Xichun", "勘破三春景不长，缁衣顿改昔年妆。可怜绣户侯门女，独卧青灯古佛旁。", "She saw through the three springs' short scene; a nun's black robe replaces her old adornment. Pity the embroidered-door marquis's daughter, alone by a green lamp and an old Buddha.", "becomes a nun"],
  ["Wang Xifeng", "凡鸟偏从末世来，都知爱慕此生才。一从二令三人木，哭向金陵事更哀。", "A common bird (凡鸟 = 鳳) come in the house's last age; all loved her talent. First obey, then order, then dismiss — weeping back to Jinling, her case more sad.", "dismissed, dies as the house collapses"],
  ["Jia Qiaojie", "势败休云贵，家亡莫论亲。偶因济刘氏，巧得遇恩人。", "When power fails, speak not of rank; when the house falls, speak not of kin. By chance, because her mother helped old Liu, she meets her benefactor.", "saved by Granny Liu, marries a farmer"],
  ["Li Wan", "桃李春风结子完，到头谁似一盆兰？如冰水好空相妒，枉与他人作笑谈。", "Peach and plum in spring wind bear their seed and end; who at the last is like a single pot of orchids? Ice-cold virtue, water-fine — all for nothing, a tale for others' talk.", "son succeeds; she gains nothing"],
  ["Qin Keqing", "情天情海幻情身，情既相逢必主淫。漫言不肖皆荣出，造衅开端实在宁。", "A phantom body in the sea and sky of passion; where passion meets, lust presides. Say not that all fault springs from Rong — the first breach was made in Ning.", "dies early; the house's first crack"],
];

// ---------- PEOPLE ----------
// Everyone in the Red Chamber index who gets a leaf of their own: the heir, the three
// registers of Jinling, the elders who run the two mansions, and the people the house
// keeps around it. Records with a verse carry the 判词 that was written about them in
// chapter 5, quoted in full at the top of their leaf. Chinese names and roles are
// simplified; quoted 回目 titles and 判词 lines keep the traditional text.
export const PEOPLE = [
  {
    id: 1, grp: "household",
    zh: "贾宝玉", en: "Jia Baoyu",
    nn: "怡红公子", nng: "Contemplation of Red",
    label: "荣国府二房的宝二爷",
    meta: [
      ["Born holding", "a piece of jade — the stone whose record this book claims to be"],
      ["Aversions", "the eight-legged essay; he calls men mud and water, girls water and flesh"],
      ["Names he answers to", "宝二爷, 绛洞花主, 怡红公子, and 祸胎 at home"]
    ],
    hook: "Born with a jade in his mouth and judged his family's ruin at his first birthday: he worships the girls of the house, saves none of them, and gives the jade back.",
    events: [
      ["ch. 2", "抓周試瞳", "The First Birthday Grab", "Laid out at his first birthday with brushes, ledgers and trinkets, he takes only the paint-boxes and the powder, and weeps until someone hands him a mirror. His father calls him a ruin."],
      ["ch. 3", "擲玉", "The Jade Thrown at the Floor", "He meets the cousin no one had mentioned, says he has seen her before, then hurls his jade at the floor when he learns she has none: how should she lack it and he keep it."],
      ["ch. 5", "神遊太虛", "The Registers of Jinling", "Asleep in his sister-in-law's room he is carried to the Land of Illusion, opens the cabinets holding the registers of Jinling, hears the songs of the house's fall — and understands nothing."],
      ["ch. 33", "承笞", "Bearing the Cane from His Father", "His father beats him near to death over a drowned maid and a boy he should not have befriended; bleeding, he tells the cousin he would die for them all, and it would be worth it."],
      ["ch. 34", "舊帕", "Two Old Handkerchiefs Sent", "He sends the girl two old handkerchiefs from his own use, with nothing written on them. She understands at once, and writes three verses on the cloth that night."],
      ["ch. 57", "試玉", "A Joke That Tries the Jade", "The maid Zijuan jokes that her mistress is being married away; he turns grey, loses speech and wit, and lies stunned for days while the jade on his neck goes dark."],
      ["ch. 78", "芙蓉誄", "An Elegy to the Hibiscus", "He writes an extravagant elegy to a servant girl he could not defend, addressed to the hibiscus she became, then edits its lines with the cousin he loves."],
      ["ch. 96", "調包", "The Bride Swapped in the Sedan", "His family cures his illness by telling him he is marrying his cousin and putting another bride in the sedan. That same night the cousin burns his poems and dies."],
      ["ch. 119", "却塵緣", "The Four Bows in the Snow", "He sits the provincial examination, passes, and vanishes on the way out of the hall — last seen in a red cape, bowing four times to his father in the snow."]
    ],
    end: "He hands back everything the house bargained for: the degree that redeems its name, then the jade, the body and the name with it. Chapter 120's edict gives him a Daoist title and the stone goes back to its mountain; his father glimpses a red cape in the snow, and when he turns there is no one.",
  },
  {
    id: 2, grp: "register",
    zh: "林黛玉", en: "Lin Daiyu",
    nn: "潇湘妃子", nng: "Xiaoxiang Consort",
    label: "绛珠仙草",
    verse: ["堪怜咏絮才，", "玉带林中挂。"],
    verseGloss: "Alas for the wit that matched the willow-catkin — a jade belt hangs, and hangs, in the wood.",
    painting: "A pair of withered trees, with a band of jade belt hanging from one of them.",
    meta: [
      ["Origin", "Only child of Lin Ruhai and Jia Min; grand-niece of Grandmother Jia on her mother's side"],
      ["Given", "Reborn to repay, with a lifetime of tears, the dew the Divine Stone once gave her"],
      ["Won", "First, second and third place in one chrysanthemum set (ch. 38) — the club's only sweep"]
    ],
    hook: "The register opens by folding her into Baochai's page: the sharpest wit in the house, spending itself to pay off a debt contracted before she was born.",
    events: [
      ["ch. 3", "拋親入都", "Leaving Home for Her Grandmother", "Parting from her father, she comes to live with her grandmother; Baoyu greets her as someone he has met before and hurls his jade away when she has none."],
      ["ch. 23", "共讀西廂", "Reading the Western Chamber", "Reads The Romance of the Western Chamber with Baoyu under the blossoms, and lets its borrowed phrases tell her what she will not say."],
      ["ch. 27", "葬花", "Burying the Flowers at the Mound", "Gathers the fallen petals to the flower mound and chants her Dirge for Flowers; Baoyu hears it from the far side of the ridge and faints away."],
      ["ch. 38", "詠菊奪魁", "The Chrysanthemum Prizes Won", "Her three chrysanthemum poems are judged first, second and third, the one morning her talent is crowned in public before the whole club."],
      ["ch. 76", "凹晶館聯詩", "The Cold Moon Buries a Poet", "Answers Xiangyun's 'a cold pool, a crane's shadow' with 'the cold moon buries a poet's soul' — the linked line that appals the listening nun."],
      ["ch. 98", "魂歸離恨天", "Burning Her Own Poems", "Burns her poems and dies at the hour the bridal lamps are lit for another bride, her debt of tears paid out to the last drop."]
    ],
    end: "In the 120-chapter text she dies on the night of Baoyu's wedding, having burned her drafts, and he wakes an orphan of his own love. Her half of the verse — a jade belt idling in a forest — is the register's own verdict: the tree is her surname, and the belt is a life spent hanging there.",
  },
  {
    id: 3, grp: "register",
    zh: "薛宝钗", en: "Xue Baochai",
    nn: "蘅芜君", nng: "Lady of Aralia",
    label: "金锁",
    verse: ["可叹停机德，", "金簪雪里埋。"],
    verseGloss: "Alas for the wifely virtue that stopped the loom — a gold hairpin buried in the snow.",
    painting: "A heap of snow, and under it a single gold hairpin.",
    meta: [
      ["Origin", "Daughter of the deceased Xue merchant of Jinling; brother to Xue Pan, niece to Lady Wang"],
      ["Given", "A gold locket from a priest, engraved Never part, never leave, and a cold-fragrance pill"],
      ["Won", "Judged first in the club's opening white-crabapple round, for being 'reserved and solid'"]
    ],
    hook: "Prudence, propriety and a locket cut to match a piece of jade: she is the bride the household votes for, and the register buries her gold pin under its own snow of duty.",
    events: [
      ["ch. 4", "進京待選", "Awaiting the Imperial Selection", "After her brother's killing of Feng Yuan, she travels up with her mother, waits on the imperial selection for ladies' offices, and settles at the Jia compound."],
      ["ch. 8", "比通靈", "Comparing Locket and Jade", "Lets Baoyu read the characters on her locket while he shows hers on his jade; the matching mottoes are overheard by Golden Oriole and never forgotten."],
      ["ch. 27", "戲彩蝶", "Butterflies at the Green Pavilion", "Chases butterflies as far as Blinking-green Pavilion, overhears a servant's scandal there, and saves herself by pretending she was only hunting Daiyu."],
      ["ch. 37", "偶結海棠社", "The Crabapple Poem Wins", "Backs Tanchun's poetry club, takes the name Lady of Aralia and wins the first round with a crabapple poem judged the most contained."],
      ["ch. 42", "蘭言", "Taking Her Aside with Medicine", "Takes Daiyu quietly aside over the wicked lines she quoted at the banquet, and ends years of barbed talk with a gift of medicine and honest advice."],
      ["ch. 97", "出閨成禮", "The Veil on a Reeling Groom", "Marries Baoyu by a scheme of Xifeng's — the veil raised over a groom out of his wits, drums sounding while someone upstairs stops breathing."]
    ],
    end: "She wins the marriage and nothing inside it: the tune paired with her verse says that even with the tray lifted to her eyebrows his heart is uneased. In ch. 120 Baoyu sits the examinations and goes back into the stone, leaving her a young wife at home with her gold pin still under the snow.",
  },
  {
    id: 4, grp: "register",
    zh: "贾元春", en: "Jia Yuanchun",
    nn: "凤藻宫尚书", nng: "Prefect of the Phoenix-Scroll Palace",
    label: "贤德妃",
    verse: ["二十年来辨是非，", "榴花开处照宫闱。", "三春争及初春景，", "虎兕相逢大梦归。"],
    verseGloss: "Twenty years telling right from wrong; where the pomegranate flowers open, the light fills the inner palace. The three springs never match the splendour of the first — when tiger and rhinoceros meet, the great dream comes home.",
    painting: "A bow, and on the bow a fragrant citron hanging.",
    meta: [
      ["Origin", "Eldest daughter of Jia Zheng and Lady Wang, taught palace etiquette from girlhood"],
      ["Rank", "Chosen as a palace lady, then raised to Consort of Virtue and Wisdom (ch. 16)"],
      ["Won", "The night homecoming of ch. 18, which gave the house its garden at ruinous cost"]
    ],
    hook: "The consort whose one permitted visit home buys the garden the whole novel lives in, and who calls the palace a place of danger and a gilded prison.",
    events: [
      ["ch. 16", "才選鳳藻宮", "Promoted Within the Palace Walls", "News reaches the Rong household that Yuanchun has been taken into the palace and promoted; the old servants are sent to learn the court ritual."],
      ["ch. 18", "省親", "The Homecoming on Lantern Night", "On the lantern night she is allowed home: she weeps in her grandmother's arms, names the new garden, bids Baoyu write of it, and warns him against idleness."],
      ["ch. 22", "燈謎", "The Firecracker Riddle", "Sends back a riddle from the palace — a firecracker, thrown away from its parent stock, its noise done and its red skins spent; Jia Zheng hears it as an omen."],
      ["ch. 95", "元妃薨逝", "Death of the Consort", "After a long illness the Consort dies; the Cheng-Gao text sets it in the same weeks as the loss of Baoyu's jade, and the house stops prospering with her."]
    ],
    end: "Her verse says the pomegranate bloom lights the palace gates, and that when tiger meets rhinoceros the great dream ends. The 120-chapter text obliges: she dies in ch. 95, and within a couple of years the imperial guards search the Ning mansion and her family's wealth is taken from them.",
  },
  {
    id: 5, grp: "register",
    zh: "贾探春", en: "Jia Tanchun",
    nn: "蕉下客", nng: "Guest Beneath the Plantains",
    label: "秋爽斋",
    verse: ["才自精明志自高，", "生于末世运偏消。", "清明涕送江边望，", "千里东风一梦遥。"],
    verseGloss: "Quick of wit and high of purpose, born in the house's last age with her luck running the other way. At Clear and Bright, tears at the river, watching — a thousand li of east wind, one dream far off.",
    painting: "Two people letting off a kite; a great sea, one big ship, and in it a girl hiding her face as she cries.",
    meta: [
      ["Origin", "Daughter of Jia Zheng by the concubine Zhao; sister of Jia Huan, half-sister of Baoyu"],
      ["Given", "Claims Lady Wang as her only mother and refuses, to her own pain, the concubine's kin"],
      ["Won", "One season as deputy head of the household, with Li Wan and Baochai, while Xifeng was ill"]
    ],
    hook: "The concubine-born daughter with a manager's hand on the tiller: she sees the house going under, patches what she can reach, and is carried off before the patch holds.",
    events: [
      ["ch. 37", "偶結海棠社", "The Card Founding the Poetry Club", "Writes the card founding the poetry club, names herself Guest Beneath the Plantains for the trees at her window, and sets the sisters their first subject."],
      ["ch. 55", "理家", "The Books Taken Up", "Given the books while Xifeng is laid up, her first act is to refuse extra mourning money for the concubine Zhao's dead brother, holding to the old precedent."],
      ["ch. 56", "除弊", "Letting the Garden Women Farm", "Lets the garden women farm the bamboo groves and fields on a surplus quota, so the estate earns from what it used to waste — the one reform with a head on it."],
      ["ch. 70", "風箏", "The Phoenix Kite Let Go", "Her phoenix kite goes up over the garden and the sisters slip their own strings to shed bad luck; the kite is lost in the distance and none of them likes it."],
      ["ch. 74", "抄檢", "The Lantern at the Dawn Search", "Meets the dawn search of the daughters' rooms with a lantern, a slap for the old woman who groped at her clothes, and the warning that great houses kill themselves first."]
    ],
    end: "Her verse puts tears at the river bank at Qingming and a thousand li of east wind, one far dream. In the 120-chapter text she is betrothed to the son of a southern commander and goes away over the water, so that the kite let go in ch. 70 is the last thing she does inside the garden.",
  },
  {
    id: 6, grp: "register",
    zh: "史湘云", en: "Shi Xiangyun",
    nn: "枕霞旧友", nng: "Old Friend of the Cloud Pillow",
    label: "英豪阔大",
    verse: ["富贵又何为，", "襁褓之间父母违。", "展眼吊斜晖，", "湘江水逝楚云飞。"],
    verseGloss: "What did all that wealth amount to? Father and mother gone while she was still in swaddling clothes. In the blink of an eye she mourns the slanting sun — the Xiang water runs off, the Chu clouds fly.",
    painting: "A few strands of drifting cloud, one bend of water passing away.",
    meta: [
      ["Origin", "Grand-niece of Grandmother Jia on the Shi side; both parents died in her first years"],
      ["Given", "Raised in her uncles' house, where she is put to needlework late into the night"],
      ["Won", "Host of the club's crab feast, named for it Old Friend of the Cloud Pillow (ch. 38)"]
    ],
    hook: "Loud, frank, found drunk on a stone step under the peonies: the register gives her orphanhood in one clause and then scatters her like clouds over the Xiang water.",
    events: [
      ["ch. 31", "麒麟", "The Double Star of the Trinket", "Picks up the little gold qilin Baoyu had dropped and keeps it, not knowing the chapter's own phrase: the trinket lays a double star to grow old together."],
      ["ch. 38", "螃蟹宴", "The Crab Feast She Staged", "Stages the club's second sitting on her own money, with crabs and chrysanthemums, and writes two answering crabapple poems to make up for arriving late."],
      ["ch. 49", "割腥啖膻", "Roasted Venison in the Snow", "Roasts venison in the snow with Baoyu, to Daiyu's teasing that they are eating raw flesh in a garden of plum blossoms, and asks for more."],
      ["ch. 62", "醉眠芍藥", "Asleep Among the Peony Petals", "Drops off asleep on the flagstones after drinking, covered in blown-out peony petals, her fan slipping from her hand — the maids sweep a stone's worth of flowers off her."],
      ["ch. 76", "凹晶館聯詩", "The Crane's Shadow on the Pool", "Keeps the linked verse going with Daiyu beside the cold pool by moonlight and throws out the crane's-shadow line that her friend's answer answers with death."]
    ],
    end: "Wealth was no use to her, the verse says, and ends with the Xiang river running off and the Chu clouds scattered. Her story is the register's own prediction more than the narrative's: a husband of matchless talent and looks, and then a widowhood as quick as the rain letting up.",
  },
  {
    id: 7, grp: "register",
    zh: "妙玉", en: "Miaoyu",
    nn: "槛外人", nng: "One Outside the Rails",
    label: "栊翠庵",
    verse: ["欲洁何曾洁，", "云空未必空。", "可怜金玉质，", "终陷淖泥中。"],
    verseGloss: "She wanted purity — was she ever clean? She spoke of emptiness — was it ever empty? Pity this substance of gold and jade: it ends sunk in the black mire.",
    painting: "One fine piece of jade, fallen into mud and dirt.",
    meta: [
      ["Origin", "Of a prosperous family at Suzhou; put into a nunnery as a child to cure her illnesses"],
      ["Given", "Kept the garden nunnery under her own roof, its tea, its cups and its standards of clean"],
      ["Rank", "Fifth leaf of the main roll — the only one of the Twelve already under a religious vow"]
    ],
    hook: "A nun who means to burn the cup a guest drank from and signs her card One Outside the Rails: her leaf carries the register's coldest line, purity sunk in muck.",
    events: [
      ["ch. 18", "入庵", "Entering Green-Gem Hermitage", "Fetched by formal invitation to take charge of the garden's nunnery, she moves into Green-Gem Hermitage with her own three attendants and refuses to be called on."],
      ["ch. 41", "品茶", "The Tea of Five-Year Snow", "Entertains the old dowager's party: an aged tea, snow swept off plum blossoms and buried five years, one cup for Baoyu, and a valuable old cup she means to burn after Granny Liu uses it."],
      ["ch. 63", "拜帖", "A Card Signed Outside the Rails", "Sends Baoyu a birthday card signed One Outside the Rails; he is too awed to reply until Xiu-yan tells him to answer as One Inside the Rails."],
      ["ch. 112", "遭劫", "The Drugged Nunnery", "Robbers find the nunnery open on the night her mind has slipped, drug the room and carry her off; the household, frightened of the affair, makes no search."]
    ],
    end: "Her verse says it before the story shows it: wanting purity she was never pure, calling things empty they were never empty, and the gold-and-jade substance sinks at last into the slime. The tune beside it had warned that the too proud are envied and the too clean is loathed by the world.",
  },
  {
    id: 8, grp: "register",
    zh: "贾迎春", en: "Jia Yingchun",
    nn: "菱洲", nng: "Water-Caltrop Islet",
    label: "二木头",
    verse: ["子系中山狼，", "得志便猖狂。", "金闺花柳质，", "一载赴黄粱。"],
    verseGloss: "Son-and-over, the wolf of Zhongshan, who runs wild as soon as he is in his luck. A flower-and-willow body from a golden bower: one year of it, and then the millet dream.",
    painting: "A fierce wolf running down a beautiful girl, with the look of eating her.",
    meta: [
      ["Origin", "Daughter of Jia She by a former concubine; the second miss of the Rong household"],
      ["Given", "A dead mother's threaded-gold phoenix ornament, quietly pawned by her own nurse"],
      ["Won", "One nickname in all the book, and it means a block of wood that cannot feel a needle"]
    ],
    hook: "Nicknamed Blockhead by the servants for never crying out when pricked: her leaf is the register's plainest warning that a gentle girl is not safe in a house that can sell her.",
    events: [
      ["ch. 71", "金鳳", "The Pawned Gold Phoenix", "Her nurse's daughter pawns the threaded-gold phoenix her late mother left and then pleads sickness to avoid paying it back; the second miss will not pursue it."],
      ["ch. 74", "搜檢", "The Maid She Would Not Save", "Her head maid Si-qi is found with a love-token from a man of the household; she neither speaks for the girl nor is able to keep her."],
      ["ch. 79", "誤嫁", "Sold for Five Thousand Taels", "Her father Jia She takes five thousand taels from Sun Shaosu and signs the match away; the protests of her brothers and stepmothers do not reach the second miss."],
      ["ch. 80", "哭訴", "Tears in the Old Garden", "Called home and let into the old garden, she can only tell the girls that her husband reckons her the price of his money and uses her like a servant."]
    ],
    end: "The painting before her verse shows a wolf about to eat a girl, and the verse reads her husband's surname from two characters: the wolf of Zhongshan, rampant the moment he prevails. A flower-and-willow frame from a golden bower — the register gives her one year, and the text gives no more.",
  },
  {
    id: 9, grp: "register",
    zh: "贾惜春", en: "Jia Xichun",
    nn: "藕榭", nng: "Lotus Terrace",
    label: "青灯古佛",
    verse: ["勘破三春景不长，", "缁衣顿改昔年妆。", "可怜绣户侯门女，", "独卧青灯古佛旁。"],
    verseGloss: "She saw through the three springs, that their season is never long: a nun's black robe, and all the adornment of earlier years gone at a stroke. Pity the daughter of embroidered gates and a marquis's door, lying alone by the green lamp and the old Buddha.",
    painting: "An old temple; inside it one beautiful woman, reading the sutras, sitting by herself.",
    meta: [
      ["Origin", "Daughter of Jia Jing of the Ning branch; the youngest miss, raised among her cousins"],
      ["Given", "A brush of the family's own school: she is put in charge of painting the garden it built"],
      ["Won", "A reputation for coldness — she cut off her own maid to keep the Ning family's gossip out"]
    ],
    hook: "The girl who paints the garden and then walks out of it: the only leaf in the main roll where the flight from the house is chosen, brush in hand, rather than suffered.",
    events: [
      ["ch. 37", "入社", "Joining the Club as Lotus Terrace", "Drawn into Tanchun's poetry club under the name Lotus Terrace, and warns the sisters beforehand that her brush, not her pen, is what anyone can ask of her."],
      ["ch. 42", "畫苑", "The Picture of the Garden", "Commissions herself out of the club's honour and into a year of work: the picture of the garden, with its silks, its brushes and its colours all argued over."],
      ["ch. 50", "賞雪", "Snow-Viewing in the Warm Studio", "Holds the snow-day party in her warm studio, and the old dowager orders a picture of the plum-blossom errand that sent Baoyu off to the nunnery for a branch."],
      ["ch. 74", "棄婢", "Casting Off the Maid", "A token from her own brother is found in her maid's box; every plea is made for the girl, and the fourth miss refuses them all, meaning to cut the Ning house off cleanly."]
    ],
    end: "Her verse sees through the three springs and trades last year's paint for a black robe; the painting before it is an old temple with one woman reading scripture. The 120-chapter text lets her have it: she will not stay in a house being taken apart, and takes the vow at the end.",
  },
  {
    id: 10, grp: "register",
    zh: "王熙凤", en: "Wang Xifeng",
    nn: "凡鸟", nng: "Common Bird",
    label: "凤辣子",
    verse: ["凡鸟偏从末世来，", "都知爱慕此生才。", "一从二令三人木，", "哭向金陵事更哀。"],
    verseGloss: "A common bird, come in the house's last age — and everyone knew, and admired, the talent she was born with. First compliant, then commanding, then dismissed: weeping her way back to Jinling, and that case sadder still.",
    painting: "One face of iceberg, and on top of it a single female phoenix.",
    meta: [
      ["Origin", "Niece of Lady Wang's family, brought up on household accounts, wife of Jia Lian"],
      ["Given", "The Rong mansion's whole bookkeeping, and reward and punishment over its servants"],
      ["Won", "Command of the Ning house's funeral, which nobody else in either mansion could have run"]
    ],
    hook: "The manager who runs money, servants and funerals: the register files her under a riddle — common bird, the character for phoenix taken apart — standing on a mountain of ice.",
    events: [
      ["ch. 3", "潑辣", "Laughter Before She Is Seen", "Comes laughing in from the courtyard before she is seen, takes charge of the new cousin's welcome, and is presented by Grandmother Jia as the house's famous devil — call her Feng the Hot Pepper."],
      ["ch. 13", "協理", "Order at the Ning Funeral", "Crosses to the Ning mansion to run the funeral of Qin Keqing: posts the duties, fixes the hours, flogs one servant for being late, and the disorderly house is orderly by morning."],
      ["ch. 15", "弄權", "The Betrothal Bought with Silver", "Takes three thousand taels to break a widow's betrothal through a magistrate in her name; the bride and her lover both die of it and she only grows bolder."],
      ["ch. 44", "潑醋", "The Birthday Day Jealousy", "Dances out of her own birthday party to find her husband with another woman on the bed, beats the wrong maid for it, and is pacified next day by his grandmother's order."],
      ["ch. 55", "小產", "The Books Taken from Her Bed", "Overworked by the year's turn and the old dowager's birthday, she miscarries, keeps her bed, and the books go to Tanchun, Li Wan and Baochai."],
      ["ch. 74", "抄檢", "The Night Search of the Rooms", "Walks the night search of the daughters' rooms with the whisperers at her elbow, and is turned back at Tanchun's door while a slap lands on the woman who taught them both."]
    ],
    end: "The register gives her three stages in one line — first obeyed, then commanding, then the woman-and-wood that means sent away — and weeping back to Jinling. The 120-chapter text keeps the shape of it: she dies as the house falls, her funeral thin, her daughter left to kin already pricing her.",
  },
  {
    id: 11, grp: "register",
    zh: "贾巧姐", en: "Jia Qiaojie",
    nn: "大姐", nng: "Big Sister, her name before it was changed",
    label: "荒村野店",
    verse: ["势败休云贵，", "家亡莫论亲。", "偶因济刘氏，", "巧得遇恩人。"],
    verseGloss: "When the fortune is broken, say no more of rank; when the house is lost, say no more of kin. Only because, by chance, she succoured the family of Liu, by chance did she meet the one who saved her.",
    painting: "A desert village and a wild country inn, with one beautiful woman there spinning thread.",
    meta: [
      ["Origin", "Daughter of Wang Xifeng and Jia Lian, the one girl of the next generation to grow up"],
      ["Given", "Born on the unlucky first of the fifth, so her name was built on the word for tricky"],
      ["Saved", "Taken in by Granny Liu's family when her own uncle and a kinsman were already pricing her"]
    ],
    hook: "The baby of the roll, whose fate turns on one small kindness her mother did not mean as one: the leaf that pays a debt of hospitality in a house that paid nothing else.",
    events: [
      ["ch. 41", "換佛手", "Trading the Buddha-Hand Toy", "Quarrels with Granny Liu's grandson Ban'er over a hand of the Buddha and a whistle, and the nurses have to switch the two toys to stop the noise."],
      ["ch. 42", "命名", "Named to Put Off Bad Luck", "Her mother asks the old woman to name the child born on the unlucky first of the fifth; Granny Liu chooses the tricky 巧 and predicts the name will hold off whatever is coming."],
      ["ch. 113", "託村嫗", "An Unspoken Errand to Granny Liu", "On her deathbed Xifeng gives the household's remembrance to the same Granny Liu now lodging in the garden, and the old woman hears the unspoken errand for the girl."],
      ["ch. 117", "議賣", "A Cousin Sold South", "With her mother buried and her father away, an uncle and a kinsman settle to carry the girl off and sell her south as a concubine for a good price."]
    ],
    end: "Her verse tells her to say no more of rank when power fails, no more of kin when the house falls: because her mother once succoured the family of Liu, she meets the benefactor. The 120-chapter text takes her to the country and marries her to their son, the painting's woman spinning at an inn.",
  },
  {
    id: 12, grp: "register",
    zh: "李纨", en: "Li Wan",
    nn: "稻香老农", nng: "Old Farmer of Paddy Fragrance",
    label: "凤冠霞帔",
    verse: ["桃李春风结子完，", "到头谁似一盆兰？", "如冰水好空相妒，", "枉与他人作笑谈。"],
    verseGloss: "Peach and plum in the spring wind: once the fruit is set, they are done. In the end, who is like one pot of orchids? Water fair and cold as ice — envied for nothing, and only a laughing tale for other folk.",
    painting: "A flourishing pot of orchids, and beside it a beautiful woman in a phoenix cap and rosy cape.",
    meta: [
      ["Origin", "Daughter of a Jinling book-keeping officer; widow of Jia Zhu and mother of Jia Lan"],
      ["Given", "A young widow's portion in a rich house: no accounts, no authority, one son and one garden"],
      ["Won", "President and judge of the poetry club by consent, the sister nobody quarrels with"]
    ],
    hook: "Jia Zhu's widow, living in a cottage of thatch and paddy-smell out of the household's way: her verse grants her everything, far too late to be anything at all.",
    events: [
      ["ch. 37", "主社", "Presiding Over the Poetry Club", "Takes the club's chair under the name Old Farmer of Paddy Fragrance, sets the first subject and awards the opening round, and does not deign to write herself."],
      ["ch. 55", "兼理", "Ruling the Household in Proxy", "Set over the household with Tanchun and Baochai while Xifeng keeps her bed, she wields the least of the three and gives the household the least trouble of the three."],
      ["ch. 63", "梅籤", "Drawing the Old Plum Stick", "Draws the old plum at the birthday draw — bamboo fence, thatched hut, pleased with herself in the frost — and the stick goes round as her portrait."]
    ],
    end: "Her verse puns her name into the peaches and plums that bear fruit and are done with, and asks who at the end can match one pot of orchids — her son. The 120-chapter text grants it: he rises and the rosy cape comes to her, and the tune beside the verse calls it a tale for other people's laughter.",
  },
  {
    id: 13, grp: "register",
    zh: "秦可卿", en: "Qin Keqing",
    nn: "兼美", nng: "Combined Beauty",
    label: "警幻之妹",
    verse: ["情天情海幻情身，", "情既相逢必主淫。", "漫言不肖皆荣出，", "造衅开端实在宁。"],
    verseGloss: "Passion's sky and passion's sea conjure a body of passion; where passions once meet, excess is sure to preside. Do not say the worthless sons all came out of Rong — the making of the breach began, in truth, in Ning.",
    painting: "A high tower and a wide hall, and in it a beautiful woman hanging from the beam.",
    meta: [
      ["Origin", "Taken from a charity home as a baby by the officer Qin Ye; wife of Jia Rong"],
      ["Given", "A coffin built for a princely house, and a guard's title bought for her husband"],
      ["Won", "The last leaf of the main roll and the first death of the novel"]
    ],
    hook: "She shows Baoyu the register, keeps his secret, and dies: the leaf on which the poem stops hinting and says the ruin began in the Ning house, not the Rong.",
    events: [
      ["ch. 5", "入夢", "Marriage in the Land of Illusion", "In the Land of Illusion she is married to Baoyu under her own courtesy name, and it is she who teaches him to know desire before the roll of the Twelve is opened."],
      ["ch. 10", "論病", "The Physician Feels a Wasted Pulse", "Ailing more than a month and hidden from the men of the house, she is felt for by the physician Zhang Youshi, whose grave diagnosis of a wasted pulse frightens everyone."],
      ["ch. 13", "託夢", "The Dream of the School Lands", "Coming to Wang Xifeng in a dream at the last moment, she warns that the family's prosperity will not hold another generation and leaves a plan of school lands and sacrificial fields."],
      ["ch. 14", "出殯", "The Coffin Wood Above Her Rank", "Buried with a costly wood no one is certain she was entitled to and a title bought for her husband, her procession carries the whole capital's carriages out to the Ning ground."]
    ],
    end: "Her leaf is painted with a high hall and a beauty hanging from its beam, and the verse tells the reader not to blame the Rong house for the ruin. The 120-chapter text spares the hanging and keeps the omen: an illness nobody can name, a funeral past the house's means, ruin after it.",
  },
  {
    id: 14, grp: "sub",
    zh: "香菱", en: "Xiangling",
    nn: "秋菱", nng: "Autumn Caltrop",
    label: "英莲",
    verse: ["根并荷花一茎香，", "平生遭际实堪伤。", "自从两地生孤木，", "致使香魂返故乡。"],
    verseGloss: "One root with the lotus, one stalk fragrant: all the meetings of her life are matter for grief. Ever since the two earths grew the lone tree — the character for osmanthus — the fragrant soul has returned to her old home.",
    painting: "One osmanthus tree, and beneath it a pool with the water gone and the mud dried up, its lotus withered and its roots spoiled.",
    meta: [
      ["Origin", "Born Zhen Yinglian, daughter of the Zhen Shiyin of the first chapter, stolen at three"],
      ["Given", "Sold twice over by one trafficker and lost to the Xue house by a bought verdict"],
      ["Won", "Taken in as the club's pupil and praised above the rule on her third attempt at the moon"]
    ],
    hook: "Lost as a toddler in the novel's own opening and sold back into the family she was taken from: she heads the second roll, proof the register reaches below the Twelve.",
    events: [
      ["ch. 1", "被拐", "Lifted Up to See the Lanterns", "Lifted up at a servant's arm to see the lanterns on the fifteenth night and never found again; the Zhen family's fire finishes what the trafficker started."],
      ["ch. 4", "亂判", "Sold to the Stronger Buyer", "Two men produce bonds for her; the magistrate who once owed her grandfather money finds for the stronger buyer, and she enters the Xue house as a concubine."],
      ["ch. 48", "學詩", "Learning Verse by Heart", "Moves into the garden and begs Daiyu for lessons, reading Wang Wei and Li Bai until she can quote them back in the middle of a sentence."],
      ["ch. 49", "詠月", "The Third Attempt at the Moon", "Her first two poems on the moon are stiff and her third is so much better than the rule that the whole club names her mad for verse."],
      ["ch. 79", "改名", "Re-Baptised Autumn Caltrop", "Xue Pan brings home Xia Jinggui as principal wife, and the new mistress takes away her very name, re-baptising her Autumn Caltrop to spite her."],
      ["ch. 80", "屈棒", "Beaten on a False Poison Charge", "Falsely charged by Jinggui with poisoning her, she is beaten by Xue Pan on the strength of it and takes to the wasting illness her painting shows."]
    ],
    end: "Her leaf in the second roll says the root is one with the lotus and that when two earths grow one lonely wood the fragrant soul goes back to her old home. The 120-chapter text follows the jealousy and the beating; the osmanthus over her cracked pool is her mistress's own surname.",
  },
  {
    id: 15, grp: "deputy",
    zh: "晴雯", en: "Qingwen",
    nn: "芙蓉女儿", nng: "Daughter of the Hibiscus",
    label: "霁月",
    verse: ["霁月难逢，彩云易散。", "心比天高，身为下贱。", "风流灵巧招人怨，寿夭多因毁谤生，多情公子空牵念。"],
    verseGloss: "A clear moon after rain comes once in a lifetime; a coloured cloud is easy to scatter. Heart taller than the sky, born to the lowest of places; her loveliness and wit fetch other people's resentment, her early death comes mostly of the slanders, and her affectionate young lord thinks of her all for nothing.",
    painting: "Nothing but a page washed in wet ink, all dark cloud and foul mist.",
    meta: [
      ["Origin", "Bought by a steward, presented to Grandmother Jia, and handed to Baoyu as his best maid"],
      ["Given", "No contract and no kin; Lady Wang's own phrase for her is rootless and groundless"],
      ["Won", "The mending of the gold-feathered cape, which nobody else in the house could do"]
    ],
    hook: "Prettiest and sharpest-tongued of Baoyu's maids: the third roll gives her a clear moon nobody catches and a coloured cloud nobody holds.",
    events: [
      ["ch. 31", "撕扇", "Tearing Fans for the Sound", "Sulks over the rain, tears a fan at Baoyu's first invitation and then keeps tearing them for the sound, to the chapter's own price of a thousand in gold."],
      ["ch. 34", "贈帕", "Carrying Two Old Handkerchiefs", "Carries two of Baoyu's old handkerchiefs to Daiyu on an errand he never wrote out, and is the only servant in the book trusted with the message."],
      ["ch. 52", "補裘", "Mending the Fur Cape by Lamplight", "A foreign cape is burned through and the whole household cannot mend it; sick as she is she takes up the lamp and works the pearl silk out to match."],
      ["ch. 74", "翻箱", "Turning Out Her Own Box", "Meets the night searchers at her own box by turning its whole contents out in a single crash, the one maid in the garden who dares treat them with contempt."],
      ["ch. 77", "抱屈", "The Pared Nails Given", "Fetched out of her fever in her underwear and handed back to her own relations to die, she gives Baoyu her pared nails and the shirt she wears next to her skin."],
      ["ch. 78", "作誄", "The Elegy at the Hibiscus Pool", "Is made by Baoyu's prose elegy at the hibiscus pool into the spirit set over its flowers, and he reads the draft aloud to Daiyu without knowing which of them he mourns."]
    ],
    end: "Her verse is the plainest in the register and she answers it line by line: heart higher than heaven, station the meanest in the house, grace enough to draw resentment, a short life made by slander and a fond young lord grieving for nothing. She is dead within a day of ch. 77 in the 120-chapter text.",
  },
  {
    id: 16, grp: "deputy",
    zh: "花袭人", en: "Xiren",
    nn: "珍珠", nng: "Pearl, the name she came in with",
    label: "花气袭人",
    verse: ["枉自温柔和顺，", "空云似桂如兰。", "堪羡优伶有福，", "谁知公子无缘。"],
    verseGloss: "All her warmth and obedience for nothing, and vainly called one like osmanthus and orchid. One may envy the strolling player his good fortune — who could have known that the young lord was to have no part with her?",
    painting: "One cluster of fresh flowers, and a bed with its mat worn through.",
    meta: [
      ["Origin", "Sold by her family for their debts and named Pearl before Baoyu renamed her"],
      ["Given", "Baoyu's bed and his confidence from childhood, and the first steps he took with either"],
      ["Won", "Lady Wang's private nomination as a concubine-consort, with her wage doubled"]
    ],
    hook: "Loyal, prudent and the register's torn sleeping mat: the maid who gets everything she asks for and keeps least of all, since her verse gives her an actor instead of a master.",
    events: [
      ["ch. 3", "更名", "Renamed from a Line of Verse", "Baoyu hears that her name is Pearl, learns her family surname is Flower, takes a line of old verse about overwhelming fragrance for her and reports the change to her mistress."],
      ["ch. 6", "雲雨", "Going to Bed After the Dream", "The only one who dares go to his bed after the register dream, and so the one the chapter says in a clause it never returns to."],
      ["ch. 19", "箴規", "Three Reforms Won by a Feint", "Lets it be believed that her brother has come to take her home, and only when Baoyu has promised three reforms does she let the story fall."],
      ["ch. 28", "換巾", "The Sash at the Chest's Bottom", "Takes a sash from Baoyu that he had received in an exchange of gifts with the actor Jiang Yuhan, and puts it at the bottom of a chest without a second thought."],
      ["ch. 34", "進言", "The Quiet Words That Settled It", "Answers Lady Wang on the beating, speaks of the danger the garden has become, and is thanked in the way that settles her own place for life."],
      ["ch. 63", "桃籤", "Draws the Peach Blossom Lot", "Draws the peach blossom at the birthday banquet, its line promising another year of spring, and the company laugh because a girl surnamed Flower could draw nothing else."]
    ],
    end: "The register's cluster of flowers and a worn-out mat is her name written in rebus, and its verse is flat: waste all that gentleness, call her osmanthus and orchid in vain — the player gets the fortune, the young lord none. In the 120-chapter text she marries Jiang Yuhan after Baoyu is lost.",
  },
  {
    id: 17, grp: "household",
    zh: "贾母", en: "Grandmother Jia",
    nn: "史太君", nng: "Lady Shi, the Dowager",
    label: "荣国府老太君",
    meta: [
      ["Generation", "widow of Jia Dai-shan, second Duke of Rongguo, and of the Marquis of Jinling's Shi house"],
      ["Holds", "the house's reserve money, and the last word on any marriage inside it"],
      ["Cost", "her indulgence is the licence Baoyu lives by and his father keeps failing to take away"]
    ],
    hook: "The house's last real authority: she fetched the orphan Daiyu to Jinling, shelters Baoyu from her son's bamboo, and keeps her gold in her own rooms.",
    events: [
      ["ch. 3", "引黛玉進京", "Sending Boats for the Orphan", "After her daughter Jia Min dies she sends boats and her own old servants to fetch the child Daiyu to Jinling, and puts her in her own rooms — first of the orphans she collects."],
      ["ch. 29", "清虛觀打醮", "A Match Refused at the Abbey", "She takes the whole household to the Qingxu Temple to pray for Baoyu's health, and turns down the Taoist abbot's offer of a match for him, saying the child's fate will not bear an early wife."],
      ["ch. 40", "兩宴大觀園", "Two Banquets in the New Garden", "She gives two banquets in the new garden for Granny Liu's sake, picks out the old silk she keeps for the lodge windows, and is unsettled by how bare Baochai's chamber is."],
      ["ch. 54", "破陳腐舊套", "Pulling Apart the Stock Tale", "At the New Year gathering she pulls apart a storyteller's tale of gifted scholars and beauties, mocking the stock daughter who throws away her training to meet a man."],
      ["ch. 107", "散餘資", "Dividing Her Hoarded Silver", "After the confiscation she brings out her own hoarded gold and silver and divides it among the sons, daughters-in-law and grandchildren, so the house can pay its dead and keep its servants."]
    ],
    end: "She dies in chapter 110, past eighty and untroubled, having already handed out her savings to keep the house standing; chapter 111 buries her in full splendour, and the text never asks her to repent the bride-substitution that killed Daiyu.",
  },
  {
    id: 18, grp: "household",
    zh: "贾赦", en: "Jia She",
    nn: "大老爷", nng: "the Eldest Master",
    label: "荣国府袭爵的长房",
    meta: [
      ["Rank", "Grandmother Jia's eldest son; holder of the First Class Generalship"],
      ["House", "lives apart behind a black-oiled gate, his rooms full of concubines"],
      ["Cost", "his appetites — a maid, a dead man's fans, a daughter sold — fill the family's indictment"]
    ],
    hook: "He inherited the higher rank and none of the weight: a First Class General with an empty purse who beats his own heir for calling him a shabby extortioner.",
    events: [
      ["ch. 46", "為夫求妾", "To Beg for Yuanyang by Proxy", "He sends his wife to beg for Grandmother Jia's head maid Yuanyang, counting on the keys she keeps; when the girl swears in front of the old lady, Lady Shi's fury lands on him."],
      ["ch. 48", "奪古扇", "Twenty Fans and a Fabricated Debt", "He covets Shi Daizi's twenty antique fans; when the man will not sell, Jia Yucun fabricates a debt to get them. Jia Lian's remark that it was shameful earns him his father's stick."],
      ["ch. 79", "得價嫁女", "His Daughter Pledged for a Debt", "Owing the Sun family five thousand taels, he hands his daughter Yingchun over to Sun Shaozu as interest on the loan, and does not answer when her own household pleads with him."],
      ["ch. 105", "查抄寧府", "The Elder Branch Sealed and Listed", "Imperial officers seal the gates and inventory the goods; the charges pinned to the elder branch are exactly the fans and the private dealings with officials in Ping'an Prefecture."]
    ],
    end: "The confiscated estate settles the account: he is found guilty for the fans and the private dealings, stripped of his rank and sent into exile, and an imperial amnesty afterwards lightens the sentence without restoring his place. The headship of Rongguo passes quietly to his younger brother's line.",
  },
  {
    id: 19, grp: "household",
    zh: "贾政", en: "Jia Zheng",
    nn: "二老爷", nng: "the Second Master",
    label: "荣国府二房的当家人",
    meta: [
      ["Rank", "second son; vice-director in the Ministry of Works, granted the post by imperial grace"],
      ["Method", "keeps the family school, and answers his son's brilliance with the bamboo"],
      ["Ends", "after the raid it is he, not the elder branch, who is handed the title back"]
    ],
    hook: "The Confucian discipline the novel cannot make work: a careful, dull official who reads his son as a ruinous dandy and beats him within an inch of the jade.",
    events: [
      ["ch. 17", "試才題額", "Testing the Boy at the Plaques", "He walks Baoyu through the newly built garden making him name the plaques and couplets, testing the boy in front of his clients — and approving almost none of it aloud."],
      ["ch. 33", "大承笞撻", "The Near-Fatal Flogging", "His younger son whispers that Baoyu drove a maid to the well, and a prince's men come to the gate demanding his favourite actor; he beats Baoyu so hard that Lady Shi threatens to leave for Nanjing."],
      ["ch. 78", "同詠姽婳", "Setting the Boys to the Heroine", "Commanded by his guests to have the boys compose on the heroine Lin Sihniang, he sets Baoyu and Jia Lan to the task and cannot help seeing which of them has the talent."],
      ["ch. 107", "復襲世職", "The Hereditary Title Restored", "After the confiscation the throne returns the Rongguo title to him, along with the estate and the money his mother has just distributed, and the household re-forms around his second house."]
    ],
    end: "He outlives the disaster that his brother invited: reinstated to the dukedom, he survives to see Baoyu pass the provincial examination and then walk off into the snow with a monk and a Taoist, and the book closes with the family school reopened under his name and the son he beat gone past finding.",
  },
  {
    id: 20, grp: "household",
    zh: "邢夫人", en: "Lady Xing",
    nn: "大太太", nng: "the Eldest Madam",
    label: "荣国府长房的续弦",
    meta: [
      ["Married", "second wife of Jia She; stepmother of Jia Lian and of the young mistress Yingchun"],
      ["Epithet", "the novel's own name for her in chapter 46 is simply the awkward woman"],
      ["Cost", "her one act of spite — an obscene purse handed on — is what burns the garden down"]
    ],
    hook: "Jealous, penurious and always second: she hunts a maid for her husband, is scolded for it in public, and takes her only revenge with a purse found in the grass.",
    events: [
      ["ch. 46", "親說媒", "Pleading the Match Herself", "Over Xifeng's warnings she goes herself to talk Grandmother Jia's head maid into being her husband's concubine, and is then made to stand and take the old lady's rebuke in front of the whole family."],
      ["ch. 73", "遞繡春囊", "The Embroidered Purse Handed Over", "A silly little maid picks up an embroidered purse of quite indecent pattern in the garden; Lady Xing gets hold of it and has it carried across to Lady Wang, whose nerve gives way at the sight of it."],
      ["ch. 74", "縱僕抄園", "The Search Her Servant Whispered", "Her own serving-woman, insulted by a maid in Baoyu's rooms, whispers that the garden is full of wantons; the search of the trunks that follows is done with Lady Xing's approval and Lady Wang's hand."]
    ],
    end: "The book refuses her any reckoning: her husband disgraced and exiled, her step-daughter abused to death by her husband within a year of the wedding, and still she keeps her rank and her purse. The restoration is written without her, and the text grants her no death scene and no repentance.",
  },
  {
    id: 21, grp: "household",
    zh: "王夫人", en: "Lady Wang",
    nn: "太太", nng: "the Madam of the second house",
    label: "荣国府二房的当家媳妇",
    meta: [
      ["Kin", "elder sister of Aunt Xue, aunt to Xifeng and Baochai, mother of Yuanchun, Zhu and Baoyu"],
      ["Method", "pious, soft-spoken, and the one who has pretty maids thrown out of the gates"],
      ["Blindness", "she never once suspects the daughters-in-law she trusts and the son she fears"]
    ],
    hook: "The gentlewoman who kills with propriety: two maidservants die on her conscience, and the marriage she arranges to save her son's wits destroys her own niece.",
    events: [
      ["ch. 32", "金釧投井", "A Box and the Well", "Catching a favourite maid joking with Baoyu, she boxes her ear and turns her out; the girl drowns in the well before morning, and Lady Wang settles it with silver and a change of clothes."],
      ["ch. 74", "夜查抄檢", "The Night Raid on the Trunks", "The purse and a servant's spite persuade her that the garden is full of wantons. She lets every maid's trunk be rifled that night, and it turns up one love letter and nothing worth the harm."],
      ["ch. 77", "逐晴雯", "Driving Out the Sick Maid", "Warned that a pretty maid is a snare to her son, she has the sick Qingwen carried out of the house in her nightclothes to die at a relative's hut, where Baoyu goes to her and writes the elegy."],
      ["ch. 96", "掉包計", "A Bride Swapped in the Hour", "To save her son's wits she falls in with her niece's plan: the boy is told he is getting Daiyu and is given Baochai, while the girl he was promised dies at the hour of the ceremony."]
    ],
    end: "She is the survivor her own caution promised: the house comes back to her husband, her elder son's widow and orphan are still at the family school, her daughter the Consort is dead in the palace, and the second son she broke rules to save walks out of the world at the last, past any finding.",
  },
  {
    id: 22, grp: "household",
    zh: "贾珍", en: "Jia Zhen",
    nn: "珍大爷", nng: "the Chief Master of Ning",
    label: "宁国府当家的族长",
    meta: [
      ["Office", "head of the Jia clan and master of Ningguo, after his father gave up the rank for alchemy"],
      ["Register", "the Twelve Beauties' doom-line for the house: the first breach was made in Ning"],
      ["Reputation", "the servants' saying that nothing in his gate is clean but the two stone lions"]
    ],
    hook: "He rules the elder branch and treats the rule as a licence: no mourning, no banquet, no daughter-in-law of his own house is beyond him, and the house pays for all of it.",
    events: [
      ["ch. 14", "厚殮秦氏", "A Nobleman's Coffin Board", "As head of Ningguo he spares nothing for Qin Keqing's obsequies: a coffin board cut for a nobleman, a palace rank bought for her husband, and Xifeng fetched across to run the mourning."],
      ["ch. 64", "戲尤姊妹", "Court Paid in the Mourning Months", "Galloping home to his father's coffin, he makes first for the two young You sisters who have come to help with the mourning, and spends the mourning months paying court to the elder of them."],
      ["ch. 75", "祠堂悲音", "A Sigh in the Ancestral Hall", "He keeps the Mid-Autumn banquet at Ningguo running till the small hours with singers and dice; the only rebuke is a long sigh heard in the ancestral hall while the household is at table."]
    ],
    end: "Ningguo is the mansion the officers search first, and his charges are his conduct at two funerals. Stripped of his rank he is sent into exile, his compound left to Lady You; the amnesty that afterwards reassembles the family hands its honours to Jia Zheng's branch, not to his.",
  },
  {
    id: 23, grp: "household",
    zh: "尤氏", en: "Lady You",
    nn: "珍大奶奶", nng: "Mistress Zhen of Ningguo",
    label: "宁国府的当家奶奶",
    meta: [
      ["Married", "second wife of Jia Zhen; the two young You are her stepmother's daughters"],
      ["Manages", "keeps Ningguo's books and servants while its master is at his pleasures"],
      ["Limits", "cannot stop a single one of his scandals and is made to answer for all of them"]
    ],
    hook: "Ningguo's housekeeper and the only person in it with manners: she buries her father-in-law single-handed, and takes the storm that her husband's behaviour raises.",
    events: [
      ["ch. 14", "托病讓權", "Yielding the Keys to Xifeng", "Just at Qin Keqing's collapse she falls ill — or seems to — and stands aside, so that it is Xifeng who is fetched across to run Ningguo through the most scandalous fortnight of its year."],
      ["ch. 63", "獨理喪事", "The Mourning Opened Alone", "Her father-in-law Jia Jing dies of his own elixir while her husband is away; she has the body coffined, the servants paid and the mourning opened before Jia Zhen comes galloping home."],
      ["ch. 68", "鳳姐登門", "Weeping and Rage at the Gate", "You Erjie has been lured into the garden by Xifeng, and Ningguo is now the guilty house: Xifeng comes weeping and raging through its gates, her husband quits the room, and silver closes the row."]
    ],
    end: "She is left holding the wreck: two funerals, a search of her own gates, her husband sentenced away. The later chapters keep her in charge of a thinned Ningguo and give her neither a death nor a clearance; the blame the register lays at Ningguo was never meant for her.",
  },
  {
    id: 24, grp: "household",
    zh: "贾琏", en: "Jia Lian",
    nn: "琏二爷", nng: "Second Master Lian",
    label: "荣国府长房的办事人",
    meta: [
      ["Office", "runs the Rongguo household's business with Xifeng; a bought provincial vice-magistracy"],
      ["Married", "husband of Wang Xifeng, Ping'er in his bed, and You Erjie wed in secret outside the gate"],
      ["Cost", "every private errand of his — a girl, a fan, a letter for his father — returns as a charge"]
    ],
    hook: "The family's fixer: he carries a funeral south, washes his father's crimes in silver, marries a woman outside the gate, and loses her to his wife without a protest.",
    events: [
      ["ch. 16", "送黛玉歸喪", "The Coffin Brought South", "When Lin Ruhai dies he is sent south to see the funeral done and the coffin, the servants and the luggage brought back to Jinling — the one commission he fills without a stain on it."],
      ["ch. 21", "平兒掩跡", "The Lock of Hair Hidden", "An affair with the wife of a serving man leaves a lock of hair in his coat; Ping'er hides the proof from Xifeng and lets him squirm, the book's clearest view of how his marriage actually works."],
      ["ch. 48", "平安州寄書", "The Bought Vice-Magistrate", "His father sends him to Ping'an Prefecture to lobby a provincial official; the business succeeds and Jia She buys him a vice-magistrate's post out of it — the transaction his branch is damned for."],
      ["ch. 65", "偷娶二姐", "Married in Secret Two Doors Off", "With Jia Zhen's and Jia Rong's help he marries You Erjie in a house in the Flowery Bough Lane, two doors from his wife, and keeps it there until a servants' quarrel tells it to the wrong ear."]
    ],
    end: "He outlives his wife's ascendancy: the searches and his father's conviction cost him his post, an amnesty gives it back, and the last chapters leave him running a wrecked household with Ping'er his only stay and his daughter hidden from a marriage his own kin arranged.",
  },
  {
    id: 25, grp: "household",
    zh: "薛蟠", en: "Xue Pan",
    nn: "呆霸王", nng: "the Obstinate Tyrant, his byname",
    label: "金陵薛家的公子",
    meta: [
      ["House", "heir of the Xue firm of the register — pearls like dust, gold like iron"],
      ["Breeding", "an idle merchant's boy who would rather buy a painting than read its signature"],
      ["Crimes", "a street killing over a bargained girl, and a second death abroad that money hushes"]
    ],
    hook: "The rich fool the plot needs twice: he bought one girl and had her first buyer killed for her, then married the shrew who finishes what his own temper started.",
    events: [
      ["ch. 4", "買婢致命", "Buying a Girl Already Sold", "He buys the little girl already sold to the Feng family, and his dependants beat Feng Yuan to death over her in the street; the magistrate who buries the case owes his post to their money."],
      ["ch. 28", "席上胡謅", "Mangling the Wine Game", "At Feng Ziying's banquet he mangles the wine-game's lines about daughters in grief and joy, quotes old poems wrong on purpose and by accident, and is the laugh the party has come for."],
      ["ch. 79", "悔娶河東", "An Ungovernable Bride Promised", "Home from his trading trip with Xiangling's reproaches behind him, he has already been promised Xia Jingui — a bride from a house as rich as his own, and as ungovernable."],
      ["ch. 80", "杖打香菱", "Beating the Girl with a Staff", "Believing his new wife's tale that Xiangling cursed her in a spell, he beats the girl with a staff until she can hardly stand, and takes no notice when his mother and sister tell him what he has done."]
    ],
    end: "His wife poisons herself with a cup she brewed for someone else, and the older killing abroad is reopened in the same breath, so that he is back in the yamen at the last. Xue money buys him out, and the chapters let him keep his habits but not Xiangling's goodwill.",
  },
  {
    id: 26, grp: "household",
    zh: "赵姨娘", en: "Concubine Zhao",
    nn: "赵姨娘", nng: "the Zhao Concubine, Jia Zheng's bond-wife",
    label: "荣国府二房的妾母",
    meta: [
      ["Standing", "mother of Tanchun and Jia Huan; a serving-house woman raised to her master's bed"],
      ["Grievance", "her brother's funeral is priced at the old concubine's rate by her own daughter"],
      ["Attempt", "witchcraft against the two people who keep her son below his brother"]
    ],
    hook: "The concubine the house despises and none of them can silence: she hires a witch against her step-son's life, and ends raving, burning paper to the dead she made.",
    events: [
      ["ch. 25", "魔法魘人", "Wax Effigies at the Birth-Hour", "Bribing the Taoist woman Ma Daopo, she has wax figures pricked with the birth-hours of Baoyu and Xifeng; the two go mad with a knife in hand, and the house hunts for the culprit."],
      ["ch. 55", "爭喪銀", "Fighting Over the Twenty Taels", "When her brother Zhao Guoji dies, the deputy manager — her own daughter Tanchun — rules his burial gift at the old concubine's rate of twenty taels, and she storms in to ask whose mother she is."],
      ["ch. 61", "擲粉罵婢", "Fighting Over the Rose Water", "Taking the insult her son was handed — powder passed off for the rose water he asked — she goes to the singing-girls' quarters and strikes Fangguan, and eleven others set on her."]
    ],
    end: "Her old witchcraft comes collecting in the later chapters: taken with fits she cringes, begs and burns paper to the dead she raised against the living, and dies badly at home. Tanchun is married far away and never sees her, and Jia Huan, for whom she did it all, can do nothing.",
  },
  {
    id: 27, grp: "household",
    zh: "贾环", en: "Jia Huan",
    nn: "环三爷", nng: "Third Master Huan",
    label: "荣国府二房的庶子",
    meta: [
      ["Standing", "Jia Zheng's son by a concubine; second in a house that counts only the first heir"],
      ["School", "idle in the family school, where the tutor sets Baoyu's tasks and leaves him the benches"],
      ["Cost", "every word he drops at his father's knee costs his elder brother blood"]
    ],
    hook: "The spare child the book dares to make ugly: he spills a candle on his brother's face, tells a lie that nearly gets him killed, and is never asked to account for it.",
    events: [
      ["ch. 25", "潑油燙面", "The Lamp Tipped into a Face", "Left to hold a candle while Baoyu lies down powdered, he tips the lamp into his brother's face on purpose; the household is told it was an accident, and no one with the power to punish him doubts it."],
      ["ch. 33", "進讒父前", "The Slander at His Father's Side", "At his father's side he reports that Baoyu tried to violate a maidservant and drove her to the well; the beating that follows is the nearest the book comes to a son killed by his own household."],
      ["ch. 60", "換粉受辱", "The Cheaper Powder Brought Back", "He begs rose water from Baoyu to conciliate the maid he is carrying on with, is given the cheaper powder instead, is flung out for bringing it, and takes the humiliation straight to his mother."],
      ["ch. 78", "同題姽婳", "The Painted Heroine Poem", "Set beside Baoyu and Jia Lan to write on the heroine Lin Sihniang, he turns in competent verse that no one pretends is anything, and watches his father read the difference without a word."]
    ],
    end: "He is allowed no arc. The one hundred and twenty chapters give him a wife of monstrous temper who rules him far better than his father managed, no rank, no trade and no elegy, and let him stand unnoticed at the edges of the family's restoration — the child the house made by treating him as nothing.",
  },
  {
    id: 28, grp: "household",
    zh: "薛姨妈", en: "Aunt Xue",
    nn: "姨妈", nng: "the maternal aunt, née Wang",
    label: "寄居荣国府的薛家长辈",
    meta: [
      ["Kin", "Lady Wang's younger sister; mother of Xue Pan and Baochai, pensioner of the Jia estate"],
      ["Means", "keeps the Xue trade's capital and pays off two homicide cases without a plea"],
      ["Blindness", "dotes on the son who wastes everything and never counts what her daughter gives up"]
    ],
    hook: "The well-meaning aunt with money and no grip: she lodges her family in the Jia estate, spoils the son who wastes it, and gives her daughter to a wedding built on a trick.",
    events: [
      ["ch. 4", "攜子寄居", "Lodging Her Household in a Wing", "She brings her daughter and her unpromising son to the capital with a cargo of trade goods, and installs the whole household in a wing of the Rongguo mansion, where they stay for the rest of the book."],
      ["ch. 57", "愛語慰癡顰", "A Match Said Over Tea", "Doting on the motherless Daiyu, she lets it be said over tea that Baochai and Baoyu would make a good pair — the comfort the girl clings to, and the hinge of the last third."],
      ["ch. 79", "聘定河東", "A Match Made by Their Mother", "His journey south ends with a bride fixed: the only daughter of the Xia house, as rich as the Xues and notorious for temper. Baochai hints at what is coming; their mother lets it close."],
      ["ch. 96", "送女完姻", "Sending Her to a Deceived Wedding", "She consents to a wedding arranged as a deception, and her daughter steps from the bridal sedan into a marriage with a half-wit bridegroom who keeps calling for another bride."]
    ],
    end: "She keeps her house standing through everyone else's ruin: her daughter left wed to an absent husband, her son bought out of the yamen a second time, and the girl her son wrecked taken back under her protection. Nothing in the ending costs her anything.",
  },
  {
    id: 29, grp: "maid",
    zh: "鸳鸯", en: "Yuanyang",
    nn: "大丫头", nng: "Head Maid of the Dowager",
    label: "贾母首席侍女",
    meta: [
      ["Serves", "Grandmother Jia, as head maid and keeper of her purse"],
      ["Refuses", "Jia She's demand that she become his concubine, ch. 46"],
      ["Ends", "Hangs herself at the dowager's bier, ch. 111"]
    ],
    hook: "She is the only person in the house who can say no to an old master to his face, and she pays for the refusal the moment her protectress dies.",
    events: [
      ["ch. 40", "三宣牙牌令", "Three Calls of the Domino Game", "At the Dowager's garden banquet she calls the domino-word game, standing over the table with a licence no ordinary servant would dare, while the ladies' answers turn frankly double-edged."],
      ["ch. 46", "鴛鴦抗婚", "Rather the Shears Than Marriage", "Jia She asks for her as a concubine; pressed by Lady Xing, she runs to the Dowager, swears before the household to cut her hair rather than marry, and turns Jia She away in public."],
      ["ch. 110", "賈母壽終", "The Dowager Dies, the Shield Goes", "She has spent decades handling the old woman's keys, money and words; when the Dowager dies in the middle of the house's collapse, Yuanyang is left without the only shield she ever had."],
      ["ch. 111", "鴛鴦殉主", "Hanging in the Mourning Shed", "With Jia She's people circling again she makes good her oath: she is found hanging in the mourning shed, and the chapter sends her ghost into the Land of Illusion."]
    ],
    end: "On the day Grandmother Jia's coffin is carried out, Yuanyang hangs herself in the mourning shed rather than become Jia She's concubine. The text makes her a martyr to one sentence of refusal: chapter 111's title sends her ghost into the Land of Illusion, and nothing more is claimed for her.",
  },
  {
    id: 30, grp: "maid",
    zh: "平儿", en: "Ping'er",
    nn: "通房丫头", nng: "Jia Lian's Maid-Concubine",
    label: "贾琏之妾 · 凤姐心腹",
    meta: [
      ["Serves", "Wang Xifeng as deputy; Jia Lian as his plighted concubine"],
      ["Survives", "Being beaten by both her mistress and her husband's wife"],
      ["Ends", "Taken by Jia Lian as formal wife after Xifeng's death"]
    ],
    hook: "Married to one tyrant and servant to another, she spends the book quietly overturning their sentences, and is paid with the only promotion a servant can be given.",
    events: [
      ["ch. 21", "軟語救璉", "The Lock of Hair She Hid", "While Xifeng audits the silver her husband has hidden in her own boxes, Ping'er gets hold of a lock of another woman's hair before it can be found, and afterward talks Jia Lian into behaving."],
      ["ch. 44", "潑醋牽怒", "Blamed on Her Mistress's Birthday", "On her own birthday Xifeng, half-drunk and furious at finding her husband abed with another, takes it out of Ping'er, who flees with a sword; Baoyu shelters her, re-does her makeup and waits on her."],
      ["ch. 52", "情掩蝦鬚釧", "The Shrimp-Whisker Bracelet Hushed", "A shrimp-whisker bracelet the Dowager gave away is stolen inside the Happy Red Court and a little maid is found with it; Ping'er asks that it be settled quietly, not dragged through the quarters."],
      ["ch. 61", "平兒行權", "Rose-Water and Poria Cake", "Rose-water and poria-cake go missing and an innocent girl is caught with them; Ping'er works out the whole chain, then lets the young master take the blame so that nobody has to be whipped."],
      ["ch. 69", "私慰二姐", "A Secret Kindness to the Rival", "She befriends the secret second wife living in terror of her own mistress, weeps with her, and is beaten for it when Xifeng finds out — the one open kindness that costs her most."]
    ],
    end: "She outlives the jealousy that used her. After Xifeng dies, Jia Lian, grateful for the way Ping'er treated his wife and his concubines, takes her formally as his wife — the plainest reversal the novel allows a servant. The closing chapters give her no further part and never say what she thinks.",
  },
  {
    id: 31, grp: "maid",
    zh: "紫鹃", en: "Zijuan",
    nn: "贴身丫头", nng: "Daiyu's Confidante",
    label: "黛玉的首席侍女",
    meta: [
      ["Origin", "A maid of Grandmother Jia's, named Yingge, handed to Daiyu in ch. 3"],
      ["Acts", "Tests Baoyu's feeling with a lie about Daiyu leaving Suzhou"],
      ["Ends", "Survives her mistress; her own fate is left open"]
    ],
    hook: "A servant who loves her mistress past what the house allows: she tells one cruel lie to learn whether Baoyu's grief would be real, and it nearly kills them both.",
    events: [
      ["ch. 3", "鸚哥賜主", "The Parrot Given to Her Mistress", "Landless and parentless, Daiyu brings one little maid to the capital; Grandmother Jia adds her own second-rank girl, called Yingge, who is renamed Zijuan and becomes the only witness Daiyu has."],
      ["ch. 57", "情辭試玉", "The Lie of a Suzhou Party", "Half in earnest she tells Daiyu that no one in the house will settle her marriage; then she lies to Baoyu that people from Suzhou have come to take her away, and he goes speechless and half-dead."],
      ["ch. 97", "侍疾焚稿", "Feeding the Poems to the Fire", "She watches Daiyu waste through the household's silence about the wedding, calls for help in rooms where no one will come, and holds the light while the poems and the handkerchief go into the fire."],
      ["ch. 98", "靈前斥玉", "Rebuking the Jade at the Rites", "At the death she is the one crying her mistress's name; when Baoyu comes to mourn she turns on him and tells him he has got what he wanted, giving the house the only open reproach it allows itself."]
    ],
    end: "Zijuan buries the only person she was loyal to and stays on in the household. The 120-chapter text neither marries her off nor kills her: a late scene lets Baoyu's plain grief for Daiyu loosen the grudge she carried against him, and after that nothing more is said of her. Her ending is left open.",
  },
  {
    id: 32, grp: "maid",
    zh: "金钏", en: "Jinchuan",
    nn: "大丫鬟", nng: "Head Maid of Lady Wang",
    label: "王夫人房中大丫头",
    meta: [
      ["Serves", "Lady Wang, as the head maid of her inner room"],
      ["Sinned", "In one whispered joke at her sleeping mistress's side"],
      ["Dies", "Throws herself into a walled waste-well, ch. 32"]
    ],
    hook: "One whisper at a sleeping mistress's bedside costs her her life; her death is how Baoyu learns that his tenderness is something other people are destroyed for.",
    events: [
      ["ch. 30", "金釧戲語", "A Joke Before a Dozing Mistress", "On a sweltering afternoon she teases Baoyu as she fans the dozing Lady Wang, hinting he has come for something on his own side of the room; her mistress wakes, boxes her ear and turns her out."],
      ["ch. 32", "金釧投井", "Drowned in the Waste-Well", "Cast out and past defending herself, she is found drowned in the garden's waste-well. Lady Wang calls it a bad fall down the steps, buys funeral cloth and borrows a change of clothes from Baochai."],
      ["ch. 33", "讒父撻子", "The Accusation After the Well", "Jia Huan tells his father that Baoyu tried to violate Jinchuan and drove her to the well; Jia Zheng beats his son within an inch of his death over that story and a second, unrelated one."],
      ["ch. 43", "撮土為香", "Earth Incense by the Water", "On her birthday Baoyu rides out to a shrine by the water and burns earth-incense toward the water in her name; that night her ghost is seen in a courtyard of the house, saying thanks."]
    ],
    end: "She gets no more pages. Lady Wang fills her place with the younger sister Yuchuan, gives money to the family and lets the matter drop. The text grants her only a ghost that thanks someone once in the dark: her death stays the one thing everyone in the household has an opinion about except her.",
  },
  {
    id: 33, grp: "maid",
    zh: "芳官", en: "Fangguan",
    nn: "小优伶", nng: "Girl Actress of the Troupe",
    label: "十二优伶之一",
    meta: [
      ["Origin", "Bought in Suzhou as a child actress for the Consort's homecoming"],
      ["Fights", "Her godmother, then Lady Zhao, in open daylight"],
      ["Ends", "Shaved as a nun's disciple at the Water-Moon nunnery, ch. 77"]
    ],
    hook: "Bought as a child to sing at an imperial reception and set to carrying water, she answers every insult with noise, and the house answers by shaving her head.",
    events: [
      ["ch. 58", "認親受虐", "The Godmother's Wash and Blows", "When the troupe is disbanded the girls are attached as servants; Fangguan's own godmother, set over her, makes her wash the linen and strikes her, until Qingwen and Sheyue take the girl's side."],
      ["ch. 60", "芳官撒潑", "The Slaps Answered on the Floor", "Lady Zhao, furious at a gift of powder she takes for an insult, slaps the girl twice; Fangguan flings herself at her, screaming and clawing on the floor until the servants pull the two apart."],
      ["ch. 63", "夜宴同榻", "The Shared Bed at the Feast", "At the night banquet in the Happy Red Court the girls shut the doors and drink elbow to elbow; Fangguan, drunk, is put to bed in Baoyu's own — a familiarity that will be quoted against them both."],
      ["ch. 77", "斬情歸庵", "Away with the Water-Moon Nun", "In Lady Wang's purge of the gardens the actresses are turned out and sent back to their families; Fangguan tears at her hair and refuses, and a nun of the Water-Moon nunnery carries her off."]
    ],
    end: "Turned out in Lady Wang's purge, she will not go back to the relatives who sold her; a nun of the Water-Moon nunnery takes her and puts the razor to her hair. Chapter 77's title calls it cutting off feeling. The text gives her no further scene — the scissors are the last thing we hear done to her.",
  },
  {
    id: 34, grp: "maid",
    zh: "龄官", en: "Lingguan",
    nn: "小旦", nng: "Young Actress of the Troupe",
    label: "梨香院女旦",
    meta: [
      ["Origin", "A troupe girl bought for the Consort's visit, kept by Jia Qiang"],
      ["Refuses", "To sing the two pieces she is ordered to sing, ch. 18"],
      ["Ends", "Named no further in the text; her fate is left open"]
    ],
    hook: "She refuses to sing on command even for an imperial consort, then spends a rainy afternoon tracing another man's name in the ground where no one is meant to see.",
    events: [
      ["ch. 18", "自擇其戲", "Choosing Her Own Piece", "At the Consort's reception the manager orders her two more pieces; she answers that they were not meant for this occasion and dares not sing them, and is left to choose her own — and rewarded for it."],
      ["ch. 30", "齡官畫薔", "One Character Drawn in the Mud", "Unseen over the wall, Baoyu watches a girl lie full-length in the rain, tracing one character — 蔷 — over and over in the mud with a hairpin until her clothes are soaked through."],
      ["ch. 36", "齡官拒唱", "The Aria She Would Not Sing", "Baoyu asks for the aria he most wants to hear and she refuses flatly, saying it is not for such as he; then Jia Qiang arrives with a caged bird to amuse her, and she quarrels with him about the cage."]
    ],
    end: "She is ill, she loves Jia Qiang — the character she keeps tracing in the mud — and then the novel stops telling. Lingguan goes out of the 120-chapter text without a line of farewell when the troupe is broken up; of all the actresses her end is left most completely open.",
  },
  {
    id: 35, grp: "household",
    zh: "刘姥姥", en: "Granny Liu",
    nn: "乡下老亲", nng: "Poor Relation from the Village",
    label: "两进荣府的老亲",
    meta: [
      ["Kinship", "A poor widow; her son-in-law's house is remotely kin to the Wangs"],
      ["Visits", "Ch. 6 for twenty taels; chs. 39–41 as the Dowager's guest"],
      ["Repays", "The kindness shown at the gate by saving Qiaojie from being sold"]
    ],
    hook: "She sells herself as a clown to feed a family, and the book's one unembarrassed act of gratitude is hers: the great house, with all its thousands, found nobody else.",
    events: [
      ["ch. 6", "一進榮府", "First at the Rong Gate", "Unable to face the winter, she takes her little grandson to the gate of the Rong household, is led in through a steward's wife, and hears the young manageress hand over twenty taels of cold cash."],
      ["ch. 39", "信口開河", "The Firewood Girl in the Snow", "She comes back to thank the Dowager and invents for the old woman a tale of a girl gathering firewood in the snow — a lie told to please the room, which Baoyu alone takes for true."],
      ["ch. 40", "食量如牛", "An Appetite Like an Ox", "At the garden banquet she lets them plant chrysanthemums all over her head, then stands up to announce that her appetite is like an ox's, and the seated ladies fall out of their chairs at her."],
      ["ch. 41", "醉臥怡紅院", "Asleep in Baoyu's Bed", "Drunk and turned round by the house's fittings, she wanders into Baoyu's own bedroom and goes to sleep in his bed, then wakes believing the room was a dream; nobody hurries to explain."]
    ],
    end: "The 120-chapter text repays her. When the house collapses and Qiaojie's own kin move to sell her, Granny Liu carries the girl out of the capital into the country, and the closing summary of fates — one line, no scene — pairs her with 板儿, the boy who came to the gate with her in chapter 6.",
  },
  {
    id: 36, grp: "household",
    zh: "秦钟", en: "Qin Zhong",
    nn: "情友", nng: "Friend of the Schoolroom",
    label: "可卿之弟 · 宝玉塾友",
    meta: [
      ["Kinship", "Younger brother of Qin Keqing, son of an aged official"],
      ["Friends", "Baoyu from their first meeting; they enter the clan school together"],
      ["Ends", "Dies at home of illness and shame, ch. 16"]
    ],
    hook: "The first boy Baoyu ever envies for being beautiful, and the first death he attends: their friendship lasts sixteen chapters and ends in an argument about taking examinations.",
    events: [
      ["ch. 7", "寧府初會", "First Meeting at the Ning Banquet", "At a banquet in the Ning household, where he is waiting to be taken into the clan school, he and Baoyu recognise each other at once, and both go home unhappy at having met so late."],
      ["ch. 9", "頑童鬧學", "Brawl in the Clan School", "His closeness to Baoyu turns a schoolmate jealous, and the clan school erupts into a brawl of ink and pulled hair; the master's grandson who tries to mediate is made to apologize for it."],
      ["ch. 15", "私會智能", "The Nun Followed Back to Town", "Lodging with the funeral party at a nunnery, he carries on with a young nun there; she follows him back to town, his father beats and shuts him up, and the old man dies of the same indignity."],
      ["ch. 16", "鯨卿夭逝", "Last Words of Study and Fame", "Wasted by illness and his father's treatment, he dies with Baoyu at his bed; his last words tell him to make a name through study, undoing everything the two of them ever said to each other."]
    ],
    end: "He dies at home in chapter 16, after his father has been killed by the same scandal and the nun who loved him has dropped out of the book; his last words advise Baoyu to seek a name through study. Nothing more is said of Qin Zhong, and his sister's family goes down with the Ning house.",
  },
  {
    id: 37, grp: "household",
    zh: "贾瑞", en: "Jia Rui",
    nn: "塾师之孙", nng: "Grandson of the Schoolmaster",
    label: "贾代儒之孙",
    meta: [
      ["Kinship", "Grandson and heir of Jia Dai-ru, who keeps the clan school"],
      ["Wants", "His sister-in-law Wang Xifeng, past all sense of proportion"],
      ["Ends", "Dies in ch. 12 of a mirror he would not look at from the back"]
    ],
    hook: "A penniless kinsman who mistakes one woman's politeness for an opening, and is taught better twice over by a punishment that keeps working after she has forgotten his name.",
    events: [
      ["ch. 9", "學房勸架", "Twenty Strokes for Breaking It Up", "He tries to settle a brawl in his grandfather's school by making the weaker side apologize; when the old master comes back it is Jia Rui who takes twenty strokes and kneels in the yard."],
      ["ch. 11", "賈瑞起淫心", "A Night Locked in the Corridor", "At a Ning household banquet he stops Xifeng in a passage and hints that they were made for each other; she pretends to yield, and he spends the night locked in a walled corridor in the cold."],
      ["ch. 12", "毒設相思局", "The Trap of Filth and Debt", "At her second appointment he is locked in a yard, drenched with filth thrown from the roof, then ambushed by kinsmen who make him sign away a debt. Sick, he gets a Taoist's mirror and one warning."]
    ],
    end: "He cannot keep to the warning: he looks at the mirror's front, where Xifeng beckons him out of the glass, and answers her until he cannot move. His grandfather burns the mirror to no purpose and Jia Rui dies in chapter 12, cured of nothing. Xifeng never once thinks of him again.",
  },
  {
    id: 38, grp: "household",
    zh: "尤二姐", en: "You Erjie",
    nn: "二姨", nng: "Jia Lian's Secret Second Wife",
    label: "贾琏偷娶的外室",
    meta: [
      ["Kinship", "Daughter of Lady You's stepmother by her first husband"],
      ["Hopes", "That a bought house outside the gate will keep her out of reach"],
      ["Ends", "Swallows a lump of raw gold, ch. 69"]
    ],
    hook: "Taken as a hidden second wife by a man who cannot rule his own household, she trusts the match to be decent and is destroyed by a house that has only one mistress in it.",
    events: [
      ["ch. 64", "情遺龍佩", "The Jade Dragon Taken as Pledge", "Pleaded for through a young nephew of the Ning house, she is courted by Jia Lian at her mother's lodging beside the mourning hall and takes his jade dragon pendant as a pledge of a proper marriage."],
      ["ch. 65", "偷娶二姨", "Married in Secret Beyond the Gate", "While his wife is out of the way at the temple, he marries her secretly and sets her up in a bought house beyond the gate, where her mother and sister, living on nothing, do not object."],
      ["ch. 68", "賺入園中", "Moved into the Garden to Watch", "Xifeng, having torn the whole story out of a frightened servant, fawns on the girl's mother until she is moved into the garden — housed in plain rooms, watched, and cut off from her husband."],
      ["ch. 69", "吞金自盡", "The Gold Swallowed After a Dream", "Insulted daily by a concubine Xifeng has put in her way, fevered, and warned in a dream by her dead sister, she swallows raw gold and is found dying; her husband weeps, and can do nothing else."]
    ],
    end: "She dies in chapter 69 with raw gold in her belly, in a house where her husband's wife praised her in public and let her be starved in private. The funeral is made deliberately shabby, and Jia Lian, who let all of it happen, ends the chapter swearing quietly to avenge her.",
  },
  {
    id: 39, grp: "household",
    zh: "尤三姐", en: "You Sanjie",
    nn: "小妹", nng: "The Ungovernable Younger Sister",
    label: "尤氏继母之女",
    meta: [
      ["Temper", "Drives Ningguo's master off by reviling him at his own drinking table"],
      ["Wants", "One man only: the wandering actor-swordsman Liu Xianglian"],
      ["Ends", "Kills herself with his plighting sword, ch. 66"]
    ],
    hook: "The only woman in the book who chooses her own husband, and the only one who kills herself over it in the front courtyard: she gets a chapter and a half for both.",
    events: [
      ["ch. 63", "居喪一見", "Coming to Keep the Mourning", "When the Ning household's master dies of his elixir the sisters come up with their mother to attend the rites, and the men of that house at once go looking for the lodging where the mourning is kept."],
      ["ch. 65", "撒潑罵珍", "Her Feet Bared, Their Money Spent", "When Ningguo's master comes to make free with her she drinks back at him, bares her feet, reviles him and his brother-in-law to their faces and spends their money till neither dares stay long."],
      ["ch. 66", "恥歸地府", "The Sword She Drew on Herself", "She would wait for Liu Xianglian only; when he hears where she has lived he reclaims the double-dragon sword Jia Lian had carried her as a pledge, and she draws it across her throat there."]
    ],
    end: "The book gives her one more entrance as a ghost: still holding the blade she appears to Liu Xianglian that night to take her leave, and he shaves his head in the same chapter. It never lets her live long enough to be proved wrong about the man she chose.",
  },
  {
    id: 40, grp: "household",
    zh: "薛宝琴", en: "Xue Baoqin",
    nn: "义女", nng: "Adopted Daughter of Lady Wang",
    label: "贾母膝下的新客",
    meta: [
      ["Kinship", "Niece of Lady Xue and cousin of Baochai, newly come up to the capital"],
      ["Favours", "Grandmother Jia's favourite, adopted on the spot and nearly matched to Baoyu"],
      ["Ends", "Married into the Mei family her dead father had plighted her to"]
    ],
    hook: "Everything the house is about to lose arrives in her at once — travel, health, verse, an old woman who wants her for a daughter — and she is safely promised to somebody else.",
    events: [
      ["ch. 49", "強認義女", "The Adoption and the Horoscope", "She arrives with her brother to complete a marriage her father arranged before dying; Grandmother Jia is so taken with her that she makes Lady Wang adopt the girl, then asks her horoscope for Baoyu."],
      ["ch. 50", "踏雪折梅", "Plum Blossoms in the Snow", "In fresh snow she stands on the hillside with a maid behind her and a load of red plum in her arms, and the garden pronounces her the living original of a painting the Dowager hangs on her walls."],
      ["ch. 51", "懷古絕句", "Ten Riddles on Foreign Coasts", "She brings ten riddle-poems on places her father's trading took her — foreign coasts no other girl in the book has seen — and Baochai protests that they read like ill omens, not a girl's work."],
      ["ch. 57", "姨媽說媒", "The Aunt Plays Matchmaker", "Her aunt, playing at matchmaker, tells Daiyu she means the little cousin for Baoyu — though the girl is plighted already; in the ease of that afternoon Daiyu calls Lady Xue godmother."]
    ],
    end: "She is the one the novel lets go unharmed. The marriage her dead father arranged, with a son of the Mei family, is fulfilled offstage in a line or two while the girls are still at poetry; the 120-chapter text gives her no share in the raids and deaths that follow. She leaves before it darkens.",
  }
];

// Three answer pages: what happens, how long it is, which English version to buy.
// The overview tier answers "who is in this book"; these answer what a reader types
// before they have opened it. English-only like the leaves, and deliberately NOT in
// locales.mjs — the parity gate would demand a Japanese copy for prose that is here
// to be checked line by line against a source, so the strings live beside the facts.
// Every figure below names where it came from; the fetch record for 2026-09-30 is
// evidence/2026-09-30-cl-guides/ on the build machine.
const WIKI = "https://en.wikipedia.org/wiki/Dream_of_the_Red_Chamber";
const GUARDIAN = "https://www.theguardian.com/books/2009/aug/25/obituary-david-hawkes";
const MINFORD_BIO = "https://en.wikipedia.org/wiki/John_Minford";
const JOLY_1892 = "https://web.archive.org/web/20091231163954/http://ebooks.adelaide.edu.au/c/cao_xueqin/c2359h/complete.html";
const CH_TEXT = "https://en.wikisource.org/wiki/zh:%E7%B4%85%E6%A8%93%E5%A4%A2";

export const GUIDES = [
  {
    slug: "plot-summary", navLabel: "The story", cardZh: "情節",
    cardTitle: "What happens, in five bands of chapters",
    cardBody: "The 120 chapters cut into five bands, each with what turns in it and whose leaf carries it. The ending is at the end, where chapter 5 already put it.",
    seoTitle: "Dream of the Red Chamber Plot Summary, Chapter by Chapter",
    seoDesc: "What happens in Dream of the Red Chamber, in five chapter bands from the stone's birth to the confiscation, each with its turn and who carries it.",
    kicker: "Reading note I · The story",
    h1: "What happens in Dream of the Red Chamber",
    h1zh: "紅樓夢情節",
    lede: "Five bands of chapters, the turn in each, and the leaf to open for whoever carries it. The ending is in the last row: so is it in the first five chapters, in verse, which is the book's own argument that a summary spoils nothing.",
    answer: [
      ["Chapters", "120. The first 80 are Cao Xueqin's, written through the 1740s and circulated in copy; the last 40 were added when Cheng Weiyuan and Gao E printed the novel for the first time in 1791."],
      ["The hinge", "Chapter 74. Up to it the house is spending; after it the house is finding out that it cannot go on."],
      ["Where to start", "Chapters 1–5: the stone's errand into the world, the two mansions, and the dream in which the registers of Jinling name every ending in advance."],
    ],
    blocks: [
      {
        h: "The five bands", zh: "五代",
        paras: [
          "The chapter numbers are the book's; the cuts between bands are ours, drawn where the leaves on this site start and stop carrying the weight.",
        ],
        table: {
          th: ["#", "Chapters", "What happens", "Whose leaf to open"], num: true,
          rows: [
            ["I", "1–5", "A stone left over from the mending of the heaven asks to be born, and is born as Jia Baoyu with the jade in his mouth. His aunt dies and the orphaned cousin Lin Daiyu comes to live at the Rongguo mansion; the Xue family arrives with a murderer in its baggage. Asleep in his sister-in-law's room, Baoyu is shown the registers of Jinling, where each woman's ending is written as a verse he cannot read.", "Jia Baoyu · Lin Daiyu · Xue Baochai · Qin Keqing · Xiangling"],
            ["II", "6–18", "The house at the top of its credit. Qin Keqing dies of an illness no physician can name and is buried with a wood above her rank; a daughter of the house is made a consort, and to receive her visit the family builds a garden they cannot afford. Its first inmates are the children and the maids who teach them.", "Wang Xifeng · Jia Zhen · Jia Yuanchun · Granny Liu · Jia Rui"],
            ["III", "19–54", "The garden years: the poetry club, the crab feast, the chrysanthemum prizes, a country woman walked round an estate she cannot thank them for. Underneath the club, the half-brother's malice, a maid's drowned death, Jia Zheng near to beating his son to death, and his own father trying to add the old woman's favourite maid to a son's bed.", "Jia Tanchun · Li Wan · Xiren · Qingwen · Jinchuan · Yuanyang · Jia Huan · Xue Baoqin"],
            ["IV", "55–80", "Money trouble turns into policing. Tanchun runs the household against the odds and cannot stop the holes; a silk purse found in a garden seat brings a search of the whole quarter, and the search brings out what everyone had arranged not to see. The best maid dies in disgrace; two girls of the register go to the husbands their verses named.", "Qingwen · Jia Tanchun · Wang Xifeng · Lady Xing · Jia Yingchun · Xiangling · Fangguan"],
            ["V", "81–120", "The added forty chapters. Yuanchun dies; a bride is swapped in the sedan and Daiyu burns her poems at the hour of the bridal lamps; the estates are confiscated and the old woman dies, and the maids who loved her go one way and another. The heir sits the examination, gets the degree the family needed, and is last seen in a red cape in the snow.", "Jia Yuanchun · Xue Baochai · Zijuan · Grandmother Jia · Miaoyu · Jia Qiaojie · Jia Baoyu"],
          ],
        },
      },
      {
        h: "The frame is not a frame", zh: "石頭記",
        paras: [
          "The novel's other title is The Story of a Stone, and the stone is the narrator as well as the hero: the block left unused when the goddess mended the heaven begs a Daoist and a monk to take it into the red dust, and its report of that life is the book. In the earlier incarnation it watered a flower on the bank of the Milky Way; the flower is born a girl owing tears as interest, which is why the cousin's eyes are never dry. The device is not decoration. It makes the whole rise-and-fall of the Jia house a single errand the stone made, and it is why the book keeps interrupting itself with hints that this has already been read through once.",
          "Read that way, the famous slowness of the opening — the family genealogies, the four households who prop each other up, the magistrate who cannot decide a case — is the stone taking stock of the country it means to visit. Chapter 5 is the table of contents, and Baoyu is the only reader in the book who does not understand it.",
        ],
      },
      {
        h: "What a summary cannot carry", zh: "所失",
        paras: [
          "Two counts to hold against any synopsis, including the table above. The novel has been indexed at 447 named people, and it is usually counted at nearly forty major characters with over four hundred more; this site paints a leaf for 40 of them and puts the register rows beneath. And the plot is the least of what is there: the book is a household's etiquette, medicine, cookery, taxonomy of estates, and several hundred poems, in a vernacular plain enough that lexicographers later mined it for the vocabulary of modern spoken Chinese. A reader who finishes it remarking that the story was slow is like a visitor to a garden who remarks that the paths were long.",
        ],
        note: "The last sentence is a gloss, not a source. The counts are: the 1986 红楼梦辞典 indexes 447 named characters; the character-number figures and the language claim are from the article cited below.",
      },
    ],
    sources: [
      [`English Wikipedia, “Dream of the Red Chamber” — text, frame, chapter and character counts, and the 1791 editions (read 30 Sep 2026)`, WIKI],
      [`The Guardian, David Hawkes's obituary — “the complete text has 120 chapters”, and the three volumes of the first 80`, GUARDIAN],
      [`The novel in Chinese, chapter by chapter, at Wikisource`, CH_TEXT],
    ],
  },
  {
    slug: "how-long", navLabel: "How long it is", cardZh: "篇幅",
    cardTitle: "How many pages, how many evenings",
    cardBody: "Chapter counts for the Chinese, page and word counts for the English edition most readers buy, and the arithmetic that turns them into sittings.",
    seoTitle: "Dream of the Red Chamber: How Many Pages, How Long?",
    seoDesc: "Dream of the Red Chamber is 120 chapters; the complete English text runs to some 2,339 pages and an estimated 845,000 words — about 56 hours of reading.",
    kicker: "Reading note II · The length",
    h1: "How long is Dream of the Red Chamber?",
    h1zh: "紅樓夢篇幅",
    lede: "There are two answers because there are two books: a 120-chapter Chinese novel, and — in the English most readers buy — about 845,000 words laid over 2,339 pages of story in five volumes. Everything in the tables below is that second book, or arithmetic done on it in the open.",
    answer: [
      ["Chapters", "120, of which the last 40 were not there when the author died."],
      ["Pages in English", "2,339 of story in Penguin's five volumes; over 2,800 once you count the prefaces, introductions and appendices."],
      ["Reading time", "About 56 hours at 250 words a minute. That is our division, not a measurement of anybody."],
    ],
    blocks: [
      {
        h: "The book in numbers", zh: "數字",
        table: {
          th: ["Measure", "Figure", "What it is"],
          rows: [
            ["Chapters", "120", "The Cheng-Gao printed text of 1791–92, which is the book people read. The manuscripts that circulated in the author's lifetime stop at 80."],
            ["Author's share", "80", "Cao Xueqin worked on it through the 1740s until his death in 1763 or 1764; the first 80 chapters were complete and being copied by hand."],
            ["Words, English", "≈845,000", "Estimated for the Penguin Classics translation of the whole 120 chapters."],
            ["Pages of story", "2,339", "The core text of the five Penguin volumes, excluding prefaces, introductions and appendices."],
            ["Pages with apparatus", "over 2,800", "The same five volumes counted whole, which is what lands on a table."],
            ["One chapter", "≈7,000 words · ≈20 pages", "845,000 and 2,339 divided by 120. Chapters run uneven, so this is a mean and not a promise."],
            ["Named people", "447", "The number of entries in the 1986 红楼梦辞典; the novel is usually described as carrying nearly forty major characters and over four hundred minor ones."],
            ["Leaves on this site", `${PEOPLE.length}`, "Every one of those names is not served here; the register rows below the leaves carry the rest."],
          ],
        },
        note: "Nothing here is a page count of a Chinese edition: the 120 chapters are printed as three volumes in Beijing and five in Harmondsworth, and a Chinese hardback's length moves with the type size. Quote a page count only against the edition you are holding.",
      },
      {
        h: "What that is in evenings", zh: "幾晚",
        paras: [
          "The hours below are 845,000 words divided by a reading rate, then cut into sittings. Change the rate and the schedule moves; the arithmetic is shown so you can.",
        ],
        table: {
          th: ["You read", "The book takes", "Working"], num: false,
          rows: [
            ["half an hour a night", "about 4 months", "one chapter ≈ 7,000 words ≈ 28 minutes at 250 words a minute; 120 nights"],
            ["an hour a night", "about 2 months", "two chapters a night; 60 nights"],
            ["a long weekend", "about 7 sittings of 8 hours", "56 hours of straight reading, which nobody does; the number is there to be disbelieved usefully"],
            ["only Cao Xueqin's 80", "about 3 months, or 37 hours", "80/120 of the word count at the same rate — the first three volumes of the Penguin set, and nothing after them"],
          ],
        },
      },
      {
        h: "Why the counts move", zh: "版本",
        paras: [
          "Length was the first thing English readers objected to. Reviewing the novel in 1873, Alfred Lister counted twenty volumes in it and called the bulk a disadvantage, and the number of people, he said, with the mysteriously heavy introductory chapters, made it a book no heroic effort would ever place in Western letters. He was reviewing a partial translation of the first fifty-six chapters.",
          "What changes between editions is not the chapter count but what is folded in around it: how many of the red-commented manuscripts' variants are printed, whether the last forty chapters are there at all, how much of the poetry is kept and whether it is footnoted to death. Zhou Ruchang distrusted the added chapters so completely that his editions run to 80, and in 2006 he and the novelist Liu Xinwu published an 80-chapter text with an ending of their own reconstruction. Penguin's set is 5 volumes because the first translator resigned an Oxford chair to do the first 80 chapters and his son-in-law took the remaining 40 after his death.",
        ],
      },
      {
        h: "The honest short version", zh: "節本",
        paras: [
          "There is no good abridgement in print. Wang Chi-Chen's 1929 version, which led with the love story, was expanded in 1958 and still stopped at chapter 60; Florence and Isabel McHugh's 1958 abridgement was made from Franz Kuhn's 1932 German, not from the Chinese. What does exist is a shorter complete book: read the first 80 chapters in Hawkes, which is a whole novel that simply has its ending unwritten, and go to the register verses in chapter 5 for what was planned. This site's leaves do that — the verses are quoted above each life, and the endings come from the 120-chapter text.",
        ],
        note: "The recommendation is ours. The facts under it — what each abridgement covers and from which language — are from the sources below.",
      },
    ],
    sources: [
      [`English Wikipedia, “Dream of the Red Chamber” — the Penguin page and word counts, the Cheng-Gao editions, Lister's 1873 review, Zhou Ruchang's 80-chapter text (read 30 Sep 2026)`, WIKI],
      [`The Guardian, David Hawkes's obituary — 120 chapters complete; the first 80 in three volumes, 1973, 1977 and 1980`, GUARDIAN],
      [`Wikipedia, John Minford — the 40 chapters of The Story of the Stone he translated`, MINFORD_BIO],
    ],
  },
  {
    slug: "which-translation", navLabel: "Which translation", cardZh: "譯本",
    cardTitle: "Which English translation to read",
    cardBody: "The two complete versions, what each one is trying to do, how each renders the names you will meet on these leaves, and the free partial one.",
    seoTitle: "Dream of the Red Chamber: Which English Translation?",
    seoDesc: "Hawkes or the Yangs for Dream of the Red Chamber: what each covers, what each does with names and verse, and the 1892 translation you can read for free.",
    kicker: "Reading note III · The translations",
    h1: "Which English translation of Dream of the Red Chamber?",
    h1zh: "紅樓夢譯本",
    lede: "Exactly two complete English translations exist, and they are different books on purpose: one was made to be read as a novel by someone who has never seen Chinese, the other to carry the Chinese across near the line. Buy on that difference. It also decides whether the maid on your page is called Xiren or Aroma.",
    answer: [
      ["Hawkes & Minford", "The Story of the Stone, Penguin, five volumes, 1973 to 1986. The first 80 chapters are David Hawkes's, the last 40 John Minford's."],
      ["The Yangs", "A Dream of Red Mansions, Foreign Language Press, Beijing, three volumes, 1978–1980. The first complete English translation, made by Yang Xianyi and Gladys Yang."],
      ["Free", "H. Bencraft Joly's 1892 version of the first 56 chapters, public domain and readable online."],
    ],
    blocks: [
      {
        h: "The two complete versions", zh: "全譯",
        table: {
          th: ["Edition", "Covers", "Published", "What the translator was after"],
          rows: [
            ["The Story of the Stone, translated by David Hawkes (vol. 4–5 by John Minford)", "ch. 1–80 Hawkes, ch. 81–120 Minford", "Penguin Classics; Hawkes's three volumes 1973, 1977, 1980; the set complete by 1986", "Penguin asked him for something that could appeal to English readers, and he resigned the Shaw Professorship of Chinese at Oxford to do it — a translation that would keep the realism and the poetry rather than the apparatus."],
            ["A Dream of Red Mansions, translated by Yang Xianyi and Gladys Yang", "ch. 1–120", "Foreign Language Press, Beijing; three volumes, 1978–1980", "The first complete version, commissioned and begun in 1961, stopped by the Cultural Revolution, finished after their release in 1974. Its aim is the text: rendering word for word, which scholars have contrasted with Hawkes's text for text."],
          ],
        },
      },
      {
        h: "The name problem", zh: "人名",
        paras: [
          "A great many names in this novel mean something, and one translator's choice is another's loss. Hawkes kept the family's names as sounds — Jia Baoyu, Lin Daiyu, Wang Xifeng, Jia Zheng, Lady Wang — and translated the servants instead, so a page of Penguin gives you Aroma where this site gives you Xiren. He put the Daoists' and Buddhists' names into Latin, and actors' names into French. The Yangs, keeping the text near the line, keep the Chinese names as names.",
          "The four you are most likely to meet in the first month of reading:",
        ],
        table: {
          th: ["This site", "Chinese", "In Penguin's Hawkes", "Who"],
          rows: [
            ["Xiren", "花襲人", "Aroma", "Baoyu's principal maid, the register's flower of the third roll; his first tenderness and the one who later marries the actor Jiang Yuhan."],
            ["Qingwen", "晴雯", "Skybright", "The brightest of his maids, torn out of the house and dead of disgrace in chapter 77; the girl he writes the hibiscus elegy for."],
            ["Miaoyu", "妙玉", "Adamantina", "The nun in the garden, cleaner than anyone is allowed to be, abducted in the last forty chapters."],
            ["Xiangling", "香菱", "Caltrop", "The daughter stolen in chapter 1 and sold back into the family that took her; she learns verse in the garden at chapter 48 and is renamed Autumn Caltrop out of spite at chapter 79."],
          ],
        },
        note: "The equivalences are as recorded in the article cited below. Where an edition renames the servants, the Chinese in a leaf's header is the fix: it is the same three or four characters on every page of this site.",
      },
      {
        h: "The partial, the free and the lost", zh: "殘本",
        table: {
          th: ["Year", "Translation", "Covers", "State"],
          rows: [
            ["1812", "Robert Morrison", "part of chapter 4", "The first recorded English rendering; it sat in the second volume of a book unpublished in his lifetime."],
            ["1830", "John Francis Davis", "a poem from chapter 3", "Davis had printed an excerpt in 1819; this is the verse that got into print."],
            ["1846", "Presbyterian Mission Press, Ningbo", "selected passages", "Made literal on purpose, for foreigners learning Chinese."],
            ["1868", "Edward Charles Bowra", "chapters 1–8", "The first run of the story in English."],
            ["1892", "H. Bencraft Joly", "chapters 1–56", "Public domain; still readable online, and reprinted with a foreword by John Minford."],
            ["1929", "Wang Chi-Chen", "abridged, the love story first", "With a preface by Arthur Waley. Expanded in 1958 and still stopping at chapter 60."],
            ["1950s", "Bramwell Seaton Bonsall", "all 120 chapters, as Red Chamber Dream", "Probably the first complete English version; publication was abandoned when Penguin announced the Hawkes project. A typescript is online."],
            ["1958", "Florence and Isabel McHugh", "abridged", "Made from Franz Kuhn's 1932 German translation, not from the Chinese."],
            ["1973", "Lin Yutang's own abridgement", "about half the book", "Six copies printed and sent to publishers, all declined; the manuscript was found in a Japanese library in 2015 and his estate has refused to publish it."],
          ],
        },
      },
      {
        h: "What the reviewers argue about", zh: "評",
        paras: [
          "The disagreement is old and it is not about accuracy. Frederic Wakeman, reviewing Hawkes and Minford in 1980, called the novel a masterpiece and its author a literary genius. A 2014 study of fourteen translations into English, German, French and Spanish found some of the book's problems surmountable and others not, and gave Hawkes the prize for precision: he came up with versions that were accurate, ingenious and delightful, recreating the meanings and the sounds of the original more successfully than any of his fellow translators. Another scholar put the difference plainly — the Yangs are literal, word for word; Hawkes is literal at the level of the text, which is why he can keep a servant's joke and a mistress's allusion at different heights in the same sentence.",
          "So the choice is not which is truer. It is whether you want to read a Chinese novel in English, or read this novel in English.",
        ],
        note: "That last line is this site's own summary of the two aims, not a quotation. The quotation marks in the paragraph above are all from the article cited below.",
      },
    ],
    sources: [
      [`English Wikipedia, “Dream of the Red Chamber” — the translation history, the 1812 to 1958 versions, Hawkes's naming policy, the 2014 fourteen-translation study (read 30 Sep 2026)`, WIKI],
      [`The Guardian, David Hawkes's obituary — Penguin's commission, the resignation, and the volumes of 1973, 1977 and 1980`, GUARDIAN],
      [`Wikipedia, John Minford — 40 chapters of The Story of the Stone`, MINFORD_BIO],
      [`Joly's 1892–93 translation, first 56 chapters, archived by the University of Adelaide`, JOLY_1892],
    ],
  },
  {
    // Built for the query GSC actually recorded in volume — the lamp-oil
    // question and its rephrasings — so the snippet answers it in one look.
    slug: "why-jia-huan-burned-baoyu", navLabel: "The lamp-oil night", cardZh: "燈油",
    cardTitle: "Why Jia Huan tipped the lamp on Baoyu",
    cardBody: "The chapter-25 scalding: what happened in Lady Wang's room, the jealousy behind it, who took the scolding, and the curse it led to before the day was out.",
    seoTitle: "Why Did Jia Huan Burn Baoyu with Hot Lamp Oil?",
    seoDesc: "The ch. 25 lamp-oil scalding of Baoyu's face: what happened, whether it was an accident, who was scolded, and the black magic Concubine Zhao bought that same night.",
    kicker: "Reading note IV · The lamp-oil night",
    h1: "Why did Jia Huan burn Baoyu with the hot lamp oil?",
    h1zh: "第二十五回·燈油",
    lede: "In chapter 25 Jia Huan tipped a lamp of hot oil over his half-brother's face and left a row of blisters. The novel says plainly that it was not an accident, and plainly why: a concubine's son had spent his whole life watching the house love somebody else.",
    answer: [
      ["What happens", "Ch. 25, in Lady Wang's quarters. Baoyu lies on the kang after wine; Jia Huan, set to copy a sutra at the same table, pretends to stumble and pushes the lamp over him."],
      ["Was it an accident", "No. The text says he had long hated Baoyu and acted on it — the stumble was the cover story the household later kept for Grandmother Jia's benefit."],
      ["Who was scolded", "Lady Wang's fury fell on Jia Huan and on his mother: Concubine Zhao, for having raised him. Wang Xifeng hustled the boy away before it got worse."],
      ["What it led to", "That same chapter: Concubine Zhao pays the nun Ma Daopo for paper-effigy black magic against Baoyu and Wang Xifeng. Both collapse; a monk restores the jade and both live."],
    ],
    blocks: [
      {
        h: "The scene, as the chapter gives it", zh: "本事",
        paras: [
          "Baoyu comes home from a birthday feast at the Wangs with wine in him, and his mother puts him down to rest on her kang. Jia Huan is already in the room, set to copying the Diamond Sutra — a chore that tells you his standing: the good son does lessons with tutors, this one copies scripture in the servants' hearing. Baoyu, bored and drowsy, teases the maid Caixia, who has no patience for him because her regard is all for Jia Huan. The novel watches Jia Huan watching this — and then his hand finds the lamp.",
          "The oil takes Baoyu across the face in blisters. It is the jade-in-the-mouth boy's first visible wound from inside his own house, and it comes from the one person in it who has the least and resents it most.",
        ],
      },
      {
        h: "Why he did it", zh: "緣故",
        paras: [
          "The novel does not leave the motive to be inferred. Jia Huan is the son of a concubine, and the book shows the arithmetic of that birth again and again: the same father, a different everything. His mother's lodgings, his share of attention, the way servants weigh him against his brother — all of it is second, and the household does not pretend otherwise. The trigger in the scene is small on purpose: a maid's coldness, a brother's ease with her. A boy supplied with years of that arithmetic does not need a large trigger.",
          "His mother is the other half of the answer. Concubine Zhao is the novel's study of what a permanent second place does to a person, and her son is both her instrument and her echo. Chapter 25 is the first time the two of them act on it together in daylight; the curse that same night is the second time.",
        ],
      },
      {
        h: "The scolding, and the cover story", zh: "訓斥",
        paras: [
          "Lady Wang's anger lands twice: on Jia Huan for the act, and on Concubine Zhao for the son — a mother punished through her child, which is the household's usual way of reaching her. Wang Xifeng, arriving at the noise, reads the room faster than anyone and removes the boy before Grandmother Jia hears it. To the old lady it goes down as Baoyu's own clumsiness, which spares her alarm and spares Jia Huan the one judge with real power over him.",
        ],
      },
      {
        h: "What grows out of it", zh: "後事",
        paras: [
          "The same chapter runs the revenge to its end: Ma Daopo takes Concubine Zhao's silver and a pawned lot of jewellery, works her paper goblins, and both Baoyu and Wang Xifeng go into death-fits before the scabby monk and the lame Taoist talk the jade back into doing its work. The novel keeps the two events in one chapter on purpose — the lamp in the morning, the curse at night, one grudge wearing two shapes.",
          "And the grudge does not age out. Eight chapters later it is Jia Huan's word to his father about the maid Jinchuan that brings on the great beating of chapter 33. Read the two chapters together and you have the novel's whole statement on the second son: he never gets a battlefield, so he fights where he stands.",
        ],
        note: "The chapter attributions are the text's. The readings in the second and fourth sections — the arithmetic of a concubine-born son, one grudge in two shapes — are this site's, argued from the chapters cited below.",
      },
    ],
    faq: [
      ["Why did Jia Huan burn Baoyu with hot lamp oil?", "He was the concubine-born half-brother who had watched the house favour Baoyu all his life, and in that scene Baoyu was at ease with the one maid who preferred Jia Huan. The novel says his stumble with the lamp was deliberate."],
      ["Did Baoyu's face heal?", "The chapter leaves him blistered and bandaged; the wound itself is not the plot. What carries forward is the grudge — the black magic bought that night, and Jia Huan's informing in chapter 33."],
      ["Did Grandmother Jia find out?", "The household reported it to her as Baoyu's own accident. The concealment is in the chapter, and it is part of the point: the one person whose judgement Jia Huan feared never reaches him."],
    ],
    sources: [
      [`The novel in Chinese, chapters 25 and 33 — the lamp-oil scene, Ma Daopo's curse, and the beating (read 6 Oct 2026)`, CH_TEXT],
      [`English Wikipedia, “Dream of the Red Chamber” — chapter summary and the character web around it`, WIKI],
    ],
  },
  {
    slug: "jia-family-tree", navLabel: "The family tree", cardZh: "族譜",
    cardTitle: "The Jia family tree, explained",
    cardBody: "The two houses of the Jia clan laid out generation by generation — who rules each, who marries in, and where Baoyu, Daiyu and Xifeng actually sit.",
    seoTitle: "The Jia Family Tree, Explained (Dream of the Red Chamber)",
    seoDesc: "The Jia family tree in one table: the Ningguo and Rongguo houses through five generations, the marriages that brought in Wang, Xue, Lin and Shi — and where Baoyu sits.",
    kicker: "Reading note V · The family tree",
    h1: "The Jia family tree, explained",
    h1zh: "賈氏族譜",
    lede: "Two founding brothers, two houses, five generations — and a marriage web in which nearly every outsider who matters (Daiyu, Baochai, Xifeng) is already a cousin. The tree below is the one the novel's second chapter recites; the explanations under it are the ones readers actually need.",
    answer: [
      ["The houses", "Ningguo (elder line) and Rongguo (younger). Nearly all the story lives in Rongguo; Ningguo supplies the scandals next door."],
      ["Baoyu's line", "Rongguo second son: Jia Zheng by Lady Wang, and the stone-born heir with the jade in his mouth."],
      ["Why so many cousins", "The four great families intermarried for generations — so Daiyu is his father's side's cousin and Baochai his mother's side's, and the novel sets the two kinships against each other deliberately."],
    ],
    blocks: [
      {
        h: "Five generations, one table", zh: "五代",
        paras: [
          "The generations are marked by the shared character in the names — a real convention of the book, and the fastest way to place anyone: the founding dukes, then the dai generation, the wen generation, the yu generation, and the cao generation of boys who inherit the wreckage.",
        ],
        table: {
          th: ["Generation", "Ningguo house (elder)", "Rongguo house (younger)", "Note"],
          rows: [
            ["Founders", "Jia Yan, Duke of Ningguo", "Jia Yuan, Duke of Rongguo", "Two brothers granted ducal titles for merit — the houses' names are their titles."],
            ["dai", "Jia Daihua", "Jia Daishan × Grandmother Jia", "She is born a Shi of one of the four families — which is why Xiangyun calls her aunt."],
            ["wen", "Jia Jing (a Daoist recluse; never home)", "Jia She × Lady Xing; Jia Zheng × Lady Wang; (daughter) Jia Min × Lin Ruhai", "Jia Zheng holds the real rank; Lady Wang is of the Wang family — Xifeng's aunt."],
            ["yu", "Jia Zhen × Lady You", "Jia Zhu × Li Wan (d. young); Jia Yuanchun, Imperial Consort; Jia Lian × Wang Xifeng; Jia Baoyu; (by Concubine Zhao) Jia Tanchun, Jia Huan", "The novel's centre: two marriages, one prodigal, one jade. Xifeng runs the house on the strength of being Lady Wang's niece."],
            ["cao", "Jia Rong × Qin Keqing", "Jia Lan (Jia Zhu's posthumous son)", "The register's youngest; Qiaojie belongs here too, as Wang Xifeng's daughter."],
          ],
        },
      },
      {
        h: "The marriages that run the plot", zh: "聯姻",
        paras: [
          "Three outside families attach to the Jias by marriage, and each attachment is a plot engine. The Wangs attach twice — Lady Wang to Jia Zheng, and her niece Wang Xifeng to Jia Lian — which is why the niece manages the whole Rongguo household: her aunt owns the husband's line and her own family owns the money sense. The Xues attach through Lady Wang's sister Lady Xue, who moves into the Jia compound with Baochai and the oaf Xue Pan; the Lins attach through Jia Zheng's sister Jia Min, whose death brings Daiyu to the house in chapter 3 with nothing but a father far away.",
          "That is the arithmetic behind the novel's central triangle: Daiyu is the father's-side cousin (a Jia by blood), Baochai the mother's-side cousin (a Wang by blood), and the family's choice between them is also a choice between the two mothers' families. The tree is not background; it is the board the game is played on.",
        ],
      },
      {
        h: "How to check any of this", zh: "對照",
        paras: [
          "The genealogy is recited by the antique dealer Leng Zixing in chapter 2 — the novel's own guided tour of the family before you meet it. Every row above can be checked against that chapter and against the expandable tree on this site's register page, which carries the same members with their fates.",
        ],
        note: "Generation attributions and the marriage web follow chapters 2–4 as recited; the reading of the triangle's kinship arithmetic is this site's.",
      },
    ],
    faq: [
      ["How are Baoyu, Daiyu and Baochai related?", "Daiyu is Baoyu's cousin on his father's side (his aunt Jia Min's daughter); Baochai is his cousin on his mother's side (Lady Wang's sister's daughter). Both are cousins; the novel weighs the two bloodlines against each other."],
      ["Why does Wang Xifeng run the Rongguo house?", "She is married to Jia Lian of the yu generation, but her power is natal: she is Lady Wang's own niece, and the aunt-brother-in-law pair hold the house together."],
      ["Are the Ningguo and Rongguo houses separate families?", "One family, two titled lines from two founding dukes. They share the ancestral compound's rites; the story mostly keeps Rongguo for the family and Ningguo for its scandals."],
    ],
    sources: [
      [`The novel in Chinese, chapter 2 — Leng Zixing recites the genealogy (read 6 Oct 2026)`, CH_TEXT],
      [`English Wikipedia, “Dream of the Red Chamber” — the character list and family relations`, WIKI],
    ],
  },
  {
    slug: "first-maid-expelled", navLabel: "The first expulsion", cardZh: "茜雪",
    cardTitle: "The first maid Baoyu's house lost",
    cardBody: "Before Jinchuan and Qingwen made expulsion famous, there was Xueqian — dismissed offstage after the maple-dew tea of chapter 8, and gone by chapter 20.",
    seoTitle: "Who Was the First Maid Expelled in Red Chamber?",
    seoDesc: "The first maid expelled in Dream of the Red Chamber was Xueqian, lost after the maple-dew tea night of chapter 8 — a dismissal the novel never even stages.",
    kicker: "Reading note VI · The first expulsion",
    h1: "Who was the first maid expelled from Baoyu's house?",
    h1zh: "楓露茶·茜雪",
    lede: "Not Jinchuan, and not Qingwen. The first maid the household lost was Xueqian, and the novel's treatment of her is colder than either famous case: her dismissal happens between chapters, offstage, announced later in someone else's grievance.",
    answer: [
      ["The answer", "Xueqian. Baoyu, drunk and angry that his maple-dew tea had gone to his old nurse, calls for the maid to be dismissed in chapter 8 — and by chapter 20 she is simply gone."],
      ["The famous cases came later", "Jinchuan, dismissed by Lady Wang in chapter 30 and drowned by chapter 32; Qingwen, expelled in chapter 77 during the searches, dead within it."],
      ["Why it matters", "The novel lets a drunk boy's word destroy a maid without a scene — the quiet version of an expulsion it will later show twice at full volume."],
    ],
    blocks: [
      {
        h: "The maple-dew tea night", zh: "楓露茶",
        paras: [
          "Chapter 8: Baoyu comes back from the Pear Fragrance Court with wine in him and asks for his maple-dew tea — the kind that takes three changes of water and an afternoon. He learns his old wet-nurse Li Nanny has drunk it. Drunk, furious at the familiarity, he smashes the cup and calls for the maid who let it happen to be sent away: that maid is Xueqian. The household calms him; the chapter closes the incident.",
          "And that is all the novel shows. The dismissal itself is never staged. By chapter 19 it is an accomplished fact, and chapter 20 confirms it through Li Nanny's own grumbling — the same nurse whose tea-drinking caused it, complaining that the maid is already gone. The offstage-ness is the point: a servant's ruin did not need a scene.",
        ],
      },
      {
        h: "The two expulsions everyone knows", zh: "後例",
        paras: [
          "Set beside her, the later cases are public events. Jinchuan teases back once too brightly in chapter 30, is struck and dismissed by Lady Wang on the spot, and drowns herself in a well; her death, attached to Baoyu's name, is half of what gets him beaten in chapter 33. Qingwen is taken in the chapter 77 sweep after the garden search — carried out ill, with her things thrown after her — and dies in her cousin's hovel. Fangguan and the little actresses are driven to nunneries in the same chapter.",
          "Three expulsions in one book, and the first of them is the one without a witness. Readers looking for where the novel's casual cruelty begins should start at the tea.",
        ],
        note: "Chapter attributions are the text's. Xueqian's dismissal being the first named expulsion is this site's count against the chapters cited; the novel does not rank its maids.",
      },
    ],
    faq: [
      ["Who was the first maid expelled in Dream of the Red Chamber?", "Xueqian, Baoyu's maid, dismissed after the maple-dew tea incident of chapter 8 and confirmed gone by chapter 20. The dismissal itself happens offstage."],
      ["Was Xueqian expelled because of Baoyu?", "His drunken order in chapter 8 is the last cause shown; the novel never stages the decision or names who carried it out, which is itself the sharpest detail."],
      ["Who are the famous expelled maids?", "Jinchuan, dismissed in chapter 30 and drowned by chapter 32; Qingwen, expelled in chapter 77 and dead within the chapter; the actresses including Fangguan, driven to nunneries the same chapter."],
    ],
    sources: [
      [`The novel in Chinese, chapters 8, 19–20, 30, 32, 77 — the tea night, the confirmation, and the later expulsions (read 6 Oct 2026)`, CH_TEXT],
      [`English Wikipedia, “Dream of the Red Chamber” — the maid characters and the garden search`, WIKI],
    ],
  },
];
