/* =====================================================================
   CLORETO DE SÓDIO 0,9% (SORO FISIOLÓGICO) – LAVAGEM NASAL
   Fontes: SBP (Sociedade Brasileira de Pediatria) · RENAME 2024
   ===================================================================== */

function getPerfilNasal(p){
  const m = p.idadeM;
  if(p.pub === 'ped' && m != null){
    if(m <= 6){
      return {
        seringa: 'seringa de 1 a 3 mL',
        tecnica: 'Elevar a cabeceira da criança a mais de 30º ou mantê-la no colo, virando a cabeça suavemente de lado. Injetar o soro com pressão leve na narina de cima, apontando para a orelha. Deixar escorrer e repetir do outro lado.'
      };
    }
    if(m <= 24){
      return {
        seringa: 'seringa de 3 ou 5 mL',
        tecnica: 'Sentar a criança no colo com o tronco e a cabeça levemente inclinados para a frente. Injetar o soro suavemente em uma narina, apontando a ponta da seringa em direção à orelha (nunca para o centro). Deixar o líquido escorrer e repetir do outro lado.'
      };
    }
    if(m <= 96){ // até 8 anos
      return {
        seringa: 'seringa de 10 mL',
        tecnica: 'Sentar a criança com tronco e cabeça inclinados para a frente, mantendo a boca aberta e respirando pela boca. Injetar o soro suavemente em uma narina, apontando para a lateral (em direção à orelha). Deixar escorrer e repetir na outra narina.'
      };
    }
    return {
      seringa: 'seringa de 10 a 20 mL',
      tecnica: 'Inclinar o tronco e a cabeça para a frente sobre a pia, respirando pela boca. Injetar o soro de forma contínua em uma narina, apontando para a lateral (em direção à orelha). Deixar escorrer e repetir do outro lado.'
    };
  }
  // Adulto
  return {
    seringa: 'seringa de 10 a 20 mL',
    tecnica: 'Inclinar a cabeça e o tronco para a frente sobre a pia, com a boca aberta. Injetar o soro de forma suave e contínua direcionando para a orelha. Deixar o líquido escorrer pela outra narina ou boca e repetir do outro lado.'
  };
}

DB.push({
  id:'soro_fisiologico_nasal',
  nome:'Soro Fisiológico 0,9% (Lavagem Nasal)',
  busca:'soro fisiologico 0,9 cloreto de sodio nacl lavagem nasal seringa sbp',
  classe:'Solução para Higiene e Desobstrução Nasal',
  fontes:{SBP:'2024', HSL:''},
  snPadrao:'obstrução ou secreção nasal',
  acessoFonte:'RENAME 2024 (Componente Básico): cloreto de sódio 0,9% frasco. Farmácia Popular: não consta no elenco.',
  apresentacoes:[
    {
      id:'sf_seringa_auto',
      forma:'sol_nasal',
      nome:'Soro fisiológico 0,9% frasco 100 mL + Seringa',
      conc:'0,9%',
      rotulo:(p)=>`Soro fisiológico 0,9% 100mL + ${getPerfilNasal(p).seringa}`,
      frascoMl:100,
      vias:['NASAL'],
      unidades:['ml'],
      disp:(p)=>`01 frasco / 01 ${getPerfilNasal(p).seringa}`,
      instrucao:(p)=>`Instruções: ${getPerfilNasal(p).tecnica}`,
      obs:'Utilizar o soro fisiológico em temperatura ambiente ou levemente amornado. Aplicar sempre com pressão suave para não causar dor nos ouvidos. Não forçar a aplicação.'
    },
    {
      id:'sf_frasco_250',
      forma:'sol_nasal',
      nome:'Soro fisiológico 0,9% frasco 250 mL + Seringa',
      conc:'0,9%',
      rotulo:(p)=>`Soro fisiológico 0,9% 250mL + ${getPerfilNasal(p).seringa}`,
      frascoMl:250,
      vias:['NASAL'],
      unidades:['ml'],
      disp:(p)=>`01 frasco / 01 ${getPerfilNasal(p).seringa}`,
      instrucao:(p)=>`Instruções: ${getPerfilNasal(p).tecnica}`,
      obs:'Armazenar o frasco fechado em temperatura ambiente. Após aberto, manter bem fechado e usar preferencialmente em até 15 a 30 dias.'
    },
    {
      id:'sf_frasco_500',
      forma:'sol_nasal',
      nome:'Soro fisiológico 0,9% frasco 500 mL + Seringa',
      conc:'0,9%',
      rotulo:(p)=>`Soro fisiológico 0,9% 500mL + ${getPerfilNasal(p).seringa}`,
      frascoMl:500,
      vias:['NASAL'],
      unidades:['ml'],
      disp:(p)=>`01 frasco / 01 ${getPerfilNasal(p).seringa}`,
      instrucao:(p)=>`Instruções: ${getPerfilNasal(p).tecnica}`,
      obs:'Trocar a seringa periodicamente para manter a higiene do dispositivo.'
    }
  ],
  regras:[
    // 0 a 6 meses -> 0,5 a 1 mL por narina
    {pub:'ped', se:{idadeMaxMeses:6}, vias:['NASAL'], tipo:'ml', min:0.5, max:1, padrao:1, dosesDia:[2,6], dosesPadrao:4,
     fonte:'SBP', trecho:'Lactentes até 6 meses: 0,5 a 1 mL por narina com seringa de 1 a 3 mL. Cabeceira elevada > 30º ou bebê no colo, cabeça lateralizada suavemente.'},

    // 6 meses a 2 anos -> 2 a 5 mL por narina
    {pub:'ped', se:{idadeMinMeses:6, idadeMaxAnos:2}, vias:['NASAL'], tipo:'ml', min:2, max:5, padrao:3, dosesDia:[2,6], dosesPadrao:4,
     fonte:'SBP', trecho:'Lactentes de 6 meses a 2 anos: 2 a 5 mL por narina com seringa de 3 a 5 mL. Criança sentada no colo com cabeça inclinada para frente.'},

    // 2 a 8 anos -> 5 a 10 mL por narina
    {pub:'ped', se:{idadeMinAnos:2, idadeMaxAnos:8}, vias:['NASAL'], tipo:'ml', min:5, max:10, padrao:10, dosesDia:[2,6], dosesPadrao:4,
     fonte:'SBP', trecho:'Crianças de 2 a 8 anos: 5 a 10 mL por narina com seringa de 10 mL. Tronco e cabeça inclinados para frente, boca aberta.'},

    // > 8 anos -> 10 a 20 mL por narina
    {pub:'ped', se:{idadeMinAnos:8}, vias:['NASAL'], tipo:'ml', min:10, max:20, padrao:10, dosesDia:[2,6], dosesPadrao:4,
     fonte:'SBP', trecho:'Crianças > 8 anos: 10 a 20 mL por narina com seringa de 10 a 20 mL. Tronco inclinado sobre a pia, boca aberta.'},

    // Adulto -> 10 a 20 mL por narina
    {pub:'adulto', se:{idadeMinAnos:15}, vias:['NASAL'], tipo:'ml', min:10, max:20, padrao:15, dosesDia:[2,6], dosesPadrao:4,
     fonte:'SBP', trecho:'Adultos e adolescentes: 10 a 20 mL por narina com seringa de 10 a 20 mL.'}
  ],
  maximos:[],
  notas:{
    indicacao:'Desobstrução e higiene da cavidade nasal, remoção de secreções e crostas, alívio de congestão.',
    administracao:'Injetar o soro em temperatura ambiente ou levemente amornado. Direcionar para a lateral (em direção à orelha), com pressão suave e contínua.',
    cuidados:'Se houver dor nos ouvidos ou desconforto excessivo, reduzir a pressão ou pausar a aplicação. Lavar a seringa com água e sabão após o uso.',
    ajuste:'Não necessita de ajuste de dose.'
  }
});
