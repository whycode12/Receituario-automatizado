import { Farmaco } from '../../types';

export const pantoprazol: Farmaco = {
  id: 'pantoprazol',
  nome: 'Pantoprazol Sódico',
  categoria: 'Gastroenterologia',
  busca: 'pantoprazol pantocal pantozol ibp inibidor da bomba de protons gastrite ulcera refluxo esofagite hemorragia digestiva dispepsia h pylori',
  classe: 'Inibidor da Bomba de Prótons (IBP gástrico que bloqueia a enzima H+/K+ ATPase nas células parietais do estômago)',
  dosePratica: 'Adulto: VO: 40 mg uma vez ao dia em jejum (pela manhã) por 4 a 8 semanas (DRGE, esofagite de refluxo, úlcera péptica); manutenção/profilaxia de lesão por AINEs: 20 a 40 mg/dia; erradicação de H. pylori: 40 mg 12/12h por 14 dias (associado a antibióticos). EV: 40 mg 1x/dia (ou 40-80 mg 12/12h na profilaxia/tratamento de sangramento agudo por estresse/HDA; bolus direto lento em no mínimo 2 min ou infusão em 15 min). Pediatria (≥ 5 anos): Peso 15 a 39 kg: 20 mg VO 1x/dia; Peso ≥ 40 kg: 40 mg VO 1x/dia por até 8 semanas. Comprimidos gastrorresistentes: NÃO partir, mastigar ou triturar.',
  fontes: { HSL: '05/03/2025', EINA: '2026', EINP: '2026', BULA: '04/10/2026' },
  snPadrao: 'epigastralgia ou pirose',
  acessoFonte: 'RENAME 2024: Pó para solução injetável 40 mg consta no Componente Hospitalar do SUS (nas UBS da Atenção Primária o IBP padrão do CBAF é o omeprazol 20 mg). Comprimidos 20 mg e 40 mg disponíveis no mercado farmacêutico e padronizações hospitalares. Farmácia Popular: Não consta no elenco comercial.',
  apresentacoes: [
    {
      id: 'cp40',
      forma: 'cp',
      nome: 'Comprimido Gastrorresistente 40 mg',
      comercial: 'Pantozol / PantoCal / Genérico',
      conc: '40mg',
      rotulo: 'Pantoprazol 40mg comprimido gastrorresistente',
      mg: 40,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Comprimido revestido gastrorresistente. Ingerir inteiro com água pela manhã em jejum (cerca de 30 min antes do café da manhã). NÃO mastigar, partir ou triturar (HSL / Bula).'
    },
    {
      id: 'cp20',
      forma: 'cp',
      nome: 'Comprimido Gastrorresistente 20 mg',
      comercial: 'Pantozol / Genérico',
      conc: '20mg',
      rotulo: 'Pantoprazol 20mg comprimido gastrorresistente',
      mg: 20,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      obs: 'Indicado para manutenção/prevenção de recidivas de esofagite, sintomas leves de refluxo e pediatria (15-39 kg). Tomar em jejum pela manhã.'
    },
    {
      id: 'fap40',
      forma: 'fap',
      nome: 'Frasco-Ampola 40 mg pó liofilizado injetável',
      comercial: 'Pantozol / PantoCal injetável / Genérico',
      conc: '40mg',
      rotulo: 'Pantoprazol sódico 40mg pó para solução injetável',
      mg: 40,
      reconstMl: 10,
      reconstDil: 'SF 0,9% (10 mL)',
      vias: ['EV'],
      disp: '1 frasco-ampola',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME (Componente Hospitalar). Reconstituir com 10 mL de SF 0,9%. Pode ser administrado EV direto lentamente em no mínimo 2 minutos ou diluído em 100 mL de SF 0,9% ou SG 5% infundido em 15 minutos (Einstein Adultos / Pediátrico / HSL).'
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%', 'SG 10%'],
    concMax: 0.8, // 0,4 a 0,8 mg/mL na infusão; ou 4 mg/mL direto lento reconstituído (Einstein)
    volPadraoAdulto: [[40, 100], [80, 100]],
    volOpcoes: [10, 100],
    tempo: {
      adulto: { min: 2, padrao: 15, max: 15, txt: 'EV Direto: no mínimo 2 minutos. Infusão intermitente: 15 minutos (Einstein Adultos / HSL)' },
      ped: { min: 2, padrao: 15, max: 15, txt: 'EV Direto: no mínimo 2 minutos. Infusão intermitente: 15 minutos (Einstein Pediátrico / HSL)' }
    },
    fonteTxt: 'Reconstituição EV: 10 mL de SF 0,9% (resultando em 4 mg/mL). EV Direto lento: infundir em no mínimo 2 minutos. Infusão intravenosa: diluir os 10 mL reconstituídos em 100 mL de SF 0,9% ou SG 5% e infundir em 15 minutos (Einstein Adultos / Pediátrico / HSL). Estabilidade: 12h em temperatura ambiente ou 24h sob refrigeração. Não misturar com outras soluções na mesma via venosa.'
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
      trecho: 'HSL: Adulto Oral: 40mg 1 vez ao dia por 4 a 8 semanas para úlcera péptica e esofagite de refluxo; 20 a 40mg/dia para manutenção; erradicação de H. pylori: 40mg a cada 12 horas por 7 a 14 dias associado a antimicrobianos.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['EV'],
      apres: ['fap40'],
      tipo: 'mg',
      min: 40,
      max: 80,
      padrao: 40,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 14,
      fonte: 'HSL',
      trecho: 'HSL: Adulto EV: 40mg a 80mg 1 a 2 vezes ao dia (Úlcera péptica/profilaxia de sangramento por estresse: 40mg 1x/dia; HDA aguda: ataque de 80mg EV seguido de infusão contínua de 8mg/h por 72h).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 5, idadeMaxAnos: 11, pesoMin: 15, pesoMax: 40 },
      vias: ['VO'],
      apres: ['cp20'],
      tipo: 'mg',
      min: 20,
      max: 20,
      padrao: 20,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 56,
      fonte: 'HSL',
      trecho: 'HSL: Pediatria (≥ 5 anos) VO com peso 15kg a 39kg: 20mg uma vez ao dia pela manhã, por até 8 semanas.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 5, idadeMaxAnos: 11, pesoMin: 40 },
      vias: ['VO'],
      apres: ['cp40'],
      tipo: 'mg',
      min: 40,
      max: 40,
      padrao: 40,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 56,
      fonte: 'HSL',
      trecho: 'HSL: Pediatria (≥ 5 anos) VO com peso ≥ 40kg: 40mg uma vez ao dia pela manhã, por até 8 semanas.'
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
      trecho: 'HSL: Síndrome de Zollinger-Ellison: até 240 mg/dia fracionados em 2 tomadas; dose máxima padrão em patologias comuns: 80 mg/dia.'
    },
    {
      pub: 'ped',
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 40,
      fonte: 'HSL',
      trecho: 'HSL: Dose máxima diária em pediatria: 40 mg/dia.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 4 },
      vias: ['VO', 'EV'],
      msg: 'Segurança e eficácia clínica não foram estabelecidas para crianças com menos de 5 anos de idade (ou peso inferior a 15 kg).',
      fonte: 'HSL',
      trecho: 'HSL: Crianças menores que 5 anos: dose e segurança não estabelecidas.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada ao pantoprazol, benzimidazóis substituídos ou a qualquer componente da fórmula.',
      fonte: 'BULA',
      trecho: 'Bula Pantozol: Hipersensibilidade aos benzimidazóis substituídos.'
    }
  ],
  notas: {
    indicacao: 'Tratamento de úlcera péptica gástrica e duodenal; esofagite de refluxo moderada a grave e doença do refluxo gastroesofágico (DRGE); erradicação do Helicobacter pylori (em associação com dois antibióticos); síndrome de Zollinger-Ellison e estados de hipersecreção gástrica patológica; profilaxia de úlceras gastroduodenais induzidas por anti-inflamatórios não esteroidais (AINEs) em pacientes de risco; e profilaxia/tratamento de hemorragia digestiva alta e úlcera de estresse em pacientes críticos hospitalizados (HSL / Bula).',
    administracao: 'VO: Administrar pela manhã, aproximadamente 30 a 60 minutos antes do desjejum matinal com água. Os comprimidos possuem revestimento entérico gastrorresistente para proteger a molécula instável da degradação ácida estomacal; NUNCA partir, mastigar ou triturar. Em caso de administração via sonda nasoentérica, avaliar a substituição por omeprazol magnésico (Losec Mups) ou formulação líquida apropriada (HSL). EV Direto: administrar lentamente em no mínimo 2 minutos. EV Infusão: diluir em 100 mL de SF 0,9% ou SG 5% e infundir em 15 minutos (Einstein Adultos / HSL).',
    cuidados: 'MENOR INTERAÇÃO COM CLOPIDOGREL (CYP2C19): Dentre os IBPs, o pantoprazol apresenta menor afinidade de inibição pela enzima CYP2C19 do que o omeprazol, sendo o IBP de escolha clínica preferencial em pacientes em uso concomitante de clopidogrel para prevenção de eventos trombóticos coronarianos. EFEITOS ADVERSOS DO USO CRÔNICO (> 1 ano): hipomagnesemia severa, deficiência de vitamina B12 (por hipocloridria), aumento de risco de fraturas ósseas por osteoporose, nefrite intersticial aguda e aumento do risco de colite pseudomembranosa por Clostridioides difficile. MASCARAMENTO DE NEOPLASIA: O alívio sintomático pode retardar o diagnóstico de neoplasia gástrica em pacientes com sinais de alarme (perda ponderal, disfagia, anemia, hematêmese).',
    ajuste: 'Insuficiência renal: Menos de 5% é excretado inalterado; não requer redução de dose na insuficiência renal ou hemodiálise (HSL). Insuficiência hepática: Em insuficiência hepática grave (Child-Pugh C), a dose não deve exceder 20 mg/dia VO ou 40 mg EV em dias alternados; monitorar enzimas hepáticas e suspender o uso se elevação acentuada (HSL).'
  }
};

export default pantoprazol;
