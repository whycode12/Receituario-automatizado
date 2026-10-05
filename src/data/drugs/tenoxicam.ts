import { Farmaco } from '../../types';

export const tenoxicam: Farmaco = {
  id: 'tenoxicam',
  nome: 'Tenoxicam',
  categoria: 'Analgésicos e Anti-inflamatórios',
  busca: 'tilatil teflan tenoxicam dor inflamacao aine articular gota',
  classe: 'Anti-inflamatório não esteroidal (AINE da classe dos oxicans), analgésico e antirreumático',
  dosePratica: 'Adulto: VO/EV/IM: 20 mg 1x/dia (ou 40 mg 1x/dia nos primeiros 2 dias de gota aguda ou pós-operatório; máx. 40 mg/dia). EV: reconstituir com 2 mL de AD e administrar em injeção direta lenta (1 a 2 min no adulto, 3-5 min em pediatria segundo Einstein; não recomendado em infusão contínua). Contraindicado em pediatria na rotina.',
  fontes: { HSL: '05/03/2025', EINA: '2026', EINP: '31/08/2026', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'dor ou inflamação',
  acessoFonte: 'RENAME 2024: Tenoxicam não consta no elenco nacional (ibuprofeno e naproxeno são alternativas na rede pública). Pode constar em REMUMEs municipais. Farmácia Popular: não consta no elenco.',
  apresentacoes: [
    {
      id: 'cp20',
      forma: 'cp',
      nome: 'Comprimido revestido 20 mg',
      comercial: 'Tilatil',
      conc: '20mg',
      rotulo: 'Tenoxicam 20mg',
      mg: 20,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Não partir nem mastigar. Ingerir com água, preferencialmente sempre no mesmo horário, durante ou após refeição (HSL / Bula).'
    },
    {
      id: 'fap20',
      forma: 'fap',
      nome: 'Frasco-ampola 20 mg (pó liofilizado + diluente 2 mL)',
      comercial: 'Teflan / Tilatil Injetável',
      conc: '20mg',
      rotulo: 'Tenoxicam 20mg',
      mg: 20,
      volml: 2,
      reconstMl: 2,
      reconstDil: 'Água para Injeção (AD)',
      vias: ['EV', 'IM'],
      disp: '1 frasco-ampola',
      acesso: { rename: false, fp: false },
      obs: 'Reconstituir com 2 mL de AD. IM: injeção profunda. EV: IV direto lento em 1 a 2 min (adultos) ou até 20 mL em 1 min (PSZerado). Não administrar por infusão venosa (EINA / HSL).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 18 },
      vias: ['VO'],
      apres: ['cp20'],
      tipo: 'mg',
      min: 20,
      max: 40,
      padrao: 20,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 7,
      fonte: 'HSL',
      trecho: 'HSL: Adulto: 20-40mg, VO, 1 vez/dia. Dose máxima: 40mg/dia.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 18 },
      vias: ['EV', 'IM'],
      apres: ['fap20'],
      tipo: 'mg',
      min: 20,
      max: 40,
      padrao: 20,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 5,
      fonte: 'PSZERADO',
      trecho: 'PSZerado p. 122: Tenoxicam 20 mg – frasco/ampola (EV): Diluir em 20 mL de água destilada ou diluente próprio. Administrar em 1 minuto.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 18 },
      vias: ['VO', 'EV', 'IM'],
      tipo: 'mg_dia',
      valor: 40,
      fonte: 'HSL',
      trecho: 'Dose máxima: 40mg/dia.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 18 },
      msg: 'Uso não recomendado em crianças e adolescentes menores de 18 anos.',
      fonte: 'HSL',
      trecho: 'Pediatria: Uso não recomendado em crianças e adolescentes.',
      strong: true
    }
  ],
  ev: {
    diluentes: ['Água para Injeção (AD)', 'SF 0,9%'],
    concMax: 10,
    volPadraoAdulto: [
      [20, 2],
      [40, 4]
    ],
    volOpcoes: [2, 10, 20],
    tempo: {
      adulto: { min: 1, max: 2, padrao: 1, txt: 'IV direto lento: administrar em 1 a 2 minutos (não recomendado em infusão contínua).' },
      ped: { min: 3, max: 5, padrao: 3, txt: 'IV direto lento em 3 a 5 minutos (uso restrito/hospitalar conforme Einstein Pediátrico).' }
    },
    fonteTxt: 'Einstein Adultos: Teflan 20 mg FAP. Reconstituição: 2 mL de AD. Estabilidade: uso imediato. Administração: IV direto. Não é recomendada a administração por infusão. Einstein Pediátrico: Teflan 20 mg FAP, 2 mL AD, IV direto em 3 a 5 min. PSZerado: diluir com 20 mL de AD ou diluente próprio em 1 minuto.'
  },
  notas: {
    indicacao: 'Artrite reumatoide, osteoartrite, artrose, espondilite anquilosante, afecções extra-articulares (tendinites, bursites), crises agudas de gota, dor pós-operatória aguda e dismenorreia primária (HSL / Bula).',
    administracao: 'VO: tomar 1 comprimido 1x/dia no mesmo horário, com um copo d’água, durante ou após as refeições. EV: reconstituir com os 2 mL de diluente e aplicar em injeção intravenosa direta lenta (1 a 2 min); não fazer infusão venosa por risco de precipitação. IM: injeção profunda no glúteo (HSL / EINA / PSZerado).',
    cuidados: 'Contraindicado em pacientes com úlcera péptica ou gastrite ativa, hemorragia gastrointestinal, insuficiência cardíaca grave, disfunção renal ou hepática severa, história de reação de hipersensibilidade (broncoespasmo, angioedema) induzida por AAS/AINEs e 3º trimestre de gravidez.',
    ajuste: 'Insuficiência renal: ClCr > 30 mL/min: não há ajuste especial formal, mas usar com cautela e monitorar função renal; ClCr < 30 mL/min: contraindicado. Insuficiência hepática: usar com cautela; contraindicado em cirrose e insuficiência hepática descompensada.'
  }
};

export default tenoxicam;
