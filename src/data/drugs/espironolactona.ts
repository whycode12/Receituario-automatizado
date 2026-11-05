import { Farmaco } from '../../types';

export const espironolactona: Farmaco = {
  id: 'espironolactona',
  nome: 'Espironolactona',
  categoria: 'Cardiovascular e Diuréticos',
  busca: 'espironolactona aldactone diuretico poupador potassio antagonista aldosterona ascite cirrose insuficiencia cardiaca icfer hiperaldosteronismo pressao alta',
  classe: 'Diurético Poupador de Potássio Antagonista Competitivo dos Receptores de Aldosterona',
  dosePratica: 'Ascite na Cirrose Hepática: Iniciar com 100 mg VO 1x/dia pela manhã (associada a Furosemida 40 mg); titular a cada 3 a 5 dias se resposta insuficiente, até o máximo de 400 mg/dia. Insuficiência Cardíaca com Fração de Ejeção Reduzida (ICFER): 25 mg a 50 mg VO 1x/dia. Hipertensão Resistente: 25 mg a 50 mg VO 1x/dia.',
  fontes: { HSL: '10/05/2023', PSZERADO: '2025', BULA: '04/10/2026' },
  modoPadrao: 'continuo',
  diasPadrao: 30,
  usoContinuoPadrao: true,
  snPadrao: 'controle de edema, ascite ou insuficiência cardíaca',
  acessoFonte: 'RENAME 2024 (Componente Básico): comprimidos de 25 mg e 100 mg. Farmácia Popular: não consta.',
  apresentacoes: [
    {
      id: 'cp25',
      forma: 'cp',
      nome: 'Comprimido 25 mg',
      comercial: 'Aldactone / Genérico',
      conc: '25mg',
      rotulo: 'Espironolactona 25mg comprimido',
      mg: 25,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 30 comprimidos',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar 1 comprimido com água pela manhã, todos os dias.',
      obs: 'Dose padrão para adultos na insuficiência cardíaca (ICFER) e hipertensão resistente (PuxaFicha).'
    },
    {
      id: 'cp100',
      forma: 'cp',
      nome: 'Comprimido 100 mg',
      comercial: 'Aldactone / Genérico',
      conc: '100mg',
      rotulo: 'Espironolactona 100mg comprimido',
      mg: 100,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 caixa com 30 comprimidos',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar pela manhã com um copo de água, junto com uma refeição leve para melhorar a absorção.',
      obs: 'Dose padrão para início do esquema de ascite na cirrose (relação 100:40 com furosemida).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 25,
      max: 200,
      padrao: 25,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      fonte: 'HSL',
      trecho: 'Adultos: 25 a 100 mg VO 1x ao dia (pode ser titulado até 400 mg/dia em ascite grave).'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 1 },
      vias: ['VO'],
      tipo: 'mg_kg_dia',
      min: 1,
      max: 3,
      padrao: 1.5,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      fonte: 'HSL',
      trecho: 'Pediatria: 1 a 3 mg/kg/dia VO em dose única ou dividida a cada 12 horas.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 400,
      fonte: 'HSL',
      trecho: 'Dose máxima diária de espironolactona em ascite cirrótica refratária: 400 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em hipercalemia significativa (K+ sérico > 5,0 a 5,5 mEq/L), insuficiência renal aguda, anúria ou insuficiência renal crônica com taxa de filtração glomerular < 30 mL/min/1,73m² (risco de arritmias cardíacas letais por hipercalemia grave).',
      fonte: 'BULA',
      trecho: 'Risco iminente de parada cardíaca em assistolia por bloqueio da excreção renal de potássio.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Tratamento de ascite e edema secundários à cirrose hepática, insuficiência cardíaca crônica com fração de ejeção reduzida (redução de mortalidade), hipertensão resistente e hiperaldosteronismo primário.',
    administracao: 'Administrar preferencialmente em dose única pela manhã junto com a primeira refeição do dia.',
    cuidados: 'Monitorar rigorosamente os níveis de potássio sérico (K+) e creatinina antes do início e após cada aumento de dose. Suspender se K+ > 5,5 mEq/L. Efeito colateral comum em homens a longo prazo: ginecomastia dolorosa.',
    ajuste: 'Evitar se ClCr < 30 mL/min devido ao risco de hipercalemia grave.'
  }
};
export default espironolactona;
