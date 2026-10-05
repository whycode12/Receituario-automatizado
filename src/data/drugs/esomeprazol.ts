import { Farmaco } from '../../types';

export const esomeprazol: Farmaco = {
  id: 'esomeprazol',
  nome: 'Esomeprazol Magnésico / Sódico',
  categoria: 'Gastroenterologia',
  busca: 'esomeprazol nexium esomex ibp inibidor da bomba de protons gastrite esofagite refluxo drge azia pirose h pylori hemorragia digestiva',
  classe: 'Inibidor da Bomba de Prótons de 2ª geração (S-isômero purificado do omeprazol com maior biodisponibilidade e supressão ácida gástrica mais previsível e potente)',
  dosePratica: 'Adultos e adolescentes (≥ 12 anos): VO: 20 a 40 mg uma vez ao dia em jejum pela manhã por 4 a 8 semanas (esofagite erosiva de refluxo, DRGE e gastrite); erradicação de H. pylori: 20 mg 12/12h por 7 a 14 dias associado a amoxicilina e claritromicina. EV: 20 a 40 mg 1x/dia (ou 80 mg em bolus em 30 min seguido de 8 mg/h por 72h em HDA com prevenção de ressangramento pós-endoscópico). Pediatria: VO: 1 a 11 anos: < 20 kg = 10 mg 1x/dia; ≥ 20 kg = 10 a 20 mg 1x/dia por até 8 semanas. Comprimidos revestidos de liberação retardada (tecnologia MUPS): podem ser dispersos em meio copo de água sem gás para pacientes com disfagia ou sonda nasoentérica (ingerir os microgrânulos intactos sem mastigar ou esmagar).',
  fontes: { HSL: '05/03/2025', EINA: '2026', EINP: '2026', BULA: '04/10/2026' },
  snPadrao: 'epigastralgia ou pirose',
  acessoFonte: 'RENAME 2024: Não consta na Relação Nacional de Medicamentos Essenciais do SUS (o SUS fornece omeprazol 20 mg no CBAF). Disponível amplamente no mercado farmacêutico comercial e padronizado em hospitais privados/conveniados. Farmácia Popular: Não consta no elenco comercial.',
  apresentacoes: [
    {
      id: 'cp40',
      forma: 'cp',
      nome: 'Comprimido Revestido 40 mg (microgrânulos gastrorresistentes)',
      comercial: 'Nexium / Esomex / Genérico',
      conc: '40mg',
      rotulo: 'Esomeprazol magnésico 40mg comprimido revestido',
      mg: 40,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Ingerir inteiro pela manhã com água. Pacientes com disfagia ou via sonda (SNE/GTM): dispersar o comprimido em meio copo de água sem gás (50 mL), mexer suavemente até os microgrânulos se soltarem e beber em até 30 min (NÃO mastigar nem esmagar os microgrânulos) (HSL / Bula).'
    },
    {
      id: 'cp20',
      forma: 'cp',
      nome: 'Comprimido Revestido 20 mg',
      comercial: 'Nexium / Esomex / Genérico',
      conc: '20mg',
      rotulo: 'Esomeprazol magnésico 20mg comprimido revestido',
      mg: 20,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Indicado para manutenção de esofagite cicatrizada, alívio sintomático de DRGE e pediatria (1 a 11 anos). Dispersível em água sem gás se necessário.'
    },
    {
      id: 'fap40',
      forma: 'fap',
      nome: 'Frasco-Ampola 40 mg pó liofilizado injetável (sódico)',
      comercial: 'Nexium IV / Genérico',
      conc: '40mg',
      rotulo: 'Esomeprazol sódico 40mg pó para solução injetável',
      mg: 40,
      reconstMl: 5,
      reconstDil: 'SF 0,9% (5 mL)',
      vias: ['EV'],
      disp: '1 frasco-ampola',
      acesso: { rename: false, fp: false },
      obs: 'Reconstituir com 5 mL de SF 0,9%. EV Direto lento: administrar em no mínimo 3 minutos. Infusão: diluir em até 100 mL de SF 0,9% e infundir em 10 a 30 minutos (Einstein Adultos / Pediátrico / HSL).'
    }
  ],
  ev: {
    diluentes: ['SF 0,9%'],
    concMax: 0.8, // 0,4 a 0,8 mg/mL na infusão; ou 8 mg/mL no bolus direto lento (Einstein)
    volPadraoAdulto: [[40, 100], [80, 100]],
    volOpcoes: [5, 100],
    tempo: {
      adulto: { min: 3, padrao: 15, max: 30, txt: 'EV Direto: no mínimo 3 minutos. Infusão: 10 a 30 minutos (Einstein Adultos / HSL)' },
      ped: { min: 10, padrao: 20, max: 30, txt: 'Infusão intravenosa: 10 a 30 minutos (Einstein Pediátrico / HSL)' }
    },
    fonteTxt: 'Reconstituição EV: 5 mL de SF 0,9% (resultando em 8 mg/mL). EV Direto lento: administrar em período mínimo de 3 minutos. Infusão intermitente: diluir os 5 mL da solução reconstituída em 100 mL de SF 0,9% e infundir em 10 a 30 minutos (Einstein Adultos / Pediátrico / HSL). Não utilizar outros diluentes além de cloreto de sódio 0,9%. Estabilidade: 12h em temperatura ambiente.'
  },
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      apres: ['cp40', 'cp20'],
      tipo: 'mg',
      min: 20,
      max: 40,
      padrao: 40,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 56,
      fonte: 'HSL',
      trecho: 'HSL: Adulto Oral: 20 a 40mg 1 vez ao dia por 4 a 8 semanas para esofagite de refluxo e DRGE (manutenção: 20mg/dia; erradicação de H. pylori: 20mg 12/12h por 7 a 14 dias associado a amoxicilina e claritromicina).'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['EV'],
      apres: ['fap40'],
      tipo: 'mg',
      min: 20,
      max: 40,
      padrao: 40,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL: Adulto EV: 20 a 40mg 1 vez ao dia (HDA pós-endoscopia: 80mg em 30 min seguido de infusão contínua de 8mg/h por 72h).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 1, idadeMaxAnos: 11, pesoMax: 20 },
      vias: ['VO'],
      apres: ['cp20'],
      tipo: 'mg',
      min: 10,
      max: 10,
      padrao: 10,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 56,
      fonte: 'HSL',
      trecho: 'HSL / Bula Nexium: Pediatria (1 a 11 anos) VO < 20kg: 10mg uma vez ao dia pela manhã por até 8 semanas.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 1, idadeMaxAnos: 11, pesoMin: 20 },
      vias: ['VO'],
      apres: ['cp20'],
      tipo: 'mg',
      min: 10,
      max: 20,
      padrao: 10,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 56,
      fonte: 'HSL',
      trecho: 'HSL / Bula: Pediatria (1 a 11 anos) VO ≥ 20kg: 10 a 20mg uma vez ao dia pela manhã por até 8 semanas.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO', 'EV'],
      tipo: 'mg_dia',
      valor: 240,
      fonte: 'HSL',
      trecho: 'HSL: Síndrome de Zollinger-Ellison: até 240 mg/dia fracionados em 2 tomadas; dose máxima padrão habitual: 80 mg/dia.'
    },
    {
      pub: 'ped',
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 40,
      fonte: 'HSL',
      trecho: 'HSL / Bula: Dose máxima diária em pediatria: 20 mg/dia para menores de 12 anos e 40 mg/dia para maiores de 12 anos.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 11 },
      vias: ['VO', 'EV'],
      msg: 'Uso não recomendado e segurança não estabelecida para lactentes com menos de 1 ano de vida (ou peso inferior a 3 kg).',
      fonte: 'BULA',
      trecho: 'Bula Nexium: O esomeprazol não deve ser utilizado em crianças menores de 1 ano de idade.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade conhecida ao esomeprazol, outros benzimidazóis substituídos ou a qualquer excipiente da fórmula.',
      fonte: 'BULA',
      trecho: 'Bula Nexium: Hipersensibilidade ao esomeprazol ou outros benzimidazóis.'
    }
  ],
  notas: {
    indicacao: 'Tratamento de doenças ácido-pépticas gástricas e esofágicas: doença do refluxo gastroesofágico (DRGE) sintomática e tratamento/cicatrização da esofagite de refluxo erosiva; manutenção de esofagite cicatrizada para prevenção de recidivas; alívio dos sintomas dispépticos de pirose e regurgitação ácida; erradicação de Helicobacter pylori associado a antibióticos adequados (claritromicina e amoxicilina); cicatrização e prevenção de úlceras gástricas induzidas por AINEs em pacientes de risco; e prevenção de ressangramento pós-hemostasia endoscópica de úlceras pépticas (HSL / Bula).',
    administracao: 'VO: Tomar preferencialmente pela manhã em jejum (30 minutos antes do café da manhã) com um copo de água. Os comprimidos são compostos por microgrânulos gastrorresistentes (tecnologia MUPS) e não devem ser partidos ou mastigados. Pacientes com disfagia ou sondas enterais: dissolver o comprimido em meio copo de água sem gás (50 mL) mexendo suavemente até que ele se desintegre e ingerir a suspensão em até 30 minutos (se restarem grânulos aderidos ao copo, enxaguar com mais água e beber; NÃO triturar os grânulos). EV Direto: administrar lentamente em no mínimo 3 minutos. EV Infusão: diluir em 100 mL de SF 0,9% e infundir em 10 a 30 minutos (Einstein Adultos / HSL).',
    cuidados: 'INTERAÇÃO COM CLOPIDOGREL: O esomeprazol inibe a enzima CYP2C19 (embora com menor variabilidade metabólica que o omeprazol racêmico) e pode reduzir a ativação do pró-fármaco clopidogrel para seu metabólito antiplaquetário ativo; preferir pantoprazol quando houver necessidade imperiosa de associação com clopidogrel. INTERAÇÕES POR ALTERAÇÃO DE PH GÁSTRICO: Reduz a absorção de cetoconazol, itraconazol, atazanavir e sais de ferro; eleva os níveis séricos de digoxina. RISCOS DO USO CRÔNICO: hipomagnesemia, deficiência de vitamina B12, aumento de risco de fraturas osteoporóticas e diarreia infecciosa por Clostridioides difficile.',
    ajuste: 'Insuficiência renal: Não requer ajuste posológico na insuficiência renal em qualquer grau ou hemodiálise (menos de 1% é excretado na forma inalterada). Insuficiência hepática: Em insuficiência hepática grave (Child-Pugh C), a dose não deve exceder 20 mg/dia VO ou EV (HSL).'
  }
};

export default esomeprazol;
