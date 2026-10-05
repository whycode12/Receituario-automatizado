import { Farmaco } from '../../types';

export const racecadotrila: Farmaco = {
  id: 'racecadotrila',
  nome: 'Racecadotrila',
  categoria: 'Gastrintestinal e Antieméticos',
  busca: 'racecadotrila tiorfan tiotril antissecretor diarreia aguda gastroenterite enjoo',
  classe: 'Antidiarreico Antissecretor Puro (Inibidor da Encefalinase Intestinal)',
  dosePratica: 'Adultos: 100 mg VO (1 cápsula) no início dos sintomas, seguido de 100 mg de 8/8h antes das refeições até cessar a diarreia (máx. 400 mg/dia por até 7 dias). Pediatria (≥ 3 meses — envelopes/sachês): 1,5 mg/kg/dose VO de 8/8h misturado em água, alimentos ou mamadeira até cessar a diarreia (máx. 7 dias).',
  fontes: { HSL: '07/03/2023', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'diarreia aguda ou fezes líquidas',
  acessoFonte: 'Medicamento comercializado sob o nome de referência Tiorfan e Tiorfan Pediátrico / genéricos em farmácias privadas e serviços de saúde.',
  apresentacoes: [
    {
      id: 'cap100',
      forma: 'cap',
      nome: 'Cápsula 100 mg',
      comercial: 'Tiorfan / Genérico',
      conc: '100mg',
      rotulo: 'Racecadotrila 100mg cápsula',
      mg: 100,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Engolir a cápsula inteira com um copo de água, preferencialmente antes das principais refeições. Iniciar com 1 cápsula imediatamente e continuar a cada 8 horas até a recuperação (quando houver 2 evacuações normais formadas ou ausência de evacuações por 12 horas). Não exceder 7 dias de tratamento.',
      obs: 'Antissecretor intestinal: reduz a hipersecreção de água e eletrólitos induzida por toxinas bacterianas/vírus SEM diminuir o tempo de trânsito intestinal e sem causar íleo paralítico.'
    },
    {
      id: 'env30',
      forma: 'sachet',
      nome: 'Sachê / Granulado para suspensão oral 30 mg',
      comercial: 'Tiorfan Pediátrico 30mg',
      conc: '30mg',
      rotulo: 'Racecadotrila 30mg granulado envelope',
      mg: 30,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Adicionar os grânulos ao alimento, mamadeira ou copo com água ou soro de reidratação oral, misturar bem e administrar imediatamente. Crianças de 13 a 27 kg: 1 sachê de 30 mg de 8/8h; > 27 kg: 2 sachês de 30 mg (60 mg) de 8/8h.',
      obs: 'Apresentação pediátrica infantil para crianças acima de 13 kg de peso corporal.'
    },
    {
      id: 'env10',
      forma: 'sachet',
      nome: 'Sachê / Granulado para suspensão oral 10 mg',
      comercial: 'Tiorfan Lactentes 10mg',
      conc: '10mg',
      rotulo: 'Racecadotrila 10mg granulado envelope',
      mg: 10,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Misturar o granulado na mamadeira, água, chá ou alimento semissólido (papinha) e ofertar imediatamente à criança. Lactentes e crianças de 3 meses a 9 kg: 1 sachê de 10 mg de 8/8h; de 9 a 13 kg: 2 sachês de 10 mg (20 mg) de 8/8h.',
      obs: 'Apresentação indicada para lactentes de 3 meses até cerca de 13 kg.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 15 }, { pesoMin: 40 }] },
      vias: ['VO'],
      apres: ['cap100'],
      tipo: 'mg',
      min: 100,
      max: 100,
      padrao: 100,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 7,
      fonte: 'HSL',
      trecho: 'Adultos: 100mg VO de 8/8h antes das refeições (1 cápsula inicial e após 1 cápsula 3 vezes/dia) por até 7 dias.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 3, idadeMaxAnos: 14 },
      vias: ['VO'],
      apres: ['env10', 'env30'],
      tipo: 'mg_kg_dose',
      min: 1.5,
      max: 1.5,
      padrao: 1.5,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 7,
      fonte: 'PSZERADO',
      trecho: 'Pediatria (a partir de 3 meses): 1,5 mg/kg/dose, VO, 3 vezes ao dia (a cada 8 horas) associado a sais de reidratação oral (PSZerado / Bula Tiorfan).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 400,
      fonte: 'HSL',
      trecho: 'Dose máxima Adulto: 400 mg/dia (4 cápsulas) por no máximo 7 dias consecutivos.'
    },
    {
      pub: 'ped',
      tipo: 'mg_kg_dia',
      valor: 6.0,
      fonte: 'BULA',
      trecho: 'Dose máxima pediátrica: cerca de 6 mg/kg/dia (ou dose máxima diária equivalente à de adulto).'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 3 },
      msg: 'CONTRAINDICADO em lactentes menores de 3 meses de idade (segurança e eficácia não estabelecidas nessa faixa etária).',
      fonte: 'BULA',
      trecho: 'Não administrar em crianças com menos de 3 meses de idade.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com diarreia invasiva associada à febre alta e presença de sangue ou pus visível nas fezes (disenteria bacteriana aguda por Shigella, Campylobacter ou Salmonella invasiva), ou diarreia induzida por antibióticos de amplo espectro (suspeita de C. difficile). Nestes casos, instituir antibioticoterapia específica.',
      fonte: 'BULA',
      trecho: 'Não deve ser administrado se houver sangue ou pus nas fezes e febre.',
      strong: false
    },
    {
      msg: 'Contraindicado em insuficiência renal grave ou insuficiência hepática grave devido à falta de dados clínicos robustos.',
      fonte: 'BULA',
      trecho: 'Contraindicado em insuficiência renal ou hepática grave.',
      strong: false
    },
    {
      msg: 'Hipersensibilidade conhecida à racecadotrila ou a qualquer um dos componentes da fórmula (alerta para presença de sacarose nos sachês infantis — atenção em crianças diabéticas ou com intolerância à frutose).',
      fonte: 'BULA',
      trecho: 'Contraindicado em hipersensibilidade à racecadotrila e intolerância à sacarose/frutose.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Tratamento sintomático complementar da diarreia aguda em adultos, crianças e lactentes (≥ 3 meses), sempre associado à reidratação oral e medidas dietéticas (HSL / PSZerado).',
    administracao: 'VO: Administrar preferencialmente antes das refeições principais. Sachês: misturar em água, alimentos semissólidos ou mamadeiras. Suspender o tratamento assim que as fezes voltarem à consistência normal (formadas) ou após 12 horas sem evacuações. O tratamento não deve ultrapassar 7 dias.',
    cuidados: 'Vantagem sobre a loperamida: a racecadotrila inibe a encefalinase periférica na mucosa entérica, bloqueando a secreção de água e eletrólitos estimulada por toxinas sem paralisar o peristaltismo nem causar estase bacteriana ou megacólon tóxico (PSZerado).',
    ajuste: 'Insuficiência renal e hepática moderada/grave: não é recomendado seu uso devido à ausência de estudos farmacocinéticos suficientes.'
  }
};

export default racecadotrila;
