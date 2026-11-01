import { ProtocoloConduta } from '../../types/protocolos';
import { protocolosRespiratorio } from './respiratorio';
import { protocolosGastrointestinal } from './gastrointestinal';

export const PROTOCOLOS: ProtocoloConduta[] = [
  ...protocolosRespiratorio,
  ...protocolosGastrointestinal
];

export const CATEGORIAS_PROTOCOLOS = [
  'Todas',
  'Sistema Respiratório',
  'Sistema Gastrointestinal',
  'Alterações Oculares',
  'Alterações Cirúrgicas',
  'Doenças Cardiovasculares',
  'Doenças Endocrinológicas',
  'Doenças Infecciosas',
  'Sistema Urinário',
  'Doenças Dermatológicas e Alérgicas',
  'Sistema Nervoso e Psiquiátrico',
  'Sistema Musculoesquelético',
  'Saúde da Mulher',
  'Emergências e Outros'
] as const;
