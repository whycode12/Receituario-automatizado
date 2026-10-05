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
  frascoMl: number | null;
  evDil: string;
}

export function generatePrescriptionCards(params: PrescriptionParams): ItemReceita[] {
  const { drug: d, apres: ap, calcResult, paciente: p, via, modo, n, condText, dias, frascoMl, evDil } = params;
  if (!calcResult.arr) return [];

  const a = calcResult.arr;
  const h = 24 / n;

  const posExt =
    modo === 'agora'
      ? 'agora'
      : modo === 'sn'
      ? n === 1
        ? `até 1 vez ao dia, se ${condText}`
        : `até de ${h} em ${h} horas, se ${condText}`
      : n === 1
      ? `1 vez ao dia, por ${dias} dias`
      : `de ${h} em ${h} horas, por ${dias} dias`;

  const posAbr =
    modo === 'agora'
      ? 'agora'
      : modo === 'sn'
      ? n === 1
        ? `até 1x/dia, se ${condText}`
        : `até de ${h}/${h}h, se ${condText}`
      : n === 1
      ? `1x/dia, por ${dias} dias`
      : `de ${h}/${h}h, por ${dias} dias`;

  const fapVol = ap.forma === 'fap' ? (ap.volml != null ? ap.volml : ap.reconstMl != null ? ap.reconstMl : null) : null;
  const fapVolStr = fapVol != null && !ap.conc.toLowerCase().includes('ml') ? ` / ${fmt(fapVol)} mL` : '';
  const nomeInt = `${d.nome} (${ap.conc}${fapVolStr})`;
  const out: ItemReceita[] = [];

  if (via === 'VO' || via === 'VR' || via === 'NASAL' || via === 'INALATORIA' || via === 'TOPICA') {
    const g = VIA_GRUPO[via];
    const rawRot = typeof ap.rotulo === 'function' ? ap.rotulo(p, a) : ap.rotulo;
    const rot = (ap.forma === 'fap' && fapVol != null && !rawRot.toLowerCase().includes('ml'))
      ? `${rawRot} (${fmt(fapVol)} mL)`
      : rawRot;
    const verbo = via === 'VO' ? 'Tomar' : (via === 'VR' || via === 'TOPICA') ? 'Aplicar' : via === 'INALATORIA' ? (ap.forma === 'spray' ? 'Inalar' : 'Inalar / Nebulizar') : 'Instilar';
    let disp = typeof ap.disp === 'function' ? ap.disp(p, a) : ap.disp;

    if (modo === 'continuo' && ap.frascoMl && frascoMl && a.ml != null) {
      const mlDia = a.ml * n;
      const mlTotal = mlDia * (dias || 1);
      const qtdFrascos = Math.max(1, Math.ceil(mlTotal / frascoMl));
      disp = `${qtdFrascos} frasco${qtdFrascos > 1 ? 's' : ''}`;
    }

    const rawInstrucao = typeof ap.instrucao === 'function' ? ap.instrucao(p, a) : ap.instrucao;
    const extra = rawInstrucao ? `\n   ${rawInstrucao}` : '';
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

    out.push({
      grupo: VIA_GRUPO.IM,
      sub: 'Receita Médica',
      texto: `${leader('1. ' + rot, disp)}\nAplicar ${dose}, intramuscular, ${posExt}.`
    });
    out.push({
      grupo: VIA_GRUPO.IM,
      sub: 'Prescrição Interna',
      texto: `${leader('1. ' + nomeInt, dose)}\nAdministrar ${dose}, IM, sem diluição, ${posAbr}.`
    });
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
