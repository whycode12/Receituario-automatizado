import { Farmaco } from '../../types';

export const vacinaAntirrabica: Farmaco = {
  id: 'vacina-antirrabica',
  nome: 'Vacina Antirrábica Humana (Cultivo Celular)',
  categoria: 'Imunobiológicos e Vacinas',
  busca: 'vacina antirrabica raiva profilaxia pos exposicao mordida de cao cachorro gato morcego pre exposicao vera rabipur',
  classe: 'Imunização Ativa contra o Vírus da Raiva (Vírus Inativado)',
  dosePratica: 'Pós-exposição (Esquema de 4 doses do MS): 1 ampola (0,5 ou 1,0 mL) IM no músculo deltoide nos dias 0, 3, 7 e 14. NUNCA aplicar no glúteo (baixa eficácia imunogênica). Pré-exposição: 1 dose nos dias 0 e 7.',
  fontes: { MS: '2024', PSZERADO: '2025', BULA: '2024' },
  snPadrao: 'acidente com risco de transmissão do vírus da raiva',
  acessoFonte: 'Programa Nacional de Imunizações (PNI) / Ministério da Saúde: Fornecida gratuitamente nas salas de vacinação de referência e UPAs.',
  apresentacoes: [
    {
      id: 'fap_vacina_raiva',
      forma: 'fap',
      nome: 'Frasco-ampola dose única (pó liofilizado + diluente)',
      comercial: 'Vacina Antirrábica Cultivo Celular / Butantan / Sanofi / PNI',
      conc: '≥ 2,5 UI/dose',
      rotulo: 'Vacina Antirrábica de cultivo celular (dose única)',
      mg: 1,
      volml: 1,
      vias: ['IM'],
      disp: '4 frascos-ampola (esquema D0, D3, D7, D14)',
      acesso: { rename: true, fp: false },
      instrucao: 'Aplicar 1 dose por via intramuscular profunda estritamente no músculo DELTOIDE (em crianças menores de 2 anos aplicar no vasto lateral da coxa). NUNCA administrar no glúteo.',
      obs: 'Esquema padrão: 4 doses nos dias 0, 3, 7 e 14 após o acidente.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      vias: ['IM'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'MS',
      trecho: '1 dose IM no deltoide nos dias 0, 3, 7 e 14.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'dose_max',
      valor: 1,
      fonte: 'MS',
      trecho: '1 dose por aplicação.'
    }
  ],
  contra: [
    {
      msg: 'Não há contraindicação absoluta para profilaxia pós-exposição da raiva (infecção com letalidade de praticamente 100%).',
      fonte: 'MS',
      trecho: 'Sem contraindicação na pós-exposição.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Profilaxia pós-exposição contra raiva humana após mordeduras, arranhaduras ou contato com saliva de mamíferos.',
    administracao: 'IM no deltoide. Não usar o glúteo devido à absorção irregular e menor resposta de anticorpos neutralizantes.',
    cuidados: 'Orientar o paciente a comparecer rigorosamente nos dias agendados (D0, D3, D7, D14).',
    ajuste: 'Não necessita de ajuste de dose.'
  }
};

export default vacinaAntirrabica;
