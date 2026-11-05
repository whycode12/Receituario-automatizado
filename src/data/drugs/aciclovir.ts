import { Farmaco } from '../../types';

export const aciclovir: Farmaco = {
  id: 'aciclovir',
  nome: 'Aciclovir',
  categoria: 'Antimicrobianos',
  busca: 'aciclovir zovirax antiviral herpes zoster herpes simples varicela cobreiro 200mg 400mg vo',
  classe: 'Antiviral Análogo de Nucleosídeo Sintético (Inibidor da DNA Polimerase Viral)',
  dosePratica: 'Herpes Zóster no Adulto: 800 mg VO (2 comprimidos de 400 mg) 5 vezes ao dia a cada 4 horas (ex: 6h, 10h, 14h, 18h, 22h, omitindo a dose da madrugada) por 7 dias seguidos. Iniciar preferencialmente nas primeiras 72 horas das lesões. Herpes Simples inicial: 200 mg 5x/dia ou 400 mg 3x/dia por 5 dias.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  modoPadrao: 'continuo',
  diasPadrao: 7,
  usoContinuoPadrao: false,
  snPadrao: 'infecção viral herpética',
  acessoFonte: 'RENAME 2024 (Componente Básico): Aciclovir 200 mg comprimido.',
  apresentacoes: [
    {
      id: 'cp200',
      forma: 'cp',
      nome: 'Comprimido 200 mg',
      comercial: 'Zovirax®, Genérico',
      conc: '200mg',
      rotulo: 'Aciclovir 200 mg comprimido',
      mg: 200,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 30 ou 42 comprimidos',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar por via oral com bastante água nos horários prescritos.',
      obs: 'Consta na RENAME e PuxaFicha. Herpes simples: 2 comprimidos (400mg) de 8/8h por 7 dias ou 200mg 5x/dia por 5 dias.'
    },
    {
      id: 'cp400',
      forma: 'cp',
      nome: 'Comprimido 400 mg',
      comercial: 'Zovirax®, Genérico',
      conc: '400mg',
      rotulo: 'Aciclovir 400 mg comprimido',
      mg: 400,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 70 comprimidos',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar 2 comprimidos (800 mg) por via oral com um copo cheio de água de 4 em 4 horas durante o dia (5 vezes ao dia: às 06h, 10h, 14h, 18h e 22h, sem precisar acordar de madrugada) por 7 dias seguidos.',
      obs: 'Apresentação mais cômoda para tratamento de Herpes Zóster.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 200,
      max: 800,
      padrao: 400,
      dosesDia: [3, 5],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 7,
      fonte: 'PSZERADO',
      trecho: 'PuxaFicha: Aciclovir 200mg: Tomar 2 comprimidos (400mg) de 8/8h por 7 dias. Herpes Zóster: 800 mg VO 5x/dia por 7 dias.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 4000,
      fonte: 'HSL',
      trecho: 'Dose máxima adulto no Herpes Zóster: até 4.000 mg/dia (800 mg 5x/dia).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em hipersensibilidade documentada ao aciclovir ou ao valaciclovir.',
      fonte: 'HSL',
      trecho: 'Hipersensibilidade ao aciclovir.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Tratamento de infecções por Herpes Zóster (cobreiro), Herpes Simples tipos 1 e 2 (labial e genital) e profilaxia em imunodeprimidos.',
    administracao: 'Tomar com água em abundância. Manter boa hidratação hídrica ao longo de todo o tratamento.',
    cuidados: 'Orientar hidratação para prevenir precipitação de cristais de aciclovir nos túbulos renais e nefrotoxicidade.',
    ajuste: 'Se ClCr < 25 mL/min, espaçar o intervalo para 800 mg de 8/8h; se ClCr < 10 mL/min, 800 mg de 12/12h.'
  }
};

export default aciclovir;
