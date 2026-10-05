import { Farmaco } from '../../types';

export const cefuroxima: Farmaco = {
  id: 'cefuroxima',
  nome: 'Cefuroxima (Axetilcefuroxima / Cefuroxima Sódica)',
  categoria: 'Antimicrobianos',
  busca: 'cefuroxima zinnat zinacef axetil axetilcefuroxima cefalosporina segunda geracao pneumonia sinusite otite itu infeccao',
  classe: 'Antibacteriano, Cefalosporina de 2ª geração com atividade ampliada contra Gram-positivos e Gram-negativos (incluindo produtores de betalactamase)',
  dosePratica: 'Adulto: VO: 250 a 500 mg a cada 12 horas por 7 a 10 dias (infecções respiratórias, sinusite, otite, ITU e pele), ingerido preferencialmente após as refeições. EV/IM: 750 mg a 1,5 g a cada 8 horas (infundido em 15 a 30 min ou direto lento em 3-5 min). Pediatria (> 3 meses): VO: 20 a 30 mg/kg/dia divididos a cada 12 horas (máx 500 mg/dia em infecções leves/moderadas); EV: 75 a 150 mg/kg/dia divididos a cada 8 horas.',
  fontes: { HSL: '05/03/2025', EINA: '2026', EINP: '2026', BULA: '04/10/2026' },
  snPadrao: 'infecção bacteriana',
  acessoFonte: 'RENAME 2024: Não consta na Relação Nacional de Medicamentos Essenciais (uso regulado em hospitais conforme REMUME local). Farmácia Popular: Não consta.',
  apresentacoes: [
    {
      id: 'cp500',
      forma: 'cp',
      nome: 'Comprimido 500 mg (axetilcefuroxima)',
      comercial: 'Zinnat',
      conc: '500mg',
      rotulo: 'Axetilcefuroxima 500mg',
      mg: 500,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Ingerir preferencialmente após as refeições para aumentar a absorção gastrointestinal (HSL / Bula). Não partir nem mastigar (sabor amargo intenso).'
    },
    {
      id: 'cp250',
      forma: 'cp',
      nome: 'Comprimido 250 mg (axetilcefuroxima)',
      comercial: 'Zinnat',
      conc: '250mg',
      rotulo: 'Axetilcefuroxima 250mg',
      mg: 250,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Ingerir preferencialmente após as refeições. Indicado para infecções respiratórias leves/moderadas e ITU não complicada.'
    },
    {
      id: 'susp250',
      forma: 'sol',
      nome: 'Suspensão Oral 250 mg / 5 mL (50 mg/mL) frasco 70 mL',
      comercial: 'Zinnat suspensão',
      conc: '50mg/mL (250mg/5mL)',
      rotulo: 'Axetilcefuroxima 250mg/5mL suspensão oral',
      mgml: 50,
      frascoMl: 70,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: false, fp: false },
      obs: 'Cada 5 mL contém 250 mg de cefuroxima base (50 mg/mL). Agitar vigorosamente antes de cada administração. Administrar com leite ou alimentos.'
    },
    {
      id: 'fap750',
      forma: 'fap',
      nome: 'Frasco-Ampola 750 mg pó liofilizado',
      comercial: 'Zinacef / Keroxime',
      conc: '750mg',
      rotulo: 'Cefuroxima sódica 750mg pó injetável',
      mg: 750,
      reconstMl: 6,
      reconstDil: 'Água para Injeção (6 mL para EV; 3 mL para IM)',
      vias: ['EV', 'IM'],
      disp: '1 frasco-ampola',
      acesso: { rename: false, fp: false },
      obs: 'Pó liofilizado para reconstituição. EV: reconstituir com 6 mL de AD (volume final ~6,6 mL) e diluir em 50 a 100 mL de SF ou SG 5%. IM: reconstituir com 3 mL de AD e aplicar profundamente em glúteo.'
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%', 'SG 10%', 'Ringer Lactato'],
    concMax: 30, // conc máx pediatria 30 mg/mL; adultos até 76 mg/mL (Einstein)
    volPadraoAdulto: [[750, 100], [1500, 100]],
    volOpcoes: [50, 100],
    tempo: {
      adulto: { min: 15, padrao: 30, max: 30, txt: 'Infusão: 15 a 30 minutos (direto lento: 3 a 5 minutos)' },
      ped: { min: 15, padrao: 30, max: 30, txt: 'Infusão: 15 a 30 minutos (direto lento: 3 a 5 minutos na concentração máxima de 100 mg/mL)' }
    },
    fonteTxt: 'Reconstituição EV: 6 mL de AD (ou 8 mL em frasco de Keroxime). Infusão intermitente: diluir a dose reconstituída em 50 a 100 mL de SF 0,9% ou SG 5% e infundir em 15 a 30 minutos (Einstein Adultos / Pediátrico / HSL). EV Direto lento: 3 a 5 minutos. Estabilidade: 5h em temperatura ambiente ou 48h sob refrigeração.'
  },
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      apres: ['cp500', 'cp250'],
      tipo: 'mg',
      min: 250,
      max: 500,
      padrao: 500,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 10,
      fonte: 'HSL',
      trecho: 'HSL: Adulto Oral: 250-500mg a cada 12 horas por 5 a 10 dias (Dose máxima oral: 1g/dia).'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['EV', 'IM'],
      apres: ['fap750'],
      tipo: 'mg',
      min: 750,
      max: 1500,
      padrao: 750,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL: Adulto IM e EV: 750mg a 1,5g a cada 8 horas (máx 9g/dia).'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 3, idadeMaxAnos: 11 },
      vias: ['VO'],
      apres: ['susp250'],
      tipo: 'mg_kg_dia',
      min: 20,
      max: 30,
      padrao: 20,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 10,
      fonte: 'HSL',
      trecho: 'HSL: Pediatria (> 3 meses) Oral: Amigdalite, faringite, sinusite: 20mg/kg/dia (máx 250mg/dia); Otite média, pneumonia, infecções de pele (> 2 anos): 30mg/kg/dia divididos de 12/12h (máx 500mg/dia).'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 3, idadeMaxAnos: 11 },
      vias: ['EV', 'IM'],
      apres: ['fap750'],
      tipo: 'mg_kg_dia',
      min: 75,
      max: 150,
      padrao: 75,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL: Pediatria (> 3 meses) IM e EV: 75 a 150mg/kg/dia (em infecções graves até 240mg/kg/dia) divididos a cada 8 horas.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 1000,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima adulto oral: 1g/dia.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['EV', 'IM'],
      tipo: 'mg_dia',
      valor: 9000,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima adulto IM ou EV: 9g/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 3, idadeMaxAnos: 11 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 500,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima pediatria oral: 500 mg/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 3, idadeMaxAnos: 11 },
      vias: ['EV', 'IM'],
      tipo: 'mg_kg_dia',
      valor: 240,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima pediatria IM/EV em infecções graves: 240 mg/kg/dia (sem ultrapassar a dose máxima do adulto de 9g/dia).'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 3 },
      vias: ['VO', 'EV', 'IM'],
      msg: 'Uso não recomendado e segurança não estabelecida para lactentes com menos de 3 meses de vida.',
      fonte: 'HSL',
      trecho: 'HSL: Posologia oral e parenteral estabelecida para pediatria maior que 3 meses de idade.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade conhecida à cefuroxima, a outras cefalosporinas ou histórico de anafilaxia a betalactâmicos.',
      fonte: 'BULA',
      trecho: 'Bula Zinnat / Zinacef: Hipersensibilidade aos antibióticos cefalosporânicos.'
    }
  ],
  notas: {
    indicacao: 'Tratamento de infecções causadas por bactérias sensíveis: infecções do trato respiratório superior e inferior (faringite, amigdalite, sinusite bacteriana aguda, otite média aguda, exacerbação de bronquite crônica, pneumonia comunitária adquirida), infecções do trato urinário não complicadas, infecções de pele e tecidos moles, doença de Lyme precoce (eritema migrans) e profilaxia cirúrgica (HSL / Bula).',
    administracao: 'VO: Os comprimidos e a suspensão oral devem ser ingeridos preferencialmente após as refeições, pois a absorção da axetilcefuroxima é significativamente aumentada na presença de alimentos. Não triturar nem mastigar os comprimidos pelo forte gosto residual amargo. EV Direto: 3 a 5 minutos. EV Infusão: diluir em 50 a 100 mL de SF ou SG 5% em 15 a 30 minutos. IM: Injetar profundamente em grande massa muscular glútea (reconstituir com 3 mL de AD) (HSL).',
    cuidados: 'Pacientes com histórico de hipersensibilidade a penicilinas podem apresentar reatividade cruzada (cerca de 5 a 10%); usar com extremo cuidado e contraindicar formalmente se histórico de anafilaxia/choque anafilático prévio por penicilinas. Pode falsear positivo o teste de Coombs direto e testes de glicose na urina por redução de cobre.',
    ajuste: 'Insuficiência renal VO: ClCr > 30 mL/min: sem ajuste; ClCr 10-29 mL/min: administrar dose habitual a cada 24 horas; ClCr < 10 mL/min: administrar a cada 48 horas (HSL). Insuficiência renal EV/IM: ClCr > 30 mL/min: sem ajuste; ClCr 10-20 mL/min: 750 mg a 1,5 g a cada 12 horas; ClCr < 10 mL/min: 750 mg a cada 24 horas (HSL). Hemodiálise: dialisável (~25%), administrar dose adicional após cada sessão de diálise. Insuficiência hepática: não necessita de ajuste de dose.'
  }
};

export default cefuroxima;
