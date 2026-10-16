import { Farmaco } from '../../types';

export const naratriptano: Farmaco = {
  id: 'naratriptano',
  nome: 'Cloridrato de Naratriptano',
  categoria: 'Neurológicos e Antienxaquecosos',
  busca: 'naratriptano naratriptana naramig triptano enxaqueca dor de cabeca cefaleia vascular migranea',
  classe: 'Antienxaquecoso Específico (Agonista Seletivo dos Receptores 5-HT1B/1D)',
  dosePratica: 'Adultos (18 a 65 anos): 2,5 mg (1 comprimido) VO logo aos primeiros sinais da crise de enxaqueca. Se a cefaleia retornar ou a resposta inicial for parcial, pode-se tomar um segundo comprimido após um intervalo MÍNIMO de 4 horas. Dose MÁXIMA estrita: 2 comprimidos (5 mg) em 24 horas.',
  fontes: { HSL: '05/05/2025', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'crise de enxaqueca ou cefaleia vascular',
  acessoFonte: 'RENAME 2024: Não consta na RENAME básica. Amplamente comercializado em drogarias de todo o Brasil.',
  apresentacoes: [
    {
      id: 'cp2_5',
      forma: 'cp',
      nome: 'Comprimido revestido 2,5 mg',
      comercial: 'Naramig / Genérico',
      conc: '2,5mg',
      rotulo: 'Naratriptano 2,5mg',
      mg: 2.5,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar 1 comprimido inteiro com água logo ao início da crise de enxaqueca (não tomar na fase de aura prévia; tomar assim que começar a dor de cabeça). Se a dor persistir ou retornar, pode tomar um segundo comprimido após pelo menos 4 horas. NUNCA tomar mais de 2 comprimidos por dia.',
      obs: 'Possui início de ação mais suave e meia-vida mais longa (cerca de 6 horas) comparado a outros triptanos, com menor taxa de recorrência da cefaleia.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 18 }, { pesoMin: 45 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 2.5,
      max: 2.5,
      padrao: 2.5,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      fonte: 'HSL / PSZERADO',
      trecho: 'Adulto — VO: dose inicial de 2,5 mg em dose única logo aos primeiros sinais da crise. Se os sintomas retornarem após melhora inicial, uma segunda dose de 2,5 mg pode ser administrada após intervalo de 4 horas. Máximo de 5 mg em 24 horas.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 5,
      fonte: 'HSL / BULA',
      trecho: 'Dose máxima diária: 5 mg/dia (2 comprimidos de 2,5 mg em 24 horas).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com histórico de doença arterial coronariana (infarto agudo do miocárdio prévio, angina pectoris, isquemia miocárdica silenciosa ou vasoespástica / angina de Prinzmetal).',
      fonte: 'HSL / PSZERADO',
      trecho: 'Contraindicado em cardiopatia isquêmica e vasoespasmo coronário.'
    },
    {
      msg: 'Contraindicado em hipertensão arterial moderada ou grave e em hipertensão leve não controlada (efeito vasoconstritor mediado por receptores 5-HT1).',
      fonte: 'HSL',
      trecho: 'Contraindicado na presença de hipertensão arterial não controlada.'
    },
    {
      msg: 'Contraindicado em histórico de acidente vascular cerebral (AVC isquêmico ou hemorrágico), ataque isquêmico transitório (AIT) ou doença vascular periférica grave.',
      fonte: 'HSL / BULA',
      trecho: 'Contraindicado em doença cerebrovascular ou vascular periférica.'
    },
    {
      msg: 'Contraindicado o uso concomitante com derivados da ergotamina, di-hidroergotamina ou outros triptanos dentro de um intervalo de 24 horas (risco de vasoespasmo aditivo).',
      fonte: 'HSL',
      trecho: 'Aguardar no mínimo 24 horas entre o uso de ergotamínicos e triptanos.'
    },
    {
      msg: 'Contraindicado em insuficiência renal terminal (ClCr < 15 mL/min) e em insuficiência hepática grave.',
      fonte: 'HSL',
      trecho: 'Contraindicado em insuficiência renal grave ou insuficiência hepática grave.'
    }
  ],
  notas: {
    indicacao: 'Tratamento agudo das crises de enxaqueca (com ou sem aura) em adultos. Não é indicado para a prevenção profilática da enxaqueca nem para cefaleias tensionais ou atípicas.',
    administracao: 'Via oral: Engolir o comprimido inteiro com líquido assim que se iniciar a fase de dor da enxaqueca. Não deve ser administrado preventivamente durante a fase de aura antes da dor começar.',
    cuidados: 'O paciente pode sentir sensações transitórias de aperto, formigamento ou calor no tórax, garganta ou pescoço. Se houver dor torácica intensa ou persistente que sugira isquemia miocárdica, procurar atendimento de emergência imediatamente.',
    ajuste: 'Insuficiência renal leve a moderada (ClCr 15-39 mL/min): Dose máxima diária reduzida para 2,5 mg em 24 horas. ClCr < 15 mL/min: contraindicado. Insuficiência hepática moderada: Dose máxima de 2,5 mg/dia; grave: contraindicado.',
    dosePratica: 'Adulto: 2,5 mg (1 comprimido) VO logo no início da crise. Se necessário, repetir 1 cp após 4 horas (máx. 2 cp/dia).'
  }
};

export default naratriptano;
