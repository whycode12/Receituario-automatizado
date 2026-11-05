import { Farmaco } from '../../types';

export const colchicina: Farmaco = {
  id: 'colchicina',
  nome: 'Colchicina',
  categoria: 'Sistema Musculoesquelético',
  busca: 'colchicina colchis gota artrite gotosa crise de gota acido urico podagra tofos 0,5mg vo',
  classe: 'Agente Antigotoso / Inibidor da Polimerização de Tubulina e Quimiotaxia de Neutrófilos',
  dosePratica: 'Crise Aguda de Artrite Gotosa: Tomar 1 mg (2 comprimidos de 0,5 mg) VO imediatamente; após 1 hora, tomar mais 0,5 mg (1 comprimido) — dose total de 1,5 mg no 1º dia. A partir do 2º dia, manter 0,5 mg VO de 12 em 12 horas até a remissão completa da dor (máx 3 a 5 dias). Profilaxia de crises ao iniciar alopurinol: 0,5 mg VO 1x/dia contínuo.',
  fontes: { PSZERADO: '2025', HSL: '2024', ACR: '2024', BULA: '2024' },
  modoPadrao: 'sn',
  diasPadrao: 3,
  usoContinuoPadrao: false,
  snPadrao: 'crise de gota ou dor articular inflamatória',
  acessoFonte: 'RENAME 2024 (Componente Básico): Colchicina 0,5 mg comprimido.',
  apresentacoes: [
    {
      id: 'cp05',
      forma: 'cp',
      nome: 'Comprimido 0,5 mg',
      comercial: 'Colchis®, Genérico',
      conc: '0,5mg',
      rotulo: 'Colchicina 0,5 mg comprimido',
      mg: 0.5,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 20 ou 30 comprimidos',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar por via oral com água. Na crise aguda: tomar 2 comprimidos (1 mg) de início e mais 1 comprimido (0,5 mg) 1 hora depois.',
      obs: 'Interromper o uso ou reduzir a dose imediatamente se surgirem diarreia, náuseas ou cólicas abdominais.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 18 },
      vias: ['VO'],
      tipo: 'mg',
      min: 0.5,
      max: 1.5,
      padrao: 0.5,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 3,
      fonte: 'ACR',
      trecho: 'Ataque na gota aguda: 1 mg VO agora + 0,5 mg após 1h. Manutenção: 0,5 mg de 12/12h.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 2,
      fonte: 'HSL',
      trecho: 'Dose máxima adulto no primeiro dia: até 1,8 a 2 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em insuficiência renal grave (ClCr < 30 mL/min) ou insuficiência hepática severa em uso concomitante de inibidores potentes do CYP3A4 ou da glicoproteína-P (claritromicina, cetoconazol, ciclosporina).',
      fonte: 'HSL',
      trecho: 'Disfunção renal/hepática grave com inibidores enzimáticos.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Tratamento das crises agudas de artrite gotosa (gota) e profilaxia de recorrências durante a introdução de redutores de uricemia.',
    administracao: 'Tomar com água. Iniciar o mais precocemente possível nas primeiras 12 a 24 horas da crise.',
    cuidados: 'Toxicidade gastrointestinal (diarreia aquosa profusa, vômitos) é o sinal inicial mais comum de superdose. NUNCA INICIAR OU SUSPENDER ALOPURINOL DURANTE UMA CRISE AGUDA DE GOTA!',
    ajuste: 'Se ClCr 30 a 50 mL/min, não exceder 0,5 mg/dia; se ClCr < 30 mL/min, usar 0,5 mg a cada 2 a 3 dias.'
  }
};

export default colchicina;
