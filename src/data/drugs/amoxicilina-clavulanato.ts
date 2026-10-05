import { Farmaco } from '../../types';

export const amoxicilinaClavulanato: Farmaco = {
  id: 'amoxicilina_clavulanato',
  nome: 'Amoxicilina + Clavulanato de Potássio',
  categoria: 'Antimicrobianos',
  busca: 'clavulin novamox clavulanato amox amoxicilina clavulin bd betalactamase sinot clav',
  classe: 'Antimicrobiano, Penicilina associada a Inibidor de Beta-Lactamase',
  fontes: { HSL: '31/03/2022', EINP: '2024' },
  snPadrao: 'infecção bacteriana',
  acessoFonte: 'RENAME 2024 (Componente Básico): comprimido 500 mg + 125 mg, comprimido 875 mg + 125 mg, suspensão oral 50 mg/mL + 12,5 mg/mL (250+62,5mg/5mL) e suspensão oral 80 mg/mL + 11,4 mg/mL (400+57mg/5mL). Farmácia Popular: não consta no elenco.',
  apresentacoes: [
    {
      id: 'cp875',
      forma: 'cp',
      nome: 'Comprimido 875 mg + 125 mg (BD)',
      comercial: 'Clavulin BD',
      conc: '875mg + 125mg',
      rotulo: 'Amoxicilina + Clavulanato 875mg + 125mg',
      mg: 875,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Administrar no início da refeição para minimizar intolerância gastrintestinal. Não partir.'
    },
    {
      id: 'cp500',
      forma: 'cp',
      nome: 'Comprimido 500 mg + 125 mg',
      comercial: 'Clavulin',
      conc: '500mg + 125mg',
      rotulo: 'Amoxicilina + Clavulanato 500mg + 125mg',
      mg: 500,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Padronizado na RENAME. Posologia habitual de 8 em 8 horas.'
    },
    {
      id: 'susp400',
      forma: 'sol',
      nome: 'Suspensão oral 400 mg + 57 mg / 5 mL (80 mg/mL de amoxicilina)',
      comercial: 'Clavulin BD / Novamox 2x',
      conc: '80mg/mL (amox)',
      rotulo: 'Amoxicilina + Clavulanato suspensão 400mg + 57mg / 5mL',
      mgml: 80,
      frascoMl: 70,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      obs: 'Formulação BD (2×/dia – de 12/12h). Frasco de 70 mL. Conservar sob refrigeração após reconstituir (validade 7 dias) (HSL).'
    },
    {
      id: 'susp250',
      forma: 'sol',
      nome: 'Suspensão oral 250 mg + 62,5 mg / 5 mL (50 mg/mL de amoxicilina)',
      comercial: 'Clavulin',
      conc: '50mg/mL (amox)',
      rotulo: 'Amoxicilina + Clavulanato suspensão 250mg + 62,5mg / 5mL',
      mgml: 50,
      frascoMl: 75,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      obs: 'Formulação convencional (3×/dia – de 8/8h). Conservar sob refrigeração após reconstituir (validade 7 dias) (HSL).'
    },
    {
      id: 'fap1g',
      forma: 'fap',
      nome: 'Frasco-ampola 1 g + 200 mg',
      comercial: 'Clavulin IV',
      conc: '1g + 200mg',
      rotulo: 'Amoxicilina + Clavulanato 1g + 200mg',
      mg: 1000,
      reconstMl: 20,
      reconstDil: 'AD',
      vias: ['EV'],
      disp: '1 frasco-ampola',
      acesso: { rename: false, fp: false },
      obs: 'Reconstituir com 20 mL de AD. Diluir em SF para infusão (estabilidade 4h TA ou 8h ref – Einstein Pediátrico).'
    },
    {
      id: 'fap500',
      forma: 'fap',
      nome: 'Frasco-ampola 500 mg + 100 mg',
      comercial: 'Clavulin IV',
      conc: '500mg + 100mg',
      rotulo: 'Amoxicilina + Clavulanato 500mg + 100mg',
      mg: 500,
      reconstMl: 10,
      reconstDil: 'AD',
      vias: ['EV'],
      disp: '1 frasco-ampola',
      acesso: { rename: false, fp: false }
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 500,
      max: 875,
      padrao: 875,
      dosesDia: [2, 3],
      dosesPadrao: 2,
      fonte: 'HSL',
      trecho: 'Adulto: Oral: 250-875mg a cada 8-12 horas;'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 40 }] },
      vias: ['EV'],
      tipo: 'mg',
      min: 1000,
      max: 2000,
      padrao: 1000,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Adulto: EV: 1-2g, a cada 6-8h.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 2, pesoMax: 40 },
      apres: ['susp400'],
      vias: ['VO'],
      tipo: 'mg_kg_dia',
      min: 25,
      max: 45,
      padrao: 45,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'HSL',
      trecho: 'Pediatria: Oral > 2 meses a 2 anos e > 2 anos: 25 a 45mg/kg/dia (base amoxicilina) em 2 vezes/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 2, pesoMax: 40 },
      apres: ['susp250'],
      vias: ['VO'],
      tipo: 'mg_kg_dia',
      min: 20,
      max: 40,
      padrao: 40,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'HSL',
      trecho: 'Pediatria: Oral 20 a 40mg/kg/dia a cada 8 horas.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 3, pesoMax: 40 },
      vias: ['EV'],
      tipo: 'mg_kg_dose',
      min: 30,
      max: 30,
      padrao: 30,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Pediatria: EV > 3 meses a 12 anos: 30mg/kg, a cada 6-8h.'
    },
    {
      pub: 'ped',
      se: { idadeMaxMeses: 3 },
      vias: ['EV'],
      tipo: 'mg_kg_dose',
      min: 30,
      max: 30,
      padrao: 30,
      dosesDia: [2, 3],
      dosesPadrao: 2,
      fonte: 'HSL',
      trecho: 'Pediatria: Crianças de 0 a 3 meses: 30mg/kg, a cada 8-12h.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 1750,
      fonte: 'HSL',
      trecho: 'Dose Máxima: Adulto e crianças com peso >= 40kg: VO: 1750mg/dia'
    },
    {
      pub: 'ped',
      se: { pesoMax: 40 },
      tipo: 'mg_kg_dia',
      valor: 45,
      fonte: 'HSL',
      trecho: '< 40kg: 40-45mg/kg/dia'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 2 },
      vias: ['VO'],
      msg: 'Uso oral não recomendado para lactentes menores de 2 meses de idade.',
      fonte: 'HSL',
      trecho: 'Pediatria: Oral > 2 meses a 2 anos:',
      strong: true
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'AD', 'Ringer-Lactato'],
    concMax: 12,
    concUsualPed: 10,
    volOpcoes: [20, 50, 100],
    tempo: {
      adulto: { min: 4, padrao: 30, max: 40 },
      ped: { min: 30, padrao: 30, max: 40 }
    },
    fonteTxt: 'Reconstituir 1g em 20 mL de AD. Diluir em 50 a 100 mL de SF ou Ringer-Lactato. Administrar por infusão lenta em 30 a 40 minutos (ou IV direto lento em 3 a 4 min). Estabilidade diluído: 4h em TA ou 8h refrigerado (Einstein Pediátrico / HSL).'
  },
  notas: {
    indicacao: 'Tratamento da otite média, sinusite e infecções causadas por organismos susceptíveis, envolvendo o trato respiratório inferior, pele e estrutura da pele e do trato urinário; mesmo espectro que amoxicilina com cobertura adicional de produtores de beta-lactamase (HSL).',
    administracao: 'Oral: Pode ser ingerido com ou sem alimentos, no início da refeição, pois minimiza o risco de intolerância gastrintestinal (HSL). EV: Direta de 3-4 min e infusão lenta de 30-40 min (HSL / Einstein).',
    cuidados: 'Contraindicado em pacientes com histórico de reações alérgicas a penicilinas ou histórico prévio de icterícia/disfunção hepática associada à amoxicilina + clavulanato. Suspensão oral: conservar sob refrigeração entre 2 e 8ºC por no máximo 7 dias após o preparo.',
    ajuste: 'Insuficiência renal: Clcr > 30 mL/min (sem ajuste); Clcr 10-29 mL/min (VO 250-500mg a cada 12h, não usar comp. 875mg; EV dose de ataque 1-2g seguido de 500mg 12/12h); Clcr < 10 mL/min (VO 250-500mg 24/24h; EV ataque 1-2g seguido de 500mg 24/24h). Insuficiência hepática: Não é necessário ajuste de dose (HSL).'
  }
};

export default amoxicilinaClavulanato;
