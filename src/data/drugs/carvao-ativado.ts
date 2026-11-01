import { Farmaco } from '../../types';

export const carvaoAtivado: Farmaco = {
  id: 'carvao-ativado',
  nome: 'Carvão Ativado',
  categoria: 'Emergência e Antídotos',
  busca: 'carvao ativado intoxicacao exogena envenenamento superdosagem lavagem gastrica sng antidoto 25g 50g',
  classe: 'Adsorvente Gastrointestinal / Descontaminação Digestiva de Urgência',
  dosePratica: 'Intoxicação aguda (< 1 a 2h da ingestão): 50 g VO ou por sonda nasogástrica (SNG) diluído em 200 a 300 mL de água ou SF 0,9% em dose única imediata. Se intoxicação por drogas com recirculação entero-hepática (carbamazepina, fenobarbital, dapsona, teofilina): manter doses múltiplas de 25 g a cada 4 a 6 horas.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'intoxicação exógena aguda por substância adsorvível',
  acessoFonte: 'RENAME 2024 / Componente Hospitalar: Frascos ou sachês de pó para suspensão oral padronizados na urgência.',
  apresentacoes: [
    {
      id: 'po50g',
      forma: 'sache',
      nome: 'Frasco / Sachê com pó 50 g para suspensão oral/SNG',
      comercial: 'Carvão Ativado Pó®, Carbovita®',
      conc: '50g',
      rotulo: 'Carvão Ativado pó 50 g',
      mg: 50000,
      frac: 1,
      vias: ['VO'],
      disp: '1 frasco com 50 g',
      acesso: { rename: true, fp: false },
      instrucao: 'Diluir 50 g de pó em 200 a 250 mL de água ou SF 0,9%, agitar vigorosamente até completa homogeneização e administrar imediatamente por via oral ou por sonda nasogástrica (SNG).',
      obs: 'Não adsorve ácidos fortes, bases cáusticas, álcoois (etanol/metanol), lítio e metais pesados (ferro).'
    },
    {
      id: 'po25g',
      forma: 'sache',
      nome: 'Frasco / Sachê com pó 25 g para suspensão oral/SNG',
      comercial: 'Carvão Ativado Pó®, Genérico',
      conc: '25g',
      rotulo: 'Carvão Ativado pó 25 g',
      mg: 25000,
      frac: 1,
      vias: ['VO'],
      disp: '1 frasco com 25 g',
      acesso: { rename: true, fp: false },
      instrucao: 'Diluir 25 g em 100 a 150 mL de água ou SF 0,9% e administrar por VO ou SNG a cada 6 horas.',
      obs: 'Ideal para esquemas de doses seriadas / repetidas.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 25000,
      max: 100000,
      padrao: 50000,
      dosesDia: [1, 4],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: 'Dose inicial de 50 g (1 g/kg até 50-100 g) em dose única na primeira hora pós-ingestão; 25 g de 6/6h em doses repetidas.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 200000,
      fonte: 'HSL',
      trecho: 'Dose diária acumulada máxima: 200 g.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em vias aéreas desprotegidas em paciente com rebaixamento do sensório (risco altíssimo de broncoaspiração fatal - proteger com IOT antes), íleo paralítico, perfuração intestinal ou ingestão de substâncias cáusticas (ácidos/álcalis) e hidrocarbonetos.',
      fonte: 'PSZERADO',
      trecho: 'Via aérea não protegida ou ingestão cáustica.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Descontaminação do trato gastrintestinal nas primeiras horas de ingestão de drogas potencialmente tóxicas adsorvíveis.',
    administracao: 'Administrar após diluição homogênea em água ou soro. Se paciente sonolento, somente administrar após intubação traqueal e balonete insuflado.',
    cuidados: 'Causa fezes enegrecidas e constipação; atentar para risco de êmese e aspiração.',
    ajuste: 'Não absorvido sistemicamente, sem ajuste para função renal ou hepática.'
  }
};

export default carvaoAtivado;
