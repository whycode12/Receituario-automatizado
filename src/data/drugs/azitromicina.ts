import { Farmaco } from '../../types';

export const azitromicina: Farmaco = {
  id: 'azitromicina',
  nome: 'Azitromicina',
  categoria: 'Antimicrobianos',
  busca: 'zitromax azitromicina macrolideo azitrolab astro clamed zithromax',
  classe: 'Antimicrobiano, Macrolídeo',
  fontes: { HSL: '10/06/2016' },
  snPadrao: 'infecção bacteriana',
  acessoFonte: 'RENAME 2024 (Componente Básico): comprimido 500 mg e pó para suspensão oral 40 mg/mL (600 mg e 900 mg). Farmácia Popular: não consta no elenco do programa.',
  apresentacoes: [
    {
      id: 'cp500',
      forma: 'cp',
      nome: 'Comprimido 500 mg',
      comercial: 'Zitromax',
      conc: '500mg',
      rotulo: 'Azitromicina 500mg',
      mg: 500,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Não utilizar comprimidos em crianças com peso < 45 kg (adotar suspensão oral). Administrar 1h antes ou 2h após refeições (HSL).'
    },
    {
      id: 'susp40_600',
      forma: 'sol',
      nome: 'Pó para suspensão oral 600 mg (40 mg/mL – 15 mL)',
      comercial: 'Zitromax',
      conc: '40mg/mL',
      rotulo: 'Azitromicina 40mg/mL suspensão oral 600mg (15mL)',
      mgml: 40,
      frascoMl: 15,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      obs: 'Após reconstituição: estável por 5 dias em temperatura ambiente. Agitar vigorosamente antes de cada tomada (HSL).'
    },
    {
      id: 'susp40_900',
      forma: 'sol',
      nome: 'Pó para suspensão oral 900 mg (40 mg/mL – 22,5 mL)',
      comercial: 'Zitromax',
      conc: '40mg/mL',
      rotulo: 'Azitromicina 40mg/mL suspensão oral 900mg (22,5mL)',
      mgml: 40,
      frascoMl: 22.5,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      obs: 'Frasco de 22,5 mL para tratamentos de maior duração ou crianças de maior peso. Estável por 5 dias em TA (HSL).'
    },
    {
      id: 'fap500',
      forma: 'fap',
      nome: 'Frasco-ampola 500 mg (pó para solução injetável)',
      comercial: 'Zitromax IV',
      conc: '500mg',
      rotulo: 'Azitromicina 500mg IV',
      mg: 500,
      reconstMl: 4.8,
      reconstDil: 'AD',
      vias: ['EV'],
      disp: '1 frasco-ampola',
      acesso: { rename: false, fp: false },
      obs: 'Reconstituir com 4,8 mL de AD (100 mg/mL). Diluir em 250 mL (1h) ou 500 mL (3h). Proibido bolus ou IM (HSL).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 45 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 500,
      max: 500,
      padrao: 500,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      duracaoMaxDias: 5,
      fonte: 'HSL',
      trecho: 'Adulto: Oral: 500mg/dia por 3 dias ou 500mg no primeiro dia e 250mg, 1 vez/dia, do segundo ao quinto dia. Para infecções por Chlamydia trachomatis, Haemophilus ducreyi ou Neisseria gonorrhoeae: 1g dose única;'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 45 }] },
      vias: ['EV'],
      tipo: 'mg',
      min: 500,
      max: 500,
      padrao: 500,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      fonte: 'HSL',
      trecho: 'Adulto: EV: 500mg/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 6, pesoMax: 45 },
      vias: ['VO'],
      tipo: 'mg_kg_dia',
      min: 10,
      max: 10,
      padrao: 10,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      duracaoMaxDias: 5,
      fonte: 'HSL',
      trecho: 'Pediatria: Oral suspensão: 10mg/kg/dia por 3 dias ou 10mg/kg no primeiro dia e 5mg/kg, 1 vez/dia, do segundo ao quinto dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 6, pesoMax: 45 },
      vias: ['EV'],
      tipo: 'mg_kg_dia',
      min: 10,
      max: 10,
      padrao: 10,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      maxDoseMg: 500,
      fonte: 'HSL',
      trecho: 'Pediatria: EV: Infecções graves: 10mg/kg, 1 vez/dia, até 500mg/dia.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 2000,
      fonte: 'HSL',
      trecho: 'Dose Máxima: VO: Adulto e Pediatria: 2g.'
    },
    {
      pub: 'ped',
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 2000,
      fonte: 'HSL',
      trecho: 'Dose Máxima: VO: Adulto e Pediatria: 2g.'
    },
    {
      pub: 'adulto',
      vias: ['EV'],
      tipo: 'mg_dia',
      valor: 500,
      fonte: 'HSL',
      trecho: 'Dose Máxima: EV: Adulto: 500mg/dose.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { pesoMax: 45 },
      apres: ['cp500'],
      vias: ['VO'],
      msg: 'Comprimidos não devem ser utilizados por crianças pesando menos de 45 kg (adotar suspensão oral).',
      fonte: 'HSL',
      trecho: 'Comprimidos: Não devem ser utilizados por crianças pesando < 45kg.',
      strong: true
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%', 'Ringer-Lactato'],
    concMax: 2,
    volOpcoes: [250, 500],
    tempo: {
      adulto: { min: 60, padrao: 60, max: 180 },
      ped: { min: 60, padrao: 60, max: 180 }
    },
    fonteTxt: 'Reconstituir com 4,8 mL de AD (100 mg/mL). Diluição: 250 mL (2 mg/mL) para infundir em 1 hora, ou 500 mL (1 mg/mL) para infundir em 3 horas. Soluções: SF, SG ou RL. Concentração máxima: 2 mg/mL. Proibido bolus ou IM (HSL).'
  },
  notas: {
    indicacao: 'Tratamento de infecções causadas por bactérias suscetíveis gram-positivas, gram-negativas e anaeróbicas. Otite média aguda, faringite/amigdalite por S. pyogenes, infecções de pele e partes moles, pneumonia comunitária (C. pneumoniae, H. influenzae, S. pneumoniae, M. pneumoniae), DIP, cancroide, uretrite e cervicite não gonocócica (C. trachomatis), sinusite bacteriana e exacerbação bacteriana de DPOC (HSL).',
    administracao: 'Oral: Administrar 1h antes ou 2h após as refeições (HSL). EV: Diluído em 500 mL (1 mg/mL) em 3 horas; quando em 250 mL (2 mg/mL) em 1 hora. Não administrar em bolus ou IM (HSL).',
    cuidados: 'Contraindicado em pacientes com hipersensibilidade à azitromicina, eritromicina ou a qualquer antibiótico macrolídeo/cetolídeo. Utilizar com cautela em pacientes com intervalo QT prolongado ou arritmias. Suspensão oral contém açúcar.',
    ajuste: 'Insuficiência renal: Não é necessário ajuste de dose. Cautela se Clcr < 10 mL/minuto. Hemodiálise: Não dialisável, nenhum suplemento de dose é necessário. Insuficiência hepática: Não é necessário ajuste; usar com cautela pelo potencial de hepatotoxicidade (rara) (HSL).'
  }
};

export default azitromicina;
