import { Farmaco } from '../../types';

export const cetorolaco: Farmaco = {
  id: 'cetorolaco',
  nome: 'Cetorolaco de Trometamol',
  categoria: 'Analgésicos e Anti-inflamatórios',
  busca: 'cetorolaco trometamol toragesic cetrolac deocil aine sublingual sl dor aguda colica renal lombalgia',
  classe: 'Anti-inflamatório Não Esteroidal (AINE) e Analgésico Não Opioide Potente',
  dosePratica: 'Adulto: 10 mg a 20 mg sublingual (SL) ou VO em dose única, ou 10 mg até de 6/6h a 8/8h se dor intensa (máx. 40 mg/dia VO/SL); EV/IM: 30 mg (ou 15 mg se > 65 anos ou < 50 kg) até de 6/6h (máx. 90 mg/dia para jovens ou 60 mg/dia para idosos/baixo peso). ATENÇÃO: Duração MÁXIMA estrita de 5 dias combinando vias (risco alto de hemorragia digestiva e nefrotoxicidade).',
  fontes: { HSL: '05/05/2025', EINA: '2024', EINP: '2024', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'dor aguda moderada a intensa (cólica renal, dor pós-traumática ou pós-operatória)',
  acessoFonte: 'RENAME 2024: Não consta na RENAME básica; padronizado no elenco hospitalar, UPAs e prontos-socorros municipais.',
  apresentacoes: [
    {
      id: 'cp_sl_10',
      forma: 'cp',
      nome: 'Comprimido sublingual 10 mg',
      comercial: 'Toragesic SL / Deocil SL / Genérico',
      conc: '10mg',
      rotulo: 'Cetorolaco de Trometamol 10mg comprimido sublingual',
      mg: 10,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Colocar 1 comprimido debaixo da língua e deixar dissolver completamente sem mastigar, engolir ou tomar água imediatamente após. Uso por NO MÁXIMO 5 dias consecutivos.',
      obs: 'Forma farmacêutica sublingual de rápida absorção e alívio álgico veloz (15 a 30 minutos). Não exceder 4 comprimidos (40 mg) por dia.'
    },
    {
      id: 'cp_10',
      forma: 'cp',
      nome: 'Comprimido revestido 10 mg',
      comercial: 'Toragesic / Genérico',
      conc: '10mg',
      rotulo: 'Cetorolaco de Trometamol 10mg comprimido',
      mg: 10,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Ingerir com água, preferencialmente com alimentos para amenizar desconforto gastrointestinal. Uso por no máximo 5 dias.',
      obs: 'Máximo 40 mg/dia por no máximo 5 dias.'
    },
    {
      id: 'amp_30',
      forma: 'amp',
      nome: 'Ampola 30 mg / 1 mL',
      comercial: 'Toragesic / Cetrolac / Genérico',
      conc: '30mg/mL',
      rotulo: 'Cetorolaco de Trometamol 30mg/mL ampola 1 mL',
      mgml: 30,
      volml: 1,
      vias: ['EV', 'IM'],
      disp: '1 ampola',
      acesso: { rename: false, fp: false },
      obs: 'Pode ser administrado IM profundo ou EV direto lento em > 15 segundos ou diluído em 50 mL de SF/SG5%.'
    },
    {
      id: 'gts_20',
      forma: 'gotas',
      nome: 'Gotas 20 mg/mL (1 mL = 20 gotas, 1 gota = 1 mg)',
      comercial: 'Toragesic gotas',
      conc: '20mg/mL',
      rotulo: 'Cetorolaco de Trometamol 20mg/mL gotas',
      mgml: 20,
      gotasml: 20,
      frascoMl: 10,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: false, fp: false },
      instrucao: 'Pingar as gotas diretamente na boca ou diluir em pequena quantidade de água. Tomar após as refeições.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 16 }, { pesoMin: 50 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 10,
      max: 20,
      padrao: 10,
      dosesDia: [1, 4],
      dosesPadrao: 3,
      duracaoMaxDias: 5,
      fonte: 'HSL / PSZERADO',
      trecho: 'Adulto — VO ou Sublingual: 10 a 20 mg em dose única, ou 10 mg a cada 6 a 8 horas se dor intensa. Dose máxima diária VO: 40 mg/dia. Tempo máximo de tratamento: 5 dias.'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 16 }, { pesoMin: 50 }] },
      vias: ['EV', 'IM'],
      tipo: 'mg',
      min: 15,
      max: 30,
      padrao: 30,
      dosesDia: [1, 4],
      dosesPadrao: 4,
      intervaloFixo: 6,
      duracaoMaxDias: 5,
      fonte: 'HSL / EINA',
      trecho: 'Adulto — IM ou EV: 30 mg a cada 6 horas (dose única de 30 a 60 mg IM). Pacientes idosos (> 65 anos) ou < 50 kg: 15 mg a cada 6 horas. Duração máxima combinada: 5 dias.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 2 },
      vias: ['EV', 'IM'],
      tipo: 'mg_kg_dose',
      min: 0.5,
      max: 1.0,
      padrao: 0.5,
      maxDoseMg: 30,
      dosesDia: [1, 4],
      intervaloFixo: 6,
      duracaoMaxDias: 2,
      fonte: 'EINP / HSL',
      trecho: 'Pediatria (> 2 anos) — EV ou IM: 0,5 a 1 mg/kg/dose a cada 6 horas (máximo 30 mg/dose e 60 mg/dia). Duração máxima estrita: 48 horas.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 40,
      fonte: 'HSL / BULA',
      trecho: 'Dose máxima diária por via oral/sublingual: 40 mg/dia em adultos.'
    },
    {
      pub: 'adulto',
      vias: ['EV', 'IM'],
      tipo: 'mg_dia',
      valor: 90,
      fonte: 'HSL / EINA',
      trecho: 'Dose máxima diária parenteral: 90 mg/dia para adultos jovens (60 mg/dia em pacientes acima de 65 anos ou com menos de 50 kg).'
    },
    {
      pub: 'ped',
      tipo: 'mg_dia',
      valor: 60,
      fonte: 'EINP',
      trecho: 'Dose máxima diária pediátrica: 60 mg/dia (ou 2 mg/kg/dia).'
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%', 'Ringer Lactato'],
    concMax: 0.6,
    volOpcoes: [20, 50, 100],
    tempo: {
      adulto: { min: 1, padrao: 15, max: 30, txt: 'IV direto lento (> 15 segundos) ou diluído em 50 mL de SF 0,9% em 15 a 30 minutos.' },
      ped: { min: 1, padrao: 15, max: 30, txt: 'IV direto lento em > 1 minuto ou diluído em 50 mL infundido em 15 a 30 minutos.' }
    },
    fonteTxt: 'Einstein Adultos / Pediátrico: Administrar por via IV direta lenta (mínimo de 15 segundos em adultos e > 1 min em pediatria) ou em infusão intermitente diluído em 50 mL de SF 0,9% ou SG 5% infundido em 15 a 30 minutos.'
  },
  contra: [
    {
      msg: 'DURAÇÃO MÁXIMA DE 5 DIAS: O uso do cetorolaco por mais de 5 dias é estritamente contraindicado pelo elevado risco de eventos gastrintestinais graves (úlceras perfuradas e sangramentos maciços) e insuficiência renal aguda.',
      fonte: 'HSL / PSZERADO',
      trecho: 'Duração máxima do tratamento não deve exceder 5 dias (combinando todas as vias).'
    },
    {
      msg: 'Contraindicado em pacientes com úlcera péptica ativa, histórico de sangramento gastrintestinal recente ou perfuração gastrointestinal prévia.',
      fonte: 'HSL',
      trecho: 'Contraindicado na vigência de hemorragia digestiva ou úlcera péptica ativa.'
    },
    {
      msg: 'Contraindicado em insuficiência renal moderada a grave (risco de falência renal por inibição de prostaglandinas renais) e em hipovolemia ou desidratação não corrigidas.',
      fonte: 'HSL',
      trecho: 'Contraindicado em insuficiência renal moderada a grave e em estados de depleção de volume.'
    },
    {
      msg: 'Contraindicado no pré e pós-operatório imediato de cirurgias de grande porte e em pacientes com distúrbios da hemostasia ou em terapia anticoagulante (potente inibição da agregação plaquetária).',
      fonte: 'HSL / BULA',
      trecho: 'Contraindicado como analgésico profilático pré-operatório e em pacientes com risco aumentado de hemorragia.'
    }
  ],
  notas: {
    indicacao: 'Controle de curto prazo da dor aguda moderada a grave que requer analgesia de nível opioide, especialmente cólica renal/nefrética, dor pós-traumática aguda, pós-operatório de pequenas e médias cirurgias e crises álgicas osteomusculares intensas.',
    administracao: 'Sublingual: Colocar debaixo da língua e manter até dissolução total sem mastigar. Oral: Ingerir com água após refeições. Injetável: IM profundo ou EV direto lento (> 15 segundos) ou infusão em 50 mL de SF 0,9% em 15-30 minutos.',
    cuidados: 'Monitorar sinais de sangramento digestivo (melena, hematêmese, dor epigástrica súbita), pressão arterial e débito urinário. Não associar com outros anti-inflamatórios não esteroidais (AINEs) nem aspirina.',
    ajuste: 'Insuficiência renal: Contraindicado se moderada a grave (creatinina sérica elevada). Se leve, reduzir a dose diária máxima para 60 mg EV ou 20 mg VO com monitoramento. Idosos (> 65 anos): Reduzir a dose em 50% (máximo 60 mg/dia EV ou 40 mg/dia VO).',
    dosePratica: 'Adulto: 10 mg sublingual de 8/8h (máx. 40 mg/dia) por até 5 dias; ou 30 mg EV/IM na crise de cólica renal no pronto-socorro.'
  }
};

export default cetorolaco;
