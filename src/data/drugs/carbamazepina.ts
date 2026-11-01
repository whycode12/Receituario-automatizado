import { Farmaco } from '../../types';

export const carbamazepina: Farmaco = {
  id: 'carbamazepina',
  nome: 'Carbamazepina',
  categoria: 'Psiquiatria e Neurologia',
  busca: 'carbamazepina tegretol antiepileptico anticonvulsivante abstinencia alcoolica neuralgia trigemeo bipolar 200mg',
  classe: 'Antiepiléptico e Estabilizador do Humor (Bloqueador de Canais de Sódio Voltagem-Dependentes)',
  dosePratica: 'Abstinência alcoólica (ambulatorial UPA): 200 mg VO de 12/12h por 5 a 10 dias. Epilepsia: iniciar com 100 a 200 mg 1 a 2x/dia e titular gradualmente até 800 a 1200 mg/dia divididos em 2 a 3 tomadas. Neuralgia do trigêmeo: 100 a 200 mg 2x/dia até alívio da dor.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'abstinência alcoólica ou controle de crises convulsivas',
  acessoFonte: 'RENAME 2024 (Componente Básico do SUS): Comprimidos de 200 mg e 400 mg e suspensão 20 mg/mL disponíveis gratuitamente na rede pública.',
  apresentacoes: [
    {
      id: 'cp200',
      forma: 'cp',
      nome: 'Comprimido 200 mg',
      comercial: 'Tegretol®, Genérico',
      conc: '200 mg',
      rotulo: 'Carbamazepina 200 mg comprimido',
      mg: 200,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 20 ou 30 comprimidos',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar por via oral durante ou após as refeições com um copo de água. Não ingerir com suco de toranja (grapefruit).',
      obs: 'Esquema ambulatorial do Guia UPA 2026 para prevenção de convulsões na abstinência alcoólica.'
    },
    {
      id: 'cp400',
      forma: 'cp',
      nome: 'Comprimido 400 mg',
      comercial: 'Tegretol®, Genérico',
      conc: '400 mg',
      rotulo: 'Carbamazepina 400 mg comprimido',
      mg: 400,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 20 comprimidos',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar 1 comprimido de 12 em 12 horas conforme prescrição neurológica.',
      obs: 'Dose para manutenção em epilepsia.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      vias: ['VO'],
      tipo: 'mg',
      min: 100,
      max: 1200,
      padrao: 200,
      dosesDia: [2, 3],
      intervaloFixo: 12,
      fonte: 'HSL',
      trecho: 'Iniciar com 200 a 400 mg/dia divididos em 2 tomadas; aumentar gradualmente até dose de manutenção.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 1600,
      fonte: 'HSL',
      trecho: 'Dose máxima diária adulto: 1600 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com bloqueio atrioventricular, histórico de depressão de medula óssea ou porfirias hepáticas.',
      fonte: 'HSL',
      trecho: 'Bloqueio AV e supressão de medula óssea.'
    }
  ],
  notas: {
    indicacao: 'Profilaxia de convulsões na abstinência alcoólica, crises epilépticas focais e generalizadas, neuralgia do trigêmeo e transtorno bipolar.',
    administracao: 'Tomar durante ou após as refeições para minimizar irritação gástrica.',
    cuidados: 'Indutor potente de enzimas hepáticas (reduz efeito de anticoncepcionais e anticoagulantes). Risco de hiponatremia e leucopenia. Receita de Controle Especial (C1).',
    ajuste: 'Usar com cautela na disfunção renal e hepática avançada.'
  }
};

export default carbamazepina;
