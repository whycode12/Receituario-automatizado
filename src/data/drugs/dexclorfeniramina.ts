import { Farmaco } from '../../types';

export const dexclorfeniramina: Farmaco = {
  id: 'dexclorfeniramina',
  nome: 'Maleato de Dexclorfeniramina',
  categoria: 'Antialérgicos e Anti-histamínicos',
  busca: 'polaramine dexclorfeniramina antialergico anti-histaminico rinite prurido alergia',
  classe: 'Anti-histamínico H1 de 1ª Geração (Sedativo / Clássico)',
  fontes: { HSL: '10/06/2016', BULA: '04/10/2026' },
  snPadrao: 'reação alérgica, prurido ou rinite',
  acessoFonte: 'RENAME 2024 (Componente Básico): comprimido 2 mg e solução oral / xarope 0,4 mg/mL (frasco 120 mL). Farmácia Popular: não consta no elenco.',
  apresentacoes: [
    {
      id: 'cp2',
      forma: 'cp',
      nome: 'Comprimido 2 mg',
      comercial: 'Polaramine / Genérico',
      conc: '2mg',
      rotulo: 'Maleato de Dexclorfeniramina 2mg',
      mg: 2,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'RENAME (Componente Básico). Comprimido sulcado. Tomar a cada 6 a 8 horas.'
    },
    {
      id: 'sol04',
      forma: 'sol',
      nome: 'Solução oral / Líquido 0,4 mg/mL (frasco 120 mL)',
      comercial: 'Polaramine líquido',
      conc: '0,4mg/mL',
      rotulo: 'Maleato de Dexclorfeniramina 0,4mg/mL solução oral',
      mgml: 0.4,
      frascoMl: 120,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      obs: 'RENAME (Componente Básico). 5 mL = 2 mg de dexclorfeniramina. Acompanha copo-medida.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 2,
      max: 2,
      padrao: 2,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Adulto: Comprimido: 1cp (2mg) 3 a 4 vezes/dia; Líquido: 5mL (2mg) 3 a 4 vezes/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      tipo: 'mg',
      min: 2,
      max: 2,
      padrao: 2,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Pediatria Acima de 12 anos: dose adulto (2mg VO 3 a 4 vezes/dia).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 6, idadeMaxAnos: 12 },
      vias: ['VO'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1, // 1 mg = meio comprimido ou 2,5 mL
      dosesDia: [3, 3],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Pediatria 6-12 anos: 1mg (0,5 cp ou 2,5mL de líquido) 3 vezes/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 2, idadeMaxAnos: 6 },
      vias: ['VO'],
      apres: ['sol04'],
      tipo: 'mg',
      min: 0.5,
      max: 0.5,
      padrao: 0.5, // 0,5 mg = 1,25 mL de líquido
      dosesDia: [3, 3],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Pediatria 2-6 anos: 1,25mL (0,5mg) 3 vezes/dia.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 12,
      fonte: 'HSL',
      trecho: 'Dose Máxima Adulto: 12mg/dia (6 comprimidos/dia).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 6, idadeMaxAnos: 12 },
      tipo: 'mg_dia',
      valor: 6,
      fonte: 'HSL',
      trecho: 'Dose Máxima Pediatria 6-12 anos: 6mg/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 2, idadeMaxAnos: 6 },
      tipo: 'mg_dia',
      valor: 3,
      fonte: 'HSL',
      trecho: 'Dose Máxima Pediatria 2-6 anos: 3mg/dia.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 2 },
      msg: 'Contraindicado em crianças menores de 2 anos de idade e em recém-nascidos prematuros.',
      fonte: 'BULA',
      trecho: 'Contraindicado para menores de 2 anos de idade.',
      strong: true
    },
    {
      msg: 'Efeito sedativo e anticolinérgico acentuado: pode causar sonolência significativa e redução dos reflexos. Evitar dirigir veículos ou operar máquinas durante o uso.',
      fonte: 'BULA',
      trecho: 'Pode causar sonolência; os pacientes devem ser alertados quanto a dirigir veículos e operar máquinas perigosas.',
      strong: false
    },
    {
      msg: 'Contraindicado em pacientes em tratamento com inibidores da monoaminoxidase (IMAO) devido ao risco de prolongamento dos efeitos anticolinérgicos e hipotensão.',
      fonte: 'BULA',
      trecho: 'Contraindicado em pacientes que estejam fazendo uso de inibidores da MAO.',
      strong: true
    }
  ],
  conflitos: [
    {
      txt: 'Por ser um anti-histamínico de 1ª geração clássico, tem rápida passagem pela barreira hematoencefálica com forte ação sedativa e anticolinérgica (boca seca, retenção urinária), sendo preferido à noite ou em picadas com prurido intenso.'
    }
  ],
  notas: {
    indicacao: 'Rinite alérgica sazonal e perene, conjuntivite alérgica, prurido, urticária, picadas de insetos e dermografismo (HSL).',
    administracao: 'Via oral. Ingerir com água ou alimentos para diminuir desconforto gástrico. Solução oral deve ser administrada com copo-medida.',
    cuidados: 'Evitar consumo simultâneo com álcool ou outros depressores do sistema nervoso central pelo risco de sedação aditiva profunda.',
    ajuste: 'Insuficiência renal e hepática: Usar com cautela em hepatopatias graves ou idosos com predisposição a sedação extrema ou retenção urinária.'
  }
};

export default dexclorfeniramina;
