/**
 * MEDICAMENTO: Levotiroxina Sódica
 * CLASSE: Hormônio Tireoidiano Sintético (T4) / Reposição Hormonal
 * FONTES:
 *   - HSL: Guia Farmacêutico Hospital Sírio-Libanês (Levotiroxina - Puran T4 / Synthroid)
 *   - SBEM: Diretrizes do Departamento de Tireoide da Sociedade Brasileira de Endocrinologia e Metabologia
 *   - Ministério da Saúde / RENAME / Farmácia Popular: Medicamento 100% gratuito de 1ª linha
 *   - Bulário ANVISA: Puran T4 / Synthroid / Genérico
 */

import { Farmaco } from '../../types';

export const levotiroxina: Farmaco = {
  id: 'levotiroxina',
  nome: 'Levotiroxina Sódica',
  categoria: 'Endocrinologia e Hormônios Tireoidianos',
  busca: 'levotiroxina levotiroxina sodica puran t4 synthroid euthyrox t4 levoid hormonio da tireoide tireoide hipotireoidismo tsh tsh alto',
  classe: 'Hormônio Sintético da Tireoide (T4 Exógeno com Conversão Periférica a T3)',
  dosePratica: '1. Hipotireoidismo Primário em Adultos Jovens (SBEM / HSL): Iniciar com 50 mcg a 100 mcg VO 1 vez ao dia pela manhã em jejum rigoroso (dose de substituição plena ~1,6 mcg/kg/dia; titular a cada 6 a 8 semanas conforme dosagem de TSH). 2. Idosos ou Cardiopatas: Iniciar com dose baixa de 12,5 mcg a 25 mcg VO 1 vez ao dia e aumentar de 12,5 a 25 mcg a cada 4 a 8 semanas. 3. Hipotireoidismo Congênito / Pediatria: 10 a 15 mcg/kg/dia nos primeiros meses de vida.',
  fontes: { HSL: '14/02/2017', MS: '2023', BULA: '04/10/2026' },
  snPadrao: 'tomada matinal contínua em jejum rigoroso para reposição hormonal da tireoide',
  acessoFonte: 'RENAME / Programa Farmácia Popular do Brasil: Comprimidos de 25 mcg, 50 mcg e 100 mcg distribuídos gratuitamente em farmácias conveniadas e UBS.',
  apresentacoes: [
    {
      id: 'cp_25mcg',
      forma: 'cp',
      nome: 'Comprimido 25 mcg',
      comercial: 'Puran T4 / Synthroid / Euthyrox / Genérico',
      conc: '25 mcg (0,025 mg)',
      rotulo: 'Levotiroxina Sódica 25 mcg comprimido',
      mg: 0.025,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 a 2 caixas (30 comprimidos)',
      acesso: { rename: true, fp: true },
      instrucao: 'Como tomar o hormônio da tireoide (levotiroxina) corretamente:\n1. JEJUM ABSOLUTO OBRIGATÓRIO: Tome o comprimido logo ao acordar, em jejum rigoroso, com um copo cheio de água pura. Aguarde de 30 a 60 minutos para tomar o café da manhã. A presença de leite, café, pão ou suco no estômago reduz drasticamente a absorção do medicamento.\n2. DISTÂNCIA DE OUTROS MEDICAMENTOS: Remédios como sulfato ferroso (ferro), carbonato de cálcio, antiácidos, omeprazol ou polivitamínicos grudam na levotiroxina e cortam seu efeito. Tome esses outros remédios pelo menos 4 HORAS DEPOIS da levotiroxina (ex: no almoço ou à tarde).\n3. NÃO INTERROMPA: Este remédio substitui o hormônio natural que a sua tireoide deixou de produzir. É um tratamento contínuo para a vida toda.\n4. EXAMES DE SANGUE: O médico solicitará exames de sangue periódicos (TSH e T4 Livre) a cada 2 a 3 meses para verificar se a dose está sob medida para o seu corpo.',
      obs: 'RENAME / Farmácia Popular. Apresentação ideal para início em idosos, cardiopatas ou pequenos ajustes de dose.'
    },
    {
      id: 'cp_50mcg',
      forma: 'cp',
      nome: 'Comprimido 50 mcg',
      comercial: 'Puran T4 / Synthroid / Euthyrox / Genérico',
      conc: '50 mcg (0,05 mg)',
      rotulo: 'Levotiroxina Sódica 50 mcg comprimido',
      mg: 0.05,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 a 2 caixas (30 comprimidos)',
      acesso: { rename: true, fp: true },
      instrucao: 'Como tomar o hormônio da tireoide (levotiroxina) corretamente:\n1. TOME EM JEJUM: Tome 1 comprimido pela manhã logo ao acordar, com água, pelo menos 30 a 60 minutos antes do café da manhã.\n2. CUIDADO COM ALIMENTOS: Café, leite, queijo e fibras diminuem a absorção do remédio se consumidos logo em seguida.\n3. SEPARAR DE FERRO E CÁLCIO: Aguarde 4 horas para tomar suplementos de cálcio ou ferro.\n4. USO CONTÍNUO: Mantenha o uso diário sem interrupções.',
      obs: 'RENAME / Farmácia Popular. Dose inicial padrão mais frequente em adultos jovens com hipotireoidismo.'
    },
    {
      id: 'cp_75mcg',
      forma: 'cp',
      nome: 'Comprimido 75 mcg',
      comercial: 'Puran T4 / Synthroid / Euthyrox / Genérico',
      conc: '75 mcg (0,075 mg)',
      rotulo: 'Levotiroxina Sódica 75 mcg comprimido',
      mg: 0.075,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 a 2 caixas (30 comprimidos)',
      acesso: { rename: false, fp: false },
      instrucao: 'Como tomar a levotiroxina:\n1. TOME EM JEJUM RIGOROSO: Tomar ao acordar com água pura, aguardando 30 a 60 minutos para a primeira refeição.\n2. INTERVALO DE 4 HORAS para polivitamínicos, ferro ou cálcio.\n3. USO DIÁRIO CONTÍNUO.',
      obs: 'Apresentação intermediária frequente na titulação ambulatorial do hipotireoidismo.'
    },
    {
      id: 'cp_100mcg',
      forma: 'cp',
      nome: 'Comprimido 100 mcg',
      comercial: 'Puran T4 / Synthroid / Euthyrox / Genérico',
      conc: '100 mcg (0,1 mg)',
      rotulo: 'Levotiroxina Sódica 100 mcg comprimido',
      mg: 0.1,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 a 2 caixas (30 comprimidos)',
      acesso: { rename: true, fp: true },
      instrucao: 'Como tomar a levotiroxina:\n1. TOME EM JEJUM RIGOROSO: Tomar 1 comprimido pela manhã ao acordar com água, esperando 30 a 60 minutos antes de se alimentar.\n2. NUNCA TOME COM CAFÉ OU LEITE: Apenas água pura no momento da tomada.\n3. INTERVALO DE 4 HORAS para suplementos de ferro, cálcio ou antiácidos.\n4. NÃO INTERROMPA O TRATAMENTO.',
      obs: 'RENAME / Farmácia Popular. Dose média de reposição plena em adultos de 60 a 70 kg.'
    }
  ],
  regras: [
    // 1. Adultos - Hipotireoidismo Primário (12,5 mcg a 200 mcg/dia = 0,0125 mg a 0,2 mg)
    {
      pub: 'adulto',
      vias: ['VO'],
      apres: ['cp_25mcg', 'cp_50mcg', 'cp_75mcg', 'cp_100mcg'],
      tipo: 'mg',
      min: 0.0125,
      max: 0.2,
      padrao: 0.05,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 180,
      fonte: 'HSL / SBEM / BULA',
      trecho: 'HSL: Hipotireoidismo: Dose inicial de 50 mcg/dia VO, aumentando 25 mcg a cada 2-3 semanas até manutenção (75 a 125 mcg/dia). Idosos/cardiopatas: iniciar com 12,5 a 25 mcg/dia.'
    },
    // 2. Pediatria - Hipotireoidismo Congênito / Adquirido (SBP / SBEM / HSL)
    {
      pub: 'ped',
      vias: ['VO'],
      apres: ['cp_25mcg', 'cp_50mcg'],
      tipo: 'mg_kg_dia',
      min: 0.002, // 2 mcg/kg/dia
      max: 0.015, // 15 mcg/kg/dia
      padrao: 0.005, // 5 mcg/kg/dia
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 180,
      fonte: 'HSL / SBEM',
      trecho: 'HSL: Pediatria: 1-3 meses: 10-15 mcg/kg/dia; 3-6 meses: 8-10 mcg/kg/dia; 6-12 meses: 6-8 mcg/kg/dia; 1-5 anos: 5-6 mcg/kg/dia; 6-12 anos: 4-5 mcg/kg/dia; > 12 anos: 2-3 mcg/kg/dia VO.'
    }
  ],
  contra: [
    {
      vias: ['VO'],
      msg: 'Contraindicado em tireotoxicose / hipertireoidismo não tratado de qualquer etiologia.',
      fonte: 'HSL / SBEM / BULA',
      trecho: 'Contraindicado em tireotoxicose não tratada.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'Contraindicado em insuficiência adrenal primária (córtex da adrenal) não tratada (o início de reposição tireoidiana acelera a depuração de cortisol e pode precipitar crise adrenal aguda potencialmente fatal).',
      fonte: 'HSL / SBEM',
      trecho: 'Insuficiência adrenal não tratada.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'Contraindicado em infarto agudo do miocárdio recente não compensado, miocardite aguda ou pancardite aguda.',
      fonte: 'HSL / BULA',
      trecho: 'IAM recente não compensado e miocardite aguda.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'ALERTA DE ABSORÇÃO E INTERAÇÕES: Carbonato de cálcio, sulfato ferroso, hidróxido de alumínio, colestiramina e sucralfato quelam a levotiroxina no trato digestivo. Administrar com intervalo mínimo de 4 horas.',
      fonte: 'HSL / SBEM',
      trecho: 'Interações com ferro, cálcio e antiácidos reduzem significativamente a absorção oral.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Terapia de reposição no hipotireoidismo primário congênito ou adquirido, pós-tireoidectomia ou ablação com radioiodo; supressão de TSH em neoplasias diferenciadas da tireoide.',
    administracao: 'VO: Administrar pela manhã, em jejum absoluto rigoroso, com água pura, pelo menos 30 a 60 minutos antes do café da manhã (ou no mínimo 2 a 3 horas após a última refeição noturna se administrado ao deitar). Os comprimidos podem ser triturados e dissolvidos em 5-10 mL de água para recém-nascidos.',
    cuidados: 'MONITORAMENTO: A meia-vida plasmática da levotiroxina é de aproximadamente 7 dias. Portanto, ajustes de dose devem ser reavaliados por meio do TSH sérico somente após 6 a 8 semanas da modificação posológica. Cardiopatas e idosos exigem titulação extremamente cautelosa para prevenir arritmias ou angina.',
    ajuste: 'Insuficiência renal e hepática: Não é necessário ajuste de dose.'
  }
};

export default levotiroxina;
