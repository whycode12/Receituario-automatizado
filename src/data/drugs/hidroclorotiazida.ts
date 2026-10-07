/**
 * MEDICAMENTO: Hidroclorotiazida
 * CLASSE: Diurético Tiazídico / Anti-hipertensivo
 * FONTES:
 *   - HSL: Guia Farmacêutico Hospital Sírio-Libanês (Hidroclorotiazida 25mg)
 *   - SBC: Diretrizes Brasileiras de Hipertensão Arterial
 *   - Ministério da Saúde / RENAME / Farmácia Popular: Medicamento 100% gratuito de 1ª linha
 *   - Bulário ANVISA: Clorana / Genérico
 */

import { Farmaco } from '../../types';

export const hidroclorotiazida: Farmaco = {
  id: 'hidroclorotiazida',
  nome: 'Hidroclorotiazida',
  categoria: 'Cardiovascular e Anti-hipertensivos',
  busca: 'hidroclorotiazida hctz clorana diuretico pressao pressao alta hipertensao arterial diuretico tiazidico edema inchaco pernas',
  classe: 'Diurético Tiazídico Inibidor do Co-transportador Na+/Cl- do Túbulo Contorcido Distal',
  dosePratica: '1. Hipertensão Arterial Sistêmica (SBC / HSL): 25 mg VO 1 vez ao dia pela manhã (em idosos, terapia combinada ou suscetíveis a hipocalemia: iniciar com 12,5 mg a 25 mg/dia; dose máxima habitual: 50 mg/dia). 2. Estados Edematosos Leves (Insuficiência Cardíaca Leve / Síndrome Nefrótica): 25 a 50 mg/dia pela manhã (até 100 mg/dia em edemas refratários). Tomar sempre pela manhã para evitar noctúria.',
  fontes: { HSL: '14/02/2017', MS: '2023', BULA: '04/10/2026' },
  snPadrao: 'tomada matinal contínua para controle da pressão arterial ou edema',
  acessoFonte: 'RENAME / Programa Farmácia Popular do Brasil: Comprimidos de 25 mg distribuídos gratuitamente em todas as farmácias credenciadas e Unidades Básicas de Saúde.',
  apresentacoes: [
    {
      id: 'cp_25mg',
      forma: 'cp',
      nome: 'Comprimido 25 mg',
      comercial: 'Clorana / Genérico',
      conc: '25 mg',
      rotulo: 'Hidroclorotiazida 25 mg comprimido',
      mg: 25,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 a 2 caixas (30 comprimidos)',
      acesso: { rename: true, fp: true },
      instrucao: 'Como tomar o diurético para pressão em casa:\n1. TOME SEMPRE PELA MANHÃ: Tome o comprimido pela manhã ao acordar (com água e café da manhã). NUNCA tome este remédio à noite ou ao deitar, pois ele aumenta a vontade de urinar e você terá que acordar várias vezes de madrugada para ir ao banheiro.\n2. EFEITO DIURÉTICO: É absolutamente normal urinar em maior volume nas primeiras 4 a 6 horas após tomar o remédio. É assim que o organismo joga fora o excesso de líquido e sal acumulado.\n3. EXAMES DE SANGUE PERIÓDICOS: Como o remédio elimina potássio e sódio na urina, faça os exames de sangue de rotina pedidos pelo médico para checar seus eletrólitos e função renal.\n4. CUIDADO COM ÁCIDO ÚRICO E GOTA: Avise o médico se você já teve crises de gota ou dores agudas no dedão do pé por ácido úrico alto.\n5. HÁBITOS SAUDÁVEIS: Reduza o sal na alimentação, evite alimentos ultraprocessados e beba água ao longo do dia.',
      obs: 'RENAME / Farmácia Popular. Diurético padrão para tratamento da HAS em monoterapia ou associado a IECA/BRA ou bloqueador de canal de cálcio.'
    }
  ],
  regras: [
    // 1. Adultos - Hipertensão e Edema (12,5 mg a 50 mg/dia)
    {
      pub: 'adulto',
      vias: ['VO'],
      apres: ['cp_25mg'],
      tipo: 'mg',
      min: 12.5,
      max: 50,
      padrao: 25,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 180,
      fonte: 'HSL / SBC / BULA',
      trecho: 'HSL: Hipertensão: 25 mg a 50 mg/dia em dose única matinal. Edema: 25 mg a 100 mg/dia.'
    },
    // 2. Pediatria (HSL / SBP)
    {
      pub: 'ped',
      se: { idadeMinMeses: 6 },
      vias: ['VO'],
      apres: ['cp_25mg'],
      tipo: 'mg',
      min: 12.5,
      max: 37.5,
      padrao: 12.5,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 180,
      fonte: 'HSL',
      trecho: 'HSL Pediatria: 1 a 2 mg/kg/dia (até 2 anos: 12,5 a 25 mg divididos em 1 a 2 tomadas).'
    }
  ],
  contra: [
    {
      vias: ['VO'],
      msg: 'Contraindicado em pacientes com anúria ou insuficiência renal grave com Clcr < 30 mL/min (os diuréticos tiazídicos perdem completamente a eficácia tubular nefrológica nesses níveis de filtração glomerular; caso seja necessária diurese, utilizar diuréticos de alça como a furosemida).',
      fonte: 'HSL / SBC / BULA',
      trecho: 'Contraindicado em anúria ou insuficiência renal grave (Clcr < 30 mL/min).',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'Contraindicado em hipocalemia refratária grave ou hiponatremia grave antes da correção hidroeletrolítica adequada.',
      fonte: 'BULA / HSL',
      trecho: 'Distúrbios eletrolíticos graves não corrigidos.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada à hidroclorotiazida ou a outros medicamentos derivados das sulfonamidas.',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade a tiazídicos ou sulfonamidas.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'ALERTA DE GOTA E DISTÚRBIOS METABÓLICOS: A hidroclorotiazida reduz a excreção tubular renal de ácido úrico, podendo precipitar crises agudas de artrite gotosa em indivíduos predispostos. Pode induzir hipocalemia, hipomagnesemia e leve resistência insulínica.',
      fonte: 'HSL / SBC',
      trecho: 'Risco de hiperuricemia, crises de gota e hipocalemia.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Tratamento de primeira escolha da Hipertensão Arterial Sistêmica (HAS) em monoterapia ou terapia combinada; coadjuvante no manejo de edemas associados à insuficiência cardíaca congestiva leve, cirrose hepática compensada e síndrome nefrótica; prevenção de nefrolitíase recorrente por hipercalciúria idiopática (reduz excreção urinária de cálcio).',
    administracao: 'VO: Administrar pela manhã, preferencialmente com alimentos (alimentos aumentam ligeiramente sua biodisponibilidade).',
    cuidados: 'PRESERVAÇÃO DO POTÁSSIO: A associação sinérgica com IECA (enalapril) ou BRA (losartana) minimiza a hipocalemia induzida pelo tiazídico, pois os bloqueadores do SRAA poupam potássio.',
    ajuste: 'Insuficiência renal: Ineficaz e não recomendada se Clcr < 30 mL/min (HSL). Insuficiência hepática: Usar com cautela em cirróticos pelo risco de encefalopatia por alcalose hipocalêmica.'
  }
};

export default hidroclorotiazida;
