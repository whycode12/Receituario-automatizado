/**
 * MEDICAMENTO: Sulfato Ferroso (Ferro Elementar)
 * CLASSE: Antianêmico Mineral / Sal de Ferro
 * FONTES:
 *   - SBP (Sociedade Brasileira de Pediatria): Guia Prático de Atualização - Anemia Ferropriva na Infância e Suplementação de Ferro
 *   - Ministério da Saúde: Programa Nacional de Suplementação de Ferro (PNSF) e Protocolos da Atenção Básica
 *   - RENAME / Farmácia Básica do SUS: Comprimido 40 mg Fe elementar e Gotas 25 mg/mL Fe elementar (125 mg/mL sal)
 *   - Bulário ANVISA: Sulfato Ferroso / Fer-In-Sol / Genérico
 */

import { Farmaco } from '../../types';

export const sulfatoFerroso: Farmaco = {
  id: 'sulfato-ferroso',
  nome: 'Sulfato Ferroso (Ferro Elementar)',
  categoria: 'Hematologia e Suplementos Minerais',
  busca: 'sulfato ferroso ferro elementar anemia ferropriva fer-in-sol ferro gotas ferro comprimido sulfato de ferro combate a anemia ferritina baixa gravidez gestacao',
  classe: 'Suplemento Mineral Antianêmico (Sal de Ferro Essencial)',
  dosePratica: '1. Tratamento da Anemia Ferropriva Infantil (SBP): 3 a 5 mg de ferro elementar/kg/dia VO (em gotas) dividido em 1 a 2 tomadas por 3 a 6 meses. 2. Profilaxia da Anemia Ferropriva na Infância (SBP): 1 mg de ferro elementar/kg/dia VO a partir dos 3 ou 6 meses até os 2 anos. 3. Tratamento no Adulto: 80 a 160 mg de ferro elementar/dia VO (1 comp de 40 mg 2 a 3x/dia). 4. Profilaxia na Gestação (MS): 40 mg de ferro elementar/dia a partir da 20ª semana.',
  fontes: { SBP: '2023', MS: '2023', BULA: '04/10/2026' },
  snPadrao: 'tomada diária para reposição de ferro e tratamento de anemia',
  acessoFonte: 'RENAME / Farmácia Básica do SUS / Programa Nacional de Suplementação de Ferro (PNSF): Drágeas de 40 mg de ferro elementar e frasco conta-gotas 25 mg/mL de ferro elementar (125 mg/mL de sal) gratuitos no SUS.',
  apresentacoes: [
    {
      id: 'cp_40mg_fe',
      forma: 'cp',
      nome: 'Comprimido / Drágea 40 mg de Ferro Elementar (200 mg de Sulfato Ferroso)',
      comercial: 'Sulfato Ferroso 40 mg Fe / Genérico',
      conc: '40 mg de Ferro elementar (equiv. a 200 mg de sulfato ferroso heptaidratado)',
      rotulo: 'Sulfato ferroso 40 mg (ferro elementar) comprimido',
      mg: 40,
      frac: 1,
      vias: ['VO'],
      disp: '1 a 2 caixas (60 comprimidos)',
      acesso: { rename: true, fp: true },
      instrucao: 'Como tomar o comprimido de ferro para melhor absorção e menos enjoo:\n1. MELHOR HORÁRIO: Tomar preferencialmente 30 a 60 minutos antes do almoço ou jantar, acompanhado de meio copo de água ou suco de frutas cítricas (laranja, limão ou acerola, pois a vitamina C melhora muito a absorção do ferro).\n2. SE SENTIR AZIA OU ENJOO: Se tiver desconforto no estômago, tome 1 a 2 horas após a refeição.\n3. ATENÇÃO - O QUE NÃO MISTURAR: NUNCA tome o remédio junto com leite, queijos, iogurtes, café, chá-preto ou remédios para azia (antiácidos/omeprazol), pois eles cortam o efeito do ferro. Respeite um intervalo de pelo menos 2 horas.\n4. FEZES ESCURAS: As fezes ficarão bem escuras ou pretas durante o tratamento. Isso é completamente NORMAL e inofensivo (é apenas o ferro que não foi absorvido sendo eliminado pelo intestino).\n5. DURAÇÃO: Não pare de tomar quando a fraqueza passar; continue pelo tempo total orientado pelo médico para recarregar os estoques de ferro do fígado.',
      obs: 'RENAME / Farmácia Popular. Padrão universal para tratamento da anemia ferropriva e profilaxia gestacional no adulto.'
    },
    {
      id: 'gotas_25mgml_fe',
      forma: 'gotas',
      nome: 'Solução oral gotas 25 mg/mL de Ferro Elementar (1 gota = 1,25 mg Fe - frasco 30 mL)',
      comercial: 'Fer-In-Sol / Sulfato Ferroso Gotas / Genérico',
      conc: '25 mg/mL de Ferro elementar (1 gota = 1,25 mg de ferro elementar / 20 gotas = 1 mL = 25 mg)',
      rotulo: 'Sulfato ferroso gotas (25 mg/mL de ferro elementar - 1 gota = 1,25 mg Fe)',
      mg: 25,
      gotasml: 20,
      volml: 30,
      frascoMl: 30,
      vias: ['VO'],
      disp: '1 frasco conta-gotas (30 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Como dar as gotinhas de ferro para a criança:\n1. ADMINISTRAÇÃO: Pingar a quantidade de gotas prescrita diretamente na boca da criança ou em uma colherzinha, preferencialmente acompanhada de um pouquinho de suco de laranja natural ou água.\n2. HORÁRIO: Dar preferencialmente 30 minutos antes de uma refeição (ou entre as mamadas, evitando dar junto com leite materno ou fórmula infantil se possível, para não diminuir a absorção).\n3. CUIDADO COM OS DENTES: O ferro líquido pode deixar os dentinhos temporariamente escurecidos. Para evitar isso, pingue no fundo da boca e limpe ou escove os dentes da criança após a tomada com gaze úmida ou escova macia.\n4. FEZES PRETAS: As fezes da criança ficarão escuras/pretas durante o tratamento. Fique tranquilo, isso é totalmente esperado e normal.\n5. DURAÇÃO: Mantenha as gotas diariamente pelo período orientado pelo pediatra.',
      obs: 'RENAME / PNSF. Apresentação padronizada do Ministério da Saúde para lactentes e crianças pequenas. Cálculo: 1 gota contém exatamente 1,25 mg de ferro elementar.'
    }
  ],
  regras: [
    // 1. Adultos - Tratamento de Anemia Ferropriva (80 a 160 mg Fe/dia = 1 comp 2 a 4x/dia)
    {
      pub: 'adulto',
      vias: ['VO'],
      apres: ['cp_40mg_fe'],
      tipo: 'mg',
      min: 40,
      max: 80,
      padrao: 40,
      dosesDia: [1, 3],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 180,
      fonte: 'MS / PNSF / BULA',
      trecho: 'Tratamento no adulto: 80 a 160 mg/dia de ferro elementar VO fracionados em 1 a 3 tomadas antes das refeições por 3 a 6 meses.'
    },
    // 2. Pediatria - Tratamento da Anemia Ferropriva (3 a 5 mg/kg/dia de Fe elementar)
    {
      pub: 'ped',
      vias: ['VO'],
      apres: ['gotas_25mgml_fe'],
      tipo: 'mg_kg_dia',
      min: 3,
      max: 5,
      padrao: 3,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 180,
      fonte: 'SBP / MS',
      trecho: 'SBP Diretrizes de Anemia Ferropriva: 3 a 5 mg de ferro elementar/kg/dia VO (1 gota = 1,25 mg de Fe) em dose única ou dividida em 2 vezes por 3 a 6 meses.'
    }
  ],
  contra: [
    {
      vias: ['VO'],
      msg: 'Contraindicado em anemias não causadas por deficiência de ferro (anemia perniciosa por deficiência de B12, anemia aplásica, anemias hemolíticas crônicas como anemia falciforme e talassemia maior/menor isoladas sem ferropenia associada), pois a administração pode causar hemossiderose secundária por sobrecarga metálica.',
      fonte: 'MS / SBP / BULA',
      trecho: 'Anemias hemolíticas, talassemias e anemias não ferropênicas.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'Contraindicado em estados de sobrecarga orgânica de ferro (hemocromatose primária hereditária e hemossiderose).',
      fonte: 'BULA',
      trecho: 'Hemocromatose e sobrecarga crônica de ferro.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'Contraindicado na vigência de úlcera péptica ativa, enterite regional ou colite ulcerativa aguda ativa (risco de irritação mecânica e química direta da mucosa gastrintestinal lesionada).',
      fonte: 'BULA',
      trecho: 'Úlcera péptica gástrica ou duodenal ativa.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Prevenção e tratamento da anemia por deficiência de ferro (anemia ferropriva) em lactentes, crianças, adolescentes, gestantes, puérperas, adultos e idosos com perdas crônicas sanguíneas ou má absorção.',
    administracao: 'VO: Administrar com estômago vazio (1h antes das refeições) ou com alimentos leves se intolerância. Ingerir com suco rico em vitamina C (ácido ascórbico) para maximizar a conversão de Fe3+ em Fe2+ absorvível.',
    cuidados: 'INTERAÇÕES DE ABSORÇÃO: O ferro sofre quelação com cálcio, fitatos, taninos e fosfatos presentes em laticínios, café e chá, além de requerer pH ácido gástrico (bloqueadores de bomba de prótons e antiácidos diminuem sua absorção). Espaçar o uso em no mínimo 2 horas.',
    ajuste: 'Insuficiência renal e hepática: Em nefropatas crônicos em hemodiálise a via oral costuma ser insuficiente/mal absorvida por excesso de hepcidina inflamatória, preferindo-se ferro parenteral intravenoso.'
  }
};

export default sulfatoFerroso;
