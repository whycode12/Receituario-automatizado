import { Farmaco } from '../../types';

export const enoxaparina: Farmaco = {
  id: 'enoxaparina',
  nome: 'Enoxaparina Sódica',
  categoria: 'Cardiovascular e Antiagregantes',
  busca: 'enoxaparina clexane heparina baixo peso molecular hbpm sc ev tep tvp iam sca profilaxia anticoagulacao',
  classe: 'Anticoagulante (Heparina de Baixo Peso Molecular - HBPM)',
  dosePratica: 'Profilaxia de TVP/TEP: 40 mg SC 1x/dia. Tratamento pleno (TVP/TEP/IAM sem supra): 1 mg/kg SC a cada 12 horas (máximo 100 mg por dose). IAM com supra: Ataque de 30 mg IV em bolus + 1 mg/kg SC. Idosos > 75 anos: 0,75 mg/kg SC de 12/12h sem bolus IV. ClCr < 30 mL/min: 1 mg/kg SC 1x ao dia.',
  fontes: { PSZERADO: '2025', HSL: '2024', EINA: '2024', BULA: '2024' },
  snPadrao: 'evento tromboembólico agudo ou profilaxia de TEV',
  acessoFonte: 'RENAME 2024 (Componente Hospitalar / Especializado): Enoxaparina sódica 40 mg e 60 mg solução injetável.',
  apresentacoes: [
    {
      id: 'seringa40',
      forma: 'seringa',
      nome: 'Seringa preenchida 40 mg / 0,4 mL (100 mg/mL)',
      comercial: 'Clexane®, Versa®',
      conc: '40mg / 0,4 mL',
      rotulo: 'Enoxaparina sódica 40 mg / 0,4 mL seringa preenchida',
      mg: 40,
      volml: 0.4,
      mgml: 100,
      vias: ['SC', 'EV'],
      disp: '1 seringa preenchida (0,4 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Injetar por via subcutânea no abdome alternando os lados. Não massagear.',
      obs: 'Dose padrão profilática diária para TVP em pacientes clínicos/cirúrgicos.'
    },
    {
      id: 'seringa60',
      forma: 'seringa',
      nome: 'Seringa preenchida 60 mg / 0,6 mL (100 mg/mL)',
      comercial: 'Clexane®, Versa®',
      conc: '60mg / 0,6 mL',
      rotulo: 'Enoxaparina sódica 60 mg / 0,6 mL seringa preenchida',
      mg: 60,
      volml: 0.6,
      mgml: 100,
      vias: ['SC', 'EV'],
      disp: '1 seringa preenchida (0,6 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Injetar por via subcutânea profunda no abdome com a agulha a 90°. Não expelir a bolha de ar antes da injeção.',
      obs: 'Dose terapêutica plena (1 mg/kg) para anticoagulação em SCA, TVP e TEP.'
    },
    {
      id: 'seringa80',
      forma: 'seringa',
      nome: 'Seringa preenchida 80 mg / 0,8 mL (100 mg/mL)',
      comercial: 'Clexane®, Versa®',
      conc: '80mg / 0,8 mL',
      rotulo: 'Enoxaparina sódica 80 mg / 0,8 mL seringa preenchida',
      mg: 80,
      volml: 0.8,
      mgml: 100,
      vias: ['SC', 'EV'],
      disp: '1 seringa preenchida (0,8 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Injetar por via subcutânea no abdome.',
      obs: 'Dose plena para pacientes de aproximadamente 80 kg.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['SC'],
      tipo: 'mg',
      min: 40,
      max: 100,
      padrao: 60,
      dosesDia: [1, 2],
      intervaloFixo: 12,
      fonte: 'PSZERADO',
      trecho: 'Profilaxia: 40 mg SC 1x/dia. Anticoagulação plena: 1 mg/kg SC a cada 12 horas.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV'],
      tipo: 'mg',
      min: 30,
      max: 30,
      padrao: 30,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: 'Ataque no IAM com supra de ST: 30 mg EV em bolus direto imediato.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 200,
      fonte: 'HSL',
      trecho: 'Dose terapêutica máxima: 100 mg por dose e até 200 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em hemorragia ativa maior, trombocitopenia induzida por heparina (TIH) e anestesia neuraxial (raqui/peridural) nas últimas 12-24h.',
      fonte: 'HSL',
      trecho: 'Sangramento ativo importante ou antecedente de TIH.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Tratamento de TVP, TEP, SCA/IAM e profilaxia de tromboembolismo venoso.',
    administracao: 'Injetar no tecido celular subcutâneo abdominal anterolateral ou posterolateral. Não esfregar após a injeção.',
    cuidados: 'Monitorar contagem de plaquetas e hemoglobina. Não administrar por via intramuscular.',
    ajuste: 'Se ClCr < 30 mL/min, reduzir a dose plena para 1 mg/kg SC uma vez ao dia (intervalo de 24h).'
  }
};

export default enoxaparina;
