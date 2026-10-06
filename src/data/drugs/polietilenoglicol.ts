import { Farmaco } from '../../types';

export const polietilenoglicol: Farmaco = {
  id: 'polietilenoglicol',
  nome: 'Polietilenoglicol (PEG 4000 / Macrogol)',
  categoria: 'Gastrintestinal e Laxativos Osmóticos',
  busca: 'polietilenoglicol peg 4000 macrogol muvinlax constipacao laxativo osmotico fecaloma preparo',
  classe: 'Laxativo Osmótico Iso-osmolar Inerte (Macrogol)',
  dosePratica: 'Constipação Crônica / Funcional Adulto: 1 sachê de 14g ou 17g (ou 10 a 20g do pó PEG 4000) diluído em 150 a 200 mL de água/suco 1x/dia pela manhã (pode aumentar até 2 sachês/dia se refratário). Pediatria (Constipação Funcional - SBP): Manutenção: 0,5 a 0,8 g/kg/dia (padrão 0,7 g/kg/dia) VO 1x/dia diluído em líquido; Desimpactação fecal: 1 a 1,5 g/kg/dia por 3 a 6 dias.',
  fontes: { SBP: '2023', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'constipação intestinal ou desimpactação de fezes endurecidas',
  acessoFonte: 'Disponível em sachês comerciais padronizados (Muvinlax / Pielsana PEG / Manipulação magistral) e padronizado em diversas REMUME municipais e farmácias comunitárias.',
  apresentacoes: [
    {
      id: 'sache_14g',
      forma: 'sachet',
      nome: 'Sachê pó oral 14 g (com eletrólitos / Macrogol 3350)',
      comercial: 'Muvinlax / Genérico',
      conc: '14g/sachê',
      rotulo: 'Macrogol 3350 pó para solução oral (sachê 14g)',
      mg: 14000,
      vias: ['VO'],
      disp: '1 caixa com 20 sachês',
      acesso: { rename: false, fp: false },
      instrucao: 'Dissolver completamente o conteúdo de 1 sachê em um copo (aproximadamente 125 a 150 mL) de água, suco ou chá à temperatura ambiente. Misturar bem com uma colher até completa homogeneização e tomar preferencialmente pela manhã logo após o café. O efeito laxativo habitual ocorre em 24 a 48 horas.',
      obs: 'Contém eletrólitos balanceados (bicarbonato, cloreto de sódio e potássio). Indicado para adultos e crianças acima de 7 anos.'
    },
    {
      id: 'sache_17g',
      forma: 'sachet',
      nome: 'Sachê pó oral 17 g (PEG 4000 puro sem eletrólitos)',
      comercial: 'Pielsana PEG / Muvinor / Manipulação',
      conc: '17g/sachê',
      rotulo: 'Polietilenoglicol 4000 puro pó para solução oral (sachê 17g)',
      mg: 17000,
      vias: ['VO'],
      disp: '1 caixa com 30 sachês',
      acesso: { rename: false, fp: false },
      instrucao: 'Dissolver 1 sachê em 150 a 200 mL de água, suco, leite ou líquido de preferência (produto inodoro e insípido). Ingerir imediatamente após dissolver. Manter ingestão regular de líquidos ao longo do dia.',
      obs: 'Formulação pura de 17 g sem eletrólitos e sem sabor, consagrada para adultos e adolescentes.'
    },
    {
      id: 'sache_10g',
      forma: 'sachet',
      nome: 'Sachê pó oral 10 g (PEG 4000 puro sem eletrólitos)',
      comercial: 'PEG 4000 pediátrico / Manipulação',
      conc: '10g/sachê',
      rotulo: 'Polietilenoglicol 4000 puro pó para solução oral (sachê 10g)',
      mg: 10000,
      vias: ['VO'],
      disp: '1 caixa com 30 sachês',
      acesso: { rename: false, fp: false },
      instrucao: 'Dissolver 1 sachê em 100 a 150 mL de água, suco, leite ou líquido de preferência. Ingerir preferencialmente pela manhã.',
      obs: 'Formulação de escolha padrão-ouro pela Sociedade Brasileira de Pediatria (SBP) pela alta palatabilidade e ausência de sabor salgado.'
    }
  ],
  regras: [
    // 1. Adulto Constipação Crônica - Sachê 14g
    {
      pub: 'adulto',
      vias: ['VO'],
      apres: ['sache_14g'],
      tipo: 'mg',
      min: 14000,
      max: 28000,
      padrao: 14000,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      fonte: 'PSZERADO / BULA',
      trecho: 'Adultos: 14 a 28 g/dia (1 a 2 sachês de 14g) diluídos em água, tomados preferencialmente pela manhã.'
    },
    // 2. Adulto Constipação Crônica - Sachê 17g
    {
      pub: 'adulto',
      vias: ['VO'],
      apres: ['sache_17g'],
      tipo: 'mg',
      min: 17000,
      max: 34000,
      padrao: 17000,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      fonte: 'PSZERADO / BULA',
      trecho: 'Adultos: 17 a 34 g/dia (1 a 2 sachês de 17g) diluídos em água, tomados preferencialmente pela manhã.'
    },
    // 3. Adulto Constipação Crônica - Sachê 10g
    {
      pub: 'adulto',
      vias: ['VO'],
      apres: ['sache_10g'],
      tipo: 'mg',
      min: 10000,
      max: 20000,
      padrao: 10000,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      fonte: 'PSZERADO / BULA',
      trecho: 'Adultos: 10 a 20 g/dia (1 a 2 sachês de 10g) diluídos em água, tomados preferencialmente pela manhã.'
    },
    // 4. Pediatria Constipação Funcional Manutenção (>= 2 anos)
    {
      pub: 'ped',
      se: { idadeMinAnos: 2 },
      vias: ['VO'],
      apres: ['sache_10g', 'sache_17g'],
      tipo: 'mg_kg_dia',
      min: 500,
      max: 1000,
      padrao: 700,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      fonte: 'SBP / ESPGHAN',
      trecho: 'Pediatria (manutenção): 0,5 a 0,8 g/kg/dia (padrão 0,7 g/kg/dia = 700 mg/kg/dia) em dose única pela manhã diluído em líquidos.'
    },
    // 5. Pediatria Desimpactação Fecal (>= 2 anos)
    {
      pub: 'ped',
      se: { idadeMinAnos: 2 },
      vias: ['VO'],
      apres: ['sache_10g', 'sache_17g'],
      tipo: 'mg_kg_dia',
      min: 1000,
      max: 1500,
      padrao: 1000,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 6,
      fonte: 'SBP',
      trecho: 'Desimpactação fecal pediátrica: 1 a 1,5 g/kg/dia (1.000 a 1.500 mg/kg/dia) em dose única diária por 3 a 6 dias.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 34000,
      fonte: 'BULA / PSZERADO',
      trecho: 'Dose máxima diária de manutenção em adultos: 34 g/dia (2 sachês de 17g).'
    },
    {
      pub: 'ped',
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 17000,
      fonte: 'SBP',
      trecho: 'Dose máxima diária pediátrica de manutenção: 17 g/dia.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 1 },
      msg: 'Uso não recomendado em lactentes menores de 2 anos de idade sem acompanhamento gastroenterológico pediátrico especializado.',
      fonte: 'BULA / SBP',
      trecho: 'Não recomendado em menores de 2 anos sem expressa indicação médica especializada.',
      strong: true
    },
    {
      msg: 'Contraindicado em casos de suspeita ou confirmação de obstrução intestinal mecânica, estenose intestinal, perfuração gastrintestinal ou risco de perfuração.',
      fonte: 'BULA / PSZERADO',
      trecho: 'Contraindicado em oclusão intestinal, perfuração ou megacólon tóxico.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com abdome agudo cirúrgico, apendicite, dor abdominal aguda intensa de etiologia desconhecida ou doença inflamatória intestinal grave ativa (Retocolite Ulcerativa ou Doença de Crohn em crise tóxica).',
      fonte: 'BULA',
      trecho: 'Contraindicado em abdome agudo cirúrgico e doenças inflamatórias intestinais graves.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade conhecida ao polietilenoglicol (macrogol) ou a qualquer componente da fórmula.',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade conhecida ao polietilenoglicol.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Tratamento de primeira linha da constipação intestinal crônica e funcional em adultos e crianças, desimpactação fecal e adjuvante na prevenção do esforço evacuatório em doença hemorroidária e fissura anal (SBP / Guia UBS / Guia UPA / PSZerado).',
    administracao: 'VO: Dissolver completamente em cerca de 150 a 200 mL de líquido (água, suco de frutas, água de coco ou leite). Ingerir preferencialmente pela manhã. Não altera o sabor das bebidas quando utilizado na forma pura sem eletrólitos.',
    cuidados: 'Mecanismo puramente físico/osmótico: liga-se às moléculas de água e transporta líquido ao cólon, aumentando o volume e a hidratação das fezes sem absorção sistêmica e sem metabolização pela microbiota bacteriana intestinal (não produz gases/flatulência como a lactulose). Ajustar a dose para obter fezes moldadas e pastosas (Bristol 3 ou 4).',
    ajuste: 'Insuficiência renal e hepática: não necessita de ajuste de dose por não sofrer absorção ou metabolização sistêmica significativa.'
  }
};

export default polietilenoglicol;
