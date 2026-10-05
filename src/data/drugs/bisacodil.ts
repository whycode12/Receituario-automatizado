import { Farmaco } from '../../types';

export const bisacodil: Farmaco = {
  id: 'bisacodil',
  nome: 'Bisacodil',
  categoria: 'Gastrintestinal e Antieméticos',
  busca: 'bisacodil dulcolax laxotrat bisalax laxante estimulante contato constipacao intestino preso',
  classe: 'Laxativo Estimulante por Contato (Derivado do Difenilmetano)',
  dosePratica: 'Constipação: Adultos e > 10 anos: 5 a 10 mg VO (1 a 2 drágeas) em dose única à noite ao deitar (início de ação em 6 a 12 horas; máx. 10 mg/dia usual, até 20 mg em preparo). Pediatria (4 a 10 anos): 5 mg VO (1 drágea) em dose única à noite. Engolir inteira sem mastigar e NUNCA ingerir junto com leite ou antiácidos. Não usar por mais de 5 a 7 dias seguidos.',
  fontes: { HSL: '07/03/2023', BULA: '04/10/2026' },
  snPadrao: 'constipação intestinal ou preparo de exames',
  acessoFonte: 'RENAME 2024: drágea / comprimido revestido 5 mg no Componente Básico da Atenção Primária. Ampla disponibilidade em farmácias comerciais sob a marca de referência Dulcolax e genéricos.',
  apresentacoes: [
    {
      id: 'drg5',
      forma: 'cp',
      nome: 'Drágea / Comprimido revestido gastrorresistente 5 mg',
      comercial: 'Dulcolax / Genérico',
      conc: '5mg',
      rotulo: 'Bisacodil 5mg drágea gastrorresistente',
      mg: 5,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Engolir a drágea inteira com um copo de água, à noite ao deitar. NUNCA mastigar, partir ou tomar junto com leite, antiácidos ou supressores da acidez gástrica (o revestimento gastrorresistente protege contra irritação gástrica e dispepsia). O efeito evacuatório ocorre de 6 a 12 horas após a tomada.',
      obs: 'RENAME (Componente Básico). Drágea com revestimento entérico resistente ao suco gástrico para liberação seletiva no cólon.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 10 }, { pesoMin: 35 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 5,
      max: 10,
      padrao: 5,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 7,
      fonte: 'HSL',
      trecho: 'Adultos e crianças > 10 anos (Constipação): 5 a 10 mg (1 a 2 drágeas), VO, 1 vez ao dia à noite ao deitar (máx. 10 mg/dia para constipação crônica/ocasional; até 20 mg na noite anterior em preparo de exames/cirurgias).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 4, idadeMaxAnos: 10 },
      vias: ['VO'],
      tipo: 'mg',
      min: 5,
      max: 5,
      padrao: 5,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 5,
      fonte: 'HSL',
      trecho: 'Pediatria de 4 a 10 anos: 5 mg (1 drágea), VO, 1 vez ao dia à noite ao deitar por até 5 dias consecutivos.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 20,
      fonte: 'HSL',
      trecho: 'Dose Máxima Adulto: até 20 mg/dia em preparo intestinal para colonoscopia/cirurgia; para constipação habitual, não ultrapassar 10 mg/dia.'
    },
    {
      pub: 'ped',
      tipo: 'mg_dia',
      valor: 5,
      fonte: 'HSL',
      trecho: 'Dose Máxima Pediatria de 4 a 10 anos: 5 mg/dia (1 drágea).'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 4 },
      msg: 'CONTRAINDICADO em crianças menores de 4 anos de idade nas apresentações orais em drágeas (risco de engasgo e falta de indicação formal sem supervisão pediátrica especializada).',
      fonte: 'BULA',
      trecho: 'Contraindicado para menores de 4 anos.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com íleo paralítico, obstrução intestinal mecânica, apendicite, abdome agudo cirúrgico, sangramento retal não diagnosticado ou dor abdominal aguda grave associada a náuseas e vômitos.',
      fonte: 'BULA',
      trecho: 'Contraindicado em casos de íleo paralítico, obstrução intestinal, apendicite aguda e dor abdominal severa de causa indeterminada.',
      strong: false
    },
    {
      msg: 'Contraindicado em pacientes com desidratação grave e doença inflamatória intestinal ativa (colite ulcerativa, doença de Crohn).',
      fonte: 'BULA',
      trecho: 'Contraindicado em desidratação severa e afecções inflamatórias agudas do trato digestivo.',
      strong: false
    },
    {
      msg: 'INTERAÇÃO COM LEITE, ANTIÁCIDOS E IBPs: Produtos lácteos, antiácidos ou inibidores de bomba de prótons alcalinizam o estômago e dissolvem precocemente o revestimento entérico da drágea, causando dor epigástrica intensa, cólicas estomacais e náuseas. Manter intervalo mínimo de 2 horas entre o bisacodil e o consumo de leite ou antiácidos.',
      fonte: 'HSL',
      trecho: 'Não ingerir com leite, antiácidos ou inibidores da bomba de prótons para não danificar o revestimento gastrorresistente.',
      strong: false
    },
    {
      msg: 'Uso crônico e risco de dependência: o uso prolongado de laxantes estimulantes pode provocar cólicas intensas, diarreia com perda excessiva de potássio (hipocalemia), atonia cólica e dependência do reflexo evacuatório. Limitar o tratamento contínuo a no máximo 5 a 7 dias.',
      fonte: 'BULA',
      trecho: 'O uso diário crônico de laxantes deve ser evitado pelo risco de hipocalemia e atonia intestinal.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Tratamento a curto prazo da constipação intestinal funcional, alívio da evacuação dolorosa em hemorroidas e fissuras anais, e preparo intestinal para procedimentos diagnósticos (endoscopia, colonoscopia, radiologia) e cirurgias eletivas (HSL).',
    administracao: 'VO: Tomar 1 a 2 drágeas inteiras à noite com água para obter evacuação matinal confortável após 6 a 12 horas. Jamais mastigar ou esmagar.',
    cuidados: 'Mecanismo de ação: estimula diretamente as terminações nervosas do plexo mioentérico da mucosa colônica, acelerando o peristaltismo e promovendo acúmulo de água e eletrólitos na luz do cólon.',
    ajuste: 'Insuficiência renal e hepática: não requer ajuste de dose formal, mas monitorar eletrólitos séricos (especialmente potássio) se idosos ou nefropatas.'
  }
};

export default bisacodil;
