/* =====================================================================
   SAIS PARA REIDRATAÇÃO ORAL (SRO)
   Fontes: Ministério da Saúde (Manual de TRO - Plano A e B) · RENAME 2024
   ===================================================================== */

function getInstrucaoSRO(p, a){
  const m = p.idadeM;
  let doseOrientacao = 'oferecer 100 a 200 mL após cada evacuação líquida ou vômito';
  if(p.pub === 'ped' && m != null){
    if(m <= 12){
      doseOrientacao = 'oferecer 50 a 100 mL aos poucos (em colheradas ou copo) após cada evacuação líquida ou vômito';
    } else if(m <= 120){ // até 10 anos
      doseOrientacao = 'oferecer 100 a 200 mL aos poucos após cada evacuação líquida ou vômito';
    } else {
      doseOrientacao = 'oferecer de 200 a 400 mL (ou o volume que aceitar) após cada evacuação líquida ou vômito';
    }
  } else if(p.pub === 'adulto'){
    doseOrientacao = 'ingerir de 200 a 400 mL (ou a quantidade que aceitar) após cada evacuação líquida ou vômito';
  }

  return `Modo de uso: Ingerir aos poucos após cada evacuação líquida ou vômito (${doseOrientacao}). Se houver vômitos, aguardar 10 minutos e reiniciar em pequenos goles. Manter a alimentação habitual e o aleitamento materno.`;
}

DB.push({
  id:'sro',
  nome:'Soro de Reidratação Oral (SRO)',
  busca:'sro sais reidratacao oral soro caseiro diarreia desidratacao vomito plano a b',
  classe:'Solução de Reidratação Hidroeletrolítica Oral',
  fontes:{MS:'2023', HSL:''},
  snPadrao:'evacuações diarreicas ou vômitos',
  acessoFonte:'RENAME 2024 (Componente Básico): sais para reidratação oral em envelopes. Farmácia Popular: não consta no elenco.',
  apresentacoes:[
    {
      id:'sro_envelope_1l',
      forma:'sol_sro',
      nome:'Sais para Reidratação Oral (sachê para 1 Litro)',
      conc:'pó para 1000 mL',
      rotulo:'Sais para Reidratação Oral (envelope para 1 L)',
      vias:['VO'],
      unidades:['ml'],
      disp:'04 envelopes',
      acesso:{rename:true, fp:false},
      instrucao:(p, a)=>`Preparo: Diluir 1 envelope em exatamente 1 litro de água filtrada ou fervida. Misturar bem. Não ferver após o preparo. Validade de 24 horas (descartar a sobra após 24h).\n   ${getInstrucaoSRO(p, a)}`,
      obs:'Se houver vômitos, aguardar 10 minutos e reiniciar a oferta em pequenos goles ou colheradas espaçadas.'
    },
    {
      id:'sro_envelope_500',
      forma:'sol_sro',
      nome:'Sais para Reidratação Oral (sachê para 500 mL)',
      conc:'pó para 500 mL',
      rotulo:'Sais para Reidratação Oral (envelope para 500 mL)',
      vias:['VO'],
      unidades:['ml'],
      disp:'04 envelopes',
      acesso:{rename:true, fp:false},
      instrucao:(p, a)=>`Preparo: Diluir 1 envelope em exatamente 500 mL de água filtrada ou fervida. Misturar bem. Não ferver após o preparo. Validade de 24 horas.\n   ${getInstrucaoSRO(p, a)}`,
      obs:'Manter a alimentação habitual da criança. Procurar atendimento médico se houver sangue nas fezes ou piora do quadro.'
    },
    {
      id:'sro_sol_pronta_500',
      forma:'sol_sro',
      nome:'Solução de Reidratação Oral pronta para uso – 500 mL',
      conc:'solução pronta',
      rotulo:'Solução de Reidratação Oral 500 mL',
      frascoMl:500,
      vias:['VO'],
      unidades:['ml'],
      disp:'02 frascos',
      acesso:{rename:false, fp:false},
      instrucao:(p, a)=>`Preparo: Solução pronta para uso (não diluir em água). Agitar antes de usar. Após aberto, conservar em geladeira por até 24 a 48 horas.\n   ${getInstrucaoSRO(p, a)}`,
      obs:'Apresentação pronta comercial (sem necessidade de reconstituição prévia).'
    }
  ],
  regras:[
    // Menores de 1 ano -> 50 a 100 mL após cada evacuação
    {pub:'ped', se:{idadeMaxMeses:12}, vias:['VO'], tipo:'ml', min:50, max:100, padrao:100, dosesDia:[1,6], dosesPadrao:4,
     fonte:'MS', trecho:'Menores de 1 ano: 50 a 100 mL após cada evacuação líquida ou vômito.'},

    // 1 a 10 anos -> 100 a 200 mL após cada evacuação
    {pub:'ped', se:{idadeMinMeses:12, idadeMaxAnos:10}, vias:['VO'], tipo:'ml', min:100, max:200, padrao:150, dosesDia:[1,6], dosesPadrao:4,
     fonte:'MS', trecho:'Crianças de 1 a 10 anos: 100 a 200 mL após cada evacuação líquida ou vômito.'},

    // > 10 anos -> 200 a 400 mL
    {pub:'ped', se:{idadeMinAnos:10}, vias:['VO'], tipo:'ml', min:200, max:400, padrao:250, dosesDia:[1,6], dosesPadrao:4,
     fonte:'MS', trecho:'Maiores de 10 anos: 200 a 400 mL (volume aceito) após cada perda.'},

    // Adulto -> 200 a 400 mL
    {pub:'adulto', se:{idadeMinAnos:15}, vias:['VO'], tipo:'ml', min:200, max:400, padrao:250, dosesDia:[1,6], dosesPadrao:4,
     fonte:'MS', trecho:'Adultos: 200 a 400 mL após cada perda líquida ou episódio de vômito.'}
  ],
  maximos:[],
  notas:{
    indicacao:'Prevenção e tratamento da desidratação decorrente de diarreia aguda e vômitos.',
    administracao:'Oferecer a solução com calma, em pequenos goles ou colheradas. Não adicionar açúcar, adoçante ou suco ao soro.',
    cuidados:'Sinais de alerta para retorno imediato: sangue nas fezes, vômitos repetidos incoercíveis, fraqueza acentuada, olhos fundos ou recusa de líquidos.',
    ajuste:'Não necessita de ajuste de dose.'
  }
});
