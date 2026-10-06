import { Farmaco } from '../../types';

export const clobetasol: Farmaco = {
  id: 'clobetasol',
  nome: 'Propionato de Clobetasol',
  categoria: 'Dermatologia e Corticoides Tópicos',
  busca: 'clobetasol psorex propionato corticoide topico superpotente creme pomada solucao capilar psoriase eczema liquen',
  classe: 'Corticoide Tópico de Altíssima Potência (Classe I / Superpotente)',
  dosePratica: 'Psoríase em placas e eczemas recalcitrantes em Adultos: Aplicar uma fina camada sobre a lesão 1 a 2 vezes ao dia (a cada 12 ou 24 horas), massageando suavemente até completa absorção. Duração máxima de 2 a 4 semanas (não ultrapassar 50 g/semana para prevenir supressão adrenal). Para lesões secas/hiperceratóticas, preferir POMADA; para lesões úmidas/dobras, preferir CREME; para o couro cabeludo, utilizar SOLUÇÃO CAPILAR.',
  fontes: { HSL: '10/06/2016', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'lesões inflamatórias cutâneas ativas',
  acessoFonte: 'Disponível em creme e pomada 0,05% (30g) e solução capilar 0,05% (50g) comercialmente (Psorex e genéricos) e padronizado em farmácias ambulatoriais. RENAME 2024: Corticoide tópico de alta potência para dermatologia especializada.',
  apresentacoes: [
    {
      id: 'creme_005',
      forma: 'creme',
      nome: 'Creme dermatológico 0,05% (0,5 mg/g - bisnaga 30 g)',
      comercial: 'Psorex / Genérico',
      conc: '0,05% (0,5mg/g)',
      rotulo: 'Propionato de clobetasol 0,05% creme dermatológico (bisnaga 30g)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 bisnaga (30 g)',
      acesso: { rename: false, fp: false },
      instrucao: 'Lavar as mãos e higienizar suavemente a pele afetada antes do uso. Aplicar uma camada fina do creme sobre as lesões 1 a 2 vezes ao dia, massageando suavemente até completa absorção. Lavar as mãos imediatamente após a aplicação (exceto se as mãos forem a área tratada). Não cobrir a região com curativos oclusivos ou bandagens plásticas. Limitar o tempo de uso contínuo a no máximo 2 a 4 semanas consecutivas.',
      obs: 'Veículo creme hidrofílico: indicado preferencialmente para lesões úmidas, subagudas, exsudativas ou áreas de dobras flexurais.'
    },
    {
      id: 'pomada_005',
      forma: 'pomada',
      nome: 'Pomada dermatológica 0,05% (0,5 mg/g - bisnaga 30 g)',
      comercial: 'Psorex / Genérico',
      conc: '0,05% (0,5mg/g)',
      rotulo: 'Propionato de clobetasol 0,05% pomada dermatológica (bisnaga 30g)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 bisnaga (30 g)',
      acesso: { rename: false, fp: false },
      instrucao: 'Higienizar suavemente a área afetada e secar bem antes da aplicação. Aplicar uma fina camada de pomada sobre a lesão 1 a 2 vezes ao dia, espalhando suavemente. Lavar bem as mãos após a aplicação. Não ocluir a lesão com plástico ou ataduras. Usar pelo menor tempo necessário (máximo de 2 a 4 semanas consecutivas).',
      obs: 'Veículo pomada lipofílico/oclusivo: padrão-ouro para lesões secas, espessas, liquenificadas, hiperceratóticas e placas descamativas de psoríase.'
    },
    {
      id: 'sol_capilar_005',
      forma: 'sol',
      nome: 'Solução capilar 0,05% (0,5 mg/g - frasco com bico dosador 50 g)',
      comercial: 'Psorex Capilar / Genérico',
      conc: '0,05% (0,5mg/g)',
      rotulo: 'Propionato de clobetasol 0,05% solução capilar (frasco 50g)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 frasco (50 g)',
      acesso: { rename: false, fp: false },
      instrucao: 'Aplicar algumas gotas da solução diretamente sobre as lesões do couro cabeludo 1 a 2 vezes ao dia (pela manhã e/ou à noite), massageando suavemente com a ponta dos dedos. Lavar as mãos após a aplicação. O cabelo deve estar seco no momento da aplicação. Não enxaguar imediatamente e deixar secar naturalmente. Produto inflamável: manter afastado do fogo e não fumar durante o uso.',
      obs: 'Solução fluida específica para psoríase e dermatoses inflamatórias graves do couro cabeludo.'
    }
  ],
  regras: [
    // 1. Adulto - Uso Tópico Cutâneo / Couro Cabeludo
    {
      pub: 'adulto',
      vias: ['TOPICA'],
      apres: ['creme_005', 'pomada_005', 'sol_capilar_005'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 28,
      fonte: 'HSL / BULA',
      trecho: 'HSL / Bula Psorex: Adultos: Aplicar uma camada fina na área afetada 1 a 2 vezes ao dia por no máximo 2 a 4 semanas consecutivas (reduzindo a frequência conforme melhora clínica).'
    },
    // 2. Pediatria (≥ 1 ano) - Uso sob estrita supervisão especialista
    {
      pub: 'ped',
      se: { idadeMinAnos: 1 },
      vias: ['TOPICA'],
      apres: ['creme_005', 'pomada_005', 'sol_capilar_005'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 14,
      fonte: 'HSL / BULA',
      trecho: 'HSL / Bula: Crianças a partir de 1 ano de idade: aplicar 1 vez ao dia na menor área corporal possível e pelo menor tempo clinicamente viável (máximo de 1 a 2 semanas).'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 11 },
      vias: ['TOPICA'],
      msg: 'Contraindicado em lactentes e crianças menores de 1 ano de idade (incluindo dermatite de fraldas), devido ao alto risco de absorção sistêmica percutânea com supressão do eixo HPA e síndrome de Cushing.',
      fonte: 'HSL / BULA',
      trecho: 'Contraindicado em dermatoses em crianças menores de 1 ano de idade (incluindo dermatites e erupções de fraldas).',
      strong: true
    },
    {
      msg: 'Contraindicado em lesões cutâneas decorrentes de infecções primárias não tratadas por vírus (herpes simples, herpes-zóster, varicela), fungos (candidíase, dermatofitoses/tíneas) ou bactérias (impetigo, piodermites).',
      fonte: 'HSL / BULA',
      trecho: 'Contraindicado em infecções cutâneas primárias causadas por vírus, fungos ou bactérias.',
      strong: true
    },
    {
      msg: 'Contraindicado na face em pacientes com rosácea, acne vulgar ou dermatite perioral (risco de piora acentuada da dermatose e atrofia facial com telangiectasias).',
      fonte: 'HSL / BULA',
      trecho: 'O uso não é indicado para tratamento de acne vulgaris, dermatite perioral e rosácea.',
      strong: true
    },
    {
      msg: 'Contraindicado no tratamento de prurido perianal ou prurido genital sem diagnóstico dermatológico inflamatório firmado.',
      fonte: 'HSL / BULA',
      trecho: 'Contraindicado no prurido perianal e genital.',
      strong: false
    },
    {
      msg: 'Evitar aplicação em áreas intertriginosas (axilas, virilhas), dobras cutâneas ou sob curativos oclusivos pelo alto risco de atrofia cutânea acelerada, estrias definitivas e absorção sistêmica.',
      fonte: 'BULA / PSZERADO',
      trecho: 'Não aplicar sob oclusão nem em áreas de dobras cutâneas.',
      strong: false
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade ao propionato de clobetasol ou a qualquer componente da formulação.',
      fonte: 'HSL / BULA',
      trecho: 'Hipersensibilidade ao propionato de clobetasol.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Tratamento tópico de curta duração da psoríase em placas recalcitrante (excluindo a forma em placas disseminada), eczemas e dermatites refratárias a outros corticoides tópicos, líquen plano, líquen escleroso e atrófico, lúpus eritematoso discoide e outras dermatoses inflamatórias graves não responsivas (HSL / Guia UPA).',
    administracao: 'TOPICA: Aplicar uma camada fina suficiente para cobrir apenas a área acometida, 1 a 2 vezes ao dia. Massagear suavemente. Não cobrir a região com curativos plásticos/oclusivos. Lavar as mãos após a aplicação.',
    cuidados: 'POTÊNCIA CLASSE I E SUPRESSÃO ADRENAL: É o corticoide tópico mais potente disponível. O limite máximo de segurança é de 50 g por semana em adultos. O tratamento contínuo não deve exceder 4 semanas (em crianças, máximo de 1 a 2 semanas). DESMAME PROGRESSIVO: Após o controle da crise aguda, desmamar para aplicação em dias alternados ou transicionar para um corticoide de média/baixa potência antes da suspensão, a fim de evitar rebote inflamatório da psoríase. ATROFIA CUTÂNEA: Monitorar atrofia da epiderme, telangiectasias, púrpura e estrias, especialmente se usado na face ou dobras.',
    ajuste: 'Insuficiência renal e hepática: Cautela em insuficiência hepática avançada pela redução da depuração metabólica do fármaco absorvido sistemicamente.'
  }
};

export default clobetasol;
