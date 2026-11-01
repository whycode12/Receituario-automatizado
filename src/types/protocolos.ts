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
  unidade: UnidadeDose | 'g' | 'UI' | 'ampola';
  via: Via;
  modo?: ModoUso;
  tipoUso?: 'agora' | 'continuo' | 'se_necessario';
  freq?: number;
  intervalo?: number;
  condicao?: string;
  dias?: number;
  usoContinuo?: boolean;
  orientacaoExtra?: string;
  observacaoUso?: string;
}

export interface OpcaoPrescricao {
  id: string;
  titulo: string;
  subtitulo?: string;
  itens: ProtocoloItemFarmaco[];
}

export interface ObservacoesClinicas {
  criteriosGravidade?: string[];
  criteriosInternacao?: string[];
  alertasGravidade?: string[];
  alertasImportantes?: string | string[];
  condutaGeral?: string;
  examesSolicitar?: string[];
  examesSugeridos?: string | string[];
  examesRecomendados?: string[];
  orientacoesNaoFarmacologicas?: string[];
  classificacao?: string;
  notas?: string[];
}

export interface ProtocoloConduta {
  id: string;
  titulo: string;
  subtitulo?: string;
  categoria: CategoriaProtocolo;
  subcategoria?: string;
  paginaPdf: number;
  descricao?: string;
  tags?: string[];
  opcoesPrescricao: OpcaoPrescricao[];
  observacoesClinicas?: ObservacoesClinicas;
}
