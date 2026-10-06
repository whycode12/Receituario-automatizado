import { Farmaco } from '../../types';

export const colagenase: Farmaco = {
  id: 'colagenase',
  nome: 'Colagenase',
  categoria: 'Dermatologia e Curativos',
  busca: 'colagenase kollagenase iruxol pomada cloranfenicol desbridamento escara ulcera ferida necrose esfacelo desbridante',
  classe: 'Desbridante Enzimático Tópico Proteolítico',
  dosePratica: 'Desbridamento Enzimático de Feridas com Tecido Desvitalizado (Necrose/Esfacelo): Higienizar a lesão com soro fisiológico 0,9% morno (manter o leito levemente úmido, pois a enzima necessita de umidade para sua ativação proteolítica). Proteger a pele sadia ao redor com pasta de óxido de zinco ou vaselina. Aplicar a pomada de colagenase em camada de cerca de 2 mm de espessura diretamente sobre o tecido necrótico 1 vez ao dia (ou 2x/dia se grande quantidade de tecido desvitalizado). Cobrir com gaze estéril levemente umedecida em SF 0,9% e atadura. NUNCA associar com antissépticos (iodo, clorexidina, prata), sabões ou detergentes, pois inativam a enzima.',
  fontes: { HSL: '30/09/2021', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'troca diária de curativo de ferida com necrose ou esfacelo',
  acessoFonte: 'RENAME 2024 / Farmácia Básica do SUS: Pomada 0,6 U/g com ou sem cloranfenicol disponível na Atenção Primária, salas de curativo e UPAs (Kollagenase, Iruxol e genéricos).',
  apresentacoes: [
    {
      id: 'pomada_pura_30g',
      forma: 'pomada',
      nome: 'Pomada dermatológica 0,6 U/g pura (bisnaga 30 g)',
      comercial: 'Kollagenase / Genérico',
      conc: '0,6 U/g',
      rotulo: 'Colagenase 0,6 U/g pomada dermatológica (bisnaga 30g)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 bisnaga (30 g)',
      acesso: { rename: true, fp: false },
      instrucao: 'Como fazer o curativo com colagenase em casa:\n1. Lave bem as mãos com água e sabão antes de tocar no curativo.\n2. Limpe a ferida suavemente usando apenas soro fisiológico 0,9% (não esfregue para não machucar o fundo da ferida).\n3. Importante: deixe a ferida levemente úmida com o soro (a pomada só funciona e amolece a casca escura se houver umidade).\n4. Se possível, passe uma fina camada de pomada branca (óxido de zinco ou vaselina) na pele saudável em volta da ferida para proteger as bordas.\n5. Aplique a pomada de colagenase em camada de cerca de 2 milímetros apenas sobre as partes escuras ou amareladas da ferida (tecido morto).\n6. Cubra com gaze umedecida com algumas gotas de soro fisiológico e enfaixe com atadura de crepom sem apertar demais.\n7. Troque o curativo 1 vez ao dia (ou 2 vezes ao dia se orientado pelo médico).\n8. ATENÇÃO: NUNCA use sabões fortes, álcool, iodo ou outras pomadas junto com a colagenase, pois eles anulam o efeito da enzima.',
      obs: 'RENAME / SUS. Formulação pura indicada para limpeza enzimática e desbridamento de feridas sem sinais evidentes de infecção bacteriana ativa.'
    },
    {
      id: 'pomada_cloranfenicol_30g',
      forma: 'pomada',
      nome: 'Pomada dermatológica 0,6 U/g + Cloranfenicol 1% (bisnaga 30 g)',
      comercial: 'Iruxol / Kollagenase com Cloranfenicol / Genérico',
      conc: '0,6 U/g + 10 mg/g',
      rotulo: 'Colagenase 0,6 U/g + Cloranfenicol 10 mg/g pomada (bisnaga 30g)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 bisnaga (30 g)',
      acesso: { rename: true, fp: false },
      instrucao: 'Como fazer o curativo em casa:\n1. Lave as mãos com água e sabão.\n2. Lave a ferida delicadamente com soro fisiológico 0,9% morno (não secar totalmente a ferida, mantendo-a levemente umedecida).\n3. Proteja a pele sã ao redor com óxido de zinco ou vaselina.\n4. Aplique a pomada sobre o tecido desvitalizado/esfacelo em camada de 2 mm de espessura.\n5. Cubra com gaze umedecida em soro fisiológico e prenda com atadura de crepom.\n6. Troque o curativo 1 vez ao dia (ou a cada 12 horas conforme prescrição médica).\n7. Não usar antissépticos locais (iodo, PVPI ou prata) junto à aplicação, pois inibem a ação da colagenase.',
      obs: 'Associação com cloranfenicol: adiciona cobertura antibacteriana tópica de amplo espectro para feridas colonizadas ou infectadas secundariamente.'
    }
  ],
  regras: [
    // 1. Adulto - Desbridamento Enzimático Tópico
    {
      pub: 'adulto',
      vias: ['TOPICA'],
      apres: ['pomada_pura_30g', 'pomada_cloranfenicol_30g'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 28,
      fonte: 'HSL / BULA',
      trecho: 'HSL / Bula Kollagenase: Aplicar camada de cerca de 2 mm de espessura 1 vez ao dia (podendo aumentar para 2 vezes ao dia para acelerar o desbridamento enzimático). Troca diária de curativo com gaze umedecida em SF 0,9%.'
    },
    // 2. Pediatria - Uso Tópico Supervisionado
    {
      pub: 'ped',
      vias: ['TOPICA'],
      apres: ['pomada_pura_30g', 'pomada_cloranfenicol_30g'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 14,
      fonte: 'HSL / BULA',
      trecho: 'Pediatria: Aplicar camada de 2 mm sobre a área com necrose/esfacelo 1 vez ao dia sob supervisão médica.'
    }
  ],
  contra: [
    {
      msg: 'INATIVAÇÃO ENZIMÁTICA POR SABÕES, ANTISSÉPTICOS E METAIS PESADOS: A atividade catalítica da colagenase é completamente inibida na presença de sabões, detergentes, antissépticos locais e compostos à base de metais pesados (ex: prata, iodo/PVPI, mercúrio, pomadas de zinco no leito da lesão). Lavar a ferida exclusivamente com soro fisiológico 0,9% antes da aplicação.',
      fonte: 'HSL / BULA',
      trecho: 'Não deve ser utilizado na presença de antissépticos, metais pesados, detergentes e sabões, pois inibem a atividade da colagenase.',
      strong: false
    },
    {
      msg: 'Não é indicado para o tratamento de queimaduras extensas (HSL).',
      fonte: 'HSL',
      trecho: 'Esse medicamento não é indicado para pacientes com queimaduras extensas.',
      strong: false
    },
    {
      msg: 'A presença de umidade no leito da lesão é obrigatória para a atividade enzimática; feridas ou crostas necróticas secas devem ser amolecidas previamente com compressas úmidas de soro fisiológico 0,9% antes da aplicação (HSL).',
      fonte: 'HSL',
      trecho: 'A presença de umidade aumenta a atividade enzimática. Material necrótico seco deve ser amolecido primeiro com compressas úmidas.',
      strong: false
    },
    {
      msg: 'Reavaliação clínica em 14 dias: se não for observada redução do tecido necrótico ou melhora do leito da ferida após 14 dias de uso contínuo, descontinuar o tratamento e reavaliar a estratégia de desbridamento (HSL).',
      fonte: 'HSL',
      trecho: 'Se não houver melhora em 14 dias, o tratamento deve ser descontinuado.',
      strong: false
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade conhecida à colagenase, ao cloranfenicol (na fórmula associada) ou a qualquer componente da fórmula.',
      fonte: 'HSL / BULA',
      trecho: 'Contraindicado em hipersensibilidade aos componentes da fórmula.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Limpeza enzimática, desbridamento proteolítico e remoção de crostas necróticas e esfacelo em feridas crônicas e agudas: lesões por pressão (escaras), úlceras venosas de perna, úlceras arteriais e diabéticas, feridas pós-operatórias deiscências e necrose tecidual superficial (HSL / Bula / Guia UBS).',
    administracao: 'TOPICA: Remover o curativo anterior umedecendo com SF 0,9%. Irrigar o leito com SF 0,9% morno em jato suave. O tecido necrótico amolecido e desprendido deve ser delicadamente removido a cada troca. Proteger as bordas com óxido de zinco ou vaselina. Aplicar a colagenase em camada de 2 mm sobre a área necrótica. Cobrir com gaze estéril levemente umedecida em SF 0,9% e fixar com atadura de crepom.',
    cuidados: 'POTENCIALIZANDO O EFEITO: Em necroses crostosas espessas, escarificar delicadamente a crosta no centro com bisturi estéril facilita a penetração da enzima por baixo e por cima da lesão. NÃO MISTURAR COM PRATA OU PVPI: A sulfadiazina de prata e o iodo inativam a colagenase imediatamente.',
    ajuste: 'Insuficiência renal e hepática: A absorção sistêmica da colagenase aplicada topicamente em feridas é desprezível; não requer ajuste de dose.'
  }
};

export default colagenase;
