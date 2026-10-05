import { Farmaco } from '../../types';

export const domperidona: Farmaco = {
  id: 'domperidona',
  nome: 'Domperidona',
  categoria: 'Gastrintestinal e Antieméticos',
  busca: 'domperidona motilium peridal domperix procinetico antiemetico gastroparesia refluxo nausea',
  classe: 'Antiemético e Procinético (Antagonista Dopaminérgico D2 periférico puro)',
  dosePratica: 'Adultos e > 12 anos (≥ 35 kg): 10 mg VO (1 comprimido ou 10 mL de suspensão 1 mg/mL) até 3x/dia cerca de 15 a 30 minutos antes das principais refeições (máx. 30 mg/dia; dose mais baixa e menor tempo possível devido a risco de prolongamento do intervalo QT). Pediatria (< 12 anos): 0,25 mg/kg/dose (0,25 mL/kg da suspensão 1 mg/mL) VO até 3x/dia antes das refeições (máx. 0,75 mg/kg/dia).',
  fontes: { HSL: '07/03/2023', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'náuseas, plenitude gástrica, empachamento ou refluxo',
  acessoFonte: 'RENAME 2024: suspensão oral 1 mg/mL e comprimido 10 mg no Componente Básico da Atenção Primária. Ampla disponibilidade em farmácias comerciais e UBS.',
  apresentacoes: [
    {
      id: 'cp10',
      forma: 'cp',
      nome: 'Comprimido 10 mg',
      comercial: 'Motilium / Genérico',
      conc: '10mg',
      rotulo: 'Domperidona 10mg comprimido',
      mg: 10,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Ingerir cerca de 15 a 30 minutos antes das principais refeições com um pouco de água. A administração após as refeições retarda a absorção do medicamento. Adultos e adolescentes ≥ 12 anos (≥ 35 kg).',
      obs: 'RENAME (Componente Básico). Antagonista dopaminérgico periférico: não atravessa significativamente a barreira hematoencefálica, com raros efeitos extrapiramidais.'
    },
    {
      id: 'susp1',
      forma: 'sol',
      nome: 'Suspensão oral 1 mg/mL (frasco 100 mL com seringa dosadora)',
      comercial: 'Motilium suspensão / Genérico',
      conc: '1mg/mL',
      rotulo: 'Domperidona 1mg/mL suspensão oral',
      mgml: 1,
      frascoMl: 100,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      instrucao: 'Agitar bem o frasco antes de usar. Administrar 15 a 30 minutos antes das refeições utilizando a seringa dosadora graduada (0,25 mL/kg por dose).',
      obs: 'RENAME (Componente Básico). 1 mL = 1 mg de domperidona. 0,25 mL/kg equivale exatamente a 0,25 mg/kg.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 35 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 10,
      max: 10,
      padrao: 10,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 7,
      fonte: 'HSL',
      trecho: 'Adultos e adolescentes > 12 anos (≥ 35 kg): 10 mg (1 comprimido ou 10 mL), VO, 3 vezes/dia antes das refeições. Em diretrizes de segurança cardiovascular (EMA/ANVISA), a dose máxima diária recomendada é de 30 mg/dia pelo menor período possível (geralmente até 7 dias) (HSL / PSZerado).'
    },
    {
      pub: 'ped',
      se: { idadeMaxAnos: 12 },
      vias: ['VO'],
      apres: ['susp1'],
      tipo: 'mg_kg_dose',
      min: 0.25,
      max: 0.25,
      padrao: 0.25,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 7,
      fonte: 'HSL',
      trecho: 'Pediatria < 12 anos: 0,25 mg/kg/dose (ou 0,25 mL/kg da suspensão de 1 mg/mL), VO, 3 vezes ao dia, 15 a 30 minutos antes das refeições (máx. 0,75 mg/kg/dia ou 30 mg/dia).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 30,
      fonte: 'BULA',
      trecho: 'Dose Máxima recomendada pelas agências regulatórias (ANVISA/EMA): 30 mg/dia (10 mg 3 vezes ao dia) para mitigar o risco de arritmias ventriculares graves e prolongamento de QT.'
    },
    {
      pub: 'ped',
      tipo: 'mg_kg_dia',
      valor: 0.75,
      fonte: 'HSL',
      trecho: 'Dose Máxima Pediatria: 0,75 mg/kg/dia (ou máx. 30 mg/dia).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em situações em que a estimulação da motilidade gastrintestinal seja nociva: hemorragia digestiva alta/baixa, obstrução mecânica ou perfuração gastrintestinal.',
      fonte: 'HSL',
      trecho: 'Contraindicado em hemorragia gastrintestinal, obstrução mecânica ou perfuração.',
      strong: false
    },
    {
      msg: 'Contraindicado em prolactinoma (tumor hipofisário secretor de prolactina), pois a domperidona eleva significativamente os níveis séricos de prolactina.',
      fonte: 'BULA',
      trecho: 'Contraindicado em pacientes com prolactinoma hipofisário.',
      strong: false
    },
    {
      msg: 'ALERTA CARDIOVASCULAR E INTERVALO QT: Contraindicado em pacientes com prolongamento congênito ou adquirido conhecido de intervalos de condução cardíaca (especialmente QTc), distúrbios eletrolíticos significativos (hipocalemia, hipomagnesemia), insuficiência cardíaca congestiva ou uso concomitante com medicamentos que prolongam o QT (amiodarona, eritromicina, claritromicina, cetoconazol, fluconazol, haloperidol, levofloxacino) ou inibidores potentes do CYP3A4.',
      fonte: 'BULA',
      trecho: 'Contraindicado em pacientes com prolongamento do intervalo QT ou arritmias ventriculares subjacentes.',
      strong: false
    },
    {
      msg: 'Contraindicado em pacientes com insuficiência hepática moderada a grave (metabolismo hepático extenso via CYP3A4 com aumento das concentrações plasmáticas).',
      fonte: 'HSL',
      trecho: 'Contraindicado em insuficiência hepática moderada ou grave.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Alívio sintomático de náuseas e vômitos, sensação de plenitude e empachamento epigástrico pós-prandial, queimação/refluxo gastroesofágico e gastroparesia (HSL / PSZerado).',
    administracao: 'VO: Tomar estritamente 15 a 30 minutos antes das refeições (a ingestão pós-prandial retarda a absorção gástrica). Medicamentos antiácidos ou supressores ácidos (omeprazol, hidróxido de alumínio) devem ser tomados após a refeição, e não simultaneamente com a domperidona.',
    cuidados: 'Vantagem sobre a metoclopramida: por possuir penetração cerebral mínima através da barreira hematoencefálica, apresenta incidência praticamente nula de reações extrapiramidais e acatisia em adultos.',
    ajuste: 'Insuficiência renal: prolonga a meia-vida; reduzir a frequência de administração para 1 a 2 vezes ao dia (10 a 20 mg/dia) em insuficiência grave (Clcr < 30 mL/min). Insuficiência hepática moderada/grave: uso contraindicado.'
  }
};

export default domperidona;
