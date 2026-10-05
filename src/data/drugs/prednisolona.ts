import { Farmaco } from '../../types';

export const prednisolona: Farmaco = {
  id: 'prednisolona',
  nome: 'Fosfato Sódico de Prednisolona',
  categoria: 'Corticoides Sistêmicos',
  busca: 'prednisolona predsim prelone fosfato sodico corticoide prednisona asma laringite crupe alergia',
  classe: 'Anti-inflamatório Hormonal, Glicocorticoide Sistêmico (Metabólito Ativo da Prednisona)',
  dosePratica: 'Pediatria (exacerbação de asma / crupe / alergia): 1 a 2 mg/kg/dia VO (com a solução 3 mg/mL ou comprimidos de 5 ou 20 mg) em dose única pela manhã após o café por 3 a 5 dias (máx. 40 a 60 mg/dia sem necessidade de desmame gradual em cursos curtos). Adulto: 20 a 60 mg/dia VO pela manhã por 5 dias.',
  fontes: { HSL: '07/03/2023', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'crise asmática, broncoespasmo ou reação inflamatória/alérgica aguda',
  acessoFonte: 'RENAME 2024: Solução oral 3 mg/mL (frasco 60 mL ou 100 mL) e comprimidos 5 mg e 20 mg no Componente Básico da Atenção Primária. Ampla disponibilidade em farmácias comerciais (Predsim, Prelone) e UBS.',
  apresentacoes: [
    {
      id: 'sol3',
      forma: 'sol',
      nome: 'Solução oral 3 mg/mL (frasco 60 mL ou 100 mL com dosador graduado)',
      comercial: 'Predsim / Prelone / Genérico',
      conc: '3mg/mL',
      rotulo: 'Fosfato sódico de prednisolona 3mg/mL solução oral',
      mgml: 3,
      frascoMl: 60,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      instrucao: 'Administrar preferencialmente em dose única pela manhã, logo após o café da manhã ou mamada (minimiza desconforto gástrico e respeita o ritmo circadiano do cortisol). Utilizar a seringa dosadora ou copo-medida graduado.',
      obs: 'RENAME (Componente Básico). 1 mL = 3 mg de prednisolona. Forma de escolha em pediatria e pacientes com disfagia.'
    },
    {
      id: 'cp20',
      forma: 'cp',
      nome: 'Comprimido 20 mg',
      comercial: 'Predsim 20mg / Prelone / Genérico',
      conc: '20mg',
      rotulo: 'Prednisolona 20mg comprimido',
      mg: 20,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Ingerir pela manhã após o desjejum com um copo de água.',
      obs: 'RENAME (Componente Básico). Comprimido sulcado e divisível em duas metades de 10 mg.'
    },
    {
      id: 'cp5',
      forma: 'cp',
      nome: 'Comprimido 5 mg',
      comercial: 'Predsim 5mg / Prelone',
      conc: '5mg',
      rotulo: 'Prednisolona 5mg comprimido',
      mg: 5,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Ingerir pela manhã após o desjejum com água.',
      obs: 'RENAME (Componente Básico). Indicado para titulação fina ou desmame progressivo.'
    }
  ],
  regras: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 14 },
      vias: ['VO'],
      tipo: 'mg_kg_dia',
      min: 0.14,
      max: 2.0,
      padrao: 1.0, // 1 mg/kg/dia pela manhã (asma aguda / alergia / laringite)
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 5,
      fonte: 'PSZERADO',
      trecho: 'Pediatria (exacerbação de asma / alergia aguda / crupe): 1 a 2 mg/kg/dia (padrão 1 mg/kg/dia), VO, 1 vez ao dia pela manhã por 3 a 5 dias (máximo de 40 a 60 mg/dia) (PSZerado / HSL). HSL geral: 0,14 a 2 mg/kg/dia.'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 5,
      max: 60,
      padrao: 40, // 40 mg (2 comprimidos de 20 mg) conforme PSZerado para crise asmática / inflamação
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 5,
      fonte: 'PSZERADO',
      trecho: 'Adultos: 20 a 60 mg/dia (padrão de pronto-socorro para exacerbação de asma: 40 mg VO pela manhã por 5 dias) (PSZerado / HSL).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 80,
      fonte: 'HSL',
      trecho: 'Dose máxima Adulto: 60 a 80 mg/dia.'
    },
    {
      pub: 'ped',
      tipo: 'mg_kg_dia',
      valor: 2.0,
      fonte: 'HSL',
      trecho: 'Dose máxima Pediatria: 2 mg/kg/dia (máx. 40 a 60 mg/dia).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com infecções fúngicas sistêmicas ou hipersensibilidade conhecida à prednisolona ou a outros corticosteroides.',
      fonte: 'BULA',
      trecho: 'Contraindicado em pacientes com infecções fúngicas sistêmicas e hipersensibilidade aos componentes.',
      strong: false
    },
    {
      msg: 'Administrar preferencialmente em dose única matinal, logo após o café da manhã, para mimetizar o pico circadiano fisiológico do cortisol e reduzir irritação gástrica.',
      fonte: 'HSL',
      trecho: 'Oral, administrar após o desjejum para redução do desconforto gástrico.',
      strong: false
    },
    {
      msg: 'Cursos curtos (até 5 a 7 dias) em crises asmáticas ou reações alérgicas agudas NÃO necessitam de desmame gradual, podendo ser suspensos abruptamente sem risco de insuficiência adrenal aguda.',
      fonte: 'PSZERADO',
      trecho: 'Corticoterapia por até 5 a 7 dias não requer esquema de desmame.',
      strong: false
    },
    {
      msg: 'Cautela e vigilância em pacientes diabéticos (hiperglicemia acentuada), hipertensos descompensados, portadores de osteoporose grave e histórico de úlcera péptica ativa.',
      fonte: 'BULA',
      trecho: 'Requer precaução em diabetes mellitus, hipertensão arterial e histórico de úlcera péptica.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Glicocorticoide de ação intermediária com potente ação anti-inflamatória e imunossupressora no tratamento de crises de asma brônquica, laringite estridulosa (crupe), anafilaxia/urticária aguda, doenças reumáticas, dermatológicas e nefrológicas (HSL / PSZerado).',
    administracao: 'VO: Tomar pela manhã após o café da manhã com água ou leite para minimizar irritação gástrica. Não deitar imediatamente após tomar comprimidos.',
    cuidados: 'Vantagem sobre a prednisona: a prednisolona é a molécula farmacologicamente ativa (não depende da 11-beta-hidroxilação hepática), sendo preferível em pacientes pediátricos pequenos e em hepatopatas.',
    ajuste: 'Insuficiência renal e hepática: não requer ajuste de dose. Hemodiálise: administrar a dose após a sessão (HSL).'
  }
};

export default prednisolona;
