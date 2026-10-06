/**
 * MEDICAMENTO: Mupirocina (Pomada 2%)
 * CLASSE: Antibacteriano Tópico
 * FONTES:
 *   - HSL: Guia Farmacêutico Hospital Sírio-Libanês (Mupirocina - Bactroban pomada 20mg/g)
 *   - Guia de Prescrição PSZerado (2025): Tratamento tópico de impetigo e infecções bacterianas superficiais
 *   - SBP (Sociedade Brasileira de Pediatria): Tratamento de impetigo crostoso em pediatria
 *   - Bulário ANVISA: Bactroban / Mupirocina pomada 20 mg/g
 */

import { Farmaco } from '../../types';

export const mupirocina: Farmaco = {
  id: 'mupirocina',
  nome: 'Mupirocina (Pomada 2%)',
  categoria: 'Dermatologia e Curativos',
  busca: 'mupirocina bactroban impetigo crosta melicerica foliculite furunculo ectima infeccao bacteriana de pele antimicrobiano topico',
  classe: 'Antibacteriano Tópico Específico (Inibidor da Isoleucil-tRNA Sintetase bacteriana)',
  dosePratica: 'Impetigo Contagioso, Foliculite e Infecções Bacterianas Cutâneas Localizadas: Limpar a área com soro fisiológico morno, amolecer e remover crostas frouxas suavemente. Aplicar uma camada fina da pomada sobre as lesões 2 a 3 vezes ao dia (a cada 8 ou 12 horas) por 5 a 7 dias (máximo 10 dias). Droga de escolha e primeira linha para impetigo com lesões localizadas em crianças e adultos.',
  fontes: { HSL: '14/02/2017', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'aplicação sobre as lesões cutâneas infectadas',
  acessoFonte: 'Padronizada em guias hospitalares (HSL: Bactroban 20 mg/g tubo 15g) e no mercado farmacêutico nacional / farmácias comunitárias como genérico de amplo acesso.',
  apresentacoes: [
    {
      id: 'pomada_15g',
      forma: 'pomada',
      nome: 'Pomada dermatológica 2% (20 mg/g - bisnaga 15 g)',
      comercial: 'Bactroban / Genérico',
      conc: '2% (20 mg/g)',
      rotulo: 'Mupirocina 2% pomada dermatológica (bisnaga 15g)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 bisnaga (15 g)',
      acesso: { rename: false, fp: false },
      instrucao: 'Como cuidar da ferida e aplicar a pomada em casa:\n1. HIGIENIZE AS MÃOS: Lave muito bem as mãos com água e sabão antes e depois de mexer nas feridas.\n2. LIMPEZA DA PELE: Se houver casquinhas com cor de mel ("crostas de impetigo"), coloque uma gaze úmida com soro fisiológico morno sobre elas por 2 a 3 minutos para amolecer. Retire delicadamente apenas as casquinhas que saírem com facilidade (NÃO puxe com força para não machucar e sangrar).\n3. SECAGEM: Seque delicadamente ao redor com gaze estéril ou toalha limpa separada.\n4. APLICAÇÃO: Passe uma camada fina da pomada cobrindo as feridas 2 a 3 vezes ao dia.\n5. PROTEÇÃO: A área tratada pode ser deixada ao ar livre ou coberta com uma gaze limpa se houver risco da criança coçar.\n6. DURAÇÃO: Use por 5 a 7 dias (não passe de 10 dias).\n7. CUIDADO COM CONTAGIO: Mantenha as toalhas e roupas de cama do paciente separadas dos demais membros da casa até as feridas secarem.',
      obs: 'Droga de primeira escolha para impetigo não bolhoso e bolhoso em lesões isoladas. Excelente ação contra Staphylococcus aureus (incluindo MSSA e muitos MRSA) e Streptococcus pyogenes.'
    }
  ],
  regras: [
    // 1. Adultos
    {
      pub: 'adulto',
      vias: ['TOPICA'],
      apres: ['pomada_15g'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [2, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 10,
      fonte: 'HSL / PSZERADO / BULA',
      trecho: 'HSL: Aplicar uma fina camada sobre a área afetada até 3 vezes/dia, por no máximo 10 dias. Pode ser coberta com curativo oclusivo ou não.'
    },
    // 2. Pediatria (Lactentes a partir de 2 meses e crianças)
    {
      pub: 'ped',
      se: { idadeMinMeses: 2 },
      vias: ['TOPICA'],
      apres: ['pomada_15g'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [2, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 10,
      fonte: 'SBP / HSL / BULA',
      trecho: 'Crianças a partir de 2 meses a 1 ano de idade: Aplicar fina camada 2 a 3 vezes ao dia por 5 a 7 dias (máximo 10 dias).'
    }
  ],
  contra: [
    {
      vias: ['TOPICA'],
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada à mupirocina ou a qualquer componente do veículo (a base da pomada contém polietilenoglicol).',
      fonte: 'BULA / HSL',
      trecho: 'Hipersensibilidade conhecida à mupirocina ou formulação.',
      strong: true
    },
    {
      vias: ['TOPICA'],
      msg: 'Esta apresentação dermatológica NÃO deve ser aplicada nos olhos nem no interior da cavidade nasal (para descolonização nasal de MRSA é necessária a formulação nasal própria; o veículo com polietilenoglicol da pomada dérmica não é adequado para mucosas internas).',
      fonte: 'HSL / BULA',
      trecho: 'Não é indicado para uso oftálmico ou intranasal.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Tratamento de infecções bacterianas cutâneas primárias e secundárias causadas por Staphylococcus aureus e Streptococcus pyogenes: impetigo contagioso crostoso ou bolhoso, ectima, foliculite superficial, furunculose e pequenas feridas cirúrgicas ou traumáticas infectadas.',
    administracao: 'TOPICA: Aplicar pequena quantidade em camada fina diretamente sobre as lesões limpas 2 a 3 vezes ao dia. Pode ocluir com gaze estéril se conveniente.',
    cuidados: 'ATENÇÃO EM LESÕES MUITO EXTENSAS OU INSUFICIÊNCIA RENAL: Como o veículo contém macrogol (polietilenoglicol), a aplicação em queimaduras ou áreas abertas extensas em pacientes com insuficiência renal moderada a grave deve ser evitada pelo risco teórico de absorção sistêmica do veículo.',
    ajuste: 'Insuficiência renal e hepática: Aplicação em pequenas lesões não acarreta absorção relevante; não requer ajuste de dose.'
  }
};

export default mupirocina;
