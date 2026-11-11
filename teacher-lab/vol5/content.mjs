export const VERSION = "2026-11-13.vol5.v1";
export const MODES = [["recall","① 闭卷回忆"],["test","② 听力＋概念"],["apply","③ 用师训改周六的课"]];
export const PROFILES = {
 he: {name:"何静", focus:"这次重点：听力重新测一次，自己听、自己选，听到什么写什么。③ 里孩子卡住时，先给开头等他接，不替他说；录音说够60秒。"},
 zuo: {name:"左丽慧", focus:"这次重点：听力里听到的词不一定就是答案，要听清最后定的是哪一个。问题链分清事实、逻辑、迁移三层。"}
};
export const SESSION = {
 totalMinutes: 90,
 window: "11月13日（周五）下午在校区做：14:00开始，连续90分钟一次做完。手机收起来，不看笔记，不用AI或翻译。",
 phases: [
  {title:"① 闭卷回忆", minutes:10, detail:"录一段60—90秒：周六要用的一个做法；再做5道选择题", evidence:"录音和原答，结束后锁定"},
  {title:"② 听力＋概念", minutes:50, detail:"剑桥B1看图听力7题（每题写依据）＋师训概念判断19题", evidence:"原答、依据和播放次数"},
  {title:"③ 用师训改周六的课", minutes:30, detail:"填周六真实的课＋情境选择10题＋试讲录音1段", evidence:"原答和试讲录音"},
  {title:"交卷", minutes:5, detail:"3个感受问题，自查缺项，下载答卷", evidence:"答卷发英语部群并@月神"}
 ]
};
export const SOURCES = {
 listening: "Cambridge B1 Preliminary 教师手册样卷 Listening Part 1 Q1–Q7；官方真人录音，1.0倍，每段自带两遍。答案以手册官方答案页为准。Vol.1–4没有用过这一部分。",
 listeningPaper: "https://www.cambridgeenglish.org/Images/168150-b1-preliminary-teachers-handbook.pdf",
 audio: "https://www.cambridgeenglish.org/Images/505234-b1-preliminary-handbook-for-teachers-listening-audio-files.mp3",
 training: "概念题和情境题按2026年11月10—11日南宁师训（赛塔×领智云）的录音原话出题：Alice讲原版落地和RE阅读，Emily讲PU听说课、Think和AI。",
 note: "本卷为分人诊断。选择题按答案判；听力依据和录音由月神人工复核。不换算官方等级，不做两人排名。"
};
export const REFLECT = [
 {id:"r1", label:"最难", prompt:"这次三段里，哪一段最难？难在哪？"},
 {id:"r2", label:"周六先用", prompt:"师训学到的，你这周六第一个要用的是哪个做法？用在课的哪个环节？"},
 {id:"r3", label:"要帮忙", prompt:"接下来你最希望刘老师在哪方面帮你？"}
];

const EV = "写出让你确定答案的那几个英文词，不用整句。没听清就写「没听清」。";
const SRC = n => `Cambridge B1 Preliminary handbook sample, Listening Part 1, Q${n}`;
const pic = n => ["a","b","c"].map(x => `./img/q${n}-${x}.jpg`);
const LISTENING = [
 {n:1, prompt:"1. What did the girl buy on her shopping trip?", answer:1, explanation:"答案：台灯。原话 I'd prefer to have a lamp on my desk, so that's what I got today. 书架是 next week 才打算买；靠垫是 I nearly got one，差点买，没买。"},
 {n:2, prompt:"2. Why did the plane leave late?", answer:1, explanation:"答案：下雪。原话 we had to wait for the runway to be cleared of snow. 大雨和大风说的是到曼彻斯特降落时的天气，不是晚点的原因。"},
 {n:3, prompt:"3. What activity does the woman want to book for the weekend?", answer:0, explanation:"答案：骑自行车。原话 I'm wondering if there are any cycles available to hire… I'd really like to join one of the group rides through the forest. 帆船课 all full，订不了；赛车是 last time 玩过的。"},
 {n:4, prompt:"4. Which cake will the girl order?", answer:2, explanation:"答案：柠檬蛋糕。最后一句 I think I'll have the same as you，朋友点的是 the lemon one。草莓的上次 weren't keen on it；巧克力 might be a bit sweet。三种都说到了，要听最后定的是哪个。"},
 {n:5, prompt:"5. How much must customers spend to get a free gift?", answer:1, explanation:"答案：£19.99。原话 a mystery present for all shoppers. To get yours, buy goods today with a total of at least £19.99. £9.99是六瓶果汁的价钱；£29.99是生日派对餐。"},
 {n:6, prompt:"6. What did the family do on Sunday?", answer:1, explanation:"答案：去海洋馆（Sea Life Centre）看大鱼。原话 we were told to come back an hour later. We did, and it was worth the wait. 美术馆是 some weeks ago；电影院 couldn't get to the cinema，没去成。"},
 {n:7, prompt:"7. Which programme is on first?", answer:2, explanation:"答案：烹饪节目。新闻之后先播 Lucas Wilson preparing some traditional Polish dishes（Before that, however…）；知识竞赛在它后面；跳舞节目是深夜重播。"}
].map(x => ({id:"b1q"+x.n, label:"听力Q"+x.n, type:"picture", audio:"b1-q"+x.n, prompt:x.prompt, images:pic(x.n), answer:x.answer, evidencePrompt:EV, explanation:x.explanation, source:SRC(x.n)}));
const AUDIO = [[1,81.0],[2,72.2],[3,76.6],[4,79.2],[5,85.0],[6,69.8],[7,85.9]].map(([n,s]) => ({id:"b1-q"+n, title:`剑桥B1 Part 1 · Q${n}`, url:`./audio/b1-q${n}.mp3`, end:s}));

const CHAIN = {type:"match", group:"chain", skill:"问题链", groupTitle:"一、问题链分三层",
 instruction:"读下面这段小故事，判断每个问题属于哪一层。",
 material:"Sam's family goes to the park by bus. It starts to rain, so they eat their sandwiches under a big tree. Sam's sister is sad because her kite is wet. Then the sun comes out, and they fly the kite together.",
 options:["A｜事实题：答案在原文里能直接找到","B｜逻辑题：要把前后句连起来想（why / how）","C｜迁移题：联系孩子自己的生活和想法"]};
const WORDS = {type:"match", group:"words", skill:"筛词", groupTitle:"二、生词分三类",
 instruction:"一节阅读课，目标句型是 It eats ___. / It lives in ___.（要会说、会写）。课文里有下面这些词，按Alice的三类，各归哪一类？",
 material:"Pandas live in the mountains of China. They eat bamboo all day. You can see pandas at the Chengdu Research Base of Giant Panda Breeding.",
 options:["A｜必讲词：目标句要用、影响理解，要会读会写会用","B｜阅读词：读懂要知道意思，不要求会写会用","C｜非必要词：生僻、不影响理解，快速带过"]};
const LINES = {type:"match", group:"lines", skill:"同课异构", groupTitle:"三、A线还是B线",
 instruction:"同一节课，目标句型 There is / There are。下面这些活动属于A线还是B线？",
 options:["A｜A线：素养——开口、表达、在情境里用","B｜B线：应试——书写规范、题型、限时"]};
const JUDGE = {type:"choice", group:"judge", skill:"课堂判断", groupTitle:"四、课堂判断"};
const TEST_TKT = [
 {...CHAIN, id:"qc1", prompt:"How does Sam's family go to the park?", answer:0, explanation:"原文直接有 by bus，回原文就能找到，是事实题。"},
 {...CHAIN, id:"qc2", prompt:"Why do they eat under a big tree?", answer:1, explanation:"要把 It starts to rain 和 so they eat… under a big tree 连起来，是因果，属于逻辑题。"},
 {...CHAIN, id:"qc3", prompt:"What do you like to do on a rainy day?", answer:2, explanation:"问的是孩子自己，原文里没有答案，是迁移题。"},
 {...CHAIN, id:"qc4", prompt:"Is Sam's sister happy at the end? How do you know?", answer:1, explanation:"原文没直接写 happy，要从 the sun comes out, they fly the kite together 推出来，属于逻辑题。"},
 {...CHAIN, id:"qc5", prompt:"What is wet?", answer:0, explanation:"原文 her kite is wet，直接能找到，是事实题。"},
 {...WORDS, id:"qw1", prompt:"eat / eats", answer:0, explanation:"目标句 It eats ___ 要用，要会说会写，是必讲词。"},
 {...WORDS, id:"qw2", prompt:"live / lives", answer:0, explanation:"目标句 It lives in ___ 要用，是必讲词。"},
 {...WORDS, id:"qw3", prompt:"bamboo", answer:1, explanation:"要知道熊猫吃竹子才读得懂，但这节课不要求会写会用，是阅读词。"},
 {...WORDS, id:"qw4", prompt:"Research Base of Giant Panda Breeding", answer:2, explanation:"机构名，生僻，不影响理解，带过就行，是非必要词。"},
 {...LINES, id:"qa1", prompt:"两人一组，用 There is / There are 介绍自己画的公园，同伴听完提一个问题。", answer:0, explanation:"开口表达、在情境里用，是A线。"},
 {...LINES, id:"qa2", prompt:"闭卷3分钟：看图写5个句子 There are ___ ___.，注意复数-s和句末标点。", answer:1, explanation:"闭卷、限时、盯书写，是B线。"},
 {...LINES, id:"qa3", prompt:"角色扮演：在小卖部买东西，一个当店员、一个当顾客。", answer:0, explanation:"在场景里用语言，是A线。"},
 {...LINES, id:"qa4", prompt:"把课文对话改成校内试卷的「看图选择」题，限时完成。", answer:1, explanation:"把原版内容迁移成考试题型并限时，是B线。"},
 {...JUDGE, id:"qj1", prompt:"下面哪一个是真正的「听力任务」？", options:["老师说 Listen carefully，然后孩子跟读单词","孩子听录音，按听到的顺序给4张图片排序","孩子大声朗读课文","老师放歌，孩子跟着唱"], answer:1, explanation:"听力任务要让孩子听完去完成一件事：排序、选择、判断。说 Listen carefully 再跟读，练的是模仿发音，不是听力理解。"},
 {...JUDGE, id:"qj2", prompt:"孩子读同伴传来的小纸条，再写一句回复传回去。这个活动主要练什么？", options:["听和说","读和写","只是游戏，不练技能","发音"], answer:1, explanation:"读纸条是读，写回复是写。"},
 {...JUDGE, id:"qj3", prompt:"一个孩子课上翻书能做对练习，闭卷限时就做不出来。按Alice的说法，这说明什么？", options:["已经掌握了，只是粗心","还没真正掌握，要加闭卷限时练","是题目太难","给他多一点时间就行"], answer:1, explanation:"Alice：只要是限定时间内做不出来的，都是没有真正掌握，或者训练量不到位。"},
 {...JUDGE, id:"qj4", prompt:"教材的课后练习，题型跟百色校内考试对不上。按Emily讲的 Keep / Drop / Adapt，应该怎么处理？", options:["Keep：原样保留，照着做","Drop：整块不做","Adapt：按本地考试题型改编练习","让家长自己买练习册"], answer:2, explanation:"Emily：Adapt 改编，结合本地考情和家长需求改课后练习，避免课堂热闹、考试不达标。"},
 {...JUDGE, id:"qj5", prompt:"新来一个孩子，拿不准放高一级还是低一级的班。Emily的原则是？", options:["往高了定，孩子会被带上去","往低了定，避免跟不上、打击信心","看家长意见","放进人少的班"], answer:1, explanation:"Emily：定级尽量往低了定，不要往高了定。"},
 {...JUDGE, id:"qj6", prompt:"一个7岁零基础的孩子直接上 Power Up，跟不上。按Emily讲的，问题出在哪？", options:["孩子不够努力，回家练得太少","少了听说启蒙：先积累听说词汇、会回应简单问句，这一步不能省","应该先上一期自然拼读集训，再上PU","教材太简单，孩子没兴趣"], answer:1, explanation:"Emily：英语先听说后读写，跳过启蒙直接学，孩子压力很大、容易掉队，听说启蒙不能省。"}
];

const DEMO = "示范课：Power Up L1，40分钟听说课，目标句型 How many ___ are there? — There are ___.";
const APPLY_TKT = [
 {type:"choice", skill:"top-down", id:"ap1", prompt:"备这一课，第一步先做什么？", options:["通读整个单元，想清孩子单元结束时要完成什么任务（比如介绍自己画的小食摊），再倒推这一课的词和句","从这一课第一页开始，一页一页往下讲，讲完再看下一课要学什么","先找几个好玩的游戏，看哪个能用上这一课的单词，再按游戏排顺序","先做好这一课的PPT，把课本每一页的内容都放进去"], answer:0, explanation:"Alice的 top-down：先看整个单元，定孩子最后要完成的任务，再倒推词汇、句型、语法。"},
 {type:"choice", skill:"同课异构", id:"ap2", prompt:"这一课的A线目标和B线目标，哪组写得最清楚？", options:["A线：孩子能用 There are… 介绍自己画的小食摊，并回答同伴的 How many…?；B线：能默写6个食物单词和 There are three apples.，注意复数-s和句号","A线：学会 There is 的句子；B线：学会 There are 的句子，再多做几页练习册","A线：孩子上课开心、愿意举手；B线：课后多做练习，把作业都做完","A线：听懂录音里的对话；B线：会把对话读出来、背下来"], answer:0, explanation:"A线写清孩子用这句话做成什么事；B线写清要会默写、做对什么，具体到词和句。"},
 {type:"choice", skill:"pre-while-post", id:"ap3", prompt:"上课前10分钟（pre），哪个做法最合适？", options:["点名后，用上节课的食物卡片快速口头抽问","直接开始讲今天的新句型，节省时间","先放一段20分钟的动画片，让孩子放松","先默写整课单词，查回家有没有复习"], answer:0, explanation:"Emily：pre 段口头复习，看上节课的内容孩子还留下多少。"},
 {type:"choice", skill:"pre-while-post", id:"ap4", prompt:"第一遍听课文录音之前，老师最好说什么？", options:["Listen and find out: How many apples does Tom have?（带着一个问题去听）","Listen carefully.（只说认真听）","先把课文翻译一遍，孩子听懂了再放录音","不说话，直接放录音"], answer:0, explanation:"Emily：第一遍带着一个问题去听（Listen and find out…）。只说 Listen carefully，孩子不知道要听什么。"},
 {type:"choice", skill:"pre-while-post", id:"ap5", prompt:"第二遍听，让孩子做什么？", options:["听细节：把每种食物有几个填进表格","再听一遍大意，确认第一遍听对了","边听边跟读每一句，练发音","不用第二遍，直接开始做游戏"], answer:0, explanation:"Emily：第二遍听细节，配判断、选择、排序、填数字这类任务。"},
 {type:"choice", skill:"问题链", group:"dialogue", instruction:"课文对话：", material:"Mum: How many apples are there?\nTom: There are three.\nMum: We need five for the party!\nTom: OK. Let's buy two more.", id:"ap6", prompt:"按「事实 → 逻辑 → 迁移」的顺序，哪组问题排得对？", options:["How many apples are there? → Why do they buy two more? → What food do you want at your party?","What food do you want at your party? → How many apples are there? → Why do they buy two more?","Why do they buy two more? → How many apples are there? → What food do you want at your party?","How many apples are there? → How many apples are there now? → How many do they need?"], answer:0, explanation:"先问原文能找到的（有3个），再问要连起来想的（为什么再买两个：派对要5个），最后联系孩子自己。只问 How many 的那组，三个都是事实题，没拉开层次。"},
 {type:"choice", skill:"搭梯子", id:"ap7", prompt:"孩子看图只说「Three.」，不说完整句。老师最好怎么做？", options:["给开头「There are…?」，停下来等他接；接上了，换一张新图让他自己说","直接替他说「There are three apples.」，再请下一个孩子回答","告诉他「不对，要说完整句」，请他重新说一遍","让全班一起说一遍完整句，就算他也会了"], answer:0, explanation:"先给开头等他接，再撤掉提示、换新图让他自己说。替他说出答案，就看不到他自己会不会。"},
 {type:"choice", skill:"搭梯子", id:"ap8", prompt:"下课前让孩子复述这段对话。今天是第一次复述，梯子怎么搭？", options:["先给填空：Tom has ___ apples. Mum needs ___. They buy ___ more.","直接让孩子不看任何提示，自己把对话复述出来","让孩子把整段对话背下来，再上台背给大家听","老师把对话复述一遍，孩子认真听"], answer:0, explanation:"复述梯子第一步：给框架或问题填空。熟了再只给关键词，最后不给提示。"},
 {type:"choice", skill:"B线", id:"ap9", prompt:"下课前5分钟，哪个B线小练最合适？", options:["闭卷3分钟：看3张图写 There are ___ ___.，写完同桌互查复数-s","再玩一遍今天的游戏，巩固一下句型","发一张练习纸带回家，翻书照着做","不做了，留到下节课开头再说"], answer:0, explanation:"B线小练要闭卷、限时、短小，盯住书写细节。翻书做的，看不出孩子真掌握没有。"},
 {type:"choice", skill:"pre-while-post", id:"ap10", prompt:"这节课的作业，哪个更合适？", options:["每天5分钟：跟读录音1段；周三拍一张家里的水果，用 There are… 说2句发群里","把课文抄写10遍，周六带来检查","一次布置一整页练习册，周末一起交","这节课不留作业，让孩子休息"], answer:0, explanation:"Emily讲的课后作业是轻量、分到每天，跟课上内容接上，还能留下孩子开口的作品。"}
];

const PACKET = {
 recall: {
  title:"① 闭卷回忆", minutes:10,
  intro:["先录音，再做5道选择题。开始做选择题以后，录音就不能再改。","不看笔记、不看手机。想不起来就如实说想不起来。"],
  baseline:{id:"r_s0", label:"回忆录音", section:"先录音 · 约4分钟", rule:"录完才能做下面的选择题。", title:"R-S0｜周六我要用的一个做法 · 60—90秒",
   prompt:"两天师训里，挑一个你这周六课上就要用的做法，按这三句说：\n1. 我要用的是______（这个做法叫什么，哪位老师讲的）。\n2. 课上第一步，我会______（我说什么、做什么）。\n3. 孩子会______（孩子做什么、说什么）。",
   hint:"用中文说就行，对孩子说的那句用英文。不用写稿。",
   criteria:["说出一个师训里真讲过的做法","第一步具体到老师说什么、做什么","说清孩子做什么"], source:"自编回忆题"},
  audio:[], listening:[], setup:[], writing:[], speaking:[],
  conceptTitle:"师训回忆", conceptRule:"凭记忆选，不确定也选一个。",
  tkt:[
   {type:"choice", skill:"师训回忆", id:"rc1", prompt:"Alice说原版课落到考试上会卡住。下面哪一项「不是」她说的卡点？", options:["语法不系统，练得不够","答题不规范、单词书写不达标","原版课口语活动太多，应该砍掉","平时翻书能做，没有闭卷限时训练"], answer:2, explanation:"Alice讲的卡点：内容和校内不同步、语法不系统、题型不匹配、答题不规范、书写不达标、缺闭卷限时训练。她没有说要砍掉口语活动，A线照样要上。"},
   {type:"choice", skill:"师训回忆", id:"rc2", prompt:"阅读课的生词，Alice分成哪三类？", options:["必讲词、阅读词、非必要词","新词、旧词、难词","名词、动词、形容词","会读的词、会写的词、会用的词"], answer:0, explanation:"必讲词：影响理解或考试高频，要精讲精练；阅读词：读懂要知道意思，不要求会写会用；非必要词：生僻、不影响理解，快速带过。"},
   {type:"choice", skill:"师训回忆", id:"rc3", prompt:"复述的「梯子」，Alice讲的是哪个顺序？", options:["先看关键词说 → 再不看提示说 → 最后按问题填空说","先按框架或问题填信息说 → 再只看关键词说 → 最后不看提示自己说","先背课文 → 再默写 → 再复述","老师说一句、孩子跟一句，直到背下来"], answer:1, explanation:"Alice：前几次给框架，手把手填信息；后面只给关键词；最后提示词也撤掉，孩子自己复述。"},
   {type:"choice", skill:"师训回忆", id:"rc4", prompt:"「同课异构」里，A线和B线分别管什么？", options:["A线管素养：开口、表达、在场景里用；B线管应试：书写、题型、限时","A线给基础好的孩子，B线给基础弱的孩子","A线上新课内容，B线复习上节课的旧内容","A线全英文上课，B线用中文讲语法"], answer:0, explanation:"同一节课两条线：A线照原版上，保住开口、表达、思考；B线补书写规范、题型迁移、限时训练。"},
   {type:"choice", skill:"师训回忆", id:"rc5", prompt:"Emily说听说课把握住三个点，上什么教材都不会差。是哪三个？", options:["pre、while、post（课前、课中、课后）","听、说、读","热身、游戏、作业","词汇、语法、阅读"], answer:0, explanation:"Emily：pre 课前复习旧知；while 引入、呈现、分层听力；post 复述、表达观点、检测。"}
  ]
 },
 test: {
  title:"② 听力＋概念", minutes:50,
  intro:["先做听力7题，约20分钟；再做概念判断19题，约25分钟；最后留5分钟检查。","听力每题先看题目和三张图，再播放。每段自带两遍，听完马上选、马上写依据。"],
  audio:AUDIO, listening:LISTENING, listenMinutes:20,
  listenRule:"剑桥B1 Preliminary样卷 Listening Part 1，真人原音，1.0倍，每段自带两遍。三张图里的东西录音里一般都会说到，要听清最后定的是哪一个。",
  setup:[], writing:[], speaking:[],
  conceptTitle:"概念判断", conceptRule:"按师训讲的和平时上课的实际来选，不确定也选一个。",
  tkt:TEST_TKT
 },
 apply: {
  title:"③ 用师训改周六的课", minutes:30,
  intro:["先填你周六真实要上的课，约3分钟。","再做10道情境选择题，约15分钟。题目都围绕同一节示范课，按师训的做法选。","最后录一段试讲，约10分钟，用你自己周六的目标句型。"],
  audio:[], listening:[], writing:[],
  setup:[
   {id:"s_class", label:"班级", type:"short", prompt:"周六要上的班", placeholder:"例如：Power Up L1-F班"},
   {id:"s_lesson", label:"哪一课", type:"short", prompt:"单元和课次", placeholder:"例如：Unit 3 Lesson 9"},
   {id:"s_target", label:"目标句型", type:"short", prompt:"这节课的目标句型（英文）", placeholder:"例如：How many apples are there? — There are three apples."}
  ],
  conceptTitle:"情境选择", conceptRule:DEMO+" 每题选一个最合适的做法。",
  tkt:APPLY_TKT,
  speaking:[{id:"a_s1", label:"试讲录音", title:"A-S1｜用你周六的目标句型试讲 · 60—90秒",
   prompt:"用你上面填的周六目标句型，对孩子说，按顺序做这四步：\n1. 带着一个问题让孩子听或看：Listen and find out: …?\n2. 问一个事实题，再问一个逻辑题（Why…? / How do you know?）\n3. 一个孩子只答一个词：你给开头，停下来等他接\n4. 换一张新图，让他自己说完整句",
   hint:"孩子的回答你自己演，一句带过就行。不到60秒算没完成。",
   criteria:["用的是自己周六真实的目标句型","先给问题再听","事实题和逻辑题不是同一类","孩子卡住时给开头等他接，没有替他说","换新图让孩子自己说","录音60秒以上"]}]
 }
};
// 正确项打散到不同位置（其余选项保持原顺序），并给每题加题号
const TARGET = {rc1:3, rc2:1, rc3:2, rc4:0, rc5:2, qj1:2, qj2:0, qj3:3, qj4:1, qj5:2, qj6:0, ap1:2, ap2:1, ap3:3, ap4:1, ap5:2, ap6:3, ap7:1, ap8:2, ap9:0, ap10:3};
const place = q => {const t = TARGET[q.id]; if (q.type !== "choice" || t === undefined) return q; const right = q.options[q.answer], rest = q.options.filter((_, i) => i !== q.answer); rest.splice(t, 0, right); return {...q, options: rest, answer: t};};
const PREFIX = {chain:"问题链", words:"筛词", lines:"AB线", judge:"判断", dialogue:"情境"};
const number = (list, fallback) => {const seen = {}; return list.map(q => {const k = PREFIX[q.group] || fallback; seen[k] = (seen[k] || 0) + 1; return {...q, label: k + seen[k]};});};
PACKET.recall.tkt = number(PACKET.recall.tkt.map(place), "回忆");
PACKET.test.tkt = number(PACKET.test.tkt.map(place), "判断");
PACKET.apply.tkt = PACKET.apply.tkt.map(place).map((q, i) => ({...q, label: "情境" + (i + 1)}));
const clonePacket = () => JSON.parse(JSON.stringify(PACKET));
export const PACKETS = {he: clonePacket(), zuo: clonePacket()};
