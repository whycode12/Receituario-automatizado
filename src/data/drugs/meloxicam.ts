import { Farmaco } from '../../types';

export const meloxicam: Farmaco = {
  id: 'meloxicam',
  nome: 'Meloxicam',
  categoria: 'Analgésicos e Anti-inflamatórios',
  busca: 'meloxicam movatec inicox dor inflamacao aine articular artrite dismenorreia 7.5mg 15mg',
  classe: 'Anti-inflamatório Não Esteroidal (AINE Oxicam preferencial COX-2)',
  dosePratica: 'Adulto: 7,5 mg a 15 mg VO 1x/dia com água durante ou após uma refeição. Dose máxima: 15 mg/dia.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'dor ou inflamação',
  acessoFonte: 'RENAME 2024: Não consta na RENAME básica federal, amplamente disponível em farmácias comerciais.',
  apresentacoes: [
    {
      id: 'cp7_5',
      forma: 'cp',
      nome: 'Comprimido 7,5 mg',
      comercial: 'Movatec®, Inicox®, Genérico',
      conc: '7,5mg',
      rotulo: 'Meloxicam 7,5 mg',
      mg: 7.5,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar 1 comprimido 1x ao dia com água, de preferência durante ou após refeição.',
      obs: 'AINE com inibição preferencial de COX-2, meia-vida longa (cerca de 20 horas).'
    },
    {
      id: 'cp15',
      forma: 'cp',
      nome: 'Comprimido 15 mg',
      comercial: 'Movatec®, Genérico',
      conc: '15mg',
      rotulo: 'Meloxicam 15 mg',
      mg: 15,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar 1 comprimido 1x ao dia com água após refeição.',
      obs: 'Dose máxima diária de meloxicam.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 7.5,
      max: 15,
      padrao: 7.5,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: 'Dose inicial de 7,5 mg 1x/dia, podendo elevar para 15 mg 1x/dia conforme necessidade.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 15,
      fonte: 'HSL',
      trecho: 'Dose máxima diária: 15 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com úlcera péptica ativa, insuficiência renal grave não dialisada, insuficiência cardíaca severa ou alergia a AINEs.',
      fonte: 'HSL',
      trecho: 'Úlcera péptica ou disfunção renal grave.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Tratamento sintomático de osteoartrite, artrite reumatoide, dismenorreia e dores agudas.',
    administracao: 'Via oral com um copo cheio de água, preferencialmente após as refeições.',
    cuidados: 'Monitorar pressão arterial e função renal em uso crônico; em idosos usar 7,5 mg/dia.',
    ajuste: 'Em hemodiálise crônica dose máxima 7,5 mg/dia.'
  }
};

export default meloxicam;
