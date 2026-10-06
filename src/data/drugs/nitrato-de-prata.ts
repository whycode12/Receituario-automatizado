/**
 * MEDICAMENTO: Nitrato de Prata (Bastão / Cautério Tópico)
 * CLASSE: Agente Cauterizante Químico / Adstringente / Hemostático Local
 * FONTES:
 *   - SBP (Sociedade Brasileira de Pediatria): Cuidados com o coto umbilical e conduta no granuloma umbilical
 *   - Ministério da Saúde / Cadernos de Atenção Básica (Tratamento de feridas e sala de procedimentos da UBS)
 *   - Bulário ANVISA: Bastão de nitrato de prata 90% a 95%
 */

import { Farmaco } from '../../types';

export const nitratoDePrata: Farmaco = {
  id: 'nitrato-de-prata',
  nome: 'Nitrato de Prata (Bastão / Cautério Tópico)',
  categoria: 'Dermatologia e Curativos',
  busca: 'nitrato de prata bastao nitrato de prata cauterio granuloma umbilical umbigo bebe hipergranulacao ferida cauterizacao quimica',
  classe: 'Agente Cauterizante Químico, Adstringente e Hemostático Local',
  dosePratica: '1. Granuloma Umbilical no Recém-Nascido/Lactente: Proteger a pele sadia ao redor do umbigo com vaselina sólida estéril. Umedecer a ponta do bastão com 1 gota de soro fisiológico e tocar delicadamente apenas sobre o granuloma por 2 a 5 segundos (1 a 2 vezes por semana, geralmente 1 a 3 sessões até regressão total). 2. Hipergranulação em Feridas Crônicas / Ostomias: Cauterização pontual do tecido exuberante a cada troca semanal de curativo.',
  fontes: { MS: '2023', BULA: '04/10/2026' },
  snPadrao: 'sessão de cauterização de granuloma ou hipergranulação tecidual',
  acessoFonte: 'Padronizado na RENAME / Insumos de Atenção Básica para procedimentos em sala de curativos de UBS e consultórios (cautério em bastão de nitrato de prata 90-95%).',
  apresentacoes: [
    {
      id: 'bastao_unitario',
      forma: 'sol',
      nome: 'Bastão aplicador com nitrato de prata 90% a 95%',
      comercial: 'Bastão de Nitrato de Prata / Cautério Tópico',
      conc: 'Nitrato de prata 90% a 95% + nitrato de potássio 5% a 10%',
      rotulo: 'Nitrato de prata bastão aplicador (unidade)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 bastão aplicador',
      acesso: { rename: true, fp: false },
      instrucao: 'Instruções para o procedimento (sala de curativo ou domiciliar sob orientação médica):\n1. Higienize as mãos e calce luvas de procedimento.\n2. Limpe a área suavemente com soro fisiológico 0,9% e seque com gaze estéril.\n3. PASSO CRUCIAL: Aplique uma camada generosa de vaselina sólida ou pomada protetora em toda a pele sadia ao redor da lesão para evitar queimaduras químicas e manchas pretas na pele.\n4. Umedeça levemente a ponta escura do bastão com UMA gota de soro fisiológico ou água destilada (não encharcar para não escorrer).\n5. Encoste a ponta umedecida com precisão apenas no tecido avermelhado (granuloma ou excesso de carne esponjosa) por 2 a 5 segundos.\n6. O tecido cauterizado ficará acinzentado/enegrecido logo em seguida, o que é absolutamente normal e esperado.\n7. Seque o excesso com gaze seca. Não lavar imediatamente.\n8. Repetir 1 vez a cada 3 a 7 dias, conforme evolução clínica.',
      obs: 'RENAME / SUS. Bastão rígido plástico ou de madeira com ponta impregnada por nitrato de prata cáustico.'
    },
    {
      id: 'caixa_10_bastoes',
      forma: 'sol',
      nome: 'Caixa com 10 bastões aplicadores de nitrato de prata',
      comercial: 'Bastões de Nitrato de Prata (Caixa c/ 10)',
      conc: 'Nitrato de prata 90% a 95%',
      rotulo: 'Nitrato de prata bastões aplicadores (caixa com 10 unidades)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 caixa (10 bastões)',
      acesso: { rename: true, fp: false },
      instrucao: 'Utilizar 1 bastão por procedimento sob técnica asséptica. Descartar o bastão após o uso.',
      obs: 'Embalagem ambulatorial para salas de procedimentos e curativos de UBS/UPA.'
    }
  ],
  regras: [
    // 1. Pediatria (Granuloma umbilical - lactentes e RNs)
    {
      pub: 'ped',
      vias: ['TOPICA'],
      apres: ['bastao_unitario', 'caixa_10_bastoes'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 7,
      fonte: 'SBP / MS',
      trecho: 'Granuloma umbilical: Tocar 1 vez a cada 3 a 7 dias (máximo de 1 a 3 aplicações) com proteção perilesional rigorosa com vaselina.'
    },
    // 2. Adultos (Hipergranulação em feridas, ostomias e pequenas hemostasias)
    {
      pub: 'adulto',
      vias: ['TOPICA'],
      apres: ['bastao_unitario', 'caixa_10_bastoes'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 14,
      fonte: 'MS / SOBEST',
      trecho: 'Cauterização química tópica pontual: 1 aplicação a cada 3 a 7 dias até regressão do tecido hipergranulado.'
    }
  ],
  contra: [
    {
      vias: ['TOPICA'],
      msg: 'Contraindicado em infecções ativas agudas da parede abdominal/umbigo (onfalite com hiperemia, edema, calor, secreção fétida purulenta abundante) - nestes casos, antibioticoterapia sistêmica imediata e internação pediátrica são obrigatórias.',
      fonte: 'SBP / MS',
      trecho: 'Contraindicado na suspeita de onfalite ou celulite periumbilical.',
      strong: true
    },
    {
      vias: ['TOPICA'],
      msg: 'Contraindicado o uso sobre pele sadia, mucosas oculares ou grandes superfícies cutâneas desnudas (risco de necrose tecidual e queimadura química cáustica). Proteger sempre a pele circundante.',
      fonte: 'BULA / MS',
      trecho: 'Uso restrito pontual; nunca aplicar sobre áreas extensas ou pele sã.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Cauterização química de granuloma umbilical em recém-nascidos e lactentes; tratamento de hipergranulação tecidual (tecido em excesso / "carne esponjosa") em feridas crônicas e bordas de ostomias; pequenas hemostasias de sangramentos cutâneos capilares superficiais.',
    administracao: 'TOPICA: Aplicação pontual restrita à lesão. O bastão deve ser levemente umedecido antes do toque de 2 a 5 segundos. NUNCA deixar o líquido escorrer para a pele sadia vizinha.',
    cuidados: 'ATENÇÃO AO MANCHAMENTO: O nitrato de prata oxida com a luz e o ar, manchando temporariamente de preto a pele sadia e manchando tecidos/roupas de forma permanente. Avisar os pais/cuidadores de que o escurecimento do local da aplicação é normal e esperado.',
    ajuste: 'Insuficiência renal e hepática: Aplicação tópica pontual e superficial; não há absorção sistêmica significativa nem necessidade de ajuste posológico.'
  }
};

export default nitratoDePrata;
