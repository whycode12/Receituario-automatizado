import { Farmaco } from '../../types';

export const adrenalina: Farmaco = {
  id: 'adrenalina',
  nome: 'Adrenalina / Epinefrina',
  categoria: 'Emergência e Vasoativos',
  busca: 'adrenalina epinefrina choque anafilatico anafilaxia pcr parada cardiorrespiratoria broncoespasmo grave laringite estridor 1mg',
  classe: 'Agonista Alfa e Beta Adrenérgico / Simpaticomimético de Ação Rápida',
  dosePratica: 'Choque Anafilático: 0,5 mg (0,5 mL da ampola 1:1.000) IM na face anterolateral da coxa (vasto lateral) IMEDIATAMENTE. Pode repetir a cada 5 a 15 min até 2x se refratário. Infusão EV contínua (se refratário): diluir 1 ampola (1 mg) em 100 mL SF 0,9% em BIC iniciando a 0,1 mcg/kg/min. PCR: 1 mg EV/IO a cada 3 a 5 min em bolus.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'reação anafilática ou parada cardiorrespiratória',
  modoPadrao: 'agora',
  diasPadrao: 0,
  usoContinuoPadrao: false,
  acessoFonte: 'RENAME 2024 / Componente Hospitalar e Urgência: Solução injetável 1 mg/mL ampola disponível em todas as salas de emergência, UPAs e SAMU.',
  apresentacoes: [
    {
      id: 'amp1mg',
      forma: 'amp',
      nome: 'Ampola 1 mg/mL (1 mL - 1:1.000)',
      comercial: 'Epinefrina®, Adren®, Genérico',
      conc: '1mg/mL',
      rotulo: 'Adrenalina (Epinefrina) 1 mg/mL',
      mg: 1,
      volml: 1,
      vias: ['IM', 'SC', 'EV'],
      disp: '1 ampola',
      acesso: { rename: true, fp: false },
      instrucao: 'Choque Anafilático: Injetar 0,5 mL (0,5 mg = meia ampola) por via INTRAMUSCULAR profunda na face lateral da coxa (músculo vasto lateral). Não aplicar no glúteo nem subcutâneo devido à absorção muito mais lenta.',
      obs: 'Medicamento de primeira linha SALVADOR DE VIDAS na anafilaxia. Jamais retardar sua aplicação.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['IM'],
      tipo: 'mg',
      min: 0.3,
      max: 0.5,
      padrao: 0.5,
      dosesDia: [1, 3],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: 'Anafilaxia adulto: 0,3 a 0,5 mg IM no vasto lateral, podendo repetir a cada 5-15 min conforme resposta clínica.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV'],
      tipo: 'mg',
      min: 0.5,
      max: 1,
      padrao: 1,
      dosesDia: [1, 6],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: 'PCR adulto: 1 mg EV a cada 3-5 minutos.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'dose_max',
      valor: 1,
      fonte: 'HSL',
      trecho: 'Dose máxima por bolus em PCR: 1 mg.'
    }
  ],
  contra: [
    {
      msg: 'Não há contraindicações absolutas no tratamento de anafilaxia com risco de morte ou PCR.',
      fonte: 'PSZERADO',
      trecho: 'Sem contraindicação absoluta na anafilaxia.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Tratamento imediato de choque anafilático, parada cardiorrespiratória (PCR), broncoespasmo grave refratário e estridor laringotraqueal.',
    administracao: 'Na anafilaxia: IM estrito na coxa lateral (absorção 10x mais rápida que SC/deltoide). Na infusão contínua venosa: usar bomba de infusão em acesso central ou venoso calibroso com monitorização contínua de ritmo e PA.',
    cuidados: 'Monitorar taquicardia, arritmias ventriculares, hipertensão grave e isquemia miocárdica em coronariopatas.',
    ajuste: 'Não necessita de ajuste em insuficiência renal.'
  }
};

export default adrenalina;
