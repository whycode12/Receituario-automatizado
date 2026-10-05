import { Farmaco } from '../../types';

export const dexametasona: Farmaco = {
  id: 'dexametasona',
  nome: 'Acetato / Fosfato Dissódico de Dexametasona',
  categoria: 'Corticoides Sistêmicos',
  busca: 'dexametasona decadron corticoide decadronal laringite crupe edema cerebral anafilaxia',
  classe: 'Anti-inflamatório Hormonal, Glicocorticoide de Alta Potência e Longa Duração',
  dosePratica: 'Adultos: VO 0,75 a 15 mg/dia (dose anti-inflamatória habitual: 4 a 10 mg/dia); EV/IM: 4 a 10 mg (1 ampola de 2,5 mL de 4 mg/mL = 10 mg) EV direto em 2-5 min ou diluído em 50-100 mL SF (em edema cerebral: até 10 mg EV seguido de 4 mg de 6/6h). Pediatria: Anti-inflamatório/antialérgico: 0,08 a 0,3 mg/kg/dia VO/EV dividido de 1 a 2x/dia; Laringite estridulosa / crupe (dose consagrada SBP): 0,15 a 0,6 mg/kg em DOSE ÚNICA VO/IM (máx. 10 a 16 mg).',
  fontes: { HSL: '07/03/2023', PSZERADO: '2025', EINA: '2024', EINP: '2024', BULA: '04/10/2026' },
  snPadrao: 'reação alérgica grave, edema de glote, broncoespasmo ou crise inflamatória',
  acessoFonte: 'RENAME 2024: comprimido 4 mg e solução injetável 4 mg/mL (frasco-ampola ou ampola 2,5 mL = 10 mg) no Componente Básico e Hospitalar. Elixir e comprimidos de 0,5 mg / 0,75 mg de ampla circulação comercial (Decadron).',
  apresentacoes: [
    {
      id: 'fap10_4mgml',
      forma: 'amp',
      nome: 'Solução injetável 4 mg/mL ampola 2,5 mL (10 mg)',
      comercial: 'Decadron injetável / Genérico',
      conc: '4mg/mL',
      rotulo: 'Fosfato dissódico de dexametasona 4mg/mL ampola 2,5mL (10mg)',
      mg: 10,
      mgml: 4,
      volml: 2.5,
      vias: ['EV', 'IM'],
      disp: '1 ampola',
      acesso: { rename: true, fp: false },
      obs: 'RENAME (Componente Hospitalar). Fosfato dissódico de dexametasona. 1 ampola de 2,5 mL contém 10 mg (4 mg/mL). Injetar EV lento direto (> 2-3 min) ou diluir em 50 a 100 mL de SF/SG5% por 15 a 30 min (HSL / Einstein Adultos).'
    },
    {
      id: 'amp2_2mgml',
      forma: 'amp',
      nome: 'Solução injetável 2 mg/mL ampola 1 mL (2 mg)',
      comercial: 'Decadron 2mg/mL ampola',
      conc: '2mg/mL',
      rotulo: 'Dexametasona 2mg/mL ampola 1mL (2mg)',
      mg: 2,
      mgml: 2,
      volml: 1,
      vias: ['EV', 'IM'],
      disp: '1 ampola',
      acesso: { rename: false, fp: false },
      obs: 'Formulação injetável de menor concentração para titulação pediátrica ou infiltrações articulares (Einstein Ped).'
    },
    {
      id: 'cp4',
      forma: 'cp',
      nome: 'Comprimido 4 mg',
      comercial: 'Decadron / Genérico',
      conc: '4mg',
      rotulo: 'Dexametasona 4mg comprimido',
      mg: 4,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Ingerir pela manhã com as refeições ou com um copo de água/leite para diminuir o desconforto gástrico.',
      obs: 'RENAME (Componente Básico). Comprimido divisível de 4 mg.'
    },
    {
      id: 'cp075',
      forma: 'cp',
      nome: 'Comprimido 0,75 mg',
      comercial: 'Decadron 0,75mg',
      conc: '0,75mg',
      rotulo: 'Dexametasona 0,75mg comprimido',
      mg: 0.75,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Ingerir junto às refeições.',
      obs: 'Formulação para doses baixas e desmame gradual.'
    },
    {
      id: 'elixir01',
      forma: 'sol',
      nome: 'Elixir 0,1 mg/mL (frasco 120 mL)',
      comercial: 'Decadron elixir',
      conc: '0,1mg/mL',
      rotulo: 'Dexametasona 0,1mg/mL elixir oral',
      mgml: 0.1,
      frascoMl: 120,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: false, fp: false },
      instrucao: 'Administrar com auxílio do dosador oral junto ou logo após as refeições. 1 mL = 0,1 mg; 5 mL = 0,5 mg.',
      obs: 'Apresentação oral líquida pediátrica.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 40 }] },
      vias: ['EV', 'IM'],
      tipo: 'mg',
      min: 4,
      max: 10,
      padrao: 10, // 1 ampola de 2,5 mL = 10 mg no pronto-socorro (PSZerado p. 27, 31, 32, 168)
      dosesDia: [1, 4],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 5,
      fonte: 'PSZERADO',
      trecho: 'Adultos (Pronto-atendimento): 4 a 10 mg (1 ampola de 10 mg / 2,5 mL), EV ou IM direto ou diluído em 50 a 100 mL de SF 0,9% (PSZerado). Em edema cerebral: 10 mg EV inicial seguido de 4 mg IM/EV de 6/6h.'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 0.75,
      max: 15,
      padrao: 4,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 5,
      fonte: 'HSL',
      trecho: 'Adultos (VO): 0,75 a 15 mg/dia (padrão habitual anti-inflamatório/antialérgico: 4 mg a 8 mg em dose única matinal ou dividida a cada 12 horas) por 3 a 5 dias.'
    },
    {
      pub: 'ped',
      se: { idadeMaxAnos: 14 },
      vias: ['VO', 'EV', 'IM'],
      tipo: 'mg_kg_dia',
      min: 0.08,
      max: 0.3,
      padrao: 0.15,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 5,
      fonte: 'PSZERADO',
      trecho: 'Pediatria (anti-inflamatório / alergia aguda): 0,08 a 0,3 mg/kg/dia (padrão 0,15 mg/kg/dia), VO, EV ou IM, em dose única diária ou dividida a cada 12 horas por 3 a 5 dias (PSZerado p. 27 / HSL).'
    },
    {
      pub: 'ped',
      se: { idadeMaxAnos: 14 },
      vias: ['VO', 'IM'],
      tipo: 'mg_kg_dose',
      min: 0.15,
      max: 0.6,
      padrao: 0.6, // dose padrão consagrada de crupe/laringite aguda da SBP
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 1,
      maxDoseMg: 16,
      fonte: 'PSZERADO',
      trecho: 'Pediatria (Crupe / Laringite estridulosa / Edema de via aérea): 0,15 a 0,6 mg/kg em DOSE ÚNICA VO ou IM (máximo de 16 mg). Efeito anti-inflamatório potente e sustentado com início em 1 a 2 horas.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 40,
      fonte: 'HSL',
      trecho: 'Dose máxima Adulto: 20 a 40 mg/dia (salvo protocolos específicos de quimioterapia ou choque séptico).'
    },
    {
      pub: 'ped',
      tipo: 'mg_kg_dia',
      valor: 0.6,
      fonte: 'HSL',
      trecho: 'Dose máxima Pediatria: 0,6 mg/kg/dia (máx. 16 mg/dia).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com infecções fúngicas sistêmicas e hipersensibilidade à dexametasona ou a outros corticosteroides.',
      fonte: 'HSL',
      trecho: 'Contraindicado em infecções fúngicas sistêmicas e hipersensibilidade à fórmula.',
      strong: false
    },
    {
      msg: 'Administração de vacinas de vírus vivos atenuados: contraindicada durante tratamentos com doses imunossupressoras de dexametasona (risco de replicação viral e doença vacinal).',
      fonte: 'BULA',
      trecho: 'Vacinas de vírus vivos atenuados são contraindicadas em pacientes recebendo doses imunossupressoras.',
      strong: false
    },
    {
      msg: 'Cursos curtos (até 3 a 5 dias) em pronto-socorro (como em crupe, exacerbação de asma ou anafilaxia) NÃO necessitam de desmame gradual, podendo ser suspensos abruptamente sem risco de insuficiência adrenal.',
      fonte: 'PSZERADO',
      trecho: 'Cursos breves de corticoides por menos de 5 a 7 dias dispensam desmame.',
      strong: false
    },
    {
      msg: 'Potência glicocorticoide e ausência de ação mineralocorticoide: a dexametasona é cerca de 25 a 30 vezes mais potente que a hidrocortisona e cerca de 5 a 7 vezes mais potente que a prednisona, com retenção de sódio praticamente nula. Cautela com hiperglicemia aguda em diabéticos.',
      fonte: 'HSL',
      trecho: 'Apresenta elevada potência anti-inflamatória e atividade mineralocorticoide desprezível.',
      strong: false
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 4, // ampola pura pronta
    concUsual: 0.2, // 10 mg em 50 mL = 0,2 mg/mL
    volOpcoes: [20, 50, 100],
    tempo: {
      adulto: { min: 2, padrao: 15, max: 30 },
      ped: { min: 2, padrao: 15, max: 30 }
    },
    fonteTxt: 'EV Direto: aplicar lentamente em no mínimo 2 a 3 minutos (HSL / Einstein Adulto). Infusão intermitente: diluir a dose em 50 a 100 mL de SF 0,9% ou SG 5% e infundir em 15 a 30 minutos (Padrão HSL: 50 mL em 15 min). Compatível na mesma via com ondansetrona (Trissel / HSL).'
  },
  notas: {
    indicacao: 'Glicocorticoide sintético de longa ação (meia-vida biológica de 36 a 72 horas) indicado no tratamento de reações alérgicas graves, anafilaxia (após adrenalina), edema de glote / laringite estridulosa (crupe), exacerbação de asma, edema cerebral vasogênico associado a neoplasias/AVC e antiemético adjuvante em quimioterapia (HSL / PSZerado).',
    administracao: 'VO: Tomar pela manhã junto às refeições. EV: aplicar lentamente em > 2 min ou diluído em 50 mL SF. IM: injeção profunda na região glútea.',
    cuidados: 'Monitorar glicemia capilar (hiperglicemia aguda frequente mesmo em não diabéticos), pressão arterial e sintomas de euforia/insônia ou psicose corticoide em idosos.',
    ajuste: 'Insuficiência renal e hepática: não necessita de ajuste de dose. Hemodiálise: não requer suplementação posológica.'
  }
};

export default dexametasona;
