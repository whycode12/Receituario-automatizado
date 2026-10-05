import { Farmaco } from '../../types';

export const doxiciclina: Farmaco = {
  id: 'doxiciclina',
  nome: 'Doxiciclina (Cloridrato / Hiclato de Doxiciclina)',
  categoria: 'Antimicrobianos',
  busca: 'doxiciclina vibramicina tetraciclina clamidia uretrite lyme febre maculosa sifilis pneumonia acne rickettsia ist',
  classe: 'Antibacteriano, Derivado de Tetraciclina de amplo espectro com ação contra bactérias atípicas, Rickettsias, Chlamydia e espiroquetas',
  dosePratica: 'Adulto: VO: 100 mg a cada 12 horas por 7 dias (uretrite/cervicite por Chlamydia, Mycoplasma e pneumonia atípica; sífilis secundária/latente em alérgicos à penicilina: 100 mg 12/12h por 14 a 28 dias; febre maculosa: 100 mg 12/12h por 7 a 14 dias). Ingerir obrigatoriamente com copo cheio de água (150-200 mL), preferencialmente com refeição e NUNCA deitar-se por pelo menos 30 a 60 minutos após a tomada (risco severo de esofagite ulcerativa química). Pediatria (> 8 anos): < 45 kg: 2,2 mg/kg a cada 12 horas (máx 4,4 mg/kg/dia); > 45 kg: 100 mg a cada 12 horas (dose de adulto). Contraindicado em menores de 8 anos e gestantes (risco de pigmentação dentária amarelada/castanha e hipoplasia de esmalte definitiva, exceto febre maculosa por risco de vida).',
  fontes: { HSL: '05/03/2025', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'infecção bacteriana',
  acessoFonte: 'RENAME 2024: Comprimido 100 mg e comprimido solúvel 100 mg constam no Componente Estratégico da Assistência Farmacêutica (CESAF) do SUS para programas de IST, Febre Maculosa e Zoonoses. Farmácia Popular: Não consta.',
  apresentacoes: [
    {
      id: 'cp100',
      forma: 'cp',
      nome: 'Comprimido 100 mg (hiclato / monoidratada)',
      comercial: 'Vibramicina / Genérico',
      conc: '100mg',
      rotulo: 'Doxiciclina 100mg comprimido',
      mg: 100,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME (CESAF). Ingerir em pé ou sentado ereto com 1 copo cheio de água (200 mL), preferencialmente durante refeições leves para evitar náuseas. NÃO DEITAR nos 30 a 60 minutos seguintes (HSL / Bula).'
    },
    {
      id: 'cp100sol',
      forma: 'cp',
      nome: 'Comprimido Solúvel 100 mg',
      comercial: 'Vibramicina Solúvel',
      conc: '100mg',
      rotulo: 'Doxiciclina 100mg comprimido solúvel',
      mg: 100,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME (CESAF) e HSL. Pode ser engolido inteiro com água ou dissolvido previamente em cerca de 50 mL de água potável (beber imediatamente).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      apres: ['cp100', 'cp100sol'],
      tipo: 'mg',
      min: 100,
      max: 100,
      padrao: 100,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL: Adulto VO: 100-200mg/dia divididos em 1-2 doses (Habitual: 100mg a cada 12h por 7 dias em infecções por Chlamydia / Rickettsia / Mycoplasma; sífilis: 100mg 12/12h por 14 a 28 dias).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 8, idadeMaxAnos: 11, pesoMax: 45 },
      vias: ['VO'],
      apres: ['cp100sol'],
      tipo: 'mg_kg_dia',
      min: 2.2,
      max: 4.4,
      padrao: 4.4,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL: Pediatria (> 8 anos) VO < 45kg: 2,2mg/kg a 4,4mg/kg/dia divididos em 2 doses (a cada 12 horas).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 8, idadeMaxAnos: 11, pesoMin: 45 },
      vias: ['VO'],
      apres: ['cp100', 'cp100sol'],
      tipo: 'mg',
      min: 100,
      max: 100,
      padrao: 100,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL: Pediatria (> 8 anos) VO > 45kg: 200mg/dia divididos em 2 doses (100mg a cada 12h, dose padrão de adulto).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 300,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima diária em adultos: 300 mg/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 8, idadeMaxAnos: 11, pesoMax: 45 },
      vias: ['VO'],
      tipo: 'mg_kg_dia',
      valor: 4.4,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima diária pediatria < 45kg: 4,4 mg/kg/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 8, idadeMaxAnos: 11, pesoMin: 45 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 300,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima diária pediatria > 45kg: 300 mg/dia.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 7 },
      vias: ['VO'],
      msg: 'Contraindicado em crianças menores de 8 anos devido ao risco de descoloração e manchas amareladas/acastanhadas permanentes dos dentes e hipoplasia do esmalte dentário durante o desenvolvimento (exceção vital: Febre Maculosa Brasileira).',
      fonte: 'BULA',
      trecho: 'Bula Vibramicina / MS: Contraindicado para crianças menores de 8 anos de idade devido à pigmentação dentária irreversível, exceto na febre maculosa por risco iminente de óbito.',
      strong: true
    },
    {
      msg: 'Contraindicado em gestantes e lactantes (atravessa a barreira placentária, inibe o crescimento ósseo fetal e causa manchas definitivas nos dentes fetais).',
      fonte: 'BULA',
      trecho: 'Bula Vibramicina: O uso de tetraciclinas durante a gravidez não é recomendado.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade comprovada à doxiciclina ou a qualquer antibiótico do grupo das tetraciclinas.',
      fonte: 'BULA',
      trecho: 'Bula Vibramicina: Hipersensibilidade a qualquer tetraciclina.'
    }
  ],
  notas: {
    indicacao: 'Tratamento de infecções causadas por bactérias intracelulares e atípicas: infecções urogenitais por Chlamydia trachomatis (uretrite, endocervicite, linfogranuloma venéreo), doença inflamatória pélvica (associada a ceftriaxona/metronidazol), febre maculosa brasileira (Rickettsia rickettsii - droga de escolha em todas as idades), pneumonia atípica (Mycoplasma pneumoniae, Chlamydia pneumoniae), sífilis primária/secundária/latente precoce em alérgicos a penicilinas, acne vulgar inflamatória moderada a grave, doença de Lyme (Borrelia burgdorferi), brucelose e leptospirose (profilaxia e tratamento) (HSL / Bula / MS PCDT).',
    administracao: 'VO: Tomar sempre com 1 copo cheio de água (150 a 200 mL), preferencialmente em posição ereta (em pé ou sentado). NUNCA DEITAR nos 30 a 60 minutos seguintes para evitar retenção esofágica e ulceração química esofágica grave. O comprimido solúvel pode ser dissolvido em 50 mL de água. A administração com alimentos diminui o desconforto gastrointestinal sem reduzir de forma clinicamente relevante sua absorção (ao contrário de outras tetraciclinas antigas).',
    cuidados: 'INTERAÇÃO COM CÁTIONS POLIVALENTES: Evitar uso concomitante com antiácidos contendo alumínio, magnésio ou cálcio, e suplementos de ferro ou zinco (formação de quelatos insolúveis inabsorvíveis; respeitar intervalo mínimo de 2 a 3 horas antes ou depois). INTERAÇÃO COM PENICILINAS: Como antibiótico bacteriostático, pode antagonizar a ação bactericida das penicilinas (evitar coadministração). FOTOSSENSIBILIDADE: Pode provocar queimaduras solares intensas sob luz solar ou ultravioleta; orientar fotoproteção durante o tratamento.',
    ajuste: 'Insuficiência renal: A excreção é predominantemente fecal e biliar; não necessita de redução de dose em insuficiência renal, mesmo em estágios avançados (HSL). Hemodiálise: Pouco dialisável; não necessita de dose suplementar após a diálise (HSL). Insuficiência hepática: Não requer ajuste posológico rotineiro; monitorar em hepatopatia avançada com uso concomitante de outros hepatotóxicos.'
  }
};

export default doxiciclina;
