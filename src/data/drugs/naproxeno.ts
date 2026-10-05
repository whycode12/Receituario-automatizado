import { Farmaco } from '../../types';

export const naproxeno: Farmaco = {
  id: 'naproxeno',
  nome: 'Naproxeno',
  categoria: 'Analgésicos e Anti-inflamatórios',
  busca: 'flanax naprosyn naproxeno sodico dor inflamacao aine',
  classe: 'Anti-inflamatório não esteroidal (AINE), analgésico e antipirético',
  dosePratica: 'Adulto: 500 mg (ou 550 mg sódico) VO de 12/12h por até 5 a 7 dias (ou 250/275 mg de 12/12h para dor leve; máx. 1.000 mg/dia para analgesia e 1.500 mg/dia para afecções reumatológicas). Pediatria (> 12 anos): 5 a 6 mg/kg/dose de 12/12h (se < 60 kg) ou 250 a 375 mg de 12/12h (se > 60 kg) (máx. 1.000 mg/dia). Ingerir com água, com ou sem alimentos.',
  fontes: { HSL: '05/03/2025', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'dor ou inflamação',
  acessoFonte: 'RENAME 2024: Naproxeno comprimido 250 mg e 500 mg consta no Componente Especializado da Assistência Farmacêutica (CEAF) para artrite reumatoide, artrite psoriásica, espondilite e osteoartrite. Não consta no Farmácia Popular.',
  apresentacoes: [
    {
      id: 'cp500',
      forma: 'cp',
      nome: 'Comprimido 500 mg',
      comercial: 'Flanax / Naprosyn',
      conc: '500mg',
      rotulo: 'Naproxeno 500mg',
      mg: 500,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Consta no CEAF da RENAME. Dose anti-inflamatória e analgésica clássica de pronto-socorro (PSZerado). Ingerir com líquido, com ou sem alimentos.'
    },
    {
      id: 'cp550',
      forma: 'cp',
      nome: 'Comprimido revestido 550 mg (naproxeno sódico)',
      comercial: 'Flanax 550mg',
      conc: '550mg',
      rotulo: 'Naproxeno sódico 550mg',
      mg: 550,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Naproxeno sódico (absorção mais rápida). Tomar 1 comprimido 1x/dia ou a cada 12h conforme prescrição (Bula / HSL).'
    },
    {
      id: 'cp250',
      forma: 'cp',
      nome: 'Comprimido 250 mg',
      comercial: 'Naprosyn',
      conc: '250mg',
      rotulo: 'Naproxeno 250mg',
      mg: 250,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Consta no CEAF da RENAME. Adequado para doses fracionadas, adolescentes > 60 kg e titulação inicial (HSL).'
    },
    {
      id: 'cp275',
      forma: 'cp',
      nome: 'Comprimido revestido 275 mg (naproxeno sódico)',
      comercial: 'Flanax 275mg',
      conc: '275mg',
      rotulo: 'Naproxeno sódico 275mg',
      mg: 275,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Apresentação padronizada no HSL. 1 comprimido 1 a 2 vezes ao dia (a cada 12h ou 24h).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      apres: ['cp500', 'cp550'],
      tipo: 'mg',
      min: 500,
      max: 550,
      padrao: 500,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      duracaoMaxDias: 7,
      fonte: 'PSZERADO',
      trecho: 'PSZerado p. 120 e 192: Naproxeno 500 mg: Tomar 1 comprimido a cada 12 horas, por 5 a 7 dias (ou 550 mg ao dia).'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      apres: ['cp250', 'cp275'],
      tipo: 'mg',
      min: 250,
      max: 275,
      padrao: 275,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      duracaoMaxDias: 10,
      fonte: 'HSL',
      trecho: 'HSL: Adulto: 275-550mg/dia, VO, que podem ser fracionados em 2 tomadas (ex.: 275 mg 12/12h).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 12, pesoMax: 60 },
      vias: ['VO'],
      tipo: 'mg_kg_dose',
      min: 5,
      max: 6,
      padrao: 5,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      fonte: 'HSL',
      trecho: 'HSL: Pediatria (> 12 Anos) Dor: < 60kg: 5-6mg/kg/dose 12/12h. Dose máxima 1.000mg/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 12, pesoMin: 60 },
      vias: ['VO'],
      apres: ['cp250', 'cp275'],
      tipo: 'mg',
      min: 250,
      max: 375,
      padrao: 250,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      fonte: 'HSL',
      trecho: 'HSL: Pediatria (> 12 Anos) Dor: > 60kg: 250-375mg 2x/dia. Dose máxima 1.000mg/dia.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 1000,
      fonte: 'HSL',
      trecho: 'Dose máxima: 1.000mg/dia para analgesia geral (até 1.500mg/dia para artrite reumatoide, osteoartrite e espondilite anquilosante).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 1000,
      fonte: 'HSL',
      trecho: 'Dose máxima pediátrica (> 12 anos): 1.000mg/dia.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 12 },
      vias: ['VO'],
      msg: 'Contraindicado para menores de 12 anos de idade.',
      fonte: 'HSL',
      trecho: 'Pediatria: Uso estabelecido apenas para > 12 anos. Contraindicado em menores de 12 anos sem acompanhamento especializado.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Alívio da dor em situações com componente inflamatório (dor de garganta, odontalgia, dismenorreia/dor pélvica, sintomas de gripe e resfriado), afecções periarticulares e musculoesqueléticas (torcicolo, bursite, tendinite, lombalgia, artralgia, osteoartrite, espondilite anquilosante) e lesões pós-traumáticas (entorses, contusões e distensões) (HSL / PSZerado).',
    administracao: 'VO: ingerir o comprimido inteiro com um copo d’água, sem mastigar. Pode ser administrado em jejum ou junto a alimentos/leite se houver desconforto gástrico (HSL / Bula).',
    cuidados: 'Contraindicado em úlcera péptica ativa, histórico de hemorragia digestiva ou perfuração gastrintestinal relacionada a AINEs, insuficiência cardíaca grave, insuficiência renal severa (ClCr < 30 mL/min), história de reações alérgicas (asma, urticária, rinite) induzidas por AAS ou outros AINEs e no 3º trimestre de gestação. Risco aumentado de eventos cardiovasculares trombóticos com o uso prolongado de doses elevadas.',
    ajuste: 'Insuficiência renal: ClCr > 30 mL/min: usar com cautela e considerar redução de dose; ClCr < 30 mL/min ou Creatinina > 2 mg/dL: contraindicado (HSL). Insuficiência hepática: usar com cautela e considerar redução posológica. Geriatria: iniciar com a menor dose eficaz.'
  }
};

export default naproxeno;
