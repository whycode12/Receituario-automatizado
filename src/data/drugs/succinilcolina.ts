import { Farmaco } from '../../types';

export const succinilcolina: Farmaco = {
  id: 'succinilcolina',
  nome: 'Cloreto de Succinilcolina (Suxametônio)',
  categoria: 'Emergência e Sedação',
  busca: 'succinilcolina quelicin suxametonio iot intubacao sequencia rapida bloqueador neuromuscular despolarizante paralisia 100mg',
  classe: 'Bloqueador Neuromuscular Despolarizante de Ação Ultrarrápida',
  dosePratica: 'Sequência Rápida de Intubação (Paralisante de primeira escolha na ausência de contraindicações): 1,0 a 1,5 mg/kg EV em bolus rápido (adulto de 50 kg: 75 mg; 70 kg: 105 mg = aprox. 1 frasco de 100 mg; 90 kg: 135 mg). Início de paralisia muscular em 45 a 60 segundos com duração de 6 a 10 minutos.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'paralisia neuromuscular para intubação orotraqueal em sequência rápida',
  modoPadrao: 'agora',
  diasPadrao: 0,
  usoContinuoPadrao: false,
  acessoFonte: 'RENAME 2024 (Hospitalar / Emergência): Pó para solução injetável 100 mg e 500 mg padronizado na urgência.',
  apresentacoes: [
    {
      id: 'fap100',
      forma: 'fap',
      nome: 'Frasco-ampola 100 mg pó liofilizado para injeção EV',
      comercial: 'Quelicin®, Succitrat®, Genérico',
      conc: '100 mg',
      rotulo: 'Cloreto de Succinilcolina 100 mg frasco-ampola',
      mg: 100,
      volml: 10,
      reconstMl: 10,
      reconstDil: 'Água Destilada (10 mL) = 10 mg/mL',
      vias: ['EV'],
      disp: '1 frasco-ampola',
      acesso: { rename: true, fp: false },
      instrucao: 'Reconstituir com 10 mL de AD (10 mg/mL). Administrar por via endovenosa direta em bolus imediatamente após o agente hipnótico/indutor.',
      obs: 'Provoca fasciculações musculares passageiras antes do relaxamento completo. Duração curta (retorno da respiração espontânea em 8-10 min).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV'],
      tipo: 'mg',
      min: 75,
      max: 150,
      padrao: 100,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: '1,0 a 1,5 mg/kg EV em bolus para IOT.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'dose_max',
      valor: 200,
      fonte: 'HSL',
      trecho: 'Dose máxima de bolus: 1,5 mg/kg.'
    }
  ],
  contra: [
    {
      msg: 'CONTRAINDICAÇÕES CRÍTICAS (risco de HIPERCALEMIA FATAL): Hipercalemia prévia conhecida, queimaduras graves ou trauma por esmagamento (após > 48-72h), lesão medular ou denervação muscular/AVC (> 48h), miopatias (Duchenne) e histórico pessoal/familiar de HIPERTERMIA MALIGNA.',
      fonte: 'PSZERADO',
      trecho: 'Risco de hipertermia maligna ou hipercalemia fulminante.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Bloqueio neuromuscular em sequência rápida de intubação orotraqueal.',
    administracao: 'Injetar EV imediatamente após o indutor.',
    cuidados: 'Se o paciente possuir contraindicação à succinilcolina (ex: queimadura antiga, hipercalemia), o bloqueador de escolha é o ROCURÔNIO 1,2 mg/kg.',
    ajuste: 'Não necessita de ajuste de dose em insuficiência renal.'
  }
};

export default succinilcolina;
