import { Farmaco, Apresentacao, Paciente, ItemReceita, ProtocoloConduta, OpcaoPrescricao, ProtocoloItemFarmaco, ModoUso } from '../types';
import { DRUGS, getDrugById } from '../data';
import { calcularPrescricao } from './calculator';
import { generatePrescriptionCards } from './prescriptionGenerator';
import { PROTOCOLOS } from '../data/protocolos';

export interface ItemPrescricaoVisual {
  id: string;
  itemConfig: ProtocoloItemFarmaco;
  drug: Farmaco;
  apres: Apresentacao;
  cardReceita: ItemReceita | null;
  cardInterno: ItemReceita | null;
  textoExibicao: string;
}

export function encontrarApresentacao(drug: Farmaco, item: ProtocoloItemFarmaco): Apresentacao {
  if (item.apresentacaoId) {
    const encontrada = drug.apresentacoes.find(a => a.id === item.apresentacaoId);
    if (encontrada) return encontrada;
  }

  // Filtrar por via compatível
  const compativeisVia = drug.apresentacoes.filter(a => a.vias.includes(item.via));
  const pool = compativeisVia.length > 0 ? compativeisVia : drug.apresentacoes;

  // Filtrar por forma compatível se informada
  if (item.forma) {
    const porForma = pool.filter(a => a.forma === item.forma);
    if (porForma.length > 0) return porForma[0];
  }

  // Filtrar por dose próxima se houver mg
  if (item.unidade === 'mg') {
    const exataMg = pool.find(a => a.mg === item.dose);
    if (exataMg) return exataMg;
  }

  return pool[0] || drug.apresentacoes[0];
}

export function processarItemProtocolo(
  item: ProtocoloItemFarmaco,
  paciente: Paciente,
  idx: number
): ItemPrescricaoVisual | null {
  const drug = getDrugById(item.farmacoId);
  if (!drug) return null;

  const apres = encontrarApresentacao(drug, item);
  if (!apres) return null;

  const rawModo = item.modo || (item as any).tipoUso || 'continuo';
  const modo: ModoUso = (rawModo === 'se_necessario' ? 'sn' : rawModo) as ModoUso;
  let n = item.freq || ((item as any).intervalo ? Math.round(24 / (item as any).intervalo) : 1) || 1;
  if (!n || isNaN(n)) n = 1;
  const dias = item.dias || 7;
  const usoContinuo = Boolean(item.usoContinuo);
  const condText = item.condicao || drug.snPadrao || 'se necessário';

  const doseCalc = item.unidade === 'g' ? item.dose * 1000 : item.dose;
  const unidCalc = item.unidade === 'g' ? 'mg' : item.unidade;

  const calcResult = calcularPrescricao(
    drug,
    apres,
    paciente,
    item.via,
    modo,
    n,
    doseCalc,
    unidCalc,
    'SF 0,9%',
    null,
    false,
    null
  );

  const cards = generatePrescriptionCards({
    drug,
    apres,
    calcResult,
    paciente,
    via: item.via,
    modo,
    n,
    condText,
    dias,
    usoContinuo,
    frascoMl: apres.frascoMl || null,
    evDil: 'SF 0,9%'
  });

  const cardReceita = cards.find(c => c.sub === 'Receita Médica') || cards[0] || null;
  const cardInterno = cards.find(c => c.sub === 'Prescrição Interna') || null;

  let texto = cardReceita ? cardReceita.texto : (cardInterno ? cardInterno.texto : '');

  // Se tiver orientação clínica extra específica do protocolo (ex: lavagem nasal, diluição especial)
  const extra = item.orientacaoExtra || (item as any).observacaoUso;
  if (extra) {
    texto += `\n   Obs: ${extra}`;
  }

  return {
    id: item.id || `${item.farmacoId}_${idx}`,
    itemConfig: item,
    drug,
    apres,
    cardReceita,
    cardInterno,
    textoExibicao: texto
  };
}

export function processarOpcaoProtocolo(
  opcao: OpcaoPrescricao,
  paciente: Paciente
): ItemPrescricaoVisual[] {
  const result: ItemPrescricaoVisual[] = [];
  opcao.itens.forEach((it, idx) => {
    const visual = processarItemProtocolo(it, paciente, idx);
    if (visual) {
      result.push(visual);
    }
  });
  return result;
}

export function obterTodosProtocolos(): ProtocoloConduta[] {
  return PROTOCOLOS;
}

export function buscarProtocolos(termo: string, categoria?: string): ProtocoloConduta[] {
  const q = termo.trim().toLowerCase();
  return PROTOCOLOS.filter(p => {
    if (categoria && categoria !== 'Todas' && p.categoria !== categoria) {
      return false;
    }
    if (!q) return true;
    return (
      p.titulo.toLowerCase().includes(q) ||
      (p.subcategoria && p.subcategoria.toLowerCase().includes(q)) ||
      (p.descricao && p.descricao.toLowerCase().includes(q))
    );
  });
}
