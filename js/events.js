/* =====================================================================
   EVENTS — event listeners e inicialização
   Depende de: config.js, engine.js, render.js
   ===================================================================== */

$('#pubSeg').addEventListener('click',e=>{ const b=e.target.closest('[data-pub]'); if(!b) return; S.pub=b.dataset.pub; if(S.drug) setDefaults(); renderAll(); });

['peso','anos','meses'].forEach(id=>{
  const el=$('#'+id);
  el.addEventListener('input',()=>{ S[id]=num(el.value); if(S.drug){ update(); } });
  el.addEventListener('change',()=>{ S[id]=num(el.value); if(S.drug){ if(S.val==null) setDefaults(); renderCentro(); } });
});

$('#busca').addEventListener('input',e=>{ S.busca=e.target.value; renderLista(); });
$('#busca').addEventListener('keydown',e=>{ if(e.key==='Enter'){ const f=$('#lista .item'); if(f) f.click(); } });
$('#lista').addEventListener('click',e=>{ const it=e.target.closest('[data-drug]'); if(!it) return; S.drug=DB.find(d=>d.id===it.dataset.drug); S.via=null; S.apres=null; setDefaults(); renderAll(); });
$('#tema').addEventListener('click',()=>{ document.documentElement.classList.toggle('dark'); localStorage.setItem('rx_dark',document.documentElement.classList.contains('dark')?'1':'0'); });

const C_el=$('#centro');
C_el.addEventListener('click',e=>{
  const t=e.target.closest('button'); if(!t) return;
  if(t.dataset.act==='acesso'){ S.acessoOpen=!S.acessoOpen; const p=$('.apop'); if(p) p.classList.toggle('open',S.acessoOpen); return; }
  if(t.dataset.via){ S.via=t.dataset.via; S.apres=null; setDefaults(); renderCentro(); }
  else if(t.dataset.modo){
    S.modo=t.dataset.modo;
    if(S.modo==='agora' && S.unid==='mg_kg_dia'){ const ap=apresAtual(); S.modo='sn'; const mg=toMg(S.val,S.unid,ap); S.modo='agora'; S.unid='mg_kg_dose'; S.val=Math.round(fromMg(mg,'mg_kg_dose',ap)*100)/100; }
    renderCentro();
  }
  else if(t.dataset.n){ S.n=+t.dataset.n; renderCentro(); }
  else if(t.dataset.dil){ S.dil=t.dataset.dil; renderCentro(); }
  else if(t.dataset.act==='fav'){ const id=S.drug.id; S.favs=S.favs.includes(id)?S.favs.filter(x=>x!==id):[...S.favs,id]; localStorage.setItem('rx_favs',JSON.stringify(S.favs)); renderLista(); renderCentro(); }
});

C_el.addEventListener('input',e=>{
  const k=e.target.dataset.k; if(!k) return; const v=e.target.value;
  if(k==='val'){ S.val=num(v); update(); }
  else if(k==='cond'){ S.cond=v; update(); }
  else if(k==='dias'){ S.dias=num(v)||1; update(); }
  else if(k==='frascoMl'){ S.frascoMl=num(v); update(); }
  else if(k==='tempo'){ S.tempo=num(v); update(); }
  else if(k==='tempoR'){ S.tempo=+v; const ti=$('[data-k=tempo]'); if(ti) ti.value=v; update(); }
});

/* ---- barra de dose arrastável ---- */
(function(){
  let dragging = false;

  function applyBarDrag(clientX){
    const bar = $('#calc .bar');
    if(!bar) return;
    const top = parseFloat(bar.dataset.top);
    if(!top) return;
    const rect = bar.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const raw = Math.round(pct * top);
    S.val = raw;
    const vi = $('[data-k=val]');
    if(vi) vi.value = String(raw).replace('.', ',');
    update();
  }

  // mouse
  C_el.addEventListener('mousedown', e=>{
    if(!e.target.closest('.bar')) return;
    dragging = true;
    applyBarDrag(e.clientX);
    e.preventDefault();
  });
  document.addEventListener('mousemove', e=>{ if(dragging) applyBarDrag(e.clientX); });
  document.addEventListener('mouseup', ()=>{ dragging = false; });

  // touch
  C_el.addEventListener('touchstart', e=>{
    if(!e.target.closest('.bar')) return;
    dragging = true;
    applyBarDrag(e.touches[0].clientX);
    e.preventDefault();
  }, {passive:false});
  document.addEventListener('touchmove', e=>{ if(dragging) applyBarDrag(e.touches[0].clientX); }, {passive:false});
  document.addEventListener('touchend', ()=>{ dragging = false; });
})();

C_el.addEventListener('change',e=>{
  const k=e.target.dataset.k; if(!k) return; const v=e.target.value;
  if(k==='apres'){ S.apres=v; setDefaults(); renderCentro(); }
  else if(k==='unid'){ const ap=apresAtual(); const mg=toMg(S.val,S.unid,ap); S.unid=v; const nv=fromMg(mg,v,ap); S.val=nv!=null?Math.round(nv*100)/100:null; renderCentro(); }
  else if(k==='vol'){ S.vol=num(v); S.volManual=true; update(); }
});

$('#saida').addEventListener('click',e=>{
  const t=e.target.closest('button'); if(!t) return;
  // preview cards
  if(t.dataset.copy!=null){ copiar($(`[data-card="${t.dataset.copy}"]`).innerText.trim()); }
  else if(t.dataset.add!=null){
    const c=CARDS[+t.dataset.add];
    S.receita.push({grupo:c.grupo, sub:c.sub, texto:$(`[data-card="${t.dataset.add}"]`).innerText.trim()});
    delete S.receitaGrp[c.grupo]; // descarta edição manual do grupo ao adicionar item novo
    update(); toast('Adicionado à receita');
  }
  // montada grupos
  else if(t.dataset.copygrp!=null){
    const gi=+t.dataset.copygrp;
    const el=$(`[data-grp="${gi}"]`);
    const grps=[]; S.receita.forEach(r=>{ let g=grps.find(x=>x.k===r.grupo); if(!g){g={k:r.grupo};grps.push(g);} });
    const g=grps[gi];
    if(el && g) copiar(g.k.toUpperCase() + '\n\n' + el.innerText.trim());
    else if(el) copiar(el.innerText.trim());
  }
  else if(t.dataset.delgrp!=null){
    const gi=+t.dataset.delgrp;
    // identificar o grupo pelo índice de renderização
    const grps=[]; S.receita.forEach(r=>{ let g=grps.find(x=>x.k===r.grupo); if(!g){g={k:r.grupo};grps.push(g);} });
    const g=grps[gi];
    if(g){ S.receita=S.receita.filter(r=>r.grupo!==g.k); delete S.receitaGrp[g.k]; update(); }
  }
  else if(t.dataset.act==='copyall'){ copiar(textoReceita()); }
  else if(t.dataset.act==='clear'){ S.receita=[]; S.receitaGrp={}; update(); }
});

// salvar edições manuais nos boxes de grupo
$('#saida').addEventListener('input',e=>{
  const gi=e.target.dataset.grp;
  if(gi!=null){
    const grps=[]; S.receita.forEach(r=>{ let g=grps.find(x=>x.k===r.grupo); if(!g){g={k:r.grupo};grps.push(g);} });
    const g=grps[+gi];
    if(g) S.receitaGrp[g.k]=e.target.innerText.trim();
  }
});

// fecha o popover de acesso (SUS) ao clicar fora dele
document.addEventListener('click',e=>{
  if(!S.acessoOpen || e.target.closest('.acc-wrap')) return;
  S.acessoOpen=false; const p=$('.apop'); if(p) p.classList.remove('open');
});

/* ---- inicialização ---- */
if(localStorage.getItem('rx_dark')==='1') document.documentElement.classList.add('dark');
renderAll();
