import { Farmaco } from '../../types';

export const soroAntirrabico: Farmaco = {
  id: 'soro-antirrabico',
  nome: 'Soro Antirrábico Heterólogo (SAR) / Imunoglobulina Antirrábica',
  categoria: 'Imunobiológicos e Soros',
  busca: 'soro antirrabico sar imunoglobulina antirrabica ighar mordedura mordida de cao cachorro gato morcego raiva profilaxia pos exposicao',
  classe: 'Imunoterapia Passiva Específica contra o Vírus da Raiva',
  dosePratica: 'Acidentes com risco de transmissão do vírus rábico (animais silvestres, morcegos, cães/gatos raivosos ou suspeitos com lesão grave): Administrar 40 UI/kg de Soro Antirrábico Heterólogo (SAR) ou 20 UI/kg de Imunoglobulina Humana Antirrábica (IGHAR) em dose única imediata. Infiltrar a maior quantidade possível no interior e ao redor do ferimento; o restante deve ser aplicado por via intramuscular profunda em local anatômico diferente da vacina.',
  fontes: { MS: '2024', PSZERADO: '2025', BULA: '2024' },
  snPadrao: 'acidente grave com risco de transmissão do vírus da raiva',
  modoPadrao: 'agora',
  diasPadrao: 0,
  usoContinuoPadrao: false,
  acessoFonte: 'Programa Nacional de Imunizações (PNI) / Ministério da Saúde: Frascos de 5 mL (200 UI/mL) fornecidos gratuitamente em centros de referência em imunobiológicos especiais (CRIE) e prontos-socorros municipais.',
  apresentacoes: [
    {
      id: 'fap_sar_5ml',
      forma: 'fap',
      nome: 'Frasco-ampola 5 mL (200 UI/mL = 1.000 UI/frasco)',
      comercial: 'Soro Antirrábico / Instituto Butantan / PNI MS',
      conc: '200 UI/mL',
      rotulo: 'Soro Antirrábico 200 UI/mL (frasco 5 mL)',
      mg: 1000,
      volml: 5,
      vias: ['IM', 'SC'],
      disp: 'Frascos conforme cálculo de 40 UI/kg',
      acesso: { rename: true, fp: false },
      instrucao: 'Infiltrar delicadamente no leito da mordedura e bordas da ferida o maior volume possível. Caso sobre volume, aplicar por via intramuscular profunda (ex: glúteo ou vasto lateral), em sítio anatômico DISTANTE do local da vacina antirrábica.',
      obs: 'Administrar o mais precocemente possível após a exposição de risco (até o 7º dia do início da vacinação).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['IM', 'SC'],
      tipo: 'mg',
      min: 1000,
      max: 4000,
      padrao: 2000,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'MS',
      trecho: '40 UI/kg de SAR em dose única (dose média para adulto de 50-70 kg: 2.000 a 3.000 UI).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'dose_max',
      valor: 4000,
      fonte: 'MS',
      trecho: 'Dose calculada por peso estrito (40 UI/kg).'
    }
  ],
  contra: [
    {
      msg: 'Não há contraindicação absoluta na vigência de acidente com risco iminente de raiva (doença 100% letal). Em caso de reação anafilactoide prévia a soros heterólogos de cavalo, preferir a Imunoglobulina Humana Antirrábica (IGHAR 20 UI/kg) ou administrar sob pré-medicação com anti-histamínico e corticoide em ambiente hospitalar monitorizado.',
      fonte: 'MS',
      trecho: 'Sem contraindicação absoluta para pós-exposição grave.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Profilaxia pós-exposição de raiva humana em ferimentos graves (face, mãos, pés, mucosas, lesões múltiplas ou profundas) causados por cães/gatos suspeitos ou qualquer acidente com morcegos e mamíferos silvestres.',
    administracao: 'Infiltração local e o restante IM em região diferente do membro da vacina.',
    cuidados: 'Monitorar sinais de reação anafilática precoce e de doença do soro tardia (7 a 14 dias após).',
    ajuste: 'Não necessita de ajuste em insuficiência renal.'
  }
};

export default soroAntirrabico;
