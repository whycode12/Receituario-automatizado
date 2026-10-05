import { Farmaco } from '../../types';

export const dimenidrinatoPiridoxina: Farmaco = {
  id: 'dimenidrinato_piridoxina',
  nome: 'Dimenidrinato + Cloridrato de Piridoxina (Vitamina B6)',
  categoria: 'Gastrintestinal e Antieméticos',
  busca: 'dramin b6 dramin piridoxina dimenidrinato vitamina b6 cinetose labirintite vertigem enjoo gestante nausea vomito',
  classe: 'Antiemético e Antivertiginoso associado a Vitamina (Anti-histamínico H1 + Piridoxina)',
  dosePratica: 'Adultos e > 12 anos: VO 1 comprimido (50 mg + 10 mg) a cada 4 a 6 horas (máx. 400 mg dimenidrinato / 8 cp/dia). EV: 1 ampola de 10 mL (Dramin B6 DL: 30 mg dimenidrinato + 50 mg piridoxina) diluída em 10 mL de AD (ou 100 mL SF) EV lento a cada 4 a 6h. Pediatria (Gotas VO 25 mg + 5 mg/mL): 1 gota/kg/dose (1,25 mg/kg) a cada 6 a 8 horas (máx. habitual 20 a 40 gotas/dose).',
  fontes: { HSL: '07/03/2023', PSZERADO: '2025', EINA: '2024', BULA: '04/10/2026' },
  snPadrao: 'náuseas, vômitos, tontura, vertigem ou cinetose',
  acessoFonte: 'Medicamento isento de prescrição (MIP nas formas orais) e padronizado em emergências sob a marca Dramin B6 / genéricos.',
  apresentacoes: [
    {
      id: 'cp_b6',
      forma: 'cp',
      nome: 'Comprimido revestido (50 mg + 10 mg)',
      comercial: 'Dramin B6 / Genérico',
      conc: '50mg + 10mg',
      rotulo: 'Dimenidrinato 50mg + Piridoxina 10mg',
      mg: 50, // indexado pela dose de dimenidrinato (50 mg)
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Ingerir imediatamente antes ou durante as refeições com um copo de água. Para prevenção de enjoo de movimento/viagem (cinetose), tomar a dose cerca de 30 minutos a 1 hora antes de viajar.',
      obs: '1 comprimido contém 50 mg de dimenidrinato e 10 mg de cloridrato de piridoxina (vitamina B6). Indicado para adultos e adolescentes acima de 12 anos.'
    },
    {
      id: 'gts_b6',
      forma: 'gotas',
      nome: 'Gotas pediátricas frasco 20 mL (25 mg + 5 mg/mL — 20 gotas/mL)',
      comercial: 'Dramin B6 gotas',
      conc: '25mg/mL + 5mg/mL',
      rotulo: 'Dimenidrinato 25mg/mL + Piridoxina 5mg/mL gotas',
      mgml: 25, // 25 mg/mL de dimenidrinato (+ 5 mg/mL de piridoxina)
      gotasml: 20, // 1 mL = 20 gotas = 25 mg dimenidrinato (1 gota = 1,25 mg dimenidrinato)
      frascoMl: 20,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: false, fp: false },
      instrucao: 'Administrar imediatamente antes ou durante as refeições ou mamadas, diretamente na boca com conta-gotas ou diluído em pequena quantidade de líquido. Cinetose: administrar 30 a 60 minutos antes da viagem.',
      obs: '1 mL = 20 gotas. 1 gota = 1,25 mg de dimenidrinato + 0,25 mg de piridoxina. Posologia pediátrica prática: 1 gota por kg de peso por dose.'
    },
    {
      id: 'amp_b6_dl',
      forma: 'amp',
      nome: 'Ampola 10 mL Dramin B6 DL (30 mg + 50 mg / 10 mL — EV)',
      comercial: 'Dramin B6 DL injetável',
      conc: '3mg/mL + 5mg/mL',
      rotulo: 'Dimenidrinato 3mg/mL + Piridoxina 5mg/mL ampola 10mL (EV)',
      mg: 30, // 30 mg de dimenidrinato (+ 50 mg piridoxina + glicose e frutose) por ampola de 10 mL
      mgml: 3,
      volml: 10,
      vias: ['EV'],
      disp: '1 ampola',
      acesso: { rename: false, fp: false },
      obs: 'Ampola de 10 mL EV (Dramin B6 DL): contém 30 mg de dimenidrinato, 50 mg de cloridrato de piridoxina, 1 g de glicose e 1 g de frutose. Diluir em 10 mL de AD ou 100 mL de SF/SG5% (Einstein / PSZerado). Administrar lentamente em > 2 min ou em infusão de 30 min.'
    },
    {
      id: 'amp_b6_im',
      forma: 'amp',
      nome: 'Ampola 1 mL Dramin B6 IM (50 mg + 50 mg / 1 mL — IM)',
      comercial: 'Dramin B6 IM injetável',
      conc: '50mg/mL + 50mg/mL',
      rotulo: 'Dimenidrinato 50mg/mL + Piridoxina 50mg/mL ampola 1mL (IM)',
      mg: 50, // 50 mg de dimenidrinato (+ 50 mg piridoxina) em 1 mL
      mgml: 50,
      volml: 1,
      vias: ['IM'],
      disp: '1 ampola',
      acesso: { rename: false, fp: false },
      obs: 'Ampola de 1 mL IM estrita: 50 mg de dimenidrinato e 50 mg de cloridrato de piridoxina. Administrar via IM profunda na região glútea.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      apres: ['cp_b6'],
      tipo: 'mg',
      min: 50,
      max: 100,
      padrao: 50,
      dosesDia: [4, 6],
      dosesPadrao: 4,
      intervaloFixo: 6,
      fonte: 'HSL',
      trecho: 'Adulto e acima de 12 anos: 50 a 100mg de dimenidrinato (1 a 2 comprimidos), VO, a cada 4 a 6 horas. Prevenção de cinetose: 30 a 60 min antes da viagem.'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['EV'],
      apres: ['amp_b6_dl'],
      tipo: 'mg',
      min: 30,
      max: 30,
      padrao: 30, // 1 ampola de 10 mL = 30 mg dimenidrinato
      dosesDia: [4, 6],
      dosesPadrao: 4,
      intervaloFixo: 6,
      fonte: 'PSZERADO',
      trecho: 'Pronto-atendimento/Internação: Dramin B6 DL (3 mg/mL de dimenidrinato em ampola de 10 mL = 30 mg). Diluir em 10 mL de AD e administrar EV lentamente a cada 4 ou 6 horas (PSZerado / Einstein Adultos).'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['IM'],
      apres: ['amp_b6_im'],
      tipo: 'mg',
      min: 50,
      max: 50,
      padrao: 50, // 1 ampola de 1 mL = 50 mg dimenidrinato
      dosesDia: [4, 4],
      dosesPadrao: 4,
      intervaloFixo: 6,
      fonte: 'BULA',
      trecho: 'Dramin B6 IM: 1 ampola (50 mg / 1 mL) via intramuscular profunda a cada 6 horas.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 2, idadeMaxAnos: 12 },
      vias: ['VO'],
      apres: ['gts_b6'],
      tipo: 'mg_kg_dose',
      min: 1.25, // 1 gota/kg = 1,25 mg/kg de dimenidrinato
      max: 1.25,
      padrao: 1.25,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'BULA',
      trecho: 'Crianças de 2 a 12 anos: 1 gota por kg de peso corporal a cada 6 a 8 horas (1 gota = 1,25 mg de dimenidrinato). Respeitar os tetos por faixa etária: 2 a 6 anos máximo de 20 gotas (25 mg) por tomada e 75 mg/dia; 7 a 12 anos máximo de 40 gotas (50 mg) por tomada e 150 mg/dia.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 400,
      fonte: 'HSL',
      trecho: 'Dose Máxima Adulto e > 12 anos: 400mg de dimenidrinato em 24 horas (8 comprimidos ou equivalente parenteral).'
    },
    {
      pub: 'ped',
      se: { idadeMaxAnos: 6 },
      tipo: 'mg_dia',
      valor: 75,
      fonte: 'BULA',
      trecho: 'Dose máxima pediátrica de 2 a 6 anos: 75 mg/dia de dimenidrinato (60 gotas/dia).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 7, idadeMaxAnos: 12 },
      tipo: 'mg_dia',
      valor: 150,
      fonte: 'BULA',
      trecho: 'Dose máxima pediátrica de 7 a 12 anos: 150 mg/dia de dimenidrinato (120 gotas/dia).'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 24 },
      msg: 'CONTRAINDICADO em crianças menores de 2 anos de idade (risco aumentado de depressão respiratória, convulsões e reações paradoxais graves em lactentes).',
      fonte: 'BULA',
      trecho: 'Dramin B6 é contraindicado para crianças menores de 2 anos de idade.',
      strong: true
    },
    {
      apres: ['cp_b6'],
      pub: 'ped',
      se: { idadeMaxAnos: 11 },
      msg: 'A forma em comprimidos é contraindicada para menores de 12 anos. Utilizar formulação líquida pediátrica em gotas.',
      fonte: 'HSL',
      trecho: 'Menores de 12 anos: comprimidos contraindicados.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com glaucoma de ângulo fechado, retenção urinária ou obstrução prostática devido aos efeitos anticolinérgicos centrais e periféricos do dimenidrinato.',
      fonte: 'BULA',
      trecho: 'Contraindicado em glaucoma de ângulo fechado e retenção urinária.',
      strong: false
    },
    {
      msg: 'Contraindicado em pacientes com porfiria e naqueles com hipersensibilidade ao dimenidrinato, à piridoxina (vitamina B6) ou a outros anti-histamínicos.',
      fonte: 'BULA',
      trecho: 'Contraindicado em portadores de porfiria e hipersensibilidade aos componentes.',
      strong: false
    },
    {
      vias: ['EV'],
      msg: 'EV: utilizar exclusivamente a apresentação Dramin B6 DL (ampola de 10 mL para uso endovenoso). NUNCA administrar a ampola de 1 mL (destinada unicamente à via intramuscular) por via endovenosa. Administrar lentamente em tempo > 2 minutos.',
      fonte: 'EINA',
      trecho: 'Dramin B6 DL Ap 10mL EV. Não aplicar ampola IM por via intravenosa.',
      strong: false
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%', 'AD'],
    concMax: 3, // ampola pronta 3 mg/mL de dimenidrinato
    concUsual: 0.3, // 30 mg em 100 mL de SF/SG 5%
    volOpcoes: [10, 50, 100],
    tempo: {
      adulto: { min: 2, padrao: 15, max: 30 }
    },
    fonteTxt: 'EV Direto: diluir a ampola de 10 mL (30 mg dimenidrinato + 50 mg piridoxina) em 10 mL de água destilada ou SF 0,9% e administrar lentamente em tempo superior a 2 minutos. Infusão: diluir em 100 mL de SF 0,9% ou SG 5% e infundir em 15 a 30 minutos (Einstein Adultos / PSZerado).'
  },
  notas: {
    indicacao: 'Prevenção e alívio de náuseas e vômitos da gravidez (hiperêmese gravídica leve), cinetose (enjoo de viagem e movimento), labirintite, crises vertiginosas e êmese pós-operatória/medicamentosa (HSL / PSZerado).',
    administracao: 'VO: Tomar antes ou durante as refeições. Cinetose: administrar 30 a 60 minutos antes da viagem. EV: aplicar lentamente em > 2 min ou infundir em 100 mL de SF. IM: injeção profunda na região glútea.',
    cuidados: 'Causa sonolência e redução da atenção e reflexos motores; orientar cuidado com direção veicular e máquinas operacionais. Evitar ingestão de bebidas alcoólicas e depressores do SNC.',
    ajuste: 'Insuficiência renal: não requer ajuste de dose (HSL). Insuficiência hepática: considerar aumento de intervalo ou redução posológica em insuficiência hepática aguda grave.'
  }
};

export default dimenidrinatoPiridoxina;
