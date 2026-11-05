import { Farmaco } from '../../types';

export const tiamina: Farmaco = {
  id: 'tiamina',
  nome: 'Cloridrato de Tiamina (Vitamina B1)',
  categoria: 'Soluções e Hidratação',
  busca: 'tiamina vitamina b1 wernicke korsakoff encefalopatia alcoolismo etilismo beriberi ampola ev im cp vo',
  classe: 'Vitamina Hidrossolúvel do Complexo B (Coenzima Essencial do Metabolismo Glicídico)',
  dosePratica: 'Prevenção de Encefalopatia de Wernicke na UPA (etilistas/desnutridos): 100 a 300 mg (1 a 3 ampolas de 100 mg/1 mL) EV diluídos em 100 mL de SF 0,9% (ou IM) ANTES ou junto da infusão de glicose. Tratamento de Wernicke estabelecida (confusão mental, oftalmoplegia e ataxia): 200 a 500 mg EV de 8/8h por 3 a 5 dias. Manutenção oral pós-alta: 300 mg VO 1x ao dia por 30 dias.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'etilismo crônico, desnutrição ou hipoglicemia no paciente de risco',
  modoPadrao: 'agora',
  diasPadrao: 0,
  usoContinuoPadrao: false,
  acessoFonte: 'RENAME 2024 (Componente Básico / Hospitalar): Tiamina 300 mg comprimido e 100 mg/mL solução injetável.',
  apresentacoes: [
    {
      id: 'amp100_1ml',
      forma: 'amp',
      nome: 'Ampola 100 mg / 1 mL (100 mg/mL) EV / IM',
      comercial: 'Tiamina injetável, Vitamina B1',
      conc: '100mg / 1 mL',
      rotulo: 'Cloridrato de Tiamina 100 mg / 1 mL ampola',
      mg: 100,
      volml: 1,
      mgml: 100,
      vias: ['EV', 'IM'],
      disp: '3 ampolas (1 mL cada)',
      acesso: { rename: true, fp: false },
      instrucao: 'Diluir 1 a 3 ampolas (100 a 300 mg) em 100 mL de SF 0,9% ou SG 5% e infundir por via endovenosa em 30 minutos (ou administrar por via intramuscular profunda). Administrar sempre antes ou concomitantemente à infusão de soro glicosado.',
      obs: 'Prevenção obrigatória de Encefalopatia de Wernicke-Korsakoff em etilistas e desnutridos.'
    },
    {
      id: 'cp300',
      forma: 'cp',
      nome: 'Comprimido 300 mg (Uso oral)',
      comercial: 'Benerva®, Genérico',
      conc: '300mg',
      rotulo: 'Cloridrato de Tiamina 300 mg comprimido',
      mg: 300,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 30 comprimidos',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar 1 comprimido por via oral uma vez ao dia com água pela manhã após o desjejum.',
      obs: 'Suplementação oral para recuperação nutricional ambulatorial.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV', 'IM'],
      tipo: 'mg',
      min: 100,
      max: 500,
      padrao: 300,
      dosesDia: [1, 3],
      intervaloFixo: 8,
      fonte: 'PSZERADO',
      trecho: 'Ataque em emergência: 100 a 300 mg EV/IM dose única ou 200 a 500 mg de 8/8h em Wernicke ativa.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 100,
      max: 300,
      padrao: 300,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'HSL',
      trecho: 'Adultos VO: 100 a 300 mg VO 1x/dia contínuo.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 1500,
      fonte: 'HSL',
      trecho: 'Dose máxima adulto em encefalopatia de Wernicke grave: até 1.500 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em hipersensibilidade documentada à tiamina.',
      fonte: 'HSL',
      trecho: 'Hipersensibilidade à tiamina.',
      strong: false
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 10,
    volOpcoes: [100, 250],
    tempo: {
      adulto: { min: 15, padrao: 30, max: 60, txt: '15 a 30 minutos em infusão venosa' },
      ped: { min: 30, padrao: 30, max: 60 }
    },
    fonteTxt: 'Diluir em 100 mL de SF 0,9% ou SG 5%. Infundir em 30 minutos.'
  },
  notas: {
    indicacao: 'Profilaxia e tratamento da encefalopatia de Wernicke-Korsakoff, beribéri (cardiopatia e neuropatia por deficiência de B1) e polineuropatia alcoólica.',
    administracao: 'Infundir diluído em SF 0,9%. Sempre administrar antes da glicose em pacientes de risco para não consumir as reservas escassas de B1.',
    cuidados: 'Medicação segura e praticamente isenta de toxicidade por ser hidrossolúvel de excreção renal rápida.',
    ajuste: 'Não necessita de ajuste posológico para insuficiência renal ou hepática.'
  }
};

export default tiamina;
