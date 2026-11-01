import { ProtocoloConduta } from '../../types/protocolos';
import { protocolosRespiratorio } from './respiratorio';
import { protocolosGastrointestinal } from './gastrointestinal';
import { protocolosOculares } from './oculares';
import { protocolosCirurgicas } from './cirurgicas';
import { protocolosCardiovascular } from './cardiovascular';
import { protocolosUrinarioEndocrino } from './urinario_endocrino';
import { protocolosInfecciosasDermato } from './infecciosas_dermato';
import { protocolosNeuroPsiquiatria } from './neuro_psiquiatria';
import { protocolosSaudeMulher } from './saude_mulher';

export const PROTOCOLOS: ProtocoloConduta[] = [
  ...protocolosRespiratorio,
  ...protocolosOculares,
  ...protocolosGastrointestinal,
  ...protocolosCirurgicas,
  ...protocolosCardiovascular,
  ...protocolosUrinarioEndocrino,
  ...protocolosInfecciosasDermato,
  ...protocolosNeuroPsiquiatria,
  ...protocolosSaudeMulher
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
