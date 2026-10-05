import { Farmaco } from '../../types';

export const bromoprida: Farmaco = {
  id: 'bromoprida',
  nome: 'Bromoprida',
  categoria: 'Gastrintestinal e Antieméticos',
  busca: 'bromoprida digesan digestina pangest procinetico antiemetico enjoo vomito',
  classe: 'Antiemético e Procinético (Antagonista Dopaminérgico D2 periférico/central)',
  dosePratica: 'Adulto: 10 mg VO (1 cápsula/comprimido) ou EV/IM (1 ampola de 10 mg / 2 mL) de 8/8h a 12/12h se náuseas/vômitos (máx. 60 mg/dia). Pediatria: VO 1 a 2 gotas/kg/dose até 3x/dia (máx. 30 a 60 gotas por tomada); EV/IM 0,5 a 1 mg/kg/dia dividido em 3 doses (8/8h).',
  fontes: { HSL: '07/03/2023', PSZERADO: '2025', EINA: '2024', EINP: '2024' },
  snPadrao: 'náuseas, vômitos ou plenitude pós-prandial',
  acessoFonte: 'RENAME 2024: Bromoprida 5 mg/mL solução injetável (ampola 2 mL = 10 mg) e apresentações orais em componentes da atenção básica/hospitalar. Genérico e comercial de ampla disponibilidade.',
  apresentacoes: [
    {
      id: 'cap10',
      forma: 'cp',
      nome: 'Cápsula / Comprimido 10 mg',
      comercial: 'Digesan / Genérico',
      conc: '10mg',
      rotulo: 'Bromoprida 10mg',
      mg: 10,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Ingerir cerca de 15 a 30 minutos antes das principais refeições. Engolir a cápsula/comprimido inteiro com água, sem mastigar.',
      obs: 'RENAME / Mercado. Adultos e adolescentes.'
    },
    {
      id: 'gts4',
      forma: 'gotas',
      nome: 'Solução oral / Gotas pediátricas 4 mg/mL (frasco 20 mL — 24 gotas/mL)',
      comercial: 'Digesan gotas / Genérico',
      conc: '4mg/mL',
      rotulo: 'Bromoprida 4mg/mL gotas',
      mgml: 4,
      gotasml: 24, // HSL e Bula Digesan: 24 gotas = 1 mL = 4 mg; 1 gota ~ 0,167 mg; 1 a 2 gotas/kg = ~0,17 a 0,33 mg/kg/dose
      frascoMl: 20,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      instrucao: 'Administrar cerca de 15 a 30 minutos antes das refeições ou mamadas, diretamente na boca ou diluído em uma colher com pequena quantidade de água.',
      obs: 'Atenção: gotejador calibrado onde 24 gotas equivalem a 1 mL (4 mg). 1 gota ≈ 0,17 mg de bromoprida.'
    },
    {
      id: 'amp10',
      forma: 'amp',
      nome: 'Solução injetável 5 mg/mL ampola 2 mL (10 mg)',
      comercial: 'Digesan injetável / Bromoprida',
      conc: '5mg/mL',
      rotulo: 'Bromoprida 5mg/mL ampola 2mL (10mg)',
      mg: 10,
      mgml: 5,
      volml: 2,
      vias: ['EV', 'IM'],
      disp: '1 ampola',
      acesso: { rename: true, fp: false },
      obs: 'Injeção EV direta lenta (> 3 minutos) ou diluída em 20 a 50 mL de SF 0,9% ou SG 5% infundida em 5 a 15 minutos (Einstein Adultos / HSL). IM profunda no deltoide ou glúteo.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 10,
      max: 10,
      padrao: 10,
      dosesDia: [2, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'HSL',
      trecho: 'Adulto Cápsulas: 1 cápsula (10mg), VO, de 12/12h ou 8/8h.'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 40 }] },
      vias: ['EV', 'IM'],
      tipo: 'mg',
      min: 10,
      max: 20,
      padrao: 10,
      dosesDia: [1, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'HSL',
      trecho: 'Adulto Injetável: 1 a 2 ampolas (10 a 20mg) ao dia IM/EV. No pronto-socorro (PSZerado): 1 ampola (10mg) EV a cada 8 horas.'
    },
    {
      pub: 'ped',
      se: { idadeMaxAnos: 14 },
      vias: ['VO'],
      tipo: 'mg_kg_dose',
      min: 0.17, // 1 gota/kg/dose (24 gotas = 4mg -> 1 gota = 0,167 mg)
      max: 0.33, // 2 gotas/kg/dose = 0,333 mg/kg
      padrao: 0.17,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'HSL',
      trecho: 'Pediatria Gotas pediátricas: 1 a 2 gotas/kg, VO, 3 vezes/dia (1 gota/kg ≈ 0,17 mg/kg/dose; 2 gotas/kg ≈ 0,33 mg/kg/dose). PSZerado: 1 gota/kg/dose VO a cada 8 horas (máximo habitual de 30 gotas por tomada em crianças menores).'
    },
    {
      pub: 'ped',
      se: { idadeMaxAnos: 14 },
      vias: ['EV', 'IM'],
      tipo: 'mg_kg_dia',
      min: 0.5,
      max: 1.0,
      padrao: 0.5,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'HSL',
      trecho: 'Pediatria Injetável: 0,5 a 1mg/kg/dia, IM/EV, dividido a cada 8 horas.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 60,
      fonte: 'HSL',
      trecho: 'Dose Máxima Adulto: 60mg/dia (1 a 2 ampolas de 10-20mg até 3x/dia).'
    },
    {
      pub: 'ped',
      tipo: 'mg_kg_dia',
      valor: 1.0,
      fonte: 'HSL',
      trecho: 'Dose Máxima Pediatria: 1mg/kg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em situações nas quais a estimulação da motilidade gastrointestinal seja perigosa, como hemorragia digestiva, obstrução mecânica ou perfuração gastrintestinal.',
      fonte: 'HSL',
      trecho: 'Contraindicado quando a estimulação da motilidade gastrintestinal for perigosa (hemorragia gastrintestinal, obstrução mecânica ou perfuração gastrintestinal).',
      strong: false
    },
    {
      msg: 'Contraindicado em pacientes com feocromocitoma conhecido ou suspeito (risco de crise hipertensiva grave decorrente da liberação de catecolaminas) ou epilepsia.',
      fonte: 'BULA',
      trecho: 'Contraindicado em pacientes com feocromocitoma e pacientes epilépticos.',
      strong: false
    },
    {
      msg: 'Hipersensibilidade à bromoprida, procainamida ou aos componentes da fórmula (alerta para corante tartrazina nas formas orais com risco de reações alérgicas ou broncoespasmo em alérgicos a AAS).',
      fonte: 'HSL',
      trecho: 'Cápsulas e solução oral podem conter corante amarelo de tartrazina, que pode causar reações alérgicas, especialmente em asmáticos ou alérgicos ao ácido acetilsalicílico.',
      strong: false
    },
    {
      vias: ['EV'],
      msg: 'Velocidade de injeção EV: administrar lentamente em tempo superior a 3 minutos ou em infusão de 15 minutos em 20 a 50 mL de SF/SG5%. Injeções rápidas em bolus aumentam a incidência de acatisia, agitação e sonolência transitória (HSL / Einstein).',
      fonte: 'HSL',
      trecho: 'EV: O conteúdo deve ser injetado lentamente (superior a 3min). Padrão HSL: 50mL em 15 minutos e 20mL em 5 minutos.',
      strong: false
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 5, // 10 mg em 2 mL pura = 5 mg/mL (Einstein)
    concUsualPed: 1, // Einstein Pediátrico: 1 mg/mL a 5 mg/mL
    concUsual: 0.2, // ex: 10 mg em 50 mL = 0,2 mg/mL
    volOpcoes: [20, 50, 100],
    tempo: {
      adulto: { min: 3, padrao: 15, max: 30 },
      ped: { min: 5, padrao: 15, max: 30 }
    },
    fonteTxt: 'EV Direto: injetar lentamente em tempo superior a 3 minutos (máx 5 mg/mL). Infusão intermitente: diluir a ampola em 20 a 50 mL de SF 0,9% ou SG 5% e infundir em 5 a 15 minutos (Padrão HSL / Einstein Adultos). Einstein Pediátrico: IV direto em > 1 min ou infusão em 15 minutos (conc 1 a 5 mg/mL).'
  },
  notas: {
    indicacao: 'Antiemético e procinético indicado em distúrbios da motilidade gastrointestinal, refluxo gastroesofágico, náuseas e vômitos de diversas etiologias (pós-operatórios, infecciosos, medicamentosos) e preparo para exames radiológicos do trato digestivo (HSL).',
    administracao: 'VO: Tomar 15 a 30 minutos antes das principais refeições. Injetável EV: administrar lentamente em > 3 min ou diluído em 20-50 mL de SF/SG5% por 15 min. IM: injeção profunda no deltoide ou glúteo.',
    cuidados: 'Embora possua menor incidência de efeitos extrapiramidais que a metoclopramida devido a menor passagem pela barreira hematoencefálica, ainda pode causar sonolência, fadiga, inquietação e reações extrapiramidais raras.',
    ajuste: 'Insuficiência renal: Em Clcr < 40 mL/min, iniciar o tratamento com aproximadamente 50% da dose recomendada (HSL). Insuficiência hepática: não há recomendação formal de ajuste de dose nas referências.'
  }
};

export default bromoprida;
