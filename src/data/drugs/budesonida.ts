import { Farmaco } from '../../types';

export const budesonida: Farmaco = {
  id: 'budesonida',
  nome: 'Budesonida',
  categoria: 'Corticoides Inalatórios e Respiratórios',
  busca: 'budesonida pulmicort busonid noex miflonide alenia corticoide inalatorio asma rinite crupe laringite',
  classe: 'Anti-inflamatório Hormonal, Glicocorticoide Inalatório e Nasal de Alta Potência Tópica',
  dosePratica: 'Asma / Nebulização: Crianças (≥ 6 meses): 0,25 a 0,5 mg (1 a 2 mL da suspensão 0,25 mg/mL) nebulizado 12/12h (ou dose única diária na manutenção leve). Adultos: 1 a 2 mg (1 a 2 flaconetes de 2 mL) 12/12h. Rinite Alérgica (Spray Nasal 32 ou 64 mcg/dose): Adultos e crianças ≥ 6 anos: 1 a 2 aplicações em cada narina 1 a 2x ao dia (64 a 256 mcg/dia). Asma Pó Inalatório (Cápsulas 200/400 mcg): Adultos: 200 a 800 mcg/dia divididos em 1 a 2 tomadas.',
  fontes: { HSL: '07/03/2023', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'crise asmática, broncoespasmo, crupe ou exacerbação de rinite',
  acessoFonte: 'RENAME 2024: Componente Básico (CBAF) para apresentações nasais (32 mcg e 64 mcg/dose) e Componente Especializado (CEAF) para apresentações inalatórias orais (200 mcg e 400 mcg pó inalatório / cápsulas e suspensão para nebulização 0,25 mg/mL). Farmácia Popular: Disponibilização gratuita do spray nasal em faixas padronizadas.',
  apresentacoes: [
    {
      id: 'susp_neb_025',
      forma: 'sol',
      nome: 'Suspensão para nebulização 0,25 mg/mL (flaconete 2 mL com 0,5 mg)',
      comercial: 'Pulmicort / Budecort / Genérico',
      conc: '0,25mg/mL (0,5mg / 2mL)',
      rotulo: 'Budesonida suspensão para nebulização 0,25mg/mL (flaconete 2 mL)',
      mgml: 0.25,
      volml: 2,
      vias: ['INALATORIA'],
      disp: '1 caixa com 5 flaconetes de 2 mL',
      acesso: { rename: true, fp: false },
      instrucao: 'Utilizar exclusivamente em aparelho de inalação/nebulizador pneumático a jato de ar (fluxo de 5 a 8 L/min). Não usar nebulizadores ultrassônicos. Misturar o conteúdo do flaconete com 2 a 3 mL de soro fisiológico 0,9% no copinho do nebulizador. Após a inalação, lavar o rosto com água e escovar os dentes ou enxaguar a boca (prevenção de dermatite e candidíase oral). Após aberto, utilizar o frasco em até 12 horas.',
      obs: 'RENAME (CEAF / Hospitalar). 1 mL = 0,25 mg (250 mcg); 1 flaconete inteiro de 2 mL = 0,5 mg (500 mcg). Forma padrão ouro para crupe/laringite e lactentes sibilantes.'
    },
    {
      id: 'spray_nasal_32',
      forma: 'sol_nasal',
      nome: 'Spray nasal aquoso 32 mcg/dose (frasco 120 doses)',
      comercial: 'Busonid 32mcg / Noex 32mcg / Genérico',
      conc: '32mcg/dose',
      rotulo: 'Budesonida spray nasal 32mcg/dose',
      vias: ['NASAL'],
      disp: '1 frasco com 120 doses',
      acesso: { rename: true, fp: true },
      instrucao: 'Assoar suavemente o nariz antes da aplicação. Agitar o frasco. Manter a cabeça ereta e aplicar os jatos em cada narina apontando para a parede lateral externa (evitar aplicar direto sobre o septo nasal para prevenir sangramentos). Respirar suavemente pelo nariz.',
      obs: 'RENAME (CBAF) e Farmácia Popular. Indicado para rinite alérgica sazonal e perene em adultos e crianças a partir de 6 anos.'
    },
    {
      id: 'spray_nasal_64',
      forma: 'sol_nasal',
      nome: 'Spray nasal aquoso 64 mcg/dose (frasco 120 doses)',
      comercial: 'Busonid 64mcg / Noex 64mcg / Budecort Aqua',
      conc: '64mcg/dose',
      rotulo: 'Budesonida spray nasal 64mcg/dose',
      vias: ['NASAL'],
      disp: '1 frasco com 120 doses',
      acesso: { rename: true, fp: false },
      instrucao: 'Assoar o nariz antes de aplicar. Agitar o frasco. Aplicar em cada narina direcionando o bico aplicador para a lateral externa do nariz (parede nasal externa). Não direcionar o jato para o septo nasal.',
      obs: 'RENAME (CBAF). Indicado para sintomas moderados a graves de rinite alérgica e pólipos nasais.'
    },
    {
      id: 'cap_inal_200',
      forma: 'cap',
      nome: 'Cápsula com pó inalatório 200 mcg (para inalação oral com inalador)',
      comercial: 'Miflonide 200mcg / Busonid Aerocaps / Genérico',
      conc: '200mcg (0,2mg)',
      rotulo: 'Budesonida cápsula com pó para inalação 200mcg',
      mg: 0.2,
      vias: ['INALATORIA'],
      disp: '1 caixa com 60 cápsulas + aparelho inalador',
      acesso: { rename: true, fp: false },
      instrucao: 'ATENÇÃO: NÃO ENGOLIR A CÁPSULA. Uso estritamente inalatório. Colocar a cápsula no compartimento do aparelho inalador, perfurar a cápsula conforme instruções do dispositivo, soltar todo o ar dos pulmões, colocar o bocal nos lábios e inspirar profundamente pela boca. Segurar a respiração por 5 a 10 segundos. Enxaguar bem a boca com água e cuspir após cada inalação (prevenção de sapinho/candidíase e disfonia).',
      obs: 'RENAME (CEAF). Cada cápsula contém 200 mcg (0,2 mg) de budesonida micronizada.'
    },
    {
      id: 'cap_inal_400',
      forma: 'cap',
      nome: 'Cápsula com pó inalatório 400 mcg (para inalação oral com inalador)',
      comercial: 'Miflonide 400mcg / Busonid Aerocaps',
      conc: '400mcg (0,4mg)',
      rotulo: 'Budesonida cápsula com pó para inalação 400mcg',
      mg: 0.4,
      vias: ['INALATORIA'],
      disp: '1 caixa com 60 cápsulas + aparelho inalador',
      acesso: { rename: true, fp: false },
      instrucao: 'ATENÇÃO: NÃO ENGOLIR A CÁPSULA. Uso inalatório exclusivo por inalador próprio acoplado. Após a inalação profunda, prender a respiração por 5 a 10 segundos. Enxaguar a cavidade oral com água abundante e cuspir para evitar candidíase orofaríngea.',
      obs: 'RENAME (CEAF). Indicado para asma persistente moderada a grave em adolescentes e adultos.'
    }
  ],
  regras: [
    // 1. Nebulização Adulto
    {
      pub: 'adulto',
      vias: ['INALATORIA'],
      apres: ['susp_neb_025'],
      tipo: 'mg',
      min: 0.5,
      max: 2,
      padrao: 1,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'HSL / BULA',
      trecho: 'Adulto inicial: 1 a 2 mg, 2 vezes/dia. Dose de manutenção: 0,5 a 4 mg/dia. Dose única diária pode ser considerada em pacientes que requerem 0,25 a 1 mg/dia.'
    },
    // 2. Nebulização Pediatria (>= 6 meses)
    {
      pub: 'ped',
      se: { idadeMinMeses: 6 },
      vias: ['INALATORIA'],
      apres: ['susp_neb_025'],
      tipo: 'mg',
      min: 0.25,
      max: 1,
      padrao: 0.5,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'HSL / BULA',
      trecho: 'Pediatria (a partir de 6 meses): Inicial: 0,25 a 0,5 mg/dia dividida em 2 administrações. Manutenção: 0,25 a 2 mg/dia. Dose única diária de 0,25 a 1 mg/dia.'
    },
    // 3. Pó Inalatório Adulto (Miflonide 200/400 mcg)
    {
      pub: 'adulto',
      vias: ['INALATORIA'],
      apres: ['cap_inal_200', 'cap_inal_400'],
      tipo: 'mg',
      min: 0.2,
      max: 0.8,
      padrao: 0.4,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'BULA / GINA',
      trecho: 'Adultos e > 12 anos: 200 a 800 mcg/dia (0,2 a 0,8 mg/dia) divididos em 1 a 2 doses. Em casos graves de exacerbação: até 1.600 mcg/dia (1,6 mg/dia).'
    },
    // 4. Pó Inalatório Pediatria (>= 6 anos)
    {
      pub: 'ped',
      se: { idadeMinAnos: 6 },
      vias: ['INALATORIA'],
      apres: ['cap_inal_200'],
      tipo: 'mg',
      min: 0.2,
      max: 0.4,
      padrao: 0.2,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'BULA / GINA',
      trecho: 'Crianças de 6 a 12 anos: 200 a 400 mcg/dia (0,2 a 0,4 mg/dia) divididos em 1 a 2 administrações inalatórias diárias.'
    },
    // 5. Spray Nasal Adulto (32 e 64 mcg)
    {
      pub: 'adulto',
      vias: ['NASAL'],
      apres: ['spray_nasal_32', 'spray_nasal_64'],
      tipo: 'mg',
      min: 1,
      max: 2,
      padrao: 1,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'PSZERADO / BULA',
      trecho: 'Adultos e crianças >= 6 anos: 1 a 2 jatos em cada narina 1 a 2 vezes ao dia (dose usual de 128 a 256 mcg/dia). Após controle dos sintomas, titular para menor dose eficaz (1 jato por narina 1x/dia).'
    },
    // 6. Spray Nasal Pediatria (>= 6 anos)
    {
      pub: 'ped',
      se: { idadeMinAnos: 6 },
      vias: ['NASAL'],
      apres: ['spray_nasal_32', 'spray_nasal_64'],
      tipo: 'mg',
      min: 1,
      max: 2,
      padrao: 1,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      fonte: 'BULA / SBP',
      trecho: 'Crianças a partir de 6 anos: 1 jato em cada narina 1 a 2 vezes ao dia (64 a 128 mcg/dia de 32 mcg, ou 1 jato 1x/dia de 64 mcg).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['INALATORIA'],
      apres: ['susp_neb_025'],
      tipo: 'mg_dia',
      valor: 4,
      fonte: 'HSL / BULA',
      trecho: 'Dose máxima de manutenção na nebulização em adultos: até 4 mg/dia.'
    },
    {
      pub: 'ped',
      vias: ['INALATORIA'],
      apres: ['susp_neb_025'],
      tipo: 'mg_dia',
      valor: 2,
      fonte: 'HSL / BULA',
      trecho: 'Dose máxima pediátrica na nebulização: até 2 mg/dia.'
    },
    {
      pub: 'adulto',
      vias: ['INALATORIA'],
      apres: ['cap_inal_200', 'cap_inal_400'],
      tipo: 'mg_dia',
      valor: 1.6,
      fonte: 'BULA / GINA',
      trecho: 'Dose máxima diária de budesonida em pó inalatório para adultos: 1.600 mcg/dia (1,6 mg/dia).'
    },
    {
      pub: 'ped',
      vias: ['INALATORIA'],
      apres: ['cap_inal_200', 'cap_inal_400'],
      tipo: 'mg_dia',
      valor: 0.8,
      fonte: 'BULA / GINA',
      trecho: 'Dose máxima diária em pó inalatório em pediatria (6 a 12 anos): 800 mcg/dia (0,8 mg/dia).'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 5 },
      vias: ['INALATORIA'],
      apres: ['susp_neb_025'],
      msg: 'Uso não recomendado em lactentes menores de 6 meses para suspensão de nebulização devido à ausência de dados clínicos de segurança estabelecidos.',
      fonte: 'HSL / BULA',
      trecho: 'Segurança e eficácia não estabelecidas em lactentes com menos de 6 meses de idade.',
      strong: true
    },
    {
      pub: 'ped',
      se: { idadeMaxAnos: 5 },
      vias: ['INALATORIA'],
      apres: ['cap_inal_200', 'cap_inal_400'],
      msg: 'Cápsulas com pó para inalação são contraindicadas em crianças menores de 6 anos pela incapacidade de manusear o dispositivo inalatório e gerar fluxo inspiratório adequado.',
      fonte: 'BULA',
      trecho: 'Não recomendado para crianças menores de 6 anos devido a dados insuficientes de eficácia e segurança nesta faixa etária.',
      strong: true
    },
    {
      pub: 'ped',
      se: { idadeMaxAnos: 5 },
      vias: ['NASAL'],
      apres: ['spray_nasal_32', 'spray_nasal_64'],
      msg: 'Spray nasal contraindicado para menores de 6 anos de idade (segurança e eficácia não consolidadas nessa faixa etária).',
      fonte: 'BULA',
      trecho: 'Contraindicado para menores de 6 anos.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade conhecida à budesonida ou a qualquer componente da fórmula.',
      fonte: 'HSL / BULA',
      trecho: 'Hipersensibilidade conhecida à budesonida ou a outros corticosteroides.',
      strong: false
    },
    {
      msg: 'Não é indicado para o alívio rápido de crises agudas de broncoespasmo grave que exigem broncodilatador de ação rápida (ex.: salbutamol). Em exacerbações agudas, atua como terapia anti-inflamatória adjuvante.',
      fonte: 'HSL / BULA',
      trecho: 'A budesonida não é primariamente indicada para o alívio rápido de episódios agudos de broncoespasmo.',
      strong: false
    },
    {
      msg: 'Cautela e monitorização em pacientes com tuberculose pulmonar ativa ou quiescente, infecções fúngicas, bacterianas ou virais das vias respiratórias superiores.',
      fonte: 'HSL / BULA',
      trecho: 'Cuidados especiais são necessários em pacientes com infecções fúngicas e virais das vias aéreas.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Anti-inflamatório esteroide inalatório de alta afinidade e baixa biodisponibilidade sistêmica. Indicado para o tratamento de manutenção da asma brônquica persistente, crupe/laringite aguda estridulosa em crianças e profilaxia/tratamento de rinite alérgica sazonal ou perene (HSL / PSZerado).',
    administracao: 'Nebulização: Diluir em soro fisiológico 0,9% para volume final de 2 a 4 mL; utilizar nebulizador a jato de ar (proibido ultrassônico). Pó Inalatório: Inalar profundamente pela boca via inalador. Spray Nasal: Aplicar direcionando para a parede nasal lateral externa. Importante: Enxaguar a cavidade oral com água e cuspir após inalação oral para prevenir candidíase orofaríngea (sapinho) e rouquidão.',
    cuidados: 'Estabilidade da suspensão para nebulização: Após abertura do envelope de alumínio, frascos válidos por 3 meses. Após abertura do flaconete plástico, utilizar em até 12 horas. Após diluição em soro no copinho, utilizar em 30 minutos (HSL). Monitorar velocidade de crescimento em crianças em uso contínuo crônico de altas doses.',
    ajuste: 'Insuficiência renal e hepática: não necessita de ajuste de dose (HSL). Cirrose hepática grave pode aumentar a exposição sistêmica devido à redução do metabolismo de primeira passagem hepática.'
  }
};

export default budesonida;
