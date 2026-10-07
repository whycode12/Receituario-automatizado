/**
 * MEDICAMENTO: Maleato de Enalapril
 * CLASSE: Anti-hipertensivo / Inibidor da Enzima Conversora de Angiotensina (IECA)
 * FONTES:
 *   - HSL: Guia Farmacêutico Hospital Sírio-Libanês (Enalapril - Renitec 5mg e 20mg)
 *   - SBC: Diretrizes Brasileiras de Hipertensão Arterial e Insuficiência Cardíaca
 *   - Ministério da Saúde / RENAME / Farmácia Popular: Medicamento 100% gratuito de 1ª linha
 *   - Bulário ANVISA: Renitec / Genérico
 */

import { Farmaco } from '../../types';

export const enalapril: Farmaco = {
  id: 'enalapril',
  nome: 'Maleato de Enalapril',
  categoria: 'Cardiovascular e Anti-hipertensivos',
  busca: 'enalapril maleato de enalapril renitec ieca pressao alta hipertensao arterial insuficiencia cardiaca icfer pos-iam tosse seca angioedema',
  classe: 'Anti-hipertensivo, Inibidor da Enzima Conversora de Angiotensina (IECA)',
  dosePratica: '1. Hipertensão Arterial Sistêmica (SBC / HSL): Iniciar com 10 a 20 mg VO 1 vez ao dia (ou 5 mg se idoso/diurético associado). Titular até dose de manutenção de 20 a 40 mg/dia (em 1 tomada diária ou 12/12h). Dose máxima: 40 mg/dia. 2. Insuficiência Cardíaca com Fração de Ejeção Reduzida e Pós-IAM: Iniciar com 2,5 mg a 5 mg/dia e titular gradualmente até a dose-alvo de 10 a 20 mg de 12/12h (20 a 40 mg/dia). CONTRAINDICADO ABSOLUTAMENTE NA GESTAÇÃO.',
  fontes: { HSL: '14/02/2017', MS: '2023', BULA: '04/10/2026' },
  snPadrao: 'tomada matinal contínua para controle da pressão arterial e insuficiência cardíaca',
  acessoFonte: 'RENAME / Programa Farmácia Popular do Brasil: Comprimidos de 5 mg, 10 mg e 20 mg distribuídos com 100% de gratuidade nas farmácias credenciadas e UBSs do SUS.',
  apresentacoes: [
    {
      id: 'cp_20mg',
      forma: 'cp',
      nome: 'Comprimido 20 mg',
      comercial: 'Renitec / Genérico',
      conc: '20 mg',
      rotulo: 'Maleato de enalapril 20 mg comprimido',
      mg: 20,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 a 2 caixas (30 comprimidos)',
      acesso: { rename: true, fp: true },
      instrucao: 'Como tomar o medicamento para pressão e coração:\n1. HORÁRIO E TOMADA: Tomar o comprimido com um copo de água, todos os dias no mesmo horário, com ou sem alimentos.\n2. REMÉDIO DE USO CONTÍNUO: Nunca pare de tomar o remédio por conta própria mesmo que a pressão esteja boa, pois ele protege o coração e os rins.\n3. ATENÇÃO - TOSSE SECA: O enalapril pode provocar uma tosse seca e persistente ("pigarro incômodo na garganta"). Se isso acontecer com você, NÃO use xaropes para tosse; avise seu médico na próxima consulta (ele poderá substituir este medicamento por outro da classe dos BRAs, como a losartana, que não causa tosse).\n4. INCHAÇO RARO NO ROSTO OU LÁBIOS (ANGIOEDEMA): Se notar inchaço repentino nos lábios, língua ou garganta com falta de ar, suspenda o medicamento imediatamente e procure o pronto-socorro.\n5. CUIDADO COM TONTURAS: Nos primeiros dias, evite levantar-se depressa da cama ou cadeira para prevenir quedas por tontura.\n6. GESTAÇÃO: Este remédio é TOTALMENTE PROIBIDO na gravidez. Mulheres em idade fértil que engravidarem devem avisar o médico imediatamente.',
      obs: 'RENAME / Farmácia Popular. Apresentação mais prescrita na Atenção Básica para manutenção anti-hipertensiva e cardioprotetora.'
    },
    {
      id: 'cp_10mg',
      forma: 'cp',
      nome: 'Comprimido 10 mg',
      comercial: 'Renitec / Genérico',
      conc: '10 mg',
      rotulo: 'Maleato de enalapril 10 mg comprimido',
      mg: 10,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 a 2 caixas (30 comprimidos)',
      acesso: { rename: true, fp: true },
      instrucao: 'Tomar 1 comprimido 1 a 2 vezes ao dia conforme prescrito pelo médico.',
      obs: 'RENAME / Farmácia Popular. Dose inicial habitual em hipertensos jovens ou intermediária de titulação.'
    },
    {
      id: 'cp_5mg',
      forma: 'cp',
      nome: 'Comprimido 5 mg',
      comercial: 'Renitec / Genérico',
      conc: '5 mg',
      rotulo: 'Maleato de enalapril 5 mg comprimido',
      mg: 5,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 caixa (30 comprimidos)',
      acesso: { rename: true, fp: true },
      instrucao: 'Tomar 1 comprimido pela manhã com água.',
      obs: 'Dose baixa recomendada para início de terapia em idosos, nefropatas crônicos ou insuficiência cardíaca.'
    }
  ],
  regras: [
    // 1. Adultos - Hipertensão e Insuficiência Cardíaca (5 a 40 mg/dia)
    {
      pub: 'adulto',
      vias: ['VO'],
      apres: ['cp_20mg', 'cp_10mg', 'cp_5mg'],
      tipo: 'mg',
      min: 5,
      max: 40,
      padrao: 20,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 180,
      fonte: 'HSL / SBC / BULA',
      trecho: 'HSL: Hipertensão essencial: 10 a 20 mg 1 vez ao dia (iniciar com 5-10 mg; manutenção até 40 mg/dia em 1 ou 2 tomadas). Insuficiência cardíaca: iniciar com 2,5 mg/dia e titular até 20 mg/dia.'
    },
    // 2. Pediatria (Lactentes e crianças - HSL)
    {
      pub: 'ped',
      se: { idadeMinMeses: 1 },
      vias: ['VO'],
      apres: ['cp_5mg', 'cp_10mg'],
      tipo: 'mg',
      min: 2.5,
      max: 20,
      padrao: 5,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 180,
      fonte: 'HSL',
      trecho: 'HSL Pediatria: Hipertensão: 0,08 mg/kg/dia a 0,5 mg/kg/dia (iniciar com até 5 mg).'
    }
  ],
  contra: [
    {
      vias: ['VO'],
      msg: 'CONTRAINDICAÇÃO ABSOLUTA NA GESTAÇÃO: O uso de inibidores da ECA (IECA) no 2º e 3º trimestres causa toxicidade fetal grave, oligoidrâmnio, hipotensão neonatal, anúria, hipoplasia pulmonar e malformações craniofaciais. Suspender imediatamente se confirmada gravidez.',
      fonte: 'SBC / BULA',
      trecho: 'Contraindicado na gravidez.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'CONTRAINDICAÇÃO ABSOLUTA: Histórico prévio de angioedema associado ao uso de qualquer inibidor da ECA ou angioedema hereditário/idiopático (risco de edema de glote fatal mediado por bradicinina).',
      fonte: 'SBC / BULA',
      trecho: 'História prévia de angioedema relacionado a IECA.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'Contraindicado em pacientes com estenose bilateral de artéria renal ou estenose em rim único funcionante (risco iminente de anúria e perda aguda da filtração glomerular).',
      fonte: 'SBC / HSL',
      trecho: 'Estenose bilateral de artéria renal.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'ALERTA DE TOSSE E HIPERCALEMIA: A inibição da degradação da bradicinina causa tosse seca crônica em 5% a 20% dos pacientes (efeito de classe dos IECAs; orientar troca por BRA caso incômodo). Monitorar potássio sérico (risco de hipercalemia em associação com espironolactona).',
      fonte: 'HSL / SBC',
      trecho: 'Tosse seca secundária ao acúmulo de bradicinina; risco de hipercalemia.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Tratamento de primeira linha da Hipertensão Arterial Sistêmica; tratamento de todos os graus de insuficiência cardíaca com fração de ejeção reduzida (ICFER) com melhora de sobrevida e redução de hospitalizações; prevenção de eventos isquêmicos e dilatação ventricular pós-infarto agudo do miocárdio (IAM); nefroproteção em nefropatia diabética incipiente ou manifesta.',
    administracao: 'VO: Tomar 1 a 2 vezes ao dia com água, independentemente das refeições.',
    cuidados: 'EFEITO DA PRIMEIRA DOSE: Em pacientes hipovolêmicos ou em uso de altas doses de diuréticos de alça (furosemida), a primeira dose de IECA pode causar hipotensão sintomática acentuada. Iniciar com doses baixas (2,5 a 5 mg) ao deitar.',
    ajuste: 'Insuficiência renal (HSL): Clcr 30-80 mL/min: dose inicial 5 a 10 mg/dia; Clcr 10-30 mL/min: dose inicial 2,5 a 5 mg/dia; Clcr < 10 mL/min: 2,5 mg nos dias de hemodiálise (dialisável).'
  }
};

export default enalapril;
