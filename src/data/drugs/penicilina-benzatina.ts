import { Farmaco } from '../../types';

export const penicilinaBenzatina: Farmaco = {
  id: 'penicilina-benzatina',
  nome: 'Benzilpenicilina Benzatina (Benzetacil)',
  categoria: 'Antimicrobianos',
  busca: 'benzetacil penicilina benzatina bepeben benzilpenicilina amigdalite sifilis febre reumatica estreptococo',
  classe: 'Antibiótico betalactâmico, penicilina natural de depósito',
  dosePratica: 'Faringoamigdalite estreptocócica: Adultos e crianças > 27 kg: 1.200.000 UI IM dose única; Crianças < 27 kg: 600.000 UI IM dose única. Sífilis primária/secundária/latente recente: 2.400.000 UI IM dose única (1 ampola de 1.200.000 UI em cada glúteo). Sífilis tardia/latente tardia: 2.400.000 UI IM por semana por 3 semanas (total 7.200.000 UI). Administração EXCLUSIVA por via intramuscular profunda no glúteo; NUNCA administrar por via intravenosa.',
  fontes: { HSL: '05/03/2025', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'infecção bacteriana',
  acessoFonte: 'RENAME 2024: Benzilpenicilina benzatina pó para suspensão injetável 600.000 UI e 1.200.000 UI consta no Componente Básico da Assistência Farmacêutica (CBAF) para uso em UBS/postos de saúde. Farmácia Popular: não consta no elenco comercial.',
  apresentacoes: [
    {
      id: 'fap1200',
      forma: 'fap',
      nome: 'Frasco-ampola 1.200.000 UI / 4 mL',
      comercial: 'Benzetacil / Bepeben',
      conc: '1.200.000 UI',
      rotulo: 'Benzilpenicilina benzatina 1.200.000 UI',
      mg: 1200000,
      volml: 4,
      reconstMl: 4,
      reconstDil: 'Água para Injeção (AD) / Suspensão pronta',
      vias: ['IM'],
      disp: '1 frasco-ampola (4 mL)',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME. Benzetacil: suspensão pronta (agitar vigorosamente antes da aspiração). Bepeben: reconstituir com 3,2 mL de diluente próprio (volume final 4 mL). Aplicação IM profunda exclusiva em glúteo (HSL).'
    },
    {
      id: 'fap600',
      forma: 'fap',
      nome: 'Frasco-ampola 600.000 UI / 4 mL',
      comercial: 'Benzetacil / Bepeben',
      conc: '600.000 UI',
      rotulo: 'Benzilpenicilina benzatina 600.000 UI',
      mg: 600000,
      volml: 4,
      reconstMl: 4,
      reconstDil: 'Água para Injeção (AD) / Suspensão pronta',
      vias: ['IM'],
      disp: '1 frasco-ampola (4 mL)',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME. Indicado para crianças com peso < 27 kg na faringoamigdalite estreptocócica ou profilaxia de febre reumática (PSZerado / HSL).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['IM'],
      apres: ['fap1200'],
      tipo: 'mg',
      min: 1200000,
      max: 2400000,
      padrao: 1200000,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      duracaoMaxDias: 1,
      fonte: 'PSZERADO',
      trecho: 'PSZerado p. 59 e 187: Faringoamigdalite: 1.200.000 UI IM dose única. Sífilis recente: 2.400.000 UI IM dose única (1 ampola em cada glúteo). Sífilis tardia: 2.400.000 UI 1x/semana por 3 semanas.'
    },
    {
      pub: 'ped',
      se: { pesoMax: 27 },
      vias: ['IM'],
      apres: ['fap600'],
      tipo: 'mg',
      min: 600000,
      max: 600000,
      padrao: 600000,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      duracaoMaxDias: 1,
      fonte: 'PSZERADO',
      trecho: 'PSZerado p. 59 e 187: Faringoamigdalite em menores de 27 kg: 600.000 UI IM em dose única (HSL: 25.000 a 50.000 UI/kg).'
    },
    {
      pub: 'ped',
      se: { pesoMin: 27 },
      vias: ['IM'],
      apres: ['fap1200'],
      tipo: 'mg',
      min: 1200000,
      max: 1200000,
      padrao: 1200000,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      duracaoMaxDias: 1,
      fonte: 'PSZERADO',
      trecho: 'PSZerado p. 59 e 187: Faringoamigdalite em maiores de 27 kg: 1.200.000 UI IM em dose única.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['IM'],
      tipo: 'mg_dia',
      valor: 2400000,
      fonte: 'HSL',
      trecho: 'HSL: Dose Máxima Adulto: 2,4 MUI/dia (em dose única dividida em 2 nádegas).'
    },
    {
      pub: 'ped',
      se: { pesoMin: 60 },
      vias: ['IM'],
      tipo: 'mg_dia',
      valor: 2400000,
      fonte: 'HSL',
      trecho: 'HSL: Dose Máxima Pediatria > 60 kg: 2,4 MUI.'
    },
    {
      pub: 'ped',
      se: { pesoMax: 60 },
      vias: ['IM'],
      tipo: 'mg_dia',
      valor: 1200000,
      fonte: 'HSL',
      trecho: 'HSL: Dose Máxima Pediatria < 60 kg: 1,2 MUI.'
    }
  ],
  contra: [
    {
      vias: ['EV'],
      msg: 'Contraindicação ABSOLUTA por via intravenosa / endovenosa. Risco iminente de embolia pulmonar, oclusão vascular, parada cardiorrespiratória e morte imediata.',
      fonte: 'HSL',
      trecho: 'Benzetacil e Bepeben: IM profunda exclusivamente. NUNCA administrar por via endovenosa.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Tratamento de infecções causadas por microrganismos sensíveis à penicilina G: faringoamigdalite estreptocócica por Streptococcus pyogenes (grupo A), sífilis primária, secundária, latente e congênita (Treponema pallidum), profilaxia primária e secundária da febre reumática e glomerulonefrite pós-estreptocócica (HSL / PSZerado / PCDT Sífilis / Bula).',
    administracao: 'IM profunda EXCLUSIVA. Administrar no quadrante superior externo da região glútea ou músculo ventroglúteo. Aspirar obrigatoriamente antes de injetar para assegurar que a agulha não penetrou em vaso sanguíneo. Injetar de forma contínua e lenta para evitar obstrução da agulha devido à viscosidade da suspensão. Em doses de 2.400.000 UI, dividir a aplicação administrando 1 ampola (1.200.000 UI) em cada nádega (HSL / PSZerado). NUNCA administrar por via intravenosa ou intra-arterial.',
    cuidados: 'Contraindicado em pacientes com histórico de hipersensibilidade grave a penicilinas e cefalosporinas (risco de anafilaxia). Ter sempre à disposição material de suporte para choque anafilático (adrenalina, anti-histamínicos, corticosteroides). No tratamento da sífilis, atentar para a Reação de Jarisch-Herxheimer (febre, calafrios, cefaleia e exacerbação de lesões cutâneas nas primeiras 24 horas pós-injeção).',
    ajuste: 'Insuficiência renal: ClCr 10 a 50 mL/min: administrar 75% da dose usual; ClCr < 10 mL/min: administrar 20% a 50% da dose usual (HSL). Hemodiálise: administrar dose de reforço após a sessão. Insuficiência hepática: sem necessidade de ajuste formal de dose.'
  }
};

export default penicilinaBenzatina;
