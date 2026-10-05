import { Farmaco } from '../../types';

export const simeticona: Farmaco = {
  id: 'simeticona',
  nome: 'Simeticona',
  categoria: 'Gastrintestinal e Antieméticos',
  busca: 'simeticona luftal luftalmax dimeticona antiflatulento gases flatulencia distensao colica',
  classe: 'Antiflatulento (Agente antiespumante redutor de tensão superficial)',
  dosePratica: 'Adultos: 40 mg VO (1 comprimido) 3 a 4x/dia, ou 1 cápsula gelatinosa de 125 mg até 3 a 4x/dia (máx. 500 mg/dia); ou gotas 75 mg/mL: 13 a 16 gotas 3x/dia (ou até 40-80 gotas se gases intensos/preparo de exames). Pediatria (gotas 75 mg/mL): Lactentes: 3 a 5 gotas até 3x/dia; Crianças até 12 anos: 5 a 10 gotas até 3x/dia. Administrar após refeições e ao deitar.',
  fontes: { HSL: '07/03/2023', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'gases, cólica intestinal ou distensão abdominal',
  acessoFonte: 'RENAME 2024: Simeticona emulsão oral 75 mg/mL (frasco 10 mL ou 15 mL) no Componente Básico da Atenção Primária à Saúde. Ampla disponibilidade em farmácias comerciais e UBS.',
  apresentacoes: [
    {
      id: 'gts75',
      forma: 'gotas',
      nome: 'Emulsão oral / Gotas 75 mg/mL (frasco 15 mL — 25 gotas/mL)',
      comercial: 'Luftal gotas / Genérico',
      conc: '75mg/mL',
      rotulo: 'Simeticona 75mg/mL gotas',
      mgml: 75,
      gotasml: 25, // Bula Luftal e HSL: 25 gotas = 1 mL = 75 mg; 1 gota = 3 mg
      frascoMl: 15,
      vias: ['VO'],
      disp: '1 frasco',
      acesso: { rename: true, fp: false },
      instrucao: 'Agitar bem antes de usar. Pode ser administrado diretamente na boca ou diluído em pequena quantidade de água, chá, suco ou leite. Administrar após as principais refeições ou mamadas e ao deitar.',
      obs: 'RENAME (Componente Básico). 1 mL = 25 gotas = 75 mg. Cada gota contém 3 mg de simeticona.'
    },
    {
      id: 'cp40',
      forma: 'cp',
      nome: 'Comprimido 40 mg',
      comercial: 'Luftal / Simeticona',
      conc: '40mg',
      rotulo: 'Simeticona 40mg',
      mg: 40,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Ingerir com um pouco de água, após as refeições e ao deitar-se. Mastigar ou engolir inteiro conforme formulação.',
      obs: 'Dose habitual em adultos: 40 mg 3 a 4 vezes ao dia.'
    },
    {
      id: 'cap125',
      forma: 'cp',
      nome: 'Cápsula gelatinosa mole 125 mg',
      comercial: 'Luftal Max / Simeticona Max',
      conc: '125mg',
      rotulo: 'Simeticona 125mg cápsula mole',
      mg: 125,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Engolir a cápsula inteira com um copo de água, sem mastigar ou partir. Administrar após as refeições e ao deitar-se.',
      obs: 'Cápsula gelatinosa mole de maior concentração para rápido alívio da distensão e cólicas por gases.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      apres: ['cp40'],
      tipo: 'mg',
      min: 40,
      max: 80,
      padrao: 40,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'HSL',
      trecho: 'Adulto Comprimidos: 40mg (1 comprimido), VO, 3 a 4 vezes/dia após as refeições e ao deitar.'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      apres: ['cap125'],
      tipo: 'mg',
      min: 125,
      max: 125,
      padrao: 125,
      dosesDia: [1, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'HSL',
      trecho: 'Adulto Cápsulas: 125mg (1 cápsula), VO, até 4 vezes/dia após as refeições e ao deitar (máx 500mg/dia).'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      apres: ['gts75'],
      tipo: 'mg',
      min: 39, // ~13 gotas (13 * 3 = 39 mg)
      max: 240, // até 80 gotas em gases intensos / preparo (80 * 3 = 240 mg) conforme PSZerado
      padrao: 48, // 16 gotas = 48 mg (PSZerado / HSL)
      dosesDia: [3, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'HSL',
      trecho: 'Adultos e crianças > 12 anos: 13 a 16 gotas (cerca de 40 a 50 mg), VO, 3 vezes/dia. Em situações de desconforto acentuado ou preparo de exames (PSZerado): até 60 a 80 gotas a cada 6 horas.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 1, idadeMaxAnos: 12 },
      vias: ['VO'],
      apres: ['gts75'],
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
      apres: ['gts75'],
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
      trecho: 'Dose Máxima Adulto: 500 mg/dia (12 comprimidos de 40 mg, 4 cápsulas de 125 mg ou cerca de 166 gotas).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com suspeita ou confirmação de obstrução ou perfuração intestinal mecânica e em abdome agudo cirúrgico.',
      fonte: 'BULA',
      trecho: 'Contraindicado em casos de perfuração ou obstrução intestinal e abdome agudo.',
      strong: false
    },
    {
      msg: 'Hipersensibilidade conhecida à simeticona ou a qualquer componente da formulação.',
      fonte: 'HSL',
      trecho: 'Contraindicado em pacientes com hipersensibilidade à simeticona.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Alívio dos sintomas relacionados ao excesso de gases no aparelho digestivo (meteorismo, eructação, flatulência, dor e distensão abdominal, cólica do lactente) e preparo intestinal para exames diagnósticos como colonoscopia, endoscopia e ultrassonografia abdominal (HSL).',
    administracao: 'VO: Tomar após as refeições e ao deitar. Agitar vigorosamente o frasco de gotas antes de pingar. Gotas podem ser pingadas na boca ou misturadas com mamadeira, leite, água ou suco.',
    cuidados: 'Fármaco fisiologicamente inerte: age localmente por mecanismo físico alterando a tensão superficial das bolhas de ar gástricas e intestinais, coalescendo-as. Não é absorvido sistemicamente pelo trato digestivo e é eliminado intacto nas fezes. Perfil de segurança extremamente amplo em gestantes, nutrizes e neonatos.',
    ajuste: 'Insuficiência renal e hepática: não necessita de ajuste de dose, devido à ausência de absorção sistêmica e metabolismo orgânico.'
  }
};

export default simeticona;
