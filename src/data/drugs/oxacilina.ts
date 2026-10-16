import { Farmaco } from '../../types';

export const oxacilina: Farmaco = {
  id: 'oxacilina',
  nome: 'Oxacilina Sódica',
  categoria: 'Antibióticos e Antimicrobianos',
  busca: 'oxacilina staphcillin oxanon blau estafilococo penicilina antiestafilococica fap mssa',
  classe: 'Antibacteriano (Penicilina isoxazólica resistente a penicilinase / antiestafilocócica)',
  dosePratica: 'Adulto: 500 mg a 1 g EV ou IM a cada 4 a 6 horas (em infecções graves como osteomielite e endocardite: 1 g a 2 g EV a cada 4 horas; máx. 12 g/dia). Pediatria: 50 a 100 mg/kg/dia EV dividido de 6/6h (leves a moderadas) ou 100 a 200 mg/kg/dia dividido de 4/4h a 6/6h (graves; máx. 12 g/dia).',
  fontes: { HSL: '05/05/2025', EINA: '2024', EINP: '2024', PSZERADO: '2025' },
  snPadrao: 'infecção estafilocócica bacteriana',
  acessoFonte: 'RENAME 2024 (Componente Básico / Hospitalar): Frasco-ampola 500 mg pó para solução injetável. Padronizado na rede de urgência, emergência e hospitais do SUS.',
  apresentacoes: [
    {
      id: 'fap500',
      forma: 'fap',
      nome: 'Frasco-ampola 500 mg (pó para injeção)',
      comercial: 'Oxanon / Blau / Genérico',
      conc: '500mg',
      rotulo: 'Oxacilina sódica 500mg frasco-ampola',
      mg: 500,
      volml: 5.37, // volume após expansão com 5 mL de diluente
      reconstMl: 5,
      reconstDil: 'Água Destilada ou SF 0,9%',
      vias: ['EV', 'IM'],
      disp: '1 frasco-ampola',
      acesso: { rename: true, fp: false },
      obs: 'Reconstituir com 5 mL de AD ou SF 0,9%. O produto sofre expansão de volume (volume final aproximado: 5,37 mL = 93 mg/mL).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['EV', 'IM'],
      tipo: 'mg',
      min: 500,
      max: 2000,
      padrao: 1000,
      dosesDia: [4, 6],
      dosesPadrao: 4,
      intervaloFixo: 6,
      fonte: 'HSL',
      trecho: 'Adulto — Infecções leves a moderadas: 250 a 500 mg a cada 4 a 6 horas. Infecções graves (osteomielite, endocardite, septicemia): 1 a 2 g a cada 4 a 6 horas.'
    },
    {
      pub: 'ped',
      vias: ['EV', 'IM'],
      tipo: 'mg_kg_dia',
      min: 50,
      max: 200,
      padrao: 100,
      dosesDia: [4, 6],
      dosesPadrao: 4,
      intervaloFixo: 6,
      fonte: 'HSL / EINP',
      trecho: 'Pediatria — Infecções leves a moderadas: 50 a 100 mg/kg/dia a cada 6 horas. Infecções graves: 100 a 200 mg/kg/dia a cada 4 a 6 horas (máximo 12 g/dia).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 12000,
      fonte: 'HSL',
      trecho: 'Dose máxima adulto: até 12 g/dia em infecções graves sob regime de 4/4h ou 6/6h.'
    },
    {
      pub: 'ped',
      tipo: 'mg_dia',
      valor: 12000,
      fonte: 'HSL / EINP',
      trecho: 'Dose máxima pediátrica: não ultrapassar 12 g/dia ou 200 mg/kg/dia.'
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%', 'SG 10%', 'Ringer Lactato'],
    concMax: 40,
    concUsualPed: 10,
    volOpcoes: [100, 250],
    tempo: {
      adulto: { min: 10, padrao: 30, max: 60, txt: 'Infusão EV em 30 a 60 min (ou IV direto lento em 10 minutos).' },
      ped: { min: 15, padrao: 30, max: 60, txt: 'Infusão EV em 15 a 30 minutos (máx. 10 mg/mL em acesso periférico; 40 mg/mL apenas em acesso venoso central).' }
    },
    fonteTxt: 'Einstein Adultos / Pediátrico: Reconstituir o frasco-ampola com 5 mL de AD/SF (sofre expansão para 5,37 mL). Diluir a dose em 100 a 250 mL de SF 0,9% ou SG 5%. Infundir em 30 a 60 minutos (ou IV direto lento em no mínimo 10 minutos).'
  },
  contra: [
    {
      msg: 'Hipersensibilidade grave e anafilaxia conhecida a penicilinas, cefalosporinas ou outros betalactâmicos.',
      fonte: 'HSL',
      trecho: 'Contraindicado em pacientes com histórico de reações anafiláticas prévias a penicilinas.'
    },
    {
      msg: 'Risco de flebite na infusão intravenosa periférica e dor intensa no local de injeção IM. Recomenda-se alternar os locais de punção e respeitar o tempo mínimo de infusão.',
      fonte: 'EINA / EINP',
      trecho: 'Alto potencial flebogênico; infundir lentamente e verificar permeabilidade do cateter venoso.'
    }
  ],
  notas: {
    indicacao: 'Tratamento de infecções causadas por cepas de Staphylococcus aureus sensíveis à oxacilina (MSSA), como celulite, furunculose, abscesso cutâneo, osteomielite, artrite séptica, pneumonia estafilocócica, endocardite e bacteremia.',
    administracao: 'Via EV: Reconstituir cada frasco de 500 mg com 5 mL de água destilada. O pó sofre expansão resultando em 5,37 mL (concentração de 93 mg/mL). Diluir a dose calculada em 100 a 250 mL de SF 0,9% ou SG 5% e infundir em 30 a 60 minutos. Via IM: Injeção intramuscular profunda, lentamente no quadrante superior externo da região glútea.',
    cuidados: 'Monitorar função hepática (risco de hepatotoxicidade transitória e colestase com doses elevadas), função renal e eletrólitos (cada frasco contém aproximadamente 1,3 mEq de sódio).',
    ajuste: 'Insuficiência renal: Não é necessário ajuste em insuficiência renal leve ou moderada. Em disfunção renal grave (ClCr < 10 mL/min), monitorar toxicidade ou espaçar para doses de até 1 g a cada 4 a 6 horas.',
    dosePratica: 'Adulto: 1 g EV de 6/6h (ou até 2 g EV de 4/4h se grave). Pediatria: 100 a 150 mg/kg/dia EV dividido de 6/6h.'
  }
};

export default oxacilina;
