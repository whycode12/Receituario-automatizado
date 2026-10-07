/**
 * MEDICAMENTO: Metronidazol Gel Vaginal (100 mg/g com Aplicadores Descartáveis)
 * CLASSE: Antiparasitário e Antibacteriano Ginecológico (Nitroimidazol)
 * FONTES:
 *   - Ministério da Saúde: Protocolo Clínico e Diretrizes Terapêuticas (PCDT) para Atenção Integral às Pessoas com IST (2022/2024)
 *   - Guia de Prescrição PSZerado (2025, pág. 107): Tratamento de Vaginose Bacteriana
 *   - HSL: Guia Farmacêutico Hospital Sírio-Libanês (Metronidazol)
 *   - Bulário ANVISA: Flagyl Ginecológico gel vaginal / Genérico
 */

import { Farmaco } from '../../types';

export const metronidazolVaginal: Farmaco = {
  id: 'metronidazol-vaginal',
  nome: 'Metronidazol Gel Vaginal (100 mg/g)',
  categoria: 'Ginecologia e Saúde da Mulher',
  busca: 'metronidazol gel vaginal flagyl ginecologico metronidazol vaginal vaginose bacteriana gardnerella corrimento com cheiro de peixe odor vaginal fetido aplicador vaginal',
  classe: 'Antibacteriano e Antiparasitário Ginecológico de Ação Tópica (Nitroimidazol)',
  dosePratica: 'Vaginose Bacteriana (PCDT IST / Ministério da Saúde / PSZerado 2025): Aplicar 1 aplicador cheio (5 g de gel = 500 mg de metronidazol) profundamente por via vaginal à noite, ao deitar, por 7 noites consecutivas (em casos recorrentes: 10 noites). Evitar consumo de bebidas alcoólicas durante o uso e por 48 horas após a última dose (efeito antabuse/dissulfiram). Não indicado tratamento rotineiro do parceiro sexual na vaginose bacteriana.',
  fontes: { MS: '2023', PSZERADO: '2025', HSL: '14/02/2017', BULA: '04/10/2026' },
  snPadrao: 'aplicação vaginal noturna ao deitar',
  acessoFonte: 'RENAME / Farmácia Básica do SUS: Bisnaga de 50 g com 10 aplicadores descartáveis disponível gratuitamente nas Unidades Básicas de Saúde de todo o Brasil.',
  apresentacoes: [
    {
      id: 'gel_50g',
      forma: 'gel',
      nome: 'Gel vaginal 100 mg/g (bisnaga 50 g com 10 aplicadores descartáveis)',
      comercial: 'Flagyl Ginecológico / Genérico',
      conc: '100 mg/g (10% - 500 mg por aplicador de 5 g)',
      rotulo: 'Metronidazol 100 mg/g gel vaginal (bisnaga 50 g + aplicadores)',
      mg: 1,
      volml: 50,
      frascoMl: 50,
      vias: ['VAGINAL'],
      disp: '1 bisnaga (50 g) com 10 aplicadores descartáveis',
      acesso: { rename: true, fp: false },
      instrucao: 'Como aplicar o gel vaginal em casa com segurança:\n1. HORÁRIO: Faça a aplicação à noite, imediatamente antes de se deitar para dormir.\n2. HIGIENE: Lave bem as mãos com água e sabão antes do procedimento.\n3. PREPARO DO APLICADOR: Retire a tampa da bisnaga e rosqueie o bico do aplicador plástico descartável na ponta da bisnaga.\n4. PREENCHIMENTO: Aperte a bisnaga suavemente pela parte de baixo até que o êmbolo do aplicador suba até o final (marcando 5 gramas de gel). Desrosqueie o aplicador e recoloque a tampa na bisnaga.\n5. POSIÇÃO: Deite-se de barriga para cima na cama, com as pernas dobradas e ligeiramente afastadas.\n6. INTRODUÇÃO: Introduza o aplicador suavemente e o mais profundamente possível no canal vaginal e empurre o êmbolo até o fim para liberar todo o remédio lá dentro.\n7. DESCARTE: Retire o aplicador e jogue-o no lixo (use SEMPRE um aplicador novo e limpo a cada noite; nunca reutilize aplicadores).\n8. PERMANEÇA DEITADA a noite toda para que o remédio não escorra para fora.\n9. CUIDADOS IMPORTANTES DURANTE O TRATAMENTO:\n   - NÃO CONSUMIR BEBIDAS ALCOÓLICAS durante todo o tratamento e por pelo menos 48 horas após a última dose (o álcool misturado com metronidazol causa efeito dissulfiram com vômitos intensos, dor de cabeça, palpitações e mal-estar grave).\n   - Evite relações sexuais durante o período do tratamento para permitir a recuperação da mucosa.\n   - Pode manter o tratamento mesmo se a menstruação descer durante o período.',
      obs: 'RENAME / SUS. Formulação em gel com veículo hidrofílico biocompatível de excelente aderência à mucosa vaginal e rápida ação bactericida anaeróbica.'
    }
  ],
  regras: [
    // 1. Adultas e Adolescentes
    {
      pub: 'adulto',
      vias: ['VAGINAL'],
      apres: ['gel_50g'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 10,
      fonte: 'MS / PSZERADO / BULA',
      trecho: 'PCDT IST / PSZerado: Aplicar 1 aplicador cheio (5 g) profundamente na vagina 1 vez ao dia ao deitar, durante 7 a 10 noites consecutivas.'
    }
  ],
  contra: [
    {
      vias: ['VAGINAL'],
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada ao metronidazol ou a outros derivados nitroimidazólicos.',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade conhecida aos nitroimidazóis.',
      strong: true
    },
    {
      vias: ['VAGINAL'],
      msg: 'ALERTA DE INTERAÇÃO COM ÁLCOOL (EFEITO DISSULFIRAM): O consumo concomitante de bebidas alcoólicas com metronidazol provoca acúmulo de acetaldeído, cursando com náuseas, vômitos incoercíveis, rubor facial, taquicardia e hipotensão. Abster-se de álcool durante o tratamento e por 48 horas após a última aplicação.',
      fonte: 'MS / BULA',
      trecho: 'Evitar ingestão de álcool durante e por 48 horas após o tratamento.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Tratamento de Vaginose Bacteriana (Gardnerella vaginalis, Mobiluncus spp., Bacteroides spp., Mycoplasma hominis) com corrimento acinzentado/branco-amarelado fluido, bolhoso e com odor característico de aminas ("cheiro de peixe"); vaginites inespecíficas por anaeróbios.',
    administracao: 'VAGINAL: Aplicação noturna ao deitar com aplicador ginecológico descartável preenchido com 5 g de gel.',
    cuidados: 'NÃO REQUER TRATAMENTO DO PARCEIRO: Ao contrário da tricomoníase, na vaginose bacteriana o tratamento empírico do parceiro sexual masculino NÃO reduz as taxas de recorrência clínica (Ministério da Saúde / CDC). Preservar a microbiota íntima e evitar duchas vaginais higiênicas internas.',
    ajuste: 'Insuficiência renal e hepática: A absorção sistêmica do gel vaginal corresponde a apenas 20% a 25% da dose oral equivalente; não requer ajuste de dose.'
  }
};

export default metronidazolVaginal;
