import { Farmaco } from '../../types';

export const glicose50: Farmaco = {
  id: 'glicose_50',
  nome: 'Glicose Hipertônica 50%',
  categoria: 'Soluções e Hidratação',
  busca: 'glicose hipertonica 50 hipoglicemia coma hipoglicemico rebaixamento emergencia ampola ev',
  classe: 'Solução Hipertônica de Carboidrato para Reposição Energética Rápida',
  dosePratica: 'Hipoglicemia com RNC / via oral insegura (Glicemia < 70 mg/dL): Administrar 20 a 40 mL de Glicose 50% (2 a 4 ampolas de 10 mL ou 1 a 2 ampolas de 20 mL = 10 a 20 g de glicose pura) EV em bólus lento em 3 a 5 minutos. Reavaliar glicemia capilar em 15 minutos. Em desnutridos ou etilistas, administrar Tiamina 100-300 mg antes ou junto para prevenir Síndrome de Wernicke.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'glicemia capilar menor que 70 mg/dL ou coma hipoglicêmico',
  acessoFonte: 'RENAME 2024 (Componente Básico / Hospitalar): Glicose 50% solução injetável ampolas de 10 mL e 20 mL.',
  apresentacoes: [
    {
      id: 'amp10ml',
      forma: 'amp',
      nome: 'Ampola 10 mL (5 g de glicose pura - 50%)',
      comercial: 'Glicose 50% injetável',
      conc: '50% (5g / 10 mL)',
      rotulo: 'Glicose Hipertônica 50% ampola 10 mL',
      mg: 5000,
      volml: 10,
      mgml: 500,
      vias: ['EV'],
      disp: '4 ampolas (10 mL cada)',
      acesso: { rename: true, fp: false },
      instrucao: 'Aspirar 4 ampolas (40 mL = 20 g) em seringa de 20 mL e infundir por via endovenosa lenta em veia calibrosa em 3 a 5 minutos.',
      obs: 'Solução altamente hipertônica (2.525 mOsm/L). Risco de flebite em veias finas; administrar estritamente por via endovenosa lenta.'
    },
    {
      id: 'amp20ml',
      forma: 'amp',
      nome: 'Ampola 20 mL (10 g de glicose pura - 50%)',
      comercial: 'Glicose 50% injetável',
      conc: '50% (10g / 20 mL)',
      rotulo: 'Glicose Hipertônica 50% ampola 20 mL',
      mg: 10000,
      volml: 20,
      mgml: 500,
      vias: ['EV'],
      disp: '2 ampolas (20 mL cada)',
      acesso: { rename: true, fp: false },
      instrucao: 'Administrar 2 ampolas (40 mL = 20 g) por via endovenosa lenta.',
      obs: 'Apresentação prática para rápida reversão em emergência.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV'],
      tipo: 'mg',
      min: 10000,
      max: 25000,
      padrao: 20000,
      dosesDia: [1, 4],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: 'Hipoglicemia aguda grave: 10 a 20 g de glicose (20 a 40 mL de glicose 50%) EV em bólus lento imediato.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 100000,
      fonte: 'HSL',
      trecho: 'Dose guiada estritamente pelo controle seriado da glicemia capilar.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em hiperglicemia, coma hiperosmolar, cetoacidose diabética e anúria.',
      fonte: 'HSL',
      trecho: 'Hiperglicemia severa.',
      strong: true
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'AD'],
    concMax: 500,
    volOpcoes: [10, 20, 40],
    tempo: {
      adulto: { min: 3, padrao: 5, max: 10, txt: '3 a 5 minutos lento' },
      ped: { min: 5, padrao: 10, max: 15 }
    },
    fonteTxt: 'Infundir diretamente em veia calibrosa em 3 a 5 minutos. NUNCA aplicar por via subcutânea ou intramuscular (necrose tecidual severa por hiperosmolaridade).'
  },
  notas: {
    indicacao: 'Reversão de emergência da hipoglicemia aguda severa sintomática (neuroglicopenia, torpor, coma ou convulsão).',
    administracao: 'Infundir lentamente em veia calibrosa. Reavaliar HGT após 15 minutos; se persistir < 70 mg/dL, repetir dose.',
    cuidados: 'Em pacientes com suspeita de etilismo crônico ou desnutrição, administrar Tiamina 100 mg EV/IM antes da glicose para prevenir Síndrome de Wernicke-Korsakoff.',
    ajuste: 'Não necessita de ajuste para insuficiência renal ou hepática.'
  }
};

export default glicose50;
