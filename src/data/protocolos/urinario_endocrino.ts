import { ProtocoloConduta } from '../../types/protocolos';

export const protocolosUrinarioEndocrino: ProtocoloConduta[] = [
  {
    id: 'dm_descompensada',
    titulo: 'Diabetes Mellitus Descompensada e Hiperglicemia Aguda',
    categoria: 'Doenças Endocrinológicas',
    subtitulo: 'Correção de hiperglicemia aguda com insulina rápida e diferenciação de cetoacidose (CAD) e estado hiperosmolar (EHH)',
    paginaPdf: 60,
    opcoesPrescricao: [
      {
        id: 'dm_insulina_escala',
        titulo: 'Opção 1: Hiperglicemia Sintomática com Insulina Regular SC',
        subtitulo: 'Correção conforme escala de glicemia capilar (HGT) na observação da UPA.',
        itens: [
          {
            farmacoId: 'insulina-regular',
            tipoUso: 'agora',
            dose: 4,
            unidade: 'ui',
            via: 'SC',
            intervalo: 24,
            observacaoUso: 'Administrar conforme HGT: 181-200 mg/dL: 2 UI; 201-250 mg/dL: 4 UI; 251-300 mg/dL: 6 UI; 301-350 mg/dL: 8 UI; > 350 mg/dL: 10 UI SC. Reavaliar HGT após 2 horas.'
          }
        ]
      },
      {
        id: 'dm_hiperglicemia_grave',
        titulo: 'Opção 2: Hiperglicemia Severa (> 500 mg/dL ou "HI")',
        subtitulo: 'Hidratação venosa rápida inicial com SF 0,9% associada a insulina regular.',
        itens: [
          {
            farmacoId: 'soro_ev',
            tipoUso: 'agora',
            dose: 500,
            unidade: 'ml',
            via: 'EV',
            intervalo: 24,
            observacaoUso: 'Infundir 500 mL de SF 0,9% EV aberto em 30 a 45 minutos. Restaura volume intravascular e reduz glicemia por diluição/filtração renal.'
          },
          {
            farmacoId: 'insulina-regular',
            tipoUso: 'agora',
            dose: 10,
            unidade: 'ui',
            via: 'SC',
            intervalo: 24,
            observacaoUso: 'Aplicar 10 a 12 UI SC após término da primeira bolsa de soro. Reavaliar glicemia capilar em 40 a 60 minutos.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'DIFERENCIAR URGÊNCIA GLICÊMICA SIMPLES DE CAD / EHH: solicitar gasometria venosa, eletrólitos e EAS em todo paciente com glicemia > 250 mg/dL que apresente náuseas, vômitos, dor abdominal, taquipneia ou alteração do sensório.',
        'Cetoacidose Diabética (CAD): tríade de Hiperglicemia (> 250 mg/dL) + Acidose Metabólica com ânion gap elevado (pH < 7,30 e HCO3 < 18 mEq/L) + Cetonemia/Cetonúria (3+ a 4+ no EAS). Comum no DM tipo 1.',
        'Estado Hiperglicêmico Hiperosmolar (EHH): Glicemia extrema (> 600 mg/dL), osmolaridade plasmática efetiva elevada (> 320 mOsm/kg), sem acidose importante (pH > 7,30 e HCO3 > 18). Comum no DM tipo 2 idoso gravemente desidratado.',
        'ATENÇÃO AO POTÁSSIO ANTES DA INSULINA: NUNCA administrar insulina se K < 3,3 mEq/L (a insulina promove entrada maciça de potássio para dentro da célula, causando hipocalemia severa e parada cardiorrespiratória em assistolia/FV). Repor K primeiro!'
      ],
      criteriosInternacao: [
        'Diagnóstico firmado de Cetoacidose Diabética (CAD) ou Estado Hiperglicêmico Hiperosmolar (EHH) exige internação em leito de UTI ou sala vermelha para hidratação vigorosa e bomba de infusão de insulina contínua.',
        'Incapacidade de ingesta oral, vômitos incoercíveis ou hiporresponsividade clínica.'
      ],
      examesRecomendados: [
        'Glicemia capilar seriada horária na fase aguda.',
        'Gasometria venosa (pH, bicarbonato, ânion gap, lactato).',
        'Eletrólitos completos: Potássio, Sódio (calcular sódio corrigido: Na medido + 1,6 x [(Glicose - 100) / 100]), Cloro e Magnésio.',
        'Urina tipo I (EAS) para avaliar glicosúria, cetonúria e leucocitúria (pesquisar infecção como fator descompensador).',
        'Hemograma completo, ureia, creatinina e ECG de 12 derivações.'
      ],
      orientacoesNaoFarmacologicas: [
        'Orientar o paciente a nunca suspender a insulina basal (NPH ou análogos) mesmo em dias de febre, náuseas ou redução de apetite ("sick day rules").',
        'Incentivar ingesta abundante de água sem açúcar para acelerar a depuração renal da glicose.',
        'Encaminhar para consulta médica ambulatorial em UBS/endocrinologista para ajuste de doses e reforço do plano nutricional.'
      ]
    }
  },
  {
    id: 'hipoglicemia',
    titulo: 'Hipoglicemia Aguda no Paciente Adulto',
    categoria: 'Doenças Endocrinológicas',
    subtitulo: 'Manejo ambulatorial (regra dos 15) e reversão de emergência com glicose hipertônica 50% EV',
    paginaPdf: 61,
    opcoesPrescricao: [
      {
        id: 'hipo_leve_oral',
        titulo: 'Opção 1: Hipoglicemia Leve / Paciente Consciente (Via Oral)',
        subtitulo: 'Regra dos 15: 15 g de carboidrato simples VO e reavaliação em 15 minutos.',
        itens: [
          {
            farmacoId: 'glicose_50',
            tipoUso: 'agora',
            dose: 15000,
            unidade: 'mg',
            via: 'EV',
            intervalo: 24,
            observacaoUso: 'No paciente consciente capaz de deglutir com segurança: oferecer 15 g de carboidratos rápidos por via oral (150 mL de refrigerante comum não diet, 200 mL de suco de laranja natural ou 3 sachês de açúcar de 5g dissolvidos em água). Reavaliar HGT em 15 minutos.'
          }
        ]
      },
      {
        id: 'hipo_grave_ev',
        titulo: 'Opção 2: Hipoglicemia Moderada a Severa / Inconsciente (Glicose 50% EV)',
        subtitulo: 'Rebaixamento do nível de consciência, crise convulsiva ou via oral não segura.',
        itens: [
          {
            farmacoId: 'glicose_50',
            tipoUso: 'agora',
            dose: 20000,
            unidade: 'mg',
            via: 'EV',
            intervalo: 24,
            observacaoUso: 'Administrar 4 ampolas de 10 mL (40 mL = 20 g) de Glicose Hipertônica 50% por via endovenosa lenta em 3 a 5 minutos. Reavaliar glicemia capilar em 15 minutos. Se persistir < 70 mg/dL, repetir a dose.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'TRÍADE DE WHIPPLE: 1) Sintomas neuroglicopênicos/autonômicos; 2) Glicemia capilar ou plasmática baixa (< 70 mg/dL); 3) Alívio imediato dos sintomas após elevação da glicemia.',
        'HIPOGLICEMIA POR SULFONILUREIAS (Glibenclamida, Gliclazida): RISCO DE HIPOGLICEMIA PROLONGADA OU RECORRENTE POR ATÉ 48 A 72 HORAS! O paciente NÃO pode receber alta precoce; exige internação e monitorização glicêmica contínua com aporte calórico sob vigilância.',
        'PACIENTES ETILISTAS OU DESNUTRIDOS: Sempre administrar TIAMINA 100 mg a 300 mg EV ou IM antes ou concomitantemente à infusão de glicose, para evitar precipitação aguda da Síndrome de Wernicke-Korsakoff (confusão mental, oftalmoplegia e ataxia).'
      ],
      criteriosInternacao: [
        'Hipoglicemia secundária a antidiabéticos orais secretagogos (sulfonilureias: glibenclamida, glimepirida, gliclazida).',
        'Hipoglicemia em pacientes com insuficiência renal crônica grave ou insuficiência hepática avançada.',
        'Déficit neurológico focal persistente após normalização da glicemia (suspeita de AVC isquêmico concorrente ou edema citotóxico prolongado).'
      ],
      examesRecomendados: [
        'Glicemia capilar a cada 15 minutos até estabilização > 100 mg/dL e depois a cada 1 a 2 horas.',
        'Eletrólitos séricos (Sódio e Potássio).',
        'Creatinina e ureia para avaliar taxa de depuração renal.',
        'Triagem toxicológica se suspeita de tentativa de autoextermínio com insulina/antidiabéticos.'
      ],
      orientacoesNaoFarmacologicas: [
        'Após a recuperação da consciência e normalização do HGT (> 70-100 mg/dL), oferecer imediatamente uma refeição sólida com carboidratos complexos de absorção lenta (pão, bolacha, refeição completa) para prevenir novo rebote de hipoglicemia.',
        'Revisar horários de tomada de remédios e relação com as refeições.',
        'Orientar familiares e cuidadores sobre reconhecimento precoce de sintomas autonômicos (sudorese fria, tremor, taquicardia, palidez, confusão).'
      ]
    }
  },
  {
    id: 'itu_cistite',
    titulo: 'Infecção do Trato Urinário Baixo (Cistite Aguda Não Complicada)',
    categoria: 'Sistema Urinário',
    subtitulo: 'Tratamento de primeira escolha: Fosfomicina dose única vs Nitrofurantoína vs Sulfametoxazol-Trimetoprima',
    paginaPdf: 70,
    opcoesPrescricao: [
      {
        id: 'cistite_fosfomicina',
        titulo: 'Opção 1: Fosfomicina 3 g Granulado (1ª Escolha - Dose Única)',
        subtitulo: 'Esquema cômodo em dose única com excelente adesão e baixo índice de resistência bacteriana.',
        itens: [
          {
            farmacoId: 'fosfomicina',
            tipoUso: 'agora',
            dose: 3,
            unidade: 'g',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Dissolver o conteúdo de 1 sachê (3 g) em meio copo de água e tomar à noite ao deitar, preferencialmente após esvaziar a bexiga.'
          }
        ]
      },
      {
        id: 'cistite_nitrofurantoina',
        titulo: 'Opção 2: Nitrofurantoína 100 mg (1ª Escolha Alternativa - 5 dias)',
        subtitulo: 'Excelente ação na mucosa vesical sem induzir resistência em microbiota intestinal.',
        itens: [
          {
            farmacoId: 'nitrofurantoina',
            tipoUso: 'continuo',
            dose: 100,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 100 mg VO de 6 em 6 horas com alimentos por 5 dias seguidos. Sugestão de horários: 6h, 12h, 18h, 00h.'
          }
        ]
      },
      {
        id: 'cistite_bactrim',
        titulo: 'Opção 3: Sulfametoxazol + Trimetoprima 400/80 mg',
        subtitulo: 'Opção do componente básico SUS (quando sensibilidade local conhecida > 80%).',
        itens: [
          {
            farmacoId: 'sulfametoxazol-trimetoprima',
            tipoUso: 'continuo',
            dose: 800,
            unidade: 'mg',
            via: 'VO',
            intervalo: 12,
            dias: 3,
            observacaoUso: 'Tomar 2 comprimidos de 400/80 mg (dose dobrada = 800/160 mg) VO de 12/12h por 3 a 5 dias. Sugestão de horários: 8h e 20h.'
          }
        ]
      },
      {
        id: 'cistite_ciprofloxacino',
        titulo: 'Opção 4: Ciprofloxacino 500 mg (Segunda Linha)',
        subtitulo: 'Reservado para intolerância ou falha comprovada das opções de primeira linha.',
        itens: [
          {
            farmacoId: 'ciprofloxacino',
            tipoUso: 'continuo',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            intervalo: 12,
            dias: 3,
            observacaoUso: 'Tomar 1 comprimido de 500 mg VO de 12 em 12 horas por 3 dias. Sugestão de horários: 8h e 20h.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'DIFERENCIAR CISTITE DE PIELONEFRITE: cistite apresenta apenas sintomas urinários baixos (disúria, estrangúria, polaciúria, urgência miccional e dor suprapúbica). SE HOUVER FEBRE (> 37,8°C), CALAFRIOS, DOR LOMBAR OU SINAL DE GIORDANO POSITIVO, TRATA-SE DE PIELONEFRITE!',
        'Urocultura NÃO é necessária em mulheres jovens não grávidas com primeiro episódio de cistite não complicada clássica. INDICAÇÕES DE UROCULTURA: gestantes, homens, idosos, crianças, falha de tratamento empírico prévio, ITU de repetição (≥ 3 episódios/ano ou 2 em 6 meses) e suspeita de pielonefrite.',
        'Fluoroquinolonas (Ciprofloxacino/Norfloxacino) DEVEM SER EVITADAS como 1ª linha na cistite não complicada devido aos alertas da FDA/ANVISA sobre toxicidade tendínea/articular e para poupar a classe para infecções mais graves como pielonefrite.'
      ],
      criteriosInternacao: [
        'Sintomas sistêmicos de sepse ou instabilidade hemodinâmica.',
        'Incapacidade de tolerar medicação por via oral.',
        'Gestantes com sinais de complicação infecciosa.'
      ],
      examesRecomendados: [
        'EAS (urina tipo 1): leucocitúria (> 10.000/mL ou > 5/campo), piúria, teste do nitrito positivo (especificidade > 90% para enterobactérias produtoras de nitrato redutase) e bacteriúria.',
        'Urocultura com antibiograma se critérios de complicação ou repetição.',
        'Beta-HCG urinário em mulheres em idade fértil com atraso menstrual.'
      ],
      orientacoesNaoFarmacologicas: [
        'Aumentar ingesta hídrica diária (2 a 3 litros de água por dia) para promover a "lavagem mecânica" da bexiga pelo fluxo urinário.',
        'Não postergar a micção (esvaziar a bexiga a cada 2 a 3 horas e urinar logo após relações sexuais).',
        'Higiene íntima correta da frente para trás (da vagina para o ânus) para não carregar bactérias colônicas para o meato uretral.'
      ]
    }
  },
  {
    id: 'colica_nefretica',
    titulo: 'Cólica Nefrética e Nefrolitíase na Urgência',
    categoria: 'Sistema Urinário',
    subtitulo: 'Alívio álgico imediato na emergência (AINE parenteral + antiespasmódico), analgesia oral e terapia médica expulsiva (Tansulosina)',
    paginaPdf: 71,
    opcoesPrescricao: [
      {
        id: 'colica_nefretica_emergencia',
        titulo: 'Opção 1: Conduta Imediata na Sala de Emergência (Injetável EV)',
        subtitulo: 'Cetorolaco ou Cetoprofeno EV (1ª linha) + Dipirona + Escopolamina + Tramadol se refratário.',
        itens: [
          {
            farmacoId: 'cetorolaco',
            tipoUso: 'agora',
            dose: 30,
            unidade: 'mg',
            via: 'EV',
            intervalo: 24,
            observacaoUso: 'Diluir 1 ampola (30 mg/1 mL) em 100 mL de SF 0,9% e infundir em 15 minutos. AINE padrão-ouro: reduz o espasmo ureteral e a pressão intraluminal renal.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'agora',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            intervalo: 6,
            observacaoUso: '1 ampola (1.000 mg/2 mL) diluída em 18 mL de SF 0,9% EV lento em 10 minutos se dor persistente.'
          },
          {
            farmacoId: 'escopolamina',
            tipoUso: 'se_necessario',
            dose: 20,
            unidade: 'mg',
            via: 'EV',
            intervalo: 8,
            observacaoUso: '1 ampola (20 mg/mL) diluída em seringa com AD/SF EV lento se componente espasmódico associado.'
          },
          {
            farmacoId: 'tramadol',
            tipoUso: 'se_necessario',
            dose: 100,
            unidade: 'mg',
            via: 'EV',
            intervalo: 8,
            observacaoUso: 'Diluir 2 ampolas de 50 mg (100 mg) em 100 mL de SF 0,9% e infundir em 20 a 30 minutos se dor intensa refratária aos AINEs.'
          }
        ]
      },
      {
        id: 'colica_nefretica_ambulatorial',
        titulo: 'Opção 2: Prescrição Domiciliar / Alta da UPA (Uso Oral)',
        subtitulo: 'Cetoprofeno VO + Dipirona se dor + Antiemético.',
        itens: [
          {
            farmacoId: 'cetoprofeno',
            tipoUso: 'continuo',
            dose: 150,
            unidade: 'mg',
            via: 'VO',
            intervalo: 12,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 150 mg VO de 12 em 12 horas após as refeições por no máximo 5 dias seguidos.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido de 1.000 mg (ou 2 de 500 mg) VO se dor, podendo repetir de 6 em 6 horas.'
          },
          {
            farmacoId: 'metoclopramida',
            tipoUso: 'se_necessario',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            intervalo: 8,
            observacaoUso: 'Tomar 1 comprimido de 10 mg VO se náuseas ou vômitos associados à dor.'
          }
        ]
      },
      {
        id: 'colica_nefretica_tme',
        titulo: 'Opção 3: Terapia Médica Expulsiva - TME (Cálculo Ureteral 5 a 10 mm)',
        subtitulo: 'Tansulosina 0,4 mg VO diária para acelerar a eliminação espontânea do cálculo.',
        itens: [
          {
            farmacoId: 'tansulosina',
            tipoUso: 'continuo',
            dose: 0.4,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            dias: 28,
            usoContinuo: true,
            observacaoUso: 'Tomar 1 cápsula de 0,4 mg VO uma vez ao dia pela manhã cerca de 30 minutos após o café da manhã por 2 a 4 semanas. Relaxa a musculatura do ureter distal facilitando a passagem do cálculo.'
          },
          {
            farmacoId: 'cetoprofeno',
            tipoUso: 'se_necessario',
            dose: 150,
            unidade: 'mg',
            via: 'VO',
            intervalo: 12,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 150 mg se dor lombar aguda.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'SINAIS DE ALARME E INDICAÇÕES DE INTERNAÇÃO URGENTE: 1) Cólica nefrética associada a febre (> 37,8°C) ou sinais de sepse (URGÊNCIA UROLÓGICA ABSOLUTA: rim obstruído + infectado exige desobstrução imediata por duplo J ou nefrostomia percutânea sob risco de choque séptico fatal); 2) Obstrução bilateral ou rim único funcionante / transplantado (risco de anúria e insuficiência renal aguda); 3) Dor intratável refratária a opióides potentes em sala vermelha; 4) Vômitos incoercíveis com desidratação.',
        'AINEs (Cetorolaco/Cetoprofeno) são SUPERIORES AOS OPIÓIDES no alívio da cólica renal porque inibem a síntese de prostaglandinas renais, reduzindo o fluxo plasmático glomerular e o espasmo do músculo liso ureteral.',
        'Cálculos < 5 mm têm taxa de eliminação espontânea > 80-90%. Cálculos entre 5 e 10 mm se beneficiam enormemente da TME com Tansulosina (eliminação em até 70%). Cálculos > 10 mm raramente passam espontaneamente e exigem avaliação urológica cirúrgica (LECO, ureterorrenolitotripsia).'
      ],
      criteriosInternacao: [
        'Litíase infectada (obstrução + infecção urinária/febre).',
        'Insuficiência renal aguda pós-renal.',
        'Dor refratária após analgesia parenteral escalonada.'
      ],
      examesRecomendados: [
        'Tomografia Computadorizada de Abdome e Pelve sem contraste (Angio-TC helicoidal): PADRÃO-OURO com sensibilidade e especificidade > 97% para cálculo, mede tamanho, densidade em unidades Hounsfield (HU) e localização precisa.',
        'Ultrassonografia de rins e vias urinárias: excelente para avaliar hidronefrose / dilatação pielocalicinal, preferencial em gestantes e crianças.',
        'EAS (urina tipo 1): hematúria microscópica presente em 90% dos casos; pesquisar leucocitúria/nitrito.',
        'Ureia, creatinina sérica, eletrólitos e hemograma com leucograma.'
      ],
      orientacoesNaoFarmacologicas: [
        'Durante a crise aguda: NÃO forçar hiper-hidratação hídrica com litros de água (isso aumenta a pressão dentro do bacinete renal obstruído e piora a dor!). Hidratar normalmente.',
        'Após a resolução da crise aguda: ingerir 2,5 a 3 litros de líquidos ao dia para atingir volume urinário diário > 2 litros.',
        'Reduzir consumo de sal/sódio (< 2 g/dia) e proteínas de origem animal. Não restringir o cálcio da dieta (a restrição de cálcio paradoxalmente aumenta a absorção de oxalato no intestino e piora os cálculos!).'
      ]
    }
  },
  {
    id: 'pielonefrite_aguda',
    titulo: 'Pielonefrite Aguda (Infecção do Trato Urinário Alto)',
    categoria: 'Sistema Urinário',
    subtitulo: 'Conduta ambulatorial (Ciprofloxacino / Levofloxacino) vs Hospitalar na UPA (Ceftriaxona EV)',
    paginaPdf: 73,
    opcoesPrescricao: [
      {
        id: 'pielonefrite_ambulatorial_cipro',
        titulo: 'Opção 1: Pielonefrite Leve Não Complicada (Ciprofloxacino VO)',
        subtitulo: 'Para paciente com bom estado geral, tolerando via oral, sem sinais de sepse ou desidratação.',
        itens: [
          {
            farmacoId: 'ciprofloxacino',
            tipoUso: 'continuo',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            intervalo: 12,
            dias: 7,
            observacaoUso: 'Tomar 1 comprimido de 500 mg VO de 12 em 12 horas por 7 dias seguidos. Sugestão de horários: 8h e 20h.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido de 1.000 mg se febre ou dor lombar.'
          }
        ]
      },
      {
        id: 'pielonefrite_ambulatorial_levo',
        titulo: 'Opção 2: Pielonefrite Leve Não Complicada (Levofloxacino VO)',
        subtitulo: 'Comodidade posológica de 1 tomada ao dia por 7 dias.',
        itens: [
          {
            farmacoId: 'levofloxacino',
            tipoUso: 'continuo',
            dose: 750,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            dias: 7,
            observacaoUso: 'Tomar 1 comprimido de 750 mg VO uma vez ao dia, no mesmo horário, por 7 dias seguidos. Sugestão de horário: 8h.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: '1 comprimido de 1.000 mg se dor ou febre.'
          }
        ]
      },
      {
        id: 'pielonefrite_hospitalar_ceftriaxona',
        titulo: 'Opção 3: Pielonefrite Complicada / Hospitalar (Ceftriaxona EV)',
        subtitulo: 'Intolerância oral, vômitos, gestantes, idosos frágeis ou sinais de gravidade sistêmica.',
        itens: [
          {
            farmacoId: 'ceftriaxona',
            tipoUso: 'continuo',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            intervalo: 12,
            dias: 10,
            observacaoUso: 'Reconstituir com 10 mL de AD e diluir em 100 mL de SF 0,9%; infundir EV em 30 min de 12/12h (ou 2 g EV em dose única diária). Transicionar para via oral após 48h afebril.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            intervalo: 6,
            observacaoUso: '1 ampola (1.000 mg/2 mL) diluída em 18 mL de SF 0,9% EV se febre ou dor lombar.'
          },
          {
            farmacoId: 'ondansetrona',
            tipoUso: 'se_necessario',
            dose: 4,
            unidade: 'mg',
            via: 'EV',
            intervalo: 8,
            observacaoUso: '1 ampola (4 mg/2 mL) EV se náuseas ou vômitos.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'TRÍADE CLÁSSICA: Febre alta (> 38°C), calafrios intensos e dor lombar unilateral ou bilateral acompanhada de sinal de Giordano francamente positivo.',
        'OBRIGATÓRIO COLHER UROCULTURA COM ANTIBIOGRAMA E HEMOCULTURAS (2 pares) ANTES de iniciar a antibioticoterapia.',
        'GESTANTES COM PIELONEFRITE: INTERNAÇÃO OBRIGATÓRIA! As fluoroquinolonas são contraindicadas na gravidez. O tratamento de escolha é Ceftriaxona EV 1 g de 12/12h ou Cefazolina/Ampicilina-Gentamicina sob internação hospitalar.'
      ],
      criteriosInternacao: [
        'Intolerância à ingestão de medicamentos ou líquidos por via oral (vômitos incoercíveis).',
        'Instabilidade hemodinâmica, taquicardia persistente, hipotensão ou sinais de sepse/choque.',
        'Gestantes em qualquer idade gestacional.',
        'Idosos frágeis, imunossuprimidos, diabéticos descompensados ou portadores de rim único/transplantado.',
        'Suspeita de complicação obstrutiva (litíase associada) ou abscesso renal/perirrenal.'
      ],
      examesRecomendados: [
        'Urocultura quantitativa com teste de sensibilidade a antimicrobianos (antibiograma).',
        'EAS (urina tipo 1): piúria maciça, leucocitúria, cilindros leucocitários (patognomônicos de acometimento parenquimatoso renal) e hematúria.',
        'Hemograma com leucocitose importante e desvio à esquerda; Proteína C-Reativa (PCR) e Procalcitonina elevadas.',
        'Creatinina e ureia para avaliar lesão renal aguda associada.',
        'Ultrassonografia ou Tomografia Computadorizada de rins e vias urinárias se febre refratária após 48-72h de antibiótico adequado (investigar abscesso renal ou cálculo obstrutivo).'
      ],
      orientacoesNaoFarmacologicas: [
        'Hidratação endovenosa ou oral adequada com controle do balanço hídrico e débito urinário.',
        'Repouso no leito durante a fase febril inicial.',
        'Retorno imediato se piora clínica, persistência da febre após 48 a 72 horas ou vômitos incoercíveis.'
      ]
    }
  },
  {
    id: 'disturbios_eletrolitos',
    titulo: 'Distúrbios Hidroeletrolíticos Graves (K+, Ca2+, Mg2+, Fósforo e Sódio)',
    categoria: 'Doenças Endocrinológicas',
    subtitulo: 'Manejo de emergência na UPA da hipercalemia, hipocalemia, hipomagnesemia, hipofosfatemia e hipocalcemia',
    paginaPdf: 74,
    opcoesPrescricao: [
      {
        id: 'hipercalemia_emergencia',
        titulo: 'Opção 1: Hipercalemia Grave com Alteração de ECG (Manejo Completo)',
        subtitulo: 'K > 6,0 mEq/L ou alterações no traçado: Cálcio EV + Insulina Regular + Glicose 50% + Salbutamol.',
        itens: [
          {
            farmacoId: 'gluconato_de_calcio',
            tipoUso: 'agora',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            intervalo: 24,
            observacaoUso: '1 ampola de 10 mL (1 g) diluída em 100 mL de SF 0,9% EV em 5 a 10 minutos sob monitorização eletrocardiográfica. Estabiliza a membrana miocárdica em 1 a 3 minutos prevenindo arritmias ventriculares fatais.'
          },
          {
            farmacoId: 'insulina-regular',
            tipoUso: 'agora',
            dose: 10,
            unidade: 'ui',
            via: 'EV',
            intervalo: 24,
            observacaoUso: '10 UI de Insulina Regular EV diluídas em 100 mL de Glicose 50% (ou 500 mL de SG 10%) infundidas em 20 a 30 minutos. Promove a entrada de potássio para dentro da célula (shift intracelular reduz K sérico em 0,5 a 1,2 mEq/L).'
          },
          {
            farmacoId: 'salbutamol',
            tipoUso: 'agora',
            dose: 400,
            unidade: 'mcg',
            via: 'INALATORIA',
            intervalo: 24,
            observacaoUso: '4 puffs (400 mcg) via inalatória com espaçador ou 10 a 20 gotas em 5 mL de SF 0,9% nebulizados. Estimula os receptores beta-2 adrenérgicos ativando a bomba Na/K-ATPase.'
          },
          {
            farmacoId: 'furosemida',
            tipoUso: 'agora',
            dose: 40,
            unidade: 'mg',
            via: 'EV',
            intervalo: 24,
            observacaoUso: '2 ampolas (40 mg) EV em bólus lento se paciente apresentar débito urinário preservado (aumenta excreção urinária de K).'
          }
        ]
      },
      {
        id: 'hipocalemia_reposicao',
        titulo: 'Opção 2: Hipocalemia Grave (< 3,0 mEq/L) e Leve (Cloreto de Potássio KCl)',
        subtitulo: 'Reposição endovenosa lenta periférica ou central + manutenção oral (página 74 do Guia UPA 2026)',
        itens: [
          {
            farmacoId: 'cloreto-de-potassio',
            forma: 'amp',
            dose: 3056,
            unidade: 'mg',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            observacaoUso: '16 mL de KCl 19,1% (40 mEq) diluídos em 500 mL de SF 0,9% EV em veia periférica infundidos em 4 horas (velocidade máx. 10 mEq/h). NUNCA FAZER EM BOLUS!'
          },
          {
            farmacoId: 'cloreto-de-potassio',
            forma: 'sol',
            dose: 15,
            unidade: 'ml',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 12,
            dias: 5,
            observacaoUso: 'Tomar 15 mL (1 colher de sopa = 12 mEq) do xarope 6% de 12 em 12 horas diluído em meio copo de água após as refeições.'
          }
        ]
      },
      {
        id: 'hipomagnesemia_reposicao',
        titulo: 'Opção 3: Hipomagnesemia (Sulfato de Magnésio EV)',
        subtitulo: 'Guia de doses escalonadas conforme nível sérico de Magnésio (página 74 do Guia UPA 2026)',
        itens: [
          {
            farmacoId: 'sulfato-de-magnesio',
            forma: 'amp',
            dose: 2000,
            unidade: 'mg',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            observacaoUso: '2 ampolas de 10% (2 g = 20 mL) diluídas em 100 a 250 mL de SF 0,9% EV em 4 a 12 horas (se Mg < 1,0 mg/dL: fazer 4 a 8 g em 12-24h; se 1,0-1,5 mg/dL: fazer 2 a 4 g em 4-12h).'
          }
        ]
      },
      {
        id: 'hipofosfatemia_reposicao',
        titulo: 'Opção 4: Hipofosfatemia (Fosfato de Potássio EV)',
        subtitulo: 'Reposição lenta de Fósforo e Potássio em hipofosfatemia moderada a severa (pág. 74)',
        itens: [
          {
            farmacoId: 'fosfato-de-potassio',
            forma: 'amp',
            dose: 10,
            unidade: 'ml',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            observacaoUso: '1 a 2 ampolas (10 a 20 mL) diluídas em 500 mL de SF 0,9% infundidas em veia periférica em 6 horas (ou em 250 mL em 3h se acesso central).'
          }
        ]
      },
      {
        id: 'hipocalcemia_sintomatica',
        titulo: 'Opção 5: Hipocalcemia Sintomática (Gluconato de Cálcio 10%)',
        subtitulo: 'Sinais de tetania, espasmo carpopodal (Trousseau) ou perioral (Chvostek) (pág. 73 do Guia UPA 2026)',
        itens: [
          {
            farmacoId: 'gluconato_de_calcio',
            forma: 'amp',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            observacaoUso: '1 a 2 ampolas (10 a 20 mL) diluídas em 100 mL de SF 0,9% infundidas EV em 20 minutos. Repetir se persistirem os sintomas de tetania.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'HIPERCALEMIA (K > 5,5 mEq/L): É A EMERGÊNCIA HIDROELETROLÍTICA MAIS LETAL! O risco de fibrilação ventricular ou assistolia súbita é iminente quando associada a alterações eletrocardiográficas.',
        'SEQUÊNCIA DE ALTERAÇÕES NO ECG: 1) Ondas T altas, apiculadas e simétricas ("em tenda", com base estreita); 2) Achatamento e desaparecimento da onda P com alargamento do intervalo PR; 3) Alargamento difuso do complexo QRS; 4) Fusão de QRS com a onda T formando um padrão sinusoidal característico pré-parada; 5) Fibrilação Ventricular ou Assistolia.',
        'O GLUCONATO DE CÁLCIO NÃO REDUZ O POTÁSSIO CORPORAL: ele apenas antagoniza os efeitos eletrofisiológicos do potássio na membrana do miócito cardíaco durante 30 a 60 minutos. É mandatório aplicar simultaneamente as medidas de shift intracelular (Insulina + Glicose, Beta-2 agonistas) e de eliminação (Furosemida ou Hemodiálise).',
        'INDICAÇÃO DE HEMODIÁLISE DE URGÊNCIA: Hipercalemia refratária com anúria, acidose metabólica severa ou insuficiência renal crônica em estágio terminal.'
      ],
      criteriosInternacao: [
        'Hipercalemia grave (K > 6,0 mEq/L) ou qualquer valor com alterações no ECG exige leito de sala vermelha / UTI.',
        'Insuficiência renal aguda anúrica associada.'
      ],
      examesRecomendados: [
        'Eletrocardiograma de 12 derivações IMEDIATO à beira-leito com monitorização multiparamétrica de ritmo.',
        'Gasometria venosa ou arterial (avaliar acidose metabólica concorrente, que piora a hipercalemia por troca de H+ por K+ celular).',
        'Ureia, creatinina sérica, sódio, cálcio iônico e fósforo.',
        'Coleta de potássio sérico sem garroteamento prolongado para afastar pseudohipercalemia por hemólise in vitro.'
      ],
      orientacoesNaoFarmacologicas: [
        'Suspender imediatamente qualquer reposição exógena de potássio ou medicamentos hipercalemiantes (espironolactona, IECA/BRA, anti-inflamatórios, trimetoprima).',
        'Restrição dietética rigorosa de alimentos ricos em potássio (banana, água de coco, tomate, laranja, chocolate).'
      ]
    }
  },
  {
    id: 'sepse_choque_septico',
    titulo: 'Sepse e Choque Séptico (Bundle da Primeira Hora)',
    categoria: 'Doenças Infecciosas',
    subtitulo: 'Ressuscitação volêmica (30 mL/kg), noradrenalina para PAM ≥ 65 mmHg e antibioticoterapia precoce de amplo espectro',
    paginaPdf: 76,
    opcoesPrescricao: [
      {
        id: 'sepse_bundle_inicial',
        titulo: 'Opção 1: Bundle da Primeira Hora (Ressuscitação Volêmica + Vasopressor)',
        subtitulo: 'Expansão com cristaloide 30 mL/kg nas primeiras 3h + Noradrenalina se PAM < 65 mmHg.',
        itens: [
          {
            farmacoId: 'soro_ev',
            tipoUso: 'agora',
            dose: 1000,
            unidade: 'ml',
            via: 'EV',
            intervalo: 24,
            observacaoUso: 'Infundir 30 mL/kg de SF 0,9% ou Ringer Lactato EV rápido nas primeiras 3 horas (ex: 2.000 mL para adulto de 70 kg) para hipotensão ou lactato arterial >= 4 mmol/L.'
          },
          {
            farmacoId: 'noradrenalina',
            tipoUso: 'continuo',
            dose: 8,
            unidade: 'mg',
            via: 'EV',
            intervalo: 24,
            observacaoUso: 'Diluir 2 ampolas de 4 mg (8 mg base) em 242 mL de SG 5% (32 mcg/mL). Iniciar em BIC a 0,05 a 0,1 mcg/kg/min (≈ 3 a 7 mL/h em 70 kg) e titular a cada 2 a 5 minutos buscando meta de PAM >= 65 mmHg.'
          }
        ]
      },
      {
        id: 'sepse_antibiotico_hospitalar',
        titulo: 'Opção 2: Antibioticoterapia de Amplo Espectro na Primeira Hora',
        subtitulo: 'Administrar Ceftriaxona ou Piperacilina-Tazobactam em até 60 minutos da suspeita.',
        itens: [
          {
            farmacoId: 'ceftriaxona',
            tipoUso: 'continuo',
            dose: 2000,
            unidade: 'mg',
            via: 'EV',
            intervalo: 24,
            dias: 7,
            observacaoUso: 'Dose de sepse: 2 g EV de 24/24h (ou Piperacilina-Tazobactam 4,5 g EV de 6/6h se foco intra-abdominal ou nosocomial). Infundir imediatamente após coleta de 2 pares de hemoculturas.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'EMERGÊNCIA MÉDICA TEMPO-DEPENDENTE: "Cada hora de atraso no antibiótico adequado eleva a mortalidade em cerca de 8%". BUNDLE DA PRIMEIRA HORA (Surviving Sepsis Campaign 2024): 1) Medir lactato sérico (remensurar em 2 a 4h se > 2 mmol/L); 2) Coletar 2 pares de hemoculturas antes do antibiótico (sem atrasar o início deste por mais de 45 min); 3) Administrar antibiótico de amplo espectro na 1ª hora; 4) Iniciar ressuscitação volêmica com 30 mL/kg de cristaloides para PAM < 65 ou lactato ≥ 4; 5) Iniciar vasopressor (Noradrenalina) se hipotensão refratária durante ou após volume para manter PAM ≥ 65 mmHg.',
        'CRITÉRIOS DE CHOQUE SÉPTICO: Sepse com hipotensão persistente necessitando de vasopressor para manter PAM ≥ 65 mmHg E lactato sérico > 2 mmol/L a despeito de ressuscitação volêmica adequada.',
        'CORTICOTERAPIA DE RESGATE: Se choque séptico refratário a altas doses de Noradrenalina (> 0,25 mcg/kg/min), iniciar Hidrocortisona 200 mg/dia EV (50 mg EV de 6/6h ou infusão contínua).'
      ],
      criteriosInternacao: [
        'Indicação absoluta e imediata de vaga de UTI.',
        'Necessidade de drogas vasoativas contínuas e monitorização hemodinâmica invasiva.'
      ],
      examesRecomendados: [
        'Gasometria arterial com dosagem seriada de Lactato.',
        'Dois pares de Hemoculturas de sítios anatômicos distintos.',
        'Culturas específicas do foco suspeito: Urocultura, cultura de escarro/secreção traqueal, cultura de ferida.',
        'Hemograma completo, coagulograma (avaliar plaquetopenia e CIVD), bilirrubinas, ureia e creatinina (escore SOFA).',
        'Radiografia de tórax e exames de imagem direcionados ao foco infeccioso.'
      ],
      orientacoesNaoFarmacologicas: [
        'Garantir 2 acessos venosos periféricos calibrosos (gelco 14 ou 16G) enquanto se providencia cateter venoso central (CVC).',
        'Instalação de Sonda Vesical de Demora para monitorização estrita do débito urinário horário (meta: > 0,5 mL/kg/h).',
        'Oxigenoterapia sob máscara ou suporte ventilatório para manter SatO2 > 92%.'
      ]
    }
  }
];

export default protocolosUrinarioEndocrino;
