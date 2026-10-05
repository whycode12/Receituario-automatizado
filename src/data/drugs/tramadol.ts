import { Farmaco } from '../../types';

export const tramadol: Farmaco = {
  id: 'tramadol',
  nome: 'Cloridrato de Tramadol',
  categoria: 'Analgésicos e Anti-inflamatórios',
  busca: 'tramal tramadol dor analgesico opioide moderada severa',
  classe: 'Analgésico opioide (agonista dos receptores mu-opioides e inibidor da recaptação de serotonina/noradrenalina)',
  dosePratica: 'Adulto: VO: 50 a 100 mg a cada 4-6h se dor moderada a intensa (máx. 400 mg/dia). EV/IM: 50 a 100 mg a cada 4-6h (diluir EV em 100 mL de SF 0,9% ou SG 5% e infundir em 30 a 60 min lentamente para prevenir náuseas e vômitos; máx. 400 mg/dia). Pediatria: Einstein Pediátrico padroniza EV (1 mg/mL em 15-60 min) e PSZerado 1-2 mg/kg/dose a cada 6h (bula gotas 100 mg/mL com 40 gts/mL: 4-8 gotas a cada 10 kg/dose).',
  fontes: { HSL: '05/03/2025', EINA: '2026', EINP: '31/08/2026', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'dor moderada a intensa',
  acessoFonte: 'RENAME 2024: Cloridrato de Tramadol não consta no elenco nacional da RENAME (CONITEC não incorporou para dor crônica). Pode constar em REMUMEs municipais e estaduais com receita de controle especial (Portaria 344/98 - Lista A2/C1). Farmácia Popular: não consta no elenco.',
  apresentacoes: [
    {
      id: 'cap50',
      forma: 'cap',
      nome: 'Cápsula / Comprimido 50 mg',
      comercial: 'Tramal',
      conc: '50mg',
      rotulo: 'Cloridrato de Tramadol 50mg',
      mg: 50,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Ingerir com um copo de água, com ou sem alimentos (HSL). Receita de controle especial.'
    },
    {
      id: 'cp100',
      forma: 'cp',
      nome: 'Comprimido 100 mg',
      comercial: 'Tramal Retard / Tramadol',
      conc: '100mg',
      rotulo: 'Cloridrato de Tramadol 100mg',
      mg: 100,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Dose para dor intensa em adultos. Engolir inteiro com água (HSL).'
    },
    {
      id: 'gts100',
      forma: 'gotas',
      nome: 'Solução Oral Gotas 100 mg/mL (40 gotas/mL - frasco 10 mL)',
      comercial: 'Tramal gotas',
      conc: '100mg/mL',
      rotulo: 'Cloridrato de Tramadol 100mg/mL gotas',
      mgml: 100,
      gotasml: 40,
      frascoMl: 10,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: false, fp: false },
      obs: 'Atenção ao gotejador: 1 mL = 40 gotas (1 gota = 2,5 mg). Adultos: 20 gotas = 50 mg, 40 gotas = 100 mg (HSL). Crianças ≥ 1 ano: 4 a 8 gotas por cada 10 kg de peso (Bula).'
    },
    {
      id: 'amp50',
      forma: 'amp',
      nome: 'Ampola 50 mg / 1 mL (solução injetável)',
      comercial: 'Tramal / Tramadol',
      conc: '50mg/mL',
      rotulo: 'Cloridrato de Tramadol 50mg/1mL',
      mgml: 50,
      volml: 1,
      vias: ['IM', 'EV'],
      disp: '1 ampola',
      acesso: { rename: false, fp: false },
      obs: 'IM: administrar lentamente (HSL). EV: diluir em 100 mL de SF 0,9% ou SG 5% e infundir em 30-60 min para reduzir náuseas e vômitos (EINA / HSL / PSZerado).'
    },
    {
      id: 'amp100',
      forma: 'amp',
      nome: 'Ampola 100 mg / 2 mL (solução injetável)',
      comercial: 'Tramal / Tramadol',
      conc: '50mg/mL',
      rotulo: 'Cloridrato de Tramadol 100mg/2mL',
      mgml: 50,
      volml: 2,
      vias: ['IM', 'EV'],
      disp: '1 ampola',
      acesso: { rename: false, fp: false },
      obs: 'IM: administrar lentamente (HSL). EV: diluir em 100 mL de SF 0,9% ou SG 5% e infundir em 30-60 min (EINA / HSL / PSZerado).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 16 },
      vias: ['VO'],
      apres: ['cap50', 'cp100'],
      tipo: 'mg',
      min: 50,
      max: 100,
      padrao: 50,
      dosesDia: [4, 6],
      dosesPadrao: 4,
      fonte: 'HSL',
      trecho: 'Adulto Comprimido: 50-100mg, a cada 4-6h. VO: pode ser ingerido com ou sem alimentos, com um copo de água.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 16 },
      vias: ['VO'],
      apres: ['gts100'],
      tipo: 'mg',
      min: 50,
      max: 100,
      padrao: 50,
      dosesDia: [4, 8],
      dosesPadrao: 4,
      fonte: 'HSL',
      trecho: 'Adulto Gotas: 20 gotas (50mg) a 40 gotas (100mg), até 8 vezes/dia (dose usual a cada 4-6h).'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 16 },
      vias: ['EV', 'IM'],
      tipo: 'mg',
      min: 50,
      max: 100,
      padrao: 100,
      dosesDia: [4, 6],
      dosesPadrao: 4,
      fonte: 'HSL',
      trecho: 'Adulto Injetável: 50-100mg, a cada 4-6h. EV: lento 30 a 60 min. IM: lentamente.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 1, idadeMaxAnos: 15 },
      vias: ['EV'],
      tipo: 'mg_kg_dose',
      min: 1,
      max: 2,
      padrao: 1,
      dosesDia: [3, 4],
      dosesPadrao: 4,
      fonte: 'PSZERADO',
      trecho: 'PSZerado p. 193: Tramadol 100 mg/2 mL – 1 ampola: Diluir 1 ampola em 100 mL SF 0,9% e administrar IV em 30 minutos. Dose pediátrica: 1 a 2 mg/kg/dose a cada 6 horas.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 1, idadeMaxAnos: 15 },
      vias: ['VO'],
      apres: ['gts100'],
      tipo: 'mg_kg_dose',
      min: 1,
      max: 2,
      padrao: 1,
      dosesDia: [3, 4],
      dosesPadrao: 4,
      fonte: 'BULA',
      trecho: 'Bula Tramal Gotas: Crianças a partir de 1 ano: dose única de 1 a 2 mg/kg de peso corporal (4 a 8 gotas por 10 kg de peso corporal), a cada 6 a 8 horas. Dose máxima diária de 8 mg/kg/dia.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 16 },
      vias: ['VO', 'EV', 'IM'],
      tipo: 'mg_dia',
      valor: 400,
      fonte: 'HSL',
      trecho: 'Dose Máxima Adulto: 400mg/dia.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 1, idadeMaxAnos: 15 },
      vias: ['VO', 'EV'],
      tipo: 'mg_kg_dia',
      valor: 8,
      fonte: 'BULA',
      trecho: 'Dose máxima pediátrica: 8 mg/kg/dia (ou 400 mg/dia, o que for menor).'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 1 },
      msg: 'Contraindicado para menores de 1 ano de idade.',
      fonte: 'BULA',
      trecho: 'O uso de cloridrato de tramadol não é recomendado para crianças menores de 1 ano.',
      strong: true
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 1,
    concUsualPed: 1,
    volPadraoAdulto: [
      [100, 100]
    ],
    volOpcoes: [50, 100, 250],
    tempo: {
      adulto: { min: 30, max: 60, padrao: 60, txt: 'Infusão EV em 30 a 60 minutos (ou 1 hora) para prevenir náuseas, vômitos e hipotensão (EINA / HSL / PSZerado).' },
      ped: { min: 15, max: 60, padrao: 30, txt: 'Infusão EV em 15 a 60 minutos (padrão 30 minutos em bomba ou microgotas) (EINP / PSZerado).' }
    },
    fonteTxt: 'Adulto (Einstein): SF ou SG 5% 100 mL. Uso imediato. Infusão: gotejamento lento (ou IV direto 1 mL/min). HSL: concentração máxima 1 mg/mL em no mínimo 50 mL em 30 a 60 min. Pediatria (Einstein): SF ou SG 5%, conc. usual 1 mg/mL, tempo 15 a 60 min.'
  },
  conflitos: [
    {
      vias: ['EV', 'VO'],
      txt: 'Faixa etária pediátrica: O Guia HSL restringe o uso rotineiro para < 16 anos ("Uso não recomendado"). Entretanto, o Manual Einstein Pediátrico padroniza diluição EV (1 mg/mL em 15-60 min), o Guia PSZerado 2025 padroniza 1 a 2 mg/kg/dose EV a cada 6h, e a Bula Oficial ANVISA autoriza o uso de solução gotas para crianças a partir de 1 ano (1 a 2 mg/kg/dose, máx 8 mg/kg/dia).'
    }
  ],
  notas: {
    indicacao: 'Alívio da dor de intensidade moderada a intensa/severa, de caráter agudo, subagudo ou crônico de etiologia diversa (pós-operatório, traumatismos, neoplasias, dor neuropática) (HSL / PSZerado / Bula).',
    administracao: 'VO: ingerir com água, com ou sem alimentos. EV: diluir obrigatoriamente (mínimo 50 mL a 100 mL de SF 0,9% ou SG 5%) e infundir lentamente em 30 a 60 minutos (ou gotejamento lento); a infusão rápida causa alta incidência de náuseas, vômitos, tontura e hipotensão. IM: administrar lentamente por injeção intramuscular profunda (HSL / PSZerado / EINA).',
    cuidados: 'Medicamento sujeito a controle especial (Portaria 344/98). Risco de depressão respiratória, sedação excessiva, constipação, dependência física/tolerância e convulsões (reduz o limiar convulsígeno). Evitar uso concomitante com inibidores da MAO, antidepressivos serotoninérgicos (risco de síndrome serotoninérgica) e depressores do SNC. Cautela em pacientes com traumatismo cranioencefálico ou hipertensão intracraniana.',
    ajuste: 'Insuficiência renal (ClCr < 30 mL/min): prolongar o intervalo entre as doses para 12/12h (50 mg a cada 12h; máx. 200 mg/dia). Insuficiência hepática (cirrose): prolongar o intervalo entre as doses para 12/12h (50 mg a cada 12h) (HSL / Bula).'
  }
};

export default tramadol;
