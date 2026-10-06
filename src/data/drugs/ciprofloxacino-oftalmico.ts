/**
 * MEDICAMENTO: Cloridrato de Ciprofloxacino 0,3% (Colírio Oftálmico)
 * CLASSE: Antibacteriano Oftálmico (Fluoroquinolona de Amplo Espectro)
 * FONTES:
 *   - Guia de Prescrição PSZerado (2025, pág. 149): Conduta padrão para conjuntivite bacteriana aguda
 *   - CBO (Conselho Brasileiro de Oftalmologia): Infecções oculares externas e úlceras corneanas
 *   - Ministério da Saúde / RENAME: Ciprofloxacino colírio 3 mg/mL (0,3%)
 *   - Bulário ANVISA: Ciloxan / Genérico
 */

import { Farmaco } from '../../types';

export const ciprofloxacinoOftalmico: Farmaco = {
  id: 'ciprofloxacino-oftalmico',
  nome: 'Cloridrato de Ciprofloxacino 0,3% (Colírio Oftálmico)',
  categoria: 'Oftalmologia e Colírios',
  busca: 'ciprofloxacino colirio ciloxan cipro oftalmico quinolona olho conjuntivite bacteriana ulcera de cornea pseudomonas secrecao purulenta olho',
  classe: 'Antibacteriano Oftálmico Fluoroquinolona de Amplo Espectro (Bactericida)',
  dosePratica: 'Conjuntivite Bacteriana Aguda (PSZerado 2025 pág. 149): Pingar 1 a 2 gotas no olho acometido a cada 2 horas (enquanto acordado) nos primeiros 2 dias; após esse período, pingar a cada 4 horas por mais 5 dias (total 7 dias de tratamento). Droga de escolha em usuários de lentes de contato (cobertura contra Pseudomonas aeruginosa). Corticosteroides tópicos são contraindicados na fase bacteriana aguda.',
  fontes: { PSZERADO: '2025', MS: '2023', BULA: '04/10/2026' },
  snPadrao: 'aplicação nos olhos acometidos',
  acessoFonte: 'Padronizado na RENAME / Farmácia Básica do SUS e amplamente comercializado (Ciloxan e genéricos frasco de 5 mL).',
  apresentacoes: [
    {
      id: 'colirio_5ml',
      forma: 'gotas',
      nome: 'Solução oftálmica 0,3% (3 mg/mL - frasco conta-gotas 5 mL)',
      comercial: 'Ciloxan / Genérico',
      conc: '3 mg/mL (0,3%)',
      rotulo: 'Ciprofloxacino 0,3% colírio oftálmico (frasco 5 mL)',
      mg: 1,
      gotasml: 20,
      volml: 5,
      frascoMl: 5,
      vias: ['OFTALMICA'],
      disp: '1 frasco conta-gotas (5 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Como pingar o colírio no olho de forma correta e segura:\n1. HIGIENIZE AS MÃOS: Lave muito bem as mãos com água e sabão antes de manusear os olhos ou o colírio.\n2. LIMPEZA DOS OLHOS: Limpe suavemente o excesso de secreção ou remela com gaze umedecida em soro fisiológico morno, limpando de dentro para fora (use uma gaze diferente para cada olho).\n3. POSIÇÃO: Incline a cabeça para trás e puxe delicadamente a pálpebra inferior do olho afetado para baixo com o dedo indicador limpo, formando uma bolsinha.\n4. APLICAÇÃO: Olhe para cima e pingue 1 a 2 gotas dentro da bolsinha da pálpebra inferior. NÃO ENCOSTE a ponta do frasco nos olhos, nos cílios ou na pele para evitar contaminação bacteriana do frasco.\n5. FECHAMENTO: Feche os olhos suavemente por 1 a 2 minutos e pressione com suavidade o cantinho interno do olho (perto do nariz) para evitar que o remédio escorra para a garganta.\n6. ESQUEMA DE DIAS:\n   - DIAS 1 E 2: Pingue 1 a 2 gotas a cada 2 horas (durante o período em que estiver acordado);\n   - DIAS 3 A 7: Pingue 1 a 2 gotas a cada 4 horas (4 a 6 vezes ao dia) até completar 7 dias no total.\n7. NÃO USE LENTES DE CONTATO durante todo o tratamento da infecção.\n8. Se houver dor forte no olho, piora da visão ou manchas brancas na parte transparente do olho (córnea), procure atendimento oftalmológico urgente.',
      obs: 'RENAME / SUS. Fluoroquinolona potente com cobertura bactericida estendida contra Pseudomonas aeruginosa, estafilococos e bacilos gram-negativos.'
    }
  ],
  regras: [
    // 1. Adultos
    {
      pub: 'adulto',
      vias: ['OFTALMICA'],
      apres: ['colirio_5ml'],
      tipo: 'mg',
      min: 1,
      max: 2,
      padrao: 1,
      dosesDia: [4, 8],
      dosesPadrao: 6,
      intervaloFixo: 4,
      duracaoMaxDias: 10,
      fonte: 'PSZERADO / CBO / BULA',
      trecho: 'PSZerado pág. 149: 1 a 2 gotas a cada 2 horas nos primeiros 2 dias; após, a cada 4 horas por mais 5 dias (total 7 dias).'
    },
    // 2. Pediatria (≥ 1 ano de idade)
    {
      pub: 'ped',
      se: { idadeMinAnos: 1 },
      vias: ['OFTALMICA'],
      apres: ['colirio_5ml'],
      tipo: 'mg',
      min: 1,
      max: 2,
      padrao: 1,
      dosesDia: [4, 6],
      dosesPadrao: 4,
      intervaloFixo: 6,
      duracaoMaxDias: 7,
      fonte: 'SBP / BULA',
      trecho: 'Crianças a partir de 1 ano de idade: 1 a 2 gotas no olho afetado a cada 4 a 6 horas por 7 dias.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 1 },
      vias: ['OFTALMICA'],
      msg: 'Contraindicado em lactentes menores de 1 ano de idade (segurança e eficácia oftálmica não consolidadas nessa faixa etária na bula padrão; para menores de 1 ano, a tobramicina 0,3% colírio é a alternativa de primeira escolha).',
      fonte: 'BULA / SBP',
      trecho: 'Contraindicado em crianças menores de 1 ano.',
      strong: true
    },
    {
      vias: ['OFTALMICA'],
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada ao ciprofloxacino ou a qualquer outra fluoroquinolona (ofloxacino, levofloxacino, moxifloxacino).',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade a fluoroquinolonas.',
      strong: true
    },
    {
      vias: ['OFTALMICA'],
      msg: 'Contraindicada a associação empírica imediata com corticosteroides oftálmicos na vigência de conjuntivite bacteriana purulenta aguda não controlada ou suspeita de infecção herpética/fúngica (os corticoides facilitam a disseminação do patógeno e o risco de perfuração corneana).',
      fonte: 'PSZERADO / CBO',
      trecho: 'PSZerado pág. 149: Corticosteroides tópicos são contraindicados na conjuntivite aguda.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Conjuntivite bacteriana aguda purulenta, blefaroconjuntivite, ceratite bacteriana, úlcera de córnea bacteriana superficial e infecções oftálmicas em usuários de lentes de contato (cobertura imperativa contra Pseudomonas aeruginosa).',
    administracao: 'OFTALMICA: Pingar 1 a 2 gotas no fundo de saco conjuntival inferior. Se for prescrito outro colírio lubrificante ou medicação ocular, respeitar intervalo mínimo de 10 minutos.',
    cuidados: 'PREDOMÍNIO DE PRECIPITADO BRANCO: Em casos de tratamento intensivo de úlceras corneanas, pode ocorrer acúmulo de pó/precipitado branco cristalino de ciprofloxacino na superfície da lesão, o que é fisiológico e decorre da concentração do fármaco, desaparecendo espontaneamente com a cicatrização.',
    ajuste: 'Insuficiência renal e hepática: Absorção oftálmica tópica em níveis séricos negligenciáveis; não requer ajuste posológico.'
  }
};

export default ciprofloxacinoOftalmico;
