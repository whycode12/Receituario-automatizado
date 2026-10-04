/* =====================================================================
   ENGINE — motor de cálculo e validação
   Depende de: config.js (CFG, FONTES, DB, S, fmt, fmtMg, rml, fonteNome,
               UNID_LBL, VIA_GRUPO, VIA_EXT, norm)
   ===================================================================== */

function paciente(){
  let idadeM = null;
  if(S.anos!=null || S.meses!=null) idadeM = (S.anos||0)*12 + (S.meses||0);
  else if(S.pub==='adulto') idadeM = CFG.idadeAdultoPadraoMeses;
  if(S.pub==='adulto' && idadeM==null) idadeM = CFG.idadeAdultoPadraoMeses;
  return {pub:S.pub, peso:S.peso, idadeM};
}

// true | false | null (indeterminado por falta de dado)
function cond(se,p){
  if(!se) return true;
  let res=true;
  const chk=(v,f)=>{ if(v==null){ if(res===true) res=null; } else if(!f(v)) res=false; };
  if(se.idadeMinMeses!=null) chk(p.idadeM, v=>v>=se.idadeMinMeses);
  if(se.idadeMaxMeses!=null) chk(p.idadeM, v=>v<se.idadeMaxMeses);
  if(se.idadeMinAnos!=null)  chk(p.idadeM, v=>v>=se.idadeMinAnos*12);
  if(se.idadeMaxAnos!=null)  chk(p.idadeM, v=>v<se.idadeMaxAnos*12);
  if(se.pesoMin!=null) chk(p.peso, v=>v>=se.pesoMin);
  if(se.pesoMax!=null) chk(p.peso, v=>v<se.pesoMax);
  if(res===false) return false;
  if(se.ou){
    const rs=se.ou.map(c=>cond(c,p));
    const o = rs.includes(true) ? true : rs.includes(null) ? null : false;
    if(o===false) return false;
    if(o===null) res=null;
  }
  return res;
}

function aplica(it,p,via,apId){
  if(it.vias && via && !it.vias.includes(via)) return false;
  if(it.apres && apId && !it.apres.includes(apId)) return false;
  if(it.pub==='ped' && p.pub!=='ped') return false;
  if(it.pub==='adulto' && p.pub==='adulto') return true;
  return cond(it.se,p);
}

const viasDisp = d => ['VO','EV','IM','VR','NASAL'].filter(v=>d.apresentacoes.some(a=>a.vias.includes(v)));
const apresAtual = () => S.drug && S.drug.apresentacoes.find(a=>a.id===S.apres);
const mgml = ap => ap.mgml || (ap.reconstMl ? ap.mg/ap.reconstMl : null);
const isUnid = ap => ['cp','cap','sup'].includes(ap.forma);

function nomeUnid(ap,q){
  const pl = q>1;
  return {cp:pl?'comprimidos':'comprimido', cap:pl?'cápsulas':'cápsula', sup:pl?'supositórios':'supositório'}[ap.forma] || '';
}

function fracTxt(q){
  const i=Math.floor(q+1e-9), r=Math.round((q-i)*100)/100;
  const rw={0.5:'meio',0.25:'um quarto de',0.75:'três quartos de'};
  const rt=rw[r]||(r?fmt(r):'');
  if(!i) return rt||'0'; if(!r) return String(i);
  return `${i} e ${rw[r]||fmt(r)}`;
}

function regraLabel(r){
  const u = UNID_LBL[r.tipo];
  const v = r.min===r.max ? fmt(r.min) : `${fmt(r.min)}–${fmt(r.max)}`;
  return `${r.vias.join('/')} ${r.pub==='ped'?'pediátrico':'adulto'}: ${v} ${u}`;
}

function unidades(ap){
  const u=[];
  if(ap.unidades) return ap.unidades;
  if(S.peso){ u.push('mg_kg_dose'); if(S.modo!=='agora') u.push('mg_kg_dia'); }
  if(ap.mg) u.push('mg');
  if(mgml(ap)) u.push('ml');
  if(ap.forma==='gotas') u.push('gotas');
  if(isUnid(ap)) u.push('unid');
  if(!u.length) u.push('ml');
  return u;
}

const unidLbl = (u,ap) => u==='unid' ? nomeUnid(ap,2) : (UNID_LBL[u] || u);
function nAtual(){ return S.modo==='agora' ? 1 : S.n; }

function toMg(val,unid,ap){
  if(val==null) return null;
  const k=S.peso, n=nAtual();
  switch(unid){
    case 'mg_kg_dose': return k ? val*k : null;
    case 'mg_kg_dia':  return k ? val*k/n : null;
    case 'mg':  return val;
    case 'ml':  return mgml(ap) ? val*mgml(ap) : val;
    case 'gotas': return ap.mgml ? val*ap.mgml/ap.gotasml : val;
    case 'unid':  return ap.mg ? val*ap.mg : val;
    case 'sachet': return val;
    default: return val;
  }
}

function fromMg(mg,unid,ap){
  if(mg==null) return null;
  const k=S.peso, n=nAtual();
  switch(unid){
    case 'mg_kg_dose': return k ? mg/k : null;
    case 'mg_kg_dia':  return k ? mg*n/k : null;
    case 'mg':  return mg;
    case 'ml':  return mgml(ap) ? mg/mgml(ap) : mg;
    case 'gotas': return ap.mgml ? mg/(ap.mgml/ap.gotasml) : mg;
    case 'unid':  return ap.mg ? mg/ap.mg : mg;
    case 'sachet': return mg;
    default: return mg;
  }
}

function faixaRegra(r,p,n){
  const k=p.peso; let f=null;
  if(r.tipo==='mg'||r.tipo==='ml'||r.tipo==='sachet') f=[r.min,r.max];
  else if(r.tipo==='mg_kg_dose') f = k ? [r.min*k, r.max*k] : null;
  else if(r.tipo==='mg_kg_dia')  f = k ? [r.min*k/n, r.max*k/n] : null;
  else if(r.tipo==='mg_dia')     f = [r.min/n, r.max/n];
  if(f && r.maxDoseMg) f=[Math.min(f[0],r.maxDoseMg), Math.min(f[1],r.maxDoseMg)];
  return f;
}

function arred(mg,ap){
  if(!(mg>0)) return null;
  if(ap.forma==='sachet'){
    const q = Math.max(1, Math.round(mg));
    return {mg:q, ml:null, txt:`${q} envelope${q>1?'s':''}`, whole:true};
  }
  if(ap.forma==='sol_nasal'||ap.forma==='sol_sro'||!mgml(ap)){
    const ml = rml(mg);
    return {mg:ml, ml, txt:`${fmt(ml)} mL`, whole:false};
  }
  if(ap.forma==='gotas'){
    const mpg=ap.mgml/ap.gotasml, g=Math.max(1,Math.round(mg/mpg));
    return {mg:g*mpg, txt:`${g} gota${g>1?'s':''}`, whole:false};
  }
  if(isUnid(ap)){
    const st=ap.frac||1, q=Math.max(st, Math.round(mg/ap.mg/st)*st);
    const sing=nomeUnid(ap,1), plur=nomeUnid(ap,2);
    const i=Math.floor(q+1e-9), r=Math.round((q-i)*100)/100;
    let txt;
    if(q===0.5)       txt=`meio ${sing}`;
    else if(q===0.25) txt=`um quarto de ${sing}`;
    else if(q===0.75) txt=`três quartos de ${sing}`;
    else if(r===0.5)  txt=`${i} ${i===1?sing:plur} e meio`;
    else if(r===0.25) txt=`${i} ${i===1?sing:plur} e um quarto`;
    else              txt=`${fracTxt(q)} ${q<=1?sing:plur}`;
    return {mg:q*ap.mg, q, txt, whole:true};
  }
  const c=mgml(ap), ml=rml(mg/c), mgR=ml*c;
  let txt=`${fmt(ml)} mL`, whole=false, k=0;
  if(ap.forma==='amp'){ k=ml/ap.volml; if(Math.abs(k-Math.round(k))<1e-6 && k>=1){ k=Math.round(k); whole=true; txt=`${k} ampola${k>1?'s':''} (${fmt(ml)} mL)`; } }
  if(ap.forma==='fap'){ k=mgR/ap.mg; if(Math.abs(k-Math.round(k))<1e-6 && k>=1){ k=Math.round(k); whole=true; txt=`${k} frasco${k>1?'s':''}-ampola`; } }
  return {mg:mgR, ml, txt, whole, k};
}

function volAuto(ev,mg,pub,vDose){
  if(pub==='adulto' && ev.volPadraoAdulto){ const x=ev.volPadraoAdulto.find(e=>mg<=e[0]); if(x) return x[1]; }
  const conc=(pub==='ped' && ev.concUsualPed) || ev.concUsual || ev.concMax;
  const min=Math.max(vDose, conc?mg/conc:0, ev.volMin||0);
  return ev.volOpcoes.find(o=>o>=min-1e-9) ?? ev.volOpcoes[ev.volOpcoes.length-1];
}

function calc(){
  const d=S.drug, p=paciente(), ap=apresAtual(), via=S.via, n=nAtual();
  const C={alerts:[], notes:[], infos:[], n, R:[], lo:null, hi:null, dailyMax:null, dmin:1, dmax:4};
  if(!d||!ap) return C;

  for(const c of d.contra||[]){
    const a=aplica(c,p,via,ap.id);
    if(a===true) C.alerts.push({t:'Contraindicação: '+c.msg, f:fonteNome(d,c.fonte), tr:c.trecho, strong:true});
    else if(a===null) C.notes.push({t:'Informe idade e peso para checar: '+c.msg});
  }

  const Rnull=[];
  for(const r of d.regras){ const a=aplica(r,p,via,ap.id); if(a===true) C.R.push(r); else if(a===null) Rnull.push(r); }
  if(!C.R.length){
    if(Rnull.length) C.notes.push({t:'Informe peso e idade para localizar a dose recomendada nas fontes.'});
    else C.alerts.push({t:`Sem dose definida nas fontes para ${via}${p.pub==='ped'?' nesta faixa de idade/peso':''} com esta apresentação — considerado não recomendado.`, f:Object.keys(d.fontes).map(f=>FONTES[f]).join(' · '), strong:true});
  }

  const fx=[];
  for(const r of C.R){
    const f=faixaRegra(r,p,n);
    if(f) fx.push({r,f}); else C.notes.push({t:`Informe o peso para aplicar a regra ${regraLabel(r)}.`});
  }
  if(fx.length){
    C.lo=Math.min(...fx.map(x=>x.f[0])); C.hi=Math.min(...fx.map(x=>x.f[1]));
    if(C.lo>C.hi) C.lo=C.hi;
    if(fx.length>1 && new Set(fx.map(x=>x.f[1].toFixed(2))).size>1)
      C.notes.push({t:`Conflito: mais de uma regra se aplica (${fx.map(x=>regraLabel(x.r)+' → máx. '+fmtMg(x.f[1])).join('; ')}). Considerando a mais restritiva: máx. ${fmtMg(C.hi)} por dose.`});
  }
  for(const r of C.R){ if(r.dosesDia){ C.dmin=Math.max(C.dmin,r.dosesDia[0]); C.dmax=Math.min(C.dmax,r.dosesDia[1]); } }

  const ex=[];
  for(const m of d.maximos||[]){
    if(aplica(m,p,via,ap.id)!==true) continue;
    let v=null;
    if(m.tipo==='mg_dia') v=m.valor;
    else if(m.tipo==='mg_kg_dia' && p.peso) v=m.valor*p.peso;
    else if(m.tipo==='mg_dia_peso' && p.peso!=null){ const f=m.faixas.find(f=>p.peso>=f[0]&&p.peso<f[1]); if(f) v=f[2]; }
    if(v!=null) ex.push({v,m});
  }
  const imp=[];
  for(const r of C.R){
    const nm=(r.dosesDia||[1,4])[1], f=faixaRegra(r,p,nm);
    if(f) imp.push({v:f[1]*nm, r, nm});
  }
  const allMax=[...ex.map(x=>x.v), ...imp.map(x=>x.v)];
  if(allMax.length) C.dailyMax=Math.min(...allMax);
  const exMin = ex.length ? Math.min(...ex.map(x=>x.v)) : null;
  C.dailySrc = ex.find(x=>x.v===exMin);
  if(S.modo!=='agora'){
    if(ex.length>1 && new Set(ex.map(x=>x.v)).size>1)
      C.notes.push({t:`Conflito entre máximos diários (${ex.map(x=>fmtMg(x.v)).join(' × ')}). Considerando o mais restritivo: ${fmtMg(exMin)}/dia.`});
    for(const x of imp) if(exMin!=null && x.v>exMin+0.01)
      C.notes.push({t:`Conflito: a regra ${regraLabel(x.r)} permitiria até ${fmtMg(x.v)}/dia (${x.nm}×/dia), mas o máximo diário da fonte é ${fmtMg(exMin)}/dia. Considerando o mais restritivo.`});
  }

  C.mgRaw = toMg(S.val,S.unid,ap);
  C.arr = arred(C.mgRaw,ap);
  if(C.arr){
    const mg=C.arr.mg; C.mg=mg;
    if(C.mgRaw && Math.abs(mg-C.mgRaw)/C.mgRaw>0.02) C.infos.push({t:`Arredondado para ${C.arr.txt} → dose real ${fmtMg(mg)}${p.peso?` (${fmt(mg/p.peso)} mg/kg)`:''}.`});
    const srcR = fx.length ? fx.reduce((a,b)=>a.f[1]<=b.f[1]?a:b).r : null;
    const fR = srcR ? {f:fonteNome(d,srcR.fonte), tr:srcR.trecho} : {};
    if(C.hi!=null && mg>C.hi*1.0001)
      C.alerts.push({t:`Acima da dose máxima por tomada: ${fmtMg(mg)} (máx. ${fmtMg(C.hi)}${p.peso?` = ${fmt(C.hi/p.peso)} mg/kg`:''}).`, ...fR});
    if(C.lo!=null && mg<C.lo*0.9999)
      C.alerts.push({t:`Abaixo da dose mínima recomendada: ${fmtMg(mg)} (mín. ${fmtMg(C.lo)}${p.peso?` = ${fmt(C.lo/p.peso)} mg/kg`:''}).`, ...fR});
    if(S.modo!=='agora'){
      const dia=mg*n;
      if(C.dailyMax!=null && dia>C.dailyMax*1.0001){
        const s=C.dailySrc && C.dailyMax===C.dailySrc.v ? {f:fonteNome(d,C.dailySrc.m.fonte), tr:C.dailySrc.m.trecho} : fR;
        C.alerts.push({t:`Dose diária ${fmtMg(dia)} acima do máximo de ${fmtMg(C.dailyMax)}/dia.`, ...s});
      }
      if(C.R.length && (n<C.dmin || n>C.dmax))
        C.alerts.push({t:`Frequência fora do recomendado: ${n}×/dia (fonte: ${C.dmin===C.dmax?C.dmin:C.dmin+' a '+C.dmax}×/dia).`, ...fR});
      if(S.modo==='continuo') for(const r of C.R) if(r.duracaoMaxDias && S.dias>r.duracaoMaxDias)
        C.alerts.push({t:`Duração acima do máximo: ${S.dias} dias (máx. ${r.duracaoMaxDias} dias).`, f:fonteNome(d,r.fonte), tr:r.trecho});
    }
    for(const r of C.R) if(r.duracaoMaxDias && S.modo!=='continuo') C.infos.push({t:`Duração máxima do tratamento: ${r.duracaoMaxDias*24} h (${FONTES[r.fonte]}).`});
  }
  if(ap.obs) C.infos.push({t:ap.obs});

  if(via==='EV' && d.ev && C.arr){
    const ev=d.ev, E={};
    const c=mgml(ap);
    E.vDose = C.arr.ml ?? C.mg/c;
    E.vol = S.volManual && S.vol ? S.vol : volAuto(ev,C.mg,p.pub,E.vDose);
    E.seringa = E.vol <= CFG.limiteSeringaMl;
    E.conc = C.mg/E.vol;
    if(ev.concMax && E.conc>ev.concMax*1.0001) C.alerts.push({t:`Concentração final ${fmt(E.conc)} mg/mL acima da máxima (${fmt(ev.concMax)} mg/mL). Aumente o volume.`, f:ev.fonteTxt});
    if(E.vol<E.vDose) C.alerts.push({t:'Volume final menor que o volume da dose.'});
    const tc = (ev.tempo && (ev.tempo[p.pub]||ev.tempo.adulto)) || {};
    E.tMinVel = ev.velMaxMgMin ? C.mg/ev.velMaxMgMin : null;
    E.tMin = Math.max(tc.min||0, E.tMinVel||0) || null;
    E.tMax = tc.max||null; E.tTxt=tc.txt||'';
    E.t = S.tempo ?? tc.padrao ?? (E.tMin?Math.ceil(E.tMin):null);
    if(E.t!=null){
      if(E.tMin && E.t<E.tMin-1e-9) C.alerts.push({t:`Tempo de administração abaixo do mínimo: ${fmt(E.t,1)} min (mín. ${fmt(Math.ceil(E.tMin*10)/10,1)} min).`, f:tc.txt});
      if(E.tMax && E.t>E.tMax+1e-9) C.alerts.push({t:`Tempo acima da faixa de referência: ${fmt(E.t,1)} min (faixa até ${E.tMax} min).`, f:tc.txt});
      const vt=E.vol+(E.seringa?0:E.vDose);
      E.gtt = Math.round(vt*CFG.gotasPorMl/E.t);
      E.mlh = Math.round(vt*60/E.t);
    }
    for(const cf of d.conflitos||[]) if(!cf.vias||cf.vias.includes('EV')) C.notes.push({t:cf.txt});
    C.ev=E;
  }
  return C;
}
