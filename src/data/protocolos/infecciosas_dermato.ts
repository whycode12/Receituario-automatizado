import { ProtocoloConduta } from '../../types/protocolos';

export const protocolosInfecciosasDermato: ProtocoloConduta[] = [
  {
    id: 'dengue',
    titulo: 'Dengue - Classificação e Manejo Clínico (Grupos A, B, C e D do MS)',
    categoria: 'Doenças Infecciosas',
    subtitulo: 'Estratificação de risco do Ministério da Saúde: hidratação oral precoce, sinais de alarme e conduta no choque',
    paginaPdf: 63,
    opcoesPrescricao: [
      {
        id: 'dengue_grupo_a',
        titulo: 'Opção 1: Grupo A (Ambulatorial sem Alarme e sem Comorbidades)',
        subtitulo: 'Tratamento domiciliar com hidratação oral vigorosa (60 mL/kg/dia) + sintomáticos seguros.',
        itens: [
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido de 1.000 mg (ou 2 de 500 mg) VO se febre ou mialgia intensa, podendo repetir a cada 6 horas.'
          },
          {
            farmacoId: 'metoclopramida',
            tipoUso: 'se_necessario',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            intervalo: 8,
            observacaoUso: 'Tomar 1 comprimido de 10 mg VO se náuseas ou vômitos.'
          },
          {
            farmacoId: 'sro',
            tipoUso: 'continuo',
            dose: 250,
            unidade: 'ml',
            via: 'VO',
            intervalo: 2,
            dias: 5,
            observacaoUso: 'Diluir 1 envelope em 1 litro de água filtrada ou fervida. Ingerir no mínimo 60 mL/kg/dia (cerca de 3 a 4 litros para adultos: 1/3 com SRO e 2/3 com água, sucos de frutas ou água de coco).'
          }
        ]
      },
      {
        id: 'dengue_grupo_b',
        titulo: 'Opção 2: Grupo B (Comorbidades, Idosos ou Prova do Laço Positiva)',
        subtitulo: 'Hidratação oral supervisionada na UPA + Hemograma urgente (vigilância de hematócrito).',
        itens: [
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido de 1.000 mg VO se dor ou febre.'
          },
          {
            farmacoId: 'sro',
            tipoUso: 'continuo',
            dose: 250,
            unidade: 'ml',
            via: 'VO',
            intervalo: 2,
            dias: 5,
            observacaoUso: 'Iniciar hidratação oral imediata no leito da UPA (80 mL/kg/dia) enquanto aguarda resultado do hemograma.'
          }
        ]
      },
      {
        id: 'dengue_grupo_c',
        titulo: 'Opção 3: Grupo C (Com Sinais de Alarme - Internação Imediata)',
        subtitulo: 'Dor abdominal contínua, vômitos persistentes, lipotímia, hepatomegalia ou sangramento de mucosa.',
        itens: [
          {
            farmacoId: 'soro_ev',
            tipoUso: 'agora',
            dose: 1000,
            unidade: 'ml',
            via: 'EV',
            intervalo: 24,
            observacaoUso: 'Infundir 10 mL/kg de SF 0,9% ou Ringer Lactato EV na 1ª hora (fase de expansão rápida). Repetir se necessário conforme hematócrito e resposta clínica.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            intervalo: 6,
            observacaoUso: '1 ampola (1.000 mg/2 mL) diluída em 18 mL de SF 0,9% EV se febre ou dor intensa.'
          }
        ]
      },
      {
        id: 'dengue_grupo_d',
        titulo: 'Opção 4: Grupo D (Choque Hipotensivo / Dengue Grave)',
        subtitulo: 'Extremidades frias, pulso filiforme, PA convergente ou hipotensão: UTI + ressuscitação agressiva.',
        itens: [
          {
            farmacoId: 'soro_ev',
            tipoUso: 'agora',
            dose: 1000,
            unidade: 'ml',
            via: 'EV',
            intervalo: 24,
            observacaoUso: 'Infundir 20 mL/kg de Ringer Lactato ou SF 0,9% EV rápido em 20 minutos. Pode repetir até 3 vezes se persistirem sinais de hipoperfusão tecidual.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'PROIBIDO O USO DE AINEs E AAS: Ácido acetilsalicílico, ibuprofeno, cetoprofeno, diclofenaco e corticoides são PROIBIDOS na dengue (aumentam drasticamente o risco de sangramento gastrointestinal, hemorragia grave e falência plaquetária).',
        'SINAIS DE ALARME DA DENGUE: Dor abdominal intensa e contínua, vômitos persistentes (> 3 episódios em 1h), acúmulo de líquidos (ascite, derrame pleural, derrame pericárdico), hipotensão postural ou lipotímia, hepatomegalia dolorosa > 2 cm abaixo do rebordo costal, sangramento de mucosa (gengivorragia, epistaxe, metrorragia), letargia ou irritabilidade e aumento progressivo do hematócrito.',
        'O choque na dengue ocorre tipicamente entre o 3º e 6º dia de doença, na fase de defervescência da febre (quando a febre cede, a permeabilidade capilar atinge o pico!).'
      ],
      criteriosInternacao: [
        'Grupo C (qualquer sinal de alarme presente): leito de enfermaria/observação por no mínimo 48 horas.',
        'Grupo D (choque ou sangramento grave): leito de UTI imediato.',
        'Impossibilidade de hidratação oral ambulatorial, presença de comorbidades descompensadas, gestantes ou extremos de idade.'
      ],
      examesRecomendados: [
        'Hemograma completo (vigiar Hematócrito: hemoconcentração com aumento > 10-20% do basal indica extravasamento plasmático; vigiar Plaquetas: queda progressiva < 100.000/mm³).',
        'Antígeno NS1 da Dengue (positivo do 1º ao 5º dia de sintomas) e Sorologia IgM/IgG (a partir do 6º dia).',
        'Enzimas hepáticas (TGO e TGP), ureia, creatinina e coagulograma.',
        'Ultrassonografia de abdome (pesquisa de líquido livre na cavidade, espessamento da parede da vesícula biliar) e Raio-X de tórax (pesquisa de derrame pleural).'
      ],
      orientacoesNaoFarmacologicas: [
        'Orientar o paciente do Grupo A a retornar IMEDIATAMENTE ao pronto-socorro se surgir qualquer sinal de alarme.',
        'Repouso relativo e uso de repelentes para evitar transmissão intra-domiciliar pelo mosquito Aedes aegypti.',
        'Eliminar criadouros de água parada no domicílio.'
      ]
    }
  },
  {
    id: 'chikungunya',
    titulo: 'Chikungunya - Manejo da Dor Articular Aguda e Artrite',
    categoria: 'Doenças Infecciosas',
    subtitulo: 'Febre alta de início súbito acompanhada de poliartralgia intensa, simétrica e incapacitante',
    paginaPdf: 65,
    opcoesPrescricao: [
      {
        id: 'chiku_dor_moderada',
        titulo: 'Opção 1: Dor Moderada / Analgesia Escalonada (Dipirona + Paracetamol)',
        subtitulo: 'Associação intercalada de analgésicos de primeira linha na fase aguda febril.',
        itens: [
          {
            farmacoId: 'dipirona',
            tipoUso: 'continuo',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 1.000 mg (ou 2 de 500 mg) VO de 6 em 6 horas. Sugestão de horários: 6h, 12h, 18h, 00h.'
          },
          {
            farmacoId: 'paracetamol',
            tipoUso: 'se_necessario',
            dose: 750,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido de 750 mg VO intercalado com a dipirona nos intervalos de pico de dor (máx 3 g/dia).'
          }
        ]
      },
      {
        id: 'chiku_dor_intensa',
        titulo: 'Opção 2: Dor Articular Severa Refratária (Paracetamol + Codeína)',
        subtitulo: 'Adição de opióide fraco para dor incapacitante que impede deambulação e sono.',
        itens: [
          {
            farmacoId: 'codeina',
            tipoUso: 'se_necessario',
            dose: 30,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido de 30 mg associado ao paracetamol 500 mg VO se dor articular intensa incapacitante, podendo repetir a cada 6 a 8 horas.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'continuo',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            dias: 5,
            observacaoUso: 'Manter analgesia de base com dipirona 1.000 mg de 6/6h.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'EVITAR AINEs NA FASE AGUDA (primeiros 7 a 14 dias): até afastar com segurança infecção concomitante por Dengue devido ao risco hemorrágico.',
        'A poliartralgia da Chikungunya é caracteristicamente simétrica, acometendo principalmente punhos, tornozelos e pequenas articulações das mãos e pés, com edema periarticular acentuado.',
        'Fases da Chikungunya: Aguda (dias 1 a 14), Pós-Aguda (semana 3 até final do 3º mês) e Crônica (> 3 meses com artrite persistente, onde AINEs e corticoides orais ou metotrexato podem ser introduzidos por especialista).'
      ],
      criteriosInternacao: [
        'Idosos com desidratação secundária à imobilidade por dor intensa.',
        'Suspeita de manifestações atípicas graves: meningoencefalite, miocardite ou choque.',
        'Gestantes em trabalho de parto (risco de transmissão vertical intraparto com forma neonatal grave).'
      ],
      examesRecomendados: [
        'Hemograma e plaquetas (ao contrário da dengue, a plaquetopenia intensa é rara na Chikungunya).',
        'RT-PCR para Chikungunya (até o 5º dia de febre) ou Sorologia IgM (a partir do 6º dia).',
        'Ureia, creatinina e transaminases hepáticas.'
      ],
      orientacoesNaoFarmacologicas: [
        'Repouso articular relativo na fase aguda; aplicar compressas frias locais sobre as articulações inflamadas para alívio álgico (não usar compressas quentes na fase inflamatória aguda).',
        'Hidratação oral abundante (2 a 3 litros/dia).',
        'Fisioterapia motora precoce suave assim que houver redução do quadro álgico agudo.'
      ]
    }
  },
  {
    id: 'zika_virus',
    titulo: 'Zika Vírus e Exantema Agudo com Prurido',
    categoria: 'Doenças Infecciosas',
    subtitulo: 'Exantema maculopapular pruriginoso, febre baixa/ausente, hiperemia conjuntival não purulenta',
    paginaPdf: 66,
    opcoesPrescricao: [
      {
        id: 'zika_sintomatico',
        titulo: 'Opção 1: Manejo Sintomático (Dipirona + Hidroxizina)',
        subtitulo: 'Alívio do prurido cutâneo intenso e da febre baixa/artralgia.',
        itens: [
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido de 1.000 mg se dor de cabeça, febre ou dor no corpo.'
          },
          {
            farmacoId: 'hidroxizina',
            tipoUso: 'continuo',
            dose: 25,
            unidade: 'mg',
            via: 'VO',
            intervalo: 8,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 25 mg VO a cada 8 a 12 horas (ou à noite) se coceira e vermelhidão na pele. Sugestão de horários: 6h, 14h, 22h.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'ALERTA EM GESTANTES: O vírus Zika possui tropismo por células progenitoras neurais fetais, podendo causar Síndrome Congênita do Zika Vírus (microcefalia, atrofia cerebral, calcificações subcorticais e alterações oculares). Notificação compulsória imediata e encaminhamento para pré-natal de alto risco.',
        'COMPLICAÇÕES NEUROLÓGICAS: Síndrome de Guillain-Barré (paralisia flácida arrefléxica ascendente que surge tipicamente 1 a 3 semanas após o quadro infeccioso exantemático). Encaminhar para UTI se fraqueza muscular ascendente progressiva ou dispneia.',
        'Não utilizar aspirina ou AINEs na fase aguda.'
      ],
      criteriosInternacao: [
        'Sinais de acometimento neurológico motor ascendente (suspeita de Guillain-Barré) ou encefalite.',
        'Gestantes com sinais de sofrimento fetal ou desidratação.'
      ],
      examesRecomendados: [
        'RT-PCR para Zika em sangue e urina (até o 7º dia do início dos sintomas).',
        'Sorologia IgM a partir do 6º dia.',
        'Ultrassonografia obstétrica morfológica em gestantes expostas.'
      ],
      orientacoesNaoFarmacologicas: [
        'Banhos mornos ou frios com sabonete neutro e hidratação da pele para diminuir o prurido.',
        'Uso contínuo de repelentes adequados e roupas de mangas longas.',
        'Evitar coçar as lesões para prevenir infecção bacteriana secundária (impetiginização).'
      ]
    }
  },
  {
    id: 'otite_externa',
    titulo: 'Otite Externa Aguda (OEA - "Ouvido de Nadador")',
    categoria: 'Doenças Infecciosas',
    subtitulo: 'Dor auricular intensa à tração do trago/pavilhão e otorreia: gotas tópicas otológicas antimicrobianas',
    paginaPdf: 67,
    opcoesPrescricao: [
      {
        id: 'oea_cipro_dexa',
        titulo: 'Opção 1: Gotas de Ciprofloxacino + Dexametasona (1ª Escolha Segura)',
        subtitulo: 'Excelente cobertura para Pseudomonas aeruginosa e S. aureus sem risco de ototoxicidade.',
        itens: [
          {
            farmacoId: 'ciprofloxacino-dexametasona',
            tipoUso: 'continuo',
            dose: 4,
            unidade: 'gotas',
            via: 'OTOLOGICA',
            intervalo: 12,
            dias: 7,
            observacaoUso: 'Instilar 4 gotas no conduto auditivo afetado de 12 em 12 horas por 7 dias seguidos. Sugestão de horários: 8h e 20h.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido de 1.000 mg se dor de ouvido.'
          }
        ]
      },
      {
        id: 'oea_polimixina_neomicina',
        titulo: 'Opção 2: Polimixina B + Neomicina + Hidrocortisona (Otosporin®)',
        subtitulo: 'Opção clássica e acessível (utilizar APENAS com membrana timpânica sabidamente íntegra).',
        itens: [
          {
            farmacoId: 'polimixina-neomicina-hidrocortisona',
            tipoUso: 'continuo',
            dose: 4,
            unidade: 'gotas',
            via: 'OTOLOGICA',
            intervalo: 6,
            dias: 7,
            observacaoUso: 'Pingar 3 a 4 gotas no ouvido acometido de 6 em 6 horas por 7 a 10 dias. Proibido se perfuração timpânica. Sugestão de horários: 6h, 12h, 18h, 00h.'
          },
          {
            farmacoId: 'diclofenaco',
            tipoUso: 'continuo',
            dose: 50,
            unidade: 'mg',
            via: 'VO',
            intervalo: 8,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 50 mg de 8 em 8 horas por 5 dias para controle do componente inflamatório/edema do conduto. Sugestão de horários: 6h, 14h, 22h.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'SINAL DO TRAGO POSITIVO: Dor intensa à palpação ou tração do trago e do pavilhão auricular é patognomônica de otite externa.',
        'CONTRAINDICAÇÃO FORMAL DE AMINOGLICOSÍDEOS SE PERFURAÇÃO TIMPÂNICA: Se houver suspeita ou certeza de perfuração da membrana timpânica, É PROIBIDO USAR gotas contendo neomicina, polimixina B ou gentamicina devido ao risco de OTOTOXICIDADE IRREVERSÍVEL (lesão coclear e vestibular com surdez). Nestes casos, a única opção segura é QUINOLONA OTOLÓGICA (Ciprofloxacino).',
        'OTITE EXTERNA MALIGNA / NECROTIZANTE: Em pacientes idosos, diabéticos descompensados ou imunodeprimidos com dor excruciante refratária e tecido de granulação no assoalho do conduto: pensar em osteomielite da base do crânio por Pseudomonas aeruginosa! Internação hospitalar urgente com Ciprofloxacino ou Ceftazidima/Cefepime EV.'
      ],
      criteriosInternacao: [
        'Suspeita de otite externa necrotizante/maligna.',
        'Celulite facial ou periauricular extensa associada.',
        'Febre alta e sintomas sistêmicos.'
      ],
      examesRecomendados: [
        'Otoscopia cuidadosa (avaliar edema circunferencial do conduto, restos epiteliais/otorreia e integridade timpânica).',
        'Glicemia de jejum em casos graves para afastar diabetes mellitus.',
        'Tomografia de ossos temporais se suspeita de mastoidite ou otite externa maligna.'
      ],
      orientacoesNaoFarmacologicas: [
        'MANTER O OUVIDO RIGOROSAMENTE SECO: Proibido molhar o canal auditivo durante o banho (proteger com algodão embebido em vaselina sólida ou óleo mineral) e evitar natação ou mergulho por pelo menos 14 dias.',
        'Como pingar as gotas: deitar com o ouvido afetado para cima, pingar as gotas e permanecer deitado de lado por 3 a 5 minutos para que o medicamento penetre profundamente.',
        'NÃO usar cotonetes ou introduzir grampos/palitos no canal do ouvido.'
      ]
    }
  },
  {
    id: 'otite_media',
    titulo: 'Otite Média Aguda (OMA)',
    categoria: 'Doenças Infecciosas',
    subtitulo: 'Otalgia aguda com abaulamento, hiperemia e opacidade da membrana timpânica: antibioticoterapia oral',
    paginaPdf: 68,
    opcoesPrescricao: [
      {
        id: 'oma_amoxicilina',
        titulo: 'Opção 1: Amoxicilina 500 mg (1ª Linha Padrão)',
        subtitulo: 'Tratamento de primeira escolha para Streptococcus pneumoniae e Haemophilus influenzae.',
        itens: [
          {
            farmacoId: 'amoxicilina',
            tipoUso: 'continuo',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            intervalo: 8,
            dias: 10,
            observacaoUso: 'Tomar 1 comprimido de 500 mg VO de 8 em 8 horas por 10 dias seguidos. Sugestão de horários: 6h, 14h, 22h.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido de 1.000 mg se dor de ouvido ou febre.'
          }
        ]
      },
      {
        id: 'oma_amoxi_clav',
        titulo: 'Opção 2: Amoxicilina + Clavulanato 875/125 mg',
        subtitulo: 'Indicado se uso de antibiótico nos últimos 30 dias, falha com amoxicilina após 48-72h ou conjuntivite purulenta associada.',
        itens: [
          {
            farmacoId: 'amoxicilina_clavulanato',
            tipoUso: 'continuo',
            dose: 875,
            unidade: 'mg',
            via: 'VO',
            intervalo: 12,
            dias: 10,
            observacaoUso: 'Tomar 1 comprimido de 875/125 mg VO de 12 em 12 horas junto com uma refeição por 10 dias. Sugestão de horários: 8h e 20h.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: '1 comprimido de 1.000 mg se dor.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'CRITÉRIOS DIAGNÓSTICOS DE OMA: Início agudo de otalgia + ABAULAMENTO MARCADO da membrana timpânica à otoscopia (ou perfuração recente com otorreia purulenta aguda) + sinais inflamatórios evidentes (eritema intenso, opacidade, ausência de reflexo luminoso).',
        'VIGILÂNCIA DE MASTOIDITE AGUDA: Sinais de hiperemia, calor, dor intensa à palpação retroauricular com apagamento do sulco retroauricular e protusão do pavilhão auricular para a frente. É UMA EMERGÊNCIA OTORRINOLARINGOLÓGICA (risco de abscesso subperiosteal e trombose de seio sigmoide) - internação com Ceftriaxona EV imediata.',
        'Em crianças < 2 anos, a OMA bilateral ou com otorreia exige sempre tratamento antibiótico por 10 dias completos.'
      ],
      criteriosInternacao: [
        'Sinais de mastoidite aguda ou complicações intracranianas (meningite, abscesso cerebral, paralisia do nervo facial).',
        'Toxemia importante ou vômitos incoercíveis com intolerância a antibióticos orais.'
      ],
      examesRecomendados: [
        'Otoscopia pneumática.',
        'Hemograma e PCR se febre alta e toxemia.',
        'Tomografia computadorizada de mastoides se suspeita de complicação supurativa.'
      ],
      orientacoesNaoFarmacologicas: [
        'Analgesia precoce e frequente com dipirona ou paracetamol.',
        'Lavagem nasal frequente com soro fisiológico 0,9% para desobstrução da tuba auditiva.',
        'Evitar entrada de água se houver perfuração timpânica com otorreia.'
      ]
    }
  },
  {
    id: 'faringoamigdalite',
    titulo: 'Faringoamigdalite Aguda Estreptocócica e Inespecífica',
    categoria: 'Doenças Infecciosas',
    subtitulo: 'Diferenciação de etiologia viral vs bacteriana (Critérios de Centor/McIsaac) e prevenção de febre reumática',
    paginaPdf: 68,
    opcoesPrescricao: [
      {
        id: 'faringo_penicilina_benzatina',
        titulo: 'Opção 1: Penicilina G Benzatina IM (1ª Escolha Padrão-Ouro)',
        subtitulo: 'Dose única intramuscular profunda: adesão de 100% garantida e prevenção eficaz de Febre Reumática.',
        itens: [
          {
            farmacoId: 'penicilina-benzatina',
            tipoUso: 'agora',
            dose: 1200000,
            unidade: 'ui',
            via: 'IM',
            intervalo: 24,
            observacaoUso: 'Adultos e crianças com peso >= 27 kg: aplicar 1.200.000 UI por via intramuscular profunda exclusiva no quadrante superior externo do glúteo em dose única.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido de 1.000 mg se dor de garganta ou febre.'
          }
        ]
      },
      {
        id: 'faringo_amoxicilina_oral',
        titulo: 'Opção 2: Amoxicilina 500 mg VO (1ª Escolha Oral - 10 dias)',
        subtitulo: 'Para pacientes que recusam injeção intramuscular; exige adesão rigorosa por 10 dias completos.',
        itens: [
          {
            farmacoId: 'amoxicilina',
            tipoUso: 'continuo',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            intervalo: 8,
            dias: 10,
            observacaoUso: 'Tomar 1 comprimido de 500 mg VO de 8 em 8 horas por 10 dias seguidos. Sugestão de horários: 6h, 14h, 22h.'
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
        id: 'faringo_azitromicina_alergicos',
        titulo: 'Opção 3: Azitromicina 500 mg VO (Alérgicos à Penicilina)',
        subtitulo: 'Macrolídeo em esquema curto de 5 dias para pacientes com hipersensibilidade comprovada a betalactâmicos.',
        itens: [
          {
            farmacoId: 'azitromicina',
            tipoUso: 'continuo',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 500 mg VO uma vez ao dia no mesmo horário por 5 dias seguidos. Sugestão de horário: 8h.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: '1 comprimido de 1.000 mg se dor de garganta.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'CRITÉRIOS DE CENTOR MODIFICADO (probabilidade de Streptococcus pyogenes): 1) Febre relatada > 38°C (+1); 2) Ausência de tosse (+1); 3) Linfadenopatia cervical anterior dolorosa (+1); 4) Exsudato amigdaliano ou edema nas amígdalas (+1); 5) Idade de 3 a 14 anos (+1), 15 a 44 anos (0), >= 45 anos (-1). Se escore <= 1 ponto: etiologia viral (não usar antibiótico!). Se >= 3 pontos: alta probabilidade bacteriana.',
        'A DURAÇÃO DO TRATAMENTO ORAL COM AMOXICILINA DEVE SER DE 10 DIAS COMPLETOS: esquemas orais encurtados de 5 a 7 dias NÃO erradicam o estreptococo da orofaringe e NÃO previnem a Febre Reumática nem a Glomerulonefrite Pós-Estreptocócica (GNPE).',
        'SINAIS DE ABSCESSO PERIAMIGDALIANO: Trismo (incapacidade de abrir a boca), voz anasalada em "batata quente", desvio pronunciado da úvula para o lado contralateral e sialorreia. Exige drenagem cirúrgica e antibioticoterapia venosa.'
      ],
      criteriosInternacao: [
        'Abscesso periamigdaliano ou retrofaríngeo com comprometimento de via aérea.',
        'Incapacidade de deglutir saliva ou hidratação oral por odinofagia extrema.'
      ],
      examesRecomendados: [
        'Teste rápido para estreptococo do grupo A (Swab de orofaringe) se disponível na UPA.',
        'Cultura de secreção de orofaringe em ágar-sangue se dúvida diagnóstica.',
        'Hemograma se suspeita de Mononucleose Infecciosa (presença de linfócitos atípicos > 10% e esplenomegalia; lembrar que amoxicilina na mononucleose desencadeia exantema maculopapular difuso exuberante!).'
      ],
      orientacoesNaoFarmacologicas: [
        'Gargarejos com água morna e sal para alívio álgico e hidratação da mucosa.',
        'Ingestão de alimentos pastosos frios ou mornos (sorvete, gelatinas, iogurtes) para aliviar a odinofagia.',
        'Trocar a escova de dentes após 48 horas de antibiótico para evitar reinfecção estreptocócica.'
      ]
    }
  },
  {
    id: 'intertrigo_candidíase',
    titulo: 'Candidíase Cutânea e Intertrigo Fúngico',
    categoria: 'Doenças Dermatológicas e Alérgicas',
    subtitulo: 'Lesões eritematosas úmidas em dobras corporais (inframamária, inguinal, axilar) com pápulas satélites',
    paginaPdf: 69,
    opcoesPrescricao: [
      {
        id: 'intertrigo_cetoconazol_fluconazol',
        titulo: 'Opção 1: Tratamento Tópico + Oral (Cetoconazol + Fluconazol)',
        subtitulo: 'Controle rápido da inflamação fúngica e erradicação em dobras de difícil cicatrização.',
        itens: [
          {
            farmacoId: 'cetoconazol',
            tipoUso: 'continuo',
            dose: 1,
            unidade: 'aplic',
            via: 'TOPICA',
            intervalo: 12,
            dias: 14,
            observacaoUso: 'Lavar e secar muito bem a dobra afetada; aplicar uma camada fina do creme 2 vezes ao dia massageando suavemente até completa absorção por 14 a 21 dias.'
          },
          {
            farmacoId: 'fluconazol',
            tipoUso: 'continuo',
            dose: 150,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            dias: 28,
            observacaoUso: 'Tomar 1 cápsula de 150 mg VO uma vez por semana por 4 semanas consecutivas (no mesmo dia da semana).'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'CARACTERÍSTICAS DA CANDIDÍASE DE DOBRAS: Placa eritematosa viva, brilhante, úmida, com maceração central e lesões pápulo-pustulosas "satélites" na periferia do bordo ativo.',
        'INVESTIGAR DIABETES MELLITUS: Intertrigo fúngico recidivante ou recalcitrante é frequentemente a primeira manifestação clínica de diabetes mellitus descompensado ou obesidade com maceração cutânea por suor.',
        'EVITAR CORTICOIDES POTENTES EM DOBRAS CORPORAIS: Podem causar atrofia cutânea rápida, estrias irreversíveis e piora da proliferação fúngica.'
      ],
      criteriosInternacao: [
        'Raro; internação necessária apenas se celulite bacteriana secundária extensa associada com sepse.'
      ],
      examesRecomendados: [
        'Glicemia de jejum e hemoglobina glicada (HbA1c).',
        'Exame micológico direto com KOH a 10% (revela pseudohifas e leveduras brotantes de Candida albicans).'
      ],
      orientacoesNaoFarmacologicas: [
        'MANTER AS DOBRAS RIGOROSAMENTE SECAS: Secar cuidadosamente com toalha limpa após o banho (pode usar secador de cabelo em temperatura fria a 20 cm da pele).',
        'Usar roupas íntimas folgadas de algodão, evitando tecidos sintéticos que retêm calor e umidade.',
        'Se atrito intenso: aplicar pasta d’água para criar barreira física secativa protetora após melhora das lesões agudas.'
      ]
    }
  },
  {
    id: 'erisipela_celulite',
    titulo: 'Erisipela e Celulite Infecciosa na Emergência',
    categoria: 'Doenças Infecciosas',
    subtitulo: 'Diferenciação anatômica (derme superficial com bordas nítidas vs subcutâneo difuso) e antibioticoterapia',
    paginaPdf: 78,
    opcoesPrescricao: [
      {
        id: 'erisipela_cefalexina_oral',
        titulo: 'Opção 1: Erisipela / Celulite Leve Ambulatorial (Cefalexina VO)',
        subtitulo: 'Tratamento oral padrão cobrindo Streptococcus pyogenes e Staphylococcus aureus.',
        itens: [
          {
            farmacoId: 'cefalexina',
            tipoUso: 'continuo',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            dias: 10,
            observacaoUso: 'Tomar 1 comprimido de 500 mg VO de 6 em 6 horas por 10 a 14 dias seguidos. Sugestão de horários: 6h, 12h, 18h, 00h.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido de 1.000 mg se dor ou febre.'
          }
        ]
      },
      {
        id: 'erisipela_clindamicina_alergicos',
        titulo: 'Opção 2: Alternativa para Alérgicos a Betalactâmicos (Clindamicina VO)',
        subtitulo: 'Excelente penetração tecidual e cobertura antiestafilocócica/estreptocócica.',
        itens: [
          {
            farmacoId: 'clindamicina',
            tipoUso: 'continuo',
            dose: 600,
            unidade: 'mg',
            via: 'VO',
            intervalo: 8,
            dias: 10,
            observacaoUso: 'Tomar 2 cápsulas de 300 mg (600 mg) VO de 8 em 8 horas com um copo cheio de água por 10 dias. Sugestão de horários: 6h, 14h, 22h.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: '1 comprimido de 1.000 mg se dor.'
          }
        ]
      },
      {
        id: 'erisipela_hospitalar_cefazolina',
        titulo: 'Opção 3: Erisipela / Celulite Grave Hospitalar (Cefazolina EV)',
        subtitulo: 'Febre alta, toxemia, progressão rápida ou comorbidades descompensadas.',
        itens: [
          {
            farmacoId: 'cefazolina',
            tipoUso: 'continuo',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            intervalo: 8,
            dias: 7,
            observacaoUso: 'Infundir 1 g EV diluído em 100 mL de SF 0,9% em 30 minutos a cada 8 horas. Manter membro elevado.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            intervalo: 6,
            observacaoUso: '1 ampola (1.000 mg) EV se febre ou dor.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'DIFERENÇA ANATÔMICA CLÍNICA: ERISIPELA acomete a derme superficial e linfáticos superficiais (placa eritematosa rubra viva, em "casca de laranja", com BORDAS BEM DELIMITADAS e nítidas em relação à pele sã; etiologia quase 100% estreptocócica). CELULITE acomete a derme profunda e o tecido celular subcutâneo (placa com BORDAS MAL DELIMITADAS e difusas; estafilococos e estreptococos).',
        'DELIMITAR A LESÃO COM CANETA DERMOGRÁFICA À ADMISSÃO: desenhar a linha da borda do eritema para avaliar a resposta terapêutica em 24 a 48 horas.',
        'SINAIS DE FASCITE NECROTIZANTE (EMERGÊNCIA CIRÚRGICA): Dor desproporcional ao exame físico, anestesia cutânea local por necrose nervosa, bolhas hemorrágicas, creptação à palpação de tecidos moles e rápida deterioração com choque séptico. Exige desbridamento cirúrgico de emergência!'
      ],
      criteriosInternacao: [
        'Toxicidade sistêmica (febre alta, taquicardia, hipotensão ou sepse).',
        'Extremos de idade (< 2 anos ou idosos frágeis), diabéticos descompensados ou imunodeprimidos.',
        'Progressão rápida do eritema apesar de 48h de antibiótico oral ambulatorial.',
        'Localização de alto risco: face, órbita ou períneo (Síndrome de Fournier).'
      ],
      examesRecomendados: [
        'Hemograma com leucocitose e desvio à esquerda; PCR elevada.',
        'Glicemia e função renal (ureia e creatinina).',
        'Doppler venoso de MMII se dúvida com Trombose Venosa Profunda (TVP).',
        'Hemoculturas (2 pares) se critérios de internação hospitalar.'
      ],
      orientacoesNaoFarmacologicas: [
        'REPOUSO COM ELEVAÇÃO DO MEMBRO AFETADO: Medida indispensável para diminuir o edema e acelerar a drenagem linfática e venosa.',
        'Tratar ativamente a porta de entrada (micoses interdigitais nos pés/"frieiras", úlceras de estase, escoriações ou picadas de insetos).',
        'Compressas frias locais aliviam o calor e a queimação local.'
      ]
    }
  },
  {
    id: 'alergia_urticaria',
    titulo: 'Urticária Aguda, Prurido e Reações Alérgicas Cutâneas',
    categoria: 'Doenças Dermatológicas e Alérgicas',
    subtitulo: 'Placas eritemato-edematosas pruriginosas e evanescentes: anti-histamínicos H1 e corticoterapia curta',
    paginaPdf: 79,
    opcoesPrescricao: [
      {
        id: 'urticaria_hidroxizina_prednisona',
        titulo: 'Opção 1: Esquema com Anti-histamínico de 1ª Geração (Hidroxizina)',
        subtitulo: 'Excelente efeito antipruriginoso e alívio da insônia associada ao prurido.',
        itens: [
          {
            farmacoId: 'hidroxizina',
            tipoUso: 'continuo',
            dose: 25,
            unidade: 'mg',
            via: 'VO',
            intervalo: 12,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 25 mg VO a cada 12 horas (ou tomar 1 comprimido à noite ao deitar) por 5 dias. Sugestão de horários: 8h e 20h.'
          },
          {
            farmacoId: 'prednisona',
            tipoUso: 'continuo',
            dose: 20,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 20 mg VO pela manhã com o desjejum por 5 dias e suspender (ciclo curto sem necessidade de desmame).'
          }
        ]
      },
      {
        id: 'urticaria_loratadina',
        titulo: 'Opção 2: Esquema com Anti-histamínico Não Sedante (Loratadina)',
        subtitulo: 'Sem sonolência diurna; ideal para pacientes que necessitam dirigir ou trabalhar.',
        itens: [
          {
            farmacoId: 'loratadina',
            tipoUso: 'continuo',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            dias: 7,
            observacaoUso: 'Tomar 1 comprimido de 10 mg VO uma vez ao dia no mesmo horário por 7 dias. Sugestão de horário: 8h.'
          },
          {
            farmacoId: 'prednisona',
            tipoUso: 'continuo',
            dose: 20,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 20 mg pela manhã por 5 dias.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'DESCARTAR ANAFILAXIA IMEDIATAMENTE: Pesquisar sinais de comprometimento respiratório (estridor laríngeo, disfonia, sibilos, dispneia) ou hemodinâmico (hipotensão arterial, síncope, colapso). SE HOUVER SINAIS RESPIRATÓRIOS OU CIRCULATÓRIOS: O TRATAMENTO É ADRENALINA IM IMEDIATA (0,5 mg IM no vasto lateral da coxa)! Corticoides e anti-histamínicos NÃO revertem anafilaxia na fase aguda.',
        'CARACTERÍSTICAS DA LESÃO DE URTICÁRIA: Pápulas ou placas eritemato-edematosas muito pruriginosas, com centro claro, que desaparecem espontaneamente em menos de 24 horas sem deixar cicatriz ("lesões evanescentes"). Se uma lesão individual fixa persistir por mais de 24 a 48h com queimação/dor e deixar púrpura: pensar em Urticária Vasculite.',
        'ANGIOEDEMA: Edema de derme profunda e subcutâneo em lábios, pálpebras, língua e genitália; se atingir via aérea superior, exige monitorização estrita em sala vermelha com material de intubação pronto.'
      ],
      criteriosInternacao: [
        'Anafilaxia prévia ou angioedema de língua e laringe.',
        'Urticária associada a broncoespasmo grave refratário.'
      ],
      examesRecomendados: [
        'Na urticária aguda simples (< 6 semanas): exames laboratoriais NÃO são necessários de rotina.',
        'Se sinais de anafilaxia: monitorização contínua de saturação, ECG e pressão arterial.',
        'Hemograma, VHS e PCR se lesões atípicas ou vasculite associada.'
      ],
      orientacoesNaoFarmacologicas: [
        'Afastar e suspender imediatamente o gatilho suspeito: medicamentos recentes (AINEs, antibióticos, IECA), alimentos (frutos do mar, amendoim, ovos) ou picadas de insetos.',
        'Banhos frios ou mornos; evitar banhos muito quentes e fricção intensa da toalha sobre a pele (o calor e o atrito liberam mais histamina dos mastócitos).',
        'Evitar roupas justas de tecidos ásperos sintéticos ou de lã.'
      ]
    }
  },
  {
    id: 'herpes_zoster',
    titulo: 'Herpes Zóster Agudo ("Cobreiro") e Prevenção de Neuralgia',
    categoria: 'Doenças Infecciosas',
    subtitulo: 'Erupção vesicular unilateral dolorosa em trajeto de dermátomo: terapia antiviral precoce com Aciclovir',
    paginaPdf: 81,
    opcoesPrescricao: [
      {
        id: 'zoster_aciclovir_oral',
        titulo: 'Opção 1: Tratamento Antiviral Completo (Aciclovir 800 mg 5x/dia)',
        subtitulo: 'Dose plena para inibir a replicação viral e reduzir a incidência e gravidade da neuralgia pós-herpética.',
        itens: [
          {
            farmacoId: 'aciclovir',
            tipoUso: 'continuo',
            dose: 800,
            unidade: 'mg',
            via: 'VO',
            intervalo: 4,
            dias: 7,
            observacaoUso: 'Tomar 2 comprimidos de 400 mg (800 mg) VO 5 vezes ao dia de 4 em 4 horas durante o dia (às 06h, 10h, 14h, 18h e 22h, sem precisar acordar de madrugada) por 7 dias seguidos.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido de 1.000 mg se dor no trajeto das lesões.'
          },
          {
            farmacoId: 'diclofenaco',
            tipoUso: 'continuo',
            dose: 50,
            unidade: 'mg',
            via: 'VO',
            intervalo: 8,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 50 mg de 8 em 8 horas por até 5 dias para controle inflamatório do gânglio sensitivo. Sugestão de horários: 6h, 14h, 22h.'
          }
        ]
      },
      {
        id: 'zoster_corticoterapia_adj',
        titulo: 'Opção 2: Associação com Prednisona (Casos Graves ou Paralisia de Bell)',
        subtitulo: 'Indicado em Síndrome de Ramsay Hunt ou zóster oftálmico com intensa dor e neurite.',
        itens: [
          {
            farmacoId: 'aciclovir',
            tipoUso: 'continuo',
            dose: 800,
            unidade: 'mg',
            via: 'VO',
            intervalo: 4,
            dias: 7,
            observacaoUso: 'Tomar 800 mg VO 5 vezes ao dia por 7 dias.'
          },
          {
            farmacoId: 'prednisona',
            tipoUso: 'continuo',
            dose: 20,
            unidade: 'mg',
            via: 'VO',
            intervalo: 12,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 20 mg VO de 12 em 12 horas por 5 dias seguidos.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: '1 comprimido de 1.000 mg se dor.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'JANELA TERAPÊUTICA IDEAL DE 72 HORAS: O início do Aciclovir nas primeiras 72 horas do surgimento das vesículas acelera a cicatrização das lesões, encurta a dor aguda e reduz o risco da temida NEURALGIA PÓS-HERPÉTICA (dor neuropática crônica debilitante). Em idosos > 50 anos ou imunocomprometidos, iniciar mesmo após 72h se novas lesões ativas ainda estiverem surgindo.',
        'HERPES ZÓSTER OFTÁLMICO (SINAL DE HUTCHINSON): Vesículas na ponta, asa ou dorso lateral do nariz (inervação pelo ramo nasociliar do nervo trigêmeo V1) indicam alto risco de ceratite herpética, uveíte e perda visual permanente! Avaliação oftálmica de urgência obrigatória.',
        'SÍNDROME DE RAMSAY HUNT (HERPES ZÓSTER ÓTICO): Vesículas no conduto auditivo externo associadas a paralisia facial periférica ipsilateral e vertigem/zumbido por acometimento dos pares cranianos VII e VIII.'
      ],
      criteriosInternacao: [
        'Zóster disseminado (mais de 20 lesões fora do dermátomo primário) ou em imunodeprimidos graves (risco de encefalite e pneumonite herpética).',
        'Zóster oftálmico grave com ceratite ulcerada.',
        'Neuralgia aguda incoercível exigindo analgesia venosa potente.'
      ],
      examesRecomendados: [
        'O diagnóstico é essencialmente clínico pela distribuição dermatômica unilateral característica.',
        'Sorologia para HIV se herpes zóster em adultos jovens com idade < 50 anos sem fatores de risco aparentes.',
        'Avaliação oftalmológica com lâmpada de fenda se acometimento de fronte/nariz.'
      ],
      orientacoesNaoFarmacologicas: [
        'Manter as lesões limpas e secas; lavar suavemente com água e sabão neutro durante o banho.',
        'Não furar ou espremer as vesículas para evitar infecção bacteriana secundária.',
        'Evitar contato físico direto com gestantes não imunes, recém-nascidos e indivíduos imunossuprimidos até que todas as lesões estejam secas em fase de crosta (o líquido das vesículas contém vírus da varicela contagioso).'
      ]
    }
  },
  {
    id: 'escabiose',
    titulo: 'Escabiose (Sarna Humana) e Pediculose',
    categoria: 'Doenças Dermatológicas e Alérgicas',
    subtitulo: 'Prurido noturno intenso em dobras, túneis interdigitais e pápulas escoriadas: Permetrina tópica + Ivermectina oral',
    paginaPdf: 82,
    opcoesPrescricao: [
      {
        id: 'escabiose_permetrina_ivermectina',
        titulo: 'Opção 1: Tratamento Combinado (Permetrina 5% Loção + Ivermectina Oral)',
        subtitulo: 'Padrão ouro de erradicação: trata o ácaro adulto e destrói ninfas na segunda aplicação.',
        itens: [
          {
            farmacoId: 'permetrina',
            tipoUso: 'agora',
            dose: 1,
            unidade: 'aplic',
            via: 'TOPICA',
            intervalo: 24,
            observacaoUso: 'Aplicar a loção a 5% em todo o corpo, do pescoço até a ponta dos dedos dos pés, à noite antes de dormir. Deixar agir por 8 a 14 horas na pele e lavar no banho pela manhã. OBRIGATÓRIO REPETIR A APLICAÇÃO APÓS 7 A 14 DIAS para eliminar os ovos eclodidos.'
          },
          {
            farmacoId: 'ivermectina',
            tipoUso: 'agora',
            dose: 12,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Adultos de 60 a 79 kg: tomar 2 comprimidos de 6 mg (12 mg) VO em dose única com água com estômago vazio. REPETIR A MESMA DOSE APÓS 14 DIAS.'
          },
          {
            farmacoId: 'hidroxizina',
            tipoUso: 'se_necessario',
            dose: 25,
            unidade: 'mg',
            via: 'VO',
            intervalo: 8,
            observacaoUso: 'Tomar 1 comprimido de 25 mg VO à noite se coceira intensa que atrapalhe o sono.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'TRATAR TODOS OS COABITANTES E CONTATOS ÍNTIMOS SIMULTANEAMENTE: Mesmo que estejam assintomáticos! O período de incubação da escabiose dura de 2 a 6 semanas; se os contatos não forem tratados no mesmo dia, haverá reinfestação cruzada contínua.',
        'ORIENTAÇÕES DE HIGIENE DAS ROUPAS: Todas as roupas de cama, toalhas de banho e roupas íntimas usadas nos últimos 3 a 4 dias devem ser lavadas em água quente (> 50-60°C) ou passadas com ferro quente. Peças que não podem ser lavadas devem ser guardadas em sacos plásticos hermeticamente fechados por 7 dias (o ácaro Sarcoptes scabiei não sobrevive fora do corpo humano por mais de 48 a 72 horas).',
        'O PRURIDO PODE PERSISTIR POR 2 A 4 SEMANAS APÓS A MORTE DO ÁCARO: isso ocorre devido a reação de hipersensibilidade residual aos dejetos do parasita sob a derme e NÃO significa falha terapêutica imediata!'
      ],
      criteriosInternacao: [
        'Escabiose Crostosa (Sarna Norueguesa): infestação maciça por milhões de ácaros em pacientes imunossuprimidos graves (HIV avançado, transplantados) com crostas hiperceratóticas disseminadas; exige isolamento de contato rigoroso.'
      ],
      examesRecomendados: [
        'Diagnóstico essencialmente clínico pela dermatoscopia (visualização do sinal do delta/asa-delta correspondente ao ácaro no final do túnel epidérmico).',
        'Pesquisa direta por raspado de lesão sob microscopia se dúvida diagnóstica.'
      ],
      orientacoesNaoFarmacologicas: [
        'Cortar e escovar bem as unhas para não traumatizar a pele ao coçar, prevenindo infecção bacteriana secundária (impetiginização por estafilococo/estreptococo).',
        'Banhos mornos com sabonetes hidratantes suaves.'
      ]
    }
  },
  {
    id: 'furunculo_abscesso',
    titulo: 'Furúnculo e Abscesso Cutâneo',
    categoria: 'Doenças Infecciosas',
    subtitulo: 'Nódulo inflamatório supurativo do folículo piloso: calor úmido, drenagem e antibioticoterapia para celulite associada',
    paginaPdf: 83,
    opcoesPrescricao: [
      {
        id: 'furunculo_topico_aine',
        titulo: 'Opção 1: Furúnculo Localizado sem Celulite ou Febre',
        subtitulo: 'Calor úmido local para favorecer a flutuação/drenagem espontânea + pomada de Mupirocina.',
        itens: [
          {
            farmacoId: 'mupirocina',
            tipoUso: 'continuo',
            dose: 1,
            unidade: 'aplic',
            via: 'TOPICA',
            intervalo: 8,
            dias: 7,
            observacaoUso: 'Aplicar uma camada fina da pomada sobre a lesão 3 vezes ao dia após higienização por 7 dias. Sugestão de horários: 6h, 14h, 22h.'
          },
          {
            farmacoId: 'ibuprofeno',
            tipoUso: 'se_necessario',
            dose: 600,
            unidade: 'mg',
            via: 'VO',
            intervalo: 8,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 600 mg VO de 8 em 8 horas se dor ou inflamação intensa.'
          }
        ]
      },
      {
        id: 'furunculo_cefalexina_oral',
        titulo: 'Opção 2: Furúnculos Múltiplos, com Celulite Perilesional ou Sinais Sistêmicos',
        subtitulo: 'Antibioticoterapia sistêmica antiestafilocócica com Cefalexina VO por 7 a 10 dias.',
        itens: [
          {
            farmacoId: 'cefalexina',
            tipoUso: 'continuo',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            dias: 7,
            observacaoUso: 'Tomar 1 comprimido de 500 mg VO de 6 em 6 horas por 7 dias seguidos. Sugestão de horários: 6h, 12h, 18h, 00h.'
          },
          {
            farmacoId: 'mupirocina',
            tipoUso: 'continuo',
            dose: 1,
            unidade: 'aplic',
            via: 'TOPICA',
            intervalo: 8,
            dias: 7,
            observacaoUso: 'Aplicar pomada de Mupirocina 3 vezes ao dia sobre a ferida após drenagem.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido de 1.000 mg se dor.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'DRENAGEM CIRÚRGICA É O TRATAMENTO PRIMÁRIO DO ABSCESSO FLUTUANTE: "Ubi pus, ibi evacua" (Onde há pus, deve ser esvaziado). Antibióticos sozinhos não penetram na cápsula purulenta avascular do abscesso; incisão e drenagem cirúrgica com bisturi nº 11 sob anestesia local é curativa na grande maioria dos casos.',
        'ZONA DO TRIÂNGULO DA MORTE DA FACE: Furúnculos localizados na região do lábio superior, dorso nasal e filtro labial NÃO DEVEM SER ESPREMIDOS OU MANIPULADOS BRUSCAMENTE! A drenagem venosa dessa área comunica-se diretamente com o seio cavernoso através das veias oftálmicas; a manipulação pode provocar Trombose Séptica do Seio Cavernoso (emergência neurológica com proptose, oftalmoplegia e alta mortalidade). Antibiótico EV obrigatório se infecção nessa área.',
        'CARBÚNCULO / ANTRAX: Confluência de múltiplos furúnculos com múltiplos pontos de drenagem e necrose cutânea extensa; comum em diabéticos.'
      ],
      criteriosInternacao: [
        'Furúnculo em face no triângulo perinasolabial com sinais de disseminação.',
        'Abscessos profundos, múltiplos ou de grande diâmetro com febre e toxemia sistêmica.'
      ],
      examesRecomendados: [
        'Glicemia capilar e de jejum (avaliar diabetes não diagnosticado ou descompensado).',
        'Cultura de secreção purulenta com antibiograma se abscesso recidivante ou suspeita de MRSA comunitário (CA-MRSA).'
      ],
      orientacoesNaoFarmacologicas: [
        'Aplicar compressas de água morna úmidas por 15 a 20 minutos 3 a 4 vezes ao dia para acelerar a maturação e drenagem espontânea.',
        'NUNCA espremer ou furar lesões com agulhas caseiras sem esterilidade.',
        'Lavar bem as mãos com água e sabão antes e depois de tocar na área afetada.'
      ]
    }
  },
  {
    id: 'impetigo',
    titulo: 'Impetigo Crostoso e Bolhoso',
    categoria: 'Doenças Infecciosas',
    subtitulo: 'Infecção bacteriana superficial com crostas melicéricas amareladas: Mupirocina tópica vs Cefalexina oral',
    paginaPdf: 83,
    opcoesPrescricao: [
      {
        id: 'impetigo_topico_mupirocina',
        titulo: 'Opção 1: Impetigo Localizado (Mupirocina 2% Pomada Tópica)',
        subtitulo: 'Poucas lesões periorais ou nasais sem repercussão sistêmica em crianças ou adultos.',
        itens: [
          {
            farmacoId: 'mupirocina',
            tipoUso: 'continuo',
            dose: 1,
            unidade: 'aplic',
            via: 'TOPICA',
            intervalo: 8,
            dias: 7,
            observacaoUso: 'Após amolecer e remover delicadamente as crostas com água morna e sabão neutro, aplicar uma camada fina da pomada sobre as lesões 3 vezes ao dia por 7 dias. Sugestão de horários: 6h, 14h, 22h.'
          }
        ]
      },
      {
        id: 'impetigo_oral_cefalexina',
        titulo: 'Opção 2: Impetigo Extenso / Disseminado (Cefalexina VO + Mupirocina)',
        subtitulo: 'Múltiplas lesões disseminadas, impetigo bolhoso ou surtos escolares.',
        itens: [
          {
            farmacoId: 'cefalexina',
            tipoUso: 'continuo',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            dias: 7,
            observacaoUso: 'Tomar 1 comprimido de 500 mg VO de 6 em 6 horas por 7 dias seguidos (ou suspensão 25 a 50 mg/kg/dia para crianças). Sugestão de horários: 6h, 12h, 18h, 00h.'
          },
          {
            farmacoId: 'mupirocina',
            tipoUso: 'continuo',
            dose: 1,
            unidade: 'aplic',
            via: 'TOPICA',
            intervalo: 8,
            dias: 7,
            observacaoUso: 'Aplicar pomada de Mupirocina 2% sobre as lesões 3 vezes ao dia.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'CROSTAS MELICÉRICAS CARACTERÍSTICAS: Lesões vesiculares superficiais frágeis que se rompem rapidamente deixando exsudato espesso que seca formando crostas amareladas com aspecto de "mel cristalizado" (melicéricas), tipicamente ao redor da boca e nariz.',
        'ETIOLOGIA: Staphylococcus aureus e Streptococcus pyogenes (Streptococo beta-hemolítico do grupo A). O impetigo estreptocócico pode desencadear Glomerulonefrite Difusa Aguda Pós-Estreptocócica (GNPE com hematúria, hipertensão e edema de face semanas depois!), embora NÃO cause Febre Reumática (a febre reumática surge apenas após faringoamigdalite).',
        'REMOÇÃO DAS CROSTAS: As crostas impedem que a pomada atinja as bactérias sob a epiderme; é fundamental orientar a limpeza prévia com compressas de água morna antes de passar a pomada.'
      ],
      criteriosInternacao: [
        'Síndrome da Pele Escaldada Estafilocócica (doença de Ritter) em lactentes (descolamento epidérmico generalizado com sinal de Nikolsky positivo induzido pela toxina esfoliativa do S. aureus).',
        'Impetigo ectimatoso profundo com necrose tecidual e celulite.'
      ],
      examesRecomendados: [
        'O diagnóstico é eminentemente clínico.',
        'EAS após 2 a 3 semanas se suspeita de glomerulonefrite pós-estreptocócica.',
        'Cultura de swab do exsudato se lesões refratárias ao tratamento empírico habitual.'
      ],
      orientacoesNaoFarmacologicas: [
        'Amolecer as crostas antes da aplicação: aplicar compressa morna úmida ou óleo mineral ligeiramente aquecido para que se soltem sem sangramento.',
        'Higiene estrita com toalhas de uso individual exclusivo; cortar bem as unhas das crianças para não disseminar por autoinoculação ao coçar.',
        'Afastamento temporário da creche ou escola até 24 a 48 horas após o início do antibiótico adequado.'
      ]
    }
  },
  {
    id: 'queimaduras',
    titulo: 'Queimaduras Térmicas na Urgência e Cuidados com Feridas',
    categoria: 'Doenças Dermatológicas e Alérgicas',
    subtitulo: 'Estimativa de Superfície Corporal Queimada (Regra dos Nove), analgesia, hidratação e Sulfadiazina de Prata',
    paginaPdf: 85,
    opcoesPrescricao: [
      {
        id: 'queimadura_curativo_sulfadiazina',
        titulo: 'Opção 1: Queimaduras de 2º Grau Superficiais (Sulfadiazina de Prata 1%)',
        subtitulo: 'Ação antimicrobiana tópica de largo espectro e estímulo à epitelização sob curativo estéril.',
        itens: [
          {
            farmacoId: 'sulfadiazina-de-prata',
            tipoUso: 'continuo',
            dose: 1,
            unidade: 'aplic',
            via: 'TOPICA',
            intervalo: 12,
            dias: 14,
            observacaoUso: 'Lavar a queimadura com soro fisiológico 0,9% abundante; com luvas estéreis, aplicar camada uniforme de 1 a 2 mm de espessura de Sulfadiazina de Prata 1% sobre a área desepitelizada e cobrir com gaze estéril e atadura de crepe 1 a 2 vezes ao dia.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido de 1.000 mg se dor, podendo repetir a cada 6 horas.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'RESFRIAMENTO IMEDIATO DA LESÃO: Irrigar imediatamente a queimadura com água corrente fria ou soro fisiológico em temperatura ambiente (15 a 20°C) por 10 a 20 minutos nas primeiras 3 horas do trauma térmico. Interrompe a progressão do calor nos tecidos profundos e alivia a dor. NUNCA USAR GELO OU ÁGUA GELADA (o gelo agrava a isquemia tecidual por vasoconstrição extrema).',
        'PROIBIDO APLICAR PRODUTOS CASEIROS: Manteiga, pasta de dente, café, clara de ovo, óleo ou pomadas não prescritas aumentam drasticamente o risco de infecção e dificultam a avaliação médica.',
        'CONDUTA EM FLICTENAS (BOLHAS): Bolhas íntegras pequenas e limpas devem ser mantidas intactas como curativo biológico estéril natural. Bolhas rotas, contaminadas, muito volumosas e tensas sob articulações devem ser debridadas com técnica asséptica estéril.',
        'REGRA DE PARKLAND PARA GRANDES QUEIMADOS (SCQ 2º/3º grau >= 20%): 2 a 4 mL de Ringer Lactato x Peso (kg) x %SCQ nas primeiras 24 horas (metade nas primeiras 8 horas contadas a partir do momento da queimadura, e a outra metade nas 16 horas seguintes). Monitorar débito urinário horário (meta: 0,5 a 1,0 mL/kg/h).'
      ],
      criteriosInternacao: [
        'Critérios de transferência para Centro de Tratamento de Queimados (CTQ): 1) Queimaduras de 2º grau > 10% de SCQ em crianças/idosos ou > 20% em adultos; 2) Queimaduras de 3º grau de qualquer extensão; 3) Queimaduras em áreas nobres/especiais: face, mãos, pés, genitália, períneo ou sobre grandes articulações; 4) Queimaduras químicas ou elétricas por alta voltagem; 5) Lesão por inalação de fumaça/ar aquecido (risco de edema agudo de glote e IOT precoce).'
      ],
      examesRecomendados: [
        'Gasometria arterial com Carboxi-hemoglobina (COHb) se história de exposição à fumaça em ambiente fechado (suspeita de intoxicação por monóxido de carbono e cianeto).',
        'Hemograma completo, eletrólitos (vigiar hipercalemia por destruição celular), função renal e mioglobina na urina (pesquisar rabdomiólise se trauma elétrico).',
        'Laringoscopia direta se queimadura de vibrissas nasais, fuligem na orofaringe ou rouquidão/estridor.'
      ],
      orientacoesNaoFarmacologicas: [
        'Elevar membros queimados para diminuir a formação de edema de estase.',
        'Verificar e atualizar o esquema de imunização contra o tétano (vacina dupla adulto dT e imunoglobulina humana antitetânica se ferida de risco).',
        'Garantir aporte calórico-proteico reforçado (o grande queimado entra em estado hipermetabólico extremo).'
      ]
    }
  },
  {
    id: 'feridas_suturas',
    titulo: 'Profilaxia em Feridas Traumáticas e Cuidados de Sutura',
    categoria: 'Doenças Infecciosas',
    subtitulo: 'Indicações de antibioticoterapia profilática em feridas abertas com contaminação grosseira e profilaxia antitetânica',
    paginaPdf: 86,
    opcoesPrescricao: [
      {
        id: 'ferida_contaminada_cefalexina',
        titulo: 'Opção 1: Ferida Traumática Contaminada (Cefalexina VO + Cuidados)',
        subtitulo: 'Indicado para feridas com contaminação grosseira (terra, fezes), esmagamento ou tempo > 6 horas.',
        itens: [
          {
            farmacoId: 'cefalexina',
            tipoUso: 'continuo',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            dias: 7,
            observacaoUso: 'Tomar 1 comprimido de 500 mg VO de 6 em 6 horas por 7 dias seguidos. Sugestão de horários: 6h, 12h, 18h, 00h.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido de 1.000 mg se dor.'
          },
          {
            farmacoId: 'neomicina-bacitracina',
            tipoUso: 'continuo',
            dose: 1,
            unidade: 'aplic',
            via: 'TOPICA',
            intervalo: 12,
            dias: 7,
            observacaoUso: 'Aplicar uma camada fina da pomada sobre a linha de sutura ou ferida após cada limpeza diária.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'A MAIORIA DAS FERIDAS LIMPAS NÃO NECESSITA DE ANTIBIÓTICO SISTÊMICO: O tratamento fundamental é a irrigação copiosa com soro fisiológico 0,9% em pressão adequada para lavagem mecânica e remoção de corpos estranhos.',
        'INDICAÇÕES FORMAIS DE ANTIBIOTICOTERAPIA EM FERIDAS: 1) Feridas com mais de 6 a 8 horas de evolução até o fechamento; 2) Feridas grosseiramente contaminadas com terra, esterco, fezes ou matéria orgânica; 3) Lesões perfurocortantes profundas ou puntiformes penetrantes (pregos, facas); 4) Mordeduras de animais ou humanos (tratar com Amoxicilina-Clavulanato!); 5) Feridas com tecido desvitalizado extenso, esmagamento ou fraturas expostas.',
        'PROFILAXIA CONTRA O TÉTANO: 1) Ferida limpa e superficial: se última dose de dT > 10 anos (ou < 3 doses prévias), aplicar 1 dose da vacina dT. 2) Ferida de risco (contaminada com terra, profunda ou com tecido necrótico): se última dose > 5 anos, vacinar com dT. Se histórico vacinal incerto ou < 3 doses, aplicar Vacina dT + Imunoglobulina Humana Antitetânica (IGHAT 250 UI IM) ou Soro Antitetânico (SAT 5.000 UI IM).'
      ],
      criteriosInternacao: [
        'Fraturas expostas ou lesões de tendões e vasos nobres calibrosos exigindo exploração cirúrgica em centro cirúrgico.',
        'Mordeduras complexas com perda tecidual e descolamento extenso.'
      ],
      examesRecomendados: [
        'Radiografia simples da região em 2 incidências se suspeita de corpo estranho radiopaco (cacos de vidro, lascas de metal) ou fratura óssea oculta.',
        'Hemograma e glicemia em diabéticos.'
      ],
      orientacoesNaoFarmacologicas: [
        'Manter o curativo limpo e seco nas primeiras 24 a 48 horas.',
        'Após 48 horas, lavar a ferida suturada delicadamente com água e sabão neutro durante o banho e secar suavemente sem esfregar.',
        'TEMPO DE RETIRADA DOS PONTOS DE SUTURA: Face (3 a 5 dias para evitar cicatrizes inestéticas); Couro cabeludo (7 a 10 dias); Tronco e membros superiores (10 a 12 dias); Membros inferiores e dorso sobre articulações de tensão (12 a 14 dias).'
      ]
    }
  },
  {
    id: 'eczema_contato',
    titulo: 'Eczema e Dermatite de Contato Aguda',
    categoria: 'Doenças Dermatológicas e Alérgicas',
    subtitulo: 'Reação inflamatória aguda por irritante primário ou alérgeno de contato (pág. 84)',
    paginaPdf: 84,
    opcoesPrescricao: [
      {
        id: 'eczema_leve_betametasona',
        titulo: 'Opção 1: Caso Leve a Moderado (Betametasona 0,1% + Loratadina)',
        subtitulo: 'Corticoide tópico de média/alta potência associado a anti-histamínico oral.',
        itens: [
          {
            farmacoId: 'betametasona',
            dose: 1,
            unidade: 'aplic',
            via: 'TOPICA',
            apresentacaoId: 'creme01',
            tipoUso: 'continuo',
            intervalo: 12,
            dias: 7,
            observacaoUso: 'Aplicar uma camada fina sobre a área afetada 2 vezes ao dia por 5 a 7 dias.'
          },
          {
            farmacoId: 'loratadina',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 10 mg 1x ao dia pela manhã por 5 dias seguidos. Após este período, tomar 1 comprimido se coceira.'
          }
        ]
      },
      {
        id: 'eczema_intenso_clobetasol',
        titulo: 'Opção 2: Caso Intenso / Grave (Clobetasol 0,05% + Loratadina)',
        subtitulo: 'Corticoide tópico de superpotência para lesões inflamatórias severas não responsivas.',
        itens: [
          {
            farmacoId: 'clobetasol',
            dose: 1,
            unidade: 'aplic',
            via: 'TOPICA',
            apresentacaoId: 'creme_005',
            tipoUso: 'continuo',
            intervalo: 12,
            dias: 7,
            observacaoUso: 'Aplicar uma camada fina sobre as lesões 2 vezes ao dia por no máximo 7 a 14 dias. Não aplicar na face ou dobras.'
          },
          {
            farmacoId: 'loratadina',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 10 mg 1x ao dia por 5 dias seguidos.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'Afastar o agente causal/desencadeante (detergentes, cosméticos, bijuterias com níquel, látex, tintas, plantas).',
        'Clobetasol é formalmente contraindicado na face, pálpebras, axilas e virilhas pelo risco severo de atrofia cutânea e telangiectasias.'
      ],
      orientacoesNaoFarmacologicas: [
        'Evitar banhos quentes e uso excessivo de sabonete com atrito na pele inflamada.',
        'Aplicar hidratantes emolientes neutros sem perfume após a melhora inflamatória aguda.'
      ]
    }
  },
  {
    id: 'hordeolo_blefarite',
    titulo: 'Hordéolo Volumoso e Blefarite Intensa (Terçol Agudo)',
    categoria: 'Alterações Oculares',
    subtitulo: 'Infecção estafilocócica das glândulas palpebrais e inflamação do bordo ciliar (pág. 84)',
    paginaPdf: 84,
    opcoesPrescricao: [
      {
        id: 'hordeolo_pomada_oftalmica',
        titulo: 'Opção 1: Ciprofloxacino + Dexametasona Pomada Oftálmica',
        subtitulo: 'Associação antibiótica bactericida e anti-inflamatória tópica palpebral.',
        itens: [
          {
            farmacoId: 'ciprofloxacino-dexametasona',
            dose: 1,
            unidade: 'aplic',
            via: 'OFTALMICA',
            apresentacaoId: 'pomada_oft',
            tipoUso: 'continuo',
            intervalo: 8,
            dias: 15,
            observacaoUso: 'Aplicar na borda dos cílios afetados 3 vezes ao dia por 10 a 15 dias. Lavar bem as mãos antes da aplicação.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      orientacoesNaoFarmacologicas: [
        'COMPRESSAS MORNAS LOCAIS: Aplicar compressas de gaze embebida em água morna ou soro fisiológico por 10 a 15 minutos, 3 a 4 vezes ao dia. O calor local favorece a liquefação do conteúdo sebáceo e a drenagem espontânea.',
        'NUNCA ESPREMER OU FURAR O HORDÉOLO com agulhas (risco de disseminação da infecção para a órbita e celulite periorbitária).',
        'Suspender o uso de maquiagem nos olhos e lentes de contato durante todo o tratamento.'
      ],
      criteriosInternacao: [
        'Edema palpebral volumoso que oclui a fenda palpebral com febre ou proptose (suspeitar de celulite orbitária; internar para TC e antibiótico venoso).'
      ]
    }
  },
  {
    id: 'tinha_corporis_cutanea',
    titulo: 'Tinha Corporis e Tinhas Cutâneas (Micoses por Dermatófitos)',
    categoria: 'Doenças Dermatológicas e Alérgicas',
    subtitulo: 'Lesões anulares eritemato-descamativas de bordas ativas ("impigem") (pág. 85-86)',
    paginaPdf: 85,
    opcoesPrescricao: [
      {
        id: 'tinha_oral_topica',
        titulo: 'Opção 1: Tratamento Combinado (Terbinafina Oral + Terbinafina Creme 1% + Anti-histamínico)',
        subtitulo: 'Ação fungicida potente de amplo espectro para lesões extensas ou refratárias.',
        itens: [
          {
            farmacoId: 'terbinafina',
            dose: 250,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 28,
            observacaoUso: 'Tomar 1 comprimido de 250 mg 1x ao dia no mesmo horário por 28 dias seguidos.'
          },
          {
            farmacoId: 'terbinafina',
            dose: 1,
            unidade: 'aplic',
            via: 'TOPICA',
            apresentacaoId: 'creme_20g',
            tipoUso: 'continuo',
            intervalo: 12,
            dias: 28,
            observacaoUso: 'Aplicar uma camada fina nas áreas afetadas e 2 cm ao redor, de 12 em 12 horas, até a cura completa (cerca de 28 dias).'
          },
          {
            farmacoId: 'loratadina',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'se_necessario',
            intervalo: 24,
            dias: 14,
            observacaoUso: 'Tomar 1 comprimido se coceira ou prurido, podendo repetir a cada 24 horas.'
          }
        ]
      },
      {
        id: 'tinha_apenas_topica',
        titulo: 'Opção 2: Tratamento Estritamente Tópico (Terbinafina Creme 1%)',
        subtitulo: 'Para lesões isoladas, pequenas e não extensas.',
        itens: [
          {
            farmacoId: 'terbinafina',
            dose: 1,
            unidade: 'aplic',
            via: 'TOPICA',
            apresentacaoId: 'creme_20g',
            tipoUso: 'continuo',
            intervalo: 12,
            dias: 28,
            observacaoUso: 'Aplicar nas áreas afetadas de 12/12h por 2 a 4 semanas.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      orientacoesNaoFarmacologicas: [
        'Manter a pele limpa, fresca e rigorosamente seca (enxugar bem as dobras e entre os dedos após o banho).',
        'Usar roupas frouxas de algodão e não compartilhar toalhas, lençóis ou peças íntimas.',
        'Não utilizar corticoides isolados nas lesões (evita "Tinea incognito", mascarando os sintomas com piora da proliferação fúngica).'
      ],
      alertasGravidade: [
        'Terbinafina oral é contraindicada em hepatopatia ativa. Monitorar função hepática se uso prolongado.'
      ]
    }
  },
  {
    id: 'ulceras_cutaneas_variadas',
    titulo: 'Úlceras de Causas Variadas e Lesões Exsudativas',
    categoria: 'Doenças Dermatológicas e Alérgicas',
    subcategoria: 'Curativos e Desbridamento Enzimático',
    paginaPdf: 81,
    descricao: 'Abordagem tópica e desbridamento enzimático com Colagenase + Cloranfenicol em úlceras crônicas, escaras e lesões por pressão.',
    opcoesPrescricao: [
      {
        id: 'ulcera_colagenase_cloranfenicol',
        titulo: 'Opção Padrão UPA - Pomada de Colagenase 0,6 U/g + Cloranfenicol 1%',
        subtitulo: 'Desbridamento proteolítico com cobertura antibacteriana tópica para feridas com necrose ou esfacelo',
        itens: [
          {
            farmacoId: 'colagenase',
            dose: 1,
            unidade: 'aplic',
            via: 'TOPICA',
            apresentacaoId: 'pomada_cloranfenicol_30g',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 30,
            observacaoUso: 'Aplicar uma camada fina (cerca de 2 mm) sobre a área lesionada com tecido necrótico/esfacelo 1 vez ao dia (ou a cada 12 horas). Antes da aplicação, higienizar delicadamente a ferida com soro fisiológico 0,9% morno (manter o fundo levemente umedecido). Cobrir com gaze estéril embebida em SF e enfaixar sem apertar.'
          },
          {
            farmacoId: 'dipirona',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'se_necessario',
            intervalo: 6,
            observacaoUso: 'Tomar 1 a 2 comprimidos se dor na troca do curativo ou queimação local, podendo repetir de 6 em 6 horas.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'Avaliar sinais de celulite ou erisipela secundária peri-lesional (hiperemia expansiva, calor acentuado, exsudato purulento fétido, febre). Nestes casos, associar antibioticoterapia sistêmica (Cefalexina ou Ciprofloxacino + Clindamicina).',
        'Pesquisar pulsos arteriais distais em úlceras de perna e pé: úlceras arteriais isquêmicas exigem revascularização e não desbridamento agressivo.',
        'Em pacientes diabéticos (pé diabético), palpar pulsos, testar sensibilidade protetora e avaliar risco de osteomielite subjacente (sinal probe-to-bone positivo).'
      ],
      orientacoesNaoFarmacologicas: [
        'NUNCA utilizar antissépticos fortes locais junto com a pomada de colagenase (álcool, água oxigenada, iodo/polvidine, clorexidina ou sabões detergentes), pois desativam e neutralizam as enzimas desbridantes proteolíticas.',
        'Proteger a borda de pele íntegra peri-lesional com camada fina de pasta de óxido de zinco ou vaselina pura sólida para evitar maceração.',
        'Estimular a elevação de membros inferiores em úlceras venosas estáticas e repouso.',
        'Encaminhar para a sala de curativos especializada da Unidade Básica de Saúde para acompanhamento seriatim.'
      ]
    }
  },
  {
    id: 'micose_subungueal_paquioniquia',
    titulo: 'Micose Subungueal, Paquioníquia e Tinha Capitis',
    categoria: 'Doenças Dermatológicas e Alérgicas',
    subcategoria: 'Micoses Superficiais Ungueais e do Couro Cabeludo',
    paginaPdf: 83,
    descricao: 'Tratamento de onicomicose com espessamento ungueal (paquioníquia) e infecções fúngicas do couro cabeludo (Tinha do couro cabeludo).',
    opcoesPrescricao: [
      {
        id: 'micose_subungueal_ureia',
        titulo: 'Opção 1 - Paquioníquia e Micose Subungueal (Ureia Creme 40% + Terbinafina Tópica)',
        subtitulo: 'Amolecimento queratolítico da lâmina espessada à noite + antifúngico de manhã (página 83 do Guia UPA 2026)',
        itens: [
          {
            farmacoId: 'ureia',
            dose: 1,
            unidade: 'aplic',
            via: 'TOPICA',
            apresentacaoId: 'creme40',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 30,
            observacaoUso: 'Aplicar uma camada sob e sobre a unha afetada à noite antes de dormir, com o auxílio de cotonete ou algodão, e lavar bem pela manhã com água e sabão.'
          },
          {
            farmacoId: 'terbinafina',
            dose: 1,
            unidade: 'aplic',
            via: 'TOPICA',
            apresentacaoId: 'creme_20g',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 30,
            observacaoUso: 'Aplicar 1 camada fina sob e sobre a unha pela manhã, após lavar bem com água e sabão, por 4 a 8 semanas consecutivas.'
          }
        ]
      },
      {
        id: 'tinha_capitis_terbinafina',
        titulo: 'Opção 2 - Tinha Capitis / Couro Cabeludo (Terbinafina Oral + Cetoconazol Xampu 2%)',
        subtitulo: 'Terapia combinada oral e tópica obrigatória para erradicação do fungo no folículo piloso (pág. 84-85)',
        itens: [
          {
            farmacoId: 'terbinafina',
            dose: 250,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 56,
            observacaoUso: 'Tomar 1 comprimido de 250 mg 1 vez ao dia no mesmo horário por 8 semanas seguidas.'
          },
          {
            farmacoId: 'cetoconazol',
            dose: 1,
            unidade: 'aplic',
            via: 'TOPICA',
            apresentacaoId: 'shampoo_2',
            tipoUso: 'continuo',
            intervalo: 72,
            dias: 28,
            observacaoUso: 'Aplicar no couro cabeludo molhado, massagear suavemente e deixar agir por 10 minutos antes de enxaguar. Usar 2 a 3 vezes por semana durante 4 semanas.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'Onicomicose com acometimento da matriz ungueal ou mais de 50% da lâmina necessita de tratamento oral prolongado (Terbinafina oral 250 mg/dia por 3 meses para unhas das mãos e 6 meses para pés) acompanhado de avaliação de enzimas hepáticas.',
        'Em crianças com placas alopécicas com descamação e pontos pretos no couro cabeludo (Tinea capitis), a via tópica isolada NÃO cura a infecção folicular, sendo imperativo o antifúngico sistêmico oral.',
        'Em caso de reação inflamatória exuberante com placa supurativa flutuante dolorosa (Kérion Celsi), não drenar! Trata-se de hipersensibilidade ao fungo que responde a antifúngico oral e corticoide breve.'
      ],
      orientacoesNaoFarmacologicas: [
        'Cortar as unhas retas e lixar suavemente a superfície espessada antes da aplicação dos medicamentos.',
        'Evitar andar descalço em pisos úmidos comunitários (vestiários, piscinas, saunas) e usar calçados arejados.',
        'Não compartilhar pentes, escovas de cabelo, bonés, chapéus ou toalhas.',
        'Higienizar e desinfetar pentes e tesouras de uso doméstico.'
      ]
    }
  }
];

export default protocolosInfecciosasDermato;
