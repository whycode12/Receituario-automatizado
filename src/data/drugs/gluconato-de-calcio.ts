import { Farmaco } from '../../types';

export const gluconatoDeCalcio: Farmaco = {
  id: 'gluconato_de_calcio',
  nome: 'Gluconato de Cálcio 10%',
  categoria: 'Soluções e Hidratação',
  busca: 'gluconato calcio 10 hipercalemia estabilizador membrana miocardica onda t apiculada arritmia hipocalcemia ampola ev',
  classe: 'Eletrólito Essencial / Estabilizador de Membrana Miocárdica',
  dosePratica: 'Hipercalemia grave com alteração no ECG (ondas T apiculadas em tenda, perda de onda P ou alargamento de QRS): Diluir 1 a 2 ampolas (10 a 20 mL = 1 a 2 g) em 100 mL de SF 0,9% ou SG 5% e infundir EV em 5 a 10 minutos sob monitorização de ECG. Estabiliza a membrana cardíaca em 1 a 3 minutos. Não reduz os níveis séricos de potássio (necessita de medidas de shift como insulina + glicose). Hipocalcemia sintomática: 1 a 2 ampolas em 10 a 20 min.',
  fontes: { PSZERADO: '2025', HSL: '2024', ACLS: '2025', BULA: '2024' },
  snPadrao: 'hipercalemia com alteração eletrocardiográfica ou hipocalcemia sintomática',
  acessoFonte: 'RENAME 2024 (Componente Hospitalar): Gluconato de cálcio 100 mg/mL (10%) solução injetável ampola 10 mL.',
  apresentacoes: [
    {
      id: 'amp10ml',
      forma: 'amp',
      nome: 'Ampola 10 mL (10% = 1.000 mg de gluconato de cálcio)',
      comercial: 'Gluconato de Cálcio 10% injetável',
      conc: '10% (1g / 10 mL)',
      rotulo: 'Gluconato de Cálcio 10% ampola 10 mL',
      mg: 1000,
      volml: 10,
      mgml: 100,
      vias: ['EV'],
      disp: '2 ampolas (10 mL cada)',
      acesso: { rename: true, fp: false },
      instrucao: 'Diluir 1 a 2 ampolas (10 a 20 mL) em 100 mL de SF 0,9% ou SG 5% e infundir por via endovenosa em 5 a 10 minutos sob contínua monitorização eletrocardiográfica.',
      obs: 'Estabilizador de membrana miocárdica de primeira escolha para prevenção de PCR em FV/assistolia por hipercalemia. Não aplicar IM ou SC.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV'],
      tipo: 'mg',
      min: 1000,
      max: 2000,
      padrao: 1000,
      dosesDia: [1, 3],
      intervaloFixo: 24,
      fonte: 'ACLS',
      trecho: 'Emergência hipercalêmica: 1.000 a 2.000 mg (1 a 2 ampolas de 10 mL) EV em 5 a 10 minutos sob monitorização.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 6000,
      fonte: 'HSL',
      trecho: 'Dose máxima acumulada por episódio agudo: até 3 a 4 doses repetidas conforme traçado de ECG.'
    }
  ],
  contra: [
    {
      msg: 'CONTRAINDICADO em hipercalcemia, intoxicação digitálica (risco de arritmias ventriculares fatais induzidas por cálcio) e cálculo renal de cálcio.',
      fonte: 'HSL',
      trecho: 'Hipercalcemia ou intoxicação por digitálicos.',
      strong: true
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 50,
    volOpcoes: [100, 250],
    tempo: {
      adulto: { min: 5, padrao: 10, max: 20, txt: '5 a 10 minutos sob monitorização contínua' },
      ped: { min: 10, padrao: 20, max: 30 }
    },
    fonteTxt: 'Diluir em 100 mL de SF 0,9%. Infusão rápida pode causar hipotensão, bradicardia sinusal e arritmias ventriculares. Incompatível com soluções de bicarbonato de sódio ou fosfatos (precipita cálcio).'
  },
  notas: {
    indicacao: 'Estabilização de membrana miocárdica na hipercalemia grave com alterações no ECG, hipermagnesemia e tratamento da hipocalcemia aguda sintomática.',
    administracao: 'Infundir lentamente com monitorização. NUNCA administrar pela mesma via de bicarbonato de sódio sem lavar com SF antes (risco de precipitação de carbonato de cálcio insolúvel).',
    cuidados: 'O extravasamento perivenoso periférico pode causar necrose tecidual e celulite química; certificar-se de veia pérvia calibrosa.',
    ajuste: 'Não necessita de ajuste posológico para disfunção renal.'
  }
};

export default gluconatoDeCalcio;
