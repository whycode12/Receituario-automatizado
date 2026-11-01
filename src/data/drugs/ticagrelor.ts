import { Farmaco } from '../../types';

export const ticagrelor: Farmaco = {
  id: 'ticagrelor',
  nome: 'Ticagrelor',
  categoria: 'Cardiovascular e Antiagregantes',
  busca: 'ticagrelor brilinta 90mg antiagregante iam sca stent cateterismo',
  classe: 'Antiagregante Plaquetário (Antagonista Reversível do Receptor P2Y12)',
  dosePratica: 'SCA / IAM: Dose de ataque de 180 mg VO (2 comprimidos de 90 mg) imediatamente; Manutenção: 90 mg VO de 12 em 12 horas associado ao AAS.',
  fontes: { HSL: '2024', PSZERADO: '2025', BULA: '2024' },
  snPadrao: 'síndrome coronariana aguda',
  acessoFonte: 'Mercado farmacêutico privado / Diretrizes SBC. Não disponível no componente básico do SUS.',
  apresentacoes: [
    {
      id: 'cp90',
      forma: 'cp',
      nome: 'Comprimido revestido 90 mg',
      comercial: 'Brilinta®',
      conc: '90mg',
      rotulo: 'Ticagrelor 90 mg comprimido',
      mg: 90,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar por via oral de 12 em 12 horas com água, com ou sem alimentos. Não partir.',
      obs: 'Inibidor de P2Y12 potente e reversível; preferível ao clopidogrel na SCA em pacientes sem contraindicação.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 90,
      max: 180,
      padrao: 90,
      dosesDia: [1, 2],
      intervaloFixo: 12,
      fonte: 'PSZERADO',
      trecho: 'Ataque: 180 mg VO dose única. Manutenção: 90 mg VO de 12/12h.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 180,
      fonte: 'HSL',
      trecho: 'Dose máxima de manutenção: 180 mg/dia (90 mg 12/12h).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em hemorragia patológica ativa, histórico de hemorragia intracraniana prévia e disfunção hepática moderada a grave.',
      fonte: 'HSL',
      trecho: 'Sangramento ativo ou história de hemorragia intracraniana.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Prevenção de eventos aterotrombóticos em pacientes adultos com Síndrome Coronariana Aguda (SCA).',
    administracao: 'Tomar de 12 em 12 horas com ou sem alimentos. Não mastigar na dose de manutenção.',
    cuidados: 'Pode provocar sensação transitória de dispneia de origem central nas primeiras semanas de tratamento.',
    ajuste: 'Não necessita de ajuste de dose para insuficiência renal ou idosos.'
  }
};

export default ticagrelor;
