import { Farmaco, Paciente } from '../../types';

function getInstrucaoSRO(p: Paciente) {
  const m = p.idadeM;
  let doseOrientacao = 'oferecer 100 a 200 mL após cada evacuação líquida ou vômito';
  if (p.pub === 'ped' && m != null) {
    if (m <= 12) {
      doseOrientacao = 'oferecer 50 a 100 mL aos poucos (em colheradas ou copo) após cada evacuação líquida ou vômito';
    } else if (m <= 120) {
      doseOrientacao = 'oferecer 100 a 200 mL aos poucos após cada evacuação líquida ou vômito';
    } else {
      doseOrientacao = 'oferecer de 200 a 400 mL (ou o volume que aceitar) após cada evacuação líquida ou vômito';
    }
  } else if (p.pub === 'adulto') {
    doseOrientacao = 'ingerir de 200 a 400 mL (ou a quantidade que aceitar) após cada evacuação líquida ou vômito';
  }

  return `Modo de uso: Ingerir aos poucos após cada evacuação líquida ou vômito (${doseOrientacao}). Se houver vômitos, aguardar 10 minutos e reiniciar em pequenos goles. Manter alimentação habitual e aleitamento materno.`;
}

export const sro: Farmaco = {
  id: 'sro',
  nome: 'Soro de Reidratação Oral (SRO)',
  categoria: 'Soluções e Hidratação',
  busca: 'sro sais reidratacao oral soro caseiro diarreia desidratacao vomito plano a b',
  classe: 'Solução de Reidratação Hidroeletrolítica Oral',
  fontes: { MS: '2023' },
  snPadrao: 'evacuações diarreicas ou vômitos',
  acessoFonte: 'RENAME 2024 (Componente Básico): sais para reidratação oral em envelopes. Farmácia Popular: não consta.',
  apresentacoes: [
    {
      id: 'sro_envelope_1l',
      forma: 'sol_sro',
      nome: 'Sais para Reidratação Oral (sachê para 1 Litro)',
      conc: 'pó para 1000 mL',
      rotulo: 'Sais para Reidratação Oral (envelope para 1 L)',
      vias: ['VO'],
      unidades: ['ml'],
      disp: '04 envelopes',
      acesso: { rename: true, fp: false },
      instrucao: (p: Paciente) => `Preparo: Diluir 1 envelope em exatamente 1 litro de água filtrada ou fervida. Misturar bem. Não ferver após o preparo. Validade de 24 horas (descartar a sobra após 24h).\n   ${getInstrucaoSRO(p)}`,
      obs: 'Se houver vômitos, aguardar 10 minutos e reiniciar em pequenos goles.'
    },
    {
      id: 'sro_envelope_500',
      forma: 'sol_sro',
      nome: 'Sais para Reidratação Oral (sachê para 500 mL)',
      conc: 'pó para 500 mL',
      rotulo: 'Sais para Reidratação Oral (envelope para 500 mL)',
      vias: ['VO'],
      unidades: ['ml'],
      disp: '04 envelopes',
      acesso: { rename: true, fp: false },
      instrucao: (p: Paciente) => `Preparo: Diluir 1 envelope em exatamente 500 mL de água filtrada ou fervida. Misturar bem. Não ferver após o preparo. Validade de 24 horas.\n   ${getInstrucaoSRO(p)}`,
      obs: 'Manter a alimentação habitual da criança.'
    },
    {
      id: 'sro_sol_pronta_500',
      forma: 'sol_sro',
      nome: 'Solução de Reidratação Oral pronta para uso – 500 mL',
      conc: 'solução pronta',
      rotulo: 'Solução de Reidratação Oral 500 mL',
      frascoMl: 500,
      vias: ['VO'],
      unidades: ['ml'],
      disp: '02 frascos',
      acesso: { rename: false, fp: false },
      instrucao: (p: Paciente) => `Preparo: Solução pronta para uso (não diluir em água). Agitar antes de usar. Após aberto, conservar em geladeira por até 24 a 48 horas.\n   ${getInstrucaoSRO(p)}`,
      obs: 'Apresentação comercial pronta.'
    }
  ],
  regras: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 12 },
      vias: ['VO'],
      tipo: 'ml',
      min: 50,
      max: 100,
      padrao: 100,
      dosesDia: [1, 6],
      dosesPadrao: 4,
      fonte: 'MS',
      trecho: 'Menores de 1 ano: 50 a 100 mL após cada evacuação líquida ou vômito.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 12, idadeMaxAnos: 10 },
      vias: ['VO'],
      tipo: 'ml',
      min: 100,
      max: 200,
      padrao: 150,
      dosesDia: [1, 6],
      dosesPadrao: 4,
      fonte: 'MS',
      trecho: 'Crianças de 1 a 10 anos: 100 a 200 mL após cada evacuação líquida ou vômito.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 10 },
      vias: ['VO'],
      tipo: 'ml',
      min: 200,
      max: 400,
      padrao: 250,
      dosesDia: [1, 6],
      dosesPadrao: 4,
      fonte: 'MS',
      trecho: 'Maiores de 10 anos: 200 a 400 mL (volume aceito) após cada perda.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'ml',
      min: 200,
      max: 400,
      padrao: 250,
      dosesDia: [1, 6],
      dosesPadrao: 4,
      fonte: 'MS',
      trecho: 'Adultos: 200 a 400 mL após cada perda líquida ou vômito.'
    }
  ],
  notas: {
    indicacao: 'Prevenção e tratamento da desidratação em diarreia aguda e vômitos.',
    administracao: 'Oferecer aos poucos em colher ou copo. Não adoçar.',
    cuidados: 'Sinais de alerta: sangue nas fezes, vômitos incoercíveis, fraqueza severa, olhos fundos.',
    ajuste: 'Não necessita de ajuste.'
  }
};

export default sro;
