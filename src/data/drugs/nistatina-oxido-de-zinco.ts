/**
 * MEDICAMENTO: Nistatina + Óxido de Zinco (Pomada Dermatológica)
 * CLASSE: Antifúngico Poliênico Tópico + Protetor Cutâneo / Adstringente
 * FONTES:
 *   - SBP (Sociedade Brasileira de Pediatria): Abordagem prática da dermatite das fraldas e candidíase cutânea
 *   - Ministério da Saúde / RENAME: Pomada de Nistatina 100.000 UI/g + Óxido de Zinco 200 mg/g
 *   - HSL: Farmacologia da nistatina e óxido de zinco
 *   - Bulário ANVISA: Dermodex Tratamento / Nistatina + Óxido de Zinco
 */

import { Farmaco } from '../../types';

export const nistatinaOxidoDeZinco: Farmaco = {
  id: 'nistatina-oxido-de-zinco',
  nome: 'Nistatina + Óxido de Zinco (Pomada)',
  categoria: 'Dermatologia e Curativos',
  busca: 'nistatina oxido de zinco dermodex tratamento dermodex assadura fungo sapinho fralda candidiase de fralda intertrigo candidiasico eritema gluteo',
  classe: 'Antifúngico Tópico Associado a Protetor Cutâneo e Barreira Adstringente',
  dosePratica: '1. Dermatite das Fraldas com Candidíase (Assadura Fúngica em Bebês e Idosos): Limpar a área suavemente com água morna e secar bem sem esfregar. Aplicar uma camada protetora da pomada sobre a pele avermelhada a cada troca de fraldas (2 a 4 vezes ao dia), mantendo por pelo menos 48 a 72 horas após o desaparecimento completo das lesões (duração média 7 a 10 dias). 2. Intertrigo Candidiásico em Dobras Cutâneas (Adultos): Aplicar 2 a 3 vezes ao dia sobre a pele limpa e seca.',
  fontes: { HSL: '14/02/2017', MS: '2023', BULA: '04/10/2026' },
  snPadrao: 'a cada troca de fraldas ou após banho e higiene local',
  acessoFonte: 'RENAME / Farmácia Básica do SUS: Pomada contendo Nistatina 100.000 UI/g + Óxido de Zinco 200 mg/g (bisnagas de 40g e 60g) disponível gratuitamente na rede pública.',
  apresentacoes: [
    {
      id: 'pomada_60g',
      forma: 'pomada',
      nome: 'Pomada dermatológica (Nistatina 100.000 UI/g + Óxido de Zinco 200 mg/g - bisnaga 60 g)',
      comercial: 'Dermodex Tratamento / Genérico',
      conc: 'Nistatina 100.000 UI/g + Óxido de Zinco 200 mg/g (20%)',
      rotulo: 'Nistatina + Óxido de zinco pomada dermatológica (bisnaga 60g)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 a 2 bisnagas (60 g cada)',
      acesso: { rename: true, fp: false },
      instrucao: 'Como cuidar da pele e aplicar a pomada:\n1. LIMPEZA SUAVE: A cada troca de fralda, limpe a região genital e o bumbum delicadamente com água morna e algodão macio. Evite o uso de lenços umedecidos comuns durante o tratamento para não irritar ainda mais a pele ferida.\n2. SECAGEM: Seque muito bem as dobras com uma toalha macia dando batidinhas suaves (nunca esfregue).\n3. VENTILAÇÃO: Sempre que possível, deixe o bebê alguns minutos sem fralda para a pele respirar e secar totalmente ao ar livre.\n4. APLICAÇÃO: Espalhe uma camada fina a moderada da pomada cobrindo toda a área avermelhada e com bolinhas.\n5. NÃO APERTE A FRALDA: Coloque a fralda limpa deixando-a um pouco mais frouxa para reduzir o atrito e o calor local.\n6. DURAÇÃO: Continue usando a pomada por mais 2 a 3 dias após a vermelhidão ter sumido totalmente, para garantir que o fungo não retorne.\n7. Se a pele não melhorar em 5 a 7 dias ou surgirem feridas com pus ou febre, retorne para avaliação médica.',
      obs: 'RENAME / SUS. Apresentação clássica para tratamento curativo de assaduras de fralda complicadas por Candida albicans.'
    },
    {
      id: 'pomada_40g',
      forma: 'pomada',
      nome: 'Pomada dermatológica (Nistatina 100.000 UI/g + Óxido de Zinco 200 mg/g - bisnaga 40 g)',
      comercial: 'Dermodex Tratamento / Genérico',
      conc: 'Nistatina 100.000 UI/g + Óxido de Zinco 200 mg/g (20%)',
      rotulo: 'Nistatina + Óxido de zinco pomada dermatológica (bisnaga 40g)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 bisnaga (40 g)',
      acesso: { rename: true, fp: false },
      instrucao: 'Aplicar uma camada uniforme da pomada na região afetada 2 a 4 vezes ao dia após higiene e secagem cuidadosa da pele. Manter o tratamento por até 48 a 72 horas após o alívio completo dos sintomas.',
      obs: 'Tamanho compacto de bisnaga dermatológica.'
    }
  ],
  regras: [
    // 1. Pediatria (Lactentes e crianças usando fraldas)
    {
      pub: 'ped',
      vias: ['TOPICA'],
      apres: ['pomada_60g', 'pomada_40g'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [2, 4],
      dosesPadrao: 4,
      intervaloFixo: 6,
      duracaoMaxDias: 14,
      fonte: 'SBP / MS / BULA',
      trecho: 'Dermatite das fraldas com candidíase: Aplicar a cada troca de fralda (2 a 4 vezes ao dia) durante 7 a 10 dias.'
    },
    // 2. Adultos (Intertrigo candidiásico em dobras ou pacientes acamados usando fraldas geriátricas)
    {
      pub: 'adulto',
      vias: ['TOPICA'],
      apres: ['pomada_60g', 'pomada_40g'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [2, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 14,
      fonte: 'SBD / BULA',
      trecho: 'Intertrigo e dermatites de dobras: Aplicar 2 a 4 vezes ao dia sobre a pele limpa e seca até resolução clínica completa.'
    }
  ],
  contra: [
    {
      vias: ['TOPICA'],
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada à nistatina, ao óxido de zinco ou a qualquer componente da base da pomada.',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade conhecida à nistatina ou óxido de zinco.',
      strong: true
    },
    {
      vias: ['TOPICA'],
      msg: 'Uso exclusivamente externo na pele. Não aplicar nos olhos nem dentro da cavidade oral (para candidíase oral / "sapinho na boca", prescrever nistatina suspensão oral líquida).',
      fonte: 'BULA / SBP',
      trecho: 'Não utilizar em mucosas orais ou oftalmológicas.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Tratamento de dermatite das fraldas com infecção secundária por cândida (assadura amoniacal complicada por Candida albicans em lactentes, crianças e idosos incontinentes); intertrigo candidiásico em grandes dobras cutâneas (inframamárias, inguinais e axilares).',
    administracao: 'TOPICA: Aplicar após cada troca de fralda ou após o banho, com a pele previamente lavada e seca. A camada deve ser suficiente para cobrir as lesões e agir como barreira protetora contra urina e fezes.',
    cuidados: 'DIFERENCIAÇÃO CLÍNICA: A dermatite de contato simples por atrito poupa as pregas profundas. Quando há acometimento das pregas mais profundas com eritema vermelho-vivo e pequenas pápulas/pústulas ao redor ("lesões satélites"), a infecção fúngica por cândida está presente e necessita desta associação.',
    ajuste: 'Insuficiência renal e hepática: Princípios ativos não absorvidos por via tópica; não há necessidade de ajuste de dose.'
  }
};

export default nistatinaOxidoDeZinco;
