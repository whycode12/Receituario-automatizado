import { Farmaco } from '../../types';

export const piroxicam: Farmaco = {
  id: 'piroxicam',
  nome: 'Piroxicam',
  categoria: 'Analgésicos e Anti-inflamatórios',
  busca: 'piroxicam feldene feldene sl inflamatene dor inflamacao dismenorreia reumatologia aine 20mg',
  classe: 'Anti-inflamatório Não Esteroidal (AINE Oxicam)',
  dosePratica: 'Dismenorreia / Dor aguda musculoesquelética: 20 a 40 mg VO em dose única inicial ou 20 mg 1x/dia (ou 10 mg 12/12h) por 3 a 5 dias. Tomar com alimento.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'dor ou inflamação',
  acessoFonte: 'RENAME 2024 / Farmácia Básica: Cápsula / Comprimido 20 mg disponível na rede pública.',
  apresentacoes: [
    {
      id: 'cp20',
      forma: 'cp',
      nome: 'Cápsula / Comprimido 20 mg',
      comercial: 'Feldene®, Inflamene®, Genérico',
      conc: '20mg',
      rotulo: 'Piroxicam 20 mg',
      mg: 20,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar com água, preferencialmente após as refeições, para minimizar irritação gástrica.',
      obs: 'AINE oxicam com meia-vida prolongada (cerca de 50 horas), permitindo tomada única diária.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 10,
      max: 40,
      padrao: 20,
      dosesDia: [1, 2],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: 'Dismenorreia / Condições dolorosas agudas: 20 a 40 mg/dia em dose única ou dividida em 2 tomadas por 3 a 5 dias.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 40,
      fonte: 'HSL',
      trecho: 'Dose máxima: 40 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com úlcera péptica ativa, sangramento gastrintestinal, insuficiência cardíaca grave, disfunção renal severa ou histórico de alergia a AINEs/AAS.',
      fonte: 'HSL',
      trecho: 'Úlcera péptica ou sangramento ativo.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Tratamento de dismenorreia primária, artrite, bursite, lombalgia e dores osteoarticulares agudas.',
    administracao: 'Administrar via oral junto com água após uma refeição.',
    cuidados: 'Utilizar a menor dose eficaz e pelo menor tempo necessário devido ao risco cardiovascular e gastrointestinal dos oxicans.',
    ajuste: 'Evitar em insuficiência renal (ClCr < 30 mL/min) ou hepática grave.'
  }
};

export default piroxicam;
