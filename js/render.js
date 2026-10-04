/* =====================================================================
   RENDER — geração de textos de prescrição e renderização da UI
   Depende de: config.js, engine.js
   ===================================================================== */

/* ---- líder com traços longos (fonte monoespaçada) ---- */
// Alinha a quantidade sempre na mesma coluna (CFG.colunaQuantidade)
// Nomes curtos → mais traços; nomes longos → menos traços (mínimo 3)
function leader(l,r){
  const k = Math.max(3, CFG.colunaQuantidade - l.length - 2);
  return `${l} ${'—'.repeat(k)} ${r}`;
}

/* ---- monta o texto de um grupo da receita (renumerando itens) ---- */
function grpTxt(g){
  return g.items.map((r,idx)=>{
    const lines = r.texto.split('\n');
    const first = lines[0].replace(/^\d+\.\s*/,`${idx+1}. `);
    return [first,...lines.slice(1)].join('\n');
  }).join('\n\n');
}

/* ---- geração dos cards de prescrição ---- */
function cards(C){
  const d=S.drug, ap=apresAtual(), a=C.arr, p=paciente(); if(!a) return [];
  const n=C.n, h=24/n;
  const posExt = S.modo==='agora' ? 'agora'
    : S.modo==='sn' ? (n===1?`até 1 vez ao dia, se ${S.cond}`:`até de ${h} em ${h} horas, se ${S.cond}`)
    : (n===1?`1 vez ao dia, por ${S.dias} dias`:`de ${h} em ${h} horas, por ${S.dias} dias`);
  const posAbr = S.modo==='agora' ? 'agora'
    : S.modo==='sn' ? (n===1?`até 1x/dia, se ${S.cond}`:`até de ${h}/${h}h, se ${S.cond}`)
    : (n===1?`1x/dia, por ${S.dias} dias`:`de ${h}/${h}h, por ${S.dias} dias`);
  const nomeInt = `${d.nome} (${ap.conc})`;
  const out=[];
  if(S.via==='VO'||S.via==='VR'||S.via==='NASAL'){
    const g=VIA_GRUPO[S.via];
    const rot = typeof ap.rotulo === 'function' ? ap.rotulo(p, a) : ap.rotulo;
    const verbo = S.via==='VO' ? 'Tomar' : (S.via==='VR' ? 'Aplicar' : 'Instilar');
    let disp = typeof ap.disp === 'function' ? ap.disp(p, a) : ap.disp;
    if(S.modo==='continuo' && ap.frascoMl && S.frascoMl && a.ml!=null){
      const mlDia = a.ml * n;
      const mlTotal = mlDia * (S.dias || 1);
      const qtdFrascos = Math.max(1, Math.ceil(mlTotal / S.frascoMl));
      disp = `${qtdFrascos} frasco${qtdFrascos > 1 ? 's' : ''}`;
    }
    const rawInstrucao = typeof ap.instrucao === 'function' ? ap.instrucao(p, a) : ap.instrucao;
    const extra = rawInstrucao ? `\n   ${rawInstrucao}` : '';
    const doseTxt = a.txt + (S.via==='NASAL' ? ' em cada narina' : '');
    out.push({grupo:g, sub:'Receita Médica',
      texto:`${leader('1. '+rot, disp)}\n${verbo} ${doseTxt}, ${VIA_EXT[S.via]}, ${posExt}.${extra}`});
    out.push({grupo:g, sub:'Prescrição Interna',
      texto:`${leader('1. '+nomeInt, a.txt)}\nAdministrar ${doseTxt}${ap.mg?` (${fmtMg(a.mg)})`:''}, ${S.via}, ${posAbr}.`});
  }
  if(S.via==='IM'){
    const dose = a.whole ? a.txt : `${fmt(a.ml)} mL (${fmtMg(a.mg)})`;
    out.push({grupo:VIA_GRUPO.IM, sub:'',
      texto:`${leader('1. '+nomeInt, dose)}\nAdministrar ${dose}, IM, sem diluição, ${posAbr}.`});
  }
  if(S.via==='EV' && C.ev){
    const E=C.ev, dil=S.dil;
    let pre='', dose;
    if(ap.forma==='fap'){
      const k=Math.ceil(a.mg/ap.mg-1e-9);
      pre=`Reconstituir ${k} frasco${k>1?'s':''}-ampola com ${ap.reconstMl} mL de ${ap.reconstDil}${k>1?' cada':''} (${fmt(mgml(ap))} mg/mL)`;
      dose = a.whole ? null : `${fmt(a.ml)} mL (${fmtMg(a.mg)})`;
    } else dose = a.whole ? a.txt : `${fmt(a.ml)} mL (${fmtMg(a.mg)})`;
    const t = E.t!=null ? fmt(E.t,1) : '__';
    let txt;
    if(E.seringa){
      const resto=rml(E.vol-E.vDose);
      const asp = dose || `${fmt(a.ml)} mL (${fmtMg(a.mg)})`;
      txt = `${pre?pre+'; ':''}Aspirar ${asp}${resto>0?` + ${fmt(resto)} mL de ${dil}`:''} em seringa de ${fmt(E.vol)} mL; administrar EV lento em ${t} min, ${posAbr}.`;
    } else {
      const gt = E.gtt!=null ? ` (≈ ${E.gtt} gts/min)` : '';
      if(ap.forma==='fap' && a.whole) txt = `${pre} e diluir em ${fmt(E.vol)} mL de ${dil}; infundir EV em ${t} min${gt}, ${posAbr}.`;
      else txt = `${pre?pre+'; ':''}Diluir ${dose} em ${fmt(E.vol)} mL de ${dil}; infundir EV em ${t} min${gt}, ${posAbr}.`;
    }
    const qtdEV = a.whole ? a.txt : `${fmt(a.ml)} mL (${fmtMg(a.mg)})`;
    out.push({grupo:VIA_GRUPO.EV, sub:'',
      texto:`${leader('1. '+nomeInt, qtdEV)}\n${txt}`});
  }
  return out;
}

/* ---- defaults ao selecionar fármaco/via ---- */
function setDefaults(){
  const d=S.drug, p=paciente(), disp=viasDisp(d);
  if(!disp.includes(S.via)) S.via=disp[0];
  const aps=d.apresentacoes.filter(a=>a.vias.includes(S.via));
  if(!aps.some(a=>a.id===S.apres)) S.apres=aps[0].id;
  S.modo = (S.via==='EV'||S.via==='IM') ? 'agora' : 'sn';
  S.cond = d.snPadrao||'dor';
  const ap=apresAtual();
  const r=d.regras.find(r=>aplica(r,p,S.via,ap.id)===true);
  S.n = r ? (r.intervaloFixo ? 24/r.intervaloFixo : (r.dosesPadrao || (r.dosesDia||[1,4])[1])) : 4;
  if(r && (r.tipo==='mg_kg_dose'||r.tipo==='mg_kg_dia')){
    if(p.peso){ S.unid=r.tipo; S.val=r.padrao; } else { S.unid='mg'; S.val=null; }
  } else if(r){ S.unid='mg'; S.val=r.padrao; }
  else { S.unid='mg'; S.val=null; }
  S.volManual=false; S.vol=null; S.tempo=null;
  S.dil = d.ev ? d.ev.diluentes[0] : null;
  S.frascoMl = ap ? (ap.frascoMl || null) : null;
}

/* ---- renderização ---- */
function renderTopo(){
  document.querySelectorAll('#pubSeg button').forEach(b=>b.classList.toggle('on',b.dataset.pub===S.pub));
  document.querySelectorAll('.ped-only').forEach(e=>e.style.display=S.pub==='ped'?'':'none');
  $('#peso').placeholder = S.pub==='ped' ? '—' : 'opcional';
}

function lev(a,b){ const m=[...Array(b.length+1).keys()]; for(let i=1;i<=a.length;i++){ let prev=m[0]; m[0]=i; for(let j=1;j<=b.length;j++){ const t=m[j]; m[j]=Math.min(m[j]+1,m[j-1]+1,prev+(a[i-1]===b[j-1]?0:1)); prev=t; } } return m[b.length]; }

function renderLista(){
  const q=norm(S.busca.trim());
  let ls=DB.filter(d=>{ if(!q) return true; const h=norm(d.nome+' '+d.busca); if(h.includes(q)) return true;
    return h.split(' ').some(w=>lev(q,w.slice(0,q.length))<= (q.length>4?2:1)); });
  ls.sort((a,b)=>a.nome.localeCompare(b.nome));
  const fav=ls.filter(d=>S.favs.includes(d.id)), rest=ls.filter(d=>!S.favs.includes(d.id));
  const it=d=>`<div class="item ${S.drug===d?'on':''}" data-drug="${d.id}"><span>${d.nome}</span>${S.favs.includes(d.id)?'<span class="st">★</span>':''}</div>`;
  $('#lista').innerHTML = (fav.length?`<div class="sec">Favoritos</div>${fav.map(it).join('')}<div class="sec">Todos</div>`:'')
    + rest.map(it).join('') + (ls.length?'':'<div class="muted small" style="padding:6px 10px">Nenhum fármaco encontrado</div>');
}

function renderCentro(){
  const el=$('#centro'), d=S.drug;
  if(!d){ el.innerHTML='<div class="empty">Selecione um fármaco à esquerda</div>'; return; }
  const ap=apresAtual(), disp=viasDisp(d), aps=d.apresentacoes.filter(a=>a.vias.includes(S.via));
  const us=unidades(ap);
  if(!us.includes(S.unid)){ const mg=toMg(S.val,S.unid,ap); S.unid='mg'; S.val=mg!=null?Math.round(mg*100)/100:null; }
  const C=calc();
  // selos de acesso (SUS) — refletem a apresentação selecionada; detalhe por apresentação ao clicar
  let acc='';
  if(ap.acesso){
    const b=(on,l)=>`<span class="abadge ${on?'on':'off'}">${l}</span>`;
    const li=d.apresentacoes.filter(a=>a.acesso).map(a=>`<div class="arow ${a.id===ap.id?'cur':''}"><span class="an">${esc(a.nome)}</span>
        <span class="ai ${a.acesso.rename?'y':'n'}">${a.acesso.rename?'✓':'✗'} RENAME</span><span class="ai ${a.acesso.fp?'y':'n'}">${a.acesso.fp?'✓':'✗'} F. Popular</span></div>`).join('');
    acc=`<span class="acc-wrap"><button class="acc" data-act="acesso" title="Disponibilidade no SUS (apresentação selecionada)">${b(ap.acesso.rename,'RENAME')}${b(ap.acesso.fp,'F. POPULAR')}</button>
      <div class="apop ${S.acessoOpen?'open':''}"><div class="apt">Disponibilidade no SUS por apresentação</div>${li}
      <div class="afo">${esc(d.acessoFonte||'')}<br>A disponibilidade real depende da REMUME do município.</div></div></span>`;
  }
  let h=`<div class="dhead"><h1>${d.nome}</h1><button class="star ${S.favs.includes(d.id)?'on':''}" data-act="fav" title="Favorito">★</button>${acc}</div>
    <div class="muted small">${d.classe}</div>`;
  h+=`<div class="field"><div class="lbl">Via</div><div class="chips">${['VO','EV','IM','VR','NASAL'].filter(v=>disp.includes(v)||(S.via===v)).map(v=>`<button class="chip ${S.via===v?'on':''}" data-via="${v}" ${disp.includes(v)?'':'disabled title="Não disponível nas fontes"'}>${v}</button>`).join('')}</div></div>`;
  h+=`<div class="field"><div class="lbl">Apresentação</div><select data-k="apres">${aps.map(a=>`<option value="${a.id}" ${a.id===S.apres?'selected':''}>${esc(a.nome)}${a.comercial?' · '+esc(a.comercial):''}</option>`).join('')}</select></div>`;
  h+=`<div class="field"><div class="lbl">Uso</div><div class="seg">${[['agora','Agora'],['sn','Se necessário'],['continuo','Contínuo']].map(([k,l])=>`<button class="${S.modo===k?'on':''}" data-modo="${k}">${l}</button>`).join('')}</div></div>`;
  if(S.modo!=='agora'){
    h+=`<div class="field"><div class="lbl">Doses por dia</div><div class="chips">${[1,2,3,4].map(k=>{
      const bad=C.R.length&&(k<C.dmin||k>C.dmax);
      return `<button class="chip ${S.n===k?'on':''} ${bad?'warn':''}" data-n="${k}" title="${bad?'Fora do recomendado pela fonte':''}">${k}× · ${24/k}/${24/k}h</button>`;}).join('')}</div></div>`;
    if(S.modo==='sn') h+=`<div class="field"><div class="lbl">Se…</div><input data-k="cond" value="${esc(S.cond)}" style="width:100%"></div>`;
    else {
      h+=`<div class="row" style="margin-top:18px">
        <label class="field" style="flex:1;margin-top:0"><div class="lbl">Duração (dias)</div><input data-k="dias" inputmode="numeric" value="${S.dias}" style="width:100%"></label>`;
      if(ap.frascoMl || (['sol','gotas','susp'].includes(ap.forma) && mgml(ap))){
        const fMlVal = S.frascoMl!=null ? S.frascoMl : (ap.frascoMl || '');
        h+=`<label class="field" style="flex:1;margin-top:0"><div class="lbl">Volume do frasco (mL)</div><input data-k="frascoMl" inputmode="numeric" placeholder="${ap.frascoMl||'ex: 150'}" value="${fMlVal!=null?fMlVal:''}" style="width:100%"></label>`;
      }
      h+=`</div>`;
    }
  }
  h+=`<div class="field"><div class="lbl">Dose</div><div class="row dose">
      <input data-k="val" inputmode="decimal" value="${S.val!=null?String(S.val).replace('.',','):''}" placeholder="${S.pub==='ped'&&!S.peso?'informe o peso ou use mg':''}">
      <select data-k="unid">${us.map(u=>`<option value="${u}" ${u===S.unid?'selected':''}>${unidLbl(u,ap)}</option>`).join('')}</select></div>
      <div id="calc" class="calc"></div></div>`;
  if(S.via==='EV' && d.ev){
    const ev=d.ev;
    h+=`<div class="box"><div class="lbl" style="margin-bottom:10px">Diluição e administração EV</div>
      <div class="chips">${ev.diluentes.map(x=>`<button class="chip ${S.dil===x?'on':''}" data-dil="${x}">${x}</button>`).join('')}</div>
      <div class="row" style="margin-top:10px">
        <label class="muted small" style="flex:1">Volume final<select data-k="vol" style="margin-top:4px">${ev.volOpcoes.map(v=>`<option value="${v}">${v} mL · ${v<=CFG.limiteSeringaMl?'seringa':'bolsa'}</option>`).join('')}</select></label>
        <label class="muted small" style="flex:1">Tempo (min)<input data-k="tempo" inputmode="decimal" style="margin-top:4px;width:100%" value=""></label>
      </div>
      <input type="range" data-k="tempoR" style="width:100%;margin-top:10px;border:0;padding:0">
      <div id="evcalc" class="sub" style="margin-top:6px"></div></div>`;
  }
  h+=`<div id="alerts" style="margin-top:16px"></div>`;
  h+=`<details><summary>Fontes e detalhes</summary>
    <p><span class="k">Fontes:</span> ${Object.keys(d.fontes).map(f=>esc(fonteNome(d,f))).join(' · ')}</p>
    <p><span class="k">Indicação:</span> ${esc(d.notas.indicacao)}</p>
    <p><span class="k">Regras de dose:</span></p>${d.regras.map(r=>`<p class="small">• <b>${esc(regraLabel(r))}</b>${r.apres?` (${r.apres.map(id=>d.apresentacoes.find(a=>a.id===id).nome).join(', ')})`:''} — <i>"${esc(r.trecho)}"</i> <span class="muted">(${r.fonte})</span></p>`).join('')}
    ${(d.maximos||[]).map(m=>`<p class="small">• <b>Máximo:</b> <i>"${esc(m.trecho)}"</i> <span class="muted">(${m.fonte})</span></p>`).join('')}
    ${(d.contra||[]).map(c=>`<p class="small">• <b>Contraindicação:</b> <i>"${esc(c.trecho)}"</i> <span class="muted">(${c.fonte})</span></p>`).join('')}
    ${d.ev?`<p><span class="k">Diluição EV:</span> ${esc(d.ev.fonteTxt)}</p>`:''}
    <p><span class="k">Administração:</span> ${esc(d.notas.administracao)}</p>
    <p><span class="k">Cuidados:</span> ${esc(d.notas.cuidados)}</p>
    <p><span class="k">Ajuste de dose:</span> ${esc(d.notas.ajuste)}</p>
  </details>`;
  el.innerHTML=h;
  update();
}

function update(){
  if(!S.drug){ renderSaida(null); return; }
  const C=calc(), ap=apresAtual(), p=paciente();
  let h='';
  if(C.lo!=null){
    const uLo=fromMg(C.lo,S.unid,ap), uHi=fromMg(C.hi,S.unid,ap), cur=S.val;
    const top=Math.max(uHi*1.5, cur||0)*1.05||1;
    const pc=v=>Math.max(0,Math.min(100,v/top*100));
    const bad=cur!=null && C.mg!=null && (C.mg>C.hi*1.0001||C.mg<C.lo*0.9999);
    h+=`<div class="bar" data-top="${top}"><div class="ok" style="left:${pc(uLo)}%;width:${Math.max(1,pc(uHi)-pc(uLo))}%"></div>${cur!=null?`<div class="mk ${bad?'bad':''}" style="left:${pc(cur)}%"></div>`:''}</div>
      <div class="sub">Recomendado: ${uLo===uHi||Math.abs(uLo-uHi)<1e-9?fmt(uHi):`${fmt(uLo)} – ${fmt(uHi)}`} ${unidLbl(S.unid,ap)}${S.unid!=='mg'?` (${C.lo===C.hi?fmtMg(C.hi):fmt(C.lo,1)+' – '+fmtMg(C.hi)})`:''}${S.modo!=='agora'&&C.dailyMax!=null?` · máx. ${fmtMg(C.dailyMax)}/dia`:''}</div>`;
  }
  if(C.arr){
    const mg=C.arr.mg, n=C.n;
    h+=`<div class="big">${fmtMg(mg)} → ${C.arr.txt}</div>`;
    const parts=[];
    if(p.peso) parts.push(`${fmt(mg/p.peso)} mg/kg/dose`);
    if(S.modo!=='agora'){
      parts.push(`${fmtMg(mg*n)}/dia`);
      if(p.peso) parts.push(`${fmt(mg*n/p.peso)} mg/kg/dia`);
      if(C.arr.ml!=null){
        const mlDia = C.arr.ml * n;
        parts.push(`${fmt(mlDia)} mL/dia`);
        const fMl = S.frascoMl || ap.frascoMl;
        if(S.modo==='continuo' && fMl){
          const mlTotal = mlDia * (S.dias || 1);
          const qtdF = Math.max(1, Math.ceil(mlTotal / fMl));
          parts.push(`total ${fmt(mlTotal)} mL (${qtdF} frasco${qtdF>1?'s':''})`);
        }
      }
    } else if(C.arr.ml!=null && !String(C.arr.txt).startsWith(fmt(C.arr.ml))) {
      parts.push(`${fmt(C.arr.ml)} mL`);
    }
    if(parts.length) h+=`<div class="sub">${parts.join(' · ')}</div>`;
  }
  const ce=$('#calc'); if(ce) ce.innerHTML=h;

  if(C.ev){
    const E=C.ev, vs=$('[data-k=vol]'), ti=$('[data-k=tempo]'), tr=$('[data-k=tempoR]');
    if(vs) vs.value=String(E.vol);
    if(ti && document.activeElement!==ti) ti.value = E.t!=null ? String(E.t).replace('.',',') : '';
    if(tr){
      const lo=E.tMin?Math.max(1,Math.floor(E.tMin)):1, hi=E.tMax||Math.max(30,Math.ceil((E.t||0)*1.5));
      tr.min=lo; tr.max=hi; tr.step=1; if(document.activeElement!==tr) tr.value=E.t??lo;
    }
    const rng = E.tMin||E.tMax ? `Faixa: ${E.tMin?fmt(Math.ceil(E.tMin*10)/10,1):'—'}${E.tMax?` – ${E.tMax}`:'+'} min. ` : '';
    $('#evcalc').innerHTML = `${E.seringa?'<b>Seringa</b> (bolus lento manual)':'<b>Bolsa</b>'} · volume da dose ${fmt(E.vDose)} mL · conc. final ${fmt(E.conc)} mg/mL${S.drug.ev.concMax?` (máx. ${fmt(S.drug.ev.concMax)})`:''}
`     + (!E.seringa && E.gtt!=null ? `<br><b>≈ ${E.gtt} gotas/min</b> · ${E.mlh} mL/h (macrogotas ${CFG.gotasPorMl} gts/mL)` : '')
      + `<br>${rng}${esc(E.tTxt)}`;
  }

  const A=$('#alerts');
  if(A){
    const blk=(x,c)=>`<div class="alert ${c} ${x.strong?'strong':''}">${esc(x.t)}${x.f?`<span class="src">Fonte: ${esc(x.f)}</span>`:''}${x.tr?`<span class="tr">"${esc(x.tr)}"</span>`:''}</div>`;
    let ah=C.alerts.map(x=>blk(x,'red')).join('');
    if(!C.alerts.length && C.arr && C.R.length) ah=`<div class="alert green">✓ Dentro do recomendado · ${esc([...new Set(C.R.map(r=>fonteNome(S.drug,r.fonte)))].join(' · '))}</div>`;
    ah+=C.notes.map(x=>blk(x,'amber')).join('')+C.infos.map(x=>blk(x,'gray')).join('');
    A.innerHTML=ah;
  }
  renderSaida(C);
}

let CARDS=[];
function renderSaida(C){
  const el=$('#saida');
  CARDS = C ? cards(C) : [];
  let h='<h2>Prescrição</h2>';
  if(!CARDS.length) h+=`<div class="muted small">${S.drug?'Informe a dose para gerar o texto.':'Os textos prontos aparecerão aqui.'}</div>`;
  if(C && C.alerts.length && CARDS.length) h+=`<div class="alert red strong" style="margin:0 0 12px">⚠ Atenção: há itens fora do recomendado (ver alertas).</div>`;
  CARDS.forEach((c,i)=>{
    h+=`<div class="ghead">${c.grupo}${c.sub?`<span>(${c.sub})</span>`:''}</div>
      <div class="card"><div class="txt" contenteditable="true" spellcheck="false" data-card="${i}">${esc(c.texto)}</div>
      <div class="acts"><button data-copy="${i}" title="Copiar">⧉</button><button data-add="${i}" title="Adicionar à receita">＋</button></div></div>`;
  });
  if(S.receita.length){
    const grps=[];
    S.receita.forEach(r=>{ let g=grps.find(x=>x.k===r.grupo); if(!g){g={k:r.grupo,items:[]};grps.push(g);} g.items.push(r); });
    h+=`<div style="display:flex;justify-content:space-between;align-items:center;margin-top:30px"><h2 style="margin:0">Receita montada</h2>
      <div style="display:flex;gap:6px"><button class="btn" data-act="copyall">Copiar tudo</button><button class="btn" data-act="clear">Limpar</button></div></div>`;
    grps.forEach((g,gi)=>{
      const txt = S.receitaGrp[g.k]!=null ? S.receitaGrp[g.k] : grpTxt(g);
      h+=`<div class="ghead">${esc(g.k.toUpperCase())}</div>
        <div class="card"><div class="txt" contenteditable="true" spellcheck="false" data-grp="${gi}">${esc(txt)}</div>
        <div class="acts"><button data-copygrp="${gi}" title="Copiar">⧉</button><button data-delgrp="${gi}" title="Remover">✕</button></div></div>`;
    });
  }
  h+=`<div class="foot">Ferramenta de apoio. A conferência final da prescrição é responsabilidade do médico. Edições manuais no texto acima são substituídas ao alterar parâmetros.</div>`;
  el.innerHTML=h;
}

function textoReceita(){
  const grps=[];
  S.receita.forEach(r=>{ let g=grps.find(x=>x.k===r.grupo); if(!g){g={k:r.grupo,items:[]};grps.push(g);} g.items.push(r); });
  return grps.map(g=>{
    const body = S.receitaGrp[g.k]!=null ? S.receitaGrp[g.k] : grpTxt(g);
    return g.k.toUpperCase()+'\n\n'+body;
  }).join('\n\n');
}

function renderAll(){ renderTopo(); renderLista(); renderCentro(); if(!S.drug) renderSaida(null); }
