/**
 * MEDICAMENTO: Nitrato de Miconazol 20 mg/g (Creme Vaginal com Aplicadores Descartáveis)
 * CLASSE: Antifúngico Ginecológico Imidazólico
 * FONTES:
 *   - Ministério da Saúde: Protocolo Clínico e Diretrizes Terapêuticas (PCDT) para Atenção Integral às Pessoas com IST
 *   - Guia de Prescrição PSZerado (2025, pág. 107): Tratamento de Candidíase Vulvovaginal
 *   - FEBRASGO: Conduta na candidíase vulvovaginal e segurança na gestação
 *   - Bulário ANVISA: Gyno-Daktarin creme vaginal 2% / Genérico
 */

import { Farmaco } from '../../types';

export const miconazolVaginal: Farmaco = {
  id: 'miconazol-vaginal',
  nome: 'Nitrato de Miconazol Creme Vaginal (20 mg/g - 2%)',
  categoria: 'Ginecologia e Saúde da Mulher',
  busca: 'miconazol vaginal gyno daktarin candidiase vaginal candidiase na gravidez corrimento branco nata de leite prurido vaginal coceira intima creme vaginal com aplicador',
  classe: 'Antifúngico Imidazólico Ginecológico de Ação Tópica',
  dosePratica: 'Candidíase Vulvovaginal (PCDT IST / MS / PSZerado 2025 pág. 107 / FEBRASGO): Aplicar 1 aplicador cheio (5 g de creme = 100 mg de miconazol) profundamente por via vaginal à noite, ao deitar, durante 7 noites consecutivas (em gestantes ou casos graves/recorrentes: estender para 14 noites). Droga tópica padrão-ouro e mais segura na gravidez e lactação. Evitar preservativos de látex durante o uso (a base do creme pode fragilizar o látex).',
  fontes: { MS: '2023', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'aplicação vaginal noturna ao deitar',
  acessoFonte: 'RENAME / Farmácia Básica do SUS: Bisnaga com 80 g de creme acompanhada de 14 aplicadores descartáveis disponível gratuitamente nas Unidades Básicas de Saúde de todo o Brasil.',
  apresentacoes: [
    {
      id: 'creme_80g',
      forma: 'creme',
      nome: 'Creme vaginal 20 mg/g (2% - bisnaga 80 g com 14 aplicadores descartáveis)',
      comercial: 'Gyno-Daktarin / Genérico',
      conc: '20 mg/g (2% - 100 mg por aplicador de 5 g)',
      rotulo: 'Nitrato de miconazol 20 mg/g (2%) creme vaginal (bisnaga 80 g + aplicadores)',
      mg: 1,
      volml: 80,
      frascoMl: 80,
      vias: ['VAGINAL'],
      disp: '1 bisnaga (80 g) com 14 aplicadores descartáveis',
      acesso: { rename: true, fp: false },
      instrucao: 'Como aplicar o creme vaginal em casa com segurança:\n1. HORÁRIO: Faça a aplicação à noite, imediatamente antes de se deitar para dormir.\n2. HIGIENE: Lave bem as mãos com água e sabão antes de iniciar.\n3. PREPARO DO APLICADOR: Retire a tampa da bisnaga e rosqueie o bico do aplicador plástico descartável na ponta da bisnaga.\n4. PREENCHIMENTO: Aperte a bisnaga suavemente pela parte inferior até que o êmbolo do aplicador suba até o limite final (marcando 5 gramas de creme). Desrosqueie o aplicador e tampe a bisnaga.\n5. POSIÇÃO: Deite-se de barriga para cima na cama, com as pernas dobradas e ligeiramente afastadas.\n6. INTRODUÇÃO: Introduza o aplicador suavemente e o mais profundamente possível no canal vaginal (se estiver grávida, introduza com bastante delicadeza e sem forçar até o fundo) e empurre o êmbolo até o fim para liberar todo o creme lá dentro.\n7. DESCARTE: Retire o aplicador e jogue-o no lixo (use SEMPRE um aplicador novo a cada noite; nunca reutilize aplicadores).\n8. PERMANEÇA DEITADA a noite toda para que o remédio não escorra para fora.\n9. ALÍVIO EXTERNO: Se houver coceira ou vermelhidão intensa nos lábios externos da vulva, pode espalhar uma pequena quantidade do creme externamente com a ponta dos dedos limpos.\n10. CUIDADOS DURANTE O TRATAMENTO:\n   - Não tenha relações sexuais durante o tratamento (a base do creme pode danificar preservativos de borracha/látex e diafragmas, reduzindo sua eficácia contraceptiva e de proteção).\n   - Pode manter a aplicação normalmente mesmo se a menstruação descer durante o período.',
      obs: 'RENAME / SUS. Padrão-ouro de eficácia contra Candida albicans e espécies não-albicans. Seguro em todos os trimestres gestacionais.'
    }
  ],
  regras: [
    // 1. Adultas e Adolescentes
    {
      pub: 'adulto',
      vias: ['VAGINAL'],
      apres: ['creme_80g'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 14,
      fonte: 'MS / PSZERADO / FEBRASGO / BULA',
      trecho: 'PCDT IST / PSZerado pág. 107: Aplicar 1 aplicador cheio (5 g) profundamente na vagina 1 vez ao dia ao deitar, durante 7 a 14 noites consecutivas.'
    }
  ],
  contra: [
    {
      vias: ['VAGINAL'],
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada ao nitrato de miconazol ou a qualquer outro derivado antifúngico imidazólico.',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade conhecida aos derivados imidazólicos.',
      strong: true
    },
    {
      vias: ['VAGINAL'],
      msg: 'ALERTA SOBRE PRESERVATIVOS: Os componentes oleosos da base do creme vaginal podem enfraquecer o látex de preservativos masculinos/femininos e diafragmas mecânicos, aumentando o risco de ruptura e falha contraceptiva durante o tratamento.',
      fonte: 'FEBRASGO / BULA',
      trecho: 'Interação física com preservativos e diafragmas de látex.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Tratamento de Candidíase Vulvovaginal aguda, recorrente ou complicada por Candida albicans e outras leveduras sensíveis (sintomas típicos: prurido vulvar intenso, queimação ao urinar, dispareunia e corrimento branco grumoso aderente sem odor fétido).',
    administracao: 'VAGINAL: Aplicação noturna ao deitar utilizando aplicador ginecológico descartável preenchido com 5 g de creme.',
    cuidados: 'PRIMEIRA ESCOLHA NA GESTAÇÃO: É o tratamento tópico de escolha absoluta para candidíase vulvovaginal em gestantes (onde o fluconazol oral é contraindicado pelo risco de malformações congênitas e abortamento). Na gravidez, recomenda-se esquema completo de 14 noites e introdução cuidadosa do aplicador.',
    ajuste: 'Insuficiência renal e hepática: Absorção percutânea/mucosa sistêmica insignificante (< 1,3%); dispensa ajuste posológico.'
  }
};

export default miconazolVaginal;
