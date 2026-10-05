import { Farmaco } from '../../types';

export const codeina: Farmaco = {
  id: 'codeina',
  nome: 'Fosfato de Codeína',
  categoria: 'Analgésicos e Anti-inflamatórios',
  busca: 'codein paco tylex fosfato de codeina analgesico opioide dor moderada',
  classe: 'Analgésico opioide fraco (pró-fármaco convertido em morfina pela CYP2D6)',
  dosePratica: 'Adulto: 30 mg a 60 mg VO a cada 4 a 6 horas conforme a intensidade da dor (dose usual 30 mg de 6/6h; máx. 360 mg/dia). Ingerir com água, com ou sem alimentos. Sujeito a controle especial (Portaria 344/98 - Lista A2/C1). Contraindicado em menores de 12 anos e no pós-operatório de tonsilectomia/adenoidectomia em menores de 18 anos.',
  fontes: { HSL: '05/03/2025', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'dor moderada',
  acessoFonte: 'RENAME 2024: Fosfato de codeína comprimido 30 mg e solução oral 3 mg/mL constam no Componente Especializado da Assistência Farmacêutica (CEAF) para tratamento da dor crônica (CID10 R52.1 e R52.2). Farmácia Popular: não consta no elenco.',
  apresentacoes: [
    {
      id: 'cp30',
      forma: 'cp',
      nome: 'Comprimido 30 mg',
      comercial: 'Codein',
      conc: '30mg',
      rotulo: 'Fosfato de codeína 30mg',
      mg: 30,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Consta no CEAF da RENAME. Dose analgésica usual para dor moderada em adultos (HSL / PSZerado). Receita de controle especial.'
    },
    {
      id: 'cp60',
      forma: 'cp',
      nome: 'Comprimido 60 mg',
      comercial: 'Codein',
      conc: '60mg',
      rotulo: 'Fosfato de codeína 60mg',
      mg: 60,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Indicado para dor moderada a intensa não responsiva a 30 mg. Receita de controle especial.'
    },
    {
      id: 'sol3',
      forma: 'sol',
      nome: 'Solução Oral 3 mg/mL (frasco 120 mL)',
      comercial: 'Codein solução',
      conc: '3mg/mL',
      rotulo: 'Fosfato de codeína 3mg/mL solução oral',
      mgml: 3,
      frascoMl: 120,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      obs: 'Consta no CEAF da RENAME. 10 mL = 30 mg. Uso em adultos ou adolescentes ≥ 12 anos. Contraindicado em menores de 12 anos (Bula).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 18 },
      vias: ['VO'],
      apres: ['cp30', 'cp60', 'sol3'],
      tipo: 'mg',
      min: 30,
      max: 60,
      padrao: 30,
      dosesDia: [4, 6],
      dosesPadrao: 4,
      intervaloFixo: 6,
      duracaoMaxDias: 5,
      fonte: 'PSZERADO',
      trecho: 'PSZerado p. 123: Codeína 30 mg: Tomar 1 comprimido a cada 6 horas (HSL: 30 mg a cada 4 ou 6 horas; variação de 15 a 60 mg/dose).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 12, idadeMaxAnos: 17 },
      vias: ['VO'],
      apres: ['sol3', 'cp30'],
      tipo: 'mg_kg_dose',
      min: 0.5,
      max: 1,
      padrao: 0.5,
      dosesDia: [4, 6],
      dosesPadrao: 4,
      maxDoseMg: 60,
      fonte: 'BULA',
      trecho: 'Bula Codein: Adolescentes a partir de 12 anos: 0,5 a 1 mg/kg a cada 4 a 6 horas (dose única máxima de 60 mg; dose diária máxima de 240 mg/dia).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 18 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 360,
      fonte: 'HSL',
      trecho: 'HSL: Dose Máxima Adulto: O limite de administração é de até 360 mg/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 12, idadeMaxAnos: 17 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 240,
      fonte: 'BULA',
      trecho: 'Bula Codein: Dose diária máxima em adolescentes de 12 a 17 anos: 240 mg/dia.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 12 },
      vias: ['VO'],
      msg: 'Contraindicado para menores de 12 anos de idade (risco grave de depressão respiratória fatal por metabolização ultrarrápida da CYP2D6 em morfina).',
      fonte: 'BULA',
      trecho: 'Bula Codein / ANVISA: Contraindicado para todas as crianças menores de 12 anos de idade.',
      strong: true
    }
  ],
  conflitos: [
    {
      vias: ['VO'],
      txt: 'População Pediátrica: O Guia HSL preconiza contraindicação genérica em crianças ("Em crianças, recém-nascido e bebês prematuros"). A Bula oficial da ANVISA e diretrizes internacionais especificam a contraindicação estrita em menores de 12 anos (e menores de 18 anos em pós-operatório de amígdalas/adenoides), autorizando uso em adolescentes ≥ 12 anos sob cálculo ponderal (0,5 a 1 mg/kg/dose).'
    }
  ],
  notas: {
    indicacao: 'Alívio da dor de intensidade moderada (isolada ou associada ao paracetamol), quando analgésicos comuns (dipirona, paracetamol e AINEs) forem insuficientes (HSL / PSZerado / Bula).',
    administracao: 'VO: ingerir com um copo de água, com ou sem alimentos. Se houver náusea, tomar junto com alimentos leves (HSL / Bula).',
    cuidados: 'Medicamento sujeito a controle especial (Portaria 344/98 - Notificação de Receita). Risco de dependência física, tolerância, sedação, depressão respiratória e constipação intestinal intensa (frequentemente requer associação com laxativo preventivo). Metabolizada em morfina pela enzima hepática CYP2D6; indivíduos metabolizadores ultrarrápidos apresentam risco aumentado de toxicidade fatal por morfina mesmo em doses terapêuticas. Contraindicado em pós-tonsilectomia e adenoidectomia em menores de 18 anos, em insuficiência respiratória severa e durante a amamentação (lactação).',
    ajuste: 'Insuficiência renal: ClCr 10 a 50 mL/min: administrar 75% da dose usual; ClCr < 10 mL/min: administrar 50% da dose usual (HSL). Insuficiência hepática: usar com extrema cautela e doses reduzidas devido ao risco de encefalopatia hepática induzida por opioides.'
  }
};

export default codeina;
