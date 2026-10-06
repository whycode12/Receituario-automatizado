import { Farmaco } from '../../types';

export const insulinaRegular: Farmaco = {
  id: 'insulina-regular',
  nome: 'Insulina Humana Regular (Ação Rápida)',
  categoria: 'Endocrinologia e Antidiabéticos',
  busca: 'insulina regular humana rapida novolin r humulin r biobras cetoacidose cad hipercalemia solucao polarizante glicemia',
  classe: 'Insulina Humana Recombinante de Ação Rápida (Prandial e Parenteral)',
  dosePratica: '1. Controle Prandial / Correção de Hiperglicemia (SC): Injetar 2 a 10 UI SC 30 minutos antes da refeição (ou escala móvel: glicemia 180-250: 2 a 4 UI; 251-300: 4 a 6 UI; > 300: 6 a 8 UI). 2. Emergência - Hipercalemia Grave (Solução Polarizante EV): 10 UI de Insulina Regular EV diluídas em 100 mL de Glicose 50% (G50%) infundidas em 15 a 30 minutos. 3. Cetoacidose Diabética (CAD) / EHH (EV): Diluir 100 UI em 100 mL de SF 0,9% (1 UI/mL) e infundir a 0,14 UI/kg/h em bomba contínua com monitorização horária de glicemia e potássio.',
  fontes: { HSL: '11/12/2018', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'hiperglicemia pré-prandial ou correção glicêmica',
  acessoFonte: 'RENAME 2024 / Farmácia Popular / SUS: Frasco de 10 mL (100 UI/mL) disponibilizado gratuitamente na Atenção Básica, UPAs e hospitais do SUS.',
  apresentacoes: [
    {
      id: 'fap10ml',
      forma: 'fap',
      nome: 'Frasco-ampola 100 UI/mL (10 mL = 1.000 UI)',
      comercial: 'Novolin R / Humulin R / Biobrás / Genérico',
      conc: '100 UI/mL',
      rotulo: 'Insulina humana regular 100 UI/mL solução injetável (frasco 10 mL)',
      volml: 10,
      vias: ['SC', 'EV', 'IM'],
      disp: '1 frasco (10 mL)',
      unidades: ['ui', 'ui_kg_dia', 'ml'],
      acesso: { rename: true, fp: true },
      instrucao: 'Solução límpida e incolor. ADMINISTRAÇÃO SUBCUTÂNEA (SC): Administrar 30 minutos antes das refeições principais. Utilizar seringa própria para insulina graduada (100 UI/mL). Locais de injeção: abdômen, face lateral das coxas, braços ou nádegas. Fazer rotação dos pontos de aplicação. Não necessita agitação (solução já homogênea). USO INTRAVENOSO (EV): Uso restrito a ambiente de pronto-socorro / hospitalar em emergências (CAD, EHH, hipercalemia grave). CONSERVAÇÃO: Manter frascos lacrados na geladeira (2°C a 8°C). O frasco em uso pode permanecer em temperatura ambiente (até 30°C) por até 28 dias.',
      obs: 'RENAME / SUS. Início de ação em 30 minutos, pico entre 2 a 3 horas e duração de efeito de 5 a 8 horas. Única insulina humana que pode ser administrada por via EV.'
    }
  ],
  ev: {
    concMax: 1, // 1 UI/mL (ex: 100 UI em 100 mL de SF 0,9%)
    diluentes: ['SF 0,9%', 'SG 5%', 'G50%'],
    volOpcoes: [100, 250, 500],
    tempo: {
      adulto: { min: 15, max: 60, padrao: 30, txt: '15 a 30 minutos (solução polarizante) ou infusão contínua' },
      ped: { min: 30, max: 60, padrao: 60, txt: 'infusão contínua' }
    },
    fonteTxt: 'HSL / Einstein: Diluir 100 UI em 100 mL de SF 0,9% (conc. 1 UI/mL). Na solução polarizante para hipercalemia, infundir 10 UI em 100 mL de G50% em 15 a 30 minutos.'
  },
  regras: [
    // 1. Adulto SC - Controle Prandial / Correção de Hiperglicemia
    {
      pub: 'adulto',
      vias: ['SC'],
      apres: ['fap10ml'],
      tipo: 'ui',
      min: 2,
      max: 15,
      padrao: 4,
      dosesDia: [1, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'HSL / SBD',
      trecho: 'Adultos SC: 2 a 15 UI administradas 30 minutos antes das refeições principais (café, almoço e jantar) ou conforme escala móvel de correção de glicemia (HSL / SBD).'
    },
    // 2. Adulto EV - Hipercalemia Grave (Solução Polarizante)
    {
      pub: 'adulto',
      vias: ['EV'],
      apres: ['fap10ml'],
      tipo: 'ui',
      min: 10,
      max: 10,
      padrao: 10,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      fonte: 'HSL / PSZERADO',
      trecho: 'Hipercalemia grave (solução polarizante): 10 UI de insulina regular EV diluídas em 100 mL de Glicose 50% (ou 500 mL SG 10%) infundidas em 15 a 30 minutos (HSL / PSZerado).'
    },
    // 3. Adulto EV - Cetoacidose Diabética (CAD) / EHH Ataque ou Horária
    {
      pub: 'adulto',
      vias: ['EV'],
      apres: ['fap10ml'],
      tipo: 'ui',
      min: 5,
      max: 15,
      padrao: 10,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      fonte: 'HSL / PSZERADO',
      trecho: 'Cetoacidose diabética e EHH: Infusão contínua de 0,14 UI/kg/h EV (ou bolus de 0,1 UI/kg seguido de 0,1 UI/kg/h contínuo), diluindo 100 UI em 100 mL de SF 0,9% (1 UI/mL) (HSL / PSZerado).'
    },
    // 4. Pediatria SC - DM1 Prandial
    {
      pub: 'ped',
      vias: ['SC'],
      apres: ['fap10ml'],
      tipo: 'ui',
      min: 1,
      max: 8,
      padrao: 2,
      dosesDia: [1, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'HSL / SBD',
      trecho: 'Pediatria SC: 1 a 8 UI administradas 30 minutos antes das principais refeições, individualizada conforme contagem de carboidratos ou escala de correção (HSL).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['SC', 'EV'],
      tipo: 'mg_dia',
      valor: 80,
      fonte: 'SBD / HSL',
      trecho: 'Dose diária habitual em adultos: até 80 UI/dia divididas ao longo das refeições.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado durante episódios agudos de hipoglicemia (glicemia capilar < 70 mg/dL). Suspender a aplicação e proceder imediatamente à correção de glicose (15g de carboidratos rápidos por VO ou G50% EV se rebaixamento de consciência).',
      fonte: 'HSL / BULA',
      trecho: 'Contraindicado em episódios de hipoglicemia.',
      strong: true
    },
    {
      vias: ['EV'],
      msg: 'ATENÇÃO AO POTÁSSIO SÉRICO (K+): A insulina promove rápida captação celular de potássio. Na cetoacidose diabética (CAD), contraindicado iniciar infusão de insulina se potássio sérico < 3,3 mEq/L (risco iminente de arritmias ventriculares letais e parada cardíaca); repor potássio venoso primeiro até K+ ≥ 3,3 mEq/L antes de iniciar a insulina.',
      fonte: 'HSL / PSZERADO',
      trecho: 'Não iniciar insulina se K+ < 3,3 mEq/L; corrigir a hipocalemia previamente.',
      strong: true
    },
    {
      msg: 'Medicamento de Alta Vigilância: Cautela estrita no cálculo e conferência de doses. Risco de hipoglicemia grave potencialmente fatal por sobredose ou erro de seringa/diluição.',
      fonte: 'HSL',
      trecho: 'Medicamento de Alta Vigilância.',
      strong: false
    },
    {
      msg: 'Ajuste em insuficiência renal: ClCr 10 a 50 mL/min: administrar 75% da dose habitual; ClCr < 10 mL/min: administrar 50% da dose normal e monitorar a glicemia capilar com frequência (HSL).',
      fonte: 'HSL',
      trecho: 'Insuficiência renal: ClCr 10-50 mL/min administrar 75% da dose; ClCr < 10 mL/min administrar 50% da dose.',
      strong: false
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada à insulina humana recombinante ou a qualquer excipiente da fórmula.',
      fonte: 'HSL / BULA',
      trecho: 'Hipersensibilidade à insulina humana ou aos excipientes.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Controle glicêmico pós-prandial no Diabetes Mellitus tipo 1 e tipo 2; correção rápida de episódios de hiperglicemia aguda ambulatorial ou hospitalar; urgências e emergências hiperglicêmicas (Cetoacidose Diabética e Estado Hiperglicêmico Hiperosmolar); hipercalemia aguda grave (como parte da solução polarizante de glicose + insulina) (HSL / PSZerado / SBD).',
    administracao: 'SC: Injetar 30 minutos antes das refeições no abdômen, coxas ou braços. Alternar os locais para evitar lipodistrofia. EV: Uso hospitalar. Na solução polarizante para hipercalemia: 10 UI em 100 mL de G50% em 15-30 min. Na CAD: 100 UI em 100 mL de SF 0,9% (1 UI/mL) em bomba de infusão.',
    cuidados: 'ALTA VIGILÂNCIA E POTÁSSIO: Sempre monitorar o potássio sérico nas infusões contínuas EV de insulina. Trocar o equipo ou lavar o equipo de PVC com 20 mL da solução de insulina antes de iniciar a infusão, pois a insulina sofre adsorção nas paredes plásticas do equipo de infusão.',
    ajuste: 'Insuficiência renal: Redução de 25% na dose para TFG 10-50 mL/min e de 50% para TFG < 10 mL/min pelo risco elevado de hipoglicemia (HSL). Insuficiência hepática: Reduzir doses conforme monitoramento glicêmico frequente.'
  }
};

export default insulinaRegular;
