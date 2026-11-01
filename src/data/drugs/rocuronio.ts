import { Farmaco } from '../../types';

export const rocuronio: Farmaco = {
  id: 'rocuronio',
  nome: 'Brometo de Rocurônio',
  categoria: 'Emergência e Sedação',
  busca: 'rocuronio esmeron bloqueador neuromuscular nao despolarizante iot intubacao sequencia rapida paralisia 10mg/ml',
  classe: 'Bloqueador Neuromuscular Não Despolarizante Aminoesteroide',
  dosePratica: 'Sequência Rápida de Intubação (Alternativa de escolha quando a succinilcolina é contraindicada): 1,0 a 1,2 mg/kg EV em bolus rápido (adulto de 50 kg: 5 mL = 50 mg; 70 kg: 7 mL = 70 mg; 90 kg: 9 mL = 90 mg). Início de ação em 60 segundos com duração de 40 a 60 minutos.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'paralisia neuromuscular em sequência rápida de intubação',
  acessoFonte: 'RENAME 2024 / Componente Hospitalar: Solução injetável 10 mg/mL frasco-ampola com 5 mL (50 mg).',
  apresentacoes: [
    {
      id: 'fap10mg_5ml',
      forma: 'fap',
      nome: 'Frasco-ampola 10 mg/mL (50 mg / 5 mL)',
      comercial: 'Esmeron®, Genérico',
      conc: '10 mg/mL',
      rotulo: 'Brometo de Rocurônio 10 mg/mL frasco-ampola 5 mL (50 mg)',
      mg: 50,
      volml: 5,
      mgml: 10,
      vias: ['EV'],
      disp: '2 frascos-ampola (100 mg)',
      acesso: { rename: true, fp: false },
      instrucao: 'Administrar por via endovenosa direta em bolus rápido imediatamente após o indutor hipnótico.',
      obs: 'Não provoca fasciculações e NÃO eleva o potássio sérico (seguro em queimados graves, esmagamento e hipercalemia). Antídoto específico de reversão: Sugamadex.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV'],
      tipo: 'mg',
      min: 50,
      max: 120,
      padrao: 70,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: '1,0 a 1,2 mg/kg EV em bolus para sequência rápida.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'dose_max',
      valor: 150,
      fonte: 'HSL',
      trecho: 'Dose máxima de bolus: 1,2 mg/kg.'
    }
  ],
  contra: [
    {
      msg: 'Hipersensibilidade prévia ao rocurônio ou a brometos.',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade ao fármaco.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Facilitação da intubação traqueal em sequência rápida e relaxamento muscular em ventilação mecânica.',
    administracao: 'Injetar EV rápido. A paralisia dura cerca de 40 a 60 minutos; manter sedação contínua adequada (o paciente fica paralisado e consciente se a sedação for negligenciada!).',
    cuidados: 'Monitorar sinais de despertar e parâmetros ventilatórios. Reversor específico disponível: Sugamadex.',
    ajuste: 'Pode ter ação prolongada em insuficiência hepática ou renal graves.'
  }
};

export default rocuronio;
