export const VERSION = "2026-11-20.vol7.v2";
export const META = {
 vol:"Vol.7", prefix:"wl-vol7-v2:", db:"wonderland-vol7-audio-v2", cache:"wonderland-vol7-audio-cache-v2",
 format:"wonderland-teacher-vol7-response", fileTag:"温德兰_Vol.7",
 flow:"一次做完：听力45 → 改错句15<br>→ 自己开口说20 → 带孩子说20 → 交卷",
 submitHint:"下载后，把文件发到英语部群，再在自己的文件消息下面 @月神。个人反馈只会私聊你本人。",
 exportNotice:"答卷保存在当前浏览器，不自动上传。四段分开计时、分开锁定；缺项标未完成。听力依据、改写句子和录音由人工复核，不换算官方等级。",
 home:{
  eyebrow:"VOL.7 · 日常听力＋口语输出",
  title:"听得出来，还要说得出来。<br>学过的方法，这次真开口练。",
  planTitle:"一次做完，约1小时45分钟，分四段",
  cards:[
   {h:"这次练什么", ps:["① 听力：剑桥B1青少版，都是日常对话和介绍，Vol.1—5没用过。Part 2 三个选项对话里都会说到，要听清两个人最后认同的是什么；Part 3 没有选项，自己写词。","② 改错：句子全是你自己在Vol.4、Vol.5录音里说过的。","③ 自己开口说：Fiona讲的「3×3」，3个表达各换主语造3句，再说3句不重样的表扬，不看稿录一遍。","④ 带孩子说：结构化备课讲的 I say → We say → You say，用你这周末的目标句型，录一段90—120秒。"]},
   {h:"自己做", ps:["不看笔记、不用AI、不用翻译、不问别人。","学校网络慢：开始①之前，一定先点「下载音频」，7段全部下载完再开始。","④用你周四做练习单的那个班，目标句型用周四练习单开口题的那一句。"]}
  ]
 },
 guide:[
  ["怎么做",["① 听力45分钟：Part 2 六题，每题先读题和三个选项，再播放，选完写依据；Part 3 先读完6个空，再播放，听到就写。","② 改错15分钟：每句先判断有没有错，再在下面写改好的整句；没问题写「不用改」。","③ 自己开口说20分钟：先把9句和3句表扬写下来，再不看稿连着录一遍，60—150秒。","④ 带孩子说20分钟：写好 I say / We say / You say 各说什么，录一段90—150秒，回听后勾3个自评。"]],
  ["音频",["一定先点「先把本段音频下载到这台电脑」，等它显示「已全部下载」再开始。下载过一次，刷新页面也不用重下。","还是放不出来：勾「播放故障」，在英语部群里@月神，不要猜着选。"]],
  ["录音",["用电脑Chrome常规窗口打开本页，允许麦克风。录完点「停止并保存」，再试听一遍。也可以上传已有音频。"]],
  ["交卷",["在「交卷」里回答3个问题，看缺项，下载答卷。把文件发到英语部群，再在自己的文件消息下 @月神。网页不会自动上传。"]]
 ]
};
export const MODES = [["listen","① 日常听力"],["fix","② 改自己说错的句子"],["self","③ 自己开口说"],["kids","④ 带孩子说"]];
export const PROFILES = {
 he: {name:"何静", focus:"这次重点：孩子卡住时只给开头、不给整句；has / have、单三要说对。③④里说到「他、她、孩子名字」的句子，动词特别留神。"},
 zuo: {name:"左丽慧", focus:"这次重点：听力每题先写出决定答案的那句原话再选；说话时盯住单三：everyone gets、who says、the card makes。"}
};
export const SESSION = {
 totalMinutes: 105,
 window: "11月20日（周五）在校区：先拍口播，15:30开始，连续约1小时45分钟，最晚18:00前交。手机收起来，不看笔记，不用AI、不用翻译。",
 phases: [
  {title:"① 日常听力", minutes:45, detail:"剑桥B1青少版 Part 2 六题（每题写原话依据和排除理由）＋ Part 3 六个空（自己写词）", evidence:"原答、依据和播放次数"},
  {title:"② 改自己说错的句子", minutes:15, detail:"9句，全部来自你自己Vol.4、Vol.5的录音：先判断有没有错，再写改好的整句", evidence:"判断和改写"},
  {title:"③ 自己开口说", minutes:20, detail:"3×3：3个表达各造3句（换主语）＋3句不重样的表扬，不看稿录一遍", evidence:"写下的句子和录音"},
  {title:"④ 带孩子说", minutes:20, detail:"I say → We say → You say，用这周末的目标句型录90—150秒，回听自评", evidence:"备课、录音和自评"},
  {title:"交卷", minutes:5, detail:"3个问题，自查缺项，下载答卷", evidence:"答卷发英语部群并@月神"}
 ]
};
export const SOURCES = {
 listening: "听力：Cambridge B1 Preliminary for Schools 教师手册样卷 Listening Part 2（Q8–13）、Part 3（Q14–19）；官方真人录音，1.0倍，每段自带两遍。答案以手册官方答案页为准。Vol.1—5用的是成人版手册，这一套没用过。",
 listeningPaper: "https://www.cambridgeenglish.org/Images/168143-cambridge-english-preliminary-for-schools-teachers-handbook.pdf",
 audio: "https://www.cambridgeenglish.org/Images/709695-b1-preliminary-for-schools-handbook-for-teachers-listening-audio-files.mp3",
 fix: "改错：句子摘自两位老师Vol.4（11月4—5日）、Vol.5（11月12—13日）试讲和口语录音的转写，只去掉了嗯、啊，没有改词。",
 oral: "口语：③按Fiona《普通老师如何提高自己的口语水平》的3×3练法和同义替换；④按《主题结构化备课》的 I say → We say → You say（老师的话越来越少、孩子的话越来越多）。两门课老师们都学过。",
 note: "本卷为分人诊断。选择题和填空按答案判；依据、改写、录音由月神人工复核。不换算官方等级，不做两人排名。"
};
export const REFLECT = [
 {id:"r1", label:"最难", prompt:"这次四段里，哪一段最难？难在哪？"},
 {id:"r2", label:"常用表达", prompt:"③的3个表达里，你以后最会用到哪一个？用在什么时候？"},
 {id:"r3", label:"自己的错", prompt:"②③里你自己最常错的是哪一类（比如单三、语序、中式说法）？"}
];

// ---------- ① 日常听力 ----------
const EV = "先写决定答案的那句原话（英文，听到几个词写几个词）；再写你差点选的那个选项，录音里为什么不对（中文一句）。没听清就写「没听清」。";
const SRC = n => `Cambridge B1 Preliminary for Schools handbook sample, Listening Q${n}`;
const P2 = [
 {n:8, prompt:"8. Two friends are talking about a campsite they have been to. What did the boy like best about it?", options:["It was very close to the beach.","There were lots of people his age.","The activities were free."], answer:1,
  explanation:"答案B。女孩说 I started hanging out with loads of other teenagers，男孩接 That's why I'd go back any day – in other camps you don't get that sort of crowd。海滩是女孩说的；男孩自己说 The pool's good enough for me；活动收不收费没说。"},
 {n:9, prompt:"9. Two friends are talking about homework. The girl thinks that doing homework with friends…", options:["is fun.","helps concentration.","takes longer than doing it alone."], answer:0,
  explanation:"答案A。男孩说 having a few laughs and some jokes，女孩说 That's exactly it。concentrate 是她说「要专心的科目最好自己做」，正好反着；时间是 half the time，更快，不是更慢。"},
 {n:10, prompt:"10. A boy is telling his friend about a rock-climbing trip. How did he feel about it?", options:["grateful for the help he got","satisfied with his climbing","hopeful of going again"], answer:2,
  explanation:"答案C。I'm looking forward to having another try。help 是他说下次要告诉同伴 I need support，不是感谢这次的帮助；pleased with the way I've climbed 说的是室内攀岩墙，不是这次的真山。"},
 {n:11, prompt:"11. Two friends are talking about learning to play the guitar. The girl advises the boy to…", options:["practise more often.","play in a variety of styles.","listen to the best guitarists."], answer:2,
  explanation:"答案C。you ought to pay attention to the really top players… Just notice how they do things。练习：她说 I don't see how you could do much more；风格：她建议 focus on one type，跟B正相反。"},
 {n:12, prompt:"12. Two friends are talking about a book they've read. They agree that it has…", options:["lots of action.","realistic characters.","an unexpected ending."], answer:1,
  explanation:"答案B。女孩说 Alan's personality seems really true to life，男孩接 it reminds me of my mum and me。action 只是男孩说，女孩说 it does get slower in the middle；结局男孩觉得意外，女孩说 I kind of thought that might happen，没认同。"},
 {n:13, prompt:"13. Two friends are talking about a concert they've been to. They agree that…", options:["the organisation was poor.","the performance was good.","the tickets were expensive."], answer:2,
  explanation:"答案C。男孩 if you think what we paid to get in，女孩 it was definitely more than I'd normally be willing to pay，两人都嫌贵。组织：女孩说 Don't blame the organisers；表演：男孩嫌没唱成名曲，只有女孩说 I liked what they did。"}
].map(x => ({id:"s"+x.n, label:"听力Q"+x.n, part:"P2", type:"choice", letters:true, audio:"s-q"+x.n, prompt:x.prompt, options:x.options, answer:x.answer, evidencePrompt:EV, explanation:x.explanation, source:SRC(x.n), skill:"听观点"}));
const P3 = [
 {n:14, prompt:"Phil's first job after university was on local (14) ______.", accept:["radio","local radio"], explanation:"答案 radio。原话 first in radio in my home city and then as a journalist on a magazine。first 后面的才是第一份；magazine 是第二份。"},
 {n:15, prompt:"Before presenting the news, Phil looks through the day's (15) ______.", accept:["newspapers","newspaper","news papers","news paper","papers","paper"], explanation:"答案 newspapers。原话 First I get the newspapers and go through each one carefully。和编辑开会是看完报纸以后的事。"},
 {n:16, prompt:"Phil says that he's very careful about which (16) ______ he wears.", accept:["jacket","jackets"], explanation:"答案 jacket。choosing the right jacket to put on；trousers 和 shoes 他说不用操心，镜头拍不到。"},
 {n:17, prompt:"Phil sometimes finds the names of some (17) ______ difficult to say correctly.", accept:["people","person","persons"], explanation:"答案 people。cities or countries 他说一般不出错；it's names of people which I sometimes find a real challenge。"},
 {n:18, prompt:"Phil enjoys presenting news on the topic of (18) ______.", accept:["business"], explanation:"答案 business。I really enjoy business；politics、fashion 是他同事喜欢的。"},
 {n:19, prompt:"Phil would like to be a (19) ______ in the future.", accept:["producer","tv producer"], explanation:"答案 producer。别人说他能当 actor，他 never been attracted by that；从小想当 producer，现在仍想。"}
].map(x => ({id:"s"+x.n, label:"填空Q"+x.n, part:"P3", type:"gap", prompt:x.prompt, accept:x.accept, placeholder:"一到两个英文单词", explanation:x.explanation, source:SRC(x.n), skill:"听细节写词"}));
const AUDIO = [[8,93.4],[9,72.7],[10,78.7],[11,87.9],[12,89.1],[13,87.8]].map(([n,s]) => ({id:"s-q"+n, title:`剑桥B1青少版 Part 2 · Q${n}`, url:`./audio/s-q${n}.mp3`, end:s}))
 .concat([{id:"s-p3", title:"剑桥B1青少版 Part 3 · Q14–19（一段，自带两遍，约4分钟）", url:"./audio/s-p3.mp3", end:240.0}]);

// ---------- ② 改自己说错的句子 ----------
const FIXOPT = ["这句没问题","这句有错，要改"];
const fixItem = (id, context, prompt, answer, explanation) => ({id, type:"choice", group:"fix", skill:"改错", fix:true, context, prompt, options:FIXOPT, answer, explanation});
const FIX_HE = [
 fixItem("h1","Vol.5 试讲，放录音前对孩子说","Now listen the video and order them order.",1,"有错。参考：Now listen and put the pictures in order. listen 后面要么不接宾语，要么 listen to；排序说 put … in order。"),
 fixItem("h2","Vol.5 试讲，给孩子听的问题","Listen and find out how many books does Jenny have.",1,"有错。参考：Listen and find out how many books Jenny has.（find out 后面用陈述语序）或者分开说：Listen and find out: How many books has Jenny got?"),
 fixItem("h3","Vol.5 试讲，问逻辑题","Why do Jenny haven't pencils? How do you know?",1,"有错。参考：Why hasn't Jenny got any pencils? How do you know? 主语是 Jenny（单数），否定问句用 hasn't … got any。"),
 fixItem("h4","Vol.5 试讲，给孩子示范","Jenny have got five books.",1,"有错。参考：Jenny has got five books. 主语单数用 has。"),
 fixItem("h5","Vol.5 试讲，表扬孩子","Okay, clap for you.",1,"有错，中式说法。参考：Well done, Kim! Let's give Kim a big clap!"),
 fixItem("h6","Vol.5 试讲，请孩子再试一次","Can you try one more time, Kim?",0,"没问题。"),
 fixItem("h7","Vol.4 开口基线，让孩子藏卡片","Hide your card. Don't show your partner.",0,"没问题。"),
 fixItem("h8","Vol.4 停下来重讲，叫孩子看示范","Look at me. Watch me and Lily.",0,"没问题。"),
 fixItem("h9","Vol.5 试讲：孩子答不上 How many books has Jenny got?，你说（语法已经替你改对了，看做法）","Follow me. Jenny has got five books.",1,"做法有错。孩子卡住时你把整句答案说了，孩子只是跟读。参考：Jenny has got…?（停下来，等他接 five books），接上了再换一张图让他自己说。")
];
const FIX_ZUO = [
 fixItem("z1","Vol.4 跟同事说为什么选这个玩法","Everyone get a turn.",1,"有错。参考：Everyone gets a turn. everyone 当单数，动词加 -s。"),
 fixItem("z2","Vol.4 跟同事说为什么选这个玩法","And the secret card make it feel like a cool game.",1,"有错。参考：And the secret card makes it feel like a cool game. 主语 the secret card 是单数。"),
 fixItem("z3","Vol.4 新玩法，换规则后的检查问题（两次录音都这样说）","After the new rule, who say \"I'm swimming\"?",1,"有错。参考：After the new rule, who says \"I'm swimming\"? who 作主语，动词用单三。"),
 fixItem("z4","Vol.4 新玩法，讲新规则","Then point to a friend and then friend must say sentence out loudly.",1,"有错。参考：Then point to a friend, and that friend must say the sentence out loud. 要有 that / the；out loud 不说 out loudly。"),
 fixItem("z5","Vol.4 另一个新玩法，讲规则","If partner say no, try another word.",1,"有错。参考：If your partner says no, try another word. 要有 your；partner 单数，says。"),
 fixItem("z6","Vol.4 新玩法开头","Okay, everyone, stay in your circle.",0,"没问题。"),
 fixItem("z7","Vol.5 试讲，让孩子说完整","Tell me the whole sentence.",0,"没问题。"),
 fixItem("z8","Vol.4 新玩法，规则检查问题","Does Mia show the card or only act?",0,"没问题。"),
 fixItem("z9","Vol.5 试讲：你填的周六目标句型是 What are you doing? — I'm …ing.，试讲时你问的是（看做法）","Look at this new picture. What is the girl doing? Tell me the whole sentence.",1,"做法有错：句子本身没错，但练的不是你填的目标句型。周六要孩子说的是 I'm …ing。参考：请一个孩子做跳舞动作，问他 What are you doing? — I'm dancing.")
];

// ---------- ③ 自己开口说（3×3） ----------
const SELF = {
 title:"③ 自己开口说", minutes:20, rule:"不看笔记，不用AI或翻译",
 intro:["Fiona讲过：英语老师天天在加工别人的语言，很少自己完整地说。练法是3×3：3个表达，每个造3句，60秒内说出来。","每个表达写3句：第1句主语用 I，第2句用你班一个孩子的名字（他 / 她），第3句用 my students 或 they。第2句的动词要变，这就是在练单三。","再写3句表扬，不许用 Very good、Good job，要说出孩子做对了什么。","写完以后不看稿，连着录一遍。"],
 audio:[], listening:[], tkt:[], setup:[],
 writingTitle:"先写下来", writingHint:"英文写完整句子。说的是你自己和你班孩子的真事。",
 writing:[
  {id:"o_e1", label:"表达1", type:"long", rows:3, prompt:"be into …（很喜欢、迷上了）：I… / 孩子名字… / My students…", placeholder:"I'm into …\n(孩子名字) is into …\nMy students are into …"},
  {id:"o_e2", label:"表达2", type:"long", rows:3, prompt:"get the hang of …（摸到窍门、学会了）：I… / 孩子名字… / They…", placeholder:"I'm getting the hang of …\n(孩子名字) has got the hang of …\nThey …"},
  {id:"o_e3", label:"表达3", type:"long", rows:3, prompt:"can't wait to …（等不及要……）：I… / 孩子名字… / My students…", placeholder:"I can't wait to …\n(孩子名字) can't wait to …\nMy students …"},
  {id:"o_praise", label:"3句表扬", type:"long", rows:3, prompt:"孩子刚说对了目标句，你说的3句表扬（不用 Very good / Good job，说出他做对了什么）", placeholder:"例如：You said the whole sentence all by yourself!"}
 ],
 speakTitle:"不看稿录一遍", speakHint:"把上面9句和3句表扬连着说出来。可以看一眼开头，不要照着念。",
 speaking:[{id:"o_s1", label:"3×3录音", title:"O-S1｜9句＋3句表扬 · 60—150秒", minSec:60, maxSec:150,
  prompt:"按顺序说：be into 三句 → get the hang of 三句 → can't wait to 三句 → 3句表扬。",
  hint:"不到60秒算没完成；最长150秒，到时自动保存。",
  criteria:["9句都说了，主语换了 I / 他她 / they","第二句的动词单三、has 说对了","不是照着念，说得连贯","3句表扬都说出了孩子具体做对了什么，没有 Very good / Good job"]}],
 sections:["writing","speak"]
};

// ---------- ④ 带孩子说（I say → We say → You say） ----------
const KIDS = {
 title:"④ 带孩子说", minutes:20, rule:"不看笔记，不用AI或翻译",
 intro:["结构化备课讲的：I say 老师示范，We say 带着全班一起说，You say 孩子自己说。老师的话越来越少，孩子的话越来越多。","用你周四做练习单的那个班，目标句型就是周四练习单开口题那一句，周六课上真用。先写好每一步说什么，约8分钟。","再录一段90—150秒，约7分钟（可以重录）；回听后勾3个自评。"],
 audio:[], listening:[], tkt:[],
 setupTitle:"这周末的课", setupHint:"照教案填，不留「待补」。",
 setup:[
  {id:"c_class", label:"班级", type:"short", prompt:"哪个班", placeholder:"例如：Power Up Starter-X班"},
  {id:"c_target", label:"目标句型", type:"short", prompt:"目标句型（英文，抄周四练习单开口题那一句）", placeholder:"例如（Unit 2 的）：Where's my pencil? — It's under the chair."}
 ],
 writingTitle:"每一步说什么", writingHint:"I say 最多2句，后面就交给孩子。",
 writing:[
  {id:"k_i", label:"I say", type:"short", prompt:"I say：你示范的两句（英文）", placeholder:"例如：Look! What's this? It's a kite."},
  {id:"k_we", label:"We say", type:"short", prompt:"We say：怎么带全班一起说（中文一句，比如拍手说、小声大声说、男生女生接龙）"},
  {id:"k_you", label:"You say", type:"short", prompt:"You say：叫哪两个孩子、各换哪张新图让他们自己说（中文一句）"},
  {id:"k_start", label:"给的开头", type:"short", prompt:"孩子卡住时你给的开头（英文，只写半句）", placeholder:"例如：It's a…?"}
 ],
 speakTitle:"录一段", speakHint:"直接对孩子说，孩子的回答你自己演，一句带过。You say 那段，你只提问、给开头、等。",
 speaking:[{id:"k_s1", label:"带孩子说录音", title:"K-S1｜I say → We say → You say · 90—150秒", minSec:90, maxSec:150,
  prompt:"1. I say：示范你写的两句\n2. We say：带全班一起说两遍\n3. You say：叫第一个孩子，换一张新图让他自己说；他卡住，只给开头，等他接\n4. 叫第二个孩子，再换一张图，自己说完整",
  hint:"不到90秒算没完成；最长150秒，到时自动保存。",
  criteria:["用的是自己填的目标句型","I say 最多两句就交给孩子","We say 全班一起说了","You say 至少两个孩子各自说、各换了新图","卡住时只给开头，没有替孩子说整句","老师的话越来越少","老师自己的英语没有单三、has/have错误"]}],
 checksTitle:"回听自评：听完自己的录音再勾", checksHint:"诚实勾。月神会对着录音核。",
 checks:[
  {id:"ch1", label:"I say", prompt:"I say 我只示范了两句，就交给孩子了", options:["做到了","没做到"]},
  {id:"ch2", label:"You say", prompt:"You say 那段我只提问、给开头、等，没有替孩子说整句", options:["做到了","没做到"]},
  {id:"ch3", label:"自己说对", prompt:"回听了一遍，我说的英语没有单三、has / have 这类错", options:["做到了","没做到"], noteWhen:1, notePrompt:"选「没做到」时写出你听到的那句错话"}
 ],
 sections:["setup","writing","speak","checks"]
};

const BASE = {
 listen: {title:"① 日常听力", minutes:45, rule:"不看笔记，不用AI或翻译",
  intro:["先做 Part 2 六题，约22分钟：每题先读题和三个选项，再播放；听完马上选，再写依据。","再做 Part 3，约18分钟：先把6个空读完，再播放；一段录音自带两遍，听到就写。","最后留5分钟检查。"],
  audio:AUDIO, listening:[...P2, ...P3],
  listenParts:[
   {id:"P2", title:"Part 2 · 6题 · 听对话，选两个人的看法", rules:["每段对话自带两遍。三个选项录音里一般都会说到，要听清是谁说的、另一个人认不认同、最后定的是什么。","依据要写原话，不是写你选的那个选项。"]},
   {id:"P3", title:"Part 3 · 6个空 · 听介绍，自己写词", audio:"s-p3", notesTitle:"TV news presenter（先读完6个空，再播放）", rules:["You will hear a man called Phil Lamb telling a group of students about his work as a TV news presenter.","每空写一到两个英文单词。干扰词录音里也会出现，听清 first、but、never 后面跟的是什么。"]}
  ],
  setup:[], tkt:[], writing:[], speaking:[], sections:["listen"]},
 fix: {title:"② 改自己说错的句子", minutes:15, rule:"不看笔记，不用AI或翻译",
  intro:["下面9句，全部是你自己在Vol.4、Vol.5录音里说过的，原样摘出来。有的有错，有的没错。","每句先判断，再在下面写改好的整句；没错就写「不用改」。有一句看的是做法，不是语法，题目里写了。"],
  audio:[], listening:[], setup:[], writing:[], speaking:[],
  conceptTitle:"判断并改写", conceptRule:"改写要写完整的一句，像你在课上要说的那样。", tkt:[]},
 self: SELF,
 kids: KIDS
};
const number = (list, k) => list.map((q, i) => ({...q, label: k + (i + 1)}));
const ORDER = [0,5,1,2,6,3,4,7,8];
const build = fix => {const p = JSON.parse(JSON.stringify(BASE)); p.fix.tkt = number(ORDER.map(i => fix[i]), "句"); return p;};
export const PACKETS = {he: build(FIX_HE), zuo: build(FIX_ZUO)};
