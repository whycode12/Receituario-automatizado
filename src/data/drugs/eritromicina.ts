import { Farmaco } from '../../types';

export const eritromicina: Farmaco = {
  id: 'eritromicina',
  nome: 'Estolato de Eritromicina',
  categoria: 'Antimicrobianos',
  busca: 'eritromicina eritrex ilosone macrolideo coqueluche difteria clamidia pneumonia amigdalite legionella',
  classe: 'Antibacteriano, Macrolídeo de 1ª geração com ação bacteriostática contra Gram-positivos e bactérias atípicas, além de efeito pró-cinético gastrointestinal',
  dosePratica: 'Adulto: VO: 250 a 500 mg a cada 6 horas (ou 500 mg de 12/12h) por 7 a 14 dias (coqueluche: 500 mg 6/6h por 14 dias). Administrar preferencialmente com alimentos para diminuir dor epigástrica e cólicas (evitar leite e bebidas ácidas na hora da tomada). Pediatria: VO: 30 a 50 mg/kg/dia divididos em 3 ou 4 tomadas (a cada 6 a 8 horas) por 7 a 14 dias (máximo 2 g/dia). Contraindicado em neonatos < 2 semanas pelo risco de estenose hipertrófica do piloro e em pacientes com insuficiência hepática ou histórico de icterícia colestática prévia induzida por estolato de eritromicina.',
  fontes: { HSL: '05/03/2025', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'infecção bacteriana',
  acessoFonte: 'RENAME 2024: Comprimido 500 mg e suspensão oral 50 mg/mL (250 mg / 5 mL) constam no Componente Básico da Assistência Farmacêutica (CBAF) do SUS. Farmácia Popular: Não consta no elenco comercial.',
  apresentacoes: [
    {
      id: 'cp500',
      forma: 'cp',
      nome: 'Comprimido 500 mg (estolato)',
      comercial: 'Eritrex / Ilosone / Genérico',
      conc: '500mg',
      rotulo: 'Estolato de eritromicina 500mg comprimido',
      mg: 500,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME (CBAF). Administrar preferencialmente com alimentos para amenizar cólicas gastrointestinais. Evitar ingestão concomitante imediata com leite ou sucos fortemente ácidos (HSL / Bula).'
    },
    {
      id: 'susp50',
      forma: 'sol',
      nome: 'Suspensão Oral 50 mg/mL (250 mg / 5 mL) frasco 100 mL',
      comercial: 'Eritrex suspensão / Ilosone',
      conc: '50mg/mL (250mg/5mL)',
      rotulo: 'Estolato de eritromicina 50mg/mL suspensão oral',
      mgml: 50,
      frascoMl: 100,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME (CBAF). Cada 5 mL contém 250 mg de estolato de eritromicina (50 mg/mL). Agitar vigorosamente antes de cada tomada. Guardar bem fechado e protegido da luz e calor.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      apres: ['cp500'],
      tipo: 'mg',
      min: 250,
      max: 500,
      padrao: 500,
      dosesDia: [2, 4],
      dosesPadrao: 4,
      intervaloFixo: 6,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL: Adulto Oral: 250-500mg a cada 6 a 12 horas (Dose habitual: 500mg a cada 6 horas ou 500mg a cada 12 horas por 7 a 14 dias; máx 4g/dia).'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 1, idadeMaxAnos: 11 },
      vias: ['VO'],
      apres: ['susp50'],
      tipo: 'mg_kg_dia',
      min: 30,
      max: 50,
      padrao: 40,
      dosesDia: [3, 4],
      dosesPadrao: 4,
      intervaloFixo: 6,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL: Pediatria Oral: 30-50mg/kg/dia divididos em 2 a 4 doses (Habitual: 40mg/kg/dia a cada 6 ou 8 horas; máximo 2g/dia).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 4000,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima diária adulto oral: 4 g/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 1, idadeMaxAnos: 11 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 2000,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima diária pediatria: 2 g/dia (50 mg/kg/dia).'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 1 },
      vias: ['VO'],
      msg: 'Uso contraindicado ou sob extrema cautela em recém-nascidos < 2 a 4 semanas de vida devido ao risco comprovado de Estenose Hipertrófica de Piloro induzida por macrolídeos.',
      fonte: 'BULA',
      trecho: 'Bula Eritrex / SBP: Risco de estenose hipertrófica de piloro infantil em neonatos expostos à eritromicina nas primeiras semanas de vida.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com histórico prévio de hepatite colestática, icterícia ou disfunção hepática prévia associada ao uso de estolato de eritromicina.',
      fonte: 'BULA',
      trecho: 'Bula Ilosone / Eritrex: Contraindicado em pacientes com disfunção hepática ou história de icterícia colestática por estolato de eritromicina.',
      strong: true
    },
    {
      msg: 'Contraindicado o uso concomitante com terfenadina, astemizol, cisaprida, pimozida ou alcaloides do ergot (risco de prolongamento grave do intervalo QT, arritmias ventriculares como Torsades de Pointes e ergotismo).',
      fonte: 'BULA',
      trecho: 'Bula Eritrex: Contraindicado com fármacos que prolongam intervalo QT metabolizados pelo CYP3A4.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada à eritromicina ou a qualquer outro antibiótico macrolídeo.',
      fonte: 'BULA',
      trecho: 'Bula Eritrex: Hipersensibilidade aos macrolídeos.'
    }
  ],
  notas: {
    indicacao: 'Tratamento de infecções causadas por cepas sensíveis: infecções respiratórias superiores e inferiores (coqueluche por Bordetella pertussis - tratamento e quimioprofilaxia de comunicantes; pneumonia atípica por Mycoplasma pneumoniae, Chlamydia e Legionella pneumophila; faringoamigdalite estreptocócica em alérgicos a penicilinas), difteria (Corynebacterium diphtheriae), infecções de pele e tecidos moles, eritrasma, conjuntivite e infecções urogenitais por Chlamydia trachomatis, e gastroenterite por Campylobacter jejuni (HSL / Bula).',
    administracao: 'VO: Administrar preferencialmente junto com alimentos ou refeições para atenuar efeitos gastrointestinais frequentes (cólicas abdominais, náuseas, dor epigástrica). Evitar ingerir com leite ou bebidas ácidas (sucos cítricos) simultaneamente no momento da tomada (ingerir leite/ácidos 1 hora antes ou 1 hora depois) (HSL).',
    cuidados: 'HEPATOTOXICIDADE COLESTÁTICA: O sal estolato é a forma de eritromicina mais associada à hepatite colestática aguda com icterícia, febre e dor abdominal superior; monitorar enzimas hepáticas e suspender se icterícia ou colestase. POTENTE INIBIDOR DE CYP3A4: A eritromicina inibe fortemente o citocromo P450 3A4, elevando toxicamente os níveis séricos de carbamazepina, ciclosporina, teofilina, sinvastatina/atorvastatina (risco de rabdomiólise) e varfarina. CARDIOTOXICIDADE: Risco de prolongamento de QT e arritmia ventricular torsades de pointes em pacientes com cardiopatia prévia, hipopotassemia ou hipomagnesemia.',
    ajuste: 'Insuficiência renal: Não requer ajuste posológico na disfunção renal leve a moderada (HSL). Hemodiálise: O fármaco não é dialisável; não requer dose suplementar pós-diálise (HSL). Insuficiência hepática: Contraindicado em hepatopatia grave ou histórico de icterícia colestática pelo estolato; metabolização predominantemente biliar/hepática.'
  }
};

export default eritromicina;
