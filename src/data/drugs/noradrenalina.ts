import { Farmaco } from '../../types';

export const noradrenalina: Farmaco = {
  id: 'noradrenalina',
  nome: 'Hemitartarato de Norepinefrina (Noradrenalina)',
  categoria: 'Cardiovascular e Antiagregantes',
  busca: 'noradrenalina norepinefrina vasopressor choque septico choque vasodilatador pam hipotensao refrataria uti cti bic ev',
  classe: 'Agonista Alfa-1 e Beta-1 Adrenérgico Potente (Vasopressor de Primeira Linha)',
  dosePratica: 'Choque Séptico / Vasodilatador (PAM < 65 mmHg refratária a 30 mL/kg de cristaloides): Diluir 2 ampolas de 4 mg/4 mL (8 mg base) em 242 mL de SG 5% (32 mcg/mL) ou 4 ampolas em 234 mL SG 5% (64 mcg/mL). Iniciar em BIC a 0,05 a 0,1 mcg/kg/min (ex: 70 kg a 64 mcg/mL ≈ 3 a 7 mL/h); titular a cada 2 a 5 minutos para PAM ≥ 65 mmHg. Faixa usual: 0,05 a 2 mcg/kg/min.',
  fontes: { PSZERADO: '2025', HSL: '2024', EINA: '2024', BULA: '2024' },
  snPadrao: 'choque séptico ou hipotensão refratária com PAM menor que 65 mmHg',
  acessoFonte: 'RENAME 2024 (Componente Hospitalar): Norepinefrina hemitartarato 2 mg/mL (equivalente a 1 mg/mL base) ampolas de 4 mL.',
  apresentacoes: [
    {
      id: 'amp4mg_4ml',
      forma: 'amp',
      nome: 'Ampola 4 mg / 4 mL (1 mg/mL base) EV',
      comercial: 'Levophed®, Noradren®, Hyponor®',
      conc: '4mg / 4 mL',
      rotulo: 'Norepinefrina (Noradrenalina) 4 mg / 4 mL ampola',
      mg: 4,
      volml: 4,
      mgml: 1,
      vias: ['EV'],
      disp: '2 ampolas (4 mL cada)',
      acesso: { rename: true, fp: false },
      instrucao: 'Diluir 2 ampolas (8 mL = 8 mg) em 242 mL de SG 5% (32 mcg/mL) ou 4 ampolas (16 mL) em 234 mL de SG 5% (64 mcg/mL). Infundir em Bomba de Infusão Contínua (BIC) em acesso venoso central.',
      obs: 'Vasopressor padrão-ouro no choque séptico. Preferir diluição em SG 5% (previne oxidação). Em emergência, pode ser iniciado provisoriamente em acesso periférico calibroso proximal até punção de CVC.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV'],
      tipo: 'mg',
      min: 4,
      max: 32,
      padrao: 8,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: 'Choque séptico: diluir 8 a 16 mg em 250 mL SG 5%; iniciar em BIC a 0,05 a 0,1 mcg/kg/min e titular até PAM >= 65 mmHg.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 64,
      fonte: 'HSL',
      trecho: 'Titulação dinâmica guiada por PAM >= 65 mmHg; associar vasopressina se nora > 0,25-0,5 mcg/kg/min.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em hipovolemia não corrigida antes da ressuscitação volêmica adequada, exceto como medida temporária extrema de resgate com infusão de cristaloides simultânea.',
      fonte: 'HSL',
      trecho: 'Hipovolemia sem reposição volêmica.',
      strong: false
    }
  ],
  ev: {
    diluentes: ['SG 5%', 'SF 0,9%'],
    concMax: 0.1,
    volOpcoes: [250, 500],
    tempo: {
      adulto: { txt: 'Infusão contínua em BIC com titulação a cada 2 a 5 minutos' },
      ped: { txt: 'Infusão contínua em BIC' }
    },
    fonteTxt: 'Diluir preferencialmente em SG 5% para proteger da oxidação. Infundir em BIC com cateter venoso central. Se periférico provisório, usar veia antecubital e trocar para CVC o quanto antes.'
  },
  notas: {
    indicacao: 'Restauração da pressão arterial no choque séptico, choque distributivo e choque cardiogênico com vasodilatação associada.',
    administracao: 'Infundir continuamente em BIC. Monitorar pressão arterial invasiva (PAI) ou PAM não-invasiva seriada a cada 5 a 15 minutos.',
    cuidados: 'O extravasamento periférico causa vasoconstrição intensa e necrose isquêmica tecidual; infiltrar fentolamina se disponível.',
    ajuste: 'Não necessita de ajuste de dose em insuficiência renal ou hepática.'
  }
};

export default noradrenalina;
