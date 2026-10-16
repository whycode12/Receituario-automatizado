import { Farmaco, Paciente } from '../../types';

export const soroEv: Farmaco = {
  id: 'soro_ev',
  nome: 'Bolsa de Soro EV (Hidratação e Expansão)',
  categoria: 'Soluções e Hidratação',
  busca: 'soro bolsa soro ev hidratacao venosa desidratacao expansao nacl 0,9 cloreto de sodio sf ringer lactato sg 5 glicosado glicofisiologico ubs upa holliday',
  classe: 'Soluções Hidroeletrolíticas Parenterais e Expansores Plasmáticos',
  dosePratica: 'Adulto (Desidratação / Expansão rápida): 500 mL a 1.000 mL EV rápido (correr aberto ou em 30 a 60 min); Manutenção / Hidratação: 500 mL a 1.000 mL EV a cada 8 a 12 horas (≈ 28 a 42 gotas/min ou 80 a 125 mL/h). Pediatria (Desidratação grave / Plano C do MS): 20 mL/kg de SF 0,9% ou Ringer Lactato EV em 20 a 30 minutos (podendo repetir até 3x se choque); Manutenção diária (Holliday-Segar): SG 5% + SF 0,9% 4:1 ou 1:1.',
  fontes: { PSZERADO: '2025', HSL: '2024', EINA: '2024', EINP: '2024', MS: '2023' },
  snPadrao: 'desidratação ou necessidade de hidratação venosa',
  acessoFonte: 'RENAME 2024 (Componente Básico / Hospitalar): Cloreto de sódio 0,9%, Glicose 5% e Ringer com Lactato em bolsas de 250 mL, 500 mL e 1.000 mL constam no elenco público em todas as UBSs, UPAs e hospitais.',
  apresentacoes: [
    {
      id: 'sf500',
      forma: 'bolsa',
      nome: 'Cloreto de Sódio 0,9% (Soro Fisiológico) bolsa 500 mL',
      comercial: 'Soro Fisiológico 0,9% (SF)',
      conc: '0,9%',
      rotulo: 'Soro Fisiológico 0,9% (Cloreto de Sódio 0,9%) bolsa 500 mL',
      volml: 500,
      vias: ['EV'],
      unidades: ['ml'],
      disp: '1 bolsa (500 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Infundir por via endovenosa com equipo macrogotas ou bomba de infusão. Monitorar sinais vitais e ausculta pulmonar.',
      obs: 'Cristaloide isotônico padrão ouro para expansão volêmica rápida em desidratação, hipotensão e choque hipovolêmico.'
    },
    {
      id: 'sf1000',
      forma: 'bolsa',
      nome: 'Cloreto de Sódio 0,9% (Soro Fisiológico) bolsa 1.000 mL',
      comercial: 'Soro Fisiológico 0,9% (SF)',
      conc: '0,9%',
      rotulo: 'Soro Fisiológico 0,9% bolsa 1.000 mL',
      volml: 1000,
      vias: ['EV'],
      unidades: ['ml'],
      disp: '1 bolsa (1.000 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Infundir por via endovenosa com equipo macrogotas ou bomba de infusão contínua.',
      obs: 'Indicado para reidratação vigorosa e reposição volêmica em adultos no pronto atendimento.'
    },
    {
      id: 'sf250',
      forma: 'bolsa',
      nome: 'Cloreto de Sódio 0,9% (Soro Fisiológico) bolsa 250 mL',
      comercial: 'Soro Fisiológico 0,9% (SF)',
      conc: '0,9%',
      rotulo: 'Soro Fisiológico 0,9% bolsa 250 mL',
      volml: 250,
      vias: ['EV'],
      unidades: ['ml'],
      disp: '1 bolsa (250 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Infundir por via endovenosa.',
      obs: 'Ideal para alíquotas pediátricas ou infusão rápida fracionada em idosos e cardiopatas.'
    },
    {
      id: 'sf100',
      forma: 'bolsa',
      nome: 'Cloreto de Sódio 0,9% bolsa 100 mL',
      conc: '0,9%',
      rotulo: 'Soro Fisiológico 0,9% bolsa 100 mL',
      volml: 100,
      vias: ['EV'],
      unidades: ['ml'],
      disp: '1 bolsa (100 mL)',
      acesso: { rename: true, fp: false },
      obs: 'Bolsa pequena indicada para diluição de medicações ou bolus pediátrico restrito.'
    },
    {
      id: 'sg500',
      forma: 'bolsa',
      nome: 'Soro Glicosado 5% (Glicose 5%) bolsa 500 mL',
      comercial: 'Soro Glicosado 5% (SG 5%)',
      conc: '5%',
      rotulo: 'Soro Glicosado 5% bolsa 500 mL',
      volml: 500,
      vias: ['EV'],
      unidades: ['ml'],
      disp: '1 bolsa (500 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Infundir por via endovenosa. Não utilizar isolado para expansão volêmica em choque ou trauma craniano (solução hipoosmolar in vivo).',
      obs: 'Solução de manutenção eletrolítica, reposição de água livre e suporte calórico básico (fornece 50 g de glicose e 170 kcal por litro).'
    },
    {
      id: 'sg1000',
      forma: 'bolsa',
      nome: 'Soro Glicosado 5% bolsa 1.000 mL',
      comercial: 'Soro Glicosado 5% (SG 5%)',
      conc: '5%',
      rotulo: 'Soro Glicosado 5% bolsa 1.000 mL',
      volml: 1000,
      vias: ['EV'],
      unidades: ['ml'],
      disp: '1 bolsa (1.000 mL)',
      acesso: { rename: true, fp: false },
      obs: 'Uso contínuo em bomba ou equipo em pacientes em jejum prolongado.'
    },
    {
      id: 'sg250',
      forma: 'bolsa',
      nome: 'Soro Glicosado 5% bolsa 250 mL',
      conc: '5%',
      rotulo: 'Soro Glicosado 5% bolsa 250 mL',
      volml: 250,
      vias: ['EV'],
      unidades: ['ml'],
      disp: '1 bolsa (250 mL)',
      acesso: { rename: true, fp: false }
    },
    {
      id: 'rl500',
      forma: 'bolsa',
      nome: 'Ringer com Lactato bolsa 500 mL',
      comercial: 'Solução Ringer Lactato (RL)',
      conc: 'Isotônica balanceada',
      rotulo: 'Ringer com Lactato bolsa 500 mL',
      volml: 500,
      vias: ['EV'],
      unidades: ['ml'],
      disp: '1 bolsa (500 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Infundir por via endovenosa. Evita acidose hiperclorêmica em grandes volumes. Evitar em hipercalemia ou hepatopatia grave.',
      obs: 'Cristaloide balanceado de eleição em desidratação, sepse, grandes queimados e cetoacidose diabética.'
    },
    {
      id: 'rl1000',
      forma: 'bolsa',
      nome: 'Ringer com Lactato bolsa 1.000 mL',
      comercial: 'Solução Ringer Lactato (RL)',
      conc: 'Isotônica balanceada',
      rotulo: 'Ringer com Lactato bolsa 1.000 mL',
      volml: 1000,
      vias: ['EV'],
      unidades: ['ml'],
      disp: '1 bolsa (1.000 mL)',
      acesso: { rename: true, fp: false }
    },
    {
      id: 'sgf500',
      forma: 'bolsa',
      nome: 'Soro Glicofisiológico (SG 5% + SF 0,9% 1:1) bolsa 500 mL',
      comercial: 'Soro Glicofisiológico',
      conc: 'Glicose 2,5% + NaCl 0,45%',
      rotulo: 'Soro Glicofisiológico bolsa 500 mL',
      volml: 500,
      vias: ['EV'],
      unidades: ['ml'],
      disp: '1 bolsa (500 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Infundir por via endovenosa para hidratação de manutenção.',
      obs: 'Combinação pronta prática para manutenção clínica evitando sobrecarga de sódio e prevenindo cetose.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      vias: ['EV'],
      tipo: 'ml',
      min: 250,
      max: 1000,
      padrao: 500,
      dosesDia: [1, 4],
      dosesPadrao: 1,
      fonte: 'PSZERADO',
      trecho: 'Desidratação / Choque hipovolêmico em adultos: 500 a 1.000 mL EV rápido (correr aberto ou em 30 a 60 min). Repetir alíquotas conforme avaliação de pressão arterial, frequência cardíaca e ausculta pulmonar.'
    },
    {
      pub: 'ped',
      vias: ['EV'],
      tipo: 'mg_kg_dose', // mg representa mL na regra volumétrica pediátrica
      min: 10,
      max: 20,
      padrao: 20,
      dosesDia: [1, 3],
      dosesPadrao: 1,
      fonte: 'MS / SBP',
      trecho: 'Plano C do Ministério da Saúde para Desidratação Grave / Choque: Administrar 20 mL/kg de SF 0,9% ou Ringer Lactato EV em 20 a 30 minutos. Reavaliar imediatamente e repetir se persistirem sinais de choque (até 3 vezes = 60 mL/kg).'
    }
  ],
  ev: {
    diluentes: ['Solução Pura / Direta'],
    volOpcoes: [100, 250, 500, 1000],
    tempo: {
      adulto: { min: 30, padrao: 60, max: 480, txt: 'Expansão rápida em 30 a 60 min (ou correr aberto); manutenção em 4 a 8 horas (≈ 28 a 42 gts/min).' },
      ped: { min: 20, padrao: 30, max: 60, txt: 'Expansão rápida na desidratação grave: 20 a 30 minutos.' }
    },
    fonteTxt: 'PSZerado / Ministério da Saúde / Einstein: Administrar por via intravenosa. Em expansão rápida na urgência, infundir em equipo macrogotas aberto ou em 30-60 min sob vigilância rigorosa. Em manutenção, programar infusão contínua em 4 a 8 horas (125 mL/h = ≈ 42 gotas/min).'
  },
  contra: [
    {
      msg: 'Cautela rigorosa e vigilância contínua em pacientes com insuficiência cardíaca congestiva descompensada, insuficiência renal oligúrica/anúrica ou hipertensão arterial grave (risco iminente de sobrecarga hídrica e edema agudo de pulmão).',
      fonte: 'PSZERADO',
      trecho: 'Monitorar ausculta respiratória e turgência jugular a cada alíquota de expansão.'
    },
    {
      msg: 'Ringer com Lactato é contraindicado em pacientes com hipercalemia, alcalose metabólica ou insuficiência hepática grave descompensada (incapacidade de metabolizar lactato em bicarbonato).',
      fonte: 'HSL',
      trecho: 'Evitar Ringer Lactato em disfunção hepática grave e hiperpotassemia.'
    },
    {
      msg: 'Soro Fisiológico 0,9% em grandes volumes pode induzir acidose metabólica hiperclorêmica e vasoconstrição renal.',
      fonte: 'PSZERADO',
      trecho: 'SF 0,9% em grandes volumes pode levar a acidose hiperclorêmica; preferir cristaloides balanceados quando disponíveis.'
    }
  ],
  notas: {
    indicacao: 'Tratamento de desidratação leve, moderada e grave por perdas gastrointestinais (vômitos e diarreia), hipotensão, choque hipovolêmico, cetoacidose diabética, sepse, reposição de jejum e hidratação parenteral em pronto atendimento.',
    administracao: 'Infundir por via endovenosa através de acesso venoso periférico calibroso (jelco 18G ou 20G em adultos). Para expansão rápida, correr aberto ou usar equipo macrogotas (1 mL = 20 gotas). Em pediatria e manutenção controlada, utilizar bomba de infusão ou microgotas.',
    cuidados: 'Aferir pressão arterial, frequência cardíaca, saturação de oxigênio e realizar ausculta pulmonar antes e após cada alíquota de soro. Suspender a expansão imediatamente se surgirem estertores crepitantes pulmonares, taquipneia ou turgência jugular.',
    ajuste: 'Em insuficiência renal e cardiopatas graves, restringir volumes a alíquotas cautelosas de 250 mL sob monitorização hemodinâmica.',
    dosePratica: 'Expansão rápida Adulto: 500 a 1.000 mL EV correr aberto ou em 30 a 60 min. Pediatria: 20 mL/kg EV em 20 a 30 min (Plano C).'
  }
};

export default soroEv;
