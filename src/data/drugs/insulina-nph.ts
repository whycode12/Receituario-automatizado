import { Farmaco } from '../../types';

export const insulinaNph: Farmaco = {
  id: 'insulina-nph',
  nome: 'Insulina Humana NPH (Ação Intermediária)',
  categoria: 'Endocrinologia e Antidiabéticos',
  busca: 'insulina nph humana recombinante intermediaria humulin n novolin n biobras diabetes dm1 dm2 basal glicemia bedtime',
  classe: 'Insulina Humana Recombinante de Ação Intermediária (Basal)',
  dosePratica: 'DM Tipo 2 (Esquema Basal Bedtime na Atenção Básica / UBS): Iniciar com 10 UI (ou 0,1 a 0,2 UI/kg/dia) SC 1 vez ao dia ao deitar (às 22h). Titular aumentando 2 UI a cada 3 a 7 dias conforme a glicemia capilar de jejum até atingir a meta (glicemia de jejum entre 80 e 130 mg/dL). Se a dose total necessária ultrapassar 20 a 30 UI/dia, fracionar em 2 tomadas: 2/3 pela manhã (30 min antes do café) e 1/3 ao deitar. DM Tipo 1: 0,5 a 1,0 UI/kg/dia associada à insulina prandial (Regular ou ultrarrápida). NUNCA administrar por via intravenosa!',
  fontes: { HSL: '11/12/2018', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'hiperglicemia',
  acessoFonte: 'RENAME 2024 / Farmácia Popular / SUS: Frasco de 10 mL e canetas de 3 mL distribuídos gratuitamente na Atenção Primária à Saúde e farmácias conveniadas, acompanhados de seringas e agulhas.',
  apresentacoes: [
    {
      id: 'fap10ml',
      forma: 'fap',
      nome: 'Frasco-ampola 100 UI/mL (10 mL = 1.000 UI)',
      comercial: 'Novolin N / Humulin N / Biobrás / Genérico',
      conc: '100 UI/mL',
      rotulo: 'Insulina humana NPH 100 UI/mL suspensão injetável (frasco 10 mL)',
      volml: 10,
      vias: ['SC'],
      disp: '1 frasco (10 mL)',
      unidades: ['ui', 'ui_kg_dia'],
      acesso: { rename: true, fp: true },
      instrucao: 'Como aplicar e guardar em casa:\n1. Antes de usar, role o frasco devagar entre as palmas das mãos por 10 a 20 vezes até o líquido ficar esbranquiçado por igual (não chacoalhe com força).\n2. Use seringa própria para insulina (de 100 UI). Puxe a quantidade exata de unidades receitada.\n3. Onde aplicar: na barriga (deixando 2 dedos de distância do umbigo), na frente das coxas ou atrás dos braços.\n4. Faça uma preguinha leve na pele com os dedos, espete a agulha, empurre o êmbolo até o fim e conte até 10 antes de retirar a agulha da pele.\n5. Mude o lugar da picada a cada aplicação para não criar caroços ou machucados na pele.\n6. Como guardar: o frasco fechado deve ficar na geladeira (nunca no congelador). O frasco que estiver usando pode ficar fora da geladeira, em local fresco e longe do sol, por até 28 dias.',
      obs: 'RENAME / SUS. Início de ação em 1 a 2 horas, pico entre 4 a 10 horas e duração de efeito de 12 a 18 horas.'
    },
    {
      id: 'caneta3ml',
      forma: 'fap',
      nome: 'Caneta / Refil aplicador 100 UI/mL (3 mL = 300 UI)',
      comercial: 'Novolin N Penfill / Humulin N KwikPen',
      conc: '100 UI/mL',
      rotulo: 'Insulina humana NPH 100 UI/mL sistema aplicador em caneta (refil 3 mL)',
      volml: 3,
      vias: ['SC'],
      disp: '1 caneta / refil (3 mL)',
      unidades: ['ui', 'ui_kg_dia'],
      acesso: { rename: true, fp: true },
      instrucao: 'Como aplicar e guardar com a caneta:\n1. Vire a caneta de cima para baixo devagar por 10 a 20 vezes até a insulina ficar branquinha por igual.\n2. Rosqueie uma agulha nova na ponta da caneta e gire o botão até a quantidade exata de unidades receitada.\n3. Onde aplicar: na barriga (a 2 dedos do umbigo), nas coxas ou atrás dos braços.\n4. Espete a agulha na pele, aperte o botão até o fim e segure apertado contando até 10 antes de retirar a agulha.\n5. Descarte a agulha após cada aplicação e mude sempre o local da picada a cada dia para proteger sua pele.\n6. A caneta em uso não precisa ficar na geladeira: guarde em local fresco, longe do calor e do sol direto (válida por até 28 dias após aberta).',
      obs: 'Padronizado no SUS para crianças, adolescentes, idosos e gestantes, além de farmácias comunitárias.'
    }
  ],
  regras: [
    // 1. Adulto DM2 - Início Basal Noturno (Bedtime - 1x/dia ao deitar)
    {
      pub: 'adulto',
      vias: ['SC'],
      apres: ['fap10ml', 'caneta3ml'],
      tipo: 'ui',
      min: 10,
      max: 40,
      padrao: 10,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      fonte: 'HSL / SBD',
      trecho: 'Adultos DM2 (início basal): 10 UI (ou 0,1 a 0,2 UI/kg/dia) SC 1 vez ao dia ao deitar (às 22h), ajustando a dose de 2 a 4 UI a cada 3 a 7 dias conforme a glicemia capilar de jejum (HSL / SBD).'
    },
    // 2. Adulto DM2 - Esquema Fracionado (2x/dia: Manhã e Noite)
    {
      pub: 'adulto',
      vias: ['SC'],
      apres: ['fap10ml', 'caneta3ml'],
      tipo: 'ui',
      min: 10,
      max: 40,
      padrao: 15,
      dosesDia: [2, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'HSL / SBD',
      trecho: 'Adultos DM2 (fracionado 2x/dia): Administrar 2/3 da dose diária total 30 minutos antes do desjejum e 1/3 da dose ao deitar / antes do jantar (HSL / SBD).'
    },
    // 3. Adulto DM1 / DM2 por Peso Corporal (UI/kg/dia)
    {
      pub: 'adulto',
      vias: ['SC'],
      apres: ['fap10ml', 'caneta3ml'],
      tipo: 'ui_kg_dia',
      min: 0.3,
      max: 0.6,
      padrao: 0.4,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'HSL',
      trecho: 'Adultos DM tipo 2: 0,3 a 0,6 UI/kg/dia; DM tipo 1: 0,5 a 1,0 UI/kg/dia fracionados em 1 a 2 tomadas (HSL).'
    },
    // 4. Pediatria DM1 (≥ 1 ano) por Peso Corporal
    {
      pub: 'ped',
      vias: ['SC'],
      apres: ['fap10ml', 'caneta3ml'],
      tipo: 'ui_kg_dia',
      min: 0.5,
      max: 1.0,
      padrao: 0.7,
      dosesDia: [1, 2],
      dosesPadrao: 2,
      intervaloFixo: 12,
      fonte: 'HSL / SBD',
      trecho: 'Pediatria DM1: 0,5 a 1,0 UI/kg/dia (média de 0,7 a 1,0 UI/kg/dia em pré-adolescentes) divididos em 1 a 2 tomadas subcutâneas associadas à insulina prandial (HSL).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['SC'],
      tipo: 'mg_dia',
      valor: 80,
      fonte: 'SBD / HSL',
      trecho: 'Dose máxima diária habitual em adultos: 80 UI/dia (doses superiores a 60-80 UI/dia exigem reavaliação de técnica de aplicação e resistência insulínica severa).'
    }
  ],
  contra: [
    {
      vias: ['SC'],
      msg: 'Contraindicado durante episódios agudos de hipoglicemia (glicemia capilar < 70 mg/dL). Suspender a aplicação e iniciar imediatamente a correção de glicemia (regra dos 15g de carboidratos rápidos por VO ou Glicose 50% EV se rebaixamento de consciência).',
      fonte: 'HSL / BULA',
      trecho: 'Contraindicado em hipoglicemia.',
      strong: true
    },
    {
      msg: 'ADMINISTRAÇÃO EXCLUSIVAMENTE SUBCUTÂNEA (SC): NUNCA administrar Insulina NPH por via endovenosa (EV) ou intramuscular (IM) devido à cinética errática da protamina e risco grave de precipitação e choque hipoglicêmico refratário.',
      fonte: 'HSL / BULA',
      trecho: 'Administração exclusivamente por via subcutânea.',
      strong: true
    },
    {
      msg: 'Medicamento de Alta Vigilância: Cautela redobrada na conferência da dosagem em Unidades (UI). Risco crítico de hipoglicemia grave potencialmente fatal em caso de sobredose, omissão de refeições ou esforço físico extenuante não planejado.',
      fonte: 'HSL',
      trecho: 'Medicamento de Alta Vigilância.',
      strong: false
    },
    {
      msg: 'Ajuste em insuficiência renal e hepática: a depuração de insulina é reduzida em pacientes com disfunção renal ou hepática avançada, aumentando significativamente a meia-vida e o risco de hipoglicemias prolongadas; redução preventiva de dose pode ser mandatória.',
      fonte: 'HSL',
      trecho: 'Pode ser necessária a redução da dose de insulina em insuficiência renal ou hepática.',
      strong: false
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade conhecida à insulina humana recombinante, ao sulfato de protamina ou a qualquer componente da fórmula.',
      fonte: 'HSL / BULA',
      trecho: 'Hipersensibilidade a qualquer componente da fórmula.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Controle glicêmico no Diabetes Mellitus tipo 1 (componente basal insubstituível), Diabetes Mellitus tipo 2 (quando antidiabéticos orais não atingem as metas glicêmicas ou em descompensação aguda catabólica) e Diabetes Gestacional refratário a medidas não farmacológicas (HSL / SBD / Guia UBS).',
    administracao: 'SC: Administrar 30 a 45 minutos antes das refeições ou ao deitar (22h). Inverter o frasco ou a caneta suavemente 10 a 20 vezes até homogeneização completa da suspensão esbranquiçada antes de aspirar. Não massagear o local da aplicação. Alternar os sítios de injeção a cada dose.',
    cuidados: 'MONITORAMENTO GLICÊMICO: A dose noturna ao deitar é titulada com base na glicemia de jejum pela manhã; a dose matinal é titulada com base na glicemia antes do jantar. LIPODISTROFIA: A falta de rotação dos sítios de aplicação leva à hipertrofia lipídica subcutânea com absorção errática e picos imprevisíveis. REGRA DOS 15 PARA HIPOGLICEMIA: Diante de tremores, sudorese, taquicardia ou confusão com glicemia < 70 mg/dL: ingerir 15g de carboidrato simples (150 mL de suco de frutas ou 1 colher de sopa de açúcar diluído em água), esperar 15 minutos e reavaliar.',
    ajuste: 'Insuficiência renal: TFG 10-50 mL/min: reduzir dose em cerca de 25%; TFG < 10 mL/min: reduzir em 50% pelo risco aumentado de hipoglicemia prolongada. Insuficiência hepática: Ajustar para doses menores sob vigilância glicêmica estrita (gliconeogênese hepática reduzida).'
  }
};

export default insulinaNph;
