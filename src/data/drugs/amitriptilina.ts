import { Farmaco } from '../../types';

export const amitriptilina: Farmaco = {
  id: 'amitriptilina',
  nome: 'Cloridrato de Amitriptilina',
  categoria: 'Psiquiatria e Neurologia',
  busca: 'amitriptilina tryptanol amytril antidepressivo triciclico enxaqueca sono dor neuropatica depressao ansiedade 25mg 75mg',
  classe: 'Antidepressivo Tricíclico (Inibidor Não-Seletivo da Recaptação de Serotonina e Noradrenalina)',
  dosePratica: 'Depressão inicial / Profilaxia de enxaqueca / Dor neuropática: Iniciar com 25 mg VO à noite, ao deitar. Pode titular para 50 mg a 75 mg após 1 a 2 semanas se boa tolerabilidade (dose máxima ambulatorial habitual 150 mg/dia). Idosos: iniciar com 10 a 25 mg à noite.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  modoPadrao: 'continuo',
  diasPadrao: 30,
  usoContinuoPadrao: true,
  snPadrao: 'dor crônica, profilaxia de enxaqueca ou depressão',
  acessoFonte: 'RENAME 2024 (Componente Básico do SUS): Comprimidos de 25 mg e 75 mg disponíveis gratuitamente nas Unidades Básicas de Saúde (UBS). Farmácia Popular: disponível no programa.',
  apresentacoes: [
    {
      id: 'cp25',
      forma: 'cp',
      nome: 'Comprimido revestido 25 mg',
      comercial: 'Amytril®, Tryptanol®, Genérico',
      conc: '25 mg',
      rotulo: 'Cloridrato de Amitriptilina 25 mg comprimido',
      mg: 25,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 30 comprimidos',
      acesso: { rename: true, fp: true },
      instrucao: 'Tomar 1 comprimido por via oral à noite, antes de dormir. Não interromper o tratamento abruptamente.',
      obs: 'Dose padrão para início de tratamento antidepressivo e adjuvante de sono/dor no Guia UPA 2026.'
    },
    {
      id: 'cp75',
      forma: 'cp',
      nome: 'Comprimido revestido 75 mg',
      comercial: 'Amytril®, Tryptanol®, Genérico',
      conc: '75 mg',
      rotulo: 'Cloridrato de Amitriptilina 75 mg comprimido',
      mg: 75,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 30 comprimidos',
      acesso: { rename: true, fp: true },
      instrucao: 'Tomar 1 comprimido à noite antes de dormir conforme prescrição médica.',
      obs: 'Dose de manutenção para episódios depressivos maiores.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      vias: ['VO'],
      tipo: 'mg',
      min: 10,
      max: 150,
      padrao: 25,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      fonte: 'HSL',
      trecho: 'Iniciar com 25 a 50 mg/dia em dose única ao deitar; aumentar progressivamente até 150 mg/dia se necessário.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 150,
      fonte: 'HSL',
      trecho: 'Dose máxima ambulatorial adulto: 150 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes em fase aguda de infarto do miocárdio, arritmias graves, bloqueio atrioventricular e uso concomitante de IMAO.',
      fonte: 'HSL',
      trecho: 'Infarto recente, arritmias e uso concomitante de IMAO.'
    }
  ],
  notas: {
    indicacao: 'Episódios depressivos maiores, dor crônica neuropática, fibromialgia e profilaxia de migrânea/enxaqueca.',
    administracao: 'Tomar 1 vez ao dia preferencialmente à noite devido ao efeito sedativo.',
    cuidados: 'Causa sedação e efeitos anticolinérgicos (boca seca, retenção urinária, constipação e taquicardia). Receituário de Controle Especial (Lista C1).',
    ajuste: 'Usar com cautela em hepatopatas graves.'
  }
};

export default amitriptilina;
