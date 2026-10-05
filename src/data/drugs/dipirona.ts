import { Farmaco } from '../../types';

export const dipirona: Farmaco = {
  id: 'dipirona',
  nome: 'Dipirona',
  categoria: 'Analgésicos e Anti-inflamatórios',
  busca: 'metamizol novalgina dipirona sodica',
  classe: 'Analgésico e antipirético',
  fontes: { HSL: '05/05/2025', EINP: '', EINA: '' },
  snPadrao: 'dor ou febre',
  acessoFonte: 'RENAME 2024 (Componente Básico): comprimido 500 mg, solução oral 500 mg/mL e ampola 500 mg/mL. Farmácia Popular: não consta no elenco.',
  apresentacoes: [
    {
      id: 'cp1g',
      forma: 'cp',
      nome: 'Comprimido 1 g',
      comercial: 'Novalgina',
      conc: '1g',
      rotulo: 'Dipirona 1g',
      mg: 1000,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Fracionamento em ½ comprimido: confirmar presença de sulco (informação não consta nas fontes).'
    },
    {
      id: 'cp500',
      forma: 'cp',
      nome: 'Comprimido 500 mg',
      conc: '500mg',
      rotulo: 'Dipirona 500mg',
      mg: 500,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false }
    },
    {
      id: 'gts',
      forma: 'gotas',
      nome: 'Gotas 500 mg/mL (20 gotas/mL)',
      comercial: 'Novalgina',
      conc: '500mg/mL',
      rotulo: 'Dipirona 500mg/mL gotas',
      mgml: 500,
      gotasml: 20,
      frascoMl: 20,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false }
    },
    {
      id: 'sol',
      forma: 'sol',
      nome: 'Solução oral 50 mg/mL',
      comercial: 'Novalgina',
      conc: '50mg/mL',
      rotulo: 'Dipirona 50mg/mL solução oral',
      mgml: 50,
      frascoMl: 100,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: false, fp: false },
      obs: 'Solução oral contém tartrazina; em diabéticos preferir comprimidos ou gotas (HSL).'
    },
    {
      id: 'amp',
      forma: 'amp',
      nome: 'Ampola 500 mg/mL – 2 mL',
      conc: '500mg/mL',
      rotulo: 'Dipirona 500mg/mL',
      mgml: 500,
      volml: 2,
      vias: ['EV', 'IM'],
      disp: '1 ampola',
      acesso: { rename: true, fp: false }
    },
    {
      id: 'sup',
      forma: 'sup',
      nome: 'Supositório infantil 300 mg',
      comercial: 'Novalgina',
      conc: '300mg',
      rotulo: 'Dipirona 300mg supositório infantil',
      mg: 300,
      frac: 1,
      vias: ['VR'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false }
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 31 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 500,
      max: 1000,
      padrao: 1000,
      dosesDia: [1, 4],
      fonte: 'HSL',
      trecho: 'Adulto e adolescentes acima de 15 anos (> 31kg) — VO: 500 - 1000 mg até 4 vezes/dia.'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 31 }] },
      vias: ['EV', 'IM'],
      tipo: 'mg',
      min: 1000,
      max: 2500,
      padrao: 1000,
      dosesDia: [1, 4],
      fonte: 'HSL',
      trecho: 'Adulto e adolescentes acima de 15 anos (> 31kg) — EV ou IM: 1000 - 2500 mg até 4 vezes/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 3, pesoMax: 31 },
      vias: ['VO'],
      tipo: 'mg_kg_dose',
      min: 10,
      max: 15,
      padrao: 15,
      dosesDia: [1, 4],
      fonte: 'HSL',
      trecho: 'Pediatria — VO: 10 - 15 mg/kg/dose até 4 vezes/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 3, pesoMin: 5, pesoMax: 31 },
      vias: ['VR'],
      apres: ['sup'],
      tipo: 'mg',
      min: 300,
      max: 300,
      padrao: 300,
      dosesDia: [1, 4],
      fonte: 'HSL',
      trecho: 'Supositório — Crianças com peso superior a 5kg: 1 supositório infantil (300mg), até 4 vezes/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 12, pesoMin: 9, pesoMax: 31 },
      vias: ['EV'],
      tipo: 'mg_kg_dose',
      min: 20,
      max: 25,
      padrao: 20,
      intervaloFixo: 6,
      fonte: 'EINP',
      trecho: 'Einstein Pediátrico: Crianças de 20 a 25 mg/kg de 6 em 6 horas.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 31 }] },
      tipo: 'mg_dia',
      valor: 5000,
      fonte: 'HSL',
      trecho: 'Dose Máxima: 5000 mg/dia.'
    },
    {
      pub: 'ped',
      se: { pesoMax: 54 },
      tipo: 'mg_dia_peso',
      faixas: [
        [5, 9, 500],
        [9, 16, 1000],
        [16, 24, 1500],
        [24, 31, 2000],
        [31, 46, 3000],
        [46, 54, 3500]
      ],
      fonte: 'HSL',
      trecho: 'Tabela de dose máxima diária em pediatria (5-8kg: 500mg; 9-15kg: 1000mg; 16-23kg: 1500mg; 24-30kg: 2000mg; 31-45kg: 3000mg; 46-53kg: 3500mg).'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 3 },
      vias: ['VO', 'VR', 'EV', 'IM'],
      msg: 'Não deve ser administrada em crianças menores de 3 meses de idade.',
      fonte: 'HSL',
      trecho: 'Pediatria: Não deve ser administrada em crianças menores de 3 meses de idade.',
      strong: true
    },
    {
      pub: 'ped',
      se: { pesoMax: 5 },
      vias: ['VO', 'VR', 'EV', 'IM'],
      msg: 'Não deve ser administrada em crianças com peso inferior a 5kg.',
      fonte: 'HSL',
      trecho: 'Pediatria: Não deve ser administrada em crianças com peso inferior a 5kg.',
      strong: true
    },
    {
      pub: 'ped',
      se: { ou: [{ idadeMaxMeses: 12 }, { pesoMax: 9 }] },
      vias: ['EV'],
      msg: 'EV contraindicada em menores de 1 ano ou < 9kg (adotar VO).',
      fonte: 'EINP',
      trecho: 'Einstein Pediátrico: Contraindicado o uso intravenoso em crianças com menos de 1 ano de idade ou pesando menos de 9 kg.',
      strong: true
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 50,
    concUsualPed: 25,
    volPadraoAdulto: [
      [1000, 20],
      [2500, 50]
    ],
    volOpcoes: [10, 20, 50, 100, 250],
    velMaxMgMin: 500,
    tempo: {
      adulto: { padrao: 15, txt: 'Velocidade não superior a 500 mg/min (HSL). Infusão em 15 min.' },
      ped: { min: 10, max: 20, padrao: 15, txt: 'Infusão em 10 a 20 minutos (Einstein Pediátrico).' }
    },
    fonteTxt: 'Sírio-Libanês: diluir com SF ou SG5% (conc. máx 50 mg/mL). Einstein Adulto cita 500 mg/mL direta; adotada a mais segura (50 mg/mL).'
  },
  conflitos: [
    {
      vias: ['EV'],
      txt: 'Conflito de diluição EV: Einstein Adultos permite sem diluição (500 mg/mL direto); HSL exige diluição até máx. 50 mg/mL. Adotada a mais restritiva (HSL: 50 mg/mL).'
    }
  ],
  notas: {
    indicacao: 'Analgésico e antipirético.',
    administracao: 'VO: ingerir com líquidos. EV: administrar lentamente em infusão (máx. 500 mg/min). IM: injeção profunda no quadrante superior externo da nádega.',
    cuidados: 'Risco de hipotensão severa em infusão EV rápida. Contraindicado em casos de alergia a pirazolonas e porfiria hepática aguda.',
    ajuste: 'Em doses elevadas em insuficiência renal/hepática grave, evitar tratamentos prolongados.'
  }
};

export default dipirona;
