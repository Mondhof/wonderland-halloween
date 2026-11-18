export const VERSION = "2026-11-19.vol6.v3";
export const META = {
 vol:"Vol.6", reviewer:"刘老师", prefix:"wl-vol6-v3:", db:"wonderland-vol6-v3", cache:"wonderland-vol6-cache-v3",
 format:"wonderland-teacher-vol6-response", fileTag:"温德兰_Vol.6",
 flow:"一次做完：看懂好坏10 → 写指令20<br>→ 用AI做练习单60 → 按标准核对20 → 交卷",
 submitHint:"下载后，把答卷文件和练习单成品（PDF或截图）一起发到英语部群，再在自己的文件消息下面 @月神。刘老师看完会改，改好再发给孩子。",
 exportNotice:"答卷保存在当前浏览器，不自动上传。四段分开计时、分开锁定；③允许并要求用AI，粘贴记录照常保留。练习单成品由刘玥审改后才发给学生。",
 home:{
  eyebrow:"VOL.6 · 用AI给自己班这周的课做一份学生练习单",
  title:"AI写得出来不算数，<br>孩子拿到能做、家长看得懂才算。",
  planTitle:"一次做完，2小时，分四段",
  cards:[
   {h:"这次要交什么", ps:["按你周日在群里报的进度，给这周末（11月21—22日）那节课做一份学生练习单：左丽慧做 Starter-B、C 两个班共用的一份（Unit 3，课本第28—31页），何静做 Starter-E 班的一份（Unit 4，课本第44—49页）。A4一页，附答案。","AI的过程也要交：每一轮发给AI的话、AI最后一版原稿、你自己动手改了哪些地方。","交上来以后刘老师会看、会改，改好了再发给孩子。"]},
   {h:"开始前准备好", ps:["一台能上网、能用AI的电脑，你平时用哪个AI就用哪个。","Power Up Starter 学生用书，翻到你那几页：书带来，或者把那几页拍好照片。","①②④自己做，不用AI；只有③用AI。"]}
  ]
 },
 guide:[
  ["2小时怎么做",["① 看懂好坏10分钟：看一份AI按你这一课做坏了的练习单，判断10处要不要改。","② 写指令20分钟：把孩子、家长、这一课的词句、题型填进去，页面会自动拼成一段完整的指令。","③ 用AI做练习单60分钟：把指令发给AI，至少改2轮；每轮记下你发的话和这一版哪里不行；最后贴上AI原稿，写清你自己改了什么，把成品存成飞书文档。","④ 按标准核对20分钟：10条逐条核对，有问题当场改；再写这份练习单周末怎么用。"]],
  ["成品放哪",["练习单存成飞书文档，分享设成「组织内获得链接的人可阅读」，把链接贴进③。另外导出PDF或截图，和答卷一起发英语部群。"]],
  ["交上来以后",["刘老师看完会改，改好的版本再打印发给孩子。周末上完课，在本班教案那节课的「课后复盘」写：哪道题孩子做得最吃力，下次怎么改。"]],
  ["交卷",["在「交卷」里回答3个问题，看缺项，下载答卷。答卷和练习单成品一起发英语部群，再在自己的文件消息下 @月神。"]]
 ]
};
export const MODES = [["spot","① 看懂好坏"],["prompt","② 写指令"],["make","③ 用AI做练习单"],["check","④ 按标准核对"]];
export const PROFILES = {
 he: {name:"何静", focus:"这次做 Starter-E 班的一份：Power Up Starter Unit 4 At home，课本第44—49页（故事 The three wishes、字母 c、Shapes at home、单元复习），是你周日在群里报的进度。你提的「AI做课后练习」就从这一份开始。上次你的AI教案和作业表还写着「待补」，这次成品里不许出现「待补」。"},
 zuo: {name:"左丽慧", focus:"这次做 Starter-B、C 两个班共用的一份：Power Up Starter Unit 3 Food shopping，课本第28—31页，是你周日在群里报的进度。上次你的AI教案班级写的是「待补」，这次成品里不许出现「待补」。"}
};
export const SESSION = {
 totalMinutes: 120,
 window: "11月19日（周四）下午在校区：14:00开始，连续2小时，16:00前交。带能用AI的电脑，带上 Power Up Starter 学生用书。",
 phases: [
  {title:"① 看懂好坏", minutes:10, detail:"看一份按你这一课做坏的练习单，10处判断要不要改（不用AI）", evidence:"原答"},
  {title:"② 写指令", minutes:20, detail:"填孩子、家长、这一课的词句、题型和成品要求，自动拼成指令（不用AI）", evidence:"指令全文"},
  {title:"③ 用AI做练习单", minutes:60, detail:"把指令发给AI，至少改2轮；交每轮记录、AI原稿、自己的修改和成品链接", evidence:"过程记录和成品"},
  {title:"④ 按标准核对", minutes:20, detail:"按10条标准逐条核对并当场改；写周末怎么用（不用AI）", evidence:"核对记录"},
  {title:"交卷", minutes:10, detail:"3个问题，自查缺项，下载答卷，成品一起发群", evidence:"答卷和练习单发英语部群并@月神"}
 ]
};
export const SOURCES = {
 training: "做法依据：刘玥《我是如何用AI+飞书帮我备课和课后服务》——AI不知道你的学生和校区，要补齐「备内容、备学生、备家长」；不满意就告诉AI你要什么，别复制完就走；做好的东西存进飞书。南宁师训Emily：先想清楚要什么成品再描述给AI，学生用的练习单不能混老师话术，AI初稿要反复改。",
 standard: "练习单按 Power Up 第二版 Starter（PU0）的实际进度和5—7岁孩子出，不按校内考试题型出。词表依据学生用书 Map of the book 和第28—31、40—49页。",
 note: "①是选择题，自动判；②③④和练习单成品由刘玥人工看，改好再发给孩子。不排名。"
};
export const REFLECT = [
 {id:"r1", label:"最帮忙", prompt:"这次AI哪一步最帮到你？"},
 {id:"r2", label:"最不靠谱", prompt:"AI哪里最不靠谱？你是怎么发现的？"},
 {id:"r3", label:"最没把握", prompt:"这份练习单你自己最没把握的是哪一题？希望刘老师帮你看哪里？"}
];

// ---------- 每位老师自己的课 ----------
const LESSON = {
 zuo: {
  classLine:"Power Up Starter-B班（3个孩子）和 Starter-C班（5个孩子）共用这一份，都是5—7岁。",
  lessonLine:"剑桥 Power Up 第二版 Starter（Power Up 0）。这周末上 Unit 3 Food shopping，学生用书第28—31页。",
  pages:"第28—31页",
  allowed:"这一课（第28—31页）：apple, banana, grapes, orange, watermelon；beans, burger, carrot, egg, rice；There's a/an … / There are … / How many … are there? — There are … / There's one. / A lot.",
  before:"以前学过、也能用：数字 one—six，颜色 red, blue, green, yellow, orange, purple；Unit 1 man, woman, boy, girl, family, mum, dad…；Unit 2 bag, pencil, chair, table, cupboard…，Where's …? — It's in/on/under ….",
  notYet:"还没学、不能出现：第32页以后的故事和自然拼读，Unit 4 的 bed、clock、lamp，I've got …。",
  usePh:"例如：B班、C班都在周六课上用，下课前8分钟做第1、2题，其余带回家，周日晚上家长发视频",
  changesPh:"例如：第3题 AI 用了 pear，书上没有，改成 grapes\n删掉了标题下面的 Teacher's note\n开口题 AI 只写了英文，补了中文：请家长指着图问「有几个胡萝卜？」"
 },
 he: {
  classLine:"Power Up Starter-E班，5个孩子，5—7岁。",
  lessonLine:"剑桥 Power Up 第二版 Starter（Power Up 0）。这周末上 Unit 4 At home 的后半部分，学生用书第44—49页（故事 The three wishes、字母 c、Shapes at home、单元复习）。",
  pages:"第44—49页",
  allowed:"Unit 4（第40—49页）：bed, clock, computer, lamp, mirror；bathroom, bedroom, garden, kitchen, living room；circle, square, rectangle, triangle；字母 c（cat, clock, carrot, computer, crayon）；I've got … / Have you got …? — Yes, I have. / No, I haven't. / I haven't got ….",
  before:"以前学过、也能用：数字 one—six、颜色；Unit 1 家人；Unit 2 学校（bag, pencil, chair, table, cupboard…）；Unit 3 食物（apple, banana, grapes, egg, rice…），There's / There are …，How many …?",
  notYet:"还没学、不能出现：Unit 5 的 ears, eyes, hair, mouth, legs，He's got / She's got / Has he got …?；书上没有的家具（sofa, fridge, TV…）。",
  usePh:"例如：E班周六，下课前8分钟做第1、2题，其余带回家，周日晚上家长发视频",
  changesPh:"例如：第2题 AI 用了 sofa，书上没有，改成 lamp\n删掉了开头的「上课话术」\n开口题 AI 只写了英文，补了中文：请家长问 Have you got a lamp?"
 }
};

// ---------- ① 看懂好坏 ----------
const OPT = ["要改","没问题"];
const SHEETS = {
 zuo: `【示例：AI做的第一版原稿，班级是虚构的】

Power Up Starter-X班 · Unit 3 Food shopping · Homework
本课词：apple, banana, grapes, orange, watermelon, beans, burger, carrot, egg, rice
句型：There's an apple. / There are bananas. / How many … are there? — There are three. / A lot.

Teacher's note: Do Part 1 and Part 2 in class (5 minutes). Part 3–6 are homework.

Part 1  Look and circle.（看图，圈出对的单词）
  [图：一个西瓜]  watermelon / orange
  [图：一串香蕉]  bananas / burger
  [图：一个鸡蛋]  egg / rice

Part 2  Count and circle.（数一数，圈出数字）
  [图：3个苹果]  How many apples are there?　　2　3　4
  [图：一大堆豆子]  How many beans are there?　　1　5　a lot

Part 3  Fill in is or are.
  1. There ____ an orange.
  2. There ____ grapes.

Part 4  Look and match.（看图连线）
  [图：梨]　[图：草莓]　[图：面包]　　　pear　strawberry　bread

Part 5  Look and write.
  [图：胡萝卜]  c _ _ _ _ t　　[图：汉堡]  b _ _ _ _ r

Part 6  Ask your partner: How many carrots are there? Write the answer in a full sentence.

（全文完）`,
 he: `【示例：AI做的第一版原稿，班级是虚构的】

Power Up Starter-X班 · Unit 4 At home · 课后练习
本课词：bed, clock, computer, lamp, mirror；bathroom, bedroom, garden, kitchen, living room；circle, square, rectangle, triangle
句型：I've got a lamp. / Have you got a clock? — Yes, I have. / No, I haven't.

上课话术：先带孩子们复述 The three wishes，再问 Who is angry? 让孩子指图，然后发练习单。

第一部分　看图连线（Look and match.）
  [图：床]　[图：钟]　[图：镜子]　[图：台灯]　　　bed　clock　mirror　lamp

第二部分　描红字母 c，再圈出 c 开头的图（Trace and circle.）
  c　c　c　c　c
  [图：猫]　[图：钟]　[图：床]　[图：胡萝卜]

第三部分　Read the story and answer.
  Yuri and Anya have got three wishes. They want a big house, a garden and lamps, clocks and mirrors. Then they want to be king and queen. The magic fish is very angry.
  1. How many wishes have they got? ____________
  2. Why is the magic fish angry? ____________

第四部分　Choose.
  1. ____ you got a lamp?　　A. Has　B. Have　C. Do
  2. She ____ got a mirror.　　A. have　B. has　C. is

第五部分　看图说一说（Look and say.）
  [图：沙发] I've got a sofa.　[图：冰箱] I've got a fridge.　[图：电视] I've got a TV.

第六部分　找一找家里的形状，把图和形状连起来（Find the shapes.）
  [图：圆圆的钟]　[图：方方的窗户]　[图：三角形的帐篷]　　　○　□　△

第七部分　画出你的卧室，用英文写5句话介绍它。

答案：第一部分 床—bed，钟—clock，镜子—mirror，台灯—lamp。

（共7大题，排出来A4两页半）`
};
const SPOTS = {
 zuo: [
  {id:"k1", prompt:"Part 4 的 pear、strawberry、bread", answer:0, explanation:"要改。课本第28—31页的水果只有 apple、banana、grapes、orange、watermelon，梨、草莓、面包都没学过，超纲了。AI 最爱自己加词，你要对着课本一个个查。换成本课的词，比如 grapes、carrot、rice。"},
  {id:"k2", prompt:"Part 1 看图圈词（西瓜、香蕉、鸡蛋，两个词里圈一个）", answer:1, explanation:"没问题。本课的词，两个里圈一个，5—7岁孩子看图就能做，也有中文说明。"},
  {id:"k3", prompt:"标题下面的「Teacher's note: Do Part 1 and Part 2 in class…」", answer:0, explanation:"要改，删掉。学生练习单里不能有给老师的话。哪题课上做、做几分钟，你自己心里清楚就行。"},
  {id:"k4", prompt:"Part 3 用 is 或 are 填空", answer:0, explanation:"要改。这是语法填空，要读句子还要写字，Starter 的孩子做不了。书上这一课是唱和说 There's an apple. There are bananas.。改成「家长读句子，孩子圈出对的图」：家长读 There are bananas.，孩子在一根香蕉和一串香蕉里圈一串。"},
  {id:"k5", prompt:"每道题里的「[图：一个西瓜]」这类标注", answer:1, explanation:"没问题。AI 画不了图，写清楚要画什么就对了。交上来之前，你要把图配好。"},
  {id:"k6", prompt:"Part 5 看图写单词（c _ _ _ _ t、b _ _ _ _ r）", answer:0, explanation:"要改。Starter 的孩子还在认字母，不拼写单词。改成描红 carrot、burger，或者看图圈词。"},
  {id:"k7", prompt:"Part 2 数一数、圈数字（3个苹果；一大堆豆子圈 a lot）", answer:1, explanation:"没问题。用的就是本课的 How many … are there? 和 a lot，课本第31页也是这么练的。"},
  {id:"k8", prompt:"Part 3、5、6 只有英文说明", answer:0, explanation:"要改。练习单是家长陪着做的，每个大题都要一句中文说明，家长读给孩子听。"},
  {id:"k9", prompt:"Part 6 和同伴问答，再把答案写成完整的句子", answer:0, explanation:"要改。回家做作业身边没有同伴，5—7岁孩子也写不了整句。改成开口题：家长指着图问 How many carrots are there?，孩子数完说 There are five.，家长拍30秒视频发班群。"},
  {id:"k10", prompt:"整份最后没有答案", answer:0, explanation:"要改。最后要单独附答案，家长才能对。你自己也要先从头做一遍，确认每题答案都对。"}
 ],
 he: [
  {id:"k1", prompt:"第四部分 两道选择题（Has / Have / Do；have / has / is）", answer:0, explanation:"要改。这是校内考试的语法单选，孩子读不了句子；She has got 是 Unit 5 才学的。改成看图问答：家长指着图问 Have you got a lamp?，孩子说 Yes, I have. 或 No, I haven't."},
  {id:"k2", prompt:"第一部分 看图连线（床、钟、镜子、台灯连单词）", answer:1, explanation:"没问题。Unit 4 的词，看图连线，5—7岁孩子做得了，也有中文说明。"},
  {id:"k3", prompt:"开头那段「上课话术：先带孩子们复述…」", answer:0, explanation:"要改，删掉。学生练习单里不能有给老师的话。AI 最常混进来的就是这种，南宁师训 Emily 也专门提过。"},
  {id:"k4", prompt:"第五部分 sofa、fridge、TV", answer:0, explanation:"要改。sofa、fridge、TV 书上都没学过，超纲了。Unit 4 家里的东西是 bed、clock、computer、lamp、mirror，换成这几个。看图说一说本来就是开口题，还要写清楚家长怎么拍、发到哪。"},
  {id:"k5", prompt:"第二部分 描红字母 c，再圈出 c 开头的图（猫、钟、床、胡萝卜）", answer:1, explanation:"没问题。课本第46页就是这么练的：描红 c，圈出 cat、clock、carrot 这些 c 开头的，bed 不圈。"},
  {id:"k6", prompt:"第三部分 读英文故事，写答案", answer:0, explanation:"要改。5—7岁孩子读不了这么长的英文，也写不了答案。The three wishes 是听的故事，改成「家长读、孩子指图」：家长问 Who is angry?，孩子圈出生气的鱼。"},
  {id:"k7", prompt:"第七部分 画出卧室，用英文写5句话", answer:0, explanation:"要改。孩子写不了句子。改成开口题：画出自己的卧室，指着画说 I've got a bed. I've got a lamp.，家长拍30秒视频发班群。"},
  {id:"k8", prompt:"第六部分 找家里的形状，把图和形状连起来", answer:1, explanation:"没问题。课本第47页 Shapes at home，图和形状连线，不认字也能做。"},
  {id:"k9", prompt:"共7大题，排出来A4两页半", answer:0, explanation:"要改。7大题、两页半，孩子15分钟做不完，家长也陪不住。A4一页、4—5个大题就够。"},
  {id:"k10", prompt:"答案只写了第一部分", answer:0, explanation:"要改。每一题的答案都要附上，家长才能对。你自己先从头做一遍，确认每题都对。"}
 ]
};
const spotItems = t => SPOTS[t].map((q, i) => ({type:"choice", group:"sheet", groupTitle:"先读这份练习单，再逐条判断", material:SHEETS[t], skill:"看出问题", options:OPT, ...q, label:"第"+(i+1)+"处"}));

// ---------- ② 写指令 ----------
const TYPES = ["看图圈词","看图连线（图和单词）","描红（字母或单词）","按指令涂色","数一数、圈数字","听家长读，圈出对应的图","画一画、说一说（draw and say）","开口题：看图说一句，家长拍视频发班群（必选）"];
const RULES = "【规矩】\n1. 只要学生用的内容。不要任何给老师的话、教学步骤或上课话术。\n2. 只用上面列出的词和句型，不出现生词；数字只用 one 到 six，颜色只用 red, blue, green, yellow, orange, purple。不出语法选择题，不出校内考试题型。\n3. 孩子还不会写字：只做圈、连、涂、描红，不默写单词、不写句子。\n4. 每个大题配一句中文说明，家长读给孩子听；英文指令越短越好，比如 Look and circle. / Match. / Trace. / Say.\n5. 必须有一道开口题：看图说一句目标句，家长拍30秒视频发班群。\n6. 需要图片的地方写清楚【图：画的是什么】，我自己配图。\n7. 从易到难：先认（圈、连），再辨（选），最后用（说）。\n8. 最后单独附答案，给家长对。\n9. 不要写「待补」。有不知道的地方先问我，不要自己编。";
const prompt = t => ({
 title:"② 写指令", minutes:20, rule:"自己写，不用AI",
 intro:["AI不知道你的班、你的孩子、你的家长。这三样你不告诉它，它就按自己想的瞎编。","班级和课本页已经按你周日报的进度写进指令了。下面6项填真实的，页面会拼成一整段指令，在最下面。③开始后把它整段发给AI。","这一段不用AI。词和句型对着课本"+LESSON[t].pages+"抄。"],
 audio:[], listening:[], tkt:[], speaking:[],
 writingTitle:"填我的课", writingHint:"用中文写就行，课本上的词和句子照抄英文。下面的「例如」是别的单元的，别照抄。",
 writing:[
  {id:"p_kids", label:"备学生", type:"long", rows:3, prompt:"孩子会不会认字写字、这单元已经会说什么、哪里常错", placeholder:"例如（Unit 2 的）：认得字母、不会写单词。会说 bag、pencil、chair，能答 Where's my pencil? — It's in the bag.；on 和 under 常说反。"},
  {id:"p_parent", label:"备家长", type:"short", prompt:"家长能不能陪着做、最近最关心什么", placeholder:"例如：大多是妈妈晚上陪做，能读简单中文说明；最近最关心孩子敢不敢开口。"},
  {id:"p_words", label:"词和句", type:"long", rows:3, prompt:"这一课的单词和句型（对着课本"+LESSON[t].pages+"抄英文）", placeholder:"例如（Unit 2 的，别照抄）：bag, classroom, pencil, playground, teacher；Where's my pencil? — It's in the bag."},
  {id:"p_target", label:"目标句型", type:"short", prompt:"这一课要孩子会说的目标句型（英文）。周五 Vol.7 带孩子说、周末开口题，都用这一句", placeholder:"例如（Unit 2 的）：Where's my pencil? — It's under the chair."},
  {id:"p_types", label:"题型", type:"multi", prompt:"用哪几种题（选3—4种，开口题必选）", options:TYPES},
  {id:"p_size", label:"成品要求", type:"short", prompt:"多大、几道题、做多久", placeholder:"例如：A4一页，4个大题，孩子10分钟内做完，最后单独附答案"}
 ],
 compose:{title:"拼好的指令（③里整段发给AI）", hint:"上面每改一个字，这里跟着变。还显示「还没填」的地方，回去补完。",
  template:"你是少儿英语老师的助手。请帮我做一份学生课后练习单，打印出来给家长陪孩子做。\n\n【班级和学生】"+LESSON[t].classLine+"{{p_kids}}\n【家长】{{p_parent}}\n【教材和进度】"+LESSON[t].lessonLine+"\n【只能用这些词和句型】{{p_words}}\n【目标句型】{{p_target}}\n【题型】只用这几种：{{p_types}}\n【成品要求】{{p_size}}\n\n"+RULES},
 sections:["writing","compose"]
});

// ---------- ③ 用AI做练习单 ----------
const make = t => ({
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
  {id:"m_changes", label:"我改了什么", type:"long", rows:4, prompt:"我自己动手改了哪些地方（一条一行，至少2条，写清第几题、从什么改成什么）", group:"fin", placeholder:LESSON[t].changesPh},
  {id:"m_link", label:"成品链接", type:"short", prompt:"成品飞书文档链接（组织内可阅读）", group:"fin", placeholder:"https://…feishu.cn/docx/…"}
 ],
 sections:["writing"]
});

// ---------- ④ 按标准核对 ----------
const CK = ["核对过，没问题","发现问题，已改"];
const checks = t => [
 ["对得上这周","标题写了真实班级、Unit 和课本页，全文没有「待补」"],
 ["不超纲","每个词都在课本"+LESSON[t].pages+"或者上面「以前学过」里——我对着课本一个个查过"],
 ["按年龄出","只圈、连、涂、描红；没有要孩子写单词、写句子的题，没有语法选择题和考试题"],
 ["从易到难","先认（圈、连），再辨（选），最后用（说）"],
 ["开口题","有一道看图说目标句的开口题，写清楚家长怎么拍、发到哪"],
 ["家长看得懂","每个大题都有一句中文说明，英文指令很短"],
 ["没老师话","没有一句给老师的话（Teacher's note、上课步骤、话术）"],
 ["图","需要图的题有图，或写清楚了画什么、我已配好"],
 ["答案","我自己把整份做了一遍，每题都有答案，答案都对"],
 ["篇幅排版","A4一页放得下，孩子10—15分钟做得完，字够大、圈和连的地方够大"]
].map(([label, prompt], i) => ({id:"c"+(i+1), label, prompt, options:CK, noteWhen:1, notePrompt:"选「发现问题，已改」时写：哪一题、原来什么、改成什么"}));
const check = t => ({
 title:"④ 按标准核对", minutes:20, rule:"自己核对，不用AI",
 intro:["打开你的成品，按下面10条一条一条核对。发现问题就当场在飞书文档里改，改了什么写下来。","核对「不超纲」用这张词表——"+LESSON[t].allowed,LESSON[t].before,LESSON[t].notYet,"这10条就是以后每份练习单的标准。最后写清楚这份练习单周末怎么用。"],
 audio:[], listening:[], tkt:[], speaking:[], setup:[],
 checksTitle:"按10条标准逐条核对", checksHint:"别一口气全勾「没问题」。AI的第一版几乎不可能10条全对，刘老师会对着你的成品看。",
 checks:checks(t),
 writingTitle:"周末怎么用",
 writing:[
  {id:"k_use", label:"怎么用", type:"short", prompt:"这周末哪个班、哪天用；课上做哪几题、几分钟，哪些带回家", placeholder:LESSON[t].usePh},
  {id:"k_prompt_note", label:"下次指令", type:"short", prompt:"下次再用AI做练习单，你的指令要先加上哪一句？", placeholder:"例如：孩子还不会写字，所有题只要圈和连"}
 ],
 sections:["checks","writing"]
});

const packet = t => ({
 spot: {title:"① 看懂好坏", minutes:10, rule:"自己看，不用AI",
  intro:["下面是一份AI按你这一课做出来的第一版练习单，跟你等下要做的是同一种东西。","逐条判断10处：要改，还是没问题。选完会看到解析。"],
  audio:[], listening:[], setup:[], writing:[], speaking:[],
  conceptTitle:"哪里要改", conceptRule:"按「这周末能不能直接发给孩子、家长看不看得懂」来判断。", tkt:spotItems(t)},
 prompt: prompt(t),
 make: make(t),
 check: check(t)
});
export const PACKETS = {he: packet("he"), zuo: packet("zuo")};
