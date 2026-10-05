import { Farmaco } from '../../types';

export const nitazoxanida: Farmaco = {
  id: 'nitazoxanida',
  nome: 'Nitazoxanida',
  categoria: 'Antiparasitários',
  busca: 'nitazoxanida annita antiparasitario antiviral giardiase amebiase rotavirus norovirus criptosporidiase vermifugo helmintos',
  classe: 'Antiparasitário e antiviral sintético de amplo espectro da classe dos tiazolidas (inibe a enzima piruvato ferredoxina oxidorredutase - PFOR - e a replicação viral)',
  dosePratica: 'Adultos e adolescentes (≥ 12 anos): VO: 500 mg a cada 12 horas por 3 dias consecutivos (ingerir obrigatoriamente com alimentos/refeições). Crianças (≥ 1 ano a 11 anos): VO: 7,5 mg/kg por dose (0,375 mL/kg da suspensão de 20 mg/mL) a cada 12 horas por 3 dias consecutivos ingerido com alimentos (teto pediátrico: 500 mg/dose). Indicada para gastroenterites virais (rotavírus e norovírus), helmintíases múltiplas, amebíase, giardíase e criptosporidíase. Advertência: Colore a urina e o suor de amarelo-esverdeado fluorescente (inócuo). Contraindicado em menores de 1 ano, insuficiência hepática e renal graves.',
  fontes: { HSL: '05/03/2025', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'gastroenterite ou parasitose intestinal',
  acessoFonte: 'RENAME 2024: Não consta na Relação Nacional de Medicamentos Essenciais do SUS (o SUS fornece albendazol, ivermectina e metronidazol no CBAF). Sujeito a controle especial (Lista C1 da Portaria 344/98 / RDC ANVISA). Farmácia Popular: Não consta.',
  apresentacoes: [
    {
      id: 'cp500',
      forma: 'cp',
      nome: 'Comprimido Revestido 500 mg',
      comercial: 'Annita / Genérico',
      conc: '500mg',
      rotulo: 'Nitazoxanida 500mg comprimido revestido',
      mg: 500,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Ingerir inteiro com água durante ou logo após as refeições. Não partir nem mastigar. Contraindicado para menores de 12 anos nesta forma farmacêutica (HSL / Bula).'
    },
    {
      id: 'susp20',
      forma: 'sol',
      nome: 'Pó para Suspensão Oral 20 mg/mL frasco 45 mL (ou 100 mL)',
      comercial: 'Annita pó para suspensão',
      conc: '20mg/mL',
      rotulo: 'Nitazoxanida 20mg/mL suspensão oral',
      mgml: 20,
      frascoMl: 45,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: false, fp: false },
      obs: 'Após reconstituição com água filtrada até a marca, cada 1 mL contém 20 mg de nitazoxanida (0,375 mL/kg equivale a 7,5 mg/kg por dose). Agitar vigorosamente antes de cada tomada. Administrar com alimentos.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      apres: ['cp500'],
      tipo: 'mg',
      min: 500,
      max: 500,
      padrao: 500,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 3,
      fonte: 'HSL',
      trecho: 'HSL / Bula Annita: Adultos e crianças > 12 anos: 500mg a cada 12 horas por 3 dias consecutivos (em criptosporidíase em imunodeprimidos com CD4 > 50 céls/mm³ pode ser estendido por 14 dias).'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 12, idadeMaxAnos: 11 },
      vias: ['VO'],
      apres: ['susp20'],
      tipo: 'mg_kg_dia',
      min: 15,
      max: 15,
      padrao: 15,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 3,
      fonte: 'BULA',
      trecho: 'Bula Annita / SBP: Crianças de 1 a 11 anos: 7,5 mg/kg por tomada (0,375 mL/kg da suspensão de 20 mg/mL) a cada 12 horas (totalizando 15 mg/kg/dia) durante 3 dias consecutivos, administrado junto às refeições.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 1000,
      fonte: 'HSL',
      trecho: 'HSL / Bula: Dose máxima diária habitual em adultos: 1.000 mg/dia (500 mg 12/12h).'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 12, idadeMaxAnos: 11 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 1000,
      fonte: 'HSL',
      trecho: 'HSL / Bula: Dose máxima diária em pediatria: 1.000 mg/dia (não ultrapassar a dose de adulto).'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 11 },
      vias: ['VO'],
      msg: 'Contraindicado para lactentes menores de 1 ano de vida (segurança e eficácia clínica não estabelecidas nesta faixa etária).',
      fonte: 'BULA',
      trecho: 'Bula Annita: Contraindicado para crianças menores de 1 ano de idade.',
      strong: true
    },
    {
      pub: 'ped',
      se: { idadeMaxAnos: 11 },
      apres: ['cp500'],
      vias: ['VO'],
      msg: 'A forma comprimido revestido de 500 mg é contraindicada para menores de 12 anos (utilizar obrigatoriamente a suspensão oral de 20 mg/mL).',
      fonte: 'BULA',
      trecho: 'Bula Annita: Os comprimidos revestidos são contraindicados para uso por crianças menores de 12 anos.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com insuficiência hepática ou insuficiência renal grave/terminal.',
      fonte: 'BULA',
      trecho: 'Bula Annita: Contraindicado para pacientes com doença hepática ou renal grave.',
      strong: true
    },
    {
      msg: 'Contraindicado durante o primeiro trimestre de gestação e lactação (salvo estrita indicação médica após avaliação de risco-benefício).',
      fonte: 'BULA',
      trecho: 'Bula Annita: Não deve ser utilizado por mulheres grávidas sem orientação médica.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada à nitazoxanida ou a qualquer componente da fórmula.',
      fonte: 'BULA',
      trecho: 'Bula Annita: Hipersensibilidade à nitazoxanida ou a qualquer componente da fórmula.'
    }
  ],
  notas: {
    indicacao: 'Tratamento de gastroenterites virais provocadas por rotavírus e norovírus; helmintíases simples ou mistas (Ascaris lumbricoides, Enterobius vermicularis, Ancylostoma duodenale, Necator americanus, Trichuris trichiura, Strongyloides stercoralis, Taenia sp., Hymenolepis nana); protozooses (amebíase por Entamoeba histolytica, giardíase por Giardia lamblia, criptosporidíase por Cryptosporidium parvum, blastocistose, balantidíase e isosporíase) (HSL / Bula).',
    administracao: 'VO: Administrar OBRIGATORIAMENTE DURANTE OU IMEDIATAMENTE APÓS AS REFEIÇÕES. A presença de alimentos duplica a área sob a curva (AUC) e as concentrações plasmáticas máximas do metabólito ativo tizoxanida, garantindo eficácia terapêutica ideal e reduzindo sintomas dispépticos (HSL / Bula). Reconstituição da suspensão: adicionar água filtrada em pequenas porções até a marca indicada no frasco, agitando vigorosamente; conservar bem fechado em temperatura ambiente e agitar sempre antes de ministrar.',
    cuidados: 'ALTERAÇÃO NA COR DA URINA E FLUIDOS: Alerte o paciente e os cuidadores de que a nitazoxanida e seus metabólitos frequentemente tingem a urina, o suor, as fezes e fluidos corporais de uma coloração amarelo-esverdeada fluorescente (efeito inócuo que desaparece completamente após a conclusão do tratamento). DIABÉTICOS: A apresentação em pó para suspensão oral reconstituída contém sacarose/açúcar, devendo ser considerada na contagem de carboidratos de crianças diabéticas. ALTA LIGAÇÃO A PROTEÍNAS PLASMÁTICAS (> 99%): Cautela ao coadministrar com varfarina ou fenitoína.',
    ajuste: 'Insuficiência renal: Contraindicado em insuficiência renal grave/terminal (HSL / Bula). Insuficiência hepática: Contraindicado em hepatopatia ativa grave, pois a tizoxanida sofre rápida glicuronidação hepática.'
  }
};

export default nitazoxanida;
