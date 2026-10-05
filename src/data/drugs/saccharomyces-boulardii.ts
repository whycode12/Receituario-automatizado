import { Farmaco } from '../../types';

export const saccharomycesBoulardii: Farmaco = {
  id: 'saccharomyces_boulardii',
  nome: 'Saccharomyces boulardii',
  categoria: 'Gastrintestinal e Antieméticos',
  busca: 'saccharomyces boulardii floratil florax repoflor probiotico diarreia clostridium flora disbiose',
  classe: 'Probiótico Antidiarreico (Levedura viva não patogênica)',
  dosePratica: 'Diarreia aguda / Pós-antibiótico / C. difficile: 200 mg (1 cápsula/envelope de 200 mg ou 2 cápsulas de 100 mg) VO de 12/12h por 3 a 5 dias. Alterações crônicas ou manutenção da flora: 100 mg a 200 mg VO 1 a 2x/dia. Tomar em jejum ou 30 minutos antes das refeições (cápsula pode ser aberta e pó misturado em água, suco ou leite em temperatura ambiente/fria).',
  fontes: { HSL: '07/03/2023', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'diarreia aguda, evacuações líquidas ou pós-antibioticoterapia',
  acessoFonte: 'Medicamento isento de prescrição (MIP) e amplamente disponível no mercado sob a marca de referência Floratil e genéricos/similares (Repoflor, Florax).',
  apresentacoes: [
    {
      id: 'cap200',
      forma: 'cap',
      nome: 'Cápsula 200 mg',
      comercial: 'Floratil / Repoflor',
      conc: '200mg',
      rotulo: 'Saccharomyces boulardii 200mg cápsula',
      mg: 200,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar de preferência em jejum ou meia hora antes das principais refeições. Engolir inteira com um pouco de líquido, ou abrir a cápsula e despejar o conteúdo em um copo com água, leite ou suco em temperatura fria ou ambiente. NÃO misturar com líquidos quentes (> 40°C) ou alcoólicos.',
      obs: 'Contém cerca de 4 x 10^9 células de levedura viva de Saccharomyces boulardii-17 liofilizada por cápsula.'
    },
    {
      id: 'cap100',
      forma: 'cap',
      nome: 'Cápsula 100 mg',
      comercial: 'Floratil 100mg / Genérico',
      conc: '100mg',
      rotulo: 'Saccharomyces boulardii 100mg cápsula',
      mg: 100,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Ingerir em jejum ou 30 minutos antes das refeições. Em crianças pequenas ou pacientes com dificuldade de deglutição, abrir a cápsula e misturar em líquidos frios.',
      obs: 'Contém cerca de 2 x 10^9 células de Saccharomyces boulardii-17 liofilizada por cápsula.'
    },
    {
      id: 'env200',
      forma: 'sachet',
      nome: 'Pó oral para suspensão 200 mg (envelope / sachê)',
      comercial: 'Floratil sachê / Repoflor pó',
      conc: '200mg',
      rotulo: 'Saccharomyces boulardii 200mg envelope pó oral',
      mg: 200,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Dissolver o conteúdo de 1 envelope em meio copo de água, suco, chá, leite ou mamadeira em temperatura ambiente ou fria, mexer bem e tomar imediatamente. Não misturar com líquidos quentes (> 40°C).',
      obs: 'Apresentação em pó oral ideal para pediatria e administração em mamadeiras, sucos ou água fria.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 200,
      max: 200,
      padrao: 200,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 5,
      fonte: 'PSZERADO',
      trecho: 'Diarreia aguda / infecção gastrointestinal: 200 mg VO a cada 12 horas por 3 a 5 dias (1 cápsula de 200 mg ou 2 cápsulas de 100 mg a cada 12 horas) (PSZerado / HSL).'
    },
    {
      pub: 'ped',
      vias: ['VO'],
      tipo: 'mg',
      min: 100,
      max: 200,
      padrao: 200,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 5,
      fonte: 'HSL',
      trecho: 'Pediatria (todas as idades): Diarreia aguda e restauração da flora: 200 mg (1 envelope/cápsula de 200 mg ou 2 de 100 mg), VO, 2 vezes/dia. Em manutenção crônica: 100 a 200 mg/dia.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 800,
      fonte: 'HSL',
      trecho: 'Dose máxima adulto: 800 mg/dia (4 cápsulas de 200 mg ao dia).'
    },
    {
      pub: 'ped',
      tipo: 'mg_dia',
      valor: 400,
      fonte: 'HSL',
      trecho: 'Dose máxima pediatria: 400 mg/dia (2 envelopes/cápsulas de 200 mg ao dia).'
    }
  ],
  contra: [
    {
      msg: 'CONTRAINDICAÇÃO GRAVE: Pacientes com cateter venoso central (CVC), pacientes gravemente enfermos ou em estado crítico hospitalar, e imunocomprometidos graves (risco documentado de fungemia / sepse por Saccharomyces por translocação ou contaminação aérea do cateter).',
      fonte: 'BULA',
      trecho: 'Contraindicado em pacientes com cateter venoso central devido ao risco de fungemia.',
      strong: false
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade ao Saccharomyces boulardii, a leveduras ou aos componentes da fórmula.',
      fonte: 'HSL',
      trecho: 'Contraindicado em pacientes com alergia a leveduras.',
      strong: false
    },
    {
      msg: 'Interação com antifúngicos sistêmicos ou orais (ex: fluconazol, nistatina, anfotericina B): os antifúngicos inativam a levedura viva, anulando o efeito terapêutico do probiótico.',
      fonte: 'BULA',
      trecho: 'Não administrar simultaneamente com medicamentos antifúngicos orais ou sistêmicos.',
      strong: false
    },
    {
      msg: 'Temperatura dos alimentos/líquidos: nunca misturar com líquidos quentes (> 40°C) ou alcoólicos, pois altas temperaturas destroem a levedura viva.',
      fonte: 'HSL',
      trecho: 'Não misturar com líquidos quentes ou com álcool.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Tratamento adjuvante da diarreia aguda de diversas etiologias (infecciosa viral/bacteriana, associada a antibióticos, diarreia do viajante), restauração da microbiota intestinal fisiológica e prevenção de recidivas por Clostridioides difficile (HSL / PSZerado).',
    administracao: 'VO: Tomar preferencialmente em jejum ou 30 minutos antes das refeições. O sachê pode ser dissolvido em água, suco ou leite em temperatura fria ou ambiente. As cápsulas podem ser ingeridas inteiras ou abertas.',
    cuidados: 'Por se tratar de um fungo leveduriforme vivo, o manuseio dos sachês ou abertura de cápsulas perto de cateteres venosos centrais é estritamente proibido pela ANVISA e FDA para evitar fungemia iatrogênica.',
    ajuste: 'Insuficiência renal e hepática: não requer ajuste posológico (atua localmente no lúmen gastrintestinal e não é absorvido sistemicamente).'
  }
};

export default saccharomycesBoulardii;
