import { Farmaco } from '../../types';

export const vancomicina: Farmaco = {
  id: 'vancomicina',
  nome: 'Cloridrato de Vancomicina',
  categoria: 'Antimicrobianos',
  busca: 'vancomicina vancocina mrsa estafilococo hospitalar sepse cti uti pav endocardite ev',
  classe: 'Antibiótico Glicopeptídeo',
  dosePratica: 'Adultos: Ataque de 25 a 30 mg/kg EV (máx 2 g); Manutenção: 15 a 20 mg/kg EV a cada 8 a 12 horas (habitual 1 g EV de 12/12h). Infundir no mínimo em 60 minutos para evitar a Síndrome do Homem Vermelho.',
  fontes: { HSL: '2024', EINA: '2024', PSZERADO: '2025' },
  snPadrao: 'infecção bacteriana por Gram-positivos multirresistentes',
  acessoFonte: 'RENAME 2024 (Componente Hospitalar): Vancomicina 500 mg pó para solução injetável.',
  apresentacoes: [
    {
      id: 'fap500',
      forma: 'fap',
      nome: 'Frasco-ampola 500 mg pó liofilizado EV',
      comercial: 'Vancocina®, Vancoled®',
      conc: '500 mg',
      rotulo: 'Cloridrato de Vancomicina 500 mg frasco-ampola',
      mg: 500,
      volml: 10,
      reconstDil: 'Água Destilada',
      reconstMl: 10,
      vias: ['EV'],
      disp: '1 frasco-ampola (500 mg)',
      acesso: { rename: true, fp: false },
      instrucao: 'Reconstituir com 10 mL de AD (50 mg/mL) e diluir em no mínimo 100 mL de SF 0,9% ou SG 5%. Infundir EV em no mínimo 60 minutos.',
      obs: 'Infusão rápida pode causar a Síndrome do Homem Vermelho (eritema, prurido e hipotensão por liberação de histamina).'
    },
    {
      id: 'fap1g',
      forma: 'fap',
      nome: 'Frasco-ampola 1.000 mg (1 g) pó liofilizado EV',
      comercial: 'Vancocina®, Vancoled®',
      conc: '1 g',
      rotulo: 'Cloridrato de Vancomicina 1 g frasco-ampola',
      mg: 1000,
      volml: 20,
      reconstDil: 'Água Destilada',
      reconstMl: 20,
      vias: ['EV'],
      disp: '1 frasco-ampola (1 g)',
      acesso: { rename: true, fp: false },
      instrucao: 'Reconstituir com 20 mL de AD (50 mg/mL) e diluir em no mínimo 200 a 250 mL de SF 0,9% ou SG 5%. Infundir EV em pelo menos 60 a 120 minutos.',
      obs: 'Padrão ouro hospitalar para infecções graves por MRSA (S. aureus resistente à oxacilina/meticilina).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV'],
      tipo: 'mg',
      min: 500,
      max: 2000,
      padrao: 1000,
      dosesDia: [2, 3],
      intervaloFixo: 12,
      fonte: 'HSL',
      trecho: 'Adultos EV: 15 a 20 mg/kg a cada 8 a 12 horas (habitual 1 g EV de 12/12h).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 4000,
      fonte: 'HSL',
      trecho: 'Dose máxima adulto: 2 g por dose e até 4 g/dia, com monitorização de vancomicinemia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada à vancomicina.',
      fonte: 'HSL',
      trecho: 'Hipersensibilidade à vancomicina.',
      strong: true
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 5,
    volOpcoes: [100, 250, 500],
    tempo: {
      adulto: { min: 60, padrao: 60, max: 120, txt: '60 a 120 min (pelo menos 30 min por cada 500 mg)' },
      ped: { min: 60, padrao: 60, max: 120 }
    },
    fonteTxt: 'Reconstituir frasco de 500 mg com 10 mL de AD (50 mg/mL). Diluir em SF 0,9% ou SG 5% até conc máxima periférica de 5 mg/mL (ex: 500 mg em 100 mL, 1 g em 200 a 250 mL). Infundir em no mínimo 60 minutos.'
  },
  notas: {
    indicacao: 'Infecções graves causadas por bactérias Gram-positivas resistentes, incluindo MRSA e Enterococcus suscetíveis.',
    administracao: 'Infundir lentamente em pelo menos 60 minutos. NUNCA administrar por via intramuscular (necrose severa).',
    cuidados: 'Monitorar vancomicinemia de vale (alvo 15 a 20 mcg/mL para infecções graves como pneumonia e sepse). Monitorar creatinina sérica.',
    ajuste: 'ClCr 20-50 mL/min: 1 g a cada 24 horas. ClCr < 20 mL/min: 1 g a cada 48 a 72h conforme níveis séricos de vancomicina.'
  }
};

export default vancomicina;
