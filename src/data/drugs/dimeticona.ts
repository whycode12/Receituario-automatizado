import { Farmaco } from '../../types';

export const dimeticona: Farmaco = {
  id: 'dimeticona',
  nome: 'Dimeticona (Simeticona)',
  categoria: 'Gastrintestinal e Antieméticos',
  busca: 'dimeticona simeticona luftal polidimetilsiloxano antiflatulento gases flatulencia colica distensao',
  classe: 'Antiflatulento (Polímero de dimetilpolissiloxano / Agente Antiespumante)',
  dosePratica: 'Adultos: 40 mg VO (1 comprimido) 3 a 4x/dia, ou 1 cápsula mole de 125 mg até 3 a 4x/dia (máx. 500 mg/dia); ou gotas 75 mg/mL: 13 a 16 gotas 3x/dia (ou até 40-80 gotas se gases intensos). Pediatria (gotas 75 mg/mL): Lactentes: 3 a 5 gotas até 3x/dia; Crianças até 12 anos: 5 a 10 gotas até 3x/dia. Administrar após as refeições e ao deitar.',
  fontes: { HSL: '07/03/2023', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'gases, flatulência ou cólica abdominal',
  acessoFonte: 'Sinônimo farmacológico consagrado da Simeticona (polidimetilsiloxano ativado com dióxido de silício). Consta na RENAME 2024 na forma de emulsão oral 75 mg/mL e ampla disponibilidade de mercado.',
  apresentacoes: [
    {
      id: 'gts75_dim',
      forma: 'gotas',
      nome: 'Emulsão oral / Gotas 75 mg/mL (frasco 15 mL — 25 gotas/mL)',
      comercial: 'Luftal gotas / Dimeticona / Simeticona',
      conc: '75mg/mL',
      rotulo: 'Dimeticona (Simeticona) 75mg/mL gotas',
      mgml: 75,
      gotasml: 25, // 25 gotas = 1 mL = 75 mg; 1 gota = 3 mg
      frascoMl: 15,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      instrucao: 'Agitar bem antes de usar. Pode ser administrado diretamente na boca ou diluído em pequena quantidade de água, chá, suco ou leite. Administrar após as principais refeições ou mamadas e ao deitar.',
      obs: 'RENAME (Componente Básico). 1 mL = 25 gotas = 75 mg (1 gota = 3 mg). Equivalente terapêutico e denominação sinônima de simeticona.'
    },
    {
      id: 'cp40_dim',
      forma: 'cp',
      nome: 'Comprimido 40 mg',
      comercial: 'Luftal / Dimeticona / Simeticona',
      conc: '40mg',
      rotulo: 'Dimeticona 40mg',
      mg: 40,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Ingerir com um pouco de água, após as refeições e ao deitar-se. Mastigar ou engolir conforme fórmula.',
      obs: 'Adultos: 40 mg 3 a 4 vezes ao dia.'
    },
    {
      id: 'cap125_dim',
      forma: 'cp',
      nome: 'Cápsula gelatinosa mole 125 mg',
      comercial: 'Luftal Max / Dimeticona Max',
      conc: '125mg',
      rotulo: 'Dimeticona (Simeticona) 125mg cápsula mole',
      mg: 125,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Engolir a cápsula inteira com água, sem mastigar ou partir. Administrar após as refeições e ao deitar-se.',
      obs: 'Cápsula mole de alta concentração para alívio rápido de retenção gasosa.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      apres: ['cp40_dim'],
      tipo: 'mg',
      min: 40,
      max: 80,
      padrao: 40,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'HSL',
      trecho: 'Adulto Comprimidos: 40mg, VO, 3 a 4 vezes/dia após as refeições e ao deitar.'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      apres: ['cap125_dim'],
      tipo: 'mg',
      min: 125,
      max: 125,
      padrao: 125,
      dosesDia: [1, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'HSL',
      trecho: 'Adulto Cápsulas: 125mg, VO, até 4 vezes/dia após as refeições e ao deitar (máx 500mg/dia).'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      apres: ['gts75_dim'],
      tipo: 'mg',
      min: 39, // ~13 gotas (13 * 3 = 39 mg)
      max: 240, // até 80 gotas em gases intensos / preparo (80 * 3 = 240 mg) conforme PSZerado
      padrao: 48, // 16 gotas = 48 mg (PSZerado / HSL)
      dosesDia: [3, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'HSL',
      trecho: 'Adultos e crianças > 12 anos: 13 a 16 gotas, VO, 3 vezes/dia. Em situações de desconforto acentuado ou preparo de exames (PSZerado): até 60 a 80 gotas a cada 6 horas.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 1, idadeMaxAnos: 12 },
      vias: ['VO'],
      apres: ['gts75_dim'],
      tipo: 'mg',
      min: 15, // 5 gotas (15 mg)
      max: 30, // 10 gotas (30 mg)
      padrao: 20, // ~7 gotas
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'HSL',
      trecho: 'Crianças de 1 a 12 anos: 5 a 10 gotas (15 a 30 mg), VO, 3 vezes/dia após as refeições.'
    },
    {
      pub: 'ped',
      se: { idadeMaxMeses: 12 },
      vias: ['VO'],
      apres: ['gts75_dim'],
      tipo: 'mg',
      min: 9, // 3 gotas (9 mg)
      max: 15, // 5 gotas (15 mg)
      padrao: 12, // 4 gotas (12 mg)
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'HSL',
      trecho: 'Lactentes até 1 ano: 3 a 5 gotas (9 a 15 mg), VO, 3 vezes/dia nas mamadas ou refeições.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 500,
      fonte: 'HSL',
      trecho: 'Dose Máxima Adulto: 500 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com suspeita ou confirmação de perfuração ou obstrução mecânica gastrintestinal e abdome agudo cirúrgico.',
      fonte: 'BULA',
      trecho: 'Contraindicado em casos de perfuração ou obstrução intestinal e abdome agudo.',
      strong: false
    },
    {
      msg: 'Hipersensibilidade à dimeticona/simeticona ou a qualquer componente da fórmula.',
      fonte: 'HSL',
      trecho: 'Contraindicado em pacientes com hipersensibilidade à dimeticona/simeticona.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Alívio sintomático de meteorismo, flatulência, sensação de plenitude gástrica pós-prandial, cólica infantil por gases e preparo de exames digestivos (HSL).',
    administracao: 'VO: Administrar após as refeições e ao deitar. Agitar frasco de gotas antes do uso.',
    cuidados: 'Polímero quimicamente inerte: não sofre absorção sistêmica, atuando exclusivamente pela diminuição da tensão superficial dos líquidos entéricos. Seguro na gravidez e lactação.',
    ajuste: 'Insuficiência renal e hepática: não necessita de ajuste de dose devido à ausência de absorção sistêmica.'
  }
};

export default dimeticona;
