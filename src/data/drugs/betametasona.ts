import { Farmaco } from '../../types';

export const betametasona: Farmaco = {
  id: 'betametasona',
  nome: 'Valerato / Dipropionato / Fosfato Dissódico de Betametasona',
  categoria: 'Corticoides Sistêmicos',
  busca: 'betametasona betnovate diprospan celestone dipropionato valerato corticoide creme pomada maturacao pulmonar fetal',
  classe: 'Anti-inflamatório Hormonal, Corticosteroide de Alta Potência (Uso Tópico e Parenteral)',
  dosePratica: 'Tópico (Dermatoses / Eczemas / Psoríase): Aplicar uma camada fina do creme ou pomada 0,1% sobre a área afetada 1 a 2x/dia (máx. 4 semanas). Injetável sistêmico (Diprospan / Betatrinta): 1 a 2 mL IM profunda em dose única (repetir a cada 2-4 semanas se necessário). Maturação pulmonar fetal (24 a 34 semanas): 12 mg IM a cada 24 horas (total de 2 doses).',
  fontes: { HSL: '07/03/2023', BULA: '04/10/2026' },
  snPadrao: 'lesões inflamatórias na pele, dermatite ou crise alérgica grave',
  acessoFonte: 'RENAME 2024: Betametasona creme e pomada 1 mg/g (0,1%) no Componente Básico da Atenção Primária. Apresentações injetáveis de depósito e solução (Diprospan, Celestone) de ampla prescrição no mercado e hospitais.',
  apresentacoes: [
    {
      id: 'creme01',
      forma: 'creme',
      nome: 'Creme dermatológico 1 mg/g (0,1%) - bisnaga 30 g',
      comercial: 'Betnovate creme / Genérico',
      conc: '1mg/g',
      rotulo: 'Valerato de betametasona 1mg/g creme (0,1%)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 bisnaga',
      acesso: { rename: true, fp: false },
      instrucao: 'Higienizar e secar suavemente a pele afetada. Aplicar uma fina camada sobre as lesões massageando levemente até completa absorção. Lavar bem as mãos após o uso. Não cobrir com curativos oclusivos a menos que haja orientação médica expressa.',
      obs: 'RENAME (Componente Básico). Valerato de betametasona 1 mg/g (0,1%). Indicado para lesões úmidas ou exsudativas.'
    },
    {
      id: 'pom01',
      forma: 'pomada',
      nome: 'Pomada dermatológica 1 mg/g (0,1%) - bisnaga 30 g',
      comercial: 'Betnovate pomada / Genérico',
      conc: '1mg/g',
      rotulo: 'Valerato de betametasona 1mg/g pomada (0,1%)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 bisnaga',
      acesso: { rename: true, fp: false },
      instrucao: 'Higienizar a área e aplicar uma camada fina sobre a lesão, massageando suavemente até completa absorção. Lavar as mãos após a aplicação. Ideal para lesões secas, liquenificadas ou descamativas.',
      obs: 'RENAME (Componente Básico). Base lipofílica emoliente.'
    },
    {
      id: 'amp_depot',
      forma: 'amp',
      nome: 'Suspensão injetável IM de depósito (5 mg + 2 mg / mL — ampola 1 mL)',
      comercial: 'Diprospan / Betatrinta / Genérico',
      conc: '7mg/mL',
      rotulo: 'Dipropionato de betametasona 5mg + Fosfato dissódico 2mg/mL ampola 1mL',
      mg: 7, // 5 mg de liberação lenta (dipropionato) + 2 mg de ação rápida (fosfato dissódico) = 7 mg
      mgml: 7,
      volml: 1,
      vias: ['IM'],
      disp: '1 ampola',
      acesso: { rename: false, fp: false },
      obs: 'Ação dupla: início rápido (fosfato) e efeito sustentado por semanas (dipropionato). Administração EXCLUSIVA por via intramuscular profunda na região glútea ou intra-articular. NUNCA administrar por via endovenosa.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['TOPICA'],
      apres: ['creme01', 'pom01'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 28,
      fonte: 'HSL',
      trecho: 'Adultos e crianças > 1 ano: Aplicar suavemente uma fina camada sobre a área afetada 1 a 2 vezes ao dia por até 4 semanas, reduzindo a frequência conforme melhora clínica.'
    },
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 40 }] },
      vias: ['IM'],
      apres: ['amp_depot'],
      tipo: 'mg',
      min: 7, // 1 ampola de 1 mL (7 mg de betametasona total)
      max: 14, // até 2 ampolas em crises graves
      padrao: 7,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 1,
      fonte: 'BULA',
      trecho: 'Adultos: 1 a 2 mL (1 a 2 ampolas de depósito) via intramuscular profunda na região glútea em dose única (repetir a cada 2 a 4 semanas conforme resposta clínica).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 1, idadeMaxAnos: 11 },
      vias: ['TOPICA'],
      apres: ['creme01', 'pom01'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 14,
      fonte: 'BULA',
      trecho: 'Pediatria (≥ 1 ano): Aplicar em pequena quantidade sobre a área lesionada 1 vez ao dia por no máximo 2 semanas. Evitar curativos oclusivos e uso em grandes extensões corporais.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['IM'],
      tipo: 'mg_dia',
      valor: 14,
      fonte: 'BULA',
      trecho: 'Dose máxima IM Adulto: 14 mg (2 ampolas de 1 mL) por dose.'
    }
  ],
  contra: [
    {
      vias: ['TOPICA'],
      msg: 'Uso tópico contraindicado em infecções cutâneas virais (herpes simples, herpes-zóster, varicela), infecções fúngicas ou bacterianas não tratadas, acne vulgar, rosácea e dermatite perioral.',
      fonte: 'BULA',
      trecho: 'Contraindicado em lesões de pele causadas por vírus, fungos ou bactérias na ausência de terapia anti-infecciosa adequada.',
      strong: false
    },
    {
      vias: ['IM'],
      msg: 'A formulação de depósito (Diprospan / dipropionato + fosfato) é ESTRITAMENTE CONTRAINDICADA POR VIA ENDOVENOSA (risco iminente de embolia microcristalina e colapso circulatório). Não aplicar por via subcutânea.',
      fonte: 'BULA',
      trecho: 'Diprospan não deve ser usado por via intravenosa ou subcutânea.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com infecções fúngicas sistêmicas ou hipersensibilidade documentada à betametasona ou a outros corticosteroides.',
      fonte: 'BULA',
      trecho: 'Contraindicado em hipersensibilidade aos corticosteroides e micoses sistêmicas.',
      strong: false
    },
    {
      vias: ['TOPICA'],
      msg: 'Uso em face, axilas, virilhas ou sob fraldas: evitar uso prolongado nessas áreas devido à absorção percutânea acentuada, risco de atrofia cutânea acelerada, estrias indeléveis, telangiectasias e supressão do eixo hipotálamo-hipófise-adrenal.',
      fonte: 'HSL',
      trecho: 'Evitar aplicação contínua em face e dobras cutâneas.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Uso tópico: alívio das manifestações inflamatórias e pruriginosas de dermatoses responsivas a corticosteroides (eczema, dermatite atópica, líquen plano, psoríase). Uso injetável IM: afecções reumáticas, alérgicas (asma, rinite grave, anafilaxia subaguda) e maturação pulmonar fetal na iminência de parto pré-termo (HSL / Bulas).',
    administracao: 'Tópico: espalhar camada fina e massagear suavemente. IM: aplicar profundamente no glúteo com técnica em Z para evitar atrofia e hipopigmentação tecidual subcutânea.',
    cuidados: 'Corticosteroide de alta potência com mínima atividade mineralocorticoide (não causa retenção significativa de sódio/água), mas com potente supressão anti-inflamatória e imunológica.',
    ajuste: 'Insuficiência renal e hepática: não é necessário ajuste posológico específico para uso tópico ou doses parenterais pontuais.'
  }
};

export default betametasona;
