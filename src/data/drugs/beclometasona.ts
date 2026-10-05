import { Farmaco } from '../../types';

export const beclometasona: Farmaco = {
  id: 'beclometasona',
  nome: 'Dipropionato de Beclometasona',
  categoria: 'Corticoides Inalatórios e Respiratórios',
  busca: 'beclometasona dipropionato clenil hfa beclosol clenil a corticoide inalatorio asma rinite bronquite',
  classe: 'Anti-inflamatório Hormonal, Glicocorticoide Inalatório e Nasal',
  dosePratica: 'Asma Spray Oral (Clenil HFA): Crianças: 50 a 100 mcg (1 a 2 jatos de 50 mcg) 12/12h com espaçador. Adultos: 200 a 500 mcg (2 a 4 jatos de 50 mcg ou 1 a 2 jatos de 250 mcg) 12/12h. Nebulização (Clenil A): Crianças: 1 mL (meio flaconete = 400 mcg) 1 a 2x/dia; Adultos: 2 mL (1 flaconete = 800 mcg) 1 a 2x/dia. Rinite Nasal (Spray 50 mcg): Adultos e crianças ≥ 6 anos: 1 a 2 jatos em cada narina 12/12h (100 a 200 mcg/dia).',
  fontes: { HSL: '07/03/2023', BULA: '04/10/2026', GINA: '2024' },
  snPadrao: 'manutenção do controle da asma ou exacerbação de rinite alérgica',
  acessoFonte: 'RENAME 2024: Componente Básico (CBAF) com ampla disponibilização nas UBS para spray oral 50 mcg e 250 mcg/dose, suspensão para inalação nasal 50 mcg/dose e cápsulas/pó inalatório 200 e 400 mcg. Farmácia Popular: Disponibilização gratuita nas apresentações de 50 mcg, 200 mcg e 250 mcg.',
  apresentacoes: [
    {
      id: 'spray_oral_50',
      forma: 'spray',
      nome: 'Aerossol oral 50 mcg/jato (frasco 200 doses com bocal aplicador ou Jet)',
      comercial: 'Clenil HFA 50mcg / Beclosol / Genérico',
      conc: '50mcg/jato (0,05mg/jato)',
      rotulo: 'Dipropionato de beclometasona spray oral 50mcg/jato',
      mg: 0.05,
      vias: ['INALATORIA'],
      disp: '1 frasco com 200 doses',
      acesso: { rename: true, fp: true },
      instrucao: 'Agitar bem o frasco antes de usar. Em crianças e idosos, utilizar sempre com câmara espaçadora (acoplada à máscara em lactentes ou ao bocal em maiores). Soltar o ar dos pulmões, acionar o spray e inspirar lenta e profundamente, segurando a respiração por 5 a 10 segundos. Bochechar a boca com água e cuspir após o uso para prevenir candidíase oral (sapinho) e rouquidão.',
      obs: 'RENAME (Componente Básico) e Farmácia Popular. Forma de escolha para pediatria e controle inicial da asma leve a moderada.'
    },
    {
      id: 'spray_oral_250',
      forma: 'spray',
      nome: 'Aerossol oral 250 mcg/jato (frasco 200 doses com bocal aplicador)',
      comercial: 'Clenil HFA 250mcg / Genérico',
      conc: '250mcg/jato (0,25mg/jato)',
      rotulo: 'Dipropionato de beclometasona spray oral 250mcg/jato',
      mg: 0.25,
      vias: ['INALATORIA'],
      disp: '1 frasco com 200 doses',
      acesso: { rename: true, fp: true },
      instrucao: 'Agitar o frasco antes da aplicação. Fazer a inalação profunda pela boca. Segurar a respiração por 10 segundos. Enxaguar a cavidade oral com água abundante e cuspir após cada aplicação.',
      obs: 'RENAME (Componente Básico) e Farmácia Popular. Indicado para adolescentes e adultos com asma moderada a grave. Não recomendado para crianças pequenas devido à alta concentração por jato.'
    },
    {
      id: 'susp_neb_04',
      forma: 'sol',
      nome: 'Suspensão para nebulização 0,4 mg/mL (flaconete 2 mL com 0,8 mg = 800 mcg)',
      comercial: 'Clenil A / Genérico',
      conc: '0,4mg/mL (800mcg / 2mL)',
      rotulo: 'Dipropionato de beclometasona suspensão para nebulização 0,4mg/mL (flaconete 2 mL)',
      mgml: 0.4,
      volml: 2,
      vias: ['INALATORIA'],
      disp: '1 caixa com 10 flaconetes de 2 mL',
      acesso: { rename: false, fp: false },
      instrucao: 'Uso exclusivo em aparelho de inalação/nebulizador pneumático a jato. Agitar muito bem o flaconete antes de abrir. Se for prescrita meia dose (1 mL), utilizar a marca de meio flaconete, tampar o restante invertendo a tampa e usar em até 24 horas. Adicionar 1 a 2 mL de soro fisiológico 0,9% no copinho. Lavar o rosto e bochechar após a inalação.',
      obs: 'Cada flaconete de 2 mL contém 800 mcg (0,8 mg) de beclometasona. 1 mL (meia dose) = 400 mcg.'
    },
    {
      id: 'spray_nasal_50',
      forma: 'sol_nasal',
      nome: 'Spray nasal aquoso 50 mcg/dose (frasco 200 doses)',
      comercial: 'Clenil Nasal Aquoso / Beclosol Nasal / Genérico',
      conc: '50mcg/dose',
      rotulo: 'Dipropionato de beclometasona spray nasal 50mcg/dose',
      vias: ['NASAL'],
      disp: '1 frasco com 200 doses',
      acesso: { rename: true, fp: true },
      instrucao: 'Assoar suavemente o nariz antes da aplicação. Agitar o frasco. Inclinar a cabeça ligeiramente para a frente e introduzir a ponta do aplicador na narina direcionando para a parede externa lateral (afastado do septo nasal médio para evitar ressecamento e sangramento). Respirar suavemente pelo nariz durante o acionamento.',
      obs: 'RENAME (Componente Básico) e Farmácia Popular. Indicado para rinite alérgica perene ou sazonal em adultos e crianças a partir de 6 anos.'
    }
  ],
  regras: [
    // 1. Spray Oral 50 mcg Adulto
    {
      pub: 'adulto',
      vias: ['INALATORIA'],
      apres: ['spray_oral_50'],
      tipo: 'mg',
      min: 0.1,
      max: 0.5,
      padrao: 0.2,
      dosesDia: [2, 4],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'BULA / GINA',
      trecho: 'Adultos: 200 mcg (4 jatos de 50 mcg) a cada 12 horas. Dose inicial de 200 a 500 mcg 2x/dia (máx. 1.000 a 1.500 mcg/dia).'
    },
    // 2. Spray Oral 50 mcg Pediatria (>= 2 anos)
    {
      pub: 'ped',
      se: { idadeMinAnos: 2 },
      vias: ['INALATORIA'],
      apres: ['spray_oral_50'],
      tipo: 'mg',
      min: 0.05,
      max: 0.2,
      padrao: 0.1,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'BULA / SBP',
      trecho: 'Crianças: 100 mcg (2 jatos de 50 mcg) de 12 em 12 horas (duas vezes ao dia), sempre utilizando espaçador apropriado.'
    },
    // 3. Spray Oral 250 mcg Adulto
    {
      pub: 'adulto',
      vias: ['INALATORIA'],
      apres: ['spray_oral_250'],
      tipo: 'mg',
      min: 0.25,
      max: 0.5,
      padrao: 0.5,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'BULA / GINA',
      trecho: 'Adultos: 1 a 2 jatos de 250 mcg (250 a 500 mcg) a cada 12 horas (2x/dia). Em asma grave não controlada: até 1.000 mcg de 12/12h.'
    },
    // 4. Nebulização Adulto (Clenil A - 0,4 mg/mL)
    {
      pub: 'adulto',
      vias: ['INALATORIA'],
      apres: ['susp_neb_04'],
      tipo: 'mg',
      min: 0.8,
      max: 0.8,
      padrao: 0.8,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'BULA',
      trecho: 'Adultos: 1 flaconete (2 mL = 800 mcg) a cada 24 horas (1 vez ao dia) ou a cada 12 horas (2 vezes ao dia).'
    },
    // 5. Nebulização Pediatria (Clenil A - 0,4 mg/mL)
    {
      pub: 'ped',
      vias: ['INALATORIA'],
      apres: ['susp_neb_04'],
      tipo: 'mg',
      min: 0.4,
      max: 0.4,
      padrao: 0.4,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'BULA',
      trecho: 'Crianças: Meio flaconete (1 mL = 400 mcg) a cada 24 horas ou a cada 12 horas (1 a 2 vezes ao dia).'
    },
    // 6. Spray Nasal Adulto (50 mcg/dose)
    {
      pub: 'adulto',
      vias: ['NASAL'],
      apres: ['spray_nasal_50'],
      tipo: 'mg',
      min: 1,
      max: 2,
      padrao: 2,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'BULA / RENAME',
      trecho: 'Adultos e crianças >= 6 anos: 2 aplicações em cada narina 2 vezes ao dia (total de 400 mcg/dia). Após o controle inicial, reduzir para 1 aplicação por narina 2x/dia.'
    },
    // 7. Spray Nasal Pediatria (>= 6 anos)
    {
      pub: 'ped',
      se: { idadeMinAnos: 6 },
      vias: ['NASAL'],
      apres: ['spray_nasal_50'],
      tipo: 'mg',
      min: 1,
      max: 2,
      padrao: 1,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'BULA / SBP',
      trecho: 'Crianças a partir de 6 anos: 1 a 2 aplicações em cada narina 2 vezes ao dia (máximo de 8 aplicações/dia = 400 mcg/dia).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['INALATORIA'],
      apres: ['spray_oral_50', 'spray_oral_250'],
      tipo: 'mg_dia',
      valor: 1.5,
      fonte: 'BULA / GINA',
      trecho: 'Dose máxima diária de beclometasona em spray oral para adultos: 1.500 mcg/dia (1,5 mg/dia).'
    },
    {
      pub: 'ped',
      vias: ['INALATORIA'],
      apres: ['spray_oral_50'],
      tipo: 'mg_dia',
      valor: 0.4,
      fonte: 'BULA / SBP',
      trecho: 'Dose máxima diária pediátrica recomendada em spray oral: 400 mcg/dia (0,4 mg/dia).'
    },
    {
      pub: 'adulto',
      vias: ['INALATORIA'],
      apres: ['susp_neb_04'],
      tipo: 'mg_dia',
      valor: 1.6,
      fonte: 'BULA',
      trecho: 'Dose máxima diária na nebulização para adultos: 2 flaconetes (1.600 mcg/dia = 1,6 mg/dia).'
    },
    {
      pub: 'ped',
      vias: ['INALATORIA'],
      apres: ['susp_neb_04'],
      tipo: 'mg_dia',
      valor: 0.8,
      fonte: 'BULA',
      trecho: 'Dose máxima diária na nebulização para crianças: 1 flaconete (800 mcg/dia = 0,8 mg/dia).'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 1 },
      vias: ['INALATORIA'],
      apres: ['spray_oral_50'],
      msg: 'Spray aerossol dosimetrado (HFA) não é recomendado em lactentes menores de 2 anos devido à ausência de dados clínicos de segurança conclusivos.',
      fonte: 'BULA',
      trecho: 'Uso pediátrico do Clenil HFA 50 mcg recomendado para crianças a partir de 2 anos.',
      strong: true
    },
    {
      pub: 'ped',
      se: { idadeMaxAnos: 11 },
      vias: ['INALATORIA'],
      apres: ['spray_oral_250'],
      msg: 'A apresentação de 250 mcg por jato é contraindicada para crianças menores de 12 anos pelo alto teor hormonal por disparo (risco elevado de supressão adrenal e retardo de crescimento). Em pediatria, utilizar exclusivamente a apresentação de 50 mcg.',
      fonte: 'BULA',
      trecho: 'Clenil HFA 250 mcg não é recomendado para crianças menores de 12 anos.',
      strong: true
    },
    {
      pub: 'ped',
      se: { idadeMaxAnos: 5 },
      vias: ['NASAL'],
      apres: ['spray_nasal_50'],
      msg: 'Spray nasal contraindicado para menores de 6 anos de idade (segurança e eficácia não estabelecidas nesta faixa etária).',
      fonte: 'BULA',
      trecho: 'Contraindicado para menores de 6 anos.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade ao dipropionato de beclometasona ou a qualquer componente da fórmula.',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade conhecida à substância ativa ou aos excipientes.',
      strong: false
    },
    {
      msg: 'Medicamento de uso preventivo/contínuo de manutenção. NÃO utilizar para alívio imediato de crises agudas de broncoespasmo (asma aguda grave). O resgate em exacerbações deve ser feito com beta-2 agonista de curta duração (salbutamol).',
      fonte: 'BULA / GINA',
      trecho: 'Não é indicado para o alívio imediato do broncoespasmo agudo.',
      strong: false
    },
    {
      msg: 'Contraindicado em infecções virais ativas das vias aéreas (herpes simples ocular, varicela), infecções fúngicas não tratadas e tuberculose pulmonar ativa ou latente não controlada.',
      fonte: 'BULA',
      trecho: 'Contraindicado em infecções virais ativas e tuberculose sem tratamento antituberculoso prévio.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Glicocorticoide inalatório potente com ação anti-inflamatória local sobre a mucosa brônquica e nasal. Indicado para tratamento de manutenção e prevenção da asma brônquica persistente, profilaxia da bronquite inflamatória e tratamento/prevenção da rinite alérgica sazonal e perene (BULA / GINA / RENAME).',
    administracao: 'Spray Oral: Acoplar a espaçador valvulado (fundamental em pediatria para garantir deposição pulmonar de partículas finas). Após a inalação, bochechar com água sem engolir para reduzir a incidência de candidíase orofaríngea (sapinho) e rouquidão/disfonia. Nebulização: Inalar em nebulizador pneumático; o restante do flaconete aberto pode ser conservado tampado e usado em até 24h. Spray Nasal: Assoar o nariz antes e aplicar direcionando o bico para a lateral externa da narina.',
    cuidados: 'O início do efeito terapêutico pleno manifesta-se após 1 a 2 semanas de uso regular e contínuo. Não descontinuar abruptamente. Em crianças sob corticoterapia inalatória prolongada em altas doses, recomenda-se monitorar regularmente o crescimento e a velocidade estatural.',
    ajuste: 'Insuficiência renal e hepática: não necessita de ajuste de dose, devido à ação estritamente tópica local e rápida metabolização sistêmica para metabólitos inativos (HSL).'
  }
};

export default beclometasona;
