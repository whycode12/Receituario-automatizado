import { Farmaco } from '../../types';

export const nitrofurantoina: Farmaco = {
  id: 'nitrofurantoina',
  nome: 'Nitrofurantoína',
  categoria: 'Antimicrobianos',
  busca: 'macrodantina nitrofurantoina itu cistite urina infeccao urinaria antibacteriano',
  classe: 'Antibacteriano urinário (derivado nitrofurânico de ação antisséptica no trato urinário)',
  dosePratica: 'Adulto: Tratamento de cistite aguda não complicada: 100 mg VO a cada 6 horas (4x/dia) por 7 dias (PSZerado / HSL) ingerido junto às refeições ou com leite. Profilaxia de ITU recorrente: 50 a 100 mg ao deitar. Pediatria (> 1 mês): 5 a 7 mg/kg/dia divididos a cada 6 horas por 7 dias (profilaxia: 1 a 2 mg/kg/dia em dose única noturna). Contraindicado em ClCr < 60 mL/min (ineficaz e risco de neuropatia tóxica), menores de 1 mês e gestantes a termo (38-42 semanas) pelo risco de anemia hemolítica neonatal.',
  fontes: { HSL: '05/03/2025', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'infecção urinária',
  acessoFonte: 'RENAME 2024: Cápsula 100 mg e suspensão oral 5 mg/mL constam no Componente Básico da Assistência Farmacêutica (CBAF) do SUS. Farmácia Popular: não consta no elenco comercial.',
  apresentacoes: [
    {
      id: 'cap100',
      forma: 'cap',
      nome: 'Cápsula 100 mg',
      comercial: 'Macrodantina',
      conc: '100mg',
      rotulo: 'Nitrofurantoína 100mg',
      mg: 100,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME (CBAF). Apresentação padrão de 1ª linha para cistite aguda não complicada. Ingerir com alimentos ou leite para melhorar absorção e tolerabilidade gástrica (HSL / PSZerado).'
    },
    {
      id: 'susp5',
      forma: 'sol',
      nome: 'Suspensão Oral 5 mg/mL (frasco 120 mL)',
      comercial: 'Macrodantina suspensão',
      conc: '5mg/mL',
      rotulo: 'Nitrofurantoína 5mg/mL suspensão oral',
      mgml: 5,
      frascoMl: 120,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME (CBAF). Indicada para crianças > 1 mês ou pacientes com disfagia. Agitar vigorosamente antes de usar. Administrar com leite ou alimentos.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      apres: ['cap100'],
      tipo: 'mg',
      min: 100,
      max: 100,
      padrao: 100,
      dosesDia: [4, 4],
      dosesPadrao: 4,
      intervaloFixo: 6,
      duracaoMaxDias: 7,
      fonte: 'PSZERADO',
      trecho: 'PSZerado p. 102: Nitrofurantoína [Macrodantina] 100 mg: Tomar 1 cápsula VO a cada 6 horas, por 7 dias (HSL: 50 a 100 mg a cada 6h por 7 dias).'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 1, idadeMaxAnos: 11 },
      vias: ['VO'],
      apres: ['susp5'],
      tipo: 'mg_kg_dia',
      min: 5,
      max: 7,
      padrao: 5,
      dosesDia: [4, 4],
      dosesPadrao: 4,
      intervaloFixo: 6,
      duracaoMaxDias: 7,
      fonte: 'HSL',
      trecho: 'HSL: Pediatria (> 1 mês) Tratamento: 5-7mg/kg/dia em doses divididas a cada 6 horas durante 1 semana (ou até 3 dias após urina estéril).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 400,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima diária adulto: 400 mg/dia (100 mg a cada 6h).'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 1, idadeMaxAnos: 11 },
      vias: ['VO'],
      tipo: 'mg_kg_dia',
      valor: 7,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima diária em pediatria: 7 mg/kg/dia.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 1 },
      vias: ['VO'],
      msg: 'Contraindicado para recém-nascidos menores de 1 mês de vida (risco grave de anemia hemolítica por imaturidade enzimática eritrocitária / deficiência de glutationa).',
      fonte: 'BULA',
      trecho: 'Bula Macrodantina: Contraindicado para crianças com menos de um mês de vida.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Tratamento e profilaxia de infecções do trato urinário baixo (cistites agudas não complicadas) causadas por cepas sensíveis de Escherichia coli, Staphylococcus saprophyticus, Enterococcus faecalis e espécies de Klebsiella e Enterobacter (HSL / PSZerado / Bula). ATENÇÃO: NÃO é indicada para pielonefrite nem infecções urinárias sistêmicas/bacteremia devido a níveis teciduais e séricos insignificantes.',
    administracao: 'VO: administrar obrigatoriamente durante ou imediatamente após as refeições ou com um copo de leite para otimizar a biodisponibilidade gastrointestinal e diminuir a incidência de náuseas e vômitos (HSL / Bula).',
    cuidados: 'Contraindicado em insuficiência renal com ClCr < 60 mL/min (ou < 30-45 mL/min segundo diretrizes recentes): atinge concentrações urinárias insuficientes e acumula níveis séricos tóxicos, aumentando risco de neuropatia periférica grave irreversível e toxicidade pulmonar. Contraindicado em gestantes a termo (38 a 42 semanas de gestação) e durante o trabalho de parto pelo risco de induzir anemia hemolítica neonatal. Contraindicado em pacientes com deficiência de G6PD e em hepatopatia grave. Pode colorir a urina de amarelo-escuro ou castanho (inócuo).',
    ajuste: 'Insuficiência renal: ClCr < 60 mL/min: uso contraindicado (HSL). Contraindicado em hemodiálise e diálise peritoneal. Insuficiência hepática: usar com cautela; contraindicado em histórico prévio de icterícia colestática ou hepatotoxicidade induzida por nitrofurantoína.'
  }
};

export default nitrofurantoina;
