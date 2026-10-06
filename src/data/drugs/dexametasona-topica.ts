/**
 * MEDICAMENTO: Acetato de Dexametasona 0,1% (Creme Dermatológico)
 * CLASSE: Corticosteroide Tópico de Média/Baixa Potência
 * FONTES:
 *   - Ministério da Saúde / RENAME / Farmácia Básica do SUS: Acetato de dexametasona 1 mg/g (0,1%) creme dermatológico
 *   - Guia de Prescrição PSZerado (2025): Tratamento de dermatite de contato e pruridos alérgicos
 *   - SBD (Sociedade Brasileira de Dermatologia) / SBP: Condutas em dermatites alérgicas
 *   - Bulário ANVISA: Cortidex / Decadron Creme / Genérico
 */

import { Farmaco } from '../../types';

export const dexametasonaTopica: Farmaco = {
  id: 'dexametasona-topica',
  nome: 'Acetato de Dexametasona 0,1% (Creme)',
  categoria: 'Dermatologia e Corticoides Tópicos',
  busca: 'dexametasona creme dexametasona topica acetato de dexametasona cortidex decadron creme corticoide topico dermatite de contato alergia de pele picada de inseto',
  classe: 'Corticosteroide Tópico Fluorada de Média/Baixa Potência',
  dosePratica: 'Dermatite de Contato, Eczemas em Tronco/Membros e Picadas de Inseto com Reação Alérgica Exuberante: Aplicar uma camada fina sobre a lesão 2 a 3 vezes ao dia (a cada 8 ou 12 horas) durante 5 a 7 dias (máximo de 14 dias). Para lesões em face e crianças pequenas, preferir Hidrocortisona 1%. Contraindicado em infecções ativas da pele e menores de 2 anos.',
  fontes: { MS: '2023', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'se coceira, vermelhidão ou crise alérgica na pele',
  acessoFonte: 'RENAME / Farmácia Básica do SUS: Bisnagas de 10 g e 15 g de creme contendo acetato de dexametasona 1 mg/g (0,1%) amplamente distribuídas em todas as Unidades Básicas de Saúde do país.',
  apresentacoes: [
    {
      id: 'creme_10g',
      forma: 'creme',
      nome: 'Creme dermatológico 0,1% (1 mg/g - bisnaga 10 g)',
      comercial: 'Cortidex / Decadron Creme / Genérico',
      conc: '0,1% (1 mg/g)',
      rotulo: 'Acetato de dexametasona 0,1% creme dermatológico (bisnaga 10g)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 bisnaga (10 g)',
      acesso: { rename: true, fp: false },
      instrucao: 'Como usar o creme em casa:\n1. LIMPEZA: Higienize a pele com água e sabonete neutro e seque suavemente com toalha macia, sem esfregar.\n2. APLICAÇÃO: Passe uma camada bem fina do creme sobre a área avermelhada ou com coceira (uma pequena quantidade na ponta do dedo é suficiente).\n3. MASSAGEM: Espalhe delicadamente com a ponta dos dedos até a pele absorver por completo.\n4. FREQUÊNCIA: Aplique 2 a 3 vezes ao dia conforme prescrito, preferencialmente após o banho e ao deitar.\n5. DURAÇÃO: Use por 5 a 7 dias (não exceder 14 dias seguidos sem reavaliação médica).\n6. CUIDADOS: NÃO aplicar perto dos olhos, nem dentro da boca ou nariz. Não utilizar em feridas abertas com pus, micoses ("impinges") ou bolhas de catapora/herpes.',
      obs: 'RENAME / SUS. Apresentação clássica padronizada na Atenção Básica e pronto-atendimento.'
    },
    {
      id: 'creme_15g',
      forma: 'creme',
      nome: 'Creme dermatológico 0,1% (1 mg/g - bisnaga 15 g)',
      comercial: 'Genérico / Cortidex',
      conc: '0,1% (1 mg/g)',
      rotulo: 'Acetato de dexametasona 0,1% creme dermatológico (bisnaga 15g)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 bisnaga (15 g)',
      acesso: { rename: true, fp: false },
      instrucao: 'Aplicar uma camada fina na área afetada 2 a 3 vezes ao dia durante 5 a 7 dias.',
      obs: 'Bisnaga de 15g de ampla disponibilidade comercial.'
    }
  ],
  regras: [
    // 1. Adultos
    {
      pub: 'adulto',
      vias: ['TOPICA'],
      apres: ['creme_10g', 'creme_15g'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [2, 3],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 14,
      fonte: 'MS / PSZERADO / BULA',
      trecho: 'Aplicar camada fina sobre a área lesada 2 a 3 vezes ao dia por 5 a 7 dias (máximo 14 dias).'
    },
    // 2. Pediatria (≥ 2 anos)
    {
      pub: 'ped',
      se: { idadeMinAnos: 2 },
      vias: ['TOPICA'],
      apres: ['creme_10g', 'creme_15g'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 7,
      fonte: 'SBP / BULA',
      trecho: 'Crianças a partir de 2 anos: Aplicar camada fina 1 a 2 vezes ao dia por até 5 a 7 dias, evitando áreas extensas.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 2 },
      vias: ['TOPICA'],
      msg: 'Contraindicado em crianças menores de 2 anos de idade (risco aumentado de supressão do eixo hipotálamo-hipófise-adrenal e atrofia cutânea; em lactentes e crianças menores de 2 anos, dar preferência à hidrocortisona 1%).',
      fonte: 'BULA / SBP',
      trecho: 'Contraindicado em crianças menores de 2 anos.',
      strong: true
    },
    {
      vias: ['TOPICA'],
      msg: 'Contraindicado em infecções bacterianas (impetigo), virais (herpes simples, zoster, varicela) ou fúngicas (tinea, candidíase) ativas da pele, pois os corticosteroides reduzem a imunidade celular local e promovem alastramento microbiano.',
      fonte: 'BULA / SBD',
      trecho: 'Infecções cutâneas virais, fúngicas ou bacterianas não tratadas.',
      strong: true
    },
    {
      vias: ['TOPICA'],
      msg: 'Contraindicado para uso oftálmico (não aplicar nos olhos ou pálpebras sob risco de glaucoma de ângulo aberto e formação de catarata subcapsular). Contraindicado em rosácea e dermatite perioral.',
      fonte: 'BULA',
      trecho: 'Não utilizar para fins oftálmicos.',
      strong: true
    },
    {
      vias: ['TOPICA'],
      msg: 'Contraindicado em caso de hipersensibilidade documentada à dexametasona ou aos componentes da fórmula.',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade à dexametasona.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Alívio sintomático de dermatoses inflamatórias e alérgicas responsivas a corticosteroides: dermatite de contato por plantas, cosméticos ou substâncias químicas, eczema numular, líquen simples crônico, prurido anogenital não infeccioso e picadas de insetos exuberantes.',
    administracao: 'TOPICA: Aplicar fina camada 2 a 3 vezes ao dia com leve massagem. Evitar cobrir com curativos oclusivos ou fraldas plásticas.',
    cuidados: 'PRECAUÇÃO EM FACE E PREGAS: Por ser um corticoide fluorado de média potência, o uso prolongado (> 7 a 14 dias) em face, axilas ou virilhas pode induzir atrofia dérmica, telangiectasias e dermatite perioral. Nesses locais, prefira sempre hidrocortisona 1%.',
    ajuste: 'Insuficiência renal e hepática: Absorção percutânea mínima em uso tópico limitado; não requer ajuste de dose.'
  }
};

export default dexametasonaTopica;
