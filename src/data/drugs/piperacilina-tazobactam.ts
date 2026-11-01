import { Farmaco } from '../../types';

export const piperacilinaTazobactam: Farmaco = {
  id: 'piperacilina_tazobactam',
  nome: 'Piperacilina Sódica + Tazobactam Sódico',
  categoria: 'Antimicrobianos',
  busca: 'piperacilina tazobactam tazocin tazopen antipseudomonas hospitalar sepse pav cti uti ev',
  classe: 'Ureidopenicilina associada a Inibidor de Betalactamase',
  dosePratica: 'Adultos: 4,5 g (4 g + 0,5 g) EV a cada 6 horas (ou de 8/8h conforme gravidade e função renal). Infundir em 30 min ou infusão estendida de 3 a 4 horas.',
  fontes: { HSL: '2024', EINA: '2024', PSZERADO: '2025' },
  snPadrao: 'infecção bacteriana nosocomial grave',
  acessoFonte: 'RENAME 2024 (Componente Hospitalar): Piperacilina + tazobactam 4 g + 0,5 g pó para solução injetável.',
  apresentacoes: [
    {
      id: 'fap_45g',
      forma: 'fap',
      nome: 'Frasco-ampola 4,5 g (4 g + 500 mg) pó liofilizado EV',
      comercial: 'Tazocin®, Tazopen®',
      conc: '4,5 g',
      rotulo: 'Piperacilina sódica 4 g + Tazobactam sódico 0,5 g frasco-ampola',
      mg: 4500,
      volml: 20,
      reconstDil: 'Água Destilada ou SF 0,9%',
      reconstMl: 20,
      vias: ['EV'],
      disp: '1 frasco-ampola (4,5 g)',
      acesso: { rename: true, fp: false },
      instrucao: 'Reconstituir com 20 mL de AD ou SF 0,9% e diluir em 100 mL de SF 0,9% ou SG 5%. Infundir EV em 30 a 60 minutos (ou infusão prolongada de 3 a 4 horas).',
      obs: 'Antipseudomonas de amplo espectro para infecções intra-abdominais complicadas, sepse e PAV/pneumonia nosocomial.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV'],
      tipo: 'mg',
      min: 2250,
      max: 4500,
      padrao: 4500,
      dosesDia: [3, 4],
      intervaloFixo: 6,
      fonte: 'HSL',
      trecho: 'Adultos EV: 4,5 g (4g de piperacilina + 0,5g de tazobactam) EV a cada 6 horas (ou de 8/8h conforme função renal).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 18000,
      fonte: 'HSL',
      trecho: 'Dose máxima adulto: até 18 g/dia (16 g piperacilina + 2 g tazobactam).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade prévia grave a penicilinas, cefalosporinas ou inibidores de betalactamase.',
      fonte: 'HSL',
      trecho: 'Hipersensibilidade a betalactâmicos.',
      strong: true
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 45,
    volOpcoes: [100, 250],
    tempo: {
      adulto: { min: 30, padrao: 60, max: 240, txt: '30 a 60 min (ou infusão estendida de 3 a 4 horas)' },
      ped: { min: 30, padrao: 30, max: 60 }
    },
    fonteTxt: 'Reconstituir com 20 mL de AD ou SF 0,9%. Diluir em 100 mL de SF 0,9% ou SG 5%. Infundir em 30 a 60 minutos ou infusão estendida em 3 a 4 horas.'
  },
  notas: {
    indicacao: 'Pneumonia associada a ventilação mecânica (PAV), pneumonia nosocomial, sepse abdominal grave e infecções por Pseudomonas aeruginosa.',
    administracao: 'Reconstituir com 20 mL de diluente compatível e rediluir em 100 mL de SF 0,9%. Infusão estendida de 3 a 4h otimiza farmacodinâmica T > CIM.',
    cuidados: 'Monitorar função renal (creatinina sérica e diurese). Cuidado especial com nefrotoxicidade se associado à vancomicina.',
    ajuste: 'ClCr 20-40 mL/min: 3,375 g de 6/6h ou 4,5 g de 8/8h. ClCr < 20 mL/min: 2,25 g de 8/8h. Hemodiálise: 2,25 g de 12/12h + 0,75 g pós-sessão.'
  }
};

export default piperacilinaTazobactam;
