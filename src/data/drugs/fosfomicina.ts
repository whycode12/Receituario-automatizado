import { Farmaco } from '../../types';

export const fosfomicina: Farmaco = {
  id: 'fosfomicina',
  nome: 'Fosfomicina Trometamol',
  categoria: 'Antimicrobianos',
  busca: 'fosfomicina monuril trometamol cistite itu infeccao urinaria envelope dose unica bacteriuria',
  classe: 'Antibacteriano urinário bactericida de amplo espectro (derivado do ácido fosfônico que inibe a enolpiruvil transferase na síntese da parede celular bacteriana)',
  dosePratica: 'Adulto e adolescentes (≥ 12 anos): VO: 3 g (1 envelope de 8 g contendo 5,631 g de fosfomicina trometamol eq. a 3 g de fosfomicina base) em DOSE ÚNICA para cistite aguda não complicada e bacteriúria assintomática na gravidez. Profilaxia de infecção em biópsia prostática transretal / manipulação urológica: 3 g VO 3 horas antes da intervenção (podendo repetir 3 g após 24 a 48h a critério médico). Modo de preparo obrigatório: dissolver o conteúdo do envelope em meio copo de água (50 a 75 mL), mexer e ingerir imediatamente com a bexiga vazia, preferencialmente à noite ao deitar e com o estômago vazio (2h após refeição).',
  fontes: { HSL: '05/03/2025', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'infecção urinária',
  acessoFonte: 'RENAME 2024: Não consta na Relação Nacional de Medicamentos Essenciais (disponibilizada em alguns municípios via REMUME local para atenção básica/saúde da mulher). Farmácia Popular: Não consta.',
  apresentacoes: [
    {
      id: 'env3g',
      forma: 'sachet',
      nome: 'Envelope Granulado 3 g (5,631 g fosfomicina trometamol)',
      comercial: 'Monuril / Genérico',
      conc: '3g',
      rotulo: 'Fosfomicina trometamol 3g granulado envelope',
      mg: 3000,
      frac: 1,
      vias: ['VO'],
      disp: '1 envelope',
      acesso: { rename: false, fp: false },
      instrucao: 'Dissolver completamente o conteúdo de 1 envelope em meio copo d\'água (50 a 75 mL), misturar com uma colher e tomar imediatamente. Não guardar para uso posterior. Tomar de estômago vazio (2 a 3 horas longe das refeições), preferencialmente à noite ao deitar, logo após urinar e esvaziar a bexiga.',
      obs: 'Envelope de 8 g contendo 5,631 g de fosfomicina trometamol (equivalente a 3 g de fosfomicina base ativa). Ingerir imediatamente após dissolução em água.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      apres: ['env3g'],
      tipo: 'sachet',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 1,
      fonte: 'HSL',
      trecho: 'HSL / Bula Monuril: Adultos e adolescentes (≥ 12 anos): 1 envelope de 3g em dose única para cistite bacteriana aguda não complicada (as concentrações urinárias bactericidas persistem ativas por 48 a 72 horas após uma única tomada).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 3000,
      fonte: 'HSL',
      trecho: 'HSL / Bula: Dose máxima diária habitual em cistite aguda: 3.000 mg (1 envelope) em dose única.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 11 },
      vias: ['VO'],
      msg: 'Segurança e eficácia clínica não foram estabelecidas em crianças com menos de 12 anos de idade.',
      fonte: 'HSL',
      trecho: 'HSL: A segurança e eficácia não foram estabelecidas para crianças menores de 12 anos.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com insuficiência renal grave com ClCr < 10 mL/min ou em tratamento com hemodiálise.',
      fonte: 'BULA',
      trecho: 'Bula Monuril: Contraindicado para pacientes com insuficiência renal grave (clearance de creatinina < 10 mL/min) e pacientes submetidos a hemodiálise.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada à fosfomicina trometamol ou a qualquer excipiente da fórmula.',
      fonte: 'BULA',
      trecho: 'Bula Monuril: Hipersensibilidade à fosfomicina ou a qualquer componente da fórmula.'
    }
  ],
  notas: {
    indicacao: 'Tratamento de infecções agudas não complicadas do trato urinário baixo (cistite aguda não complicada e recidivante em mulheres, síndrome uretrovesical bacteriana aguda, uretrite não gonocócica, bacteriúria assintomática na gestação) causadas por cepas sensíveis de Escherichia coli, Proteus, Klebsiella, Enterobacter e Enterococcus faecalis (incluindo cepas produtoras de ESBL). Profilaxia de infecções urinárias em intervenções cirúrgicas e transuretrais diagnósticas (HSL / Bula Monuril). NÃO INDICADO PARA PIELONEFRITE OU INFECÇÕES URINÁRIAS COM FOCO RENAL/SISTÊMICO.',
    administracao: 'VO: Dissolver todo o conteúdo de 1 envelope em meio copo de água potável (50 a 75 mL) em temperatura ambiente, misturar bem com uma colher e ingerir imediatamente (não guardar sobras). Deve ser administrado com o estômago vazio (pelo menos 2 a 3 horas antes ou depois de refeições, pois alimentos diminuem a absorção sérica e concentração urinária). O melhor momento de administração é À NOITE AO DEITAR, LOGO APÓS ESVAZIAR A BEXIGA, para maximizar o tempo de contato e concentração do fármaco na urina vesical durante a noite (HSL / Bula).',
    cuidados: 'INTERAÇÃO COM METOCLOPRAMIDA: A coadministração de metoclopramida ou outros procinéticos aumenta a motilidade gastrointestinal e reduz significativamente as concentrações urinárias da fosfomicina (evitar o uso simultâneo). CONCENTRAÇÃO URINÁRIA PROLONGADA: Devido à circulação entero-hepática e lenta excreção renal na forma ativa não modificada, concentrações terapêuticas bactericidas acima da CIM persistem na urina por 36 a 72 horas após a dose única. DIARREIA: Efeito adverso mais frequente (transitório); se houver diarreia grave persistente investigar colite associada a antibióticos.',
    ajuste: 'Insuficiência renal: Em pacientes com ClCr > 10 mL/min, não necessita de ajuste posológico (as concentrações urinárias se mantêm ativas e eficazes por cerca de 48 horas). Contraindicado em ClCr < 10 mL/min e em hemodiálise (HSL / Bula). Insuficiência hepática: Não é metabolizado pelo fígado; não necessita de ajuste de dose.'
  }
};

export default fosfomicina;
