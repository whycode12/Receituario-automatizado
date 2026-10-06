/**
 * MEDICAMENTO: Hidroxiquinolina + Trolamina (Gotas Otológicas / Cerumin)
 * CLASSE: Ceruminolítico e Emoliente Otológico
 * FONTES:
 *   - HSL: Guia Farmacêutico Hospital Sírio-Libanês (Hidroxiquinolina + trolamina - Cerumin gotas 8mL)
 *   - ABORL-CCF (Associação Brasileira de Otorrinolaringologia): Manejo da rolha de cerúmen e preparo para lavagem de ouvido
 *   - Bulário ANVISA: Cerumin / Genérico
 */

import { Farmaco } from '../../types';

export const cerumin: Farmaco = {
  id: 'cerumin',
  nome: 'Hidroxiquinolina + Trolamina (Cerumin Gotas Otológicas)',
  categoria: 'Otorrinolaringologia e Gotas Otológicas',
  busca: 'cerumin hidroxiquinolina trolamina rolha de cerume cera no ouvido amolecer cera lavagem de ouvido tampao de cera ouvido entupido',
  classe: 'Ceruminolítico e Emoliente Otológico',
  dosePratica: 'Amolecimento e Remoção da Rolha de Cerúmen (Preparo Domiciliar para Lavagem ou Aspiração de Ouvido na UBS/Consultório): Pingar 4 a 5 gotas no canal do ouvido afetado 3 vezes ao dia (a cada 8 horas) com o paciente deitado por 5 minutos, durante 3 a 5 dias consecutivos prévios ao procedimento. NUNCA introduzir hastes flexíveis (cotonetes) no ouvido.',
  fontes: { HSL: '14/02/2017', BULA: '04/10/2026' },
  snPadrao: 'aplicação no canal auditivo para amolecer a rolha de cerúmen',
  acessoFonte: 'Padronizado no Guia Farmacêutico HSL e amplamente dispensado e comercializado no Brasil (Cerumin e genéricos frasco conta-gotas 8 mL).',
  apresentacoes: [
    {
      id: 'gotas_8ml',
      forma: 'gotas',
      nome: 'Gotas otológicas (Hidroxiquinolina 0,4 mg/mL + Trolamina 140 mg/mL - frasco 8 mL)',
      comercial: 'Cerumin / Genérico',
      conc: 'Hidroxiquinolina 0,4 mg/mL + Trolamina 140 mg/mL',
      rotulo: 'Hidroxiquinolina + Trolamina (Cerumin) gotas otológicas (frasco 8 mL)',
      mg: 1,
      gotasml: 20,
      volml: 8,
      frascoMl: 8,
      vias: ['OTOLOGICA'],
      disp: '1 frasco conta-gotas (8 mL)',
      acesso: { rename: false, fp: false },
      instrucao: 'Como usar as gotas em casa para amolecer a cera antes da lavagem:\n1. AQUEÇA O FRASCO: Segure o frasco fechado entre as mãos por 1 a 2 minutos para aquecê-lo até a temperatura do corpo (pingar líquido frio no ouvido pode causar tontura e vertigem).\n2. DEITE-SE: Deite-se de lado em uma cama, deixando o ouvido com cera virado para cima.\n3. APLICAÇÃO: Pingue 4 a 5 gotas diretamente dentro do canal do ouvido. Não encoste a ponta do frasco na orelha.\n4. AGUARDE 5 MINUTOS: Fique deitado na mesma posição por pelo menos 5 minutos para que as gotas consigam amolecer e dissolver a rolha de cera endurecida.\n5. AO SE LEVANTAR: Se escorrer um pouco de líquido, limpe apenas a parte de fora da orelha com uma toalha ou gaze macia. Se desejar, coloque apenas uma mecha frouxa de algodão na entrada da orelha (sem empurrar para dentro).\n6. NUNCA USE COTONETES: É terminantemente proibido usar hastes flexíveis (cotonetes), grampos ou outros objetos no ouvido (eles empurram a cera ainda mais para o fundo, prensam a rolha contra o tímpano e podem furá-lo).\n7. DURAÇÃO: Use 3 vezes ao dia por 3 a 5 dias e compareça à Unidade de Saúde na data agendada para realizar a lavagem do ouvido com a equipe de saúde.',
      obs: 'A trolamina emulsifica as gorduras e proteínas da cera, enquanto a hidroxiquinolina atua como conservante antisséptico suave prevenindo proliferação fúngica/bacteriana.'
    }
  ],
  regras: [
    // 1. Adultos
    {
      pub: 'adulto',
      vias: ['OTOLOGICA'],
      apres: ['gotas_8ml'],
      tipo: 'mg',
      min: 4,
      max: 5,
      padrao: 5,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 7,
      fonte: 'HSL / BULA / ABORL-CCF',
      trecho: 'HSL: Pingar 5 gotas da solução no ouvido 3 vezes/dia. A aplicação deve ser feita com o paciente deitado por 5 minutos para facilitar a penetração.'
    },
    // 2. Pediatria
    {
      pub: 'ped',
      vias: ['OTOLOGICA'],
      apres: ['gotas_8ml'],
      tipo: 'mg',
      min: 3,
      max: 4,
      padrao: 3,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 5,
      fonte: 'SBP / ABORL-CCF',
      trecho: 'Crianças: Pingar 3 a 4 gotas no ouvido com cerúmen obstrutivo 3 vezes ao dia por 3 a 5 dias prévios à remoção/lavagem médica.'
    }
  ],
  contra: [
    {
      vias: ['OTOLOGICA'],
      msg: 'CONTRAINDICAÇÃO ABSOLUTA: Suspeita ou histórico confirmado de perfuração da membrana timpânica, presença de tubos de ventilação ou saída de secreção com pus/sangue pelo ouvido (a entrada de ceruminolítico na orelha média causa dor severa, vertigem e lesão do epitélio timpânico).',
      fonte: 'ABORL-CCF / BULA',
      trecho: 'Contraindicado em perfuração do tímpano ou otite média.',
      strong: true
    },
    {
      vias: ['OTOLOGICA'],
      msg: 'Contraindicado na vigência de otite externa bacteriana ativa aguda (dor aguda forte, edema e calor no canal auditivo); primeiro deve-se tratar a infecção e inflamação antes de intervir no cerúmen.',
      fonte: 'ABORL-CCF',
      trecho: 'Não utilizar em otite externa inflamatória aguda ativa.',
      strong: true
    },
    {
      vias: ['OTOLOGICA'],
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada à trolamina, hidroxiquinolina ou excipientes da fórmula.',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade conhecida aos componentes.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Emoliente e ceruminolítico para amolecimento, fragmentação e dissolução de rolhas de cerúmen impactadas no meato acústico externo de crianças e adultos, facilitando sua remoção mecânica por lavagem com água morna ou aspiração sob visão direta.',
    administracao: 'OTOLOGICA: Aquecer o frasco friccionando entre as mãos. Deitar em decúbito lateral e instilar 4 a 5 gotas. Permanecer deitado por 5 minutos.',
    cuidados: 'PROIBIÇÃO DE HASTES FLEXÍVEIS: Recomendar enfaticamente que cotonetes nunca sejam introduzidos no conduto; eles servem apenas para higiene da concha auricular externa.',
    ajuste: 'Insuficiência renal e hepática: Ação puramente físico-química tópica de superfície sem absorção sistêmica mensurável; dispensa qualquer ajuste posológico.'
  }
};

export default cerumin;
