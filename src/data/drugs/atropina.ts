import { Farmaco } from '../../types';

export const atropina: Farmaco = {
  id: 'atropina',
  nome: 'Sulfato de Atropina',
  categoria: 'Cardiovascular e Antiagregantes',
  busca: 'atropina sulfato anticolinergico bradicardia sinusal bav bloqueio acls choque intoxicacao organofosforados ampola ev',
  classe: 'Antagonista Muscarínico Parassimpaticolítico',
  dosePratica: 'Bradiarritmia Sintomática (FC < 50 bpm + sinais de instabilidade): 1 mg (ou 0,5 a 1 mg) EV em bólus rápido a cada 3 a 5 minutos, até dose máxima de 3 mg. Doses menores que 0,5 mg são contraindicadas por causarem bradicardia paradoxal central.',
  fontes: { PSZERADO: '2025', HSL: '2024', ACLS: '2025' },
  snPadrao: 'bradicardia sintomática ou instabilidade hemodinâmica',
  modoPadrao: 'agora',
  diasPadrao: 0,
  usoContinuoPadrao: false,
  acessoFonte: 'RENAME 2024 (Componente Básico / Hospitalar): Atropina 0,25 mg/mL e 0,5 mg/mL solução injetável.',
  apresentacoes: [
    {
      id: 'amp05_1ml',
      forma: 'amp',
      nome: 'Ampola 0,5 mg / 1 mL (0,5 mg/mL) EV / SC / IM',
      comercial: 'Sulfato de Atropina',
      conc: '0,5mg / 1 mL',
      rotulo: 'Sulfato de Atropina 0,5 mg / 1 mL ampola',
      mg: 0.5,
      volml: 1,
      mgml: 0.5,
      vias: ['EV', 'IM', 'SC'],
      disp: '1 ampola (1 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Administrar em bólus endovenoso rápido. Repetir a cada 3 a 5 minutos se FC persistir < 50 bpm e instável.',
      obs: 'Primeira escolha para bradicardia sinusal instável no algoritmo do ACLS.'
    },
    {
      id: 'amp025_1ml',
      forma: 'amp',
      nome: 'Ampola 0,25 mg / 1 mL (0,25 mg/mL) EV / SC / IM',
      comercial: 'Sulfato de Atropina',
      conc: '0,25mg / 1 mL',
      rotulo: 'Sulfato de Atropina 0,25 mg / 1 mL ampola',
      mg: 0.25,
      volml: 1,
      mgml: 0.25,
      vias: ['EV', 'IM', 'SC'],
      disp: '1 ampola (1 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Administrar por via endovenosa rápida.',
      obs: 'Apresentação pediátrica.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV'],
      tipo: 'mg',
      min: 0.5,
      max: 1,
      padrao: 1,
      dosesDia: [1, 3],
      intervaloFixo: 24,
      fonte: 'ACLS',
      trecho: 'Bradicardia instável: 1 mg EV em bólus a cada 3 a 5 min até no máximo 3 mg no total.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 3,
      fonte: 'ACLS',
      trecho: 'Dose máxima acumulada adulto: 3 mg (bloqueio vagal total).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em glaucoma de ângulo fechado não controlado e miastenia gravis.',
      fonte: 'HSL',
      trecho: 'Glaucoma de ângulo fechado.',
      strong: true
    }
  ],
  ev: {
    diluentes: ['SF 0,9%'],
    concMax: 0.5,
    volOpcoes: [1, 10],
    tempo: {
      adulto: { txt: 'Bólus rápido' },
      ped: { txt: 'Bólus rápido' }
    },
    fonteTxt: 'Administrar direto ou com 10 mL de SF 0,9% em bólus rápido. Doses < 0,5 mg podem causar bradicardia paradoxal.'
  },
  notas: {
    indicacao: 'Tratamento de bradicardias sinusais sintomáticas e intoxicação por inseticidas organofosforados / carbamatos.',
    administracao: 'Injetar rapidamente. Em BAV de 2º grau Mobitz II e BAV total infranodal, preparar imediatamente marcapasso transcutâneo.',
    cuidados: 'Secura de mucosas, retenção urinária e midríase são efeitos anticolinérgicos previsíveis.',
    ajuste: 'Não necessita de ajuste para disfunção renal.'
  }
};

export default atropina;
