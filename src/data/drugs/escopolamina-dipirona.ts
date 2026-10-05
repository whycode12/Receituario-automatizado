import { Farmaco } from '../../types';

export const escopolaminaDipirona: Farmaco = {
  id: 'escopolamina_dipirona',
  nome: 'Butilbrometo de Escopolamina + Dipirona Sódica',
  categoria: 'Gastrintestinal e Antiespasmódicos',
  busca: 'buscopan composto escopolamina dipirona metamizol colica antiespasmodico',
  classe: 'Antiespasmódico associado a Analgésico',
  dosePratica: 'Adulto: VO: 1 a 2 comprimidos (ou 20 a 40 gotas) até de 6/6h a 8/8h se cólica intensa. EV/IM: 1 ampola (5 mL) EV lento em 5 min (ou em 50-100 mL SF) ou IM profunda. Pediatria: Gotas VO (1-6 anos): 5 a 10 gotas até 3-4x/dia; (6-12 anos): 10 a 20 gotas até 3-4x/dia. Injetável contraindicado em < 1 ano.',
  fontes: { HSL: '23/04/2019', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'cólica ou dor espasmódica intensa',
  acessoFonte: 'RENAME 2024: isolados (butilbrometo de escopolamina e dipirona) constam na RENAME; a associação fixa composta consta amplamente no mercado comercial e em serviços hospitalares.',
  apresentacoes: [
    {
      id: 'cp_comp',
      forma: 'cp',
      nome: 'Comprimido revestido (10 mg + 250 mg)',
      comercial: 'Buscopan Composto',
      conc: '10mg + 250mg',
      rotulo: 'Butilbrometo de Escopolamina + Dipirona (10mg + 250mg)',
      mg: 10, // dose indexada pelo butilbrometo (1 cp = 10mg escopolamina + 250mg dipirona)
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: '1 comprimido contém 10 mg de butilbrometo de escopolamina e 250 mg de dipirona sódica. Ingerir sem mastigar.'
    },
    {
      id: 'gts_comp',
      forma: 'gotas',
      nome: 'Gotas frasco 20 mL (6,67 mg + 333,4 mg/mL)',
      comercial: 'Buscopan Composto gotas',
      conc: '6,67mg/mL + 333,4mg/mL',
      rotulo: 'Butilbrometo de Escopolamina + Dipirona gotas',
      mgml: 6.67,
      gotasml: 20, // 1 mL = 20 gotas (20 gotas contêm 6,67 mg de escopolamina e 333,4 mg de dipirona)
      frascoMl: 20,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: false, fp: false },
      obs: '1 mL = 20 gotas = 6,67 mg de escopolamina + 333,4 mg de dipirona. 20 a 40 gotas por dose em adultos.'
    },
    {
      id: 'amp5',
      forma: 'amp',
      nome: 'Ampola 5 mL (20 mg + 2.500 mg / 5 mL)',
      comercial: 'Buscopan Composto injetável',
      conc: '4mg/mL + 500mg/mL',
      rotulo: 'Butilbrometo de Escopolamina + Dipirona ampola 5mL',
      mg: 20, // 20 mg de escopolamina + 2500 mg de dipirona por ampola de 5 mL
      mgml: 4,
      volml: 5,
      vias: ['EV', 'IM'],
      disp: '1 ampola',
      acesso: { rename: false, fp: false },
      obs: 'Ampola de 5 mL: 20 mg de escopolamina + 2.500 mg de dipirona (4 mg/mL + 500 mg/mL). EV lento em no mínimo 5 min (1 mL/min) ou diluído em 50 mL de SF/SG5%.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      apres: ['cp_comp'],
      tipo: 'mg',
      min: 10,
      max: 20,
      padrao: 10, // 1 a 2 comprimidos (10 a 20 mg de escopolamina)
      dosesDia: [3, 4],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Adulto: 1 a 2 comprimidos, ou 20 a 40 gotas, VO, 3 a 4 vezes/dia.'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      apres: ['gts_comp'],
      tipo: 'mg',
      min: 6.67,
      max: 13.34,
      padrao: 6.67, // 20 a 40 gotas (6,67 a 13,34 mg de escopolamina)
      dosesDia: [3, 4],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Adulto: 20 a 40 gotas, VO, 3 a 4 vezes/dia.'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['EV', 'IM'],
      apres: ['amp5'],
      tipo: 'mg',
      min: 20,
      max: 20,
      padrao: 20, // 1 ampola inteira (5 mL = 20 mg escopolamina + 2.500 mg dipirona)
      dosesDia: [2, 3],
      dosesPadrao: 2,
      fonte: 'HSL',
      trecho: 'Adulto EV ou IM: 1 ampola (5mL), podendo ser repetida 2 a 3 vezes/dia, se necessário.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 1, idadeMaxAnos: 6 },
      vias: ['VO'],
      apres: ['gts_comp'],
      tipo: 'mg_kg_dose',
      min: 0.1,
      max: 0.2,
      padrao: 0.1, // 0,1 a 0,2 mg/kg/dose de escopolamina
      dosesDia: [3, 4],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Pediatria (de 1 a 6 anos): 5 a 10 gotas ou 0,1 a 0,2mg/kg/dose, VO, 3 a 4 vezes/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 6, idadeMaxAnos: 12 },
      vias: ['VO'],
      apres: ['gts_comp'],
      tipo: 'mg',
      min: 3.33,
      max: 6.67,
      padrao: 3.33, // 10 a 20 gotas
      dosesDia: [3, 4],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Pediatria 6 a 12 anos: 10 a 20 gotas, VO, 3 a 4 vezes/dia.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['EV', 'IM'],
      tipo: 'mg_dia',
      valor: 60, // 3 ampolas no máximo = 60 mg escopolamina / 7.500 mg dipirona
      fonte: 'HSL',
      trecho: 'Adulto injetável: podendo ser repetida 2 a 3 vezes/dia, se necessário (máx 3 ampolas/dia).'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 12 },
      vias: ['EV', 'IM'],
      msg: 'A apresentação injetável não deve ser utilizada em crianças menores de 1 ano (HSL).',
      fonte: 'HSL',
      trecho: 'A apresentação injetável não deve ser utilizada em crianças menores de 1 ano.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com glaucoma de ângulo fechado, taquicardia, megacólon, miastenia gravis, hipertrofia prostática com retenção urinária ou alergia a pirazolonas (HSL).',
      fonte: 'HSL',
      trecho: 'Não deve ser administrado por via parenteral em pacientes com glaucoma, taquicardia, estenoses mecânicas no trato gastrintestinal, megacólon, miastenia grave ou hipertrofia prostática com retenção urinária. Não deve ser utilizados em idosos especialmente sensíveis aos antimuscarínicos.',
      strong: false
    },
    {
      vias: ['EV'],
      msg: 'A administração intravenosa direta deve ser estritamente lenta (mínimo de 5 minutos, velocidade máxima de 1 mL/minuto) para evitar hipotensão grave e choque (HSL).',
      fonte: 'HSL',
      trecho: 'Administração: Via EV direta em no mínimo 5 minutos (min 1mL/min), ou via IM profunda (intraglútea). Não deve ser administrado via SC.',
      strong: false
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%', 'Ringer-Lactato'],
    concMax: 4, // 4 mg/mL de escopolamina (ampola pura)
    concUsual: 0.4, // ampola em 50 mL
    volOpcoes: [50, 100],
    tempo: {
      adulto: { min: 5, padrao: 15, max: 30 },
      ped: { min: 5, padrao: 15, max: 30 }
    },
    fonteTxt: 'Via EV direta muito lenta em no mínimo 5 minutos (velocidade máx 1 mL/min). Se necessária diluição, diluir em 50 mL de SF 0,9%, SG 5% ou Ringer-Lactato e infundir em 15 a 30 minutos (HSL). Estabilidade imediata.'
  },
  notas: {
    indicacao: 'Estados espásticos-dolorosos e cólicas agudas do trato gastrintestinal, vias biliares, trato urinário (cólica nefrética) e dismenorreia (HSL).',
    administracao: 'VO: Ingerir os comprimidos inteiros sem mastigar com líquidos. EV: Infusão intravenosa direta em no mínimo 5 minutos ou diluído em 50 mL de soro em 15-30 minutos. IM: Aplicação intramuscular profunda intraglútea (proibido SC).',
    cuidados: 'Monitorar pressão arterial durante infusão parenteral devido ao efeito vasodilatador da dipirona e taquicardia da escopolamina. Evitar em idosos sensíveis a anticolinérgicos.',
    ajuste: 'Insuficiência renal e hepática: Utilizar com cautela em pacientes idosos ou com disfunção renal/hepática debilitada (HSL).'
  }
};

export default escopolaminaDipirona;
