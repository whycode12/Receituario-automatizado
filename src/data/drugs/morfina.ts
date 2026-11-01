import { Farmaco } from '../../types';

export const morfina: Farmaco = {
  id: 'morfina',
  nome: 'Sulfato de Morfina',
  categoria: 'Analgésicos e Antitérmicos',
  busca: 'morfina dimorf opioide dor intensa refrataria iam sca eap dispneia dor oncologica ampola ev sc vo',
  classe: 'Analgésico Opióide Agonista Puro dos Receptores Mu (Potente)',
  dosePratica: 'Dor aguda intensa / SCA refratária / EAP: Diluir 1 ampola (10 mg/1 mL) em 9 mL de SF 0,9% (1 mg/mL). Administrar 2 a 4 mL (2 a 4 mg) EV lento em 2 a 3 minutos; se persistir a dor, pode repetir a cada 15 a 30 minutos sob rigorosa monitorização respiratória (ter Naloxona disponível à beira-leito).',
  fontes: { PSZERADO: '2025', HSL: '2024', EINA: '2024', BULA: '2024' },
  snPadrao: 'dor intensa refratária ou ansiedade extrema por dispneia no EAP',
  acessoFonte: 'RENAME 2024 (Componente Básico / Hospitalar): Morfina 10 mg/mL solução injetável e 10 mg comprimido. Notificação de Receita A (Amarela).',
  apresentacoes: [
    {
      id: 'amp10_1ml',
      forma: 'amp',
      nome: 'Ampola 10 mg / 1 mL (10 mg/mL) EV / SC / IM',
      comercial: 'Dimorf®',
      conc: '10mg / 1 mL',
      rotulo: 'Sulfato de Morfina 10 mg / 1 mL ampola',
      mg: 10,
      volml: 1,
      mgml: 10,
      vias: ['EV', 'SC', 'IM'],
      disp: '1 ampola (1 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Diluir 1 mL (10 mg) em 9 mL de SF 0,9% em seringa de 10 mL (1 mg/mL). Administrar 2 a 4 mL lentamente por via endovenosa em 2 a 3 minutos.',
      obs: 'Opióide potente para alívio de dor isquêmica refratária e ansiedade/dispneia no Edema Agudo de Pulmão.'
    },
    {
      id: 'cp10',
      forma: 'cp',
      nome: 'Comprimido 10 mg (Uso oral)',
      comercial: 'Dimorf®',
      conc: '10mg',
      rotulo: 'Sulfato de Morfina 10 mg comprimido',
      mg: 10,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar por via oral a cada 4 horas conforme prescrição médica.',
      obs: 'Uso em dor oncológica crônica refratária.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV'],
      tipo: 'mg',
      min: 2,
      max: 10,
      padrao: 3,
      dosesDia: [1, 6],
      intervaloFixo: 4,
      fonte: 'PSZERADO',
      trecho: 'Dor intensa / SCA / EAP: diluir 10 mg em 9 mL de SF 0,9%; aplicar 2 a 4 mg EV lento em 2 a 3 min, repetindo a cada 15 a 30 min se necessário.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 10,
      max: 30,
      padrao: 10,
      dosesDia: [4, 6],
      intervaloFixo: 4,
      fonte: 'HSL',
      trecho: 'Adultos VO: 10 a 30 mg a cada 4 horas se dor crônica intensa.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 60,
      fonte: 'HSL',
      trecho: 'Dose máxima EV habitual inicial: até 10 mg por episódio e 60 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com depressão respiratória importante (FR < 10 irpm), asma aguda descompensada, íleo paralítico e hipertensão intracraniana grave.',
      fonte: 'HSL',
      trecho: 'Depressão respiratória grave ou obstrução de vias aéreas.',
      strong: true
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%', 'AD'],
    concMax: 5,
    volOpcoes: [10, 20],
    tempo: {
      adulto: { min: 2, padrao: 3, max: 5, txt: '2 a 5 minutos (lento)' },
      ped: { min: 5, padrao: 5, max: 10 }
    },
    fonteTxt: 'Diluir 1 ampola (10 mg) em 9 mL de SF 0,9% (1 mg/mL). Injetar 2 a 4 mL lentamente em 2 a 3 minutos.'
  },
  notas: {
    indicacao: 'Alívio da dor intensa refratária na síndrome coronariana aguda, dor pós-operatória severa, dor oncológica e alívio da dispneia angustiante no edema agudo de pulmão.',
    administracao: 'Infundir lentamente diluído em seringa. Ter ampola de Naloxona (0,4 mg) disponível à beira-leito para reversão imediata se depressão respiratória.',
    cuidados: 'Monitorar continuamente oximetria de pulso, frequência respiratória e nível de consciência.',
    ajuste: 'Em insuficiência renal grave, acumula metabólito ativo morfina-6-glicuronídeo; reduzir dose e espaçar intervalos.'
  }
};

export default morfina;
