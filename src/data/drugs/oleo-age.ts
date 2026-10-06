import { Farmaco } from '../../types';

export const oleoAge: Farmaco = {
  id: 'oleo-age',
  nome: 'Óleo AGE (Ácidos Graxos Essenciais / Óleo Cicatrizante)',
  categoria: 'Dermatologia e Curativos',
  busca: 'oleo age acidos graxos essenciais dersani linoleico tcm vitamina a e escara lesao por pressao curativo cicatrizacao ferida',
  classe: 'Protetor Cutâneo, Hidratante e Estimulador da Cicatrização Tecidual',
  dosePratica: '1. Prevenção de Lesões por Pressão (Escaras) em Acamados: Aplicar algumas gotas nas áreas de maior pressão (sacro/cóccix, calcanhares, quadris e cotovelos) 2 a 3 vezes ao dia após o banho, espalhando suavemente com movimentos leves (NUNCA massagear com força sobre proeminências ósseas). 2. Curativo de Feridas Abertas em Fase de Granulação: Limpar com soro fisiológico 0,9%, embeber gaze estéril com o óleo AGE, cobrir a ferida e fixar com atadura (trocar o curativo a cada 24 horas). 3. Hidratação da Pele Seca e Perilesional: Aplicar fina camada 1 a 2 vezes ao dia.',
  fontes: { MS: '2023', BULA: '04/10/2026' },
  snPadrao: 'prevenção de lesões por pressão ou troca de curativo de ferida',
  acessoFonte: 'Padronizado nos protocolos de prevenção e tratamento de feridas do SUS / Atenção Básica e hospitais (Dersani, Curatec AGE, Mophil AGE e similares).',
  apresentacoes: [
    {
      id: 'frasco_100ml',
      forma: 'sol',
      nome: 'Frasco aplicador 100 mL com bico dosador',
      comercial: 'Dersani / Curatec AGE / Mophil AGE / Genérico',
      conc: 'Ácidos graxos essenciais + TCM + Vitaminas A e E',
      rotulo: 'Óleo com Ácidos Graxos Essenciais (AGE) frasco 100 mL',
      mg: 1,
      frascoMl: 100,
      vias: ['TOPICA'],
      disp: '1 frasco (100 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Como usar em casa:\n1. PARA PREVENIR ESCARAS (LESÕES POR PRESSÃO EM ACAMADOS):\n- Após o banho e com a pele limpa e seca, pingue algumas gotas do óleo nas áreas do corpo que ficam mais apoiadas na cama (osso do quadril, calcanhares, cóccix/bumbum e cotovelos).\n- Espalhe suavemente com as pontas dos dedos até a pele absorver.\n- IMPORTANTE: NÃO esfregue nem faça massagem com força sobre os ossos, pois a massagem forte machuca a circulação da pele.\n- Repita a aplicação 2 a 3 vezes ao dia.\n\n2. PARA CURATIVO EM FERIDAS ABERTAS:\n- Lave a ferida com soro fisiológico 0,9% morno em jato suave.\n- Umedeça uma gaze estéril com o óleo AGE e coloque diretamente sobre a ferida.\n- Cubra com gaze seca e prenda com fita microporosa ou atadura sem apertar demais.\n- Troque o curativo 1 vez ao dia.',
      obs: 'Enriquecido com ácido linoleico, ácido linolênico, triglicerídeos de cadeia média (TCM) e vitaminas A e E para revitalização e integridade cutânea.'
    },
    {
      id: 'frasco_200ml',
      forma: 'sol',
      nome: 'Frasco aplicador 200 mL com bico dosador',
      comercial: 'Dersani / Curatec AGE / Genérico',
      conc: 'Ácidos graxos essenciais + TCM + Vitaminas A e E',
      rotulo: 'Óleo com Ácidos Graxos Essenciais (AGE) frasco 200 mL',
      mg: 1,
      frascoMl: 200,
      vias: ['TOPICA'],
      disp: '1 frasco (200 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Como usar em casa:\n1. Higienizar a pele com sabonete neutro e água morna.\n2. Para prevenção de escaras em pessoas acamadas: aplicar 3 a 5 gotas nas regiões de apoio (cóccix, calcanhares, quadris) 2 a 3 vezes ao dia, espalhando com movimentos suaves e circulares, sem esfregar com força.\n3. Para feridas limpas: lavar com soro fisiológico 0,9%, embeber gaze com o óleo e cobrir a lesão (troca diária).\n4. Manter o frasco fechado em temperatura ambiente e longe do sol.',
      obs: 'Apresentação econômica recomendada para pacientes com necessidade de cuidados crônicos domiciliares prolongados.'
    }
  ],
  regras: [
    // 1. Adulto - Prevenção de Escaras e Curativos
    {
      pub: 'adulto',
      vias: ['TOPICA'],
      apres: ['frasco_100ml', 'frasco_200ml'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 3],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'MS / SOBEST',
      trecho: 'Manual MS / SOBEST: Aplicar 2 a 3 vezes ao dia nas áreas de pressão para manter a hidratação e trofismo da pele íntegra, ou 1 vez ao dia como cobertura primária em gaze estéril para feridas em fase de granulação.'
    },
    // 2. Pediatria - Prevenção e Hidratação Cutânea
    {
      pub: 'ped',
      vias: ['TOPICA'],
      apres: ['frasco_100ml', 'frasco_200ml'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      fonte: 'MS',
      trecho: 'Pediatria: Aplicar fina camada 1 a 2 vezes ao dia sobre a pele limpa e seca para restauração de barreira.'
    }
  ],
  contra: [
    {
      msg: 'PROIBIDA MASSAGEM VIGOROSA SOBRE PROEMINÊNCIAS ÓSSEAS: A massagem vigorosa ou fricção mecânica sobre áreas de apoio ou regiões avermelhadas (sacro, trocânteres, calcâneos) provoca cisalhamento e rotura dos capilares dérmicos, acelerando a necrose tecidual e a formação de úlceras por pressão (SOBEST / Ministério da Saúde). Espalhar o óleo suavemente sem esfregar.',
      fonte: 'MS / SOBEST',
      trecho: 'Não realizar massagem de conforto sobre proeminências ósseas e hiperemias não branqueáveis.',
      strong: true
    },
    {
      msg: 'Não indicado como cobertura primária isolada em feridas com infecção bacteriana ativa purulenta abundante ou necrose crostosa seca (nestes casos, utilizar antimicrobianos tópicos como sulfadiazina de prata ou desbridantes enzimáticos como colagenase).',
      fonte: 'MS',
      trecho: 'Não indicado como cobertura exclusiva em feridas francamente infectadas.',
      strong: false
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada a qualquer um dos componentes da formulação (ácido linoleico, lecitina de soja, vitaminas A ou E).',
      fonte: 'BULA',
      trecho: 'Contraindicado em casos de hipersensibilidade aos componentes da fórmula.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Prevenção de lesões por pressão (escaras) em pacientes acamados, restritos ao leito ou cadeira de rodas; estímulo da angiogênese e cicatrização de feridas agudas e crônicas limpas em fase de granulação tecidual (úlceras venosas, arteriais, neuropáticas e deiscências); hidratação e restauração da barreira lipídica da pele perilesional ressecada (Ministério da Saúde / SOBEST / SOBENFE).',
    administracao: 'TOPICA: Na prevenção: espalhar suavemente algumas gotas nas áreas de proeminências ósseas e pele ressecada após o banho, 2 a 3 vezes ao dia. No curativo de feridas: irrigar com SF 0,9% morno, aplicar gaze estéril embebida com óleo AGE sobre o leito, ocluir com gaze secundária e fixar com atadura/fita microporosa, trocando diariamente.',
    cuidados: 'MUDANÇA DE DECÚBITO É FUNDAMENTAL: O óleo AGE previne o ressecamento e melhora o trofismo da pele, mas NÃO substitui a mudança de decúbito a cada 2 horas e o alívio contínuo de pressão com colchão adequado (casca de ovo ou pneumático).',
    ajuste: 'Insuficiência renal e hepática: Uso tópico de barreira sem absorção sistêmica significativa; não requer ajuste posológico.'
  }
};

export default oleoAge;
