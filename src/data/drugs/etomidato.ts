import { Farmaco } from '../../types';

export const etomidato: Farmaco = {
  id: 'etomidato',
  nome: 'Etomidato',
  categoria: 'Emergência e Sedação',
  busca: 'etomidato hypnomidate iot intubacao sequencia rapida indutor sedacao estabilidade hemodinamica 2mg/ml',
  classe: 'Hipnótico Imidazólico Indutor Anestésico Não Barbitúrico',
  dosePratica: 'Sequência Rápida de Intubação (Indutor de escolha no choque/instabilidade hemodinâmica): 0,3 mg/kg EV em bolus lento em 30 a 60 segundos (adulto de 50 kg: 7,5 mL; 70 kg: 10,5 mL = 21 mg; 90 kg: 13,5 mL). Início de ação em 30 a 60 segundos com duração de 5 a 15 minutos.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'indução anestésica em sequência rápida de intubação orotraqueal',
  modoPadrao: 'agora',
  diasPadrao: 0,
  usoContinuoPadrao: false,
  acessoFonte: 'RENAME 2024 / Componente Hospitalar: Solução injetável 2 mg/mL em ampolas de 10 mL padronizada em pronto-socorro.',
  apresentacoes: [
    {
      id: 'amp2mg_10ml',
      forma: 'amp',
      nome: 'Ampola 2 mg/mL (20 mg / 10 mL)',
      comercial: 'Hypnomidate®, Genérico',
      conc: '2 mg/mL',
      rotulo: 'Etomidato 2 mg/mL ampola 10 mL (20 mg)',
      mg: 20,
      volml: 10,
      mgml: 2,
      vias: ['EV'],
      disp: '1 ampola (10 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Injetar por via endovenosa direta lentamente em 30 a 60 segundos. Droga de alta estabilidade hemodinâmica (não causa queda da pressão arterial ou depressão miocárdica significativa).',
      obs: 'Indutor ideal para pacientes hipotensos, sépticos, com trauma ou choque circulatório.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV'],
      tipo: 'mg',
      min: 15,
      max: 30,
      padrao: 20,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: '0,3 mg/kg EV em bolus para indução de IOT.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'dose_max',
      valor: 40,
      fonte: 'HSL',
      trecho: 'Dose máxima de indução: 0,3 mg/kg.'
    }
  ],
  contra: [
    {
      msg: 'Hipersensibilidade conhecida ao etomidato. Não deve ser usado em infusão contínua prolongada devido à inibição da 11-beta-hidroxilase adrenal (supressão adrenocortical transitória).',
      fonte: 'HSL',
      trecho: 'Contraindicado em infusão contínua por supressão adrenal.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Indução rápida da anestesia geral para intubação endotraqueal de urgência, especialmente em pacientes hemodinamicamente instáveis.',
    administracao: 'Injeção intravenosa lenta em 30 a 60 segundos.',
    cuidados: 'Pode induzir mioclonias benignas transitórias (atenuadas pelo pré-tratamento com fentanil). Ter laringoscópio e tubos orotraqueais prontos antes da injeção.',
    ajuste: 'Não requer ajuste em insuficiência renal.'
  }
};

export default etomidato;
