import { Farmaco } from '../../types';

export const acetilcisteina: Farmaco = {
  id: 'acetilcisteina',
  nome: 'Acetilcisteína',
  categoria: 'Mucolíticos, Expectorantes e Antídotos',
  busca: 'acetilcisteina fluimucil cisteina mucolitico expectorante intoxicacao paracetamol flaconete',
  classe: 'Mucolítico das Vias Aéreas, Antioxidante e Antídoto da Intoxicação por Paracetamol (Doador de Glutationa)',
  dosePratica: 'Expectorante / Mucolítico Oral: Adultos: 600 mg VO 1x/dia (1 sachê ou 15 mL do xarope 40 mg/mL) de preferência à noite; Pediatria: 2 a 4 anos: 100 mg (5 mL do xarope 20 mg/mL) 2 a 3x/dia; > 4 anos: 100 mg (5 mL do xarope 20 mg/mL) 3 a 4x/dia (ou 200 mg 2x/dia). Intoxicação por Paracetamol: IV (Protocolo HSL / PSZerado): Ataque de 150 mg/kg em 200 mL SG 5% em 1h; seguido de 50 mg/kg em 500 mL SG 5% em 4h; seguido de 100 mg/kg em 1.000 mL SG 5% em 16h.',
  fontes: { HSL: '07/03/2023', PSZERADO: '2025', EINA: '2023', EINP: '2023', BULA: '04/10/2026' },
  snPadrao: 'tosse produtiva, hipersecreção pulmonar ou intoxicação aguda por paracetamol',
  acessoFonte: 'RENAME 2024 / REMUME: Componente Básico (CBAF) com xarope adulto 40 mg/mL e pediátrico 20 mg/mL e sachê granulado 600 mg. Hospitalar: ampola injetável 10% (100 mg/mL - 3 mL) como antídoto hospitalar essencial.',
  apresentacoes: [
    {
      id: 'xpe_adulto_40',
      forma: 'sol',
      nome: 'Xarope adulto 40 mg/mL (frasco 120 mL com copo-medida)',
      comercial: 'Fluimucil 40mg/mL / Cisteil / Genérico',
      conc: '40mg/mL',
      rotulo: 'Acetilcisteína xarope 40mg/mL (adulto)',
      mgml: 40,
      frascoMl: 120,
      vias: ['VO'],
      disp: '1 frasco com 120 mL',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar por via oral utilizando o copo-medida graduado, de preferência à noite antes de deitar ou conforme horários prescritos. Não diluir o xarope. Ingerir bastante água ao longo do dia para facilitar a fluidificação do muco.',
      obs: 'RENAME / REMUME. 15 mL = 600 mg. Indicado para adultos e adolescentes > 12 anos.'
    },
    {
      id: 'xpe_ped_20',
      forma: 'sol',
      nome: 'Xarope pediátrico 20 mg/mL (frasco 120 mL com copo-medida)',
      comercial: 'Fluimucil 20mg/mL / Cisteil Pediátrico / Genérico',
      conc: '20mg/mL',
      rotulo: 'Acetilcisteína xarope 20mg/mL (pediátrico)',
      mgml: 20,
      frascoMl: 120,
      vias: ['VO'],
      disp: '1 frasco com 120 mL',
      acesso: { rename: true, fp: false },
      instrucao: 'Administrar a dose recomendada utilizando o copo-medida graduado. Não administrar em crianças menores de 2 anos de idade. Após aberto o frasco, consumir em até 14 dias.',
      obs: 'RENAME / REMUME. 5 mL = 100 mg. Indicado para crianças de 2 a 12 anos.'
    },
    {
      id: 'sache_600',
      forma: 'sachet',
      nome: 'Sachê granulado oral 600 mg',
      comercial: 'Fluimucil D 600mg / Cisteil 600mg / Genérico',
      conc: '600mg',
      rotulo: 'Acetilcisteína 600mg granulado oral (sachê)',
      mg: 600,
      vias: ['VO'],
      disp: '1 caixa com 16 sachês',
      acesso: { rename: true, fp: false },
      instrucao: 'Dissolver completamente o conteúdo de 1 sachê em meio copo de água à temperatura ambiente (cerca de 100 mL) com o auxílio de uma colher. Ingerir imediatamente após a dissolução completa, de preferência à noite.',
      obs: 'RENAME / REMUME. Forma consagrada para comodidade posológica de dose única diária em adultos.'
    },
    {
      id: 'sache_200',
      forma: 'sachet',
      nome: 'Sachê granulado oral 200 mg',
      comercial: 'Fluimucil 200mg / Genérico',
      conc: '200mg',
      rotulo: 'Acetilcisteína 200mg granulado oral (sachê)',
      mg: 200,
      vias: ['VO'],
      disp: '1 caixa com 16 sachês',
      acesso: { rename: false, fp: false },
      instrucao: 'Dissolver o conteúdo do envelope em meio copo de água e ingerir imediatamente.',
      obs: 'Indicado para esquemas fracionados de 8/8h ou para crianças acima de 4 anos sob orientação médica.'
    },
    {
      id: 'amp_100',
      forma: 'amp',
      nome: 'Ampola injetável 10% (100 mg/mL - 3 mL = 300 mg)',
      comercial: 'Fluimucil 10% injetável / Genérico',
      conc: '100mg/mL (300mg / 3mL)',
      rotulo: 'Acetilcisteína 10% ampola 3mL (100mg/mL)',
      mgml: 100,
      volml: 3,
      vias: ['EV', 'IM', 'INALATORIA'],
      disp: '1 ampola (3 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Uso Injetável EV/IM ou Inalatório: EV: Diluir em SF 0,45%, SF 0,9% ou SG 5% e infundir em > 1h (risco de reações anafilactoides se infusão rápida). IM: Aplicação profunda. Inalatória: Diluir 1 ampola (3 mL) em igual volume de SF 0,9% (3 mL) para nebulização (1 a 2 sessões/dia).',
      obs: 'RENAME Hospitalar. Uso como mucolítico parenteral, inalatório e essencial como antídoto específico na intoxicação aguda por paracetamol.'
    }
  ],
  regras: [
    // 1. Mucolítico Adulto VO (Sachê 600 ou Xarope 40 mg/mL)
    {
      pub: 'adulto',
      vias: ['VO'],
      apres: ['sache_600', 'xpe_adulto_40'],
      tipo: 'mg',
      min: 600,
      max: 600,
      padrao: 600,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 10,
      fonte: 'HSL / BULA',
      trecho: 'Adultos: 600 mg VO 1 vez/dia, de preferência à noite (ou 15 mL do xarope 40 mg/mL), por 5 a 10 dias.'
    },
    // 2. Mucolítico Adulto VO Fracionado (Sachê 200 mg)
    {
      pub: 'adulto',
      vias: ['VO'],
      apres: ['sache_200'],
      tipo: 'mg',
      min: 200,
      max: 200,
      padrao: 200,
      dosesDia: [2, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 10,
      fonte: 'HSL / BULA',
      trecho: 'Adultos esquema fracionado: 200 mg VO 2 a 3 vezes ao dia.'
    },
    // 3. Mucolítico Pediatria (2 a 4 anos) - Xarope 20 mg/mL
    {
      pub: 'ped',
      se: { idadeMinAnos: 2, idadeMaxAnos: 4 },
      vias: ['VO'],
      apres: ['xpe_ped_20'],
      tipo: 'mg',
      min: 100,
      max: 100,
      padrao: 100,
      dosesDia: [2, 3],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 10,
      fonte: 'HSL / BULA',
      trecho: 'Pediatria de 2 a 4 anos: 100 mg VO (5 mL do xarope 20 mg/mL) 2 a 3 vezes ao dia.'
    },
    // 4. Mucolítico Pediatria (> 4 anos) - Xarope 20 mg/mL ou Sachê 200 mg
    {
      pub: 'ped',
      se: { idadeMinAnos: 5 },
      vias: ['VO'],
      apres: ['xpe_ped_20', 'sache_200'],
      tipo: 'mg',
      min: 100,
      max: 200,
      padrao: 100,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 10,
      fonte: 'HSL / BULA',
      trecho: 'Pediatria maiores de 4 anos: 100 mg VO (5 mL) 3 a 4 vezes ao dia (ou 200 mg 2 a 3 vezes/dia).'
    },
    // 5. Mucolítico Adulto EV/IM (Ampola 100 mg/mL)
    {
      pub: 'adulto',
      vias: ['EV', 'IM'],
      apres: ['amp_100'],
      tipo: 'mg',
      min: 300,
      max: 300,
      padrao: 300,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'HSL',
      trecho: 'Adultos parenteral: 300 mg EV ou IM 1 a 2 vezes ao dia.'
    },
    // 6. Mucolítico Pediatria EV (> 2 anos)
    {
      pub: 'ped',
      se: { idadeMinAnos: 2 },
      vias: ['EV'],
      apres: ['amp_100'],
      tipo: 'mg',
      min: 150,
      max: 150,
      padrao: 150,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'HSL',
      trecho: 'Endovenoso pediátrico (> 2 anos): 150 mg EV 1 a 2 vezes ao dia.'
    },
    // 7. Inalatória / Nebulização (Adulto e Pediatria)
    {
      pub: 'adulto',
      vias: ['INALATORIA'],
      apres: ['amp_100'],
      tipo: 'mg',
      min: 300,
      max: 300,
      padrao: 300,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'HSL / BULA',
      trecho: 'Inalatória: 1 ampola (300 mg / 3 mL) diluída em igual volume de SF 0,9% para nebulização 1 a 2 sessões por dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 2 },
      vias: ['INALATORIA'],
      apres: ['amp_100'],
      tipo: 'mg',
      min: 300,
      max: 300,
      padrao: 300,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      fonte: 'HSL / BULA',
      trecho: 'Inalatória pediátrica (> 2 anos): 1 ampola (3 mL) diluída em 3 mL de SF 0,9% 1 a 2 vezes por dia.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 1200,
      fonte: 'HSL / BULA',
      trecho: 'Dose máxima diária como mucolítico oral em adultos: até 1.200 mg/dia (em intoxicação por paracetamol as doses são calculadas especificamente por mg/kg).'
    },
    {
      pub: 'ped',
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 600,
      fonte: 'HSL / BULA',
      trecho: 'Dose máxima diária pediátrica como mucolítico: até 600 mg/dia.'
    },
    {
      pub: 'adulto',
      vias: ['EV', 'IM'],
      tipo: 'mg_dia',
      valor: 600,
      fonte: 'HSL',
      trecho: 'Dose máxima usual parenteral para fins mucolíticos: 600 mg/dia (2 ampolas).'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 1 },
      msg: 'Contraindicado em crianças menores de 2 anos de idade pelo risco de hipersecreção e acúmulo de secreções brônquicas decorrente da fisiologia respiratória infantil e menor calibre das vias aéreas.',
      fonte: 'BULA / ANVISA',
      trecho: 'Este medicamento é contraindicado para uso por crianças menores de 2 anos.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade conhecida à acetilcisteína ou a qualquer componente da fórmula.',
      fonte: 'HSL / BULA',
      trecho: 'Hipersensibilidade conhecida à acetilcisteína e/ou demais componentes das formulações.',
      strong: false
    },
    {
      msg: 'Cautela em pacientes com úlcera péptica ativa ou histórico de úlcera gastrointestinal, pois os mucolíticos podem alterar a barreira de muco da mucosa gástrica.',
      fonte: 'HSL / BULA',
      trecho: 'Recomenda-se precaução em pacientes com histórico de úlcera péptica.',
      strong: false
    },
    {
      msg: 'Em pacientes com asma brônquica ou história de broncoespasmo, o uso inalatório requer extrema cautela e monitorização rigorosa; se ocorrer broncoespasmo induzido por irritação reflexa das vias aéreas, suspender a inalação e administrar broncodilatador.',
      fonte: 'HSL / BULA',
      trecho: 'Pacientes com asma brônquica devem ser estreitamente monitorizados durante o tratamento inalatório pelo risco de broncoespasmo.',
      strong: false
    }
  ],
  ev: {
    diluentes: ['SF 0,45%', 'SF 0,9%', 'SG 5%'],
    concMax: 200,
    concUsual: 3,
    concUsualPed: 200,
    volOpcoes: [100, 200, 250, 500, 1000],
    tempo: {
      adulto: { min: 60, max: 120, padrao: 60, txt: 'Infusão EV em no mínimo 60 minutos' },
      ped: { min: 60, max: 120, padrao: 60, txt: 'Infusão EV em 60 minutos' }
    },
    fonteTxt: 'Einstein Adultos / Einstein Pediátrico / HSL'
  },
  notas: {
    indicacao: 'Tratamento de afecções respiratórias agudas e crônicas com hipersecreção viscosa (bronquites, broncopneumonias, DPOC, atelectasias, fibrose cística/mucoviscidose). Antídoto de escolha para intoxicação exógena aguda por paracetamol (HSL / PSZerado / Einstein).',
    administracao: 'VO: Sachê deve ser dissolvido em água e tomado imediatamente. Xarope deve ser administrado com copo-medida sem diluir. Ingestão hídrica abundante complementa o efeito. EV: Diluir em SG 5% ou SF e infundir em pelo menos 1 hora para minimizar reações anafilactoides (rubor cutâneo, hipotensão, náuseas). Inalatória: Diluir 1 ampola (3 mL) em 3 mL de SF 0,9% no copinho do nebulizador.',
    cuidados: 'Intoxicação aguda por Paracetamol: Iniciar idealmente dentro das primeiras 8 a 10 horas após a ingestão para máxima hepatoproteção (Protocolo clássico EV: 150 mg/kg em 1h + 50 mg/kg em 4h + 100 mg/kg em 16h). Para uso injetável, a ampola deve ser utilizada imediatamente após a abertura. Para uso inalatório, sob refrigeração é estável por até 24h (HSL).',
    ajuste: 'Insuficiência renal e hepática: não requer ajuste de dose formal na literatura, ressalvando monitoramento em hepatopatia grave instalada (HSL).'
  }
};

export default acetilcisteina;
