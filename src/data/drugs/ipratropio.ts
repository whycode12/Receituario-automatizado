import { Farmaco } from '../../types';

export const ipratropio: Farmaco = {
  id: 'ipratropio',
  nome: 'Brometo de Ipratrópio',
  categoria: 'Respiratório e Broncodilatadores',
  busca: 'atrovent ipratropio brometo broncodilatador anticolinergico dpoc asma nebulizacao',
  classe: 'Broncodilatador (Anticolinérgico / Antimuscarínico inalatório)',
  dosePratica: 'Adulto: Nebulização: 40 gotas (2 mL = 0,5 mg) em 3-5 mL de SF até 3-4x/dia (ou a cada 20 min na 1ª hora de crise grave junto ao salbutamol); Spray 20 mcg: 2 jatos 4x/dia. Pediatria: Nebulização (< 6 anos): 10-20 gotas em 3 mL SF; (6-12 anos): 20 gotas (0,25 mg); (> 12 anos): 40 gotas.',
  fontes: { HSL: '17/01/2025', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'falta de ar ou chiado no peito',
  acessoFonte: 'RENAME 2024 (Componente Básico): solução para inalação 0,25 mg/mL (frasco 20 mL) e aerossol oral 20 mcg/dose. Farmácia Popular: não consta no elenco.',
  apresentacoes: [
    {
      id: 'gts_neb',
      forma: 'gotas',
      nome: 'Solução para inalação / nebulização 0,25 mg/mL (20 gotas/mL)',
      comercial: 'Atrovent gotas',
      conc: '0,25mg/mL',
      rotulo: 'Brometo de Ipratrópio 0,25mg/mL gotas para nebulização',
      mgml: 0.25,
      gotasml: 20, // 1 mL = 20 gotas = 0,25 mg; 1 gota = 0,0125 mg; 40 gotas = 2 mL = 0,5 mg
      frascoMl: 20,
      vias: ['INALATORIA'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      instrucao: 'Diluir a quantidade prescrita de gotas em 3 a 5 mL de SF 0,9% no copinho do nebulizador. Inalar com fluxo de oxigênio/ar de 6 a 8 L/min até o término da solução. Descartar sobras.',
      obs: 'RENAME (Componente Básico). 20 gotas = 1 mL = 0,25 mg; 40 gotas = 2 mL = 0,5 mg.'
    },
    {
      id: 'spray20',
      forma: 'spray',
      nome: 'Aerossol oral 20 mcg/dose (200 doses)',
      comercial: 'Atrovent N',
      conc: '20mcg/dose',
      rotulo: 'Brometo de Ipratrópio 20mcg/dose spray oral',
      mg: 0.02, // 20 mcg = 0,02 mg por puff
      vias: ['INALATORIA'],
      unidades: ['puff'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      instrucao: 'Agitar o inalador. Expirar profundamente, fechar os lábios ao redor do bocal e inspirar profundamente ao liberar a dose. Segurar a respiração por alguns segundos.',
      obs: 'RENAME. Dose máxima diária recomendada: 12 doses (240 mcg/dia).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['INALATORIA'],
      apres: ['gts_neb'],
      tipo: 'mg',
      min: 0.5,
      max: 0.5,
      padrao: 0.5, // 0,5 mg = 40 gotas (2 mL)
      dosesDia: [3, 4],
      dosesPadrao: 4,
      fonte: 'HSL',
      trecho: 'Adulto e Geriatria Nebulização: 2mL (40 gotas = 0,5mg), 3 a 4 vezes/dia, podendo administrar doses repetidas até estabilização.'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['INALATORIA'],
      apres: ['spray20'],
      tipo: 'mg',
      min: 0.04,
      max: 0.04,
      padrao: 0.04, // 2 puffs (40 mcg = 0,04 mg)
      dosesDia: [4, 4],
      dosesPadrao: 4,
      fonte: 'HSL',
      trecho: 'Adulto Tratamento de manutenção Aerossol: 02 doses (02 puffs = 40mcg) 4x/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 12 },
      vias: ['INALATORIA'],
      apres: ['gts_neb'],
      tipo: 'mg',
      min: 0.5,
      max: 0.5,
      padrao: 0.5, // 40 gotas = 2 mL
      dosesDia: [3, 4],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Pediatria Maiores de 12 anos: crise aguda / manutenção: 2mL (40 gotas = 0,5mg), 3 a 4 vezes/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 6, idadeMaxAnos: 12 },
      vias: ['INALATORIA'],
      apres: ['gts_neb'],
      tipo: 'mg',
      min: 0.25,
      max: 0.25,
      padrao: 0.25, // 20 gotas = 1 mL
      dosesDia: [3, 4],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Pediatria De 6 a 12 anos: 1mL (20 gotas = 0,25mg), 3 a 4 vezes/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMaxAnos: 6 },
      vias: ['INALATORIA'],
      apres: ['gts_neb'],
      tipo: 'mg',
      min: 0.1,
      max: 0.25,
      padrao: 0.125, // 8 a 20 gotas (0,4 a 1 mL)
      dosesDia: [3, 4],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Pediatria < 6 anos: 0,4-1mL (8-20 gotas = 0,1-0,25mg), 3 a 4 vezes/dia.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      apres: ['spray20'],
      tipo: 'mg_dia',
      valor: 0.24, // 240 mcg = 0,24 mg (12 puffs/dia)
      fonte: 'HSL',
      trecho: 'Dose máxima Aerossol: 12 doses (240mcg)/dia.'
    }
  ],
  contra: [
    {
      msg: 'Não deve ser associado ao cromoglicato dissódico no mesmo nebulizador (risco de precipitação química) (HSL).',
      fonte: 'HSL',
      trecho: 'Cuidados Específicos e Monitoramento: Atrovent não deve ser associado ao cromoglicato dissódico no mesmo nebulizador, pois pode ocorrer precipitação do produto.',
      strong: false
    },
    {
      msg: 'Cautela e proteção ocular durante nebulização com máscara em portadores de glaucoma de ângulo fechado (evitar contato do aerossol com os olhos).',
      fonte: 'BULA',
      trecho: 'Complicações oculares: Deve-se ter cuidado para evitar que a solução entre em contato com os olhos, especialmente em pacientes com predisposição a glaucoma.',
      strong: false
    }
  ],
  conflitos: [
    {
      txt: 'Na asma aguda moderada a grave, o ipratrópio é indicado preferencialmente em associação ao beta-2 agonista (salbutamol) durante a primeira hora de atendimento de emergência, proporcionando broncodilatação sinérgica.'
    }
  ],
  notas: {
    indicacao: 'Tratamento de manutenção e crise aguda do broncoespasmo associado à DPOC (bronquite crônica e enfisema) e asma aguda grave.',
    administracao: 'Nebulização: Diluir em 3 a 5 mL de SF 0,9%. Utilizar máscara bem ajustada à face para evitar escape do vapor para os olhos.',
    cuidados: 'Efeitos anticolinérgicos podem incluir boca seca, tosse, irritação local da garganta e, raramente, retenção urinária ou midríase se contato ocular.',
    ajuste: 'Insuficiência renal e hepática: Não é necessário ajuste de dose devido à baixa absorção sistêmica após inalação oral.'
  }
};

export default ipratropio;
