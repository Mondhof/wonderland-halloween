export const VERSION = "2026-11-24.vol9.v2";
export const META = {
 vol:"Vol.9", reviewer:"刘老师", prefix:"wl-vol9-v1:", db:"wonderland-vol9-v1", cache:"wonderland-vol9-cache-v1",
 format:"wonderland-teacher-vol9-response", fileTag:"温德兰_Vol.9",
 flow:"一次做完：TKT小测20 → 上周课复盘35<br>→ 定本周内容20 → 用AI备本周一段课60 → 交卷",
 submitHint:"下载后，把答卷文件发到英语部群，最后只发一条 @月神，写「交 Vol.9：答卷 1 份」。个人反馈只私聊你本人。16:30—18:00 写教案：④的定稿写进本周那一节、各班往后两周按实际进度改好、补填11月14—22日的课后复盘。",
 exportNotice:"答卷保存在当前浏览器，不自动上传。四段分开计时、分开锁定；①限时20分钟，到点自动锁定；④允许并要求用AI，粘贴记录照常保留。",
 home:{
  eyebrow:"VOL.9 · 上周课复盘 → 本周课 ＋ TKT 模块二",
  title:"先看清上周哪里没做好，<br>再把它改进这周的课里。",
  planTitle:"一次做完，约2小时25分钟，分四段",
  cards:[
   {h:"这次练什么", ps:["① TKT 模块二小测：20道英文题，闭卷限时20分钟，考术语表二（备课、教学目标、教具教材）。","② 上周课复盘：你上周带的每个班，按4个问题写具体——哪个孩子、哪一句、哪个环节。","③ 定本周内容：每个班这周上第几页、哪几个词、哪个句型，选一条磨课建议这周用上。","④ 用AI备本周一段课：把上周最想重来的问题和磨课建议放进本周的目标句型环节，周末一定用上。"]},
   {h:"开始前准备好", ps:["一台能上网、能用AI的电脑；Power Up Starter 学生用书；打开你上周各班的教案。","①②③自己做，不看笔记、不用AI；只有④用AI。","做完交卷后，16:30—18:00 写教案：④的定稿写进本周那一节；各班往后两周按实际进度改好；补填11月14—22日的课后复盘。周末上完课，在「课后复盘」写效果。"]}
  ]
 },
 guide:[
  ["怎么做",["① TKT 小测20分钟：闭卷，手机收起来，时间一到自动锁定。","② 上周课复盘25分钟：每个班4个问题，写具体的孩子和句子；最后对照磨课建议，选出上周课里也出现的问题。","③ 定本周内容15分钟：对着课本和教案填。","④ 用AI备本周一段课60分钟：从②③挑一个班，页面拼成指令发给AI，至少改2轮；交每轮记录、AI原稿、自己的修改和定稿，再按8条标准核对。"]],
  ["复盘怎么写才算数",["写事实：哪个孩子、说了哪一句、卡在哪一步。","不写「还行」「有点紧张」「孩子不配合」这类话。","写原因：是备课时没想到、知道但不会做、上课时忘了，还是时间不够。"]],
  ["交卷",["在「交卷」里回答4个问题，看缺项，下载答卷。把文件发到英语部群，最后只发一条 @月神。网页不会自动上传。"]]
 ]
};
export const MODES = [["tkt","① TKT 模块二小测"],["review","② 上周课复盘"],["plan","③ 定本周内容"],["ai","④ 用AI备本周一段课"]];
export const PROFILES = {
 he: {name:"何静", focus:"这次复盘 Starter-E、L1-F 两个班。磨课和 Vol.7 里反复出现的：孩子只说单词、句型练得少、回答不规范、替孩子说。④备的那一段，周五晚上 L1-F 就可以用。"},
 zuo: {name:"左丽慧", focus:"这次复盘 Starter-B、Starter-C、L1-A 三个班。磨课里反复出现的：用中文讲规则、问懂了吗、第一遍听力没任务、老师的话偏难。④备的那一段，这周末一定用上。"}
};
export const SESSION = {
 totalMinutes: 145,
 window: "11月27日（周五）下午在校区：14:00开始，约2小时25分钟，16:30前交；16:30—18:00写教案：④的定稿写进本周那一节、各班往后两周按实际进度改好、补填11月14—22日的课后复盘。①闭卷限时，手机收起来；④要用AI，带能用AI的电脑、学生用书，打开各班教案。",
 phases: [
  {title:"① TKT 模块二小测", minutes:20, detail:"20道英文题：12道配对＋8道三选一，考术语表二；闭卷，到点自动锁定", evidence:"原答，自动判分"},
  {title:"② 上周课复盘", minutes:35, detail:"上周每个班4个问题，对照磨课建议，再逐条复盘刘老师核对班级群发现的5个问题（不用AI）", evidence:"复盘记录"},
  {title:"③ 定本周内容", minutes:20, detail:"每个班这周的页码、单词、目标句型、用上哪条磨课建议、往后两周上到哪（不用AI）", evidence:"本周计划"},
  {title:"④ 用AI备本周一段课", minutes:60, detail:"把上周的问题和磨课建议放进本周目标句型环节；AI至少改2轮；交记录、原稿、修改、定稿，按8条标准核对", evidence:"过程记录、定稿和核对"},
  {title:"交卷", minutes:10, detail:"4个问题，自查缺项，下载答卷", evidence:"答卷发英语部群并@月神"}
 ]
};
export const SOURCES = {
 tkt: "TKT 小测：按剑桥 TKT Module 2（Lesson planning and use of resources for language teaching）的题型自编，不是真题；术语都在术语表二里。情境题出自两位老师自己的课。",
 review: "磨课建议来自11月24日赛塔磨课两位点评老师（Clara、Alice）的点评原话和会议纪要。",
 note: "①按答案自动判；②③④由刘老师人工看。不换算官方等级，不做两人排名。"
};
export const REFLECT = [
 {id:"r1", label:"有用", prompt:"这次练习哪一段对你这周上课最有用？具体用在哪个班、哪一步？"},
 {id:"r2", label:"贴不贴合", prompt:"这次练习贴不贴合你班上的实际（孩子年龄、进度、人数、道具、时间）？哪里不贴合，你觉得应该怎么改？"},
 {id:"r3", label:"最担心", prompt:"这周你最担心哪个班、哪一步？希望刘老师帮你看哪里？"},
 {id:"r4", label:"TKT", prompt:"①里哪几个术语你最没把握？"}
];

// ---------- ① TKT 模块二小测 ----------
const PLAN = ["A｜main aim","B｜subsidiary aim","C｜personal aim","D｜anticipated problem","E｜solution","F｜interaction pattern","G｜timing","H｜procedure"];
const RES = ["A｜realia","B｜flashcards","C｜worksheet","D｜audio script","E｜teacher's book","F｜supplementary materials","G｜board"];
const m1 = (id, prompt, answer, explanation) => ({id, type:"match", group:"t1", groupTitle:"Questions 1–7", instruction:"Read the notes from a teacher's lesson plan. Match each note with the lesson plan heading A–H. There is one extra option you do not need.", options:PLAN, prompt, answer, explanation, skill:"教案组成"});
const m2 = (id, prompt, answer, explanation) => ({id, type:"match", group:"t2", groupTitle:"Questions 8–12", instruction:"Match each description with the teaching resource A–G. There are two extra options you do not need.", options:RES, prompt, answer, explanation, skill:"教具教材"});
const mc = (id, prompt, options, answer, explanation, skill) => ({id, type:"choice", letters:true, group:"t3", groupTitle:"Questions 13–20", instruction:"For each question, choose the correct answer A, B or C.", prompt, options, answer, explanation, skill:"情境题", topic:skill});
const TKT2 = [
 m1("q1","1. By the end of the lesson, the children will be able to ask and answer \"Have you got a …?\" about things in a house.",0,"A main aim：这节课最主要要孩子做到的事，写成「孩子能……」。"),
 m1("q2","2. The children will also revise colour words.",1,"B subsidiary aim：附带的次要目标。"),
 m1("q3","3. I will stop answering for the children. I will wait three seconds after each question.",2,"C personal aim：老师自己这节课要改进的地方。"),
 m1("q4","4. The children may answer with one word only, for example \"Lamp.\"",3,"D anticipated problem：课前预计孩子会出的问题。"),
 m1("q5","5. Give the start of the answer, \"Yes, I…\", and wait for the child to finish.",4,"E solution：针对预计问题的解决办法。"),
 m1("q6","6. Teacher → whole class, then children in pairs.",5,"F interaction pattern：谁和谁说（T–S、S–S、pair work）。"),
 m1("q7","7. Shopping game: 8 minutes.",6,"G timing：每一步用几分钟。H procedure（具体步骤）是多出来的选项。"),
 m2("q8","8. The teacher reads exactly what the speakers say in the recording to check a word.",3,"D audio script：录音原文。"),
 m2("q9","9. The teacher looks at the suggested lesson steps and the answer key for Unit 4.",4,"E teacher's book：教师用书。"),
 m2("q10","10. A real mirror, a clock and a lamp from the school office.",0,"A realia：真实物品。"),
 m2("q11","11. Picture cards that the teacher holds up one by one to teach new words.",1,"B flashcards：闪卡。"),
 m2("q12","12. An extra song video that is not part of the Power Up course.",5,"F supplementary materials：课本以外的补充材料。C worksheet、G board 是多出来的选项。"),
 mc("q13","13. Which is the best main aim for a lesson on Unit 3 Food shopping?",["To teach Unit 3.","To play the shopping game.","The children can say \"There's a…\" and \"There are…\" about food on a table."],2,"C。main aim 写孩子最后能做到什么，要具体到句型；A 太笼统，B 只是一个活动。","教学目标"),
 mc("q14","14. Which order of lesson stages is best?",["practice → presentation → lead-in","lead-in → presentation → practice → production","production → practice → presentation"],1,"B。先导入，再呈现，再跟着练，最后自己用（PPP）。","环节顺序"),
 mc("q15","15. A teacher has five minutes left at the end of the lesson. What is the best use of the time?",["More practice of \"Have you got…?\" with real objects, so every child answers.","Finish the lesson early.","Start the new words of the next unit."],0,"A。Alice 点评何静：最后5分钟没用上，句型练习量不够。","时间安排"),
 mc("q16","16. Children often answer \"Have you got a lamp?\" with \"Lamp.\" What should the teacher write in the lesson plan?",["Anticipated problem: one-word answers. Solution: model \"Yes, I have.\" and give the start of the answer.","Anticipated problem: the lamp may be broken.","Nothing. One-word answers are fine."],0,"A。把孩子常出的问题和解决办法提前写进教案。","预计问题"),
 mc("q17","17. Which activity is best for 4–5 year olds learning \"There's\" and \"There are\"?",["A long explanation of the grammar rule in Chinese.","Copying ten sentences from the board.","Sorting real fruit into \"one\" and \"more than one\", then saying the sentences."],2,"C。用实物、让孩子自己分（guided discovery）。Clara 点评左丽慧的建议。","选活动"),
 mc("q18","18. The last lesson taught words for rooms. What should the next lesson start with?",["A warmer that revises last lesson's words.","A written test with thirty questions.","New words from Unit 6."],0,"A。一组连续的课（sequence of lessons），下节课先用 warmer 复习上节课。","连续的课"),
 mc("q19","19. The coursebook has only one short activity for \"Have you got…?\". What can the teacher do?",["Skip the sentence.","Add a supplementary activity, for example a bag of real objects.","Explain the sentence in Chinese for longer."],1,"B。课本不够就补充材料和活动。Clara 建议：把实物发给每个孩子轮流问。","补充材料"),
 mc("q20","20. How can the teacher check during the lesson that every child can use the target sentence?",["Ask the class, \"Do you understand?\"","Give a written test at the end of the term.","Listen to each child say it in the game and tick a class list."],2,"C informal assessment：课堂上边玩边听每个孩子说、打勾记录。A 查不出来；B 太晚。","课堂评估")
];

// ---------- 每位老师的班 ----------
const CLASSES = {
 zuo: [
  {k:"b", name:"Starter-B", last:"11月21日（周六）19:30、11月22日（周日）15:00", now:"11月28日（周六）19:30、11月29日（周日）15:00", pg:"现在在第3单元开头（第28页起）"},
  {k:"c", name:"Starter-C", last:"11月19日（周四）19:30、11月21日（周六）15:00", now:"11月26日（周四）19:30、11月28日（周六）15:00", pg:"现在在第3单元收尾"},
  {k:"a", name:"L1-A", last:"11月21日（周六）、11月22日（周日）16:40", now:"11月28日（周六）、11月29日（周日）16:40", pg:"用 Starter 课本，现在在第7单元（第72页起），不是 Power Up 1"}
 ],
 he: [
  {k:"e", name:"Starter-E", last:"11月21日（周六）、11月22日（周日）10:40", now:"11月28日（周六）、11月29日（周日）10:40", pg:"已经上到第44页故事，从第44页往后定"},
  {k:"f", name:"L1-F", last:"11月20日（周五）19:30、11月21日（周六）15:00", now:"11月27日（周五）19:30、11月28日（周六）15:00", pg:"已经上到第44页故事，从第44页往后定"}
 ]
};
const SUGG = ["用中文讲语法规则、问「懂了吗」","第一遍听力没给任务","没有实物和情境，孩子一直坐着看屏幕","老师的英语偏难或有错","孩子只说单词，不说整句","句型练得太少，时间没用满","只跟着PPT走，没有PPT以外的活动","换活动时没有过渡语","替孩子回答，没等孩子自己说","回答不规范（没用 Yes, I have.／No, I haven't. 这类短回答）"];
const USE = ["摆实物让孩子自己分、用检查问题代替「懂了吗」","第一遍听力给一个指一指、圈一圈的任务","做成情境（购物、找东西），用真实物","老师的话压短，只用学过的词","每个孩子都用整句说","把实物发给每个孩子，轮流问答，练满时间","加一个不用PPT的活动（词图配对、卡片游戏）","每换一个活动先说一句过渡语","问完等3秒，不替孩子说","要求规范短回答 Yes, I have.／No, I haven't."];

const FIND = {
 zuo: [
  ["教案对不上","B、C 两班比教案慢约4周；L1-A 11月起的教案按 Power Up 1 写，一节都对不上（期末汇报课也是）；你3个班的课后复盘一节没填。"],
  ["进度报错","11月18日你报 B、C 都在第28—31页，B 班 11月21日才开始第3单元。"],
  ["只说单词","视频里孩子基本只说单词；B 班11月21日用中文问「香蕉怎么说」；L1-A 白板写中文「你能…吗？」；第3单元的 There's／There are 视频里没出现；C 班「Grapes is green」没纠正。"],
  ["反馈模板","课后反馈每次写「开启了全新的单元」，表扬几乎一字不差，没点到一个孩子；L1-A 有几次照抄教案。"],
  ["作业没人交","作业11月14日才开始，以抄字母为主，有一次没写抄哪几个；群里没有家长交作业，也没检查；B 班家长说孩子握笔不好，没回复。"]
 ],
 he: [
  ["教案对不上","E、F 两班比教案快，11月21—22日已上到第44页故事，教案下周写的 Have you got…? 已经上过；课后复盘一节没填；孩子年龄教案写「5—7岁」「9—11岁、10人」，磨课说三四年级，对不上。"],
  ["故事课说中文","故事课（F 班11月21日、E 班11月22日）孩子全用中文复述，你用中文替孩子说答案、讲「做人不能太贪心」；反馈却写「复述出英文的故事」。"],
  ["回答不规范","F 班孩子互相问 Have you got…? 很好，但回答说成 Yes, I have a pencil、I got a book 都没纠正，白板示范写的是 Yes, I have got…；E 班只问出了 Yes，没有 No，没有孩子互相问。"],
  ["反馈抄同一篇","F、E 两班用同一篇课后反馈（连 bootcase 的错字都一样），没点到一个孩子；写的「孩子能主动提问」视频里看不到。"],
  ["作业没检查","E 班群里没有家长交作业，布置后也没在群里检查；F 班交了作业的孩子没有点评。"]
 ]
};
const findFields = t => FIND[t].map(([label, text], i) => ({id:"fd"+(i+1), label:"问题"+(i+1)+label, type:"long", rows:2, context:"问题"+(i+1)+"："+text, prompt:"为什么会这样？这周末怎么改？（写具体：哪个班、哪一步、改成什么）", group:"fd", groupTitle:"刘老师 11月24日核对班级群和教案，发现这 5 个问题：逐条复盘"}));
const reviewFields = t => CLASSES[t].flatMap(c => [
 {id:"rv_"+c.k+"_t", label:c.name+"目标", type:"short", prompt:"这个班上周的目标句型（英文，照教案写）", group:"rv_"+c.k, groupTitle:c.name+"｜上周 "+c.last, placeholder:"例如：There are three apples."},
 {id:"rv_"+c.k+"_said", label:c.name+"说出来没", type:"long", rows:2, prompt:"孩子最后说出来了吗？写哪个孩子说了哪一句；没说出来的，写卡在哪一步", group:"rv_"+c.k, placeholder:"例如：Mia 自己说了 There are three apples.；Leo 只说 apples，要我给开头 There are… 才接上"},
 {id:"rv_"+c.k+"_best", label:c.name+"最满意", type:"short", prompt:"最满意的一个环节：做了什么，为什么有效", group:"rv_"+c.k},
 {id:"rv_"+c.k+"_redo", label:c.name+"最想重来", type:"long", rows:2, prompt:"最想重来的一个环节：当时发生了什么（谁、哪句话）、你觉得为什么", group:"rv_"+c.k}
]);
const review = t => ({
 title:"② 上周课复盘", minutes:35, rule:"自己写，不看笔记、不用AI",
 intro:["上周你带的每个班，按4个问题写：目标是什么、孩子最后说出来没有、最满意的一个环节、最想重来的一个环节。","要写事实：哪个孩子、说了哪一句、卡在哪一步。不写「还行」「有点紧张」「孩子不配合」这类话。","再对照磨课里两位点评老师指出的问题，选出你上周的课里也出现了的，写原因。","最后是刘老师核对班级群和教案发现的 5 个问题，逐条写：为什么会这样、这周末怎么改。"],
 audio:[], listening:[], tkt:[], speaking:[], setup:[],
 writingTitle:"上周每个班", writingHint:"开头写不出来，先打开那节课的教案看一眼目标和流程。",
 writing:[...reviewFields(t),
  {id:"rv_same", label:"同样的问题", type:"multi", prompt:"磨课点评指出的问题里，哪几条在你上周的课里也出现了（老实选，至少选1条）", options:SUGG, group:"rv_all", groupTitle:"对照磨课"},
  {id:"rv_cause", label:"原因", type:"choice", prompt:"上面这些问题，最主要的原因是", options:["备课时没想到","知道该怎么做，但不会做","备课时想到了，上课时忘了","时间不够"], group:"rv_all"},
  {id:"rv_cause_note", label:"原因说明", type:"short", prompt:"具体说一句：是哪个问题、为什么", group:"rv_all"},
  ...findFields(t)
 ],
 checksTitle:"教案里的课后复盘", checksHint:"每节课上完都要在本班教案「课后复盘」写效果。",
 checks:[{id:"rv_doc", label:"课后复盘", prompt:"上周各班的「课后复盘」我都写进教案了", options:["都写了","有没写的"], noteWhen:1, notePrompt:"哪个班、哪天的没写？今天18:00前补上"}],
 sections:["writing","checks"]
});

const planFields = t => CLASSES[t].flatMap(c => [
 {id:"pl_"+c.k+"_pg", label:c.name+"页码", type:"short", prompt:"这周上 Starter 课本第几页（"+c.pg+"）", group:"pl_"+c.k, groupTitle:c.name+"｜本周 "+c.now, placeholder:"例如：Starter 第32—35页"},
 {id:"pl_"+c.k+"_w", label:c.name+"单词", type:"short", prompt:"这周的单词（英文，对着课本抄）", group:"pl_"+c.k},
 {id:"pl_"+c.k+"_s", label:c.name+"句型", type:"short", prompt:"这周的目标句型（英文）", group:"pl_"+c.k},
 {id:"pl_"+c.k+"_use", label:c.name+"用哪条", type:"choice", prompt:"这周这个班用上哪一条磨课建议", options:USE, group:"pl_"+c.k},
 {id:"pl_"+c.k+"_next", label:c.name+"往后两周", type:"short", prompt:"往后两周（到12月6日）这个班大概上到哪：单元、页码", group:"pl_"+c.k}
]);
const plan = t => ({
 title:"③ 定本周内容", minutes:20, rule:"自己填，不用AI",
 intro:["对着课本和教案，填每个班这周上什么。两个班进度一样的，第二个班也要填，可以写「同上」。","每个班选一条磨课建议这周用上，最好是你在②里选的「上周也出现了」的那条。"],
 audio:[], listening:[], tkt:[], speaking:[], setup:[],
 writingTitle:"本周每个班", writingHint:"页码以课本为准（Starter 课本，L1 班也用 Starter）。",
 writing:planFields(t),
 sections:["writing"]
});

// ---------- ④ 用AI备本周一段课 ----------
const STANDARDS = ["不用中文讲规则","有检查问题（CCQ）","每个孩子至少说2次整句","老师每句不超过8个词","有实物或PPT以外的活动","听力有任务（这段没有听力就写不涉及）","活动之间有过渡语","每一步写了几分钟"];
const RULES = "【要求】\n1. 写成10分钟的上课环节，按步骤写，每一步写清楚：几分钟、老师说什么（英文原话）、孩子说什么（英文原话）、用什么道具。\n2. 全程不用中文讲语法规则；用实物、动作、图片让孩子自己发现，再用简单的检查问题（CCQ）确认孩子懂了，不要问 Do you understand?。\n3. 老师说的每一句不超过8个英文单词，只用孩子学过的词。\n4. 每个孩子至少说2次完整的句子；回答用规范的短回答。\n5. 至少一个活动不用PPT，用实物或卡片。\n6. 每换一个活动，写一句英文过渡语。\n7. 只用上面列出的单词和句型，不加新词。\n8. 不要写教学理论，不要写「待补」。不知道的先问我，不要自己编。";
const CK = ["核对过，做到了","没做到，已改定稿"];
const ai = t => ({
 title:"④ 用AI备本周一段课", minutes:60, rule:"这一段要用AI",
 intro:["从②③里挑一个班（最好是上周问题最大的那个班），备这周目标句型那一段，10分钟。"+(t==="zuo"?"选 L1-A 就做 What are you doing? — I'm …ing（接着你 Vol.7 的句型），用动作和检查问题，不写中文。":"这周最该备的是故事课：用英语关键句加表演（He's got a big house. / I've got a lamp!），代替中文复述和讲道理。E 班、F 班孩子不一样大，选哪个班就按哪个班的孩子写。"),"先填下面6项（可以从②③复制），页面会拼成一整段指令，整段发给你用的AI。","至少改2轮：每轮对照最下面「8条标准」告诉AI哪一条没做到、要改成什么。最后贴AI原稿、写自己的修改和定稿，再逐条核对。","定稿这周末一定用上。交卷后16:30—18:00写进本班教案那一节；上完课在「课后复盘」写效果。"],
 audio:[], listening:[], tkt:[], speaking:[],
 setupTitle:"先填这节课", setupHint:"可以从②③复制过来，写真实的。",
 setup:[
  {id:"b_class", label:"班级", type:"short", prompt:"哪个班、哪天的课", placeholder:CLASSES[t][0].name+"，"+CLASSES[t][0].now.split("、")[0]},
  {id:"b_kids", label:"孩子", type:"short", prompt:"班上孩子的真实情况：几个人、几岁、谁最敢说、谁最容易卡、常错在哪"},
  {id:"b_lesson", label:"页码词句", type:"long", rows:2, prompt:"这节课的课本页码、单词、目标句型（英文，从③复制）"},
  {id:"b_problem", label:"上周问题", type:"long", rows:2, prompt:"这个班上周最想重来的那个问题（从②复制）"},
  {id:"b_fix", label:"磨课建议", type:"short", prompt:"这次要用上的磨课建议（从③复制）"},
  {id:"b_props", label:"道具", type:"short", prompt:"你手边能真用上的道具", placeholder:"例如：真实物、单词卡、图片卡、袋子、课本音频第几轨"}
 ],
 compose:{title:"拼好的指令（整段发给AI，作为第1轮）", hint:"上面每改一个字，这里跟着变。还显示「还没填」的地方，回去补完。",
  template:"你是少儿英语老师的助手。请帮我设计这周一节课里「目标句型」这一段，10分钟。教材是剑桥 Power Up 第二版 Starter（Power Up 0）。\n\n【班级】{{b_class}}\n【学生】{{b_kids}}\n【这节课的页码、单词、目标句型】{{b_lesson}}\n【我手边的道具】{{b_props}}\n【上周这个班出的问题，这次要解决】{{b_problem}}\n【这次一定要用上的做法】{{b_fix}}\n\n"+RULES},
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
  {id:"m_changes", label:"我改了什么", type:"long", rows:4, prompt:"我自己动手改了哪些地方（一条一行，至少3条，写清第几步、从什么改成什么）", group:"fin"},
  {id:"m_final", label:"定稿", type:"long", rows:12, max:20000, prompt:"定稿：周末真要用的版本。每一步写：几分钟｜老师说（英文）｜孩子说（英文）｜道具", group:"fin"}
 ],
 checksTitle:"按8条标准逐条核对定稿", checksHint:"别一口气全勾「做到了」。没做到的，改好定稿再勾。",
 checks:[
  ["不讲中文规则","定稿里没有一句用中文讲语法规则"],
  ["检查问题","有至少2个检查问题（CCQ），没有 Do you understand?／Do you know?"],
  ["孩子整句","每个孩子至少说2次完整的句子，回答是规范的短回答"],
  ["老师的话短","老师每句不超过8个英文单词，我一句句数过"],
  ["老师的话对","老师的英文我一句句读过，没有错句"],
  ["PPT以外","至少一个活动用实物或卡片，不靠PPT"],
  ["过渡语","每换一个活动都有一句英文过渡语"],
  ["上周的问题","定稿里能看出上周那个问题这次怎么解决"]
 ].map(([label, prompt], i) => ({id:"c"+(i+1), label, prompt, options:CK, noteWhen:1, notePrompt:"选「没做到，已改定稿」时写：哪一步、原来什么、改成什么"})),
 sections:["setup","compose","writing","checks"]
});

const BASE = t => ({
 tkt: {title:"① TKT 模块二小测", minutes:20, limitSeconds:1200, rule:"闭卷，不用AI、不用翻译，手机收起来",
  intro:["20道题，全部是英文，题型照 TKT 模块二：1—7题配对教案的组成部分，8—12题配对教具和教材，13—20题三选一。","考的都是术语表二里的词；情境题出自你们自己的课。","点「开始并计时」后限时20分钟，到点自动锁定，没做完的按未答。锁定后会显示答案和中文解析。"],
  audio:[], listening:[], setup:[], writing:[], speaking:[],
  conceptTitle:"TKT Module 2 practice", conceptRule:"Read each question carefully. Choose one answer for each question.", tkt:TKT2.map(q=>({...q, label:"Q"+q.id.slice(1)}))},
 review: review(t),
 plan: plan(t),
 ai: ai(t)
});
export const PACKETS = {he: BASE("he"), zuo: BASE("zuo")};
