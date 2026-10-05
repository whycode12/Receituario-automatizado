import { Farmaco } from '../../types';

export const cimetidina: Farmaco = {
  id: 'cimetidina',
  nome: 'Cimetidina',
  categoria: 'Gastrintestinal e Antieméticos',
  busca: 'cimetidina tagamet antagonista h2 antiulceroso gastrite ulcera refluxo azia pirose',
  classe: 'Antiulceroso e Inibidor da Secreção Ácida Gástrica (Antagonista dos Receptores H2 da Histamina)',
  dosePratica: 'Adultos: VO 200 a 400 mg 2 a 4x/dia (ou 800 mg em dose única ao deitar; máx. 2.400 mg/dia); EV/IM 300 mg (1 ampola de 2 mL = 300 mg) a cada 4 a 6 horas (injetar EV lento em ≥ 2 min ou diluído em 20-100 mL de SF/SG5% em 30 min). Pediatria: EV/VO 20 a 25 mg/kg/dia dividido de 4/4h a 6/6h (neonatos: 10 a 15 mg/kg/dia). Alerta: potente inibidor do citocromo P450 (múltiplas interações medicamentosas).',
  fontes: { HSL: '07/03/2023', BULA: '04/10/2026' },
  snPadrao: 'epigastralgia, pirose ou queimação gástrica',
  acessoFonte: 'RENAME 2024: Cimetidina comprimido 200 mg / 400 mg no Componente Básico e solução injetável 150 mg/mL (ampola 2 mL = 300 mg) no Componente Hospitalar.',
  apresentacoes: [
    {
      id: 'cp200',
      forma: 'cp',
      nome: 'Comprimido 200 mg',
      comercial: 'Tagamet / Genérico',
      conc: '200mg',
      rotulo: 'Cimetidina 200mg comprimido',
      mg: 200,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Ingerir com um copo de água junto com as refeições ou ao deitar-se.',
      obs: 'RENAME (Componente Básico). Antagonista H2 clássico.'
    },
    {
      id: 'cp400',
      forma: 'cp',
      nome: 'Comprimido 400 mg',
      comercial: 'Tagamet / Cimetidina 400mg',
      conc: '400mg',
      rotulo: 'Cimetidina 400mg comprimido',
      mg: 400,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Ingerir com água às refeições ou dose única ao deitar.',
      obs: 'RENAME (Componente Básico).'
    },
    {
      id: 'amp300',
      forma: 'amp',
      nome: 'Solução injetável 150 mg/mL ampola 2 mL (300 mg)',
      comercial: 'Cimetidina injetável',
      conc: '150mg/mL',
      rotulo: 'Cimetidina 150mg/mL ampola 2mL (300mg)',
      mg: 300,
      mgml: 150,
      volml: 2,
      vias: ['EV', 'IM'],
      disp: '1 ampola',
      acesso: { rename: true, fp: false },
      obs: 'RENAME (Componente Hospitalar). Injetar EV direto lentamente em no mínimo 2 minutos, ou diluir em 20 a 100 mL de SF 0,9% ou SG 5% e infundir em 30 minutos (HSL). IM profunda no glúteo.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 200,
      max: 400,
      padrao: 400,
      dosesDia: [2, 4],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'HSL',
      trecho: 'Adulto (VO): 200mg a 400mg, VO, 2 a 4 vezes ao dia (às refeições e ao deitar), ou dose única diária de 800mg ao deitar para úlcera péptica (dose diária usual: 800 a 1.600mg).'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 40 }] },
      vias: ['EV', 'IM'],
      tipo: 'mg',
      min: 300,
      max: 300,
      padrao: 300,
      dosesDia: [4, 6],
      dosesPadrao: 4,
      intervaloFixo: 6,
      fonte: 'HSL',
      trecho: 'Adulto (IM/EV): 300mg (1 ampola), IM ou EV, a cada 4 a 6 horas (máx. 2.400mg/dia = 8 ampolas).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 1, idadeMaxAnos: 14 },
      vias: ['EV', 'VO'],
      tipo: 'mg_kg_dia',
      min: 20,
      max: 25,
      padrao: 20,
      dosesDia: [4, 6],
      dosesPadrao: 4,
      intervaloFixo: 6,
      fonte: 'HSL',
      trecho: 'Pediatria de 1 a 12 anos: 20 a 25 mg/kg/dia, divididos a cada 4 a 6 horas por via EV ou VO.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 1, idadeMaxMeses: 12 },
      vias: ['EV'],
      tipo: 'mg_kg_dia',
      min: 20,
      max: 20,
      padrao: 20,
      dosesDia: [4, 4],
      dosesPadrao: 4,
      intervaloFixo: 6,
      fonte: 'HSL',
      trecho: 'Lactentes de 1 mês a 1 ano: 20 mg/kg/dia, EV, divididos a cada 6 horas.'
    },
    {
      pub: 'ped',
      se: { idadeMaxMeses: 1 },
      vias: ['EV'],
      tipo: 'mg_kg_dia',
      min: 10,
      max: 15,
      padrao: 10,
      dosesDia: [4, 4],
      dosesPadrao: 4,
      intervaloFixo: 6,
      fonte: 'HSL',
      trecho: 'Recém-nascidos e neonatos: 10 a 15 mg/kg/dia, EV, divididos a cada 6 horas.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 2400,
      fonte: 'HSL',
      trecho: 'Dose Máxima Adulto: 2.400 mg/dia (8 infusões de 300 mg).'
    },
    {
      pub: 'ped',
      tipo: 'mg_kg_dia',
      valor: 40,
      fonte: 'BULA',
      trecho: 'Dose máxima pediátrica: 40 mg/kg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade conhecida à cimetidina ou a outros antagonistas dos receptores H2.',
      fonte: 'HSL',
      trecho: 'Contraindicado em hipersensibilidade à cimetidina.',
      strong: false
    },
    {
      msg: 'POTENTE INIBIDOR ENZIMÁTICO DO CYP450: A cimetidina inibe fortemente múltiplas isoformas do citocromo hepático (CYP1A2, CYP2C9, CYP2D6, CYP3A4), elevando de forma perigosa os níveis séricos e a toxicidade de: varfarina (risco hemorrágico grave), fenitoína, teofilina, carbamazepina, diazepam, lidocaína e propranolol. Preferir inibidores de bomba de prótons ou outros bloqueadores H2 se polifarmácia.',
      fonte: 'BULA',
      trecho: 'Inibe o metabolismo oxidativo de fármacos via citocromo P450, aumentando as concentrações plasmáticas de anticoagulantes, anticonvulsivantes e antiarrítmicos.',
      strong: false
    },
    {
      msg: 'Efeitos antiandrogênicos e endócrinos: em doses elevadas ou uso prolongado, pode causar ginecomastia dolorosa, galactorreia e disfunção erétil/impotência reversíveis devido ao bloqueio de receptores androgênicos e inibição do catabolismo de estrogênios.',
      fonte: 'BULA',
      trecho: 'Pode induzir ginecomastia e diminuição da libido por efeito antiandrogênico.',
      strong: false
    },
    {
      vias: ['EV'],
      msg: 'Velocidade de injeção EV: administrar lentamente em no mínimo 2 minutos. Injeções endovenosas rápidas em bolus podem precipitar arritmias cardíacas graves (bloqueio AV, bradicardia sinusal intensa) e hipotensão arterial por vasodilatação mediada por receptores H2 vasculares.',
      fonte: 'HSL',
      trecho: 'EV direto no mínimo em 2 minutos. Injeção rápida pode causar bradicardia e hipotensão.',
      strong: false
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%', 'SG 10%', 'Ringer Lactato'],
    concMax: 15, // ampola pura tem 150 mg/mL, mas para infusão diluir para < 15 mg/mL
    concUsual: 3,  // 300 mg em 100 mL = 3 mg/mL
    volOpcoes: [20, 50, 100],
    tempo: {
      adulto: { min: 2, padrao: 30, max: 60 },
      ped: { min: 15, padrao: 30, max: 60 }
    },
    fonteTxt: 'EV Direto: aplicar lentamente em no mínimo 2 minutos (HSL). Infusão intermitente: diluir a ampola de 300 mg em 20 a 100 mL de SF 0,9%, SG 5% ou Ringer Lactato e infundir em 30 a 60 minutos (HSL). Infusão contínua: 75 mg/h (900 mg em 24h ou conforme indicação).'
  },
  notas: {
    indicacao: 'Tratamento em curto prazo de úlcera péptica gástrica benigna e duodenal, esofagite de refluxo, prevenção de sangramento digestivo por úlcera de estresse em pacientes críticos de UTI e estados de hipersecreção ácida gástrica (Zollinger-Ellison) (HSL).',
    administracao: 'VO: Tomar junto das refeições e ao deitar. EV: aplicar em no mínimo 2 minutos ou infundir em 30 min. IM: aplicar profundamente no quadrante superior externo da região glútea.',
    cuidados: 'Monitorar pacientes idosos, nos quais o risco de confusão mental, agitação e desorientação é mais frequente devido à permeabilidade da barreira hematoencefálica.',
    ajuste: 'Insuficiência renal: Clcr > 50 mL/min: posologia habitual; Clcr 30-50 mL/min: 200 mg 4x/dia; Clcr 15-30 mL/min: 200 mg 3x/dia; Clcr < 15 mL/min: 200 mg 2x/dia (HSL). Hemodiálise: dialisável (5-20%), administrar após a sessão. Insuficiência hepática grave: reduzir dose.'
  }
};

export default cimetidina;
