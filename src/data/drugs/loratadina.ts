import { Farmaco } from '../../types';

export const loratadina: Farmaco = {
  id: 'loratadina',
  nome: 'Loratadina',
  categoria: 'Antialérgicos e Anti-histamínicos',
  busca: 'claritin loratadina antialergico rinite urticaria anti-histaminico',
  classe: 'Anti-histamínico H1 de 2ª Geração (Não Sedativo)',
  fontes: { HSL: '10/06/2016', BULA: '04/10/2026' },
  snPadrao: 'sintomas alérgicos, rinite ou urticária',
  acessoFonte: 'RENAME 2024 (Componente Básico): comprimido 10 mg e xarope/solução oral 1 mg/mL. Farmácia Popular: não consta no elenco.',
  apresentacoes: [
    {
      id: 'cp10',
      forma: 'cp',
      nome: 'Comprimido 10 mg',
      comercial: 'Claritin / Genérico',
      conc: '10mg',
      rotulo: 'Loratadina 10mg',
      mg: 10,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'RENAME (Componente Básico). Tomar 1 comprimido 1 vez ao dia (adultos e crianças > 12 anos ou > 30 kg).'
    },
    {
      id: 'xpe1',
      forma: 'sol',
      nome: 'Xarope / Solução oral 1 mg/mL (frasco 100 mL)',
      comercial: 'Claritin xarope',
      conc: '1mg/mL',
      rotulo: 'Loratadina 1mg/mL xarope',
      mgml: 1,
      frascoMl: 100,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      obs: 'RENAME (Componente Básico). 1 mL = 1 mg de loratadina. Acompanha copo-medida ou seringa dosadora.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 30 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 10,
      max: 10,
      padrao: 10,
      dosesDia: [1, 1], // Tomada única diária
      dosesPadrao: 1,
      fonte: 'HSL',
      trecho: 'Adulto: 10mg VO 1 vez/dia.'
    },
    {
      pub: 'ped',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 30 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 10,
      max: 10,
      padrao: 10,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      fonte: 'HSL',
      trecho: 'Pediatria Maiores de 12 anos (ou mais de 30kg): 10mg VO 1 vez/dia (10 mL de xarope ou 1 comprimido).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 2, pesoMax: 30 },
      vias: ['VO'],
      tipo: 'mg',
      min: 5,
      max: 5,
      padrao: 5,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      fonte: 'HSL',
      trecho: 'Pediatria De 2 a 12 anos (até 30kg): 5mg VO 1 vez/dia (5 mL de xarope).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 10,
      fonte: 'HSL',
      trecho: 'Dose Máxima Adulto: 10mg/dia (1 comprimido ou 10 mL de xarope 1 vez ao dia).'
    },
    {
      pub: 'ped',
      tipo: 'mg_dia',
      valor: 10,
      fonte: 'HSL',
      trecho: 'Dose Máxima Pediatria: 5mg/dia para ≤ 30kg e 10mg/dia para > 30kg.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 2 },
      msg: 'Não recomendado e contraindicado em crianças menores de 2 anos de idade.',
      fonte: 'BULA',
      trecho: 'A segurança e eficácia de loratadina em crianças menores de 2 anos não foram estabelecidas.',
      strong: true
    },
    {
      msg: 'Em insuficiência renal grave ou hemodiálise, recomenda-se administrar a dose de 10 mg a cada 48 horas (HSL).',
      fonte: 'HSL',
      trecho: 'Insuficiência renal: Clcr 10 a 50mL/min a cada 24 a 48h; Hemodiálise: Dose recomendada a cada 48h.',
      strong: false
    }
  ],
  conflitos: [
    {
      txt: 'Diferente dos anti-histamínicos clássicos de 1ª geração, a loratadina não ultrapassa significativamente a barreira hematoencefálica nas doses preconizadas (10 mg/dia), apresentando baixa incidência de sonolência e sem efeito anticolinérgico marcante.'
    }
  ],
  notas: {
    indicacao: 'Alívio sintomático da rinite alérgica sazonal e perene (coriza, espirros, prurido nasal e ocular) e urticária idiopática crônica (HSL).',
    administracao: 'Via oral. Ingerir 1 vez ao dia, independentemente das refeições, com água.',
    cuidados: 'Suspender o uso de anti-histamínicos aproximadamente 48 horas antes de realizar testes alérgicos cutâneos para evitar resultados falso-negativos.',
    ajuste: 'Insuficiência renal: Espaçar a dose para a cada 48h em insuficiência grave/hemodiálise. Insuficiência hepática: Administrar 10 mg em dias alternados (a cada 48h) em cirrose/hepatopatia avançada (HSL).'
  }
};

export default loratadina;
