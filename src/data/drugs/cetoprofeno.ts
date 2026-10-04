import { Farmaco } from '../../types';

export const cetoprofeno: Farmaco = {
  id: 'cetoprofeno',
  nome: 'Cetoprofeno',
  busca: 'profenid artrinid cetoprofeno',
  classe: 'Anti-inflamatório não esteroidal, antirreumático',
  fontes: { HSL: '05/03/2025', EINP: '', EINA: '', BULA: '03/10/2026' },
  snPadrao: 'dor',
  acessoFonte: 'RENAME 2024: cetoprofeno não consta. Farmácia Popular: não consta no elenco.',
  apresentacoes: [
    {
      id: 'cap50',
      forma: 'cap',
      nome: 'Cápsula 50 mg',
      comercial: 'Profenid',
      conc: '50mg',
      rotulo: 'Cetoprofeno 50mg',
      mg: 50,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: "Ingerir com alimentação, leite ou um copo d'água (HSL)."
    },
    {
      id: 'ent100',
      forma: 'cp',
      nome: 'Comprimido entérico 100 mg',
      comercial: 'Profenid Entérico',
      conc: '100mg',
      rotulo: 'Cetoprofeno 100mg entérico',
      mg: 100,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Não partir nem triturar (revestimento gastrorresistente) (HSL).'
    },
    {
      id: 'cp100',
      forma: 'cp',
      nome: 'Comprimido 100 mg',
      conc: '100mg',
      rotulo: 'Cetoprofeno 100mg',
      mg: 100,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Dose segue a regra HSL do cetoprofeno oral (100 mg VO 2×/dia ou 50 mg 3×/dia). Conferir a forma farmacêutica dispensada.'
    },
    {
      id: 'lp150',
      forma: 'cp',
      nome: 'Comprimido liberação prolongada 150 mg',
      conc: '150mg',
      rotulo: 'Cetoprofeno 150mg LP',
      mg: 150,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: '⚠ Regra de dose vem da BULA — NÃO do HSL/Einstein. Engolir inteiro com água, durante ou após refeição; só partir se for sulcado.'
    },
    {
      id: 'fap100',
      forma: 'fap',
      nome: 'Frasco-ampola 100 mg (pó)',
      comercial: 'Artrinid IV',
      conc: '100mg',
      rotulo: 'Cetoprofeno 100mg',
      mg: 100,
      reconstMl: 5,
      reconstDil: 'SF 0,9%',
      vias: ['EV'],
      disp: '1 frasco-ampola',
      acesso: { rename: false, fp: false },
      obs: 'Após reconstituição/diluição: uso imediato (HSL).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      apres: ['cap50', 'cp100'],
      tipo: 'mg',
      min: 50,
      max: 100,
      padrao: 50,
      dosesDia: [2, 3],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Profenid: 100mg, VO, 2 vezes/dia ou 50mg 3 vezes/dia.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      apres: ['ent100'],
      tipo: 'mg',
      min: 100,
      max: 100,
      padrao: 100,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      fonte: 'HSL',
      trecho: 'Profenid Entérico: Dose usual 200mg/dia, VO, fracionados em 2 doses.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 18 },
      vias: ['VO'],
      apres: ['lp150'],
      tipo: 'mg',
      min: 75,
      max: 150,
      padrao: 150,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      fonte: 'BULA',
      trecho: 'Bula: manutenção 150 mg ao dia em dose única; enxaqueca ½ comprimido (75 mg); dose máxima 300 mg/dia.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV'],
      tipo: 'mg_dia',
      min: 100,
      max: 300,
      padrao: 100,
      dosesDia: [1, 3],
      dosesPadrao: 2,
      duracaoMaxDias: 2,
      fonte: 'HSL',
      trecho: 'Injetável: 100-300mg/dia, EV. O tratamento deve durar no máximo 48h.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      tipo: 'mg_dia',
      valor: 300,
      fonte: 'HSL',
      trecho: 'Dose Máxima: 300mg/dia.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 15 },
      msg: 'Não deve ser administrado em menores de 15 anos.',
      fonte: 'HSL',
      trecho: 'Pediatria: Não deve ser administrado em menores de 15 anos.',
      strong: true
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 1,
    volPadraoAdulto: [
      [100, 100],
      [300, 250]
    ],
    volOpcoes: [100, 250],
    tempo: {
      adulto: { min: 20, padrao: 30, txt: 'Infusão EV intermitente: infundir em período não inferior a 20 minutos (padrão 30 min).' }
    },
    fonteTxt: 'Reconstituir 100 mg com 5 mL de SF 0,9%. Diluir em 100-250 mL de SF ou SG5%. Tempo não inferior a 20 min.'
  },
  notas: {
    indicacao: 'Anti-inflamatório não esteroidal e analgésico em afecções reumáticas e traumatológicas.',
    administracao: 'VO: tomar junto às refeições ou com leite. EV: infusão intermitente em 30 min. IM não descrita nas fontes.',
    cuidados: 'Contraindicado em úlcera péptica ativa, insuficiência renal/hepática severa e gestação.',
    ajuste: 'Idosos e insuficiência renal/hepática: iniciar com a menor dose eficaz.'
  }
};

export default cetoprofeno;
