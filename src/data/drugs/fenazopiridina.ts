import { Farmaco } from '../../types';

export const fenazopiridina: Farmaco = {
  id: 'fenazopiridina',
  nome: 'Cloridrato de Fenazopiridina',
  categoria: 'Urológicos e Analgésicos das Vias Urinárias',
  busca: 'fenazopiridina pyridium urologico disuria cistite itu infeccao urinaria ardencia urinar urina laranja',
  classe: 'Analgésico Tópico das Vias Urinárias Inferiores',
  dosePratica: 'Adultos e adolescentes > 12 anos: 200 mg VO de 8/8h após as refeições (ou 100 mg de 8/8h), por NO MÁXIMO 2 dias consecutivos quando associado ao tratamento antimicrobiano de ITU. ATENÇÃO: Avisar o paciente que a medicação altera a cor da urina para vermelho-alaranjado e pode manchar roupas íntimas e lentes de contato.',
  fontes: { HSL: '05/05/2025', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'disúria, ardência, dor ou urgência miccional',
  acessoFonte: 'RENAME 2024: Não consta no elenco básico da RENAME; medicamento de grande circulação comercial e referência no Brasil.',
  apresentacoes: [
    {
      id: 'drg100',
      forma: 'cp',
      nome: 'Drágea 100 mg',
      comercial: 'Pyridium / Urovit / Genérico',
      conc: '100mg',
      rotulo: 'Fenazopiridina 100mg drágea',
      mg: 100,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar 1 a 2 drágeas por via oral logo após as refeições ou com um lanche leve para evitar náuseas. Não mastigar. AVISO: Esta medicação produz uma coloração vermelho-alaranjada característica na urina e nas fezes, o que é um efeito normal do remédio. Pode manchar roupas íntimas e lentes de contato. Não utilizar por mais de 2 dias.',
      obs: 'Drágea de 100 mg. Posologia usual: 2 drágeas (200 mg) de 8/8h por 2 dias.'
    },
    {
      id: 'drg200',
      forma: 'cp',
      nome: 'Drágea / Comprimido 200 mg',
      comercial: 'Pyridium 200mg / Genérico',
      conc: '200mg',
      rotulo: 'Fenazopiridina 200mg',
      mg: 200,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar 1 drágea por via oral de 8 em 8 horas após as refeições por 2 dias. A medicação tinge a urina de vermelho-alaranjado; suspender o uso após 2 dias.',
      obs: 'Dose prática de 1 comprimido por tomada.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { ou: [{ idadeMinAnos: 12 }, { pesoMin: 40 }] },
      vias: ['VO'],
      tipo: 'mg',
      min: 100,
      max: 200,
      padrao: 200,
      dosesDia: [3, 3],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 2,
      fonte: 'HSL / PSZERADO',
      trecho: 'Adulto — VO: 100 a 200 mg a cada 8 horas após as refeições. Quando usado em conjunto com um antibacteriano para o tratamento de ITU, a administração não deve exceder 2 dias.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 600,
      fonte: 'HSL / BULA',
      trecho: 'Dose máxima diária: 600 mg/dia (200 mg 3 vezes ao dia).'
    }
  ],
  contra: [
    {
      msg: 'COLORAÇÃO DA URINA E LENTES DE CONTATO: A fenazopiridina tinge a urina e as fezes de coloração vermelho-alaranjada intensa e mancha tecidos e roupas íntimas de forma indelével. Lentes de contato gelatinosas podem ser manchadas permanentemente (não usar lentes durante o tratamento).',
      fonte: 'HSL / BULA',
      trecho: 'Avisa-se ao paciente sobre a coloração avermelhada/alaranjada da urina e risco de manchar lentes de contato.'
    },
    {
      msg: 'Contraindicado em insuficiência renal moderada a grave (ClCr < 50 mL/min) devido ao risco crítico de acúmulo sistêmico, meta-hemoglobinemia e toxicidade urêmica.',
      fonte: 'HSL',
      trecho: 'Contraindicado em pacientes com insuficiência renal com clearance de creatinina < 50 mL/min.'
    },
    {
      msg: 'Contraindicado em insuficiência hepática grave e em pacientes com deficiência de glicose-6-fosfato desidrogenase (G6PD) pelo risco iminente de anemia hemolítica aguda.',
      fonte: 'HSL / BULA',
      trecho: 'Contraindicado em hepatopatia grave e deficiência de G6PD (risco de hemólise).'
    },
    {
      msg: 'DURAÇÃO MÁXIMA DE 2 DIAS: A fenazopiridina NÃO é antibiótico e não trata a infecção, atuando apenas como analgésico local da mucosa vesical. O uso além de 2 dias mascara a persistência dos sintomas de ITU sem benefício clínico adicional.',
      fonte: 'PSZERADO / HSL',
      trecho: 'Limitar o uso a 48 horas quando associado a terapia antimicrobiana.'
    }
  ],
  notas: {
    indicacao: 'Alívio sintomático da dor, disúria, queimação, ardor ao urinar, polaciúria e urgência miccional decorrentes da irritação da mucosa do trato urinário inferior (cistites, uretrites, pós-cateterismo vesical e pós-procedimentos endoscópicos ou cirúrgicos).',
    administracao: 'Via oral: Ingerir com bastante líquido imediatamente após as principais refeições para reduzir o risco de irritação gástrica e náuseas. Não mastigar as drágeas.',
    cuidados: 'Informar expressamente o paciente sobre a alteração esperada da cor da urina para evitar alarme ou confusão com hematúria. Se a pele ou a esclera apresentarem coloração amarelada, suspender imediatamente o medicamento (indica acúmulo por diminuição da excreção renal e risco de toxicidade).',
    ajuste: 'Insuficiência renal: ClCr 50 a 80 mL/min: administrar a cada 8 a 16 horas. ClCr < 50 mL/min: contraindicado. Insuficiência hepática: Contraindicado em hepatopatia grave.',
    dosePratica: 'Adulto: 200 mg VO de 8/8h após as refeições por 2 dias.'
  }
};

export default fenazopiridina;
