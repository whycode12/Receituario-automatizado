import { Farmaco } from '../../types';

export const hidroxizina: Farmaco = {
  id: 'hidroxizina',
  nome: 'Cloridrato de Hidroxizina',
  categoria: 'Antialérgicos e Corticoides',
  busca: 'hidroxizina hixizine antialergico anti-histaminico primeira geracao coceira prurido urticaria alergia sedativo 25mg',
  classe: 'Anti-histamínico H1 de 1ª Geração com Ação Sedativa e Antipruriginosa',
  dosePratica: 'Prurido intenso, urticária aguda e dermatite alérgica: Adultos: 25 mg VO a cada 8 a 12 horas (ou 25 a 50 mg dose única à noite ao deitar para evitar insônia pelo prurido). Pediatria (> 6 meses): 0,5 a 1 mg/kg/dose a cada 8 a 12 horas.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  modoPadrao: 'sn',
  diasPadrao: 0,
  usoContinuoPadrao: false,
  snPadrao: 'coceira, placas de urticária ou reação alérgica',
  acessoFonte: 'RENAME 2024 (Componente Básico): Hidroxizina 25 mg comprimido e solução oral 2 mg/mL.',
  apresentacoes: [
    {
      id: 'cp25',
      forma: 'cp',
      nome: 'Comprimido 25 mg',
      comercial: 'Hixizine®, Prurizin®, Genérico',
      conc: '25mg',
      rotulo: 'Cloridrato de Hidroxizina 25 mg comprimido',
      mg: 25,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar por via oral com água, preferencialmente à noite ou a cada 8 a 12 horas conforme prescrição médica. Evitar dirigir veículos ou operar máquinas pesadas durante o uso devido à sonolência.',
      obs: 'Anti-histamínico de primeira linha para alívio rápido de coceira intensa e urticária.'
    },
    {
      id: 'sol2mgml',
      forma: 'sol',
      nome: 'Solução oral 2 mg/mL (frasco 120 mL)',
      comercial: 'Hixizine®, Genérico',
      conc: '2mg/mL',
      rotulo: 'Cloridrato de Hidroxizina 2 mg/mL xarope',
      mgml: 2,
      frascoMl: 120,
      vias: ['VO'],
      disp: '1 frasco (120 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar por via oral utilizando o copo-medida ou seringa dosadora.',
      obs: 'Uso pediátrico ou para adultos com dificuldade de deglutição.'
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
      dosesDia: [1, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'PSZERADO',
      trecho: 'Adultos VO: 25 mg a cada 8 a 12 horas (ou 25 a 50 mg à noite ao deitar).'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 6 },
      vias: ['VO'],
      tipo: 'mg_kg_dose',
      min: 0.5,
      max: 1,
      padrao: 0.7,
      dosesDia: [2, 3],
      intervaloFixo: 8,
      fonte: 'HSL',
      trecho: 'Pediatria VO: 0,5 a 1 mg/kg/dose a cada 8 a 12 horas.'
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
      msg: 'Contraindicado em pacientes com prolongamento congênito ou adquirido do intervalo QT, glaucoma de ângulo fechado e hipersensibilidade à hidroxizina ou cetirizina.',
      fonte: 'HSL',
      trecho: 'Prolongamento do intervalo QT ou glaucoma.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Alívio sintomático de manifestações alérgicas pruriginosas como urticária aguda, dermatite atópica, picadas de insetos e dermografismo.',
    administracao: 'Tomar com água. Se causar sonolência excessiva durante o dia, concentrar a dose maior à noite.',
    cuidados: 'Causa sonolência, sedação e efeito anticolinérgico (boca seca, retenção urinária). Não ingerir bebidas alcoólicas.',
    ajuste: 'Se ClCr < 50 mL/min, reduzir a dose em 50%.'
  }
};

export default hidroxizina;
