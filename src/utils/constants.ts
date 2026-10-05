export const CFG = {
  limiteSeringaMl: 20,          // até este volume: seringa (bolus lento manual); acima: bolsa
  gotasPorMl: 20,               // equipo macrogotas
  idadeAdultoPadraoMeses: 216,  // modo Adulto sem idade informada = 18 anos
  colunaQuantidade: 50          // coluna onde a quantidade sempre começa com traços longos
};

export const FONTES: Record<string, string> = {
  HSL:  'Guia Farmacêutico Hospital Sírio-Libanês',
  EINP: 'Manual Farmacêutico Einstein – Tabela de diluição IV pediátrica',
  EINA: 'Manual Farmacêutico Einstein – Tabela de diluição IV adulto',
  SBP:  'Sociedade Brasileira de Pediatria (SBP) – Documento Científico de Higiene Nasal',
  MS:   'Ministério da Saúde – Manual de Terapia de Reidratação Oral (TRO)',
  PSZERADO: 'Guia de Prescrição PSZerado (2ª Ed. 2025)',
  BULA: '⚠ Bula do fabricante (FORA das fontes HSL/Einstein; conferir no Bulário ANVISA)'
};

export const UNID_LBL: Record<string, string> = {
  mg_kg_dose: 'mg/kg/dose',
  mg_kg_dia: 'mg/kg/dia',
  mg: 'mg',
  ml: 'mL',
  gotas: 'gotas',
  mg_dia: 'mg/dia',
  sachet: 'envelope(s)',
  puff: 'jatos (puffs)'
};

export const VIA_GRUPO: Record<string, string> = {
  VO: 'Uso Oral',
  VR: 'Uso Retal',
  IM: 'Uso Intramuscular',
  EV: 'Uso Endovenoso',
  NASAL: 'Uso Nasal',
  INALATORIA: 'Uso Inalatório'
};

export const VIA_EXT: Record<string, string> = {
  VO: 'via oral',
  VR: 'via retal',
  IM: 'via intramuscular',
  EV: 'via intravenosa',
  NASAL: 'via nasal',
  INALATORIA: 'via inalatória'
};

export const num = (v: any): number | null => {
  if (v == null || v === '') return null;
  const n = parseFloat(String(v).replace(',', '.'));
  return isNaN(n) ? null : n;
};

export const fmt = (n: number | null | undefined, d = 2): string => {
  if (n == null || isNaN(n)) return '—';
  return (Math.round(n * 10 ** d) / 10 ** d).toLocaleString('pt-BR', { maximumFractionDigits: d });
};

export const fmtMg = (mg: number | null | undefined): string => `${fmt(mg, 1)} mg`;

export const norm = (s: string): string =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export const rml = (v: number): number =>
  v < 1 ? Math.round(v * 100) / 100 : Math.round(v * 10) / 10;

export const fonteNome = (d: { fontes?: Record<string, string> }, f: string): string =>
  (FONTES[f] || f) + (d.fontes && d.fontes[f] ? ` · atualizado em ${d.fontes[f]}` : '');

export function leader(l: string, r: string): string {
  const k = Math.max(3, CFG.colunaQuantidade - l.length - 2);
  return `${l} ${'—'.repeat(k)} ${r}`;
}

export function lev(a: string, b: string): number {
  const m = [...Array(b.length + 1).keys()];
  for (let i = 1; i <= a.length; i++) {
    let prev = m[0];
    m[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const t = m[j];
      m[j] = Math.min(m[j] + 1, m[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = t;
    }
  }
  return m[b.length];
}

export function regraLabel(r: { vias?: string[]; pub: string; min: number; max: number; tipo: string }): string {
  const u = UNID_LBL[r.tipo] || r.tipo;
  const v = r.min === r.max ? fmt(r.min) : `${fmt(r.min)}–${fmt(r.max)}`;
  const viasStr = r.vias && r.vias.length > 0 ? r.vias.join('/') + ' ' : '';
  return `${viasStr}${r.pub === 'ped' ? 'pediátrico' : 'adulto'}: ${v} ${u}`;
}

