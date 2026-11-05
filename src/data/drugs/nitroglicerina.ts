import { Farmaco } from '../../types';

export const nitroglicerina: Farmaco = {
  id: 'nitroglicerina',
  nome: 'Nitroglicerina',
  categoria: 'Cardiovascular e Antiagregantes',
  busca: 'nitroglicerina tridil nitrato vasodilatador venoso eap edema agudo pulmao iam sca angina instavel bic ev',
  classe: 'Vasodilatador Venoso Predominante (Nitrato Orgânico)',
  dosePratica: 'EAP / IAM / Angina instável: Diluir 1 ampola de 25 mg/5 mL (ou 50 mg/10 mL) em 240 a 250 mL de SG 5% ou SF 0,9% (concentração 100 ou 200 mcg/mL). Iniciar em BIC a 5 mcg/min (≈ 3 a 5 mL/h); titular a cada 5 a 10 min em 5 a 10 mcg/min. Dose usual: 10 a 100 mcg/min (máx 200 mcg/min).',
  fontes: { PSZERADO: '2025', HSL: '2024', EINA: '2024' },
  snPadrao: 'dor isquêmica miocárdica ou congestão pulmonar aguda',
  modoPadrao: 'continuo',
  diasPadrao: 1,
  usoContinuoPadrao: false,
  acessoFonte: 'RENAME 2024 (Componente Hospitalar): Nitroglicerina 5 mg/mL solução injetável frasco-ampola.',
  apresentacoes: [
    {
      id: 'amp25_5ml',
      forma: 'amp',
      nome: 'Ampola 25 mg / 5 mL (5 mg/mL) EV',
      comercial: 'Tridil®, Nitronal®',
      conc: '25mg / 5 mL',
      rotulo: 'Nitroglicerina 25 mg / 5 mL ampola EV',
      mg: 25,
      volml: 5,
      mgml: 5,
      vias: ['EV'],
      disp: '1 ampola (5 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Diluir 1 ampola (5 mL) em 245 mL de SG 5% ou SF 0,9% (100 mcg/mL). Infundir em Bomba de Infusão Contínua (BIC) com frasco de vidro/polietileno e equipo não absorvente.',
      obs: 'Vasodilatador coronariano e venoso de escolha na SCA e no EAP com PA preservada.'
    },
    {
      id: 'amp50_10ml',
      forma: 'amp',
      nome: 'Ampola 50 mg / 10 mL (5 mg/mL) EV',
      comercial: 'Tridil®',
      conc: '50mg / 10 mL',
      rotulo: 'Nitroglicerina 50 mg / 10 mL ampola EV',
      mg: 50,
      volml: 10,
      mgml: 5,
      vias: ['EV'],
      disp: '1 ampola (10 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Diluir 1 ampola (10 mL) em 240 mL de SG 5% (200 mcg/mL). Infundir em BIC.',
      obs: 'Alta concentração para restrição hídrica.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV'],
      tipo: 'mg',
      min: 25,
      max: 100,
      padrao: 25,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: 'Diluir 25 a 50 mg em 250 mL de SG 5%. Iniciar em BIC a 5 mcg/min e titular a cada 5 a 10 min conforme dor e PA.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 200,
      fonte: 'HSL',
      trecho: 'Velocidade máxima: 200 mcg/min em BIC.'
    }
  ],
  contra: [
    {
      msg: 'CONTRAINDICAÇÃO ABSOLUTA com uso concomitante de sildenafil nas últimas 24h ou tadalafil nas últimas 48h, infarto de ventrículo direito ou PAS < 90 mmHg.',
      fonte: 'HSL',
      trecho: 'Uso de inibidores da PDE-5 ou infarto de VD.',
      strong: true
    }
  ],
  ev: {
    diluentes: ['SG 5%', 'SF 0,9%'],
    concMax: 0.4,
    volOpcoes: [250],
    tempo: {
      adulto: { txt: 'Infusão contínua em BIC com titulação a cada 5 a 10 minutos' },
      ped: { txt: 'Infusão contínua em BIC' }
    },
    fonteTxt: 'Diluir 25 mg em 245 mL de SG 5%. Utilizar equipo livre de PVC. Titular conforme PA.'
  },
  notas: {
    indicacao: 'Edema agudo de pulmão cardiogênico, síndrome coronariana aguda (IAM / angina instável) e controle pressórico perioperatório.',
    administracao: 'Infundir em BIC utilizando frasco de polietileno/vidro e equipo adequado para evitar adsorção do nitrato.',
    cuidados: 'Cefaleia, rubor facial e taquicardia reflexa. Reduzir ou pausar se PAS < 90 mmHg.',
    ajuste: 'Não necessita de ajuste em insuficiência renal.'
  }
};

export default nitroglicerina;
