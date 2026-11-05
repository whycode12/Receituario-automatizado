import { Farmaco } from '../../types';

export const prometazina: Farmaco = {
  id: 'prometazina',
  nome: 'Cloridrato de Prometazina',
  categoria: 'Antialérgicos e Corticoides',
  busca: 'prometazina fenergan anti-histaminico sedativo fenotiazina contencao quimica distonia extrapiramidal ampola im cp vo',
  classe: 'Anti-histamínico Fenotiazínico de 1ª Geração com Ação Sedativa e Anticolinérgica Central',
  dosePratica: 'Contenção Química / Agitação Psiquiátrica Aguda: 25 a 50 mg (1/2 a 1 ampola de 50 mg/2 mL) por via intramuscular profunda exclusiva no glúteo (frequentemente associada ao Haloperidol na mesma seringa). Tratamento de Distonia Aguda induzida por antipsicóticos: 25 a 50 mg IM profunda imediata. Alergia / Sedação leve: 25 mg VO de 12 em 12 horas ou ao deitar.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  modoPadrao: 'sn',
  diasPadrao: 0,
  usoContinuoPadrao: false,
  snPadrao: 'coriza, espirros, coceira ou alergias da pele',
  acessoFonte: 'RENAME 2024 (Componente Básico / Hospitalar): Prometazina 25 mg comprimido e 25 mg/mL (50 mg/2 mL) injetável.',
  apresentacoes: [
    {
      id: 'cp25',
      forma: 'cp',
      nome: 'Comprimido revestido 25 mg',
      comercial: 'Fenergan®, Genérico',
      conc: '25mg',
      rotulo: 'Cloridrato de Prometazina 25 mg comprimido',
      mg: 25,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 20 comprimidos',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar por via oral com água, até de 12/12 horas se sintomas alérgicos, preferencialmente à noite ou antes de dormir devido à intensa sonolência.',
      obs: 'Padrão ambulatorial adulto PuxaFicha (tomar 1 comprimido até de 12/12h se coriza, espirros, coceira ou alergia).'
    },
    {
      id: 'amp50_2ml',
      forma: 'amp',
      nome: 'Ampola 50 mg / 2 mL (25 mg/mL) IM profunda exclusiva',
      comercial: 'Fenergan®, Genérico',
      conc: '50mg / 2 mL',
      rotulo: 'Cloridrato de Prometazina 50 mg / 2 mL ampola IM',
      mg: 50,
      volml: 2,
      mgml: 25,
      vias: ['IM'],
      disp: '1 ampola (2 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Aplicar EXCLUSIVAMENTE por via intramuscular profunda na região glútea. PROIBIDA a aplicação subcutânea ou intra-arterial (risco de necrose química severa e gangrena).',
      obs: 'Ação sedativa e anticolinérgica potente; reverte rapidamente espasmos musculares e distonias por antipsicóticos.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 25,
      max: 50,
      padrao: 25,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'HSL / PUXAFICHA',
      trecho: 'PuxaFicha Adulto: Prometazina 25mg. Tomar 1 comprimido, até de 12/12 horas, se coriza, espirros, coceira ou alergias da pele.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['IM'],
      tipo: 'mg',
      min: 25,
      max: 50,
      padrao: 50,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 12,
      fonte: 'PSZERADO',
      trecho: 'Contenção química / Distonia: 25 a 50 mg IM profunda no glúteo; pode repetir após 4 a 6h se necessário.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 100,
      fonte: 'HSL',
      trecho: 'Dose máxima adulto: até 100 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes em coma, com depressão grave do SNC, glaucoma de ângulo fechado, hipertrofia prostática sintomática e crianças menores de 2 anos (risco de depressão respiratória fatal).',
      fonte: 'HSL',
      trecho: 'Depressão respiratória grave ou menores de 2 anos.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Contenção química de agitação psicomotora (associado ao haloperidol), reversão de distonias agudas induzidas por antipsicóticos ou antieméticos e alívio de prurido severo.',
    administracao: 'Injetar estritamente por via intramuscular profunda em grande massa muscular glútea.',
    cuidados: 'Causa intensa sonolência, sedação, boca seca e hipotensão ortostática. Não associar com consumo de bebidas alcoólicas.',
    ajuste: 'Não necessita de ajuste para insuficiência renal leve a moderada.'
  }
};

export default prometazina;
