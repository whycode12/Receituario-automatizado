import { Farmaco } from '../../types';

export const prednisona: Farmaco = {
  id: 'prednisona',
  nome: 'Prednisona',
  categoria: 'Corticoides Sistêmicos',
  busca: 'meticorten prednisona corticoide cortisona prednison',
  classe: 'Anti-inflamatório Hormonal, Corticosteroide Sistêmico',
  dosePratica: 'Adulto: 20 mg a 60 mg VO 1x/dia pela manhã após o café (em crise de asma/alergia: 40 a 60 mg/dia por 5 a 7 dias sem desmame). Pediatria: 1 a 2 mg/kg/dia VO 1x/dia pela manhã por 3 a 5 dias (máx. 40 a 60 mg/dia; preferir prednisolona oral em crianças pequenas).',
  fontes: { HSL: '02/10/2026', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'inflamação ou exacerbação alérgica',
  acessoFonte: 'RENAME 2024 (Componente Básico): comprimido 5 mg e comprimido 20 mg. Farmácia Popular: não consta no elenco do programa.',
  apresentacoes: [
    {
      id: 'cp20',
      forma: 'cp',
      nome: 'Comprimido 20 mg',
      comercial: 'Meticorten',
      conc: '20mg',
      rotulo: 'Prednisona 20mg',
      mg: 20,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME. Comprimido sulcado (pode ser partido ao meio se necessário).'
    },
    {
      id: 'cp5',
      forma: 'cp',
      nome: 'Comprimido 5 mg',
      comercial: 'Meticorten',
      conc: '5mg',
      rotulo: 'Prednisona 5mg',
      mg: 5,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME. Indicado para doses baixas, crianças maiores ou desmame gradual.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 5,
      max: 60,
      padrao: 20,
      dosesDia: [1, 1], // Dose única diária pela manhã (respeitando o ciclo circadiano do cortisol)
      dosesPadrao: 1,
      fonte: 'HSL',
      trecho: 'Adulto: 5-60mg/dia, VO, pela manhã.'
    },
    {
      pub: 'ped',
      se: { idadeMaxAnos: 11 },
      vias: ['VO'],
      tipo: 'mg_kg_dia',
      min: 0.14,
      max: 2.0,
      padrao: 1.0, // 1 mg/kg/dia pela manhã
      dosesDia: [1, 1],
      dosesPadrao: 1,
      fonte: 'HSL',
      trecho: 'Pediatria 0-11 anos: 0,14-2mg/kg/dia ou 4-60mg/m², VO, pela manhã.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      tipo: 'mg',
      min: 5,
      max: 60,
      padrao: 20,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      fonte: 'HSL',
      trecho: 'Pediatria Acima de 12 anos: 5-60mg/dia, VO, pela manhã.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 80,
      fonte: 'HSL',
      trecho: 'Dose máxima Adulto: 60 a 80mg/dia (em pulsoterapia ou quadros agudos graves, conforme protocolo especializado).'
    },
    {
      pub: 'ped',
      tipo: 'mg_kg_dia',
      valor: 2.0,
      fonte: 'HSL',
      trecho: 'Dose máxima Pediatria: 2mg/kg/dia (máx 60mg/dia).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com infecções fúngicas sistêmicas ou hipersensibilidade à prednisona ou a outros corticosteroides.',
      fonte: 'BULA',
      trecho: 'Contraindicações: hipersensibilidade à prednisona ou a outros corticosteroides e infecções fúngicas sistêmicas.',
      strong: false
    },
    {
      msg: 'Administrar preferencialmente em dose única matinal, logo após o café da manhã, para mimetizar o pico circadiano do cortisol e minimizar irritação gástrica (HSL).',
      fonte: 'HSL',
      trecho: 'Administração: Oral, administrar após o desjejum para redução do desconforto gástrico.',
      strong: false
    }
  ],
  conflitos: [
    {
      txt: 'Na pediatria com dificuldade de deglutição de comprimidos, a alternativa líquida bioequivalente padronizada na rede é a prednisolona solução oral 3 mg/mL (1 mg de prednisona ≈ 1 mg de prednisolona).'
    }
  ],
  notas: {
    indicacao: 'Anti-inflamatório e imunossupressor no tratamento de patologias endócrinas, reumáticas, dermatológicas, alérgicas, oftálmicas, respiratórias (exacerbação de asma), hematológicas e neoplásicas (HSL).',
    administracao: 'Via oral. Tomar preferencialmente pela manhã após o desjejum com um copo d água para reduzir desconforto gástrico (HSL).',
    cuidados: 'Tratamentos prolongados (> 14 a 21 dias) exigem desmame gradual para evitar insuficiência adrenal secundária. Monitorar pressão arterial, glicemia e risco de úlcera péptica.',
    ajuste: 'Insuficiência renal e hepática: Não é necessário ajuste de dose. Hemodiálise: Não é necessário suplementação de dose (HSL).'
  }
};

export default prednisona;
