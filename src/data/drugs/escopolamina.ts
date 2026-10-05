import { Farmaco } from '../../types';

export const escopolamina: Farmaco = {
  id: 'escopolamina',
  nome: 'Butilbrometo de Escopolamina',
  categoria: 'Gastrintestinal e Antiespasmódicos',
  busca: 'buscopan escopolamina butilbrometo colica antiespasmodico',
  classe: 'Antiespasmódico, Anticolinérgico',
  fontes: { HSL: '26/02/2024', EINA: '2024', EINP: '2024' },
  snPadrao: 'cólica ou espasmos abdominais',
  acessoFonte: 'RENAME 2024 (Componente Básico): comprimido/drágea 10 mg e ampola 20 mg/mL. Farmácia Popular: não consta no elenco.',
  apresentacoes: [
    {
      id: 'cp10',
      forma: 'cp',
      nome: 'Drágea 10 mg',
      comercial: 'Buscopan simples',
      conc: '10mg',
      rotulo: 'Butilbrometo de Escopolamina 10mg',
      mg: 10,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Drágea simples. Ingerir sem mastigar com água. RENAME.'
    },
    {
      id: 'gts10',
      forma: 'gotas',
      nome: 'Gotas 10 mg/mL (20 gotas/mL)',
      comercial: 'Buscopan simples gotas',
      conc: '10mg/mL',
      rotulo: 'Butilbrometo de Escopolamina 10mg/mL gotas',
      mgml: 10,
      gotasml: 20,
      frascoMl: 20,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: false, fp: false },
      obs: '1 mL = 20 gotas = 10 mg (1 gota = 0,5 mg). Frasco com 20 mL.'
    },
    {
      id: 'amp20',
      forma: 'amp',
      nome: 'Ampola 20 mg/mL (ampola 1 mL)',
      comercial: 'Buscopan injetável',
      conc: '20mg/mL',
      rotulo: 'Butilbrometo de Escopolamina 20mg/mL ampola 1mL',
      mg: 20,
      mgml: 20,
      volml: 1,
      vias: ['EV', 'IM'],
      disp: '1 ampola',
      acesso: { rename: true, fp: false },
      obs: 'Uso parenteral (EV lento, IM ou SC). RENAME.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 10,
      max: 20,
      padrao: 10,
      dosesDia: [3, 5],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Adulto Via Oral: 1 a 2 drágeas ou 20 a 40 gotas (10 a 20mg), 3 a 5 vezes/dia.'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['EV', 'IM'],
      tipo: 'mg',
      min: 20,
      max: 40,
      padrao: 20,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Adulto Via EV, IM ou SC(Maiores de 12 anos): 20 a 40mg (1 a 2 ampolas), várias vezes/dia (respeitando a dose máxima).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 6 },
      vias: ['VO'],
      tipo: 'mg',
      min: 10,
      max: 20,
      padrao: 10,
      dosesDia: [3, 5],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Maiores de 6 anos: 1 a 2 drágeas ou 20 a 40 gotas (10 a 20mg), 3 a 5 vezes/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 1, idadeMaxAnos: 6 },
      vias: ['VO'],
      tipo: 'mg_kg_dose',
      min: 0.3,
      max: 0.5,
      padrao: 0.3,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Pediatria Entre 1 a 6 anos: 0,3 a 0,5mg/kg/dose, 3 vezes/dia (ou 10 a 20 gotas 3x/dia).'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 3, idadeMaxMeses: 11 },
      vias: ['VO'],
      tipo: 'mg_kg_dose',
      min: 0.7,
      max: 0.7,
      padrao: 0.7,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Pediatria Entre 3 a 11 meses: 0,7mg/kg/dose, 3 vezes/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMaxMeses: 3 },
      vias: ['VO'],
      tipo: 'mg_kg_dose',
      min: 1.5,
      max: 1.5,
      padrao: 1.5,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Pediatria Até 3 meses dose baseada no peso corpóreo: 1,5mg/kg, 3 vezes/dia.'
    },
    {
      pub: 'ped',
      vias: ['EV', 'IM'],
      tipo: 'mg_kg_dose',
      min: 0.3,
      max: 0.6,
      padrao: 0.3,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Pediatria Via EV, IM ou SC: Em casos graves, 0,3 a 0,6mg/kg, várias vezes ao dia (respeitando a dose máxima).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 100,
      fonte: 'HSL',
      trecho: 'Dose máxima Adulto: IV: 100mg/dia, VO: 60mg/dia.'
    },
    {
      pub: 'ped',
      tipo: 'mg_kg_dia',
      valor: 1.5,
      fonte: 'HSL',
      trecho: 'Dose máxima Pediatria: IV: 1,5mg/kg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado para uso por idosos especialmente sensíveis aos efeitos secundários dos antimuscarínicos (secura na boca, retenção urinária) (HSL).',
      fonte: 'HSL',
      trecho: 'Esse medicamento é contraindicado para uso por idosos especialmente sensíveis aos efeitos secundários dos antimuscarínicos, como secura da boca e retenção urinária.',
      strong: false
    },
    {
      msg: 'Utilizar com cuidado em pacientes com insuficiência renal ou hepática pelo aumento do risco de reações adversas neurológicas (HSL).',
      fonte: 'HSL',
      trecho: 'Insuficiência renal e hepática: Utilizar com cuidado em pacientes com insuficiência renal/hepática, devido ao aumento do risco de reação adversa neurológica.',
      strong: false
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 20,
    concUsualPed: 1,
    volOpcoes: [20, 50, 100],
    tempo: {
      adulto: { min: 2, padrao: 15, max: 15 },
      ped: { min: 2, padrao: 15, max: 30 }
    },
    fonteTxt: 'EV: Não é estritamente necessário diluir (administrar direto lentamente em 2 a 3 minutos). Padrão HSL: diluir em 20 mL de SF 0,9%. Einstein Adultos: SF/SG5% 50 mL, conc máx 20 mg/mL, IV direto lento ou infusão em 15 minutos. Einstein Pediátrico: conc máx 1 mg/mL, IV direto em 2-5 min ou infusão em 10-30 min.'
  },
  notas: {
    indicacao: 'Espasmos agudos dos tratos gastrintestinal, geniturinário e vias biliares, assim como cólicas biliar e renal. Auxiliar em procedimentos diagnósticos como endoscopia (HSL).',
    administracao: 'VO: Tomar drágeas inteiras sem mastigar. EV: Direto lentamente em 2 a 3 min, ou diluído em 20 a 50 mL de SF/SG5% em infusão de 15 min.',
    cuidados: 'Drágeas contêm açúcar (cautela em portadores de diabetes). Cautela em idosos pelo risco de retenção urinária e taquicardia.',
    ajuste: 'Insuficiência renal e hepática: Utilizar com cuidado devido ao risco de reação adversa neurológica (HSL).'
  }
};

export default escopolamina;
