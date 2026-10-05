import {
  Paciente, Apresentacao, RegraDose, CondicaoRegra, Via,
  UnidadeDose, Arredondamento, CalculoEV, ResultadoCalculo, Farmaco, RegraEV
} from '../types';
import { CFG, fonteNome, fmt, fmtMg, rml, UNID_LBL, regraLabel } from '../utils/constants';

export const mgml = (ap: Apresentacao): number | null =>
  ap.mgml || (ap.reconstMl && ap.mg ? ap.mg / ap.reconstMl : null);

export const isUnid = (ap: Apresentacao): boolean =>
  ['cp', 'cap', 'sup'].includes(ap.forma);

export function nomeUnid(ap: Apresentacao, q: number): string {
  const pl = q > 1;
  const mapa: Record<string, string> = {
    cp: pl ? 'comprimidos' : 'comprimido',
    cap: pl ? 'cápsulas' : 'cápsula',
    sup: pl ? 'supositórios' : 'supositório'
  };
  return mapa[ap.forma] || '';
}

export function fracTxt(q: number): string {
  const i = Math.floor(q + 1e-9);
  const r = Math.round((q - i) * 100) / 100;
  const rw: Record<number, string> = { 0.5: 'meio', 0.25: 'um quarto de', 0.75: 'três quartos de' };
  const rt = rw[r] || (r ? fmt(r) : '');
  if (!i) return rt || '0';
  if (!r) return String(i);
  return `${i} e ${rw[r] || fmt(r)}`;
}

export function cond(se: CondicaoRegra | undefined, p: Paciente): boolean | null {
  if (!se) return true;
  if (se.ou) {
    const rs = se.ou.map(x => cond(x, p));
    if (rs.some(r => r === true)) return true;
    if (rs.every(r => r === false)) return false;
    return null;
  }
  const m = p.idadeM;
  if (se.idadeMinMeses != null && (m == null || m < se.idadeMinMeses)) return m == null ? null : false;
  if (se.idadeMaxMeses != null && (m == null || m > se.idadeMaxMeses)) return m == null ? null : false;
  if (se.idadeMinAnos != null && (p.anos == null || p.anos < se.idadeMinAnos)) return p.anos == null ? null : false;
  if (se.idadeMaxAnos != null && (p.anos == null || p.anos > se.idadeMaxAnos)) return p.anos == null ? null : false;
  if (se.pesoMin != null && (p.peso == null || p.peso < se.pesoMin)) return p.peso == null ? null : false;
  if (se.pesoMax != null && (p.peso == null || p.peso >= se.pesoMax)) return p.peso == null ? null : false;
  return true;
}

export function aplica(it: { pub?: string; se?: CondicaoRegra; vias?: Via[]; apres?: string[] }, p: Paciente, via: Via | null, apId: string | null): boolean | null {
  if (it.vias && via && !it.vias.includes(via)) return false;
  if (it.apres && apId && !it.apres.includes(apId)) return false;
  if (it.pub === 'ped' && p.pub !== 'ped') return false;
  if (it.pub === 'adulto' && p.pub === 'adulto') return true;
  return cond(it.se, p);
}

export const viasDisp = (d: Farmaco): Via[] =>
  (['VO', 'EV', 'IM', 'VR', 'NASAL'] as Via[]).filter(v => d.apresentacoes.some(a => a.vias.includes(v)));

export function unidades(ap: Apresentacao, peso: number | null, modo: string): UnidadeDose[] {
  if (ap.unidades) return ap.unidades;
  const u: UnidadeDose[] = [];
  if (peso) {
    u.push('mg_kg_dose');
    if (modo !== 'agora') u.push('mg_kg_dia');
  }
  if (ap.mg) u.push('mg');
  if (mgml(ap)) u.push('ml');
  if (ap.forma === 'gotas') u.push('gotas');
  if (isUnid(ap)) u.push('unid');
  if (!u.length) u.push('ml');
  return u;
}

export const unidLbl = (u: UnidadeDose, ap: Apresentacao): string =>
  u === 'unid' ? nomeUnid(ap, 2) : (UNID_LBL[u] || u);

export function toMg(val: number | null, unid: UnidadeDose, ap: Apresentacao, peso: number | null, n: number): number | null {
  if (val == null) return null;
  switch (unid) {
    case 'mg_kg_dose': return peso ? val * peso : null;
    case 'mg_kg_dia':  return peso ? (val * peso) / n : null;
    case 'mg':  return val;
    case 'ml':  {
      const c = mgml(ap);
      return c ? val * c : val;
    }
    case 'gotas': return ap.mgml && ap.gotasml ? (val * ap.mgml) / ap.gotasml : val;
    case 'unid':  return ap.mg ? val * ap.mg : val;
    case 'sachet': return val;
    default: return val;
  }
}

export function fromMg(mg: number | null, unid: UnidadeDose, ap: Apresentacao, peso: number | null, n: number): number | null {
  if (mg == null) return null;
  switch (unid) {
    case 'mg_kg_dose': return peso ? mg / peso : null;
    case 'mg_kg_dia':  return peso ? (mg * n) / peso : null;
    case 'mg':  return mg;
    case 'ml':  {
      const c = mgml(ap);
      return c ? mg / c : mg;
    }
    case 'gotas': return ap.mgml && ap.gotasml ? mg / (ap.mgml / ap.gotasml) : mg;
    case 'unid':  return ap.mg ? mg / ap.mg : mg;
    case 'sachet': return mg;
    default: return mg;
  }
}

export function faixaRegra(r: RegraDose, p: Paciente, n: number): [number, number] | null {
  const k = p.peso;
  let f: [number, number] | null = null;
  if (r.tipo === 'mg' || r.tipo === 'ml' || r.tipo === 'sachet') f = [r.min, r.max];
  else if (r.tipo === 'mg_kg_dose') f = k ? [r.min * k, r.max * k] : null;
  else if (r.tipo === 'mg_kg_dia')  f = k ? [(r.min * k) / n, (r.max * k) / n] : null;
  else if (r.tipo === 'mg_dia')     f = [r.min / n, r.max / n];
  if (f && r.maxDoseMg) f = [Math.min(f[0], r.maxDoseMg), Math.min(f[1], r.maxDoseMg)];
  return f;
}

export function arred(mg: number | null, ap: Apresentacao): Arredondamento | null {
  if (mg == null || !(mg > 0)) return null;
  if (ap.forma === 'sachet') {
    const q = Math.max(1, Math.round(mg));
    return { mg: q, ml: null, txt: `${q} envelope${q > 1 ? 's' : ''}`, whole: true };
  }
  if (ap.forma === 'sol_nasal' || ap.forma === 'sol_sro' || !mgml(ap)) {
    const ml = rml(mg);
    return { mg: ml, ml, txt: `${fmt(ml)} mL`, whole: false };
  }
  if (ap.forma === 'gotas' && ap.mgml && ap.gotasml) {
    const mpg = ap.mgml / ap.gotasml;
    const g = Math.max(1, Math.round(mg / mpg));
    return { mg: g * mpg, txt: `${g} gota${g > 1 ? 's' : ''}`, whole: false };
  }
  if (isUnid(ap) && ap.mg) {
    const st = ap.frac || 1;
    const q = Math.max(st, Math.round((mg / ap.mg) / st) * st);
    const sing = nomeUnid(ap, 1);
    const plur = nomeUnid(ap, 2);
    const i = Math.floor(q + 1e-9);
    const r = Math.round((q - i) * 100) / 100;
    let txt = '';
    if (q === 0.5) txt = `meio ${sing}`;
    else if (q === 0.25) txt = `um quarto de ${sing}`;
    else if (q === 0.75) txt = `três quartos de ${sing}`;
    else if (r === 0.5) txt = `${i} ${i === 1 ? sing : plur} e meio`;
    else if (r === 0.25) txt = `${i} ${i === 1 ? sing : plur} e um quarto`;
    else txt = `${fracTxt(q)} ${q <= 1 ? sing : plur}`;
    return { mg: q * ap.mg, q, txt, whole: true };
  }
  const c = mgml(ap);
  if (!c) {
    const ml = rml(mg);
    return { mg: ml, ml, txt: `${fmt(ml)} mL`, whole: false };
  }
  const ml = rml(mg / c);
  const mgR = ml * c;
  let txt = `${fmt(ml)} mL`;
  let whole = false;
  let k = 0;
  if (ap.forma === 'amp' && ap.volml) {
    k = ml / ap.volml;
    if (Math.abs(k - Math.round(k)) < 1e-6 && k >= 1) {
      k = Math.round(k);
      whole = true;
      txt = `${k} ampola${k > 1 ? 's' : ''} (${fmt(ml)} mL)`;
    }
  }
  if (ap.forma === 'fap' && ap.mg) {
    k = mgR / ap.mg;
    if (Math.abs(k - Math.round(k)) < 1e-6 && k >= 1) {
      k = Math.round(k);
      whole = true;
      txt = `${k} frasco${k > 1 ? 's' : ''}-ampola`;
    }
  }
  return { mg: mgR, ml, txt, whole, k };
}

export function volAuto(ev: RegraEV, mg: number, pub: string, vDose: number): number {
  if (pub === 'adulto' && ev.volPadraoAdulto) {
    const x = ev.volPadraoAdulto.find(e => mg <= e[0]);
    if (x) return x[1];
  }
  const conc = (pub === 'ped' && ev.concUsualPed) || ev.concUsual || ev.concMax;
  if (conc) {
    const vCalc = mg / conc;
    const vCandidato = vCalc > CFG.limiteSeringaMl ? vCalc - vDose : vCalc;
    const op = ev.volOpcoes.find(v => v >= vCandidato);
    if (op) return op;
  }
  return ev.volOpcoes[0];
}

export function calcularPrescricao(
  drug: Farmaco,
  apres: Apresentacao,
  p: Paciente,
  via: Via,
  modo: string,
  dosesDia: number,
  doseVal: number | null,
  unid: UnidadeDose,
  evDil: string | null,
  evVol: number | null,
  evVolManual: boolean,
  evTempo: number | null
): ResultadoCalculo {
  const n = modo === 'agora' ? 1 : dosesDia;
  const C: ResultadoCalculo = {
    R: [],
    dmin: 1,
    dmax: 4,
    n,
    lo: null,
    hi: null,
    dailyMax: null,
    dailySrc: null,
    mgRaw: null,
    arr: null,
    mg: null,
    ev: null,
    alerts: [],
    notes: [],
    infos: []
  };

  // 1. Contraindicações
  (drug.contra || []).forEach(c => {
    if (aplica(c, p, via, apres.id) === true) {
      C.alerts.push({ t: c.msg, f: fonteNome(drug, c.fonte), tr: c.trecho, strong: c.strong });
    }
  });

  // 2. Conflitos de fonte
  (drug.conflitos || []).forEach(cf => {
    if (!cf.vias || cf.vias.includes(via)) {
      C.notes.push({ t: cf.txt });
    }
  });

  // 3. Regras ativas
  C.R = drug.regras.filter(r => aplica(r, p, via, apres.id) === true);
  if (!C.R.length) {
    if (p.pub === 'ped' && !p.peso) {
      C.infos.push({ t: 'Informe o peso da criança para consultar as regras em mg/kg.' });
    }
    return C;
  }

  const dms = C.R.map(r => (r.dosesDia ? r.dosesDia[0] : 1));
  const dMs = C.R.map(r => (r.dosesDia ? r.dosesDia[1] : 4));
  C.dmin = Math.min(...dms);
  C.dmax = Math.max(...dMs);

  if (modo !== 'agora' && (n < C.dmin || n > C.dmax)) {
    C.alerts.push({ t: `Frequência de ${n}×/dia fora do recomendado pela fonte (${C.dmin} a ${C.dmax}×/dia).` });
  }

  // Faixas recomendadas
  const fx: { r: RegraDose; f: [number, number] }[] = [];
  for (const r of C.R) {
    const f = faixaRegra(r, p, n);
    if (f) fx.push({ r, f });
    else C.notes.push({ t: `Informe o peso para aplicar a regra ${regraLabel(r)}.` });
  }

  if (fx.length) {
    C.lo = Math.min(...fx.map(x => x.f[0]));
    C.hi = Math.min(...fx.map(x => x.f[1]));
    if (C.lo > C.hi) C.lo = C.hi;
    if (fx.length > 1 && new Set(fx.map(x => x.f[1].toFixed(2))).size > 1) {
      C.notes.push({
        t: `Conflito: mais de uma regra se aplica (${fx.map(x => regraLabel(x.r) + ' → máx. ' + fmtMg(x.f[1])).join('; ')}). Considerando a mais restritiva: máx. ${fmtMg(C.hi)} por dose.`
      });
    }
  }

  for (const r of C.R) {
    if (r.dosesDia) {
      C.dmin = Math.max(C.dmin, r.dosesDia[0]);
      C.dmax = Math.min(C.dmax, r.dosesDia[1]);
    }
  }

  // Máximos diários
  const ex: { m: any; v: number }[] = [];
  for (const m of drug.maximos || []) {
    if (aplica(m, p, via, apres.id) !== true) continue;
    let v: number | null = null;
    if (m.tipo === 'mg_dia') v = m.valor ?? null;
    else if (m.tipo === 'mg_kg_dia' && p.peso && m.valor != null) v = m.valor * p.peso;
    else if (m.tipo === 'mg_dia_peso' && p.peso != null && m.faixas) {
      const f = m.faixas.find(f => p.peso! >= f[0] && p.peso! < f[1]);
      if (f) v = f[2];
    }
    if (v != null) ex.push({ v, m });
  }

  const imp: { r: RegraDose; v: number; nm: number }[] = [];
  for (const r of C.R) {
    const nm = (r.dosesDia || [1, 4])[1];
    const f = faixaRegra(r, p, nm);
    if (f) imp.push({ v: f[1] * nm, r, nm });
  }

  const allMax = [...ex.map(x => x.v), ...imp.map(x => x.v)];
  if (allMax.length) C.dailyMax = Math.min(...allMax);
  const exMin = ex.length ? Math.min(...ex.map(x => x.v)) : null;
  C.dailySrc = ex.find(x => x.v === exMin) || null;

  if (modo !== 'agora') {
    if (ex.length > 1 && new Set(ex.map(x => x.v)).size > 1) {
      C.notes.push({
        t: `Conflito entre máximos diários (${ex.map(x => fmtMg(x.v)).join(' × ')}). Considerando o mais restritivo: ${fmtMg(exMin)}/dia.`
      });
    }
    for (const x of imp) {
      if (exMin != null && x.v > exMin + 0.01) {
        C.notes.push({
          t: `Conflito: a regra ${regraLabel(x.r)} permitiria até ${fmtMg(x.v)}/dia (${x.nm}×/dia), mas o máximo diário da fonte é ${fmtMg(exMin)}/dia. Considerando o mais restritivo.`
        });
      }
    }
  }

  // Cálculo da dose
  C.mgRaw = toMg(doseVal, unid, apres, p.peso, n);
  C.arr = arred(C.mgRaw, apres);

  if (C.arr) {
    const mg = C.arr.mg;
    C.mg = mg;
    const srcR = fx.length ? fx.reduce((a, b) => (a.f[1] <= b.f[1] ? a : b)).r : null;
    const fR = srcR ? { f: fonteNome(drug, srcR.fonte), tr: srcR.trecho } : {};

    if (C.hi != null && mg > C.hi * 1.0001) {
      C.alerts.push({ t: `Acima da dose máxima por tomada: ${fmtMg(mg)} (máx. ${fmtMg(C.hi)}).`, ...fR });
    }
    if (C.lo != null && mg < C.lo * 0.9999) {
      C.alerts.push({ t: `Abaixo da dose mínima recomendada: ${fmtMg(mg)} (mín. ${fmtMg(C.lo)}).`, ...fR });
    }

    if (modo !== 'agora') {
      const dia = mg * n;
      if (C.dailyMax != null && dia > C.dailyMax * 1.0001) {
        const s = C.dailySrc && C.dailyMax === C.dailySrc.v
          ? { f: fonteNome(drug, C.dailySrc.m.fonte), tr: C.dailySrc.m.trecho }
          : fR;
        C.alerts.push({ t: `Dose diária (${fmtMg(dia)}/dia) ultrapassa o máximo (${fmtMg(C.dailyMax)}/dia).`, ...s });
      }
    }
  }

  // Cálculo Endovenoso (EV)
  if (via === 'EV' && drug.ev && C.arr && C.arr.mg) {
    const ev = drug.ev;
    const mg = C.arr.mg;
    const cAmp = mgml(apres);
    const vDose = apres.forma === 'fap' ? (apres.reconstMl || 0) : cAmp ? mg / cAmp : 0;
    const vol = evVolManual && evVol != null ? evVol : volAuto(ev, mg, p.pub, vDose);
    const seringa = vol <= CFG.limiteSeringaMl;
    const conc = Math.round((mg / vol) * 100) / 100;

    let tMin: number | null = null;
    let tMax: number | null = null;
    let tPadrao: number | null = null;
    let tTxt = '';

    const tp = p.pub === 'ped' && ev.tempo && ev.tempo.ped ? ev.tempo.ped : ev.tempo ? ev.tempo.adulto : null;
    if (tp) {
      tMin = tp.min || null;
      tMax = tp.max || null;
      tPadrao = tp.padrao || null;
      tTxt = tp.txt || '';
    }

    const t = evTempo != null ? evTempo : (tPadrao || tMin || 15);
    const mlh = t > 0 ? Math.round((vol / (t / 60)) * 10) / 10 : null;
    const gtt = mlh != null ? Math.round((mlh * CFG.gotasPorMl) / 60) : null;

    C.ev = { vDose, vol, conc, t, tMin, tMax, tTxt, seringa, gtt, mlh };

    if (ev.concMax && conc > ev.concMax * 1.0001) {
      C.alerts.push({ t: `Concentração final (${fmt(conc)} mg/mL) ultrapassa o limite máximo (${fmt(ev.concMax)} mg/mL).`, f: ev.fonteTxt });
    }
  }

  return C;
}
