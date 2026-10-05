import { Farmaco } from '../../types';

export const dimenidrinato: Farmaco = {
  id: 'dimenidrinato',
  nome: 'Dimenidrinato',
  categoria: 'Gastrintestinal e Antieméticos',
  busca: 'dimenidrinato dramin dimenidrato cinetose labirintite vertigem antiemetico nausea vomito enjoo',
  classe: 'Antiemético e Antivertiginoso (Anti-histamínico H1 com ação anticolinérgica central)',
  dosePratica: 'Adulto e adolescentes > 12 anos: 50 a 100 mg VO (½ a 1 comprimido de 100 mg ou 1 a 2 comprimidos de 50 mg) a cada 4 a 6 horas se náuseas, vômitos, vertigem ou cinetose (máx. 400 mg/dia). Em prevenção de cinetose (enjoo de viagem): tomar a primeira dose cerca de 30 minutos a 1 hora antes da viagem.',
  fontes: { HSL: '07/03/2023', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'náuseas, vômitos, tontura, vertigem ou cinetose',
  acessoFonte: 'Medicamento isento de prescrição (MIP) e amplamente disponível em farmácias comerciais e serviços de saúde sob as marcas Dramin e genéricos.',
  apresentacoes: [
    {
      id: 'cp100',
      forma: 'cp',
      nome: 'Comprimido 100 mg sulcado',
      comercial: 'Dramin / Genérico',
      conc: '100mg',
      rotulo: 'Dimenidrinato 100mg',
      mg: 100,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Ingerir imediatamente antes ou durante as refeições com um copo de água. Para prevenção de enjoo de movimento/viagem (cinetose), tomar cerca de 30 minutos a 1 hora antes de iniciar o trajeto.',
      obs: 'Comprimido com vinco divisível (pode ser partido ao meio para dose de 50 mg). Indicado para adultos e adolescentes acima de 12 anos.'
    },
    {
      id: 'cp50',
      forma: 'cp',
      nome: 'Comprimido 50 mg',
      comercial: 'Dimenidrinato / Dramin',
      conc: '50mg',
      rotulo: 'Dimenidrinato 50mg',
      mg: 50,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Ingerir com água antes ou durante as refeições. Tomar 30 a 60 minutos antes de viagens se prevenção de cinetose.',
      obs: 'Dose prática de 50 mg a cada 4 ou 6 horas para vertigem e náuseas (PSZerado).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 50,
      max: 100,
      padrao: 50,
      dosesDia: [4, 6],
      dosesPadrao: 4,
      intervaloFixo: 6,
      fonte: 'HSL',
      trecho: 'Adulto e acima de 12 anos: 50 a 100mg (½ a 1 comprimido de 100mg), VO, a cada 4 a 6 horas. Em viagens, tomar 30 minutos antes. Máximo de 400mg em 24 horas.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 400,
      fonte: 'HSL',
      trecho: 'Dose Máxima Adulto e > 12 anos: 400mg (4 comprimidos de 100mg ou 8 comprimidos de 50mg) em 24 horas.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 11 },
      msg: 'A apresentação farmacêutica de Dimenidrinato em comprimidos de 100 mg / 50 mg é contraindicada para menores de 12 anos (HSL / Bula). Em pediatria < 12 anos, utilizar formulações líquidas pediátricas associadas a piridoxina (Dramin B6 gotas).',
      fonte: 'HSL',
      trecho: 'Menores de 12 anos: a apresentação farmacêutica em comprimidos é contraindicada para crianças nesta faixa etária.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com glaucoma de ângulo fechado, retenção urinária ou hiperplasia prostática sintomática (devido à marcante ação anticolinérgica).',
      fonte: 'BULA',
      trecho: 'Contraindicado em glaucoma de ângulo fechado, retenção urinária grave e hipersensibilidade ao dimenidrinato ou à difenidramina.',
      strong: false
    },
    {
      msg: 'Contraindicado em porfiria aguda intermitente.',
      fonte: 'BULA',
      trecho: 'Contraindicado em pacientes portadores de porfiria.',
      strong: false
    },
    {
      msg: 'Sedação e sonolência acentuada: orientar o paciente a evitar operar máquinas pesadas ou dirigir veículos durante o tratamento. Evitar associação com álcool e outros depressores do SNC.',
      fonte: 'HSL',
      trecho: 'Pode provocar sedação importante e potencializar o efeito de outros depressores do sistema nervoso central e do álcool.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Prevenção e tratamento de náuseas, vômitos e tonturas causados por cinetose (enjoo de movimento e viagens), labirintite, vertigem periférica e náuseas de outras etiologias (HSL / PSZerado).',
    administracao: 'VO: Tomar os comprimidos imediatamente antes ou durante as refeições para reduzir eventual desconforto gástrico. Para cinetose, administrar 30 a 60 minutos antes da viagem.',
    cuidados: 'Causa sonolência, sedação, boca seca, visão turva e redução dos reflexos. Monitorar idosos devido ao maior risco de quedas, confusão mental e retenção urinária decorrentes do bloqueio anticolinérgico.',
    ajuste: 'Insuficiência renal: não é necessário ajuste de dose (HSL). Insuficiência hepática: considerar redução de dose ou aumento do intervalo em insuficiência hepática aguda/grave devido ao metabolismo hepático extenso.'
  }
};

export default dimenidrinato;
