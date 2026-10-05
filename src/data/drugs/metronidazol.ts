import { Farmaco } from '../../types';

export const metronidazol: Farmaco = {
  id: 'metronidazol',
  nome: 'Metronidazol',
  categoria: 'Antimicrobianos',
  busca: 'metronidazol flagyl helmizol giardiase amebiase vaginose tricomoniase anaerobios colite clostridium antiparasitario antibacteriano',
  classe: 'Antibacteriano e antiparasitário sintético derivado nitroimidazólico com atividade contra anaeróbios e protozoários',
  dosePratica: 'Adulto: VO: 400 mg a cada 8 horas por 7 a 10 dias (infecções anaeróbias e amebíase) ou 250 mg a cada 8 horas por 5 dias (giardíase). Vaginose bacteriana / Tricomoníase: 400 mg VO 12/12h por 7 dias ou 2 g VO dose única. EV: 500 mg (bolsa de 100 mL a 5 mg/mL pronta para uso) infundido em 30 a 60 min a cada 8 horas (ou 6-8h). Pediatria: 30 a 50 mg/kg/dia VO divididos em 3 tomadas (8/8h) por 5 a 10 dias; EV: dose de manutenção de 7,5 mg/kg a cada 8 horas (22,5 mg/kg/dia). Advertência crucial: Efeito antabuse/dissulfiram grave com álcool (abstenção obrigatória durante o tratamento e até 48-72h após).',
  fontes: { HSL: '08/12/2021', EINA: '2026', EINP: '2026', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'infecção por anaeróbios ou protozoários',
  acessoFonte: 'RENAME 2024: Comprimido 250 mg, suspensão oral 40 mg/mL (benzoilmetronidazol eq. 25 mg/mL de metronidazol base), gel vaginal 100 mg/g e solução injetável 5 mg/mL constam no Componente Básico da Assistência Farmacêutica (CBAF) do SUS. Farmácia Popular: não consta no elenco comercial.',
  apresentacoes: [
    {
      id: 'cp400',
      forma: 'cp',
      nome: 'Comprimido 400 mg',
      comercial: 'Flagyl',
      conc: '400mg',
      rotulo: 'Metronidazol 400mg',
      mg: 400,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Apresentação habitual no mercado brasileiro para adultos. Ingerir com água durante ou após as refeições para diminuir desconforto gástrico (HSL / Bula).'
    },
    {
      id: 'cp250',
      forma: 'cp',
      nome: 'Comprimido 250 mg',
      comercial: 'Flagyl / genérico',
      conc: '250mg',
      rotulo: 'Metronidazol 250mg',
      mg: 250,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME (CBAF). Apresentação padrão para tratamento de giardíase e esquemas fracionados. Ingerir com alimentos.'
    },
    {
      id: 'susp40',
      forma: 'sol',
      nome: 'Suspensão Oral 40 mg/mL (benzoilmetronidazol eq. 25 mg/mL de metronidazol) frasco 100 mL',
      comercial: 'Flagyl Pediátrico',
      conc: '40mg/mL (25mg/mL base)',
      rotulo: 'Benzoilmetronidazol 40mg/mL suspensão oral',
      mgml: 25,
      frascoMl: 100,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME (CBAF). ATENÇÃO farmacológica: Cada 1 mL de suspensão contém 40 mg de benzoilmetronidazol, que corresponde a 25 mg de metronidazol ativo (HSL). Cálculos posológicos são calculados sobre a base ativa (25 mg/mL = 5 mL contém 125 mg de metronidazol). Agitar vigorosamente antes de usar.'
    },
    {
      id: 'bolsa500',
      forma: 'sol',
      nome: 'Solução Injetável 5 mg/mL (Bolsa 100 mL - 500 mg)',
      comercial: 'Metronack / Metroniflex / Flagyl Injetável',
      conc: '5mg/mL (500mg/100mL)',
      rotulo: 'Metronidazol 500mg/100mL bolsa injetável',
      mg: 500,
      volml: 100,
      frascoMl: 100,
      vias: ['EV'],
      disp: '1 bolsa',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME (CBAF) e Manuais Einstein/HSL. Solução pronta para infusão em Cloreto de Sódio 0,9%. Não refrigerar. Proteger do calor e luz.'
    }
  ],
  ev: {
    diluentes: ['SF 0,9%'],
    concMax: 5,
    volPadraoAdulto: [[500, 100]],
    volOpcoes: [100],
    tempo: {
      adulto: { min: 20, padrao: 60, max: 60, txt: '20 a 60 minutos (5 mL/min; padrão HSL: 60 min para prevenção de flebite)' },
      ped: { min: 30, padrao: 60, max: 60, txt: '30 a 60 minutos (Einstein Pediátrico / HSL)' }
    },
    fonteTxt: 'Bolsa pronta para uso em SF 0,9% (5 mg/mL). Adultos: infundir em 20 a 60 minutos (5 mL/min; protocolo institucional Sírio-Libanês recomenda 60 minutos por risco de flebite). Pediatria: 30 a 60 minutos (Einstein Pediátrico). Não refrigerar nem congelar (risco de precipitação de cristais).'
  },
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      apres: ['cp400', 'cp250'],
      tipo: 'mg',
      min: 250,
      max: 750,
      padrao: 400,
      dosesDia: [2, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 10,
      fonte: 'HSL',
      trecho: 'HSL: VO: 250-750mg a cada 8h (Dose habitual: 400mg a cada 8h por 7-10 dias para infecções anaeróbias e amebíase; 250mg 8/8h por 5 dias para giardíase; 400mg 12/12h por 7 dias para vaginose/tricomoníase).'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['EV'],
      apres: ['bolsa500'],
      tipo: 'mg',
      min: 500,
      max: 500,
      padrao: 500,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL: Adulto EV: 500mg a cada 6-8h. Einstein Adultos: Bolsa pronta 100 mL (5 mg/mL) infundida em 20 a 60 min.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 1, idadeMaxAnos: 11 },
      vias: ['VO'],
      apres: ['susp40'],
      tipo: 'mg_kg_dia',
      min: 20,
      max: 40,
      padrao: 30,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 10,
      fonte: 'BULA',
      trecho: 'Bula Flagyl Pediátrico / SBP: Giardíase e amebíase: 20 a 40 mg/kg/dia (base metronidazol ativo) divididos em 3 tomadas a cada 8 horas por 5 a 10 dias. 1 mL da suspensão = 25 mg de base ativa.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 1, idadeMaxAnos: 11 },
      vias: ['EV'],
      apres: ['bolsa500'],
      tipo: 'mg_kg_dia',
      min: 22.5,
      max: 45,
      padrao: 22.5,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL: Pediatria > 4 semanas EV: manutenção de 7,5 mg/kg a cada 8 horas (totalizando 22,5 mg/kg/dia; dose de ataque 15 mg/kg). Infundir em 30 a 60 minutos (Einstein Pediátrico).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO', 'EV'],
      tipo: 'mg_dia',
      valor: 4000,
      fonte: 'HSL',
      trecho: 'HSL: Adulto: dose máxima diária de 4 g/dia via oral ou intravenosa.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 1, idadeMaxAnos: 11 },
      vias: ['VO', 'EV'],
      tipo: 'mg_kg_dia',
      valor: 50,
      fonte: 'HSL',
      trecho: 'HSL: Pediatria: 50 mg/kg/dia (não deve exceder 4 g/dia).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade ao metronidazol, outros derivados imidazólicos ou a qualquer componente da fórmula.',
      fonte: 'BULA',
      trecho: 'Bula Flagyl: Hipersensibilidade aos derivados imidazólicos.'
    }
  ],
  notas: {
    indicacao: 'Profilaxia e tratamento de infecções graves causadas por bactérias anaeróbicas suscetíveis (Bacteroides fragilis, Clostridium perfringens, Fusobacterium, Peptococcus, Peptostreptococcus), infecções intra-abdominais, pélvicas, colite pseudomembranosa por Clostridioides difficile, abscesso hepático amebiano, amebíase intestinal, giardíase, tricomoníase e vaginose bacteriana (Gardnerella vaginalis) (HSL / Einstein / Bula).',
    administracao: 'VO: Administrar preferencialmente com alimentos ou leite para diminuir intolerância gastrointestinal, epigastralgia, náuseas e gosto metálico característico (HSL). EV: Solução pronta para infusão a 5 mg/mL. Não congelar nem refrigerar (risco de precipitação de cristais). Velocidade de infusão: infundir em 20 a 60 minutos (5 mL/min; protocolo HSL recomenda 60 min para prevenção de flebite). Em pediatria infundir em 30 a 60 minutos (Einstein Pediátrico).',
    cuidados: 'EFEITO DISSULFIRAM/ANTABUSE: Estritamente proibido consumo de bebidas alcoólicas ou medicamentos contendo álcool/propilenoglicol durante o tratamento e por pelo menos 48 a 72 horas após o término da última dose (causa reação grave com rubor facial, taquicardia, náuseas, vômitos em jato, hipotensão e sudorese intensa). Cautela em pacientes com doenças ativas ou crônicas graves do sistema nervoso central ou periférico (risco de encefalopatia, ataxia, convulsões e neuropatia periférica com parestesias em tratamentos prolongados). Pode escurecer a cor da urina (castanho-avermelhado devido a metabólitos hidrossolúveis inócuos). Interação com varfarina (potencializa anticoagulação e eleva INR).',
    ajuste: 'Insuficiência renal: ClCr < 10 mL/min (não em diálise): reduzir a dose em 50% administrando a cada 12 horas (HSL). Hemodiálise intermitente: o fármaco é dialisável; repor 500 mg após a sessão de hemodiálise ou manter 500 mg a cada 8-12h. Hemodiálise contínua: 500 mg a cada 6-12h (HSL). Insuficiência hepática: metabolização hepática intensa; reduzir 50% da dose em insuficiência hepática grave / cirrose descompensada Child-Pugh C (HSL).'
  }
};

export default metronidazol;
