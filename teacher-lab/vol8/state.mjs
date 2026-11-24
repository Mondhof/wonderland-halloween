import{META,VERSION,PROFILES,PACKETS,SESSION,SOURCES,REFLECT,MODES}from'./content.mjs?v=r5';
export const clone=x=>JSON.parse(JSON.stringify(x));
export const hasValue=v=>typeof v==='number'||(typeof v==='string'&&v.trim().length>0)||(Array.isArray(v)&&v.length>0);
export const norm=s=>String(s??'').toLowerCase().replace(/[’']/g,"'").replace(/[^a-z0-9' ]+/g,' ').replace(/\b(the|a|an|my|his|her|some)\b/g,' ').replace(/\s+/g,' ').trim();
export function freshTask(){return{id:crypto.randomUUID(),answers:{},audio:{},flags:{audioFailure:false,plays:{},deviceConfirmed:false,reviewExposed:false},startedAt:null,snapshot:null};}
export function freeze(task,now=new Date().toISOString(),phase='independent'){
 if(task.snapshot)throw Error('本段原答已锁定，不能覆盖。');if(!task.startedAt)throw Error('请先开始本段计时。');
 return{...clone(task),snapshot:{attemptId:task.id,answers:clone(task.answers),audio:clone(task.audio),flags:clone(task.flags),startedAt:task.startedAt,endedAt:now,elapsedSeconds:Math.max(0,Math.round((Date.parse(now)-Date.parse(task.startedAt))/1000)),stage:task.flags.reviewExposed?'owner-review-practice':phase}};
}
const scored=q=>q.type==='gap'?Array.isArray(q.accept)&&q.accept.length>0:q.answer!==undefined&&q.answer!==null;
function judge(q,value){
 if(q.type==='gap')return(q.accept||[]).map(norm).includes(norm(value));
 return Number.isInteger(value)&&value===q.answer;
}
export function evaluate(profile,mode,snapshot){
 const p=PACKETS[profile][mode],answers=snapshot.answers,failed=snapshot.flags.audioFailure===true;
 const mark=(q,listening)=>{const value=answers[q.id],unmeasured=(listening&&failed)||!hasValue(value)||!scored(q),correct=unmeasured?null:judge(q,value);return{id:q.id,label:q.label,skill:q.skill||null,value:value??null,correct,points:unmeasured?null:correct?1:0,max:1,evidence:listening&&q.evidencePrompt?(answers[q.id+'_ev']??null):undefined,fix:q.fix?(answers[q.id+'_fix']??null):undefined,explanation:q.explanation,source:q.source,reason:unmeasured?(!scored(q)?'不计分':failed&&listening?'播放故障，未测':'未答，不作能力判断'):null};};
 const agg=items=>({items,points:items.reduce((n,q)=>n+(q.points??0),0),measuredMax:items.filter(q=>q.points!==null).length,paperMax:items.length,unmeasured:items.filter(q=>q.points===null).length});
 const l=agg(p.listening.map(q=>mark(q,true))),t=agg(p.tkt.map(q=>mark(q,false)));
 const bySkill={};for(const x of t.items){if(!x.skill)continue;const s=(bySkill[x.skill]??={points:0,max:0});if(x.points!==null){s.points+=x.points;s.max++;}}
 const byPart={};for(const x of l.items){const q=p.listening.find(y=>y.id===x.id),k=q.part||'听力';const s=(byPart[k]??={points:0,max:0});if(x.points!==null){s.points+=x.points;s.max++;}}
 return{version:VERSION,listening:{...l,byPart,status:p.listening.length?(failed?'unmeasured-device':l.unmeasured?'incomplete':'measured'):'none'},concept:{...t,bySkill},openAnswerStatus:'requires-human-review',audioContentStatus:'not-automatically-scored',totalScore:null,officialLevel:null};
}
export function missing(profile,mode,t){
 const p=PACKETS[profile][mode],a=t.snapshot?.answers||t.answers||{},audio=t.snapshot?.audio||t.audio||{},flags=t.snapshot?.flags||t.flags||{},list=[];
 if(p.baseline&&!audio[p.baseline.id]&&!flags.baselineUnmeasured)list.push(p.baseline.label);
 for(const q of p.listening){if(!hasValue(a[q.id]))list.push(q.label);if(q.evidencePrompt&&!hasValue(a[q.id+'_ev']))list.push(q.label+'依据');}
 for(const q of [...(p.setup||[]),...p.tkt,...p.writing.filter(q=>!q.optional)]){if(!hasValue(a[q.id]))list.push(q.label);if(q.fix&&!hasValue(a[q.id+'_fix']))list.push(q.label+'改写');}
 for(const q of p.checks||[]){if(!hasValue(a[q.id]))list.push(q.label);else if(q.noteWhen!==undefined&&a[q.id]===q.noteWhen&&!hasValue(a[q.id+'_note']))list.push(q.label+'说明');}
 for(const q of p.speaking){const c=audio[q.id];if(!c)list.push(q.label);else if(q.minSec&&c.duration<q.minSec)list.push(q.label+'不到'+q.minSec+'秒');}
 return list;
}
export function completion(profile,record){
 const list=[];
 for(const[mode,name]of MODES){const t=record.tasks[mode]||{};if(!t.startedAt){list.push(name+'未开始');continue;}if(!t.snapshot)list.push(name+'未结束');list.push(...missing(profile,mode,t).map(x=>name.slice(0,1)+x));if(t.snapshot?.flags.audioFailure)list.push(name+'听力播放故障未测');if(t.snapshot?.flags.baselineUnmeasured)list.push(name+'录音未测');}
 const r=record.reflect||{};for(const q of REFLECT)if(!hasValue(r.answers?.[q.id]))list.push('反馈：'+q.label);
 return{complete:list.length===0,missing:list};
}
export function exportPackage(profile,record,clips){
 const strip=({answer,accept,explanation,...q})=>clone(q);
 const maps=Object.fromEntries(Object.entries(PACKETS[profile]).map(([mode,p])=>[mode,{audio:clone(p.audio||[]),baseline:p.baseline?clone(p.baseline):null,setup:clone(p.setup||[]),checks:clone(p.checks||[]),questions:[...p.listening,...p.tkt,...p.writing,...p.speaking].map(strip)}]));
 return{format:META.format,schemaVersion:1,assessmentEdition:META.vol,version:VERSION,localReview:false,teacher:{name:PROFILES[profile].name,branch:profile},sessionPlan:clone(SESSION),sources:clone(SOURCES),questionMap:maps,reflectQuestions:clone(REFLECT),exportedAt:new Date().toISOString(),timerSource:'device-wall-clock-not-active-time',...clone(record),completion:completion(profile,record),clips,totalScore:null,officialLevel:null,notice:META.exportNotice};
}
