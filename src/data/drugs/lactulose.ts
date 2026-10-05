import { Farmaco } from '../../types';

export const lactulose: Farmaco = {
  id: 'lactulose',
  nome: 'Lactulose',
  categoria: 'Gastrintestinal e Antieméticos',
  busca: 'lactulose lactulona faldini colact constipacao laxante encefalopatia hepatica amonia',
  classe: 'Laxativo Osmótico e Agente Redutor de Amônia (Dissacarídeo Sintético não absorvível)',
  dosePratica: 'Constipação: Adultos: 15 a 30 mL/dia em dose única (manhã ou noite) ou dividida em 2 tomadas (máx. 60 mL/dia). Pediatria: 1 a 5 anos: 5 a 10 mL/dia; 6 a 12 anos: 10 a 15 mL/dia (ajustar para 2 a 3 evacuações pastosas/dia). Encefalopatia hepática: Iniciar com 20 a 40 mL a cada 8 ou 12 horas (ajustar para 2 a 4 evacuações ao dia; casos agudos: até 60-150 mL/dia).',
  fontes: { HSL: '07/03/2023', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'constipação intestinal ou sinais de encefalopatia',
  acessoFonte: 'RENAME 2024: Lactulose xarope / solução oral 667 mg/mL no Componente Básico da Atenção Primária. Ampla disponibilidade em farmácias comerciais sob a marca de referência Lactulona e genéricos.',
  apresentacoes: [
    {
      id: 'xpe667',
      forma: 'sol',
      nome: 'Xarope / Solução oral 667 mg/mL (frasco 120 mL)',
      comercial: 'Lactulona / Genérico',
      conc: '667mg/mL',
      rotulo: 'Lactulose 667mg/mL xarope (solução oral)',
      mgml: 667,
      frascoMl: 120,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      instrucao: 'Administrar preferencialmente em dose única pela manhã ou à noite, ou dividido ao longo do dia. Pode ser ingerido puro ou misturado a líquidos como água, suco de frutas, leite ou iogurte. Ajustar para obter fezes moldadas e pastosas sem diarreia.',
      obs: 'RENAME (Componente Básico). Concentração padrão: 667 mg de lactulose por mL (ou seja, 10 g de lactulose a cada 15 mL). Acompanha copo dosador.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 10005, // 15 mL * 667 mg/mL ≈ 10.005 mg (10 g)
      max: 20010, // 30 mL * 667 mg/mL ≈ 20.010 mg (20 g)
      padrao: 10005, // 15 mL
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      fonte: 'HSL',
      trecho: 'Adulto Constipação crônica: 15 a 30 mL/dia (10 a 20 g/dia) em dose única pela manhã ou à noite (máx. 60 mL/dia se refratário).'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 13340, // 20 mL * 667 mg/mL ≈ 13.340 mg
      max: 26680, // 40 mL * 667 mg/mL ≈ 26.680 mg
      padrao: 13340, // 20 mL
      dosesDia: [2, 3],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'PSZERADO',
      trecho: 'Encefalopatia hepática / Cirrose: 20 a 40 mL a cada 8 ou 12 horas (iniciar com 20-40 mL 12/12h e titular dose para atingir meta de 2 a 3 evacuações pastosas/dia sem diarreia intensa).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 6, idadeMaxAnos: 12 },
      vias: ['VO'],
      tipo: 'mg',
      min: 6670, // 10 mL
      max: 10005, // 15 mL
      padrao: 6670, // 10 mL
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      fonte: 'HSL',
      trecho: 'Pediatria de 6 a 12 anos: 10 a 15 mL/dia (cerca de 6,7 a 10 g/dia), VO, 1 vez ao dia. Ajustar dose para 2 a 3 evacuações pastosas ao dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 1, idadeMaxAnos: 5 },
      vias: ['VO'],
      tipo: 'mg',
      min: 3335, // 5 mL
      max: 6670, // 10 mL
      padrao: 3335, // 5 mL
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      fonte: 'HSL',
      trecho: 'Pediatria de 1 a 5 anos: 5 a 10 mL/dia (cerca de 3,3 a 6,7 g/dia), VO, 1 vez ao dia.'
    },
    {
      pub: 'ped',
      se: { idadeMaxMeses: 12 },
      vias: ['VO'],
      tipo: 'mg',
      min: 1667, // 2,5 mL
      max: 3335, // 5 mL
      padrao: 3335, // 5 mL
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      fonte: 'BULA',
      trecho: 'Lactentes até 1 ano: 2,5 a 5 mL/dia (1,7 a 3,3 g/dia), VO, 1 vez ao dia sob acompanhamento pediátrico.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 40020, // 60 mL/dia de xarope = ~40 g de lactulose pura
      fonte: 'HSL',
      trecho: 'Dose máxima nos casos de constipação: até 60 mL/dia (40 g de lactulose pura). Em encefalopatia hepática aguda grave hospitalar, a dose pode ser titulada até 100-150 mL/dia em UTI.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com galactosemia congênita ou intolerância hereditária à galactose.',
      fonte: 'HSL',
      trecho: 'Contraindicado em pessoas com hipersensibilidade à lactulose ou intolerância à galactose.',
      strong: false
    },
    {
      msg: 'Contraindicado em pacientes com obstrução intestinal mecânica, estenose do trato digestivo, apendicite ou perfuração gastrintestinal conhecida/suspeita.',
      fonte: 'BULA',
      trecho: 'Contraindicado em casos de obstrução intestinal, perfuração ou risco de perfuração do trato digestivo.',
      strong: false
    },
    {
      msg: 'Atenção em pacientes diabéticos: o xarope contém pequenas frações de galactose e lactose livres provenientes da síntese química.',
      fonte: 'HSL',
      trecho: 'Deve-se atentar a administração para pacientes diabéticos, pois o medicamento contém galactose e lactose.',
      strong: false
    },
    {
      msg: 'Crianças e idosos: o uso prolongado e excessivo pode acarretar diarreia osmótica, desidratação e distúrbios hidroeletrolíticos (hiponatremia e hipocalemia). Titular rigorosamente a dose.',
      fonte: 'HSL',
      trecho: 'O uso em crianças e idosos pode ocasionar desidratação e hiponatremia decorrentes de diarreia excessiva.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Tratamento da constipação intestinal crônica funcional, amolecimento das fezes em condições que exigem evacuação sem esforço (hemorroidas, fissura anal, pós-operatório anorretal) e prevenção/tratamento da encefalopatia hepática (HSL / PSZerado).',
    administracao: 'VO: Tomar preferencialmente em dose única pela manhã (com o desjejum) ou à noite, puro ou misturado com água, leite ou suco de frutas. O efeito laxativo osmótico pleno costuma iniciar-se entre 24 e 48 horas após a primeira dose.',
    cuidados: 'Mecanismo duplo: no cólon distal, a microbiota fermenta a lactulose em ácidos orgânicos de cadeia curta (lático, acético), reduzindo o pH colônico, promovendo conversão da amônia difusível ($NH_3$) em íons amônio não absorvíveis ($NH_4^+$) e exercendo efeito laxativo osmótico.',
    ajuste: 'Insuficiência renal e hepática: não requer redução da dose (a lactulose não é absorvida sistemicamente; pelo contrário, é a medicação de escolha no paciente cirrótico com insuficiência hepática).'
  }
};

export default lactulose;
