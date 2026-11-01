import { Via, ModoUso, UnidadeDose } from './index';

export type CategoriaProtocolo =
  | 'Sistema Respiratório'
  | 'Alterações Oculares'
  | 'Sistema Gastrointestinal'
  | 'Alterações Cirúrgicas'
  | 'Doenças Cardiovasculares'
  | 'Doenças Endocrinológicas'
  | 'Doenças Infecciosas'
  | 'Sistema Urinário'
  | 'Doenças Dermatológicas e Alérgicas'
  | 'Sistema Nervoso e Psiquiátrico'
  | 'Sistema Musculoesquelético'
  | 'Saúde da Mulher'
  | 'Emergências e Outros';

export interface ProtocoloItemFarmaco {
  id?: string;
  farmacoId: string;
  apresentacaoId?: string;
  forma?: string;
  dose: number;
  unidade: UnidadeDose | 'g';
  via: Via;
  modo: ModoUso;
  freq: number;
  condicao?: string;
  dias?: number;
  usoContinuo?: boolean;
  orientacaoExtra?: string;
}

export interface OpcaoPrescricao {
  id: string;
  titulo: string;
  subtitulo?: string;
  itens: ProtocoloItemFarmaco[];
}

export interface ObservacoesClinicas {
  criteriosGravidade?: string[];
  examesSolicitar?: string[];
  orientacoesNaoFarmacologicas?: string[];
  classificacao?: string;
  notas?: string[];
}

export interface ProtocoloConduta {
  id: string;
  titulo: string;
  categoria: CategoriaProtocolo;
  subcategoria?: string;
  paginaPdf: number;
  descricao?: string;
  opcoesPrescricao: OpcaoPrescricao[];
  observacoesClinicas?: ObservacoesClinicas;
}
