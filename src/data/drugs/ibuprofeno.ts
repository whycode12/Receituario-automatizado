import { Farmaco } from '../../types';

export const ibuprofeno: Farmaco = {
  id: 'ibuprofeno',
  nome: 'Ibuprofeno',
  categoria: 'Analgésicos e Anti-inflamatórios',
  busca: 'alivium advil doraliv motrin spidufen ibuprofeno',
  classe: 'Analgésico, antipirético e anti-inflamatório não esteroidal (AINE)',
  dosePratica: 'Adulto: 400 mg a 600 mg VO de 8/8h (ou 6/6h) junto a alimentos (máx. 2.400 mg a 3.200 mg/dia). Pediatria (≥ 6 meses): 5 a 10 mg/kg/dose VO de 8/8h (solução 100 mg/mL = 1 gota/kg; solução 50 mg/mL = 2 gotas/kg; máx. 40 mg/kg/dia ou 1.200 mg/dia).',
  fontes: { HSL: '30/11/2020', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'dor ou febre',
  acessoFonte: 'RENAME 2024 (Componente Básico): comprimido 300 mg, comprimido 600 mg e suspensão oral 50 mg/mL. Farmácia Popular: não consta no elenco do programa.',
  apresentacoes: [
    {
      id: 'cp600',
      forma: 'cp',
      nome: 'Comprimido 600 mg',
      comercial: 'Alivium',
      conc: '600mg',
      rotulo: 'Ibuprofeno 600mg',
      mg: 600,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME. Ingerir preferencialmente com alimentos ou leite se houver desconforto gástrico.'
    },
    {
      id: 'cp400',
      forma: 'cp',
      nome: 'Comprimido 400 mg',
      comercial: 'Advil / Alivium',
      conc: '400mg',
      rotulo: 'Ibuprofeno 400mg',
      mg: 400,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Dose analgésica/anti-inflamatória usual para adultos.'
    },
    {
      id: 'cp300',
      forma: 'cp',
      nome: 'Comprimido 300 mg',
      conc: '300mg',
      rotulo: 'Ibuprofeno 300mg',
      mg: 300,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Apresentação padronizada na RENAME (Componente Básico).'
    },
    {
      id: 'cp200',
      forma: 'cp',
      nome: 'Comprimido 200 mg',
      comercial: 'Advil',
      conc: '200mg',
      rotulo: 'Ibuprofeno 200mg',
      mg: 200,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Dose inicial baixa para dor leve a moderada.'
    },
    {
      id: 'gts100',
      forma: 'gotas',
      nome: 'Gotas 100 mg/mL (10 gotas/mL)',
      comercial: 'Alivium',
      conc: '100mg/mL',
      rotulo: 'Ibuprofeno 100mg/mL gotas',
      mgml: 100,
      gotasml: 10,
      frascoMl: 20,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: false, fp: false },
      obs: 'Atenção ao gotejador: cada gota contém 10 mg (1 mL = 10 gotas) (HSL).'
    },
    {
      id: 'gts50',
      forma: 'gotas',
      nome: 'Gotas 50 mg/mL (10 gotas/mL)',
      comercial: 'Alivium',
      conc: '50mg/mL',
      rotulo: 'Ibuprofeno 50mg/mL gotas',
      mgml: 50,
      gotasml: 10,
      frascoMl: 30,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      obs: 'Atenção: 1 gota = 5 mg (1 mL = 10 gotas). Consta na RENAME como suspensão oral 50 mg/mL.'
    },
    {
      id: 'susp20',
      forma: 'sol',
      nome: 'Suspensão oral 20 mg/mL (100 mg/5 mL)',
      comercial: 'Alivium / Doraliv',
      conc: '20mg/mL',
      rotulo: 'Ibuprofeno 20mg/mL suspensão oral',
      mgml: 20,
      frascoMl: 100,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: false, fp: false },
      obs: 'Administrar com seringa dosadora ou copo-medida. Frasco de 100 mL.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 200,
      max: 800,
      padrao: 400,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Adulto: 200 (20 gotas) a 800 (80 gotas)mg/dose, VO.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 6 },
      vias: ['VO'],
      tipo: 'mg_kg_dose',
      min: 5,
      max: 10,
      padrao: 10,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Pediatria: A partir de 6 meses: 5 a 10mg/kg, VO, 3 a 4 vezes/dia.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 3200,
      fonte: 'HSL',
      trecho: 'Adulto: 3200mg/dia VO;'
    },
    {
      pub: 'ped',
      se: { pesoMax: 30 },
      tipo: 'mg_kg_dia',
      valor: 40,
      fonte: 'HSL',
      trecho: 'Pediatria (a partir de 6 meses): 40mg/kg/dia (na fonte: "40mg/dia"). Acima de 30kg: 1200mg/dia VO.'
    },
    {
      pub: 'ped',
      se: { pesoMin: 30 },
      tipo: 'mg_dia',
      valor: 1200,
      fonte: 'HSL',
      trecho: 'Acima de 30kg: 1200mg/dia VO.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 6 },
      msg: 'Contraindicado ou não recomendado para menores de 6 meses de idade (HSL).',
      fonte: 'HSL',
      trecho: 'Pediatria: A partir de 6 meses: 5 a 10mg/kg, VO, 3 a 4 vezes/dia.',
      strong: true
    },
    {
      msg: 'Evitar o uso em pacientes com doença hepática grave (HSL).',
      fonte: 'HSL',
      trecho: 'Insuficiência hepática: Deve ser evitada em pacientes com doença hepática grave.',
      strong: true
    }
  ],
  conflitos: [
    {
      txt: 'Dose máxima no Guia HSL é de 3.200 mg/dia para adultos. Em bulas de medicamentos isentos de prescrição (MIP), a dose diária máxima costuma ser limitada a 1.200 mg/dia sem acompanhamento médico.'
    }
  ],
  notas: {
    indicacao: 'Inflamações agudas e crônicas, febre e dor associadas a gripes e resfriados, dor de garganta, dor de cabeça, dor de dente, dor nas costas, cólicas menstruais, dores musculares e outras (HSL).',
    administracao: 'VO, pode ser ingerido com ou sem alimentos (HSL). Recomenda-se tomar com alimentos ou leite se ocorrer desconforto gástrico.',
    cuidados: 'Cada gota contém 10mg de Ibuprofeno na apresentação 100 mg/mL (1 mL = 10 gotas) (HSL). Em idosos e portadores de úlcera péptica ou sangramento gastrintestinal, utilizar com extrema cautela e pelo menor tempo possível.',
    ajuste: 'Insuficiência renal: Iniciar com a menor dose recomendada, acompanhar de perto o paciente e reduzir a dose se necessário (HSL). Insuficiência hepática: Deve ser evitada em pacientes com doença hepática grave (HSL).'
  }
};

export default ibuprofeno;
