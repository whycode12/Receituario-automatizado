import { Farmaco } from '../../types';

export const sulfatoDeMagnesio: Farmaco = {
  id: 'sulfato-de-magnesio',
  nome: 'Sulfato de Magnésio',
  categoria: 'Eletrólitos e Emergências',
  busca: 'sulfato de magnesio mgso4 hipomagnesemia eclampsia broncoespasmo asma torsades de pointes arritmia injetavel 10% 50%',
  classe: 'Eletrólito Essencial e Bloqueador Neuromuscular Central',
  dosePratica: 'Hipomagnesemia grave (< 1,0 mg/dL): 4 a 8 g (40 a 80 mL a 10%) diluídos em 500 mL de SF 0,9% EV em 12 a 24 horas. Hipomagnesemia moderada (1,0 a 1,5 mg/dL): 2 a 4 g EV em 4 a 12 horas. Asma grave / Broncoespasmo refratário: 2 g EV em 100 mL de SF 0,9% em 20 minutos. Eclâmpsia (esquema de Pritchard): 4 g EV lento + 10 g IM (5 g em cada glúteo).',
  fontes: { PSZERADO: '2025', HSL: '2024', EINA: '2024', BULA: '2024' },
  snPadrao: 'hipomagnesemia, broncoespasmo grave ou prevenção de convulsão na pré-eclâmpsia',
  modoPadrao: 'agora',
  diasPadrao: 0,
  usoContinuoPadrao: false,
  acessoFonte: 'RENAME 2024 (Componente Hospitalar): Ampolas de 10% (10 mL = 1 g) e 50% (10 mL = 5 g) padronizadas em salas de emergência e UTIs.',
  apresentacoes: [
    {
      id: 'amp10_10ml',
      forma: 'amp',
      nome: 'Ampola 10% (1 g / 10 mL - 100 mg/mL)',
      comercial: 'Sulfato de Magnésio 10% injetável',
      conc: '10% (100 mg/mL)',
      rotulo: 'Sulfato de Magnésio 10% ampola 10 mL (1 g)',
      mg: 1000,
      volml: 10,
      vias: ['EV'],
      disp: '1 ampola (10 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Uso hospitalar sob monitorização contínua. Diluir em SF 0,9% ou SG 5% antes da infusão.',
      obs: '1 ampola de 10 mL a 10% contém 1000 mg (1 g) de sulfato de magnésio heptaidratado (8,1 mEq de Mg2+).'
    },
    {
      id: 'amp50_10ml',
      forma: 'amp',
      nome: 'Ampola 50% (5 g / 10 mL - 500 mg/mL)',
      comercial: 'Sulfato de Magnésio 50% injetável',
      conc: '50% (500 mg/mL)',
      rotulo: 'Sulfato de Magnésio 50% ampola 10 mL (5 g)',
      mg: 5000,
      volml: 10,
      vias: ['EV', 'IM'],
      disp: '1 ampola (10 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'ATENÇÃO: Solução altamente concentrada. NUNCA administrar EV em bólus direto não diluído.',
      obs: '1 ampola de 10 mL a 50% contém 5000 mg (5 g) de sulfato de magnésio (40,5 mEq de Mg2+).'
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 20,
    volOpcoes: [100, 250, 500],
    tempo: {
      adulto: { min: 20, padrao: 60, max: 1440, txt: '20 min a 24 horas dependendo da indicação clínica' }
    },
    fonteTxt: 'Manual de Diluição Einstein / Guia HSL: Monitorar reflexo patelar, frequência respiratória e débito urinário.'
  },
  regras: [
    {
      pub: 'adulto',
      vias: ['EV'],
      tipo: 'mg',
      min: 1000,
      max: 8000,
      padrao: 2000,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: 'Hipomagnesemia: 1 a 4 g EV lento; casos graves até 8 g em 24h. Broncoespasmo agudo: 2 g EV em 20 min.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 8000,
      fonte: 'HSL',
      trecho: 'Dose máxima adulto: 8 a 10 g/dia na reposição eletrolítica.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em miastenia gravis, bloqueio cardíaco atrioventricular de alto grau e anúria/insuficiência renal terminal sem diálise.',
      fonte: 'HSL',
      trecho: 'Bloqueio cardíaco, miastenia gravis e insuficiência renal terminal.'
    }
  ],
  notas: {
    indicacao: 'Hipomagnesemia moderada a severa, arritmias ventriculares (Torsades de Pointes), broncoespasmo grave e pré-eclâmpsia/eclâmpsia.',
    administracao: 'Infundir diluído em SF 0,9% ou SG 5% com controle de infusão.',
    cuidados: 'Monitorar reflexos tendinosos profundos, frequência respiratória e débito urinário. Antídoto imediato: Gluconato de Cálcio 10% EV.',
    ajuste: 'Reduzir dose em 50% se ClCr < 30 mL/min.'
  }
};

export default sulfatoDeMagnesio;
