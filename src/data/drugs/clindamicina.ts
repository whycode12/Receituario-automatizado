import { Farmaco } from '../../types';

export const clindamicina: Farmaco = {
  id: 'clindamicina',
  nome: 'Cloridrato / Fosfato de Clindamicina',
  categoria: 'Antimicrobianos',
  busca: 'clindamicina dalacin lincosamida anaerobios mssa erisipela celulite pneumonia aspirativa fasciite colite pseudomembranosa',
  classe: 'Antibacteriano, Lincosamida de ação potente contra anaeróbios e bactérias Gram-positivas (Streptococcus e MSSA), com efeito antitoxina estafilocócica/estreptocócica',
  dosePratica: 'Adulto: VO: 300 a 450 mg a cada 6 ou 8 horas por 7 a 14 dias (ingerir com copo cheio de água e permanecer ereto por 30 min pelo risco de esofagite ulcerativa). EV: 600 a 900 mg a cada 8 horas (diluir cada ampola de 600 mg em 100 mL de SF 0,9% ou SG 5% e infundir em 30 a 60 min; NUNCA administrar em bolus rápido por risco de colapso cardiovascular e parada cardíaca). IM: máx 600 mg por sítio de aplicação. Pediatria (> 1 mês): VO: 20 a 40 mg/kg/dia divididos em 3 ou 4 tomadas (8/8h ou 6/6h); EV: 20 a 40 mg/kg/dia divididos a cada 6 ou 8 horas.',
  fontes: { HSL: '05/03/2025', EINA: '2026', EINP: '2026', BULA: '04/10/2026' },
  snPadrao: 'infecção bacteriana',
  acessoFonte: 'RENAME 2024: Cápsula 300 mg consta no Componente Básico da Assistência Farmacêutica (CBAF) e ampola injetável 150 mg/mL (600 mg / 4 mL) consta no Componente Hospitalar do SUS. Farmácia Popular: Não consta.',
  apresentacoes: [
    {
      id: 'cap300',
      forma: 'cap',
      nome: 'Cápsula 300 mg (cloridrato de clindamicina)',
      comercial: 'Dalacin C / Genérico',
      conc: '300mg',
      rotulo: 'Cloridrato de clindamicina 300mg cápsula',
      mg: 300,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME (CBAF). Ingerir obrigatoriamente com 1 copo cheio de água (200 mL) e permanecer ereto por 30 minutos após a deglutição para prevenir ulceração esofágica severa (HSL / Bula).'
    },
    {
      id: 'amp600',
      forma: 'amp',
      nome: 'Ampola 600 mg / 4 mL (150 mg/mL) fosfato de clindamicina',
      comercial: 'Dalacin C injetável / Genérico',
      conc: '150mg/mL (600mg/4mL)',
      rotulo: 'Fosfato de clindamicina 150mg/mL ampola 4mL (600mg)',
      mg: 600,
      volml: 4,
      vias: ['EV', 'IM'],
      disp: '1 ampola',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME (Hospitalar). EV: diluir obrigatoriamente em 50 a 100 mL de SF ou SG 5% e infundir em 30 a 60 min. PROIBIDO bolus EV rápido. IM: aplicação intraglútea profunda (máx 600 mg por local de injeção).'
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%', 'SG 10%', 'Ringer Lactato'],
    concMax: 18, // conc máx 18 mg/mL adultos e pediatria; neonatos até 6 mg/mL (Einstein)
    concUsualPed: 6,
    volPadraoAdulto: [[600, 100], [900, 100], [1200, 150]],
    volOpcoes: [50, 100, 250],
    tempo: {
      adulto: { min: 20, padrao: 60, max: 60, txt: 'Infusão: 20 a 60 minutos (padrão HSL: 60 min por risco de flebite). Não exceder 30 mg/min ou 1.200 mg/hora. PROIBIDO bolus EV direto' },
      ped: { min: 20, padrao: 60, max: 60, txt: 'Infusão: 20 a 60 minutos (Einstein Pediátrico / HSL). Velocidade máxima: 30 mg/min' }
    },
    fonteTxt: 'Diluição: diluir cada dose de 600 mg em 100 mL de SF 0,9% ou SG 5% (protocolo institucional prevenção de flebite HSL / Einstein Adultos). Concentração máxima: 18 mg/mL. Velocidade de infusão: infundir em 20 a 60 minutos (não ultrapassar 30 mg/minuto nem 1.200 mg/hora). NUNCA administrar em bolus EV rápido ou sem diluição prévia (risco fatal de hipotensão grave, arritmias ventriculares e parada cardiorrespiratória). Estabilidade: 24h em temperatura ambiente ou 48h refrigerado.'
  },
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      apres: ['cap300'],
      tipo: 'mg',
      min: 300,
      max: 600,
      padrao: 300,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL: Adulto Oral: 600 a 1.800mg/dia divididos a cada 6 ou 8 horas (Habitual: 300mg a cada 8h; infecções mais graves 450 a 600mg de 8/8h ou 6/6h).'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['EV', 'IM'],
      apres: ['amp600'],
      tipo: 'mg',
      min: 600,
      max: 900,
      padrao: 600,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL: Adulto IM e EV: 1,2 a 2,7g/dia divididos em 2 a 4 doses (Habitual: 600mg a cada 8 horas; infecções graves até 900mg de 8/8h ou 600mg 6/6h; máximo parenteral 4,8g/dia).'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 1, idadeMaxAnos: 11 },
      vias: ['VO'],
      apres: ['cap300'],
      tipo: 'mg_kg_dia',
      min: 20,
      max: 40,
      padrao: 30,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL: Pediatria (> 1 mês) Oral: 8 a 40mg/kg/dia divididos em 3 ou 4 doses (dose habitual moderada/grave: 20 a 40mg/kg/dia divididos a cada 6-8 horas, máx 300mg/dose e 1800mg/dia).'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 1, idadeMaxAnos: 11 },
      vias: ['EV', 'IM'],
      apres: ['amp600'],
      tipo: 'mg_kg_dia',
      min: 20,
      max: 40,
      padrao: 30,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL / Einstein Pediátrico: Pediatria (> 1 mês) IM e EV: 20 a 40mg/kg/dia divididos a cada 6 a 8 horas (máximo 2.700mg/dia em infecções graves).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 1800,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima adulto oral: 1.800 mg/dia.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['EV'],
      tipo: 'mg_dia',
      valor: 4800,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima adulto EV: 4.800 mg/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 1, idadeMaxAnos: 11 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 1800,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima pediatria oral: 1.800 mg/dia (máx 300 mg/dose).'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 1, idadeMaxAnos: 11 },
      vias: ['EV', 'IM'],
      tipo: 'mg_dia',
      valor: 2700,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima pediatria parenteral: 2.700 mg/dia.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 1 },
      vias: ['VO', 'EV', 'IM'],
      msg: 'Contraindicado para recém-nascidos com menos de 1 mês de vida (apresentações injetáveis contêm álcool benzílico, associado à síndrome de gasping letal neonatal).',
      fonte: 'BULA',
      trecho: 'Bula Dalacin C: O fosfato de clindamicina injetável contém álcool benzílico, não devendo ser administrado em neonatos.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com histórico prévio de colite pseudomembranosa ou colite associada ao uso de antibióticos por Clostridioides difficile.',
      fonte: 'BULA',
      trecho: 'Bula Dalacin C: Contraindicado para pacientes com história de colite associada a antibióticos.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada à clindamicina, lincomicina ou a qualquer componente da formulação.',
      fonte: 'BULA',
      trecho: 'Bula Dalacin C: Hipersensibilidade à clindamicina ou à lincomicina.'
    }
  ],
  notas: {
    indicacao: 'Tratamento de infecções graves causadas por bactérias anaeróbicas suscetíveis e cocos Gram-positivos (Streptococcus pneumoniae, Streptococcus pyogenes, Staphylococcus aureus sensível à meticilina - MSSA): infecções de pele e tecidos moles (erisipela, celulite, fasciite necrosante com efeito antitoxina inibidor da síntese de toxina de Panton-Valentine e choque tóxico estreptocócico/estafilocócico), infecções intra-abdominais e pélvicas por anaeróbios, abscessos pulmonares e pneumonia aspirativa, osteomielite e infecções odontogênicas graves (HSL / Bula).',
    administracao: 'VO: Tomar as cápsulas sempre com 1 copo cheio de água (200 mL) e permanecer ereto por 30 minutos para evitar retenção na mucosa esofágica e esofagite erosiva severa (HSL / Bula). EV: Diluir a dose em 100 mL de SF 0,9% ou SG 5% e infundir em 30 a 60 minutos. NUNCA FAZER BOLUS EV (risco de hipotensão súbita severa e PCR). IM: Injetar profundamente em grande massa muscular glútea (máximo de 600 mg por injeção/sítio).',
    cuidados: 'COLITE PSEUDOMEMBRANOSA (Clostridioides difficile): A clindamicina é um dos antimicrobianos com maior potencial de induzir colite por C. difficile; suspender imediatamente o tratamento se o paciente desenvolver diarreia aquosa persistente com febre, leucocitose ou cólicas abdominais (não utilizar antidiarréicos antiperistálticos como loperamida). Efeito bloqueador neuromuscular fraco: pode potencializar o efeito de relaxantes musculares anestésicos.',
    ajuste: 'Insuficiência renal e hepática: A clindamicina sofre extenso metabolismo hepático com meia-vida prolongada em insuficiência hepática, porém não necessita de redução de dose na disfunção renal ou hepática isolada moderada a grave. Hemodiálise e diálise peritoneal: O fármaco não é removido por hemodiálise; não são necessárias doses suplementares pós-diálise (HSL).'
  }
};

export default clindamicina;
