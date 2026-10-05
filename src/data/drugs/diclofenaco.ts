import { Farmaco } from '../../types';

export const diclofenaco: Farmaco = {
  id: 'diclofenaco',
  nome: 'Diclofenaco',
  categoria: 'Analgésicos e Anti-inflamatórios',
  busca: 'voltaren cataflam diclofenaco sodico potassico emulgel inflamatene dor inflamacao aine',
  classe: 'Anti-inflamatório não esteroidal (AINE), analgésico e antirreumático',
  dosePratica: 'Adulto: VO: 50 mg de 8/8h (ou 75 mg de 12/12h) após refeições por até 5 dias. IM: 75 mg (1 ampola) 1x/dia (máx. 2 ampolas/dia em sítios distintos por até 2 dias) exclusivamente em glúteo profundo. Gel: aplicar camada fina 3 a 4x/dia massageando. Crianças ≥ 1 ano: gotas 0,5 a 2 mg/kg/dia (1 a 4 gotas/kg/dia) divididas em 2 a 3 tomadas.',
  fontes: { HSL: '27/02/2017', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'dor ou inflamação',
  acessoFonte: 'RENAME 2024: Diclofenaco não consta no elenco nacional (ibuprofeno é a alternativa padronizada no SUS). Pode constar em REMUMEs municipais. Farmácia Popular: não consta no elenco.',
  apresentacoes: [
    {
      id: 'cp50',
      forma: 'cp',
      nome: 'Comprimido / Drágea 50 mg',
      comercial: 'Cataflam / Voltaren',
      conc: '50mg',
      rotulo: 'Diclofenaco 50mg',
      mg: 50,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Diclofenaco potássico (Cataflam) ou sódico (Voltaren). Ingerir inteiro com água, preferencialmente após as refeições.'
    },
    {
      id: 'cp75',
      forma: 'cp',
      nome: 'Comprimido 75 mg (liberação retardada/prolongada)',
      comercial: 'Voltaren Retard',
      conc: '75mg',
      rotulo: 'Diclofenaco 75mg',
      mg: 75,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Não partir nem mastigar. Indicado para esquemas de 12/12h em adultos.'
    },
    {
      id: 'gts15',
      forma: 'gotas',
      nome: 'Suspensão Oral Gotas 15 mg/mL (frasco 20 mL)',
      comercial: 'Cataflam gotas',
      conc: '15mg/mL',
      rotulo: 'Diclofenaco 15mg/mL gotas',
      mgml: 15,
      gotasml: 20,
      frascoMl: 20,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: false, fp: false },
      obs: '1 gota ≈ 0,5 mg (1 mL = 20 gotas). Agitar antes de usar e manter o frasco na vertical. Indicado para crianças ≥ 1 ano (Bula).'
    },
    {
      id: 'amp75',
      forma: 'amp',
      nome: 'Ampola 75 mg / 3 mL (solução injetável IM)',
      comercial: 'Voltaren',
      conc: '25mg/mL',
      rotulo: 'Diclofenaco sódico 75mg/3mL',
      mgml: 25,
      volml: 3,
      vias: ['IM'],
      disp: '1 ampola',
      acesso: { rename: false, fp: false },
      obs: 'Aplicação EXCLUSIVA intramuscular profunda no glúteo (quadrante superior externo). NUNCA aplicar no braço (deltoide). Não fazer EV (PSZerado / Bula).'
    },
    {
      id: 'gel10',
      forma: 'gel',
      nome: 'Emulgel / Gel tópico 10 mg/g (1%) - bisnaga 60 g',
      comercial: 'Cataflam Emulgel',
      conc: '10mg/g',
      rotulo: 'Diclofenaco dietilamônio 10mg/g gel',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 bisnaga',
      acesso: { rename: false, fp: false },
      instrucao: 'Lavar e secar a região afetada. Aplicar uma camada fina sobre a pele massageando suavemente até completa absorção. Lavar as mãos após a aplicação. Não aplicar sobre feridas abertas ou mucosas.',
      obs: 'Diclofenaco dietilamônio 11,6 mg/g (equivalente a 10 mg/g de diclofenaco sódico). Uso tópico 3 a 4x/dia (HSL).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 14 },
      vias: ['VO'],
      apres: ['cp50'],
      tipo: 'mg',
      min: 50,
      max: 50,
      padrao: 50,
      dosesDia: [2, 3],
      dosesPadrao: 3,
      duracaoMaxDias: 5,
      fonte: 'PSZERADO',
      trecho: 'Diclofenaco 50 mg: Tomar 1 comprimido a cada 8 horas, por até 5 dias (ou a cada 8 a 12 horas).'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 14 },
      vias: ['VO'],
      apres: ['cp75'],
      tipo: 'mg',
      min: 75,
      max: 75,
      padrao: 75,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      duracaoMaxDias: 5,
      fonte: 'PSZERADO',
      trecho: 'Diclofenaco 75 mg: Tomar 1 comprimido a cada 12 horas, por até 5 dias.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 18 },
      vias: ['IM'],
      apres: ['amp75'],
      tipo: 'mg',
      min: 75,
      max: 75,
      padrao: 75,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      duracaoMaxDias: 2,
      fonte: 'PSZERADO',
      trecho: 'Diclofenaco sódico 75 mg/3 mL – ampola (IM): Aplicação exclusiva em glúteo. Não aplicar em braço. Dose usual de 1 ampola ao dia (máx. 2 ampolas/dia em cólicas graves por até 2 dias).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 1, idadeMaxAnos: 14 },
      vias: ['VO'],
      apres: ['gts15'],
      tipo: 'mg_kg_dia',
      min: 0.5,
      max: 2,
      padrao: 1,
      dosesDia: [2, 3],
      dosesPadrao: 3,
      fonte: 'BULA',
      trecho: 'Bula Cataflam Gotas: Crianças a partir de 1 ano de idade: 0,5 a 2 mg/kg de peso corporal ao dia (1 a 4 gotas/kg/dia), divididos em 2 a 3 doses diárias.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 14 },
      vias: ['TOPICA'],
      apres: ['gel10'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'Cataflam Emulgel 10mg/g: Aplicar sobre a região afetada 3 a 4 vezes/dia massageando suavemente. A quantidade necessária depende da extensão da área afetada. Não deve ser usado por mais de 14 dias para inflamações do tecido mole ou 21 dias para artrite.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 14 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 150,
      fonte: 'BULA',
      trecho: 'Dose máxima diária por via oral: 150 mg/dia (em casos excepcionais de dismenorreia até 200 mg/dia).'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 18 },
      vias: ['IM'],
      tipo: 'mg_dia',
      valor: 150,
      fonte: 'BULA',
      trecho: 'Dose máxima parenteral: 150 mg/dia (2 ampolas de 75 mg aplicadas em nádegas distintas) por no máximo 2 dias consecutivos.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 1, idadeMaxAnos: 14 },
      vias: ['VO'],
      tipo: 'mg_kg_dia',
      valor: 2,
      fonte: 'BULA',
      trecho: 'Dose máxima pediátrica: 2 mg/kg/dia (4 gotas/kg/dia).'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 1 },
      vias: ['VO'],
      msg: 'Contraindicado para menores de 1 ano de idade.',
      fonte: 'BULA',
      trecho: 'Cataflam gotas não é recomendado para crianças abaixo de 1 ano.',
      strong: true
    },
    {
      pub: 'ped',
      se: { idadeMaxAnos: 14 },
      apres: ['cp50', 'cp75'],
      vias: ['VO'],
      msg: 'Comprimidos e drágeas de 50 mg e 75 mg são contraindicados para menores de 14 anos.',
      fonte: 'BULA',
      trecho: 'Drágeas e comprimidos de diclofenaco não são recomendados para crianças e adolescentes abaixo de 14 anos.',
      strong: true
    },
    {
      pub: 'ped',
      se: { idadeMaxAnos: 18 },
      vias: ['IM'],
      msg: 'Via intramuscular contraindicada para menores de 18 anos.',
      fonte: 'BULA',
      trecho: 'Voltaren solução injetável é contraindicado para crianças e adolescentes menores de 18 anos.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Tratamento de curto prazo de estados dolorosos e inflamatórios pós-traumáticos ou pós-operatórios, entorses, contusões, lombalgias, cólica renal e biliar, dismenorreia primária e crises agudas de gota (HSL / PSZerado / Bula).',
    administracao: 'VO: tomar com água preferencialmente após as refeições para reduzir desconforto gástrico. IM: aplicação exclusiva no quadrante superior externo da região glútea, profundamente; aspirar sempre antes de injetar e NUNCA aplicar no deltoide/braço. Não administrar por via endovenosa. Tópico: aplicar camada fina sobre a pele íntegra 3 a 4x/dia massageando suavemente; lavar as mãos após a aplicação (HSL / PSZerado).',
    cuidados: 'Contraindicado em úlcera péptica ativa, sangramento gastrointestinal ativo, insuficiência cardíaca grave, insuficiência renal ou hepática grave, história de asma ou broncoespasmo desencadeado por AAS/AINEs e 3º trimestre de gestação. Risco de eventos cardiovasculares trombóticos, retenção hidrossalina e nefrotoxicidade em idosos.',
    ajuste: 'Insuficiência renal: evitar se ClCr < 30 mL/min; em insuficiência leve a moderada monitorar eletrólitos e função renal. Insuficiência hepática: usar com cautela; contraindicado em insuficiência hepática grave.'
  }
};

export default diclofenaco;
