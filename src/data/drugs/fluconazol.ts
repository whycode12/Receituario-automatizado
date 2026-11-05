import { Farmaco } from '../../types';

export const fluconazol: Farmaco = {
  id: 'fluconazol',
  nome: 'Fluconazol',
  categoria: 'Antifúngicos',
  busca: 'fluconazol diflucan zoltec antifungico micose candidiase intertrigo candidiase vaginal 150mg vo',
  classe: 'Antifúngico Triazólico Sistêmico Inibidor do Citocromo P450 Fúngico',
  dosePratica: 'Candidíase Vulvovaginal Aguda: 150 mg VO em dose única. Candidíase Cutânea / Intertrigo Fúngico: 150 mg VO uma vez por semana por 2 a 4 semanas. Dermatomicoses / Tinhas corporais: 150 mg VO 1x/semana por 2 a 4 semanas.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  modoPadrao: 'agora',
  diasPadrao: 0,
  usoContinuoPadrao: false,
  snPadrao: 'candidíase vaginal ou infecção fúngica',
  acessoFonte: 'RENAME 2024 (Componente Básico): Fluconazol 150 mg cápsula.',
  apresentacoes: [
    {
      id: 'cap150',
      forma: 'cap',
      nome: 'Cápsula 150 mg',
      comercial: 'Zoltec®, Diflucan®, Genérico',
      conc: '150mg',
      rotulo: 'Fluconazol 150 mg cápsula',
      mg: 150,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com cápsulas de 150 mg',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar por via oral com um copo de água, com ou sem alimentos, no mesmo dia da semana.',
      obs: 'Excelente absorção oral (> 90%) independente do pH gástrico.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 150,
      max: 150,
      padrao: 150,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: 'Dose única de 150 mg VO ou 150 mg VO uma vez por semana em micoses cutâneas.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 400,
      fonte: 'HSL',
      trecho: 'Dose máxima adulto em infecções profundas: até 400 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em hipersensibilidade a derivados azólicos, uso concomitante com terfenadina ou cisaprida (risco de QT longo) e durante a gestação (exceto dose única em casos estritos).',
      fonte: 'HSL',
      trecho: 'Hipersensibilidade a azólicos ou gestação.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Candidíase vulvovaginal, candidíase cutânea/intertrigo, tinea cruris, tinea pedis e pitiríase versicolor.',
    administracao: 'Ingerir com água, independente da alimentação.',
    cuidados: 'Potente inibidor das isoenzimas CYP2C9 e CYP3A4; monitorar interações com varfarina, fenitoína e estatinas.',
    ajuste: 'Se ClCr < 50 mL/min, reduzir a dose em 50% após a primeira dose habitual.'
  }
};

export default fluconazol;
