import { Farmaco } from '../../types';

export const rivaroxabana: Farmaco = {
  id: 'rivaroxabana',
  nome: 'Rivaroxabana',
  categoria: 'Anticoagulantes e Antitrombóticos',
  busca: 'rivaroxabana xarelto doac noac anticoagulante trombose tvp tep fa fibrilacao atrial embolia pulmonar',
  classe: 'Anticoagulante Oral de Ação Direta (Inibidor Direto do Fator Xa)',
  dosePratica: 'Tratamento de TVP / TEP agudo: 15 mg VO de 12/12h com alimentos durante os primeiros 21 dias; a partir do 22º dia, passar para 20 mg VO 1x/dia com o jantar (manter por pelo menos 3 a 6 meses). Prevenção de AVC na Fibrilação Atrial não-valvular: 20 mg VO 1x/dia com o jantar (se ClCr 15 a 49 mL/min: reduzir para 15 mg 1x/dia). Prevenção de TEV pós-artroplastia: 10 mg VO 1x/dia por 14 dias (joelho) ou 35 dias (quadril).',
  fontes: { HSL: '05/05/2025', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'tratamento ou profilaxia de eventos tromboembólicos',
  acessoFonte: 'RENAME 2024: Não consta na RENAME básica. Disponível no Componente Especializado (CEAF) para indicações regulamentadas do SUS e ampla comercialização em farmácias privadas.',
  apresentacoes: [
    {
      id: 'cp20',
      forma: 'cp',
      nome: 'Comprimido revestido 20 mg',
      comercial: 'Xarelto / Genérico',
      conc: '20mg',
      rotulo: 'Rivaroxabana 20mg',
      mg: 20,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar 1 comprimido uma vez ao dia, OBRIGATORIAMENTE junto com alimentos (com o almoço ou jantar), pois a presença de comida é fundamental para garantir a absorção completa do medicamento (biodisponibilidade de quase 100%).',
      obs: 'Dose padrão para prevenção de AVC em fibrilação atrial e fase de manutenção de TVP/TEP (a partir do 22º dia).'
    },
    {
      id: 'cp15',
      forma: 'cp',
      nome: 'Comprimido revestido 15 mg',
      comercial: 'Xarelto / Genérico',
      conc: '15mg',
      rotulo: 'Rivaroxabana 15mg',
      mg: 15,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar com alimentos (refeição principal). Na fase aguda de TVP/TEP, tomar 1 comprimido de 12/12 horas durante as primeiras 3 semanas (21 dias). Em pacientes com fibrilação atrial e insuficiência renal (ClCr 15-49 mL/min), tomar 1 comprimido 1 vez ao dia com o jantar.',
      obs: 'Dose de ataque inicial na trombose aguda (15 mg 12/12h por 21 dias) e dose ajustada para disfunção renal em FA.'
    },
    {
      id: 'cp10',
      forma: 'cp',
      nome: 'Comprimido revestido 10 mg',
      comercial: 'Xarelto / Genérico',
      conc: '10mg',
      rotulo: 'Rivaroxabana 10mg',
      mg: 10,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Pode ser tomado com ou sem alimentos, sempre no mesmo horário do dia.',
      obs: 'Dose indicada para profilaxia de tromboembolismo venoso após grandes cirurgias ortopédicas de quadril ou joelho.'
    },
    {
      id: 'cp2_5',
      forma: 'cp',
      nome: 'Comprimido revestido 2,5 mg',
      comercial: 'Xarelto',
      conc: '2,5mg',
      rotulo: 'Rivaroxabana 2,5mg',
      mg: 2.5,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Utilizado em regime vascular profilático (2,5 mg 2x/dia) associado a aspirina em doença arterial coronariana crônica.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 18 }, { pesoMin: 50 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 10,
      max: 20,
      padrao: 20,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      fonte: 'HSL / PSZERADO',
      trecho: 'Adulto — Prevenção de AVC em FA: 20 mg 1 vez/dia (15 mg se ClCr 15 a 49 mL/min). Tratamento de TVP e TEP: 15 mg 2 vezes/dia durante 3 semanas, seguido por 20 mg 1 vez/dia. Profilaxia pós-artroplastia: 10 mg 1 vez/dia.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 30,
      fonte: 'HSL / BULA',
      trecho: 'Dose máxima diária: 30 mg/dia (fase de ataque de 15 mg a cada 12 horas nos primeiros 21 dias de TVP/TEP).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com sangramento ativo clinicamente relevante e em lesões ou condições com risco significativo de sangramento maior (úlcera gastrintestinal recente, neoplasia maligna de alto risco, traumatismo cranioencefálico recente, aneurismas vasculares).',
      fonte: 'HSL / BULA',
      trecho: 'Contraindicado na presença de sangramento ativo ou alto risco hemorrágico.'
    },
    {
      msg: 'Contraindicado em hepatopatia associada a coagulopatia e risco de sangramento clinicamente relevante, incluindo cirróticos Child-Pugh B e C.',
      fonte: 'HSL',
      trecho: 'Contraindicado em insuficiência hepática moderada ou grave (Child-Pugh B e C).'
    },
    {
      msg: 'Contraindicado em insuficiência renal terminal com ClCr < 15 mL/min ou em diálise (dados clínicos insuficientes e alto risco de acúmulo).',
      fonte: 'HSL / PSZERADO',
      trecho: 'Uso não recomendado em pacientes com clearance de creatinina < 15 mL/min.'
    },
    {
      msg: 'Contraindicado na gestação e lactação (atravessa a barreira placentária e é excretado no leite materno).',
      fonte: 'HSL',
      trecho: 'Contraindicado durante a gravidez e a amamentação.'
    }
  ],
  notas: {
    indicacao: 'Prevenção de acidente vascular cerebral (AVC) e embolia sistêmica em pacientes adultos com fibrilação atrial não-valvular; Tratamento de trombose venosa profunda (TVP) e embolia pulmonar (EP) agudas e prevenção de recorrência; Prevenção de tromboembolismo venoso (TEV) em adultos submetidos a cirurgia de artroplastia eletiva de joelho ou quadril.',
    administracao: 'Via oral: Os comprimidos de 15 mg e 20 mg DEVEM ser administrados obrigatoriamente junto às refeições (aumenta a absorção e biodisponibilidade para ~100%). Os comprimidos de 10 mg e 2,5 mg podem ser tomados com ou sem alimentos. Para pacientes com dificuldade de engolir, os comprimidos podem ser triturados e misturados em água ou compota de maçã imediatamente antes do uso.',
    cuidados: 'Monitorar sinais clínicos de sangramento oculto ou manifesto (hematúria, melena, epistaxe profusa, hematomas espontâneos). A rivaroxabana não requer monitoramento rotineiro de RNI/coagulograma. Em caso de necessidade de reversão urgente por sangramento grave, utilizar complexo protrombínico ou o antídoto específico (andexanet alfa).',
    ajuste: 'Insuficiência renal: ClCr 15 a 49 mL/min: reduzir dose de FA para 15 mg 1x/dia. ClCr < 15 mL/min: não recomendado. Insuficiência hepática: Contraindicado em Child-Pugh B e C.',
    dosePratica: 'Fibrilação atrial: 20 mg VO 1x/dia com o jantar. TVP/TEP agudo: 15 mg VO de 12/12h por 21 dias, depois 20 mg 1x/dia com o jantar.'
  }
};

export default rivaroxabana;
