import { Farmaco } from '../../types';

export const haloperidol: Farmaco = {
  id: 'haloperidol',
  nome: 'Haloperidol',
  categoria: 'Sistema Nervoso e Psiquiátrico',
  busca: 'haloperidol haldol antipsicotico tipico neuroleptico surto psicotico agitacao psicomotora agressividade delirio delirium mania alucinacoes ampola im cp vo',
  classe: 'Antipsicótico Típico de Alta Potência (Bloqueador dos Receptores Dopaminérgicos D2)',
  dosePratica: 'Agitação Psicomotora / Surto Psicótico Agudo na Emergência: 2,5 a 5 mg (1/2 a 1 ampola de 5 mg/mL) IM profunda no glúteo; frequentemente associado à Prometazina 25 a 50 mg IM (mesma seringa) para potencializar sedação e prevenir distonia aguda extrapiramidal. Pode repetir a cada 30 a 60 minutos se necessário (máximo 15 a 20 mg/dia). Delirium em idosos: 0,5 a 1 mg VO ou IM.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'agitação psicomotora intensa, agressividade ou alucinações',
  acessoFonte: 'RENAME 2024 (Componente Básico / Hospitalar): Haloperidol 5 mg comprimido e 5 mg/mL solução injetável ampola 1 mL. Notificação de Receita C1 (Branca em 2 vias).',
  apresentacoes: [
    {
      id: 'amp5mg_1ml',
      forma: 'amp',
      nome: 'Ampola 5 mg / 1 mL (5 mg/mL) IM / EV',
      comercial: 'Haldol®, Genérico',
      conc: '5mg / 1 mL',
      rotulo: 'Haloperidol 5 mg / 1 mL ampola',
      mg: 5,
      volml: 1,
      mgml: 5,
      vias: ['IM', 'EV'],
      disp: '1 ampola (1 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Aplicar preferencialmente por via intramuscular profunda na região glútea. Pode ser associado na mesma seringa à Prometazina 25 mg ou 50 mg.',
      obs: 'Primeira escolha para contenção química de agitação e agressividade psicótica na emergência psiquiátrica.'
    },
    {
      id: 'cp5',
      forma: 'cp',
      nome: 'Comprimido 5 mg',
      comercial: 'Haldol®, Genérico',
      conc: '5mg',
      rotulo: 'Haloperidol 5 mg comprimido',
      mg: 5,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 30 comprimidos',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar por via oral com água, preferencialmente após as refeições.',
      obs: 'Manutenção antipsicótica na esquizofrenia e transtornos esquizoafetivos.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['IM', 'EV'],
      tipo: 'mg',
      min: 2.5,
      max: 5,
      padrao: 5,
      dosesDia: [1, 3],
      intervaloFixo: 8,
      fonte: 'PSZERADO',
      trecho: 'Contenção química / Agitação: 2,5 a 5 mg IM profunda; repetir se necessário a cada 1 a 2 horas (máx 20 mg/dia).'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 1,
      max: 10,
      padrao: 5,
      dosesDia: [1, 2],
      intervaloFixo: 12,
      fonte: 'HSL',
      trecho: 'Adultos VO: 2 a 10 mg/dia divididos em 1 a 2 tomadas.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 20,
      fonte: 'HSL',
      trecho: 'Dose máxima adulto na emergência: até 20 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em Doença de Parkinson, depressão grave do SNC, estado de coma e lesão espinocerebelar conhecida.',
      fonte: 'HSL',
      trecho: 'Doença de Parkinson ou depressão grave do SNC.',
      strong: true
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 1,
    volOpcoes: [10, 100],
    tempo: {
      adulto: { min: 10, padrao: 15, max: 30, txt: 'Infundir lentamente sob monitorização de ECG' },
      ped: { min: 15, padrao: 20, max: 30 }
    },
    fonteTxt: 'Via EV de preferência reservada para leito monitorizado devido ao risco de prolongamento do intervalo QT e Torsades de Pointes.'
  },
  notas: {
    indicacao: 'Controle rápido de delírios, alucinações e agressividade em surtos psicóticos agudos, esquizofrenia, crise maníaca e agitação no delirium.',
    administracao: 'Injetar profundamente no glúteo para evitar irritação local.',
    cuidados: 'Alto risco de sintomas extrapiramidais (impregnação neuroadrenérgica, distonia aguda de mandíbula/pescoço, acatisia e parkinsonismo medicamentoso); tratar distonia com Prometazina 25 a 50 mg IM ou Biperideno 5 mg IM. Risco de Síndrome Neuroléptica Maligna.',
    ajuste: 'Em idosos ou debilitados, iniciar com 25% a 50% da dose padrão.'
  }
};

export default haloperidol;
