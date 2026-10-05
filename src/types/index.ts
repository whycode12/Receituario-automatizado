export type Pub = 'adulto' | 'ped';
export type Via = 'VO' | 'VR' | 'IM' | 'EV' | 'NASAL' | 'INALATORIA';
export type ModoUso = 'agora' | 'sn' | 'continuo';
export type FormaFarmaceutica = 'cp' | 'cap' | 'gotas' | 'sol' | 'amp' | 'fap' | 'sup' | 'sachet' | 'sol_nasal' | 'sol_sro' | 'spray' | 'inal';
export type UnidadeDose = 'mg' | 'mg_kg_dose' | 'mg_kg_dia' | 'ml' | 'gotas' | 'unid' | 'mg_dia' | 'sachet' | 'puff';

export interface Paciente {
  pub: Pub;
  peso: number | null;
  anos: number | null;
  meses: number | null;
  idadeM: number | null; // idade total em meses
}

export interface CondicaoRegra {
  idadeMinMeses?: number;
  idadeMaxMeses?: number;
  idadeMinAnos?: number;
  idadeMaxAnos?: number;
  pesoMin?: number;
  pesoMax?: number; // exclusivo
  ou?: CondicaoRegra[];
}

export interface AcessoSUS {
  rename: boolean;
  fp: boolean;
}

export interface Apresentacao {
  id: string;
  forma: FormaFarmaceutica;
  nome: string;
  comercial?: string;
  conc: string;
  rotulo: string | ((p: Paciente, a?: any) => string);
  mg?: number;
  mgml?: number;
  gotasml?: number;
  volml?: number;
  reconstMl?: number;
  reconstDil?: string;
  frac?: number;
  frascoMl?: number;
  vias: Via[];
  disp: string | ((p: Paciente, a?: any) => string);
  acesso?: AcessoSUS;
  instrucao?: string | ((p: Paciente, a?: any) => string);
  obs?: string;
  unidades?: UnidadeDose[];
}

export interface RegraDose {
  pub: Pub;
  se?: CondicaoRegra;
  vias?: Via[];
  apres?: string[];
  tipo: 'mg' | 'mg_kg_dose' | 'mg_kg_dia' | 'mg_dia' | 'ml' | 'sachet';
  min: number;
  max: number;
  padrao: number;
  dosesDia?: [number, number];
  dosesPadrao?: number;
  intervaloFixo?: number;
  duracaoMaxDias?: number;
  maxDoseMg?: number;
  fonte: string;
  trecho: string;
}

export interface MaximoDose {
  pub: Pub;
  se?: CondicaoRegra;
  vias?: Via[];
  apres?: string[];
  tipo: 'mg_dia' | 'mg_kg_dia' | 'mg_dia_peso';
  valor?: number;
  faixas?: [number, number, number][]; // [pesoMin, pesoMax, maxMgDia]
  fonte: string;
  trecho: string;
}

export interface Contraindicacao {
  pub?: Pub;
  se?: CondicaoRegra;
  vias?: Via[];
  apres?: string[];
  msg: string;
  fonte: string;
  trecho: string;
  strong?: boolean;
}

export interface RegraEV {
  diluentes: string[];
  concMax?: number;
  concUsualPed?: number;
  concUsual?: number;
  volPadraoAdulto?: [number, number][]; // [ateMg, volMl]
  volOpcoes: number[];
  volMin?: number;
  velMaxMgMin?: number;
  tempo?: {
    adulto?: { min?: number; max?: number; padrao?: number; txt?: string };
    ped?: { min?: number; max?: number; padrao?: number; txt?: string };
  };
  fonteTxt: string;
}

export interface ConflitoFonte {
  vias?: Via[];
  txt: string;
}

export interface NotasFarmaco {
  indicacao: string;
  administracao: string;
  cuidados: string;
  ajuste: string;
  dosePratica?: string;
}

export interface Farmaco {
  id: string;
  nome: string;
  categoria?: string;
  busca: string;
  classe: string;
  fontes: Record<string, string>;
  snPadrao?: string;
  acessoFonte?: string;
  dosePratica?: string;
  apresentacoes: Apresentacao[];
  regras: RegraDose[];
  maximos?: MaximoDose[];
  contra?: Contraindicacao[];
  ev?: RegraEV;
  conflitos?: ConflitoFonte[];
  notas: NotasFarmaco;
}

export interface Arredondamento {
  mg: number;
  ml?: number | null;
  txt: string;
  whole: boolean;
  q?: number;
  k?: number;
}

export interface CalculoEV {
  vDose: number;
  vol: number;
  conc: number;
  t: number | null;
  tMin: number | null;
  tMax: number | null;
  tTxt: string;
  seringa: boolean;
  gtt: number | null;
  mlh: number | null;
}

export interface AlertaClinico {
  t: string;
  f?: string;
  tr?: string;
  strong?: boolean;
}

export interface ResultadoCalculo {
  R: RegraDose[];
  dmin: number;
  dmax: number;
  n: number;
  lo: number | null;
  hi: number | null;
  dailyMax: number | null;
  dailySrc: { m: MaximoDose; v: number } | null;
  mgRaw: number | null;
  arr: Arredondamento | null;
  mg: number | null;
  ev: CalculoEV | null;
  alerts: AlertaClinico[];
  notes: AlertaClinico[];
  infos: AlertaClinico[];
}

export interface ItemReceita {
  grupo: string;
  sub: string;
  texto: string;
}
