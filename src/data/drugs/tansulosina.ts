import { Farmaco } from '../../types';

export const tansulosina: Farmaco = {
  id: 'tansulosina',
  nome: 'Cloridrato de Tansulosina',
  categoria: 'Sistema Urinário',
  busca: 'tansulosina secalin secotex uro urologia calculo ureteral ureterolitíase nefrolitiase expulsao hpb prostata 0,4mg',
  classe: 'Antagonista Seletivo dos Receptores Alfa-1A Adrenérgicos Uroespecíficos',
  dosePratica: 'Terapia Médica Expulsiva (TME) de Cálculo Ureteral distal (5 a 10 mm): 0,4 mg VO 1x ao dia após o mesmo horário da refeição (ex: após o café da manhã) por 14 a 28 dias. Aumenta a taxa de eliminação espontânea do cálculo e diminui episódios de dor. Hiperplasia Prostática Benigna (HPB): 0,4 mg VO 1x ao dia contínuo.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'cálculo ureteral em tentativa de expulsão médica ou sintomas de HPB',
  acessoFonte: 'RENAME 2024 (Componente Especializado): Cloridrato de tansulosina 0,4 mg cápsula de liberação modificada.',
  apresentacoes: [
    {
      id: 'cap04mg',
      forma: 'cap',
      nome: 'Cápsula de liberação modificada 0,4 mg',
      comercial: 'Secalin®, Secotex®, Omnic®',
      conc: '0,4mg',
      rotulo: 'Cloridrato de Tansulosina 0,4 mg cápsula',
      mg: 0.4,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 30 cápsulas',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar 1 cápsula por via oral uma vez ao dia com um copo de água, sempre após a mesma refeição (ex: após o café da manhã). Engolir inteira sem mastigar ou abrir.',
      obs: 'Uroespecífico: relaxa a musculatura lisa do ureter distal e da próstata com baixo impacto na pressão arterial sistêmica.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 18 },
      vias: ['VO'],
      tipo: 'mg',
      min: 0.4,
      max: 0.4,
      padrao: 0.4,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: 'Terapia expulsiva de cálculo ureteral ou HPB: 0,4 mg VO 1x ao dia após refeição.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 0.8,
      fonte: 'HSL',
      trecho: 'Dose máxima adulto: até 0,8 mg/dia (habitual 0,4 mg/dia).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em hipersensibilidade à tansulosina, histórico de hipotensão ortostática sintomática severa e insuficiência hepática grave.',
      fonte: 'HSL',
      trecho: 'Hipotensão ortostática grave ou insuficiência hepática severa.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Terapia médica expulsiva de cálculos no ureter distal (entre 5 e 10 mm) e alívio dos sintomas do trato urinário inferior associados à HPB.',
    administracao: 'Tomar diariamente cerca de 30 minutos após a mesma refeição. Não mastigar a cápsula para preservar o mecanismo de liberação prolongada.',
    cuidados: 'Pode causar ejaculação retrógrada e leve tontura postural. Avisar o oftalmologista antes de cirurgia de catarata (risco de Síndrome da Íris Flácida Intraoperatória - IFIS).',
    ajuste: 'Não necessita de ajuste de dose para insuficiência renal leve a moderada.'
  }
};

export default tansulosina;
