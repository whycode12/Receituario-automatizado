/**
 * MEDICAMENTO: Pasta d'Água (Óxido de Zinco 25% + Glicerina + Talco)
 * CLASSE: Protetor cutâneo / Adstringente / Antipruriginoso / Secativo
 * FONTES:
 *   - HSL: Guia Farmacêutico Hospital Sírio-Libanês (Óxido de zinco + glicerina + talco)
 *   - Farmacopeia Brasileira / Formulário Nacional
 *   - Ministério da Saúde / RENAME / Atenção Básica
 */

import { Farmaco } from '../../types';

export const pastaDagua: Farmaco = {
  id: 'pasta-dagua',
  nome: "Pasta d'Água (Óxido de Zinco 25%)",
  categoria: 'Dermatologia e Curativos',
  busca: 'pasta dagua pasta d agua oxido de zinco talco glicerina brotoeja miliaria catapora varicela queimadura solar assadura secativo antipruriginoso',
  classe: 'Protetor Cutâneo, Adstringente e Secativo Tópico',
  dosePratica: '1. Brotoeja (Miliária) e Alívio de Coceira (Varicela/Catapora): Agitar vigorosamente o frasco e aplicar suavemente uma camada fina sobre a pele limpa e seca 2 a 3 vezes ao dia com algodão ou gaze; deixar secar naturalmente ao ar. 2. Queimaduras Solares Leves e Dermatites/Assaduras: Aplicar 2 a 3 vezes ao dia nas áreas avermelhadas ou sob a fralda após a higiene. Uso exclusivamente externo.',
  fontes: { HSL: '14/02/2017', MS: '2023', BULA: '04/10/2026' },
  snPadrao: 'se coceira, calor local, brotoeja ou assadura',
  acessoFonte: 'Padronizada no Formulário Nacional da Farmacopeia Brasileira e na RENAME / Farmácia Básica do SUS (pasta d\'água frasco 100g e 120g).',
  apresentacoes: [
    {
      id: 'frasco_100g',
      forma: 'sol',
      nome: "Pasta d'Água frasco 100 g",
      comercial: "Pasta d'Água Simples / Genérico / Manipulada",
      conc: 'Óxido de zinco 25% + Talco 25% + Glicerina 25%',
      rotulo: "Pasta d'Água (óxido de zinco 25%) frasco 100 g",
      mg: 1,
      frascoMl: 100,
      vias: ['TOPICA'],
      disp: '1 frasco (100 g)',
      acesso: { rename: true, fp: false },
      instrucao: 'Como usar em casa:\n1. IMPORTANTE: AGITE MUITO BEM O FRASCO antes de cada aplicação (os componentes decantam no fundo e precisam ser bem misturados).\n2. Lave a pele com água morna e sabonete suave e seque com toalha macia, sem esfregar.\n3. Umedeça um pedaço de algodão ou gaze limpa com a Pasta d\'Água e passe delicadamente uma camada fina sobre a pele irritada (brotoejas, bolinhas de catapora ou vermelhidão do sol).\n4. Deixe a pele secar ao ar livre por 2 a 3 minutos (vai se formar uma película branca protetora e refrescante).\n5. Repita 2 a 3 vezes ao dia conforme a necessidade.\n6. Uso somente externo na pele. Não aplicar nos olhos, dentro da boca ou do nariz, nem em feridas abertas com pus.',
      obs: 'RENAME / SUS. Fórmula clássica secativa e antipruriginosa com ação refrescante e barreira protetora.'
    },
    {
      id: 'frasco_120g',
      forma: 'sol',
      nome: "Pasta d'Água frasco 120 g",
      comercial: "Pasta d'Água Simples / Genérico",
      conc: 'Óxido de zinco 25% + Talco 25% + Glicerina 25%',
      rotulo: "Pasta d'Água (óxido de zinco 25%) frasco 120 g",
      mg: 1,
      frascoMl: 120,
      vias: ['TOPICA'],
      disp: '1 frasco (120 g)',
      acesso: { rename: true, fp: false },
      instrucao: 'Como usar em casa:\n1. Agite muito bem o frasco antes de usar para misturar o produto.\n2. Limpe a área afetada suavemente com água e sabão neutro e seque sem fricção.\n3. Aplique uma camada fina sobre as lesões utilizando algodão ou gaze estéril.\n4. Deixe secar naturalmente na pele (camada branca calmante).\n5. Repita 2 a 3 vezes ao dia.\n6. Evite contato com mucosas e feridas abertas infectadas.',
      obs: 'Apresentação comercial comum em farmácias comunitárias e drogarias.'
    }
  ],
  regras: [
    // 1. Adultos
    {
      pub: 'adulto',
      vias: ['TOPICA'],
      apres: ['frasco_100g', 'frasco_120g'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [2, 4],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 14,
      fonte: 'HSL / Farmacopeia Brasileira',
      trecho: 'Aplicar na área afetada 2 a 4 vezes ao dia após higiene e agitação prévia do frasco.'
    },
    // 2. Pediatria (todas as idades, incluindo lactentes)
    {
      pub: 'ped',
      vias: ['TOPICA'],
      apres: ['frasco_100g', 'frasco_120g'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [2, 4],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 14,
      fonte: 'SBP / MS / Farmacopeia Brasileira',
      trecho: 'Lactentes e crianças: Aplicar camada fina sobre as áreas afetadas por miliária (brotoeja), assaduras ou prurido de 2 a 4 vezes ao dia.'
    }
  ],
  contra: [
    {
      vias: ['TOPICA'],
      msg: 'Uso exclusivamente externo (tópico cutâneo). Contraindicado em caso de hipersensibilidade ao óxido de zinco ou componentes da fórmula.',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade conhecida aos componentes da fórmula.',
      strong: false
    },
    {
      vias: ['TOPICA'],
      msg: 'Não aplicar diretamente em feridas abertas com crostas espessas, necrose ou infecção purulenta bacteriana franca (a pasta pode formar crosta que dificulta a drenagem e a higienização).',
      fonte: 'MS / HSL',
      trecho: 'Evitar aplicação sobre lesões ulceradas abertas infectadas.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Alívio sintomático de brotoejas (miliária rubra), prurido da catapora (varicela), queimaduras solares leves de 1º grau, dermatite de atrito, prevenção de assaduras em dobras cutâneas e proteção tópica de barreira.',
    administracao: 'TOPICA: Agitar vigorosamente o frasco antes da aplicação para homogeneizar o óxido de zinco e talco. Espalhar camada fina e uniforme sobre a pele limpa e seca com o auxílio de gaze ou algodão. Deixar secar ao ar livre.',
    cuidados: 'Evitar contato com os olhos, boca e narinas. Em caso de catapora, orientar a não coçar as lesões para evitar cicatrizes e infecção bacteriana secundária (impetinização). Conservar o frasco fechado em temperatura ambiente.',
    ajuste: 'Insuficiência renal e hepática: Uso exclusivamente tópico protetor de barreira com absorção sistêmica desprezível; não requer ajuste de dose.'
  }
};

export default pastaDagua;
