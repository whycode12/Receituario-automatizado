import { Farmaco } from '../../types';

export const ureia: Farmaco = {
  id: 'ureia',
  nome: 'Ureia Creme Dermatológico Queratolítico',
  categoria: 'Dermatologia e Curativos',
  busca: 'ureia nutraplus ureadin hidratação onicomicose queratolitico paquioniquia micose unha creme 10% 20% 40%',
  classe: 'Queratolítico, Umectante e Hidratante Tópico Cutâneo-Ungueal',
  dosePratica: 'Onicomicose com Espessamento / Paquioníquia: Aplicar Ureia Creme 40% sob e sobre a lâmina ungueal à noite ao deitar com o auxílio de cotonete ou algodão, cobrindo com micropore. Lavar bem pela manhã com água e sabão. Associar antifúngico tópico (Oxiconazol / Terbinafina) pela manhã. Hiperqueratose e ressecamento severo da pele: Ureia 10% a 20% 1 a 2 vezes ao dia.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'espessamento ungueal ou ressecamento cutâneo severo',
  acessoFonte: 'Disponível em farmácias magistrais de manipulação e formulações comerciais (Nutraplus, Ureadin, genéricos).',
  apresentacoes: [
    {
      id: 'creme40',
      forma: 'creme',
      nome: 'Creme dermatológico queratolítico 40% (pote / frasco 30 g)',
      comercial: 'Ureia 40% manipulada',
      conc: '40% (400 mg/g)',
      rotulo: 'Ureia manipulada em creme 40% (pote 30g)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 frasco ou pote (30 g)',
      acesso: { rename: false, fp: false },
      instrucao: 'Aplicar uma camada sob e sobre a unha afetada à noite antes de dormir, com o auxílio de um cotonete ou algodão. Cobrir a unha com fita microporosa se necessário. Lavar bem a região pela manhã com água e sabão. Não aplicar sobre a pele sadia ao redor para evitar irritação.',
      obs: 'Prescrição do Guia UPA 2026 para afinamento da unha (paquioníquia) prévio ou concomitante ao antifúngico.'
    },
    {
      id: 'creme10',
      forma: 'creme',
      nome: 'Creme hidratante 10% (frasco / bisnaga 100 mL)',
      comercial: 'Nutraplus®, Ureadin 10%',
      conc: '10% (100 mg/g)',
      rotulo: 'Ureia creme 10% hidratante',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 frasco (100 mL)',
      acesso: { rename: false, fp: false },
      instrucao: 'Aplicar sobre a pele limpa e seca 1 a 2 vezes ao dia massageando suavemente.',
      obs: 'Indicado para xerose cutânea e ictiose.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      vias: ['TOPICA'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 2],
      intervaloFixo: 24,
      fonte: 'BULA',
      trecho: 'Aplicar na área afetada 1 a 2 vezes ao dia.'
    }
  ],
  notas: {
    indicacao: 'Tratamento de paquioníquia (espessamento da unha) em onicomicoses, hiperqueratose palmo-plantar e ictiose.',
    administracao: 'Uso tópico externo exclusivo.',
    cuidados: 'Evitar contato com olhos, mucosas e feridas abertas. Pode causar ardência transitória.',
    ajuste: 'Não se aplica.'
  }
};

export default ureia;
