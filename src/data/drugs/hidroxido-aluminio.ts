import { Farmaco } from '../../types';

export const hidroxidoAluminio: Farmaco = {
  id: 'hidroxido_aluminio',
  nome: 'Hidróxido de Alumínio',
  categoria: 'Gastrintestinal e Antieméticos',
  busca: 'hidroxido de aluminio antiacido azia pirose queimação gastrite hiperfosfatenia',
  classe: 'Antiácido Gástrico e Quelante de Fosfato (Composto Inorgânico de Alumínio)',
  dosePratica: 'Antiácido: Adultos: VO 5 a 10 mL da suspensão oral (ou 1 a 2 colheres de sobremesa / 1 a 2 comprimidos mastigáveis de 230 mg) cerca de 1 hora após as principais refeições e ao deitar (ou nos episódios de azia e queimação; máx. 60 a 80 mL/dia). Pediatria: 2,5 a 5 mL VO até 3 a 4x/dia. Respeitar intervalo mínimo de 2 horas entre o antiácido e outros medicamentos orais.',
  fontes: { HSL: '07/03/2023', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'azia, queimação epigástrica, dor de estômago ou pirose',
  acessoFonte: 'RENAME 2024: Hidróxido de alumínio suspensão oral 60 mg/mL ou 61,5 mg/mL (frasco 150 mL ou 240 mL) e comprimido mastigável 230 mg no Componente Básico da Atenção Primária à Saúde.',
  apresentacoes: [
    {
      id: 'susp61_5',
      forma: 'sol',
      nome: 'Suspensão oral 61,5 mg/mL (frasco 240 mL)',
      comercial: 'Hidróxido de Alumínio / Pepsamar',
      conc: '61,5mg/mL',
      rotulo: 'Hidróxido de alumínio 61,5mg/mL suspensão oral',
      mgml: 61.5,
      frascoMl: 240,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      instrucao: 'Agitar energicamente o frasco antes de usar. Tomar a dose pura ou misturada em meio copo de água, cerca de 1 hora após as refeições e ao deitar, ou nos momentos de dor e azia. Importante: respeitar intervalo de 2 horas antes ou depois de tomar outros medicamentos.',
      obs: 'RENAME (Componente Básico). Padrão HSL (61,5 mg/mL). 5 a 10 mL fornecem cerca de 300 a 600 mg de hidróxido de alumínio.'
    },
    {
      id: 'cp230',
      forma: 'cp',
      nome: 'Comprimido mastigável 230 mg',
      comercial: 'Hidróxido de Alumínio / Pepsamar cp',
      conc: '230mg',
      rotulo: 'Hidróxido de alumínio 230mg comprimido mastigável',
      mg: 230,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Mastigar completamente o comprimido antes de engolir; pode-se beber um pouco de água em seguida. Administrar cerca de 1 hora após as refeições e ao deitar, ou se azia/dor.',
      obs: 'RENAME / PSZerado: comprimido mastigável de rápida ação neutralizante tópica gástrica.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      apres: ['susp61_5'],
      tipo: 'mg',
      min: 307.5, // 5 mL * 61,5 mg/mL ≈ 308 mg
      max: 615,   // 10 mL * 61,5 mg/mL = 615 mg
      padrao: 615, // 10 mL (1 colher de sobremesa)
      dosesDia: [3, 4],
      dosesPadrao: 4,
      intervaloFixo: 6,
      fonte: 'HSL',
      trecho: 'Adultos e adolescentes > 12 anos: 5 a 10 mL (1 a 2 colheres de chá/sobremesa), VO, 3 a 4 vezes ao dia, administrados 1 hora após as refeições e ao deitar.'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      apres: ['cp230'],
      tipo: 'mg',
      min: 230,
      max: 460,
      padrao: 460, // 2 comprimidos = 460 mg
      dosesDia: [3, 4],
      dosesPadrao: 4,
      intervaloFixo: 6,
      fonte: 'PSZERADO',
      trecho: 'Adultos (PSZerado): 230 a 460 mg (1 a 2 comprimidos mastigáveis) VO cerca de 1 hora após as refeições e ao deitar, ou se azia/queimação.'
    },
    {
      pub: 'ped',
      se: { idadeMaxAnos: 12 },
      vias: ['VO'],
      apres: ['susp61_5'],
      tipo: 'mg',
      min: 153.75, // 2,5 mL
      max: 307.5,  // 5 mL
      padrao: 153.75, // 2,5 mL
      dosesDia: [3, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'HSL',
      trecho: 'Pediatria até 12 anos: 2,5 a 5 mL (1 colher de café ou chá), VO, 3 a 4 vezes/dia, 1 hora após refeições.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 3690, // equivalente a 60 mL/dia da suspensão 61,5 mg/mL
      fonte: 'HSL',
      trecho: 'Dose Máxima Adulto: não ultrapassar 60 mL/dia (aproximadamente 3.700 mg/dia) de hidróxido de alumínio nem uso contínuo em dose máxima por mais de 2 semanas.'
    }
  ],
  contra: [
    {
      msg: 'CONTRAINDICAÇÃO GRAVE: Insuficiência renal grave (Clcr < 30 mL/min) ou pacientes em diálise (risco de acúmulo sistêmico crônico de alumínio, levando a osteomalácia/osteodistrofia, fraturas ósseas espontâneas e encefalopatia por alumínio / demência dialítica).',
      fonte: 'HSL',
      trecho: 'Contraindicado em insuficiência renal severa devido ao risco de intoxicação e acúmulo sistêmico de alumínio.',
      strong: false
    },
    {
      msg: 'Contraindicado em pacientes com hipofosfatemia prévia (o alumínio liga-se irreversivelmente ao fosfato no lúmen intestinal, impedindo sua absorção e agravando a carência de fósforo corporal).',
      fonte: 'BULA',
      trecho: 'Contraindicado em estados de hipofosfatemia severa.',
      strong: false
    },
    {
      msg: 'Contraindicado em suspeita de apendicite, obstrução intestinal mecânica ou perfuração gastrintestinal.',
      fonte: 'BULA',
      trecho: 'Contraindicado em casos de abdome agudo, perfuração ou obstrução intestinal.',
      strong: false
    },
    {
      msg: 'QUELAÇÃO E REDUÇÃO DA ABSORÇÃO MEDICAMENTOSA: O hidróxido de alumínio quela e inibe drasticamente a absorção oral de múltiplos fármacos críticos, incluindo fluoroquinolonas (ciprofloxacino, levofloxacino), tetraciclinas (doxiciclina), sulfato ferroso, levotiroxina, digoxina e corticosteroides. OBRIGATÓRIO manter intervalo de no mínimo 2 a 3 horas entre as administrações.',
      fonte: 'HSL',
      trecho: 'Pode ocorrer redução acentuada da absorção de outros medicamentos. Respeitar intervalo estrito de 2 a 3 horas.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Alívio sintomático da hiperacidez gástrica associada a pirose (azia), esofagite de refluxo, gastrite aguda/crônica, úlcera péptica e hiperfosfatemia na doença renal crônica sob estrito controle nefrológico (HSL / PSZerado).',
    administracao: 'VO: Tomar 1 hora após as refeições e antes de dormir (horário em que a acidez de rebote fisiológica atinge pico). Agitar muito bem a suspensão. Mastigar os comprimidos antes de deglutir.',
    cuidados: 'Efeito adverso característico: obstipação intestinal (constipação) provocada pelo alumínio, que reduz a motilidade entérica e endurece as fezes. Frequentemente associado ao hidróxido de magnésio para equilibrar o trânsito intestinal.',
    ajuste: 'Insuficiência renal grave: contraindicado pelo risco de toxicidade por alumínio (neurotoxicidade e anemia microcítica refratária). Insuficiência hepática: não requer ajuste de dose.'
  }
};

export default hidroxidoAluminio;
