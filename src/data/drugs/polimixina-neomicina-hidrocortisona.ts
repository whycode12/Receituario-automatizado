/**
 * MEDICAMENTO: Polimixina B + Neomicina + Hidrocortisona (Gotas Otológicas)
 * CLASSE: Antibacteriano e Anti-inflamatório Otológico
 * FONTES:
 *   - ABORL-CCF (Associação Brasileira de Otorrinolaringologia): Diretrizes Brasileiras de Otite Externa
 *   - Ministério da Saúde / RENAME: Gotas otológicas antibióticas associadas a corticoide
 *   - HSL: Guia Farmacêutico Hospital Sírio-Libanês (Neomicina + Polimixina B + Hidrocortisona)
 *   - Bulário ANVISA: Otosporin gotas otológicas / Genérico
 */

import { Farmaco } from '../../types';

export const polimixinaNeomicinaHidrocortisona: Farmaco = {
  id: 'polimixina-neomicina-hidrocortisona',
  nome: 'Polimixina B + Neomicina + Hidrocortisona (Gotas Otológicas)',
  categoria: 'Otorrinolaringologia e Gotas Otológicas',
  busca: 'otosporin gotas otologicas neomicina polimixina hidrocortisona dor de ouvido otite externa otite do nadador pingar no ouvido tragus doloroso',
  classe: 'Antibacteriano e Anti-inflamatório Otológico (Aminoglicosídeo + Polipeptídeo + Corticosteroide)',
  dosePratica: 'Otite Externa Aguda Bacteriana e Eczematosa ("Otite do Nadador" / Dor Intensa à Tração do Pavilhão Auricular e Compressão do Trágus): Adultos: Pingar 3 a 4 gotas no conduto auditivo afetado 3 a 4 vezes ao dia (a cada 6 ou 8 horas) por 7 a 10 dias. Crianças a partir de 2 anos: Pingar 2 a 3 gotas 3 a 4 vezes ao dia por 7 dias. ATENÇÃO: Contraindicado se houver suspeita de perfuração da membrana timpânica (risco de ototoxicidade por neomicina).',
  fontes: { HSL: '14/02/2017', MS: '2023', BULA: '04/10/2026' },
  snPadrao: 'aplicação no conduto auditivo afetado',
  acessoFonte: 'Padronizado na RENAME / Farmácia Básica e hospitalar e amplamente disponível nas drogarias brasileiras (Otosporin e genéricos frasco conta-gotas 10 mL).',
  apresentacoes: [
    {
      id: 'gotas_10ml',
      forma: 'gotas',
      nome: 'Gotas otológicas (Polimixina B 10.000 UI + Neomicina 3.500 UI + Hidrocortisona 10 mg por mL - frasco 10 mL)',
      comercial: 'Otosporin / Genérico',
      conc: 'Polimixina B 10.000 UI/mL + Neomicina 3.500 UI/mL + Hidrocortisona 10 mg/mL',
      rotulo: 'Polimixina B + Neomicina + Hidrocortisona gotas otológicas (frasco 10 mL)',
      mg: 1,
      gotasml: 20,
      volml: 10,
      frascoMl: 10,
      vias: ['OTOLOGICA'],
      disp: '1 frasco conta-gotas (10 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Como pingar as gotas no ouvido com segurança e sem sentir tontura:\n1. AQUEÇA O FRASCO: Segure o frasco fechado entre as palmas das mãos por 1 a 2 minutos para que ele fique na temperatura do seu corpo. (Pingar remédio gelado no ouvido pode desencadear crise forte de labirintite e tontura rotatória!).\n2. POSIÇÃO: Deite-se de lado em uma cama ou incline bem a cabeça, deixando o ouvido dolorido virado para cima.\n3. ALINHE O CANAL DO OUVIDO:\n   - Em adultos: puxe a orelha delicadamente para trás e para cima.\n   - Em crianças: puxe a orelha delicadamente para trás e para baixo.\n4. APLICAÇÃO: Pingue as gotas diretamente dentro do canal do ouvido. NÃO encoste a ponta do conta-gotas na orelha.\n5. PERMANEÇA DEITADO: Fique na mesma posição deitado por 3 a 5 minutos para que as gotas cheguem ao fundo do canal e não escorram para fora.\n6. CUIDADO COM ÁGUA: Durante todo o tratamento (7 dias), NÃO deixe entrar água no ouvido doente durante o banho (proteja com um pedaço de algodão embebido em vaselina na entrada) e não pratique natação.\n7. ALERTA IMPORTANTE: Se o ouvido estiver saindo pus após pancada ou se você tiver o tímpano perfurado, não use este remédio e procure o médico.',
      obs: 'RENAME / SUS. Cobertura bactericida potente contra Pseudomonas aeruginosa e Staphylococcus aureus com ação anti-inflamatória rápida da hidrocortisona para diminuir o edema e a dor.'
    }
  ],
  regras: [
    // 1. Adultos
    {
      pub: 'adulto',
      vias: ['OTOLOGICA'],
      apres: ['gotas_10ml'],
      tipo: 'mg',
      min: 3,
      max: 4,
      padrao: 3,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 10,
      fonte: 'ABORL-CCF / BULA / HSL',
      trecho: 'Otite externa aguda em adultos: Instilar 3 a 4 gotas no meato acústico externo 3 a 4 vezes ao dia por 7 a 10 dias.'
    },
    // 2. Pediatria (≥ 2 anos)
    {
      pub: 'ped',
      se: { idadeMinAnos: 2 },
      vias: ['OTOLOGICA'],
      apres: ['gotas_10ml'],
      tipo: 'mg',
      min: 2,
      max: 3,
      padrao: 2,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 7,
      fonte: 'SBP / ABORL-CCF / BULA',
      trecho: 'Crianças a partir de 2 anos: Instilar 2 a 3 gotas no ouvido afetado 3 a 4 vezes ao dia por 7 dias.'
    }
  ],
  contra: [
    {
      vias: ['OTOLOGICA'],
      msg: 'CONTRAINDICAÇÃO ABSOLUTA: Suspeita ou diagnóstico de perfuração da membrana timpânica, presença de carretel/tubo de ventilação timpânico ou otite média com otorréia. A penetração de neomicina e polimixina B na orelha média/interna provoca lesão ototóxica coclear e vestibular grave e irreversível.',
      fonte: 'ABORL-CCF / BULA',
      trecho: 'Contraindicado em perfuração da membrana timpânica.',
      strong: true
    },
    {
      pub: 'ped',
      se: { idadeMaxAnos: 2 },
      vias: ['OTOLOGICA'],
      msg: 'Contraindicado em crianças menores de 2 anos de idade (risco potencial de absorção com ototoxicidade e nefrotoxicidade em condutos curtos e imaturos).',
      fonte: 'BULA / SBP',
      trecho: 'Contraindicado em crianças menores de 2 anos.',
      strong: true
    },
    {
      vias: ['OTOLOGICA'],
      msg: 'Contraindicado em infecções virais (herpes simples, herpes zoster ótico) ou fúngicas (otomicoses por Aspergillus ou Candida) do conduto auditivo externo. Contraindicado em caso de alergia conhecida a aminoglicosídeos.',
      fonte: 'BULA',
      trecho: 'Otomicoses e afecções virais do ouvido.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Tratamento tópico de otite externa bacteriana aguda (infecções por Pseudomonas aeruginosa, Staphylococcus aureus, Proteus spp.), otite externa eczematosa aguda e furunculose do conduto auditivo externo íntegro.',
    administracao: 'OTOLOGICA: Aquecer o frasco nas mãos antes de pingar. Manter o paciente em decúbito lateral por 3 a 5 minutos após a aplicação. Não ocluir com tampões apertados.',
    cuidados: 'PROTEÇÃO AUDITIVA CONTRA ÁGUA: Manter o conduto rigorosamente seco durante todo o tratamento. A entrada de água da torneira ou piscina neutraliza o pH ácido e retroalimenta o crescimento de Pseudomonas.',
    ajuste: 'Insuficiência renal e hepática: Em membrana timpânica íntegra não ocorre absorção sistêmica; dispensa ajuste de dose.'
  }
};

export default polimixinaNeomicinaHidrocortisona;
