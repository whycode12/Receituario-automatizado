import { Farmaco } from '../../types';

export const ciprofloxacino: Farmaco = {
  id: 'ciprofloxacino',
  nome: 'Cloridrato de Ciprofloxacino',
  categoria: 'Antimicrobianos',
  busca: 'cipro ciprofloxacino quinolona fluorquinolona ciproxil',
  classe: 'Antimicrobiano, Fluoroquinolona de amplo espectro',
  dosePratica: 'Adulto: VO: 500 mg de 12/12h por 7 a 14 dias (pielonefrite, ITU complicada, prostatite; cistite simples 250-500 mg 12/12h por 3 dias). EV: 400 mg de 12/12h em infusão de 60 min. Pediatria: uso excepcional restrito (20 a 30 mg/kg/dia divididos de 12/12h; máx. adulto).',
  fontes: { HSL: '27/09/2022', PSZERADO: '2025', EINA: '2024', BULA: '04/10/2026' },
  snPadrao: 'infecção bacteriana suscetível',
  acessoFonte: 'RENAME 2024 (Componente Básico e Hospitalar): comprimido 500 mg e solução injetável 2 mg/mL bolsa 100 mL (200 mg). Farmácia Popular: não consta no elenco.',
  apresentacoes: [
    {
      id: 'cp500',
      forma: 'cp',
      nome: 'Comprimido 500 mg',
      comercial: 'Cipro / Genérico',
      conc: '500mg',
      rotulo: 'Cloridrato de Ciprofloxacino 500mg',
      mg: 500,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'RENAME (Componente Básico). Ingerir com água, respeitando intervalo de 2h antes ou após leite, derivados e suplementos de cálcio/ferro/magnésio.'
    },
    {
      id: 'cp250',
      forma: 'cp',
      nome: 'Comprimido 250 mg',
      comercial: 'Cipro / Genérico',
      conc: '250mg',
      rotulo: 'Cloridrato de Ciprofloxacino 250mg',
      mg: 250,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Indicado para ITU baixa não complicada em mulheres ou ajuste em insuficiência renal.'
    },
    {
      id: 'bolsa200',
      forma: 'sol',
      nome: 'Solução injetável 2 mg/mL bolsa 100 mL (200 mg)',
      comercial: 'Cipro IV / Isofarma',
      conc: '2mg/mL',
      rotulo: 'Ciprofloxacino 2mg/mL bolsa 100mL (200mg)',
      mgml: 2,
      frascoMl: 100,
      vias: ['EV'],
      disp: '1 bolsa',
      acesso: { rename: true, fp: false },
      obs: 'RENAME (Hospitalar). Solução pronta para uso (200 mg em 100 mL). Infundir em no mínimo 60 minutos (Einstein Adultos / HSL).'
    },
    {
      id: 'bolsa400',
      forma: 'sol',
      nome: 'Solução injetável 2 mg/mL bolsa 200 mL (400 mg)',
      comercial: 'Cipro IV',
      conc: '2mg/mL',
      rotulo: 'Ciprofloxacino 2mg/mL bolsa 200mL (400mg)',
      mgml: 2,
      frascoMl: 200,
      vias: ['EV'],
      disp: '1 bolsa',
      acesso: { rename: false, fp: false },
      obs: 'Bolsa pronta para infusão em infecções graves ou hospitalares (infundir em 60 minutos).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 18 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 250,
      max: 750,
      padrao: 500,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      fonte: 'HSL',
      trecho: 'Adulto VO: 250-750mg a cada 12h (máx 1500mg/dia).'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 18 }, { pesoMin: 40 }] },
      vias: ['EV'],
      tipo: 'mg',
      min: 200,
      max: 400,
      padrao: 400,
      dosesDia: [2, 3],
      dosesPadrao: 2,
      fonte: 'HSL',
      trecho: 'Adulto EV: 400-800mg divididos a cada 12h, até 1200mg divididos a cada 8h.'
    },
    {
      pub: 'ped',
      vias: ['VO', 'EV'],
      tipo: 'mg_kg_dia',
      min: 20,
      max: 30,
      padrao: 20,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      fonte: 'HSL',
      trecho: 'Pediatria VO e EV: 20 a 30mg/kg/dia divididas em 2 doses (a cada 12h). Uso restrito e criterioso em pediatria.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 1500,
      fonte: 'HSL',
      trecho: 'Dose Máxima VO Adulto: 1500mg/dia.'
    },
    {
      pub: 'adulto',
      vias: ['EV'],
      tipo: 'mg_dia',
      valor: 1200,
      fonte: 'HSL',
      trecho: 'Dose Máxima EV Adulto: 1200mg/dia.'
    },
    {
      pub: 'ped',
      tipo: 'mg_dia',
      valor: 1200,
      fonte: 'HSL',
      trecho: 'Dose Máxima Pediatria: não exceder as doses máximas diárias de adultos (EV: 1200mg/dia; VO: 1500mg/dia).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado uso concomitante com tizanidina (risco de hipotensão profunda e sedação excessiva).',
      fonte: 'BULA',
      trecho: 'A administração concomitante de ciprofloxacino e tizanidina é contraindicada.',
      strong: false
    },
    {
      msg: 'Uso em crianças e adolescentes em fase de crescimento: reservado estritamente para infecções graves específicas (como exacerbação pulmonar em fibrose cística ou antraz) devido ao risco teórico de artropatia cartilaginosa em animais jovens.',
      fonte: 'BULA',
      trecho: 'O ciprofloxacino não é recomendado para crianças e adolescentes em crescimento, exceto para indicações clínicas específicas.',
      strong: false
    },
    {
      msg: 'Ingestão e quelatos: Não tomar juntamente com leite, iogurte ou sucos enriquecidos com cálcio. Respeitar intervalo mínimo de 2 horas (HSL).',
      fonte: 'HSL',
      trecho: 'VO: Ingerir 2 horas antes e/ou após produtos lácteos ou suplementação de cálcio.',
      strong: false
    },
    {
      msg: 'Alerta Black Box (Fluoroquinolonas): Risco de tendinite e ruptura de tendão (especialmente tendão calcâneo), neuropatia periférica e efeitos sobre SNC. Descontinuar aos primeiros sinais.',
      fonte: 'BULA',
      trecho: 'Fluoroquinolonas associam-se a reações adversas musculoesqueléticas graves e potencialmente irreversíveis.',
      strong: false
    }
  ],
  conflitos: [
    {
      txt: 'Nas diretrizes para ITU baixa não complicada (cistite simples), as fluoroquinolonas são mantidas como agentes de 2ª linha para preservar sensibilidade antimicrobiana e prevenir eventos adversos.'
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%', 'SG 10%', 'Ringer-Lactato'],
    concMax: 2, // bolsa pronta para uso (2 mg/mL)
    concUsual: 2,
    volOpcoes: [100, 200],
    tempo: {
      adulto: { min: 60, padrao: 60, max: 60 },
      ped: { min: 60, padrao: 60, max: 60 }
    },
    fonteTxt: 'Solução pronta para uso (2 mg/mL). Infundir em no mínimo 60 minutos (Einstein Adultos / HSL). Proibido bolus ou injeção rápida pelo risco de flebite grave e hipotensão.'
  },
  notas: {
    indicacao: 'Pielonefrite aguda, infecções complicadas do trato urinário, prostatite aguda e crônica, pneumonias hospitalares, osteomielite, infecções intra-abdominais e diarreia bacteriana invasiva (HSL).',
    administracao: 'VO: Engolir os comprimidos inteiros com água (pode ser triturado se estritamente necessário). Não ingerir com lácteos. EV: Infusão intravenosa estrita em 60 minutos.',
    cuidados: 'Garantir boa hidratação do paciente para evitar cristalúria. Cautela com prolongamento do intervalo QT e histórico de convulsões.',
    ajuste: 'Insuficiência renal: Clcr 30-50 mL/min (VO: 250-500mg a cada 12h); Clcr 5-29 mL/min (VO: 250-500mg a cada 18h; EV: 200-400mg a cada 18-24h). Hemodiálise: administrar após a diálise. Insuficiência hepática: não requer ajuste (HSL).'
  }
};

export default ciprofloxacino;
