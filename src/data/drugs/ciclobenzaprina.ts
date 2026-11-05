import { Farmaco } from '../../types';

export const ciclobenzaprina: Farmaco = {
  id: 'ciclobenzaprina',
  nome: 'Cloridrato de Ciclobenzaprina',
  categoria: 'Relaxantes Musculares',
  busca: 'miosan ciclobenzaprina miosan caf relaxante muscular espasmo lombalgia torcicolo',
  classe: 'Relaxante muscular de ação central (antiespasmódico relacionado aos antidepressivos tricíclicos)',
  dosePratica: 'Adulto: 5 a 10 mg VO a cada 12 horas (ou 5 a 10 mg até 3-4x/dia se espasmo severo; máx. 60 mg/dia) por até 5 a 7 dias (máx. 2 a 3 semanas). Efeito colateral marcante: sonolência; preferir administração noturna se dose única diária ou 12/12h. Contraindicado em menores de 15 anos.',
  fontes: { HSL: '05/03/2025', PSZERADO: '2025', BULA: '04/10/2026' },
  modoPadrao: 'continuo',
  diasPadrao: 5,
  usoContinuoPadrao: false,
  snPadrao: 'dor ou espasmo muscular',
  acessoFonte: 'RENAME 2024: Cloridrato de Ciclobenzaprina não consta no elenco nacional da RENAME. Pode constar em listas municipais (REMUME). Farmácia Popular: não consta no elenco.',
  apresentacoes: [
    {
      id: 'cp10',
      forma: 'cp',
      nome: 'Comprimido revestido 10 mg',
      comercial: 'Miosan',
      conc: '10mg',
      rotulo: 'Cloridrato de Ciclobenzaprina 10mg',
      mg: 10,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar preferencialmente à noite ao deitar. Atenção: esta medicação pode causar sonolência e hipotensão.',
      obs: 'Apresentação padrão consagrada (PuxaFicha / Miosan). Tomar com água; preferir dose noturna pelo efeito sedativo.'
    },
    {
      id: 'cp5',
      forma: 'cp',
      nome: 'Comprimido revestido 5 mg',
      comercial: 'Miosan',
      conc: '5mg',
      rotulo: 'Cloridrato de Ciclobenzaprina 5mg',
      mg: 5,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar preferencialmente à noite ao deitar. Atenção: pode causar sonolência.',
      obs: 'Dose inicial recomendada para reduzir a sonolência diurna e para pacientes idosos/disfunção hepática leve (HSL / PSZerado).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      apres: ['cp10', 'cp5'],
      tipo: 'mg',
      min: 5,
      max: 10,
      padrao: 10,
      dosesDia: [1, 3],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 5,
      fonte: 'PSZERADO',
      trecho: 'PuxaFicha: Tomar 1 comprimido (10mg) por dia, à noite, por 5 dias. PSZerado / HSL: 5 a 10 mg 1x ao dia à noite ou até de 8/8h a 12/12h por até 5 a 7 dias.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 60,
      fonte: 'HSL',
      trecho: 'Dose máxima diária: 60 mg/dia.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 15 },
      vias: ['VO'],
      msg: 'Contraindicado para menores de 15 anos de idade (segurança e eficácia não estabelecidas).',
      fonte: 'HSL',
      trecho: 'Pediatria: A segurança e eficácia não foram estabelecidas para crianças menores de 15 anos (HSL / Bula).',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Alívio dos espasmos musculares associados a condições musculoesqueléticas agudas e dolorosas (lombalgia, cervicalgia, torcicolo, fibromialgia, periartrite e entorses musculares). Coadjuvante de repouso e fisioterapia (HSL / Bula).',
    administracao: 'VO: ingerir inteiro com um copo de água, com ou sem alimentos. Pelo efeito sedativo pronunciado, recomenda-se prescrever de 12/12h ou dose noturna ao deitar (PSZerado / HSL). Duração habitual recomendada de 2 a 3 semanas no máximo.',
    cuidados: 'Efeitos adversos muito comuns: sonolência, tontura e boca seca (xerostomia). Contraindicado em pacientes com arritmias cardíacas, bloqueios de condução cardíaca (BAV), insuficiência cardíaca congestiva, hipertireoidismo, fase aguda pós-infarto do miocárdio e uso concomitante de IMAO (aguardar 14 dias após descontinuação). Evitar ingestão concomitante de álcool e outros depressores do SNC.',
    ajuste: 'Insuficiência renal: não necessita de ajuste de dose. Insuficiência hepática: leve a moderada: iniciar com 5 mg/dia com cautela e titular vagarosamente; moderada a grave: uso contraindicado (HSL). Geriatria: iniciar com 5 mg/dia e titular com cautela pelo risco de sedação, tontura, confusão e quedas.'
  }
};

export default ciclobenzaprina;
