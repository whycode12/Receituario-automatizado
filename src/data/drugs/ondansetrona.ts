import { Farmaco } from '../../types';

export const ondansetrona: Farmaco = {
  id: 'ondansetrona',
  nome: 'Cloridrato de Ondansetrona',
  categoria: 'Gastrintestinal e Antieméticos',
  busca: 'zofran vonau flash ansentron ondansetrona antiemetico nausea vomito',
  classe: 'Antiemético (Antagonista Seletivo dos Receptores 5-HT3 de Serotonina)',
  fontes: { HSL: '12/01/2021', EINA: '2024', BULA: '04/10/2026' },
  snPadrao: 'náuseas ou vômitos',
  acessoFonte: 'RENAME 2024 (Componente Hospitalar): comprimido 4 mg, comprimido 8 mg e solução injetável 2 mg/mL (ampola 2 mL e 4 mL). Farmácia Popular: não consta no elenco.',
  apresentacoes: [
    {
      id: 'cp_orodispersivel_4',
      forma: 'cp',
      nome: 'Comprimido orodispersível 4 mg',
      comercial: 'Vonau Flash',
      conc: '4mg',
      rotulo: 'Cloridrato de Ondansetrona 4mg comprimido orodispersível',
      mg: 4,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Colocar na ponta da língua até dissolver em segundos e engolir com a própria saliva. Não mastigar.',
      obs: 'Comprimido de desintegração oral (orodispersível / Flash). Excelente tolerabilidade pediátrica e em náuseas ativas.'
    },
    {
      id: 'cp_revestido_8',
      forma: 'cp',
      nome: 'Comprimido revestido 8 mg',
      comercial: 'Zofran / Vonau',
      conc: '8mg',
      rotulo: 'Cloridrato de Ondansetrona 8mg comprimido',
      mg: 8,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Ingerir com água, independente das refeições. RENAME.'
    },
    {
      id: 'cp_revestido_4',
      forma: 'cp',
      nome: 'Comprimido revestido 4 mg',
      comercial: 'Zofran',
      conc: '4mg',
      rotulo: 'Cloridrato de Ondansetrona 4mg comprimido',
      mg: 4,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Ingerir com auxílio de água. RENAME.'
    },
    {
      id: 'amp4_2ml',
      forma: 'amp',
      nome: 'Ampola 2 mL (4 mg / 2 mL — 2 mg/mL)',
      comercial: 'Ansentron / Zofran injetável',
      conc: '2mg/mL',
      rotulo: 'Cloridrato de Ondansetrona 2mg/mL ampola 2mL (4mg)',
      mg: 4,
      mgml: 2,
      volml: 2,
      vias: ['EV', 'IM'],
      disp: '1 ampola',
      acesso: { rename: true, fp: false },
      obs: 'EV direto lento (2 a 5 min) ou diluído em 15 a 50 mL de SF/SG 5%. RENAME.'
    },
    {
      id: 'amp8_4ml',
      forma: 'amp',
      nome: 'Ampola 4 mL (8 mg / 4 mL — 2 mg/mL)',
      comercial: 'Ansentron / Zofran injetável',
      conc: '2mg/mL',
      rotulo: 'Cloridrato de Ondansetrona 2mg/mL ampola 4mL (8mg)',
      mg: 8,
      mgml: 2,
      volml: 4,
      vias: ['EV', 'IM'],
      disp: '1 ampola',
      acesso: { rename: true, fp: false },
      obs: 'EV direto de 2 a 5 min sem diluição ou diluído em SF/SG 5% 50 mL. RENAME.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 4,
      max: 8,
      padrao: 8,
      dosesDia: [2, 3],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Adulto VO: 4 a 8mg a cada 8h (ou 8mg a cada 12h; náuseas e vômitos no pós-operatório 16mg VO 1h antes).'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['EV', 'IM'],
      tipo: 'mg',
      min: 4,
      max: 8,
      padrao: 4,
      dosesDia: [2, 3],
      dosesPadrao: 3,
      fonte: 'HSL',
      trecho: 'Adulto EV/IM: 4 a 8mg lentamente (náuseas pós-operatórias 4mg EV na indução; quimioterapia 8mg EV).'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 6 },
      vias: ['VO'],
      tipo: 'mg_kg_dose',
      min: 0.15,
      max: 0.15,
      padrao: 0.15,
      dosesDia: [2, 3],
      dosesPadrao: 3,
      maxDoseMg: 8,
      fonte: 'HSL',
      trecho: 'Pediatria VO (≥ 6 meses): 0,15mg/kg/dose a cada 8h (não exceder 8mg/dose ou dose adulta de 24mg/dia).'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 6 },
      vias: ['EV', 'IM'],
      tipo: 'mg_kg_dose',
      min: 0.1,
      max: 0.15,
      padrao: 0.1,
      dosesDia: [2, 3],
      dosesPadrao: 3,
      maxDoseMg: 8,
      fonte: 'HSL',
      trecho: 'Pediatria EV (≥ 6 meses): 0,1 a 0,15mg/kg/dose lento (máx 4 a 8mg/dose).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 24,
      fonte: 'HSL',
      trecho: 'Dose máxima: 24mg/dia. Injetável: 16mg/dose.'
    },
    {
      pub: 'ped',
      tipo: 'mg_dia',
      valor: 24,
      fonte: 'HSL',
      trecho: 'Dose máxima Pediatria: 24mg/dia (não exceder a dose máxima diária do adulto).'
    }
  ],
  contra: [
    {
      msg: 'Uso concomitante com apomorfina é formalmente contraindicado pelo risco de hipotensão profunda e síncope.',
      fonte: 'BULA',
      trecho: 'Contraindicado o uso concomitante com apomorfina devido a relatos de hipotensão profunda e perda de consciência.',
      strong: true
    },
    {
      msg: 'Insuficiência hepática moderada a grave: dose diária total não deve exceder 8 mg/dia (HSL).',
      fonte: 'HSL',
      trecho: 'Insuficiência hepática: Pacientes com insuficiência hepática moderada ou grave não devem exceder 8mg/dia.',
      strong: true
    },
    {
      msg: 'Alerta ANVISA Gestação: cautela no 1º trimestre pelo risco de malformações orofaciais (fenda palatina) identificado em estudos (HSL).',
      fonte: 'HSL',
      trecho: 'Alerta da Anvisa: risco de defeitos de fechamento orofaciais, principalmente de fenda palatina, identificados em filhos de mulheres expostas durante o primeiro trimestre de gravidez.',
      strong: false
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 2, // ampola pura (2 mg/mL)
    volOpcoes: [15, 50, 100],
    tempo: {
      adulto: { min: 2, padrao: 15, max: 15 },
      ped: { min: 2, padrao: 15, max: 15 }
    },
    fonteTxt: 'EV direto: sem diluição de 2 a 5 minutos (até 8 mg). Doses até 16 mg: diluir em SF 0,9% 50 mL e infundir em 15 minutos (HSL / Einstein Adultos: SF/SG 5% 15 mL, 48h TA, IV direto em 3 min).'
  },
  notas: {
    indicacao: 'Prevenção e tratamento de náuseas e vômitos agudos (gastroenterite aguda, pós-operatório, quimioterapia e radioterapia) (HSL).',
    administracao: 'VO: Comprimido orodispersível (Vonau Flash) dissolve-se na ponta da língua em segundos e dispensa ingestão com água. EV: Aplicação lenta em 2 a 5 min sem diluição ou infusão curta em 50 mL de SF em 15 min.',
    cuidados: 'Monitorar intervalo QT em pacientes com cardiopatias, distúrbios hidroeletrolíticos ou em uso de outros fármacos que prolongam o QT.',
    ajuste: 'Insuficiência renal: Nenhum ajuste é necessário. Insuficiência hepática: Em hepatopatia grave ou moderada, limitar estritamente a 8 mg/dia no total (HSL).'
  }
};

export default ondansetrona;
