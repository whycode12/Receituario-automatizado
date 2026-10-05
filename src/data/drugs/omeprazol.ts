import { Farmaco } from '../../types';

export const omeprazol: Farmaco = {
  id: 'omeprazol',
  nome: 'Omeprazol',
  categoria: 'Gastrintestinal e Antissecretores',
  busca: 'losec omeprazol ibp refluxo gastrite ulcera estomago esofagite',
  classe: 'Inibidor da Bomba de Prótons (IBP)',
  dosePratica: 'Adulto: VO: 20 mg a 40 mg 1x/dia pela manhã em jejum (30 min antes do café) por 4 a 8 semanas. EV: 40 mg 1x/dia (ou 40 mg 12/12h em HDA ativa) com diluente próprio de 10 mL. Pediatria (≥ 1 ano): VO: 1 mg/kg/dia 1x/dia em jejum (10-20 kg: 10 mg; > 20 kg: 20 mg); EV: 0,5 a 1 mg/kg/dia.',
  fontes: { HSL: '27/09/2023', PSZERADO: '2025', EINP: '2024', BULA: '04/10/2026' },
  snPadrao: 'epigastralgia, pirose ou refluxo',
  acessoFonte: 'RENAME 2024 (Componente Básico e Hospitalar): cápsula de liberação retardada 20 mg e frasco-ampola pó liofilizado 40 mg. Farmácia Popular: não consta no elenco.',
  apresentacoes: [
    {
      id: 'cap20',
      forma: 'cap',
      nome: 'Cápsula de liberação retardada 20 mg',
      comercial: 'Losec / Genérico',
      conc: '20mg',
      rotulo: 'Omeprazol 20mg cápsula',
      mg: 20,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Ingerir em jejum, preferencialmente 30 minutos antes do café da manhã. Deglutir inteira, sem mastigar ou abrir a cápsula.',
      obs: 'RENAME (Componente Básico). Dose padrão de manutenção e tratamento antissecretor.'
    },
    {
      id: 'cap10',
      forma: 'cap',
      nome: 'Cápsula 10 mg',
      comercial: 'Losec Mups / Genérico',
      conc: '10mg',
      rotulo: 'Omeprazol 10mg cápsula',
      mg: 10,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Uso pediátrico ou em manutenção/dispepsia leve.'
    },
    {
      id: 'fap40',
      forma: 'fap',
      nome: 'Pó liofilizado para injeção 40 mg frasco-ampola + diluente 10 mL',
      comercial: 'Losec IV / Genérico',
      conc: '40mg',
      rotulo: 'Omeprazol 40mg frasco-ampola',
      mg: 40,
      volml: 10,
      reconstMl: 10,
      reconstDil: 'Diluente próprio (10 mL)',
      vias: ['EV'],
      disp: '1 frasco-ampola',
      acesso: { rename: true, fp: false },
      obs: 'RENAME (Hospitalar). Reconstituir exclusivamente com os 10 mL do diluente próprio acompanhante. Injetar EV direto lento em no mínimo 3 a 4 minutos ou diluir em 100 mL de SF/SG5%.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 20,
      max: 40,
      padrao: 20,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      fonte: 'HSL',
      trecho: 'Adulto VO: Úlcera péptica, refluxo gastroesofágico e esofagite: 20 a 40mg/dia em jejum. Zollinger-Ellison: iniciar com 60mg/dia.'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['EV'],
      tipo: 'mg',
      min: 40,
      max: 80,
      padrao: 40,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      fonte: 'HSL',
      trecho: 'Adulto EV: Profilaxia e tratamento de úlcera/refluxo: 40mg/dia. Em caso de sangramento digestivo alto ativo: 40mg a cada 12h ou infusão contínua.'
    },
    {
      pub: 'ped',
      se: { pesoMin: 20 },
      vias: ['VO'],
      tipo: 'mg',
      min: 20,
      max: 20,
      padrao: 20,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      fonte: 'HSL',
      trecho: 'Pediatria (1 a 16 anos): DRGE, úlceras e esofagites: peso > 20kg: 20mg/dia em jejum.'
    },
    {
      pub: 'ped',
      se: { pesoMin: 10, pesoMax: 20 },
      vias: ['VO'],
      tipo: 'mg',
      min: 10,
      max: 10,
      padrao: 10,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      fonte: 'HSL',
      trecho: 'Pediatria (1 a 16 anos): peso 10 a 20kg: 10mg/dia em jejum.'
    },
    {
      pub: 'ped',
      se: { pesoMin: 5, pesoMax: 10 },
      vias: ['VO'],
      tipo: 'mg',
      min: 5,
      max: 5,
      padrao: 5,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      fonte: 'HSL',
      trecho: 'Pediatria (1 a 16 anos): peso 5 a 10kg: 5mg/dia em jejum.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 1 },
      vias: ['EV'],
      tipo: 'mg_kg_dose',
      min: 0.5,
      max: 1.0,
      padrao: 0.5,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      fonte: 'HSL',
      trecho: 'Pediatria EV (≥ 1 ano): Profilaxia de úlcera de estresse e esofagite grave: 0,5 a 1 mg/kg/dose a cada 12 a 24h. Segurança não estabelecida para menores de 1 ano.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 80,
      fonte: 'HSL',
      trecho: 'Dose máxima Adulto: 80mg/dia (em Zollinger-Ellison pode atingir até 120-360mg/dia fracionados).'
    },
    {
      pub: 'ped',
      tipo: 'mg_dia',
      valor: 40,
      fonte: 'HSL',
      trecho: 'Dose máxima Crianças: Até 40mg/dia.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 12 },
      msg: 'Segurança e eficácia não foram estabelecidas para crianças menores de 1 ano de idade (HSL).',
      fonte: 'HSL',
      trecho: 'A segurança e eficácia do medicamento não são relatadas para crianças menores de 1 ano de idade.',
      strong: false
    },
    {
      msg: 'Uso concomitante com rilpivirina, atazanavir ou nelfinavir não é recomendado (redução crítica da absorção antirretroviral).',
      fonte: 'BULA',
      trecho: 'A administração concomitante com inibidores de protease do HIV como atazanavir e nelfinavir não é recomendada.',
      strong: false
    },
    {
      msg: 'Em insuficiência hepática grave, reduzir a dose máxima diária para 10 a 20 mg/dia (HSL).',
      fonte: 'HSL',
      trecho: 'Insuficiência hepática: 10-20mg/dia.',
      strong: false
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 4, // 40mg em 10mL do diluente próprio
    concUsual: 0.4, // 40mg em 100mL
    volOpcoes: [10, 50, 100],
    tempo: {
      adulto: { min: 3, padrao: 15, max: 30 },
      ped: { min: 3, padrao: 20, max: 30 }
    },
    fonteTxt: 'Reconstituição OBRIGATÓRIA exclusivamente com o diluente próprio de 10 mL acompanhante. Injeção EV direta lenta: aplicar em no mínimo 3 a 4 minutos (velocidade 2,5 a 4 mL/min) (HSL / Einstein Pediátrico: IV direto em 3 min). Infusão: dissolver os 10 mL reconstituídos em 100 mL de SF ou SG 5% e infundir em 20 a 30 minutos (estabilidade: 12h em SF ou 6h em SG 5%).'
  },
  notas: {
    indicacao: 'Tratamento de úlcera péptica gástrica e duodenal, DRGE, esofagite erosiva, síndrome de Zollinger-Ellison, profilaxia de úlcera por estresse em UTI e terapia de erradicação de H. pylori (HSL).',
    administracao: 'VO: Tomar pela manhã em jejum (30 a 60 min antes do café). Engolir as cápsulas inteiras com água (não mastigar os microgrânulos gastrorresistentes). EV: Reconstituir com diluente próprio de 10 mL; aplicar direto lento em 3-4 min ou infundir em 100 mL de SF em 20-30 min.',
    cuidados: 'O uso crônico prolongado de IBPs requer monitorização periódica de magnésio, cálcio e vitamina B12, com atenção para risco de infecção por Clostridioides difficile e osteoporose.',
    ajuste: 'Insuficiência renal: Não é necessário ajuste de dose. Hemodiálise: Não é removido por hemodiálise. Insuficiência hepática: Ajustar para 10 a 20 mg/dia em hepatopatia grave (HSL).'
  }
};

export default omeprazol;
