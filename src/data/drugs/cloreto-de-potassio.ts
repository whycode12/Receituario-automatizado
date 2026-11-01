import { Farmaco } from '../../types';

export const cloretoDePotassio: Farmaco = {
  id: 'cloreto-de-potassio',
  nome: 'Cloreto de Potássio (KCl)',
  categoria: 'Eletrólitos e Emergências',
  busca: 'cloreto de potassio kcl hipocalemia reposicao potassio xarope 6% slow-k capsula ampola 19.1%',
  classe: 'Eletrólito Essencial (Reposição Hidroeletrolítica)',
  dosePratica: 'Hipocalemia grave (< 3,0 mEq/L ou alterações de ECG): Periférico: 16 mL de KCl 19,1% (40 mEq) em 500 mL de SF 0,9% infundidos em 4 horas (máx 10 mEq/h e concentração máx 40 mEq/L em veia periférica). Central: 10 mL (25 mEq) em 250 mL de SF 0,9% em 2 horas (máx 20 mEq/h). Hipocalemia leve a moderada (> 3,0 mEq/L): VO: Xarope 6% (15 mL = 12 mEq) ou Cápsula 600 mg (8 mEq) 1 a 2 vezes ao dia com as refeições.',
  fontes: { PSZERADO: '2025', HSL: '2024', EINA: '2024', BULA: '2024' },
  snPadrao: 'hipocalemia e reposição hidroeletrolítica',
  acessoFonte: 'RENAME 2024: Ampola 19,1% (10 mL) padronizada no SUS. Xarope 6% e cápsulas de liberação lenta disponíveis na rede ambulatorial e farmácias.',
  apresentacoes: [
    {
      id: 'amp19_1_10ml',
      forma: 'amp',
      nome: 'Ampola 19,1% (10 mL = 25,6 mEq de K+)',
      comercial: 'KCl 19,1% injetável',
      conc: '19,1% (191 mg/mL = 2,56 mEq/mL)',
      rotulo: 'Cloreto de Potássio 19,1% ampola 10 mL',
      mg: 1910,
      volml: 10,
      vias: ['EV'],
      disp: '1 ampola (10 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'ALERTA MÁXIMO: NUNCA ADMINISTRAR DIRETO NA VEIA (BOLUS). A ADMINISTRAÇÃO RÁPIDA NÃO DILUÍDA É FATAL (PARADA CARDÍACA EM ASSISTOLIA). Diluir sempre em SF 0,9% ou SG 5% com bomba de infusão contínua.',
      obs: '1 mL de KCl 19,1% contém 2,56 mEq de K+ e 2,56 mEq de Cl-. 10 mL = 25,6 mEq.'
    },
    {
      id: 'xarope6',
      forma: 'sol',
      nome: 'Xarope 6% (60 mg/mL = 12 mEq / 15 mL - frasco 150 mL)',
      comercial: 'KCl 6% xarope',
      conc: '6% (60 mg/mL)',
      rotulo: 'Cloreto de potássio 6% xarope',
      mgml: 60,
      frascoMl: 150,
      vias: ['VO'],
      disp: '1 frasco (150 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar 15 mL (1 colher de sopa = 12 mEq) por via oral de 1 a 2 vezes ao dia, diluído em meio copo de água ou suco, durante ou após as refeições para evitar irritação gástrica.',
      obs: 'Reposição oral preferencial em pacientes com hipocalemia leve sem alterações no ECG.'
    },
    {
      id: 'cap600',
      forma: 'cap',
      nome: 'Cápsula de liberação lenta 600 mg (8 mEq de K+)',
      comercial: 'Slow-K®, Genérico',
      conc: '600 mg (8 mEq)',
      rotulo: 'Cloreto de potássio 600 mg cápsula / drágea',
      mg: 600,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 20 ou 30 cápsulas',
      acesso: { rename: false, fp: false },
      instrucao: 'Engolir a cápsula inteira com um copo cheio de água durante as refeições. Não mastigar nem abrir.',
      obs: '1 cápsula de 600 mg fornece 8 mEq de potássio elementar.'
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 3,
    volOpcoes: [250, 500, 1000],
    tempo: {
      adulto: { min: 120, padrao: 240, max: 480, txt: '2 a 4 horas em bomba de infusão' }
    },
    fonteTxt: 'Manual de Diluição Einstein / Guia UPA 2026: Diluir 16 mL de KCl 19,1% em 500 mL de SF 0,9% em 4h.'
  },
  regras: [
    {
      pub: 'adulto',
      vias: ['VO'],
      tipo: 'mg',
      min: 600,
      max: 2400,
      padrao: 1200,
      dosesDia: [1, 2],
      intervaloFixo: 12,
      fonte: 'PSZERADO',
      trecho: 'Via oral: 15 a 30 mL do xarope 6% (12 a 24 mEq) de 1 a 2x/dia após refeições.'
    },
    {
      pub: 'adulto',
      vias: ['EV'],
      tipo: 'mg',
      min: 1000,
      max: 3820,
      padrao: 1910,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: 'Via EV: 10 a 20 mL de KCl 19,1% diluídos em 500 mL de SF 0,9% infundidos em 4 horas (máx 10 mEq/h periférico).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 7640,
      fonte: 'HSL',
      trecho: 'Dose máxima diária de reposição EV: 80 a 100 mEq/dia salvo em UTI sob monitorização contínua.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em hipercalemia, insuficiência renal anúrica ou oligúrica grave sem diálise e bloqueios atrioventriculares avançados.',
      fonte: 'HSL',
      trecho: 'Hipercalemia, anúria e bloqueio AV.'
    }
  ],
  notas: {
    indicacao: 'Tratamento e prevenção da hipocalemia de etiologias diversas (diuréticos, vômitos, diarreia, cetoacidose diabética).',
    administracao: 'Via EV: OBRIGATORIAMENTE DILUÍDO e infundido lentamente em bomba. Via oral: ingerir junto com refeições.',
    cuidados: 'MEDICAMENTO DE ALTA VIGILÂNCIA. Risco de flebite em veia periférica e parada cardíaca em infusão rápida. Monitorar ECG e diurese.',
    ajuste: 'Evitar ou reduzir drasticamente doses na disfunção renal severa.'
  }
};

export default cloretoDePotassio;
