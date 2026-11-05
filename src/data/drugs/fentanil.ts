import { Farmaco } from '../../types';

export const fentanil: Farmaco = {
  id: 'fentanil',
  nome: 'Citrato de Fentanila (Fentanil)',
  categoria: 'Emergência e Sedação',
  busca: 'fentanil fentanila iot intubacao analgesia opioide sedacao bico cirurgia dor intensa 50mcg/ml',
  classe: 'Analgésico Opioide Sintético de Ação Rápida e Curta Duração',
  dosePratica: 'Sequência Rápida de Intubação (Pré-tratamento): 1 a 3 mcg/kg EV lento em 1 a 2 min (cerca de 100 a 200 mcg no adulto de 70 kg = 2 a 4 mL). Analgesia aguda intensa / dor refratária: 50 a 100 mcg (1 a 2 mL) EV lento a cada 1 a 2 horas. Sedação contínua em BIC: 1 a 3 mcg/kg/h.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'dor intensa aguda ou sequência rápida de intubação',
  modoPadrao: 'agora',
  diasPadrao: 0,
  usoContinuoPadrao: false,
  acessoFonte: 'RENAME 2024 (Hospitalar / Emergência): Ampolas de 50 mcg/mL (2 mL, 5 mL e 10 mL) padronizadas em UTIs e salas de emergência.',
  apresentacoes: [
    {
      id: 'amp50mcg_2ml',
      forma: 'amp',
      nome: 'Ampola 50 mcg/mL (100 mcg / 2 mL)',
      comercial: 'Fentanil®, Unifentanil®, Genérico',
      conc: '50 mcg/mL (0,05 mg/mL)',
      rotulo: 'Fentanila 50 mcg/mL ampola 2 mL (100 mcg)',
      mg: 0.1, // 100 mcg = 0.1 mg
      volml: 2,
      mgml: 0.05,
      vias: ['EV'],
      disp: '1 ampola (2 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Administrar por via endovenosa lenta em pelo menos 1 a 2 minutos. Injeções em bolus excessivamente rápidas podem causar rigidez torácica ("tórax em madeira") impedindo a ventilação mecânica.',
      obs: 'Potência analgésica cerca de 100 vezes superior à morfina, com início em segundos e pico em 3 a 5 minutos.'
    },
    {
      id: 'amp50mcg_10ml',
      forma: 'amp',
      nome: 'Ampola 50 mcg/mL (500 mcg / 10 mL)',
      comercial: 'Fentanil®, Genérico',
      conc: '50 mcg/mL',
      rotulo: 'Fentanila 50 mcg/mL ampola 10 mL (500 mcg)',
      mg: 0.5,
      volml: 10,
      mgml: 0.05,
      vias: ['EV'],
      disp: '1 ampola (10 mL)',
      acesso: { rename: true, fp: false }
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV'],
      tipo: 'mg',
      min: 0.05,
      max: 0.3,
      padrao: 0.1,
      dosesDia: [1, 6],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: 'Analgesia ou pré-IOT: 50 a 200 mcg (0,05 a 0,2 mg) EV lento.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'dose_max',
      valor: 0.5,
      fonte: 'HSL',
      trecho: 'Dose máxima por bolus sem IOT: 100-200 mcg.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes sem suporte ventilatório invasivo ou com depressão respiratória grave não monitorizada.',
      fonte: 'BULA',
      trecho: 'Depressão respiratória sem via aérea protegida.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Analgesia em dor aguda severa, pré-tratamento em sequência rápida de intubação (atenua reflexo simpático de laringoscopia) e sedoanalgesia em ventilação mecânica.',
    administracao: 'Injetar lentamente em 1 a 2 minutos. Ter sempre à disposição Naloxona e bolsa-válvula-máscara.',
    cuidados: 'Monitorar oximetria de pulso, capnografia, pressão arterial e frequência cardíaca.',
    ajuste: 'Reduzir dose em idosos ou disfunção hepática grave.'
  }
};

export default fentanil;
