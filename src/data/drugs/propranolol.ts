import { Farmaco } from '../../types';

export const propranolol: Farmaco = {
  id: 'propranolol',
  nome: 'Cloridrato de Propranolol',
  categoria: 'Cardiovascular e Anti-hipertensivos',
  busca: 'propranolol inderal betabloqueador pressao alta arritmia varizes esofagicas cirrose portal profilaxia enxaqueca tremor essencial tireotoxicose',
  classe: 'Betabloqueador Não Seletivo (Antagonista Beta-1 e Beta-2 Adrenérgico)',
  dosePratica: 'Hipertensão Portal / Profilaxia de Sangramento por Varizes Esofágicas: Iniciar com 20 mg a 40 mg VO de 12/12h; titular até frequência cardíaca de repouso entre 55 e 60 bpm (ou redução de 25% da FC basal). Profilaxia de Enxaqueca / Tremor Essencial: 40 mg VO de 12/12h. Hipertensão Arterial: 40 mg a 80 mg VO de 12/12h.',
  fontes: { HSL: '08/02/2023', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'hipertensão ou palpitações',
  acessoFonte: 'RENAME 2024 (Componente Básico): comprimido de 40 mg. Farmácia Popular: hipertensão arterial (gratuito).',
  apresentacoes: [
    {
      id: 'cp40',
      forma: 'cp',
      nome: 'Comprimido 40 mg',
      comercial: 'Inderal / Genérico',
      conc: '40mg',
      rotulo: 'Cloridrato de propranolol 40mg comprimido',
      mg: 40,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 caixa com 30 comprimidos',
      acesso: { rename: true, fp: true },
      instrucao: 'Tomar com água, preferencialmente antes das refeições ou sempre no mesmo horário do dia. Não interromper abruptamente sem orientação médica.',
      obs: 'Pode ser partido ao meio (comprimido sulcado de 40 mg = duas metades de 20 mg).'
    },
    {
      id: 'cp10',
      forma: 'cp',
      nome: 'Comprimido 10 mg',
      comercial: 'Inderal / Genérico',
      conc: '10mg',
      rotulo: 'Cloridrato de propranolol 10mg comprimido',
      mg: 10,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 30 comprimidos',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar com água.',
      obs: 'Ideal para início de titulação em pacientes frágeis, idosos ou cirróticos descompensados.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 10,
      max: 160,
      padrao: 40,
      dosesDia: [2, 3],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'HSL',
      trecho: 'Adultos: 20 a 80 mg VO de 12/12h para controle de pressão arterial, tremor, enxaqueca ou hipertensão portal.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 12 },
      vias: ['VO'],
      tipo: 'mg_kg_dia',
      min: 1,
      max: 3,
      padrao: 1.5,
      dosesDia: [2, 3],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'HSL',
      trecho: 'Pediatria: 1 a 3 mg/kg/dia VO dividido em 2 a 3 tomadas diárias.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 320,
      fonte: 'HSL',
      trecho: 'Dose máxima diária de propranolol no adulto: 320 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em asma brônquica grave, DPOC com broncoespasmo ativo (bloqueio dos receptores beta-2 promove broncoconstrição potencialmente fatal), bradicardia sinusal (< 50 bpm), bloqueio atrioventricular de 2º ou 3º grau e choque cardiogênico.',
      fonte: 'BULA',
      trecho: 'Bloqueio beta-adrenérgico agrava broncoespasmo e distúrbios de condução atrioventricular.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Profilaxia de sangramento digestivo alto por varizes esofágicas na cirrose/hipertensão portal, hipertensão arterial, angina de peito, profilaxia da enxaqueca, tremor essencial, controle adrenérgico no hipertireoidismo.',
    administracao: 'Tomar com um copo de água antes das principais refeições. Em hipertensão portal, a dose visa atingir FC entre 55-60 bpm sem hipotensão sintomática.',
    cuidados: 'Monitorar frequência cardíaca e pressão arterial. Nunca suspender abruptamente (risco de taquicardia rebote, isquemia miocárdica e crise hipertensiva).',
    ajuste: 'Usar com cautela em hepatopatas graves (metabolismo hepático extenso).'
  }
};
export default propranolol;
