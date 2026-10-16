import { Farmaco } from '../../types';

export const captopril: Farmaco = {
  id: 'captopril',
  nome: 'Captopril',
  categoria: 'Anti-hipertensivos e Cardiovasculares',
  busca: 'captopril capoten ieca pressao arterial crise hipertensiva urgencia hipertensiva',
  classe: 'Anti-hipertensivo (Inibidor da Enzima Conversora de Angiotensina - IECA)',
  dosePratica: 'Adulto (Urgência Hipertensiva no PS/UBS): 25 mg a 50 mg VO ou sublingual (SL) em dose única (reavaliar pressão em 30 a 60 min); Tratamento ambulatorial da hipertensão: iniciar com 25 mg a 50 mg/dia divididos em 2 a 3 tomadas (12,5 mg a 25 mg de 8/8h ou 12/12h), 1 hora antes das refeições (máx. 150 mg/dia em HAS). Pediatria: 0,3 a 0,5 mg/kg/dose VO até 3x/dia (máx. 6 mg/kg/dia).',
  fontes: { HSL: '05/05/2025', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'pressão arterial elevada ou urgência hipertensiva',
  acessoFonte: 'RENAME 2024 (Componente Básico): Comprimido 25 mg consta no elenco essencial. Farmácia Popular: Disponibilização gratuita integral para hipertensão arterial.',
  apresentacoes: [
    {
      id: 'cp25',
      forma: 'cp',
      nome: 'Comprimido 25 mg (sulcado)',
      comercial: 'Capoten / Genérico',
      conc: '25mg',
      rotulo: 'Captopril 25mg',
      mg: 25,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: true },
      instrucao: 'Tomar de estômago vazio (1 hora antes ou 2 horas após as refeições), pois os alimentos diminuem a absorção do medicamento em 30% a 40%. Em urgência hipertensiva na unidade de saúde, pode ser administrado via oral ou sublingual conforme conduta médica.',
      obs: 'RENAME (Componente Básico) e Farmácia Popular gratuita. Comprimido com sulco central permitindo divisão em duas partes iguais de 12,5 mg.'
    },
    {
      id: 'cp12_5',
      forma: 'cp',
      nome: 'Comprimido 12,5 mg',
      comercial: 'Capoten',
      conc: '12,5mg',
      rotulo: 'Captopril 12,5mg',
      mg: 12.5,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar 1 hora antes das refeições com água.',
      obs: 'Dose ideal para início de terapia em insuficiência cardíaca congestiva ou em pacientes idosos com hipovolemia.'
    },
    {
      id: 'cp50',
      forma: 'cp',
      nome: 'Comprimido 50 mg (sulcado)',
      comercial: 'Capoten / Genérico',
      conc: '50mg',
      rotulo: 'Captopril 50mg',
      mg: 50,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar 1 hora antes das refeições com água.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 12.5,
      max: 50,
      padrao: 25,
      dosesDia: [2, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'HSL / PSZERADO',
      trecho: 'Adulto — Hipertensão: 25 a 50 mg, 2 a 3 vezes ao dia (iniciar com 25 a 50 mg/dia). Em urgência hipertensiva de pronto atendimento: 25 mg VO/SL dose única. Insuficiência cardíaca: dose inicial de 12,5 a 25 mg, 2 a 3 vezes/dia.'
    },
    {
      pub: 'ped',
      vias: ['VO'],
      tipo: 'mg_kg_dose',
      min: 0.3,
      max: 1.0,
      padrao: 0.5,
      dosesDia: [2, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'HSL / BULA',
      trecho: 'Pediatria — Crianças e lactentes: dose inicial usual de 0,3 a 0,5 mg/kg/dose a cada 8 horas, titulada até no máximo 2 mg/kg/dose (máximo 6 mg/kg/dia).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 150,
      fonte: 'HSL',
      trecho: 'Dose máxima adulto: 150 mg/dia para hipertensão arterial (até 450 mg/dia em insuficiência cardíaca refratária sob especialista).'
    },
    {
      pub: 'ped',
      tipo: 'mg_kg_dia',
      valor: 6,
      fonte: 'HSL / BULA',
      trecho: 'Dose máxima pediátrica: não ultrapassar 6 mg/kg/dia ou 150 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado na gestação em qualquer trimestre (risco de lesão renal fetal, oligoidrâmnio, hipotensão neonatal severa, hipoplasia pulmonar e morte fetal).',
      fonte: 'HSL',
      trecho: 'Categoria D de risco na gestação; contraindicado absoluto no 2º e 3º trimestres.'
    },
    {
      msg: 'Contraindicado em pacientes com histórico de angioedema relacionado a tratamento prévio com IECA ou angioedema hereditário/idiopático.',
      fonte: 'HSL',
      trecho: 'Histórico prévio de angioedema com IECA constitui contraindicação absoluta.'
    },
    {
      msg: 'Contraindicado em estenose bilateral da artéria renal ou estenose em rim único funcionante (risco de insuficiência renal aguda anúrica).',
      fonte: 'HSL',
      trecho: 'Contraindicado em estenose bilateral de artéria renal.'
    },
    {
      msg: 'Cautela com hipercalemia e hipotensão sintomática. Evitar associação com suplementos de potássio ou diuréticos poupadores de potássio (espironolactona) sem monitoramento de potássio sérico.',
      fonte: 'PSZERADO',
      trecho: 'Monitorar ureia, creatinina e potássio sérico durante o início da terapia.'
    }
  ],
  notas: {
    indicacao: 'Tratamento da hipertensão arterial sistêmica, urgência hipertensiva em pronto atendimento, insuficiência cardíaca congestiva (em associação com diuréticos e digitálicos), infarto agudo do miocárdio pós-estabilização e nefropatia diabética.',
    administracao: 'Via oral: Ingerir com água 1 hora antes das refeições ou 2 horas após, pois a presença de alimento no estômago reduz a biodisponibilidade do fármaco em 30 a 40%. Em urgências hipertensivas em PS/UBS, pode ser administrado via oral mastigado ou sublingual para início de ação em 15 a 30 minutos.',
    cuidados: 'Monitorar pressão arterial antes e após a dose. A tosse seca persistente é efeito adverso de classe (mediado por bradicinina) e ocorre em 5 a 20% dos pacientes, cessando com a troca para um BRA (ex: losartana).',
    ajuste: 'Insuficiência renal: Captopril é excretado primariamente pelos rins. Se ClCr 20 a 40 mL/min, iniciar com 75% da dose usual; se ClCr < 20 mL/min, iniciar com 50% da dose usual a cada 12 a 24 horas.',
    dosePratica: 'Adulto: 25 mg VO/SL em urgência hipertensiva; ou 25 mg VO de 8/8h a 12/12h no uso contínuo.'
  }
};

export default captopril;
