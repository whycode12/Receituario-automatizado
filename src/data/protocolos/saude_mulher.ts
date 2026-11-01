import { ProtocoloConduta } from '../../types/protocolos';

export const protocolosSaudeMulher: ProtocoloConduta[] = [
  // 1. Anticoncepção de Emergência
  {
    id: 'anticoncepcao_emergencia',
    titulo: 'Anticoncepção de Emergência (Pílula do Dia Seguinte)',
    categoria: 'Saúde da Mulher',
    subcategoria: 'Contracepção de Emergência',
    paginaPdf: 102,
    descricao: 'Pós-coito desprotegido, falha de método contraceptivo ou violência sexual (pág. 102)',
    opcoesPrescricao: [
      {
        id: 'op_levonorgestrel_dose_unica',
        titulo: 'Opção 1: Levonorgestrel 1,5 mg Dose Única (Padrão)',
        subtitulo: 'Esquema padrão-ouro em dose única imediata.',
        itens: [
          {
            farmacoId: 'levonorgestrel',
            dose: 1.5,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Tomar 1 comprimido de 1,5 mg VO em dose única o mais precocemente possível (preferencialmente nas primeiras 24 a 72 horas). Se ocorrer vômito em até 2 horas, repetir a dose imediatamente.'
          }
        ]
      },
      {
        id: 'op_levonorgestrel_com_sintomaticos',
        titulo: 'Opção 2: Levonorgestrel 1,5 mg + Antiemético + Antiespasmódico',
        subtitulo: 'Associado a sintomáticos para prevenção de náuseas ou alívio de cólica uterina.',
        itens: [
          {
            farmacoId: 'levonorgestrel',
            dose: 1.5,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Tomar 1 comprimido de 1,5 mg VO em dose única imediata.'
          },
          {
            farmacoId: 'dimenidrinato_piridoxina',
            dose: 50,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'se_necessario',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido se náuseas ou vômitos, podendo repetir de 6 em 6 horas.'
          },
          {
            farmacoId: 'escopolamina',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'se_necessario',
            intervalo: 8,
            observacaoUso: 'Tomar 1 comprimido se cólica, podendo repetir de 8 em 8 horas.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      orientacoesNaoFarmacologicas: [
        'Eficácia decrescente com o tempo: Máxima nas primeiras 24h (> 95%), reduzindo até 72h e limítrofe até 120h (5 dias).',
        'Mecanismo de ação: Inibe ou retarda o pico de LH e a liberação do óvulo (ovulação). Não é abortivo; não impede nem interrompe gravidez já implantada.',
        'Se vômito ocorrer em até 2 horas após a ingestão, repetir a tomada de 1,5 mg imediatamente.',
        'Orientar início ou retomada imediata do método contraceptivo regular (pílula, injetável, preservativo).'
      ],
      examesSolicitar: [
        'Teste de gravidez (Beta-hCG de sangue ou TIG urinário) se houver atraso menstrual prévio ou se o sangramento menstrual atrasar mais de 7 dias da data esperada.'
      ]
    }
  },

  // 2. Dismenorreia Primária
  {
    id: 'dismenorreia',
    titulo: 'Dismenorreia Primária (Cólica Menstrual Aguda)',
    categoria: 'Saúde da Mulher',
    subcategoria: 'Dor Pélvica Ginecológica',
    paginaPdf: 102,
    descricao: 'Dor pélvica espasmódica perimenstrual sem patologia pélvica identificável (pág. 102)',
    opcoesPrescricao: [
      {
        id: 'op_dismenorreia_piroxicam',
        titulo: 'Opção 1: Piroxicam + Metoclopramida (AINE de Longa Duração)',
        subtitulo: 'Inibição sustentada da síntese de prostaglandinas endometriais com comodidade posológica.',
        itens: [
          {
            farmacoId: 'piroxicam',
            dose: 20,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'se_necessario',
            intervalo: 12,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 12/12h (ou 20 mg 1x ao dia) por até 5 dias durante o período doloroso, sempre após as refeições.'
          },
          {
            farmacoId: 'metoclopramida',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'se_necessario',
            intervalo: 8,
            observacaoUso: 'Tomar 1 comprimido se náuseas ou vômitos, podendo repetir de 8 em 8 horas.'
          }
        ]
      },
      {
        id: 'op_dismenorreia_meloxicam',
        titulo: 'Opção 2: Meloxicam 7,5 mg + Metoclopramida',
        subtitulo: 'AINE preferencial COX-2 com melhor tolerabilidade gástrica.',
        itens: [
          {
            farmacoId: 'meloxicam',
            dose: 7.5,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'se_necessario',
            intervalo: 24,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido 1x ao dia por até 5 dias seguidos se dor ou cólica menstrual.'
          },
          {
            farmacoId: 'metoclopramida',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'se_necessario',
            intervalo: 8,
            observacaoUso: 'Tomar 1 comprimido se náuseas ou vômitos, de 8/8h.'
          }
        ]
      },
      {
        id: 'op_dismenorreia_antiespasmodico',
        titulo: 'Opção 3: Escopolamina + Metoclopramida (Sintomáticos sem AINE)',
        subtitulo: 'Alívio direto de espasmos da musculatura lisa uterina sem sobrecarga gástrica.',
        itens: [
          {
            farmacoId: 'escopolamina',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'se_necessario',
            intervalo: 8,
            observacaoUso: 'Tomar 1 comprimido se dor em cólica, podendo repetir de 8 em 8 horas.'
          },
          {
            farmacoId: 'metoclopramida',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'se_necessario',
            intervalo: 8,
            observacaoUso: 'Tomar 1 comprimido se náuseas ou vômitos, de 8/8h.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      orientacoesNaoFarmacologicas: [
        'Aplicação de calor local no baixo ventre (bolsa de água morna) reduz a contratilidade uterina e alivia o espasmo miometrial.',
        'Iniciar o AINE 1 a 2 dias antes do início previsto da menstruação ou imediatamente aos primeiros sinais de dor maximiza a inibição da cicloxigenase e síntese de prostaglandinas.',
        'Sinais de dismenorreia secundária: dor progressiva que não melhora com AINE/ACO, dispareunia de profundidade, início tardio (> 25 anos) ou achados anormais ao toque vaginal (suspeitar de endometriose, adenomiose ou miomas).'
      ]
    }
  },

  // 3. Sangramento Uterino Anormal Agudo (SUA)
  {
    id: 'sangramento_uterino_anormal',
    titulo: 'Sangramento Uterino Anormal Agudo (SUA)',
    categoria: 'Saúde da Mulher',
    subcategoria: 'Ginecologia Geral',
    paginaPdf: 102,
    descricao: 'Menorragia aguda sem instabilidade hemodinâmica (pág. 102-103)',
    opcoesPrescricao: [
      {
        id: 'op_sua_ambulatorial',
        titulo: 'Opção 1: Antifibrinolítico + AINE + Reposição de Ferro',
        subtitulo: 'Tratamento clínico ambulatorial com Ácido Tranexâmico, Piroxicam e Sulfato Ferroso.',
        itens: [
          {
            farmacoId: 'acido_tranexamico',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 8,
            dias: 5,
            observacaoUso: 'Tomar 2 comprimidos de 250 mg (500 mg) de 8 em 8 horas durante o período de maior fluxo menstrual (por 4 a 5 dias).'
          },
          {
            farmacoId: 'piroxicam',
            dose: 20,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido 1x ao dia por 5 dias.'
          },
          {
            farmacoId: 'sulfato-ferroso',
            dose: 40,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 30,
            observacaoUso: 'Tomar 1 comprimido de 40 mg de ferro elementar 1x ao dia em jejum ou 1h antes do almoço com suco cítrico.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      examesSolicitar: [
        'BETA-HCG QUANTITATIVO OU TESTE RÁPIDO: Obrigatório em toda mulher em idade reprodutiva com sangramento vaginal aumentado para excluir gestação, abortamento ou gravidez ectópica!',
        'Hemograma completo (avaliar anemia aguda e plaquetas).',
        'Coagulograma (TAP, TTPA, Fibrinogênio) se sangramento vultoso ou suspeita de distúrbio hematológico.',
        'Ultrassonografia Pélvica Transvaginal e Transabdominal.'
      ],
      criteriosGravidade: [
        'Sinais de choque hipovolêmico ou anemia sintomática (PAS < 90 mmHg, FC > 110 bpm, palidez cutaneomucosa +++/4+, síncope, Hb < 7-8 g/dL): internação hospitalar de urgência, acesso venoso calibroso, reposição volêmica, Ácido Tranexâmico 1g EV e avaliação ginecológica imediata para curetagem hemostática / tamponamento intrauterino.'
      ],
      classificacao: 'FIGO PALM-COEIN: Pólipo, Adenomiose, Leiomioma, Malignidade / Coagulopatia, Disfunção ovulatória, Endometrial, Iatrogênica, Não classificada.'
    }
  },

  // 4. Vaginose Bacteriana
  {
    id: 'vaginose_bacteriana',
    titulo: 'Vaginose Bacteriana (Gardnerella vaginalis)',
    categoria: 'Saúde da Mulher',
    subcategoria: 'Infecções Ginecológicas',
    paginaPdf: 103,
    descricao: 'Proliferação de anaeróbios com redução de lactobacilos e odor característico (pág. 103)',
    opcoesPrescricao: [
      {
        id: 'op_vaginose_topico',
        titulo: 'Opção 1: Metronidazol Gel Vaginal 100 mg/g (Padrão)',
        subtitulo: 'Aplicação tópica noturna por 7 a 14 noites.',
        itens: [
          {
            farmacoId: 'metronidazol-vaginal',
            dose: 1,
            unidade: 'mg',
            via: 'VAGINAL',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 14,
            observacaoUso: 'Aplicar o conteúdo de 1 aplicador cheio profundamente na vagina à noite ao deitar, por 14 noites consecutivas.'
          }
        ]
      },
      {
        id: 'op_vaginose_oral',
        titulo: 'Opção 2: Metronidazol 250 mg VO (Esquema Oral 7 dias)',
        subtitulo: 'Opção oral quando há recusa ou impossibilidade do uso de aplicador vaginal.',
        itens: [
          {
            farmacoId: 'metronidazol',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 12,
            dias: 7,
            observacaoUso: 'Tomar 2 comprimidos de 250 mg (500 mg) de 12 em 12 horas por 7 dias. NÃO ingerir bebidas alcoólicas.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      classificacao: 'Critérios de Amsel (diagnóstico com pelo menos 3 de 4): 1) Corrimento homogêneo, fluido e acinzentado; 2) pH vaginal > 4,5; 3) Teste de Whiff (das aminas) positivo com liberação de odor fétido ("peixe podre") após acréscimo de KOH a 10%; 4) Presença de "Clue cells" (células-guia) em microscopia a fresco.',
      orientacoesNaoFarmacologicas: [
        'ABSTINÊNCIA ALCOÓLICA ESTRITA: O metronidazol inibe a aldeído desidrogenase, causando efeito dissulfiram / antabuse violento se associado ao álcool (náuseas, vômitos em jato, rubor, palpitações e hipotensão). Proibido consumo de álcool durante e até 48 horas após a última dose.',
        'Evitar roupas íntimas sintéticas e calças muito justas; priorizar calcinhas de algodão e dormir sem calcinha para permitir ventilação vulvovaginal.',
        'Evitar duchas vaginais e desodorantes ou perfumes íntimos que alteram a microbiota protetora.',
        'Não há necessidade de tratamento rotineiro do parceiro sexual masculino na vaginose bacteriana.'
      ]
    }
  },

  // 5. Candidíase Vulvovaginal
  {
    id: 'candidiase_vulvovaginal',
    titulo: 'Candidíase Vulvovaginal Aguda',
    categoria: 'Saúde da Mulher',
    subcategoria: 'Infecções Ginecológicas',
    paginaPdf: 103,
    descricao: 'Prurido intenso, hiperemia e corrimento esbranquiçado em grumos (pág. 103)',
    opcoesPrescricao: [
      {
        id: 'op_candidiase_miconazol',
        titulo: 'Opção 1: Miconazol Creme Vaginal 2% (Seguro na Gravidez)',
        subtitulo: 'Tratamento tópico de escolha para gestantes e não-gestantes.',
        itens: [
          {
            farmacoId: 'miconazol-vaginal',
            dose: 1,
            unidade: 'mg',
            via: 'VAGINAL',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 7,
            observacaoUso: 'Aplicar 1 aplicador cheio profundamente na vagina à noite ao deitar por 7 noites (em gestantes ou casos graves/recorrentes: estender para 14 noites).'
          }
        ]
      },
      {
        id: 'op_candidiase_nistatina',
        titulo: 'Opção 2: Nistatina Creme Vaginal 25.000 UI/g',
        subtitulo: 'Alternativa tópica da RENAME / SUS.',
        itens: [
          {
            farmacoId: 'nistatina-vaginal',
            dose: 1,
            unidade: 'mg',
            via: 'VAGINAL',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 14,
            observacaoUso: 'Aplicar 1 aplicador cheio profundamente na vagina à noite ao deitar por 14 noites consecutivas.'
          }
        ]
      },
      {
        id: 'op_candidiase_fluconazol_oral',
        titulo: 'Opção 3: Fluconazol 150 mg VO Dose Única (Apenas Não Gestantes)',
        subtitulo: 'Tratamento oral rápido e cômodo em tomada única.',
        itens: [
          {
            farmacoId: 'fluconazol',
            dose: 150,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Tomar 1 cápsula de 150 mg VO em dose única com água. CONTRAINDICADO NA GESTAÇÃO.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      orientacoesNaoFarmacologicas: [
        'Quadro típico: Prurido vulvovaginal intenso, ardor miccional externo, dispareunia e secreção vaginal em placas brancas grumosas aderentes ("leite coalhado" ou "nata"), com pH vaginal ácido (< 4,5).',
        'CONTRAINDICAÇÃO FORMAL NA GESTAÇÃO: O Fluconazol oral está associado a risco aumentado de abortamento espontâneo e malformações congênitas. GESTANTES DEVEM UTILIZAR APENAS ANTIFÚNGICOS TÓPICOS (Miconazol ou Nistatina creme vaginal por 7 a 14 noites).',
        'Cremes vaginais com base oleosa podem enfraquecer o látex de preservativos e diafragmas; evitar relações durante o tratamento.'
      ]
    }
  },

  // 6. Tricomoníase Vaginal
  {
    id: 'tricomoniase',
    titulo: 'Tricomoníase Urogenital (Trichomonas vaginalis)',
    categoria: 'Saúde da Mulher',
    subcategoria: 'Infecções Sexualmente Transmissíveis (IST)',
    paginaPdf: 104,
    descricao: 'IST com corrimento amarelo-esverdeado bolhoso fétido e colpite focal (pág. 104)',
    opcoesPrescricao: [
      {
        id: 'op_tricomoniase_dose_unica',
        titulo: 'Opção 1: Metronidazol 2 g Dose Única VO + Gel Vaginal',
        subtitulo: 'Regime supervisionado de dose única (alta adesão) associado à terapia tópica.',
        itens: [
          {
            farmacoId: 'metronidazol',
            dose: 2000,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Tomar 8 comprimidos de 250 mg de uma só vez (2 g) VO em DOSE ÚNICA com água.'
          },
          {
            farmacoId: 'metronidazol-vaginal',
            dose: 1,
            unidade: 'mg',
            via: 'VAGINAL',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 7,
            observacaoUso: 'Aplicar 1 aplicador cheio via vaginal à noite ao deitar por 7 noites seguidas.'
          }
        ]
      },
      {
        id: 'op_tricomoniase_7_dias',
        titulo: 'Opção 2: Metronidazol 500 mg VO 12/12h por 7 dias + Gel Vaginal',
        subtitulo: 'Regime oral fracionado com melhor tolerabilidade gástrica.',
        itens: [
          {
            farmacoId: 'metronidazol',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 12,
            dias: 7,
            observacaoUso: 'Tomar 2 comprimidos de 250 mg (500 mg) de 12 em 12 horas por 7 dias. Não ingerir álcool.'
          },
          {
            farmacoId: 'metronidazol-vaginal',
            dose: 1,
            unidade: 'mg',
            via: 'VAGINAL',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 7,
            observacaoUso: 'Aplicar 1 aplicador cheio via vaginal à noite ao deitar por 7 noites.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      examesSolicitar: [
        'Rastreio de rotina para outras ISTs: Teste Rápido para HIV, VDRL quantitativo, HBsAg e Anti-HCV.'
      ],
      orientacoesNaoFarmacologicas: [
        'TRATAMENTO OBRIGATÓRIO DO(S) PARCEIRO(S) SEXUAL(IS): A tricomoníase é estritamente uma IST. O tratamento simultâneo da parceria é indispensável, mesmo na ausência de sintomas.',
        'Abstinência sexual até que a paciente e sua parceria completem o tratamento.',
        'Proibição absoluta de bebidas alcoólicas durante o tratamento e por 48h após o término devido ao efeito dissulfiram.'
      ]
    }
  },

  // 7. Gonorreia e Clamídia (Uretrite / Cervicite)
  {
    id: 'gonorreia_clamidia',
    titulo: 'Gonorreia e Clamídia (Síndrome do Corrimento Uretral / Cervicite)',
    categoria: 'Saúde da Mulher',
    subcategoria: 'Infecções Sexualmente Transmissíveis (IST)',
    paginaPdf: 104,
    descricao: 'Tratamento sindrômico empírico para N. gonorrhoeae e C. trachomatis (pág. 104)',
    opcoesPrescricao: [
      {
        id: 'op_gonorreia_padrao_sus',
        titulo: 'Opção 1: Ceftriaxona 500 mg IM + Azitromicina 1 g VO (Padrão Ouro PCDT)',
        subtitulo: 'Regime de primeira escolha do Ministério da Saúde com cobertura gonocócica de alta potência.',
        itens: [
          {
            farmacoId: 'ceftriaxona',
            dose: 500,
            unidade: 'mg',
            via: 'IM',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Aplicar 1 frasco-ampola de 500 mg IM profundo no glúteo em dose única imediata.'
          },
          {
            farmacoId: 'azitromicina',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Tomar 2 comprimidos de 500 mg (1 g) VO em dose única com água.'
          }
        ]
      },
      {
        id: 'op_gonorreia_esquema_oral',
        titulo: 'Opção 2: Azitromicina 1 g VO + Ciprofloxacino 500 mg VO (Esquema Oral UPA)',
        subtitulo: 'Esquema estritamente oral quando não houver disponibilidade de Ceftriaxona injetável.',
        itens: [
          {
            farmacoId: 'azitromicina',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Tomar 2 comprimidos de 500 mg (1 g) VO em dose única com água.'
          },
          {
            farmacoId: 'ciprofloxacino',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Tomar 1 comprimido de 500 mg VO em dose única.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      examesSolicitar: [
        'Testes rápidos e sorologias completas para HIV, Sífilis (VDRL e FTA-Abs), Hepatite B (HBsAg) e Hepatite C (Anti-HCV).'
      ],
      orientacoesNaoFarmacologicas: [
        'Abordagem sindrômica: Diante de corrimento uretral mucopurulento ou secreção endocervical turva/friável, tratar simultaneamente Clamídia e Gonococo.',
        'Tratar todas as parcerias sexuais dos últimos 60 dias.',
        'Abstinência sexual até resolução dos sintomas e término do tratamento de ambos.'
      ]
    }
  },

  // 8. Cancro Mole
  {
    id: 'cancro_mole',
    titulo: 'Cancro Mole (Haemophilus ducreyi)',
    categoria: 'Saúde da Mulher',
    subcategoria: 'Úlceras Genitais',
    paginaPdf: 105,
    descricao: 'Úlceras genitais dolorosas, múltiplas, de bordas amolecidas e fundo purulento (pág. 105)',
    opcoesPrescricao: [
      {
        id: 'op_cancro_mole_oral',
        titulo: 'Opção 1: Azitromicina 1 g VO Dose Única (Primeira Linha)',
        subtitulo: 'Regime oral prático de alta eficácia.',
        itens: [
          {
            farmacoId: 'azitromicina',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Tomar 2 comprimidos de 500 mg (1 g) VO em dose única com água.'
          }
        ]
      },
      {
        id: 'op_cancro_mole_im',
        titulo: 'Opção 2: Ceftriaxona 500 mg IM Dose Única',
        subtitulo: 'Alternativa intramuscular de dose única.',
        itens: [
          {
            farmacoId: 'ceftriaxona',
            dose: 500,
            unidade: 'mg',
            via: 'IM',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Aplicar 1 frasco-ampola de 500 mg IM no glúteo em dose única.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      orientacoesNaoFarmacologicas: [
        'Aspecto clínico: Úlceras genitais altamente dolorosas, amolecidas, com exsudato purulento fétido e fundo necrótico friável.',
        'Bubão cancroide: Em cerca de metade dos pacientes ocorre linfadenite inguinal satélite que fistuliza por orifício único.',
        'MANEJO DO BUBÃO: NUNCA REALIZAR INCISÃO CIRÚRGICA COM BISTURI (alto risco de fístulas crônicas e lesões destrutivas). Realizar apenas punção aspirativa com agulha grossa em trajeto oblíquo se houver flutuação e dor tensa.',
        'Rastrear HIV, Sífilis e hepatites. Tratar parceiros sexuais.'
      ]
    }
  },

  // 9. Linfogranuloma Venéreo (LGV)
  {
    id: 'linfogranuloma_venereo',
    titulo: 'Linfogranuloma Venéreo (Chlamydia trachomatis L1-L3)',
    categoria: 'Saúde da Mulher',
    subcategoria: 'Úlceras Genitais e Linfadenopatias',
    paginaPdf: 105,
    descricao: 'Adenopatia inguinal coalescente com múltiplos orifícios fistulosos (pág. 105)',
    opcoesPrescricao: [
      {
        id: 'op_lgv_doxiciclina',
        titulo: 'Opção 1: Doxiciclina 100 mg VO 12/12h por 21 dias (Padrão Ouro)',
        subtitulo: 'Regime de primeira linha recomendado pelo Ministério da Saúde e CDC.',
        itens: [
          {
            farmacoId: 'doxiciclina',
            dose: 100,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 12,
            dias: 21,
            observacaoUso: 'Tomar 1 comprimido de 12 em 12 horas por 21 dias com copo cheio de água. Permanecer em pé ou sentado por pelo menos 30 min.'
          }
        ]
      },
      {
        id: 'op_lgv_azitromicina',
        titulo: 'Opção 2: Azitromicina 1 g VO Semanal por 3 Semanas',
        subtitulo: 'Alternativa posológica quando houver intolerância à doxiciclina.',
        itens: [
          {
            farmacoId: 'azitromicina',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 21,
            observacaoUso: 'Tomar 2 comprimidos de 500 mg (1 g) VO uma vez por semana por 3 semanas (total de 3 doses).'
          }
        ]
      }
    ],
    observacoesClinicas: {
      orientacoesNaoFarmacologicas: [
        'Evolução clássica: Pequena úlcera herpetiforme fugaz na genitália que cicatriza despercebida, seguida por linfadenite inguinal/femoral inflamatória com o sinal do sulco inguinal e fistulização por múltiplos orifícios ("bico de regador").',
        'Em gestantes e nutrizes: Doxiciclina é contraindicada; utilizar Azitromicina 1g semanal por 3 semanas ou Eritromicina 500mg 6/6h por 21 dias.',
        'Se flutuação dos gânglios, realizar apenas punção aspirativa para alívio.'
      ]
    }
  },

  // 10. Sífilis Adquirida
  {
    id: 'sifilis',
    titulo: 'Sífilis Adquirida (Treponema pallidum)',
    categoria: 'Saúde da Mulher',
    subcategoria: 'Infecções Sexualmente Transmissíveis (IST)',
    paginaPdf: 105,
    descricao: 'Primária, Secundária, Latente Recente e Latente Tardia / Indeterminada (pág. 105-106)',
    opcoesPrescricao: [
      {
        id: 'op_sifilis_recente',
        titulo: 'Opção 1: Sífilis Recente (Primária, Secundária ou Latente < 1 ano) - Dose Única',
        subtitulo: 'Penicilina G Benzatina 2.400.000 UI IM em dose única dividida em 2 glúteos.',
        itens: [
          {
            farmacoId: 'penicilina-benzatina',
            dose: 2400000,
            unidade: 'UI',
            via: 'IM',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Aplicar 2.400.000 UI IM em dose única (1 frasco-ampola de 1.200.000 UI em cada glúteo por via intramuscular profunda).'
          }
        ]
      },
      {
        id: 'op_sifilis_tardia',
        titulo: 'Opção 2: Sífilis Tardia / Latente > 1 ano ou Indeterminada - 3 Doses Semanais',
        subtitulo: 'Penicilina G Benzatina 2.400.000 UI IM por semana por 3 semanas consecutivas.',
        itens: [
          {
            farmacoId: 'penicilina-benzatina',
            dose: 2400000,
            unidade: 'UI',
            via: 'IM',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 21,
            observacaoUso: 'Aplicar 2.400.000 UI IM (1 frasco-ampola de 1.200.000 UI em cada glúteo) uma vez por semana por 3 semanas consecutivas (total de 7.200.000 UI). O intervalo entre doses não pode ultrapassar 7 a 9 dias.'
          }
        ]
      },
      {
        id: 'op_sifilis_alergia_doxiciclina',
        titulo: 'Opção 3: Alergia Severa à Penicilina (Apenas Não Gestantes)',
        subtitulo: 'Doxiciclina 100 mg VO 12/12h por 14 a 28 dias.',
        itens: [
          {
            farmacoId: 'doxiciclina',
            dose: 100,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 12,
            dias: 28,
            observacaoUso: 'Tomar 1 comprimido de 12 em 12 horas por 14 dias (se sífilis recente) ou por 28 dias (se sífilis tardia/indeterminada). Ingerir ereto com água.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'GESTANTES: Penicilina Benzatina é a ÚNICA terapia eficaz no tratamento fetal e na prevenção da sífilis congênita. Se gestante alérgica à penicilina, a dessensibilização hospitalar é OBRIGATÓRIA (Doxiciclina não trata o concepto e é contraindicada na gravidez).'
      ],
      orientacoesNaoFarmacologicas: [
        'Reação de Jarisch-Herxheimer: Febre, exacerbação de lesões cutâneas, cefaleia e mialgia nas primeiras 24h após a primeira dose de penicilina. Trata-se de reação imunológica à destruição massiva de treponemas, autolimitada; NÃO significa alergia à penicilina.',
        'Notificação compulsória em até 7 dias.',
        'Convocar e tratar todas as parcerias sexuais.',
        'Seguimento sorológico com VDRL quantitativo no 3º, 6º, 9º e 12º mês.'
      ]
    }
  },

  // 11. Herpes Genital
  {
    id: 'herpes_genital',
    titulo: 'Herpes Genital Agudo e Recorrente (HSV-1 / HSV-2)',
    categoria: 'Saúde da Mulher',
    subcategoria: 'Úlceras Genitais',
    paginaPdf: 106,
    descricao: 'Vesículas e úlceras dolorosas agrupadas na mucosa genital e perineal (pág. 106)',
    opcoesPrescricao: [
      {
        id: 'op_herpes_primeiro_episodio',
        titulo: 'Opção 1: Primeiro Episódio Clínico (Primoinfecção Herpética)',
        subtitulo: 'Aciclovir 200 mg VO 5x ao dia (4/4h omitindo a madrugada) por 7 a 10 dias.',
        itens: [
          {
            farmacoId: 'aciclovir',
            dose: 200,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 4,
            dias: 10,
            observacaoUso: 'Tomar 1 comprimido de 4 em 4 horas durante o dia (5 vezes ao dia, omitindo a dose da madrugada: às 06h, 10h, 14h, 18h e 22h) por 7 a 10 dias.'
          }
        ]
      },
      {
        id: 'op_herpes_recorrencia',
        titulo: 'Opção 2: Recorrência Herpética (Crise Aguda de 5 dias)',
        subtitulo: 'Aciclovir 200 mg VO 5x ao dia por 5 dias iniciado aos primeiros sinais prodrômicos.',
        itens: [
          {
            farmacoId: 'aciclovir',
            dose: 200,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 4,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 4 em 4 horas (5x ao dia, omitindo a madrugada) por 5 dias. Iniciar preferencialmente na fase de formigamento ou ardência.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      orientacoesNaoFarmacologicas: [
        'Vesículas agrupadas sobre base eritematosa que se rompem formando pequenas úlceras rasas policíclicas dolorosas.',
        'Iniciar o antiviral preferencialmente nas primeiras 72 horas para acelerar a cicatrização e reduzir o tempo de transmissão viral.',
        'O tratamento não erradica o vírus latente nos gânglios sensitivos sacrais.',
        'Banhos de assento com água morna, higiene delicada e uso de roupas frouxas reduzem o desconforto.',
        'Se houver mais de 6 recorrências ao ano, encaminhar para terapia de supressão crônica com Aciclovir 400 mg 12/12h por 6 a 12 meses.'
      ]
    }
  },

  // 12. Doença Inflamatória Pélvica Aguda (DIP)
  {
    id: 'dip_aguda',
    titulo: 'Doença Inflamatória Pélvica Aguda (DIP) - Manejo Ambulatorial',
    categoria: 'Saúde da Mulher',
    subcategoria: 'Infecções Ginecológicas',
    paginaPdf: 106,
    descricao: 'Infecção polimicrobiana ascendente do trato reprodutor feminino (pág. 106-107)',
    opcoesPrescricao: [
      {
        id: 'op_dip_ambulatorial_completo',
        titulo: 'Opção 1: Tratamento Ambulatorial Tríplice Padrão + Sintomáticos',
        subtitulo: 'Ceftriaxona IM + Doxiciclina VO + Metronidazol VO + Dipirona + Metoclopramida.',
        itens: [
          {
            farmacoId: 'ceftriaxona',
            dose: 500,
            unidade: 'mg',
            via: 'IM',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Aplicar 1 frasco-ampola de 500 mg IM profundo no glúteo em dose única imediata.'
          },
          {
            farmacoId: 'doxiciclina',
            dose: 100,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 12,
            dias: 14,
            observacaoUso: 'Tomar 1 comprimido de 12 em 12 horas por 14 dias com copo cheio de água (horários sugeridos: 08h e 20h).'
          },
          {
            farmacoId: 'metronidazol',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 12,
            dias: 14,
            observacaoUso: 'Tomar 2 comprimidos de 250 mg (500 mg) de 12 em 12 horas por 14 dias. PROIBIDO ÁLCOOL.'
          },
          {
            farmacoId: 'dipirona',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'se_necessario',
            intervalo: 6,
            observacaoUso: 'Tomar 2 comprimidos de 500 mg se dor ou febre, podendo repetir de 6 em 6 horas.'
          },
          {
            farmacoId: 'metoclopramida',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'se_necessario',
            intervalo: 8,
            observacaoUso: 'Tomar 1 comprimido se náuseas ou vômitos, podendo repetir de 8 em 8 horas.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      classificacao: 'Tríade Maior obrigatória: Dor no hipogástrio/baixo ventre + dor à palpação anexial bimanual + dor à mobilização do colo uterino ao toque vaginal.',
      criteriosGravidade: [
        'CRITÉRIOS DE INTERNAÇÃO HOSPITALAR IMEDIATA: 1. Gestante; 2. Abscesso tubo-ovariano ou massa anexial palpável/ao ultrassom; 3. Abdome agudo com peritonite; 4. Intolerância a medicamentos orais (vômitos incoercíveis); 5. Febre alta (> 38,5 ºC) com sinais de sepse; 6. Falha clínica após 72 horas de antibioticoterapia oral ambulatorial.'
      ],
      orientacoesNaoFarmacologicas: [
        'REAVALIAÇÃO OBRIGATÓRIA EM 72 HORAS: A paciente deve retornar para reavaliação clínica. Se melhora documentada, manter o tratamento até completar 14 dias. Se sem melhora ou com piora, internar imediatamente para terapia parenteral.',
        'Tratar parceiros sexuais dos últimos 60 dias para evitar reinfecção.'
      ]
    }
  },

  // 13. Violência Sexual (Abuso Sexual)
  {
    id: 'violencia_sexual',
    titulo: 'Atendimento à Vítima de Violência Sexual (Profilaxia Pós-Exposição)',
    categoria: 'Saúde da Mulher',
    subcategoria: 'Emergências e Vulnerabilidade',
    paginaPdf: 107,
    descricao: 'Profilaxia imediata de ISTs não-virais, contracepção de emergência e PEP HIV (pág. 107-108)',
    opcoesPrescricao: [
      {
        id: 'op_violencia_sexual_profilaxias',
        titulo: 'Opção 1: Profilaxias Imediatas (ISTs não-virais + Contracepção de Emergência)',
        subtitulo: 'Profilaxia empírica abrangente em dose única supervisionada.',
        itens: [
          {
            farmacoId: 'ceftriaxona',
            dose: 500,
            unidade: 'mg',
            via: 'IM',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Aplicar 1 frasco-ampola de 500 mg IM profundo no glúteo em dose única imediata.'
          },
          {
            farmacoId: 'penicilina-benzatina',
            dose: 2400000,
            unidade: 'UI',
            via: 'IM',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Aplicar 2.400.000 UI IM em dose única (1 ampola de 1.200.000 UI em cada glúteo).'
          },
          {
            farmacoId: 'azitromicina',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Tomar 2 comprimidos de 500 mg (1 g) VO em dose única com água.'
          },
          {
            farmacoId: 'metronidazol',
            dose: 2000,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Tomar 8 comprimidos de 250 mg (2 g) VO em dose única com água.'
          },
          {
            farmacoId: 'levonorgestrel',
            dose: 1.5,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Tomar 1 comprimido de 1,5 mg VO em dose única imediata para contracepção de emergência (eficácia até 120 horas).'
          }
        ]
      }
    ],
    observacoesClinicas: {
      orientacoesNaoFarmacologicas: [
        'O atendimento à vítima de violência sexual é uma PRIORIDADE E EMERGÊNCIA MÉDICA. NÃO EXIGE Boletim de Ocorrência policial para realização de qualquer conduta profilática ou médica.',
        'Atendimento multiprofissional (médico, enfermagem, serviço social, psicologia) em ambiente privativo com acolhimento humanizado.',
        'Preservação de vestígios forenses se serviço de referência capacitado e com consentimento da vítima.',
        'PROFILAXIAS ESSENCIAIS ASSOCIADAS: 1. PEP HIV: Tenofovir + Lamivudina + Dolutegravir por 28 dias iniciado em até 72 horas; 2. Hepatite B: Vacina (D0, D30, D180) + Imunoglobulina Humana Hiperimune (HBIG 0,06 mL/kg IM) em até 14 dias se não vacinada ou não-imune; 3. Tétano: Vacina antitetânica + SAT/IGHAT se ferimento.'
      ],
      examesSolicitar: [
        'Testes rápidos imediatos: HIV, Sífilis (VDRL), Hepatite B (HBsAg) e Hepatite C (Anti-HCV). Teste de gravidez (Beta-hCG).'
      ]
    }
  },

  // 14. Hemotransfusão e Hemoderivados na Urgência
  {
    id: 'hemotransfusao_hemoderivados',
    titulo: 'Hemotransfusão e Manejo de Hemoderivados na Urgência',
    categoria: 'Emergências e Outros',
    subcategoria: 'Hemoterapia e Urgências Clínicas',
    paginaPdf: 109,
    descricao: 'Gatilhos transfusionais de CH, plaquetas, plasma e protocolo de transfusão maciça (pág. 109-111)',
    opcoesPrescricao: [
      {
        id: 'op_hemacias_urgencia',
        titulo: 'Opção 1: Concentrado de Hemácias (Transfusão em Urgência)',
        subtitulo: 'Transfusão de 1 a 2 unidades de CH com equipo com filtro para hemocomponentes.',
        itens: [
          {
            farmacoId: 'soro_ev',
            dose: 500,
            unidade: 'ml',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Prescrever Concentrado de Hemácias (CH): 1 a 2 bolsas EV em equipo com filtro próprio para hemotransfusão. Infundir em 60 a 120 minutos cada unidade (máximo 4 horas por bolsa).'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'GATILHOS DE CONCENTRADO DE HEMÁCIAS: 1) Normovolêmico sem cardiopatia: Hb < 7,0 g/dL; 2) Cardiopatia isquêmica (DAC/SCA) ou pós-operatório ortopédico/cardíaco: Hb < 8,0 g/dL; 3) Hemorragia digestiva alta ativa: Hb < 7,5 a 8,0 g/dL; 4) Choque hemorrágico agudo classes III e IV: transfusão imediata independente do nível laboratorial.',
        'Efeito esperado: Cada unidade de CH eleva a Hemoglobina em ≈ 1,0 g/dL e o Hematócrito em ≈ 3% no paciente adulto.',
        'PLAQUETAS: Transfundir se < 10.000/mm³ profilático (< 20.000 se sepse); < 50.000 com sangramento ativo ou punção lombar/cirurgia média; < 100.000 em TCE/neurocirurgia/politrauma. Dose: 1 unidade a cada 10 kg de peso.',
        'PLASMA FRESCO CONGELADO (PFC): INR > 1,8 com sangramento ativo ou intoxicação por varfarina sem complexo protrombínico disponível (dose: 10 a 20 mL/kg).',
        'PROTOCOLO DE TRANSFUSÃO MACIÇA: Perda de 50% da volemia em 3h ou uso de ≥ 10 bolsas de CH em 24h: utilizar relação balanceada de 1:1:1 (1 Concentrado de Hemácias : 1 Plasma Fresco Congelado : 1 Concentrado de Plaquetas).'
      ]
    }
  },

  // 15. Choque Hipovolêmico e Hemorrágico
  {
    id: 'choque_hipovolemico',
    titulo: 'Choque Hipovolêmico e Hemorrágico',
    categoria: 'Emergências e Outros',
    subcategoria: 'Emergências Clínicas e Choque',
    paginaPdf: 112,
    descricao: 'Ressuscitação volêmica guiada por metas, hemotransfusão e vasopressores (pág. 112)',
    opcoesPrescricao: [
      {
        id: 'op_choque_expansao_cristaloide',
        titulo: 'Opção 1: Ressuscitação Volêmica Inicial com Cristaloide Balanceado (Ringer Lactato)',
        subtitulo: 'Expansão volêmica rápida com Ringer Lactato para restauração da perfusão tecidual.',
        itens: [
          {
            farmacoId: 'soro_ev',
            dose: 1000,
            unidade: 'ml',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Infundir Ringer Lactato 1.000 mL EV em acesso periférico calibroso (14G ou 16G) em bolus rápido nas primeiras horas (20 a 40 mL/kg), reavaliando FC, PA e ausculta pulmonar após cada alíquota.'
          }
        ]
      },
      {
        id: 'op_choque_refratario_vasoativo',
        titulo: 'Opção 2: Choque Refratário a Volume - Suporte com Noradrenalina',
        subtitulo: 'Introdução de vasopressor quando PAM < 65 mmHg apesar da reposição volêmica adequada.',
        itens: [
          {
            farmacoId: 'soro_ev',
            dose: 500,
            unidade: 'ml',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Manter expansão volêmica cautelosa em alíquotas seriadas de 250 a 500 mL.'
          },
          {
            farmacoId: 'noradrenalina',
            dose: 8,
            unidade: 'mg',
            via: 'EV',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Diluir 2 ampolas de Noradrenalina (8 mg / 8 mL) em 250 mL de SG 5% (32 mcg/mL). Infundir em BIC iniciando a 0,05 a 0,1 mcg/kg/min, titulando para PAM ≥ 65 mmHg.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      classificacao: 'Classificação ATLS: Classe I (< 15% perda, sinais vitais normais); Classe II (15-30% perda, FC > 100 bpm, PA mantida); Classe III (30-40% perda, FC > 120 bpm, hipotensão - INDICAÇÃO DE TRANSFUSÃO); Classe IV (> 40% perda, colapso circulatório profundo).',
      criteriosGravidade: [
        'Ringer Lactato é o cristaloide de escolha balanceado (SF 0,9% em grandes volumes induz acidose hiperclorêmica grave e disfunção renal).',
        'VASOPRESSORES SOMENTE APÓS EXPANSÃO: O uso precoce de noradrenalina com leito vascular hipovolêmico vazio intensifica a vasoconstrição periférica e provoca isquemia esplâncnica e necrose tubular renal. Priorizar sempre restauração volêmica e hemostasia.'
      ]
    }
  },

  // 16. Choque Anafilático / Anafilaxia Grave
  {
    id: 'choque_anafilatico',
    titulo: 'Choque Anafilático e Anafilaxia Grave',
    categoria: 'Emergências e Outros',
    subcategoria: 'Emergências Alérgicas',
    paginaPdf: 113,
    descricao: 'Epinefrina IM imediata, expansão volêmica e medicamentos de resgate (pág. 113-114)',
    opcoesPrescricao: [
      {
        id: 'op_anafilaxia_primeira_linha',
        titulo: 'Opção 1: Conduta Imediata de Primeira Linha (Adrenalina IM + Expansão + Corticoide + Anti-histamínico)',
        subtitulo: 'Abordagem farmacológica de urgência salvadora de vidas na sala de emergência.',
        itens: [
          {
            farmacoId: 'adrenalina',
            dose: 0.5,
            unidade: 'mg',
            via: 'IM',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Aplicar 0,5 mg (0,5 mL da ampola 1 mg/mL) por via INTRAMUSCULAR profunda na face lateral da coxa (vasto lateral) IMEDIATAMENTE. Repetir a cada 5 a 15 min até 2x se refratário.'
          },
          {
            farmacoId: 'soro_ev',
            dose: 1000,
            unidade: 'ml',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Infundir SF 0,9% 1.000 mL EV em bolus rápido se hipotensão ou colapso circulatório (20 a 40 mL/kg).'
          },
          {
            farmacoId: 'hidrocortisona',
            dose: 200,
            unidade: 'mg',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Reconstituir 2 frascos de 100 mg (200 mg) em 4 mL de AD e injetar EV em bolus lento.'
          },
          {
            farmacoId: 'prometazina',
            dose: 50,
            unidade: 'mg',
            via: 'IM',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Aplicar 1 ampola (50 mg / 2 mL) por via INTRAMUSCULAR profunda exclusiva no glúteo.'
          }
        ]
      },
      {
        id: 'op_anafilaxia_choque_refratario',
        titulo: 'Opção 2: Choque Anafilático Refratário - Infusão Contínua de Epinefrina em BIC',
        subtitulo: 'Para choque resistente a doses intramusculares repetidas e expansão volêmica vigorosa.',
        itens: [
          {
            farmacoId: 'adrenalina',
            dose: 1,
            unidade: 'mg',
            via: 'EV',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Diluir 1 ampola de Epinefrina (1 mg / 1 mL) em 100 mL de SF 0,9% (10 mcg/mL). Infundir em BIC iniciando a 0,1 mcg/kg/min (titular de 0,05 a 1,0 mcg/kg/min conforme PA).'
          },
          {
            farmacoId: 'soro_ev',
            dose: 1000,
            unidade: 'ml',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Manter expansão volêmica contínua.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'A ADRENALINA IM É A DROGA DE PRIMEIRA LINHA SALVADORA DE VIDAS. Aplicar imediatamente no músculo vasto lateral da coxa. A absorção no vasto lateral é 10x mais rápida do que no subcutâneo ou deltoide.',
        'Corticoides e anti-histamínicos são drogas de SEGUNDA LINHA para prevenção de anafilaxia bifásica e alívio do prurido; NUNCA devem atrasar a administração imediata da adrenalina.',
        'Posição do paciente: Deitar o paciente em decúbito dorsal com membros inferiores elevados. Evitar mudança súbita para posição sentada/em pé (risco de parada cardiorrespiratória por colapso do retorno venoso - síndrome do ventrículo vazio).',
        'MONITORIZAÇÃO MÍNIMA DE 6 A 12 HORAS na unidade de emergência devido ao risco de choque anafilático bifásico tardio.'
      ]
    }
  },

  // 17. Intoxicação Exógena Aguda
  {
    id: 'intoxicacao_exogena',
    titulo: 'Intoxicação Exógena Aguda e Descontaminação Gastrointestinal',
    categoria: 'Emergências e Outros',
    subcategoria: 'Toxicologia Médica e Antídotos',
    paginaPdf: 114,
    descricao: 'Lavagem gástrica, carvão ativado seriado e antídotos específicos (pág. 114)',
    opcoesPrescricao: [
      {
        id: 'op_carvao_dose_unica',
        titulo: 'Opção 1: Descontaminação Gastrointestinal com Carvão Ativado (Dose Inicial)',
        subtitulo: 'Carvão ativado em pó diluído via oral ou por sonda nasogástrica calibrosa.',
        itens: [
          {
            farmacoId: 'carvao-ativado',
            dose: 50000,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Diluir 50 g de Carvão Ativado em 200 a 250 mL de SF 0,9% ou água, homogeneizar vigorosamente e administrar imediatamente por VO ou sonda nasogástrica (SNG).'
          }
        ]
      },
      {
        id: 'op_overdose_opioide_naloxona',
        titulo: 'Opção 2: Intoxicação / Overdose por Opióides - Reversão com Naloxona',
        subtitulo: 'Antídoto específico para restauração do drive respiratório em vigência de depressão ventilatória.',
        itens: [
          {
            farmacoId: 'naloxona',
            dose: 0.4,
            unidade: 'mg',
            via: 'EV',
            tipoUso: 'se_necessario',
            intervalo: 1,
            observacaoUso: 'Administrar 0,4 mg (1 ampola) EV lento em 1 a 2 minutos. Pode repetir alíquotas a cada 2 a 3 minutos até reversão da bradipneia e retorno da respiração espontânea.'
          }
        ]
      },
      {
        id: 'op_sindrome_colinergica_atropina',
        titulo: 'Opção 3: Intoxicação por Organofosforados / Carbamatos (Síndrome Colinérgica) - Atropinização',
        subtitulo: 'Antagonismo muscarínico agressivo até resolução da hipersecreção broncopulmonar.',
        itens: [
          {
            farmacoId: 'atropina',
            dose: 2,
            unidade: 'mg',
            via: 'EV',
            tipoUso: 'se_necessario',
            intervalo: 1,
            observacaoUso: 'Administrar 1 a 2 mg EV em bolus a cada 3 a 5 minutos até atingir sinais de atropinização (secreções pulmonares secas, ausculta limpa, FC > 80 bpm).'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'Vias aéreas e nível de consciência: Se Glasgow < 8, INTUBAR COM CUFF INSUFLADO ANTES de passar sonda ou administrar carvão ativado devido ao risco gravíssimo de broncoaspiração química maciça fatal.',
        'O Carvão Ativado NÃO adsorve: Álcoois (etanol/metanol), cáusticos (ácidos fortes e soda cáustica), ferro, lítio e potássio.',
        'Lavagem gástrica: Indicada somente se ingestão recente (< 1 hora) de substância altamente letal sem antídoto específico.',
        'Ligar para o Centro de Informação e Assistência Toxicológica (CIATox: 0800-722-6001).'
      ]
    }
  },

  // 18. Acidente com Material Biológico (PEP HIV)
  {
    id: 'acidente_material_biologico',
    titulo: 'Acidente com Material Biológico e Profilaxia Pós-Exposição (PEP HIV)',
    categoria: 'Emergências e Outros',
    subcategoria: 'Infectologia e Saúde do Trabalhador',
    paginaPdf: 114,
    descricao: 'Manejo de exposição ocupacional ou sexual de risco para vírus de transmissão sanguínea (pág. 114)',
    opcoesPrescricao: [
      {
        id: 'op_pep_hiv_completa',
        titulo: 'Opção 1: Esquema Padrão de Profilaxia Pós-Exposição (PEP) ao HIV por 28 dias',
        subtitulo: 'TDF + 3TC (Tenofovir + Lamivudina 300/300 mg) + Dolutegravir 50 mg por 28 dias.',
        itens: [
          {
            farmacoId: 'tenofovir-lamivudina',
            dose: 600,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 28,
            observacaoUso: 'Tomar 1 comprimido por via oral uma vez ao dia com água, no mesmo horário, durante 28 dias seguidos sem interrupção.'
          },
          {
            farmacoId: 'dolutegravir',
            dose: 50,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 28,
            observacaoUso: 'Tomar 1 comprimido de 50 mg por via oral uma vez ao dia com água, junto com o Tenofovir + Lamivudina, durante 28 dias consecutivos.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      orientacoesNaoFarmacologicas: [
        'CUIDADOS LOCAIS IMEDIATOS: Lavar abundante e exaustivamente a área exposta com água e sabão (ou soro fisiológico em mucosas/olhos). NUNCA espremer o ferimento ou aplicar soluções cáusticas.',
        'JANELA DE OPORTUNIDADE: Iniciar a PEP o mais rápido possível, preferencialmente nas primeiras 2 horas e no MÁXIMO até 72 horas pós-exposição. Duração estrita de 28 dias.',
        'CONDUTA PARA HEPATITE B: Se o acidentado não for vacinado ou não tiver anticorpos protetores documentados (Anti-HBs < 10 mUI/mL), prescrever vacina contra hepatite B + Imunoglobulina Humana Hiperimune (HBIG 0,06 mL/kg IM) em até 14 dias.'
      ],
      examesSolicitar: [
        'Testes rápidos IMEDIATOS da pessoa-fonte (se disponível) e do acidentado: Teste Rápido para HIV, HBsAg, Anti-HCV e VDRL. Se fonte HIV negativa confirmada, a PEP pode ser suspensa com segurança.'
      ]
    }
  },

  // 19. Profilaxia Antirrábica Humana
  {
    id: 'profilaxia_antirrabica',
    titulo: 'Profilaxia da Raiva Humana Pós-Exposição',
    categoria: 'Emergências e Outros',
    subcategoria: 'Zoonoses e Imunobiológicos',
    paginaPdf: 114,
    descricao: 'Conduta em mordeduras, arranhaduras ou contato com saliva de mamíferos (pág. 114)',
    opcoesPrescricao: [
      {
        id: 'op_raiva_sorovacinacao',
        titulo: 'Opção 1: Sorovacinação Antirrábica (Acidente Grave / Animal Silvestre / Suspeito)',
        subtitulo: 'Soro Antirrábico Heterólogo infiltrado no ferimento + Vacina de cultivo celular em 4 doses.',
        itens: [
          {
            farmacoId: 'soro-antirrabico',
            dose: 2000,
            unidade: 'UI',
            via: 'IM',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Administrar 40 UI/kg de Soro Antirrábico Heterólogo (SAR) em dose única imediata. Infiltrar a maior quantidade possível no interior e bordas do ferimento; o restante aplicar IM profundo distante do sítio da vacina.'
          },
          {
            farmacoId: 'vacina-antirrabica',
            dose: 1,
            unidade: 'mg',
            via: 'IM',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 14,
            observacaoUso: 'Aplicar 1 dose IM profunda estritamente no músculo DELTOIDE nos dias 0, 3, 7 e 14 pós-acidente. PROIBIDO APLICAR NO GLÚTEO.'
          }
        ]
      },
      {
        id: 'op_raiva_apenas_vacina',
        titulo: 'Opção 2: Apenas Vacinação (Acidente Leve com Animal Suspeito ou Cão Observável)',
        subtitulo: 'Vacina antirrábica de cultivo celular em 4 doses (D0, D3, D7 e D14).',
        itens: [
          {
            farmacoId: 'vacina-antirrabica',
            dose: 1,
            unidade: 'mg',
            via: 'IM',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 14,
            observacaoUso: 'Aplicar 1 dose IM no deltoide no D0, D3, D7 e D14. Se cão/gato permanecer sadio por 10 dias de observação, o esquema vacinal pode ser suspenso.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      orientacoesNaoFarmacologicas: [
        'CONDUTA LOCAL IMEDIATA SALVADORA: Lavar imediata, abundante e vigorosamente a ferida com ÁGUA CORRENTE E SABÃO durante pelo menos 15 minutos e aplicar antisséptico (iodopolividona ou clorexidina degermante). Esta conduta mecânica elimina mais de 90% dos vírus rábicos inoculados.',
        'NÃO SUTURAR A FERIDA: A sutura facilita a inoculação do vírus nos nervos periféricos e aumenta significativamente o risco de infecção. Se estritamente necessário por motivos hemostáticos, realizar aproximação frouxa com pontos esparsos SOMENTE APÓS a infiltração de todo o soro antirrábico no leito da lesão.',
        'FERIMENTOS GRAVES: Lesões em face, cabeça, pescoço, mãos e pés; ferimentos profundos, múltiplos ou puntiformes; e QUALQUER acidente provocado por morcego, mamífero silvestre (macaco, raposa, gambá) ou animal raivoso que fugiu.',
        'Atualizar a vacinação e profilaxia antitetânica.'
      ]
    }
  }
];
