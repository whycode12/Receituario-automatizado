import { Farmaco } from '../../types';

export const passiflora: Farmaco = {
  id: 'passiflora',
  nome: 'Passiflora incarnata (Maracujá)',
  categoria: 'Psiquiatria e Neurologia',
  busca: 'passiflora incarnata maracuja fitoterapico calmante ansiolitico natural insonia ansiedade seakalm passaneuro calman 260mg 360mg 500mg',
  classe: 'Fitoterápico Ansiolítico e Sedativo Leve (Extrato Seco de Passiflora)',
  dosePratica: 'Ansiedade leve e insônia: Tomar 1 comprimido de 360 mg a 500 mg VO 1 vez ao dia à noite por 10 a 30 dias; ou 1 comprimido de 260 mg a 360 mg de 12/12h por 10 dias. Não causa dependência química.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'ansiedade leve ou dificuldade para conciliar o sono',
  acessoFonte: 'Fitoterápico de venda livre (MIP) e integrante da RENAME / Programa Nacional de Plantas Medicinais e Fitoterápicos do SUS (Seakalm, Passiflorine, Genéricos).',
  apresentacoes: [
    {
      id: 'cp360',
      forma: 'cp',
      nome: 'Comprimido revestido 360 mg',
      comercial: 'Seakalm®, Passiflora genérico',
      conc: '360 mg',
      rotulo: 'Passiflora incarnata 360 mg comprimido',
      mg: 360,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 20 ou 30 comprimidos',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar 1 comprimido por via oral à noite antes de deitar ou a cada 12 horas conforme orientação médica.',
      obs: 'Dose recomendada no Guia UPA 2026 para alívio de sintomas ansiosos e queixas de insônia sem necessidade de tarja preta.'
    },
    {
      id: 'cp500',
      forma: 'cp',
      nome: 'Comprimido revestido 500 mg',
      comercial: 'Passiflorine®, Seakalm 500mg',
      conc: '500 mg',
      rotulo: 'Passiflora incarnata 500 mg comprimido',
      mg: 500,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 20 comprimidos',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar 1 comprimido à noite antes de deitar por 10 a 20 dias.',
      obs: 'Extrato seco concentrado.'
    },
    {
      id: 'cp260',
      forma: 'cp',
      nome: 'Comprimido revestido 260 mg',
      comercial: 'Calman®, Genérico',
      conc: '260 mg',
      rotulo: 'Passiflora incarnata 260 mg comprimido',
      mg: 260,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 20 comprimidos',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar 1 comprimido de 12 em 12 horas por 10 dias.',
      obs: 'Posologia fracionada durante o dia.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      vias: ['VO'],
      tipo: 'mg',
      min: 260,
      max: 1000,
      padrao: 360,
      dosesDia: [1, 2],
      intervaloFixo: 24,
      fonte: 'BULA',
      trecho: 'Ingerir 1 comprimido à noite ao deitar ou de 12/12h conforme intensidade dos sintomas.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 1000,
      fonte: 'BULA',
      trecho: 'Dose máxima adulto: 1000 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pessoas com hipersensibilidade à passiflora e durante o primeiro trimestre de gravidez.',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade conhecida.'
    }
  ],
  notas: {
    indicacao: 'Tratamento de estados leves de ansiedade, irritabilidade, agitação nervosa e insônia.',
    administracao: 'Tomar por via oral com água.',
    cuidados: 'Pode causar leve sonolência. Cuidado ao dirigir ou operar máquinas.',
    ajuste: 'Não necessita de ajuste de dose.'
  }
};

export default passiflora;
