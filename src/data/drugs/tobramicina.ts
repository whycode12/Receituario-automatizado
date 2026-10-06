/**
 * MEDICAMENTO: Tobramicina 0,3% (Colírio Oftálmico)
 * CLASSE: Antibacteriano Oftálmico (Aminoglicosídeo)
 * FONTES:
 *   - Ministério da Saúde / RENAME / Farmácia Básica do SUS: Tobramicina 3 mg/mL (0,3%) colírio frasco 5 mL
 *   - SBP (Sociedade Brasileira de Pediatria) e CBO (Conselho Brasileiro de Oftalmologia): Conjuntivites bacterianas na infância e adultos
 *   - HSL: Guia Farmacêutico Hospital Sírio-Libanês (Espectro antibacteriano da tobramicina)
 *   - Bulário ANVISA: Tobrex colírio 0,3% / Genérico
 */

import { Farmaco } from '../../types';

export const tobramicina: Farmaco = {
  id: 'tobramicina',
  nome: 'Tobramicina 0,3% (Colírio Oftálmico)',
  categoria: 'Oftalmologia e Colírios',
  busca: 'tobramicina colirio tobrex tobramicina oftálmica conjuntivite bacteriana olho com secrecao remela amarela pus blefarite ceratite',
  classe: 'Antibacteriano Oftálmico Aminoglicosídeo de Amplo Espectro',
  dosePratica: 'Conjuntivite Bacteriana Aguda (Olho com Secreção Purulenta/Remela Espessa Amarela ou Esverdeada): Pingar 1 a 2 gotas no(s) olho(s) afetado(s) a cada 4 horas (enquanto acordado - 4 a 6 vezes ao dia) por 7 dias. Em infecções hiperagudas/graves, pingar a cada 2 horas nas primeiras 24 a 48 horas e espaçar conforme melhora. Droga de primeira linha e perfil consagrado de segurança em pediatria a partir de 2 meses de vida.',
  fontes: { MS: '2023', HSL: '14/02/2017', BULA: '04/10/2026' },
  snPadrao: 'aplicação nos olhos acometidos',
  acessoFonte: 'RENAME / Farmácia Básica do SUS: Solução oftálmica 3 mg/mL (0,3%) em frasco conta-gotas com 5 mL padronizada na rede pública e disponível amplamente nas drogarias (Tobrex e genéricos).',
  apresentacoes: [
    {
      id: 'colirio_5ml',
      forma: 'gotas',
      nome: 'Solução oftálmica 0,3% (3 mg/mL - frasco conta-gotas 5 mL)',
      comercial: 'Tobrex / Genérico',
      conc: '3 mg/mL (0,3%)',
      rotulo: 'Tobramicina 0,3% colírio oftálmico (frasco 5 mL)',
      mg: 1,
      gotasml: 20,
      volml: 5,
      frascoMl: 5,
      vias: ['OFTALMICA'],
      disp: '1 frasco conta-gotas (5 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Como pingar o colírio no olho de forma correta e segura:\n1. HIGIENE: Lave muito bem as mãos com água e sabão antes de manusear os olhos ou o frasco.\n2. LIMPEZA DOS OLHOS: Se houver casquinhas de secreção ou remela grudada nos cílios, limpe suavemente com uma gaze umedecida em soro fisiológico 0,9%, limpando de dentro para fora (use uma gaze nova para cada olho).\n3. POSIÇÃO: Incline a cabeça para trás e puxe a pálpebra inferior do olho afetado para baixo com a ponta do dedo limpo, formando uma bolsinha.\n4. APLICAÇÃO: Olhe para cima e pingue 1 a 2 gotas dentro dessa bolsinha da pálpebra inferior. NÃO ENCOSTE a ponta do conta-gotas nos olhos, nos cílios ou nos dedos para não contaminar o remédio.\n5. FECHAMENTO: Feche os olhos delicadamente por 1 a 2 minutos (não aperte as pálpebras com força) e aperte levemente o cantinho interno do olho (perto do nariz) com o indicador para evitar que o colírio escorra para a garganta.\n6. LENTES DE CONTATO: Não use lentes de contato enquanto estiver com conjuntivite infecciosa.\n7. DURAÇÃO: Mantenha o tratamento pelos 7 dias prescritos, mesmo que o olho já pareça curado nos primeiros dias, para eliminar todas as bactérias.',
      obs: 'RENAME / SUS. Aminoglicosídeo de alta potência contra bactérias comuns da flora conjuntival, incluindo estafilococos e bacilos gram-negativos.'
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
      dosesDia: [4, 6],
      dosesPadrao: 4,
      intervaloFixo: 6,
      duracaoMaxDias: 10,
      fonte: 'BULA / CBO / MS',
      trecho: 'Conjuntivite bacteriana: Instilar 1 a 2 gotas no saco conjuntival a cada 4 a 6 horas por 7 a 10 dias (nos primeiros 2 dias de casos graves, pode-se instilar a cada 2 horas).'
    },
    // 2. Pediatria (≥ 2 meses)
    {
      pub: 'ped',
      se: { idadeMinMeses: 2 },
      vias: ['OFTALMICA'],
      apres: ['colirio_5ml'],
      tipo: 'mg',
      min: 1,
      max: 2,
      padrao: 1,
      dosesDia: [4, 6],
      dosesPadrao: 4,
      intervaloFixo: 6,
      duracaoMaxDias: 10,
      fonte: 'SBP / BULA',
      trecho: 'Lactentes e crianças a partir de 2 meses: Pingar 1 a 2 gotas a cada 4 a 6 horas durante 7 dias.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 2 },
      vias: ['OFTALMICA'],
      msg: 'Contraindicado em recém-nascidos e lactentes menores de 2 meses de idade sem avaliação especializada (na conjuntivite neonatal / oftalmia neonatal nas primeiras semanas de vida, deve-se suspeitar de etiologias graves como Neisseria gonorrhoeae ou Chlamydia trachomatis, exigindo conduta sistêmica imediata e internação hospitalar).',
      fonte: 'SBP / MS',
      trecho: 'Segurança não avaliada em menores de 2 meses; suspeita de oftalmia neonatal requer conduta hospitalar.',
      strong: true
    },
    {
      vias: ['OFTALMICA'],
      msg: 'Contraindicado em pacientes com histórico de hipersensibilidade documentada à tobramicina ou a outros antibióticos aminoglicosídeos.',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade conhecida aos aminoglicosídeos.',
      strong: true
    },
    {
      vias: ['OFTALMICA'],
      msg: 'Uso estritamente tópico oftálmico. Contraindicada injeção subconjuntival ou intraocular direta.',
      fonte: 'BULA',
      trecho: 'Exclusivamente para uso oftálmico tópico.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Tratamento de infecções bacterianas superficiais dos olhos e anexos: conjuntivite bacteriana purulenta aguda, blefarite, blefaroconjuntivite, ceratite bacteriana e profilaxia de infecção após procedimentos oftálmicos menores.',
    administracao: 'OFTALMICA: Pingar no saco conjuntival inferior. Caso o paciente use outros colírios (ex: lágrimas artificiais), aguardar intervalo mínimo de 5 a 10 minutos entre a aplicação de cada produto.',
    cuidados: 'SINAIS DE ALARME OFTALMOLÓGICO: Se o paciente apresentar dor ocular intensa, sensibilidade dolorosa à luz (fotofobia importante), redução da acuidade visual ou ausência de melhora após 48 horas de tratamento, encaminhar urgentemente ao médico oftalmologista.',
    ajuste: 'Insuficiência renal e hepática: Absorção oftálmica sistêmica mínima; não requer ajuste de dose.'
  }
};

export default tobramicina;
