import { Farmaco } from '../../types';

export const budesonidaFormoterol: Farmaco = {
  id: 'budesonida_formoterol',
  nome: 'Budesonida + Fumarato de Formoterol',
  categoria: 'Respiratório e Broncodilatadores',
  busca: 'alenia symbicort foraseq vannair budesonida formoterol corticoide laba asma gina mart smart bombinha inalador',
  classe: 'Associação Corticoide Inalatório (CI) + Broncodilatador LABA de Rápido Início de Ação (Estratégia Preferencial GINA - MART)',
  dosePratica: 'GINA 2024/2025 - Track 1 (Estratégia Preferencial em ≥ 12 anos): Etapas 1 e 2 (sintomas ocasionais ou asma leve): 1 inalação de Budesonida/Formoterol (200/6 mcg ou 100/6 mcg) se sintomas (como medicamento de alívio e prevenção); Etapas 3 a 5 (asma persistente moderada a grave): 1 a 2 inalações 12/12h (tratamento de manutenção) + 1 inalação adicional de alívio se houver falta de ar (máx. 8 a 12 inalações ao dia no regime MART). Sempre enxaguar a boca e cuspir após o uso.',
  fontes: { GINA: '2024/2025', HSL: '2024', PSZERADO: '2025', BULA: '2024' },
  snPadrao: 'falta de ar, chiado no peito ou tosse asmática (regime MART)',
  acessoFonte: 'RENAME 2024: Componente Especializado da Assistência Farmacêutica (CEAF) para pacientes com asma grave cadastrados no PCDT do Ministério da Saúde. Amplamente comercializado no mercado farmacêutico nacional.',
  apresentacoes: [
    {
      id: 'cap_inal_200_6',
      forma: 'cap',
      nome: 'Cápsula com pó inalatório 200 mcg / 6 mcg (com inalador)',
      comercial: 'Alenia 200/6 mcg / Genérico',
      conc: '200/6mcg',
      rotulo: 'Budesonida + Formoterol 200/6mcg cápsulas com inalador',
      mg: 0.2, // indexado pela dose de budesonida (200 mcg = 0,2 mg)
      frac: 1,
      vias: ['INALATORIA'],
      unidades: ['puff'],
      disp: '1 caixa com 60 cápsulas + aparelho inalador',
      acesso: { rename: true, fp: false },
      instrucao: 'ATENÇÃO: NÃO ENGOLIR A CÁPSULA. Uso estritamente inalatório oral com o aparelho inalador fornecido na caixa. Como fazer: 1. Abrir o aparelho e colocar a cápsula no compartimento. 2. Pressionar os botões laterais para perfurar a cápsula uma única vez. 3. Soltar todo o ar dos pulmões longe do aparelho. 4. Colocar o bocal na boca vedando bem com os lábios e inspirar o pó com força e profundidade (ouvindo o zumbido da cápsula girando). 5. Prender a respiração por 10 segundos. 6. Enxaguar a boca com água e cuspir após o uso (prevenção de candidíase/sapinho oral e rouquidão).',
      obs: 'Apresentação padrão ouro no Brasil. Cada cápsula contém 200 mcg de budesonida + 6 mcg de fumarato de formoterol.'
    },
    {
      id: 'cap_inal_100_6',
      forma: 'cap',
      nome: 'Cápsula com pó inalatório 100 mcg / 6 mcg (com inalador)',
      comercial: 'Alenia 100/6 mcg',
      conc: '100/6mcg',
      rotulo: 'Budesonida + Formoterol 100/6mcg cápsulas com inalador',
      mg: 0.1,
      frac: 1,
      vias: ['INALATORIA'],
      unidades: ['puff'],
      disp: '1 caixa com 60 cápsulas + inalador',
      acesso: { rename: true, fp: false },
      instrucao: 'Não engolir a cápsula. Inalar o pó através do aparelho inalador conforme orientações. Enxaguar a cavidade oral com água e cuspir após cada inalação.',
      obs: 'Dose pediátrica (≥ 6 anos) ou inicial para manutenção em asma leve a moderada.'
    },
    {
      id: 'cap_inal_400_12',
      forma: 'cap',
      nome: 'Cápsula com pó inalatório 400 mcg / 12 mcg (com inalador)',
      comercial: 'Alenia 400/12 mcg',
      conc: '400/12mcg',
      rotulo: 'Budesonida + Formoterol 400/12mcg cápsulas com inalador',
      mg: 0.4,
      frac: 1,
      vias: ['INALATORIA'],
      unidades: ['puff'],
      disp: '1 caixa com 60 cápsulas + inalador',
      acesso: { rename: true, fp: false },
      instrucao: 'Uso inalatório oral exclusivo através do dispositivo inalador. Enxaguar bem a boca e gargarejar após o uso.',
      obs: 'Indicado para asma persistente grave (etapas 4 e 5 do GINA) e DPOC com exacerbações frequentes.'
    },
    {
      id: 'turb_200_6',
      forma: 'spray',
      nome: 'Inalador Turbuhaler 200 mcg / 6 mcg (frasco 60 ou 120 doses)',
      comercial: 'Symbicort Turbuhaler 200/6 mcg',
      conc: '200/6mcg',
      rotulo: 'Budesonida + Formoterol 200/6mcg inalador Turbuhaler',
      mg: 0.2,
      frac: 1,
      vias: ['INALATORIA'],
      unidades: ['puff'],
      disp: '1 inalador (120 doses)',
      acesso: { rename: true, fp: false },
      instrucao: 'Girar a base do inalador para um lado e depois para o outro até ouvir um "clique" (dispositivo carregado). Soltar o ar dos pulmões, colocar o bocal na boca e inspirar rápida e profundamente. Segurar o ar por 10 segundos. Enxaguar a boca após a inalação.',
      obs: 'Dispositivo em pó seco multidose que dispensa o manuseio de cápsulas.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['INALATORIA'],
      tipo: 'mg',
      min: 0.1,
      max: 0.4,
      padrao: 0.2, // 1 inalação de 200/6 mcg
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'GINA / HSL',
      trecho: 'GINA Track 1 — Adultos e adolescentes ≥ 12 anos: Manutenção de 1 a 2 inalações de 200/6 mcg a cada 12 horas + 1 inalação de alívio se necessário (regime MART). Em asma leve (etapas 1-2): 1 inalação de 200/6 mcg conforme necessário para alívio dos sintomas.'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 6 },
      vias: ['INALATORIA'],
      tipo: 'mg',
      min: 0.1,
      max: 0.2,
      padrao: 0.1, // 1 inalação de 100/6 mcg
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'GINA / BULA',
      trecho: 'Pediatria (6 a 11 anos) — Manutenção: 1 inalação de 100/6 mcg 1 a 2 vezes ao dia (máximo de 2 inalações diárias de 100/6 mcg).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 1.6, // equivalente a 8 inalações de 200 mcg
      fonte: 'GINA / BULA',
      trecho: 'Dose máxima diária total no regime MART: até 8 inalações de 200/6 mcg ao dia (ou temporariamente até 12 inalações durante exacerbações agudas).'
    }
  ],
  contra: [
    {
      msg: 'RECOMENDAÇÃO GINA 2024: O uso de broncodilatador de curta ação (SABA, ex: salbutamol isolado) SEM corticoide inalatório associado não é mais recomendado pelas diretrizes internacionais devido ao aumento significativo do risco de exacerbações graves e mortalidade por asma.',
      fonte: 'GINA',
      trecho: 'O GINA não recomenda mais o tratamento com SABA isolado em monoterapia sem corticoide inalatório.'
    },
    {
      msg: 'Hipersensibilidade grave à budesonida, ao formoterol ou à lactose / proteínas do leite presentes como excipiente do pó inalatório.',
      fonte: 'BULA / HSL',
      trecho: 'Contraindicado em pacientes com alergia grave a proteínas do leite de vaca.'
    },
    {
      msg: 'Sempre orientar o paciente a realizar enxágue da cavidade oral com água e cuspir após cada inalação para prevenir candidíase orofaríngea (sapinho) e rouquidão/disfonia.',
      fonte: 'HSL / GINA',
      trecho: 'Enxaguar a boca após a administração reduz a deposição orofaríngea do corticoide.'
    }
  ],
  notas: {
    indicacao: 'Tratamento de manutenção e alívio da asma brônquica em adultos e adolescentes a partir de 12 anos (e crianças a partir de 6 anos nas dosagens infantis) de acordo com a estratégia MART (Maintenance And Reliever Therapy) do GINA; Tratamento de manutenção do broncoespasmo na Doença Pulmonar Obstrutiva Crônica (DPOC) moderada a grave com histórico de exacerbações.',
    administracao: 'Via inalatória oral: Dispositivos de pó seco (cápsula com inalador ou Turbuhaler). O fluxo inspiratório deve ser forte, profundo e contínuo. Reter a respiração por 10 segundos antes de expirar. Não soprar para dentro do aparelho e manter o dispositivo seco.',
    cuidados: 'Monitorar frequência cardíaca e tremores (efeito beta-agonista do formoterol, habitualmente leve e autolimitado). Se o paciente necessitar de doses crescentes de alívio (mais de 2 a 3 dias por semana), reavaliar o controle clínico da asma.',
    ajuste: 'Insuficiência renal e hepática: Não é necessário ajuste posológico prévio. Em cirrose hepática descompensada, monitorar níveis sistêmicos de corticoide.',
    dosePratica: 'Asma moderada: 1 cápsula inalatória de 200/6 mcg de 12/12h + 1 inalação de alívio se falta de ar. Asma leve (alívio): 1 inalação de 200/6 mcg se sintomas.'
  }
};

export default budesonidaFormoterol;
