import { Farmaco } from '../../types';

export const cefepime: Farmaco = {
  id: 'cefepime',
  nome: 'Cloridrato de Cefepima',
  categoria: 'Antimicrobianos e Antibióticos',
  busca: 'cefepime cefepima maxcef cefalosporina 4 geracao pseudomonas pneumonia hospitalar pav neutropenia febril sepse itu complicada',
  classe: 'Antibacteriano Betalactâmico Cefalosporina de 4ª Geração com Ação Antipseudomonas',
  dosePratica: 'Pneumonia Hospitalar / Neutropenia Febril / Infecções Graves por Pseudomonas: 2 g (1 frasco de 2 g ou 2 frascos de 1 g) EV diluído em 100 mL de SF 0,9% de 8/8h (infundir em 30 min ou em infusão estendida de 3 a 4h). Infecções Moderadas / ITU Complicada: 1 g a 2 g EV de 12/12h.',
  fontes: { HSL: '10/05/2023', PSZERADO: '2025', BULA: '04/10/2026' },
  modoPadrao: 'continuo',
  diasPadrao: 7,
  usoContinuoPadrao: false,
  snPadrao: 'infecção bacteriana grave nosocomial ou neutropenia febril',
  acessoFonte: 'Uso hospitalar restrito em frasco-ampola de 1 g e 2 g de pó liofilizado (Maxcef e genéricos).',
  apresentacoes: [
    {
      id: 'fap1g',
      forma: 'fap',
      nome: 'Frasco-Ampola 1 g',
      comercial: 'Maxcef / Genérico',
      conc: '1000mg',
      rotulo: 'Cloridrato de cefepima 1g frasco-ampola',
      mg: 1000,
      reconstMl: 10,
      reconstDil: 'Água para Injeção',
      frac: 1,
      vias: ['EV', 'IM'],
      disp: '1 frasco-ampola (10 mL)',
      acesso: { rename: false, fp: false },
      obs: 'Reconstituir com 10 mL de água para injeção. Para infusão EV, diluir em 100 mL de SF 0,9%.'
    },
    {
      id: 'fap2g',
      forma: 'fap',
      nome: 'Frasco-Ampola 2 g',
      comercial: 'Maxcef / Genérico',
      conc: '2000mg',
      rotulo: 'Cloridrato de cefepima 2g frasco-ampola',
      mg: 2000,
      reconstMl: 10,
      reconstDil: 'Água para Injeção',
      frac: 1,
      vias: ['EV'],
      disp: '1 frasco-ampola (10 mL)',
      acesso: { rename: false, fp: false },
      obs: 'Apresentação padrão para infecções nosocomiais graves (pneumonia hospitalar e neutropenia febril).'
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
      padrao: 2000,
      dosesDia: [2, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'Adultos: 1g a 2g EV a cada 8 a 12 horas por 7 a 14 dias (dose usual de 2g de 8/8h em pneumonia nosocomial/neutropenia febril).'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 2 },
      vias: ['EV'],
      tipo: 'mg_kg_dose',
      min: 30,
      max: 50,
      padrao: 50,
      dosesDia: [2, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'Pediatria: 50 mg/kg/dose EV a cada 8 a 12 horas (máximo de 2000 mg/dose).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['EV'],
      tipo: 'mg_dia',
      valor: 6000,
      fonte: 'HSL',
      trecho: 'Dose máxima diária de cefepima: 6000 mg/dia (6 g/dia).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com histórico de anafilaxia ou reação alérgica imediata severa (choque anafilático, angioedema) a cefalosporinas ou betalactâmicos.',
      fonte: 'BULA',
      trecho: 'Risco de reação de hipersensibilidade cruzada anafilática.',
      strong: false
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 40,
    volOpcoes: [100, 250],
    volPadraoAdulto: [[2000, 100]],
    tempo: {
      adulto: { min: 30, max: 60, padrao: 30, txt: '30 a 60 min' }
    },
    fonteTxt: 'HSL / Einstein'
  },
  notas: {
    indicacao: 'Pneumonia hospitalar e associada à ventilação mecânica (PAV), neutropenia febril em monoterapia, infecções intra-abdominais complicadas (associado a metronidazol), sepse de foco urinário ou respiratório e infecções por Pseudomonas aeruginosa sensível.',
    administracao: 'Reconstituir o pó com 10 mL de água para injeção. Diluir a dose em 100 mL de SF 0,9% e infundir em 30 a 60 minutos (ou infusão prolongada de 3 a 4 horas para otimizar tempo acima da MIC).',
    cuidados: 'ATENÇÃO AO AJUSTE RENAL: Ajustar rigorosamente a dose em caso de insuficiência renal (ClCr < 50 mL/min). Em pacientes com disfunção renal sem ajuste de dose, há risco elevado de NEUROTOXICIDADE GRAVE (encefalopatia, mioclonias, confusão mental e convulsões).',
    ajuste: 'Ajustar dose se ClCr < 50 mL/min (ex: 1g 12/12h se ClCr 30-50; 1g 24/24h se ClCr 10-30).'
  }
};
export default cefepime;
