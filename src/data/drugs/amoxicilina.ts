import { Farmaco } from '../../types';

export const amoxicilina: Farmaco = {
  id: 'amoxicilina',
  nome: 'Amoxicilina',
  busca: 'amoxil amoxicilina penicilina',
  classe: 'Antimicrobiano, Penicilina',
  fontes: { HSL: '10/12/2018', EINP: '', EINA: '' },
  snPadrao: 'infecção bacteriana',
  acessoFonte: 'RENAME 2024 (Componente Básico): cápsula 500 mg, comprimido 500 mg e suspensão oral 50 mg/mL (250 mg/5 mL). Farmácia Popular: não consta.',
  apresentacoes: [
    {
      id: 'cap500',
      forma: 'cap',
      nome: 'Cápsula 500 mg',
      comercial: 'Amoxil',
      conc: '500mg',
      rotulo: 'Amoxicilina 500mg',
      mg: 500,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Ingerir com água, com ou sem alimentos (HSL).'
    },
    {
      id: 'cp500',
      forma: 'cp',
      nome: 'Comprimido 500 mg',
      conc: '500mg',
      rotulo: 'Amoxicilina 500mg',
      mg: 500,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Ingerir com água, com ou sem alimentos.'
    },
    {
      id: 'susp50',
      forma: 'sol',
      nome: 'Suspensão oral 50 mg/mL (250 mg/5 mL) – 150 mL',
      comercial: 'Amoxil',
      conc: '50mg/mL',
      rotulo: 'Amoxicilina 50mg/mL suspensão oral',
      mgml: 50,
      frascoMl: 150,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      obs: 'Reconstituição com água filtrada até a marca. Após reconstituída: estável por 14 dias em temperatura ambiente (HSL).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 250,
      max: 500,
      padrao: 500,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'Adulto — Oral: 250-500mg a cada 8 horas.'
    },
    {
      pub: 'ped',
      se: { idadeMaxMeses: 3 },
      vias: ['VO'],
      tipo: 'mg_kg_dia',
      min: 20,
      max: 30,
      padrao: 30,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      maxDoseMg: 500,
      fonte: 'HSL',
      trecho: 'Pediatria — Oral: ≤ 3 meses: 20-30mg/kg/dia, dividida a cada 12 horas. Dose máxima 500mg/dose.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 3, pesoMax: 40 },
      vias: ['VO'],
      tipo: 'mg_kg_dia',
      min: 20,
      max: 100,
      padrao: 50,
      dosesDia: [2, 3],
      dosesPadrao: 3,
      maxDoseMg: 500,
      fonte: 'HSL',
      trecho: 'Pediatria — Oral: > 3 meses e < 40kg: 20-100mg/kg/dia em doses divididas a cada 8-12 horas. Dose máxima: 500mg/dose.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 3, idadeMaxAnos: 10, pesoMax: 40 },
      vias: ['VO'],
      tipo: 'mg',
      min: 125,
      max: 250,
      padrao: 250,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Pediatria — Oral: < 10 anos: 125-250mg a cada 8 horas.'
    },
    {
      pub: 'ped',
      se: { pesoMin: 40 },
      vias: ['VO'],
      tipo: 'mg',
      min: 250,
      max: 500,
      padrao: 500,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Pediatria — Oral: ≥ 40 kg: dose de adulto (250-500mg a cada 8 horas).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 40 }] },
      tipo: 'mg_dia',
      valor: 6000,
      fonte: 'HSL',
      trecho: 'Dose Máxima Adulto: 6g ao dia.'
    }
  ],
  notas: {
    indicacao: 'Tratamento de otite média, sinusite, infecções respiratórias, urinárias e de pele.',
    administracao: 'VO com ou sem alimentos. Suspensão: agitar frasco com pó seco antes de abrir; adicionar água filtrada até a marca e agitar bem.',
    cuidados: 'Contraindicado em hipersensibilidade a penicilinas.',
    ajuste: 'Insuficiência renal: Clcr 10-30 mL/min (12/12h); Clcr < 10 mL/min (24/24h).'
  }
};

export default amoxicilina;
