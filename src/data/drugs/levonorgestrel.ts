/**
 * MEDICAMENTO: Levonorgestrel 1,5 mg (Contracepção de Emergência)
 * CLASSE: Progestagênio Sintético / Contracepção Hormonal de Emergência
 * FONTES:
 *   - Ministério da Saúde: Cadernos de Atenção Básica nº 26 (Saúde Sexual e Reprodutiva) e Protocolos da Atenção Básica
 *   - FEBRASGO: Manual de Anticoncepção e Contracepção de Emergência
 *   - HSL: Guia Farmacêutico Hospital Sírio-Libanês (Levonorgestrel)
 *   - Bulário ANVISA: Pozato Uni / Diad / Postinor-2 / Genérico
 */

import { Farmaco } from '../../types';

export const levonorgestrel: Farmaco = {
  id: 'levonorgestrel',
  nome: 'Levonorgestrel 1,5 mg (Contracepção de Emergência)',
  categoria: 'Ginecologia e Saúde da Mulher',
  busca: 'levonorgestrel pilula do dia seguinte contracepcao de emergencia pozato uni diad postinor coito desprotegido camisinha estourou violencia sexual',
  classe: 'Progestagênio Sintético / Contracepção Hormonal de Emergência em Dose Única',
  dosePratica: 'Contracepção de Emergência Pós-Coito Desprotegido (MS / FEBRASGO): Ingerir 1 comprimido de 1,5 mg VO em DOSE ÚNICA (ou 2 comprimidos de 0,75 mg tomados juntos) o mais precocemente possível, preferencialmente nas primeiras 24 a 72 horas (eficácia decrescente até 120 horas / 5 dias). Se ocorrer vômito em até 2 horas após a ingestão, repetir a dose imediatamente. Orientar início ou retomada imediata de contracepção regular.',
  fontes: { MS: '2023', HSL: '14/02/2017', BULA: '04/10/2026' },
  snPadrao: 'coito desprotegido ou falha de método contraceptivo de barreira',
  acessoFonte: 'RENAME / Farmácia Básica do SUS: Comprimido de 1,5 mg em dose única (ou 2 x 0,75 mg) padronizado e de distribuição gratuita e imediata nas UBSs, UPAs e maternidades do SUS.',
  apresentacoes: [
    {
      id: 'cp_1_5mg',
      forma: 'cp',
      nome: 'Comprimido 1,5 mg (blíster com 1 comprimido - Dose Única)',
      comercial: 'Pozato Uni / Diad / Genérico',
      conc: '1,5 mg',
      rotulo: 'Levonorgestrel 1,5 mg comprimido (dose única)',
      mg: 1.5,
      frac: 1,
      vias: ['VO'],
      disp: '1 comprimido (dose única)',
      acesso: { rename: true, fp: false },
      instrucao: 'Orientações fundamentais para a paciente:\n1. TOME O QUANTO ANTES: Tome o comprimido com um copo de água o mais rápido possível após a relação desprotegida. A eficácia é máxima (mais de 95%) quando tomado nas primeiras 24 horas, reduzindo progressivamente até 72 horas (pode ser usado até 120 horas / 5 dias).\n2. SE VOMITAR: Se você tiver vômito em até 2 horas após ter engolido o comprimido, deve tomar outro comprimido de 1,5 mg imediatamente, pois o primeiro não teve tempo de ser absorvido pelo estômago.\n3. NÃO É ABORTIVO: Este medicamento NÃO é abortivo. Ele atua apenas impedindo ou atrasando a liberação do óvulo (ovulação). Se a gravidez já estiver implantada no útero, o remédio NÃO interrompe a gestação e não prejudica o feto.\n4. SUA MENSTRUAÇÃO: O sangramento menstrual pode ocorrer alguns dias antes ou depois da data esperada. Se a menstruação atrasar mais de 7 dias do esperado, faça um teste de gravidez (Beta-HCG de sangue ou teste de urina).\n5. USO OCASIONAL: Este método destina-se apenas a emergências ocasionais. Ele NÃO deve substituir o anticoncepcional de rotina (pílula diária, injeção mensal/trimestral, DIU ou implante).\n6. NÃO PROTEGE CONTRA INFECÇÕES: A pílula de emergência não protege contra Infecções Sexualmente Transmissíveis (como HIV, sífilis, herpes e hepatites). O uso de camisinha é essencial.',
      obs: 'RENAME / SUS. Esquema posológico padrão-ouro em dose única, mais cômodo e com menos risco de esquecimento do que os esquemas fracionados antigos.'
    },
    {
      id: 'cp_0_75mg_x2',
      forma: 'cp',
      nome: 'Comprimidos 0,75 mg (blíster com 2 comprimidos - Tomar juntos)',
      comercial: 'Postinor-2 / Genérico',
      conc: '0,75 mg (2 comprimidos = 1,5 mg)',
      rotulo: 'Levonorgestrel 0,75 mg comprimidos (blíster com 2 unidades)',
      mg: 1.5,
      frac: 1,
      vias: ['VO'],
      disp: '1 cartela com 2 comprimidos (tomar os 2 juntos em dose única)',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar os 2 comprimidos juntos de uma só vez (totalizando 1,5 mg) com água o mais rápido possível após o coito desprotegido.',
      obs: 'RENAME / SUS. Formulação tradicional em 2 comprimidos. A recomendação atual da FEBRASGO e MS é ingerir ambos os comprimidos simultaneamente em dose única.'
    }
  ],
  regras: [
    // 1. Mulheres em Idade Fértil (Adultas e Adolescentes)
    {
      pub: 'adulto',
      vias: ['VO'],
      apres: ['cp_1_5mg', 'cp_0_75mg_x2'],
      tipo: 'mg',
      min: 1.5,
      max: 1.5,
      padrao: 1.5,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 1,
      fonte: 'MS / FEBRASGO / BULA',
      trecho: 'Ingerir 1,5 mg em dose única por via oral nas primeiras 72 horas pós-coito desprotegido.'
    }
  ],
  contra: [
    {
      vias: ['VO'],
      msg: 'Contraindicado em caso de gravidez prévia confirmada (a medicação não possui eficácia após a nidação/implantação ovular, embora não tenha demonstrado efeito teratogênico ou dano fetal caso ingerida acidentalmente).',
      fonte: 'BULA / FEBRASGO',
      trecho: 'Gravidez confirmada ou suspeita.',
      strong: false
    },
    {
      vias: ['VO'],
      msg: 'Contraindicado em pacientes com hipersensibilidade conhecida ao levonorgestrel ou aos excipientes da fórmula (lactose).',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade ao levonorgestrel.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Contracepção de emergência para prevenção de gravidez após relação sexual desprotegida por falha ou rompimento do preservativo, cálculo incorreto do período fértil, deslocamento de DIU, esquecimento consecutivo de pílulas contraceptivas orais regulares ou atendimento médico a vítimas de violência sexual.',
    administracao: 'VO: Administrar 1,5 mg (1 comprimido de 1,5 mg ou 2 comprimidos de 0,75 mg ingeridos simultaneamente) em dose única imediata.',
    cuidados: 'EFICÁCIA EM SOBREPESO E OBESIDADE: Estudos clínicos evidenciam que mulheres com sobrepeso ou obesidade (IMC ≥ 30 kg/m² ou peso > 70-80 kg) podem apresentar menor taxa de eficácia com a contracepção de emergência hormonal oral. Nestes casos, a inserção de DIU de cobre em até 5 dias pós-coito é o método de emergência mais eficaz (FEBRASGO).',
    ajuste: 'Insuficiência renal e hepática: Metabolismo hepático; não há necessidade de ajuste de dose em dose única de emergência.'
  }
};

export default levonorgestrel;
