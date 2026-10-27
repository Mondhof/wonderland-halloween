export const VERSION = "2026-10-27.vol3.v1.1";
export const PROFILES = {
  "he": {
    "name": "何静",
    "focus": "短而完整的课堂指令、真正查懂规则、帮助卡住的孩子再逐步撤掉支持。",
    "guided": "保留原答，先改一句话，再用不同条件检验孩子能否自己做。",
    "listening": "新材料听力单列，不回填Vol.1未测部分。"
  },
  "zuo": {
    "name": "左丽慧",
    "focus": "让活动有信息差、有双方产出，再比较模仿前、模仿后和自由表达的节奏与语调。",
    "guided": "先核对活动机制，再听真人范本，录下改进与自己的表达。",
    "listening": "先录固定文本基线，再播放正常语速原音。"
  }
};
export const SESSION = {
  "totalMinutes": 90,
  "phases": [
    {
      "title": "首次独立",
      "minutes": 55,
      "detail": "听力12＋概念10＋书写18＋口语15分钟",
      "evidence": "原答与模仿前原音，结束后锁定"
    },
    {
      "title": "反馈跟练",
      "minutes": 15,
      "detail": "核对依据、改写并再录",
      "evidence": "提示后证据单独保存"
    },
    {
      "title": "休息",
      "minutes": 5,
      "detail": "离开题面，暂停跟练",
      "evidence": "本人确认已休息，保留确认时间"
    },
    {
      "title": "练后应用",
      "minutes": 10,
      "detail": "换一个相似情境，自己完成听力、短答和试讲",
      "evidence": "看能否自己用出刚练的方法"
    },
    {
      "title": "核对导出",
      "minutes": 5,
      "detail": "试听录音，核查缺项，下载JSON",
      "evidence": "答案、录音、阶段和版本一起保存"
    }
  ]
};
export const SOURCES = {
  "tkt": "TKT Past Examination Paper 2007，Module 2 Q7/8/10/11；Module 3 Q24–30、Q41/43。英文题干及选项保留；抽题组说明按子集调整。",
  "listening": "Cambridge B1 Preliminary 2022 sample listening，Part 4 Q20–25；即时练后应用为Part 2 Q10或Q11。官方真人录音，默认1.0倍，原段含两遍。",
  "listeningPaper": "https://www.cambridgeenglish.org/Images/504505-b1-preliminary-2020-sample-listening-question-paper.pdf",
  "audio": "https://www.cambridgeenglish.org/Images/505234-b1-preliminary-handbook-for-teachers-listening-audio-files.mp3",
  "note": "本卷为分人诊断选编，课堂应用为自编模拟。不同题型分开报告；不换算官方等级，不按两人总分排名。开放题与真实录音需人工复核。"
};
export const PACKETS = {
  "he": {
    "wed": {
      "title": "何静｜首次独立测试",
      "date": "Vol.3 · 连续90分钟",
      "minutes": 55,
      "listening": [
        {
          "id": "b1q20",
          "type": "choice",
          "prompt": "Vicky first went in for competitions because",
          "options": [
            "A she had joined a swimming club.",
            "B her parents were keen on swimming.",
            "C her swimming teacher encouraged her."
          ],
          "answer": 2,
          "explanation": "父母虽喜欢运动却不擅长游泳；老师鼓励参赛，俱乐部是后来的事。",
          "source": "B1 Preliminary 2022 sample Listening, Part 4 Q20",
          "domain": "听力关系与转折"
        },
        {
          "id": "b1q21",
          "type": "choice",
          "prompt": "As a teenager, Vicky’s training involved",
          "options": [
            "A exercising on land as well as in the water.",
            "B going without meals during the day.",
            "C travelling to a pool once a day."
          ],
          "answer": 0,
          "explanation": "早晚游泳，午间在陆地训练；车里吃早餐，不是没饭吃。",
          "source": "B1 Preliminary 2022 sample Listening, Part 4 Q21",
          "domain": "听力关系与转折"
        },
        {
          "id": "b1q22",
          "type": "choice",
          "prompt": "What did Vicky find hard about her training programme?",
          "options": [
            "A She couldn’t go on school trips.",
            "B She lost some of her friends.",
            "C She missed lots of parties."
          ],
          "answer": 1,
          "explanation": "她已习惯不参加聚会；最难的是失去两位童年朋友。",
          "source": "B1 Preliminary 2022 sample Listening, Part 4 Q22",
          "domain": "听力关系与转折"
        },
        {
          "id": "b1q23",
          "type": "choice",
          "prompt": "What helped Vicky to do well in the national finals?",
          "options": [
            "A She was not expected to win.",
            "B She trained harder than usual.",
            "C She wanted to take a cup home."
          ],
          "answer": 0,
          "explanation": "别人不期待她赢，反而让压力较小；并未说比平时更努力训练。",
          "source": "B1 Preliminary 2022 sample Listening, Part 4 Q23",
          "domain": "听力关系与转折"
        },
        {
          "id": "b1q24",
          "type": "choice",
          "prompt": "As a swimming coach, Vicky thinks she’s best at teaching people",
          "options": [
            "A to deal with failure.",
            "B to improve their technique.",
            "C to get swimming qualifications."
          ],
          "answer": 0,
          "explanation": "她强调自己的成功和失败经验能帮助学员面对失败。",
          "source": "B1 Preliminary 2022 sample Listening, Part 4 Q24",
          "domain": "听力关系与转折"
        },
        {
          "id": "b1q25",
          "type": "choice",
          "prompt": "Why has Vicky started doing long-distance swimming?",
          "options": [
            "A She needed to get fit again.",
            "B She thought it would be fun.",
            "C She wanted to do some travelling."
          ],
          "answer": 2,
          "explanation": "主要动力是去美丽的地方；健身或乐趣不是她给出的主要原因。",
          "source": "B1 Preliminary 2022 sample Listening, Part 4 Q25",
          "domain": "听力关系与转折"
        }
      ],
      "tkt": [
        {
          "id": "m2q7",
          "type": "match",
          "prompt": "Stronger students may dominate in pairwork.",
          "options": [
            "A Lesson aim(s)",
            "B Anticipated problem(s)",
            "C Procedure and interaction",
            "D Aids and resources",
            "E Personal aim(s) of teacher"
          ],
          "answer": 1,
          "explanation": "这是预判困难，而非已经安排的教学步骤。",
          "source": "TKT Module 2 (2007), Q7",
          "domain": "目标、困难与教学步骤",
          "group": "lesson",
          "instruction": "Match the information from a lesson plan with the headings A–E. You may use an option more than once. These are four selected items, not the complete original group."
        },
        {
          "id": "m2q8",
          "type": "match",
          "prompt": "Remember to use gestures to encourage self-correction whenever possible.",
          "options": [
            "A Lesson aim(s)",
            "B Anticipated problem(s)",
            "C Procedure and interaction",
            "D Aids and resources",
            "E Personal aim(s) of teacher"
          ],
          "answer": 4,
          "explanation": "提醒自己使用手势是教师个人改进目标。",
          "source": "TKT Module 2 (2007), Q8",
          "domain": "目标、困难与教学步骤",
          "group": "lesson",
          "instruction": "Match the information from a lesson plan with the headings A–E. You may use an option more than once. These are four selected items, not the complete original group."
        },
        {
          "id": "m2q10",
          "type": "match",
          "prompt": "Students use dictionaries individually to check the meaning of vocabulary.",
          "options": [
            "A Lesson aim(s)",
            "B Anticipated problem(s)",
            "C Procedure and interaction",
            "D Aids and resources",
            "E Personal aim(s) of teacher"
          ],
          "answer": 2,
          "explanation": "描述学生具体行动及独立工作方式，是过程与互动。",
          "source": "TKT Module 2 (2007), Q10",
          "domain": "目标、困难与教学步骤",
          "group": "lesson",
          "instruction": "Match the information from a lesson plan with the headings A–E. You may use an option more than once. These are four selected items, not the complete original group."
        },
        {
          "id": "m2q11",
          "type": "match",
          "prompt": "Students have difficulty with phonemic transcriptions.",
          "options": [
            "A Lesson aim(s)",
            "B Anticipated problem(s)",
            "C Procedure and interaction",
            "D Aids and resources",
            "E Personal aim(s) of teacher"
          ],
          "answer": 1,
          "explanation": "这是对学生学习困难的预测，不等于本课目标。",
          "source": "TKT Module 2 (2007), Q11",
          "domain": "目标、困难与教学步骤",
          "group": "lesson",
          "instruction": "Match the information from a lesson plan with the headings A–E. You may use an option more than once. These are four selected items, not the complete original group."
        }
      ],
      "writing": [
        {
          "id": "h_w1",
          "type": "long",
          "prompt": "Two pupils have different secret toy cards. A asks “What colour is your kite?” B answers and A colours a small outline. Then they swap. Rewrite this instruction: “Now could you page 18 please? Do with your partner. Do you understand?” Give 4–6 short classroom-English instructions, two specific instruction-check questions with expected answers, and one 20–35-word explanation of how the checks show understanding.",
          "hint": "约80–110词。page 18是本题虚拟页码；写清打开、遮住、轮次、产出及交换，不要直接复述示例。",
          "source": "自编课堂应用，非TKT原题",
          "criteria": [
            "完整而自然的动作指令",
            "信息保密、两人角色和产出明确",
            "具体规则问题及预期回答",
            "解释检查为何比泛问懂了吗更有证据"
          ]
        },
        {
          "id": "h_w2",
          "type": "long",
          "prompt": "You have 8 minutes left in a PU0 lesson. Aim: independently ask and answer “Where is the ball?” / “It’s under the chair.” Pupil A points correctly but cannot speak. Pupil B speaks with a sentence frame. Pupil C answers on a new picture without help. Plan the final 8 minutes. State minutes, actions, differentiated next steps, one new-picture check, and a stop/support rule when a child becomes tense. Add your decision if only one pupil makes a word-order error during a fluency task.",
          "hint": "约100–140词。模拟学生情况，不是真实班情。总时间恰好8分钟；不要求每个孩子反复拍到完美。",
          "source": "自编课堂应用，非TKT原题",
          "criteria": [
            "8分钟安排与目标一致",
            "A/B/C支持有区别并逐步撤除",
            "新图独立检查而非原图背诵",
            "紧张时具体调整及纠错时机有理由"
          ]
        },
        {
          "id": "he_listen_evidence",
          "type": "long",
          "prompt": "Return to TWO listening answers you found hardest. For each, name the person/event, paraphrase the clue in English, and rule out ONE tempting wrong option.",
          "hint": "总计约40–60词。可复听已播放的本段；记意思，无需抄长原句。",
          "source": "自编课堂应用，非TKT原题",
          "criteria": [
            "人物/事件关系对应",
            "证据支持选择并排除干扰"
          ]
        }
      ],
      "speaking": [
        {
          "id": "h_s1",
          "title": "H-S1｜直接对学生说 · 60–90秒",
          "prompt": "Use the secret toy-card task from H-W1. Speak to pupils: get them ready, model ONE A/B exchange, give clear roles and an output, ask two specific rule-check questions with brief pauses, then announce ONE further change beyond swapping roles (for example, point instead of colour) and check the changed rule.",
          "hint": "直接试讲，不要解释“我会怎样教”。自己读A/B示范即可；停顿并不代表真实儿童已回答。",
          "criteria": [
            "准备与示范简短完整",
            "角色、信息保密和产出可执行",
            "两个具体问题并留答话空间",
            "交换之外的变化与新检查均清楚"
          ],
          "source": "自编课堂应用；固定朗读文本另注来源"
        },
        {
          "id": "h_s2",
          "title": "H-S2｜孩子卡住时怎样接话 · 45–75秒",
          "prompt": "A pupil can point to a ball under a chair but cannot answer “Where is the ball?” Speak as the teacher: offer brief support, invite another try, reduce the support, then check a NEW picture (ball on a table). After the role-play, briefly explain in English when you would stop and return later.",
          "hint": "演出教师话语＋简短说明。不用真实儿童，不把本人模拟回答当学习成效。",
          "criteria": [
            "支持由具体到减少",
            "保留儿童尝试与等待",
            "换图检验能否独立说",
            "紧张或无进展时停止规则可执行"
          ],
          "source": "自编课堂应用；固定朗读文本另注来源"
        }
      ],
      "audio": [
        {
          "id": "b1-part4",
          "title": "B1 Part4｜Vicky Prince访谈 · 六题",
          "url": "./audio/b1-part4.mp3",
          "start": 0,
          "end": 398.7
        }
      ]
    },
    "fri": {
      "title": "何静｜练后应用",
      "date": "Vol.3 · 连续90分钟",
      "minutes": 10,
      "listening": [
        {
          "id": "b1q11",
          "type": "choice",
          "prompt": "You will hear two friends talking about the girl’s flatmate. The girl thinks that her flatmate",
          "options": [
            "A is too untidy.",
            "B talks too much.",
            "C plays music too loud."
          ],
          "answer": 0,
          "explanation": "害羞和音乐不是她反对的点；她受不了东西乱放。",
          "source": "B1 Preliminary 2022 sample Listening, Part 2 Q11",
          "domain": "听力关系与转折"
        }
      ],
      "tkt": [
        {
          "id": "m3q41",
          "type": "match",
          "prompt": "Weaker students are relying on stronger students and not participating.",
          "options": [
            "A Make sure that all students have a clear role within the group.",
            "B Remind students that marks will be given for paragraphing and layout.",
            "C Tell students that they are responsible for the process of checking and editing language.",
            "D Allow students to choose their own topic.",
            "E Teach students some useful exponents of classroom language.",
            "F Explain to students the importance of trying to use their own words in their writing.",
            "G Set time limits and deadlines for completing stages of the project."
          ],
          "answer": 0,
          "explanation": "明确分工使每人参与，比笼统鼓励合作更可执行。",
          "source": "TKT Module 3 (2007), Q41",
          "domain": "课堂管理迁移",
          "group": "project",
          "instruction": "Match this group-project problem with the best solution A–G. This is one selected item; the original full group is not reproduced."
        }
      ],
      "writing": [
        {
          "id": "h_f1",
          "type": "long",
          "prompt": "You now have secret animal cards. A asks “Can it fly?” B answers and A chooses a picture; then swap. After swapping, change the output from choosing to drawing one detail. Write 3–5 short instructions and two rule-check questions with expected answers. Add one English sentence explaining the clue that rules OUT one wrong option in the flatmate recording.",
          "hint": "约55–80词；新任务不直接复用玩具涂色范文。",
          "source": "自编课堂应用，非TKT原题",
          "criteria": [
            "新任务角色与产出明确",
            "变化后的问题检查新规则",
            "英语短指令完整",
            "听力排除依据来自录音"
          ]
        }
      ],
      "speaking": [
        {
          "id": "h_f_s1",
          "title": "H-F-S1｜新条件直接试讲 · 45–75秒",
          "prompt": "Use the animal task. Model one exchange, check who asks and what the listener does, change choosing to drawing, then help a pupil who still points instead of answering. End by checking a NEW animal without the sentence frame.",
          "hint": "直接对学生说，别照读H-W1；本轮是提示后的即时应用。",
          "criteria": [
            "新材料与产出准确",
            "新条件检查明确",
            "支持后再撤除",
            "新图独立检查"
          ],
          "source": "自编课堂应用；固定朗读文本另注来源"
        }
      ],
      "audio": [
        {
          "id": "b1-q11",
          "title": "新原音｜Part2 Q11",
          "url": "./audio/b1-q11.mp3",
          "start": 0,
          "end": 84.5
        }
      ]
    }
  },
  "zuo": {
    "wed": {
      "title": "左丽慧｜首次独立测试",
      "date": "Vol.3 · 连续90分钟",
      "minutes": 55,
      "listening": [
        {
          "id": "b1q20",
          "type": "choice",
          "prompt": "Vicky first went in for competitions because",
          "options": [
            "A she had joined a swimming club.",
            "B her parents were keen on swimming.",
            "C her swimming teacher encouraged her."
          ],
          "answer": 2,
          "explanation": "父母虽喜欢运动却不擅长游泳；老师鼓励参赛，俱乐部是后来的事。",
          "source": "B1 Preliminary 2022 sample Listening, Part 4 Q20",
          "domain": "听力关系与转折"
        },
        {
          "id": "b1q21",
          "type": "choice",
          "prompt": "As a teenager, Vicky’s training involved",
          "options": [
            "A exercising on land as well as in the water.",
            "B going without meals during the day.",
            "C travelling to a pool once a day."
          ],
          "answer": 0,
          "explanation": "早晚游泳，午间在陆地训练；车里吃早餐，不是没饭吃。",
          "source": "B1 Preliminary 2022 sample Listening, Part 4 Q21",
          "domain": "听力关系与转折"
        },
        {
          "id": "b1q22",
          "type": "choice",
          "prompt": "What did Vicky find hard about her training programme?",
          "options": [
            "A She couldn’t go on school trips.",
            "B She lost some of her friends.",
            "C She missed lots of parties."
          ],
          "answer": 1,
          "explanation": "她已习惯不参加聚会；最难的是失去两位童年朋友。",
          "source": "B1 Preliminary 2022 sample Listening, Part 4 Q22",
          "domain": "听力关系与转折"
        },
        {
          "id": "b1q23",
          "type": "choice",
          "prompt": "What helped Vicky to do well in the national finals?",
          "options": [
            "A She was not expected to win.",
            "B She trained harder than usual.",
            "C She wanted to take a cup home."
          ],
          "answer": 0,
          "explanation": "别人不期待她赢，反而让压力较小；并未说比平时更努力训练。",
          "source": "B1 Preliminary 2022 sample Listening, Part 4 Q23",
          "domain": "听力关系与转折"
        },
        {
          "id": "b1q24",
          "type": "choice",
          "prompt": "As a swimming coach, Vicky thinks she’s best at teaching people",
          "options": [
            "A to deal with failure.",
            "B to improve their technique.",
            "C to get swimming qualifications."
          ],
          "answer": 0,
          "explanation": "她强调自己的成功和失败经验能帮助学员面对失败。",
          "source": "B1 Preliminary 2022 sample Listening, Part 4 Q24",
          "domain": "听力关系与转折"
        },
        {
          "id": "b1q25",
          "type": "choice",
          "prompt": "Why has Vicky started doing long-distance swimming?",
          "options": [
            "A She needed to get fit again.",
            "B She thought it would be fun.",
            "C She wanted to do some travelling."
          ],
          "answer": 2,
          "explanation": "主要动力是去美丽的地方；健身或乐趣不是她给出的主要原因。",
          "source": "B1 Preliminary 2022 sample Listening, Part 4 Q25",
          "domain": "听力关系与转折"
        }
      ],
      "tkt": [
        {
          "id": "m3q24",
          "type": "match",
          "prompt": "Right, now everybody, please pass your paper to the person on your left. Then read and reply to the message.",
          "options": [
            "A The teacher is doing a fluency activity with an advanced class.",
            "B The teacher is giving a written homework task to an advanced class.",
            "C The teacher is doing a jigsaw-reading task with an intermediate class.",
            "D The teacher is doing a classroom writing activity with an intermediate class.",
            "E The teacher is doing a word-building activity with an intermediate class.",
            "F The teacher is doing a listening comprehension task with an intermediate class.",
            "G The teacher is doing a fluency activity with a low-level class.",
            "H The teacher is doing a pronunciation activity with a low-level class."
          ],
          "answer": 3,
          "explanation": "传递书面消息并回复，核心产出是写作。",
          "source": "TKT Module 3 (2007), Q24",
          "domain": "活动机制与产出",
          "group": "activity",
          "instruction": "Match the teacher’s instructions with the activities A–H. There is one extra option which you do not need to use."
        },
        {
          "id": "m3q25",
          "type": "match",
          "prompt": "The man gives lots of reasons why he is late. Write down three of them.",
          "options": [
            "A The teacher is doing a fluency activity with an advanced class.",
            "B The teacher is giving a written homework task to an advanced class.",
            "C The teacher is doing a jigsaw-reading task with an intermediate class.",
            "D The teacher is doing a classroom writing activity with an intermediate class.",
            "E The teacher is doing a word-building activity with an intermediate class.",
            "F The teacher is doing a listening comprehension task with an intermediate class.",
            "G The teacher is doing a fluency activity with a low-level class.",
            "H The teacher is doing a pronunciation activity with a low-level class."
          ],
          "answer": 5,
          "explanation": "听后记录三条理由，核心是听力理解。",
          "source": "TKT Module 3 (2007), Q25",
          "domain": "活动机制与产出",
          "group": "activity",
          "instruction": "Match the teacher’s instructions with the activities A–H. There is one extra option which you do not need to use."
        },
        {
          "id": "m3q26",
          "type": "match",
          "prompt": "OK, now you Paola. Tell us about your family – your parents and brothers and sisters.",
          "options": [
            "A The teacher is doing a fluency activity with an advanced class.",
            "B The teacher is giving a written homework task to an advanced class.",
            "C The teacher is doing a jigsaw-reading task with an intermediate class.",
            "D The teacher is doing a classroom writing activity with an intermediate class.",
            "E The teacher is doing a word-building activity with an intermediate class.",
            "F The teacher is doing a listening comprehension task with an intermediate class.",
            "G The teacher is doing a fluency activity with a low-level class.",
            "H The teacher is doing a pronunciation activity with a low-level class."
          ],
          "answer": 6,
          "explanation": "低水平学习者围绕熟悉话题做流利表达。",
          "source": "TKT Module 3 (2007), Q26",
          "domain": "活动机制与产出",
          "group": "activity",
          "instruction": "Match the teacher’s instructions with the activities A–H. There is one extra option which you do not need to use."
        },
        {
          "id": "m3q27",
          "type": "match",
          "prompt": "Don’t forget to take your coursebook with you – the Useful Language section on reports is very good.",
          "options": [
            "A The teacher is doing a fluency activity with an advanced class.",
            "B The teacher is giving a written homework task to an advanced class.",
            "C The teacher is doing a jigsaw-reading task with an intermediate class.",
            "D The teacher is doing a classroom writing activity with an intermediate class.",
            "E The teacher is doing a word-building activity with an intermediate class.",
            "F The teacher is doing a listening comprehension task with an intermediate class.",
            "G The teacher is doing a fluency activity with a low-level class.",
            "H The teacher is doing a pronunciation activity with a low-level class."
          ],
          "answer": 1,
          "explanation": "带回书并参考报告语言，属于高级班书面作业。",
          "source": "TKT Module 3 (2007), Q27",
          "domain": "活动机制与产出",
          "group": "activity",
          "instruction": "Match the teacher’s instructions with the activities A–H. There is one extra option which you do not need to use."
        },
        {
          "id": "m3q28",
          "type": "match",
          "prompt": "OK, now, all the Student Bs, listen very carefully, as you have to give detailed feedback on your partner’s story.",
          "options": [
            "A The teacher is doing a fluency activity with an advanced class.",
            "B The teacher is giving a written homework task to an advanced class.",
            "C The teacher is doing a jigsaw-reading task with an intermediate class.",
            "D The teacher is doing a classroom writing activity with an intermediate class.",
            "E The teacher is doing a word-building activity with an intermediate class.",
            "F The teacher is doing a listening comprehension task with an intermediate class.",
            "G The teacher is doing a fluency activity with a low-level class.",
            "H The teacher is doing a pronunciation activity with a low-level class."
          ],
          "answer": 0,
          "explanation": "给同伴故事详细反馈，高级班流利活动。",
          "source": "TKT Module 3 (2007), Q28",
          "domain": "活动机制与产出",
          "group": "activity",
          "instruction": "Match the teacher’s instructions with the activities A–H. There is one extra option which you do not need to use."
        },
        {
          "id": "m3q29",
          "type": "match",
          "prompt": "OK everybody, repeat after the tape.",
          "options": [
            "A The teacher is doing a fluency activity with an advanced class.",
            "B The teacher is giving a written homework task to an advanced class.",
            "C The teacher is doing a jigsaw-reading task with an intermediate class.",
            "D The teacher is doing a classroom writing activity with an intermediate class.",
            "E The teacher is doing a word-building activity with an intermediate class.",
            "F The teacher is doing a listening comprehension task with an intermediate class.",
            "G The teacher is doing a fluency activity with a low-level class.",
            "H The teacher is doing a pronunciation activity with a low-level class."
          ],
          "answer": 7,
          "explanation": "跟读录音是发音活动。",
          "source": "TKT Module 3 (2007), Q29",
          "domain": "活动机制与产出",
          "group": "activity",
          "instruction": "Match the teacher’s instructions with the activities A–H. There is one extra option which you do not need to use."
        },
        {
          "id": "m3q30",
          "type": "match",
          "prompt": "Jacques, turn away from Brigitte so you can’t see her text.",
          "options": [
            "A The teacher is doing a fluency activity with an advanced class.",
            "B The teacher is giving a written homework task to an advanced class.",
            "C The teacher is doing a jigsaw-reading task with an intermediate class.",
            "D The teacher is doing a classroom writing activity with an intermediate class.",
            "E The teacher is doing a word-building activity with an intermediate class.",
            "F The teacher is doing a listening comprehension task with an intermediate class.",
            "G The teacher is doing a fluency activity with a low-level class.",
            "H The teacher is doing a pronunciation activity with a low-level class."
          ],
          "answer": 2,
          "explanation": "双方不能看到彼此文本，符合拼图阅读的信息分工；配对本身不足以判定活动目的。",
          "source": "TKT Module 3 (2007), Q30",
          "domain": "活动机制与产出",
          "group": "activity",
          "instruction": "Match the teacher’s instructions with the activities A–H. There is one extra option which you do not need to use."
        }
      ],
      "writing": [
        {
          "id": "z_w1",
          "type": "long",
          "prompt": "Design a 6-minute “Secret Picnic” information-gap game for PU0 pupils. Target: “Would you like an apple?” / “Yes, please.” / “No, thank you.” A has food-offer cards; B has a SECRET want/don’t-want card. A records B’s choices with ticks/crosses, then they swap using new cards. Write a task card: target/output, materials and information gap, steps and timings, a model exchange, two rule checks with expected answers, and one condition change beyond a simple role swap.",
          "hint": "约110–150词。说明要约请/提供食物的交际功能，不写成一般喜好问答；同伴的选择不能事先看到。",
          "source": "自编课堂应用，非TKT原题",
          "criteria": [
            "目标、双方真实产出和信息差一致",
            "6分钟流程可做且包含交换",
            "示范体现提供而非笼统喜好",
            "规则问题与额外条件变化具体"
          ]
        },
        {
          "id": "z_w2",
          "type": "long",
          "prompt": "A teacher says: “Any pairwork is a jigsaw task.” Another says: “In ‘have breakfast / have a shower’, the lesson aim must be pronunciation because pupils speak.” Explain why each claim is unsafe. Then choose the NOT-appropriate response when most pairs misunderstand a new rule: A pause and clarify the rule with one model; B let pairs continue unchanged and only correct their final worksheets; C ask two rule-check questions before restarting. Explain the word NOT in your decision.",
          "hint": "约70–100词。自编判断，非TKT原题；明确选择、依据及另一个选项为何可行。",
          "source": "自编课堂应用，非TKT原题",
          "criteria": [
            "配对形式与信息分工概念分清",
            "词语搭配与是否开口说分清",
            "准确处理NOT并选择B",
            "以任务阶段与大多数人不懂规则作解释"
          ]
        },
        {
          "id": "zuo_listen_evidence",
          "type": "long",
          "prompt": "Return to TWO listening answers you found hardest. For each, name the person/event, paraphrase the clue in English, and rule out ONE tempting wrong option.",
          "hint": "总计约40–60词。可复听已播放的本段；记意思，无需抄长原句。",
          "source": "自编课堂应用，非TKT原题",
          "criteria": [
            "人物/事件关系对应",
            "证据支持选择并排除干扰"
          ]
        }
      ],
      "speaking": [
        {
          "id": "z_s0",
          "title": "Z-S0｜先录原始朗读 · 30–60秒",
          "prompt": "On my own, but the assistants were nice – telling me whether things suited me or not, and getting me to try different sizes. The coolest most fashionable stuff has already gone, but I was glad I found things I liked that didn’t cost too much.",
          "hint": "剑桥B1 Part2 Q8女性回答节选（本轮不作为听力题）；先录并试听保存，再播放正式听力。按自己当前读法，不看标音、不听范本。此段用于前后比较，不打母语纯度分。",
          "criteria": [
            "可听清并完成原文",
            "保留自然停顿与节奏",
            "与跟练后同文本比较",
            "不把朗读等同自由表达"
          ],
          "source": "自编课堂应用；固定朗读文本另注来源"
        },
        {
          "id": "z_s1",
          "title": "Z-S1｜把游戏真正带起来 · 60–90秒",
          "prompt": "Teach the Secret Picnic game from Z-W1 directly to pupils. Model an offer and two possible replies. Make the hidden information, each role and the tick/cross output clear. Ask two concrete rule-check questions with pauses. Then change ONE rule beyond swapping roles, and check it.",
          "hint": "实际课堂英语，不讲活动理论；无需同事或儿童配合。",
          "criteria": [
            "提供与回应示范准确",
            "角色、信息差、记录结果明确",
            "具体规则检查与等待",
            "额外条件变化及对应检查"
          ],
          "source": "自编课堂应用；固定朗读文本另注来源"
        },
        {
          "id": "z_s2",
          "title": "Z-S2｜自然表达基线 · 30–45秒",
          "prompt": "Without reading your written answers, tell a new colleague about one classroom game you enjoy: why pupils need to listen to each other, and what they produce. Use your own words.",
          "hint": "不逐字读任务卡；比较自由表达与固定朗读时的节奏、语调和停顿。",
          "criteria": [
            "回应两个问题且意思连贯",
            "使用自己的内容",
            "按意群组织而非逐词割裂",
            "可理解度与语调服务于意思"
          ],
          "source": "自编课堂应用；固定朗读文本另注来源"
        }
      ],
      "audio": [
        {
          "id": "b1-part4",
          "title": "B1 Part4｜Vicky Prince访谈 · 六题",
          "url": "./audio/b1-part4.mp3",
          "start": 0,
          "end": 398.7
        }
      ]
    },
    "fri": {
      "title": "左丽慧｜练后应用",
      "date": "Vol.3 · 连续90分钟",
      "minutes": 10,
      "listening": [
        {
          "id": "b1q10",
          "type": "choice",
          "prompt": "You will hear a woman telling a friend about an art competition she’s won. How does she feel about it?",
          "options": [
            "A upset that the prize isn’t valuable",
            "B excited that the judges liked her picture",
            "C disappointed that she can’t use the prize"
          ],
          "answer": 2,
          "explanation": "奖品是纽约周末旅行，但截止前无法请假，所以遗憾不能使用。",
          "source": "B1 Preliminary 2022 sample Listening, Part 2 Q10",
          "domain": "听力关系与转折"
        }
      ],
      "tkt": [
        {
          "id": "m3q43",
          "type": "match",
          "prompt": "Some groups are not working quickly enough.",
          "options": [
            "A Make sure that all students have a clear role within the group.",
            "B Remind students that marks will be given for paragraphing and layout.",
            "C Tell students that they are responsible for the process of checking and editing language.",
            "D Allow students to choose their own topic.",
            "E Teach students some useful exponents of classroom language.",
            "F Explain to students the importance of trying to use their own words in their writing.",
            "G Set time limits and deadlines for completing stages of the project."
          ],
          "answer": 6,
          "explanation": "分阶段时间限制与截止点直接回应任务进度问题。",
          "source": "TKT Module 3 (2007), Q43",
          "domain": "课堂管理迁移",
          "group": "project",
          "instruction": "Match this group-project problem with the best solution A–G. This is one selected item; the original full group is not reproduced."
        }
      ],
      "writing": [
        {
          "id": "z_f1",
          "type": "long",
          "prompt": "New game: Secret Zoo. A has an animal picture; B has an empty zoo map. B asks “Where is the lion?” A answers “It’s next to the tree.” B draws a mark; then swap with a NEW animal. In 4 lines state: the information gap, each role’s output, one rule-check question with its expected answer, and a change beyond swapping. Add one English sentence explaining why the art-prize speaker cannot use her prize.",
          "hint": "约60–85词；不要只是更换Secret Picnic里的名词，说明位置交流如何决定地图上的产出。",
          "source": "自编课堂应用，非TKT原题",
          "criteria": [
            "位置交流真的决定产出",
            "双方角色与新动物交换清楚",
            "具体检查及额外变化",
            "听力理由及转折准确"
          ]
        }
      ],
      "speaking": [
        {
          "id": "z_f_s1",
          "title": "Z-F-S1｜新游戏直接试讲 · 45–75秒",
          "prompt": "Teach Secret Zoo: one model, clear hidden information and output, one rule check, and one further rule change with a new check.",
          "hint": "不用读书面说明；用本轮自己的课堂语言。",
          "criteria": [
            "目标问答与地图产出一致",
            "保密与分工清楚",
            "规则检查具体",
            "变化可执行"
          ],
          "source": "自编课堂应用；固定朗读文本另注来源"
        },
        {
          "id": "z_f_s2",
          "title": "Z-F-S2｜不跟范本的自主表达 · 30–45秒",
          "prompt": "Tell a colleague how you would change a game if a pupil is shy or tense. Use an example different from the swimming interview and from your first recording. Speak in your own words.",
          "hint": "检验意群、重音、语调能否用于新意思；不要求复制采访者的口音。",
          "criteria": [
            "意思与例子具体",
            "表达独立而非背范本",
            "意群重音为意思服务",
            "停顿自然且可理解"
          ],
          "source": "自编课堂应用；固定朗读文本另注来源"
        }
      ],
      "audio": [
        {
          "id": "b1-q10",
          "title": "新原音｜Part2 Q10",
          "url": "./audio/b1-q10.mp3",
          "start": 0,
          "end": 81.9
        }
      ]
    }
  }
};
export const EXAMPLES = {
  "h_w1": "参考方向：Open your books to page 18. Keep your cards secret. A, ask about the kite. B, answer. A, colour your kite. Then swap roles. 规则检查可问Who asks first? Does A show B the card? 题中还应示范目标问答；评分接受其他同样可执行的简洁英语。",
  "h_w2": "可按2分钟听辨示范、3分钟配对分层、2分钟新图抽查、1分钟一次简短记录。A先两选一再短语再完整句；B逐步遮掉句框；C换位置或新图。紧张就缩小任务并稍后复查。仅个别人的流利活动错误可先记下，任务后轻提示自修，不立即拖全班反复操练。",
  "z_w1": "B的秘密需求让A必须听回答才能记录。可1分钟示范、3分钟两轮配对、1分钟换卡加条件、1分钟新卡检查。交换后可让B不看句框，A按实际回答记录；检查Can A see B’s want card? Who ticks the answer? 接受其他有效变化。",
  "z_w2": "pairwork只说明组织形式，jigsaw还要有分散信息和整合任务；说出来不使词汇搭配目标变成发音。NOT应选B；规则普遍不清时继续做会延续误解，先示范澄清与具体检查有帮助。",
  "h_f1": "检查新规则而不是再问Who goes first即可；例如After we swap, do you choose or draw? 同时说明女方并不介意音乐或害羞，真正困扰是凌乱。",
  "z_f1": "B不知道位置，A看不到B正在画什么；交流后核对地图才有意义。可交换后去掉句框或改变记录方式，并检查新规则。听力原因是工作无法请假，不是奖品价值低。",
  "he_listen_evidence": "可选Q20区分父母、学校老师与后来的俱乐部，或Q22区分已习惯错过聚会与真正难受的失去朋友。先按原答解释，提交后再比较，不能用答案字母替代依据。",
  "zuo_listen_evidence": "可选Q20区分父母、学校老师与后来的俱乐部，或Q22区分已习惯错过聚会与真正难受的失去朋友。先按原答解释，提交后再比较，不能用答案字母替代依据。"
};
export const GUIDED = {
  "he": {
    "title": "何静｜15分钟反馈后跟练",
    "blocks": [
      {
        "title": "3分钟｜把检查变成一个真实动作",
        "text": "先核对首次原答。对照：Open your books to page 18. Keep your card secret. A, ask. B, answer. A, colour the kite. Then swap. 不用把每句都加please；动作完整更重要。示范后问Who asks first? Does A show the card? 留出回答空间，再让一组先做一次。"
      },
      {
        "title": "4分钟｜支持后再撤掉一点",
        "text": "能指不能说：先两选一，再给短句开头，再遮住开头换图。能带框说：逐步撤框。能独立说：换图或换位置。若明显紧张，缩短任务、允许指认恢复，再约定稍后一次复查。不要以不断重拍当作学会。"
      },
      {
        "title": "3分钟｜改正自己的原话",
        "text": "从首次录音或书写挑两句，写原句→改句→具体查懂问题。再写一个条件：只有一个人错，和大多数人规则不清时，你的纠错时机怎样改变？"
      }
    ],
    "prompt": "写出两组“原句→改句”，各配一个具体规则问题与预期回答；补上不同纠错条件。然后用改好的语言录一段：示范、查懂、改一个条件、再查懂。",
    "check": [
      "动作动词与角色完整",
      "检查的是规则而不是泛问懂没懂",
      "孩子尝试后再逐步撤支持"
    ],
    "speaking": [
      {
        "id": "gs1",
        "title": "跟练录音｜45–75秒",
        "prompt": "Redo a short classroom instruction. Model, check the rule, change one condition beyond swapping, and check again.",
        "hint": "提示后再录，不覆盖原音。",
        "criteria": [
          "示范",
          "具体检查",
          "条件变化",
          "新检查"
        ],
        "source": "自编课堂应用；固定朗读文本另注来源"
      }
    ]
  },
  "zuo": {
    "title": "左丽慧｜15分钟活动与口音感跟练",
    "blocks": [
      {
        "title": "3分钟｜对照原答，找活动证据",
        "text": "先核对TKT活动目标和任务卡。pairwork只是两人组织方式；信息分开、必须交流并合成结果才体现信息差。提供食物与问一般喜好不是同一功能。把“谁不知道什么、谁问、谁记录、怎样知道做对”各说清。"
      },
      {
        "title": "5分钟｜真人原音：听—标—跟—录",
        "text": "播放商店对话上下文段，在女生谈店员与衣服的回答中找到与原始朗读相同的两句。先听，再按意群画/、圈两处承载意思的重音、标一句语调；从中选15–30秒从中选15–30秒短循环跟读，再试跟随语流。播放器保持1.0倍。此处选剑桥声音仅作本次比较，不替你决定长期英音或美音。"
      },
      {
        "title": "4分钟｜比较同一段，再换自己的内容",
        "text": "录gs1同一段文本，和模仿前Z-S0交替试听，写两处实际听出的区别；再录gs2，用自己的教学经历说新内容，尝试保持同样的意群组织。没有听证的具体音素，不先判错；不要为了模仿而牺牲清楚。"
      }
    ],
    "prompt": "写：本次希望比较的声音特点（可写英音/美音/未决定）；原文标两处意群/重音/语调；基线与再录两处实际区别；一条游戏机制改进。随后保存两段跟练录音。",
    "check": [
      "原始朗读在听范本前已保存",
      "gs1相同文本可前后比较",
      "gs2为自己的新内容",
      "活动有信息差及可观察产出"
    ],
    "speaking": [
      {
        "id": "gs1",
        "title": "跟练gs1｜同文本再录 · 30–60秒",
        "prompt": "On my own, but the assistants were nice – telling me whether things suited me or not, and getting me to try different sizes. The coolest most fashionable stuff has already gone, but I was glad I found things I liked that didn’t cost too much.",
        "hint": "听过范本后再录；保存与Z-S0的两处差别。",
        "criteria": [
          "同文本",
          "意群",
          "重音",
          "语调"
        ],
        "source": "自编课堂应用；固定朗读文本另注来源"
      },
      {
        "id": "gs2",
        "title": "跟练gs2｜自己的内容 · 30–45秒",
        "prompt": "Tell a colleague about a classroom moment that made you change your instructions. Use your own words, not the shopping story.",
        "hint": "把意群与重音用于自己的意思，不逐字背读。",
        "criteria": [
          "新内容",
          "意群",
          "可理解度",
          "自然停顿"
        ],
        "source": "自编课堂应用；固定朗读文本另注来源"
      }
    ]
  }
};