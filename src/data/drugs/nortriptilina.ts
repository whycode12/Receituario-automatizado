import { Farmaco } from '../../types';

export const nortriptilina: Farmaco = {
  id: 'nortriptilina',
  nome: 'Cloridrato de Nortriptilina',
  categoria: 'Neurológicos e Antidepressivos',
  busca: 'nortriptilina pamelor antidepressivo triciclico dor cronica neuropatia enxaqueca sono neuropatica fibromialgia',
  classe: 'Antidepressivo Tricíclico (Inibidor da recaptação de noradrenalina e serotonina)',
  dosePratica: 'Adulto: Dor crônica / neuropática / profilaxia de enxaqueca: iniciar com 10 mg a 25 mg VO à noite ao deitar (1x ao dia); se necessário, titular gradualmente a cada 1-2 semanas até 25 mg a 75 mg/dia. Depressão maior: 25 mg 3-4x/dia ou 50 mg a 100 mg em dose única noturna (máx. 150 mg/dia; idosos máx. 50-75 mg/dia). Ingerir com água, preferencialmente à noite devido à sonolência. Receituário de Controle Especial (Lista C1).',
  fontes: { HSL: '11/09/2019', BULA: '04/10/2026' },
  snPadrao: 'dor crônica neuropática ou profilaxia de enxaqueca',
  acessoFonte: 'RENAME 2024 (Componente Básico / Saúde Mental): cápsula 25 mg. Farmácia Popular: não consta no elenco do programa. Medicamento de Controle Especial sujeito a Receita de Controle Especial em 2 vias (Portaria 344/98 - Lista C1).',
  apresentacoes: [
    {
      id: 'cap25',
      forma: 'cap',
      nome: 'Cápsula 25 mg',
      comercial: 'Pamelor / Genérico',
      conc: '25mg',
      rotulo: 'Cloridrato de Nortriptilina 25mg',
      mg: 25,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME básica. Apresentação mais consagrada para início e titulação de dose.'
    },
    {
      id: 'cap10',
      forma: 'cap',
      nome: 'Cápsula 10 mg',
      comercial: 'Pamelor / Genérico',
      conc: '10mg',
      rotulo: 'Cloridrato de Nortriptilina 10mg',
      mg: 10,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Ideal para dose inicial baixa em idosos, pacientes sensíveis ou profilaxia inicial de enxaqueca.'
    },
    {
      id: 'cap50',
      forma: 'cap',
      nome: 'Cápsula 50 mg',
      comercial: 'Pamelor / Genérico',
      conc: '50mg',
      rotulo: 'Cloridrato de Nortriptilina 50mg',
      mg: 50,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Dose intermediária para manutenção em dor neuropática ou depressão maior.'
    },
    {
      id: 'cap75',
      forma: 'cap',
      nome: 'Cápsula 75 mg',
      comercial: 'Pamelor / Genérico',
      conc: '75mg',
      rotulo: 'Cloridrato de Nortriptilina 75mg',
      mg: 75,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Dose terapêutica plena para tratamento de depressão resistente ou dor crônica refratária.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 10,
      max: 150,
      padrao: 25,
      dosesDia: [1, 3],
      dosesPadrao: 1,
      fonte: 'HSL',
      trecho: 'Adulto: 25mg, 3-4 vezes/dia. Iniciar com doses baixas e aumentar gradualmente de acordo com a necessidade. Dose máxima: 150mg/dia (HSL).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 6 },
      vias: ['VO'],
      tipo: 'mg',
      min: 10,
      max: 40,
      padrao: 10,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      fonte: 'HSL',
      trecho: 'Pediatria: Enurese noturna (Off-label): 10-20mg/dia e aumentar aos poucos até o máximo de 40mg/dia (HSL).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 150,
      fonte: 'HSL',
      trecho: 'Dose máxima Adultos: 150mg/dia (HSL).'
    },
    {
      pub: 'ped',
      tipo: 'mg_dia',
      valor: 40,
      fonte: 'HSL',
      trecho: 'Dose máxima Pediatria (enurese noturna): 40mg/dia (HSL).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes durante a fase de recuperação aguda após infarto do miocárdio e com arritmias ou bloqueios de condução cardíaca (HSL / Bula).',
      fonte: 'BULA',
      trecho: 'Contraindicado no período de recuperação pós-infarto do miocárdio e em bloqueios cardíacos graves.',
      strong: true
    },
    {
      msg: 'Contraindicado o uso concomitante com inibidores da monoaminoxidase (IMAO) ou dentro de 14 dias após sua descontinuação (risco de síndrome serotoninérgica e crise hipertensiva grave).',
      fonte: 'BULA',
      trecho: 'O uso concomitante de inibidores da MAO é contraindicado; respeitar intervalo de pelo menos 14 dias.',
      strong: true
    }
  ],
  conflitos: [
    {
      txt: 'Em psiquiatria (depressão maior), as fontes clássicas recomendam divisão em 2 a 4 tomadas ao dia ou dose única noturna. Em dor crônica e neuropatia, a prática brasileira consagra quase invariavelmente tomada única noturna ao deitar para aproveitar o efeito sedativo e minimizar efeitos colaterais diurnos.'
    }
  ],
  notas: {
    indicacao: 'Depressão maior (HSL). Uso consagrado/off-label para controle de dor crônica neuropática (polineuropatia diabética, neuralgia pós-herpética), fibromialgia, profilaxia de enxaqueca e enurese noturna infantil.',
    administracao: 'Via oral, com um copo de água, com ou sem alimentos. Recomenda-se tomar preferencialmente à noite ao deitar para reduzir a sensação de boca seca e sonolência durante o dia. Não mastigar nem abrir as cápsulas.',
    cuidados: 'Efeitos anticolinérgicos frequentes: boca seca, constipação intestinal, visão turva e retenção urinária. Em idosos, monitorar hipotensão ortostática e risco de quedas. Pode prolongar o intervalo QTc no ECG em doses elevadas.',
    ajuste: 'Insuficiência renal: Não foram encontradas informações sobre necessidade de ajuste de dose nas referências consultadas (HSL). Hemodiálise: Não dialisável significativamente. Insuficiência hepática: Reduzir a dose inicial e aumentar com cautela conforme necessidade e tolerância (HSL).'
  }
};

export default nortriptilina;
