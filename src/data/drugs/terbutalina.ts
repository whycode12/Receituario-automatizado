import { Farmaco } from '../../types';

export const terbutalina: Farmaco = {
  id: 'terbutalina',
  nome: 'Sulfato de Terbutalina',
  categoria: 'Broncodilatadores e Agonistas Beta-2 Adrenérgicos',
  busca: 'terbutalina sulfato terbutil bricanyl broncodilatador beta2 agonista asma tocolise parto prematuro',
  classe: 'Broncodilatador de Curta Duração, Agonista Seletivo Beta-2 Adrenérgico e Tocolítico Uterino',
  dosePratica: 'Crise de Asma / Broncoespasmo Grave no PS (Injetável 0,5 mg/mL): Adultos: 0,25 a 0,5 mg (0,5 a 1 mL da ampola) SC ou IM até 4x/dia (máx. 0,5 mg em 4 horas e 2 mg/dia). Pediatria: 0,005 a 0,01 mg/kg/dose (0,01 a 0,02 mL/kg) SC (máx. 0,25 a 0,3 mg/dose). Asma Manutenção / Ambulatório (Xarope 0,3 mg/mL): Adultos: 3 a 4,5 mg (10 a 15 mL) VO 3x/dia (de 8/8h); Pediatria: 0,075 mg/kg/dose (0,25 mL/kg/dose) VO 3x/dia (8/8h).',
  fontes: { HSL: '07/03/2023', EINA: '2023', EINP: '2023', BULA: '04/10/2026' },
  snPadrao: 'crise de broncoespasmo agudo, chiado no peito ou tocolise no trabalho de parto prematuro',
  acessoFonte: 'RENAME 2024: Solução injetável 0,5 mg/mL (ampola 1 mL) padronizada no Componente Hospitalar / Urgência e Emergência. Bricanyl xarope 0,3 mg/mL disponível em farmácias comerciais e REMUME de diversos municípios.',
  apresentacoes: [
    {
      id: 'amp_05',
      forma: 'amp',
      nome: 'Solução injetável 0,5 mg/mL (ampola 1 mL)',
      comercial: 'Terbutil / Bricanyl Injetável / Genérico',
      conc: '0,5mg/mL (ampola 1 mL)',
      rotulo: 'Sulfato de terbutalina 0,5mg/mL solução injetável (ampola 1 mL)',
      mgml: 0.5,
      volml: 1,
      vias: ['EV', 'IM'],
      disp: '1 ampola (1 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Uso hospitalar/urgência. Via Subcutânea/Intramuscular: Injetar 0,5 a 1 mL (0,25 a 0,5 mg) lentamente. Via EV: Infundir diluído em SG 5% (1 ampola em 100 mL de SG 5% = 5 mcg/mL) a 20-30 gotas/min sob monitorização cardíaca contínua.',
      obs: 'RENAME Hospitalar. A via SC/IM é clássica e preferencial no broncoespasmo refratário no pronto-socorro; a via EV em bomba/infusão é utilizada em tocólise e exacerbações refratárias de asma.'
    },
    {
      id: 'xpe_03',
      forma: 'sol',
      nome: 'Xarope 0,3 mg/mL (frasco 100 mL com copo-medida)',
      comercial: 'Bricanyl Broncodilatador / Genérico',
      conc: '0,3mg/mL',
      rotulo: 'Sulfato de terbutalina xarope 0,3mg/mL',
      mgml: 0.3,
      frascoMl: 100,
      vias: ['VO'],
      disp: '1 frasco com 100 mL',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar a quantidade indicada no copo-medida a cada 8 horas. Em crianças, dosar rigorosamente pela graduação em mL conforme o peso corporal.',
      obs: '10 mL = 3 mg de terbutalina; 15 mL = 4,5 mg. Em crianças a dose habitual é 0,25 mL/kg por tomada (ex.: 10 kg = 2,5 mL; 20 kg = 5 mL).'
    }
  ],
  regras: [
    // 1. Parenteral Adulto (Ampola 0,5 mg/mL) - SC / IM / EV
    {
      pub: 'adulto',
      vias: ['EV', 'IM'],
      apres: ['amp_05'],
      tipo: 'mg',
      min: 0.25,
      max: 0.5,
      padrao: 0.5,
      dosesDia: [1, 4],
      dosesPadrao: 2,
      intervaloFixo: 6,
      fonte: 'HSL / BULA',
      trecho: 'Adultos parenteral: 0,25 a 0,5 mg (0,5 a 1 mL) via SC, IM ou EV lento até 4 vezes ao dia (máx. 0,5 mg em 4 horas e 2 mg/dia).'
    },
    // 2. Parenteral Pediatria (Ampola 0,5 mg/mL)
    {
      pub: 'ped',
      vias: ['EV', 'IM'],
      apres: ['amp_05'],
      tipo: 'mg_kg_dose',
      min: 0.005,
      max: 0.01,
      padrao: 0.005,
      dosesDia: [1, 3],
      dosesPadrao: 1,
      intervaloFixo: 8,
      fonte: 'HSL / BULA / SBP',
      trecho: 'Pediatria parenteral: 0,005 a 0,01 mg/kg/dose (0,01 a 0,02 mL/kg) via SC/IM ou EV lento (máx. 0,25 a 0,3 mg por dose).'
    },
    // 3. Xarope Adulto (VO)
    {
      pub: 'adulto',
      vias: ['VO'],
      apres: ['xpe_03'],
      tipo: 'mg',
      min: 3,
      max: 4.5,
      padrao: 3,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'BULA',
      trecho: 'Adultos via oral: 3 a 4,5 mg (10 a 15 mL do xarope 0,3 mg/mL) 3 vezes ao dia (a cada 8 horas).'
    },
    // 4. Xarope Pediatria (VO)
    {
      pub: 'ped',
      vias: ['VO'],
      apres: ['xpe_03'],
      tipo: 'mg_kg_dose',
      min: 0.05,
      max: 0.075,
      padrao: 0.075,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'BULA',
      trecho: 'Pediatria via oral: 0,075 mg/kg de peso corporal (equivalente a 0,25 mL/kg do xarope) administrados 3 vezes ao dia (8/8h).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['EV', 'IM'],
      tipo: 'mg_dia',
      valor: 2,
      fonte: 'HSL / BULA',
      trecho: 'Dose máxima parenteral em adultos: 2 mg/dia (não ultrapassar 0,5 mg no intervalo de 4 horas).'
    },
    {
      pub: 'ped',
      vias: ['EV', 'IM'],
      tipo: 'mg_dia',
      valor: 0.75,
      fonte: 'HSL / BULA',
      trecho: 'Dose máxima parenteral pediátrica: não exceder 0,25 mg por dose ou 0,75 mg/dia.'
    },
    {
      pub: 'adulto',
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 13.5,
      fonte: 'BULA',
      trecho: 'Dose máxima diária oral em adultos: 13,5 mg/dia (15 mL 3 vezes ao dia).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade à terbutalina ou a outros agentes simpatomiméticos.',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade conhecida à terbutalina ou a outros fármacos adrenérgicos.',
      strong: false
    },
    {
      msg: 'Contraindicado em casos de tireotoxicose, cardiomiopatia hipertrófica obstrutiva, arritmias cardíacas taquicárdicas graves e infarto agudo do miocárdio recente.',
      fonte: 'HSL / BULA',
      trecho: 'Contraindicado em taquiarritmias graves, tireotoxicose e infarto agudo do miocárdio recente.',
      strong: false
    },
    {
      msg: 'Em tocólise de parto prematuro: contraindicado em infecção intrauterina, hemorragia pré-parto grave, pré-eclâmpsia grave/eclâmpsia e óbito fetal intrauterino.',
      fonte: 'BULA',
      trecho: 'Contraindicações obstétricas para tocólise: corioamnionite, hemorragia descompensada, pré-eclâmpsia severa.',
      strong: false
    },
    {
      msg: 'Monitorar nível de potássio sérico (risco de hipocalemia decorrente da captação intracelular de potássio induzida por estimulação beta-2, potencializada por corticoides ou diuréticos).',
      fonte: 'HSL / BULA',
      trecho: 'A terapia com beta-2 agonistas pode resultar em hipocalemia potencialmente grave.',
      strong: false
    }
  ],
  ev: {
    diluentes: ['SG 5%'],
    concMax: 0.005,
    concUsual: 0.005,
    volOpcoes: [100, 250, 500],
    tempo: {
      adulto: { min: 30, max: 60, padrao: 45, txt: 'Infusão contínua ou intermitente a 20-30 gotas/min sob monitorização cardíaca' },
      ped: { min: 30, max: 60, padrao: 45, txt: 'Infusão EV estrita sob bomba de infusão em UTI' }
    },
    fonteTxt: 'Einstein Adultos / HSL'
  },
  notas: {
    indicacao: 'Broncodilatador agonista beta-2 seletivo de rápida ação indicado no alívio de exacerbações de broncoespasmo grave na asma e DPOC, e relaxante da musculatura uterina (tocólise) no parto pré-termo sem complicações (HSL / Einstein / BULA).',
    administracao: 'SC/IM: Administrar lentamente (preferencialmente na região deltoide ou face anterolateral da coxa). EV: Diluir obrigatoriamente em SG 5% (1 ampola em 100 mL de SG 5% = 5 mcg/mL). ATENÇÃO: Evitar diluição em soluções alcalinas e soro fisiológico SF 0,9% em pacientes obstétricas ou com risco de retenção hídrica/edema pulmonar (HSL / Einstein). VO: Xarope tomado com copo dosador a cada 8 horas.',
    cuidados: 'Efeitos adversos esperados: taquicardia sinusal, tremores de extremidades, palpitações e cefaleia por estimulação beta-adrenérgica. Dose máxima de 0,5 mg parenteral não deve ser repetida em intervalo inferior a 4 horas.',
    ajuste: 'Insuficiência renal: ClCr 10 a 50 mL/min reduzir a dose em 50%; ClCr < 10 mL/min não é recomendado o uso (HSL). Insuficiência hepática: não há dados específicos, titular clinicamente com cautela.'
  }
};

export default terbutalina;
