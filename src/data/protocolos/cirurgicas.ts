import { ProtocoloConduta } from '../../types/protocolos';

export const protocolosCirurgicas: ProtocoloConduta[] = [
  {
    id: 'colecistite_colangite',
    titulo: 'Colecistite Aguda e Colangite na Emergência',
    categoria: 'Alterações Cirúrgicas',
    subcategoria: 'Vias Biliares e Abdome Agudo Inflamatório',
    paginaPdf: 39,
    descricao: 'Abordagem na UPA: jejum, hidratação venosa, analgesia potente e antibioticoterapia para germes entéricos.',
    opcoesPrescricao: [
      {
        id: 'colecistite_ceftriaxona_metro',
        titulo: 'Opção 1 - Ceftriaxona + Metronidazol + Dipirona EV',
        subtitulo: 'Esquema de primeira linha para colecistite aguda com cobertura para gram-negativos e anaeróbios',
        itens: [
          {
            farmacoId: 'ceftriaxona',
            forma: 'fap',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            modo: 'continuo',
            freq: 2,
            dias: 7,
            orientacaoExtra: 'Infundir 1g EV diluído em 100 mL de SF 0,9% em 30 a 60 minutos de 12/12h.'
          },
          {
            farmacoId: 'metronidazol',
            forma: 'fap',
            dose: 500,
            unidade: 'mg',
            via: 'EV',
            modo: 'continuo',
            freq: 3,
            dias: 7,
            orientacaoExtra: 'Infundir 500 mg EV (1 bolsa pronta de 100 mL) em 30 a 60 minutos de 8/8h.'
          },
          {
            farmacoId: 'dipirona',
            forma: 'amp',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            modo: 'sn',
            freq: 4,
            condicao: 'dor em hipocôndrio direito ou febre'
          },
          {
            farmacoId: 'metoclopramida',
            forma: 'amp',
            dose: 10,
            unidade: 'mg',
            via: 'EV',
            modo: 'sn',
            freq: 3,
            condicao: 'náuseas ou vômitos'
          }
        ]
      },
      {
        id: 'colecistite_cipro_metro',
        titulo: 'Opção 2 - Ciprofloxacino EV + Metronidazol EV',
        subtitulo: 'Opção alternativa para alérgicos a cefalosporinas/penicilinas',
        itens: [
          {
            farmacoId: 'ciprofloxacino',
            forma: 'bolsa',
            dose: 400,
            unidade: 'mg',
            via: 'EV',
            modo: 'continuo',
            freq: 2,
            dias: 7,
            orientacaoExtra: 'Infundir bolsa de 400 mg EV em 60 minutos de 12/12h.'
          },
          {
            farmacoId: 'metronidazol',
            forma: 'fap',
            dose: 500,
            unidade: 'mg',
            via: 'EV',
            modo: 'continuo',
            freq: 3,
            dias: 7
          },
          {
            farmacoId: 'dipirona',
            forma: 'amp',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            modo: 'sn',
            freq: 4,
            condicao: 'dor ou febre'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'Sinal de Murphy positivo (interrupção súbita da inspiração profunda durante palpação do hipocôndrio direito)',
        'Tríade de Charcot (dor no HCD + febre com calafrios + icterícia): indica Colangite Aguda (urgência de descompressão biliar)',
        'Pêntade de Reynolds (Tríade de Charcot + hipotensão/choque séptico + confusão mental): Colangite Tóxica Supurativa com risco iminente de óbito',
        'Vesícula palpável e dolorosa com plastrão inflamatório',
        'Leucocitose > 18.000 ou sinais de peritonite localizada/generalizada (risco de gangrena ou perfuração de vesícula)'
      ],
      examesSolicitar: [
        'Ultrassonografia (USG) de abdome superior: exame de escolha (espessamento da parede da vesícula > 4 mm, cálculo impactado no infundíbulo, líquido pericolecístico e sinal de Murphy ultrassonográfico)',
        'Hemograma completo, PCR, Bilirrubinas totais e frações, Fosfatase Alcalina, Gama-GT, Amilase e Lipase (para descartar pancreatite biliar)',
        'Ureia, Creatinina, Eletrólitos e Coagulograma (TAP/INR)'
      ],
      orientacoesNaoFarmacologicas: [
        'Dieta zero absoluta imediata',
        'Instalar hidratação venosa vigorosa com SF 0,9% ou Ringer Lactato',
        'Solicitar avaliação cirúrgica urgente para colecistectomia videolaparoscópica de urgência',
        'Se colangite: preparar para CPRE (colangiopancreatografia retrógrada endoscópica) de urgência para drenagem biliar'
      ]
    }
  },
  {
    id: 'apendicite_aguda',
    titulo: 'Apendicite Aguda na Emergência',
    categoria: 'Alterações Cirúrgicas',
    subcategoria: 'Abdome Agudo Cirúrgico',
    paginaPdf: 39,
    descricao: 'Estratificação clínica (Escore de Alvarado), jejum, analgesia venosa e preparo pré-operatório imediato.',
    opcoesPrescricao: [
      {
        id: 'apendicite_esquema_upa',
        titulo: 'Esquema de Entrada na UPA (Analgesia + Hidratação + Suporte)',
        subtitulo: 'Medidas imediatas enquanto aguarda vaga cirúrgica / centro cirúrgico',
        itens: [
          {
            farmacoId: 'dipirona',
            forma: 'amp',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            modo: 'sn',
            freq: 4,
            condicao: 'dor em fossa ilíaca direita ou febre'
          },
          {
            farmacoId: 'cetoprofeno',
            forma: 'amp',
            dose: 100,
            unidade: 'mg',
            via: 'EV',
            modo: 'continuo',
            freq: 2,
            dias: 2,
            orientacaoExtra: 'Diluir em 100 mL de SF 0,9% e infundir em 30 minutos de 12/12h se não houver contraindicação renal.'
          },
          {
            farmacoId: 'tramadol',
            forma: 'amp',
            dose: 100,
            unidade: 'mg',
            via: 'EV',
            modo: 'sn',
            freq: 3,
            condicao: 'dor refratária de forte intensidade',
            orientacaoExtra: 'Diluir em 100 mL de SF 0,9% e infundir lentamente em 30 minutos. Não fazer bolus rápido para evitar náuseas.'
          },
          {
            farmacoId: 'metoclopramida',
            forma: 'amp',
            dose: 10,
            unidade: 'mg',
            via: 'EV',
            modo: 'sn',
            freq: 3,
            condicao: 'náuseas ou vômitos'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'Escore de Alvarado: Sintomas (Dor migratória para FID: 1; Anorexia: 1; Náuseas/Vômitos: 1) + Sinais (Dor à palpação na FID: 2; Descompressão dolorosa / Blumberg: 1; Febre > 37,3°C: 1) + Laboratório (Leucocitose > 10.000: 2; Desvio à esquerda: 1). Escore >= 7: probabilidade muito alta de apendicite',
        'Sinal de Blumberg positivo (descompressão súbita dolorosa no ponto de McBurney)',
        'Sinal de Rovsing (palpação da fossa ilíaca esquerda gera dor na fossa ilíaca direita por deslocamento de gás)',
        'Sinal do Obturador e Sinal do Psoas positivos',
        'Abdome em tábua ou defesa involuntária difusa: indica perfuração com peritonite generalizada'
      ],
      examesSolicitar: [
        'Hemograma completo (leucocitose importante com neutrofilia e desvio à esquerda)',
        'Proteína C Reativa (PCR elevada)',
        'EAS / Urina 1 (pode apresentar piúria discreta por contiguidade ureteral, mas afasta infecção urinária maciça)',
        'Beta-hCG em mulheres em idade fértil (obrigatório para afastar gravidez ectópica)',
        'Ultrassonografia de abdome (apêndice não compressível com diâmetro > 6 mm, espessamento de parede e borramento de gordura) ou TC de abdome com contraste'
      ],
      orientacoesNaoFarmacologicas: [
        'Manter em DIETA ZERO rigorosa desde a suspeita',
        'Instalar acesso venoso periférico calibroso e iniciar hidratação com soro fisiológico',
        'Encaminhamento cirúrgico imediato para apendicectomia de urgência'
      ]
    }
  },
  {
    id: 'pancreatite_aguda',
    titulo: 'Pancreatite Aguda na Urgência',
    categoria: 'Alterações Cirúrgicas',
    subcategoria: 'Abdome Agudo Pancreático',
    paginaPdf: 39,
    descricao: 'Ressuscitação volêmica vigorosa, analgesia parenteral e monitorização precoce de disfunções orgânicas.',
    opcoesPrescricao: [
      {
        id: 'pancreatite_analgesia_suporte',
        titulo: 'Esquema de Suporte Inicial - Analgesia Escalonada + Antiemético',
        subtitulo: 'Controle de dor em barra no andar superior do abdome e controle sintomático',
        itens: [
          {
            farmacoId: 'dipirona',
            forma: 'amp',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            modo: 'sn',
            freq: 4,
            condicao: 'dor abdominal ou febre'
          },
          {
            farmacoId: 'tramadol',
            forma: 'amp',
            dose: 100,
            unidade: 'mg',
            via: 'EV',
            modo: 'sn',
            freq: 3,
            condicao: 'dor intensa em barra refratária a dipirona',
            orientacaoExtra: 'Infundir 100 mg diluído em 100 mL de SF 0,9% em 30 minutos.'
          },
          {
            farmacoId: 'escopolamina',
            forma: 'amp',
            dose: 20,
            unidade: 'mg',
            via: 'EV',
            modo: 'sn',
            freq: 3,
            condicao: 'cólica e desconforto espasmódico associado'
          },
          {
            farmacoId: 'metoclopramida',
            forma: 'amp',
            dose: 10,
            unidade: 'mg',
            via: 'EV',
            modo: 'sn',
            freq: 3,
            condicao: 'náuseas e vômitos incoercíveis'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'Diagnóstico (2 de 3 critérios): 1) Dor típica em barra no epigástrio irradiando para o dorso; 2) Amilase ou Lipase >= 3 vezes o limite superior da normalidade; 3) Imagem compatível (USG ou TC)',
        'Sinais de gravidade hemorrágica retroperitoneal: Sinal de Cullen (equimose periumbilical) e Sinal de Grey-Turner (equimose nos flancos)',
        'Critérios de Ranson na admissão (Idade > 55, Leucócitos > 16.000, Glicemia > 200, AST > 250, DHL > 350) e Escore BISAP',
        'Disfunção orgânica persistente > 48h (choque, insuficiência respiratória PaO2/FiO2 <= 300, insuficiência renal com Cr > 2 mg/dL): Pancreatite Aguda Grave'
      ],
      examesSolicitar: [
        'Lipase e Amilase séricas (Lipase é mais sensível e permanece elevada por mais tempo)',
        'Hemograma completo, Hematócrito (hemoconcentração reflete perda para terceiro espaço)',
        'Ureia, Creatinina, Eletrólitos (cálcio sérico - risco de hipocalcemia por saponificação de gordura)',
        'Bilirrubinas, Fosfatase Alcalina, Gama-GT, TGO e TGP (investigação de etiologia biliar)',
        'Gasometria arterial, Glicemia e PCR sérica',
        'TC de abdome com contraste (indicada após 48 a 72h se dúvida diagnóstica ou piora clínica para avaliar necrose)'
      ],
      orientacoesNaoFarmacologicas: [
        'Ressuscitação volêmica vigorosa com Ringer Lactato (200 a 500 mL/h nas primeiras 12 a 24h, guiada por débito urinário > 0,5 a 1 mL/kg/h)',
        'Dieta zero inicial; reiniciar nutrição oral assim que a dor ceder e não houver íleo paralítico (dieta sólida/límpida precoce reduz translocação bacteriana)',
        'Antibioticoprofilaxia de rotina NÃO é recomendada (mesmo em pancreatite necrotizante estéril)'
      ]
    }
  },
  {
    id: 'cirrose_ascite_descompensada',
    titulo: 'Cirrose Hepática com Ascite e Encefalopatia',
    categoria: 'Alterações Cirúrgicas',
    subcategoria: 'Hepatologia e Complicações da Hipertensão Portal',
    paginaPdf: 40,
    descricao: 'Manejo de ascite com espironolactona e furosemida, lactulose na encefalopatia e profilaxia de varizes.',
    opcoesPrescricao: [
      {
        id: 'cirrose_manejo_ambulatorial',
        titulo: 'Manejo Clínico Oral - Espironolactona + Furosemida + Lactulose + Propranolol',
        subtitulo: 'Esquema ambulatorial padrão para controle de ascite e profilaxia de descompensação',
        itens: [
          {
            farmacoId: 'espironolactona',
            forma: 'cp',
            dose: 100,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 1,
            usoContinuo: true,
            orientacaoExtra: 'Tomar 100 mg pela manhã. Dose pode ser ajustada a cada 3 a 5 dias (máx. 400 mg/dia).'
          },
          {
            farmacoId: 'furosemida',
            forma: 'cp',
            dose: 40,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 1,
            usoContinuo: true,
            orientacaoExtra: 'Tomar 1 comprimido (40 mg) pela manhã junto com a espironolactona (relação clássica 100:40).'
          },
          {
            farmacoId: 'lactulose',
            forma: 'sol',
            dose: 20,
            unidade: 'ml',
            via: 'VO',
            modo: 'continuo',
            freq: 3,
            usoContinuo: true,
            orientacaoExtra: 'Tomar 20 mL de 8 em 8 horas. Ajustar a dose para atingir a meta de 2 a 3 evacuações pastosas ao dia.'
          },
          {
            farmacoId: 'propranolol',
            forma: 'cp',
            dose: 20,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 2,
            usoContinuo: true,
            orientacaoExtra: 'Tomar meio comprimido de 40 mg (20 mg) de 12 em 12 horas para controle da pressão portal (meta de FC entre 55 e 60 bpm).'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'Suspeita de Peritonite Bacteriana Espontânea (PBE): dor abdominal difusa, febre, encefalopatia sem causa aparente ou piora da função renal -> PARACENTESE DIAGNÓSTICA OBRIGATÓRIA (PBE confirmada se polimorfonucleares na ascite >= 250/mm³)',
        'Sinais de Encefalopatia Hepática (Classificação de West Haven): sonolência, inversão do ciclo sono-vigília, asterixis/flapping, confusão ou coma',
        'Síndrome Hepatorrenal (aumento agudo da creatinina sem proteinúria nem resposta à expansão com albumina)',
        'Hemorragia digestiva por ruptura de varizes esofágicas'
      ],
      examesSolicitar: [
        'Paracentese diagnóstica (análise do líquido ascítico: citologia com contagem de leucócitos e polimorfonucleares, dosagem de albumina e proteína total, GASA, bacterioscopia e cultura em frasco de hemocultura)',
        'GASA (Gradiente de Albumina Soro-Ascite): >= 1,1 g/dL confirma hipertensão portal',
        'Hemograma, Coagulograma (TAP/INR), Ureia, Creatinina, Sódio e Potássio'
      ],
      orientacoesNaoFarmacologicas: [
        'Restrição de sódio na dieta (máximo 2 g de sal de cozinha / dia)',
        'Restrição hídrica somente se houver hiponatremia hipervolêmica importante (Na+ < 125 mEq/L)',
        'Paracentese de grande volume (> 5 Litros): REPOR ALBUMINA HUMANA 20% EV na dose de 8 g a 10 g por litro de líquido ascítico retirado (ex: para 6L retirados, infundir 48g de albumina = cerca de 2 a 3 frascos)'
      ]
    }
  },
  {
    id: 'hda_hemorragia_digestiva',
    titulo: 'HDA (Hemorragia Digestiva Alta) - Úlcera e Varizes',
    categoria: 'Alterações Cirúrgicas',
    subcategoria: 'Emergências Hemorrágicas Gastrointestinais',
    paginaPdf: 40,
    descricao: 'Ressuscitação hemodinâmica, inibidor de bomba de prótons em altas doses, vasoconstritores esplâncnicos e preparo para EDA.',
    opcoesPrescricao: [
      {
        id: 'hda_ulcera_omeprazol',
        titulo: 'HDA por Úlcera Péptica - Omeprazol Altas Doses + Ácido Tranexâmico',
        subtitulo: 'Conduta venosa para estabilização de sangramento digestivo alto não varicoso',
        itens: [
          {
            farmacoId: 'omeprazol',
            forma: 'fap',
            dose: 40,
            unidade: 'mg',
            via: 'EV',
            modo: 'continuo',
            freq: 2,
            dias: 3,
            orientacaoExtra: 'Ataque inicial: 80 mg EV em bolus agora. Manutenção: 40 mg EV diluído em 100 mL de SF 0,9% de 12 em 12 horas.'
          },
          {
            farmacoId: 'acido_tranexamico',
            forma: 'amp',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            modo: 'agora',
            freq: 1,
            orientacaoExtra: 'Infundir 1000 mg EV diluído em 100 mL de SF 0,9% em 20 minutos.'
          },
          {
            farmacoId: 'metoclopramida',
            forma: 'amp',
            dose: 10,
            unidade: 'mg',
            via: 'EV',
            modo: 'sn',
            freq: 3,
            condicao: 'náuseas ou vômitos com sangue'
          }
        ]
      },
      {
        id: 'hda_varizes_ceftriaxona',
        titulo: 'HDA Varicosa (Cirrótico) - Ceftriaxona Profilática + Suporte',
        subtitulo: 'Antibioticoterapia profilática obrigatória para reduzir mortalidade e ressangramento',
        itens: [
          {
            farmacoId: 'ceftriaxona',
            forma: 'fap',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            modo: 'continuo',
            freq: 1,
            dias: 7,
            orientacaoExtra: 'Infundir 1g EV de 24/24h (ou 12/12h conforme gravidade). Profilaxia de peritonite bacteriana e sepse.'
          },
          {
            farmacoId: 'omeprazol',
            forma: 'fap',
            dose: 40,
            unidade: 'mg',
            via: 'EV',
            modo: 'continuo',
            freq: 2,
            dias: 3
          },
          {
            farmacoId: 'propranolol',
            forma: 'cp',
            dose: 20,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 2,
            usoContinuo: true,
            orientacaoExtra: 'Iniciar apenas após cessação completa do sangramento e estabilização hemodinâmica para profilaxia secundária.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'Hematêmese volumosa ativa ou vômitos em borra de café com instabilidade hemodinâmica (PAS < 90 mmHg, FC > 100 bpm, síncope ou palidez intensa)',
        'Melena volumosa com repercussão sistêmica',
        'Escore de Rockall e Escore de Glasgow-Blatchford para estratificação de risco de ressangramento e mortalidade',
        'Cirrótico com varizes esofágicas tem alto risco de choque hipovolêmico e descompensação hepática aguda (PBE e encefalopatia)'
      ],
      examesSolicitar: [
        'Hemograma completo em série (hematócrito inicial pode ser normal antes da hemodiluição compensatória)',
        'Tipagem sanguínea (ABO/Rh) e prova cruzada com reserva de pelo menos 2 a 4 concentrados de hemácias',
        'Coagulograma completo (TAP, INR, TTPa), Ureia e Creatinina (elevação desproporcional da ureia em relação à creatinina é típica da digestão de sangue no TGI)',
        'Eletrólitos e Gasometria arterial com lactato sérico'
      ],
      orientacoesNaoFarmacologicas: [
        'DIETA ZERO rigorosa e oxigenoterapia se SpO2 < 92%',
        'Dois acessos venosos periféricos calibrosos (jelco 14 ou 16G)',
        'Passagem de sonda nasogástrica calibrosa e lavagem gástrica suave com soro fisiológico',
        'Acionar imediatamente o serviço de Endoscopia Digestiva Alta (EDA deve ser realizada nas primeiras 12 a 24 horas)',
        'Meta transfusional conservadora: manter hemoglobina (Hb) entre 7 e 9 g/dL (evitar supertransfusão em cirróticos pelo aumento da pressão portal)'
      ]
    }
  },
  {
    id: 'hernia_nao_encarcerada',
    titulo: 'Hérnia da Parede Abdominal Não Encarcerada',
    categoria: 'Alterações Cirúrgicas',
    subcategoria: 'Parede Abdominal e Hérnias',
    paginaPdf: 39,
    descricao: 'Abordagem ambulatorial de hérnias redutíveis (inguinal, umbilical, epigástrica, incisional), alívio sintomático e sinais de alarme para emergência cirúrgica.',
    opcoesPrescricao: [
      {
        id: 'hernia_ambulatorial',
        titulo: 'Conduta Ambulatorial UPA - Analgesia se Dor + Orientações',
        subtitulo: 'Alívio sintomático de desconforto leve a moderado em hérnia livremente redutível',
        itens: [
          {
            farmacoId: 'cetoprofeno',
            forma: 'cp',
            dose: 150,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 2,
            condicao: 'dor ou desconforto'
          },
          {
            farmacoId: 'dipirona',
            forma: 'cp',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'dor'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'SINAIS DE ENCARCERAMENTO / ESTRANGULAMENTO (EMERGÊNCIA CIRÚRGICA IMEDIATA):',
        '1. Dor súbita, intensa e contínua sobre a hérnia ou no abdome;',
        '2. Irredutibilidade: o abaulamento não retorna para dentro da cavidade mesmo em decúbito dorsal relaxado;',
        '3. Hiperemia, calor local, edema ou alteração da coloração da pele overlying;',
        '4. Sinais de obstrução mecânica em alça: parada de eliminação de gases e fezes, vômitos copiosos/fecaloides e distensão abdominal pronunciada.'
      ],
      orientacoesNaoFarmacologicas: [
        'Evitar esforços físicos extenuantes, levantamento de pesos excessivos e esforço evacuatório;',
        'Tratar tosse persistente e constipação intestinal para não aumentar cronicamente a pressão intra-abdominal;',
        'Encaminhamento ambulatorial eletivo para a Unidade Básica de Saúde (Posto de Saúde) para agendamento de hernioplastia eletiva com a Cirurgia Geral;',
        'Orientar retorno imediato à UPA se o abaulamento ficar endurecido, não voltar mais para dentro da barriga ou apresentar dor intensa.'
      ]
    }
  }
];
