export const VERSION = "2026-11-24.vol8.v1.1";
export const META = {
 vol:"Vol.8", reviewer:"刘老师", prefix:"wl-vol8-v1:", db:"wonderland-vol8-v1", cache:"wonderland-vol8-cache-v1",
 format:"wonderland-teacher-vol8-response", fileTag:"温德兰_Vol.8",
 flow:"一次做完：TKT小测20 → 改自己的话20<br>→ 用AI重做一段50 → 核对并开口25 → 交卷",
 submitHint:"下载后，把答卷文件发到英语部群，最后只发一条 @月神，写「交 Vol.8：答卷 1 份」。个人反馈只私聊你本人。",
 exportNotice:"答卷保存在当前浏览器，不自动上传。四段分开计时、分开锁定；①限时20分钟，到点自动锁定；③允许并要求用AI，粘贴记录照常保留。",
 home:{
  eyebrow:"VOL.8 · 磨课课堂改造（AI 基础练习）＋ TKT 模块一",
  title:"点评老师指出来的，<br>这次自己动手改对。",
  planTitle:"一次做完，约2小时，分四段",
  cards:[
   {h:"这次练什么", ps:["① TKT 模块一小测：20道英文题，闭卷限时20分钟，考术语表一。明年计划考 TKT 模块一、模块二，从这期起每期都有小测。","② 改自己的话：8句全部是你11月24日磨课里说的原话（腾讯会议逐字稿）。","③ 用AI重做磨课里最弱的那一段，把两位点评老师的建议全部落进去。","④ 按8条标准核对，再对着孩子把改好的这一段说一遍、录下来。"]},
   {h:"开始前准备好", ps:["一台能上网、能用AI的电脑，平时用哪个AI就用哪个。Power Up Starter 学生用书带来。","①②④自己做，不看笔记、不用AI、不用翻译；只有③用AI。","磨课回放和术语表一，周四之前在坐班时间看完、背熟。"]}
  ]
 },
 guide:[
  ["2小时怎么做",["① TKT 小测20分钟：闭卷，手机收起来。时间一到自动锁定，没做完的按未答。","② 改自己的话20分钟：8句原话，先判断有没有问题，再写你上课真正要说的那一句。","③ 用AI重做一段50分钟：填好孩子和道具，页面拼成一段指令发给AI，至少改2轮；交每轮记录、AI原稿、你自己的修改和定稿。","④ 核对并开口25分钟：按8条标准逐条核对、当场改；再把定稿的前半段对着孩子说一遍，录90—150秒。"]],
  ["录音",["用电脑Chrome常规窗口打开本页，允许麦克风。录完点「停止并保存」，再试听一遍。"]],
  ["交卷",["在「交卷」里回答4个问题，看缺项，下载答卷。把文件发到英语部群，最后只发一条 @月神。网页不会自动上传。"]]
 ]
};
export const MODES = [["tkt","① TKT 模块一小测"],["fix","② 改自己的话"],["ai","③ 用AI重做一段"],["check","④ 核对并开口"]];
export const PROFILES = {
 he: {name:"何静", focus:"这次重点：孩子只说单词、句型练得太少、回答不规范、替孩子答 You're fine——两位点评老师和 Vol.7 反馈都指出过。③重做你磨课里「单词音形意＋Have you got…?」那一段。"},
 zuo: {name:"左丽慧", focus:"这次重点：用中文讲 There is／There are、问「懂了吗」、第一遍听力没任务、老师的英语偏难有错——两位点评老师都指出过。③重做你磨课里 There is／There are 那一段。"}
};
export const SESSION = {
 totalMinutes: 120,
 window: "11月26日（周四）下午在校区：14:00开始，连续约2小时，16:00前交。①闭卷限时，手机收起来；③要用AI，带能用AI的电脑和 Power Up Starter 学生用书。",
 phases: [
  {title:"① TKT 模块一小测", minutes:20, detail:"20道英文题：12道术语配对＋8道三选一，考术语表一；闭卷，到点自动锁定", evidence:"原答，自动判分"},
  {title:"② 改自己的话", minutes:20, detail:"8句你11月24日磨课里的原话：判断有没有问题，写出上课真正要说的那一句（不用AI）", evidence:"判断和改写"},
  {title:"③ 用AI重做一段", minutes:50, detail:"把磨课最弱的那一段写成10分钟环节；AI至少改2轮；交每轮记录、AI原稿、自己的修改和定稿", evidence:"过程记录和定稿"},
  {title:"④ 核对并开口", minutes:25, detail:"8条标准逐条核对；对着孩子把定稿的前半段说一遍，录90—150秒（不用AI）", evidence:"核对记录和录音"},
  {title:"交卷", minutes:5, detail:"4个问题，自查缺项，下载答卷", evidence:"答卷发英语部群并@月神"}
 ]
};
export const SOURCES = {
 tkt: "TKT 小测：按剑桥 TKT Module 1（Language and background to language learning and teaching）的题型自编，不是真题；术语都在术语表一里。情境题出自两位老师11月24日磨课的原话。",
 fix: "改错：句子摘自11月24日赛塔磨课腾讯会议的逐字稿（机器转写，只去掉了嗯、啊）。和你实际说的不一样时，在改写里注明。",
 review: "要改的地方来自两位点评老师（Clara、Alice）的点评原话和会议纪要。",
 note: "①按答案自动判；②③④和录音由刘老师人工看。不换算官方等级，不做两人排名。"
};
export const REFLECT = [
 {id:"r1", label:"有用", prompt:"这次练习哪一段对你上课最有用？具体用在哪个班、哪一步？"},
 {id:"r2", label:"贴不贴合", prompt:"这次练习贴不贴合你班上的实际（孩子年龄、进度、人数、道具、时间）？哪里不贴合，你觉得应该怎么改？"},
 {id:"r3", label:"AI", prompt:"③里AI哪一轮最有用？你是怎么让它改对的？"},
 {id:"r4", label:"TKT", prompt:"①里哪几个术语你最没把握？"}
];

// ---------- ① TKT 模块一小测 ----------
const TECH = ["A｜realia","B｜eliciting","C｜drilling","D｜concept checking question (CCQ)","E｜guided discovery","F｜TPR (Total Physical Response)","G｜recast","H｜flashcards"];
const LANG = ["A｜contraction","B｜short answer","C｜plural noun","D｜uncountable noun","E｜word stress","F｜phoneme","G｜preposition"];
const m1 = (id, prompt, answer, explanation) => ({id, type:"match", group:"t1", groupTitle:"Questions 1–7", instruction:"Match the teacher's actions with the teaching techniques A–H. There is one extra option you do not need.", options:TECH, prompt, answer, explanation, skill:"教学方法"});
const m2 = (id, prompt, answer, explanation) => ({id, type:"match", group:"t2", groupTitle:"Questions 8–12", instruction:"Match the underlined part of each sentence with the language terms A–G. There are two extra options you do not need.", options:LANG, prompt, answer, explanation, skill:"描述语言"});
const mc = (id, prompt, options, answer, explanation, skill) => ({id, type:"choice", letters:true, group:"t3", groupTitle:"Questions 13–20", instruction:"For each question, choose the correct answer A, B or C.", prompt, options, answer, explanation, skill:"情境题", topic:skill});
const TKT1 = [
 m1("q1","1. The teacher brings real fruit and a shopping bag into the classroom.",0,"A realia：真实物品当教具（真水果、购物袋）。Alice 的建议就是这个。"),
 m1("q2","2. The children say \"There are apples\" together three times after the teacher.",2,"C drilling：全班跟着老师反复说同一句。"),
 m1("q3","3. The teacher points to three apples and asks, \"One apple or more than one?\"",3,"D CCQ：用一个很简单的问题检查孩子懂没懂意思，代替 Do you understand?。"),
 m1("q4","4. The teacher puts one banana on one side and three apples on the other side, and lets the children work out when to say \"There's\" and when to say \"There are\".",4,"E guided discovery：不讲规则，让孩子自己发现规律。Clara 的建议就是这个。"),
 m1("q5","5. The teacher says \"Touch the lamp!\" and the children do the action.",5,"F TPR：听指令做动作。"),
 m1("q6","6. A child says \"Three orange.\" The teacher says \"Yes! Three oranges!\" and goes on with the game.",6,"G recast：不停下来讲错，用正确的说法自然地重说一遍。"),
 m1("q7","7. Instead of saying the word, the teacher shows half of a picture of a mirror and waits for the children to say \"mirror\".",1,"B eliciting：老师不直接说，引导孩子自己说出来。H flashcards 是多出来的选项。"),
 m2("q8","8. I've got a book.  (underlined: I've)",0,"A contraction：I've = I have 的缩写。"),
 m2("q9","9. Have you got a lamp? – Yes, I have.  (underlined: Yes, I have.)",1,"B short answer：用 Yes, I have.／No, I haven't. 简短回答，Alice 说考试要这样答才得分。"),
 m2("q10","10. There are three watermelons.  (underlined: watermelons)",2,"C plural noun：复数名词。"),
 m2("q11","11. There's a lot of rice.  (underlined: rice)",3,"D uncountable noun：不可数名词，没有 rices。"),
 m2("q12","12. KITchen – the first part of the word is said more strongly.",4,"E word stress：单词重音。F phoneme（音素）和 G preposition（介词）是多出来的选项。"),
 mc("q13","13. The teacher plays the recording for the first time. Which is the best task for 4–6 year olds?",["Listen and point to the fruit you hear.","Listen and write down every word.","Just listen. Then the teacher explains the grammar."],0,"A。第一遍听力要给一个孩子做得到的任务（listening for specific information）。Clara 点评左丽慧：首遍听力要设置具体任务。","听力任务"),
 mc("q14","14. The teacher has presented \"There are apples\". Which question best checks the meaning?",["Do you understand?","Can you say it again?","Is it one apple or more than one?"],2,"C 是 CCQ。A 孩子都会说 yes，查不出来；B 只是跟读。","CCQ"),
 mc("q15","15. Teacher: \"Have you got a mirror?\" Which answer should the teacher model for the children?",["No, I haven't.","I haven't got mirror.","No, I don't."],0,"A。用 have got 问，就用 Yes, I have.／No, I haven't. 短回答。何静磨课里孩子答 I haven't got a book，没有被纠正。","短回答"),
 mc("q16","16. Which question is best for 4–5 year olds looking at a picture of a fruit shop?",["What does have in the fruit shop?","What can you see in the fruit shop?","Please tell me all the different kinds of things you can find in this fruit shop."],1,"B。A 是错句（左丽慧磨课原话，Alice 当场指出）；C 太长。给小孩子的问句要短、要对。","老师的话"),
 mc("q17","17. Young learners aged 4–6 usually learn best when …",["the teacher explains grammar rules in Chinese.","they copy long sentences from the board.","they use the language in games with real objects."],2,"C。低龄孩子靠做、玩、摸实物学语言（learner characteristics）。","学习者特点"),
 mc("q18","18. A teacher says: \"当我们表示一个的时候，我们就要用 There's a…\" This is …",["using L1 to explain a grammar rule.","eliciting.","a concept checking question."],0,"A：用母语（L1）讲语法规则。点评老师建议原版课换成 guided discovery＋CCQ。","母语使用"),
 mc("q19","19. Children play a shopping game with bags and real fruit and say \"There are…\" by themselves. Which stage of PPP is this?",["presentation","practice","production"],2,"C production：孩子自己用。PPP = presentation（老师呈现）→ practice（跟着练）→ production（自己用）。Alice 点评时用的就是 PPP。","PPP"),
 mc("q20","20. The teacher asks the class, \"How are you today?\" What should she do next?",["Answer \"You're fine\" for them to save time.","Wait, and let the children answer \"I'm fine.\"","Ask another question straight away."],1,"B。问完要等孩子自己答。何静磨课开场替孩子答了 You're fine，Vol.7 反馈里也指出过。","等孩子开口")
];

// ---------- ② 改自己的话 ----------
const FIXOPT = ["这句没问题","这句有问题，要改"];
const fixItem = (id, context, prompt, answer, explanation) => ({id, type:"choice", group:"fix", skill:"改自己的话", fix:true, fixPrompt:"写你上课真正要说的那一句（英文；要做动作、拿道具的，用括号写在前面）。没问题写「不用改」", context, prompt, options:FIXOPT, answer, explanation});
const FIX_ZUO = [
 fixItem("z1","导入，带孩子看 fruit garden 的图","Let's guess what does have in the fruit garden?",1,"有问题，Alice 当场指出。参考：What can you see in the fruit garden?"),
 fixItem("z2","教新词，让孩子跟读（磨课里说了好几次）","Grapes, repeat me. Grapes, grapes.",1,"有问题。参考：Repeat after me: grapes! 或者更短：Say it with me: grapes!"),
 fixItem("z3","表扬全班并击掌","You are so smart! Wonderful! Give me five!",0,"语法没问题。更好的是说出孩子做对了什么：You said all the fruit words! Give me five!"),
 fixItem("z4","让孩子翻书","OK, please open your book, page turn to nine. 我们看到这29页。",1,"有问题。参考：（举起书，指着页码）Open your books at page 29. 一句英文＋举书，不用再说中文。"),
 fixItem("z5","指着桌上的一根香蕉","How many banana? Yes, just one.",1,"有问题。How many 后面用复数。参考：How many bananas? Yes, just one!"),
 fixItem("z6","讲 There is／There are（看做法）","当我们表示一个的时候，我们就要用 there's a……懂了吗？Can you understand?",1,"做法有问题：用中文讲规则、再问懂了吗。参考：（指着一根香蕉）One or more than one? — One! — So… There's a banana.（指着三个苹果）One or more than one? — More! — There are apples."),
 fixItem("z7","请孩子用三个西瓜说句子","If I have three watermelon in this table, we should say…",1,"有问题：watermelons，on the table；而且又在讲规则。参考：（摆出三个西瓜）Look! There are…?（停下来，等孩子说 three watermelons）"),
 fixItem("z8","下课前总结","OK, and we have learned there's a blah blah and there are blah blah. Do you know?",1,"有问题：blah blah 等于没总结，Do you know 查不出来。参考：Let's say it together! There's a banana. There are three apples. Great job!")
];
const FIX_HE = [
 fixItem("h1","开场问候","How are you today? You're fine. I'm so happy today.",1,"做法有问题：替孩子答了 You're fine（Vol.7 也出现过）。参考：How are you today?（停下来，等孩子答 I'm fine, thank you.）I'm happy too!"),
 fixItem("h2","看图问是谁的房间","Is this room is Matt's room or Jenny's room?",1,"有问题：多了一个 is。参考：Is this Matt's room or Jenny's room?"),
 fixItem("h3","看图问图里有谁","Now look at this picture. Who can you see in this picture?",0,"没问题。"),
 fixItem("h4","问他们住在哪","Do they live in Cafe?",1,"有问题：要说 in a café。你后面用的选择问句更好：Do they live at school or at home?"),
 fixItem("h5","介绍厨房","This room we can kitchen.",1,"有问题。参考：This is the kitchen. We cook in the kitchen."),
 fixItem("h6","数字游戏的指令","This time we will I say the number one two three four five I say the number and you say the words OK.",1,"有问题：太长、语序乱。参考：I say a number, you say the word. Ready? Number one!"),
 fixItem("h7","讲 I've got（看做法）","我们想表达我们有某样东西的时候，我们就可以用 I've got 某样东西。",1,"做法有问题：用中文讲规则。参考：（举起书）I've got a book!（两手空空）I haven't got a book. 再问 CCQ：Have I got a book? Yes or no?"),
 fixItem("h8","你问 Have you got a book?，孩子答 I have got a book.，你说","Book. OK, very good.",1,"做法有问题：没纠正回答方式（Alice 点评）。参考：Yes, I have! Say it: Yes, I have.（等孩子说完再表扬）")
];

// ---------- ③ 用AI重做一段 ----------
const SEG = {
 zuo: {
  name:"There is／There are 从呈现到操练（10分钟）",
  classLine:"Power Up Starter-B班，4—5岁，3个孩子，会说6种颜色和数字 one—six，还不会认字写字。",
  lesson:"剑桥 Power Up 第二版 Starter（Power Up 0）Unit 3 Food shopping，学生用书第28—31页。单词：apple, banana, grapes, orange, watermelon；burger, egg, carrot, rice, beans。句型：There's a/an … / There are … / How many … are there?",
  review:"1. 不要用中文讲语法、不要问 Do you understand：摆出实物，让孩子自己把「一个」和「很多」分开，再用简单问题检查（例如 One or more than one?）。\n2. 第一遍听力要给任务：例如听到哪个水果就指哪个。\n3. 做成购物情境：发购物袋，「我们去 shopping」，用真水果，让孩子摸一摸、闻一闻。\n4. 老师的话要短、要对：用 What can you see?、What do you like?，不用 What does have…?。\n5. 每换一个活动，先说一句过渡语。",
  propsPh:"例如：真苹果3个、香蕉1根、橙子2个、购物袋3个、课本第30页音频"
 },
 he: {
  name:"单词音形意＋Have you got…? 操练（10分钟）",
  classLine:"L1-F班，三四年级，学过自然拼读，会用 This is…、It's… 介绍，会做简单的自我介绍。",
  lesson:"剑桥 Power Up 第二版 Starter（Power Up 0）Unit 4 At home，学生用书第40—43页。单词：bathroom, bedroom, kitchen, living room, garden；bed, clock, computer, lamp, mirror。句型：Have you got a …? — Yes, I have. / No, I haven't. ；I've got … / I haven't got …",
  review:"1. 孩子回答要说整句，例如 I see a lot of books.，不只说单词。\n2. 单词的音、形、意都要练：加一个不用PPT的词图配对；bathroom 和 bedroom 遮住单词让孩子拼读、听辨。\n3. 句型练习量要够：把实物发给每个孩子，轮流问 Have you got a mirror?。\n4. 回答要规范：Yes, I have.／No, I haven't.，不说 I haven't got a book 了事。\n5. 不用中文讲 I've got；问完要等孩子自己答，不替孩子说。",
  propsPh:"例如：小镜子、闹钟、台灯图片、单词卡10张、图片卡10张、袋子1个"
 }
};
const STANDARDS = ["不用中文讲规则","有检查问题（CCQ）","每个孩子至少说2次整句","老师每句不超过8个词","有实物或PPT以外的活动","听力有任务（这段没有听力就写不涉及）","活动之间有过渡语","每一步写了几分钟"];
const RULES = "【要求】\n1. 写成10分钟的上课环节，按步骤写，每一步写清楚：几分钟、老师说什么（英文原话）、孩子说什么（英文原话）、用什么道具。\n2. 全程不用中文讲语法规则；用实物、动作、图片让孩子自己发现，再用简单的检查问题（CCQ）确认孩子懂了，不要问 Do you understand?。\n3. 老师说的每一句不超过8个英文单词，只用孩子学过的词。\n4. 每个孩子至少说2次完整的句子。\n5. 至少一个活动不用PPT，用实物或卡片。\n6. 每换一个活动，写一句英文过渡语。\n7. 只用上面列出的单词和句型，不加新词。\n8. 不要写教学理论，不要写「待补」。不知道的先问我，不要自己编。";
const ai = t => ({
 title:"③ 用AI重做一段", minutes:50, rule:"这一段要用AI",
 intro:["要重做的是：你磨课里最弱的那一段——"+SEG[t].name+"。两位点评老师的建议已经写进指令了。","先填下面3项，页面会拼成一整段指令。把它整段发给你用的AI。","AI给的第一版一定有问题。对照最下面「8条标准」挑毛病，至少改2轮：每轮直接告诉AI哪一条没做到、要改成什么。","最后一版AI原稿整段粘贴下来，一个字都别改；再自己动手改，改了什么一条一行写清楚；最后写定稿。"],
 audio:[], listening:[], tkt:[], speaking:[],
 setupTitle:"先填我的孩子和道具", setupHint:"写真实的。下面的「例如」是参考，别照抄。",
 setup:[
  {id:"a_kids", label:"孩子", type:"short", prompt:"班上孩子的真实情况：几个人、谁最敢说、谁最容易卡、常错在哪", placeholder:"例如：3个孩子，Mia 最敢说；Leo 只说单词；常把 There's 和 There are 混着说"},
  {id:"a_props", label:"道具", type:"short", prompt:"你手边能真用上的道具（周末上课真能拿到的）", placeholder:SEG[t].propsPh},
  {id:"a_minutes", label:"时间安排", type:"short", prompt:"这10分钟大概怎么分（例如：呈现3分钟、练习4分钟、自己用3分钟）"}
 ],
 compose:{title:"拼好的指令（整段发给AI，作为第1轮）", hint:"上面每改一个字，这里跟着变。还显示「还没填」的地方，回去补完。",
  template:"你是少儿英语老师的助手。请帮我重新设计一段课堂环节："+SEG[t].name+"。\n\n【班级和学生】"+SEG[t].classLine+"{{a_kids}}\n【教材和进度】"+SEG[t].lesson+"\n【我手边的道具】{{a_props}}\n【时间】一共10分钟：{{a_minutes}}\n【两位磨课点评老师指出、这次必须改掉的问题】\n"+SEG[t].review+"\n\n"+RULES},
 writingTitle:"过程记录", writingHint:"这一段允许、也要求粘贴。第3轮可以不填。",
 writing:[
  {id:"m_tool", label:"用的AI", type:"short", prompt:"这次用的是哪个AI", group:"r0", groupTitle:"用的工具"},
  {id:"m_r1_bad", label:"第1版问题", type:"multi", prompt:"AI第1版没做到8条标准里的哪几条（至少选1条）", options:STANDARDS, group:"r1", groupTitle:"第1轮（发的就是上面拼好的指令）"},
  {id:"m_r1_note", label:"第1版问题说明", type:"short", prompt:"具体哪一句、哪一步不行（中文一两句）", group:"r1"},
  {id:"m_r2", label:"第2轮发的", type:"long", rows:3, prompt:"第2轮：你发给AI的话（直接说哪一条没做到、要改成什么）", group:"r2", groupTitle:"第2轮"},
  {id:"m_r2_bad", label:"第2轮问题", type:"short", prompt:"AI第2版还有哪里不行（没有了就写「可以用了」）", group:"r2"},
  {id:"m_r3", label:"第3轮发的", type:"long", rows:3, prompt:"第3轮（可不填）：你发给AI的话", group:"r3", groupTitle:"第3轮（可不填）", optional:true},
  {id:"m_r3_bad", label:"第3轮问题", type:"short", prompt:"AI第3版还有哪里不行", group:"r3", optional:true},
  {id:"m_final_ai", label:"AI原稿", type:"long", rows:10, max:20000, prompt:"AI最后一版原稿（整段粘贴，一个字都别改）", group:"fin", groupTitle:"AI原稿、我的修改、定稿"},
  {id:"m_changes", label:"我改了什么", type:"long", rows:4, prompt:"我自己动手改了哪些地方（一条一行，至少3条，写清第几步、从什么改成什么）", group:"fin", placeholder:"例如：第2步 AI 写 Do you know? → 改成 One or more than one?"},
  {id:"m_final", label:"定稿", type:"long", rows:12, max:20000, prompt:"定稿：周末真要用的版本。每一步写：几分钟｜老师说（英文）｜孩子说（英文）｜道具", group:"fin"}
 ],
 sections:["setup","compose","writing"]
});

// ---------- ④ 核对并开口 ----------
const CK = ["核对过，做到了","没做到，已改定稿"];
const checks = () => [
 ["不讲中文规则","定稿里没有一句用中文讲语法规则"],
 ["检查问题","有至少2个检查问题（CCQ），没有 Do you understand?／Do you know?"],
 ["孩子整句","每个孩子至少说2次完整的句子，写了说哪一句"],
 ["老师的话短","老师每句不超过8个英文单词，我一句句数过"],
 ["老师的话对","老师的英文我一句句读过：没有 Repeat me、What does have 这类错"],
 ["PPT以外","至少一个活动用实物或卡片，不靠PPT"],
 ["过渡语","每换一个活动都有一句英文过渡语"],
 ["时间","每一步写了几分钟，加起来是10分钟"]
].map(([label, prompt], i) => ({id:"c"+(i+1), label, prompt, options:CK, noteWhen:1, notePrompt:"选「没做到，已改定稿」时写：哪一步、原来什么、改成什么"}));
const check = t => ({
 title:"④ 核对并开口", minutes:25, rule:"自己核对，不用AI",
 intro:["打开③的定稿，按下面8条一条一条核对。没做到的回③看原稿，在下面写清楚改了什么（③已锁定，改动写在这里）。","核对完，把定稿的前半段（大约前5分钟）对着孩子说一遍，录90—150秒。孩子的回答你自己演，一句带过。","说的时候特别注意：用改好的话，不用中文讲规则，问完要等。"],
 audio:[], listening:[], tkt:[], setup:[],
 checksTitle:"按8条标准逐条核对", checksHint:"别一口气全勾「做到了」。刘老师会对着你的定稿和录音看。",
 checks:checks(),
 speakTitle:"对着孩子说一遍", speakHint:"直接对孩子说，不讲教学理论。可以看一眼定稿的步骤，不要照着念。",
 speaking:[{id:"k_s1", label:"开口录音", title:"K-S1｜定稿前半段 · 90—150秒", minSec:90, maxSec:150,
  prompt:"按定稿的步骤说：先过渡语，再呈现，再问检查问题，再叫孩子一个个说整句。",
  hint:"不到90秒算没完成；最长150秒，到时自动保存。",
  criteria:["用的是②改好的说法，没有原来的错句","没有用中文讲规则","有检查问题，没有 Do you understand","问完等孩子答，没有替孩子说","孩子说的是整句","老师每句都短"]}],
 writingTitle:"再说一句",
 writing:[
  {id:"k_next", label:"下次先改", type:"short", prompt:"这次录完，你觉得自己上课最该先改掉的一句话是哪句？改成什么？"}
 ],
 sections:["checks","speak","writing"]
});

const number = (list, k) => list.map((q, i) => ({...q, label: k + (i + 1)}));
const BASE = t => ({
 tkt: {title:"① TKT 模块一小测", minutes:20, limitSeconds:1200, rule:"闭卷，不用AI、不用翻译，手机收起来",
  intro:["20道题，全部是英文，题型照 TKT 模块一：1—7题配对教学方法，8—12题配对语言术语，13—20题三选一。","考的都是术语表一里的词；情境题出自你们11月24日的磨课。","点「开始并计时」后限时20分钟，到点自动锁定，没做完的按未答。锁定后会显示答案和中文解析。"],
  audio:[], listening:[], setup:[], writing:[], speaking:[],
  conceptTitle:"TKT Module 1 practice", conceptRule:"Read each question carefully. Choose one answer for each question.", tkt:TKT1.map(q=>({...q, label:"Q"+q.id.slice(1)}))},
 fix: {title:"② 改自己的话", minutes:20, rule:"不看笔记，不用AI、不用翻译",
  intro:["下面8句，全部是你11月24日磨课里说的原话，从腾讯会议逐字稿里摘出来（机器转写，和你实际说的不一样时，在改写里注明）。","有的有问题，有的没问题；有两句看的是做法，题目里写了「看做法」。","每句先判断，再写你上课真正要说的那一句；要配动作、道具的，用括号写在前面。没问题写「不用改」。"],
  audio:[], listening:[], setup:[], writing:[], speaking:[],
  conceptTitle:"判断并改写", conceptRule:"改写要写完整的一句，像你明天上课要说的那样，越短越好。", tkt:number(t==="zuo"?FIX_ZUO:FIX_HE, "句")},
 ai: ai(t),
 check: check(t)
});
export const PACKETS = {he: BASE("he"), zuo: BASE("zuo")};
