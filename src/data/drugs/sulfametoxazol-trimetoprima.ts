import { Farmaco } from '../../types';

export const sulfametoxazolTrimetoprima: Farmaco = {
  id: 'sulfametoxazol-trimetoprima',
  nome: 'Sulfametoxazol + Trimetoprima (Co-trimoxazol / Bactrim)',
  categoria: 'Antimicrobianos',
  busca: 'bactrim sulfametoxazol trimetoprima infectrin cotrimoxazol itu cistite pneumonia pneumocistose infeccao',
  classe: 'Antibacteriano (associação sinérgica de sulfonamida + inibidor da di-hidrofolato redutase)',
  dosePratica: 'Adulto: VO: 800/160 mg (1 comprimido F ou 2 comprimidos simples) a cada 12 horas por 3 a 14 dias conforme o foco clínico (ITU não complicada: 3 a 5 dias; prostatite/pielonefrite: 14 dias). EV: 8 a 10 mg/kg/dia de Trimetoprima a cada 12h (diluir cada ampola de 5 mL em 75 a 125 mL de SF 0,9% ou SG 5% e infundir em 60 a 90 min). Pediatria (> 6 semanas): 40 mg/kg/dia de SMX + 8 mg/kg/dia de TMP divididos de 12/12h (suspensão 40+8 mg/mL: 1 mL/kg/dia dividido em 2 tomadas de 0,5 mL/kg). Contraindicado em menores de 6 semanas.',
  fontes: { HSL: '05/03/2025', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'infecção bacteriana',
  acessoFonte: 'RENAME 2024: Comprimido 400+80 mg, suspensão oral 40+8 mg/mL e ampola injetável 80+16 mg/mL constam no Componente Básico da Assistência Farmacêutica (CBAF) do SUS. Farmácia Popular: não consta no elenco comercial.',
  apresentacoes: [
    {
      id: 'cp800',
      forma: 'cp',
      nome: 'Comprimido 800 mg + 160 mg (Bactrim F)',
      comercial: 'Bactrim F',
      conc: '800/160mg',
      rotulo: 'Sulfametoxazol + trimetoprima 800/160mg',
      mg: 160,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Dose dupla (Forte). Ingerir com água, preferencialmente após as refeições. 1 comprimido = 800 mg SMX + 160 mg TMP (PSZerado / HSL).'
    },
    {
      id: 'cp400',
      forma: 'cp',
      nome: 'Comprimido 400 mg + 80 mg',
      comercial: 'Bactrim',
      conc: '400/80mg',
      rotulo: 'Sulfametoxazol + trimetoprima 400/80mg',
      mg: 80,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME (CBAF). Dose usual de adulto: 2 comprimidos a cada 12 horas (totalizando 800/160 mg por tomada).'
    },
    {
      id: 'susp40',
      forma: 'sol',
      nome: 'Suspensão Oral 40 mg + 8 mg / mL (frasco 100 mL)',
      comercial: 'Bactrim / Infectrin',
      conc: '40/8mg/mL',
      rotulo: 'Sulfametoxazol + trimetoprima 40+8mg/mL suspensão',
      mgml: 8,
      frascoMl: 100,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME (CBAF). Cada 1 mL contém 40 mg de SMX e 8 mg de TMP. 5 mL = 200 mg SMX + 40 mg TMP. Agitar antes de usar. Válido por 20 dias após aberto em TA (HSL).'
    },
    {
      id: 'amp80',
      forma: 'amp',
      nome: 'Ampola 400 mg + 80 mg / 5 mL (80 mg SMX + 16 mg TMP por mL)',
      comercial: 'Bactrim / Bac Sulfitrin injetável',
      conc: '80/16mg/mL',
      rotulo: 'Sulfametoxazol + trimetoprima 400+80mg/5mL injetável',
      mgml: 16,
      volml: 5,
      vias: ['EV'],
      disp: '1 ampola',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME (CBAF). Diluir cada ampola de 5 mL em 75 a 125 mL de SF 0,9% ou SG 5% (nunca aplicar pura). Infundir em 60 a 90 minutos (HSL / Bula).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      apres: ['cp800'],
      tipo: 'mg',
      min: 160,
      max: 160,
      padrao: 160,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 14,
      fonte: 'PSZERADO',
      trecho: 'PSZerado p. 103 e 189: Sulfametoxazol + trimetoprima [Bactrim] 800 + 160 mg: Tomar 1 comprimido VO a cada 12 horas por 3 a 5 dias (ITU) ou até 14 dias (HSL: 800/160 mg 12/12h).'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      apres: ['cp400'],
      tipo: 'mg',
      min: 160,
      max: 160,
      padrao: 160,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL: Dose usual adulto: 800mg SMX + 160mg TMP a cada 12h (equivalente a 2 comprimidos de 400/80mg a cada 12h).'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['EV'],
      apres: ['amp80'],
      tipo: 'mg_kg_dia',
      min: 8,
      max: 10,
      padrao: 8,
      dosesDia: [2, 4],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'HSL',
      trecho: 'HSL: Adulto EV Infecção urinária / bacteremia: 8-10mg/kg/dia de Trimetoprima dividida a cada 12h (ou em 2 a 4 doses). Infundir em 60-90 min.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 2, idadeMaxAnos: 11 },
      vias: ['VO'],
      apres: ['susp40'],
      tipo: 'mg_kg_dia',
      min: 8,
      max: 8,
      padrao: 8,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'PSZERADO',
      trecho: 'PSZerado p. 103 e 158: Dose pediátrica: 40 mg/kg/dia de SMX (8 mg/kg/dia de TMP) a cada 12 horas por 7 a 10 dias (HSL: infecções moderadas, otite e ITU: 8mg/kg/dia de TMP dividida a cada 12h).'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 2, idadeMaxAnos: 11 },
      vias: ['EV'],
      apres: ['amp80'],
      tipo: 'mg_kg_dia',
      min: 8,
      max: 10,
      padrao: 8,
      dosesDia: [2, 3],
      dosesPadrao: 2,
      fonte: 'HSL',
      trecho: 'HSL: Pediatria EV Infecções moderadas a graves: 8-10mg/kg/dia de Trimetoprima dividida a cada 12h (ou a cada 6-8-12 horas). Infundir em 60-90 min.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO', 'EV'],
      tipo: 'mg_kg_dia',
      valor: 20,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima adulto e pediatria: 20 mg/kg/dia (baseado na dose de trimetoprima, reservado para pneumocistose grave).'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 2, idadeMaxAnos: 11 },
      vias: ['VO', 'EV'],
      tipo: 'mg_kg_dia',
      valor: 20,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima pediatria: 20 mg/kg/dia (baseado no componente trimetoprima).'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 2 },
      vias: ['VO', 'EV'],
      msg: 'Contraindicado para recém-nascidos e prematuros com menos de 6 a 8 semanas de vida (risco grave de icterícia nuclear / kernicterus por deslocamento da bilirrubina sérica).',
      fonte: 'BULA',
      trecho: 'Bula Bactrim: Contraindicado para prematuros e recém-nascidos durante as primeiras 6 semanas de vida (risco de kernicterus).',
      strong: true
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%', 'Ringer Lactato'],
    concMax: 1.06,
    concUsualPed: 0.8,
    volPadraoAdulto: [
      [80, 100],
      [160, 250]
    ],
    volOpcoes: [75, 100, 125, 250],
    tempo: {
      adulto: { min: 60, max: 90, padrao: 60, txt: 'Infusão EV em 60 a 90 minutos (nunca em bolus direto; risco de tromboflebite e toxicidade).' },
      ped: { min: 60, max: 90, padrao: 60, txt: 'Infusão EV em 60 a 90 minutos (bomba de infusão).' }
    },
    fonteTxt: 'HSL: Diluição em SG 5%, SF 0,9% ou Ringer Lactato. Cada ampola (5 mL contendo 80 mg de TMP) deve ser diluída em 75 a 125 mL de solução parenteral. Concentração máxima: 1 ampola (5 mL) para 75 mL de diluente (estabilidade 2h TA). Diluição padrão: 1 ampola em 100 a 125 mL (estabilidade 4 a 6h TA). Tempo de infusão: 60 a 90 minutos. Nunca administrar em injeção direta.'
  },
  notas: {
    indicacao: 'Tratamento de infecções do trato urinário (cistite, pielonefrite, prostatite), infecções respiratórias (exacerbação de DPOC, otite média aguda), shigelose, diarreia do viajante, e profilaxia e tratamento de pneumocistose por Pneumocystis jirovecii (PCP) e toxoplasmose (HSL / PSZerado / Bula).',
    administracao: 'VO: administrar preferencialmente após as refeições ou com alimentos para minimizar náuseas e desconforto epigástrico. Manter hidratação adequada para prevenir cristalúria. Suspensão: agitar vigorosamente antes de cada uso. EV: diluição obrigatória de 1 ampola (5 mL) em 75 a 125 mL de SF 0,9% ou SG 5%; infundir em 60 a 90 min (HSL). NUNCA administrar por injeção intravenosa direta em bolus ou via intramuscular.',
    cuidados: 'Contraindicado em pacientes com histórico de hipersensibilidade a sulfonamidas ou trimetoprima, insuficiência hepática grave, insuficiência renal severa (ClCr < 15 mL/min), deficiência de G6PD (risco de anemia hemolítica), discrasias sanguíneas graves e menores de 6 semanas de vida (risco de kernicterus). Monitorar hemograma em uso prolongado (risco de leucopenia, trombocitopenia e anemia megaloblástica por depleção de folato) e eletrólitos (risco de hipercalemia). Risco de reações cutâneas graves como Síndrome de Stevens-Johnson e NET.',
    ajuste: 'Insuficiência renal: ClCr > 30 mL/min: dose plena normal; ClCr 15 a 30 mL/min: administrar 50% da dose recomendada; ClCr < 15 mL/min: uso não recomendado (HSL). Hemodiálise: administrar dose complementar após a sessão de hemodiálise. Insuficiência hepática: usar com cautela; contraindicado em hepatopatia grave descompensada.'
  }
};

export default sulfametoxazolTrimetoprima;
