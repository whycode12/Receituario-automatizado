import { Farmaco } from '../../types';

export const metoclopramida: Farmaco = {
  id: 'metoclopramida',
  nome: 'Cloridrato de Metoclopramida',
  categoria: 'Gastrintestinal e Antieméticos',
  busca: 'plasil metoclopramida procinetico antiemetico enjoo vomito',
  classe: 'Antiemético e Procinético (Antagonista Dopaminérgico D2)',
  dosePratica: 'Adulto: VO/EV/IM: 10 mg (1 comprimido ou 1 ampola 2 mL) até de 8/8h se náuseas/vômitos (máx. 30 mg/dia; injetar EV lento em 3-5 min ou diluído em 50 mL de SF para prevenir acatisia). Pediatria: uso restrito (contraindicado em < 1 ano; VO gotas 1-3 anos: 1 mg; 3-5 anos: 2 mg; 5-14 anos: 2,5-5 mg até 3x/dia).',
  fontes: { HSL: '13/04/2023', PSZERADO: '2025', EINA: '2024', EINP: '2024' },
  snPadrao: 'náuseas, vômitos ou plenitude gástrica',
  acessoFonte: 'RENAME 2024 (Componente Básico e Hospitalar): comprimido 10 mg e solução injetável 5 mg/mL (ampola 2 mL = 10 mg). Farmácia Popular: não consta no elenco.',
  apresentacoes: [
    {
      id: 'cp10',
      forma: 'cp',
      nome: 'Comprimido 10 mg',
      comercial: 'Plasil / Genérico',
      conc: '10mg',
      rotulo: 'Cloridrato de Metoclopramida 10mg',
      mg: 10,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Ingerir cerca de 10 minutos antes das principais refeições. Engolir inteiro sem mastigar.',
      obs: 'RENAME (Componente Básico). Adultos e adolescentes > 14 anos.'
    },
    {
      id: 'gts4',
      forma: 'gotas',
      nome: 'Gotas pediátricas 4 mg/mL (frasco 10 mL — 20 gotas/mL)',
      comercial: 'Plasil gotas',
      conc: '4mg/mL',
      rotulo: 'Cloridrato de Metoclopramida 4mg/mL gotas',
      mgml: 4,
      gotasml: 20, // 1 mL = 20 gotas = 4 mg; 1 gota = 0,2 mg
      frascoMl: 10,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: false, fp: false },
      instrucao: 'Administrar 10 minutos antes das refeições com o auxílio de uma colher ou pequena quantidade de água.',
      obs: '1 gota = 0,2 mg de metoclopramida. CONTRAINDICADO em menores de 1 ano de idade (HSL).'
    },
    {
      id: 'amp10',
      forma: 'amp',
      nome: 'Solução injetável 5 mg/mL ampola 2 mL (10 mg)',
      comercial: 'Plasil injetável',
      conc: '5mg/mL',
      rotulo: 'Cloridrato de Metoclopramida 5mg/mL ampola 2mL (10mg)',
      mg: 10,
      mgml: 5,
      volml: 2,
      vias: ['EV', 'IM'],
      disp: '1 ampola',
      acesso: { rename: true, fp: false },
      obs: 'RENAME (Hospitalar). Injetar EV direto lentamente em no mínimo 3 minutos (risco de ansiedade/acatisia intensa se rápido) ou diluído em 50 mL de SF/SG5% (Einstein Adulto).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 40 }] },
      vias: ['VO', 'EV', 'IM'],
      tipo: 'mg',
      min: 10,
      max: 10,
      padrao: 10,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Adulto: 10mg, VO/EV/IM, 3 vezes/dia (respeitar intervalo mínimo de 6 horas entre as doses).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 5, idadeMaxAnos: 14 },
      vias: ['VO'],
      tipo: 'mg',
      min: 2.5,
      max: 5.0,
      padrao: 2.5, // 13 a 26 gotas (2,5 a 5 mg)
      dosesDia: [3, 3],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Pediatria De 5-14 anos: 13 gotas (2,5mg) a 26 gotas (5mg), VO, 3 vezes/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 3, idadeMaxAnos: 5 },
      vias: ['VO'],
      tipo: 'mg',
      min: 2,
      max: 2,
      padrao: 2, // 10 gotas (2 mg)
      dosesDia: [2, 3],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Pediatria De 3-5 anos: 10 gotas (2mg), VO, 2-3 vezes/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 1, idadeMaxAnos: 3 },
      vias: ['VO'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1, // 5 gotas (1 mg)
      dosesDia: [2, 3],
      dosesPadrao: 2,
      fonte: 'HSL',
      trecho: 'Pediatria De 1-3 anos: 5 gotas (1mg), VO, 2-3 vezes/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 1 },
      vias: ['EV', 'IM'],
      tipo: 'mg_kg_dia',
      min: 0.1,
      max: 0.15,
      padrao: 0.1,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Pediatria EV: 0,1 a 0,15 mg/kg/dia dividido em 3 doses (máx 0,5 mg/kg/dia). Contraindicado em menores de 1 ano.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 30, // 10 mg 3x/dia = 30 mg/dia
      fonte: 'HSL',
      trecho: 'Dose Máxima Adulto habitual: 30mg/dia (10mg 3x/dia). Artigos sugerem teto de 60mg/dia ou 20mg/dose em contextos oncológicos específicos.'
    },
    {
      pub: 'ped',
      tipo: 'mg_kg_dia',
      valor: 0.5,
      fonte: 'HSL',
      trecho: 'Dose Máxima Pediatria: 0,5mg/kg/dia.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 12 },
      msg: 'CONTRAINDICADO em crianças menores de 1 ano de idade devido ao elevado risco de reações extrapiramidais e meta-hemoglobinemia (HSL).',
      fonte: 'HSL',
      trecho: 'O uso em crianças com menos de 1 ano de idade é contraindicado.',
      strong: true
    },
    {
      msg: 'Associação contraindicada com Levodopa ou agonistas dopaminérgicos (antagonismo recíproco) (HSL).',
      fonte: 'HSL',
      trecho: 'A combinação de metoclopramida com levodopa é contraindicada, pois apresentam um antagonismo mútuo.',
      strong: false
    },
    {
      msg: 'Contraindicado em situações em que o estímulo da motilidade gastrintestinal seja perigoso: hemorragia gastrintestinal ativa, obstrução mecânica ou perfuração digestiva.',
      fonte: 'BULA',
      trecho: 'A metoclopramida é contraindicada em pacientes com hemorragia gastrintestinal, obstrução mecânica ou perfuração gastrintestinal.',
      strong: false
    },
    {
      vias: ['EV'],
      msg: 'Velocidade de injeção EV: aplicar lentamente em no mínimo 3 a 5 minutos. Injeções rápidas causam estados intensos de ansiedade, agitação transitória e acatisia, seguidos de sonolência (HSL).',
      fonte: 'HSL',
      trecho: 'Estados de ansiedade e agitação transitórias intensas, seguido de sonolência, podem ocorrer com a administração EV rápida (em menos de 3 minutos).',
      strong: false
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 5, // 10mg em 2mL (ampola pura)
    concUsualPed: 0.2, // Einstein Pediátrico: 0,2 mg/mL em SF/SG 5%
    concUsual: 0.2,
    volOpcoes: [20, 50, 100],
    tempo: {
      adulto: { min: 3, padrao: 15, max: 30 },
      ped: { min: 15, padrao: 15, max: 30 }
    },
    fonteTxt: 'EV Direto: aplicar lentamente durante no mínimo 3 a 5 minutos (10 mg sem diluição) (HSL / Einstein Adulto). Infusão: diluir a ampola em 50 mL de SF 0,9% ou SG 5% e infundir em 15 a 30 minutos (protocolo de flebite HSL). Einstein Pediátrico: diluir em SF/SG5% para conc 0,2 mg/mL, infundir em 15-30 minutos.'
  },
  notas: {
    indicacao: 'Antiemético e procinético indicado em náuseas e vômitos de diversas etiologias (cirúrgicas, infecciosas, medicamentosas), gastroparesia diabética e refluxo gastroesofágico (HSL).',
    administracao: 'VO: Tomar os comprimidos ou gotas cerca de 10 minutos antes das refeições. EV: Injetar em no mínimo 3 minutos ou infundir em 50 mL de SF em 15 min. Respeitar intervalo estrito de pelo menos 6 horas entre tomadas.',
    cuidados: 'Risco de distonias agudas e sintomas extrapiramidais (espasmos musculares cervicais, crise oculógira), especialmente em jovens e crianças. Tratamento da distonia: biperideno ou anti-histamínico.',
    ajuste: 'Insuficiência renal: Clcr 15-60 mL/min: reduzir dose diária em 50%; Clcr ≤ 15 mL/min: reduzir dose diária em 75% (HSL). Hemodiálise: não requer suplementação.'
  }
};

export default metoclopramida;
