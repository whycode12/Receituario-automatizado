/**
 * MEDICAMENTO: Besilato de Anlodipino
 * CLASSE: Bloqueador dos Canais de Cálcio (Di-hidropiridínico) / Anti-hipertensivo / Antianginoso
 * FONTES:
 *   - HSL: Guia Farmacêutico Hospital Sírio-Libanês (Anlodipino - Roxflan 5mg)
 *   - SBC: Diretrizes Brasileiras de Hipertensão Arterial
 *   - Ministério da Saúde / RENAME / Farmácia Popular: Medicamento 100% gratuito de 1ª linha
 *   - Bulário ANVISA: Norvasc / Genérico
 */

import { Farmaco } from '../../types';

export const anlodipino: Farmaco = {
  id: 'anlodipino',
  nome: 'Besilato de Anlodipino',
  categoria: 'Cardiovascular e Anti-hipertensivos',
  busca: 'anlodipino besilato de anlodipino norvasc roxflan cordarex pressat amlodipina amlodipino bloqueador canal de calcio pressao pressao alta hipertensao angina dor no peito',
  classe: 'Bloqueador dos Canais de Cálcio Di-hidropiridínico com Ação Vasodilatadora Periférica Prolongada',
  dosePratica: '1. Hipertensão Arterial Sistêmica e Angina Estável (SBC / HSL): 5 mg VO 1 vez ao dia pela manhã. Se a resposta for insuficiente após 2 a 4 semanas, pode ser titulado para 10 mg VO 1 vez ao dia (dose máxima). 2. Idosos, Hepatopatas Leves ou Pacientes Frágeis: Iniciar com 2,5 mg a 5 mg VO 1 vez ao dia.',
  fontes: { HSL: '14/02/2017', MS: '2023', BULA: '04/10/2026' },
  snPadrao: 'tomada matinal contínua para controle da pressão arterial ou angina',
  acessoFonte: 'RENAME / Programa Farmácia Popular do Brasil: Comprimidos de 5 mg distribuídos gratuitamente em todas as farmácias credenciadas e Unidades Básicas de Saúde.',
  apresentacoes: [
    {
      id: 'cp_5mg',
      forma: 'cp',
      nome: 'Comprimido 5 mg',
      comercial: 'Norvasc / Roxflan / Genérico',
      conc: '5 mg',
      rotulo: 'Besilato de Anlodipino 5 mg comprimido',
      mg: 5,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 a 2 caixas (30 comprimidos)',
      acesso: { rename: true, fp: true },
      instrucao: 'Como tomar o anlodipino para pressão e circulação:\n1. TOME 1 VEZ AO DIA: Tome o comprimido sempre no mesmo horário todos os dias (de preferência pela manhã), com um copo cheio de água, com ou sem alimentos.\n2. EFEITO COMUM - INCHAÇO NOS TORNOZELOS: O anlodipino relaxa e dilata os pequenos vasos sanguíneos. Por isso, é comum e esperado um inchaço leve nos pés e tornozelos ao final do dia. Fique tranquilo(a): esse inchaço NÃO significa problema no coração ou nos rins. Para aliviar, repouse com as pernas um pouco elevadas ao final da tarde. Se o inchaço for grande ou causar incômodo, avise o médico na próxima consulta para avaliar o ajuste da dose.\n3. NÃO INTERROMPA: Nunca pare de tomar o remédio por conta própria quando a pressão estiver boa. A pressão está controlada justamente porque você está tomando o remédio diariamente.\n4. COMBINAÇÕES: O anlodipino pode ser prescrito junto com outros remédios de pressão (como enalapril, losartana ou hidroclorotiazida) para proteger melhor seu coração e cérebro.',
      obs: 'RENAME / Farmácia Popular. Anti-hipertensivo de 1ª linha. Excelente proteção cardiovascular e controle da pressão sustentado por 24 horas.'
    },
    {
      id: 'cp_10mg',
      forma: 'cp',
      nome: 'Comprimido 10 mg',
      comercial: 'Norvasc / Roxflan / Genérico',
      conc: '10 mg',
      rotulo: 'Besilato de Anlodipino 10 mg comprimido',
      mg: 10,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 a 2 caixas (30 comprimidos)',
      acesso: { rename: true, fp: false },
      instrucao: 'Como tomar o anlodipino para pressão e circulação:\n1. TOME 1 VEZ AO DIA: Tome o comprimido sempre no mesmo horário todos os dias (de preferência pela manhã), com um copo de água.\n2. EFEITO COMUM - INCHAÇO NOS TORNOZELOS: Por relaxar os vasos sanguíneos, a dose de 10 mg pode favorecer o inchaço nos tornozelos/pés no fim da tarde. Fique tranquilo(a): não é problema renal ou cardíaco. Elevar as pernas ao descansar ajuda a aliviar. Avise o médico se o inchaço for expressivo.\n3. NÃO INTERROMPA: Mantenha o tratamento contínuo mesmo com níveis ótimos de pressão aferida no posto de saúde.',
      obs: 'Dose máxima diária recomendada para controle pressórico ou angina refratária.'
    }
  ],
  regras: [
    // 1. Adultos - Hipertensão e Angina (5 mg a 10 mg/dia)
    {
      pub: 'adulto',
      vias: ['VO'],
      apres: ['cp_5mg', 'cp_10mg'],
      tipo: 'mg',
      min: 2.5,
      max: 10,
      padrao: 5,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 180,
      fonte: 'HSL / SBC / BULA',
      trecho: 'HSL: Adultos: Hipertensão e Angina: 5 mg, 1 vez/dia. Dose máxima: 10 mg/dia. Idosos/hepatopatas: iniciar com 2,5 mg a 5 mg/dia.'
    },
    // 2. Pediatria 6 a 17 anos (HSL / SBC)
    {
      pub: 'ped',
      se: { idadeMinMeses: 72 }, // ≥ 6 anos
      vias: ['VO'],
      apres: ['cp_5mg'],
      tipo: 'mg',
      min: 2.5,
      max: 5,
      padrao: 2.5,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 180,
      fonte: 'HSL',
      trecho: 'HSL: Pediatria (de 6 a 17 anos): Hipertensão: 2,5 a 5 mg, 1 vez/dia. Dose máxima: 5 mg/dia.'
    }
  ],
  contra: [
    {
      vias: ['VO'],
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada ao besilato de anlodipino ou a outras di-hidropiridinas.',
      fonte: 'BULA / HSL',
      trecho: 'Contraindicado em pacientes com alergia ao princípio ativo.',
      strong: false
    },
    {
      vias: ['VO'],
      msg: 'Contraindicado em hipotensão arterial grave, choque cardiogênico ou estenose aórtica grave hemodinamicamente significativa.',
      fonte: 'HSL / SBC',
      trecho: 'A vasodilatação intensa pode agravar a hipoperfusão coronariana e cerebral na presença de obstrução fixa de via de saída do VE.',
      strong: false
    },
    {
      vias: ['VO'],
      msg: 'Usar com cautela em pacientes com insuficiência cardíaca congestiva descompensada ou disfunção hepática grave.',
      fonte: 'HSL / SBC',
      trecho: 'Usar com cautela em insuficiência cardíaca congestiva descompensada.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Hipertensão Arterial Sistêmica em monoterapia ou associado a IECA/BRA e tiazídicos; angina crônica estável e angina vasoespástica (Prinzmetal).',
    administracao: 'VO: Tomar pela manhã com água, com ou sem alimentos. Possui meia-vida longa (35-50 horas), garantindo controle pressórico sustentado por 24 horas mesmo se houver pequeno atraso de tomada.',
    cuidados: 'EDEMA MALEOLAR: O edema de membros inferiores é causado por dilatação arteriolar pré-capilar preferencial (e não por sobrecarga de volume). A associação com IECA (enalapril) ou BRA (losartana) reduz expressivamente a incidência de edema por promover vasodilatação venular pós-capilar balanceada.',
    ajuste: 'Insuficiência renal: Não é necessário ajuste de dose (não é dialisável). Insuficiência hepática: Depuração diminuída; iniciar com dose mais baixa (2,5 mg/dia) e titular cuidadosamente.'
  }
};

export default anlodipino;
