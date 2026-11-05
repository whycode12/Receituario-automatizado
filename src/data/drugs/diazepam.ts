import { Farmaco } from '../../types';

export const diazepam: Farmaco = {
  id: 'diazepam',
  nome: 'Diazepam',
  categoria: 'Sistema Nervoso e Psiquiátrico',
  busca: 'diazepam valium calmante benzodiazepinico crise convulsiva estado de mal agitacao panico ansiedade abstinencia alcoolica ampola ev im cp vo',
  classe: 'Benzodiazepínico de Longa Ação (Agonista Alostérico dos Receptores GABA-A)',
  dosePratica: 'Crise Convulsiva Aguda / Estado de Mal (> 5 min): 10 mg (1 ampola de 2 mL) EV puro lento (em 2 a 3 minutos). Pode repetir mais 10 mg após 5 minutos se refratário (máximo 20 mg). Agitação / Pânico agudo / Abstinência Alcoólica: 5 a 10 mg VO ou 10 mg IM profunda em glúteo.',
  fontes: { PSZERADO: '2025', HSL: '2024', ACLS: '2025', BULA: '2024' },
  modoPadrao: 'agora',
  diasPadrao: 0,
  usoContinuoPadrao: false,
  snPadrao: 'crise convulsiva aguda ou agitação psicomotora',
  acessoFonte: 'RENAME 2024 (Componente Básico / Hospitalar): Diazepam 10 mg comprimido e 5 mg/mL (10 mg/2 mL) injetável. Notificação de Receita B (Azul).',
  apresentacoes: [
    {
      id: 'amp10_2ml',
      forma: 'amp',
      nome: 'Ampola 10 mg / 2 mL (5 mg/mL) EV / IM',
      comercial: 'Valium®, Genérico',
      conc: '10mg / 2 mL',
      rotulo: 'Diazepam 10 mg / 2 mL ampola',
      mg: 10,
      volml: 2,
      mgml: 5,
      vias: ['EV', 'IM'],
      disp: '1 ampola (2 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Administrar preferencialmente por via endovenosa direta lenta (1 ampola em 2 a 3 minutos) sem diluir, em veia calibrosa. Se acesso venoso indisponível na convulsão, pode ser aplicado por via retal com seringa sem agulha ou IM profunda no glúteo.',
      obs: 'Precipita facilmente se diluído em soro fisiológico ou glicosado; fazer direto ou lavar com SF antes e depois. Monitorar frequência respiratória.'
    },
    {
      id: 'cp10',
      forma: 'cp',
      nome: 'Comprimido 10 mg (sulcado)',
      comercial: 'Valium®, Genérico',
      conc: '10mg',
      rotulo: 'Diazepam 10 mg comprimido',
      mg: 10,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 caixa com 20 comprimidos',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar por via oral com meio copo de água, preferencialmente à noite antes de dormir ou conforme prescrição médica.',
      obs: 'Comprimido sulcado, permite divisão em duas metades de 5 mg.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV', 'IM'],
      tipo: 'mg',
      min: 5,
      max: 10,
      padrao: 10,
      dosesDia: [1, 3],
      intervaloFixo: 8,
      fonte: 'PSZERADO',
      trecho: 'Crise convulsiva: 10 mg EV puro lento; repetir após 5 min se necessário (máx 20 mg no episódio).'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 5,
      max: 10,
      padrao: 10,
      dosesDia: [1, 2],
      intervaloFixo: 12,
      fonte: 'HSL',
      trecho: 'Ansiedade / Abstinência: 5 a 10 mg VO a cada 8 a 12 horas ou ao deitar.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 40,
      fonte: 'HSL',
      trecho: 'Dose máxima adulto: até 20 mg por episódio agudo e 40 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em depressão respiratória grave (FR < 10 irpm), miastenia gravis descompensada, apneia obstrutiva do sono e insuficiência respiratória ou hepática agudas graves.',
      fonte: 'HSL',
      trecho: 'Depressão respiratória grave ou miastenia gravis.',
      strong: true
    }
  ],
  ev: {
    diluentes: ['AD'],
    concMax: 5,
    volOpcoes: [2],
    tempo: {
      adulto: { min: 2, padrao: 3, max: 5, txt: '2 a 3 minutos lento sem diluir' },
      ped: { min: 3, padrao: 3, max: 5 }
    },
    fonteTxt: 'Administrar preferencialmente sem diluição em veia calibrosa. Não misturar com outras soluções no mesmo frasco/seringa devido ao risco de precipitação imediata.'
  },
  notas: {
    indicacao: 'Controle agudo de crises convulsivas (estado de mal epiléptico), alívio rápido de ansiedade extrema/ataque de pânico, sedação pré-procedimento e síndrome de abstinência alcoólica.',
    administracao: 'Infundir lentamente. Risco de depressão respiratória e sedação profunda potencializada se associado a álcool ou opióides. Ter Flumazenil disponível para reversão se necessário.',
    cuidados: 'Monitorar continuamente oximetria de pulso e mecânica respiratória. Risco de tolerância e dependência com uso prolongado.',
    ajuste: 'Em idosos ou insuficiência hepática, reduzir a dose em 50% devido à meia-vida prolongada de seus metabólitos ativos (desmetildiazepam).'
  }
};

export default diazepam;
