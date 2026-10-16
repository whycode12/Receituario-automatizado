import { Farmaco } from '../../types';

export const sumatriptano: Farmaco = {
  id: 'sumatriptano',
  nome: 'Succinato de Sumatriptano',
  categoria: 'Neurológicos e Antienxaquecosos',
  busca: 'sumatriptano sumatriptana sumax imigran triptano enxaqueca dor de cabeca cefaleia em salvas vascular migranea sc',
  classe: 'Antienxaquecoso Específico (Agonista Seletivo dos Receptores 5-HT1B/1D)',
  dosePratica: 'Adultos (18 a 65 anos) — Via Oral: 50 mg (ou 100 mg se crises graves prévias) VO em dose única logo aos primeiros sinais da crise. Se houver resposta e a dor retornar, pode-se tomar um segundo comprimido após um intervalo MÍNIMO de 2 horas (máx. 200 a 300 mg/dia). Subcutâneo (SC): 6 mg SC (autoinjetor) para alívio ultrarrápido (10 a 15 min) em enxaqueca refratária ou cefaleia em salvas; pode repetir 1 dose após 1 hora se necessário (máx. 12 mg/dia).',
  fontes: { HSL: '05/05/2025', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'crise aguda de enxaqueca ou cefaleia em salvas',
  acessoFonte: 'RENAME 2024: Componente Especializado (CEAF) para Sumatriptano injetável 6 mg/0,5 mL (apenas cefaleia em salvas). Comprimidos disponíveis no mercado comercial amplo.',
  apresentacoes: [
    {
      id: 'cp50',
      forma: 'cp',
      nome: 'Comprimido revestido 50 mg',
      comercial: 'Sumax / Imigran / Genérico',
      conc: '50mg',
      rotulo: 'Sumatriptano 50mg',
      mg: 50,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar 1 comprimido inteiro com água logo ao início da dor de cabeça. Se a dor retornar após melhora inicial, pode repetir a dose após no mínimo 2 horas. Não tomar mais de 4 comprimidos (200 mg) em 24 horas.',
      obs: 'Dose inicial recomendada para a maioria dos pacientes adultos com enxaqueca moderada a intensa.'
    },
    {
      id: 'cp100',
      forma: 'cp',
      nome: 'Comprimido revestido 100 mg',
      comercial: 'Sumax / Imigran / Genérico',
      conc: '100mg',
      rotulo: 'Sumatriptano 100mg',
      mg: 100,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar 1 comprimido com água ao início da crise. Se necessário, repetir 1 comprimido após pelo menos 2 horas. Máximo de 2 a 3 comprimidos por dia.',
      obs: 'Indicado quando doses de 50 mg forem insuficientes em crises pregressas.'
    },
    {
      id: 'cp25',
      forma: 'cp',
      nome: 'Comprimido revestido 25 mg',
      comercial: 'Sumax 25mg',
      conc: '25mg',
      rotulo: 'Sumatriptano 25mg',
      mg: 25,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Dose menor indicada para pacientes com insuficiência hepática leve a moderada ou sensíveis a efeitos adversos.'
    },
    {
      id: 'inj_sc_6',
      forma: 'amp',
      nome: 'Autoinjetor / Ampola 6 mg / 0,5 mL (uso subcutâneo)',
      comercial: 'Sumax autoinjetor / Imigran injetável',
      conc: '6mg / 0,5mL',
      rotulo: 'Sumatriptano 6mg/0,5mL subcutâneo',
      mg: 6,
      volml: 0.5,
      vias: ['SC'],
      disp: '1 seringa / autoinjetor (0,5 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Administrar exclusivamente por via subcutânea (SC), preferencialmente na face externa da coxa ou deltoide. Não administrar por via intravenosa.',
      obs: 'RENAME (CEAF para cefaleia em salvas). Início de ação ultrarrápido em 10 a 15 minutos.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 18 }, { pesoMin: 45 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 25,
      max: 100,
      padrao: 50,
      dosesDia: [1, 3],
      dosesPadrao: 1,
      fonte: 'HSL / PSZERADO',
      trecho: 'Adulto — VO: 25 a 100 mg em dose única logo aos primeiros sinais da crise. Se a dor retornar após melhora inicial, pode repetir após no mínimo 2 horas. Dose máxima diária: 300 mg/dia (prática clínica habitual: até 200 mg/dia).'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 18 }, { pesoMin: 45 }] },
      vias: ['SC'],
      tipo: 'mg',
      min: 6,
      max: 6,
      padrao: 6,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      fonte: 'HSL / PSZERADO',
      trecho: 'Adulto — Subcutâneo (SC): 6 mg em dose única. Se a dor retornar, uma segunda dose de 6 mg pode ser administrada após intervalo mínimo de 1 hora. Dose máxima diária: 12 mg/dia.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 300,
      fonte: 'HSL / BULA',
      trecho: 'Dose máxima diária VO: até 300 mg/dia (geralmente limitado a 200 mg/dia).'
    },
    {
      pub: 'adulto',
      vias: ['SC'],
      tipo: 'mg_dia',
      valor: 12,
      fonte: 'HSL / PSZERADO',
      trecho: 'Dose máxima diária subcutânea: 12 mg/dia (máximo de duas injeções de 6 mg em 24 horas).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com doença arterial coronariana (infarto agudo do miocárdio prévio, angina pectoris estável ou instável, vasoespasmo coronário de Prinzmetal ou isquemia documentada).',
      fonte: 'HSL / PSZERADO',
      trecho: 'Contraindicado em coronariopatia isquêmica e vasoespasmo coronário.'
    },
    {
      msg: 'Contraindicado em hipertensão arterial moderada a grave ou hipertensão não controlada (risco de crise hipertensiva aguda).',
      fonte: 'HSL',
      trecho: 'Contraindicado em hipertensão arterial descontrolada.'
    },
    {
      msg: 'Contraindicado em pacientes com antecedente de acidente vascular cerebral (AVC isquêmico ou hemorrágico), ataque isquêmico transitório (AIT) ou doença arterial periférica obstrutiva.',
      fonte: 'HSL / BULA',
      trecho: 'Contraindicado na presença de doença cerebrovascular ou vasculopatia periférica.'
    },
    {
      msg: 'Contraindicado o uso concomitante com inibidores da monoaminoxidase (IMAO) ou dentro de 2 semanas após a interrupção de IMAO, e com derivados de ergotamina ou outros triptanos em intervalo inferior a 24 horas.',
      fonte: 'HSL',
      trecho: 'Contraindicado concomitantemente com ergotamínicos (intervalo de 24h) ou IMAOs.'
    },
    {
      msg: 'Contraindicado em insuficiência hepática grave.',
      fonte: 'HSL',
      trecho: 'Contraindicado em insuficiência hepática grave.'
    }
  ],
  notas: {
    indicacao: 'Tratamento agudo de crises de enxaqueca (com ou sem aura) e tratamento agudo de episódios de cefaleia em salvas (preferencialmente por via subcutânea). Não utilizar na profilaxia contínua.',
    administracao: 'Via oral: Ingerir com água logo no início da fase álgica. Via subcutânea: Autoinjeção no tecido subcutâneo da coxa ou braço; nunca administrar por via intravenosa direta.',
    cuidados: 'Pode causar sensação de opressão torácica passageira, rubor facial, tontura e calor corporal. Se a dor no peito for intensa ou irradiar para mandíbula/braço esquerdo, procurar atendimento médico de emergência imediatamente.',
    ajuste: 'Insuficiência hepática: Em insuficiência hepática moderada, a dose oral não deve ultrapassar 50 mg por tomada. Contraindicado em insuficiência hepática grave. Insuficiência renal: Não é necessário ajuste de dose.',
    dosePratica: 'Adulto: 50 mg VO logo no início da crise. Se necessário, repetir 1 comprimido após 2 horas (máx. 200 a 300 mg/dia).'
  }
};

export default sumatriptano;
