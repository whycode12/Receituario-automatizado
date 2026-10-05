import { Farmaco } from '../../types';

export const hidroxidoMagnesio: Farmaco = {
  id: 'hidroxido_magnesio',
  nome: 'Hidróxido de Magnésio',
  categoria: 'Gastrintestinal e Antieméticos',
  busca: 'hidroxido de magnesio leite de magnesia phillips antiacido laxante constipacao azia pirose',
  classe: 'Antiácido e Laxativo Osmótico (Composto Inorgânico de Magnésio)',
  dosePratica: 'Antiácido: Adultos: 5 a 15 mL (1 colher de chá a 1 colher de sopa = ~427 a 1.283 mg) até 3 a 4x/dia se azia ou má digestão (máx. 45 mL/dia por até 14 dias). Laxante (constipação ocasional): Adultos: 30 a 60 mL (2 a 4 colheres de sopa) em dose única ao deitar ou pela manhã (máx. 3 dias consecutivos). Pediatria (2 a 11 anos): Antiácido: 5 mL conforme necessário (máx. 30 mL/dia); Laxante: 2 a 5 anos: 5 a 15 mL/dia; 6 a 11 anos: 15 a 30 mL/dia. Respeitar intervalo de 2 horas de outros fármacos orais.',
  fontes: { HSL: '07/03/2023', BULA: '04/10/2026' },
  snPadrao: 'azia, queimação gástrica ou constipação intestinal',
  acessoFonte: 'Medicamento isento de prescrição (MIP) e amplamente disponível em farmácias e unidades básicas sob a denominação Leite de Magnésia de Phillips e genéricos.',
  apresentacoes: [
    {
      id: 'susp85_5',
      forma: 'sol',
      nome: 'Suspensão oral 85,5 mg/mL — Leite de Magnésia (1.282,5 mg / 15 mL)',
      comercial: 'Leite de Magnésia de Phillips / Genérico',
      conc: '85,5mg/mL',
      rotulo: 'Hidróxido de magnésio 85,5mg/mL (Leite de Magnésia)',
      mgml: 85.5, // 1.282,5 mg / 15 mL = 85,5 mg/mL
      frascoMl: 120,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: false, fp: false },
      instrucao: 'Agitar bem antes de usar. Tomar a dose pura ou misturada em um copo com água. Como antiácido: tomar de preferência 1 hora após as refeições e ao deitar, ou se azia. Como laxante: tomar preferencialmente ao deitar ou em jejum acompanhado de 1 copo cheio de água. Importante: respeitar intervalo mínimo de 2 horas antes ou depois de tomar outros medicamentos.',
      obs: '1 colher de chá = 5 mL (~428 mg de hidróxido de magnésio). 1 colher de sopa = 15 mL (~1.283 mg de hidróxido de magnésio).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 427.5,  // 5 mL * 85,5 mg/mL ≈ 428 mg (1 colher de chá)
      max: 1282.5, // 15 mL * 85,5 mg/mL ≈ 1.283 mg (1 colher de sopa)
      padrao: 855, // 10 mL (1 colher de sobremesa)
      dosesDia: [1, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'HSL',
      trecho: 'Adultos e maiores de 12 anos (Antiácido): 5 a 15 mL (1 colher de chá a 1 colher de sopa), VO, conforme necessário até 3 a 4 vezes ao dia (máx. 45 mL/dia por até 14 dias consecutivos).'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 2565, // 30 mL (2 colheres de sopa)
      max: 5130, // 60 mL (4 colheres de sopa)
      padrao: 2565, // 30 mL
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 3,
      fonte: 'HSL',
      trecho: 'Adultos e maiores de 12 anos (Laxante para constipação ocasional): 30 a 60 mL (2 a 4 colheres de sopa), VO, 1 vez ao dia (preferencialmente ao deitar), acompanhado de ingestão de água. Duração máxima de 3 dias.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 2, idadeMaxAnos: 11 },
      vias: ['VO'],
      tipo: 'mg',
      min: 427.5, // 5 mL (1 colher de chá)
      max: 427.5,
      padrao: 427.5,
      dosesDia: [1, 4],
      dosesPadrao: 2,
      intervaloFixo: 8,
      fonte: 'HSL',
      trecho: 'Pediatria de 2 a 11 anos (Antiácido): 5 mL (1 colher de chá), VO, conforme necessário (máx. 30 mL/dia).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 6, idadeMaxAnos: 11 },
      vias: ['VO'],
      tipo: 'mg',
      min: 1282.5, // 15 mL (1 colher de sopa)
      max: 2565,   // 30 mL (2 colheres de sopa)
      padrao: 1282.5, // 15 mL
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 3,
      fonte: 'HSL',
      trecho: 'Pediatria de 6 a 11 anos (Laxante): 15 a 30 mL (1 a 2 colheres de sopa), VO, 1 vez ao dia por até 3 dias.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 2, idadeMaxAnos: 5 },
      vias: ['VO'],
      tipo: 'mg',
      min: 427.5,  // 5 mL (1 colher de chá)
      max: 1282.5, // 15 mL (1 colher de sopa)
      padrao: 427.5, // 5 mL
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 3,
      fonte: 'HSL',
      trecho: 'Pediatria de 2 a 5 anos (Laxante): 5 a 15 mL (1 colher de chá a 1 colher de sopa), VO, 1 vez ao dia por até 3 dias.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 3847.5, // 45 mL/dia como antiácido
      fonte: 'HSL',
      trecho: 'Dose máxima Adulto (Antiácido): 45 mL/24 horas (cerca de 3.848 mg/dia). Como laxante, dose única de até 60 mL por no máximo 3 dias.'
    },
    {
      pub: 'ped',
      tipo: 'mg_dia',
      valor: 2565, // 30 mL/dia
      fonte: 'HSL',
      trecho: 'Dose máxima Pediatria de 2 a 11 anos: 30 mL/24 horas (2 colheres de sopa ou 6 colheres de chá).'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 24 },
      msg: 'CONTRAINDICADO em crianças menores de 2 anos de idade (risco elevado de hipermagnesemia grave e distúrbios hidroeletrolíticos agudos).',
      fonte: 'HSL',
      trecho: 'Contraindicado para menores de 2 anos.',
      strong: true
    },
    {
      msg: 'CONTRAINDICAÇÃO GRAVE: Insuficiência renal moderada a grave (Clcr < 30 mL/min) (o rim é a única via de excreção do magnésio absorvido; risco iminente de HIPERMAGNESEMIA com hipotensão grave, arritmias cardíacas, parada cardiorrespiratória e hiporreflexia tendínea).',
      fonte: 'HSL',
      trecho: 'Contraindicado em pacientes com disfunção renal severa devido ao risco de intoxicação por hipermagnesemia.',
      strong: false
    },
    {
      msg: 'Contraindicado em pacientes com apendicite suspeita, dor abdominal aguda de causa indeterminada (abdome agudo), obstrução ou perfuração gastrintestinal mecânica.',
      fonte: 'BULA',
      trecho: 'Contraindicado em abdome agudo, apendicite e obstrução intestinal.',
      strong: false
    },
    {
      msg: 'QUELAÇÃO E ALTERAÇÃO DO pH GÁSTRICO: O hidróxido de magnésio alcaliniza o suco gástrico e forma quelatos insolúveis com fluoroquinolonas, tetraciclinas, ferro oral e levotiroxina. Respeitar intervalo mínimo de 2 a 3 horas antes ou depois de administrar outros fármacos.',
      fonte: 'HSL',
      trecho: 'Pode interferir na absorção de outros medicamentos. Respeitar intervalo de 2 a 3 horas.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Antiácido para alívio rápido de pirose (azia), desconforto epigástrico, hiperacidez e dispepsia; Laxante osmótico salino para alívio a curto prazo da constipação intestinal ocasional (HSL).',
    administracao: 'VO: Agitar vigorosamente antes de dosar. Como antiácido: usar 1 hora após refeições ou se azia. Como laxante: tomar ao deitar ou em jejum matinal acompanhado de um copo de água (induz evacuação aquosa rápida em 30 minutos a 6 horas).',
    cuidados: 'Efeito adverso intestinal oposto ao do hidróxido de alumínio: o magnésio atrai água osmoticamente para o lúmen cólico, podendo provocar diarreia e cólicas abdominais. Limitar o uso como antiácido a 14 dias e como laxante a 3 dias consecutivos.',
    ajuste: 'Insuficiência renal grave: contraindicado pelo risco de hipermagnesemia letal. Insuficiência hepática: não requer ajuste de dose.'
  }
};

export default hidroxidoMagnesio;
