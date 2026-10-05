import { Farmaco, Paciente } from '../../types';

function getPerfilNasal(p: Paciente) {
  const m = p.idadeM;
  if (p.pub === 'ped' && m != null) {
    if (m <= 6) {
      return {
        seringa: 'seringa de 1 a 3 mL',
        tecnica: 'Elevar a cabeceira da criança a mais de 30º ou mantê-la no colo, virando a cabeça suavemente de lado. Injetar o soro com pressão leve na narina de cima, apontando para a orelha. Deixar escorrer e repetir do outro lado.'
      };
    }
    if (m <= 24) {
      return {
        seringa: 'seringa de 3 ou 5 mL',
        tecnica: 'Sentar a criança no colo com o tronco e a cabeça levemente inclinados para a frente. Injetar o soro suavemente em uma narina, apontando a ponta da seringa em direção à orelha (nunca para o centro). Deixar o líquido escorrer e repetir do outro lado.'
      };
    }
    if (m <= 96) {
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
  return {
    seringa: 'seringa de 10 a 20 mL',
    tecnica: 'Inclinar a cabeça e o tronco para a frente sobre a pia, com a boca aberta. Injetar o soro de forma suave e contínua direcionando para a orelha. Deixar o líquido escorrer pela outra narina ou boca e repetir do outro lado.'
  };
}

export const soroFisiologico: Farmaco = {
  id: 'soro_fisiologico_nasal',
  nome: 'Soro Fisiológico 0,9% (Lavagem Nasal)',
  categoria: 'Soluções e Hidratação',
  busca: 'soro fisiologico 0,9 cloreto de sodio nacl lavagem nasal seringa sbp',
  classe: 'Solução para Higiene e Desobstrução Nasal',
  dosePratica: 'Lactentes até 6 meses: 0,5 a 1 mL por narina; 6 meses a 2 anos: 2 a 5 mL; 2 a 8 anos: 5 a 10 mL; > 8 anos e adultos: 10 a 20 mL por narina, 3 a 6x ao dia (ou SN antes de mamadas/sono).',
  fontes: { SBP: '2024' },
  snPadrao: 'obstrução ou secreção nasal',
  acessoFonte: 'RENAME 2024 (Componente Básico): cloreto de sódio 0,9% frasco. Farmácia Popular: não consta.',
  apresentacoes: [
    {
      id: 'sf_ampola_10',
      forma: 'sol_nasal',
      nome: 'Soro fisiológico 0,9% ampolas de 10 mL (caixa c/ ampolas)',
      conc: '0,9%',
      rotulo: (p: Paciente) => `Soro fisiológico 0,9% ampolas 10 mL + ${getPerfilNasal(p).seringa}`,
      frascoMl: 10,
      vias: ['NASAL'],
      unidades: ['ml'],
      disp: (p: Paciente) => `01 caixa (ampolas 10 mL) / 01 ${getPerfilNasal(p).seringa}`,
      instrucao: (p: Paciente) => `Instruções: ${getPerfilNasal(p).tecnica}`,
      obs: 'Ampolas plásticas de dose única ou fracionada, práticas para higiene fora de casa.'
    },
    {
      id: 'sf_seringa_auto',
      forma: 'sol_nasal',
      nome: 'Soro fisiológico 0,9% frasco 100 mL + Seringa',
      conc: '0,9%',
      rotulo: (p: Paciente) => `Soro fisiológico 0,9% 100mL + ${getPerfilNasal(p).seringa}`,
      frascoMl: 100,
      vias: ['NASAL'],
      unidades: ['ml'],
      disp: (p: Paciente) => `01 frasco / 01 ${getPerfilNasal(p).seringa}`,
      instrucao: (p: Paciente) => `Instruções: ${getPerfilNasal(p).tecnica}`,
      obs: 'Utilizar soro em temperatura ambiente ou levemente amornado. Pressão suave contínua.'
    },
    {
      id: 'sf_frasco_250',
      forma: 'sol_nasal',
      nome: 'Soro fisiológico 0,9% frasco 250 mL + Seringa',
      conc: '0,9%',
      rotulo: (p: Paciente) => `Soro fisiológico 0,9% 250mL + ${getPerfilNasal(p).seringa}`,
      frascoMl: 250,
      vias: ['NASAL'],
      unidades: ['ml'],
      disp: (p: Paciente) => `01 frasco / 01 ${getPerfilNasal(p).seringa}`,
      instrucao: (p: Paciente) => `Instruções: ${getPerfilNasal(p).tecnica}`,
      obs: 'Armazenar em temperatura ambiente.'
    },
    {
      id: 'sf_frasco_500',
      forma: 'sol_nasal',
      nome: 'Soro fisiológico 0,9% frasco 500 mL + Seringa',
      conc: '0,9%',
      rotulo: (p: Paciente) => `Soro fisiológico 0,9% 500mL + ${getPerfilNasal(p).seringa}`,
      frascoMl: 500,
      vias: ['NASAL'],
      unidades: ['ml'],
      disp: (p: Paciente) => `01 frasco / 01 ${getPerfilNasal(p).seringa}`,
      instrucao: (p: Paciente) => `Instruções: ${getPerfilNasal(p).tecnica}`,
      obs: 'Trocar ou higienizar a seringa periodicamente.'
    }
  ],
  regras: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 6 },
      vias: ['NASAL'],
      tipo: 'ml',
      min: 0.5,
      max: 1,
      padrao: 1,
      dosesDia: [2, 6],
      dosesPadrao: 4,
      fonte: 'SBP',
      trecho: 'Lactentes até 6 meses: 0,5 a 1 mL por narina com seringa de 1 a 3 mL.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 6, idadeMaxAnos: 2 },
      vias: ['NASAL'],
      tipo: 'ml',
      min: 2,
      max: 5,
      padrao: 3,
      dosesDia: [2, 6],
      dosesPadrao: 4,
      fonte: 'SBP',
      trecho: 'Lactentes de 6 meses a 2 anos: 2 a 5 mL por narina com seringa de 3 a 5 mL.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 2, idadeMaxAnos: 8 },
      vias: ['NASAL'],
      tipo: 'ml',
      min: 5,
      max: 10,
      padrao: 10,
      dosesDia: [2, 6],
      dosesPadrao: 4,
      fonte: 'SBP',
      trecho: 'Crianças de 2 a 8 anos: 5 a 10 mL por narina com seringa de 10 mL.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 8 },
      vias: ['NASAL'],
      tipo: 'ml',
      min: 10,
      max: 20,
      padrao: 10,
      dosesDia: [2, 6],
      dosesPadrao: 4,
      fonte: 'SBP',
      trecho: 'Crianças > 8 anos: 10 a 20 mL por narina com seringa de 10 a 20 mL.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['NASAL'],
      tipo: 'ml',
      min: 10,
      max: 20,
      padrao: 15,
      dosesDia: [2, 6],
      dosesPadrao: 4,
      fonte: 'SBP',
      trecho: 'Adultos e adolescentes: 10 a 20 mL por narina com seringa.'
    }
  ],
  contra: [
    {
      msg: 'Uso com pressão contraindicado em suspeita de fratura de base de crânio com rinoliquorreia.',
      fonte: 'SBP',
      trecho: 'Risco de contaminação retrógrada e pneumoencéfalo.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Desobstrução e higiene nasal em IVAS, rinites e sinusites.',
    administracao: 'Direcionar o bico da seringa para a lateral (em direção à orelha), com pressão suave.',
    cuidados: 'Se houver dor nos ouvidos, interromper ou reduzir a pressão.',
    ajuste: 'Não necessita de ajuste.'
  }
};

export default soroFisiologico;
