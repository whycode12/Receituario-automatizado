import { Farmaco } from '../../types';

export const salbutamol: Farmaco = {
  id: 'salbutamol',
  nome: 'Sulfato de Salbutamol',
  categoria: 'Respiratório e Broncodilatadores',
  busca: 'aerolin salbutamol spray aerossol bombinha broncodilatador asma',
  classe: 'Broncodilatador (Beta-2 agonista seletivo de curta ação)',
  fontes: { HSL: '17/06/2019', BULA: '04/10/2026' },
  snPadrao: 'falta de ar ou chiado no peito',
  acessoFonte: 'RENAME 2024 (Componente Básico): aerossol oral 100 mcg/dose (spray com 200 doses) e solução para nebulização 5 mg/mL (frasco 10 mL). Farmácia Popular: aerossol oral 100 mcg/dose.',
  apresentacoes: [
    {
      id: 'spray100',
      forma: 'spray',
      nome: 'Aerossol oral 100 mcg/dose (200 doses)',
      comercial: 'Aerolin Spray',
      conc: '100mcg/dose',
      rotulo: 'Sulfato de Salbutamol 100mcg/dose spray oral (200 doses)',
      mg: 0.1, // 100 mcg = 0,1 mg por puff
      vias: ['INALATORIA'],
      unidades: ['puff'],
      disp: '1 frasco',
      acesso: { rename: true, fp: true },
      instrucao: 'Agitar bem o frasco antes de usar. Expirar todo o ar, acoplar ao espaçador/boca, acionar 1 jato inspirando lenta e profundamente, e segurar a respiração por 10 segundos. Aguardar 30 a 60 segundos entre cada jato.',
      obs: 'Consta na RENAME e no Programa Farmácia Popular. Frasco com 200 acionamentos.'
    },
    {
      id: 'sol_neb5',
      forma: 'gotas',
      nome: 'Solução para nebulização 5 mg/mL (frasco 10 mL)',
      comercial: 'Aerolin Nebulização',
      conc: '5mg/mL',
      rotulo: 'Sulfato de Salbutamol 5mg/mL solução para nebulização',
      mgml: 5,
      gotasml: 20, // 1 mL = 20 gotas = 5 mg; 1 gota = 0,25 mg
      frascoMl: 10,
      vias: ['INALATORIA'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      instrucao: 'Diluir a quantidade prescrita em 2 a 3 mL de SF 0,9% no copinho do nebulizador. Nebulizar com fluxo de oxigênio/ar de 6 a 8 L/min até o término do líquido.',
      obs: '1 gota = 0,25 mg. RENAME (Componente Básico).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['INALATORIA'],
      apres: ['spray100'],
      tipo: 'mg',
      min: 0.1,
      max: 0.2,
      padrao: 0.2, // 2 puffs (200 mcg = 0,2 mg)
      dosesDia: [4, 6],
      dosesPadrao: 4,
      fonte: 'HSL',
      trecho: 'Adulto Inalação oral: Alívio do broncoespasmo agudo: 100 a 200 mcg (1 a 2 doses), a cada 4 a 6 horas. Terapia crônica: até 200mcg, 4 vezes/dia. Exacerbação da asma: 4 a 8 inalações a cada 20 minutos por até 4 horas.'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['INALATORIA'],
      apres: ['sol_neb5'],
      tipo: 'mg',
      min: 2.5,
      max: 5.0,
      padrao: 2.5, // 2,5 mg = 10 gotas; 5 mg = 20 gotas
      dosesDia: [3, 4],
      dosesPadrao: 4,
      fonte: 'HSL',
      trecho: 'Adulto Nebulização: 2,5 a 5,0 mg, até 4 vezes/dia.'
    },
    {
      pub: 'ped',
      vias: ['INALATORIA'],
      apres: ['spray100'],
      tipo: 'mg',
      min: 0.1,
      max: 0.2,
      padrao: 0.1, // 1 a 2 puffs (100 a 200 mcg)
      dosesDia: [4, 6],
      dosesPadrao: 4,
      fonte: 'HSL',
      trecho: 'Pediatria Inalação oral: Alívio do broncoespasmo agudo ou crise de asma: 100 mcg (1 dose), podendo ser aumentada para 200mcg (2 doses), se necessário, a cada 4 a 6 horas. Exacerbação: 2 a 4 inalações a cada 20 minutos.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 18 },
      vias: ['INALATORIA'],
      apres: ['sol_neb5'],
      tipo: 'mg',
      min: 2.5,
      max: 2.5,
      padrao: 2.5, // 2,5 mg = 10 gotas (0,5 mL)
      dosesDia: [3, 4],
      dosesPadrao: 4,
      fonte: 'HSL',
      trecho: 'Pediatria Nebulização > 18 meses: 2,5 mg de salbutamol, até 4 vezes/dia.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      apres: ['sol_neb5'],
      tipo: 'mg_dia',
      valor: 32,
      fonte: 'HSL',
      trecho: 'Dose máxima Nebulização: 32 mg/dia.'
    },
    {
      pub: 'ped',
      apres: ['sol_neb5'],
      tipo: 'mg_dia',
      valor: 32,
      fonte: 'HSL',
      trecho: 'Dose máxima Pediatria Nebulização: 32 mg/dia.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 18 },
      apres: ['sol_neb5'],
      msg: 'Nebulização não é padronizada para menores de 18 meses no guia; preferir inalação dosimetrada com espaçador valvulado (HSL).',
      fonte: 'HSL',
      trecho: 'Nebulização: > 18 meses: 2,5 mg de salbutamol, até 4 vezes/dia.',
      strong: false
    },
    {
      msg: 'Uso com cautela em portadores de tireotoxicose, arritmias cardíacas, hipertensão arterial grave e insuficiência cardíaca.',
      fonte: 'BULA',
      trecho: 'Como outros agonistas beta-adrenérgicos, o salbutamol deve ser administrado com cautela a pacientes com tireotoxicose e doenças cardiovasculares.',
      strong: false
    }
  ],
  conflitos: [
    {
      txt: 'Nas crises de exacerbação asmática aguda em pronto atendimento, protocolos internacionais (GINA) e nacionais recomendam o uso preferencial de spray dosimetrado acoplado a espaçador (4 a 8 puffs no adulto; 2 a 4 puffs na criança a cada 20 min na 1ª hora), com eficácia igual ou superior à nebulização contínua e menor risco de aerossolização.'
    }
  ],
  notas: {
    indicacao: 'Controle e alívio do broncoespasmo na asma brônquica, bronquite crônica, enfisema (DPOC) e prevenção do broncoespasmo induzido por exercício.',
    administracao: 'Inalação via oral: Usar preferencialmente com espaçador com máscara (em crianças pequenas) ou bocal (em maiores e adultos). Nebulização: diluir com SF 0,9% para volume final de 2 a 2,5 mL.',
    cuidados: 'Efeitos colaterais comuns incluem tremor de extremidades, taquicardia transitória, palpitações e cefaleia. Em uso frequente ou contínuo, avaliar hipocalemia.',
    ajuste: 'Insuficiência renal e hepática: Nenhum ajuste de dose é necessário (HSL).'
  }
};

export default salbutamol;
