import { Farmaco } from '../../types';

export const celecoxibe: Farmaco = {
  id: 'celecoxibe',
  nome: 'Celecoxibe',
  categoria: 'Analgésicos e Anti-inflamatórios',
  busca: 'celebra celecoxibe cox2 coxibe anti-inflamatorio articular reumatismo aine',
  classe: 'Anti-inflamatório não esteroidal (AINE inibidor seletivo da COX-2)',
  dosePratica: 'Adulto: 200 mg VO 1x/dia (ou 100 a 200 mg de 12/12h por até 5 a 7 dias; dor aguda: ataque 400 mg seguido de 200 mg 12/12h; máx. 400 mg/dia em dor musculoesquelética e 800 mg/dia no HSL). Tomar com ou sem alimentos (doses > 400 mg/dia tomar com alimentos). Menor toxicidade gástrica que AINEs não seletivos, porém com risco cardiovascular aumentado.',
  fontes: { HSL: '05/03/2025', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'dor ou inflamação',
  acessoFonte: 'RENAME 2024: Celecoxibe não consta no elenco nacional (ibuprofeno e naproxeno são as alternativas públicas). Pode constar em REMUMEs municipais. Farmácia Popular: não consta no elenco.',
  apresentacoes: [
    {
      id: 'cap100',
      forma: 'cap',
      nome: 'Cápsula 100 mg',
      comercial: 'Celebra',
      conc: '100mg',
      rotulo: 'Celecoxibe 100mg',
      mg: 100,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Ingerir inteira com líquido. Indicada para artrite reumatoide (100 mg 12/12h) ou titulação de doses menores (HSL).'
    },
    {
      id: 'cap200',
      forma: 'cap',
      nome: 'Cápsula 200 mg',
      comercial: 'Celebra',
      conc: '200mg',
      rotulo: 'Celecoxibe 200mg',
      mg: 200,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Apresentação padrão de pronto-socorro para dor aguda e osteoartrite (PSZerado / HSL). Pode ser tomada em dose única diária ou 12/12h.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 18 },
      vias: ['VO'],
      apres: ['cap200'],
      tipo: 'mg',
      min: 200,
      max: 200,
      padrao: 200,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      duracaoMaxDias: 7,
      fonte: 'PSZERADO',
      trecho: 'PSZerado p. 123: Celecoxibe 200 mg: Tomar 1 cápsula a cada 12 horas, por até 5 dias (ou 200 mg 1 vez ao dia para osteoartrite/espondilite no HSL).'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 18 },
      vias: ['VO'],
      apres: ['cap100'],
      tipo: 'mg',
      min: 100,
      max: 200,
      padrao: 100,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      duracaoMaxDias: 7,
      fonte: 'HSL',
      trecho: 'HSL: Adulto: Osteoartrite ou espondilite: 200mg, VO, dose única ou 100mg 2 vezes/dia. Artrite reumatoide: 100-200mg, VO, 2 vezes/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 2, idadeMaxAnos: 17, pesoMin: 10, pesoMax: 25 },
      vias: ['VO'],
      apres: ['cap100'],
      tipo: 'mg',
      min: 50,
      max: 50,
      padrao: 50,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      fonte: 'HSL',
      trecho: 'HSL: Pediatria (Artrite Idiopática Juvenil): 10-25kg: 50mg, 2 vezes/dia (cápsula pode ser aberta e misturada a purê se estritamente necessário).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 2, idadeMaxAnos: 17, pesoMin: 25 },
      vias: ['VO'],
      apres: ['cap100'],
      tipo: 'mg',
      min: 100,
      max: 100,
      padrao: 100,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      fonte: 'HSL',
      trecho: 'HSL: Pediatria (Artrite Idiopática Juvenil): ≥ 25kg: 100mg, 2 vezes/dia.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 18 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 800,
      fonte: 'HSL',
      trecho: 'HSL: Dose Máxima Adulto: 800mg/dia (na dor aguda/artrite usualmente até 400 mg/dia).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 2, idadeMaxAnos: 17, pesoMin: 25 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 200,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima diária em pediatria ≥ 25 kg: 200 mg/dia.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 2 },
      vias: ['VO'],
      msg: 'Contraindicado para menores de 2 anos de idade.',
      fonte: 'HSL',
      trecho: 'Pediatria: Segurança não avaliada em crianças menores de 2 anos.',
      strong: true
    }
  ],
  conflitos: [
    {
      vias: ['VO'],
      txt: 'População Pediátrica: A Bula oficial ANVISA (Celebra) orienta que a segurança e eficácia não foram estabelecidas em menores de 18 anos. Entretanto, o Guia HSL e literatura de reumatologia internacional padronizam o uso para Artrite Idiopática Juvenil em crianças a partir de 2 anos pesando ≥ 10 kg (10-25 kg: 50 mg 2x/dia; ≥ 25 kg: 100 mg 2x/dia).'
    }
  ],
  notas: {
    indicacao: 'Alívio dos sinais e sintomas de osteoartrite, artrite reumatoide e espondilite anquilosante; alívio da dor aguda musculoesquelética pós-traumática ou pós-operatória; alívio da dismenorreia primária e lombalgia aguda (HSL / PSZerado / Bula).',
    administracao: 'VO: engolir a cápsula inteira com líquido. Doses de até 400 mg/dia podem ser administradas com ou sem alimentos; doses superiores a 400 mg/dia devem ser administradas junto com as refeições para otimizar a absorção (HSL).',
    cuidados: 'Por ser inibidor seletivo da COX-2, apresenta menor taxa de úlceras e complicações gastrointestinais que AINEs não seletivos, porém está associado a risco aumentado de eventos cardiovasculares trombóticos graves (infarto agudo do miocárdio, AVC). Contraindicado em pacientes com doença cardíaca isquêmica estabelecida, insuficiência cardíaca congestiva (classes II-IV NYHA), doença arterial periférica, história de alergia grave a sulfonamidas (contém radical sulfamida) e história de reações alérgicas induzidas por AAS/AINEs.',
    ajuste: 'Insuficiência renal: não necessita de ajuste de dose em insuficiência renal leve a moderada; contraindicado em insuficiência renal grave (ClCr < 30 mL/min). Insuficiência hepática: moderada (Child-Pugh B): reduzir a dose diária pela metade (50%); grave (Child-Pugh C): contraindicado (HSL / Bula).'
  }
};

export default celecoxibe;
