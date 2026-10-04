/* =====================================================================
   CONFIGURAÇÕES GERAIS
   ===================================================================== */
const CFG = {
  limiteSeringaMl: 20,          // até este volume: seringa (bolus lento manual); acima: bolsa
  gotasPorMl: 20,               // equipo macrogotas
  idadeAdultoPadraoMeses: 216,  // modo Adulto sem idade informada = 18 anos
  colunaQuantidade: 50          // coluna (posição) onde a quantidade SEMPRE começa (ajuste se precisar)
};

const FONTES = {
  HSL:  'Guia Farmacêutico Hospital Sírio-Libanês',
  EINP: 'Manual Farmacêutico Einstein – Tabela de diluição IV pediátrica',
  EINA: 'Manual Farmacêutico Einstein – Tabela de diluição IV adulto',
  SBP:  'Sociedade Brasileira de Pediatria (SBP) – Documento Científico de Higiene Nasal',
  MS:   'Ministério da Saúde – Manual de Terapia de Reidratação Oral (TRO)',
  BULA: '⚠ Bula do fabricante (FORA das fontes HSL/Einstein; conferir no Bulário ANVISA)'
};

/* =====================================================================
   BANCO DE FÁRMACOS — array global preenchido pelos arquivos em db/
   ===================================================================== */
const DB = [];

/* =====================================================================
   ESTADO GLOBAL
   ===================================================================== */
const $ = s => document.querySelector(s);
const S = {
  pub:'adulto', peso:null, anos:null, meses:null,
  drug:null, via:null, apres:null, modo:'sn', unid:'mg', val:null, n:4, dias:7, cond:'',
  dil:null, vol:null, volManual:false, tempo:null, frascoMl:null,
  busca:'', receita:[], receitaGrp:{}, acessoOpen:false,
  favs:JSON.parse(localStorage.getItem('rx_favs')||'[]')
};

/* =====================================================================
   UTILITÁRIOS
   ===================================================================== */
const num = v => { if(v==null||v==='') return null; const n=parseFloat(String(v).replace(',','.')); return isNaN(n)?null:n; };
const fmt = (n,d=2) => n==null||isNaN(n) ? '—' : (Math.round(n*10**d)/10**d).toLocaleString('pt-BR',{maximumFractionDigits:d});
const fmtMg = mg => `${fmt(mg,1)} mg`;
const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const rml = v => v<1 ? Math.round(v*100)/100 : Math.round(v*10)/10;
const fonteNome = (d,f) => (FONTES[f] || f) + (d.fontes && d.fontes[f] ? ` · atualizado em ${d.fontes[f]}` : '');

const UNID_LBL = {mg_kg_dose:'mg/kg/dose', mg_kg_dia:'mg/kg/dia', mg:'mg', ml:'mL', gotas:'gotas', mg_dia:'mg/dia', sachet:'envelope(s)'};
const VIA_GRUPO = {VO:'Uso Oral', VR:'Uso Retal', IM:'Uso Intramuscular', EV:'Uso Endovenoso', NASAL:'Uso Nasal'};
const VIA_EXT   = {VO:'via oral', VR:'via retal', IM:'via intramuscular', EV:'via intravenosa', NASAL:'via nasal'};

function toast(t='Copiado'){ const e=$('#toast'); e.textContent=t; e.classList.add('on'); setTimeout(()=>e.classList.remove('on'),1200); }
function copiar(txt){
  if(navigator.clipboard && window.isSecureContext){ navigator.clipboard.writeText(txt).then(()=>toast()); return; }
  const ta=document.createElement('textarea'); ta.value=txt; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); toast();
}
