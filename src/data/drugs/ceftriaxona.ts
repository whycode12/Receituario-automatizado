import { Farmaco } from '../../types';

export const ceftriaxona: Farmaco = {
  id: 'ceftriaxona',
  nome: 'Ceftriaxona Sódica',
  categoria: 'Antimicrobianos',
  busca: 'rocefin keftron ceftriaxona cefalosporina terceira geracao fap ampola',
  classe: 'Antimicrobiano, Cefalosporina de 3ª Geração parenteral',
  fontes: { HSL: '15/01/2026', EINA: '2024', EINP: '2024' },
  snPadrao: 'infecção bacteriana moderada a grave',
  acessoFonte: 'RENAME 2024 (Componente Hospitalar): pó para solução injetável 500 mg e 1.000 mg (IM e EV). Farmácia Popular: não consta no elenco.',
  apresentacoes: [
    {
      id: 'fap1g_ev',
      forma: 'fap',
      nome: 'Frasco-ampola 1.000 mg pó para injeção EV',
      comercial: 'Rocefin EV / Keftron EV',
      conc: '1g',
      rotulo: 'Ceftriaxona sódica 1g frasco-ampola (EV)',
      mg: 1000,
      volml: 10,
      reconstMl: 10,
      reconstDil: 'Água Destilada (10 mL)',
      vias: ['EV'],
      disp: '1 frasco-ampola',
      acesso: { rename: true, fp: false },
      obs: 'RENAME (Hospitalar). Reconstituir com 10 mL de AD. Injetar EV direto de 3 a 5 min ou diluir em 100 mL de SF/SG5% para infusão em 30 a 60 min.'
    },
    {
      id: 'fap1g_im',
      forma: 'fap',
      nome: 'Frasco-ampola 1.000 mg pó para injeção IM + Diluente Lidocaína 1%',
      comercial: 'Rocefin IM / Keftron IM',
      conc: '1g',
      rotulo: 'Ceftriaxona sódica 1g frasco-ampola (IM)',
      mg: 1000,
      volml: 3.5,
      reconstMl: 3.5,
      reconstDil: 'Lidocaína 1% (3,5 mL)',
      vias: ['IM'],
      disp: '1 frasco-ampola',
      acesso: { rename: true, fp: false },
      obs: 'RENAME. Reconstituir com 3,5 mL de diluente com lidocaína a 1% para injeção intramuscular profunda (reduz dor local). PROIBIDO aplicar diluente com lidocaína por via EV.'
    },
    {
      id: 'fap500_im',
      forma: 'fap',
      nome: 'Frasco-ampola 500 mg pó para injeção IM + Diluente Lidocaína 1%',
      comercial: 'Rocefin IM',
      conc: '500mg',
      rotulo: 'Ceftriaxona sódica 500mg frasco-ampola (IM)',
      mg: 500,
      volml: 2,
      reconstMl: 2,
      reconstDil: 'Lidocaína 1% (2 mL)',
      vias: ['IM'],
      disp: '1 frasco-ampola',
      acesso: { rename: true, fp: false },
      obs: 'Reconstituir com 2 mL de lidocaína 1% (Einstein: 1,7 a 2 mL diluente próprio). Aplicação IM profunda.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['EV', 'IM'],
      tipo: 'mg',
      min: 1000,
      max: 2000,
      padrao: 1000,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      fonte: 'HSL',
      trecho: 'Adulto IM e EV: 1-2g a cada 12-24 horas (máx 4g/dia).'
    },
    {
      pub: 'ped',
      vias: ['EV', 'IM'],
      tipo: 'mg_kg_dia',
      min: 50,
      max: 75,
      padrao: 50,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      fonte: 'HSL',
      trecho: 'Pediatria IM e EV: 50-75mg/kg/dia em 1-2 doses divididas a cada 12-24 horas (em meningite até 100mg/kg/dia).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 4000,
      fonte: 'HSL',
      trecho: 'Dose Máxima: 4g/dia.'
    },
    {
      pub: 'ped',
      tipo: 'mg_kg_dia',
      valor: 100,
      fonte: 'HSL',
      trecho: 'Dose Máxima Pediatria: até 100mg/kg/dia (não exceder 4g/dia).'
    }
  ],
  contra: [
    {
      msg: 'PROIBIDA a coadministração ou reconstituição com soluções contendo CÁLCIO (como Ringer-Lactato) devido ao risco letal de precipitação ceftriaxona-cálcio em órgãos nobres (HSL).',
      fonte: 'HSL',
      trecho: 'Cuidados Específicos: Não reconstituir ou co-administrar com soluções contendo cálcio. Risco de precipitação de ceftriaxona-cálcio.',
      strong: true
    },
    {
      msg: 'Contraindicado em neonatos com hiperbilirrubinemia (risco de encefalopatia por kernicterus pelo deslocamento da bilirrubina da albumina sérica).',
      fonte: 'BULA',
      trecho: 'Ceftriaxona é contraindicada em recém-nascidos prematuros e a termo com icterícia pelo risco de encefalopatia bilirrubínica.',
      strong: true
    },
    {
      vias: ['IM'],
      msg: 'Aplicação IM: reconstituir com lidocaína a 1% para alívio álgico; aplicar profundamente em grande massa muscular (máximo de 1g por glúteo) (HSL).',
      fonte: 'HSL',
      trecho: 'IM: Administrar em áreas de grande massa muscular. Recomenda-se não aplicar mais de 1g em cada glúteo.',
      strong: false
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%', 'SG 10%', 'AD'],
    concMax: 40, // 40 mg/mL (Einstein Pediatrico: conc máx 40 mg/mL; usual 10 mg/mL)
    concUsualPed: 10,
    concUsual: 10,
    volPadraoAdulto: [[1000, 100], [2000, 100]],
    volOpcoes: [10, 50, 100, 250],
    tempo: {
      adulto: { min: 3, padrao: 30, max: 60 },
      ped: { min: 2, padrao: 30, max: 30 }
    },
    fonteTxt: 'Reconstituição EV: 10 mL de AD. EV Direto lento: 3 a 5 minutos (adultos) e 2 a 4 minutos na concentração máxima de 40 mg/mL (pediatria). Infusão: diluir em 100 mL de SF 0,9% ou SG 5% (protocolo institucional prevenção de flebite HSL / Einstein Adulto) e infundir em 30 a 60 minutos. Estabilidade: 6h TA ou 24h refrigerado. PROIBIDO Ringer-Lactato ou soluções com cálcio.'
  },
  notas: {
    indicacao: 'Tratamento de infecções bacterianas graves: pneumonia comunitária e nosocomial, sepse, meningite bacteriana, infecções intra-abdominais, pielonefrite aguda, gonorreia descomplicada (dose única IM) e profilaxia cirúrgica (HSL).',
    administracao: 'EV: Reconstituir com 10 mL de AD; diluir em 100 mL de SF/SG5% para infusão em 30 a 60 minutos (ou direto lento em 3-5 min). IM: Reconstituir com lidocaína 1% (3,5 mL para 1g ou 2 mL para 500mg); injeção intraglútea profunda (máx 1g por sítio).',
    cuidados: 'Cada frasco de 1g contém aproximadamente 83 mg (3,6 mEq) de sódio. Jamais utilizar diluente com lidocaína por via intravenosa.',
    ajuste: 'Insuficiência renal ou hepática isoladas: não necessitam de ajuste posológico. Se houver disfunção renal e hepática concomitantes graves, limitar a dose diária a no máximo 2g/dia (HSL).'
  }
};

export default ceftriaxona;
