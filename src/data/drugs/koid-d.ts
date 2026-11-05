import { Farmaco } from '../../types';

export const koidD: Farmaco = {
  id: 'koid_d',
  nome: 'Betametasona + Maleato de Dexclorfeniramina (Koid D)',
  categoria: 'Antialérgicos e Corticoides',
  busca: 'koid d koide celestamine betametasona dexclorfeniramina antialergico corticoide xarope alergia rinite urticaria prurido',
  classe: 'Associação de Corticosteroide Sistêmico e Anti-histamínico H1',
  dosePratica: 'Adultos e adolescentes (> 12 anos): VO: 1 comprimido (ou 5 mL a 10 mL do xarope) de 8/8h a 6/6h após as refeições ou ao deitar (máx. 8 comprimidos ou 40 mL/dia). Pediatria: VO (6 a 12 anos): 1/2 comprimido ou 2,5 mL do xarope de 8/8h (máx. 4 comp ou 20 mL/dia); (2 a 6 anos): 1,25 mL a 2,5 mL do xarope de 8/8h (máx. 10 mL/dia). Contraindicado em < 2 anos. Uso pelo menor tempo possível (habitualmente 3 a 7 dias).',
  fontes: { HSL: '10/06/2016', PSZERADO: '2025', BULA: '04/10/2026' },
  modoPadrao: 'continuo',
  diasPadrao: 5,
  usoContinuoPadrao: false,
  snPadrao: 'crise alérgica, rinite aguda ou urticária',
  acessoFonte: 'RENAME 2024: A associação fixa não consta na RENAME básica (os fármacos isolados dexclorfeniramina e betametasona constam no elenco do SUS). Amplamente disponível na rede farmacêutica comercial (Koid D, Koide D, Celestamine e genéricos). Farmácia Popular: não consta.',
  apresentacoes: [
    {
      id: 'cp',
      forma: 'cp',
      nome: 'Comprimido (0,25 mg + 2 mg)',
      comercial: 'Koid D / Celestamine',
      conc: '0,25mg + 2mg',
      rotulo: 'Betametasona + Dexclorfeniramina (0,25mg + 2mg)',
      mg: 2, // dose indexada pelo maleato de dexclorfeniramina (1 cp = 2 mg dexclorfeniramina + 0,25 mg betametasona)
      frac: 0.5,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Cada comprimido contém 0,25 mg de betametasona e 2 mg de maleato de dexclorfeniramina. Comprimido sulcado. Ingerir após as refeições ou ao deitar com água.'
    },
    {
      id: 'xpe',
      forma: 'sol',
      nome: 'Xarope frasco 120 mL (0,05 mg/mL + 0,4 mg/mL)',
      comercial: 'Koid D / Celestamine xarope',
      conc: '0,05mg/mL + 0,4mg/mL',
      rotulo: 'Betametasona + Dexclorfeniramina xarope (5 mL = 0,25mg + 2mg)',
      mgml: 0.4, // 0,4 mg/mL de dexclorfeniramina (5 mL = 2 mg de dexclorfeniramina e 0,25 mg de betametasona)
      frascoMl: 120,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: false, fp: false },
      obs: 'Cada 5 mL contém 0,25 mg de betametasona e 2 mg de maleato de dexclorfeniramina. Acompanha copo-medida graduado. Administrar preferencialmente após as refeições ou ao deitar.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 2,
      max: 4,
      padrao: 2,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 5,
      fonte: 'BULA',
      trecho: 'Adultos e crianças maiores de 12 anos: 1 a 2 comprimidos (ou 5 a 10 mL do xarope), 3 a 4 vezes ao dia, após as refeições e ao deitar; não ultrapassar 8 comprimidos (ou 40 mL) por dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 6, idadeMaxAnos: 12 },
      vias: ['VO'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1, // 1 mg de dexclorfeniramina = 1/2 comp ou 2,5 mL de xarope
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 10,
      fonte: 'BULA',
      trecho: 'Crianças de 6 a 12 anos: meio comprimido (ou 2,5 mL do xarope), 3 vezes ao dia; não ultrapassar 4 comprimidos (ou 20 mL) por dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 2, idadeMaxAnos: 6 },
      vias: ['VO'],
      apres: ['xpe'],
      tipo: 'mg',
      min: 0.5,
      max: 1,
      padrao: 0.5, // 0,5 mg de dexclorfeniramina = 1,25 mL de xarope
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 10,
      fonte: 'BULA',
      trecho: 'Crianças de 2 a 6 anos: 1,25 mL a 2,5 mL do xarope, 3 vezes ao dia; não ultrapassar 10 mL do xarope por dia.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 16, // 8 comprimidos = 16 mg dexclorfeniramina + 2 mg betametasona
      fonte: 'BULA',
      trecho: 'Dose máxima diária em adultos: 8 comprimidos ou 40 mL de xarope por dia (16 mg de dexclorfeniramina / 2 mg de betametasona).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 6, idadeMaxAnos: 12 },
      tipo: 'mg_dia',
      valor: 8, // 4 comprimidos = 8 mg dexclorfeniramina + 1 mg betametasona
      fonte: 'BULA',
      trecho: 'Dose máxima diária de 6 a 12 anos: 4 comprimidos ou 20 mL de xarope por dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 2, idadeMaxAnos: 6 },
      tipo: 'mg_dia',
      valor: 4, // 10 mL xarope = 4 mg dexclorfeniramina + 0,5 mg betametasona
      fonte: 'BULA',
      trecho: 'Dose máxima diária de 2 a 6 anos: 10 mL de xarope por dia.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 24 },
      msg: 'Contraindicado para crianças menores de 2 anos de idade (Bula ANVISA / HSL).',
      fonte: 'BULA',
      trecho: 'Contraindicado para menores de 2 anos de idade.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com infecções fúngicas sistêmicas, prematuros e recém-nascidos, e em pacientes recebendo terapia com inibidores da MAO (Bula ANVISA).',
      fonte: 'BULA',
      trecho: 'Contraindicado em pacientes com infecção sistêmica por fungos e hipersensibilidade a qualquer componente da fórmula.',
      strong: true
    }
  ],
  conflitos: [
    {
      txt: 'A associação de corticoide sistêmico e anti-histamínico deve ser restrita ao tratamento de curto prazo das exacerbações alérgicas (geralmente 3 a 7 dias). O uso prolongado acarreta risco de supressão adrenal, síndrome de Cushing e sonolência marcante.'
    }
  ],
  notas: {
    indicacao: 'Tratamento adjuvante de afecções alérgicas do trato respiratório (asma brônquica grave, rinite alérgica), dermatológicas (dermatite atópica, dermatite de contato, reações a fármacos, urticária aguda) e oculares de natureza alérgica/inflamatória (Bula ANVISA).',
    administracao: 'Via oral. Ingerir preferencialmente após as refeições ou ao deitar com auxílio de água. O xarope deve ser dosado com o copo-medida graduado. Evitar consumo de bebidas alcoólicas e sedativos durante o uso.',
    cuidados: 'Causa sonolência e pode reduzir a atenção e reflexos ao dirigir ou operar máquinas. Devido à betametasona, monitorar glicemia em diabéticos e pressão arterial em hipertensos. Em crianças, o uso prolongado de corticosteroides pode interferir no crescimento linear.',
    ajuste: 'Insuficiência renal: Não há necessidade de ajuste formal de dose, porém monitorar retenção hídrica pelo corticoide. Insuficiência hepática: Usar com cautela, pois o metabolismo hepático de ambos os fármacos pode estar reduzido.'
  }
};

export default koidD;
