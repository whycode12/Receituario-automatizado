import { Farmaco } from '../../types';

export const hidrocortisona: Farmaco = {
  id: 'hidrocortisona',
  nome: 'Succinato Sódico de Hidrocortisona',
  categoria: 'Corticoides Sistêmicos',
  busca: 'hidrocortisona cortisonal flebodil succinato sodico corticoide anafilaxia choque septico crise adrenal asma',
  classe: 'Anti-inflamatório Hormonal, Corticosteroide de Ação Rápida e Curta Duração (Ação Glicocorticoide e Mineralocorticoide Equilibrada)',
  dosePratica: 'Crise asmática grave / Anafilaxia / Insuficiência adrenal: Adultos: Ataque de 100 a 300 mg EV seguido de manutenção de 100 mg EV a cada 6 ou 8 horas (ou 200 mg/dia em infusão contínua no choque séptico refratário a vasopressores). Pediatria: 1 a 5 mg/kg/dia EV/IM dividido a cada 6 a 12 horas (em anafilaxia/asma aguda: 4 a 5 mg/kg/dose de ataque, máx. 100 a 200 mg). Reconstituir 100 mg em 2 mL AD e 500 mg em 4 mL AD.',
  fontes: { HSL: '07/03/2023', PSZERADO: '2025', EINA: '2024', EINP: '2024', BULA: '04/10/2026' },
  snPadrao: 'crise adrenal, anafilaxia, choque séptico ou broncoespasmo grave',
  acessoFonte: 'RENAME 2024 (Componente Hospitalar): pó para solução injetável em frasco-ampola de 100 mg e 500 mg de succinato sódico de hidrocortisona. Ampla padronização em salas de emergência e UTIs.',
  apresentacoes: [
    {
      id: 'fap100',
      forma: 'fap',
      nome: 'Pó liófilo para solução injetável 100 mg (frasco-ampola)',
      comercial: 'Cortisonal 100mg / Flebodil / Genérico',
      conc: '100mg',
      rotulo: 'Succinato sódico de hidrocortisona 100mg pó injetável',
      mg: 100,
      reconstMl: 2,
      reconstDil: 'Água Destilada',
      vias: ['EV', 'IM'],
      disp: '1 frasco-ampola',
      acesso: { rename: true, fp: false },
      obs: 'RENAME (Componente Hospitalar). Reconstituir com 2 mL de água para injeção (resulta em concentração de 50 mg/mL). Injetar EV direto lento (em 2 a 3 min) ou diluir em SF 0,9% para infusão (HSL / Einstein Adulto e Pediatria).'
    },
    {
      id: 'fap500',
      forma: 'fap',
      nome: 'Pó liófilo para solução injetável 500 mg (frasco-ampola)',
      comercial: 'Cortisonal 500mg / Flebodil / Genérico',
      conc: '500mg',
      rotulo: 'Succinato sódico de hidrocortisona 500mg pó injetável',
      mg: 500,
      reconstMl: 4,
      reconstDil: 'Água Destilada',
      vias: ['EV', 'IM'],
      disp: '1 frasco-ampola',
      acesso: { rename: true, fp: false },
      obs: 'RENAME (Componente Hospitalar). Reconstituir com 4 mL de água para injeção ou SF (resulta em concentração de 125 mg/mL). EV direto lento em ≥ 10 min ou diluído em 50 a 100 mL de SF/SG5% por 15 a 30 min (HSL / Einstein).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 40 }] },
      vias: ['EV', 'IM'],
      tipo: 'mg',
      min: 100,
      max: 500,
      padrao: 100,
      dosesDia: [3, 4],
      dosesPadrao: 4,
      intervaloFixo: 6,
      fonte: 'HSL',
      trecho: 'Adultos (Anti-inflamatório / Imunossupressor / Crise aguda): 100 a 500 mg, EV ou IM, a cada 6 a 8 horas (PSZerado: ataque de 200 a 300 mg seguido de 100 mg EV 6/6h ou 8/8h; no choque séptico: 50 mg EV de 6/6h ou 200 mg/dia em infusão contínua).'
    },
    {
      pub: 'ped',
      se: { idadeMaxAnos: 14 },
      vias: ['EV', 'IM'],
      tipo: 'mg_kg_dia',
      min: 1.0,
      max: 5.0,
      padrao: 4.0, // dose padrão de ataque em crises pediátricas de asma/anafilaxia: ~4 mg/kg/dia dividido de 6/6h (1 a 1,25 mg/kg/dose)
      dosesDia: [2, 4],
      dosesPadrao: 4,
      intervaloFixo: 6,
      fonte: 'HSL',
      trecho: 'Pediatria (Anti-inflamatório / Imunossupressor): 1 a 5 mg/kg/dia (ou 30 a 150 mg/m²/dia), EV ou IM, fracionados a cada 6, 8 ou 12 horas. Em anafilaxia / exacerbação grave de asma: dose de ataque de 4 a 5 mg/kg/dose (máx. 100 a 200 mg por dose) (PSZerado / HSL).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 1500,
      fonte: 'HSL',
      trecho: 'Dose máxima Adulto: até 1.500 mg/dia em emergências hiperagudas (500 mg a cada 6 a 8 horas).'
    },
    {
      pub: 'ped',
      tipo: 'mg_kg_dia',
      valor: 8.0,
      fonte: 'HSL',
      trecho: 'Dose máxima Pediatria: 8 mg/kg/dia (ou máx. 500 mg/dia).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com infecções fúngicas sistêmicas ou hipersensibilidade documentada à hidrocortisona ou a qualquer componente do produto.',
      fonte: 'BULA',
      trecho: 'Contraindicado em infecções fúngicas sistêmicas e hipersensibilidade aos corticosteroides.',
      strong: false
    },
    {
      msg: 'Administração de vacinas vivas atenuadas: contraindicada durante corticoterapia em doses imunossupressoras.',
      fonte: 'BULA',
      trecho: 'Vacinas de microrganismos vivos atenuados são contraindicadas em indivíduos imunossuprimidos.',
      strong: false
    },
    {
      msg: 'ATIVIDADE MINERALOCORTICOIDE INTRÍNSECA: Ao contrário da dexametasona e da betametasona, a hidrocortisona possui retenção hídrica e salina mineralocorticoide significativa (troca de sódio por potássio nos túbulos renais). Monitorar pressão arterial, retenção de fluidos (risco de congestão em cardiopatas) e dosagem de potássio sérico (risco de hipocalemia).',
      fonte: 'HSL',
      trecho: 'Possui efeito mineralocorticoide com risco de retenção hidrossalina e hipocalemia em doses elevadas.',
      strong: false
    },
    {
      vias: ['EV'],
      msg: 'Velocidade de administração EV: doses de até 100 mg devem ser injetadas lentamente em pelo menos 2 a 3 minutos; doses iguais ou superiores a 500 mg exigem infusão lenta de pelo menos 10 a 30 minutos em 50 a 100 mL de SF para evitar hipotensão transitória, arritmias e sensação de queimação perineal.',
      fonte: 'HSL',
      trecho: 'EV direto: 100mg em 2 min; 500mg em no mínimo 10 minutos ou diluído em 50-100 mL.',
      strong: false
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%', 'SG 10%', 'SGF'],
    concMax: 60, // concentração máxima recomendada para injeção rápida (HSL: 50 a 60 mg/mL)
    concUsualPed: 1, // Einstein Pediatria: infusão até 1 mg/mL
    concUsual: 2,    // 100 mg em 50 mL = 2 mg/mL
    volOpcoes: [20, 50, 100, 250],
    tempo: {
      adulto: { min: 2, padrao: 15, max: 30 },
      ped: { min: 3, padrao: 15, max: 30 }
    },
    fonteTxt: 'Reconstituição: 100 mg em 2 mL de AD (50 mg/mL); 500 mg em 4 mL de AD (125 mg/mL). EV Direto: aplicar lentamente em 2 a 3 minutos para doses de 100 mg; doses de 500 mg aplicar em ≥ 10 min. Infusão intermitente: diluir a dose reconstituída em 50 a 100 mL de SF 0,9% ou SG 5% e infundir em 15 a 30 minutos (Padrão HSL / Einstein Adultos e Pediatria).'
  },
  notas: {
    indicacao: 'Tratamento de emergência de choque anafilático grave (como coadjuvante após epinefrina), crise asmática aguda grave resistente a broncodilatadores, choque séptico refratário a aminas vasoativas (Surviving Sepsis Campaign), insuficiência adrenal aguda (crise addisoniana) e exacerbações inflamatórias agudas (HSL / PSZerado).',
    administracao: 'EV: aplicar lentamente ou infundir em 50 a 100 mL de SF. IM: injeção profunda na região glútea.',
    cuidados: 'Por ter estrutura idêntica ao cortisol endógeno (hidrocortisona bioidêntica), é a terapia de reposição hormonal de escolha absoluta na crise de insuficiência adrenal e hipopituitarismo agudo.',
    ajuste: 'Insuficiência renal e hepática: não necessita de ajuste posológico de dose (HSL). Hemodiálise: não requer suplementação.'
  }
};

export default hidrocortisona;
