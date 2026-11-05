import { Farmaco } from '../../types';

export const midazolam: Farmaco = {
  id: 'midazolam',
  nome: 'Dormonid / Midazolam',
  categoria: 'Emergência e Sedação',
  busca: 'midazolam dormonid sedacao iot intubacao crise convulsiva estado de mal epilepsia agitacao benzo 5mg/ml',
  classe: 'Benzodiazepínico de Ação Curta e Início Rápido',
  dosePratica: 'Sequência Rápida de Intubação (Indutor alternativo): 0,2 a 0,3 mg/kg EV bolus lento em 30 segundos (adulto de 50 kg: 3 mL = 15 mg; 70 kg: 4,2 mL = 21 mg; 90 kg: 5,4 mL). Crise Convulsiva / Mal Epiléptico: 5 a 10 mg IM (0,2 mg/kg) ou 0,1 a 0,2 mg/kg EV lento. Sedação leve / Procedimentos rápidos: 1 a 2,5 mg EV lento a cada 2 min.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'indução anestésica, sedação para procedimento ou crise convulsiva',
  modoPadrao: 'agora',
  diasPadrao: 0,
  usoContinuoPadrao: false,
  acessoFonte: 'RENAME 2024 (Hospitalar): Ampolas de 5 mg/mL (3 mL = 15 mg e 10 mL = 50 mg) e 1 mg/mL (5 mL = 5 mg) padronizadas em todas as salas de emergência.',
  apresentacoes: [
    {
      id: 'amp5mg_3ml',
      forma: 'amp',
      nome: 'Ampola 5 mg/mL (15 mg / 3 mL)',
      comercial: 'Dormonid®, Genérico',
      conc: '5 mg/mL',
      rotulo: 'Midazolam 5 mg/mL ampola 3 mL (15 mg)',
      mg: 15,
      volml: 3,
      mgml: 5,
      vias: ['EV', 'IM'],
      disp: '1 ampola (3 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Administrar por via endovenosa direta lentamente em 1 a 2 minutos ou IM profundo. Pode causar hipotensão e depressão respiratória; ter sempre pronto ambu, fonte de O2 e o reversor Flumazenil.',
      obs: 'Início de ação venosa em 1 a 2 minutos com efeito amnésico anterógrado marcante.'
    },
    {
      id: 'amp5mg_10ml',
      forma: 'amp',
      nome: 'Ampola 5 mg/mL (50 mg / 10 mL)',
      comercial: 'Dormonid®, Genérico',
      conc: '5 mg/mL',
      rotulo: 'Midazolam 5 mg/mL ampola 10 mL (50 mg)',
      mg: 50,
      volml: 10,
      mgml: 5,
      vias: ['EV', 'IM'],
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
      min: 2,
      max: 20,
      padrao: 15,
      dosesDia: [1, 4],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: '0,2 a 0,3 mg/kg EV bolus para indução de IOT; 2 a 5 mg para sedação leve.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['IM'],
      tipo: 'mg',
      min: 5,
      max: 10,
      padrao: 10,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: '10 mg IM para estado de mal epiléptico sem acesso venoso.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'dose_max',
      valor: 30,
      fonte: 'HSL',
      trecho: 'Dose máxima por bolus: 0,3 mg/kg.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em miastenia gravis, choque grave não ressuscitado e insuficiência respiratória grave sem suporte invasivo.',
      fonte: 'BULA',
      trecho: 'Insuficiência respiratória severa não intubada.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Sedação pré-procedimento, indução em sequência rápida de intubação, controle de estado de mal epiléptico refratário e sedação contínua em UTI.',
    administracao: 'Injetar lentamente. O reversor específico em caso de intoxicação é o Flumazenil.',
    cuidados: 'Monitorar pressão arterial (risco de vasodilatação e hipotensão, especialmente se hipovolemia associada).',
    ajuste: 'Reduzir dose em 50% em idosos e disfunção hepática grave.'
  }
};

export default midazolam;
