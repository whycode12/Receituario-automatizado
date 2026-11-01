import { Farmaco } from '../../types';

export const naloxona: Farmaco = {
  id: 'naloxona',
  nome: 'Cloridrato de Naloxona',
  categoria: 'Emergência e Antídotos',
  busca: 'naloxona narcan intoxicacao por opioide depressao respiratoria miose overdose morfina fentanil tramadol metadona 0.4mg',
  classe: 'Antagonista Puro dos Receptores Opióides (Mu, Kappa, Delta)',
  dosePratica: 'Intoxicação aguda por opióides (depressão respiratória/coma): 0,04 a 0,4 mg EV direto lento (ou IM se sem acesso imediato). Pode diluir 1 ampola (0,4 mg) em 9 mL de SF 0,9% (0,04 mg/mL) e titular alíquotas de 1 a 2 mL a cada 2 a 3 minutos até FR > 10-12 irpm sem precipitar abstinência aguda severa. Doses repetidas podem ser necessárias (meia-vida de 30-90 min).',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'depressão respiratória por intoxicação ou overdose de opioides',
  acessoFonte: 'RENAME 2024 / Componente Hospitalar: Solução injetável 0,4 mg/mL ampola padronizada na emergência.',
  apresentacoes: [
    {
      id: 'amp0_4',
      forma: 'amp',
      nome: 'Ampola 0,4 mg/mL (1 mL)',
      comercial: 'Narcan®, Narcanol®, Genérico',
      conc: '0,4mg/mL',
      rotulo: 'Cloridrato de Naloxona 0,4 mg/mL',
      mg: 0.4,
      volml: 1,
      vias: ['EV', 'IM', 'SC'],
      disp: '1 ampola',
      acesso: { rename: true, fp: false },
      instrucao: 'Aspirar 1 ampola (0,4 mg = 1 mL) pura ou diluída em 9 mL de SF 0,9% (0,04 mg/mL); injetar EV lentamente a cada 2 a 3 minutos até reversão da depressão ventilatória.',
      obs: 'Antídoto específico e imediato de intoxicação por opioides. Atenção ao rebote após o término do efeito.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV', 'IM'],
      tipo: 'mg',
      min: 0.04,
      max: 2,
      padrao: 0.4,
      dosesDia: [1, 5],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: '0,04 a 0,4 mg EV a cada 2-3 min até retorno do drive ventilatório; dose máxima inicial 2 a 10 mg.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'dose_max',
      valor: 10,
      fonte: 'HSL',
      trecho: 'Dose cumulativa máxima inicial: 10 mg (se sem resposta, questionar etiologia).'
    }
  ],
  contra: [
    {
      msg: 'Hipersensibilidade conhecida à naloxona. Em usuários crônicos de opioides, titular cuidadosamente em baixas doses para evitar síndrome de abstinência aguda grave (agitação, hipertensão, vômitos, edema pulmonar neurogênico).',
      fonte: 'PSZERADO',
      trecho: 'Titulação cautelosa em dependentes crônicos.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Reversão completa ou parcial da depressão respiratória induzida por opioides naturais ou sintéticos.',
    administracao: 'Injeção intravenosa direta lenta ou IM. O objetivo é restaurar a respiração espontânea adequada, não necessariamente o despertar completo.',
    cuidados: 'Monitorar continuamente o paciente por no mínimo 2 a 4 horas: a meia-vida da naloxona é de 30 a 90 minutos, enquanto a de muitos opioides (ex: metadona, morfina) dura várias horas.',
    ajuste: 'Não necessita de ajuste em insuficiência renal.'
  }
};

export default naloxona;
