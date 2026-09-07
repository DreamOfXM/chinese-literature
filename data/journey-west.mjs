// Journey to the West — the dramatis personae, numbered by first appearance.
// Row: [place, demon, treasureOrAbility, resolution, chapters]  (see TRIBULATIONS below)
//
// PEOPLE record shape (consumed by the leaf engine in ../render.mjs):
//   { id, grp, zh, en, nn, nng, label, trib?, meta, hook, events, end }
//     grp    "pilgrim" | "heaven" | "demon" — the index table's filter
//     nn/nng Chinese + English epithet;  label  the title the page is filed under
//     trib   the TRIBULATIONS chapter-range key this character's episode sits on
//     events [chapterLabel, 回目短语(traditional), English deed title, English deed]
//   Chinese names are roster forms; quoted episode titles are traditional.
export const PEOPLE = [
  {
    id: 1, grp: "pilgrim", zh: "孙悟空", en: "Sun Wukong", nn: "美猴王", nng: "Handsome Monkey King",
    label: "齐天大圣", trib: "",
    meta: [["Origin", "a stone egg on the Mountain of Flowers and Fruit"], ["Weapon", "the Ruyi Jingu Bang — 13,500 jin of sea-iron"], ["Fruits won", "72 transformations; the cloud-somersault; 火眼金睛"]],
    hook: "Born from stone, self-taught in death, and the only creature in the book who ever made heaven renegotiate.",
    events: [
      ["ch. 1", "靈根育孕", "Leaping the Waterfall Unasked", "A stone egg bursts; the macaque leaps the waterfall unbidden and is crowned king of the Water-Curtain Cave."],
      ["ch. 2", "菩提授道", "Subodhi Names Him Wukong", "Thirty years sailing for a master, till Subodhi names him Wukong — Awakened to Emptiness — and teaches him seventy-two changes."],
      ["ch. 3", "鬧地府", "Erased from the Book of Life", "Dragged off in his sleep, he walks out of the underworld with his own name erased from the Book of Life and Death."],
      ["ch. 4-7", "大鬧天宮", "Havoc in Heaven", "Keeper of horses, then Great Sage Equal to Heaven: the peach banquet eaten, Laojun's furnace kicked over, a hundred thousand troops beaten."],
      ["ch. 7", "五行定猴", "The Pillar That Was a Finger", "The Buddha bets him his palm against a somersault; Wukong reaches the farthest pillar and finds it is a finger."],
      ["ch. 14", "心猿歸正", "The Gold Fillet Yoke", "Dug out of the mountain on the condition of a gold fillet he cannot see the reason for."],
      ["ch. 27", "三打白骨精", "Three Strikes at the Skeleton", "He kills a woman, an old wife and an old man; the third was a skeleton, and the monk reads only three murders."],
      ["ch. 57-58", "二猿合戰", "Fighting His Own Face", "An impostor with his face, his staff and his ring; he is the one who insists on being beaten to prove he is real."],
      ["ch. 98", "真經無字", "The Wordless Scriptures", "He comes home with no texts at all, and accepts that this is the correct cargo."],
    ],
    end: "At Spirit Mountain he is made the Victorious Fighting Buddha and asks, politely, for the fillet back. The Buddha says that when he became a buddha the ring vanished of itself — which is the novel's one plain statement that the restraint was never the point.",
  },
  {
    id: 2, grp: "pilgrim", zh: "唐僧", en: "Tang Sanzang", nn: "唐三藏", nng: "Tripitaka of the Tang",
    label: "旃檀功德佛", trib: "",
    meta: [["Origin", "the Golden Cicada, second of the Buddha's disciples"], ["Borne", "ten lives of toil for yawning during a lecture"], ["Wears", "the 錦襴袈裟 and the fillet he cannot remove"]],
    hook: "The only pilgrim with no powers, who nevertheless is the one who decides when the story may end.",
    events: [
      ["ch. 9", "陳光蕊赴任", "Set Adrift on a Plank", "An infant set adrift on a plank by his mother, saved by a monk at Jinshan and raised as the river-boy Jiangliu."],
      ["ch. 12", "玄奘立誓", "The Oath and the Undated Road", "Named Tripitaka, adopted as the emperor's brother, and he leaves without saying how long it will take."],
      ["ch. 14", "收猴", "Naming the Monkey", "He gives Wukong a name and a collar in the same breath, and does not understand either of them for forty years."],
      ["ch. 27", "貶書逐徒", "Writes His Own Expulsion Letter", "He writes the expulsion letter with his own hand, and is kidnapped eleven days later."],
      ["ch. 47", "替人間災", "Weeping for Chen Village", "He weeps at Chen Village over the boy and girl due to the river god, and his disciples take his place instead."],
      ["ch. 78", "童心之藥", "Refusing the Heart Elixir", "He refuses an elixir made of 1,111 children's hearts so flatly that even Wukong is surprised."],
      ["ch. 99", "登鷲嶺", "Climbing Vulture Peak", "He walks the last approach on his own two feet, and is the one who must be told the scriptures are wrong."],
    ],
    end: "He completes the journey, drowns once on the final river, and is made the Candana Merit Buddha. His last recorded act in the world is to fall off a horse and be rescued by his own disciples, which the novel does not treat as a joke.",
  },
  {
    id: 3, grp: "pilgrim", zh: "猪八戒", en: "Zhu Bajie", nn: "猪刚鬣", nng: "Pig Ganglie",
    label: "天蓬元帥", trib: "",
    meta: [["Fell from", "command of a hundred thousand water-troops"], ["Weapon", "the nine-toothed rake, 5,048 jin"], ["Changes", "thirty-six, and mostly into things that are eating"]],
    hook: "A decorated general of heaven demoted into a pig's body, who complains about the mission on every road and finishes it anyway.",
    events: [
      ["ch. 19", "雲棧洞", "Hired Hand at the Gao House", "He has already eaten the wife of the cave and is working as a hired labourer at the Gao house when Wukong arrives."],
      ["ch. 19", "高老莊", "Scouring Off at Gao Manor", "He takes off the filth in front of the whole family and asks to be called by his lay name."],
      ["ch. 27", "讒言", "Two Whispers Against Wukong", "He supplies the whisper that turns the monk against Wukong, twice, and gets nothing for it."],
      ["ch. 31", "義激猴王", "Provoking the Monkey with Lies", "He goes to Flower-Fruit Mountain to beg the monkey back and has to lie about being wanted."],
      ["ch. 72", "濯垢泉", "Webbed by the Spider Women", "He volunteers to fight the spider women and is the one who is webbed."],
      ["ch. 93", "繡球", "The Silk Ball", "A silk ball thrown at the monk's head, and he is the one who wants to stay for the wedding."],
    ],
    end: "He is made the Net-Attendant Envoy, whose reward is to eat the leftovers on the altar — heaven's most honest prize, since it is exactly the thing he never stopped wanting. He keeps his pig's face.",
  },
  {
    id: 4, grp: "pilgrim", zh: "沙和尚", en: "Sha Wujing", nn: "沙悟净", nng: "Sha the Purified",
    label: "卷帘大將", trib: "",
    meta: [["Fell from", "the curtain-shading post at the Lingxiao Hall"], ["Crime", "breaking a crystal goblet"], ["Wears", "nine skulls that will not sink"]],
    hook: "The ex-general who lost his rank over a broken cup, and who has carried the luggage ever since without ever being asked what he thinks.",
    events: [
      ["ch. 22", "流沙河", "The Skulls That Would Not Sink", "He has eaten nine monks on this sand, and the tenth's skulls hang at his neck because they refuse to sink."],
      ["ch. 22", "受戒", "The Nine Skulls Made Raft", "He is shaved, named Wujing, and the nine skulls become the raft the monk crosses on."],
      ["ch. 40", "守擔", "Guarding the Load and the Horse", "His whole dramatic function is the load, the horse, and the line 'brother, go and look for him.'"],
      ["ch. 55", "被擒", "Taken Guarding the Luggage", "He is taken while the others are away and is nearly executed as the bag of luggage's guardian."],
      ["ch. 90", "救師", "Fetching Wukong Without Arguing", "When the lion sage carries the monk off, it is Sha who goes for Wukong and does not argue."],
    ],
    end: "At Spirit Mountain he asks for nothing, and is made the Arhat of the Golden Body — nine skulls, one broken goblet, and a heaven's-worth of patience credited to his account.",
  },
  {
    id: 5, grp: "pilgrim", zh: "白龍馬", en: "White Dragon Horse", nn: "敖烈", nng: "Ao Lie of the West Sea",
    label: "西海龍子", trib: "",
    meta: [["Rank", "lawful heir of the Western Sea"], ["Crime", "burning a pearl his father had given"], ["Eaten", "the monk's first horse, at Eagle-Grief Ravine"]],
    hook: "A dragon prince sentenced to death for burning one jewel, saved by Guanyin, and spent for fourteen years as luggage.",
    events: [
      ["ch. 15", "鷹愁澗", "The Steed Eaten at Eagle Gorge", "He comes out of the water and eats the emperor's horse, and fights Wukong to a draw in the riverbed."],
      ["ch. 15", "鋸角", "Sawn Horns and the Red Rope", "Guanyin saws off his horns, files down his claws, and turns him into a horse with a red rope for a bridle."],
      ["ch. 30", "化婦刺妖", "The Dancer's Blade", "With his two brothers dead or scattered he takes human form as a dancer, stabs the Yellow Robe demon, and is crippled for it."],
      ["ch. 31", "馱師", "Bearing the Tiger from the Palace", "He carries the transformed tiger-monk out of the palace where no disciple could."],
    ],
    end: "At the end he is made the Dragon of the Eight Paths of Extensive Power, and the novel shows him doing it: on the pillar before the Great Cloud Temple he throws off the horse hide, grows his scales, and coils up the column. It is the only conversion in the book that looks like relief.",
  },
  {
    id: 6, grp: "heaven", zh: "观世音菩萨", en: "Guanyin", nn: "观世音", nng: "She Who Hears the World's Cries",
    label: "南海落伽山", trib: "16-17, 40-42, 47-49, 68-71",
    meta: [["Seat", "Putuo Island in the Southern Sea"], ["Role", "the journey's sponsor and its insurance policy"], ["Keeps", "three fillets: gold, constraining, forbid"]],
    hook: "The one who designs the expedition, and then has to be woken up, uncombed and half-dressed, more often than anyone else in the book.",
    events: [
      ["ch. 8", "訪取經人", "Carrying the Three Treasures", "Given the three treasures, she goes looking for the monk and finds three future disciples on the way."],
      ["ch. 17", "收黑熊", "The Fillet on the Black Bear", "She borrows Li Jing and Nezha, turns Wukong into a pill, and puts the constraining fillet on a bear who wanted only to be a friend to monks."],
      ["ch. 26", "活人參果", "Jade Vial of Reviving Dew", "Her dew-water in a jade vial brings the ginseng tree back, and Zhenyuan Daxian pours tea for her afterwards."],
      ["ch. 42", "金箍縛孩", "Five Rings on the Lotus Seat", "She plants thirty-six knife-blades as a lotus seat, lets him sit on them, then closes five rings on his head and limbs."],
      ["ch. 49", "提竹籃", "The Uncombed Net", "She comes to the river without combing her hair and fishes the goldfish out of her own lotus pool."],
      ["ch. 71", "收金毛犼", "Reclaiming Her Own Runaway Mount", "She has to admit the beast was her own mount, and had been away the length of the king's grief."],
    ],
    end: "She ends the book exactly where she began it, in the Southern Sea, with the fillet's owner never having to appear again. The pilgrims pass her cave on the way home and do not stop.",
  },
  {
    id: 7, grp: "heaven", zh: "如来佛祖", en: "Sakyamuni Buddha", nn: "释迦摩尼", nng: "Sakyamuni of the West",
    label: "靈山雷音", trib: "56-58, 74-77",
    meta: [["Seat", "Thunderclap Monastery on Spirit Mountain"], ["Act for Wukong", "one palm, one verse, one mountain"], ["Act for the monk", "deliberately hands over the wrong scriptures"]],
    hook: "He puts a monkey under a mountain with his hand closed, and gives the scriptures without writing them out with the other.",
    events: [
      ["ch. 7", "賭一掌", "Writing the Six-Word Seal", "He offers a bet the monkey cannot lose, wins it without changing his expression, and writes a six-syllable seal on the mountain's top."],
      ["ch. 58", "辨四猴", "Naming the Four Monkeys", "He names the four kinds of spiritually gifted monkeys, which is the first time anyone in the book has been able to tell the two Wukongs apart."],
      ["ch. 77", "收大鵬", "The Oath Kept in the Maw", "He lets his own uncle swallow him out of a promise he made in a former life, and keeps the promise while collecting the bird."],
      ["ch. 98", "無字真經", "The Scripture with No Letters", "He authorises a blank scripture, on the grounds that the true words have no letters in them."],
      ["ch. 100", "認舊徒", "Naming the Golden Cicada", "At the investiture he names the monk his own second disciple 金蝉子, sent east for not attending to the teaching, which is the reason there was ever a journey to write."],
    ],
    end: "He distributes the fruits at the end — a buddhahood, three arhatships, an envoyship and a dragon's pillar — and the novel's last word about the arrangement is that everyone accepted theirs, including the monkey who had once refused everything.",
  },
  {
    id: 8, grp: "heaven", zh: "太上老君", en: "Taishang Laojun", nn: "道祖", nng: "The Patriarch of the Way",
    label: "離恨天兜率宮", trib: "32-35, 50-52",
    meta: [["Seat", "the Tushita Palace above the Heaven of Resentment"], ["Keeps", "the diamond snare, the eight-trigram furnace, two boy servants"], ["Servants lost", "two to Buddha's test, one to his own ox-boy's nap"]],
    hook: "The Taoist patriarch whose scrapes are the journey's backbone: the monkey was cooked in his furnace, and everything that ever disarmed Wukong came out of his house.",
    events: [
      ["ch. 6", "金剛琢", "Casting Down the Diamond Ring", "He drops the diamond snare from heaven and it catches Wukong on the head, which is how the capture ends up working."],
      ["ch. 7", "煉丹失猴", "The Eight-Trigram Furnace", "He put the monkey in the eight-trigram furnace to be destroyed; the furnace is why Wukong can see through every disguise in the book."],
      ["ch. 35", "收二童", "Reclaiming the Two Horned Boys", "He comes down for the gold and silver horns, shakes his sleeve, and the two kings become two boys again."],
      ["ch. 39", "九轉還魂丹", "The Nine-Turn Soul-Return Pill", "He supplies the pill that restarts a king dead three years in a well, and is not thanked for it."],
      ["ch. 52", "失青牛", "The Plantain Fan for the Ox", "He discovers his ox has gone only when Wukong's staff turns up missing too, and comes down with a plantain fan to call it back."],
    ],
    end: "He is the only power in the book who loses things repeatedly and remains indispensable: the furnace, the snare, the ox, the boys. His last appearance is a pill handed over without a sermon attached.",
  },
  {
    id: 9, grp: "heaven", zh: "玉皇大帝", en: "Jade Emperor", nn: "大天尊", nng: "Great Celestial Worthy",
    label: "天庭靈霄殿", trib: "",
    meta: [["Reign", "1,550,000 years and change"], ["Cultivation", "one thousand eight hundred and fifty tribulations"], ["Two episodes", "a monkey in the hall; a drought in Fengxian"]],
    hook: "The administrator of everything, whose authority in the novel rests on having suffered more patiently than anyone else.",
    events: [
      ["ch. 4", "招安", "The Horse-Stable Patent", "He grants the monkey the horse-stable post and then the empty title, which is the whole rebellion in two appointments."],
      ["ch. 7", "蓋天聞難", "Sending for the Buddha", "When the rebellion reaches the hall he is behind the tables until Wang Lingguan holds the door, and his first act is to send for the Buddha."],
      ["ch. 31", "查奎木狼", "Counting the Twenty-Eight Stars", "He counts the stars of the twenty-eight mansions and finds one missing thirteen years, which is how a demon turns out to be a department."],
      ["ch. 87", "米山油鎖", "The Rice Mountain and Oil Lock", "He withholds rain from Fengxian behind a mountain of rice and a lock of oil, on the grounds that a prefect once knocked over his offering table."],
    ],
    end: "He outlasts all of it. The rice mountain is pecked away by one phoenix and the oil lock burned through by one rat, and when the pilgrims finally come, it rains in Fengxian the same week.",
  },
  {
    id: 10, grp: "heaven", zh: "二郎神", en: "Erlang Shen", nn: "显圣真君", nng: "The Manifest True Lord",
    label: "灌江口", trib: "62-63",
    meta: [["Power", "seventy-two changes, a third eye, and six brothers of Meishan"], ["Holds", "the howling-sky dog"], ["Status", "he keeps heaven's pay and refuses heaven's court"]],
    hook: "The only fighter the novel lets beat Wukong one-on-one, and he does it before the journey is even assigned — then shows up again decades later as a favour.",
    events: [
      ["ch. 6", "小聖施威", "Shape Matched Against Shape", "They match each other through an eagle, a serpent, a sparrow and a fish, until the dog takes Wukong's calf."],
      ["ch. 6", "搗毀洞府", "Burning Water-Curtain Cave", "He sets Water-Curtain Cave on fire, which is why the monkey's home is a memory in the rest of the book."],
      ["ch. 63", "咬落一頭", "The Hound Takes a Head", "Hunting near the Blue Wave Pool, he lends the dog; it takes one of the nine heads and the rest of the demon flies away with it."],
    ],
    end: "He is the only character who wins a duel against the protagonist and then disappears into the good kind of obscurity: no office in heaven's list, no grudge, and his name used once more as a courtesy.",
  },
  {
    id: 11, grp: "heaven", zh: "李靖", en: "Li Jing", nn: "托塔天王", nng: "Pagoda-Bearing Heavenly King",
    label: "天庭大元帥", trib: "59-61, 80-83",
    meta: [["Office", "commander-in-chief of the heavenly hosts"], ["Carries", "the golden pagoda that keeps his son in order"], ["Dependency", "a demon he caught once and let go"]],
    hook: "Heaven's general, who has to come down personally to collect a debt raised at the Buddha's assembly — from a rat he once agreed to call his daughter.",
    events: [
      ["ch. 4", "伐花果", "The First Fruit Mountain Campaign", "He leads the first expedition against the monkey and loses the vanguard to Nezha."],
      ["ch. 6", "照妖鏡", "Holding the Demon Mirror", "He holds the mirror during the capture so that no transformation can pass for anything but itself."],
      ["ch. 80", "認義女", "The Tablets That Stayed His Blade", "The rat demon has his and his son's tablets in her cave; he cannot simply kill her, which the novel treats as a real embarrassment."],
      ["ch. 83", "下界擒鼠", "The Mirror and the Son Descend", "He comes with the mirror and his son, folds the Bottomless Pit, and takes her up to the court to answer for the monk."],
    ],
    end: "He keeps the pagoda, the command, and the daughter he did not want. The novel's verdict is that mercy once shown has to be collected on somebody's schedule, and it is usually his.",
  },
  {
    id: 12, grp: "heaven", zh: "哪吒", en: "Nezha", nn: "三太子", nng: "The Third Prince",
    label: "中壇元帥", trib: "",
    meta: [["Body", "lotus roots and a brick face, after he gave his flesh back"], ["Carries", "the universal ring and the fire wheels"], ["Also", "the executioner heaven sends when a king has cut off someone's head"]],
    hook: "The prince who cut his own flesh to settle a debt with his father, and whose second career is being the one who beheads monsters at the joint.",
    events: [
      ["ch. 4", "先鋒", "The Three-Headed Vanguard Outdone", "He goes ahead of the army against the monkey, changes into a three-headed six-armed form, and is out-changed."],
      ["ch. 51", "戰兕牛", "The Diamond Snare", "He fights the rhinoceros-ox with the fire wheels and loses a sword arm to the diamond snare."],
      ["ch. 83", "斬妖", "First into the Bottomless Pit", "It is Nezha who goes down first into the Bottomless Pit, and who wants to finish the rat on the spot until his father's debt intervenes."],
    ],
    end: "He is the last figure in the book who still fights for the sheer administrative pleasure of it. Heaven never thanks him; he never asks to be thanked.",
  },
  {
    id: 13, grp: "heaven", zh: "太白金星", en: "Taibai Jinxing", nn: "長庚星", nng: "The Long-Light Star",
    label: "天庭天使", trib: "32-35",
    meta: [["Function", "heaven's only negotiator"], ["Method", "always proposes the amnesty, never the battle"], ["Off-stage act", "hides the sun and moon for one false gourd"]],
    hook: "The old star who talked heaven into giving a rebel a job twice, and who is the one person in the book Wukong addresses as a friend.",
    events: [
      ["ch. 4", "宣招", "Carrying the Summons to the Cave", "He proposes the appointment instead of the campaign, and personally walks into the cave to fetch the monkey."],
      ["ch. 5", "再招", "Offering the Empty Title", "After the second war begins he proposes the empty title Great Sage Equal to Heaven, which holds for exactly one peach banquet."],
      ["ch. 34", "藏日月", "The Sun and Moon Hidden Away", "He obliges Wukong's scheme to blacken sky and earth so a gourd can be swindled out of a demon, and does not ask why."],
    ],
    end: "He survives every war he tried to prevent, which is the fate of diplomats in the novel. His last scene is a favour done for a monkey, and no record of heaven's opinion on it.",
  },
  {
    id: 14, grp: "heaven", zh: "镇元大仙", en: "Zhenyuan Daxian", nn: "與世同君", nng: "Co-equal With Heaven",
    label: "五莊觀", trib: "24-26",
    meta: [["Cult", "not a buddhist, not a Taoist of heaven's list"], ["Grows", "the ginseng tree: 3,000 years to flower, 3,000 to bear, 3,000 to ripen"], ["Rule", "the fruit must meet five elements to survive being touched"]],
    hook: "An immortal so old that heaven's register lists him as a peer rather than a subject, who takes a whole pilgrimage party into one sleeve without a fight.",
    events: [
      ["ch. 24", "人參果", "Two Fruits for an Old Friend", "He sends two fruits to the monk for his old friendship, and the monk weeps at the sight of them because they look like children."],
      ["ch. 25", "推樹", "The Ginseng Tree Felled", "The boys curse, the monkey goes out at midnight, and by morning the tree of forty-seven thousand years is on the ground."],
      ["ch. 25", "袖裡乾坤", "Four Captures from One Sleeve", "He catches them four times in a row without weapons, simply by opening his sleeve."],
      ["ch. 26", "結拜", "Sworn Brothers at the Tree", "He accepts the dew-water, the tree returns, and he becomes Wukong's sworn brother on the spot."],
    ],
    end: "He is the only antagonist the novel lets offstage without a killing, a fetching or a punishment: he pours wine, asks for the tree's pardon, and gives the monkey nine more fruits.",
  },
  {
    id: 15, grp: "heaven", zh: "唐太宗", en: "Emperor Taizong", nn: "文皇帝", nng: "The Civil Emperor",
    label: "貞觀天子", trib: "",
    meta: [["Reign", "the Zhenguan years"], ["Debt", "a dead dragon's claim on his life"], ["Buys", "twenty years of additional lifespan"]],
    hook: "The emperor who starts the whole journey because he died for a night, lost an argument in the underworld, and came back owing a favour to the dead.",
    events: [
      ["ch. 10", "鬼門關", "The Promise to the Dragon King", "He promises the dragon king his life and says nothing when Wei Zheng kills it in a dream over a board of go."],
      ["ch. 10", "還魂", "Borrowed Gold for the Hungry Dead", "He goes down to adjudicate, is asked what he brought for the hungry dead, and borrows treasure that is not his."],
      ["ch. 12", "水陸大會", "The Mass for the Homeless Dead", "He holds the mass for the homeless dead and asks the room who among them can go and get the real scriptures."],
      ["ch. 13", "御弟", "The Pinch of Home Earth", "He makes the monk his brother, gives him the name Sanzang, and a pinch of home earth to shake into his tea wherever he drinks water."],
    ],
    end: "He gets the twenty years added to his ledger, keeps his throne, and is remembered in the novel only for having asked the one question nobody else thought to ask: is there a better scripture than the one we are using?",
  },
  {
    id: 16, grp: "heaven", zh: "魏征", en: "Wei Zheng", nn: "人曹官", nng: "Director of Human Affairs",
    label: "大唐宰相", trib: "",
    meta: [["Office", "counsellor to the throne and star-officer of heaven"], ["Act", "one game of chess"], ["Consequence", "the founding of the pilgrimage"]],
    hook: "The minister who beheads a dragon king without leaving his chair, in the middle of a game of chess, while the emperor is losing on purpose.",
    events: [
      ["ch. 10", "夢中斬龍", "The Dragon Slain in a Dream", "He is summoned to play a board, falls asleep over it, and a dragon's head falls from the sky onto the steps outside."],
      ["ch. 10", "失棋", "The Chess Game and the Axe", "The emperor keeps him at the board in order to stop the execution; the record says Wei Zheng won the game and the dragon lost his head anyway."],
      ["ch. 10", "對質", "Facing a Dead Man's Accusation", "He is summoned downstairs to answer a dead man's accusation and does it in the manner of a man who has paperwork."],
    ],
    end: "He keeps his post at court, his reputation for remonstrating, and one impossible incident to his name. The novel uses him to make a point it never restates: the machinery of heaven and the machinery of the Tang court are the same office.",
  },
  {
    id: 17, grp: "heaven", zh: "灵吉菩萨", en: "Lingji Pusa", nn: "靈吉", nng: "The Spirit of Effective Blessing",
    label: "須彌山", trib: "20-21",
    meta: [["Holds", "the wind-fixing pill and the dragon-subduing staff"], ["Posted", "at Mount Sumeru, under a rhinoceros's charge"], ["Once caught", "the Buddha's own uncle"]],
    hook: "The bodhisattva whose whole job is to keep one thing locked up, and who has already had to come back twice for the same escape.",
    events: [
      ["ch. 21", "定風丹", "The Pill That Stills the Wind", "He lends the pill that makes Wukong unmovable to the three-fold samadhi wind, so that something can go in and look for the monk."],
      ["ch. 21", "飛龍杖", "The Staff That Became a Beast", "His staff turns into a golden-eyed beast, the wind stops, and the rat is dragged out in his true shape."],
      ["ch. 59", "丹留後用", "A Pill Held in Reserve", "The pill he handed over at Yellow Wind Ridge is what lets Wukong stand his ground when the real plantain fan blows."],
    ],
    end: "He goes back to Mount Sumeru with the demon under his arm. He is the novel's clearest case of a post that exists only because something was once put there to be watched.",
  },
  {
    id: 18, grp: "heaven", zh: "文殊菩萨", en: "Manjusri", nn: "法王子", nng: "Dharma Prince",
    label: "五台山", trib: "36-39",
    meta: [["Mount", "Wutai"], ["Rider", "a blue-maned lion"], ["Debt", "three years of immersion, owed to a king"]],
    hook: "The bodhisattva of wisdom, whose lion was loosed on a king on the Buddha's account, and who arrives to collect it in the middle of a funeral.",
    events: [
      ["ch. 39", "推井", "Explaining the Three-Year Well", "He explains the case: the emperor of Wuji had held a Buddha's incarnation underwater for three days, so a lion was permitted to push him in the well for three years."],
      ["ch. 39", "收獅", "The Lasso for the Lion", "He throws a lasso of sinew and gold, and the fake king shrinks into a four-footed beast before the sword comes down."],
      ["ch. 77", "再收一獅", "Retrieving Another Blue Lion", "He has to come down again at Lion-Camel Ridge for another blue lion, and the novel never reconciles the two."],
    ],
    end: "He takes the lion home and lets the real king keep his throne, his queen and a life extended by a pill from Laojun. Wisdom, in this episode, consists of saying out loud whose fault it was.",
  },
  {
    id: 19, grp: "heaven", zh: "弥勒佛", en: "Maitreya", nn: "東來佛祖", nng: "The Buddha Who Comes From the East",
    label: "當來下生", trib: "65-66",
    meta: [["Keeps", "the gong-beater and the bag-keeper"], ["Lost", "one boy, for half a kalpa"], ["Owns", "the rear-humanity bag"]],
    hook: "The future Buddha, whose bell-ringer sat in his seat for five hundred years and called himself Little Western Heaven.",
    events: [
      ["ch. 65", "假雷音", "A False Western Heaven", "A temple styled Little Western Heaven, a Buddha on the dais and a ring of conjured arhats; the bell the monk bows to is a real bell in a fake temple."],
      ["ch. 66", "問罪", "Picking Melons, Owner of the Bag", "Wukong comes looking for the owner of the bag and finds the heir-apparent of the dharma harvesting melons in a field, on purpose."],
      ["ch. 66", "熟瓜計", "The Ripe Melon Bait", "He is asked to become the ripe melon; the demon eats him, and Wukong works inside him until the gold bell is surrendered."],
    ],
    end: "He folds the boy back into the bag and carries him off, then complains to Wukong about the melons ruined. The novel does not make this a joke about the future Buddha, but it lets him sound like a man whose garden has been vandalised.",
  },
  {
    id: 20, grp: "heaven", zh: "毗蓝婆菩萨", en: "Pilanpo Pusa", nn: "紫雲山千花洞", nng: "The Lady of the Thousand Flowers Cave",
    label: "日宮所炼", trib: "72-73",
    meta: [["Lives", "at Purple Cloud Mountain, alone"], ["Son", "the Star Officer Mao Ri, the celestial rooster"], ["Weapon", "one embroidery needle"]],
    hook: "The bodhisattva nobody had heard of, who kills the invincible centipede with a needle and asks for nothing but two gatekeepers.",
    events: [
      ["ch. 73", "老母傳話", "The Old Mother Names Her", "Wukong learns of her existence from the Old Mother of Li Mountain, the only other being in the book who knows where she lives."],
      ["ch. 73", "針落", "The Needle from the Sleeve", "She takes the needle out of her sleeve; it falls on the demon's crown, the three-thousand-li gold light goes out, and a seven-inch centipede is left on the flagstones."],
      ["ch. 73", "視目", "The Breath That Opened His Eyes", "She breathes on Wukong's eyes, shut by the light, and opens them again — the only healing in the book done without a pill."],
      ["ch. 73", "收七蛛", "The Seven Spiders Collected", "She agrees to take the seven spiders along, on the ground that her cave has no one left to watch the gate."],
    ],
    end: "She goes home with seven spider women as servants and no further business in the story. The episode exists to establish that a thousand eyes are beaten by one needle held by a mother.",
  },
  {
    id: 21, grp: "heaven", zh: "太乙救苦天尊", en: "Taiyi Jiuku Tianzun", nn: "東極天尊", nng: "The Saviour from Every Painful Depth",
    label: "青華宮", trib: "88-90",
    meta: [["Residence", "the green-flower palace"], ["Keeps", "a nine-headed lion and a boy who tends it"], ["Lost", "the lion, while the boy slept"]],
    hook: "The deliverer of the suffering, whose own lion spent three years as the grandfather-demon of a whole mountain range.",
    events: [
      ["ch. 90", "九口開口", "Nine Mouths Opened as One Door", "He does not fight; he opens nine mouths and the monk, the prince, the king and three disciples leave the room inside him."],
      ["ch. 90", "獅奴", "The Saddle Takes Shape", "He arrives in a cloud, beats his boy until the lion lies down with its head under his feet, and becomes a saddle again."],
      ["ch. 90", "三載王面", "Three Years Wearing a Royal Face", "The lion had spent three years wearing a king's face and eating that king's family; the deliverer of the suffering arrives and the account is closed in a page."],
    ],
    end: "He takes the lion home, is begged by Wukong not to kill it, and lets the boy be beaten instead. Nine mouths, one foot, one nap — the rescue is the shortest scene in the book.",
  },
  {
    id: 22, grp: "heaven", zh: "太阴星君", en: "Lady of the Moon", nn: "月府", nng: "Mistress of the Moon Palace",
    label: "廣寒清虛府", trib: "93-95",
    meta: [["Keeps", "the jade rabbit and the cassia"], ["Debt", "one slap, thirteen years ago"], ["Comes", "with the whole palace in procession"]],
    hook: "The keeper of the moon, whose rabbit came down to settle a grudge over a servant's blow and very nearly married the monk.",
    events: [
      ["ch. 95", "現公主", "Lifting the Veil in the Grove", "She lifts the veil off the princess and the palace girls in the courtyard, and lets the real daughter be recognised in the grove outside the city."],
      ["ch. 95", "杵落", "The Pestle Falls from a Sleeve", "The pestle falls out of the false princess's sleeve; it is the only weapon in the book that was used to pound medicine and never to strike a man."],
      ["ch. 95", "護兔", "The Staff Held Over the Hare", "She stops the staff above the rabbit's head: it is her apothecary, and this is a servant leaving her service, not an enemy beaten."],
    ],
    end: "She takes the rabbit back, the true princess goes to her father, and the moon's housekeeping is closed out in a single page. She is heaven's last fetch, and the shortest apology in the book.",
  },
  {
    id: 23, grp: "demon",
    zh: "黑熊精", en: "Black Bear Spirit",
    nn: "黑风大王", nng: "Black Wind Demon King",
    label: "黑風山黑風洞", trib: "16-17",
    meta: [
      ["Lair", "Black Wind Cave on Black Wind Mountain, within sight of the Guanyin Temple"],
      ["Magic", "no treasure and no borrowed relic — a black-pole spear, and a fight the monkey cannot win"],
      ["Collected by", "Guanyin, with one of the three fillets the Buddha gave her; he keeps her mountain"]
    ],
    hook: "He steals the cassock out of love for it, holds a literary banquet to show it off, and is the one demon the book lets hire itself.",
    events: [
      ["ch. 16", "金池謀僧", "The Fire at the Temple Gate", "The two-hundred-and-seventy-year-old abbot of the Guanyin Temple fires the pilgrims' lodging to possess the monk's cassock; the fire is what brings the bear to the gate."],
      ["ch. 16", "夜竊袈裟", "Theft of the Brocade Robe", "He came out of the dark at the sight of the treasure's light and went home with the 錦襴袈裟 under his arm, and no one had yet drawn a weapon."],
      ["ch. 17", "佛衣會", "The Buddhist Robe Banquet", "He invited his neighbours to a Buddhist-Robe banquet to admire what he had taken — a demon who wrote his own invitations and talked doctrine with monks."],
      ["ch. 17", "洞口交鋒", "A Duel Broken for Dinner", "He and Wukong fought from the morning to the noon and back again with no advantage to either side, then he went in, shut the door, and ordered dinner."],
      ["ch. 17", "腹裡翻身", "The Pill Turns in His Belly", "Guanyin put on the shape of the bear's wolf-guest and Wukong became an elixir in the tea; the pill went down with the cup and began walking about inside him."],
      ["ch. 17", "箍定熊羆", "The Fillet Settled on the Bear", "The fillet went on his head, the spell was read once, and the bear asked for his life in the words of somebody who intends to make use of it."],
      ["ch. 17", "守山大神", "Set to Watch the Island Shore", "He was carried off to the Southern Sea in the same cave's shape and set to guard the approach to Guanyin's island."]
    ],
    end: "He is not killed. Guanyin takes him to Putuo and installs him as the Mountain-Guarding Spirit, still a bear, still armed with a spear, and the cassock goes back into the monk's box. The abbot who burned the lodge for it dashes his own head against a pillar. It is the novel's first demonstration that a demon with taste, a library and good manners can expect to be recruited rather than beaten.",
  },
  {
    id: 24, grp: "demon",
    zh: "黄风怪", en: "Yellow Wind Monster",
    nn: "黄风大王", nng: "Yellow Wind Demon King",
    label: "黃風嶺黃風洞", trib: "20-21",
    meta: [
      ["Lair", "Yellow Wind Cave on Yellow Wind Ridge, a defile on the road west"],
      ["Magic", "the samadhi wind — a single breath that shut Wukong's eyes and left him blind on a hillside"],
      ["Collected by", "Lingji Pusa of Little Sumeru, who held the Buddha's wind-fixing pill and flying-dragon staff for this one creature"]
    ],
    hook: "A marten that got too close to the Buddha's sermons, and the only creature on the road who hurts Wukong by blowing at him.",
    events: [
      ["ch. 20", "虎先鋒", "The Tiger Vanguard", "His tiger-spirit vanguard came out of the rock with a sword, and while the monkey was busy with him the monk was lifted off his horse and into the ridge."],
      ["ch. 20", "三昧神風", "One Breath of Samadhi Wind", "The demon came out himself and blew one breath of samadhi wind; the 火眼金睛 closed, watered and could not find the path down, which is exactly what Laojun's furnace had left him with."],
      ["ch. 21", "三花九子膏", "The Ointment for Blinded Eyes", "An old man's parting gift was an ointment for wind-blacked eyes; the monkey slept, woke seeing, and went back up the ridge alone to be refused at the door."],
      ["ch. 21", "定風丹", "Baffled by the Wind-Fixing Pill", "Lingji Pusa put the Buddha's wind-fixing pill in the monkey's mouth. The demon blew till his own mouth was dry and the hair on Wukong's neck did not move."],
      ["ch. 21", "杖化金龍", "The Staff Turns into a Dragon", "Then he let the flying-dragon staff go: it came down a great dragon, took the rodent by the crown, and pinned him so he could not reach his hole under the ridge."],
      ["ch. 21", "貂鼠現形", "The Marten Under the Wind", "Stripped of the wind he gave up his shape: a yellow-furred marten that had once stood in the assembly at Vulture Peak and slipped out of it."]
    ],
    end: "He is not killed on the ridge. Lingji Pusa bundles the marten off to Vulture Peak to answer before the Buddha for the road he blocked, and the bodhisattva makes a complaint while doing it: he had been posted at Little Sumeru to keep an eye on this one creature, and the ridge was not his patch. The wind dropped, and the pass opened the same morning.",
  },
  {
    id: 25, grp: "demon",
    zh: "白骨精", en: "White Bone Demon",
    nn: "白骨夫人", nng: "Lady White Bone",
    label: "白虎嶺屍魔", trib: "27",
    meta: [
      ["Lair", "White Tiger Ridge — a bare hill Wukong could smell before he saw it, with nothing living on it"],
      ["Magic", "the corpse-shedding trick: leave a body where you stood and go off as an insect"],
      ["Owner", "nobody's — no patron comes for her, and the bones have her name written on the spine"]
    ],
    hook: "She never fights anybody. She is already a skeleton, and in three costumes she gets the monk to write out the expulsion of the only one of them who can see her.",
    events: [
      ["ch. 27", "畫地為圈", "The Circle Drawn on Ground", "Wukong drew a ring on the ground with his staff, told the monk not to step outside it, and went off over the hill to find a house that would give them food."],
      ["ch. 27", "初打村姑", "First Stroke on the Village Girl", "A young woman came up the path with food for a husband working in the fields. One stroke, and she threw the body away and got off the hill as a fly."],
      ["ch. 27", "再打老嫗", "The Old Woman Sent Again", "An old woman came weeping for the daughter she had not got back. The second stroke left another shed corpse, and the monk began to shout."],
      ["ch. 27", "三打老翁", "The Old Man's Third Death", "A white-bearded old man came along reciting scripture. This time Wukong had the ridge-gods and land-gods posted in the air to watch, so there was nothing to shed, and he ended her."],
      ["ch. 27", "脊骨留名", "A Name Written on the Spine", "What lay on the road was a pile of bones, and down the spine was written a name: 白骨夫人."],
      ["ch. 27", "親筆貶書", "The Dismissal in the Monk's Hand", "The monk wrote the dismissal with his own brush, and Bajie supplied the obvious theory that the corpses were the monkey's own conjuring."]
    ],
    end: "Killed outright on the third stroke, and nothing comes to collect her: no bodhisattva, no star, no master missing a servant. That is the point of the leaf. She is a corpse that had been bleaching on a dead hill until it learned to talk, and the pilgrimage's worst hour follows her — the monk alone on the road with a pig, and taken at Wave-Moon Cave with nobody left who can see through anybody.",
  },
  {
    id: 26, grp: "demon",
    zh: "黄袍怪", en: "Yellow Robe Monster",
    nn: "奎木狼", nng: "Kui, the Wood Wolf",
    label: "碗子山波月洞", trib: "28-31",
    meta: [
      ["Lair", "Wave-Moon Cave on Bowl-child Mountain, kept as a married house for thirteen years"],
      ["Treasure", "no borrowed relic — a bowl-sized pearl, his own 舍利子玲瓏內丹"],
      ["Collected by", "the Jade Emperor in person, after heaven counted the twenty-eight mansions and found one absent"]
    ],
    hook: "A star of the twenty-eight mansions who came down over an incense-maiden and stayed thirteen years; the end of it starts when his wife asks to hold the pearl.",
    events: [
      ["ch. 28", "波月擒僧", "The Host at Wave-Moon Cave", "With Wukong sent back to the Mountain of Flowers and Fruit, the monk walked into Wave-Moon Cave and the demon had him, politely, for the evening."],
      ["ch. 28", "託書報父", "Entrusting a Letter to the Monk", "His wife was a human princess carried off thirteen years before; she let the monk go on one condition — that Treasure-Elephant Kingdom hear from her."],
      ["ch. 29", "師弟上山", "The Rescue at Bowl-Child Mount", "The king read the letter and begged for his daughter; the pig and the monk's third disciple went up Bowl-child Mountain, and only one of them came back."],
      ["ch. 30", "化虎登朝", "A Tiger Presented at Court", "The demon flew to the palace himself, denied being anything worse than a guest, and laid the monk's face into a yellow-striped tiger's in front of the court."],
      ["ch. 31", "假妻吞珠", "The Fake Wife Swallows the Pearl", "Wukong came back, wore the princess's face, sat in the cave complaining of a pain in his heart, and swallowed the pearl her husband put into his hand."],
      ["ch. 31", "階前墮子", "The Sons on the White-Jade Steps", "He had Bajie and Sha carry the demon's two small sons and dash them on the white-jade steps, so that nothing on earth was left holding the marriage together."],
      ["ch. 31", "星府點名", "Counting the Twenty-Eight Mansions", "Beaten and pearl-less, the demon made for the gate of heaven; the Jade Emperor counted the twenty-eight mansions and named the one not at its post."],
      ["ch. 31", "兜率燒火", "Sent to Shovel the Furnace", "He was not put to death: he was handed to Taishang Laojun to shovel his furnace, with his star kept over him until he had earned it back."]
    ],
    end: "He goes back to his constellation with a record against him, shovelling a Taoist furnace for the length of an offence, and the novel later uses him as though nothing had happened. The human half of the story closes worse: the princess is carried down to her father's city, and the two children she had with a demon are the reason her welcome is not a celebration.",
  },
  {
    id: 27, grp: "demon",
    zh: "金角大王", en: "Golden Horn King",
    nn: "金角大王", nng: "The Elder Horn King",
    label: "平頂山蓮花洞", trib: "32-35",
    meta: [
      ["Lair", "Lotus Cave on Flat-Top Mountain, furnished like a court and run on invitations"],
      ["Treasure", "the purple-gold red gourd — speak to it, be answered, and be dissolved"],
      ["Owner", "Taishang Laojun's gold furnace: the boys were its two keepers, lent out to Guanyin"]
    ],
    hook: "A Taoist patriarch's errand-boy who spent a chapter as the crowned elder of a cave with real rank and real invitations, and was sealed into the property he was set to watch.",
    events: [
      ["ch. 32", "蓮洞議僧", "Arguing in Lotus Cave", "The elder brother of Lotus Cave knew who the Tang priest was and whose disciples he had; against his brother's plan he entered the argument, and lost it."],
      ["ch. 33", "付葫與弟", "Trusting the Gourd to a Brother", "He gave his brother the gourd and the jade vase to go and take the pilgrims, which is the decision the whole chapter turns on."],
      ["ch. 34", "拜假為母", "Bowing to a False Mother", "The answer to his own invitation came back dressed as his mother; he made his bows to a monkey in her clothes, and the cave took its orders from her."],
      ["ch. 34", "金繩縛猴", "Bound in the Golden Snare", "The golden snare his mother had brought went round the monkey's arms; he left a counterfeit of his own making in the same shape and carried off the real one."],
      ["ch. 35", "應名入葫", "The Gourd of Right Names", "The gourd runs on a name and an answer. He answered to his own and went in, and Wukong pasted Laojun's seal-words across the mouth of it."],
      ["ch. 35", "童子還爐", "Restored to Boyhood by the Gourd", "His master came down for the inventory, tipped immortal breath into the gourd, and the elder horn king stood up again as a boy."]
    ],
    end: "Nothing is executed. Taishang Laojun collects the gourd, the vase, the sword, the fan and the snare, says in front of the monkey that Guanyin had borrowed his two furnace boys to put a test in the pilgrim's path, and pours them back out of the property they were made to steal. The brothers go home to the fire; the cave's population of small devils does not.",
  },
  {
    id: 28, grp: "demon",
    zh: "九尾狐狸", en: "Nine-Tailed Vixen",
    nn: "九尾狐", nng: "The Nine-Tailed Fox",
    label: "壓龍洞狐母", trib: "32-35",
    meta: [
      ["Lair", "Press-Dragon Cave, a day's walk from her sons' cave on Flat-Top Mountain"],
      ["Treasure", "the 幌金繩 — Laojun's golden snare, brought out of her sleeve at her sons' asking"],
      ["Avenged by", "her kinsman 狐阿七, who brought troops to Lotus Cave and was beaten to death by Bajie"]
    ],
    hook: "She is a demon's mother on paper only: fetched out of her cave by an invitation to eat the monk, and spent for an afternoon as a suit of clothes.",
    events: [
      ["ch. 34", "手書來請", "Coming with the Golden Snare", "Her sons wrote to ask her to come a long way off and help with the monkey, and to bring the golden snare with her; two devils started up the mountain road with the letter."],
      ["ch. 34", "壓龍赴宴", "The Rope from Press-Dragon Cave", "She set out from Press-Dragon Cave with the rope, on the understanding that the Tang priest's flesh was on the table."],
      ["ch. 34", "棒下現形", "True Form Under the Cudgel", "The monkey was waiting on the path wearing the faces of her sons' messengers. One stroke, and what lay in the road was a nine-tailed fox rather than an old woman."],
      ["ch. 34", "蓮洞拜母", "Bowed to in the Lotus Cave", "He put on her shape, went down into the cave, and let a horned demon king make his obeisances to a monkey while the whole court knelt behind him."],
      ["ch. 35", "舅兵報喪", "The Kinsman's Mourning Band", "The family did come for her. A kinsman brought armed followers to the cave to make good the loss, and was killed on the hill by the pig."]
    ],
    end: "She is dead before the middle of the chapter and nobody grieves her but a kinsman who arrives too late and dies for it. Her snare is copied, her face is worn, and her sons are undone by the errand they sent her on. Laojun comes at the end for the rope and never mentions the woman who was carrying it — the novel's blunkest word on what such families are worth to heaven.",
  },
  {
    id: 29, grp: "demon",
    zh: "银角大王", en: "Silver Horn King",
    nn: "銀角大王", nng: "The Younger Horn King",
    label: "平頂山蓮花洞", trib: "32-35",
    meta: [
      ["Lair", "the same Lotus Cave — the younger brother, and the one who went down the road to do it"],
      ["Treasure", "the mutton-fat jade vase and his brother's gourd, both lost to two devils on a hill path"],
      ["Owner", "Taishang Laojun's silver furnace; Guanyin asked to borrow him for a while"]
    ],
    hook: "He does the work of the episode: three mountains on a monkey's shoulders, a gourd that runs on courtesy, and a defeat delivered by being drunk and careless.",
    events: [
      ["ch. 33", "詐傷求馱", "A Broken Leg and Three Mountains", "He came down the road as an old priest with a broken leg, got the monk to insist, and was lifted onto Wukong's back — where he waited for the mountains."],
      ["ch. 33", "三山壓頂", "Three Mountains on the Head", "He made the hill-spirits bring Sumeru, Emei and Tai down onto the monkey's head and shoulders, and Wukong foamed at the mouth and wept where he stood."],
      ["ch. 33", "假葫換真", "The Gourd Sold Back to Him", "He trusted two small devils with the gourd and the vase; the monkey met them as an immortal selling a better one, and had the sun and moon hidden to prove it."],
      ["ch. 34", "應聲是誰", "The Name-Answering Gourd", "He called the name the monkey had made up for himself, the answer came straight back, and the gourd took Wukong while the cave spent the night sure it was finished."],
      ["ch. 34", "醉中失寶", "Treasures Gone After the Toast", "The cave drank over the capture. He woke with the treasures gone and a stranger on the hill calling him by his own name."],
      ["ch. 35", "銀爐童子", "A Boy at the Silver Furnace", "Laojun's account of him is a job description: a boy at the silver furnace who carried off five of his master's treasures to play at being a king."]
    ],
    end: "He ends inside his own gourd and is let out by his master's hand rather than by the monkey's staff. Laojun takes back the five treasures and the two boys with them, the borrowed mountains go back to the spirits who carried them, and what is left of Lotus Cave — the devils, the stores, the furniture of a court nobody had a right to keep — is finished off by the monkey and the pig.",
  },
  {
    id: 30, grp: "demon",
    zh: "青毛狮子怪", en: "Blue-Furred Lion",
    nn: "青毛獅子", nng: "The Blue-Maned Lion",
    label: "假烏雞王", trib: "36-39",
    meta: [
      ["Lair", "the throne of Wuji Kingdom, and behind it a bodhisattva's cave on Five-Topped Mountain"],
      ["Magic", "no treasure at all — a rain-maker's disguise, then the king's own face and clothes"],
      ["Collected by", "Manjusri, who came out of the air to save the beast from the staff"]
    ],
    hook: "He sits three years on a foreign throne wearing a dead man, with no weapon and no plan, over an accounting of three days that somebody owed a buddha.",
    events: [
      ["ch. 36", "寶林不容", "The Precious Grove Refuses Lodging", "Nothing in Wuji would take the pilgrims in: the temple outside the walls refused them and they bedded down in the ruin among its broken clay guardians."],
      ["ch. 37", "井底遺魂", "Pushing the King into the Well", "That night the drowned king stood at the monk's couch in water and told how a Taoist he had called his brother had pushed him into the garden well at the fifth-month feast."],
      ["ch. 38", "八戒馱屍", "The Body Drawn from the Well", "Wukong cleared the thing that kept the well-house and let Bajie down on a rope for the body, which had lain three years in the dark with its face unmarked."],
      ["ch. 39", "九轉還魂", "Reviving the King with a Pill", "The monkey went up to the Taoist heaven for a pill, took the nine-turn soul-returning one in person, and set the dead king up on his elbows in the temple yard."],
      ["ch. 39", "雙王並立", "Two Kings in One Hall", "The resurrected king walked into his own hall dressed exactly like the man who had replaced him, and the whole court looked at two of him and said nothing."],
      ["ch. 39", "文殊收獅", "Manjusri Catches the Lion", "Wukong had the false king at the corner of the hall before Manjusri cried out to stop; he seized the lion, and then the bodhisattva's hair, before he would listen."]
    ],
    end: "He is reclaimed, not killed. Manjusri explains it as bookkeeping: a buddha's envoy had once been locked in that garden for three days, so the king got three years in the well, and the lion goes back to Five-Topped Mountain with the debt discharged. The true king takes his throne again and rules on — the only restoration on this part of the road that is simply a restoration.",
  },
  {
    id: 31, grp: "demon",
    zh: "红孩儿", en: "Red Boy",
    nn: "圣婴大王", nng: "The Holy Infant King",
    label: "號山火雲洞", trib: "40-42",
    meta: [
      ["Lair", "Fire Cloud Cave at Withered-Pine Glen on Number Mountain"],
      ["Magic", "samadhi true fire from five chariots set in the five phases, with a fire-pointed spear"],
      ["Collected by", "Guanyin — thirty-six heaven-blades for a seat and five rings; he becomes her 善財童子"]
    ],
    hook: "Small enough to be tied to a tree and left for charity, he is the demon who beats Wukong with smoke, and he is taken by being asked to sit down on blades.",
    events: [
      ["ch. 40", "樹上啼兒", "Tied to the Tree-Top, Crying Out", "A boy of seven, bound to a tree-top, called down that his father had been robbed and killed and that he had hung there three days."],
      ["ch. 40", "重身試力", "Weighing a Thousand Catties", "He was carried off the tree onto the monkey's back and then made himself weigh a thousand catties, to see which of them would put him down first."],
      ["ch. 40", "旋風攝僧", "The Whirlwind That Took the Monk", "While they were still on the road with the child a whirlwind came up it, and when Wukong and Sha turned there was no monk in the dust."],
      ["ch. 41", "火乘五車", "Fire from Five Chariots", "He fought from five chariots disposed by the five phases, put out the fire-pointed spear, and blew a fire the dragon kings' rain only fed — it burned the worse for water."],
      ["ch. 41", "煙敗心猿", "Beating the Monkey with Smoke", "Fire the monkey could bear; smoke he could not, because of what he had crouched through in Laojun's furnace. He went off the hill into the river, and the cold water very nearly finished him."],
      ["ch. 41", "假扮觀音", "Baiting the Pig", "He sent a false Guanyin sitting in mid-air to meet the pig coming for help, and brought 猪八戒 back to the cave inside a hide bag."],
      ["ch. 41", "假父承孫", "The Father Who Was Not His", "Wukong answered the boy's call for a father by becoming the Bull King, his own reported sire, and held the trick until the son began asking him about himself."],
      ["ch. 42", "刀坐蓮臺", "Sitting on the Blade Lotus", "Guanyin threw the thirty-six blades of the heaven-staff into the air and they grew a lotus seat; the boy sat down on it delighted, and the blades came up through him."],
      ["ch. 42", "五箍加身", "Five Rings and the Vial Water", "Five rings closed — head, both hands, both feet — with a spell he could not hear without obeying, and the vial water put out the last of the fire."]
    ],
    end: "He is recruited rather than killed, and made the Wealth-Virtue Boy who goes in front of Guanyin at Putuo. The bill arrives in chapters 59 to 61: the Bull King and Princess Iron Fan, the book's one demon household with a marriage in it, treat the adoption as the theft of their son, and say so at length before fighting the monkey over a fan.",
  },
  {
    id: 32, grp: "demon",
    zh: "鼍龙", en: "Tuo Long",
    nn: "鼉龍", nng: "Crocodile Dragon, Nephew of the West Sea",
    label: "黑水河神府", trib: "43",
    meta: [
      ["Lair", "the Black Water River's own spirit palace, which he had evicted its god out of"],
      ["Magic", "no relic and no craft — deep water, black current, and a boat cut from a single log"],
      ["Family", "son of the dragon-king of the Wei River, and nephew of the dragon king of the Western Sea"]
    ],
    hook: "The only demon on the road who is somebody's relation: son of the dragon whose beheading started the journey, collected by his own uncle's house.",
    events: [
      ["ch. 43", "木舟無棹", "The Oarless Boat", "A boat came up the black water with nobody poling it and a boatman's voice, and the monk and Bajie were in it before Wukong had looked twice."],
      ["ch. 43", "炮雲卷僧", "A Storm Cloud Takes the Monk", "Half-way over, a storm-cloud stood up and a thousand ranks of black wave went with it; when it cleared, the far bank was where the boat had been."],
      ["ch. 43", "河神訴主", "The Old Man of the River", "The dispossessed river spirit rose out of the water in an old man's shape to say who had taken his house and turned his river into a larder."],
      ["ch. 43", "摩昂擒鼉", "Taken Alive Out of the Water", "The monkey went to the Western Sea and came back with its eldest prince, who brought dragon soldiers and took the creature out of the water alive."],
      ["ch. 43", "斷流送渡", "Parting the Black Water", "The river god then stopped the stream above and drew it off below, and the pilgrims walked across the dry bed of the Black Water with their luggage."]
    ],
    end: "He is not executed on his own bank. Bound in his true shape he is dragged back to the Western Sea to be locked up by his uncle's family, which the novel presents as relatives clearing up. His father had been beheaded in the tenth chapter for losing a rain bet, and this nephew is the last creature in the book still paying on that account.",
  },
  {
    id: 33, grp: "demon",
    zh: "车迟国三仙", en: "Three Immortals of Chechi",
    nn: "車遲國三仙", nng: "The Three Immortals of Chechi",
    label: "車遲國師", trib: "44-46",
    meta: [
      ["Lair", "the '三清觀' temple in Chechi, where they sat as living gods to be fed"],
      ["Magic", "five-thunder memorials, cloud-stepping meditation, a self-trained cold dragon"],
      ["Owner", "nobody — the North Sea's king calls the rest of it '傍門', the heterodox side-door"]
    ],
    hook: "Three drought-year weather men who ran a kingdom for twenty years and lost it in one afternoon of contests they kept agreeing to.",
    events: [
      ["ch. 44", "敬道滅僧", "Honoring Tao to Ruin the Monks", "They came down during a twenty-year drought when every household was burning incense for rain, called the water, and were made the king's three preceptors; the Buddhist gates came down and five hundred monks were put to hauling carts."],
      ["ch. 45", "三清換像", "Holy Water in Three Vessels", "Wukong, Bajie and Sha tumble the three images of the Pure Ones into the latrine, sit in their places themselves, and pour out 'holy water' into a great jar, a sand basin and a flower vase for the priests to taste and suspect."],
      ["ch. 45", "壇上賭雨", "Betting Rain on the Altar", "Tiger Strength mounts the rain altar and works his five-thunder memorial; Wukong quietly instructs the wind, the clouds and the dragon officers to answer a second set of orders, and the kingdom's weather stops being for sale."],
      ["ch. 46", "雲梯顯聖", "The Cloud Ladder Wager", "The sitting-meditation wager on a hundred stacked tables, climbed on a cloud and never by hand: the monk rides a five-coloured cloud up and stays, and wins after Wukong, small and winged, removes the biting thing Deer Strength had flicked at the monk's head."],
      ["ch. 46", "隔板猜枚", "Guessing Objects Through a Board", "Three readings through a board: the queen's '山河社稷襖' comes out a cracked bell, the emperor's peach comes back a picked-clean stone, and the little Taoist locked in the cabinet walks out chanting Buddhist sutras."],
      ["ch. 46", "三賭誅身", "The Axe, the Stake, the Cauldron", "Beheading, evisceration and the cauldron, in that order: the axe lays a headless yellow tiger in the dust, the empty carcass of a white-haired horned deer is dragged off the stake, and the third never shows a beast's shape at all."]
    ],
    end: "The king weeps, then signs the pilgrims' papers and frees the monks he had enslaved. Only one death is reported with its animal: the goat immortal had boiled his oil with a cold dragon he trained himself, the North Sea's dragon fishes that out from under the pan, and what is left of him is described only as '煠化'. Their one real gift, the text allows, was the rain; the rest was a side door.",
  },
  {
    id: 34, grp: "demon",
    zh: "灵感大王", en: "Inspiration King",
    nn: "靈感大王", nng: "The Inspiration King",
    label: "通天河水府", trib: "47-49",
    meta: [
      ["Lair", "a water-mansion under the Heaven-Reaching River, reached through the ice"],
      ["Weapon", "a nine-petal copper hammer that is an unopened lotus bud he refined"],
      ["Owner", "Guanyin's own lotus pond, which he left the day a high tide came in"]
    ],
    hook: "He bought a village's children with good weather and turned out to be a pet that had floated up to listen too much.",
    events: [
      ["ch. 47", "年年祭祀", "A Boy and Girl Each Year", "At Chen Village a boy and a girl are still dressed and papered each year for the king's table; Wukong and Bajie take the children's places on the altar, giving their names, Chen Guanbao and Yi-cheng-jin, back to him."],
      ["ch. 48", "寒風大雪", "A Frozen River for the Monk", "An aged fish in his council suggests the winter trick: a cold wind, a heavy snow, and the whole river frozen, so that the monk will walk on the ice instead of sailing."],
      ["ch. 48", "石匣藏僧", "The Monk in the Stone Chest", "The ice opens and the monk is carried to a stone chest behind the palace — the size of a pig trough, six feet long — where he sits weeping and composing verse about water disasters until morning."],
      ["ch. 49", "魚籃現身", "The Basket Cast Upstream", "Guanyin arrives at the river with her hair still unpinned, ties her basket to a ribbon off her own jacket, casts it upstream, chants seven times and draws out one gold fish, still blinking."],
      ["ch. 49", "傳影魚籃", "The Fish-Basket Drawn in the Mud", "Somebody in the village kneels in the mud and sketches her exactly as she stands there unfinished, and the novel says that drawing is the original of the fish-basket Guanyin."]
    ],
    end: "Bajie and Sha go down and find the whole water court dead and rotting already; the monk comes out on the back of the river's old soft-shell turtle, who asks to be remembered at Spirit Mountain. That errand is forgotten, and it drowns the last scriptures at the book's final river. The fish itself is not killed: it goes home in the basket, alive.",
  },
  {
    id: 35, grp: "demon",
    zh: "独角兕大王", en: "Lone-Horned Ox Demon",
    nn: "獨角兕大王", nng: "Great King of the Single-Horned Si",
    label: "金兜山金兜洞", trib: "50-52",
    meta: [
      ["Lair", "Gold-Hoop Mountain, Gold-Hoop Cave, in deep winter"],
      ["Treasure", "the '金剛琢' — Laojun's ring from crossing the pass; weapons, fire and water cannot touch it"],
      ["Owner", "Taishang Laojun's blue ox, loose because its herd-boy slept"]
    ],
    hook: "He beat the whole pantheon without ever winning a fight: everything thrown at him was picked up by a ring he wore to bed.",
    events: [
      ["ch. 50", "畫圈遭擒", "The Step Outside the Circle", "Wukong draws a circle in the road with his club and swears it is stronger than bronze walls; the monk, hungry and cold, steps outside it and the mountain's cave takes him, the pig, the friar and the horse."],
      ["ch. 51", "圈子套刀", "One Ring Takes Six Weapons", "Nezha loses six weapons to one cast of the ring, then the thunder-god's hammer, the pagoda king's sword, and Wukong's own club, which next morning stands leaning against the east wall of the cave."],
      ["ch. 51", "水火無功", "Fire-Dragons Taken by the Ring", "Li Jing reasons that nothing in the ring can take water or fire; the fire department's fire-dragons and fire-horses are taken, and so is half the Yellow River poured out of a jade bowl."],
      ["ch. 52", "金丹陷足", "The Ring That Took the Sand", "The Buddha looks with the wisdom-eye, knows exactly who it is, and refuses to say — a loud monkey would only go squabbling up to Spirit Mountain and blame him. He lends eighteen arhats and eighteen grains of golden cinnabar sand to mire the demon's feet. The ring takes the sand."],
      ["ch. 52", "黃皮虼蚤", "The Yellow Dog-Flea", "Wukong goes in at night and finds the ring worn on the demon's bare arm like a beaded bracelet, never removed; he turns into a yellow dog-flea and bites him twice. The ox-man only pulls the ring higher and sleeps."],
      ["ch. 52", "芭蕉扇", "The Plantain Fan Takes the Ring", "Laojun comes down from the Heaven of Resentment with his plantain fan: one wave and the ring is caught out of the air, two and the demon's legs go soft under him."]
    ],
    end: "Laojun blows immortal breath through the ring, pierces the ox's nose, knots his own robe-strap to it and rides the beast home; the narrator stops to say that is where a bull's nose-ring gets its name. Nothing is executed. The club and every stolen weapon come back out of the cave, and the fault is laid, in the text, on a boy who found one pill in the alchemy room and fell asleep.",
  },
  {
    id: 36, grp: "demon",
    zh: "如意真仙", en: "Ruyi Zhenxian",
    nn: "解陽山如意真仙", nng: "Ruyi Zhenxian of Jieyang Mountain",
    label: "解陽山落胎泉", trib: "53-55",
    meta: [
      ["Lair", "the '聚仙庵' at Jieyang Mountain, renamed from a public spring-cave"],
      ["Weapon", "an '如意鉤子' — a long hooked rod he keeps at the well-mouth"],
      ["Kin", "brother of the Bull Demon King; the feud is over his nephew the Red Child"]
    ],
    hook: "A rent-seeker, not a man-eater: he fenced in the one spring in the Women's Kingdom that undoes a pregnancy, and charged pilgrims for a bowl.",
    events: [
      ["ch. 53", "破兒洞改", "One Bowl for Silk and Wine", "The 破兒洞 cave whose water was every woman's remedy in a kingdom of women has been taken over by a Taoist who will give none of it freely: bring silk, wine and fruit, and you may have one bowl."],
      ["ch. 53", "為姪報仇", "Revenge for a Ruined Nephew", "He hears the name Tang Sanzang and flies into a rage — his nephew, he says, was ruined by Wukong, and he has nowhere to find him for revenge; the monk who came begging for water is the luck he asked for."],
      ["ch. 53", "調虎離山", "The Keeper Lured from the Gate", "Wukong fights him out of the gate and up the hillside so that Sha Wujing can walk in with a bucket, and admits afterwards that the quarrel was only the distraction."],
      ["ch. 53", "打折臂膊", "The Arm Broken at the Well", "At the well Sha breaks the Taoist's left arm and stops there, on the grounds that he is in human shape and Sha pities him; Wukong takes the hook, snaps it in two, then in four, and throws it down."]
    ],
    end: "Nothing is killed at Jieyang Mountain. Wukong's stated reason is legal rather than merciful: the man has broken no law, and killing is not as good as letting go — and there is his elder brother the Bull Demon King to consider. The immortal who fenced in a public spring keeps his life, loses his weapon, and is told that whoever comes next for water must not be hindered.",
  },
  {
    id: 37, grp: "demon",
    zh: "蝎子精", en: "Scorpion Spirit",
    nn: "蝎子精", nng: "The Scorpion Spirit",
    label: "毒敵山琵琶洞", trib: "53-55",
    meta: [
      ["Lair", "'毒敵山琵琶洞' in the hills of the Women's Kingdom, behind a screen of stone"],
      ["Weapons", "a three-tined steel fork which is her two grown-over pincers, and a tail-hook called '倒馬毒'"],
      ["Collected by", "Mao Ri Xingguan of the Guangming Palace at the East Gate — the celestial cock"]
    ],
    hook: "The novel gives her one credential and it is not strength: she stung the Buddha's finger, and heaven's answer to her is a bird.",
    events: [
      ["ch. 54", "旋風攝僧", "Whirlwind Off the Queen's Road", "A whirlwind takes the monk off the road the very day the Queen of the Women's Kingdom was trying to marry him; behind the stone screen at the cave door he finds other women she carried off, and a table laid for two."],
      ["ch. 55", "蜂入洞", "The Honeybee at the Lattice", "Wukong comes in as a honeybee through a chink in the gate, sits on the lattice of her flower pavilion and watches the maidens bring up two trays of hot buns: one human-flesh, one vegetarian, so the monk will eat something."],
      ["ch. 55", "倒馬毒樁", "The Twice-Flung Poison Hook", "In the open fight she springs the hook once and pricks Wukong's scalp, then again on Bajie's lip; both retreat howling and she has the cave mouth stacked shut with stone."],
      ["ch. 55", "近他不得", "The Hook in the Buddha's Finger", "Guanyin comes in her fish-basket shape, names the creature — a scorpion who listened to sutra at Thunderclap Monastery until the Buddha pushed her away and she run her hook into his left middle finger — and says plainly that she herself cannot come near her."],
      ["ch. 55", "雙冠一叫", "The Double-Crowned Cock Crows", "The star officer goes up the slope, shows himself as a double-crowned cock six or seven feet high, and crows: a scorpion the size of a pipa appears. He crows a second time."]
    ],
    end: "The second crow goes through her and she dies soft all over in front of the cave; Bajie, nursing his lip since morning, rakes the carcase into mud. Wukong burns the lair and points the stolen women downhill towards home. The sting's account closes on the hillside: the star touches Bajie's lip, blows on it, and the pain stops; Wukong asks for the same and is told he had only slept his off.",
  },
  {
    id: 38, grp: "demon",
    zh: "六耳猕猴", en: "Six-Eared Macaque",
    nn: "六耳獼猴", nng: "The Six-Eared Macaque",
    label: "假齊天大聖", trib: "56-58",
    meta: [
      ["Lair", "Water-Curtain Cave, sitting on the stone bench with somebody else's monkeys"],
      ["Carried", "the same club, the same gold fillet, the same cloth kilt and boots"],
      ["Exposed by", "the Buddha; the underworld's listening beast knew and would not say"]
    ],
    hook: "The one demon on the road who wanted the scripture rather than the monk's flesh, and who could only be told apart by someone who had heard both preach.",
    events: [
      ["ch. 57", "水簾謄文", "The Bag and Bowls Carried Off", "While the real Wukong is at the Southern Sea complaining of his expulsion, this one clubs the monk on the road, walks off with the travel bag, the bowls and the change of robes, and installs them at Flower-Fruit Mountain to be copied."],
      ["ch. 57", "自立為祖", "The Counterfeit Pilgrims", "His crew is hired out of the mountain's own monkeys — a false Sanzang, a false Bajie, a false Sha, a false white horse — and his stated plan is to go west by himself and have the people of Jambudvipa found an ancestor on him."],
      ["ch. 57", "猴精現形", "A Monkey Under the Borrowed Shape", "Sha Wujing, disbelieved by both sides, strikes the impostor Sha and finds nothing inside the shape but a monkey spirit, which is what finally drags the whole quarrel to a bodhisattva."],
      ["ch. 58", "箍兒齊疼", "The Fillet Aches in Two Heads", "Guanyin sets her two attendants to hold one apiece while she recites the fillet's spell in secret; both of them scream, both roll on the ground begging her to stop, and no one at the court can tell which is the disciple she gave the ring to."],
      ["ch. 58", "諦聽無言", "The Beast That Would Not Speak", "In the hall of the Ten Kings the listening beast lies flat on the courtyard flagstones, takes in every creature under the four continents, gets up and reports that it knows the name — but cannot say it to their faces, nor lend a hand to catch him."],
      ["ch. 58", "四猴混世", "The Four Kinds of Monkey Named", "The Buddha names the four monkeys that fall outside the ten classes, and the fourth — six ears, good at listening, able to see what is coming, all-bright — is described as the one 'same in form and same in voice' as Wukong. The impostor bolts."],
      ["ch. 58", "劈頭一下", "The Club Falls at the Assembly", "Before the assembly can close its hands on him, Wukong brings the club down on his head and kills him there, and the narrator adds, as an afterthought, that this is why no six-eared monkey kind exists."]
    ],
    end: "The Buddha ends the fight by authorising the killing, then sends Guanyin ahead with instructions that the monk must take Wukong back in — the impostor would not have been the last trouble if the two stayed apart. Sanzang burns the expulsion letter he wrote himself, and the text records the reconciliation in one flat phrase: they went on as before, of one mind.",
  },
  {
    id: 39, grp: "demon",
    zh: "牛魔王", en: "Bull Demon King",
    nn: "大力王", nng: "The Great Power King",
    label: "大力牛魔王", trib: "59-61",
    meta: [
      ["Seats", "Cloud-Contact Cave at Jilei Mountain, and a home at Green-Cloud Mountain he no longer visits"],
      ["Arms", "an iron rod, his wife's twin '青鋒' swords, and a white bull form over a thousand zhang long"],
      ["Collected by", "Li Jing and Nezha on the Jade Emperor's order, with the Buddha's kin already ringed round the mountain"]
    ],
    hook: "The last surviving friend from the monkey's free-and-easy days, met again after half a book, and the only demon heaven mobilises twice for.",
    events: [
      ["ch. 3", "結七弟兄", "Sworn Seven at the Cave", "First name in the sworn seven of Wukong's youth — ox, dragon, roc, lion, macaque, ape and the monkey himself — who drank at Water-Curtain Cave and treated ten thousand li as the walk to the gate."],
      ["ch. 60", "赴華筵", "The Palace Feast Under the Pool", "He breaks off a fight with Wukong to go and drink with dragon-folk in a palace under the pool called '亂石山碧波潭', tying his water-avoiding golden-eyed beast to a pavilion outside, which is the whole mistake."],
      ["ch. 60", "奪扇追趕", "The Chase for the Stolen Fan", "Learning from his wife that the beast and the fan have both been walked off by an impostor husband, he strips off the banquet coat, arms himself with her two swords and goes up the mountain to catch the monkey."],
      ["ch. 61", "賭變化", "Wagering Change on Change", "The chase turns into a list: a swan, a falcon, a yellow hawk, a black phoenix, a crane, a musk deer, a hungry tiger, a flower-spotted leopard, a lion, a man-bear, an elephant — and then he stops changing and shows a white bull with horns like two iron towers, head like a ridge, a thousand-odd zhang from nose to tail."],
      ["ch. 61", "數十個頭", "A Dozen Heads on One Neck", "Nezha's sword takes his head a dozen times and a dozen heads come out of the neck, until the fire-wheels are hung on his horns and the true fire is blown; he rears and roars and cannot get his shape away from the demon-revealing mirror."],
      ["ch. 61", "歸順佛家", "Trading a Word for the Fan", "His one sentence of surrender is a bargain for his life, and his one instruction after it is a call to his wife to bring the fan out of the cave and save him."]
    ],
    end: "He is roped through both nostrils, pinned by the mirror and led off by the pagoda king and his son to report to the Buddha's ground — not killed, not converted on the page, simply delivered. Everything of his is burned or counted except his wife, who outlives him by thirty chapters and does better. His grievance, listed once: his son taken, his concubine cheated, his wife lied to.",
  },
  {
    id: 40, grp: "demon",
    zh: "玉面公主", en: "Jade-Faced Princess",
    nn: "玉面公主", nng: "The Jade-Faced Princess",
    label: "積雷山摩雲洞", trib: "59-61",
    meta: [
      ["Lair", "Cloud-Contact Cave at Jilei Mountain, inherited from a ten-thousand-year fox king"],
      ["Brought", "her dead father's unmanaged fortune; she paid it out to endow the marriage"],
      ["Killed by", "Zhu Bajie, who rakes her down and then strips the clothes off the carcase"]
    ],
    hook: "The richest woman in the book buys a famous husband with a dowry, keeps him two years, and is the first thing he loses.",
    events: [
      ["ch. 60", "土地指路", "The Land Spirit Points", "The Flame Mountain's land spirit supplies what the wife does not know: the Great Power King has left Plantain Cave and lives at Jilei Mountain, where a fox king died and left a daughter with a fortune of a million taels and nobody to hold it."],
      ["ch. 60", "倒陪家私", "Her Own Dowry Buys a Husband", "She went looking for him two years back because of his fame and endowed the marriage herself, goods and servants going the wrong way from the usual direction; the text says her husband never once turned back towards his first wife."],
      ["ch. 61", "外護頭目", "Arming the Household Retainers", "When the bull is beaten to her gate she arms her own household — some hundred-odd keepers, captains and hangers-on, '七长八短', and sends them out to hold the door for him."],
      ["ch. 61", "一鈀築死", "Raked Dead in the Cave", "While Wukong is still trading changes with the bull in the air, Bajie takes the cave: he rakes her dead where she sits with the bull, and when the clothes come off it is no fox but a '玉面狸精', a civet in a jade face."]
    ],
    end: "Her guard of asses, mules, badgers and deer is cut up and the whole range of buildings burned before the bull's duel even ends, and the novel gives her no line, no ransom and no one to appeal for her. She is counted twice afterwards, and only as property: the land spirit's reason for another army, and, in her husband's list of injuries, the concubine who was cheated.",
  },
  {
    id: 41, grp: "demon",
    zh: "铁扇公主", en: "Princess Iron Fan",
    nn: "羅剎女", nng: "The Rakshasi Lady",
    label: "翠雲山芭蕉洞", trib: "59-61",
    meta: [
      ["Lair", "Plantain Cave on Green-Cloud Mountain, within a few li of the Flame Mountain"],
      ["Treasure", "a plantain leaf from behind Kunlun, '太陰之精葉', that blows a person 84,000 li"],
      ["Household", "wife of the Bull Demon King, left at home while he lives with a rich concubine"]
    ],
    hook: "She can put out a mountain fire or put a monkey clean out of the country, and the novel's complaint against her is only that she will not lend the one.",
    events: [
      ["ch. 59", "一扇萬里", "One Wave of the Iron Fan", "She opens on the subject of her son — Red Child of the Fire Cloud Cave, taken to serve at the Southern Sea — and one wave of the fan sends Wukong tumbling; only his power to sit on a cloud saves him from the full eighty-four thousand li."],
      ["ch. 59", "定風一丸", "The Wind-Stopping Pill", "At Little Sumeru, Lingji gives him the one present the Buddha left him that had never been opened: a pill that roots a man where he stands against any wind."],
      ["ch. 59", "茶沫藏蟲", "Hidden in the Tea Foam", "With the pill held in his mouth he enters as a gnat through the door-crack and settles under the foam of the tea; she is thirsty, drinks two long pulls, and he is inside her."],
      ["ch. 59", "腹中講價", "Bargaining from Inside Her Belly", "He speaks out of her own body and asks again for the fan; she promises anything if he will leave by her mouth rather than the other way, and gives a leaf which the Flame Mountain's land spirit at once calls a fake. One fan and the fire leaps a thousand zhang higher, and scorches the hair on Wukong's arms."],
      ["ch. 60", "口訣相吐", "The Sizing Words for the Fan", "Drunk and delighted at her husband's return — actually the monkey on her husband's stolen beast — she spits the fan from her mouth at the size of an apricot leaf into his hand and tells him the words that make it big."],
      ["ch. 61", "四十九扇", "The Real Fan Carried Out", "Beltless and in mourning colours she carries the real fan out of the cave herself when the army leads her husband past her gate in a rope through the nose, begging her to send it."]
    ],
    end: "The only honest settlement on this stretch of road: Wukong, who would gladly keep the fan, is shamed by his own promise and hands it back. She had told him forty-nine fans end the fire for good, and it rains on the Flame Mountain for the first time in the book's memory. She folds the leaf to an apricot, keeps it in her mouth, and the text says she came to a fruit of the path.",
  },
  {
    id: 42, grp: "demon",
    zh: "九头虫", en: "Nine-Headed Worm",
    nn: "九头驸马", nng: "The Nine-Headed Son-in-Law",
    label: "亂石山碧波潭", trib: "62-63",
    meta: [
      ["Lair", "a palace under the Blue Wave Pool, reached by walking down the bed of a river"],
      ["Arms", "no treasure but a wolf-tooth mace, and nine necks that bleed as fast as they are struck off"],
      ["Owner", "nobody — heaven sends no one, because nobody at heaven owns him"]
    ],
    hook: "He robbed a Buddha's relic to light the roof of a cave, and he is the one major demon the book lets walk away: eight heads, flying north.",
    events: [
      ["ch. 62", "塔無光", "The Relic Carried from the Tower", "The 金光寺 tower has gone dark above the city and the rain has gone with it; the monk sweeps the storey himself and learns that a dragon's household carried off the 舍利子佛宝."],
      ["ch. 62", "夜下波心", "A Toast to the Stolen Relic", "Wukong and Bajie walk down the river bed at midnight and find a water-court drinking a toast to the stolen relic, with a cave full of treasure nobody in it had any right to."],
      ["ch. 62", "老龍斫死", "The Old Dragon in the Dark", "The old dragon king is killed in the dark on the bank and his daughter goes down at the water's edge; the relic is still missing and the son-in-law has not yet been touched."],
      ["ch. 63", "殯宴不驚", "The Funeral Feast and the Mace", "The pool gives a funeral feast for the dead king the next morning, and the nine-headed son-in-law comes out of it arguing doctrine with a mace over his shoulder."],
      ["ch. 63", "九頭瀝血", "Nine Necks on the Sand", "Necks come away in Wukong's hand one after another and every stump leaves its own pool on the sand; it is the bloodiest fight on the road and the least magical."],
      ["ch. 63", "犬借一頭", "The Dog That Took a Head", "Erlang Shen is out hunting near the ford, lends his dog for the favour of it, and the dog takes a head off his shoulders while the demon is still mid-swing."],
      ["ch. 63", "無憑之屍", "A Carcass Floats at the Ford", "A body floats up at the ford missing one head. The novel has him fly on into the Northern Sea and never lets a single witness confirm that he was inside it."]
    ],
    end: "Nothing is collected and nothing is bound: no owner arrives, no fillet goes on, and the mace-wielder goes north with eight heads and a wound where the ninth was. The relic and the rain both return to the tower, which is the only part of the affair anyone at court can point at, and the pilgrims leave no name behind them in the river.",
  },
  {
    id: 43, grp: "demon",
    zh: "黄眉大王", en: "Yellow-Brow Great Demon",
    nn: "黃眉大王", nng: "The Yellow-Brow Great King",
    label: "小雷音寺", trib: "65-66",
    meta: [
      ["Lair", "'小雷音寺' on Little Western Heaven — a built temple with a throne on it"],
      ["Treasures", "gold cymbals that shut like pliers, a wolf-tooth mallet, and a white cloth sack"],
      ["Owner", "Maitreya's chime-keeping boy, left on the watch on the third of the third month"]
    ],
    hook: "He wanted no flesh and no territory; he wanted the incense, and for two chapters, a long way short of Spirit Mountain, he got it.",
    events: [
      ["ch. 65", "假設山門", "The False Mountain Gate", "A gate and a hall appear on the right road with arhats, friars and saintly listeners lined up at the rails; the monk insists on going in and kneeling, and the thing on the lotus throne calls the pilgrim by name to make the bow complete."],
      ["ch. 65", "金鐃合頂", "Clapped Under Golden Cymbals", "Wukong is shut up head to foot in a pair of gold cymbals with no seam left to show light; the twenty-eight mansions come down from the Jade Emperor's order and spend the night pushing, levering and heaving at a thing that will not shift."],
      ["ch. 65", "亢角透縫", "A Horn Through the Cymbal Seam", "The Dragon of the Neck makes her horn a needle and drives it through the join with all her thousand jin of strength; Wukong comes out of the hole she made, and one blow of the club finishes the cymbals."],
      ["ch. 66", "搭包裝神", "The Sack That Took the Gods", "A white cloth sack comes off his shoulder and goes once round the field: the twenty-eight mansions, the five guards of the doctrine, then the turtle, the serpent and the five dragons borrowed from the patriarch of Wudang, all of them carried off and penned in a cellar."],
      ["ch. 66", "瓜田熟瓜", "Lured Down to the Melon Field", "Maitreya sets up a grass hut and plants a melon field at the foot of the slope, tells Wukong to lose deliberately and run him down to it: every other melon there is green."],
      ["ch. 66", "還我金來", "The Melon That Was the Monkey", "The boy eats the ripe melon that is the monkey, and inside he works the intestines and turns headstands until the whole field is rolled flat as a threshing floor; Maitreya reappears in his own shape, laughing, and takes the sack off him with one hand."]
    ],
    end: "He is folded into his master's own bag, and the last dispute is about the metal: Maitreya sweeps the cracked gold of the smashed cymbals off the lotus stand, blows immortal breath on it, and walks home with a whole pair. He takes the blame and then shares it — careless with a servant, yes, but the pilgrims' tribulations were not spent, so a hundred spirits had to come down and be caught.",
  },
  {
    id: 44, grp: "demon",
    zh: "蟒蛇精", en: "Python Spirit",
    nn: "红鳞大蟒", nng: "The Red-Scaled Python",
    label: "七絕山紅蟒", trib: "67",
    meta: [
      ["Lair", "an unnamed burrow under Seven-Peak Mountain, straight through the hill, with a hole at each end"],
      ["Magic", "a body that swallows a standing man; two forked tongues she waves like a soft-handled spear"],
      ["Owner", "nobody's — no patron comes down the road for her, and no heaven is asked about her"]
    ],
    hook: "She has no treasure, no patron and no voice: Wukong asks her three times who she is, and the book explains that she has not yet learned to speak.",
    events: [
      ["ch. 67", "駝羅莊", "Three Summers of the Night Wind", "Five hundred households at Camel-Hump Village had lived three summers with a wind that came out of the west at night, ate the cattle and horses, and swallowed men and women whole."],
      ["ch. 67", "兩盞燈", "The Two Lantern Eyes", "Wukong stood her off in the old man's courtyard until daylight against two eyes the size of lanterns; Bajie took them for a servant going ahead with a lamp and had to be corrected."],
      ["ch. 67", "倒扯蛇", "The Tail Still Outside the Hole", "She dived into the hole with seven or eight feet of tail outside; Bajie hauled at it with both hands and moved nothing, then was knocked flat at the far end when Wukong struck the front."],
      ["ch. 67", "腹中撐棒", "The Staff Propped in the Gorge", "She coiled to swallow Bajie and took Wukong standing up instead; inside he propped her gorge on the staff until it arched like a bridge, then ran a mast of it out through her back."],
      ["ch. 67", "打死蛇", "Dead in the Road, Stabbed Again", "She ran twenty li and died in the road. Bajie stabbed the dead carcase for the pleasure of it, saying it had been his life's sport to beat a killed snake, and they dragged her home by the tail."]
    ],
    end: "The village feeds the pilgrims five days and offers a thousand mu of fields, which Wukong refuses because a title-deed means taxes, corvee and a curfew he would have to keep. Then Bajie eats two shi of rice, takes the shape of a boar, and roots the persimmon-sludge lane at Seven-Peak Mountain open from end to end, which is the only road out.",
  },
  {
    id: 45, grp: "demon",
    zh: "赛太岁", en: "Sai Tai Sui",
    nn: "金毛犼", nng: "The Gold-Haired Hou",
    label: "麒麟山獬豸洞", trib: "68-71",
    meta: [
      ["Lair", "Xiezhi Cave on Qilin Mountain, with a flaying pavilion outside the gate"],
      ["Magic", "three purple-gold bells — fire, smoke, yellow sand — said to have been cast in Laojun's furnace"],
      ["Collected by", "Guanyin, whose riding-beast it is; she puts the bells back on its neck and rides away on it"]
    ],
    hook: "The bodhisattva who comes to stop him puts the three bells back round his neck, and the book's line for it is that whoever unties a bell must ask whoever tied it on.",
    events: [
      ["ch. 68", "端陽劫后", "The Queen Taken at Dragon Boat", "Three years before, at the Dragon Boat season, the demon came in on a wind out of the west and took the queen of the Golden-Saint Palace off the pomegranate pavilion, threatening to eat the king, his ministers and the citizens as well."],
      ["ch. 68", "懸絲診脈", "Diagnosed by Three Golden Threads", "The king's sickness was grief plus undigested rice dumplings. Wukong diagnosed it across three twenty-four-foot golden threads tied at the wrist and told the court their sovereign had a pair of birds out of flock."],
      ["ch. 69", "烏金丹", "The Black Purge Balls", "He compounded a purge of rhubarb and de-oiled croton seed, rolled it in pot-soot, and had to order rain out of the East Sea to wash it down; the king emptied, and Zizhu had a working monarch again."],
      ["ch. 70", "有來有去", "The Herald Stripped of His Face", "He killed the cave's vanguard at the first sortie, then killed the herald who came to announce the challenge — a yellow flag, a brass gong, and a name meaning he comes and goes — and wore the second dead man's face into the mountain."],
      ["ch. 70", "盜紫金鈴", "Three Bells Swapped for Hair", "Put to sleep through the nostril by a drowsiness-worm, the maid Spring-Tendril left the bells unguarded; Wukong turned his hairs into lice and fleas till the demon stripped, and swapped three real bells for three of hair under a gold lock."],
      ["ch. 71", "假名降犼", "The Bells That Would Not Answer", "The hair bells would not answer in the middle of a fifty-round draw. Certain his own had gone timid for want of their mate, the demon went inside for breakfast before fetching the real ones, and the queen had to hand them out."],
      ["ch. 71", "草龍回宮", "Home on a Grass Dragon", "The queen came home riding a grass dragon, and the first thing the reunion cost the king was a hand stung by her poison barb; a Taoist in an old palm-fibre coat then had to come down and explain that he had been the coat."]
    ],
    end: "Guanyin comes down and douses the fire and sand with sweet dew from her willow; the beast had slipped her chain while the swineherd nodded. The cause is older: the crown prince shot the male of a peacock's two young at Phoenix-Breaking Slope, so the karma ran to three years and a sick king. Wukong is allowed no strokes, the bells go back on its neck, and the cave is killed to the last headman.",
  },
  {
    id: 46, grp: "demon",
    zh: "百眼魔君", en: "Hundred-Eyed Demon Lord",
    nn: "多目怪", nng: "The Many-Eyed Monster",
    label: "黃花觀道士", trib: "72-73",
    meta: [
      ["Lair", "Yellow Flower Abbey, a Taoist temple three li from the spiders' cave, with a heron-and-snow couplet"],
      ["Magic", "a thousand eyes under both ribs that throw a bucket of gold light, and a bird-dung poison good for three days"],
      ["Collected by", "Pilanpo Pusa, who takes the needle out of her collar and lifts him onto her little finger"]
    ],
    hook: "His weapon is a tea-cup: three grains of a medicine boiled out of a thousand birds' dung, hidden in twelve red dates. No staff is drawn.",
    events: [
      ["ch. 73", "藥忌陰人", "The Locked Box on the Beam", "He kept the drug in a small locked leather box on the roof beam and made it up out of a thousand birds' dung: a thousand catties boiled to one ladle, one ladle refined to three parts, and one fen of it enough to kill an immortal."],
      ["ch. 73", "黑棗", "Two Black Dates in the Cup", "The poisoned tea went into twelve red dates, three dates to a cup, but the abbot's own cup held two black ones. Wukong noticed the difference, demanded a swap, and threw the cup when they had all but the monk drunk."],
      ["ch. 73", "連馬四口", "Four Felled at the Tea Table", "Bajie, Sha and the monk went down where they stood, and the horse with them — four of them in the abbey — while Wukong, who had not touched the tea, took on the whole house with a staff."],
      ["ch. 73", "千眼金光", "A Thousand Eyes in the Ribs", "Fifty rounds in, the Taoist took off his robe, raised both arms and opened a thousand eyes along his ribs; the yellow fog and gold light closed over ten-odd li like a bucket, and Wukong was in it, turning."],
      ["ch. 73", "鯪鯉鑽山", "Boring Out as a Pangolin", "He struck upward until he cracked the light and softened his own skull, then turned into a pangolin and bored out through twenty li of rock, coming up blind with weeping and unable to feel his ankles."],
      ["ch. 73", "孝婦引路", "The Mourning Widow Points the Way", "A widow in deep mourning came down the path with sacrificial water and paper money, told him the demon's name and where the remedy was, and warned him not to say who had sent him — she was Lishan Laomu, and had invented a husband's death to spare a real one."],
      ["ch. 73", "繡花針", "The Needle Forged in an Eye", "The needle in Pilanpo's collar was neither steel, iron nor gold, but forged in her son's eye — and since her son is the Sun-Crowing star, whose shape is a cock, Wukong worked out before he asked that the mother must be a hen, and that nothing beats a centipede so well."]
    ],
    end: "The needle is thick as an eyebrow and puts out the gold light like a hen taking a centipede; three red detox pills bring the abbey's victims back inside the three days the poison allowed. The demon runs, throws off his shape and lies on the ground as a seven-chi centipede. Pilanpo lifts him onto her little finger and takes him home to mind her door; Wukong had pointed out her cave was unguarded.",
  },
  {
    id: 47, grp: "demon",
    zh: "蜘蛛精", en: "Spider Spirits",
    nn: "七情", nng: "The Seven Passions",
    label: "盤絲嶺盤絲洞", trib: "72-73",
    meta: [
      ["Lair", "Silk-Web Cave under Silk-Web Ridge, and a hot spring they took from seven fairies of heaven"],
      ["Magic", "silk out of the navel, duck-egg thick, with trip-lines and seven sworn insect sons"],
      ["Owner", "nobody's — their fellow student the centipede sells them out on the abbey steps"]
    ],
    hook: "Wukong refuses to strike them: a staff stirred through that pool would foul the rod and sink his name. So the seven sisters get through the afternoon bruiseless.",
    events: [
      ["ch. 72", "化齋被綑", "Strung Up Like the Immortal", "The monk went alone to beg food at a village too tidy to be true, found a girl at each of seven looms, and was hung from a beam by three cords, back up and belly down — a posture the captors called an immortal pointing the way."],
      ["ch. 72", "濯垢泉", "The Bathing Pool of Seven Fairies", "The land-god, summoned and trembling, said the spring three li south had been the bathing pool of seven fairies, who gave it up without a fight; the sisters used it three times a day and were on their way to steam the monk."],
      ["ch. 72", "餓老鷹", "The Hawk and the Clothing Rack", "Wukong came down as a starving hawk and took all seven changes of clothing off the rack in the pavilion, leaving the sisters ashamed and naked in the water, and then refused to do anything else at all."],
      ["ch. 72", "八戒忘形", "Bajie Blundering into the Web", "Bajie volunteered to finish it, was met with a web that put the daylight out and trip-lines in every direction, and got up perhaps twenty times, falling on each one differently."],
      ["ch. 72", "七樣蟲", "Seven Kinds of Insects Swarm", "Each sister kept a sworn son — bee, gadfly, silk-fly, biting fly, ox-fly, grasshopper, dragonfly — and when they swarmed one into ten and ten into ten thousand, Wukong's hairs became seven kinds of hawk and cleared the sky."],
      ["ch. 72", "斷根", "Burning Silk-Web Cave to the Root", "Bajie wanted the house pulled down; Wukong said pulling was hard work and got the rotten pine, split bamboo and dry vines instead, and the Silk-Web Cave burned with the pilgrims already on the road."],
      ["ch. 73", "打爛蛛形", "Seventy Clones with Forked Staves", "Out of their burned home the seven ran three li to a fellow student's abbey and told on the pilgrims. Wukong set seventy hair-clones on them with forked staves, and beat them to a pulp on the abbey floor, ten-odd jin of silk raked off behind them."]
    ],
    end: "They die in someone else's quarrel. In the abbey doorway their bodies revert to seven spiders the size of a peck measure, curled up and begging, and the abbot they called brother comes out and says he wants the monk for himself and cannot save them. Wukong asks the land-god what they were, is told what he already knew, and burns both establishments.",
  },
  {
    id: 48, grp: "demon",
    zh: "青狮精", en: "Blue Lion",
    nn: "大大王", nng: "Eldest King of the Three",
    label: "獅駝洞大大王", trib: "74-77",
    meta: [
      ["Lair", "Lion-Camel Cave on an eight-hundred-li ridge, with forty-eight thousand demons on its muster roll"],
      ["Magic", "a mouth that once swallowed a hundred thousand troops of heaven; he can grow as small as a rapeseed"],
      ["Collected by", "Manjusri of Mount Wu, who says a word and rides him home on a lotus seat"]
    ],
    hook: "His whole career is a snub. The Queen Mother left him off the peach banquet, so he swallowed the army sent to punish him, shut the Southern Heaven Gate and went home.",
    events: [
      ["ch. 74", "小鑽風", "Tally Seized from the Wind-Seeker", "Wukong killed a patrolling demon, took his gong, his tally and his title of Chief Wind-Seeker, and sat on a needle-shaped peak to interrogate the patrol about what the three kings could actually do."],
      ["ch. 74", "吞十萬兵", "Swallowing a Hundred Thousand", "The patrol's own report: because the Queen Mother never sent an invitation, the eldest king grew to a mouth like a city gate and put a hundred thousand troops of heaven away without a fight, then closed the Southern Heaven Gate."],
      ["ch. 75", "故意生吞", "Swallowed Whole on Purpose", "After Bajie was chased he let the lion have him deliberately; salt water to make him vomit failed, and the poisoned wine meant to kill him went down seven or eight cups at the demon's own throat, which had turned into a trumpet."],
      ["ch. 75", "肝上打鞦韆", "Swinging on the Liver", "Inside, Wukong caught the liver in his fist and swung on it, made the lion beg, and would not come out until the monk was promised a carrying-litter and the ridge cleared."],
      ["ch. 76", "放風箏", "The King Flies a Kite", "They tried to bite him on the way out and broke their king's teeth doing it, so he went up through the soft palate and out of the nostril with a sneeze, leaving a forty-zhang hair noose tied to the heart — and the little demons watched their king fly a kite before the spring festival."],
      ["ch. 77", "皈蓮臺", "The Lotus on His Back", "At the end the Buddha told Wukong to lose on purpose, and when Manjusri's charm was said the eldest king threw down his spear, rolled over, and let a lotus seat be thrown onto his back."]
    ],
    end: "He is not killed and does not go back to an owner's stable in disgrace: Manjusri rides him home to Mount Wu with his ears thrown back, having eaten a hundred thousand immortal soldiers who were only doing a job. The book never says whether this is the same lion that wore a dead king's face at Wuji, and Manjusri is not asked; the ridge keeps two of its three kings for another afternoon.",
  },
  {
    id: 49, grp: "demon",
    zh: "大鹏金翅鸟", en: "Golden-Winged Peng",
    nn: "雲程萬里鵬", nng: "Peng of the Ten-Thousand-Li Journey",
    label: "獅駝洞三大王", trib: "74-77",
    meta: [
      ["Lair", "not the cave but Lion-Camel City, four hundred li west, whose king, court and citizens he ate"],
      ["Magic", "the vase of the two vital breaths, and one wing-beat of ninety thousand li — faster than a somersault"],
      ["Collected by", "the Buddha in person, who keeps him as a guardian on the flame above his head"]
    ],
    hook: "He is the only demon on the road who outruns the somersault cloud, the only one the Buddha calls family, and the only one who bargains about his food before accepting capture.",
    events: [
      ["ch. 74", "獅駝國", "A Kingdom Devoured Centuries Ago", "The youngest king did not live on the ridge. Four hundred li west he had eaten a whole kingdom five hundred years earlier — king, mandarins and every citizen — and came to his brothers' cave purely because he was frightened of Wukong."],
      ["ch. 74", "陰陽二氣瓶", "The Vase of Two Breaths", "His own treasure, carried by thirty-six demons in the heaven's-rotation number: a seven-jewelled eight-trigram vase of the two breaths, in which a silent prisoner stays cool and a speaking one is burned, bitten by forty snakes and finished by three fire dragons."],
      ["ch. 75", "鑽穿瓶底", "The Three Hairs Become a Drill", "Shut in with his ankles scorched soft, he remembered the three life-saving hairs Guanyin had given him at Snake-Coil Mountain, turned them into a diamond drill, a bamboo shaving and a cotton thread, and opened the bottom of his own coffin."],
      ["ch. 75", "瓶空者控", "The Vase Emptied by a Gnat", "He escaped as a gnat, sat on the lion's head and let the vase go light in the bearers' hands, so that the demon on the wall said the jar was empty and one of the carriers answered, son, it is empty because he has gone — and Wukong left the drilled vase behind as a chamber-pot."],
      ["ch. 77", "一翅九萬", "Two Beats of One Wing", "When the plan failed he let the two elder brothers take the monk and Sha and Bajie, then caught Wukong himself in two beats of one wing, the bird's flight being ninety thousand li to the monk's pilgrim's ten thousand eight hundred."],
      ["ch. 77", "鵲巢貫頂", "The Splayed Wing Sinew", "The Buddha offered his own head, changed it to a piece of raw red meat, and the peng struck at it and splayed the sinew of his wing, so that he could not rise and had to stand on the crown of the man he was sent to destroy."]
    ],
    end: "He complains aloud that the Buddha's heaven is a poor household — one bowl of vegetarian fare against an infinity of human flesh — and is paid in the only currency the book honours: every good deed done anywhere is offered to his mouth first. He stays as a guardian in the flame above the Buddha's head, having been the one who said where the monk was, alive, in an iron chest.",
  },
  {
    id: 50, grp: "demon",
    zh: "白象精", en: "White Elephant Spirit",
    nn: "二大王", nng: "Second King of the Three",
    label: "獅駝洞二大王", trib: "74-77",
    meta: [
      ["Lair", "the same cave on Lion-Camel Ridge; three zhang tall, yellow-tusked, fighting with a long spear"],
      ["Magic", "a trunk that coils up anything, iron-backed or copper-bodied — and nothing else at all"],
      ["Collected by", "Samantabhadra of Mount E, who rides him home on the same kind of lotus seat"]
    ],
    hook: "The terror of the ridge, never once beaten in a straight fight, is undone by a suggestion from Bajie, who is standing on the side of the hill watching and not helping.",
    events: [
      ["ch. 74", "鼻捲人", "One Coil of the Trunk", "The patrol's second report: the second king lies in wait with nothing but his nose; one coil and a man of iron back and copper body loses his soul, and his own shape is three zhang of yellow tusk and silkworm brows."],
      ["ch. 76", "捲住腰胯", "The Trunk Loop at the Waist", "He took Wukong up in the trunk and got the waist but not the hands, so the monkey stood there in the loop of that nose juggling a shrunken staff and complaining about his luck, while Bajie watched from the spur of the hill."],
      ["ch. 76", "搠入鼻孔", "The Staff Up a Nostril", "Bajie supplied the idea: shrink the staff to egg-thickness and put it up the nostril. The elephant let go at once, and Wukong came away with the trunk in his fist and pulled him down the slope."],
      ["ch. 76", "兩個象奴", "Two Grooms for an Elephant", "Bajie followed tapping the beast's haunches with the flat of the rake while Wukong led the trunk, and the monk, watching from below, asked Sha what it was that his eldest disciple was dragging."],
      ["ch. 76", "嗚嗚應承", "The Litter Promised in Grunts", "With his nose stretched shut the elephant could only answer in grunts; he knelt and promised a carrying-litter for the monk, and let go of the ridge on the strength of a mercy nobody in the cave had any intention of keeping."],
      ["ch. 77", "皈蓮臺", "Spear Down Before the Bodhisattvas", "He threw down his spear at the same moment as his brother, when Samantabhadra and Manjusri came up out of the Buddha's retinue and said the words over them."]
    ],
    end: "He goes back to Mount E as a saddle-beast, and the novel does not pretend the mercy was earned: he was spared because the monk told his disciples not to break the creature's skin, having watched two men lead a demon down a hill like a temple elephant. By the time the third king falls, the ridge's forty-eight thousand demons have already fled an empty city that a bird ate five hundred years ago.",
  },
  {
    id: 51, grp: "demon",
    zh: "白鹿精", en: "White Deer Spirit",
    nn: "國丈", nng: "The Royal Father-in-Law",
    label: "清華仙府", trib: "78-79",
    meta: [
      ["Lair", "a cave door under the roots of a nine-forked poplar at Willow Grove Slope, seventy li south of the city"],
      ["Magic", "no relic but a nine-jointed withered-vine staff, and a rumour that a child's heart is a good medicine"],
      ["Collected by", "the Star of Longevity, who calls the deer his own pair of feet and pleads for it on the road"]
    ],
    hook: "He came to a kingdom as an old man leading a beautiful girl, was made the king's father-in-law, and cured a headache of his own making with eleven hundred children's livers.",
    events: [
      ["ch. 78", "鵝籠貯子", "A Boy in Every Goose Cage", "Every door in the city kept a goose cage with a chosen boy in it; the emperor's physician had prescribed a remedy, the king wasted, and the whole town was raising livers for a medicine that would make him live a thousand years."],
      ["ch. 78", "陰神抬籠", "The Cages Lifted in One Night", "Wukong requisitioned the city gods, the land-gods and every guardian spirit of the mission, and had eleven hundred and eleven cages carried out of the city in one night on a wind, so that the parents woke to empty doorsteps."],
      ["ch. 79", "換心之說", "A Heart Prescribed as Medicine", "When the cages vanished the royal father-in-law proposed a better medicine: the heart of the Tang monk, a body ten lifetimes in cultivation and never yet leaking its essence, worth ten thousand years instead of a thousand."],
      ["ch. 79", "剖腹獻心", "Heaps of Hearts on the Steps", "Wukong asked for a short ox-ear knife, opened his own belly on the palace steps and rolled out a heap of hearts — red, white and yellow, grudging, envious, calculating, ambitious, evil, dark — and the king's physician observed what a many-hearted monk this was."],
      ["ch. 79", "蟠龍拐", "The Stolen Coiled-Dragon Staff", "The deer fought him twenty rounds with a nine-jointed coiled-dragon staff he had also stolen from his master, then took the form of a cold streak of light, went into the palace and came out carrying the queen."],
      ["ch. 79", "楊樹根門", "The Nine-Forked Poplar Door", "The land-god of Willow Grove Slope had never heard of the village; the cave was under the roots of a nine-forked poplar on the south bank, and the door opened on three turns left, three turns right and both hands slapped against the tree."],
      ["ch. 79", "狐作毛團", "One Stroke, a Ball of Fur", "Bajie killed the white-faced fox with one stroke of the rake, and the one who had laughed a thousand ways at a whole kingdom lay as a ball of fur; the deer smelled at the body and was slapped for asking why."]
    ],
    end: "The Star of Longevity comes down, covers the cold light and pleads for the beast as his own pair of feet; the deer reverts with seven-forked antlers, ears laid flat at its master's voice. The excuse is a game of chess with the East Flower Emperor that had not finished. The king learns he has been bowing to a stag, and the emperor's own cure is three dates the star had pocketed from that same tea.",
  },
  {
    id: 52, grp: "demon",
    zh: "金鼻白毛老鼠精", en: "Gold-Nosed Rat Spirit",
    nn: "地湧夫人", nng: "Lady Rising from the Ground",
    label: "陷空山無底洞", trib: "80-83",
    meta: [
      ["Lair", "Bottomless Pit Cave under Pitfall Mountain — a jar-mouth hole in a stone and three hundred li of rooms"],
      ["Magic", "no weapon; a wind that takes the monk, and an embroidered shoe left standing where she stood"],
      ["Collected by", "Li Jing and Nezha, whose spirit-tablets she kept burning in a dark back room"]
    ],
    hook: "She has eaten six young monks in three nights and still wants to be married; the thing in her cave that ends the argument is an incense burner with two names on it.",
    events: [
      ["ch. 80", "黑松林", "Five Days Tied to a Tree", "She was tied to a tree at the waist with her lower half buried in the earth, five days there, telling the monk of robbers and a ruined journey. Wukong saw the shape under the rope and said nothing while the cut was made."],
      ["ch. 80", "善言入耳", "Pious Words Breathed in an Ear", "On a fair wind she breathed a few soft pious phrases into the monk's ears, which is all the book says it takes, and the party took her to the temple and fed her — an act he called catching a fish by letting water collect."],
      ["ch. 81", "六個僧鞋", "Six Pairs of Monk's Shoes", "At the Zhenhai temple, three nights of her company produced six missing young monks; their caps and shoes were stacked in the back garden and their bones were not, and Wukong stayed up to watch it happen."],
      ["ch. 82", "花鞋替身", "An Embroidered Shoe in Her Place", "Twice she left an embroidered shoe standing in her place — first the left foot, then the right — and the second time she took the monk, the baggage and the horse, which is why Bajie said three is a fair number and why Wukong wept at a saddle with nobody in it."],
      ["ch. 82", "無底洞", "Beneath Bottomless Pit Cave", "The mountain arch read Pitfall Mountain, Bottomless Pit Cave over a hole like a jar mouth in a stone ten-odd li across; inside was a three-hundred-li warren of chambers, and a banquet being got ready for a wedding she intended as a harvest."],
      ["ch. 82", "桃中藏身", "The Peach That Swallowed a Monkey", "The monk was told to offer her a red peach, the sun-facing fruit being the one that ripens, and Wukong rode inside it; she swallowed him whole without biting, and he began eating her liver and five viscera from the inside while she pleaded."],
      ["ch. 83", "香火牌位", "The Gold Burner and Two Tablets", "In a small dark south-east back room, with a pot of flowers and a clump of bamboo, stood a large flowing-gold incense burner and two tablets: honoured father, Heavenly King Li; honoured elder brother, the Third Prince Nezha."],
      ["ch. 83", "御狀", "An Indictment from Two Tablets", "Wukong took the tablets as evidence and filed an indictment at the Spirit-Court Hall; Li Jing arrived furious at a defeat five hundred years old, bound him with the demon-tether and reached for his sword, and Nezha had to bar the blade with his own."]
    ],
    end: "Li Jing panics: he is at home without his pagoda. Nezha explains that long ago she stole the Buddha's flowers on Vulture Peak, was caught, and was spared on the line that water fed for fish is never fished. She keeps three names — rat, Half-Guanyin, Lady Rising from the Ground — and is bound with her whole nest by imperial decree, while Bajie and Sha are refused the privilege of mincing her.",
  },
  {
    id: 53, grp: "demon",
    zh: "南山大王", en: "Southern Mountain King",
    nn: "艾叶花皮豹子精", nng: "The Mugwort-Spotted Leopard",
    label: "折岳連環洞", trib: "85-86",
    meta: [
      ["Lair", "Ringed Cave of the Broken Peak on Hidden-Mist Mountain — eight characters cut in a slab over a sealed stone door"],
      ["Magic", "a pestle, a mist, and an ambush worked out as a plum blossom split into petals"],
      ["Owner", "nobody's — no patron, no relic, and a title he had no right to"]
    ],
    hook: "He calls himself King of the Southern Mountain, and that is the insult Wukong answers: even the Buddha sits below a bird, even Laojun takes the lower chair.",
    events: [
      ["ch. 85", "分瓣梅花計", "Three Decoy Kings in One Armour", "A rank-none demon proposed the plan: pick three able subordinates, dress them in the king's helm, armour and pestle, engage the three brothers separately in three places, and let the king come down out of the air with five steel claws and take the monk."],
      ["ch. 85", "五爪鋼鉤", "The Five Steel Claws", "It worked exactly as designed. The three brothers each thought they were fighting the king; when they met again the monk was gone, taken out of the air by five steel claws off a horse he was not even riding."],
      ["ch. 85", "山人思親", "The Woodcutter Under Sentence", "In the back garden the monk found a woodcutter tied to the tree beside him, three days already under sentence, whose only grief was an eighty-three-year-old mother no one else would feed; they wept together over who had the worse of it."],
      ["ch. 86", "柳樹根頭", "A False Head of Willow Root", "The vanguard, flattered into the post for inventing the ambush, cut a willow root into a head, daubed it with human blood and served it on a lacquer tray — addressed to Great-Sage Grandpa, which alone stopped the attack at the gate."],
      ["ch. 86", "撲搭不響", "The Tossed Head That Rang", "Wukong's test was sound: a real head thrown out of a hole falls without noise, this one rang like a clapper on the stone, and the staff broke it open on the spot. So the demons fetched a genuine one out of their flaying pavilion, saved up for housekeeping."],
      ["ch. 86", "權為松柏", "The Head Buried with Willow Wands", "Bajie buried the head on a sheltered slope, planted willow branches for cypress at the sides, and heaped smooth pebbles in front as the meal — to show a living heart's filial piety. When the monk walked back alive he dug the head up and raked it to pieces for having been wept over, then buried it again."],
      ["ch. 86", "梁上聽話", "Listening from the Beam", "Wukong went into the sealed cave as a winged ant and stood on the main beam, where the demons argued whether to steam, boil or salt the monk — which settled whether he was alive. Then he put a drowsiness-worm in every face, and a second pair up each nostril of the king."]
    ],
    end: "Bound in the four-hoof knot and carried out on Wukong's shoulders, he took one thrust of Bajie's rake half awake and came out of the shape as a spotted mugwort-leopard, nothing else. The woodcutter fetched broken bamboo, withered pine and hollow willow, Bajie fanned the fire with his ears, and the cave burned empty. Walking them out he said: less than a thousand li hence is Tropic Kingdom.",
  },
  {
    id: 54, grp: "demon",
    zh: "九灵元圣", en: "Nine-Spirit Primordial Sage",
    nn: "九頭獅子", nng: "The Nine-Headed Lion",
    label: "九曲盤桓洞", trib: "88-90",
    meta: [
      ["Lair", "Nine-Twist Lingering Cave on Bamboo-Joint Mountain, grandsire of six lions and the Yellow Lion"],
      ["Magic", "no treasure — eight side heads that pick a man up as gently as a bird lifting a twig"],
      ["Collected by", "Taiyi Jiuku Tianzun of the Eastern Mystery Palace, who rides him home under a brocade saddle-guard"]
    ],
    hook: "The local gods refuse to touch him: the land-god says plainly that none but his owner can take him, and his owner's keeper was three days drunk.",
    events: [
      ["ch. 88", "兵刃被竊", "The Weapons Vanish from the Forge", "The three brothers taught the prefecture's princes to fight, then let the smiths copy their arms from patterns: ten thousand catties of iron bought, the originals laid out in the forge yard for a few days, shining so that a lion seventy li away could see them. In the night the originals went."],
      ["ch. 89", "釘鈀之宴", "The Rake Banquet Card", "Wukong froze two wolf-headed patrols on the road, took the twenty taels they carried to buy the banquet's pigs and sheep, and read the card: a Rake Banquet at dawn, from his grandson the Yellow Lion to Grandsire Nine-Spirit. Then the three brothers went up as a pig merchant and his two oddly named guards."],
      ["ch. 90", "九口啣人", "Six Taken in Nine Mouths", "He came out weaponless and shook eight heads beside his own. One mouth took the monk, one Bajie, one the old king, three more the princes: six of nine filled, three still empty, and he shouted that he would go first."],
      ["ch. 90", "柳棍打猴", "Willow Rods on the Bound Monkey", "He had Wukong bound and beaten with thorn and willow rods for the capture of his seven lion grandsons; the rods broke, night came, and it was still not counted. The old lion went off to nap, three guards were told to watch — captives themselves — and at the deep of night they nodded and Wukong shrank out of the cords."],
      ["ch. 90", "土地供狀", "The Land-God's Deposition", "The guardian spirits brought him the district land-god under escort, and the god gave away everything: Bamboo-Joint Mountain, Nine-Twist Lingering Cave, and that the sage's owner sits in the Eastern Mystery Palace, and no one else need try."],
      ["ch. 90", "獅奴醉失", "The Keeper Drunk, the Lion Loose", "The keeper had found a jar of Laojun's gift to the palace, the Nectar of Transmigration, drank it, and slept three days drunk, leaving the beast unchained. One day in heaven is a year in the world, said the Tianzun — and the lion had been gone two or three."],
      ["ch. 90", "騎歸妙巖", "Home on the Kneeling Lion's Back", "The lion came out to fight, saw his master standing on the cliff, and went down on four paws with his head in the dust. His keeper seized the mane and beat his neck a hundred times for the shame of it, a brocade saddle-guard was put on him, and the Tianzun rode him home."]
    ],
    end: "He is not killed: a brocade saddle-guard goes on his back and he carries his master home through the clouds, having taken the court of Yuhua and the pilgrims into six of his nine mouths at once. Bajie burned the cave to a kiln of broken tiles; the six live lions were killed and skinned, their meat cut into lumps of a liang or two and handed round the city, for a taste and for a fright.",
  },
  {
    id: 55, grp: "demon",
    zh: "辟寒三犀牛精", en: "Three Rhinoceros Kings",
    nn: "三犀牛精", nng: "The Three Rhinoceros Spirits",
    label: "青龍山玄英洞", trib: "91-92",
    meta: [
      ["Lair", "Xuanying Cave on Green Dragon Mountain, north-east of Jinping Prefecture, tenanted a thousand years"],
      ["Magic", "they come down as buddhas each Lantern Festival and drink off fifteen hundred jin of fragrant oil"],
      ["Collected by", "nobody — four wood-element stars, the Jade Emperor's warrant and a dragon prince finish them"]
    ],
    hook: "The only demons in the book running a farm: two hundred and forty households on a levy to buy oil worth forty-eight thousand taels a year, and the town calls it a blessing.",
    events: [
      ["ch. 91", "三盞金燈", "Three Jars of Scented Oil", "At the Gold Lantern Bridge three jars the size of tubs held fifteen hundred catties of su-he fragrant oil, four thousand eight hundred taels of silver worth, and it was understood that the Buddha came and drank it all in three nights, which was why the harvest came round."],
      ["ch. 91", "假佛收油", "False Buddhas Come for the Oil", "Wukong knew the wind for evil before it landed and told the monk so; the monk went up on the bridge to bow to the three shapes in the light, and the demon put the oil in a vessel and the monk under his arm and left the same way."],
      ["ch. 91", "煎吃之計", "Frying the Captive in Sweet Oil", "At the cave the three agreed to strip the captive, wash him and cut him fine, to be fried in the same fragrant oil they had eaten their way into a thousand years of life. Wukong got in as a firefly and got the chain off, then had to fight out alone and leave the monk behind."],
      ["ch. 92", "金星識怪", "Named by Taibai at the Gate", "Taibai Jinxing, met at the West Heaven Gate, said it out plain: three rhinoceros spirits, so clean they hate their own shadow and bathe in the rivers, parting the water with their horns; and the only men who can take them are the four Wood Stars, quartered outside the Ox-Dipper Palace."],
      ["ch. 92", "四木禽星", "Four Stars at the Cave Mouth", "The Jade Emperor sent the Celestial Master Xu to muster them, and the four objected that without a warrant they dare not leave their posts. At the cave mouth the three kings took one look, said their subduer had arrived, let fall their hands, went off on four hooves like iron cannon, and ran north-east."],
      ["ch. 92", "角能分水", "Horns That Part the Water", "They ran to the western ocean and went under, cutting the water open with their horns; the West Sea's king called out his son Moang with the prawn soldiers and turtle generals, and penned them against the palace gate."],
      ["ch. 92", "井宿啃死", "Iron Hooks Through the Nose", "One, Cold-Averting, was pinned by Well-Star in his own shape and bitten through the neck before the dragon prince could shout him off; the other two had their noses spitted with iron hooks and were led up to the prefecture's court alive."],
      ["ch. 92", "鋸角進貢", "Four Horns Sawn for the Tribute", "Bajie cut off both heads himself, four horns were sawn for the Jade Emperor's tribute, one was left in the prefecture's treasury as a receipt against the oil levy, and Wukong took one to Vulture Peak."]
    ],
    end: "Their hide was tanned with saltpetre and smoked dry into armour, the flesh given out among officials and town, and a notice posted banning the Gold Lanterns and remitting the oil levy for good — the only reform the pilgrims are recorded to have legislated. The party stayed a month, ate thirty-odd full banquets, and slipped out at the fifth watch to dodge another.",
  },
  {
    id: 56, grp: "demon",
    zh: "玉兔精", en: "Jade Rabbit Spirit",
    nn: "假公主", nng: "The False Princess",
    label: "毛穎山兔穴", trib: "93-95",
    meta: [
      ["Lair", "a hole under two boulders on the summit of Fur-Tip Mountain, one of three rabbit earths, and nothing else there"],
      ["Magic", "the moon's medicine pestle — a short stick thick at one end, fine at the other, like a mortar's tread"],
      ["Collected by", "the Lady of the Moon, who says the rabbit was owed a slap and came down a year ago for it"]
    ],
    hook: "She came down to repay one slap, buried the real princess in a field and wore her face, then aimed an embroidered ball at the one husband the book would never give her.",
    events: [
      ["ch. 93", "風刮公主", "The Wind-Borne Princess", "A hundred-and-five-year-old monk at the Gold-Brick Temple heard a wind and a cry over the old garden site, and found a girl there who said she was the king's daughter, blown out of the flower-viewing; he bricked her into a room with a hole only a bowl would pass."],
      ["ch. 93", "裝風守身", "Playing Mad Before the Monks", "She understood why she was locked up and played mad on purpose — sleeping in urine and filth, talking nonsense by day, weeping for her parents at night — because a temple full of monks had other ideas about a girl about town."],
      ["ch. 93", "繡球打僧", "The Ball That Hits the Monk", "At the crossroads the princess threw the ball for a heaven-sent husband and hit the monk; Wukong called it leaning on a wedding to bring a demon down, and had the monk ask for his disciples to be summoned before the papers were signed."],
      ["ch. 94", "放出醜徒", "The Ugly Disciples Sent Away", "The false princess petitioned her father to send the three ugly disciples out of the city, saying she dared not look on them, and the king had the travel documents stamped and gold and silver loaded on them, which Bajie took without comment."],
      ["ch. 94", "留春亭", "The Bee in the Master's Hat", "For four days the banquet ran in the Imperial Garden while the monk counted the date on his fingers — the twelfth, the wedding day — and Wukong came in as a bee and settled in his master's hat for the ceremony."],
      ["ch. 95", "土地廟棍", "The Short Stick from the Shrine", "Wukong showed himself at the bride's side and grabbed her, and she came out of her dress and hairpins, ran to the earth-god's shrine in the garden and fetched a short stick with which she fought him half a day and up into the clouds."],
      ["ch. 95", "西天門", "The Mortar-Tread at the Gate", "She ran for the Western Gate, was met there by the four great celestial marshals on a shout from Wukong, turned to fight again, and gave her weapon away: he saw one end thick, one end fine, and knew it for the tread of a grain mortar."],
      ["ch. 95", "三處兔窟", "Three Rabbit Holes Under Boulders", "She went down as gold light on a mountain in the south, and the land-god there swore his mountain was Fur-Tip Mountain with three rabbit holes in it and no demon since the world began — behind two boulders, which Wukong levered off with his staff."]
    ],
    end: "The Lady of the Moon stops the blow with a word: the princess was no mortal but a moon nymph who struck the rabbit eighteen years ago, and the rabbit, one slap in debt, came down to throw her into a field. She is rolled into a white hare and led off on the moon's banner. The king goes sixty li for his daughter, and Wukong's last favour to the city is a thousand cocks on the centipede mountain.",
  },
];

// Journey to the West — demon & tribulation index (major episodes).
// Row: [place, demon, treasureOrAbility, resolution, chapters]
// The novel's own register counts 81 calamities; this index covers the named
// antagonist episodes, which is what people actually search for.
// The chapters string is the key leaf records point at with their `trib` field.
export const TRIBULATIONS = [
  ["Black Wind Mountain", "Black Bear Guai", "no magic treasure — martial skill only", "Guanyin subdues him; he becomes mountain guardian", "16-17"],
  ["Yellow Wind Ridge", "Yellow Wind Guai", "samadhi wind (sanmei shen feng)", "Lingji Bodhisattva's wind-fixing pill", "20-21"],
  ["Wanshou Mountain", "Zhenyuanzi (immortal)", "ginseng fruit; heaven-and-earth sleeve", "reconciled; sworn brotherhood with Wukong", "24-26"],
  ["White Bone Ridge", "White Bone Demon", "three corpse-transformations", "killed by Wukong's third strike", "27"],
  ["Wanzi Mountain", "Yellow Robe Guai (Kui Wood Wolf star)", "heaven-relic pearl", "recalled to heaven by the Jade Emperor", "28-31"],
  ["Pingding Mountain", "Gold Horn & Silver Horn", "purple-gold gourd, jade vase, hemp rope, seven-star sword, plantain fan", "gourd turned back on them; returned to Taishang Laojun", "32-35"],
  ["Wuji Kingdom", "Blue Lion (Manjusri's mount)", "no treasure — impersonates the king", "Manjusri Bodhisattva retrieves him", "36-39"],
  ["Fire Cloud Cave", "Red Boy", "samadhi true fire", "Guanyin's five gold bands", "40-42"],
  ["Black Water River", "Tuo Long (river dragon)", "river current and flood", "taken back by the West Sea dragon prince", "43"],
  ["Chechi Kingdom", "Tiger Strength, Deer Strength, Goat Strength", "rain-calling, beheading-and-regrowing, oil-cauldron bathing", "lost each contest; exposed and killed", "44-46"],
  ["Heaven-Reaching River", "Inspiration King (goldfish)", "frost magic to freeze the river", "Guanyin's fish basket", "47-49"],
  ["Gold Hoop Cave", "Blue Bull Demon (Laojun's ox)", "the diamond snare (jingang zhuo)", "Taishang Laojun retrieves snare and beast", "50-52"],
  ["Western Liang Women's Kingdom", "Scorpion Spirit", "poison sting that pierces even Wukong's head", "Mao Ri Star Officer (the celestial rooster)", "53-55"],
  ["Flower-Fruit Mountain (impostor)", "Six-Eared Macaque", "identical staff and abilities", "exposed by the Buddha; killed by Wukong", "56-58"],
  ["Plantain Fan & Jilei Mountain", "Princess Iron Fan & Bull Demon King", "plantain fan; bull's transformations", "heavenly armies subdue the bull; fan borrowed", "59-61"],
  ["Blue Wave Pool", "Nine-Headed Worm", "nine heads, rain of blood", "Erlang Shen's howling sky dog bites a head off", "62-63"],
  ["Little Western Heaven", "Yellow-Brow Old Buddha", "gold cymbals, rear bag", "Maitreya's melon-field trick", "65-66"],
  ["Seven-Peak Mountain", "Python Spirit", "giant serpent body that swallows prey", "Wukong bursts her from inside", "67"],
  ["Zizhu Kingdom", "Sai Tai Sui (Gold-Haired Hou)", "three purple-gold bells (fire, smoke, sand)", "Guanyin retrieves the bells", "68-71"],
  ["Silk Web Cave & Yellow Flower Temple", "Spider Spirits & Centipede Spirit", "silk cords; golden light from the ribs", "Pilanpo Bodhisattva's embroidery needle", "72-73"],
  ["Lion-Camel Ridge", "Blue Lion, White Elephant, Golden-Winged Peng", "yin-yang vase; gourd; great-peng flight", "Buddha and arhats retrieve all three", "74-77"],
  ["Bhikshu Kingdom", "White Deer Spirit", "heart-medicine plot; willow-branch staff", "Star of Longevity retrieves the deer", "78-79"],
  ["Bottomless Pit Mountain", "Gold-Nosed White-Fur Rat Spirit", "no treasure — wind-snatching", "bound by Li Jing and Nezha", "80-83"],
  ["Miefa Kingdom", "no demon — the king's vow to kill monks", "the vow itself", "overnight hair-shaving miracle converts the king", "84-85"],
  ["Hidden-Mist Mountain", "Leopard Spirit", "petal-splitting ambush formation", "killed by Wukong", "85-86"],
  ["Fengxian Prefecture", "no demon — heaven withholds rain", "three unfulfilled pledges", "pledges fulfilled; rain granted", "87"],
  ["Yuhua Prefecture", "Nine-Spirit Primordial Sage (nine-headed lion)", "no treasure — seizes by mouth", "Taiyi Jiuku Tianzun retrieves him", "88-90"],
  ["Jinping Prefecture", "Three Rhinoceros Spirits", "steal the fragrant su-he oil while posing as buddhas", "four wood-element star officers assist the kill", "91-92"],
  ["Tianzhu Kingdom", "Jade Rabbit", "medicine-pounding pestle", "Lady of the Moon retrieves the rabbit", "93-95"],
  ["Diling County", "no demon — false murder charge", "a framed death", "Wukong clears the case in the underworld", "96-97"],
  ["Lingyun Crossing", "no demon — the final trial", "single-log bridge and bottomless boat", "crossed; mortal body left behind", "98"],
];
