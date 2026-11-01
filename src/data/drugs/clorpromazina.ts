import { Farmaco } from '../../types';

export const clorpromazina: Farmaco = {
  id: 'clorpromazina',
  nome: 'Cloridrato de Clorpromazina',
  categoria: 'Psiquiatria e Antieméticos',
  busca: 'clorpromazina amplictil antipsicotico soluco intractavel hiccup sedativo agitacao surto vomito refratario 25mg',
  classe: 'Antipsicótico Típico Fenotiazínico de Baixa Potência e Alta Sedação',
  dosePratica: 'Soluços Incoercíveis / Intractáveis: VO: 5 a 10 gotas (10 a 20 mg) de 8/8h ou 12/12h; ou 25 a 50 mg VO de 6/6h a 8/8h por 3 a 5 dias. EV (urgência grave): 25 mg (1/3 de ampola = 8 mg até 25 mg) diluído em 100 mL de SF 0,9% infundido lentamente em 30 min (risco de hipotensão postural severa). Agitação psicomotora aguda: 25 a 50 mg IM profundo.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'soluços incoercíveis, agitação grave ou vômitos refratários',
  acessoFonte: 'RENAME 2024 (Componente Básico e Hospitalar): Comprimidos de 25 mg e 100 mg, gotas 40 mg/mL e solução injetável 25 mg/5 mL (5 mg/mL) ampolas gratuitas na rede pública.',
  apresentacoes: [
    {
      id: 'cp25',
      forma: 'cp',
      nome: 'Comprimido revestido 25 mg',
      comercial: 'Amplictil®, Genérico',
      conc: '25 mg',
      rotulo: 'Cloridrato de Clorpromazina 25 mg comprimido',
      mg: 25,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 20 comprimidos',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar por via oral com água, preferencialmente após as refeições ou ao deitar.',
      obs: 'Droga de referência padrão-ouro para tratamento de soluços incoercíveis e sedação de pacientes agitados.'
    },
    {
      id: 'gotas40',
      forma: 'gotas',
      nome: 'Gotas 40 mg/mL (1 gota = 1 mg)',
      comercial: 'Amplictil® gotas',
      conc: '40 mg/mL (4%)',
      rotulo: 'Clorpromazina 40 mg/mL gotas',
      mgml: 40,
      gotasml: 40,
      frascoMl: 20,
      vias: ['VO'],
      disp: '1 frasco conta-gotas',
      acesso: { rename: true, fp: false },
      instrucao: 'Pingar 5 a 10 gotas em uma colher com água e ingerir de 12 em 12 horas ou de 8 em 8 horas.',
      obs: '1 gota contém 1 mg de clorpromazina.'
    },
    {
      id: 'amp25_5ml',
      forma: 'amp',
      nome: 'Ampola 25 mg / 5 mL (5 mg/mL)',
      comercial: 'Amplictil injetável',
      conc: '25 mg / 5 mL (5 mg/mL)',
      rotulo: 'Clorpromazina 25 mg / 5 mL ampola',
      mg: 25,
      volml: 5,
      mgml: 5,
      vias: ['IM', 'EV'],
      disp: '1 ampola (5 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Injeção IM profunda no glúteo; ou EV diluída em 100 mL de SF 0,9% em infusão lenta de pelo menos 30 minutos com o paciente deitado (risco de hipotensão ortostática).',
      obs: 'Manter paciente em repouso dorsal por 30 a 60 minutos após injeção.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 5,
      max: 100,
      padrao: 25,
      dosesDia: [1, 3],
      intervaloFixo: 8,
      fonte: 'PSZERADO',
      trecho: 'Soluços incoercíveis: 25 a 50 mg VO de 8/8h por 3 a 5 dias.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['IM'],
      tipo: 'mg',
      min: 25,
      max: 50,
      padrao: 25,
      dosesDia: [1, 3],
      intervaloFixo: 8,
      fonte: 'HSL',
      trecho: '25 a 50 mg IM profundo para sedação de urgência.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 300,
      fonte: 'HSL',
      trecho: 'Dose máxima ambulatorial: 200 a 300 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em coma, depressão grave do SNC, colapso circulatório e hipersensibilidade a fenotiazinas.',
      fonte: 'BULA',
      trecho: 'Depressão grave do SNC.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Soluços intractáveis/incoercíveis (pós-AVC ou pós-operatório), agitação psicomotora, surtos psicóticos, vômitos severos refratários.',
    administracao: 'Via oral ou parenteral. Monitorar pressão arterial devido ao bloqueio alfa-adrenérgico potente com risco de hipotensão.',
    cuidados: 'Causa sedação intensa, boca seca e efeitos extrapiramidais (reversíveis com prometazina/biperideno).',
    ajuste: 'Usar com cautela em hepatopatas e idosos (reduzir dose à metade).'
  }
};

export default clorpromazina;
