import { Farmaco } from '../../types';

export const tiorfan: Farmaco = {
  id: 'tiorfan',
  nome: 'Tiorfan (Racecadotrila)',
  categoria: 'Gastrintestinal e Antieméticos',
  busca: 'tiorfan racecadotrila tiotril antidiarreico diarreia antissecretor gastroenterite',
  classe: 'Antidiarreico Antissecretor Puro (Inibidor da Encefalinase Intestinal)',
  dosePratica: 'Adultos: 100 mg VO (1 cápsula) no início dos sintomas, seguido de 100 mg de 8/8h antes das refeições até cessar a diarreia (máx. 400 mg/dia por até 7 dias). Pediatria (≥ 3 meses — envelopes/sachês): 1,5 mg/kg/dose VO de 8/8h misturado em água, alimentos ou mamadeira até cessar a diarreia (máx. 7 dias).',
  fontes: { HSL: '07/03/2023', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'diarreia aguda ou fezes líquidas',
  acessoFonte: 'Nome de marca de referência e sinônimo de prescrição de Racecadotrila (Tiorfan 100 mg cápsulas e Tiorfan Sachê Lactentes 10 mg / Infantil 30 mg).',
  apresentacoes: [
    {
      id: 'cap100_tiorfan',
      forma: 'cap',
      nome: 'Cápsula 100 mg',
      comercial: 'Tiorfan / Genérico',
      conc: '100mg',
      rotulo: 'Tiorfan (Racecadotrila) 100mg cápsula',
      mg: 100,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Engolir a cápsula inteira com um copo de água, de preferência antes das refeições. Iniciar com 1 cápsula imediatamente e continuar a cada 8 horas até o controle da diarreia (quando houver 2 evacuações normais formadas ou 12 horas sem evacuações). Duração máxima de 7 dias.',
      obs: 'Inibe a encefalinase intestinal sem alterar o trânsito cólico e sem risco de íleo paralítico.'
    },
    {
      id: 'env30_tiorfan',
      forma: 'sachet',
      nome: 'Sachê / Granulado oral 30 mg (Infantil)',
      comercial: 'Tiorfan Pediátrico 30mg',
      conc: '30mg',
      rotulo: 'Tiorfan Pediátrico (Racecadotrila) 30mg granulado sachê',
      mg: 30,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Misturar o granulado com água, soro de reidratação oral, leite, papinha ou mamadeira e administrar imediatamente. Crianças de 13 a 27 kg: 1 sachê de 30 mg de 8/8h; > 27 kg: 2 sachês de 30 mg (60 mg) de 8/8h.',
      obs: 'Para crianças acima de 13 kg de peso corporal.'
    },
    {
      id: 'env10_tiorfan',
      forma: 'sachet',
      nome: 'Sachê / Granulado oral 10 mg (Lactentes)',
      comercial: 'Tiorfan Lactentes 10mg',
      conc: '10mg',
      rotulo: 'Tiorfan Lactentes (Racecadotrila) 10mg granulado sachê',
      mg: 10,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Misturar o conteúdo do envelope em líquido ou alimento semissólido frio/morno e oferecer à criança. De 3 meses a 9 kg: 1 sachê de 10 mg de 8/8h; de 9 a 13 kg: 2 sachês de 10 mg (20 mg) de 8/8h.',
      obs: 'Para lactentes e crianças de 3 meses até cerca de 13 kg.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 40 }] },
      vias: ['VO'],
      apres: ['cap100_tiorfan'],
      tipo: 'mg',
      min: 100,
      max: 100,
      padrao: 100,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 7,
      fonte: 'HSL',
      trecho: 'Adultos: 100mg VO de 8/8h antes das refeições (1 cápsula inicial e após 1 cápsula 3 vezes/dia) por até 7 dias.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 3, idadeMaxAnos: 14 },
      vias: ['VO'],
      apres: ['env10_tiorfan', 'env30_tiorfan'],
      tipo: 'mg_kg_dose',
      min: 1.5,
      max: 1.5,
      padrao: 1.5,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 7,
      fonte: 'PSZERADO',
      trecho: 'Pediatria (a partir de 3 meses): 1,5 mg/kg/dose, VO, 3 vezes ao dia (a cada 8 horas) associado à terapia de reidratação oral (PSZerado / Bula Tiorfan).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 400,
      fonte: 'HSL',
      trecho: 'Dose máxima Adulto: 400 mg/dia por até 7 dias.'
    },
    {
      pub: 'ped',
      tipo: 'mg_kg_dia',
      valor: 6.0,
      fonte: 'BULA',
      trecho: 'Dose máxima pediátrica: cerca de 6 mg/kg/dia.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 3 },
      msg: 'CONTRAINDICADO em lactentes menores de 3 meses de idade.',
      fonte: 'BULA',
      trecho: 'Não administrar em crianças com menos de 3 meses de idade.',
      strong: true
    },
    {
      msg: 'Contraindicado em diarreia com presença de sangue ou fezes mucopurulentas acompanhadas de febre alta (disenteria bacteriana invasiva) ou diarreia pós-antibióticos (C. difficile).',
      fonte: 'BULA',
      trecho: 'Não deve ser administrado se houver sangue ou pus nas fezes e febre.',
      strong: false
    },
    {
      msg: 'Contraindicado em insuficiência renal grave ou insuficiência hepática grave.',
      fonte: 'BULA',
      trecho: 'Contraindicado em insuficiência renal ou hepática grave.',
      strong: false
    },
    {
      msg: 'Hipersensibilidade ao princípio ativo ou aos excipientes (atenção à sacarose nos sachês em diabéticos e indivíduos com intolerância à frutose).',
      fonte: 'BULA',
      trecho: 'Contraindicado em hipersensibilidade e intolerância a frutose/sacarose.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Tratamento sintomático da diarreia aguda em adultos, crianças e bebês a partir de 3 meses, associado a reidratação oral (HSL / PSZerado).',
    administracao: 'VO: Tomar preferencialmente antes das principais refeições. Sachês podem ser adicionados a alimentos ou líquidos frios/mornos. Descontinuar quando as fezes normalizarem. Uso máximo de 7 dias.',
    cuidados: 'Mecanismo de ação: inibe a quebra das encefalinas endógenas, reduzindo seletivamente a perda de água e eletrólitos sem provocar constipação de rebote, paralisia do peristaltismo ou distensão gasosa dolorosa.',
    ajuste: 'Insuficiência renal e hepática moderada a grave: uso não recomendado por ausência de dados clínicos de segurança.'
  }
};

export default tiorfan;
