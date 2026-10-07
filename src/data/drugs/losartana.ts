/**
 * MEDICAMENTO: Losartana Potássica
 * CLASSE: Anti-hipertensivo / Bloqueador do Receptor de Angiotensina II (BRA)
 * FONTES:
 *   - HSL: Guia Farmacêutico Hospital Sírio-Libanês (Losartana - Cozaar 50mg e Aradois 25mg)
 *   - SBC: Diretrizes Brasileiras de Hipertensão Arterial (2020/2024)
 *   - Ministério da Saúde / RENAME / Programa Farmácia Popular: Medicamento 100% gratuito de 1ª linha
 *   - Bulário ANVISA: Cozaar / Aradois / Genérico
 */

import { Farmaco } from '../../types';

export const losartana: Farmaco = {
  id: 'losartana',
  nome: 'Losartana Potássica',
  categoria: 'Cardiovascular e Anti-hipertensivos',
  busca: 'losartana losartana potassica cozaar aradois bra pressao alta hipertensao arterial insuficiencia cardiaca nefroprotecao diabetes proteinuria',
  classe: 'Anti-hipertensivo, Bloqueador Seletivo do Receptor AT1 da Angiotensina II (BRA)',
  dosePratica: '1. Hipertensão Arterial Sistêmica (SBC / HSL): Iniciar com 50 mg VO 1 vez ao dia pela manhã. Se controle pressórico insuficiente após 2 a 4 semanas, titular para 100 mg/dia (em tomada única diária ou 50 mg de 12/12h). 2. Nefroproteção no Diabético tipo 2 com Proteinúria: 50 a 100 mg VO 1x/dia. 3. Insuficiência Cardíaca com Fração de Ejeção Reduzida: Iniciar com 25 a 50 mg/dia e titular até 100 mg/dia. CONTRAINDICADO ABSOLUTAMENTE NA GESTAÇÃO.',
  fontes: { HSL: '14/02/2017', MS: '2023', BULA: '04/10/2026' },
  snPadrao: 'tomada matinal contínua para controle da pressão arterial',
  acessoFonte: 'RENAME / Programa Farmácia Popular do Brasil: Comprimidos de 50 mg disponibilizados com gratuidade total (100% subsidiado) nas farmácias credenciadas e UBSs do SUS.',
  apresentacoes: [
    {
      id: 'cp_50mg',
      forma: 'cp',
      nome: 'Comprimido revestido 50 mg',
      comercial: 'Cozaar / Aradois / Genérico',
      conc: '50 mg',
      rotulo: 'Losartana potássica 50 mg comprimido revestido',
      mg: 50,
      frac: 1,
      vias: ['VO'],
      disp: '1 a 3 caixas (30 comprimidos)',
      acesso: { rename: true, fp: true },
      instrucao: 'Como tomar o medicamento para o controle da pressão alta:\n1. HORÁRIO E TOMADA: Tomar o comprimido com um copo de água pela manhã, todos os dias no mesmo horário, com ou sem alimentos.\n2. REMÉDIO DE USO CONTÍNUO: Nunca interrompa o tratamento por conta própria mesmo que a sua pressão esteja normalizada. O remédio deve ser tomado todos os dias para evitar derrames (AVC) e infartos.\n3. CUIDADO COM TONTURA AO SE LEVANTAR: Nos primeiros dias de tratamento, levante-se devagar da cama ou da cadeira para evitar tontura ou sensação de desmaio pela adaptação da pressão arterial.\n4. GESTAÇÃO: Este remédio é CONTRAINDICADO na gravidez. Se você for mulher em idade fértil e descobrir que está grávida, avise imediatamente o seu médico para que seja feita a troca segura do remédio.\n5. HÁBITOS SAUDÁVEIS: Mantenha uma alimentação com pouco sal, evite bebidas alcoólicas e pratique atividades físicas conforme liberação médica.',
      obs: 'RENAME / Farmácia Popular. Droga de primeira linha com excelente perfil de tolerabilidade e ausência da tosse seca associada aos IECAs.'
    },
    {
      id: 'cp_25mg',
      forma: 'cp',
      nome: 'Comprimido revestido 25 mg',
      comercial: 'Aradois / Genérico',
      conc: '25 mg',
      rotulo: 'Losartana potássica 25 mg comprimido revestido',
      mg: 25,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa (30 comprimidos)',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar 1 comprimido pela manhã com água. Apresentação recomendada para início de titulação em pacientes com disfunção hepática leve ou insuficiência cardíaca.',
      obs: 'Dose baixa para titulação gradual ou pacientes idosos fragilizados.'
    }
  ],
  regras: [
    // 1. Adultos - Hipertensão Arterial Sistêmica e Nefroproteção (50 a 100 mg/dia)
    {
      pub: 'adulto',
      vias: ['VO'],
      apres: ['cp_50mg', 'cp_25mg'],
      tipo: 'mg',
      min: 25,
      max: 100,
      padrao: 50,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 180,
      fonte: 'HSL / SBC / BULA',
      trecho: 'HSL: Hipertensão: 50 mg a 100 mg/dia VO em 1 ou 2 tomadas. Dose máxima no adulto: 100 mg/dia.'
    },
    // 2. Pediatria (≥ 6 anos e ≥ 20 kg - conforme HSL)
    {
      pub: 'ped',
      se: { idadeMinAnos: 6, pesoMin: 20 },
      vias: ['VO'],
      apres: ['cp_50mg', 'cp_25mg'],
      tipo: 'mg',
      min: 25,
      max: 100,
      padrao: 50,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 180,
      fonte: 'HSL',
      trecho: 'HSL Pediatria: Crianças 6-16 anos: ≥ 20 kg a < 50 kg: 25 mg a 50 mg/dia; ≥ 50 kg: 50 mg a 100 mg/dia.'
    }
  ],
  contra: [
    {
      vias: ['VO'],
      msg: 'CONTRAINDICAÇÃO ABSOLUTA NA GESTAÇÃO: O uso de bloqueadores dos receptores de angiotensina II (BRA) no 2º e 3º trimestres causa lesão renal fetal grave, oligoidrâmnio (hipoplasia pulmonar e deformidades esqueléticas), atraso no desenvolvimento fetal e morte perinatal. Suspender imediatamente se confirmada gestação.',
      fonte: 'SBC / BULA',
      trecho: 'Contraindicado em mulheres grávidas.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'Contraindicado em pacientes com estenose bilateral de artéria renal ou estenose de artéria renal em rim único (risco iminente de colapso da taxa de filtração glomerular e insuficiência renal aguda anúrica).',
      fonte: 'SBC / BULA',
      trecho: 'Estenose bilateral de artéria renal.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'Contraindicada a associação concomitante com alisquireno em pacientes com diabetes mellitus ou insuficiência renal (Clcr < 60 mL/min).',
      fonte: 'BULA / SBC',
      trecho: 'Uso concomitante com alisquireno em diabéticos ou renais crônicos.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'ALERTA DE HIPERCALEMIA: Pacientes com insuficiência renal crônica ou em uso concomitante de suplementos de potássio ou diuréticos poupadores de potássio (espironolactona) apresentam risco de hiperpotassemia grave. Monitorar eletrólitos e função renal periodicamente.',
      fonte: 'HSL / SBC',
      trecho: 'Risco de hipercalemia em nefropatas ou associação com poupadores de potássio.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Tratamento de primeira escolha da Hipertensão Arterial Sistêmica (HAS); redução do risco de morbimortalidade cardiovascular em hipertensos com hipertrofia ventricular esquerda; tratamento da insuficiência cardíaca com fração de ejeção reduzida em pacientes intolerantes a IECAs; nefroproteção e retardo da progressão de doença renal crônica em pacientes com diabetes mellitus tipo 2 e proteinúria/microalbuminúria.',
    administracao: 'VO: Administrar com ou sem alimentos, preferencialmente sempre no mesmo horário todos os dias.',
    cuidados: 'VANTAGEM SOBRE OS IECAS: Não inibe a enzima conversora de angiotensina e, portanto, não acumula bradicinina nem substância P nos pulmões, não causando a tosse seca persistente característica do enalapril e captopril.',
    ajuste: 'Insuficiência renal: Não requer ajuste inicial em adultos (HSL). Hemodiálise: Não é dialisável; não requer dose suplementar. Insuficiência hepática: Reduzir a dose inicial para 25 mg/dia pelo menor clearance hepático (HSL).'
  }
};

export default losartana;
