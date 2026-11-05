import { Farmaco } from '../../types';

export const fosfatoDePotassio: Farmaco = {
  id: 'fosfato-de-potassio',
  nome: 'Fosfato de Potássio',
  categoria: 'Eletrólitos e Emergências',
  busca: 'fosfato de potassio hipofosfatemia reposicao fosforo k2hpo4 kh2po4 ampola 2 meq/ml eletrolitos',
  classe: 'Eletrólito Essencial (Reposição Intravenosa de Fósforo e Potássio)',
  dosePratica: 'Hipofosfatemia moderada a grave (< 1,5 mg/dL ou sintomática): Reposição periférica: 1 a 2 ampolas (10 a 20 mL) diluídas em 500 mL de SF 0,9% infundidas em 6 horas. Reposição central: 1 a 2 ampolas em 250 mL de SF 0,9% em 3 a 4 horas. Monitorar fósforo, potássio e cálcio séricos.',
  fontes: { PSZERADO: '2025', HSL: '2024', EINA: '2024', BULA: '2024' },
  snPadrao: 'hipofosfatemia moderada a grave',
  modoPadrao: 'continuo',
  diasPadrao: 1,
  usoContinuoPadrao: false,
  acessoFonte: 'RENAME 2024 (Componente Hospitalar): Solução injetável 2 mEq/mL (ampola 10 mL) padronizada em emergências e UTIs.',
  apresentacoes: [
    {
      id: 'amp10ml',
      forma: 'amp',
      nome: 'Ampola 2 mEq/mL de Fósforo (10 mL)',
      comercial: 'Fosfato de Potássio injetável',
      conc: '2 mEq/mL P + 2 mEq/mL K+',
      rotulo: 'Fosfato de Potássio ampola 10 mL (2 mEq/mL)',
      mg: 1000,
      volml: 10,
      vias: ['EV'],
      disp: '1 ampola (10 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'USO HOSPITALAR EXCLUSIVO. NUNCA ADMINISTRAR SEM DILUIÇÃO PRÉVIA. Diluir em SF 0,9% ou SG 5% e infundir lentamente sob controle de eletrólitos.',
      obs: '1 ampola de 10 mL fornece 20 mEq de Fósforo e cerca de 20 mEq de Potássio (Guia UPA 2026 pág. 74).'
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 5,
    volOpcoes: [250, 500],
    tempo: {
      adulto: { min: 180, padrao: 360, max: 480, txt: '3 a 6 horas em bomba' }
    },
    fonteTxt: 'Manual Einstein / Guia UPA 2026: Periférico: diluir em 500 mL SF, correr em 6h; Central: diluir em 250 mL SF, correr em 3h.'
  },
  regras: [
    {
      pub: 'adulto',
      vias: ['EV'],
      tipo: 'ml',
      min: 10,
      max: 20,
      padrao: 10,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: 'Hipofosfatemia: 1 a 2 ampolas (10 a 20 mL) diluídas em 500 mL SF 0,9% infundidas em 6 horas.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em hipercalemia, hiperfosfatemia, hipocalcemia grave e insuficiência renal anúrica.',
      fonte: 'HSL',
      trecho: 'Hiperfosfatemia e hipocalcemia grave.'
    }
  ],
  notas: {
    indicacao: 'Tratamento de hipofosfatemia severa em cetoacidose diabética, desnutrição grave/realimentação e sepse.',
    administracao: 'Infundir diluído em SF 0,9% em 3 a 6 horas em bomba.',
    cuidados: 'Monitorar cálcio, potássio e fósforo. Não misturar com sais de cálcio.',
    ajuste: 'Evitar na insuficiência renal grave.'
  }
};

export default fosfatoDePotassio;
