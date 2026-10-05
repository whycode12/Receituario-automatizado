import { Farmaco } from '../../types';

export const cefalexina: Farmaco = {
  id: 'cefalexina',
  nome: 'Cefalexina',
  categoria: 'Antimicrobianos',
  busca: 'keflex cefalexina cefalosporina primeira geracao antibiotico',
  classe: 'Antimicrobiano, Cefalosporina de 1ª Geração',
  fontes: { HSL: '12/06/2019', BULA: '04/10/2026' },
  snPadrao: 'infecção bacteriana',
  acessoFonte: 'RENAME 2024 (Componente Básico): cápsula/comprimido 500 mg e pó para suspensão oral 50 mg/mL (250 mg/5 mL). Farmácia Popular: não consta no elenco.',
  apresentacoes: [
    {
      id: 'cp500',
      forma: 'cp',
      nome: 'Comprimido / Cápsula 500 mg',
      comercial: 'Keflex / Genérico',
      conc: '500mg',
      rotulo: 'Cefalexina 500mg',
      mg: 500,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'RENAME (Componente Básico). Tomar com ou sem alimentos a cada 6 horas.'
    },
    {
      id: 'susp50',
      forma: 'sol',
      nome: 'Suspensão oral 50 mg/mL (250 mg / 5 mL — frasco 100 mL)',
      comercial: 'Keflex suspensão',
      conc: '50mg/mL',
      rotulo: 'Cefalexina 50mg/mL suspensão oral',
      mgml: 50,
      frascoMl: 100,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      obs: 'RENAME (Componente Básico). Frasco de 100 mL (250 mg a cada 5 mL). Após preparo, estável por 14 dias em temperatura ambiente (HSL).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 250,
      max: 500,
      padrao: 500,
      dosesDia: [4, 4],
      dosesPadrao: 4,
      fonte: 'HSL',
      trecho: 'Adulto Oral: 250-500mg a cada 6 horas.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 1 },
      vias: ['VO'],
      tipo: 'mg_kg_dia',
      min: 25,
      max: 100,
      padrao: 50,
      dosesDia: [3, 4],
      dosesPadrao: 4,
      fonte: 'HSL',
      trecho: 'Pediatria (> 1 ano): 25-100mg/kg/dia doses divididas a cada 6-8 horas.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 4000,
      fonte: 'HSL',
      trecho: 'Dose Máxima: 4g/dia.'
    },
    {
      pub: 'ped',
      tipo: 'mg_kg_dia',
      valor: 100,
      fonte: 'HSL',
      trecho: 'Dose Máxima Pediatria: até 100mg/kg/dia (não exceder 4g/dia).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade prévia severa (anafilaxia) a cefalosporinas ou penicilinas.',
      fonte: 'BULA',
      trecho: 'Contraindicado em pacientes com histórico de hipersensibilidade a cefalexina ou a outras cefalosporinas.',
      strong: true
    },
    {
      msg: 'Ajustar intervalo em insuficiência renal moderada a grave: Clcr 10-50 mL/min (a cada 8-12h); Clcr < 10 mL/min (a cada 12-24h) (HSL).',
      fonte: 'HSL',
      trecho: 'Insuficiência renal: Clcr 10-50mL/min: 250-500mg a cada 8-12h. Clcr < 10mL/min: 250-500mg a cada 12-24h.',
      strong: false
    }
  ],
  conflitos: [
    {
      txt: 'Em faringites estreptocócicas, infecções de pele não complicadas e cistites simples, diretrizes ambulatoriais admitem esquema posológico de 500 mg a cada 12 horas, embora o Guia HSL preconize a cada 6 horas para cobertura habitual.'
    }
  ],
  notas: {
    indicacao: 'Infecções de pele e partes moles (celulite, erisipela, impetigo, foliculite), infecções do trato respiratório superior e inferior, otite média aguda, infecções urinárias baixas e infecções ósseas por bactérias suscetíveis (HSL).',
    administracao: 'Via oral. Pode ser administrado com ou sem alimentos (administrar com refeições se houver intolerância gastrintestinal). Agitar vigorosamente a suspensão antes de cada administração.',
    cuidados: 'A suspensão oral tem estabilidade de 14 dias em temperatura ambiente após reconstituição (HSL).',
    ajuste: 'Insuficiência renal: Ajustar intervalo conforme Clcr. Hemodiálise: Administrar dose suplementar de 250 mg a cada 12-24h após a sessão de diálise. Insuficiência hepática: Não é necessário ajuste (HSL).'
  }
};

export default cefalexina;
