import { Farmaco } from '../../types';

export const levofloxacino: Farmaco = {
  id: 'levofloxacino',
  nome: 'Levofloxacino (Hemi-hidratado)',
  categoria: 'Antimicrobianos',
  busca: 'levofloxacino levaquin quinolona fluorquinolona pneumonia comunitaria sinusite itu complicada pielonefrite prostatite',
  classe: 'Antibacteriano, Fluoroquinolona respiratória de 3ª geração de amplo espectro com potente atividade contra Streptococcus pneumoniae e bacilos Gram-negativos',
  dosePratica: 'Adulto: VO ou EV: 500 mg uma vez ao dia (24/24h) por 7 a 14 dias (pneumonia comunitária, sinusite bacteriana aguda, ITU complicada e pielonefrite) ou 750 mg uma vez ao dia por 5 dias (esquema de curta duração / alta dose para PAC ou sinusite). Dose máxima: 750 mg/dia (ou 500 mg 12/12h em infecções graves com função renal normal). EV: bolsa pronta de 100 mL (5 mg/mL) infundida em 60 minutos (500 mg) ou 90 minutos (750 mg). Pediatria: uso excepcional e restrito a infecções refratárias sem alternativa (risco de artropatia cartilaginosa). Black Box Warning: risco de tendinite/ruptura do tendão de Aquiles, neuropatia periférica e prolongamento do intervalo QT.',
  fontes: { HSL: '05/03/2025', EINA: '2026', EINP: '2026', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'infecção bacteriana',
  acessoFonte: 'RENAME 2024: Comprimidos de 250 mg e 500 mg constam no Componente Estratégico da Assistência Farmacêutica (CESAF) do SUS para Tuberculose Drogarresistente e infecções graves. Farmácia Popular: Não consta no elenco comercial.',
  apresentacoes: [
    {
      id: 'cp500',
      forma: 'cp',
      nome: 'Comprimido 500 mg',
      comercial: 'Levaquin / Tamiram / Genérico',
      conc: '500mg',
      rotulo: 'Levofloxacino 500mg comprimido',
      mg: 500,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME (CESAF). Ingerir com água, com ou sem alimentos. NÃO partir nem mastigar. Respeitar intervalo mínimo de 2 horas antes ou após antiácidos, cálcio, ferro ou magnésio (HSL / Bula).'
    },
    {
      id: 'cp750',
      forma: 'cp',
      nome: 'Comprimido 750 mg',
      comercial: 'Levaquin / Tamiram / Genérico',
      conc: '750mg',
      rotulo: 'Levofloxacino 750mg comprimido',
      mg: 750,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Indicado para tratamento em dose única diária de curta duração (5 dias) em pneumonia adquirida na comunidade ou sinusite bacteriana.'
    },
    {
      id: 'bolsa500',
      forma: 'sol',
      nome: 'Solução Injetável 5 mg/mL (Bolsa 100 mL - 500 mg)',
      comercial: 'Levaquin IV / Isofarma / Genérico',
      conc: '5mg/mL (500mg/100mL)',
      rotulo: 'Levofloxacino 500mg/100mL bolsa injetável',
      mg: 500,
      volml: 100,
      frascoMl: 100,
      vias: ['EV'],
      disp: '1 bolsa',
      acesso: { rename: false, fp: false },
      obs: 'Solução pronta para infusão venosa (5 mg/mL em SG 5%). Não requer diluição adicional. Infundir em no mínimo 60 minutos (Einstein Adultos / HSL).'
    }
  ],
  ev: {
    diluentes: ['SG 5%', 'SF 0,9%', 'Ringer Lactato'],
    concMax: 5,
    volPadraoAdulto: [[500, 100]],
    volOpcoes: [100],
    tempo: {
      adulto: { min: 60, padrao: 60, max: 90, txt: '60 minutos para dose de 500 mg; 90 minutos para dose de 750 mg (Einstein Adultos / HSL)' },
      ped: { min: 60, padrao: 60, max: 90, txt: '60 minutos (Einstein Pediátrico / HSL)' }
    },
    fonteTxt: 'Solução límpida amarelo-esverdeada pronta para uso a 5 mg/mL. Infusão intravenosa lenta: infundir a bolsa de 500 mg (100 mL) em no mínimo 60 minutos (se dose de 750 mg, infundir em 90 minutos). NUNCA administrar em bolus rápido ou intramuscular (risco severo de hipotensão profunda, flebite e toxicidade endotelial).'
  },
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 18 },
      vias: ['VO'],
      apres: ['cp500', 'cp750'],
      tipo: 'mg',
      min: 500,
      max: 750,
      padrao: 500,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL: Adulto Oral: 500-750mg VO, 1 vez ao dia (Pneumonia comunitária: 500mg 1x/dia por 7-14 dias ou 750mg 1x/dia por 5 dias; Sinusite aguda: 500mg 1x/dia por 10-14 dias ou 750mg 1x/dia por 5 dias; ITU complicada/pielonefrite: 750mg 1x/dia por 5 dias ou 500mg 1x/dia por 7-14 dias).'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 18 },
      vias: ['EV'],
      apres: ['bolsa500'],
      tipo: 'mg',
      min: 500,
      max: 500,
      padrao: 500,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL: Adulto EV: 500mg a cada 24 horas em infusão lenta de 60 minutos.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 6, idadeMaxAnos: 4 },
      vias: ['VO', 'EV'],
      apres: ['cp500', 'bolsa500'],
      tipo: 'mg_kg_dia',
      min: 16,
      max: 20,
      padrao: 16,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL: Pediatria < 5 anos: 8 a 10mg/kg/dose a cada 12 horas (totalizando 16 a 20mg/kg/dia). Uso excepcional restrito.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 5, idadeMaxAnos: 17 },
      vias: ['VO', 'EV'],
      apres: ['cp500', 'bolsa500'],
      tipo: 'mg_kg_dia',
      min: 10,
      max: 10,
      padrao: 10,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL: Pediatria ≥ 5 anos: 10mg/kg/dose 1 vez ao dia (máximo 500mg/dia). Uso excepcional restrito.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 18 },
      vias: ['VO', 'EV'],
      tipo: 'mg_dia',
      valor: 750,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima diária adulto: 750 mg/dia (em situações excepcionais graves até 500 mg 12/12h = 1000 mg/dia).'
    },
    {
      pub: 'ped',
      vias: ['VO', 'EV'],
      tipo: 'mg_dia',
      valor: 500,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima pediatria: 500 mg/dia.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 17 },
      vias: ['VO', 'EV'],
      msg: 'Uso contraindicado ou sob estrita reserva em crianças e adolescentes menores de 18 anos devido ao risco comprovado de artropatia e lesão das cartilagens de crescimento nas articulações que suportam peso.',
      fonte: 'BULA',
      trecho: 'Bula Levaquin: Contraindicado para crianças e adolescentes em fase de crescimento (menores de 18 anos), exceto no antraz inalatório ou infecções multirresistentes sem alternativa.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com histórico prévio de tendinopatia ou ruptura de tendão associada ao uso de fluoroquinolonas.',
      fonte: 'BULA',
      trecho: 'Bula Levaquin: Contraindicado em pacientes com histórico de problemas no tendão relacionados a fluoroquinolonas.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com miastenia gravis (pode exacerbar fraqueza muscular e causar insuficiência respiratória iminente).',
      fonte: 'BULA',
      trecho: 'Bula Levaquin: Fluoroquinolonas podem exacerbar a fraqueza muscular em pacientes com miastenia gravis.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada ao levofloxacino ou a qualquer outra fluoroquinolona.',
      fonte: 'BULA',
      trecho: 'Bula Levaquin: Hipersensibilidade a fluoroquinolonas.'
    }
  ],
  notas: {
    indicacao: 'Tratamento de infecções bacterianas causadas por cepas sensíveis: pneumonia comunitária (incluindo cepas de Streptococcus pneumoniae multirresistente - MDRSP), sinusite bacteriana aguda, exacerbação aguda de bronquite crônica, infecções do trato urinário complicadas e pielonefrite aguda, infecções de pele e tecidos moles complicadas, prostatite bacteriana crônica e tuberculose multirresistente (PCDT/MS) (HSL / Bula).',
    administracao: 'VO: Tomar com água, com ou sem alimentos. NÃO mastigar nem triturar os comprimidos. Evitar administração concomitante de antiácidos contendo hidróxido de alumínio ou magnésio, suplementos de sulfato ferroso, sucralfato ou fórmulas contendo zinco (respeitar intervalo de 2 horas antes ou após para não quelar o fármaco). EV: Solução pronta para infusão (5 mg/mL). Infundir em no mínimo 60 minutos para 500 mg e 90 minutos para 750 mg (prevenção de hipotensão e flebite).',
    cuidados: 'BLACK BOX WARNING (ANVISA / FDA): 1) Tendinite e ruptura de tendão (principalmente tendão de Aquiles), que pode ocorrer durante o tratamento ou até meses após a interrupção (risco ampliado em idosos > 60 anos e em uso concomitante de corticosteroides); 2) Neuropatia periférica potencialmente irreversível; 3) Efeitos sobre o SNC (tontura, convulsões, psicose tóxica, confusão); 4) Prolongamento do intervalo QT e risco de arritmias ventriculares (evitar coadministração com antiarrítmicos classe IA/III, macrolídeos ou antipsicóticos); 5) Disglicemia (hipo ou hiperglicemia severa em diabéticos).',
    ajuste: 'Insuficiência renal: A eliminação é predominantemente renal (80%); OBRIGATÓRIO ajuste de dose em ClCr < 50 mL/min: Esquema 500 mg/dia: ClCr 20 a 49 mL/min: 500 mg de ataque, seguido de 250 mg a cada 24 horas; ClCr 10 a 19 mL/min: 500 mg de ataque, seguido de 250 mg a cada 48 horas. Esquema 750 mg/dia: ClCr 20 a 49 mL/min: 750 mg a cada 48 horas; ClCr 10 a 19 mL/min: 750 mg de ataque, seguido de 500 mg a cada 48 horas (HSL). Hemodiálise / CAPD: Não dialisável; administrar dose pós-hemodiálise sem dose suplementar de rotina. Insuficiência hepática: Metabolismo hepático mínimo; não requer ajuste de dose.'
  }
};

export default levofloxacino;
