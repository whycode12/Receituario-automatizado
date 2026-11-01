import { Farmaco, Apresentacao, ResultadoCalculo, Paciente, Via, ModoUso, ItemReceita } from '../types';
import { fmt, fmtMg, leader, rml, VIA_EXT, VIA_GRUPO } from '../utils/constants';
import { mgml } from './calculator';

export interface PrescriptionParams {
  drug: Farmaco;
  apres: Apresentacao;
  calcResult: ResultadoCalculo;
  paciente: Paciente;
  via: Via;
  modo: ModoUso;
  n: number;
  condText: string;
  dias: number;
  usoContinuo?: boolean;
  frascoMl: number | null;
  evDil: string;
}

export function isAntibiotico(drug: Farmaco): boolean {
  const cat = (drug.categoria || '').toLowerCase();
  const classe = (drug.classe || '').toLowerCase();

  // Antifúngicos puros e antiparasitários puros sem ação antibacteriana
  if (classe.includes('antifúngic') || cat.includes('antifúngic')) {
    return false;
  }
  if (
    cat.includes('antiparasitários') &&
    !classe.includes('antibacteriano') &&
    !classe.includes('antimicrobiano') &&
    !classe.includes('antibiótico')
  ) {
    return false;
  }

  if (cat.includes('antimicrobianos') || cat.includes('antibióticos')) {
    return true;
  }
  if (
    classe.includes('antibacteriano') ||
    classe.includes('antibiótico') ||
    classe.includes('antimicrobiano') ||
    classe.includes('penicilina') ||
    classe.includes('cefalosporina') ||
    classe.includes('macrolídeo') ||
    classe.includes('fluoroquinolona') ||
    classe.includes('quinolona') ||
    classe.includes('lincosamida') ||
    classe.includes('tetraciclina') ||
    classe.includes('sulfonamida') ||
    classe.includes('carbapenêmico') ||
    classe.includes('aminoglicosídeo')
  ) {
    return true;
  }
  return false;
}

export function getHorariosSugeridos(modo: ModoUso, n: number, via: Via, drug?: Farmaco): string | null {
  const isAbx = drug ? isAntibiotico(drug) : false;
  // Sugestão para todos os fármacos em uso 'continuo', ou antibióticos que não sejam dose imediata ('agora')
  const shouldSuggest = modo === 'continuo' || (isAbx && modo !== 'agora');
  if (!shouldSuggest) return null;

  let times: string | null = null;
  if (n === 1) {
    times = '8h';
  } else if (n === 2) {
    times = '8h e 20h';
  } else if (n === 3) {
    times = '6h, 14h, 22h';
  } else if (n === 4) {
    times = '6h, 12h, 18h, 00h';
  }

  if (!times) return null;

  const prefix = n === 1 ? 'Sugestão de horário' : 'Sugestão de horários';
  return `${prefix}: ${times}. Utilize alarme recorrente no celular para evitar esquecimento.`;
}

export const getHorariosSugeridosAntibiotico = (h: number, n: number, via: Via): string | null => {
  return getHorariosSugeridos('continuo', n, via);
};

export function generatePrescriptionCards(params: PrescriptionParams): ItemReceita[] {
  const { drug: d, apres: ap, calcResult, paciente: p, via, modo, n, condText, dias, usoContinuo, frascoMl, evDil } = params;
  if (!calcResult.arr) return [];

  const a = calcResult.arr;
  const h = 24 / n;

  const posExt =
    modo === 'agora'
      ? 'agora'
      : modo === 'sn'
      ? n === 1
        ? `até 1 vez ao dia, se ${condText}`
        : `podendo repetir de ${h} em ${h} horas, se ${condText}`
      : n === 1
      ? usoContinuo
        ? `1 vez ao dia`
        : `1 vez ao dia, por ${dias} dias`
      : usoContinuo
      ? `de ${h} em ${h} horas`
      : `de ${h} em ${h} horas, por ${dias} dias`;

  const posAbr =
    modo === 'agora'
      ? 'agora'
      : modo === 'sn'
      ? n === 1
        ? `até 1x/dia, se ${condText}`
        : `podendo repetir de ${h}/${h}h, se ${condText}`
      : n === 1
      ? usoContinuo
        ? `1x/dia`
        : `1x/dia, por ${dias} dias`
      : usoContinuo
      ? `de ${h}/${h}h`
      : `de ${h}/${h}h, por ${dias} dias`;

  const fapVol = ap.forma === 'fap' ? (ap.volml != null ? ap.volml : ap.reconstMl != null ? ap.reconstMl : null) : null;
  const fapVolStr = fapVol != null && !ap.conc.toLowerCase().includes('ml') ? ` / ${fmt(fapVol)} mL` : '';
  const nomeInt = `${d.nome} (${ap.conc}${fapVolStr})`;
  const out: ItemReceita[] = [];

  if (via === 'VO' || via === 'VR' || via === 'NASAL' || via === 'INALATORIA' || via === 'TOPICA' || via === 'OFTALMICA' || via === 'OTOLOGICA' || via === 'VAGINAL' || via === 'SC') {
    const g = VIA_GRUPO[via];
    const rawRot = typeof ap.rotulo === 'function' ? ap.rotulo(p, a) : ap.rotulo;
    const rot = (ap.forma === 'fap' && fapVol != null && !rawRot.toLowerCase().includes('ml'))
      ? `${rawRot} (${fmt(fapVol)} mL)`
      : rawRot;
    const verbo = via === 'VO'
      ? 'Tomar'
      : (via === 'VR' || via === 'TOPICA' || via === 'VAGINAL' || via === 'SC' || ap.forma === 'pomada_oft')
      ? 'Aplicar'
      : via === 'INALATORIA'
      ? (ap.forma === 'spray' ? 'Inalar' : 'Inalar / Nebulizar')
      : (via === 'OTOLOGICA')
      ? 'Pingar'
      : 'Instilar';
    let disp = typeof ap.disp === 'function' ? ap.disp(p, a) : ap.disp;

    if (modo === 'continuo' && ap.frascoMl && frascoMl && a.ml != null) {
      const mlDia = a.ml * n;
      const mlTotal = mlDia * (dias || 1);
      const qtdFrascos = Math.max(1, Math.ceil(mlTotal / frascoMl));
      disp = `${qtdFrascos} frasco${qtdFrascos > 1 ? 's' : ''}`;
    }

    const rawInstrucao = typeof ap.instrucao === 'function' ? ap.instrucao(p, a) : ap.instrucao;
    const sugestaoHorarios = getHorariosSugeridos(modo, n, via, d);
    const extraParts: string[] = [];
    if (rawInstrucao) extraParts.push(rawInstrucao);
    if (sugestaoHorarios) extraParts.push(sugestaoHorarios);
    const extra = extraParts.length > 0 ? '\n   ' + extraParts.join('\n   ') : '';
    const doseTxt = a.txt + (via === 'NASAL' ? ' em cada narina' : '');

    out.push({
      grupo: g,
      sub: 'Receita Médica',
      texto: `${leader('1. ' + rot, disp)}\n${verbo} ${doseTxt}, ${VIA_EXT[via]}, ${posExt}.${extra}`
    });
    out.push({
      grupo: g,
      sub: 'Prescrição Interna',
      texto: `${leader('1. ' + nomeInt, a.txt)}\nAdministrar ${doseTxt}${ap.mg ? ` (${fmtMg(a.mg)})` : ''}, ${via}, ${posAbr}.`
    });
  }

  if (via === 'IM') {
    const dose = a.whole ? a.txt : `${fmt(a.ml)} mL (${fmtMg(a.mg)})`;
    const rawRot = typeof ap.rotulo === 'function' ? ap.rotulo(p, a) : ap.rotulo;
    const rot = (ap.forma === 'fap' && fapVol != null && !rawRot.toLowerCase().includes('ml'))
      ? `${rawRot} (${fmt(fapVol)} mL)`
      : rawRot;
    let disp = typeof ap.disp === 'function' ? ap.disp(p, a) : ap.disp;
    if (ap.forma === 'fap' && fapVol != null && typeof disp === 'string' && !disp.toLowerCase().includes('ml')) {
      disp = `${disp} (${fmt(fapVol)} mL)`;
    }

    const rawInstrucao = typeof ap.instrucao === 'function' ? ap.instrucao(p, a) : ap.instrucao;
    const sugestaoHorarios = getHorariosSugeridos(modo, n, via, d);
    const extraParts: string[] = [];
    if (rawInstrucao) extraParts.push(rawInstrucao);
    if (sugestaoHorarios) extraParts.push(sugestaoHorarios);
    const extra = extraParts.length > 0 ? '\n   ' + extraParts.join('\n   ') : '';

    out.push({
      grupo: VIA_GRUPO.IM,
      sub: 'Receita Médica',
      texto: `${leader('1. ' + rot, disp)}\nAplicar ${dose}, intramuscular, ${posExt}.${extra}`
    });
    out.push({
      grupo: VIA_GRUPO.IM,
      sub: 'Prescrição Interna',
      texto: `${leader('1. ' + nomeInt, dose)}\nAdministrar ${dose}, IM, sem diluição, ${posAbr}.`
    });
  }

  if (via === 'EV' && ap.forma === 'bolsa' && calcResult.ev) {
    const E = calcResult.ev;
    const volPrescrito = a.ml != null ? a.ml : a.mg;
    const t = E.t != null ? fmt(E.t, 1) : '__';
    const gt = E.gtt != null ? ` (≈ ${E.gtt} gts/min)` : '';
    const vazaoTxt = E.mlh != null ? ` ou ${fmt(E.mlh)} mL/h` : '';
    const qtdEV = a.whole ? a.txt : `${fmt(volPrescrito)} mL`;

    const rawInstrucao = typeof ap.instrucao === 'function' ? ap.instrucao(p, a) : ap.instrucao;
    const extra = rawInstrucao ? `\n   ${rawInstrucao}` : '';

    let velocidadeTxt: string;
    if (E.t != null && E.t <= 40) {
      velocidadeTxt = `em correr aberto ou rápido (${t} min)${gt}`;
    } else if (E.t != null) {
      velocidadeTxt = `em ${t} min${gt}${vazaoTxt}`;
    } else {
      velocidadeTxt = `em correr aberto`;
    }

    out.push({
      grupo: VIA_GRUPO.EV,
      sub: 'Prescrição Interna',
      texto: `${leader('1. ' + ap.nome, qtdEV)}\nInfundir ${fmt(volPrescrito)} mL, EV, ${velocidadeTxt}, ${posAbr}.${extra}`
    });
    return out;
  }

  if (via === 'EV' && calcResult.ev) {
    const E = calcResult.ev;
    const dil = evDil;
    let pre = '';
    let dose: string | null = null;
    const reconstVolume = ap.reconstMl || ap.volml;

    if (ap.forma === 'fap' && ap.mg && reconstVolume && ap.reconstDil) {
      const k = Math.ceil(a.mg / ap.mg - 1e-9);
      pre = `Reconstituir ${k} frasco${k > 1 ? 's' : ''}-ampola com ${reconstVolume} mL de ${ap.reconstDil}${k > 1 ? ' cada' : ''} (${fmt(mgml(ap))} mg/mL)`;
      dose = a.whole ? null : `${fmt(a.ml)} mL (${fmtMg(a.mg)})`;
    } else {
      dose = a.whole ? a.txt : `${fmt(a.ml)} mL (${fmtMg(a.mg)})`;
    }

    const t = E.t != null ? fmt(E.t, 1) : '__';
    let txt: string;

    if (E.seringa) {
      const resto = rml(E.vol - E.vDose);
      const asp = dose || `${fmt(a.ml)} mL (${fmtMg(a.mg)})`;
      txt = `${pre ? pre + '; ' : ''}Aspirar ${asp}${resto > 0 ? ` + ${fmt(resto)} mL de ${dil}` : ''} em seringa de ${fmt(E.vol)} mL; administrar EV lento em ${t} min, ${posAbr}.`;
    } else {
      const gt = E.gtt != null ? ` (≈ ${E.gtt} gts/min)` : '';
      if (ap.forma === 'fap' && a.whole) {
        txt = `${pre} e diluir em ${fmt(E.vol)} mL de ${dil}; infundir EV em ${t} min${gt}, ${posAbr}.`;
      } else {
        txt = `${pre ? pre + '; ' : ''}Diluir ${dose} em ${fmt(E.vol)} mL de ${dil}; infundir EV em ${t} min${gt}, ${posAbr}.`;
      }
    }

    const qtdEV = a.whole ? a.txt : `${fmt(a.ml)} mL (${fmtMg(a.mg)})`;
    out.push({
      grupo: VIA_GRUPO.EV,
      sub: '',
      texto: `${leader('1. ' + nomeInt, qtdEV)}\n${txt}`
    });
  }

  return out;
}
