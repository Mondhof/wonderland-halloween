export const VERSION = "2026-11-04.vol4.v1";
export const PROFILES = {
 "he": {
  "name": "何静",
  "focus": "用下周真实的课练最后8分钟：先问再等、换图抽查、孩子卡住时先帮再撤。课堂指令说完整。",
  "guided": "对照标准说法改两句原话，再按「出示—提问—等—帮—撤」重录换图抽查。",
  "listening": "剑桥B1 Part 2新原音，每题选完马上写依据。"
 },
 "zuo": {
  "name": "左丽慧",
  "focus": "把一个旧游戏改出三个新玩法，分清活动类型；换了规则一定再检查。另留朗读基线，跟真人原音练停顿和重音。",
  "guided": "核对活动类型；听真人原音标停顿、重音后再读同一段；补录换规则和检查。",
  "listening": "剑桥B1 Part 2新原音，每题选完马上写依据。"
 }
};
export const SESSION = {
 "totalMinutes": 90,
 "window": "11月4日（周三）或11月5日（周四）任选一天，14:00—18:00内留出连续90分钟，一次做完。",
 "phases": [
  {
   "title": "① 首次独立",
   "minutes": 50,
   "detail": "开口基线3＋听力12＋概念复查6＋我的真实课堂29",
   "evidence": "原答和原始录音，结束后锁定"
  },
  {
   "title": "② 对答案、跟练",
   "minutes": 15,
   "detail": "看解析，改一处，重录一段",
   "evidence": "跟练单独保存，不覆盖原答"
  },
  {
   "title": "③ 换情境再做",
   "minutes": 15,
   "detail": "不看提示，一道新听力＋一段新试讲",
   "evidence": "看刚练的方法能不能自己用出来"
  },
  {
   "title": "④ 反馈与交卷",
   "minutes": 10,
   "detail": "回答3个感受问题，自查缺项，下载答卷",
   "evidence": "感受和答卷一起交"
  }
 ]
};
export const SOURCES = {
 "listening": "Cambridge B1 Preliminary 教师手册样卷 Listening Part 2 Q9–Q13；官方真人录音，1.0倍，每段自带两遍。答案以手册官方答案页为准。",
 "listeningPaper": "https://www.cambridgeenglish.org/Images/168150-b1-preliminary-teachers-handbook.pdf",
 "audio": "https://www.cambridgeenglish.org/Images/505234-b1-preliminary-handbook-for-teachers-listening-audio-files.mp3",
 "concept": "概念复查为自编题，仿TKT配对题型，按本人Vol.1–3反复出现的错点出题，不是TKT原题。",
 "note": "本卷为分人诊断，课堂应用为自编情境。判断和理由可以写中文；对孩子说的话用英文。不同题型分开报告，不换算官方等级，不按两人总分排名。开放题和录音由月神人工复核。"
};
export const PACKETS = {
 "he": {
  "wed": {
   "title": "何静｜① 首次独立",
   "minutes": 50,
   "baseline": {
    "id": "h_s0",
    "label": "开口基线录音",
    "title": "H-S0｜开口基线：看中文直接说英文 · 约60秒",
    "prompt": "1. 让孩子们安静、看着你\n2. 问大家准备好了没有\n3. 让孩子把书翻到第12页\n4. 让孩子两人一组\n5. 让A先问\n6. 让孩子把卡片藏好，别给同伴看\n7. 让两人交换角色\n8. 问孩子：谁先问？",
    "hint": "按顺序一句一句说，就像孩子在你面前。不用先写下来，不用读稿。录完才能播放听力；跟练时会拿来对照。",
    "criteria": [
     "8句都说出来",
     "句子完整，有动作词",
     "对孩子说得短而清楚"
    ],
    "source": "自编课堂指令"
   },
   "listening": [
    {
     "id": "b1q9",
     "label": "听力Q9",
     "type": "choice",
     "audio": "b1-q9",
     "prompt": "Q9 · You will hear two friends talking about a pop band’s website. They think the site would be better if",
     "options": [
      "A its information was up to date.",
      "B it was easier to buy concert tickets.",
      "C the band members answered messages."
     ],
     "answer": 1,
     "explanation": "答案B。女生买票时付不了款，男生也得打客服才弄好，女生说They should just make it simpler。新闻几乎每天更新（排除A）、吉他手会回复粉丝（排除C）——这两点原音里都有，但都是网站好的一面。",
     "source": "Cambridge B1 Preliminary handbook sample, Listening Part 2 Q9",
     "domain": "听力：熟词干扰与真正的意思",
     "evidencePrompt": "依据：写下让你选这个答案的英文原话（几个词就行），再用中文说一句为什么不选另一个选项。"
    },
    {
     "id": "b1q12",
     "label": "听力Q12",
     "type": "choice",
     "audio": "b1-q12",
     "prompt": "Q12 · You will hear two friends talking about a football match. They agree that their team lost because",
     "options": [
      "A the players weren’t confident enough.",
      "B they were missing some key players.",
      "C the players didn’t do the right training."
     ],
     "answer": 0,
     "explanation": "答案A。女生说the main trouble…they just don’t believe enough in their own ability，男生Yeah表示同意。伤员多是让步（considering…they didn’t do so badly，排除B）；训练正在见效（排除C）。",
     "source": "Cambridge B1 Preliminary handbook sample, Listening Part 2 Q12",
     "domain": "听力：熟词干扰与真正的意思",
     "evidencePrompt": "依据：写下让你选这个答案的英文原话（几个词就行），再用中文说一句为什么不选另一个选项。"
    },
    {
     "id": "b1q13",
     "label": "听力Q13",
     "type": "choice",
     "audio": "b1-q13",
     "prompt": "Q13 · You will hear two friends talking about a tennis match they played. The boy wants the girl to",
     "options": [
      "A help him to get fitter.",
      "B practise with him more often.",
      "C enter more competitions with him."
     ],
     "answer": 0,
     "explanation": "答案A。男生说I must improve my fitness first，听说女生每周去四次健身房后问Can I come with you?。多练习是女生说很难约时间（排除B）；比赛只是提到下一场（排除C）。",
     "source": "Cambridge B1 Preliminary handbook sample, Listening Part 2 Q13",
     "domain": "听力：熟词干扰与真正的意思",
     "evidencePrompt": "依据：写下让你选这个答案的英文原话（几个词就行），再用中文说一句为什么不选另一个选项。"
    },
    {
     "id": "b1q11",
     "label": "听力Q11",
     "type": "choice",
     "audio": "b1-q11",
     "prompt": "Q11 · You will hear two friends talking about the girl’s flatmate. The girl thinks that her flatmate",
     "options": [
      "A is too untidy.",
      "B talks too much.",
      "C plays music too loud."
     ],
     "answer": 0,
     "explanation": "答案A。室友害羞、不说话，女生说I’ve got nothing to complain about there（排除B）；音乐反而帮她专心（排除C）；真正让她烦的是东西到处乱放：the way she never picks anything up。",
     "source": "Cambridge B1 Preliminary handbook sample, Listening Part 2 Q11",
     "domain": "听力：熟词干扰与真正的意思",
     "evidencePrompt": "依据：写下让你选这个答案的英文原话（几个词就行），再用中文说一句为什么不选另一个选项。"
    }
   ],
   "audio": [
    {
     "id": "b1-q9",
     "title": "Part 2 · Q9 原音",
     "url": "./audio/b1-q9.mp3",
     "start": 0,
     "end": 84.5
    },
    {
     "id": "b1-q12",
     "title": "Part 2 · Q12 原音",
     "url": "./audio/b1-q12.mp3",
     "start": 0,
     "end": 67.0
    },
    {
     "id": "b1-q13",
     "title": "Part 2 · Q13 原音",
     "url": "./audio/b1-q13.mp3",
     "start": 0,
     "end": 80.8
    },
    {
     "id": "b1-q11",
     "title": "Part 2 · Q11 原音",
     "url": "./audio/b1-q11.mp3",
     "start": 0,
     "end": 80.1
    }
   ],
   "tkt": [
    {
     "id": "he_c1",
     "label": "概念题1",
     "type": "match",
     "group": "plan",
     "instruction": "下面是课堂上可能出现的5个问题。每个问题选一个最合适的做法（A–F），有一个做法用不上。",
     "prompt": "In the pair game, the faster child answers for both partners.",
     "options": [
      "A Give each child a different card, so both children must ask and answer.",
      "B Before starting, ask one specific rule question, e.g. “Who asks first?”",
      "C Show a new picture and ask single children; give two choices first if needed.",
      "D Give two choices or the first words, then take the help away and ask again.",
      "E Start with a one-minute picture review game.",
      "F Ask the whole class to repeat the sentence ten more times together."
     ],
     "answer": 0,
     "explanation": "两人信息一样，快的孩子就能替对方说。给不同的卡，两人都必须开口。",
     "source": "自编复查题（仿TKT配对题型）",
     "domain": "预判问题与对策"
    },
    {
     "id": "he_c2",
     "label": "概念题2",
     "type": "match",
     "group": "plan",
     "instruction": "下面是课堂上可能出现的5个问题。每个问题选一个最合适的做法（A–F），有一个做法用不上。",
     "prompt": "Children all say “Yes!” to “Do you understand?”, then start the game the wrong way.",
     "options": [
      "A Give each child a different card, so both children must ask and answer.",
      "B Before starting, ask one specific rule question, e.g. “Who asks first?”",
      "C Show a new picture and ask single children; give two choices first if needed.",
      "D Give two choices or the first words, then take the help away and ask again.",
      "E Start with a one-minute picture review game.",
      "F Ask the whole class to repeat the sentence ten more times together."
     ],
     "answer": 1,
     "explanation": "齐声Yes不能证明懂了规则。开始前问一个具体问题，比如谁先问、能不能看卡。",
     "source": "自编复查题（仿TKT配对题型）",
     "domain": "预判问题与对策"
    },
    {
     "id": "he_c3",
     "label": "概念题3",
     "type": "match",
     "group": "plan",
     "instruction": "下面是课堂上可能出现的5个问题。每个问题选一个最合适的做法（A–F），有一个做法用不上。",
     "prompt": "At the end of the lesson, children can say the sentence together, but you don’t know who can say it alone.",
     "options": [
      "A Give each child a different card, so both children must ask and answer.",
      "B Before starting, ask one specific rule question, e.g. “Who asks first?”",
      "C Show a new picture and ask single children; give two choices first if needed.",
      "D Give two choices or the first words, then take the help away and ask again.",
      "E Start with a one-minute picture review game.",
      "F Ask the whole class to repeat the sentence ten more times together."
     ],
     "answer": 2,
     "explanation": "齐说整齐不等于每个人会。换新图、问单个孩子，才看得出谁自己会。",
     "source": "自编复查题（仿TKT配对题型）",
     "domain": "预判问题与对策"
    },
    {
     "id": "he_c4",
     "label": "概念题4",
     "type": "match",
     "group": "plan",
     "instruction": "下面是课堂上可能出现的5个问题。每个问题选一个最合适的做法（A–F），有一个做法用不上。",
     "prompt": "A child points to the right picture but can’t say the sentence.",
     "options": [
      "A Give each child a different card, so both children must ask and answer.",
      "B Before starting, ask one specific rule question, e.g. “Who asks first?”",
      "C Show a new picture and ask single children; give two choices first if needed.",
      "D Give two choices or the first words, then take the help away and ask again.",
      "E Start with a one-minute picture review game.",
      "F Ask the whole class to repeat the sentence ten more times together."
     ],
     "answer": 3,
     "explanation": "能指对说明听懂了。先给两个选项或句子开头，再撤掉帮助、换图让他自己说。",
     "source": "自编复查题（仿TKT配对题型）",
     "domain": "预判问题与对策"
    },
    {
     "id": "he_c5",
     "label": "概念题5",
     "type": "match",
     "group": "plan",
     "instruction": "下面是课堂上可能出现的5个问题。每个问题选一个最合适的做法（A–F），有一个做法用不上。",
     "prompt": "Children have forgotten last lesson’s words at the start of the class.",
     "options": [
      "A Give each child a different card, so both children must ask and answer.",
      "B Before starting, ask one specific rule question, e.g. “Who asks first?”",
      "C Show a new picture and ask single children; give two choices first if needed.",
      "D Give two choices or the first words, then take the help away and ask again.",
      "E Start with a one-minute picture review game.",
      "F Ask the whole class to repeat the sentence ten more times together."
     ],
     "answer": 4,
     "explanation": "开课先用一分钟看图复习，把旧词唤回来，再进新任务。",
     "source": "自编复查题（仿TKT配对题型）",
     "domain": "预判问题与对策"
    },
    {
     "id": "he_c6",
     "label": "概念题6",
     "type": "choice",
     "group": "aim",
     "prompt": "Which one is a lesson AIM, not a procedure?",
     "options": [
      "A Pupils play the ball game in pairs for three minutes.",
      "B By the end of the lesson, pupils can ask and answer “Where is the ball?” about a new picture without help.",
      "C The teacher shows flashcards and pupils repeat after her."
     ],
     "answer": 1,
     "explanation": "目标写的是孩子学完能做到什么，而且看得见；A和C都是课堂步骤。",
     "source": "自编复查题（仿TKT题型）",
     "domain": "目标与步骤"
    }
   ],
   "setup": [
    {
     "id": "my_class",
     "label": "班级",
     "type": "short",
     "prompt": "下周要上的班级（例如 PU0E）"
    },
    {
     "id": "my_unit",
     "label": "单元/课题",
     "type": "short",
     "prompt": "单元或课题（例如 PU0 Unit 4 At home）"
    },
    {
     "id": "my_target",
     "label": "目标句型",
     "type": "short",
     "prompt": "这节课的目标句型，用英文写（例如 Where’s the cat? It’s under the bed.）"
    }
   ],
   "writing": [
    {
     "id": "h4_w1",
     "label": "最后8分钟设计",
     "type": "long",
     "title": "下周这节课的最后8分钟",
     "prompt": "按下面四步写，每步一行：\n① 2分钟　听新指令找图\n② 3分钟　两人小任务\n③ 2分钟　换图抽查\n④ 1分钟　记录\n每一步写：你对孩子说的英文原话 ＋ 你在看什么（中文）。\n最后一行用中文写：你怎么分清孩子是「跟着说」还是「自己会」。",
     "hint": "用上面填的目标句型。理由用中文，对孩子说的话用英文。约8–12行。",
     "criteria": [
      "四步合计8分钟，顺序做得下来",
      "每步都有对孩子说的完整英文",
      "换图抽查是先问后等，不先给答案",
      "说清「跟着说」和「自己会」的区别"
     ],
     "source": "自编课堂应用"
    }
   ],
   "speaking": [
    {
     "id": "h4_s1",
     "label": "换图抽查录音",
     "title": "H-S1｜换图抽查 · 60–90秒",
     "prompt": "就是你上面写的第③步，直接对孩子说。用你下周的目标句型，至少换两张图、问两个不同的孩子。\n顺序：出示新图 → 提问 → 等一下 → 需要时再帮。不要先把答案说出来。",
     "hint": "假装孩子就在面前，可以自己演孩子的回答。不讲教学理论。",
     "criteria": [
      "出示新图后先问，不先给答案",
      "提问后有等待",
      "换图、换孩子再问",
      "指令句子完整"
     ],
     "source": "自编课堂应用"
    },
    {
     "id": "h4_s2",
     "label": "孩子卡住录音",
     "title": "H-S2｜孩子卡住时 · 30–60秒",
     "prompt": "一个孩子能指对图，但说不出句子。直接对这个孩子说：先给两个选项，再给句子开头，最后把帮助撤掉、换一张图让他自己说一次。",
     "hint": "用你下周的目标句型。语气平稳，不催孩子，不反复追问同一句。",
     "criteria": [
      "先两选一",
      "再给句子开头",
      "撤掉帮助后换图再问",
      "语气放松"
     ],
     "source": "自编课堂应用"
    }
   ]
  },
  "fri": {
   "title": "何静｜③ 换情境再做",
   "minutes": 15,
   "listening": [
    {
     "id": "b1q10",
     "label": "听力Q10",
     "type": "choice",
     "audio": "b1-q10",
     "prompt": "Q10 · You will hear a woman telling a friend about an art competition she’s won. How does she feel about it?",
     "options": [
      "A upset that the prize isn’t valuable",
      "B excited that the judges liked her picture",
      "C disappointed that she can’t use the prize"
     ],
     "answer": 2,
     "explanation": "答案C。奖品是纽约周末游，但月底前请不到假：I can’t believe I have to miss such a great chance。评委看好她的作品是男生的安慰话（排除B）；她没嫌奖品不值钱（排除A）。",
     "source": "Cambridge B1 Preliminary handbook sample, Listening Part 2 Q10",
     "domain": "听力：熟词干扰与真正的意思",
     "evidencePrompt": "依据：写下让你选这个答案的英文原话（几个词就行），再用中文说一句为什么不选另一个选项。"
    }
   ],
   "audio": [
    {
     "id": "b1-q10",
     "title": "Part 2 · Q10 原音",
     "url": "./audio/b1-q10.mp3",
     "start": 0,
     "end": 78.7
    }
   ],
   "tkt": [],
   "writing": [
    {
     "id": "h4_f1",
     "label": "停下来重讲",
     "type": "long",
     "title": "换个班：一半的组做错了",
     "prompt": "PU0E课上，你刚讲完规则，一半的两人组都做错了（比如A和B都在问，没人回答）。写3–4行：\n① 你叫停时说的第一句英文\n② 你怎么重新示范一轮（英文原话）\n③ 你问的两个具体规则问题，以及孩子应该怎么答",
     "hint": "对孩子说的话用英文，说明用中文。",
     "criteria": [
      "先叫停，再示范",
      "示范里角色清楚",
      "两个规则问题具体，有预期回答",
      "重新开始的指令清楚"
     ],
     "source": "自编课堂应用"
    }
   ],
   "speaking": [
    {
     "id": "h4_f_s1",
     "label": "停下来重讲录音",
     "title": "H-F-S1｜停下来重讲 · 45–75秒",
     "prompt": "按你上面写的，直接对全班说：叫停 → 重新示范一轮 → 问两个具体规则问题并等回答 → 重新开始。",
     "hint": "不看刚才的跟练示例，用自己的话说。",
     "criteria": [
      "叫停清楚",
      "重新示范",
      "规则问题具体并等待",
      "重新开始"
     ],
     "source": "自编课堂应用"
    }
   ]
  }
 },
 "zuo": {
  "wed": {
   "title": "左丽慧｜① 首次独立",
   "minutes": 50,
   "baseline": {
    "id": "z_s0",
    "label": "开口基线录音",
    "title": "Z-S0｜开口基线：朗读 · 约20秒",
    "prompt": "On my own, but the assistants were nice – telling me whether things suited me or not, and getting me to try different sizes. The coolest, most fashionable stuff has already gone, but I was glad I found things I liked that didn’t cost too much.",
    "hint": "按你现在的读法读一遍，不看标音，不先听范本。录完才能播放听力；跟练后会再读一次对比。",
    "criteria": [
     "读完整段",
     "停顿位置",
     "重读词",
     "语调"
    ],
    "source": "剑桥B1样卷Part 2 Q8女生的回答，本卷不作听力题"
   },
   "listening": [
    {
     "id": "b1q9",
     "label": "听力Q9",
     "type": "choice",
     "audio": "b1-q9",
     "prompt": "Q9 · You will hear two friends talking about a pop band’s website. They think the site would be better if",
     "options": [
      "A its information was up to date.",
      "B it was easier to buy concert tickets.",
      "C the band members answered messages."
     ],
     "answer": 1,
     "explanation": "答案B。女生买票时付不了款，男生也得打客服才弄好，女生说They should just make it simpler。新闻几乎每天更新（排除A）、吉他手会回复粉丝（排除C）——这两点原音里都有，但都是网站好的一面。",
     "source": "Cambridge B1 Preliminary handbook sample, Listening Part 2 Q9",
     "domain": "听力：熟词干扰与真正的意思",
     "evidencePrompt": "依据：写下让你选这个答案的英文原话（几个词就行），再用中文说一句为什么不选另一个选项。"
    },
    {
     "id": "b1q12",
     "label": "听力Q12",
     "type": "choice",
     "audio": "b1-q12",
     "prompt": "Q12 · You will hear two friends talking about a football match. They agree that their team lost because",
     "options": [
      "A the players weren’t confident enough.",
      "B they were missing some key players.",
      "C the players didn’t do the right training."
     ],
     "answer": 0,
     "explanation": "答案A。女生说the main trouble…they just don’t believe enough in their own ability，男生Yeah表示同意。伤员多是让步（considering…they didn’t do so badly，排除B）；训练正在见效（排除C）。",
     "source": "Cambridge B1 Preliminary handbook sample, Listening Part 2 Q12",
     "domain": "听力：熟词干扰与真正的意思",
     "evidencePrompt": "依据：写下让你选这个答案的英文原话（几个词就行），再用中文说一句为什么不选另一个选项。"
    },
    {
     "id": "b1q13",
     "label": "听力Q13",
     "type": "choice",
     "audio": "b1-q13",
     "prompt": "Q13 · You will hear two friends talking about a tennis match they played. The boy wants the girl to",
     "options": [
      "A help him to get fitter.",
      "B practise with him more often.",
      "C enter more competitions with him."
     ],
     "answer": 0,
     "explanation": "答案A。男生说I must improve my fitness first，听说女生每周去四次健身房后问Can I come with you?。多练习是女生说很难约时间（排除B）；比赛只是提到下一场（排除C）。",
     "source": "Cambridge B1 Preliminary handbook sample, Listening Part 2 Q13",
     "domain": "听力：熟词干扰与真正的意思",
     "evidencePrompt": "依据：写下让你选这个答案的英文原话（几个词就行），再用中文说一句为什么不选另一个选项。"
    },
    {
     "id": "b1q10",
     "label": "听力Q10",
     "type": "choice",
     "audio": "b1-q10",
     "prompt": "Q10 · You will hear a woman telling a friend about an art competition she’s won. How does she feel about it?",
     "options": [
      "A upset that the prize isn’t valuable",
      "B excited that the judges liked her picture",
      "C disappointed that she can’t use the prize"
     ],
     "answer": 2,
     "explanation": "答案C。奖品是纽约周末游，但月底前请不到假：I can’t believe I have to miss such a great chance。评委看好她的作品是男生的安慰话（排除B）；她没嫌奖品不值钱（排除A）。",
     "source": "Cambridge B1 Preliminary handbook sample, Listening Part 2 Q10",
     "domain": "听力：熟词干扰与真正的意思",
     "evidencePrompt": "依据：写下让你选这个答案的英文原话（几个词就行），再用中文说一句为什么不选另一个选项。"
    }
   ],
   "audio": [
    {
     "id": "b1-q9",
     "title": "Part 2 · Q9 原音",
     "url": "./audio/b1-q9.mp3",
     "start": 0,
     "end": 84.5
    },
    {
     "id": "b1-q12",
     "title": "Part 2 · Q12 原音",
     "url": "./audio/b1-q12.mp3",
     "start": 0,
     "end": 67.0
    },
    {
     "id": "b1-q13",
     "title": "Part 2 · Q13 原音",
     "url": "./audio/b1-q13.mp3",
     "start": 0,
     "end": 80.8
    },
    {
     "id": "b1-q10",
     "title": "Part 2 · Q10 原音",
     "url": "./audio/b1-q10.mp3",
     "start": 0,
     "end": 78.7
    }
   ],
   "tkt": [
    {
     "id": "zuo_c1",
     "label": "概念题1",
     "type": "match",
     "group": "activity",
     "instruction": "把老师说的话和活动类型配对（A–F），有一个类型用不上。先看孩子最后产出什么，不要只抓字面上的词。",
     "prompt": "Group 1, read about the lion. Group 2, read about the monkey. Then tell the other group what you found, and fill in the zoo chart together.",
     "options": [
      "A an information-gap activity (each child has different information and must ask)",
      "B a jigsaw reading task (groups read different parts, then put the information together)",
      "C a mingling activity (pupils walk around and ask many classmates)",
      "D a classroom writing activity",
      "E a fluency activity (pupils talk freely about a familiar topic)",
      "F a listening comprehension task"
     ],
     "answer": 1,
     "explanation": "两组读不同的部分，合起来才完整，这是拼图阅读。",
     "source": "自编复查题（仿TKT配对题型）",
     "domain": "活动类型与产出"
    },
    {
     "id": "zuo_c2",
     "label": "概念题2",
     "type": "match",
     "group": "activity",
     "instruction": "把老师说的话和活动类型配对（A–F），有一个类型用不上。先看孩子最后产出什么，不要只抓字面上的词。",
     "prompt": "Don’t show your card! Ask your partner “Where’s the ball?” and draw the ball on your picture.",
     "options": [
      "A an information-gap activity (each child has different information and must ask)",
      "B a jigsaw reading task (groups read different parts, then put the information together)",
      "C a mingling activity (pupils walk around and ask many classmates)",
      "D a classroom writing activity",
      "E a fluency activity (pupils talk freely about a familiar topic)",
      "F a listening comprehension task"
     ],
     "answer": 0,
     "explanation": "两人信息不同，不问就画不出来，这是信息差。",
     "source": "自编复查题（仿TKT配对题型）",
     "domain": "活动类型与产出"
    },
    {
     "id": "zuo_c3",
     "label": "概念题3",
     "type": "match",
     "group": "activity",
     "instruction": "把老师说的话和活动类型配对（A–F），有一个类型用不上。先看孩子最后产出什么，不要只抓字面上的词。",
     "prompt": "Stand up, take your sheet, and ask five friends “Do you like carrots?”",
     "options": [
      "A an information-gap activity (each child has different information and must ask)",
      "B a jigsaw reading task (groups read different parts, then put the information together)",
      "C a mingling activity (pupils walk around and ask many classmates)",
      "D a classroom writing activity",
      "E a fluency activity (pupils talk freely about a familiar topic)",
      "F a listening comprehension task"
     ],
     "answer": 2,
     "explanation": "站起来问很多同学，这是走动找人。",
     "source": "自编复查题（仿TKT配对题型）",
     "domain": "活动类型与产出"
    },
    {
     "id": "zuo_c4",
     "label": "概念题4",
     "type": "match",
     "group": "activity",
     "instruction": "把老师说的话和活动类型配对（A–F），有一个类型用不上。先看孩子最后产出什么，不要只抓字面上的词。",
     "prompt": "Pass your picnic invitation to the person on your left. Read it and write a reply.",
     "options": [
      "A an information-gap activity (each child has different information and must ask)",
      "B a jigsaw reading task (groups read different parts, then put the information together)",
      "C a mingling activity (pupils walk around and ask many classmates)",
      "D a classroom writing activity",
      "E a fluency activity (pupils talk freely about a familiar topic)",
      "F a listening comprehension task"
     ],
     "answer": 3,
     "explanation": "传纸条、读完再回，最后产出是写下来的回复，这是课堂写作，不是拼图阅读。",
     "source": "自编复查题（仿TKT配对题型）",
     "domain": "活动类型与产出"
    },
    {
     "id": "zuo_c5",
     "label": "概念题5",
     "type": "match",
     "group": "activity",
     "instruction": "把老师说的话和活动类型配对（A–F），有一个类型用不上。先看孩子最后产出什么，不要只抓字面上的词。",
     "prompt": "B, listen carefully to A’s weekend story. Then tell A one thing you liked about it.",
     "options": [
      "A an information-gap activity (each child has different information and must ask)",
      "B a jigsaw reading task (groups read different parts, then put the information together)",
      "C a mingling activity (pupils walk around and ask many classmates)",
      "D a classroom writing activity",
      "E a fluency activity (pupils talk freely about a familiar topic)",
      "F a listening comprehension task"
     ],
     "answer": 4,
     "explanation": "有listen carefully，但产出是自由地说感受，这是流利表达，不是听力理解题。F用不上。",
     "source": "自编复查题（仿TKT配对题型）",
     "domain": "活动类型与产出"
    },
    {
     "id": "zuo_c6",
     "label": "概念题6",
     "type": "choice",
     "group": "not",
     "prompt": "A shy pupil says “No, thank you” quietly but correctly. Which response is NOT appropriate?",
     "options": [
      "A Smile, nod, and let the game continue.",
      "B Ask her to say it loudly three times in front of the class.",
      "C Note it, and praise her answer quietly after the game."
     ],
     "answer": 1,
     "explanation": "题目问的是哪个不合适。她说对了，只是声音小；当众大声重复三次会让害羞的孩子更紧张。A和C都可以。",
     "source": "自编复查题（仿TKT题型）",
     "domain": "看清NOT"
    }
   ],
   "setup": [
    {
     "id": "my_class",
     "label": "班级",
     "type": "short",
     "prompt": "下周要上的班级（例如 PU0E）"
    },
    {
     "id": "my_unit",
     "label": "单元/课题",
     "type": "short",
     "prompt": "单元或课题（例如 PU0 Unit 4 At home）"
    },
    {
     "id": "my_target",
     "label": "目标句型",
     "type": "short",
     "prompt": "这节课的目标句型，用英文写（例如 Where’s the cat? It’s under the bed.）"
    }
   ],
   "writing": [
    {
     "id": "z4_w1",
     "label": "三个新玩法",
     "type": "long",
     "title": "一个旧游戏，改出3个新玩法",
     "prompt": "第1行：写一个你已经在课上玩过的游戏（名字＋一句话玩法）。\n接下来按「换材料」「换条件」「换产出」各改一个新玩法，每个写3点：\n① 谁有对方不知道的信息\n② 每个孩子最后说出或做出什么\n③ 属于哪类活动（信息差 / 拼图 / 走动找人 / 操练 / 流利表达）",
     "hint": "用上面填的目标句型。说明用中文，游戏里孩子说的话用英文。不用去搜新游戏，就从你自己的旧游戏改。",
     "criteria": [
      "三个玩法分别改了材料、条件、产出",
      "信息差是真的：不问就不知道",
      "每个孩子都有产出",
      "活动类型判断正确"
     ],
     "source": "自编课堂应用"
    }
   ],
   "speaking": [
    {
     "id": "z4_s1",
     "label": "新玩法试讲录音",
     "title": "Z-S1｜带一个新玩法 · 60–90秒",
     "prompt": "从你的3个新玩法里挑一个，直接对孩子说：示范一轮 → 问两个具体规则问题 → 换一条规则 → 再问一个检查问题。\n最后20秒必须是换规则和检查。",
     "hint": "录音时页面会显示用了多少秒、还剩多少秒；90秒左右收尾，最长120秒。可以自己演孩子的回答。",
     "criteria": [
      "示范准确",
      "两个具体规则检查并等待",
      "换了一条新规则",
      "新规则后有检查"
     ],
     "source": "自编课堂应用"
    },
    {
     "id": "z4_s2",
     "label": "跟同事说录音",
     "title": "Z-S2｜跟同事说 · 30–45秒",
     "prompt": "不看刚才写的内容，用英文跟同事说：你为什么挑这个新玩法？孩子在里面要听什么、说什么？",
     "hint": "用自己的话说，不读稿。",
     "criteria": [
      "回答了两个问题",
      "用自己的话",
      "按意思停顿",
      "听得懂"
     ],
     "source": "自编课堂应用"
    }
   ]
  },
  "fri": {
   "title": "左丽慧｜③ 换情境再做",
   "minutes": 15,
   "listening": [
    {
     "id": "b1q11",
     "label": "听力Q11",
     "type": "choice",
     "audio": "b1-q11",
     "prompt": "Q11 · You will hear two friends talking about the girl’s flatmate. The girl thinks that her flatmate",
     "options": [
      "A is too untidy.",
      "B talks too much.",
      "C plays music too loud."
     ],
     "answer": 0,
     "explanation": "答案A。室友害羞、不说话，女生说I’ve got nothing to complain about there（排除B）；音乐反而帮她专心（排除C）；真正让她烦的是东西到处乱放：the way she never picks anything up。",
     "source": "Cambridge B1 Preliminary handbook sample, Listening Part 2 Q11",
     "domain": "听力：熟词干扰与真正的意思",
     "evidencePrompt": "依据：写下让你选这个答案的英文原话（几个词就行），再用中文说一句为什么不选另一个选项。"
    }
   ],
   "audio": [
    {
     "id": "b1-q11",
     "title": "Part 2 · Q11 原音",
     "url": "./audio/b1-q11.mp3",
     "start": 0,
     "end": 80.1
    }
   ],
   "tkt": [],
   "writing": [
    {
     "id": "z4_f1",
     "label": "另一个新玩法",
     "type": "long",
     "title": "再挑一个新玩法",
     "prompt": "从你的3个新玩法里再挑一个（不能是刚才试讲的那个），写3行：\n① 孩子要说的目标句（英文）\n② 谁有对方不知道的信息，每个孩子最后产出什么\n③ 你会问的一个规则检查问题，以及孩子应该怎么答（英文）",
     "hint": "说明用中文，对孩子说的话用英文。",
     "criteria": [
      "目标句和玩法一致",
      "信息差和产出清楚",
      "规则问题具体，有预期回答"
     ],
     "source": "自编课堂应用"
    }
   ],
   "speaking": [
    {
     "id": "z4_f_s1",
     "label": "另一个玩法试讲录音",
     "title": "Z-F-S1｜另一个新玩法 · 45–75秒",
     "prompt": "直接教这个玩法：示范一轮 → 一个规则检查 → 换一条规则 → 再检查。",
     "hint": "不看跟练示例，用自己的话说。",
     "criteria": [
      "示范",
      "规则检查",
      "换规则",
      "换规则后再检查"
     ],
     "source": "自编课堂应用"
    }
   ]
  }
 }
};
export const EXAMPLES = {
 "h4_w1": "参考方向（目标句以 Where’s the cat? / It’s under the bed. 为例）：\n① Listen and find! Find the cat. Show me.（看谁指对）\n② Work in pairs. A, ask “Where’s the cat?” B, answer. Then swap.（巡视谁在开口）\n③ Look! A new picture. Where’s the dog? ……（等3秒）Is it on the bed or under the bed?（看单个孩子能不能自己说）\n④ 记三类：自己会 / 给提示会 / 只能指认。\n「跟着说」= 老师或同伴先说了他才说；「自己会」= 换了新图、没人先说，他也能说对。",
 "h4_f1": "参考方向：Stop, please. Eyes on me. Watch me and Lily. (示范) A asks, B answers. Who asks first? — A! Does B ask? — No, B answers. OK, start again.",
 "z4_w1": "参考方向（以「Where’s the ball?」找物游戏为例）：\n换材料：球换成动物卡和农场图。B把动物藏在图上，A不知道在哪，要问；产出：A在自己的图上标出位置。类型：信息差。\n换条件：A只能问三次，问完就要标。产出：标对几个。类型：信息差。\n换产出：B听完画出来，最后两人对图。类型：信息差。\n也可以改成走动找人：每人一张动物卡，站起来问五个人 Where’s your cat?，找到和自己一样的人。类型：走动找人。",
 "z4_f1": "参考方向：目标句、信息差、产出、规则检查四项都要具体。规则检查问的是「谁先问」「能不能看对方的卡」这类做法，不是 Do you understand?"
};
export const GUIDED = {
 "he": {
  "title": "何静｜② 对答案、跟练 · 15分钟",
  "blocks": [
   {
    "title": "3分钟｜对照8句标准说法",
    "text": "① Eyes on me, please.\n② Are you ready?\n③ Open your books at page twelve.\n④ Work in pairs.\n⑤ A, you ask first.\n⑥ Keep your card secret. Don’t show your partner.\n⑦ Now swap.\n⑧ Who asks first?\n回听你的H-S0，找出说得不一样的两句，写成「原句→改句」。注意：问准备好了是 Are you ready?；翻书要有动作词 open 或 turn to。"
   },
   {
    "title": "4分钟｜换图抽查五步：出示—提问—等—帮—撤",
    "text": "出示新图 → 提问 → 等（心里数3秒）→ 帮（先两选一，再给句子开头）→ 撤（换新图，换一个孩子再问）。\n示例：Look! A new picture. Where’s the cat? …… Is it on the bed or under the bed? …… Under the…? Yes! It’s under the bed. Now, Leo. New picture. Where’s the dog?\n关键：新图出来后，你说的第一句是问题，不是答案。"
   },
   {
    "title": "3分钟｜重录",
    "text": "按五步重录换图抽查，用你下周的目标句型，至少换两张图。"
   }
  ],
  "prompt": "写两组「原句→改句」（从H-S0或H-S1里挑），再写一句：你下周课上哪一刻最容易先把答案说出来？",
  "check": [
   "新图出来后第一句是问题",
   "提问后有等待",
   "撤掉帮助后换图换人再问"
  ],
  "speaking": [
   {
    "id": "gs1",
    "title": "跟练录音｜换图抽查重录 · 60–90秒",
    "prompt": "按五步重录：出示 → 提问 → 等 → 帮 → 撤，至少换两张图。",
    "hint": "跟练录音另存，不覆盖首次录音。",
    "criteria": [
     "先问后等",
     "帮了再撤",
     "换图换人"
    ],
    "source": "自编课堂应用"
   }
  ]
 },
 "zuo": {
  "title": "左丽慧｜② 对答案、跟练 · 15分钟",
  "blocks": [
   {
    "title": "3分钟｜核对活动类型",
    "text": "信息差：两人信息不同，不问就做不成。\n拼图：每组拿到不同的部分，合起来才完整（多半是读或听的材料）。\n走动找人：站起来问很多同学。\n写作：最后交出来的是写下的东西（传纸条、读完再回也是写作）。\n流利表达：用熟悉的话题自由说，重在说下去，不逐个纠错。\nlisten carefully 不等于听力理解题，要看最后产出什么。对照你的3个新玩法，把分错的类型改过来。"
   },
   {
    "title": "6分钟｜真人原音：听—标—跟",
    "text": "先听上下文（40秒），再循环听目标段（15秒）。在下面的文本上用 / 标停顿，圈出两个重读词，标一处语调上扬或下降。先一句一句暂停跟读，再紧跟原音读，最后关掉原音自己读。一次只改一两处，不用追求一次就像母语者。\n\nOn my own, but the assistants were nice – telling me whether things suited me or not, and getting me to try different sizes. The coolest, most fashionable stuff has already gone, but I was glad I found things I liked that didn’t cost too much."
   },
   {
    "title": "3分钟｜重录两段",
    "text": "gs1：同一段文本再读一次，和开口基线对比。\ngs2：把你试讲里「换规则＋检查」那段单独再说一遍，30–45秒。"
   }
  ],
  "prompt": "写：① 基线和再录之间，你自己实际听出的两处区别 ② 3个新玩法里分错类型的（如有）改成什么 ③ 换规则后你问的检查问题。",
  "check": [
   "标了停顿和重读再跟读",
   "活动类型已核对",
   "换规则后有检查问题"
  ],
  "speaking": [
   {
    "id": "gs1",
    "title": "跟练录音gs1｜同一段文本再读 · 约20秒",
    "prompt": "On my own, but the assistants were nice – telling me whether things suited me or not, and getting me to try different sizes. The coolest, most fashionable stuff has already gone, but I was glad I found things I liked that didn’t cost too much.",
    "hint": "听过范本后再读，和开口基线对比。",
    "criteria": [
     "停顿",
     "重读",
     "语调"
    ],
    "source": "剑桥B1样卷Part 2 Q8"
   },
   {
    "id": "gs2",
    "title": "跟练录音gs2｜换规则＋检查 · 30–45秒",
    "prompt": "只录换规则那一段：说清新规则，再问一个具体检查问题并等回答。",
    "hint": "直接对孩子说。",
    "criteria": [
     "新规则清楚",
     "检查问题具体",
     "有等待"
    ],
    "source": "自编课堂应用"
   }
  ],
  "models": [
   {
    "id": "model-context",
    "title": "上下文 · 约40秒",
    "url": "./audio/model-shop-context.mp3",
    "end": 40.1
   },
   {
    "id": "model-target",
    "title": "目标段 · 约15秒（循环跟读用）",
    "url": "./audio/model-shop-target.mp3",
    "end": 14.9
   }
  ]
 }
};
export const REFLECT = [
 {
  "id": "r1",
  "label": "难度和时间",
  "prompt": "这次难度和时间感觉怎样？哪部分偏难，哪部分偏容易？"
 },
 {
  "id": "r2",
  "label": "最卡的地方",
  "prompt": "哪部分最卡？说一个具体的地方（哪道题或哪段录音，卡在哪）。没做完的部分，也在这里说明原因。"
 },
 {
  "id": "r3",
  "label": "下周会用的一条",
  "prompt": "这次哪一条，下周课上你会真的用？写到具体环节（哪个班、哪一步）。"
 }
];
