import { Farmaco } from '../../types';

export const albendazol: Farmaco = {
  id: 'albendazol',
  nome: 'Albendazol',
  categoria: 'Antiparasitários',
  busca: 'albendazol zolben zentel vermifugo parasitose ascaris lombriga oxiurus giardia ancilostoma tenia solitaria estrongiloide larva migrans',
  classe: 'Antiparasitário anti-helmíntico benzimidazólico de amplo espectro (inibe a polimerização da tubulina e o transporte de glicose no parasita)',
  dosePratica: 'Adultos e crianças > 2 anos: VO: 400 mg (1 comprimido mastigável ou 10 mL da suspensão) em DOSE ÚNICA para Ascaris lumbricoides, Enterobius vermicularis (oxiúrus), Ancylostoma duodenale e Trichuris trichiura (repetir em 2 semanas para oxiuríase); 400 mg 1x/dia por 3 dias para Strongyloides stercoralis, Taenia solium/saginata e Hymenolepis nana; 400 mg 1x/dia por 5 dias para Giardíase. Crianças de 1 a 2 anos: VO: 200 mg (5 mL da suspensão) em dose única. Administrar obrigatoriamente junto a uma refeição rica em gorduras (leite, queijo, alimentos lipídicos) para aumentar em até 5x a absorção e biodisponibilidade. Contraindicado em gestantes (teratogênico/embriotóxico) e menores de 1 ano.',
  fontes: { HSL: '05/03/2025', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'parasitose intestinal',
  acessoFonte: 'RENAME 2024: Comprimido mastigável 400 mg e suspensão oral 40 mg/mL (frasco 10 mL) constam no Componente Básico da Assistência Farmacêutica (CBAF) e Componente Estratégico (CESAF - Geo-helmintíases) do SUS. Farmácia Popular: Não consta no elenco comercial.',
  apresentacoes: [
    {
      id: 'cp400',
      forma: 'cp',
      nome: 'Comprimido Mastigável 400 mg',
      comercial: 'Zolben / Zentel / Genérico',
      conc: '400mg',
      rotulo: 'Albendazol 400mg comprimido mastigável',
      mg: 400,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME (CBAF/CESAF). Pode ser mastigado, engolido com água ou triturado e misturado com alimentos. Administrar com refeição rica em gorduras para maximizar a absorção (HSL / Bula).'
    },
    {
      id: 'susp40',
      forma: 'sol',
      nome: 'Suspensão Oral 40 mg/mL frasco 10 mL (400 mg)',
      comercial: 'Zentel / Genérico',
      conc: '40mg/mL (400mg/10mL)',
      rotulo: 'Albendazol 40mg/mL suspensão oral frasco 10mL',
      mgml: 40,
      frascoMl: 10,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME (CBAF/CESAF). Frasco de dose única de 10 mL (400 mg). Crianças de 1 a 2 anos recebem meio frasco (5 mL = 200 mg). Agitar vigorosamente antes de tomar. Administrar com leite ou refeição gordurosa.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      apres: ['cp400', 'susp40'],
      tipo: 'mg',
      min: 400,
      max: 400,
      padrao: 400,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 5,
      fonte: 'HSL',
      trecho: 'HSL / Bula Zentel: Adultos e crianças > 2 anos: 400mg (1 comprimido ou 10mL) em dose única para Ascaris, Necator, Ancylostoma, Trichuris e Enterobius; 400mg 1x/dia por 3 dias consecutivos para Strongyloides e Taenia; e 400mg 1x/dia por 5 dias para Giardíase.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 2, idadeMaxAnos: 11 },
      vias: ['VO'],
      apres: ['cp400', 'susp40'],
      tipo: 'mg',
      min: 400,
      max: 400,
      padrao: 400,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 5,
      fonte: 'HSL',
      trecho: 'HSL / Bula: Crianças acima de 2 anos: 400mg (10mL da suspensão a 4% ou 1 comprimido mastigável) em dose única (ou por 3 a 5 dias para estrongiloidíase ou giardíase).'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 12, idadeMaxMeses: 23 },
      vias: ['VO'],
      apres: ['susp40'],
      tipo: 'mg',
      min: 200,
      max: 200,
      padrao: 200,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 1,
      fonte: 'BULA',
      trecho: 'Bula Zentel / OMS / SBP: Crianças de 1 a 2 anos de idade: 200mg (5mL da suspensão) em dose única para infecções helmínticas comuns.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 800,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima diária em infecções teciduais (neurocisticercose): até 800 mg/dia (400 mg 12/12h); em parasitoses intestinais comuns a dose máxima é 400 mg/dia.'
    },
    {
      pub: 'ped',
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 400,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima diária em pediatria nas parasitoses comuns: 400 mg/dia.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 11 },
      vias: ['VO'],
      msg: 'Contraindicado para lactentes menores de 1 ano de vida (segurança e perfil de toxicidade hepática não estabelecidos).',
      fonte: 'BULA',
      trecho: 'Bula Zentel: O albendazol não deve ser administrado a crianças com menos de 1 ano de idade.',
      strong: true
    },
    {
      msg: 'Contraindicado durante a gravidez ou em mulheres com suspeita/planejamento de gravidez (teratogênico e embriotóxico comprovado em modelos pré-clínicos; realizar teste de gravidez antes do início se mulher em idade fértil).',
      fonte: 'BULA',
      trecho: 'Bula Zentel / HSL: O albendazol é contraindicado na gravidez e durante o período de amamentação.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada ao albendazol ou a outros compostos benzimidazólicos (mebendazol, tiabendazol).',
      fonte: 'BULA',
      trecho: 'Bula Zentel: Hipersensibilidade aos derivados benzimidazólicos.'
    }
  ],
  notas: {
    indicacao: 'Tratamento de parasitoses intestinais e teciduais simples ou mistas: Ascaris lumbricoides (ascaridíase/lombriga), Enterobius vermicularis (oxiuríase/enterobíase), Ancylostoma duodenale e Necator americanus (ancilostomíase/amarelão), Trichuris trichiura (tricuríase), Strongyloides stercoralis (estrongiloidíase), Taenia solium e Taenia saginata (teníase/solitária), Hymenolepis nana (himenolepíase), Larva migrans cutânea (bicho geográfico), Giardia lamblia/duodenalis (giardíase em crianças), neurocisticercose e hidatidose equinocócica (HSL / Bula).',
    administracao: 'VO: Os comprimidos podem ser mastigados, engolidos inteiros com água ou triturados e misturados a alimentos pastosos. A suspensão oral deve ser agitada antes do uso. Para ação sistêmica tecidual máxima (ou erradicação de parasitas mais profundos), administrar obrigatoriamente junto com alimentos ricos em lipídios (leite, queijo, manteiga ou refeição gordurosa), o que eleva em até 5 vezes os níveis plasmáticos do metabólito ativo albendazol sulfóxido (HSL / Bula). Não é necessário jejum prévio nem uso de purgativos/laxantes.',
    cuidados: 'MULHERES EM IDADE FÉRTIL: Administrar preferencialmente durante os primeiros 7 dias após o início da menstruação para evitar exposição fetal inadvertida no início de gestação não diagnosticada; orientar contracepção eficaz durante o tratamento e por 1 mês após o término. NEUROCISTICERCOSE ASSINTOMÁTICA: Em pacientes com teníase, a morte de cistos cerebrais ocultos pode desencadear crise convulsiva e hipertensão intracraniana; considerar corticoterapia prévia em esquemas prolongados. MONITORAMENTO HEPÁTICO: Tratamentos prolongados (> 3 dias) requerem monitoramento de transaminases hepáticas e hemograma completo.',
    ajuste: 'Insuficiência renal: A eliminação renal do albendazol e seus metabólitos é insignificante (< 1%); não requer ajuste de dose (HSL). Hemodiálise: Não é dialisável; sem ajuste suplementar. Insuficiência hepática: Sofre extenso metabolismo de primeira passagem hepático; monitorar rigorosamente pacientes com cirrose ou hepatopatia prévia (HSL).'
  }
};

export default albendazol;
