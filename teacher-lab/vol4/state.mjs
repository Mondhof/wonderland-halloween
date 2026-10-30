import{VERSION,PROFILES,PACKETS,GUIDED,SESSION,SOURCES,REFLECT}from'./content.mjs?v=vol4r1';
export const clone=x=>JSON.parse(JSON.stringify(x));
export const hasValue=v=>typeof v==='number'||(typeof v==='string'&&v.trim().length>0);
export function freshTask(){return{id:crypto.randomUUID(),answers:{},audio:{},flags:{audioFailure:false,plays:{},deviceConfirmed:false,reviewExposed:false},startedAt:null,snapshot:null};}
export function freeze(task,now=new Date().toISOString(),phase='initial-independent'){
 if(task.snapshot)throw Error('本阶段原答已锁定，不能覆盖。');if(!task.startedAt)throw Error('请先开始本次计时。');
 return{...clone(task),snapshot:{attemptId:task.id,answers:clone(task.answers),audio:clone(task.audio),flags:clone(task.flags),startedAt:task.startedAt,endedAt:now,elapsedSeconds:Math.max(0,Math.round((Date.parse(now)-Date.parse(task.startedAt))/1000)),stage:task.flags.reviewExposed?'owner-review-practice':phase}};
}
export function evaluate(profile,mode,snapshot){
 const p=PACKETS[profile][mode],answers=snapshot.answers,failed=snapshot.flags.audioFailure===true;
 const mark=(q,listening)=>{const value=answers[q.id],unmeasured=(listening&&failed)||!hasValue(value),correct=unmeasured?null:Number.isInteger(value)&&value===q.answer;return{id:q.id,value:value??null,correct,points:unmeasured?null:correct?1:0,max:1,evidence:listening?(answers[q.id+'_ev']??null):undefined,explanation:q.explanation,source:q.source,domain:q.domain,reason:unmeasured?(failed&&listening?'播放故障，未测':'未答，不作能力判断'):null};};
 const agg=items=>({items,points:items.reduce((n,q)=>n+(q.points??0),0),measuredMax:items.filter(q=>q.points!==null).length,paperMax:items.length,unmeasured:items.filter(q=>q.points===null).length});
 const l=agg(p.listening.map(q=>mark(q,true))),t=agg(p.tkt.map(q=>mark(q,false)));
 return{version:VERSION,listening:{...l,status:failed?'unmeasured-device':l.unmeasured?'incomplete':'measured'},concept:t,openAnswerStatus:'requires-human-review',audioContentStatus:'not-automatically-scored',totalScore:null,officialLevel:null};
}
export function missing(profile,mode,t){
 const p=PACKETS[profile][mode],a=t.snapshot?.answers||t.answers||{},audio=t.snapshot?.audio||t.audio||{},flags=t.snapshot?.flags||t.flags||{},list=[];
 for(const q of p.listening){if(!hasValue(a[q.id]))list.push(q.label);if(!hasValue(a[q.id+'_ev']))list.push(q.label+'依据');}
 for(const q of [...p.tkt,...(p.setup||[]),...p.writing])if(!hasValue(a[q.id]))list.push(q.label);
 if(p.baseline&&!audio[p.baseline.id]&&!flags.baselineUnmeasured)list.push(p.baseline.label);
 for(const q of p.speaking)if(!audio[q.id])list.push(q.label);
 return list;
}
export function completion(profile,record){
 const list=[],names={wed:'① 首次独立',fri:'③ 换情境再做'};
 for(const mode of ['wed','fri']){const t=record.tasks[mode]||{};if(!t.startedAt){list.push(names[mode]+'未开始');continue;}if(!t.snapshot)list.push(names[mode]+'未结束');list.push(...missing(profile,mode,t).map(x=>(mode==='fri'?'③':'①')+x));if(t.snapshot?.flags.audioFailure)list.push(names[mode]+'听力播放故障未测');if(t.snapshot?.flags.baselineUnmeasured)list.push('开口基线未测');}
 const g=record.guided||{};if(!g.savedAt)list.push('② 跟练未保存');if(!hasValue(g.answers?.text))list.push('②跟练文字');for(const q of GUIDED[profile].speaking)if(!g.audio?.[q.id])list.push('②'+q.title.split('｜')[0]);
 const r=record.reflect||{};for(const q of REFLECT)if(!hasValue(r.answers?.[q.id]))list.push('④反馈：'+q.label);
 return{complete:list.length===0,missing:list};
}
export function exportPackage(profile,record,clips){
 const strip=({answer,explanation,...q})=>clone(q);
 const maps=Object.fromEntries(Object.entries(PACKETS[profile]).map(([mode,p])=>[mode,{audio:clone(p.audio),baseline:p.baseline?clone(p.baseline):null,setup:clone(p.setup||[]),questions:[...p.listening,...p.tkt,...p.writing,...p.speaking].map(strip)}]));
 return{format:'wonderland-teacher-vol4-response',schemaVersion:1,assessmentEdition:'Vol.4',version:VERSION,localReview:false,teacher:{name:PROFILES[profile].name,branch:profile},sessionPlan:clone(SESSION),sources:clone(SOURCES),questionMap:maps,guidedQuestionMap:clone(GUIDED[profile].speaking),reflectQuestions:clone(REFLECT),exportedAt:new Date().toISOString(),timerSource:'device-wall-clock-not-active-time',...clone(record),completion:completion(profile,record),clips,totalScore:null,officialLevel:null,notice:'答卷保存在当前浏览器，不自动上传。首次独立、跟练、换情境分开记录；缺项标未完成。录音由人工复核，不据此换算官方等级。'};
}
