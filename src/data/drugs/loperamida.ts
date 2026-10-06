import { Farmaco } from '../../types';

export const loperamida: Farmaco = {
  id: 'loperamida',
  nome: 'Cloridrato de Loperamida',
  categoria: 'Gastrintestinal e Antidiarreicos',
  busca: 'loperamida imosec cloridrato antidiarreico diarreia aguda cronica evacuacao fezes liquidas',
  classe: 'Antidiarreico Agonista de Receptores Opioides Periféricos µ Intestinais',
  dosePratica: 'Diarreia Aguda Inespecífica no Adulto: Tomar 4 mg (2 comprimidos de 2 mg) VO como dose de ataque inicial; em seguida, tomar 2 mg (1 comprimido de 2 mg) após cada nova evacuação líquida desfeita. Dose máxima diária: 16 mg/dia (8 comprimidos). Interromper o tratamento se as fezes se tornarem formadas ou se decorrerem 12 horas sem evacuações. NUNCA utilizar em disenteria (fezes com sangue/muco e febre) ou suspeita de colite por C. difficile.',
  fontes: { HSL: '10/06/2016', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'após cada evacuação líquida não formada (se diarreia)',
  acessoFonte: 'Disponível em comprimidos de 2 mg comercialmente e em farmácias comunitárias (Imosec e genéricos). RENAME 2024: Não consta na relação nacional.',
  apresentacoes: [
    {
      id: 'cp2mg',
      forma: 'cp',
      nome: 'Comprimido 2 mg',
      comercial: 'Imosec / Genérico',
      conc: '2mg',
      rotulo: 'Cloridrato de loperamida 2mg comprimido',
      mg: 2,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 12 comprimidos',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar os comprimidos com água em quantidade suficiente. Não mastigar. A loperamida não substitui a reidratação oral (ingerir líquidos e soro caseiro/SRO ao longo do dia para reposição hidroeletrolítica). Interromper o uso assim que as fezes se tornarem sólidas ou pastosas, ou se não evacuar por mais de 12 horas. Se a diarreia persistir por mais de 48 horas, procurar atendimento médico.',
      obs: 'Antidiarreico sintomático de ação rápida sobre o peristaltismo. Em casos agudos, tomar 2 comprimidos de início e 1 comprimido após cada evacuação líquida.'
    }
  ],
  regras: [
    // 1. Diarreia Aguda Adulto - Ataque e Tomadas Subsequentes
    {
      pub: 'adulto',
      vias: ['VO'],
      apres: ['cp2mg'],
      tipo: 'mg',
      min: 2,
      max: 4,
      padrao: 4,
      dosesDia: [1, 6],
      dosesPadrao: 4,
      intervaloFixo: 4,
      duracaoMaxDias: 2,
      fonte: 'HSL / PSZERADO',
      trecho: 'Adultos (diarreia aguda): Dose inicial de ataque de 4 mg (2 comprimidos), seguidos de 2 mg (1 comprimido) após cada subsequente evacuação desfeita, respeitando o teto de 16 mg/dia (HSL / PSZerado / Bula).'
    },
    // 2. Diarreia Crônica Adulto
    {
      pub: 'adulto',
      vias: ['VO'],
      apres: ['cp2mg'],
      tipo: 'mg',
      min: 2,
      max: 12,
      padrao: 4,
      dosesDia: [1, 3],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'HSL',
      trecho: 'Adultos (diarreia crônica): Inicial de 4 mg/dia VO, ajustada entre 2 mg a 12 mg/dia fracionados em 1 a 3 tomadas até obtenção de 1 a 2 evacuações sólidas ao dia (HSL).'
    },
    // 3. Pediatria > 27 kg (≥ 9 anos) - Sob prescrição médica
    {
      pub: 'ped',
      se: { pesoMin: 27, idadeMinAnos: 9 },
      vias: ['VO'],
      apres: ['cp2mg'],
      tipo: 'mg',
      min: 2,
      max: 2,
      padrao: 2,
      dosesDia: [1, 3],
      dosesPadrao: 2,
      intervaloFixo: 8,
      duracaoMaxDias: 2,
      fonte: 'HSL',
      trecho: 'Pediatria (crianças de 9 a 11 anos pesando 27 a 43 kg): 2 mg VO de início, seguido de 1 a 2 mg após cada evacuação subsequente, respeitando a dose máxima de 6 mg/dia (HSL).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 16,
      fonte: 'HSL / PSZERADO',
      trecho: 'Dose máxima diária em adultos: 16 mg/dia (8 comprimidos de 2 mg).'
    },
    {
      pub: 'ped',
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 6,
      fonte: 'HSL',
      trecho: 'Dose máxima pediátrica (27 a 43 kg): 6 mg/dia (3 comprimidos de 2 mg).'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 1 },
      vias: ['VO'],
      msg: 'Contraindicado em lactentes e crianças menores de 2 anos de idade (risco grave de íleo paralítico, megacólon e depressão de SNC). Não recomendado para automedicação pediátrica em menores de 12 anos.',
      fonte: 'HSL / BULA',
      trecho: 'Contraindicado para crianças menores de 2 anos de idade.',
      strong: true
    },
    {
      msg: 'Contraindicado como terapia primária em disenteria aguda com fezes sanguinolentas/mucopurulentas e febre alta, ou em suspeita de infecção entérica bacteriana invasiva por Salmonella, Shigella ou Campylobacter.',
      fonte: 'HSL / PSZERADO / BULA',
      trecho: 'Não deve ser utilizado em diarreias infecciosas invasivas / disenteria aguda.',
      strong: true
    },
    {
      msg: 'Contraindicado em casos de colite pseudomembranosa associada a antibióticos de amplo espectro (infecção por Clostridioides difficile) ou colite ulcerativa aguda grave em crise inflamatória (alto risco de indução de megacólon tóxico).',
      fonte: 'HSL / BULA',
      trecho: 'Contraindicado em colite pseudomembranosa e retocolite ulcerativa ativa grave.',
      strong: true
    },
    {
      msg: 'Contraindicado em situações clínicas nas quais a inibição do peristaltismo intestinal deve ser evitada (constipação intestinal, distensão abdominal progressiva ou suspeita de obstrução mecânica / íleo paralítico). Descontinuar imediatamente se surgir constipação ou distensão.',
      fonte: 'HSL / BULA',
      trecho: 'Contraindicado quando o peristaltismo não deve ser inibido.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade conhecida ao cloridrato de loperamida ou a qualquer excipiente da fórmula.',
      fonte: 'HSL / BULA',
      trecho: 'Hipersensibilidade ao cloridrato de loperamida.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Tratamento sintomático da diarreia aguda inespecífica sem caráter infeccioso/invasivo, diarreias crônicas de etiologia espoliativa (doença inflamatória intestinal, síndrome do intestino irritável com diarreia), e para redução do volume e consistência de efluentes em pacientes colostomizados ou ileostomizados (HSL / PSZerado / Guia UPA).',
    administracao: 'VO: Ingerir os comprimidos inteiros com água. Iniciar com a dose de ataque recomendada e administrar as tomadas subsequentes estritamente após evacuações líquidas desfeitas. Interromper imediatamente quando as fezes adquirirem consistência sólida ou se passarem 12 horas sem evacuação.',
    cuidados: 'HIDRATAÇÃO É PRIORITÁRIA: A loperamida atua exclusivamente na motilidade e tônus muscular intestinal; a desidratação e a espoliação de eletrólitos devem ser ativamente prevenidas ou repostas com Solução de Reidratação Oral (SRO). TOXICIDADE CARDÍACA COM SUPERDOSAGEM: Altas doses acima do recomendado (abuso ou sobredose) podem prolongar o intervalo QTc, provocar arritmias ventriculares graves (Torsades de Pointes) e parada cardíaca. TEMPO MÁXIMO: Se não houver melhora clínica na diarreia aguda em 48 horas, o medicamento deve ser suspenso e reavaliada a causa da diarreia.',
    ajuste: 'Insuficiência renal: Não é necessário ajuste de dose (HSL). Insuficiência hepática: Utilizar com cautela e sob rigoroso monitoramento clínico devido à redução do metabolismo hepático de primeira passagem pelo citocromo P450, havendo risco potencial de toxicidade central aumentada (HSL / Bula).'
  }
};

export default loperamida;
