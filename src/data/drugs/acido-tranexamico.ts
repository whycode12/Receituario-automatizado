import { Farmaco } from '../../types';

export const acidoTranexamico: Farmaco = {
  id: 'acido_tranexamico',
  nome: 'Ácido Tranexâmico',
  categoria: 'Hematologia e Hemostáticos',
  busca: 'acido tranexamico transamin hemostatico antifibrinolitico epistaxe sangramento hemorragia plaquetopenia menorragia cirurgia',
  classe: 'Antifibrinolítico Inibidor da Ativação do Plasminogênio',
  dosePratica: 'Epistaxe / Sangramento Mucoso Leve a Moderado: 250 mg a 500 mg (1 a 2 comprimidos de 250 mg) VO de 8/8h por 3 a 5 dias. Hemorragias Agudas Graves / Urgência Hospitalar: 1 g (2 ampolas de 500 mg ou 4 ampolas de 250 mg) EV lento em 10 a 20 minutos (10 a 15 mg/kg), podendo repetir de 8/8h.',
  fontes: { HSL: '15/05/2023', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'sangramento ativo ou hemorragia',
  acessoFonte: 'Disponível em comprimidos de 250 mg e ampolas de 250 mg/5 mL (50 mg/mL) sob o nome de referência Transamin e genéricos.',
  apresentacoes: [
    {
      id: 'cp250',
      forma: 'cp',
      nome: 'Comprimido 250 mg',
      comercial: 'Transamin / Genérico',
      conc: '250mg',
      rotulo: 'Ácido tranexâmico 250mg comprimido',
      mg: 250,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 24 comprimidos',
      acesso: { rename: false, fp: false },
      instrucao: 'Engolir os comprimidos inteiros com um copo de água, com ou sem alimentos. Não mastigar.',
      obs: 'Ação hemostática rápida por inibição da degradação da fibrina pelo plasminogênio.'
    },
    {
      id: 'amp250_5ml',
      forma: 'amp',
      nome: 'Ampola 250 mg / 5 mL (50 mg/mL)',
      comercial: 'Transamin injetável',
      conc: '250mg / 5 mL (50 mg/mL)',
      rotulo: 'Ácido tranexâmico 250mg/5mL ampola',
      mg: 250,
      volml: 5,
      mgml: 50,
      frac: 1,
      vias: ['EV'],
      disp: '1 ampola (5 mL)',
      acesso: { rename: false, fp: false },
      obs: 'Administrar exclusivamente por infusão lenta (velocidade máxima de 1 mL/minuto).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 250,
      max: 1000,
      padrao: 500,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 5,
      fonte: 'HSL',
      trecho: 'Adultos: 250 a 1000 mg VO a cada 6 a 8 horas por 3 a 5 dias para controle de sangramento mucoso ou epistaxe.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV'],
      tipo: 'mg',
      min: 500,
      max: 1500,
      padrao: 1000,
      dosesDia: [1, 3],
      dosesPadrao: 1,
      intervaloFixo: 8,
      fonte: 'PSZERADO',
      trecho: 'Hemorragia aguda: 1000 mg (1 g) EV diluído em 100 mL de SF 0,9% em infusão lenta de 10 a 20 minutos.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 12 },
      vias: ['VO'],
      tipo: 'mg_kg_dose',
      min: 15,
      max: 25,
      padrao: 20,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'HSL',
      trecho: 'Pediatria: 15 a 25 mg/kg/dose VO de 8/8 horas (máximo de 1000 mg/dose).'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 12 },
      vias: ['EV'],
      tipo: 'mg_kg_dose',
      min: 10,
      max: 15,
      padrao: 10,
      dosesDia: [1, 3],
      dosesPadrao: 1,
      fonte: 'HSL',
      trecho: 'Pediatria EV: 10 a 15 mg/kg/dose EV lento de 8/8h.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 4000,
      fonte: 'HSL',
      trecho: 'Dose máxima diária de ácido tranexâmico por via oral: 4000 mg/dia.'
    },
    {
      pub: 'adulto',
      vias: ['EV'],
      tipo: 'mg_dia',
      valor: 3000,
      fonte: 'HSL',
      trecho: 'Dose máxima diária por via intravenosa: 3000 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em doença tromboembólica venosa ou arterial ativa (trombose venosa profunda, TEP, AVC isquêmico agudo, infarto agudo do miocárdio) ou histórico recente de trombose sem anticoagulação plena.',
      fonte: 'BULA',
      trecho: 'Risco de agravo de trombogênese intravascular.',
      strong: false
    },
    {
      msg: 'Contraindicado em hematúria macroscópica de trato urinário superior (risco de formação de coágulos intraureterais e obstrução urinária aguda com insuficiência renal).',
      fonte: 'HSL',
      trecho: 'Risco de nefropatia obstrutiva por coágulos de fibrina intraluminais.',
      strong: false
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 50,
    volOpcoes: [50, 100],
    volPadraoAdulto: [[1500, 100]],
    tempo: {
      adulto: { min: 15, max: 30, padrao: 20, txt: '15 a 30 min' }
    },
    fonteTxt: 'HSL / Einstein'
  },
  notas: {
    indicacao: 'Tratamento e profilaxia de hemorragias associadas à hiperfibrinólise primária ou secundária: epistaxe volumosa, cirurgias odontológicas, hematomas, hemorragia digestiva, trauma.',
    administracao: 'Via EV: infundir diluído em 100 mL de SF 0,9% em 15 a 30 minutos. Administrações muito rápidas em bolus podem causar hipotensão transitória, tontura e náuseas.',
    cuidados: 'Ajustar dose na insuficiência renal conforme o clearance de creatinina (excreção renal > 90%).',
    ajuste: 'Ajustar intervalo se ClCr < 50 mL/min.'
  }
};
export default acidoTranexamico;
