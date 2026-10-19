/* ================= 初期データ ================= */
const PHASES=[
 {id:'p1',name:'テスト品を手に入れる',sub:'発注・色塗り'},
 {id:'p2',name:'特許申請',sub:'調べる・申請'},
 {id:'p3',name:'販売方法を考える',sub:'サイト・在庫・発送・注文'},
 {id:'p4',name:'値段設定',sub:'いくらで売るか'},
 {id:'p5',name:'パンフレット作成',sub:'収集・撮影・デザイン'},
 {id:'p6',name:'原本1,000個を発注',sub:'2色 各500個'},
 {id:'p7',name:'病院でお試し(100個)',sub:'依頼・発送・フィードバック'},
 {id:'p8',name:'販売',sub:'誰に売るか'},
 {id:'p9',name:'IPを調べる',sub:'知的財産の確認'}
];
const F={from:'m-1005',fromLabel:'10/5 打ち合わせ'};
const DEFAULT=[
 {id:'t1',p:'p1',text:'製作会社を決める(株式会社ワイテック)',done:true,src:'given'},
 {id:'t2',p:'p1',text:'素材を確認する(以前はポリカ/PCの話、4/27付の見積書はPP・マット白)',src:'given'},
 {id:'w1',p:'p1',text:'ワイテックに「溝なし」の仕様を伝える',src:'given',...F},
 {id:'t12',p:'p1',text:'色付きのテスト品を作ってもらえるかワイテックに確認する(難しければ3Dプリンタ試作品に上から塗装)',src:'given',...F},
 {id:'n1',p:'p1',text:'テスト品を発注する(アイボリーとブルーっぽい2色・カラー・溝なし)',src:'given',...F},
 {id:'n2',p:'p2',text:'特許を調べる(先行特許・類似品の確認)',src:'given'},
 {id:'n3',p:'p2',text:'弁理士など専門家に相談する',src:'prop'},
 {id:'n4',p:'p2',text:'特許を申請する',src:'given'},
 {id:'n5',p:'p3',text:'サイトを作るか検討して決める',src:'given'},
 {id:'n6',p:'p3',text:'商品の在庫管理の方法を決める',src:'given'},
 {id:'n7',p:'p3',text:'在庫を置く場所を決める',src:'given'},
 {id:'n8',p:'p3',text:'発送方法を決める',src:'given'},
 {id:'n9',p:'p3',text:'注文の取り方を決める',src:'given'},
 {id:'n10',p:'p4',text:'いくらで売るかを決める(見積もり単価・送料・在庫の費用も踏まえる)',src:'given'},
 {id:'n11',p:'p5',text:'医療系のパンフレットを集める',src:'given'},
 {id:'c2',p:'p5',text:'パンフレットの構成(表面・見開き・裏面)を確定する(10/5のメモが叩き台)',src:'given',...F},
 {id:'n14',p:'p5',text:'AIでパンフレット用のイメージ画像を作ってみる',src:'given',...F},
 {id:'n12',p:'p5',text:'写真を撮る(実際に使われている様子・本体・小児科病棟など)。病院に撮影をお願いする',src:'given',...F},
 {id:'n13',p:'p5',text:'デザイナーさんにも入ってもらい、パンフレットのデザインを考える',src:'given',...F},
 {id:'c4',p:'p5',text:'文言を考える(なぜ作ったか・衛生面の内容・商品名など)',src:'given',...F},
 {id:'t3',p:'p6',text:'最低ロット(1,000個)の条件を確認する',done:true,src:'given'},
 {id:'t6',p:'p6',text:'見積もりを依頼する',done:true,src:'given'},
 {id:'t7',p:'p6',text:'見積書を受け取る(4/27付・税込2,860,000円)',done:true,src:'given'},
 {id:'q1',p:'p6',text:'値段をあらためて見積もってもらう(2色・溝なし・条件変更。4/27付は有効期限切れ)',wait:true,src:'given',...F},
 {id:'t8',p:'p6',text:'2色(各500個)の場合の単価を確認する(見積書に720円/個と記載)',done:true,src:'given'},
 {id:'q2',p:'p6',text:'2色の場合に、版代・金型が増えるかを確認する(版代は1種類ごと)',src:'prop'},
 {id:'t9',p:'p6',text:'色分けで単価が極端に変わらないか確認する(650円→720円で約1.1倍)',done:true,src:'given'},
 {id:'t10',p:'p6',text:'支払条件と納期(受注後約2.5ヶ月)を確認し、スケジュールに合わせる',src:'prop'},
 {id:'n15',p:'p6',text:'原本1,000個を発注する(アイボリー・ブルー系 各500個)',src:'given'},
 {id:'n16',p:'p7',text:'お試しで使ってくれる病院を調べる',src:'given'},
 {id:'n17',p:'p7',text:'病院に依頼する',src:'given'},
 {id:'n18',p:'p7',text:'100個ほどを無料で使ってもらうため発送する',src:'given'},
 {id:'n19',p:'p7',text:'フィードバックをもらう',src:'given'},
 {id:'n20',p:'p7',text:'フィードバックをもとに改善する',src:'given'},
 {id:'n21',p:'p8',text:'誰に売るか(ターゲット)を決める',src:'given'},
 {id:'n22',p:'p8',text:'販売を開始する',src:'prop'},
 {id:'n23',p:'p9',text:'IP(知的財産。IP付きの商品・写真に使う分も含む)を調べる',src:'given'}
];
const DUE={t1:'2026-10-31',t2:'2026-10-31',n1:'2026-10-31',t12:'2026-10-31',n2:'2026-10-31',n3:'2026-10-31',n4:'2026-10-31',
 n5:'2026-11-30',n6:'2026-11-30',n7:'2026-11-30',n8:'2026-11-30',n9:'2026-11-30',n10:'2026-11-30',n12:'2026-11-30',
 n13:'2026-12-31',n14:'2026-12-31',t7:'2026-12-31',t8:'2026-12-31',t9:'2026-12-31',t10:'2026-12-31',n15:'2026-12-31',
 n17:'2027-01-31',n18:'2027-01-31',n22:'2027-02-01',n23:'2027-02-28',w1:'2026-10-31',q1:'2026-10-31',q2:'2026-10-31',c2:'2026-11-30',c4:'2026-12-31'};
const SCHED_DEFAULT=[
 {id:'s1',p:'p1',label:'10月中',start:'2026-10-01',end:'2026-10-31'},
 {id:'s2',p:'p2',label:'10月中',start:'2026-10-01',end:'2026-10-31'},
 {id:'s3',p:'p3',label:'10月〜11月末',start:'2026-10-01',end:'2026-11-30'},
 {id:'s4',p:'p4',label:'11月中',start:'2026-11-01',end:'2026-11-30'},
 {id:'s5a',p:'p5',label:'撮影 11月',start:'2026-11-01',end:'2026-11-30',tasks:['n11','n12']},
 {id:'s5b',p:'p5',label:'デザイン 12月まで',start:'2026-12-01',end:'2026-12-31',tasks:['n13','n14']},
 {id:'s6',p:'p6',label:'12月までに発注',start:'2026-12-31',end:'2026-12-31',kind:'deadline'},
 {id:'s7',p:'p7',label:'依頼→発送 1月',start:'2027-01-01',end:'2027-01-31'},
 {id:'s8',p:'p8',label:'販売開始 2月',start:'2027-02-01',end:'2027-02-28'},
 {id:'s9',p:'p9',label:'2月まで細々と',start:'2026-10-01',end:'2027-02-28',soft:true}
];
const POLICY=[
 {id:'o1',t:'製作会社',v:'株式会社ワイテック(担当: 吉澤さん)',s:'決定済み'},
 {id:'o8',t:'商品',v:'ナースコールホルダ',s:'決定済み'},
 {id:'o2',t:'最低ロット',v:'1,000個(原本は1,000個を発注する予定)',s:'決定済み'},
 {id:'o3',t:'素材',v:'4/27付の見積書はPP(ポリプロピレン)・マット白。以前の話はポリカ(PC)だったため確認が必要',s:'確認中'},
 {id:'o9',t:'形状',v:'溝はなし(ワイテックに連絡する)',s:'決定済み'},
 {id:'o5',t:'色',v:'アイボリーとブルーっぽい2色(各500個)。カラーで作る',s:'確認中'},
 {id:'o4',t:'テスト品',v:'カラーで作ってもらえないか確認中(難しければ3Dプリンタ試作品に上から塗装)',s:'確認中'},
 {id:'o6',t:'見積もり',v:'4/27付: 税込2,860,000円(1色1,000個)。有効期限切れ・条件変更のため、値段をあらためて確認中',s:'確認中'},
 {id:'o7',t:'病院でのお試し',v:'100個ほどを無料で病院に使ってもらい、フィードバックをもらう',s:'決定済み'},
 {id:'o10',t:'パンフレット',v:'病院のパンフレットのような雰囲気。1枚(両面)カラーを半分に折って本のように使う',s:'決定済み'}
];
const QACTUAL=[
 {id:'q1',name:'製品代(1,000個×1色)',type:'unit',price:650,alt:720,status:'回答済み',memo:'※500個×2色の場合 単価720円'},
 {id:'q2',name:'金型費',type:'lump',price:1500000,status:'回答済み',memo:'4/27付 見積No.00007187'},
 {id:'q3',name:'印刷代(2箇所)',type:'unit',price:200,status:'回答済み',memo:''},
 {id:'q4',name:'版代(1種類ごとにかかる)',type:'lump',price:100000,status:'回答済み',memo:'2色・2種類の場合に増えるか要確認'},
 {id:'q5',name:'箱詰め・梱包・検品',type:'unitx',price:150,status:'回答済み',memo:'PP袋入れ+紙箱'}
];
const QDEFAULT=QACTUAL;
const QMETA=[['見積No.','00007187'],['見積日','2026/4/27'],['件名','ナースコールホルダの量産'],['納入期限','受注後 約2.5ヶ月'],['納入場所','貴社ご指定場所'],['取引方法','貴社お取引条件にて'],['有効期限','3か月間(2026/7/27まで)'],['条件','材質 PP / 色 マット白 / 梱包 PP袋入れ+紙箱(1色・1,000個)'],['担当','吉澤 洋(ワイテック)']];
const LEAD=75;
const SEED_MEETING={id:'m-1005',date:'2026-10-05',title:'やることの整理(ワイテックへの確認・パンフレット)',who:'',ts:1759600000000,body:
`【ワイテックに確認・お願いすること】
・値段をあらためて確認する
・試作品(テスト品)を色付きで作ってもらえないか確認する
・溝をなくす

【パンフレット】
■進め方
・デザイナーさんを入れて、パンフレットのデザインを考える
・医療系のパンフレットを集める
・AIでイメージ画像を作ってみる
・写真を撮らせてもらえないか(病院に)お願いする
・文言もちゃんと考える(メモ:「あったら便利かも」「確かに会話広がるかも」)

【数量・進め方】
・1,000個作る
・100個くらいを無料で病院に使ってもらう`};
const SKEY='newbiz-planner-v1';
const baseState=()=>({title:'新規事業企画',launch:'',tasks:{},custom:[],policy:{},quotes:{qty:1000,thr:1.5,rows:QDEFAULT.map(r=>({...r}))},sup:{person:'',phone:'',mail:'',last:'',notes:''},sched:{},meetings:[],pam:{},pamMemo:'',log:[],feed:[]});
let S=baseState();
let SHARED=false, RO=false, ME=null, READY=false;
try{const raw=localStorage.getItem(SKEY);if(raw){const o=JSON.parse(raw);S={...S,...o,quotes:{...S.quotes,...(o.quotes||{})},sup:{...S.sup,...(o.sup||{})}};}}catch(e){}
function save(){ if(SHARED){scheduleFlush();return;} try{localStorage.setItem(SKEY,JSON.stringify(S))}catch(e){} }

const $=s=>document.querySelector(s);
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const chip=(c,t)=>`<span class="chip ${c}">${t}</span>`;
const todayStr=()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
const fmtTs=ts=>{const d=new Date(ts);return (d.getMonth()+1)+'/'+d.getDate()+' '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')};
const fmtD=s=>{if(!s)return '';const m=s.match(/(\d+)-(\d+)-(\d+)/);return m?((+m[1]!==new Date().getFullYear()?m[1]+'/':'')+(+m[2])+'/'+(+m[3])):s};
const yen=n=>(n===''||n==null||isNaN(n))?'—':'¥'+Math.round(n).toLocaleString('ja-JP');
function note(text){const ts=Date.now();S.feed.unshift({id:'f'+ts+Math.random().toString(36).slice(2,6),ts,text,by:ME||undefined});S.feed=S.feed.slice(0,60);save();}
const NAMES={};
const actor=f=>(SHARED&&f.by)?((NAMES[f.by]||(f.by===ME?'あなた':'メンバー'))+': '):'';
function tasks(){
  const all=DEFAULT.concat(S.custom.map(c=>({...c,src:'mine'})));
  return all.map(d=>{const s=S.tasks[d.id]||{};return {...d,done:s.done!==undefined?s.done:!!d.done,wait:s.wait!==undefined?s.wait:!!d.wait,due:s.due!==undefined?s.due:(DUE[d.id]||''),memo:s.memo||''}});
}
function stat(){
  const all=tasks(), done=all.filter(t=>t.done).length;
  const ph=PHASES.map(p=>{const ts=all.filter(t=>t.p===p.id);const d=ts.filter(t=>t.done).length;return {...p,total:ts.length,done:d,pct:ts.length?Math.round(d/ts.length*100):0,complete:ts.length>0&&d===ts.length};});
  const cur=ph.find(p=>!p.complete)||ph[ph.length-1];
  ph.forEach(p=>p.state=p.complete?'done':(p===cur?'cur':'todo'));
  const next=all.filter(t=>!t.done).sort((a,b)=>PHASES.findIndex(x=>x.id===a.p)-PHASES.findIndex(x=>x.id===b.p))[0];
  return {all,done,total:all.length,pct:all.length?Math.round(done/all.length*100):0,ph,cur,next,allDone:done===all.length};
}
const phName=id=>PHASES.find(p=>p.id===id).name;

function renderHeader(){
  const st=stat();
  $('#titleIn').value=S.title;
  const last=S.feed[0];
  const days=S.launch?Math.ceil((new Date(S.launch+'T00:00:00')-new Date(todayStr()+'T00:00:00'))/86400000):null;
  $('#hstat').innerHTML=`
   <div class="hbox"><small>全体の進み具合</small><b class="big">${st.pct}%</b><div class="pbar" role="img" aria-label="進捗${st.pct}%"><i style="width:${st.pct}%"></i></div><small style="margin-top:4px">${st.done} / ${st.total} 件のタスクが完了${days!==null?` ・ 目標日まであと${days>=0?days+'日':'(期限超過 '+(-days)+'日)'}`:''}</small></div>
   <div class="hbox"><small>いまの段階 / 次にやること</small><b>${esc(st.cur.name)}(${st.cur.done}/${st.cur.total})</b>${st.next?`<b style="font-weight:500"><button class="linkbtn" data-go="todo" data-id="${st.next.id}">▶ ${esc(st.next.text)}</button></b>`:'<b style="font-weight:500">すべて完了しました 🎉</b>'}</div>
   <div class="hbox"><small>最新の更新</small>${last?`<b style="font-weight:500">${esc(actor(last)+last.text)}</b><small>${fmtTs(last.ts)}</small>`:'<b style="font-weight:500">まだ更新はありません。</b>'}</div>`;
  $('#mini').innerHTML=`<div class="m-bar"><i style="width:${st.pct}%"></i></div><b>${st.pct}%</b><span class="nx">次: ${st.next?esc(st.next.text):'完了'}</span>`;
}

function renderOverview(){
  const st=stat();
  const flow=st.ph.map((p,i)=>`<div class="step ${p.state}"><div><b>${i+1}. ${esc(p.name)}</b><small>${esc(p.sub)}</small><small>期間 ${phRange(p.id)}</small><small style="margin-top:3px;color:var(--ink)">${p.state==='done'?'✓ 完了':p.state==='cur'?'▶ 進行中':'未着手'} ・ ${p.done}/${p.total}</small><div class="pb"><i style="width:${p.pct}%"></i></div></div></div>`).join('');
  const pol=POLICY.map(o=>{const s=S.policy[o.id]||o.s;const c=s==='決定済み'?'ok':s==='確認中'?'hold':'info';const ic=s==='決定済み'?'● ':s==='確認中'?'◐ ':'○ ';
    return `<div class="pol"><button class="chip ${c}" style="border:0;cursor:pointer" data-act="pol" data-id="${o.id}">${ic}${s}</button><div><b>${esc(o.t)}</b><div>${esc(o.v)}</div></div></div>`}).join('');
  const nexts=st.all.filter(t=>!t.done).sort((a,b)=>PHASES.findIndex(x=>x.id===a.p)-PHASES.findIndex(x=>x.id===b.p)).slice(0,6);
  const nx=nexts.map(t=>`<div class="todo" style="grid-template-columns:auto 1fr;padding:8px 0"><input type="checkbox" data-act="toggle" data-id="${t.id}"><div><div class="tt">${esc(t.text)}</div><div class="meta">${chip('plain',esc(phName(t.p)))}${t.wait?chip('hold','先方の回答待ち'):''}${t.due?chip(t.due<todayStr()?'bad':'plain','期限 '+fmtD(t.due)):''}</div>${t.memo?`<div class="memo-snip">${esc(t.memo)}</div>`:''}</div></div>`).join('');
  const feed=S.feed.slice(0,8).map(f=>`<li><time>${fmtTs(f.ts)}</time>${esc(actor(f)+f.text)}</li>`).join('');
  $('#panel-ov').innerHTML=`
   <h2>全体の流れ</h2><div class="flow">${flow}</div>
   <div class="cols"><div class="card"><div class="row" style="justify-content:space-between;margin-bottom:6px"><h3 style="margin:0">現状の方針</h3></div>${pol}</div>
    <div class="stack"><div class="card"><h3>ゴール(目標の発売日)</h3><div class="row"><input type="date" class="fld" style="max-width:200px" data-f="launch" value="${esc(S.launch)}"></div></div>
     <div class="card"><div class="row" style="justify-content:space-between"><h3 style="margin:0 0 8px">これからのタスク</h3><button class="btn sm" data-go="todo">すべて見る</button></div>${nx||'<div class="sub">すべて完了しました。</div>'}</div>
     ${recentMeetings()}
     <div class="card"><h3>最新の更新</h3>${feed?`<ul class="feed">${feed}</ul>`:'<div class="sub">まだ更新はありません。</div>'}</div>
    </div></div>`;
}

function renderTodo(){
  const st=stat();
  const sec=st.ph.map(p=>{
    const ts=st.all.filter(t=>t.p===p.id);
    return `<div class="card" id="tp-${p.id}"><div class="ph-h"><h3>${esc(p.name)}</h3>${chip(p.state==='done'?'ok':p.state==='cur'?'acc':'plain',p.state==='done'?'✓ 完了':p.state==='cur'?'▶ 進行中':'未着手')}<span class="sub">${p.done}/${p.total}</span></div>
    ${ts.map(t=>`<div class="todo ${t.done?'done':''}" id="td-${t.id}"><input type="checkbox" data-act="toggle" data-id="${t.id}" ${t.done?'checked':''}>
      <div><div class="tt">${esc(t.text)}</div>
      <div class="meta">${t.wait&&!t.done?chip('hold','◐ 先方の回答待ち'):''}${t.src==='prop'?chip('plain','提案'):t.src==='mine'?chip('info','追加'):''}${t.fromLabel?`<button class="chip plain" style="cursor:pointer" data-go="mt" data-id="mt-${esc(t.from)}">🗒 ${esc(t.fromLabel)}</button>`:''}
        <label class="sub">期限 <input type="date" class="dinp" data-f="due:${t.id}" value="${esc(t.due)}"></label>
        ${t.src==='mine'?`<button class="btn sm" data-act="del" data-id="${t.id}">削除</button>`:''}</div>
      <details ${t.memo?'open':''}><summary>メモ${t.memo?'(あり)':'を書く'}</summary>
        <textarea class="fld" data-f="memo:${t.id}">${esc(t.memo)}</textarea>
        <label class="sub" style="display:flex;gap:6px;align-items:center;margin-top:4px"><input type="checkbox" data-f="wait:${t.id}" ${t.wait?'checked':''}> 先方の回答待ちにする</label>
      </details></div></div>`).join('')}</div>`;}).join('');
  $('#panel-todo').innerHTML=`<h2>ToDoチェックリスト</h2>
   <div class="card" style="margin-bottom:16px"><h3>ToDoを追加</h3><div class="addrow4"><select class="fld" id="addPh">${PHASES.map(p=>`<option value="${p.id}" ${p.id===st.cur.id?'selected':''}>${esc(p.name)}</option>`).join('')}</select><input type="text" class="fld" id="addTx" data-enter="add" placeholder="やること(Enterで追加)"><input type="date" class="fld" id="addDue"><button class="btn pri" data-act="add">追加</button></div></div>
   <div class="stack">${sec}</div>`;
}

function renderTimeline(){
  const st=stat();
  const html=st.ph.map((p,i)=>{
    const ts=st.all.filter(t=>t.p===p.id);
    const nowId=p.state==='cur'?(ts.find(t=>!t.done)||{}).id:null;
    return `<li class="tph ${p.state==='done'?'donep':p.state==='cur'?'curp':''}"><span class="dot">${p.state==='done'?'✓':i+1}</span>
     <header><b>${esc(p.name)}</b>${chip(p.state==='done'?'ok':p.state==='cur'?'acc':'plain',p.state==='done'?'✓ 完了':p.state==='cur'?'▶ 進行中':'未着手')}<span class="sub">${p.done}/${p.total}(${p.pct}%)</span></header>
     <ul class="tn">${ts.map(t=>`<li class="tnode ${t.done?'done':''} ${t.id===nowId?'now':''}" id="tn-${t.id}"><button class="ck" data-act="toggle" data-id="${t.id}">${t.done?'✓':''}</button>
      <div><div class="tt">${esc(t.text)}</div><div class="meta">${t.id===nowId?chip('acc','▶ いまここ'):''}${t.wait&&!t.done?chip('hold','◐ 先方の回答待ち'):''}${t.due?chip(!t.done&&t.due<todayStr()?'bad':'plain','期限 '+fmtD(t.due)):''}</div>
      ${t.memo?`<div class="memo-snip">${esc(t.memo)}</div>`:''}</div></li>`).join('')}</ul></li>`;
  }).join('');
  $('#panel-tl').innerHTML=`<h2>タイムライン</h2><ol class="tl">${html}</ol>`;
}

function quoteCalc(){
  const q=S.quotes, qty=+q.qty||0;
  let sub=[],total=0,unitSum=0,alt=0,hasAlt=false;
  q.rows.forEach(r=>{const p=r.price===''?NaN:+r.price;let v=NaN;
    if(!isNaN(p)){v=r.type==='lump'?p:p*qty;total+=v;if(r.type==='unit')unitSum+=p;
      if(r.type!=='lump'&&r.alt!==undefined&&r.alt!==''&&!isNaN(+r.alt)){alt+=(+r.alt-p)*qty;hasAlt=true;}}
    sub.push(v);});
  const bi=q.rows.findIndex(r=>r.type==='unit'&&r.price!==''&&+r.price>0);
  const base=bi>=0?+q.rows[bi].price:NaN;
  const ratio=!isNaN(base)?unitSum/base:NaN;
  const per=(qty>0&&total>0)?total/qty:NaN;
  return {sub,total,unitSum,per,ratio,qty,alt,hasAlt};
}
function renderSupplier(){
  const q=S.quotes, expired=todayStr()>'2026-07-27';
  const rows=q.rows.map((r,i)=>`<tr data-row="${r.id}"><td><input class="fld" data-f="q:${r.id}:name" value="${esc(r.name)}"></td>
   <td><select class="fld" data-f="q:${r.id}:type"><option value="unit" ${r.type==='unit'?'selected':''}>1個あたり</option><option value="unitx" ${r.type==='unitx'?'selected':''}>1個あたり(倍率外)</option><option value="lump" ${r.type==='lump'?'selected':''}>一式</option></select></td>
   <td><input class="fld num" type="number" min="0" step="any" inputmode="decimal" data-f="q:${r.id}:price" value="${esc(r.price)}"></td>
   <td><input class="fld num" type="number" min="0" step="any" inputmode="decimal" data-f="q:${r.id}:alt" value="${esc(r.alt===undefined?'':r.alt)}"></td>
   <td class="num" id="qs-${r.id}">—</td>
   <td><select class="fld" data-f="q:${r.id}:status">${['未依頼','依頼中','回答済み','確定'].map(x=>`<option ${r.status===x?'selected':''}>${x}</option>`).join('')}</select></td>
   <td><input class="fld" data-f="q:${r.id}:memo" value="${esc(r.memo)}"></td>
   <td><button class="btn sm" data-act="qdel" data-id="${r.id}">×</button></td></tr>`).join('');
  const log=S.log.map(l=>`<div class="logrow"><span class="sub">${esc(fmtD(l.date))}</span><span style="white-space:pre-wrap">${esc(l.text)}</span></div>`).join('');
  $('#panel-sup').innerHTML=`<h2>取引先の詳細と見積もり</h2>
  <div class="cols"><div class="card"><h3>株式会社ワイテック(製作会社)</h3>
    <dl class="kv"><dt>商品</dt><dd>ナースコールホルダ</dd><dt>最低ロット</dt><dd>1,000個</dd><dt>素材</dt><dd>PP(見積書)</dd></dl></div>
   <div class="card"><h3>連絡先・メモ</h3><div class="fg">
     <div><label class="l" for="s1">担当者</label><input id="s1" class="fld" data-f="sup:person" value="${esc(S.sup.person)}"></div>
     <div><label class="l" for="s2">電話</label><input id="s2" class="fld" data-f="sup:phone" value="${esc(S.sup.phone)}"></div>
     <div><label class="l" for="s3">メール</label><input id="s3" class="fld" data-f="sup:mail" value="${esc(S.sup.mail)}"></div>
     <div><label class="l" for="s4">最終連絡日</label><input id="s4" type="date" class="fld" data-f="sup:last" value="${esc(S.sup.last)}"></div></div>
     <label class="l" for="s5" style="margin-top:10px">取引先メモ</label><textarea id="s5" class="fld" data-f="sup:notes">${esc(S.sup.notes)}</textarea></div></div>
  <div class="card" style="margin-top:16px"><div class="row" style="justify-content:space-between"><h3 style="margin:0">見積書(ワイテック)</h3>${expired?chip('bad','▲ 有効期限切れ(7/27まで)'):chip('ok','有効期限内')}</div></div>
  <div class="card" style="margin-top:16px"><div class="row" style="justify-content:space-between"><h3 style="margin:0">見積もり明細</h3>
    <div class="row"><label class="sub">発注数量 <input type="number" min="1" class="fld" style="width:100px;display:inline-block" data-f="qty" value="${esc(q.qty)}"></label></div></div>
   <div class="tw"><table><thead><tr><th>項目</th><th>種類</th><th>金額(円)</th><th>別条件の単価</th><th class="num">小計</th><th>状態</th><th>メモ</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>
   <button class="btn sm" data-act="qadd" style="margin-top:8px">+ 行を追加</button>
   <div class="sumbox" id="qsum"></div><div id="qalt" class="sub" style="margin-top:10px"></div></div>
  <div class="card" style="margin-top:16px"><h3>やり取りの記録</h3>
   <div class="addrow" style="grid-template-columns:150px 1fr auto"><input type="date" class="fld" id="lgD" value="${todayStr()}"><input class="fld" id="lgT" placeholder="例: 色分けについて回答あり"><button class="btn pri" data-act="logadd">記録</button></div>
   <div style="margin-top:10px">${log||'<div class="sub">まだ記録はありません。</div>'}</div></div>`;
  recalcQuote();
}
function recalcQuote(){
  const c=quoteCalc(), q=S.quotes;
  q.rows.forEach((r,i)=>{const el=document.getElementById('qs-'+r.id);if(el)el.textContent=yen(c.sub[i]);});
  const box=$('#qsum'); if(!box) return;
  box.innerHTML=`<div class="sbx"><small>合計(税抜)</small><b>${yen(c.total||NaN)}</b></div>
   <div class="sbx"><small>合計(税込10%)</small><b>${yen(c.total?c.total*1.1:NaN)}</b></div>
   <div class="sbx"><small>1個あたりの実質コスト(税抜)</small><b>${yen(c.per)}</b></div>`;
}

const addD=(x,n)=>{const d=new Date(x+'T00:00:00');d.setDate(d.getDate()+n);return ymd(d)};
const segs=()=>{const base=SCHED_DEFAULT.map(x=>({...x,...((S.sched&&S.sched[x.id])||{})}));
  const o=base.find(x=>x.id==='s6'); if(o&&o.end) base.push({id:'s6L',p:'p6',label:'製造・納品 約2.5ヶ月(見積書)',start:addD(o.end,1),end:addD(o.end,LEAD),lead:true,tasks:[]});
  return base;};
const D0=x=>new Date(x+'T00:00:00');
const ymd=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
function phRange(pid){
  const g=segs().filter(x=>x.p===pid&&x.start&&x.end); if(!g.length) return '未設定';
  const a=g.reduce((m,x)=>x.start<m?x.start:m,'9999'), b=g.reduce((m,x)=>x.end>m?x.end:m,'0000');
  return g.every(x=>x.kind==='deadline')?'〜'+fmtD(b):(a===b?fmtD(a):fmtD(a)+'〜'+fmtD(b));
}
function renderGantt(){
  const st=stat(), sg=segs().filter(x=>x.start&&x.end), tdy=todayStr();
  const mn=sg.reduce((m,x)=>x.start<m?x.start:m,'9999-12-31'), mx=sg.reduce((m,x)=>x.end>m?x.end:m,'0000-01-01');
  const A=new Date(D0(mn).getFullYear(),D0(mn).getMonth(),1), Bm=D0(mx), B=new Date(Bm.getFullYear(),Bm.getMonth()+1,1);
  const days=Math.round((B-A)/86400000);
  const pos=x=>(D0(x)-A)/86400000/days*100;
  const months=[]; for(let d=new Date(A);d<B;d=new Date(d.getFullYear(),d.getMonth()+1,1)){const nx=new Date(d.getFullYear(),d.getMonth()+1,1);months.push({m:d.getMonth()+1,y:d.getFullYear(),l:(d-A)/86400000/days*100,w:(nx-d)/86400000/days*100});}
  const lines=months.map(m=>`<div class="gline" style="left:${m.l}%"></div>`).join('');
  const todayIn=tdy>=ymd(A)&&tdy<ymd(B), tl=pos(tdy)+0.5/days*100;
  const todayLine=todayIn?`<div class="gtoday" style="left:${tl}%"></div>`:'';
  const head=`<div class="grow gh"><div class="glab"></div><div class="gtrack">${months.map((m,i)=>`<div class="gmon" style="left:${m.l}\%;width:${m.w}%">${m.m}月<small>${(i===0||m.m===1)?m.y+'年':''}</small></div>`).join('')}${lines}${todayIn?`<span class="gtoday-l" style="left:${tl}%">今日</span>`:''}</div></div>`;
  const rows=st.ph.map((p,i)=>{
    const items=sg.filter(x=>x.p===p.id);
    const all=st.all;
    const bars=items.map(x=>{
      const ids=x.tasks||all.filter(t=>t.p===p.id).map(t=>t.id);
      const ts=all.filter(t=>ids.includes(t.id)); const dn=ts.filter(t=>t.done).length; const pct=ts.length?Math.round(dn/ts.length*100):0;
      const late=pct<100&&x.end<tdy, l=pos(x.start), w=(D0(x.end)-D0(x.start))/86400000+1;
      if(x.kind==='deadline'){const c=pos(x.end)+0.5/days*100;
        return `<div class="gdl ${pct===100?'done':''} ${late?'late':''}" style="left:${c}%"></div><span class="gdl-l" style="right:calc(${100-c}% + 18px)">${esc(x.label)}${late?' ▲超過':''}</span>`;}
      return `<div class="gbar ${pct===100?'done':''} ${late?'late':''} ${x.soft?'soft':''} ${x.lead?'lead':''}" style="left:${l}%;width:${w/days*100}%"><i class="gfill" style="width:${pct}%"></i><span>${esc(x.label)}${late?' ▲':''}</span></div>`;
    }).join('');
    return `<div class="grow"><div class="glab"><b>${i+1}. ${esc(p.name)}</b><span class="row" style="gap:6px">${chip(p.state==='done'?'ok':p.state==='cur'?'acc':'plain',p.state==='done'?'✓ 完了':p.state==='cur'?'▶ 進行中':'未着手')}<span class="sub">${p.done}/${p.total}</span></span></div><div class="gtrack">${lines}${todayLine}${bars}</div></div>`;
  }).join('');
  $('#gantt').innerHTML=`<div class="gt">${head}${rows}</div>`;
  const dl=st.all.filter(t=>!t.done&&t.due).sort((a,b)=>a.due.localeCompare(b.due)).slice(0,7).map(t=>{
    const n=Math.round((D0(t.due)-D0(tdy))/86400000);
    const c=n<0?chip('bad','▲ 期限超過 '+(-n)+'日'):n===0?chip('hold','今日まで'):chip(n<=14?'hold':'plain','あと'+n+'日');
    return `<div class="due-l">${c}<span>${esc(t.text)}${t.wait?' '+chip('hold','◐ 回答待ち'):''}<span class="sub" style="display:block">${esc(phName(t.p))} ・ 期限 ${fmtD(t.due)}</span></span><button class="btn sm" data-go="todo" data-id="${t.id}">ToDoへ</button></div>`;}).join('');
  
  const s6=segs().find(x=>x.id==='s6'), s7=segs().find(x=>x.id==='s7'), s8=segs().find(x=>x.id==='s8');
  if(s6&&s7&&s8){
    const arr=addD(s6.end,LEAD), bad=arr>s7.start;
    $('#leadwarn').innerHTML=`<div class="row" style="gap:8px;margin-bottom:6px">${chip(bad?'bad':'ok',bad?'▲ 納期に注意':'✓ 納期はスケジュールの範囲内')}<b>原本の納期は「受注後 約2.5ヶ月」(4/27付の見積書)</b></div>
     <div>${fmtD(s6.end)}に発注すると、納品は <b>${fmtD(arr)}ごろ</b> です。${bad?`病院お試しの発送(${fmtD(s7.start)}〜)と販売開始(${fmtD(s8.start)})より後になります。`:''}</div>`;
    $('#leadwarn').className='card '+(bad?'warnc':'');
  }
  $('#duelist').innerHTML=dl||'<div class="sub">期限つきの未完了タスクはありません。</div>';
}
function renderSchedule(){
  const sg=segs();
  const ed=sg.filter(x=>!x.lead).map(x=>{const p=PHASES.find(q=>q.id===x.p);return `<div class="seged"><span><b>${esc(p.name)}</b></span><span class="sub">${esc(x.label)}${x.kind==='deadline'?'(締切日)':''}</span><label class="sub">開始 <input type="date" class="dinp" data-f="sch:${x.id}:start" value="${esc(x.start)}"></label><label class="sub">終了 <input type="date" class="dinp" data-f="sch:${x.id}:end" value="${esc(x.end)}"></label></div>`}).join('');
  $('#panel-sch').innerHTML=`<h2>スケジュール</h2>
   <div id="leadwarn" class="card" style="margin-bottom:16px"></div>
   <div class="card" style="margin-bottom:16px"><div class="tw" style="overflow-x:auto"><div id="gantt"></div></div></div>
   <div class="cols"><div class="card"><h3>期限が近い順(未完了のタスク)</h3><div id="duelist"></div></div>
   <div class="card"><details><summary style="cursor:pointer;color:var(--accent);font-weight:700">期間を編集する</summary>${ed}</details></div></div>`;
  renderGantt();
}

let mtEdit=null, mtArm=null, mtFilter='';
function addTask(){
  const tx=$('#addTx').value.trim(); if(!tx){$('#addTx').focus();return;}
  const nid='c'+Date.now(); S.custom.push({id:nid,p:$('#addPh').value,text:tx});
  const dd=$('#addDue').value; if(dd) S.tasks[nid]={due:dd};
  note(`ToDoを追加: ${tx}`); renderAll();
}
function mtSave(){
  const title=$('#mtT').value.trim(), body=$('#mtB').value.trim();
  if(!title&&!body){$('#mtT').focus();return;}
  S.meetings.unshift({id:'m'+Date.now(),date:$('#mtD').value\vert{}\vert{}todayStr(),title,who:$('#mtW').value.trim(),body,ts:Date.now()});
  S.sup.last=$('#mtD').value||todayStr();
  note(`打ち合わせメモを追加: ${title||body.slice(0,30)}`);
  $('#mtT').value='';$('#mtW').value='';$('#mtB').value='';$('#mtD').value=todayStr();
  renderHeader();renderOverview();renderMtList();
}
function mtUpdate(id){
  const m=S.meetings.find(x=>x.id===id); if(!m) return;
  m.date=document.getElementById('ed-'+id).value||m.date; m.title=document.getElementById('et-'+id).value.trim();
  m.who=document.getElementById('ew-'+id).value.trim(); m.body=document.getElementById('eb-'+id).value.trim();
  mtEdit=null; note(`打ち合わせメモを更新: ${m.title||m.body.slice(0,30)}`); renderHeader();renderOverview();renderMtList();
}
function mtDelete(id){
  const m=S.meetings.find(x=>x.id===id); S.meetings=S.meetings.filter(x=>x.id!==id); mtArm=null;
  note(`打ち合わせメモを削除: ${m?(m.title||''):''}`); renderHeader();renderOverview();renderMtList();
}
function addMtTask(id){
  const m=S.meetings.find(x=>x.id===id); if(!m) return;
  const inp=document.getElementById('nt-'+id), tx=inp.value.trim(); if(!tx){inp.focus();return;}
  const nid='c'+Date.now(); S.custom.push({id:nid,p:document.getElementById('np-'+id).value,text:tx,from:id,fromLabel:`${fmtD(m.date)} ${m.title||'打ち合わせ'}`});
  const dd=document.getElementById('nd-'+id).value; if(dd) S.tasks[nid]={due:dd};
  note(`ToDoを追加: ${tx}(打ち合わせ「${m.title||fmtD(m.date)}」から)`); renderAll('mtshell');
}
function recentMeetings(){
  const r=S.meetings.slice(0,2).map(m=>`<div style="padding:8px 0;border-top:1px solid var(--line)"><div class="row" style="justify-content:space-between"><b>${fmtD(m.date)} ${esc(m.title||'打ち合わせ')}</b><button class="btn sm" data-go="mt" data-id="mt-${m.id}">開く</button></div><div class="sub" style="white-space:pre-wrap">${esc(m.body.slice(0,90))}${m.body.length>90?'…':''}</div></div>`).join('');
  return `<div class="card"><div class="row" style="justify-content:space-between"><h3 style="margin:0">直近の打ち合わせ</h3><button class="btn sm" data-go="mt">メモを書く</button></div>${r||'<div class="sub" style="margin-top:6px">まだメモはありません。</div>'}</div>`;
}
function renderMeetings(){
  if(!$('#mtList')){
    $('#panel-mt').innerHTML=`<h2>打ち合わせメモ</h2>
     <div class="card" style="margin-bottom:16px"><h3>新しいメモ</h3>
      <div class="fg"><div><label class="l" for="mtD">日付</label><input type="date" class="fld" id="mtD" value="${todayStr()}"></div>
       <div><label class="l" for="mtW">相手・参加者</label><input class="fld" id="mtW" placeholder="例: ワイテック 担当者さん"></div></div>
      <label class="l" for="mtT" style="margin-top:10px">タイトル</label><input class="fld" id="mtT">
      <label class="l" for="mtB" style="margin-top:10px">内容</label><textarea class="fld" id="mtB" style="min-height:140px"></textarea>
      <div class="row" style="margin-top:10px"><button class="btn pri" data-act="mtsave">メモを保存</button></div></div>
     <div class="row" style="justify-content:space-between;margin-bottom:10px"><h3 style="margin:0">これまでのメモ</h3><input class="fld" id="mtQ" style="max-width:260px" placeholder="メモ内を検索"></div>
     <div class="stack" id="mtList"></div>`;
  }
  renderMtList();
}
function renderMtList(){
  const st=stat(), q=mtFilter.trim().toLowerCase();
  const list=S.meetings.filter(m=>!q||(m.title+' '+m.who+' '+m.body).toLowerCase().includes(q));
  const all=tasks();
  const html=list.map(m=>{
    const ts=all.filter(t=>t.from===m.id);
    const tl=ts.map(t=>`<div class="t ${t.done?'done':''}"><input type="checkbox" data-act="toggle" data-id="${t.id}" ${t.done?'checked':''}><div><div class="tt">${esc(t.text)}</div><div class="row" style="gap:6px;margin-top:3px">${chip('plain',esc(phName(t.p)))}${t.due?chip(!t.done&&t.due<todayStr()?'bad':'plain','期限 '+fmtD(t.due)):''}</div></div></div>`).join('');
    const addrow=`<div class="addrow4" style="margin-top:8px"><select class="fld" id="np-${m.id}">${PHASES.map(p=>`<option value="${p.id}" ${p.id===st.cur.id?'selected':''}>${esc(p.name)}</option>`).join('')}</select><input type="text" class="fld" id="nt-${m.id}" data-enter="mtaddtask" data-id="${m.id}" placeholder="この打ち合わせで増えたやること"><input type="date" class="fld" id="nd-${m.id}"><button class="btn pri" data-act="mtaddtask" data-id="${m.id}">ToDoに追加</button></div>`;
    if(mtEdit===m.id){
      return `<article class="card mtcard" id="mt-${m.id}"><div class="fg"><div><label class="l">日付</label><input type="date" class="fld" id="ed-${m.id}" value="${esc(m.date)}"></div><div><label class="l">相手・参加者</label><input class="fld" id="ew-${m.id}" value="${esc(m.who)}"></div></div>
       <label class="l" style="margin-top:8px">タイトル</label><input class="fld" id="et-${m.id}" value="${esc(m.title)}">
       <label class="l" style="margin-top:8px">内容</label><textarea class="fld" id="eb-${m.id}" style="min-height:160px">${esc(m.body)}</textarea>
       <div class="row" style="margin-top:10px"><button class="btn pri" data-act="mtupd" data-id="${m.id}">保存</button><button class="btn" data-act="mtcancel">キャンセル</button></div></article>`;
    }
    return `<article class="card mtcard" id="mt-${m.id}"><header><b>${esc(m.title||'打ち合わせ')}</b>${chip('plain',fmtD(m.date))}${m.who?chip('acc',esc(m.who)):''}<span style="margin-left:auto" class="row"><button class="btn sm" data-act="mtedit" data-id="${m.id}">編集</button><button class="btn sm" data-act="mtdel" data-id="${m.id}">削除</button></span></header>
     <p class="mtbody">${esc(m.body)||'<span class="sub">(内容なし)</span>'}</p>
     <div class="mttodo"><div class="sub" style="font-weight:700;margin-bottom:4px">この打ち合わせで増えたToDo(${ts.length}件)</div>${tl}${addrow}</div></article>`;
  }).join('');
  $('#mtList').innerHTML=html||`<div class="card sub">${q?'一致するメモがありません。':'まだメモがありません。'}</div>`;
}

const PAM=[
 {id:'cover',title:'表面(表紙)',items:[['p_c1','商品の写真(本体)'],['p_c2','商品名']]},
 {id:'inner',title:'見開き(中面)',sub:'開くと解説',items:[['p_i1','解説'],['p_i2','使用シーンの写真(患者さんが写っているもの)'],['p_i3','小児科病棟向けの、IP付きの写真'],['p_i4','衛生面の内容'],['p_i5','なぜ作ったか(患者さん・看護師さんの「あるある」を解決するための商品です、という趣旨)']]},
 {id:'back',title:'裏面',items:[['p_b1','ラインナップ(カラーバリエーション)'],['p_b2','IP付きは「カミングスーン」']]}
];
const SHOTS=[['p_s1','実際に使われている写真'],['p_s2','本体の写真'],['p_s3','小児科病棟の写真'],['p_s4','使用シーンの写真(患者さんあり)'],['p_s5','小児科病棟向けのIP付きの写真']];
function renderPamphlet(){
  const all=PAM.flatMap(x=>x.items).concat(SHOTS), done=all.filter(i=>S.pam[i[0]]).length;
  const ck=i=>`<label class="pi ${S.pam[i[0]]?'done':''}"><input type="checkbox" data-pam="${i[0]}" ${S.pam[i[0]]?'checked':''}><span>${esc(i[1])}</span></label>`;
  const ts=tasks().filter(t=>t.p==='p5');
  $('#panel-pam').innerHTML=`<h2>パンフレットの構成</h2>
   <div class="pam">${PAM.map(x=>`<div class="sheet"><div class="sh-h"><b>${x.title}</b>${x.sub?`<span class="sub">${x.sub}</span>`:''}</div>${x.items.map(ck).join('')}</div>`).join('')}</div>
   <div class="cols" style="margin-top:16px">
    <div class="card"><h3>撮りたい写真</h3>${SHOTS.map(ck).join('')}</div>
    <div class="card"><div class="row" style="justify-content:space-between"><h3 style="margin:0">関連するToDo</h3><button class="btn sm" data-go="todo">ToDoへ</button></div>${ts.map(t=>`<label class="pi ${t.done?'done':''}" style="margin-top:6px"><input type="checkbox" data-act="toggle" data-id="${t.id}" ${t.done?'checked':''}><span>${esc(t.text)}${t.due?` <span class="sub">(期限 ${fmtD(t.due)})</span>`:''}</span></label>`).join('')}</div>
   </div>
   <div class="card" style="margin-top:16px"><h3>文言・アイデアのメモ</h3><textarea class="fld" data-f="pammemo" style="min-height:110px">${esc(S.pamMemo)}</textarea></div>`;
}

const TABS=[['ov','全体の流れ・方針'],['sch','スケジュール'],['todo','ToDo'],['tl','タイムライン'],['mt','打ち合わせメモ'],['pam','パンフレット'],['sup','取引先・見積もり']];
let cur='ov';
function renderTabs(){ $('#tabs').innerHTML=TABS.map(t=>`<button class="tab" role="tab" data-tab="${t[0]}" aria-selected="${t[0]===cur}">${t[1]}</button>`).join(''); }
function show(id){cur=id;document.querySelectorAll('.panel').forEach(p=>p.hidden=p.id!=='panel-'+id);renderTabs();}
function renderAll(skip){
  renderHeader();
  if(skip!=='ov')renderOverview();
  if(skip!=='sch')renderSchedule();
  if(skip!=='todo')renderTodo();
  if(skip!=='tl')renderTimeline();
  if(skip!=='mt')renderMeetings();
  renderPamphlet();
  if(skip!=='sup')renderSupplier();
}
function go(tab,id){
  show(tab);
  const el=id&&(document.getElementById('td-'+id)||document.getElementById(id));
  if(el&&tab==='todo'){setTimeout(()=>{el.scrollIntoView({block:'center'});el.classList.remove('flash');void el.offsetWidth;el.classList.add('flash');},30);}
  else window.scrollTo(0,0);
}
const taskById=id=>tasks().find(t=>t.id===id);

document.addEventListener('click',e=>{
  const b=e.target.closest('[data-tab],[data-go],[data-act]'); if(!b) return;
  if(b.dataset.tab){show(b.dataset.tab);window.scrollTo(0,0);return;}
  if(b.dataset.go){go(b.dataset.go,b.dataset.id);return;}
  const a=b.dataset.act,id=b.dataset.id;
  if(a==='toggle'&&b.tagName==='BUTTON'){doToggle(id);}
  else if(a==='pol'){const o=POLICY.find(x=>x.id===id);const order=['決定済み','確認中','保留中'];const now=S.policy[id]||o.s;const nx=order[(order.indexOf(now)+1)%order.length];S.policy[id]=nx;note(`方針「${o.t}」を「${nx}」に変更`);renderAll();}
  else if(a==='add'){addTask();}
  else if(a==='mtsave'){mtSave();}
  else if(a==='mtedit'){mtEdit=id;renderMtList();}
  else if(a==='mtcancel'){mtEdit=null;renderMtList();}
  else if(a==='mtupd'){mtUpdate(id);}
  else if(a==='mtdel'){if(mtArm!==id){mtArm=id;b.textContent='もう一度押すと削除';setTimeout(()=>{if(mtArm===id){mtArm=null;if(b.isConnected)b.textContent='削除';}},4000);}else{mtDelete(id);}}
  else if(a==='mtaddtask'){addMtTask(id);}
  else if(a==='del'){const t=taskById(id);S.custom=S.custom.filter(c=>c.id!==id);delete S.tasks[id];note(`タスクを削除: ${t?t.text:''}`);renderAll();}
  else if(a==='qadd'){S.quotes.rows.push({id:'q'+Date.now(),name:'新しい項目',type:'unit',price:'',status:'未依頼',memo:''});save();renderSupplier();}
  else if(a==='qdel'){S.quotes.rows=S.quotes.rows.filter(r=>r.id!==id);note('見積もりの行を削除');renderSupplier();renderHeader();renderOverview();}
  else if(a==='logadd'){const t=$('#lgT').value.trim();if(!t){$('#lgT').focus();return;}S.log.unshift({id:'l'+Date.now(),ts:Date.now(),date:$('#lgD').value\vert{}\vert{}todayStr(),text:t});S.sup.last=$('#lgD').value||todayStr();note(`やり取りを記録: ${t}`);renderAll();}
});
function doToggle(id){
  const t=taskById(id); if(!t) return;
  const s=S.tasks[id]||(S.tasks[id]={}); s.done=!t.done;
  note(`${s.done?'✓ 完了':'未完了に戻した'}: ${t.text}`);
  renderAll();
}
document.addEventListener('change',e=>{
  const el=e.target;
  if(el.dataset.pam){S.pam[el.dataset.pam]=el.checked;renderHeader();renderOverview();renderPamphlet();return;}
  if(el.dataset.act==='toggle'){doToggle(el.dataset.id);return;}
  const f=el.dataset.f; if(!f) return;
  const [k,a,b]=f.split(':');
  if(k==='memo'){renderHeader();renderOverview();renderTimeline();}
  else if(k==='due'){renderHeader();renderOverview();renderTimeline();renderGantt();}
  else if(k==='wait'){renderAll();}
  else if(k==='launch'){renderHeader();}
  else if(k==='title'){note('プロジェクト名を変更: '+el.value);}
  else if(k==='sup'){renderHeader();renderOverview();}
  else if(k==='qty'||k==='thr'){renderHeader();renderOverview();}
  else if(k==='q'){renderHeader();renderOverview();}
  else if(k==='pammemo'){renderHeader();renderOverview();}
  else if(k==='sch'){renderGantt();renderHeader();renderOverview();}
});
document.addEventListener('input',e=>{
  const el=e.target,f=el.dataset.f; if(!f) return;
  const [k,a,b]=f.split(':');
  if(k==='memo'){(S.tasks[a]||(S.tasks[a]={})).memo=el.value;save();}
  else if(k==='due'){(S.tasks[a]||(S.tasks[a]={})).due=el.value;save();}
  else if(k==='wait'){(S.tasks[a]||(S.tasks[a]={})).wait=el.checked;save();}
  else if(k==='launch'){S.launch=el.value;save();}
  else if(k==='title'){S.title=el.value;save();document.title=(el.value||'新規事業')+' 進行ボード';}
  else if(k==='sup'){S.sup[a]=el.value;save();}
  else if(k==='qty'){S.quotes.qty=el.value;save();recalcQuote();}
  else if(k==='thr'){S.quotes.thr=el.value;save();recalcQuote();}
  else if(k==='q'){const r=S.quotes.rows.find(x=>x.id===a);if(r){r[b]=el.value;save();recalcQuote();}}
  else if(k==='pammemo'){S.pamMemo=el.value;save();}
  else if(k==='sch'){S.sched=S.sched||{};(S.sched[a]||(S.sched[a]={}))[b]=el.value;save();}
});
$('#titleIn').addEventListener('change',()=>{renderHeader();});
document.addEventListener('input',e=>{if(e.target.id==='mtQ'){mtFilter=e.target.value;renderMtList();}});
document.addEventListener('keydown',e=>{
  if(e.key!=='Enter'||e.isComposing) return;
  const t=e.target; if(!t.dataset||!t.dataset.enter) return;
  e.preventDefault();
  if(t.dataset.enter==='add') addTask(); else if(t.dataset.enter==='mtaddtask') addMtTask(t.dataset.id);
});

function setShare(kind,msg){
  const el=$('#sharebar'); if(!el) return;
  el.className='sharebar';
  el.innerHTML=`<div class="wrap"><span style="opacity: 0.8;">※GitHub Pages等の静的ホスティングでは、入力内容はご自身のブラウザ(ローカルストレージ)に保存されます。</span></div>`;
}

let armed=false;
$('#resetBtn').addEventListener('click',e=>{
  if(!armed){armed=true;e.target.textContent='もう一度押すと、すべて初期状態に戻ります';setTimeout(()=>{armed=false;e.target.textContent='保存内容をすべて消す'},4000);return;}
  try{localStorage.removeItem(SKEY)}catch(err){}
  location.reload();
});

(function migrate(){
  let ch=false;
  if(S.qv!==2){ if(S.quotes.rows.every(r=>r.price==='')){S.quotes.rows=QACTUAL.map(r=>({...r}));S.quotes.qty=1000;} S.qv=2; ch=true; }
  if(S.mv!==1){ if(!S.meetings.some(m=>m.id==='m-1005')) S.meetings.push({...SEED_MEETING}); S.meetings.sort((x,y)=>y.date.localeCompare(x.date)||y.ts-x.ts); S.mv=1; ch=true; }
  if(S.tv!==1){ if(S.title==='新規事業企画') S.title='ナースコールホルダ 事業化'; S.tv=1; ch=true; }
  if(!S.sup.person&&!S.sup.phone){ S.sup.person='吉澤 洋'; S.sup.phone='052-508-9275'; if(!S.sup.notes) S.sup.notes='住所: 愛知県清須市西枇杷島町古城1-12-7\nFAX: 052-508-9276'; ch=true; }
  if(ch) save();
})();
document.title=(S.title||'新規事業')+' 進行ボード';
renderAll(); show('ov'); setShare('local');
