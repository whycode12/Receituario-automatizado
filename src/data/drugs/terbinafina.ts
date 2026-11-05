import { Farmaco } from '../../types';

export const terbinafina: Farmaco = {
  id: 'terbinafina',
  nome: 'Cloridrato de Terbinafina',
  categoria: 'Dermatologia e Antifúngicos',
  busca: 'terbinafina lamisil antimicotico tinha corporis pedis onicomicose micose de unha creme 250mg',
  classe: 'Antifúngico Alilamina de Amplo Espectro Fungicida',
  dosePratica: 'Tinea corporis / cruris: VO: 250 mg 1x ao dia por 2 a 4 semanas. Tópico: aplicar o creme 1% 1 a 2x/dia por 1 a 2 semanas. Onicomicose: 250 mg 1x ao dia por 6 semanas (mãos) a 12 semanas (pés).',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  modoPadrao: 'continuo',
  diasPadrao: 14,
  usoContinuoPadrao: false,
  snPadrao: 'micoses cutâneas, tinha corporal ou onicomicose',
  acessoFonte: 'RENAME 2024 / Farmácia Básica: Comprimido de 250 mg e creme 10 mg/g (1%) disponíveis na rede pública.',
  apresentacoes: [
    {
      id: 'cp250',
      forma: 'cp',
      nome: 'Comprimido 250 mg',
      comercial: 'Lamisil®, Genérico',
      conc: '250 mg',
      rotulo: 'Cloridrato de Terbinafina 250 mg comprimido',
      mg: 250,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 28 comprimidos',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar 1 comprimido 1x ao dia com água, no mesmo horário, com ou sem alimentos, durante 28 dias seguidos.',
      obs: 'Ação fungicida potente contra dermatófitos (Trichophyton, Microsporum e Epidermophyton).'
    },
    {
      id: 'creme_20g',
      forma: 'creme',
      nome: 'Creme dermatológico 1% (10 mg/g - bisnaga 20 g)',
      comercial: 'Lamisil®, Genérico',
      conc: '1% (10 mg/g)',
      rotulo: 'Cloridrato de Terbinafina 1% creme dermatológico (20 g)',
      mg: 1,
      volml: 20,
      frascoMl: 20,
      vias: ['TOPICA'],
      disp: '1 bisnaga (20 g)',
      acesso: { rename: true, fp: false },
      instrucao: 'Lavar e secar bem a área afetada antes da aplicação. Aplicar uma camada fina sobre a lesão e 1 a 2 cm ao redor dela, 1 a 2 vezes ao dia, massageando suavemente, durante 2 a 4 semanas.',
      obs: 'Manter a pele da região bem arejada e seca.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 250,
      max: 250,
      padrao: 250,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 14,
      fonte: 'PSZERADO',
      trecho: '250 mg VO 1x ao dia por 2 a 4 semanas para micoses cutâneas.'
    },
    {
      pub: 'adulto',
      vias: ['TOPICA'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 2],
      intervaloFixo: 12,
      fonte: 'PSZERADO',
      trecho: 'Aplicar creme 1% 1 a 2x ao dia nas áreas afetadas.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 250,
      fonte: 'HSL',
      trecho: 'Dose máxima oral: 250 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em insuficiência hepática aguda ou crônica ativa e insuficiência renal grave (ClCr < 50 mL/min).',
      fonte: 'BULA',
      trecho: 'Doença hepática ativa ou insuficiência renal grave.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Tratamento de infecções fúngicas da pele e unhas causadas por dermatófitos: tinea corporis, tinea cruris, tinea pedis e onicomicoses.',
    administracao: 'Via oral 1x ao dia ou aplicação tópica 1 a 2x ao dia.',
    cuidados: 'Monitorar transaminases hepáticas em tratamentos prolongados (> 4 a 6 semanas).',
    ajuste: 'Evitar se ClCr < 50 mL/min.'
  }
};

export default terbinafina;
