import { Farmaco } from '../../types';

export const furosemida: Farmaco = {
  id: 'furosemida',
  nome: 'Furosemida',
  categoria: 'Cardiovascular e Diuréticos',
  busca: 'furosemida lasix diuretico alca edemas ascite insuficiencia cardiaca congestiva eap edema agudo pulmao hipervolemia oliguria pressao alta',
  classe: 'Diurético de Alça Inibidor do Co-transportador Na+-K+-2Cl- na Alça de Henle',
  dosePratica: 'Edema / Congestão / Ascite: 20 a 40 mg (1/2 a 1 comprimido de 40 mg) VO pela manhã em jejum, ou 20 a 40 mg (1 a 2 ampolas) EV em bolus lento. Edema Agudo de Pulmão (EAP) na UPA: 40 a 80 mg (2 a 4 ampolas) EV em bolus lento de início, avaliando débito urinário e alívio da dispneia.',
  fontes: { HSL: '04/04/2023', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'edema, congestão ou dispneia paroxística',
  acessoFonte: 'RENAME 2024 (Componente Básico): comprimido de 40 mg e ampola de 20 mg/2 mL (10 mg/mL). Farmácia Popular: hipertensão arterial (gratuito).',
  apresentacoes: [
    {
      id: 'cp40',
      forma: 'cp',
      nome: 'Comprimido 40 mg',
      comercial: 'Lasix / Genérico',
      conc: '40mg',
      rotulo: 'Furosemida 40mg comprimido',
      mg: 40,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 caixa com 20 comprimidos',
      acesso: { rename: true, fp: true },
      instrucao: 'Tomar pela manhã com um copo de água em jejum para evitar diurese noturna que atrapalhe o sono.',
      obs: 'Comprimido sulcado, pode ser partido ao meio (20 mg).'
    },
    {
      id: 'amp20_2ml',
      forma: 'amp',
      nome: 'Ampola 20 mg / 2 mL (10 mg/mL)',
      comercial: 'Lasix injetável',
      conc: '20mg / 2 mL (10 mg/mL)',
      rotulo: 'Furosemida 20mg/2mL ampola',
      mg: 20,
      volml: 2,
      mgml: 10,
      frac: 1,
      vias: ['EV', 'IM'],
      disp: '1 ampola (2 mL)',
      acesso: { rename: true, fp: false },
      obs: 'Administrar EV lento em 1 a 2 minutos ou diluído em SF 0,9% (velocidade máxima de infusão: 4 mg/min para prevenir ototoxicidade).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 20,
      max: 80,
      padrao: 40,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      fonte: 'HSL',
      trecho: 'Adultos VO: 20 a 80 mg VO pela manhã em dose única ou dividida em 2 tomadas.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV'],
      tipo: 'mg',
      min: 20,
      max: 80,
      padrao: 40,
      dosesDia: [1, 3],
      dosesPadrao: 1,
      intervaloFixo: 8,
      fonte: 'PSZERADO',
      trecho: 'Adultos EV na UPA: 20 a 80 mg EV lento de início, podendo repetir a cada 6 a 8 horas.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 1 },
      vias: ['VO'],
      tipo: 'mg_kg_dia',
      min: 1,
      max: 2,
      padrao: 1,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      fonte: 'HSL',
      trecho: 'Pediatria VO: 1 a 2 mg/kg/dia em dose única ou dividida a cada 12 horas.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 1 },
      vias: ['EV'],
      tipo: 'mg_kg_dose',
      min: 0.5,
      max: 1.5,
      padrao: 1,
      dosesDia: [1, 3],
      dosesPadrao: 1,
      intervaloFixo: 8,
      fonte: 'HSL',
      trecho: 'Pediatria EV: 0,5 a 1,5 mg/kg/dose EV lento.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['VO', 'EV'],
      tipo: 'mg_dia',
      valor: 160,
      fonte: 'HSL',
      trecho: 'Dose máxima habitual de furosemida em cirrose ou insuficiência cardíaca: 160 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em anúria completa sem resposta a teste volêmico, coma hepático com encefalopatia grave descompensada, hipocalemia grave (< 3,0 mEq/L) ou hiponatremia grave antes da correção hidroeletrolítica.',
      fonte: 'BULA',
      trecho: 'Perda renal massiva de potássio e sódio agrava encefalopatia hepática e arritmias cardíacas letais.',
      strong: false
    }
  ],
  ev: {
    diluentes: ['SF 0,9%'],
    concMax: 10,
    volOpcoes: [50, 100],
    volPadraoAdulto: [[160, 50]],
    tempo: {
      adulto: { min: 15, max: 30, padrao: 15, txt: '15 a 30 min' }
    },
    fonteTxt: 'HSL / Einstein'
  },
  notas: {
    indicacao: 'Edema associado à insuficiência cardíaca congestiva, cirrose hepática com ascite, doença renal (síndrome nefrótica), edema agudo de pulmão (EAP) e emergências hipertensivas associadas à sobrecarga de volume.',
    administracao: 'Via EV: administrar em bolus lento (1 a 2 minutos para cada ampola de 20 mg). Evitar infusões rápidas em altas doses pelo risco de zumbido e ototoxicidade transitória ou permanente.',
    cuidados: 'Monitorar rotineiramente eletrólitos (K+, Na+, Mg2+), função renal (ureia e creatinina) e pressão arterial. Em cirróticos com ascite, associar à espironolactona na proporção 40:100.',
    ajuste: 'Pode necessitar de doses mais elevadas na insuficiência renal com TFG reduzida.'
  }
};
export default furosemida;
