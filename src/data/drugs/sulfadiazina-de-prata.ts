import { Farmaco } from '../../types';

export const sulfadiazinaDePrata: Farmaco = {
  id: 'sulfadiazina-de-prata',
  nome: 'Sulfadiazina de Prata',
  categoria: 'Dermatologia e Curativos',
  busca: 'sulfadiazina de prata dermazine prata 1% creme queimadura curativo escara ulcera ferida antimicrobiano topico',
  classe: 'Antimicrobiano Tópico Bactericida de Amplo Espectro',
  dosePratica: 'Queimaduras de 2º Grau e Feridas Infectadas: Limpar a área lesionada com soro fisiológico 0,9% em jato suave sem friccionar. Aplicar uma camada de 1 a 2 mm de espessura do creme sobre toda a lesão 1 a 2 vezes ao dia (a cada 12 ou 24 horas). Cobrir com gaze estéril e atadura de crepom. Trocar o curativo a cada 12 ou 24 horas até a reepitelização completa. Contraindicado em recém-nascidos e lactentes menores de 2 meses e gestantes a termo.',
  fontes: { HSL: '14/02/2017', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'troca de curativo de queimadura ou ferida com risco de infecção',
  acessoFonte: 'RENAME 2024 / Farmácia Básica do SUS: Creme 1% disponível gratuitamente em Unidades Básicas de Saúde, salas de curativo e UPAs (Dermazine e genéricos).',
  apresentacoes: [
    {
      id: 'creme_30g',
      forma: 'creme',
      nome: 'Creme dermatológico 1% (10 mg/g - bisnaga 30 g)',
      comercial: 'Dermazine / Genérico',
      conc: '1% (10mg/g)',
      rotulo: 'Sulfadiazina de prata 1% creme dermatológico (bisnaga 30g)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 bisnaga (30 g)',
      acesso: { rename: true, fp: false },
      instrucao: 'Como fazer o curativo em casa:\n1. Lave bem as mãos com água e sabão antes de começar.\n2. Lave a queimadura ou ferida suavemente com soro fisiológico 0,9% em temperatura ambiente (não esfregue para não romper a pele nova que está cicatrizando).\n3. Seque delicadamente ao redor da ferida encostando uma gaze estéril.\n4. Aplique uma camada de creme de 1 a 2 milímetros de espessura cobrindo toda a área da lesão.\n5. Cubra com gaze estéril e prenda com atadura de crepom sem apertar demais.\n6. Troque o curativo 1 a 2 vezes ao dia (a cada 12 ou 24 horas) ou sempre que a gaze de fora estiver úmida.\n7. Nunca passe este creme dentro ou muito perto dos olhos.',
      obs: 'RENAME / SUS. Bisnaga individual prática para queimaduras de pequena a média extensão e feridas domiciliares.'
    },
    {
      id: 'creme_50g',
      forma: 'creme',
      nome: 'Creme dermatológico 1% (10 mg/g - bisnaga 50 g)',
      comercial: 'Dermazine / Genérico',
      conc: '1% (10mg/g)',
      rotulo: 'Sulfadiazina de prata 1% creme dermatológico (bisnaga 50g)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 bisnaga (50 g)',
      acesso: { rename: true, fp: false },
      instrucao: 'Como fazer o curativo em casa:\n1. Lave bem as mãos com água e sabão antes de manipular o curativo.\n2. Lave a lesão suavemente com soro fisiológico 0,9% (não esfregue).\n3. Seque a pele ao redor suavemente com gaze estéril.\n4. Espalhe uma camada de creme de 1 a 2 mm sobre toda a ferida.\n5. Cubra com gaze estéril e enfaixe sem garrotear com atadura de crepom.\n6. Troque o curativo 1 a 2 vezes ao dia conforme orientação médica até a cicatrização completa.\n7. Não aplicar nos olhos.',
      obs: 'RENAME / SUS. Apresentação recomendada para tratamentos com trocas diárias de 7 a 14 dias.'
    },
    {
      id: 'pote_400g',
      forma: 'creme',
      nome: 'Creme dermatológico 1% (10 mg/g - pote 400 g)',
      comercial: 'Dermazine / Genérico',
      conc: '1% (10mg/g)',
      rotulo: 'Sulfadiazina de prata 1% creme dermatológico (pote 400g)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 pote (400 g)',
      acesso: { rename: true, fp: false },
      instrucao: 'Aplicar uma camada uniforme de 1 a 2 mm de espessura sobre a lesão após limpeza estéril com soro fisiológico 0,9%. Utilizar espátula ou luvas estéreis para retirar o creme do pote, evitando contaminação do conteúdo. Cobrir com curativo oclusivo estéril e trocar 1 a 2 vezes ao dia.',
      obs: 'RENAME Hospitalar / Ambulatorial. Padrão para sala de curativos de UBS/UPA e grandes queimados.'
    }
  ],
  regras: [
    // 1. Adulto - Queimaduras e Úlceras Cutâneas
    {
      pub: 'adulto',
      vias: ['TOPICA'],
      apres: ['creme_30g', 'creme_50g', 'pote_400g'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 21,
      fonte: 'HSL / BULA',
      trecho: 'HSL / Bula Dermazine: Aplicar 1 a 2 vezes ao dia (a cada 12 ou 24 horas) em camada de 1 a 2 mm até a completa cicatrização da ferida.'
    },
    // 2. Pediatria (≥ 2 meses de vida)
    {
      pub: 'ped',
      se: { idadeMinMeses: 2 },
      vias: ['TOPICA'],
      apres: ['creme_30g', 'creme_50g', 'pote_400g'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 14,
      fonte: 'HSL / SBP / BULA',
      trecho: 'Crianças a partir de 2 meses de idade: Aplicar camada fina de 1 a 2 mm 1 a 2 vezes ao dia após lavagem com SF 0,9%.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 2 },
      vias: ['TOPICA'],
      msg: 'Contraindicado em recém-nascidos e lactentes menores de 2 meses de vida e prematuros (risco de absorção sistêmica da sulfadiazina com deslocamento da bilirrubina ligada à albumina e desenvolvimento de kernicterus).',
      fonte: 'BULA / SBP',
      trecho: 'Contraindicado em crianças menores de 2 meses de vida.',
      strong: true
    },
    {
      msg: 'Contraindicado no terceiro trimestre de gestação próximo ao parto (risco potencial de kernicterus no recém-nascido).',
      fonte: 'BULA',
      trecho: 'Contraindicado no final da gravidez por risco de kernicterus neonatal.',
      strong: false
    },
    {
      msg: 'Não deve ser aplicado na região dos olhos ou conjuntiva ocular (HSL).',
      fonte: 'HSL',
      trecho: 'Não deve ser aplicado na região dos olhos.',
      strong: false
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada a sulfonamidas (sulfas), à prata ou a qualquer excipiente da fórmula.',
      fonte: 'HSL / BULA',
      trecho: 'Contraindicado em casos de hipersensibilidade às sulfas ou à prata.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Prevenção e tratamento de infecções em queimaduras térmicas e químicas de 2º e 3º grau; úlceras venosas, arteriais e neuropáticas (pé diabético); escaras / lesões por pressão com risco infeccioso; feridas cirúrgicas abertas ou escoriações extensas (HSL / RENAME / Guia UBS / PSZerado).',
    administracao: 'TOPICA: Remover o curativo anterior amolecendo com SF 0,9% para não traumatizar o leito da ferida. Lavar com SF 0,9% em jato suave. Aplicar a sulfadiazina de prata em camada de 1 a 2 mm cobrindo uniformemente toda a área cruenta. Cobrir com gaze estéril e fixar com atadura de crepom sem compressão vascular. Trocar 1 a 2 vezes ao dia.',
    cuidados: 'ABSORÇÃO SISTÊMICA EM GRANDES QUEIMADOS: Se aplicada em superfícies corporais extensas (> 20% de área queimada), pode ocorrer absorção sistêmica com risco de leucopenia transitória (autolimitada), devendo-se monitorar hemograma e função renal. FOTOSSENSIBILIDADE: A prata sofre oxidação e escurecimento sob a luz solar (argiria localizada ou escurecimento do creme); manter a lesão protegida por curativo oclusivo.',
    ajuste: 'Insuficiência renal e hepática: Cautela se o uso for em grandes superfícies cruentas pelo risco de absorção sistêmica de sulfadiazina; monitorar eletrólitos e função renal.'
  }
};

export default sulfadiazinaDePrata;
