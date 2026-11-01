import { Farmaco } from '../../types';

export const metoprolol: Farmaco = {
  id: 'metoprolol',
  nome: 'Metoprolol (Succinato / Tartarato)',
  categoria: 'Cardiovascular e Antiagregantes',
  busca: 'metoprolol seloken selozok succinato tartarato betabloqueador betabloq taquicardia fa flutter iam sca angina ampola ev cp vo',
  classe: 'Betabloqueador Cardiosseletivo (Beta-1 Específico)',
  dosePratica: 'Controle Agudo de Frequência Cardíaca (FA / Flutter / TSV): 2,5 a 5 mg EV administrados lentamente em 2 a 5 minutos; pode repetir a cada 5 a 10 minutos conforme tolerância até no máximo 15 mg. Manutenção Oral (Pós-IAM / HAS / Angina estável): 25 a 100 mg VO 1x/dia pela manhã (succinato liberação prolongada).',
  fontes: { PSZERADO: '2025', HSL: '2024', EINA: '2024', BULA: '2024' },
  snPadrao: 'taquicardia supraventricular ou controle pressórico',
  acessoFonte: 'RENAME 2024 (Componente Hospitalar / Básico): Metoprolol succinato 25 mg, 50 mg, 100 mg comprimido e tartarato injetável.',
  apresentacoes: [
    {
      id: 'amp5_5ml',
      forma: 'amp',
      nome: 'Ampola 5 mg / 5 mL (1 mg/mL) Tartarato de Metoprolol EV',
      comercial: 'Seloken® injetável',
      conc: '5mg / 5 mL',
      rotulo: 'Tartarato de Metoprolol 5 mg / 5 mL ampola EV',
      mg: 5,
      volml: 5,
      mgml: 1,
      vias: ['EV'],
      disp: '1 ampola (5 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Infundir lentamente na velocidade de 1 a 2 mg por minuto sob monitorização contínua de ECG e PA.',
      obs: 'Controle agudo de resposta ventricular na FA e taquiarritmias.'
    },
    {
      id: 'cp25',
      forma: 'cp',
      nome: 'Comprimido revestido 25 mg (Succinato de liberação prolongada)',
      comercial: 'Selozok®, Succitrat®',
      conc: '25mg',
      rotulo: 'Succinato de Metoprolol 25 mg comprimido',
      mg: 25,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar uma vez ao dia pela manhã com água. O comprimido pode ser partido, mas não deve ser mastigado.',
      obs: 'Liberação mantida contínua 24h.'
    },
    {
      id: 'cp50',
      forma: 'cp',
      nome: 'Comprimido revestido 50 mg (Succinato de liberação prolongada)',
      comercial: 'Selozok®, Succitrat®',
      conc: '50mg',
      rotulo: 'Succinato de Metoprolol 50 mg comprimido',
      mg: 50,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar 1 comprimido pela manhã com água.',
      obs: 'Dose habitual para FA crônica, angina estável e IC crônica compensada.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV'],
      tipo: 'mg',
      min: 2.5,
      max: 5,
      padrao: 5,
      dosesDia: [1, 3],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: 'Controle de frequência EV: 2,5 a 5 mg EV lento em 2 a 5 min; repetir a cada 5-10 min se necessário (máx 15 mg).'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 25,
      max: 200,
      padrao: 50,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'HSL',
      trecho: 'Manutenção oral: 25 a 100 mg VO 1x/dia pela manhã.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 200,
      fonte: 'HSL',
      trecho: 'Dose máxima oral adulto: 200 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em bradicardia sinusal importante (FC < 50 bpm), choque cardiogênico, BAV de 2º ou 3º grau sem marcapasso e insuficiência cardíaca descompensada aguda.',
      fonte: 'HSL',
      trecho: 'Bradicardia severa ou choque cardiogênico.',
      strong: true
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 1,
    volOpcoes: [5, 10, 20],
    tempo: {
      adulto: { min: 2, padrao: 3, max: 5, txt: '2 a 5 minutos lento' },
      ped: { min: 10, padrao: 10, max: 15 }
    },
    fonteTxt: 'Administrar 2,5 a 5 mg EV sem diluir ou com 10 mL de SF 0,9% em 2 a 5 minutos. Interromper se PAS < 90 mmHg ou FC < 50 bpm.'
  },
  notas: {
    indicacao: 'Controle de frequência em fibrilação atrial, angina do peito estável, pós-infarto do miocárdio e hipertensão arterial.',
    administracao: 'Via EV: injetar lentamente. Via oral: tomar uma vez ao dia pela manhã.',
    cuidados: 'Monitorar frequência cardíaca e pressão arterial. Não suspender abruptamente.',
    ajuste: 'Não requer ajuste na insuficiência renal.'
  }
};

export default metoprolol;
