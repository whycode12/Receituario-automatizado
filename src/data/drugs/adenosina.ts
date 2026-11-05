import { Farmaco } from '../../types';

export const adenosina: Farmaco = {
  id: 'adenosina',
  nome: 'Adenosina',
  categoria: 'Cardiovascular e Antiagregantes',
  busca: 'adenosina adenocard antiarritmico tsv taquicardia supraventricular paroxistica reentrada nodal bolus rapido flush ev',
  classe: 'Agonista dos Receptores de Adenosina A1 (Bloqueador Temporário do Nó AV)',
  dosePratica: 'Taquicardia Supraventricular Paroxística (TSV): 1ª dose: 6 mg (2 mL) em bólus EV ultrarrápido (1 a 2 segundos) em torneirinha de 3 vias com membro elevado, seguido imediatamente de flush de 20 mL de SF 0,9%. Se não reverter em 1 a 2 minutos, administrar 2ª dose de 12 mg (4 mL) rápida + flush.',
  fontes: { PSZERADO: '2025', HSL: '2024', EINA: '2024', ACLS: '2025' },
  snPadrao: 'crise de taquicardia supraventricular estável',
  modoPadrao: 'agora',
  diasPadrao: 0,
  usoContinuoPadrao: false,
  acessoFonte: 'RENAME 2024 (Componente Hospitalar): Adenosina 3 mg/mL (6 mg/2 mL) solução injetável.',
  apresentacoes: [
    {
      id: 'amp6_2ml',
      forma: 'amp',
      nome: 'Ampola 6 mg / 2 mL (3 mg/mL) EV',
      comercial: 'Adenocard®',
      conc: '6mg / 2 mL',
      rotulo: 'Adenosina 6 mg / 2 mL ampola para injeção rápida EV',
      mg: 6,
      volml: 2,
      mgml: 3,
      vias: ['EV'],
      disp: '1 ampola (2 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Administrar em bólus ultrarrápido (1 a 2 segundos) em torneirinha de 3 vias no braço, seguido imediatamente por flush de 20 mL de SF 0,9% e elevação do membro.',
      obs: 'Meia-vida ultracurta (< 10 segundos). Avisar o paciente da sensação passageira de calor e aperto no peito.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV'],
      tipo: 'mg',
      min: 6,
      max: 12,
      padrao: 6,
      dosesDia: [1, 2],
      intervaloFixo: 24,
      fonte: 'ACLS',
      trecho: '1ª dose: 6 mg EV bólus rápido + flush 20 mL SF 0,9%. Se refratário em 1-2 min: 2ª dose de 12 mg EV.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 18,
      fonte: 'HSL',
      trecho: 'Dose máxima acumulada: até 12 mg em bólus único e 18 mg no episódio.'
    }
  ],
  contra: [
    {
      msg: 'CONTRAINDICADO em asma brônquica ativa ou DPOC com broncoespasmo grave (risco de broncoespasmo potencialmente fatal) e BAV de 2º ou 3º grau.',
      fonte: 'HSL',
      trecho: 'Asma brônquica ativa ou BAV avançado.',
      strong: true
    }
  ],
  ev: {
    diluentes: ['SF 0,9%'],
    concMax: 3,
    volOpcoes: [2],
    tempo: {
      adulto: { txt: '1 a 2 segundos (bólus rápido)' },
      ped: { txt: '1 a 2 segundos' }
    },
    fonteTxt: 'Administrar em bólus ultrarrápido sem diluir, seguido imediatamente de flush de 20 mL de SF 0,9%.'
  },
  notas: {
    indicacao: 'Reversão para ritmo sinusal de taquicardias supraventriculares paroxísticas (TSV por reentrada nodal ou via acessória).',
    administracao: 'Injetar em 1 a 2 segundos em acesso venoso antecubital mais proximal possível, mantendo torneirinha de 3 vias para o flush imediato.',
    cuidados: 'Monitorar traçado contínuo no ECG. Pausa sinusal transitória ou assistolia curta de alguns segundos é esperada e autolimitada.',
    ajuste: 'Não necessita de ajuste para disfunção renal ou hepática (metabolismo plasmático e eritrocitário).'
  }
};

export default adenosina;
