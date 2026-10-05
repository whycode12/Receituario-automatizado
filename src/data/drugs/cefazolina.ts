import { Farmaco } from '../../types';

export const cefazolina: Farmaco = {
  id: 'cefazolina',
  nome: 'Cefazolina Sódica',
  categoria: 'Antimicrobianos',
  busca: 'cefazolina kefazol cefalosporina primeira geracao profilaxia cirurgica infeccao pele osteomielite celulite erisipela bacteremia',
  classe: 'Antibacteriano, Cefalosporina de 1ª geração com potente atividade contra estafilococos sensíveis à oxacilina (MSSA) e estreptococos',
  dosePratica: 'Adulto: EV/IM: 1 g a cada 8 horas (faixa usual de 500 mg a 1 g de 8/8h até 1 g a 2 g de 6/6h a 8/8h em infecções graves; profilaxia cirúrgica: 1 g a 2 g EV 30 a 60 min antes da incisão). Pediatria (> 1 mês): EV/IM: 50 a 100 mg/kg/dia divididos a cada 6 a 8 horas (máximo 6 g/dia em infecções graves). Preparo EV: reconstituir com 10 mL de AD (atenção à expansão de volume para ~10,6 mL / 94 mg/mL) e diluir em 50 a 100 mL de SF 0,9% ou SG 5% infundido em 30 a 60 min.',
  fontes: { HSL: '05/03/2025', EINA: '2026', EINP: '2026', BULA: '04/10/2026' },
  snPadrao: 'infecção bacteriana ou profilaxia cirúrgica',
  acessoFonte: 'RENAME 2024: Pó para solução injetável 1 g consta no Componente Hospitalar da Relação Nacional de Medicamentos Essenciais do SUS. Farmácia Popular: Não consta no elenco comercial.',
  apresentacoes: [
    {
      id: 'fap1g',
      forma: 'fap',
      nome: 'Frasco-Ampola 1 g pó liofilizado',
      comercial: 'Kefazol / Genérico',
      conc: '1g (1000mg)',
      rotulo: 'Cefazolina sódica 1g pó para solução injetável',
      mg: 1000,
      reconstMl: 10,
      reconstDil: 'Água para Injeção (10 mL para EV; 2,5 mL para IM)',
      vias: ['EV', 'IM'],
      disp: '1 frasco-ampola',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME (Componente Hospitalar). Reconstituição EV: 10 mL de AD (volume final expande para aproximadamente 10,6 mL com concentração de ~94 mg/mL). Reconstituição IM: 2,5 mL de AD, SF 0,9% ou Lidocaína 0,5% sem vasoconstritor (HSL).'
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%', 'Ringer Lactato'],
    concMax: 69, // até 69 mg/mL em SF e 77 mg/mL em SG5% em adultos; pediatria até 138 mg/mL (Einstein)
    concUsualPed: 20,
    volPadraoAdulto: [[1000, 100], [2000, 100]],
    volOpcoes: [50, 100],
    tempo: {
      adulto: { min: 3, padrao: 30, max: 60, txt: 'EV Direto lento: 3 a 5 minutos. Infusão: 30 a 60 minutos (Einstein Adultos / HSL)' },
      ped: { min: 3, padrao: 30, max: 60, txt: 'EV Direto lento (100 mg/mL): 3 a 5 minutos. Infusão: 10 a 60 minutos (Einstein Pediátrico / HSL)' }
    },
    fonteTxt: 'Reconstituição EV: adicionar 10 mL de AD (o pó expande o volume final para 10,6 mL, resultando em ~94 mg/mL). EV Direto lento: administrar em 3 a 5 minutos. Infusão venosa intermitente: diluir a dose reconstituída em 50 a 100 mL de SF 0,9% ou SG 5% e infundir em 30 a 60 minutos (Einstein Adultos). Estabilidade: 12h em temperatura ambiente ou 24h refrigerado. A solução pode adquirir tom amarelo-amarronzado sem perda de potência terapêutica (HSL).'
  },
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['EV', 'IM'],
      apres: ['fap1g'],
      tipo: 'mg',
      min: 500,
      max: 1000,
      padrao: 1000,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL: Adulto IM e EV: 250mg a 1g de 6/6h a 8/8h (Dose padrão habitual: 1g a cada 8h; em infecções graves até 1g a 2g de 6/6h; profilaxia cirúrgica: 1g a 2g EV 30-60 min antes da cirurgia).'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 1, idadeMaxAnos: 11 },
      vias: ['EV', 'IM'],
      apres: ['fap1g'],
      tipo: 'mg_kg_dia',
      min: 50,
      max: 100,
      padrao: 50,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL: Pediatria (> 1 mês) IM e EV: 50 a 100 mg/kg/dia divididos a cada 6 a 8 horas (máximo 6 g/dia).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['EV', 'IM'],
      tipo: 'mg_dia',
      valor: 12000,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima adulto IM ou EV: 12 g/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 1, idadeMaxAnos: 11 },
      vias: ['EV', 'IM'],
      tipo: 'mg_dia',
      valor: 6000,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima pediatria: 6 g/dia (100 mg/kg/dia).'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 1 },
      vias: ['EV', 'IM'],
      msg: 'Uso não recomendado em recém-nascidos e lactentes com menos de 1 mês de vida (segurança clínica não estabelecida).',
      fonte: 'HSL',
      trecho: 'HSL: Posologia pediátrica estabelecida para maiores de 1 mês de idade.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada à cefazolina, outras cefalosporinas ou histórico de anafilaxia a betalactâmicos.',
      fonte: 'BULA',
      trecho: 'Bula Kefazol: Contraindicado para pacientes com hipersensibilidade a cefalosporinas.'
    }
  ],
  notas: {
    indicacao: 'Tratamento de infecções bacterianas causadas por microrganismos sensíveis: infecções de pele e tecidos moles (celulite, erisipela, abscessos, impetigo), osteomielite e artrite séptica por MSSA, infecções do trato respiratório inferior, infecções do trato urinário, infecções das vias biliares, sepse/bacteremia por Gram-positivos sensíveis; e profilaxia antimicrobiana cirúrgica de primeira linha (HSL / Einstein / Bula).',
    administracao: 'EV: Reconstituir com 10 mL de AD (volume expande para 10,6 mL com conc ~94 mg/mL). EV Direto: administrar lentamente em 3 a 5 minutos. EV Infusão: diluir em 50 a 100 mL de SF 0,9% ou SG 5% e infundir em 30 a 60 minutos (Einstein Adultos / HSL). IM: Injetar profundamente em grande massa muscular glútea (reconstituir com 2,5 mL de AD, SF ou solução de lidocaína 0,5% para amenizar dor local).',
    cuidados: 'Possibilidade de hipersensibilidade cruzada em pacientes alérgicos a penicilinas (cerca de 5 a 10%); contraindicado se histórico de anafilaxia ou reação imunomediada grave por betalactâmicos. Monitorar função renal em uso concomitante com aminoglicosídeos ou diuréticos de alça. A coloração amarelada a acastanhada da solução após reconstituição não indica alteração da eficácia.',
    ajuste: 'Insuficiência renal EV/IM: ClCr 35 a 54 mL/min: dose habitual a cada 8h (sem redução necessária); ClCr 11 a 34 mL/min: administrar 50% da dose habitual a cada 12 horas; ClCr ≤ 10 mL/min: administrar 50% da dose habitual a cada 18 a 24 horas (HSL). Hemodiálise: dialisável (20% a 50%); administrar dose de 500 mg a 1 g após cada sessão de diálise (ou 15-20 mg/kg pós-diálise). Insuficiência hepática: não requer ajuste de dose.'
  }
};

export default cefazolina;
