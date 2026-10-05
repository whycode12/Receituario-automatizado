import { Farmaco } from '../../types';

export const paracetamol: Farmaco = {
  id: 'paracetamol',
  nome: 'Paracetamol',
  categoria: 'Analgésicos e Anti-inflamatórios',
  busca: 'tylenol acetaminofeno paracetamol dor febre analgesico antitermico',
  classe: 'Analgésico e antipirético',
  dosePratica: 'Adulto: 500 mg a 750 mg VO a cada 6 horas se dor ou febre (máx. 4 g/dia; em hepatopatas/desnutridos máx. 2 a 3 g/dia). Pediatria: 10 a 15 mg/kg/dose VO a cada 6 horas (1 gota/kg da solução 200 mg/mL, máx. 35 gotas/dose; máx. 75 mg/kg/dia).',
  fontes: { HSL: '29/07/2024', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'dor ou febre',
  acessoFonte: 'RENAME 2024 (Componente Básico): comprimido 500 mg e solução oral 200 mg/mL. Farmácia Popular: não consta no elenco.',
  apresentacoes: [
    {
      id: 'cp750',
      forma: 'cp',
      nome: 'Comprimido 750 mg',
      comercial: 'Tylenol',
      conc: '750mg',
      rotulo: 'Paracetamol 750mg',
      mg: 750,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Uso adulto. Ingerir com água a cada 4 a 6 horas (máx 4g/dia).'
    },
    {
      id: 'cp500',
      forma: 'cp',
      nome: 'Comprimido 500 mg',
      comercial: 'Tylenol',
      conc: '500mg',
      rotulo: 'Paracetamol 500mg',
      mg: 500,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Padronizado na RENAME (Componente Básico). Adultos e > 12 anos.'
    },
    {
      id: 'gts200',
      forma: 'gotas',
      nome: 'Gotas 200 mg/mL (frasco 15 mL)',
      comercial: 'Tylenol gotas',
      conc: '200mg/mL',
      rotulo: 'Paracetamol 200mg/mL gotas',
      mgml: 200,
      gotasml: 20,
      frascoMl: 15,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      obs: '1 mL = 20 gotas = 200 mg (1 gota ≈ 10 mg de paracetamol). RENAME.'
    },
    {
      id: 'susp100',
      forma: 'gotas',
      nome: 'Gotas / Suspensão Bebê 100 mg/mL (frasco 15 mL)',
      comercial: 'Tylenol Bebê',
      conc: '100mg/mL',
      rotulo: 'Paracetamol 100mg/mL gotas',
      mgml: 100,
      gotasml: 20,
      frascoMl: 15,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: false, fp: false },
      obs: 'Acompanha seringa dosadora ou conta-gotas. 1 gota ≈ 5 mg.'
    },
    {
      id: 'susp32',
      forma: 'sol',
      nome: 'Suspensão oral 32 mg/mL (frasco 60 mL)',
      comercial: 'Tylenol Criança',
      conc: '32mg/mL',
      rotulo: 'Paracetamol 32mg/mL suspensão oral',
      mgml: 32,
      frascoMl: 60,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: false, fp: false },
      obs: 'Tylenol Criança (1 mL = 32 mg de paracetamol). Uso pediátrico.'
    },
    {
      id: 'bolsa100',
      forma: 'sol',
      nome: 'Solução injetável 10 mg/mL bolsa 100 mL (1.000 mg)',
      comercial: 'Halexminophen',
      conc: '10mg/mL',
      rotulo: 'Paracetamol 10mg/mL bolsa 100mL',
      mgml: 10,
      frascoMl: 100,
      vias: ['EV'],
      disp: '1 bolsa',
      acesso: { rename: false, fp: false },
      obs: 'Uso hospitalar intravenoso. Bolsa pronta para uso (infundir em 15 minutos).'
    },
    {
      id: 'bolsa50',
      forma: 'sol',
      nome: 'Solução injetável 10 mg/mL bolsa 50 mL (500 mg)',
      comercial: 'Halexminophen',
      conc: '10mg/mL',
      rotulo: 'Paracetamol 10mg/mL bolsa 50mL',
      mgml: 10,
      frascoMl: 50,
      vias: ['EV'],
      disp: '1 bolsa',
      acesso: { rename: false, fp: false },
      obs: 'Uso hospitalar intravenoso. Bolsa pronta para uso para pacientes < 50 kg.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 50 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 500,
      max: 1000,
      padrao: 750,
      dosesDia: [3, 6],
      dosesPadrao: 4,
      fonte: 'HSL',
      trecho: 'Adulto VO: 500 a 1000mg a cada 8 - 6h ou 750mg a cada 4 - 6h.'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 50 }] },
      vias: ['EV'],
      tipo: 'mg',
      min: 1000,
      max: 1000,
      padrao: 1000,
      dosesDia: [4, 4],
      dosesPadrao: 4,
      fonte: 'HSL',
      trecho: 'Adulto EV: >50kg 1000mg a cada 6h.'
    },
    {
      pub: 'ped',
      se: { pesoMax: 50 },
      vias: ['VO'],
      tipo: 'mg_kg_dose',
      min: 10,
      max: 15,
      padrao: 10,
      dosesDia: [4, 6],
      dosesPadrao: 4,
      fonte: 'HSL',
      trecho: 'Pediatria VO: ≥ 11kg: 10 a 15mg/kg/dose a cada 4 - 6h; 01 gota/kg até 35 gotas por dose.'
    },
    {
      pub: 'ped',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 33 }] },
      vias: ['EV'],
      tipo: 'mg_kg_dose',
      min: 15,
      max: 15,
      padrao: 15,
      dosesDia: [4, 4],
      dosesPadrao: 4,
      fonte: 'HSL',
      trecho: 'Pediatria EV: > 12 anos > 33kg < 50kg: 15mg/kg a cada 6h.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 4000,
      fonte: 'HSL',
      trecho: 'Dose Máxima Adultos: 4g/dia; Se risco de hepatotoxicidade: 3g/dia.'
    },
    {
      pub: 'ped',
      tipo: 'mg_kg_dia',
      valor: 75,
      fonte: 'HSL',
      trecho: 'Dose Máxima Pediatria: 75mg/kg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com insuficiência hepática grave (HSL).',
      fonte: 'HSL',
      trecho: 'Insuficiência hepática: Para insuficiência hepática grave o uso é contraindicado.',
      strong: true
    },
    {
      pub: 'ped',
      se: { pesoMax: 33 },
      vias: ['EV'],
      msg: 'Uso de Paracetamol EV não é recomendado em crianças abaixo de 12 anos de idade ou com peso < 33 kg (HSL).',
      fonte: 'HSL',
      trecho: 'Cuidados Específicos e Monitoramento: Não é recomendado para administração em crianças abaixo de 12 anos de idade ou com peso corpóreo <33 kg. Para pacientes pediátricos < 12 anos utilizar a apresentação Tylenol criança.',
      strong: true
    }
  ],
  conflitos: [
    {
      txt: 'Dose máxima diária no adulto: 4.000 mg/dia em indivíduos sadios, porém se houver risco de hepatotoxicidade, desnutrição ou etilismo, a dose deve ser reduzida para 2.000 a 3.000 mg/dia.'
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 10,
    concUsualPed: 10,
    volOpcoes: [50, 100],
    tempo: {
      adulto: { min: 15, padrao: 15, max: 15 },
      ped: { min: 15, padrao: 15, max: 15 }
    },
    fonteTxt: 'EV: Solução pronta para uso (bolsa de 50 mL ou 100 mL a 10 mg/mL). Administrar em 15 minutos (HSL).'
  },
  notas: {
    indicacao: 'Redução da febre e alívio de dores leves a moderadas (cefaléia, odontalgia, dor muscular, cólica menstrual, reações pós-vacinais). EV: dor moderada pós-operatória e redução da febre (HSL).',
    administracao: 'VO: Início de ação em 15-30 min. Absorção mais rápida com estômago vazio, mas pode ser tomado com alimentos. EV: infusão estrita em 15 minutos.',
    cuidados: 'Este medicamento não deve ser administrado por mais de 10 dias para dor ou mais de 3 dias para febre sem reavaliação médica (HSL). Cuidado com associações antigripais para não ultrapassar 4g/dia.',
    ajuste: 'Insuficiência renal: Leve a moderada: aumentar intervalo para 8/8h; Grave: dose diária total deve ser reduzida (HSL). Insuficiência hepática: Leve a moderada: reduzir dose total diária; Grave: contraindicado (HSL).'
  }
};

export default paracetamol;
