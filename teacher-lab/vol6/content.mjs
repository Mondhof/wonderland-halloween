export const VERSION = "2026-11-19.vol6.v2";
export const META = {
 vol:"Vol.6", reviewer:"刘老师", prefix:"wl-vol6-v2:", db:"wonderland-vol6-v2", cache:"wonderland-vol6-cache-v2",
 format:"wonderland-teacher-vol6-response", fileTag:"温德兰_Vol.6",
 flow:"一次做完：看懂好坏10 → 写指令20<br>→ 用AI做练习单60 → 按标准核对20 → 交卷",
 submitHint:"下载后，把答卷文件和练习单成品（PDF或截图）一起发到英语部群，再在自己的文件消息下面 @月神。刘老师看完会改，改好再发给孩子。",
 exportNotice:"答卷保存在当前浏览器，不自动上传。四段分开计时、分开锁定；③允许并要求用AI，粘贴记录照常保留。练习单成品由刘玥审改后才发给学生。",
 home:{
  eyebrow:"VOL.6 · 用AI给自己班这周的课做一份学生练习单",
  title:"AI写得出来不算数，<br>孩子拿到能做、家长看得懂才算。",
  planTitle:"一次做完，2小时，分四段",
  cards:[
   {h:"这次要交什么", ps:["给自己一个班这周末（11月21—22日）那节课做一份学生练习单：Power Up 的词和句，按孩子的年龄出题，A4一页，附答案。","AI的过程也要交：每一轮发给AI的话、AI最后一版原稿、你自己动手改了哪些地方。","交上来以后刘老师会看、会改，改好了再发给孩子。"]},
   {h:"开始前准备好", ps:["一台能上网、能用AI的电脑，你平时用哪个AI就用哪个。","这周那节课的 Power Up 课本：书带来，或者把那几页拍好照片。","你班的「2026秋季教学计划及教案」，打开到这周那节课。","①②④自己做，不用AI；只有③用AI。"]}
  ]
 },
 guide:[
  ["2小时怎么做",["① 看懂好坏10分钟：看一份AI做坏了的练习单，判断10处要不要改。","② 写指令20分钟：把班级、孩子、家长、这节课的词句、题型填进去，页面会自动拼成一段完整的指令。","③ 用AI做练习单60分钟：把指令发给AI，至少改2轮；每轮记下你发的话和这一版哪里不行；最后贴上AI原稿，写清你自己改了什么，把成品存成飞书文档。","④ 按标准核对20分钟：10条逐条核对，有问题当场改；再写这份练习单周末怎么用。"]],
  ["成品放哪",["练习单存成飞书文档，分享设成「组织内获得链接的人可阅读」，把链接贴进③。另外导出PDF或截图，和答卷一起发英语部群。"]],
  ["交上来以后",["刘老师看完会改，改好的版本再打印发给孩子。周末上完课，在本班教案那节课的「课后复盘」写：哪道题孩子做得最吃力，下次怎么改。"]],
  ["交卷",["在「交卷」里回答3个问题，看缺项，下载答卷。答卷和练习单成品一起发英语部群，再在自己的文件消息下 @月神。"]]
 ]
};
export const MODES = [["spot","① 看懂好坏"],["prompt","② 写指令"],["make","③ 用AI做练习单"],["check","④ 按标准核对"]];
export const PROFILES = {
 he: {name:"何静", focus:"你11月6日交的AI教案、课后反馈和作业表，班名、学生、作业渠道都还写着「待补」。这次给AI真信息，拿到先核对，成品里不许出现「待补」。你提的「AI做课后练习」，就从这一份开始。"},
 zuo: {name:"左丽慧", focus:"你11月6日交的AI教案，标题写的是「PU0 Lesson 22」，班级写「待补」，可你带的是L1-A班。这次给AI真信息，拿到先核对，成品里不许出现「待补」。"}
};
export const SESSION = {
 totalMinutes: 120,
 window: "11月19日（周四）下午在校区：14:00开始，连续2小时，16:00前交。带能用AI的电脑，带上这周那节课的 Power Up 课本。",
 phases: [
  {title:"① 看懂好坏", minutes:10, detail:"看一份AI做坏的练习单，10处判断要不要改（不用AI）", evidence:"原答"},
  {title:"② 写指令", minutes:20, detail:"填班级、孩子、家长、这节课的词句、题型和成品要求，自动拼成指令（不用AI）", evidence:"指令全文"},
  {title:"③ 用AI做练习单", minutes:60, detail:"把指令发给AI，至少改2轮；交每轮记录、AI原稿、自己的修改和成品链接", evidence:"过程记录和成品"},
  {title:"④ 按标准核对", minutes:20, detail:"按10条标准逐条核对并当场改；写周末怎么用（不用AI）", evidence:"核对记录"},
  {title:"交卷", minutes:10, detail:"3个问题，自查缺项，下载答卷，成品一起发群", evidence:"答卷和练习单发英语部群并@月神"}
 ]
};
export const SOURCES = {
 training: "做法依据：刘玥《我是如何用AI+飞书帮我备课和课后服务》——AI不知道你的学生和校区，要补齐「备内容、备学生、备家长」；不满意就告诉AI你要什么，别复制完就走；做好的东西存进飞书。南宁师训Emily：先想清楚要什么成品再描述给AI，学生用的练习单不能混老师话术，AI初稿要反复改。",
 standard: "练习单标准按 Power Up Starter（PU0）、Power Up 1 的实际进度和4—8岁孩子定，不按校内考试题型出。",
 note: "①是选择题，自动判；②③④和练习单成品由刘玥人工看，改好再发给孩子。不排名。"
};
export const REFLECT = [
 {id:"r1", label:"最帮忙", prompt:"这次AI哪一步最帮到你？"},
 {id:"r2", label:"最不靠谱", prompt:"AI哪里最不靠谱？你是怎么发现的？"},
 {id:"r3", label:"最没把握", prompt:"这份练习单你自己最没把握的是哪一题？希望刘老师帮你看哪里？"}
];

// ---------- ① 看懂好坏 ----------
const SHEET = `【示例：AI做的第一版原稿，班级是虚构的】

Power Up Starter【待补】班 · Unit 4 My toys · 课后练习
孩子5—6岁。本课词：ball, doll, car, kite, teddy　句型：What's this? — It's a ball.

Teacher's tip: Model the first item, then let students work alone. (3 minutes)

Part 1  Look and match.（看图连线）
  [图：球]   [图：风筝]   [图：玩具车]        ball　　kite　　car

Part 2  Read and choose.
  1. ____ is a ball.        A. This　B. These　C. Those
  2. What ____ this?        A. is　B. are　C. am

Part 3  Write the words.（写出单词）
  [图：泰迪熊] ________　[图：遥控飞机] ________　[图：拼图] ________

Part 4  Write 3 sentences about your favourite toy.

Part 5  Trace.（描红）　b a l l　　d o l l

（全文完）`;
const OPT = ["要改","没问题"];
const SPOT = [
 {id:"k1", prompt:"标题里的「【待补】班」", answer:0, explanation:"要改。班级、课次要写真的。AI不知道你的班，你在指令里告诉它；它留了「待补」，你自己补上，不能原样发出去。"},
 {id:"k2", prompt:"「Teacher's tip: Model the first item…」这一行", answer:0, explanation:"要改，删掉。学生练习单里不能有给老师的话。"},
 {id:"k3", prompt:"Part 1 看图连线（球、风筝、玩具车连单词）", answer:1, explanation:"没问题。用的是本课的词，5—6岁孩子看图认词、连线，做得了。"},
 {id:"k4", prompt:"Part 2 两道语法单选（This / These / Those，is / are / am）", answer:0, explanation:"要改。这是校内考试的语法题。Starter的孩子还不会读句子，These、Those 也没学过。换成看图圈词或者「听家长读、圈出图」。"},
 {id:"k5", prompt:"Part 3 里的「遥控飞机」「拼图」", answer:0, explanation:"要改。这两个词这节课没学过，超纲了。只用本课和以前学过的词。"},
 {id:"k6", prompt:"Part 3 让5—6岁孩子看图把单词写出来", answer:0, explanation:"要改。Starter的孩子还在认字母，不默写单词。改成描红，或者看图圈出对的单词。"},
 {id:"k7", prompt:"Part 4 写3句话介绍最喜欢的玩具", answer:0, explanation:"要改。5—6岁孩子写不了句子。想让孩子用句子，就放到开口题里说，不要写。"},
 {id:"k8", prompt:"Part 5 描红 ball、doll", answer:1, explanation:"没问题。本课的词，描红适合这个年龄。"},
 {id:"k9", prompt:"Part 2「Read and choose.」只有英文说明", answer:0, explanation:"要改。练习单是家长陪着做的，每个大题都要有一句中文说明，家长读给孩子听。"},
 {id:"k10", prompt:"整份没有一道让孩子开口说的题", answer:0, explanation:"要改。每份都要有开口题：看图说一句 It's a ball.，家长拍30秒视频发班群。孩子开口，家长也看得见孩子学了什么。"}
].map((q, i) => ({type:"choice", group:"sheet", groupTitle:"先读这份练习单，再逐条判断", material:SHEET, skill:"看出问题", options:OPT, ...q, label:"第"+(i+1)+"处"}));

// ---------- ② 写指令 ----------
const TYPES = ["看图圈词","看图连线（图和单词）","描红（字母或单词）","按指令涂色","数一数、圈数字","看图选词填空（给词库，只给L1）","听家长读，圈出对应的图","画一画、说一说（draw and say）","开口题：看图说一句，家长拍视频发班群（必选）"];
const PROMPT = {
 title:"② 写指令", minutes:20, rule:"自己写，不用AI",
 intro:["AI不知道你的班、你的孩子、你的家长。这三样你不告诉它，它就按自己想的瞎编。","把下面8项填真实的，页面会拼成一整段指令，在最下面。③开始后把它整段发给AI。","这一段不用AI。"],
 audio:[], listening:[], tkt:[], speaking:[],
 writingTitle:"填我的课", writingHint:"用中文写就行，课本上的词和句子照抄英文。",
 writing:[
  {id:"p_class", label:"班级", type:"short", prompt:"给哪个班做（写班名）", placeholder:"例如：Power Up Starter-E班"},
  {id:"p_kids", label:"备学生", type:"long", rows:3, prompt:"几个孩子、几岁、会不会认字写字、这单元会了什么、哪里常错", placeholder:"例如：5个孩子，5—6岁，认得字母、不会写单词。会说 ball、car、doll，能指图回答 It's a ball.；kite 和 teddy 常记混，问 What's this? 只会答一个词。"},
  {id:"p_parent", label:"备家长", type:"short", prompt:"家长能不能陪着做、最近最关心什么", placeholder:"例如：大多是妈妈晚上陪做，能读简单中文说明；最近最关心孩子敢不敢开口。"},
  {id:"p_lesson", label:"这节课", type:"short", prompt:"这周末这节课：Power Up 哪一级、Unit 几 Lesson 几、第几次课、课本第几页", placeholder:"例如：Power Up Starter Unit 4 Lesson 3，第12次课，课本第40—41页"},
  {id:"p_words", label:"词和句", type:"long", rows:3, prompt:"这节课的单词和句型（照着课本抄英文）", placeholder:"例如：ball, doll, car, kite, teddy；What's this? — It's a ball."},
  {id:"p_target", label:"目标句型", type:"short", prompt:"这节课要孩子会说的目标句型（英文）", placeholder:"例如：What's this? — It's a kite."},
  {id:"p_types", label:"题型", type:"multi", prompt:"用哪几种题（选3—4种，开口题必选）", options:TYPES},
  {id:"p_size", label:"成品要求", type:"short", prompt:"多大、几道题、做多久", placeholder:"例如：A4一页，4个大题，孩子10分钟内做完，最后单独附答案"}
 ],
 compose:{title:"拼好的指令（③里整段发给AI）", hint:"上面每改一个字，这里跟着变。还显示「还没填」的地方，回去补完。",
  template:"你是少儿英语老师的助手。请帮我做一份学生课后练习单，打印出来给家长陪孩子做。\n\n【班级和学生】{{p_class}}。{{p_kids}}\n【家长】{{p_parent}}\n【教材和进度】我们用剑桥 Power Up 教材。这周这节课：{{p_lesson}}\n【只能用这些词和句型】{{p_words}}\n【目标句型】{{p_target}}\n【题型】只用这几种：{{p_types}}\n【成品要求】{{p_size}}\n\n【规矩】\n1. 只要学生用的内容。不要任何给老师的话、教学步骤或上课话术。\n2. 只用上面列出的词和句型，不出现生词；不出语法选择题，不出校内考试题型。\n3. 按孩子年龄出题：还不会写字的孩子只做圈、连、涂、描红，不默写单词、不写句子。\n4. 每个大题配一句中文说明，家长读给孩子听；英文指令越短越好，比如 Look and circle. / Match. / Trace. / Say.\n5. 必须有一道开口题：看图说一句目标句，家长拍30秒视频发班群。\n6. 需要图片的地方写清楚【图：画的是什么】，我自己配图。\n7. 从易到难：先认（圈、连），再辨（选），最后用（说、写）。\n8. 最后单独附答案，给家长对。\n9. 不要写「待补」。有不知道的地方先问我，不要自己编。"},
 sections:["writing","compose"]
};

// ---------- ③ 用AI做练习单 ----------
const MAKE = {
 title:"③ 用AI做练习单", minutes:60, rule:"这一段要用AI",
 intro:["打开你用的AI，把②拼好的指令整段发过去。","AI给的第一版一定有问题，至少改2轮：每轮直接告诉AI哪里不行、你要什么。每轮把你发的话和这一版的问题记在下面（可以直接粘贴）。","最后一版AI原稿整段粘贴下来，一个字都别改。然后你自己动手改，改了什么一条一行写清楚。","成品存成飞书文档，分享设「组织内获得链接的人可阅读」，链接贴在最下面；另外导出PDF或截图，交卷时一起发群。"],
 audio:[], listening:[], tkt:[], speaking:[], setup:[],
 writingTitle:"过程记录", writingHint:"这一段允许、也要求粘贴。第3轮可以不填。",
 writing:[
  {id:"m_tool", label:"用的AI", type:"short", prompt:"这次用的是哪个AI", group:"r0", groupTitle:"用的工具"},
  {id:"m_r1", label:"第1轮发的", type:"long", rows:4, prompt:"第1轮：你发给AI的话（就是②的指令）", group:"r1", groupTitle:"第1轮"},
  {id:"m_r1_bad", label:"第1轮问题", type:"short", prompt:"AI第1版哪里不行（中文一两句）", group:"r1"},
  {id:"m_r2", label:"第2轮发的", type:"long", rows:3, prompt:"第2轮：你发给AI的话（直接说哪里不行、要改成什么）", group:"r2", groupTitle:"第2轮"},
  {id:"m_r2_bad", label:"第2轮问题", type:"short", prompt:"AI第2版还有哪里不行（没有了就写「可以用了」）", group:"r2"},
  {id:"m_r3", label:"第3轮发的", type:"long", rows:3, prompt:"第3轮（可不填）：你发给AI的话", group:"r3", groupTitle:"第3轮（可不填）", optional:true},
  {id:"m_r3_bad", label:"第3轮问题", type:"short", prompt:"AI第3版还有哪里不行", group:"r3", optional:true},
  {id:"m_final_ai", label:"AI原稿", type:"long", rows:12, max:20000, prompt:"AI最后一版原稿（整段粘贴，一个字都别改）", group:"fin", groupTitle:"AI原稿和我的修改"},
  {id:"m_changes", label:"我改了什么", type:"long", rows:4, prompt:"我自己动手改了哪些地方（一条一行，至少2条，写清第几题、从什么改成什么）", group:"fin", placeholder:"例如：第3题 AI 用了 puzzle，这节课没学，改成 kite\n删掉了 Part 2 下面的 Teacher's tip\n开口题 AI 写的是英文说明，补了中文：请家长指着图问「这是什么？」"},
  {id:"m_link", label:"成品链接", type:"short", prompt:"成品飞书文档链接（组织内可阅读）", group:"fin", placeholder:"https://…feishu.cn/docx/…"}
 ],
 sections:["writing"]
};

// ---------- ④ 按标准核对 ----------
const CK = ["核对过，没问题","发现问题，已改"];
const CHECKS = [
 ["对得上这周","标题写了真实班级、Unit 和 Lesson，全文没有「待补」"],
 ["不超纲","每个词都是这节课或以前学过的 Power Up 词——我对着课本一个个查过"],
 ["按年龄出","不会写字的孩子只圈、连、涂、描红；没有语法选择题和考试题"],
 ["从易到难","先认（圈、连），再辨（选），最后用（说、写）"],
 ["开口题","有一道看图说目标句的开口题，写清楚家长怎么拍、发到哪"],
 ["家长看得懂","每个大题都有一句中文说明，英文指令很短"],
 ["没老师话","没有一句给老师的话（Teacher's tip、上课步骤、话术）"],
 ["图","需要图的题有图，或写清楚了画什么、我已配好"],
 ["答案","我自己把整份做了一遍，答案每题都对"],
 ["篇幅排版","A4一页放得下，孩子10—15分钟做得完，字够大、留了写的空"]
].map(([label, prompt], i) => ({id:"c"+(i+1), label, prompt, options:CK, noteWhen:1, notePrompt:"选「发现问题，已改」时写：哪一题、原来什么、改成什么"}));
const CHECK = {
 title:"④ 按标准核对", minutes:20, rule:"自己核对，不用AI",
 intro:["打开你的成品，按下面10条一条一条核对。发现问题就当场在飞书文档里改，改了什么写下来。","这10条就是以后每份练习单的标准。","最后写清楚这份练习单周末怎么用。"],
 audio:[], listening:[], tkt:[], speaking:[], setup:[],
 checksTitle:"按10条标准逐条核对", checksHint:"别一口气全勾「没问题」。AI的第一版几乎不可能10条全对，刘老师会对着你的成品看。",
 checks:CHECKS,
 writingTitle:"周末怎么用",
 writing:[
  {id:"k_use", label:"怎么用", type:"short", prompt:"这周末哪个班、哪天用；课上做哪几题、几分钟，哪些带回家", placeholder:"例如：E班周六，下课前8分钟做第1、2题，第3、4题和开口题带回家，周日晚上家长发视频"},
  {id:"k_prompt_note", label:"下次指令", type:"short", prompt:"下次再用AI做练习单，你的指令要先加上哪一句？", placeholder:"例如：孩子还不会写字，所有题只要圈和连"}
 ],
 sections:["checks","writing"]
};

const BASE = {
 spot: {title:"① 看懂好坏", minutes:10, rule:"自己看，不用AI",
  intro:["下面是一份AI做出来的第一版练习单，跟你等下要做的是同一种东西。","逐条判断10处：要改，还是没问题。选完会看到解析。"],
  audio:[], listening:[], setup:[], writing:[], speaking:[],
  conceptTitle:"哪里要改", conceptRule:"按「这周末能不能直接发给孩子、家长看不看得懂」来判断。", tkt:SPOT},
 prompt: PROMPT,
 make: MAKE,
 check: CHECK
};
const clonePacket = () => JSON.parse(JSON.stringify(BASE));
export const PACKETS = {he: clonePacket(), zuo: clonePacket()};
