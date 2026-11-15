export const VERSION = "2026-11-20.vol7.v1";
export const META = {
 vol:"Vol.7", prefix:"wl-vol7-v1:", db:"wonderland-vol7-audio-v1", cache:"wonderland-vol7-cache-v1",
 format:"wonderland-teacher-vol7-response", fileTag:"温德兰_Vol.7",
 flow:"一次做完：看懂好坏15 → 写指令20<br>→ 用AI做练习单75 → 核对和存模板30 → 交卷",
 submitHint:"下载后，把答卷文件和练习单成品（PDF或图片）一起发到英语部群，再在自己的文件消息下面 @月神。",
 exportNotice:"答卷保存在当前浏览器，不自动上传。四段分开计时、分开锁定；③允许并要求用AI，粘贴记录照常保留。练习单成品和指令由人工复核。",
 home:{
  eyebrow:"VOL.7 · 用AI做一份周六真能发给孩子的练习单",
  title:"AI写得出来不算数，<br>孩子拿到能做、做了有用才算。",
  planTitle:"一次做完，2.5小时，分四段",
  cards:[
   {h:"这次要交什么", ps:["一份给11月21日（周六）那节课用的学生练习单：A4一页、按本地外研版题型、最后附答案。","AI的过程也要交：你每一轮发给AI的话、AI最后一版原稿、你自己动手改了哪些地方。","一段改好的指令模板，下次换个单元直接套用。"]},
   {h:"开始前准备好", ps:["一台能上网、能用AI的电脑。你平时用哪个AI就用哪个。","11/21那节课的教材：书带来，或者把那几页拍好照片。","你班的「2026秋季教学计划及教案」，打开到11/21那节课。","①②④自己做，不用AI；只有③要用AI。"]}
  ]
 },
 guide:[
  ["2.5小时怎么做",["① 看懂好坏15分钟：看一份AI做坏了的练习单，判断10处哪里要改。","② 写指令20分钟：把班级、学生、这节课的词句、本地题型填进去，页面会自动拼成一段完整的指令。","③ 用AI做练习单75分钟：把指令发给AI，至少改3轮；每轮把你发的话和这一版哪里不行记下来；最后贴上AI原稿，写清你自己改了什么，把成品存成飞书文档。","④ 核对和存模板30分钟：按10条逐条核对，有问题当场改；再把指令改成模板，写周六怎么用。"]],
  ["成品放哪",["练习单存成飞书文档，分享设成「组织内获得链接的人可阅读」，把链接贴进③。另外导出PDF或截图，和答卷一起发英语部群。"]],
  ["周六之后",["11月21日上课真用这份练习单。11月22日（周日）18:00前，在本班教案那节课的「课后复盘」写：哪道题错的孩子最多，下次怎么改。"]],
  ["交卷",["在「交卷」里回答3个问题，看缺项，下载答卷。答卷和练习单成品一起发英语部群，再在自己的文件消息下 @月神。"]]
 ]
};
export const MODES = [["spot","① 看懂好坏"],["prompt","② 写指令"],["make","③ 用AI做练习单"],["check","④ 核对和存模板"]];
export const PROFILES = {
 he: {name:"何静", focus:"你11月6日交的AI教案、课后反馈和作业表，班名、学生、作业渠道都还写着「待补」。这次的规矩：给AI真信息，拿到先核对，成品里不许出现「待补」。你上次提的「AI做课后练习、配合本地教材」，就从这一份开始。"},
 zuo: {name:"左丽慧", focus:"你11月6日交的AI教案，标题写的是「PU0 Lesson 22」，班级写「待补」，可你带的是L1-A班。这次的规矩：给AI真信息，拿到先核对，成品里不许出现「待补」。"}
};
export const SESSION = {
 totalMinutes: 150,
 window: "11月20日（周五）在校区：先拍口播，15:30开始，连续2.5小时，18:00前交。带能用AI的电脑和11/21那节课的教材。",
 phases: [
  {title:"① 看懂好坏", minutes:15, detail:"看一份AI做坏了的练习单，10处判断要不要改（不用AI）", evidence:"原答"},
  {title:"② 写指令", minutes:20, detail:"填班级、学生、这节课的词句、本地题型和成品要求，自动拼成指令（不用AI）", evidence:"指令全文"},
  {title:"③ 用AI做练习单", minutes:75, detail:"把指令发给AI，至少改3轮；交每轮记录、AI原稿、自己的修改和成品链接", evidence:"过程记录和成品"},
  {title:"④ 核对和存模板", minutes:30, detail:"10条逐条核对并当场改；存一段指令模板；写周六怎么用（不用AI）", evidence:"核对记录和模板"},
  {title:"交卷", minutes:10, detail:"3个问题，自查缺项，下载答卷，成品一起发群", evidence:"答卷和练习单发英语部群并@月神"}
 ]
};
export const SOURCES = {
 training: "做法依据：南宁师训Emily讲的AI备课——先想清楚要什么成品再描述给AI、先调好一个模板再批量做、学生用的练习单不能混老师话术、课后练习按本地考情改（Adapt）、AI初稿要反复调整。",
 local: "本地题型依据：师训发的《Power Up与南宁外研版小学英语｜主题/语法/能力对标》三张表（外研三起2024修订版）。",
 note: "①是选择题，自动判；②③④由月神对着你的成品人工看。不排名，看的是这份练习单周六能不能直接用。"
};
export const REFLECT = [
 {id:"r1", label:"最帮忙", prompt:"这次AI哪一步最帮到你？"},
 {id:"r2", label:"最不靠谱", prompt:"AI哪里最不靠谱？你是怎么发现的？"},
 {id:"r3", label:"下周做什么", prompt:"下周还想用AI做哪种东西（单词卡、进门测、课后反馈……）？给哪个班？"}
];

// ---------- ① 看懂好坏 ----------
const SHEET = `【示例：AI做的第一版原稿，班级是虚构的】

Power Up L1【待补】班 · Unit 7 · Lesson 3 课后练习
目标句型：Can you …? — Yes, I can. / No, I can't.
Name: ________   Date: ________

Teacher's note: Ask students to work in pairs first, then check answers together. (5 minutes)

Part 1  Look and circle.（看图圈出正确的词）
  1. [图：踢足球]   play football / play tennis
  2. [图：打排球]   play basketball / play volleyball tournament
  3. [图：游泳]     swim / run

Part 2  Read and choose.（读一读，选出正确答案）
  4. ____ you play football? — Yes, I can.     A. Do   B. Can   C. Are
  5. She can ____ .                             A. swims   B. swimming   C. swim

Part 3  Write.
  6. Write a paragraph (about 60 words) about your favourite sport and explain why you like it.

Part 4  Discuss with your partner: Is it important for children to do sports every day? Why?

（全文完，没有答案页）`;
const OPT = ["要改","没问题"];
const SPOT = [
 {id:"k1", prompt:"标题里的「【待补】班」", answer:0, explanation:"要改。班级、课次要写真的。AI不知道你的班，你在指令里给它；它留了「待补」，你自己补上，不能原样发出去。"},
 {id:"k2", prompt:"「Teacher's note: Ask students to work in pairs first…」这一行", answer:0, explanation:"要改，删掉。学生练习单里不能有给老师的话，Emily师训专门讲过。"},
 {id:"k3", prompt:"Part 1 第2题选项里的「volleyball tournament」", answer:0, explanation:"要改。tournament 孩子没学过，图也对不上（排球比赛≠打排球）。练习单只用这节课和以前学过的词。"},
 {id:"k4", prompt:"Part 1 每题写的「[图：踢足球]」「[图：游泳]」", answer:0, explanation:"要改。现在只是文字，没有图，「看图圈词」就做不了。要么把图放上去，要么让AI写清楚每张图画什么，你自己找图配上。"},
 {id:"k5", prompt:"Part 2 第4题：____ you play football? — Yes, I can.（A. Do B. Can C. Are）", answer:1, explanation:"没问题。考的就是目标句型，答案唯一（Can），题型也像外研版的单选。"},
 {id:"k6", prompt:"Part 2 第5题：She can ____ .（A. swims B. swimming C. swim）", answer:1, explanation:"没问题。can 后面用动词原形，是常考点，干扰项也合理。"},
 {id:"k7", prompt:"Part 3：写一段60词左右的短文，介绍最喜欢的运动并说明理由", answer:0, explanation:"要改。60词说理短文是初中写作，L1孩子做不了。改成看图写句子，给开头：I can ______. / I can't ______."},
 {id:"k8", prompt:"Part 4：和同伴讨论「孩子每天运动重不重要」", answer:0, explanation:"要改。讨论是课上的口语活动，放在带回家的练习单上做不了；题目本身对孩子也太难。"},
 {id:"k9", prompt:"最后没有答案页", answer:0, explanation:"要改。要附答案页：家长能对、老师好批；你自己对着答案做一遍，也是核对AI有没有出错的第一步。"},
 {id:"k10", prompt:"大题说明写成「Look and circle.（看图圈出正确的词）」中英双语", answer:1, explanation:"没问题。L1的孩子和家长都看得懂，题型说明就该这样写。"}
].map((q, i) => ({type:"choice", group:"sheet", groupTitle:"先读这份练习单，再逐条判断", material:SHEET, skill:"看出问题", options:OPT, ...q, label:"第"+(i+1)+"处"}));

// ---------- ② 写指令 ----------
const LOCAL_TYPES = ["看图选词/圈词","看图选句","单项选择（三选一）","选出不同类的词","连词成句","补全对话（选句子填空）","读短文判断对错（T/F）","看图写句子（给开头）","四线三格抄写单词"];
const PROMPT = {
 title:"② 写指令", minutes:20, rule:"自己写，不用AI",
 intro:["把下面8项填真实的。填得越具体，AI给的越能直接用；空着、写「待补」，AI就会瞎编。","页面会把你填的拼成一整段指令，在最下面。③开始后把它整段发给AI。","这一段不用AI。指令是你给AI的「备课单」，你自己最清楚孩子会什么。"],
 audio:[], listening:[], tkt:[], speaking:[],
 writingTitle:"填我的课", writingHint:"用中文写就行，教材上的词和句子照抄英文。",
 writing:[
  {id:"p_class", label:"班级", type:"short", prompt:"给哪个班做（写班名）", placeholder:"例如：Power Up L1-F班"},
  {id:"p_kids", label:"学生情况", type:"long", rows:3, prompt:"几个孩子、几岁、现在会什么、哪里常错（写真实情况）", placeholder:"例如：6个孩子，7—9岁。会认读本单元的运动词，能说 I can swim.；问句 Can you…? 常忘了 can 放前面；单词拼写弱，sw 和 sh 分不清。"},
  {id:"p_lesson", label:"这节课", type:"short", prompt:"11/21这节课：单元、课次、教材页码", placeholder:"例如：Unit 7 Let's play! Lesson 3，学生书第72—73页"},
  {id:"p_words", label:"词和句", type:"long", rows:3, prompt:"这节课的单词和句型（照着教材抄英文）", placeholder:"例如：swim, run, jump, ride a bike, play football；Can you swim? Yes, I can. / No, I can't."},
  {id:"p_target", label:"目标句型", type:"short", prompt:"这节课要孩子会说、会写的目标句型（英文）", placeholder:"例如：Can you ride a bike? — Yes, I can. / No, I can't."},
  {id:"p_local", label:"对标外研版", type:"short", prompt:"对应外研版（三起）哪个单元（查师训发的《主题对标》表）", placeholder:"例如：三下 U4 What's your hobby?；四上 U1 I love sports"},
  {id:"p_types", label:"本地题型", type:"multi", prompt:"这份练习单用哪几种题型（选3种）", options:LOCAL_TYPES},
  {id:"p_size", label:"成品要求", type:"short", prompt:"多大、几道题、做多久", placeholder:"例如：A4一页，4个大题共8小题，孩子15分钟内做完，最后单独一页答案"}
 ],
 compose:{title:"拼好的指令（③里整段发给AI）", hint:"上面每改一个字，这里跟着变。还显示「还没填」的地方，回去补完。",
  template:"你是小学英语老师的助手。请帮我做一份学生课后练习单。\n\n【班级和学生】{{p_class}}。{{p_kids}}\n【这节课】{{p_lesson}}\n【只能用这些词和句型】{{p_words}}\n【目标句型】{{p_target}}\n【对应本地教材】外研版（三年级起点）{{p_local}}\n【题型】只用这几种：{{p_types}}\n【成品要求】{{p_size}}\n\n【规矩】\n1. 只要学生用的内容。不要出现任何给老师的话、教学步骤或上课话术。\n2. 只用上面列出的词和句型，加上简单的旧词；不出现生词。\n3. 每个大题的说明中英双语，孩子和家长看得懂。\n4. 需要图片的题，写清楚【图：画的是什么】，我自己配图。\n5. 难度按班里中等水平的孩子定，他们能做对七八成。\n6. 最后单独一页答案。\n7. 不要写「待补」。有不知道的地方，先问我，不要自己编。"},
 sections:["writing","compose"]
};

// ---------- ③ 用AI做练习单 ----------
const MAKE = {
 title:"③ 用AI做练习单", minutes:75, rule:"这一段要用AI",
 intro:["打开你用的AI，把②拼好的指令整段发过去。","AI给的第一版一定有问题，至少改3轮：每轮说清楚哪里不行、要怎么改。每轮把你发的话和这一版的问题记在下面（可以直接粘贴）。","最后一版AI原稿整段粘贴下来，一个字都别改。然后你自己动手改，改了什么一条一行写清楚。","成品存成飞书文档，分享设「组织内获得链接的人可阅读」，链接贴在最下面；另外导出PDF或截图，交卷时一起发群。"],
 audio:[], listening:[], tkt:[], speaking:[], setup:[],
 writingTitle:"过程记录", writingHint:"这一段允许、也要求粘贴。第4轮可以不填。",
 writing:[
  {id:"m_tool", label:"用的AI", type:"short", prompt:"这次用的是哪个AI", group:"r0", groupTitle:"用的工具"},
  {id:"m_r1", label:"第1轮发的", type:"long", rows:4, prompt:"第1轮：你发给AI的话（就是②的指令）", group:"r1", groupTitle:"第1轮"},
  {id:"m_r1_bad", label:"第1轮问题", type:"short", prompt:"AI第1版哪里不行（中文一两句）", group:"r1"},
  {id:"m_r2", label:"第2轮发的", type:"long", rows:3, prompt:"第2轮：你发给AI的话", group:"r2", groupTitle:"第2轮"},
  {id:"m_r2_bad", label:"第2轮问题", type:"short", prompt:"AI第2版还有哪里不行", group:"r2"},
  {id:"m_r3", label:"第3轮发的", type:"long", rows:3, prompt:"第3轮：你发给AI的话", group:"r3", groupTitle:"第3轮"},
  {id:"m_r3_bad", label:"第3轮问题", type:"short", prompt:"AI第3版还有哪里不行（没有了就写「可以用了」）", group:"r3"},
  {id:"m_r4", label:"第4轮发的", type:"long", rows:3, prompt:"第4轮（可不填）：你发给AI的话", group:"r4", groupTitle:"第4轮（可不填）", optional:true},
  {id:"m_r4_bad", label:"第4轮问题", type:"short", prompt:"AI第4版还有哪里不行", group:"r4", optional:true},
  {id:"m_final_ai", label:"AI原稿", type:"long", rows:12, max:20000, prompt:"AI最后一版原稿（整段粘贴，一个字都别改）", group:"fin", groupTitle:"AI原稿和我的修改"},
  {id:"m_changes", label:"我改了什么", type:"long", rows:5, prompt:"我自己动手改了哪些地方（一条一行，至少3条，写清第几题、从什么改成什么）", group:"fin", placeholder:"例如：第3题 AI 用了 skateboard，这节课没学，改成 ride a bike\n删掉了 Part 2 下面的 Teacher's tip\n答案页第5题 AI 写错了，改成 B"},
  {id:"m_link", label:"成品链接", type:"short", prompt:"成品飞书文档链接（组织内可阅读）", group:"fin", placeholder:"https://…feishu.cn/docx/…"}
 ],
 sections:["writing"]
};

// ---------- ④ 核对和存模板 ----------
const CK = ["核对过，没问题","发现问题，已改"];
const CHECKS = [
 ["班级课次","标题写了真实的班级和11/21的课次，全文没有「待补」"],
 ["没老师话","没有一句给老师的话（Teacher's note、上课步骤、话术）"],
 ["不超纲","每个词都在这节课或以前学过——我对着教材一个个查过"],
 ["本地题型","题型是我选的那几种，每个大题有中英双语说明"],
 ["图","需要图的题有图，或写清楚了画什么、我已配好"],
 ["答案","我自己把整份做了一遍，答案页每题都对"],
 ["拼写","拼写、大小写、标点、单复数都查过"],
 ["篇幅","A4一页放得下，孩子15分钟内做得完"],
 ["难度","班里中等的孩子能做对七八成，最弱的孩子至少能做第一大题"],
 ["排版","打印出来或预览看过，字够大、留了写字的空"]
].map(([label, prompt], i) => ({id:"c"+(i+1), label, prompt, options:CK, noteWhen:1, notePrompt:"选「发现问题，已改」时写：哪一题、原来什么、改成什么"}));
const CHECK = {
 title:"④ 核对和存模板", minutes:30, rule:"自己核对，不用AI",
 intro:["打开你的成品，按下面10条一条一条核对。发现问题就当场在飞书文档里改，改了什么写下来。","核对完，把这次最好用的那段指令改成模板：班级、课次、词句这些每次要换的地方，换成【】。下次换个单元直接套。","最后写清楚11/21周六怎么用这份练习单。"],
 audio:[], listening:[], tkt:[], speaking:[], setup:[],
 checksTitle:"逐条核对", checksHint:"别一口气全勾「没问题」。AI的第一版几乎不可能10条全对，月神会对着你的成品查。",
 checks:CHECKS,
 writingTitle:"存模板，写周六怎么用",
 writing:[
  {id:"k_template", label:"指令模板", type:"long", rows:10, max:8000, prompt:"指令模板：把这次最好用的指令整理成一段，每次要换的地方写成【班级】【学生情况】【这节课的词和句】这样的空位"},
  {id:"k_use", label:"周六怎么用", type:"short", prompt:"11/21周六怎么用：哪个班、课上哪个环节、几分钟，剩下的怎么处理", placeholder:"例如：F班，下课前8分钟闭卷做第1、2大题，第3、4大题带回家，周日晚上家长拍照发群"},
  {id:"k_next", label:"复盘看什么", type:"short", prompt:"周日写课后复盘时，你要重点看哪道题的对错？为什么？"}
 ],
 sections:["checks","writing"]
};

const BASE = {
 spot: {title:"① 看懂好坏", minutes:15, rule:"自己看，不用AI",
  intro:["下面是一份AI做出来的第一版练习单，跟你等下要做的是同一种东西。","逐条判断10处：要改，还是没问题。选完会看到解析。"],
  audio:[], listening:[], setup:[], writing:[], speaking:[],
  conceptTitle:"哪里要改", conceptRule:"按「周六能不能直接发给孩子」来判断。", tkt:SPOT},
 prompt: PROMPT,
 make: MAKE,
 check: CHECK
};
const clonePacket = () => JSON.parse(JSON.stringify(BASE));
export const PACKETS = {he: clonePacket(), zuo: clonePacket()};
