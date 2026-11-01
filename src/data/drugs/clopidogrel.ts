import { Farmaco } from '../../types';

export const clopidogrel: Farmaco = {
  id: 'clopidogrel',
  nome: 'Bissulfato de Clopidogrel',
  categoria: 'Cardiovascular e Antiagregantes',
  busca: 'clopidogrel plavix 75mg antiagregante iam sca stent avci angioplastia',
  classe: 'Antiagregante Plaquetário (Inibidor do Receptor P2Y12)',
  dosePratica: 'Prevenção / Manutenção: 75 mg VO 1x/dia. Ataque no IAM / SCA: 300 mg VO (4 comprimidos) ou 600 mg VO se cateterismo / angioplastia imediata (< 24h). Idosos > 75 anos com fibrinólise: omitir dose de ataque e usar 75 mg.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'evento coronariano agudo ou stent recente',
  acessoFonte: 'RENAME 2024 (Componente Especializado / Básico): Clopidogrel 75 mg comprimido.',
  apresentacoes: [
    {
      id: 'cp75',
      forma: 'cp',
      nome: 'Comprimido revestido 75 mg',
      comercial: 'Plavix®, Iscover®, Genérico',
      conc: '75mg',
      rotulo: 'Bissulfato de Clopidogrel 75 mg comprimido',
      mg: 75,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar por via oral uma vez ao dia com água, independentemente das refeições.',
      obs: 'Antiagregante de escolha para dupla antiagregação plaquetária (DAPT) associado ao AAS.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 75,
      max: 600,
      padrao: 75,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: 'Manutenção: 75 mg VO 1x/dia. Ataque em SCA: 300 a 600 mg VO dose única inicial.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 600,
      fonte: 'HSL',
      trecho: 'Dose máxima de ataque: até 600 mg VO dose única.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em hemorragia patológica ativa (úlcera péptica ativa ou hemorragia intracraniana) e insuficiência hepática severa.',
      fonte: 'HSL',
      trecho: 'Sangramento ativo patológico.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Síndromes coronarianas agudas (IAM com e sem supra, angina instável) e prevenção secundária pós-stent coronariano.',
    administracao: 'Tomar uma vez ao dia com água, com ou sem alimentos. Não partir.',
    cuidados: 'Preferir associação com pantoprazol ao invés de omeprazol para evitar interação via CYP2C19.',
    ajuste: 'Não requer ajuste em insuficiência renal leve a moderada.'
  }
};

export default clopidogrel;
