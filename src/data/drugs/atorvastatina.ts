import { Farmaco } from '../../types';

export const atorvastatina: Farmaco = {
  id: 'atorvastatina',
  nome: 'Atorvastatina Cálcica',
  categoria: 'Cardiovascular e Antiagregantes',
  busca: 'atorvastatina lipitor citalor estatina alta potencia ldl colesterol dislipidemia iam infarto sca avci vascular 20mg 40mg 80mg',
  classe: 'Inibidor da HMG-CoA Redutase (Estatina de Alta Potência)',
  dosePratica: 'Pós-IAM / Síndrome Coronariana Aguda: 80 mg VO 1x ao dia (dose de alta intensidade recomendada pelas diretrizes internacionais). Dislipidemia / Prevenção secundária estável: 20 a 40 mg VO 1x ao dia a qualquer hora do dia (com ou sem alimentos).',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  modoPadrao: 'continuo',
  diasPadrao: 30,
  usoContinuoPadrao: true,
  snPadrao: 'controle do colesterol e prevenção cardiovascular',
  acessoFonte: 'RENAME 2024 (Componente Especializado / Básico): Atorvastatina 10 mg, 20 mg, 40 mg e 80 mg comprimido.',
  apresentacoes: [
    {
      id: 'cp20',
      forma: 'cp',
      nome: 'Comprimido revestido 20 mg',
      comercial: 'Lipitor®, Citalor®, Ateroma®',
      conc: '20mg',
      rotulo: 'Atorvastatina Cálcica 20 mg comprimido',
      mg: 20,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar 1 comprimido por via oral uma vez ao dia com água, preferencialmente à noite.',
      obs: 'Dose padrão para controle do colesterol (PuxaFicha).'
    },
    {
      id: 'cp40',
      forma: 'cp',
      nome: 'Comprimido revestido 40 mg',
      comercial: 'Lipitor®, Citalor®',
      conc: '40mg',
      rotulo: 'Atorvastatina Cálcica 40 mg comprimido',
      mg: 40,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar 1 comprimido por via oral uma vez ao dia.',
      obs: 'Prevenção cardiovascular de alto risco.'
    },
    {
      id: 'cp80',
      forma: 'cp',
      nome: 'Comprimido revestido 80 mg (Alta potência)',
      comercial: 'Lipitor®, Citalor®',
      conc: '80mg',
      rotulo: 'Atorvastatina Cálcica 80 mg comprimido',
      mg: 80,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar 1 comprimido por via oral uma vez ao dia com água, preferencialmente à noite ou no mesmo horário todos os dias.',
      obs: 'Terapia de alta intensidade recomendada no IAM e SCA.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 10,
      max: 80,
      padrao: 20,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: 'Pós-IAM / SCA: 80 mg VO 1x/dia. Dislipidemia / Prevenção: 20 a 40 mg VO 1x/dia.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 80,
      fonte: 'HSL',
      trecho: 'Dose máxima adulto: 80 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em doença hepática ativa, elevação inexplicada de transaminases (> 3x LSN), gestação e lactação.',
      fonte: 'HSL',
      trecho: 'Hepatopatia ativa ou gestação.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Redução de risco cardiovascular em pacientes com SCA/IAM, prevenção de AVE e tratamento de hipercolesterolemia primária.',
    administracao: 'Tomar uma vez ao dia a qualquer hora do dia com água.',
    cuidados: 'Orientar o paciente a comunicar dores musculares inexplicadas ou urina escura.',
    ajuste: 'Não necessita de ajuste para disfunção renal.'
  }
};

export default atorvastatina;
