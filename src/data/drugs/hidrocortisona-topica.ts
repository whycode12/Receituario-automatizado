/**
 * MEDICAMENTO: Acetato de Hidrocortisona 1% (Creme Dermatológico)
 * CLASSE: Corticosteroide Tópico de Baixa Potência (Grupo VII)
 * FONTES:
 *   - Guia de Prescrição PSZerado (2025, pág. 163): Tratamento tópico de dermatite atópica e eczemas
 *   - Ministério da Saúde / RENAME / Farmácia Básica do SUS: Acetato de hidrocortisona 10 mg/g (1%) creme bisnaga 30 g
 *   - SBP (Sociedade Brasileira de Pediatria) e SBD: Corticosteroide de escolha para face, dobras e crianças
 *   - Bulário ANVISA: Berlison / Cortisonal / Genérico
 */

import { Farmaco } from '../../types';

export const hidrocortisonaTopica: Farmaco = {
  id: 'hidrocortisona-topica',
  nome: 'Acetato de Hidrocortisona 1% (Creme)',
  categoria: 'Dermatologia e Corticoides Tópicos',
  busca: 'hidrocortisona creme hidrocortisona topica berlison cortisonal creme corticoide fraco dermatite atopica eczema picada de inseto dobras face',
  classe: 'Corticosteroide Tópico de Baixa Potência (Classe VII - Baixa Atividade Anti-inflamatória)',
  dosePratica: 'Eczema, Dermatite Atópica (especialmente em face e dobras) e Picadas de Insetos Inflamadas: Aplicar uma camada fina sobre a área afetada 1 a 2 vezes ao dia (a cada 12 ou 24 horas) por 7 a 14 dias (máximo de 2 semanas contínuas). Corticoide de primeira escolha em pediatria e áreas de pele fina por apresentar menor risco de atrofia cutânea e absorção sistêmica.',
  fontes: { PSZERADO: '2025', MS: '2023', BULA: '04/10/2026' },
  snPadrao: 'se coceira intensa, vermelhidão ou crise de dermatite',
  acessoFonte: 'RENAME / Farmácia Básica do SUS: Bisnagas de 20 g e 30 g contendo 10 mg/g (1%) de acetato de hidrocortisona disponíveis nas Unidades Básicas de Saúde.',
  apresentacoes: [
    {
      id: 'creme_30g',
      forma: 'creme',
      nome: 'Creme dermatológico 1% (10 mg/g - bisnaga 30 g)',
      comercial: 'Berlison / Cortisonal / Genérico',
      conc: '1% (10 mg/g)',
      rotulo: 'Acetato de hidrocortisona 1% creme dermatológico (bisnaga 30g)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 bisnaga (30 g)',
      acesso: { rename: true, fp: false },
      instrucao: 'Como usar o creme em casa:\n1. LIMPEZA: Higienize a pele com água morna e sabonete neutro e seque suavemente com toalha macia, sem esfregar.\n2. APLICAÇÃO: Coloque uma pequena quantidade na ponta do dedo e passe uma camada bem fina e transparente sobre a área avermelhada ou com coceira.\n3. MASSAGEM: Espalhe delicadamente com movimentos circulares suaves até o creme sumir na pele.\n4. HORÁRIOS: Aplique 1 a 2 vezes ao dia conforme prescrito, preferencialmente após o banho e/ou ao deitar.\n5. DURAÇÃO: Use apenas pelo período recomendado pelo médico (geralmente de 7 a 14 dias; não use por mais de 2 semanas seguidas sem retorno).\n6. CUIDADOS ESPECIAIS: Se for aplicar no rosto, tome cuidado para NÃO passar perto dos olhos. Não use em feridas com pus, micoses ("impinges") ou bolhas de catapora/herpes.',
      obs: 'RENAME / SUS. Corticoide tópico de baixa potência ideal para lesões em face, pescoço, axilas, virilhas e uso pediátrico.'
    },
    {
      id: 'creme_20g',
      forma: 'creme',
      nome: 'Creme dermatológico 1% (10 mg/g - bisnaga 20 g)',
      comercial: 'Berlison / Genérico',
      conc: '1% (10 mg/g)',
      rotulo: 'Acetato de hidrocortisona 1% creme dermatológico (bisnaga 20g)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 bisnaga (20 g)',
      acesso: { rename: true, fp: false },
      instrucao: 'Aplicar uma camada fina na área lesada 1 a 2 vezes ao dia por até 14 dias.',
      obs: 'Apresentação comercial comum em drogarias comunitárias.'
    }
  ],
  regras: [
    // 1. Adultos
    {
      pub: 'adulto',
      vias: ['TOPICA'],
      apres: ['creme_30g', 'creme_20g'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 14,
      fonte: 'PSZERADO / SBD / BULA',
      trecho: 'PSZerado pág. 163: Aplicar 2 vezes ao dia por 1 a 2 semanas nas lesões eczematosas/dermatites.'
    },
    // 2. Pediatria (Lactentes e crianças)
    {
      pub: 'ped',
      se: { idadeMinMeses: 3 },
      vias: ['TOPICA'],
      apres: ['creme_30g', 'creme_20g'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 14,
      fonte: 'SBP / BULA',
      trecho: 'Lactentes e crianças a partir de 3 meses: Aplicar fina camada 1 a 2 vezes ao dia por 7 a 14 dias.'
    }
  ],
  contra: [
    {
      vias: ['TOPICA'],
      msg: 'Contraindicado em infecções cutâneas ativas não tratadas de etiologia viral (herpes simples, zoster, varicela), fúngica (tineas, candidíase) ou bacteriana (impetigo), pois os corticosteroides deprimem a resposta imune local e disseminam a infecção.',
      fonte: 'BULA / SBD',
      trecho: 'Infecções cutâneas virais, fúngicas ou bacterianas não tratadas.',
      strong: true
    },
    {
      vias: ['TOPICA'],
      msg: 'Contraindicado o uso oftálmico (não aplicar nos olhos ou pálpebras muito próximas à conjuntiva pelo risco de indução de glaucoma e catarata). Contraindicado em acne vulgar e rosácea.',
      fonte: 'BULA',
      trecho: 'Uso oftálmico contraindicado. Não usar em acne ou rosácea.',
      strong: true
    },
    {
      vias: ['TOPICA'],
      msg: 'Contraindicado em caso de hipersensibilidade documentada à hidrocortisona ou aos componentes da formulação.',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade conhecida aos corticoides tópicos.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Alívio das manifestações inflamatórias e pruriginosas das dermatoses responsivas a corticosteroides: dermatite atópica, dermatite de contato, eczema numular, dermatite seborreica facial/flexural, picadas de insetos com inflamação moderada e queimaduras solares leves.',
    administracao: 'TOPICA: Aplicar em camada fina e homogênea 1 a 2 vezes ao dia. Evitar curativos oclusivos a menos que expressamente indicado pelo médico (a oclusão aumenta exponencialmente a absorção cutânea).',
    cuidados: 'POTÊNCIA SEGURA: A hidrocortisona 1% é o corticoide tópico de referência e menor potência anti-inflamatória (classe VII), sendo a opção de menor risco de atrofia, estrias e telangiectasias para uso em áreas sensíveis como face, pescoço, axilas e virilhas.',
    ajuste: 'Insuficiência renal e hepática: Em uso tópico nas doses recomendadas a absorção sistêmica é insignificante; não requer ajuste posológico.'
  }
};

export default hidrocortisonaTopica;
