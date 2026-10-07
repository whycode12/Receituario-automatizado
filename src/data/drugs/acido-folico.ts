/**
 * MEDICAMENTO: Ácido Fólico (Vitamina B9)
 * CLASSE: Vitamina Hidrossolúvel / Antianêmico (Folato)
 * FONTES:
 *   - HSL: Guia Farmacêutico Hospital Sírio-Libanês (Ácido fólico - Endofolin 5mg e gotas 0,2mg/mL)
 *   - Ministério da Saúde: Cadernos de Atenção Básica nº 32 (Atenção ao Pré-Natal de Baixo Risco)
 *   - FEBRASGO: Suplementação de Ácido Fólico no Período Pré-Concepcional e Gestação
 *   - Sociedade Brasileira de Reumatologia (SBR): Resgate de toxicidade pelo metotrexato
 *   - Bulário ANVISA: Endofolin / Genérico
 */

import { Farmaco } from '../../types';

export const acidoFolico: Farmaco = {
  id: 'acido-folico',
  nome: 'Ácido Fólico (Vitamina B9)',
  categoria: 'Hematologia e Vitaminas',
  busca: 'acido folico vitamina b9 endofolin tubo neural pre-natal espinha bifida anencefalia anemia megaloblastica resgate metotrexato folato gravidez',
  classe: 'Vitamina Hidrossolúvel do Complexo B e Antianêmico',
  dosePratica: '1. Prevenção de Defeitos do Tubo Neural no Pré-Natal (MS / FEBRASGO / HSL): 5 mg VO 1 vez ao dia durante o período fértil/pré-concepcional (iniciar 1 a 3 meses antes da concepção) e manter até a 12ª semana de gestação. 2. Resgate de Toxicidade por Metotrexato (SBR / HSL): 5 mg VO 1 vez por semana (administrado 24 a 48 horas após a dose semanal do metotrexato). 3. Anemia Megaloblástica por Deficiência de Folatos: 5 mg VO 1 vez ao dia por 1 a 4 meses.',
  fontes: { HSL: '14/02/2017', MS: '2023', BULA: '04/10/2026' },
  snPadrao: 'tomada diária pré-natal ou semanal pós-metotrexato',
  acessoFonte: 'RENAME / Farmácia Básica do SUS / Farmácia Popular: Comprimidos de 5 mg de ácido fólico amplamente disponíveis gratuitamente na Atenção Básica de todo o Brasil.',
  apresentacoes: [
    {
      id: 'cp_5mg',
      forma: 'cp',
      nome: 'Comprimido 5 mg',
      comercial: 'Endofolin / Genérico',
      conc: '5 mg',
      rotulo: 'Ácido fólico 5 mg comprimido',
      mg: 5,
      frac: 1,
      vias: ['VO'],
      disp: '1 a 3 caixas (30 comprimidos)',
      acesso: { rename: true, fp: true },
      instrucao: 'Como tomar o ácido fólico:\n1. HORÁRIO E TOMADA: Tomar 1 comprimido 1 vez ao dia com um copo de água. Pode ser tomado com ou sem alimentos (junto com o café da manhã ou almoço).\n2. PARA MULHERES QUE PLANEJAM ENGRAVIDAR OU GRÁVIDAS NO INÍCIO: O ácido fólico é fundamental para fechar perfeitamente a coluna e o cérebro do bebê nas primeiras semanas. Tome diariamente sem interrupções até completar pelo menos os primeiros 3 meses de gestação.\n3. SE ESQUECER DE TOMAR: Tome assim que lembrar no mesmo dia. Se só lembrar no dia seguinte, tome apenas o comprimido habitual daquele dia (não dobre a dose).\n4. PACIENTES EM TRATAMENTO COM METOTREXATO: Tome o comprimido de ácido fólico exatamente no dia da semana orientado pelo seu reumatologista (geralmente 24 a 48 horas após o metotrexato; NUNCA no mesmo dia do metotrexato).',
      obs: 'RENAME / Farmácia Básica. Apresentação clássica padronizada na rede pública brasileira para suplementação pré-concepcional e gestacional.'
    },
    {
      id: 'gotas_0_2mgml',
      forma: 'gotas',
      nome: 'Solução oral gotas 0,2 mg/mL (frasco 30 mL - 1 gota = 0,01 mg = 10 mcg)',
      comercial: 'Endofolin Gotas / Genérico',
      conc: '0,2 mg/mL (1 gota = 0,01 mg / 20 gotas = 1 mL = 0,2 mg)',
      rotulo: 'Ácido fólico gotas 0,2 mg/mL (frasco 30 mL)',
      mg: 0.2,
      gotasml: 20,
      volml: 30,
      frascoMl: 30,
      vias: ['VO'],
      disp: '1 frasco conta-gotas (30 mL)',
      acesso: { rename: false, fp: false },
      instrucao: 'Pingar as gotas na colher com um pouco de água ou suco e administrar à criança conforme dose pediátrica prescrita.',
      obs: 'Apresentação padronizada no Guia Farmacêutico HSL para titulação pediátrica precisa.'
    }
  ],
  regras: [
    // 1. Adultas - Prevenção no Pré-Natal / Anemia Megaloblástica / Resgate MTX (5 mg VO 1x/dia ou semanal)
    {
      pub: 'adulto',
      vias: ['VO'],
      apres: ['cp_5mg'],
      tipo: 'mg',
      min: 5,
      max: 5,
      padrao: 5,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 180,
      fonte: 'HSL / MS / FEBRASGO',
      trecho: 'HSL: Prevenção de malformação do tubo neural: 5 mg VO 1 vez ao dia diariamente. Resgate metotrexato: 5 a 10 mg/semana VO.'
    },
    // 2. Pediatria - Suplementação e Tratamento
    {
      pub: 'ped',
      vias: ['VO'],
      apres: ['gotas_0_2mgml'],
      tipo: 'mg',
      min: 0.1,
      max: 1,
      padrao: 0.4,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 90,
      fonte: 'HSL / SBP',
      trecho: 'HSL Pediátrico: Crianças < 4 anos até 0,3 mg/dia; ≥ 4 anos: 0,4 mg/dia VO.'
    }
  ],
  contra: [
    {
      vias: ['VO'],
      msg: 'CONTRAINDICAÇÃO DE CAUTELA: Contraindicado em anemia perniciosa ou outras anemias megaloblásticas causadas por deficiência de Vitamina B12 (cobalamina) não tratada. O ácido fólico corrige a anemia e as alterações do hemograma, mas NÃO impede a progressão irreversível das lesões neurológicas (degeneração combinada subaguda da medula espinhal). Sempre dosar vitamina B12 previamente.',
      fonte: 'HSL / BULA',
      trecho: 'Contraindicado a pacientes com anemia perniciosa sem reposição de B12 concomitante.',
      strong: false
    },
    {
      vias: ['VO'],
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada ao ácido fólico ou a qualquer excipiente da fórmula.',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade conhecida ao ácido fólico.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Prevenção de defeitos do fechamento do tubo neural (espinha bífida, meningocele, anencefalia) no período pré-concepcional e 1º trimestre de gestação; prevenção da toxicidade hepática, gastrointestinal e hematológica induzida pelo metotrexato; tratamento de anemias megaloblásticas por deficiência nutricional de folato; suporte em anemias hemolíticas crônicas (anemia falciforme, talassemias).',
    administracao: 'VO: Administrar 1 comprimido ao dia com líquidos, independentemente das refeições.',
    cuidados: 'INTERAÇÃO COM ANTICONVULSIVANTES: Medicamentos como fenitoína, carbamazepina e fenobarbital reduzem os níveis séricos de ácido fólico. Por outro lado, altas doses de ácido fólico podem reduzir a concentração sérica de fenitoína e predispor a crises convulsivas (monitorar níveis séricos).',
    ajuste: 'Insuficiência renal e hepática: Vitamina hidrossolúvel sem toxicidade acumulativa relevante; não requer ajuste de dose (HSL). Pacientes em hemodiálise perdem folato no dialisato e requerem suplementação regular.'
  }
};

export default acidoFolico;
