'use strict';
window.WL_BRAND=(()=>{
 const name='温德兰素质成长中心';
 const slogans=[
 ['Keep learning. Keep opening doors.','你多学会一点，孩子就多一种可能。','本周小行动：把一条课堂指令练清楚，再带进真实课堂。'],
 ['Small practice. Real progress.','进步，藏在一次次认真练习里。','本周小行动：回听一段自己的录音，只改进一个地方。'],
 ['Clarity is a gift to every learner.','讲清楚，是送给孩子的一份礼物。','本周小行动：把一段说明拆成三个短句，并做一次示范。'],
 ['Listen closely. Teach thoughtfully.','听见孩子的反应，才能找到下一步。','本周小行动：多留一次等待，记录孩子真实说出的话。'],
 ['Confidence grows through practice.','自信，是练出来的熟悉感。','本周小行动：先独立说一遍，再听反馈，最后重新说一遍。'],
 ['One better question can change a lesson.','一个问得更好的问题，就能改变课堂。','本周小行动：把“懂了吗”换成一个能看见理解的提问。'],
 ['Make room for every voice.','让每个孩子，都有开口的机会。','本周小行动：设计一个两人轮流说的任务，给安静的孩子留出位置。'],
 ['Learn it. Try it. Make it yours.','学到的方法，要在自己的课堂里生根。','本周小行动：选一个方法，用PU0或PU1的新情境再试一次。'],
 ['Feedback points the way forward.','看见不足，也是在看见方向。','本周小行动：给自己写一句有证据的反馈和一个可执行的下一步。'],
 ['A clear model makes a brave start.','示范清楚一点，孩子就敢多试一点。','本周小行动：用实物、动作或图片，示范一个完整回合。'],
 ['Teach with care. Grow with curiosity.','带着耐心教，也带着好奇心学。','本周小行动：找一个还不确定的表达，查证后用自己的话说出来。'],
 ['Progress is something we practise.','成长不必很快，但可以很具体。','本周小行动：对比两次录音，记下一处确实变清楚的表达。']
 ];
 function weekInfo(now=new Date(Date.now())){
  const x=new Date(now.getTime()+8*3600000);x.setUTCHours(0,0,0,0);x.setUTCDate(x.getUTCDate()-(x.getUTCDay()+6)%7);
  const start=x.toISOString().slice(0,10), end=new Date(x.getTime()+6*86400000).toISOString().slice(0,10);
  const n=Math.floor((x.getTime()-Date.UTC(2026,9,19))/604800000);const index=((n%slogans.length)+slogans.length)%slogans.length;
  return {start,end,index,english:slogans[index][0],chinese:slogans[index][1],action:slogans[index][2]};
 }
 const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function weekly(place='home'){const s=weekInfo();return `<section class="weekly-encouragement ${place}" aria-label="本周鼓励"><div class="weekly-heading"><span>温迪陪你一起成长 · 第2周研习</span><small data-week-range>${s.start} — ${s.end}</small></div><p class="weekly-en" data-week-english lang="en">${esc(s.english)}</p><p class="weekly-cn" data-week-chinese>${esc(s.chinese)}</p><p class="weekly-action" data-week-action>${esc(s.action)}</p></section>`;}
 function wordmark(){return `<div class="brand">${name}<span>教师研习台 · 试用版</span></div>`;}
 function lion(cls=''){return `<img class="wendy-lion ${cls}" src="./assets/wendy-lion.webp" alt="温迪小狮，戴圆眼镜、穿蓝色马甲的温德兰小狮子" width="402" height="720" decoding="async">`;}
 function refresh(){const s=weekInfo();for(const [sel,key] of [['[data-week-english]','english'],['[data-week-chinese]','chinese'],['[data-week-action]','action']])document.querySelectorAll(sel).forEach(el=>{if(el.textContent!==s[key])el.textContent=s[key];});document.querySelectorAll('[data-week-range]').forEach(el=>el.textContent=s.start+' — '+s.end);}
 setInterval(refresh,60000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh();});
 return {name,weekInfo,weekly,wordmark,lion,refresh,cycleWeeks:slogans.length};
})();
