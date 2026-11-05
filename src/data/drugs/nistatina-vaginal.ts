import { Farmaco } from '../../types';

export const nistatinaVaginal: Farmaco = {
  id: 'nistatina-vaginal',
  nome: 'Nistatina Creme Vaginal (25.000 UI/g)',
  categoria: 'Ginecologia e Saúde da Mulher',
  busca: 'nistatina creme vaginal micostatin candidiase vaginal corrimento branco prurido coceira aplicador vaginal',
  classe: 'Antifúngico Poliénico Tópico Ginecológico',
  dosePratica: 'Candidíase vulvovaginal: Aplicar 1 aplicador cheio (cerca de 4 g = 100.000 UI) profundamente por via vaginal à noite, ao deitar, por 14 noites consecutivas.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  modoPadrao: 'continuo',
  diasPadrao: 14,
  usoContinuoPadrao: false,
  snPadrao: 'candidíase vaginal',
  acessoFonte: 'RENAME 2024 / Farmácia Básica: Bisnaga 60 g com aplicadores disponível gratuitamente no SUS.',
  apresentacoes: [
    {
      id: 'creme_60g',
      forma: 'creme',
      nome: 'Creme vaginal 25.000 UI/g (bisnaga 60 g com 14 aplicadores descartáveis)',
      comercial: 'Micostatin®, Nistax®, Genérico',
      conc: '25.000 UI/g',
      rotulo: 'Nistatina 25.000 UI/g creme vaginal (bisnaga 60 g + aplicadores)',
      mg: 1,
      volml: 60,
      frascoMl: 60,
      vias: ['VAGINAL'],
      disp: '1 bisnaga (60 g) com 14 aplicadores descartáveis',
      acesso: { rename: true, fp: false },
      instrucao: 'Como aplicar o creme vaginal em casa com segurança:\n1. HORÁRIO: Faça a aplicação à noite, imediatamente antes de se deitar para dormir.\n2. HIGIENE: Lave bem as mãos com água e sabão antes de iniciar.\n3. PREPARO DO APLICADOR: Retire a tampa da bisnaga e rosqueie o bico do aplicador plástico descartável na ponta da bisnaga.\n4. PREENCHIMENTO: Aperte a bisnaga suavemente pela parte inferior até que o êmbolo suba até o limite (cerca de 4 g de creme). Desrosqueie o aplicador e recoloque a tampa na bisnaga.\n5. POSIÇÃO: Deite-se de costas na cama, com as pernas flexionadas e entreabertas.\n6. INTRODUÇÃO: Introduza o aplicador delicadamente e o mais profundamente possível no canal vaginal e empurre o êmbolo até o final para depositar todo o creme.\n7. DESCARTE: Retire o aplicador e descarte-o no lixo (use sempre um aplicador novo a cada noite; nunca reutilize aplicadores).\n8. Permaneça deitada para evitar refluxo do medicamento.\n9. Complete o tratamento durante as 14 noites, mesmo se a menstruação descer.',
      obs: 'RENAME / SUS. Não é absorvido sistemicamente pela mucosa, seguro durante a gravidez.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      vias: ['VAGINAL'],
      apres: ['creme_60g'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 14,
      fonte: 'PSZERADO',
      trecho: 'Aplicar 1 aplicador cheio via vaginal 1x à noite por 14 dias.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'dose_max',
      valor: 1,
      fonte: 'HSL',
      trecho: '1 aplicação vaginal por dia ao deitar.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com histórico de hipersensibilidade à nistatina ou a qualquer componente da fórmula.',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade à nistatina.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Tratamento de candidíase vulvovaginal aguda ou crônica recorrente.',
    administracao: 'Via vaginal com aplicador descartável ao deitar. Lavar as mãos antes e depois.',
    cuidados: 'Evitar relações sexuais durante o tratamento ativo. O creme pode fragilizar preservativos de látex.',
    ajuste: 'Não necessita de ajuste de dose em insuficiência renal ou hepática (absorção tópica desprezível).'
  }
};

export default nistatinaVaginal;
