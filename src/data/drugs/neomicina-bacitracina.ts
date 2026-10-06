/**
 * MEDICAMENTO: Neomicina + Bacitracina (Pomada Dermatológica)
 * CLASSE: Antibacteriano Tópico Associado (Aminoglicosídeo + Polipeptídeo)
 * FONTES:
 *   - Ministério da Saúde / RENAME: Sulfato de Neomicina 5 mg/g + Bacitracina Zíncica 250 UI/g
 *   - Guia de Prescrição PSZerado (2025): Infecções cutâneas bacterianas superficiais e escoriações
 *   - HSL: Guia Farmacêutico Hospital Sírio-Libanês (Neomicina tópica e aminoglicosídeos)
 *   - Bulário ANVISA: Nebacetin / Neomicina + Bacitracina pomada
 */

import { Farmaco } from '../../types';

export const neomicinaBacitracina: Farmaco = {
  id: 'neomicina-bacitracina',
  nome: 'Neomicina + Bacitracina (Pomada)',
  categoria: 'Dermatologia e Curativos',
  busca: 'neomicina bacitracina nebacetin neomicina com bacitracina pomada para corte escoriacao arranhao ferida infeccionada queimadura leve antimicrobiano topico',
  classe: 'Antibacteriano Tópico de Amplo Espectro (Aminoglicosídeo + Polipeptídeo)',
  dosePratica: 'Prevenção e Tratamento de Infecções Cutâneas Bacterianas em Escoriações, Pequenos Cortes, Queimaduras Leves e Feridas Traumáticas: Limpar a área com soro fisiológico ou água morna e sabonete neutro. Aplicar uma camada fina da pomada sobre o ferimento 2 a 3 vezes ao dia (a cada 8 ou 12 horas) durante 5 a 7 dias (máximo de 8 a 10 dias). Contraindicado em menores de 2 anos e em queimaduras/úlceras muito extensas.',
  fontes: { MS: '2023', PSZERADO: '2025', HSL: '14/02/2017', BULA: '04/10/2026' },
  snPadrao: 'aplicação sobre ferimentos, escoriações ou pequenos cortes',
  acessoFonte: 'RENAME / Farmácia Básica do SUS: Pomada contendo Sulfato de Neomicina 5 mg/g (3,5 mg base) + Bacitracina zíncica 250 UI/g em bisnagas de 15g e 50g (Nebacetin e genéricos).',
  apresentacoes: [
    {
      id: 'pomada_15g',
      forma: 'pomada',
      nome: 'Pomada dermatológica (Neomicina 5 mg/g + Bacitracina 250 UI/g - bisnaga 15 g)',
      comercial: 'Nebacetin / Genérico',
      conc: 'Neomicina 5 mg/g + Bacitracina 250 UI/g',
      rotulo: 'Neomicina + Bacitracina pomada dermatológica (bisnaga 15g)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 bisnaga (15 g)',
      acesso: { rename: true, fp: false },
      instrucao: 'Como cuidar do machucado e usar a pomada em casa:\n1. LIMPEZA DA PELE: Lave bem as mãos com água e sabão. Lave o machucado ou corte com soro fisiológico 0,9% ou com água corrente e sabonete neutro, retirando qualquer terra ou impureza visível.\n2. SECAGEM: Seque delicadamente ao redor da lesão encostando uma gaze limpa (sem esfregar a ferida).\n3. APLICAÇÃO: Passe uma camada fina da pomada cobrindo toda a área machucada.\n4. CURATIVO: Se a lesão estiver em local de atrito ou sujeira (como mãos, pés ou joelhos), cubra com uma gaze limpa ou curativo adesivo. Se estiver em local limpo e protegido, pode deixar respirar ao ar livre.\n5. REPETIÇÃO: Aplique 2 a 3 vezes ao dia durante 5 a 7 dias (não exceder 8 a 10 dias de uso contínuo).\n6. ATENÇÃO: NÃO passar nos olhos, nem dentro do canal do ouvido se houver suspeita de tímpano furado, nem em queimaduras muito extensas.',
      obs: 'RENAME / SUS. Apresentação clássica e mais prescrita na Atenção Básica e prontos-socorros.'
    },
    {
      id: 'pomada_50g',
      forma: 'pomada',
      nome: 'Pomada dermatológica (Neomicina 5 mg/g + Bacitracina 250 UI/g - bisnaga 50 g)',
      comercial: 'Nebacetin / Genérico',
      conc: 'Neomicina 5 mg/g + Bacitracina 250 UI/g',
      rotulo: 'Neomicina + Bacitracina pomada dermatológica (bisnaga 50g)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 bisnaga (50 g)',
      acesso: { rename: true, fp: false },
      instrucao: 'Aplicar uma camada fina sobre a lesão cutânea higienizada de 2 a 3 vezes ao dia, por período de 5 a 7 dias.',
      obs: 'RENAME / SUS. Bisnaga maior para múltiplos ferimentos ou trocas frequentes.'
    }
  ],
  regras: [
    // 1. Adultos
    {
      pub: 'adulto',
      vias: ['TOPICA'],
      apres: ['pomada_15g', 'pomada_50g'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [2, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 10,
      fonte: 'BULA / PSZERADO / MS',
      trecho: 'Aplicar fina camada sobre a lesão 2 a 4 vezes ao dia por 5 a 7 dias (máximo de 8 a 10 dias de tratamento contínuo).'
    },
    // 2. Pediatria (≥ 2 anos)
    {
      pub: 'ped',
      se: { idadeMinAnos: 2 },
      vias: ['TOPICA'],
      apres: ['pomada_15g', 'pomada_50g'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [2, 3],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 8,
      fonte: 'SBP / BULA',
      trecho: 'Crianças a partir de 2 anos: Aplicar camada fina 2 a 3 vezes ao dia durante 5 a 7 dias.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 2 },
      vias: ['TOPICA'],
      msg: 'Contraindicado em bebês e crianças menores de 2 anos de idade (risco aumentado de absorção percutânea da neomicina e potencial de nefrotoxicidade e ototoxicidade pelo sistema renal e auditivo imaturos).',
      fonte: 'BULA / SBP',
      trecho: 'Contraindicado em crianças menores de 2 anos.',
      strong: true
    },
    {
      vias: ['TOPICA'],
      msg: 'Contraindicado em pacientes com histórico de hipersensibilidade a aminoglicosídeos (neomicina, gentamicina, amicacina) ou à bacitracina.',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade conhecida aos aminoglicosídeos ou bacitracina.',
      strong: true
    },
    {
      vias: ['TOPICA'],
      msg: 'Contraindicado em queimaduras graves extensas ou úlceras tróficas muito amplas (> 20% da superfície corporal) devido ao risco de absorção sistêmica significativa de neomicina, levando a ototoxicidade irreversível e nefrotoxicidade.',
      fonte: 'BULA / MS',
      trecho: 'Não aplicar em superfícies cutâneas extensas ulceradas ou queimadas.',
      strong: true
    },
    {
      vias: ['TOPICA'],
      msg: 'Não aplicar nos olhos (pomada não oftálmica) nem no conduto auditivo com suspeita ou confirmação de perfuração da membrana timpânica.',
      fonte: 'BULA',
      trecho: 'Não utilizar nos olhos nem em perfuração timpânica.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Prevenção e tratamento de infecções bacterianas estafilocócicas e estreptocócicas superficiais em ferimentos traumáticos limpos, escoriações, pequenos cortes, queimaduras de 1º grau, abrasões e suturas de pequeno porte.',
    administracao: 'TOPICA: Aplicar fina camada sobre a área lesada previamente higienizada 2 a 3 vezes ao dia. Pode ser ocluído com gaze se necessário.',
    cuidados: 'SENSIBILIZAÇÃO CUTÂNEA: A neomicina é um dos alérgenos de contato mais comuns. Se houver piora da vermelhidão, inchaço ou coceira no local da aplicação após alguns dias, suspeitar de dermatite de contato alérgica pelo medicamento e suspender o uso.',
    ajuste: 'Insuficiência renal: Em pequenas feridas cutâneas a absorção é desprezível. Evitar estritamente o uso em áreas extensas desnudadas em pacientes com Clcr < 30 mL/min.'
  }
};

export default neomicinaBacitracina;
