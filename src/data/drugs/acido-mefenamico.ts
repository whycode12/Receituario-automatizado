import { Farmaco } from '../../types';

export const acidoMefenamico: Farmaco = {
  id: 'acido-mefenamico',
  nome: 'Ácido Mefenâmico',
  categoria: 'Analgésicos e Anti-inflamatórios',
  busca: 'ponstan acido mefenamico colica dismenorreia dor menorragia aine',
  classe: 'Anti-inflamatório não esteroidal (AINE da classe dos fenamatos), analgésico e antipirético',
  dosePratica: 'Adulto e adolescentes ≥ 14 anos: 500 mg VO de 8/8h (1 comprimido 3x/dia) junto às refeições por até 5 a 7 dias (máx. 1.500 mg/dia). Indicação de excelência para dismenorreia primária e menorragia. Contraindicado em menores de 14 anos.',
  fontes: { HSL: '05/03/2025', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'dor ou cólica',
  acessoFonte: 'RENAME 2024: Ácido mefenâmico não consta no elenco nacional (ibuprofeno é a alternativa padronizada no SUS). Pode constar em listas municipais (REMUME). Farmácia Popular: não consta no elenco.',
  apresentacoes: [
    {
      id: 'cp500',
      forma: 'cp',
      nome: 'Comprimido 500 mg',
      comercial: 'Ponstan',
      conc: '500mg',
      rotulo: 'Ácido mefenâmico 500mg',
      mg: 500,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Ingerir inteiro com água, preferencialmente junto às refeições para reduzir o desconforto gastrintestinal (HSL / Bula). Não mastigar nem partir.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 14 },
      vias: ['VO'],
      apres: ['cp500'],
      tipo: 'mg',
      min: 500,
      max: 500,
      padrao: 500,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 7,
      fonte: 'HSL',
      trecho: 'HSL: Adulto e Pediatria (a partir de 14 anos): 500mg, VO, 3 vezes/dia. Duração máxima: Usualmente o tratamento não deve se prolongar por mais de 1 semana (PSZerado: até 5 dias).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 14 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 1500,
      fonte: 'HSL',
      trecho: 'Dose máxima diária: 1.500 mg/dia (3 tomadas de 500 mg).'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 14 },
      vias: ['VO'],
      msg: 'Contraindicado para menores de 14 anos de idade.',
      fonte: 'HSL',
      trecho: 'Pediatria: Uso estabelecido apenas a partir de 14 anos. Bula Ponstan: Contraindicado para menores de 14 anos.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Alívio sintomático de dismenorreia primária, menorragia por causas disfuncionais ou por DIU (quando excluída patologia orgânica), síndrome pré-menstrual, cefaleia, odontalgia, dores pós-operatórias/pós-parto e dores musculares e traumáticas (HSL / PSZerado / Bula).',
    administracao: 'VO: tomar 1 comprimido a cada 8 horas (3 vezes ao dia) junto às refeições ou com leite para reduzir desconforto gástrico. Engolir inteiro sem mastigar (HSL / Bula).',
    cuidados: 'Contraindicado em pacientes com úlcera péptica ou gastrite ativa, hemorragia gastrointestinal, doença inflamatória intestinal, insuficiência renal severa, insuficiência hepática severa, insuficiência cardíaca grave, história de broncoespasmo/urticária desencadeados por AAS ou outros AINEs e no 3º trimestre da gravidez. Atenção: formulações comerciais podem conter o corante amarelo de TARTRAZINA (risco de reações alérgicas tipo asma).',
    ajuste: 'Insuficiência renal: contraindicado em insuficiência renal moderada a grave. Insuficiência hepática: descontinuar o uso imediatamente se houver elevação significativa de transaminases ou evidência de lesão hepática.'
  }
};

export default acidoMefenamico;
