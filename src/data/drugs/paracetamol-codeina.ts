import { Farmaco } from '../../types';

export const paracetamolCodeina: Farmaco = {
  id: 'paracetamol-codeina',
  nome: 'Paracetamol + Fosfato de Codeína',
  categoria: 'Analgésicos e Anti-inflamatórios',
  busca: 'paracetamol codeina tylex paco dor moderada analgesico opioide associacao 500mg 30mg 7.5mg trauma cefaleia dor ossea',
  classe: 'Analgésico Não-Opioide + Opioide Fraco em Associação Sinérgica',
  dosePratica: 'Dor moderada a intensa / Trauma / Pós-operatório: 1 comprimido de 500/30 mg VO a cada 6 ou 8 horas se dor intensa (máximo 4 comprimidos ao dia = 2 g de paracetamol e 120 mg de codeína). Não ultrapassar 4 g/dia de paracetamol total.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  modoPadrao: 'sn',
  diasPadrao: 0,
  usoContinuoPadrao: false,
  snPadrao: 'dor intensa e persistente',
  acessoFonte: 'Disponível comercialmente (Tylex, Paco, genéricos) e farmácias municipais com receituário de controle especial C1 (duas vias).',
  apresentacoes: [
    {
      id: 'cp500_30',
      forma: 'cp',
      nome: 'Comprimido 500 mg + 30 mg',
      comercial: 'Tylex 30mg, Paco, Genérico',
      conc: '500 mg + 30 mg',
      rotulo: 'Paracetamol 500 mg + Fosfato de Codeína 30 mg comprimido',
      mg: 530,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 12 ou 24 comprimidos',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar 1 comprimido por via oral se dor intensa, podendo repetir a cada 6 ou 8 horas se necessário. Não ultrapassar 4 comprimidos em 24 horas. Evitar consumo concomitante de bebidas alcoólicas e outros medicamentos que contenham paracetamol.',
      obs: 'Associação padrão recomendada no Guia UPA 2026 para alívio de dor moderada a intensa em traumas e cólicas refratárias.'
    },
    {
      id: 'cp500_7_5',
      forma: 'cp',
      nome: 'Comprimido 500 mg + 7,5 mg',
      comercial: 'Tylex 7,5mg, Genérico',
      conc: '500 mg + 7,5 mg',
      rotulo: 'Paracetamol 500 mg + Fosfato de Codeína 7,5 mg comprimido',
      mg: 507.5,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 12 comprimidos',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar 1 a 2 comprimidos por via oral a cada 6 ou 8 horas se dor.',
      obs: 'Dose baixa indicada para idosos ou dores de menor intensidade.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      vias: ['VO'],
      tipo: 'mg',
      min: 500,
      max: 1060,
      padrao: 530,
      dosesDia: [2, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 5,
      fonte: 'PSZERADO',
      trecho: 'PuxaFicha: Paracetamol 500mg + codeína 30mg (Paco): Tomar 1 comprimido até de 8/8h se dor intensa e persistente. PSZerado: 1 cp a cada 6 a 8h se dor.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 2120,
      fonte: 'PSZERADO',
      trecho: 'Dose máxima: 4 comprimidos ao dia (2000 mg paracetamol + 120 mg codeína).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em insuficiência hepática grave, depressão respiratória e diarreia associada a colite pseudomembranosa.',
      fonte: 'HSL',
      trecho: 'Insuficiência hepática grave e depressão respiratória.'
    }
  ],
  notas: {
    indicacao: 'Dor moderada a intensa refratária a analgésicos simples, fraturas, lombalgias agudas e pós-operatório.',
    administracao: 'Tomar com água, podendo repetir a cada 6 ou 8 horas se dor. Não mastigar.',
    cuidados: 'Risco de sonolência, vertigem e constipação intestinal (orientar hidratação e fibras). Não associar com outros produtos com paracetamol.',
    ajuste: 'Evitar ou espaçar dose para cada 8-12h na disfunção renal (TFG < 30 mL/min) ou hepática leve a moderada.'
  }
};

export default paracetamolCodeina;
