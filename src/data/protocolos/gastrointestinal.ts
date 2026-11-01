import { ProtocoloConduta } from '../../types/protocolos';

export const protocolosGastrointestinal: ProtocoloConduta[] = [
  {
    id: 'diarreia_aguda_gastroenterite',
    titulo: 'Diarreia Aguda e Gastroenterite Viral',
    categoria: 'Sistema Gastrointestinal',
    subcategoria: 'Diarreias Inespecíficas e Hidratação',
    paginaPdf: 30,
    descricao: 'Protocolo de reidratação oral, probióticos e sintomáticos para gastroenterite aguda infecciosa.',
    opcoesPrescricao: [
      {
        id: 'diarreia_opcao1_dor',
        titulo: 'Opção 1 - Floratil + Escopolamina + Metoclopramida + SRO',
        subtitulo: 'Esquema clássico para gastroenterite com predomínio de cólica abdominal',
        itens: [
          {
            farmacoId: 'saccharomyces_boulardii',
            forma: 'cap',
            dose: 200,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 2,
            dias: 5,
            orientacaoExtra: 'Tomar de preferência em jejum ou 30 minutos antes das refeições com água fria.'
          },
          {
            farmacoId: 'escopolamina',
            forma: 'cp',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 3,
            condicao: 'cólica abdominal ou dor na barriga'
          },
          {
            farmacoId: 'metoclopramida',
            forma: 'cp',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 3,
            condicao: 'náuseas ou vômitos'
          },
          {
            farmacoId: 'sro',
            forma: 'sol_sro',
            dose: 250,
            unidade: 'ml',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'evacuações diarreicas líquidas',
            orientacaoExtra: 'Diluir 1 envelope em 1 litro de água filtrada ou fervida. Beber de 200 a 400 mL em pequenos goles após cada evacuação líquida.'
          }
        ]
      },
      {
        id: 'diarreia_opcao2_febre',
        titulo: 'Opção 2 - Floratil + Dipirona + Metoclopramida + SRO',
        subtitulo: 'Para quadros com predomínio de febre, dor no corpo e náuseas',
        itens: [
          {
            farmacoId: 'saccharomyces_boulardii',
            forma: 'cap',
            dose: 200,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 2,
            dias: 5
          },
          {
            farmacoId: 'dipirona',
            forma: 'cp',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'dor no corpo ou febre'
          },
          {
            farmacoId: 'metoclopramida',
            forma: 'cp',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 3,
            condicao: 'náuseas ou vômitos'
          },
          {
            farmacoId: 'sro',
            forma: 'sol_sro',
            dose: 250,
            unidade: 'ml',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'evacuações diarreicas líquidas'
          }
        ]
      },
      {
        id: 'diarreia_opcao3_completa',
        titulo: 'Opção 3 - Terapia Sintomática Completa (Dor + Cólica + Vômitos)',
        subtitulo: 'Cobertura abrangente para cólicas intensas, febre e desidratação',
        itens: [
          {
            farmacoId: 'saccharomyces_boulardii',
            forma: 'cap',
            dose: 200,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 2,
            dias: 5
          },
          {
            farmacoId: 'dipirona',
            forma: 'cp',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'febre ou dor'
          },
          {
            farmacoId: 'escopolamina',
            forma: 'cp',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 3,
            condicao: 'cólica abdominal intensa'
          },
          {
            farmacoId: 'metoclopramida',
            forma: 'cp',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 3,
            condicao: 'náuseas ou vômitos'
          },
          {
            farmacoId: 'sro',
            forma: 'sol_sro',
            dose: 250,
            unidade: 'ml',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'evacuações líquidas'
          }
        ]
      },
      {
        id: 'diarreia_loperamida',
        titulo: 'Opção 4 - Loperamida (Apenas Diarreia Aquosa Invasiva Negativa)',
        subtitulo: 'Indicado estritamente se > 5 evacuações líquidas/dia SEM sangue e SEM febre',
        itens: [
          {
            farmacoId: 'loperamida',
            forma: 'cp',
            dose: 4,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'após cada evacuação líquida (iniciar com 2 comprimidos, máx. 8 cp/dia)',
            orientacaoExtra: 'Tomar 2 comprimidos (4 mg) de início e 1 comprimido (2 mg) após cada nova evacuação líquida desfeita. Parar assim que as fezes ficarem moldadas ou após 12h sem evacuar.'
          },
          {
            farmacoId: 'sro',
            forma: 'sol_sro',
            dose: 1,
            unidade: 'sachet',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'evacuações'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'Desidratação moderada a grave (olhos encovados, turgor diminuído, boca seca, letargia, oligúria/anúria)',
        'Diarreia com fezes sanguinolentas, muco ou pus (disenteria infecciosa invasiva)',
        'Sinais de choque hipovolêmico ou toxemia (hipotensão arterial, taquicardia desproporcional, pulso fino)',
        'Idosos e imunodeprimidos com risco elevado de sepse intestinal e distúrbios hidroeletrolíticos graves'
      ],
      examesSolicitar: [
        'Considerar exames na presença de toxemia, diarreia invasiva ou desidratação grave:',
        'Hemograma completo (leucocitose com desvio à esquerda em bacterianas)',
        'Ureia e Creatinina (avaliação de insuficiência renal pré-renal por desidratação)',
        'Eletrólitos: Sódio (Na+), Potássio (K+), Cloro (Cl-) e Gasometria se acidose metabólica',
        'Coprocultura, pesquisa de leucócitos fecais e sangue oculto',
        'Pesquisa de toxina A/B para Clostridioides difficile se história de uso prévio de antibióticos'
      ],
      orientacoesNaoFarmacologicas: [
        'Plano A de hidratação: Ingerir líquidos caseiros (água de coco, sucos naturais, chás, soro) em abundância',
        'Dieta obstipante leve: arroz branco, torradas, batata cozida, cenoura cozida, banana-maçã, maçã sem casca',
        'Evitar cafeína, leite e derivados (deficiência transitória de lactase), alimentos gordurosos, frituras e ultraprocessados',
        'Higiene rigorosa das mãos com água e sabão antes das refeições e após utilizar o sanitário'
      ],
      classificacao: 'Gastroenterite Viral (autolimitada, 3 a 7 dias) vs Bacteriana Invasiva (Shigella, Salmonella, Campylobacter) vs Diarreia por C. difficile'
    }
  },
  {
    id: 'gastrite_drge',
    titulo: 'Gastrite Aguda e DRGE (Doença do Refluxo Gastroesofágico)',
    categoria: 'Sistema Gastrointestinal',
    subcategoria: 'Distúrbios Ácido-Pépticos',
    paginaPdf: 29,
    descricao: 'Supressão ácida e alívio de sintomas dispépticos, pirose e regurgitação ácida.',
    opcoesPrescricao: [
      {
        id: 'gastrite_opcao1',
        titulo: 'Opção 1 - Omeprazol + Domperidona + Simeticona',
        subtitulo: 'Esquema tríplice para dispepsia com lentificação gástrica e refluxo',
        itens: [
          {
            farmacoId: 'omeprazol',
            forma: 'cap',
            dose: 40,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 1,
            dias: 30,
            orientacaoExtra: 'Tomar 2 cápsulas de 20 mg (40 mg) pela manhã em jejum rigoroso, 30 minutos antes do café da manhã.'
          },
          {
            farmacoId: 'domperidona',
            forma: 'cp',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 3,
            dias: 14,
            orientacaoExtra: 'Tomar 1 comprimido cerca de 15 a 30 minutos antes das principais refeições (café, almoço e jantar).'
          },
          {
            farmacoId: 'simeticona',
            forma: 'cp',
            dose: 40,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'estufamento, gases ou dor abdominal'
          }
        ]
      },
      {
        id: 'gastrite_opcao2_basica',
        titulo: 'Opção 2 - Omeprazol Monoterapia (Uso Habitual)',
        subtitulo: 'Controle de pirose e epigastralgia ácida típica sem náuseas',
        itens: [
          {
            farmacoId: 'omeprazol',
            forma: 'cap',
            dose: 20,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 1,
            dias: 30,
            orientacaoExtra: 'Tomar 1 cápsula pela manhã em jejum, 30 minutos antes do café da manhã.'
          },
          {
            farmacoId: 'simeticona',
            forma: 'cp',
            dose: 40,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'gases ou sensação de plenitude'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'Sinais de alarme para Hemorragia Digestiva Alta (HDA): hematêmese, vômitos em borra de café, melena, síncope ou hipotensão',
        'Disfagia progressiva ou odinofagia',
        'Perda ponderal involuntária significativa',
        'Idade > 45-50 anos com sintomas dispépticos de início recente (indicação mandatória de Endoscopia Digestiva Alta - EDA)',
        'Anemia ferropriva de etiologia não explicada ou massa abdominal palpável'
      ],
      orientacoesNaoFarmacologicas: [
        'Elevar a cabeceira da cama em 15 cm a 20 cm (usar calços sob os pés da cabeceira da cama)',
        'Evitar deitar-se nas 2 a 3 horas seguintes às refeições',
        'Fracionar a alimentação em refeições menores e mais frequentes (evitar grandes volumes gástricos)',
        'Evitar alimentos desencadeantes: café, refrigerantes, bebidas alcoólicas, chocolate, frutas cítricas, frituras e pimenta',
        'Cessação do tabagismo e controle do sobrepeso/obesidade'
      ]
    }
  },
  {
    id: 'meteorismo_gases',
    titulo: 'Meteorismo e Flatulência Funcional',
    categoria: 'Sistema Gastrointestinal',
    subcategoria: 'Distensão e Dor por Gases',
    paginaPdf: 30,
    descricao: 'Alívio sintomático de distensão abdominal por gases, cólicas e desconforto funcional.',
    opcoesPrescricao: [
      {
        id: 'meteorismo_padrao',
        titulo: 'Opção Padrão - Simeticona + Metoclopramida + Dipirona',
        subtitulo: 'Conduta sintomática recomendada no Guia da UPA 2026',
        itens: [
          {
            farmacoId: 'simeticona',
            forma: 'cp',
            dose: 40,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'dor abdominal ou sensação de gases'
          },
          {
            farmacoId: 'metoclopramida',
            forma: 'cp',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 3,
            condicao: 'náuseas ou vômitos associados'
          },
          {
            farmacoId: 'dipirona',
            forma: 'cp',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'dor de maior intensidade ou desconforto'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'Descartar Abdome Agudo Obstrutivo: parada de eliminação de fezes e gases, distensão abdominal progressiva, vômitos fecalóides, ruídos hidroaéreos metálicos ou em silêncio',
        'Sinais de irritação peritoneal (dor à descompressão brusca / sinal de Blumberg positivo)'
      ],
      orientacoesNaoFarmacologicas: [
        'Evitar ingestão rápida de alimentos, mastigar devagar para reduzir aerofagia',
        'Evitar bebidas gaseificadas (refrigerantes, água com gás, cerveja) e gomas de mascar',
        'Reduzir temporariamente alimentos altamente fermentáveis (FODMAPs: feijão, repolho, brócolis, cebola, leite)'
      ]
    }
  },
  {
    id: 'constipacao_intestinal',
    titulo: 'Constipação Intestinal Aguda e Funcional',
    categoria: 'Sistema Gastrointestinal',
    subcategoria: 'Motilidade Intestinal',
    paginaPdf: 29,
    descricao: 'Laxativos osmóticos, alívio de distensão por gases e medidas comportamentais do Guia da UPA.',
    opcoesPrescricao: [
      {
        id: 'constipacao_lactulose',
        titulo: 'Opção 1 - Lactulose Xarope + Simeticona',
        subtitulo: 'Laxativo osmótico seguro de primeira escolha para amolecimento das fezes',
        itens: [
          {
            farmacoId: 'lactulose',
            forma: 'sol',
            dose: 20,
            unidade: 'ml',
            via: 'VO',
            modo: 'continuo',
            freq: 2,
            dias: 7,
            orientacaoExtra: 'Tomar 15 a 30 mL ao dia, preferencialmente pela manhã em jejum ou dividido em 2 tomadas.'
          },
          {
            farmacoId: 'simeticona',
            forma: 'cp',
            dose: 40,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'dor abdominal ou sensação de estufamento'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'Descartar Fecaloma impactado em idosos e acamados (necessita toque retal e lavagem/remoção manual ou clister glicerinado)',
        'Sinais de obstrução mecânica ou vômitos fecais (contraindicado laxante oral em obstrução)',
        'Sangramento retal indolor ou dor anal excruciante (descartar fissura anal e hemorroida trombosada)'
      ],
      orientacoesNaoFarmacologicas: [
        'Ingerir bastante água e líquidos (8 a 10 copos de 200 mL por dia, totalizando pelo menos 2 litros/dia)',
        'Dieta rica em fibras alimentares: frutas com casca (mamão, ameixa, laranja com bagaço), verduras cruas, cereais integrais e aveia',
        'Praticar atividade física regular e tentar evacuar diariamente no mesmo horário sem inibir o reflexo evacuatório',
        'Utilizar apoio sob os pés (banquinho) ao sentar no vaso sanitário para simular a posição de cócoras e retificar o reto'
      ]
    }
  },
  {
    id: 'diarreia_c_difficile',
    titulo: 'Diarreia por Clostridioides difficile (Colite Pseudomembranosa)',
    categoria: 'Sistema Gastrointestinal',
    subcategoria: 'Diarreia Pós-Antibiótico',
    paginaPdf: 33,
    descricao: 'Suspeitar em pacientes com diarreia profusa, dor e febre após uso recente de antibióticos.',
    opcoesPrescricao: [
      {
        id: 'c_difficile_metronidazol',
        titulo: 'Opção Padrão UPA - Metronidazol Oral + Floratil + SRO',
        subtitulo: 'Tratamento de episódios leves a moderados no Guia UPA 2026',
        itens: [
          {
            farmacoId: 'metronidazol',
            forma: 'cp',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 3,
            dias: 10,
            orientacaoExtra: 'Tomar 500 mg (2 comprimidos de 250 mg) de 8 em 8 horas por 10 a 14 dias com as refeições.'
          },
          {
            farmacoId: 'saccharomyces_boulardii',
            forma: 'cap',
            dose: 200,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 2,
            dias: 10,
            orientacaoExtra: 'Auxilia na restauração da flora e redução de recidiva de toxina C. difficile.'
          },
          {
            farmacoId: 'dipirona',
            forma: 'cp',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'febre ou dor'
          },
          {
            farmacoId: 'sro',
            forma: 'sol_sro',
            dose: 250,
            unidade: 'ml',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'evacuações diarreicas'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'CONTRAINDICAÇÃO ABSOLUTA DE LOPERAMIDA OU OPIOIDES (risco elevadíssimo de megacólon tóxico, perfuração colônica e peritonite fatal)',
        'Sinais de gravidade: Leucocitose > 15.000 ou Creatinina sérica > 1,5 vezes o basal (indicação de Vancomicina oral 125 mg 6/6h e internação)',
        'Sinais fulminantes: hipotensão, choque, íleo paralítico, distensão abdominal maciça e acidose láctica'
      ],
      examesSolicitar: [
        'Pesquisa de Toxinas A e B de C. difficile nas fezes (ELISA ou PCR molecular)',
        'Hemograma completo, Ureia, Creatinina, Eletrólitos e Lactato',
        'Radiografia ou TC de abdome se suspeita de megacólon tóxico (dilatação colônica > 6 cm)'
      ]
    }
  },
  {
    id: 'parasitoses_intestinais',
    titulo: 'Parasitoses Intestinais e Verminoses',
    categoria: 'Sistema Gastrointestinal',
    subcategoria: 'Helmintíases e Protozooses',
    paginaPdf: 35,
    descricao: 'Esquemas antiparasitários empíricos e direcionados (Albendazol, Ivermectina, Nitazoxanida, Secnidazol).',
    opcoesPrescricao: [
      {
        id: 'parasitose_albendazol',
        titulo: 'Opção 1 - Albendazol 400 mg (Dose Única + Repetir após 10 dias)',
        subtitulo: 'Tratamento de ampla cobertura para Ascaris, Enterobius, Necator, Ancylostoma e Trichuris',
        itens: [
          {
            farmacoId: 'albendazol',
            forma: 'cp',
            dose: 400,
            unidade: 'mg',
            via: 'VO',
            modo: 'agora',
            freq: 1,
            orientacaoExtra: 'Mastigar ou engolir 1 comprimido de 400 mg em dose única junto com uma refeição gordurosa. Repetir 1 comprimido após 10 a 14 dias para erradicar ovos eclodidos.'
          }
        ]
      },
      {
        id: 'parasitose_nitazoxanida',
        titulo: 'Opção 2 - Nitazoxanida 500 mg (Annita) de 12/12h por 3 dias',
        subtitulo: 'Ação antiparasitária abrangente contra helmintos e protozoários (Giardia, Ameba, Criptosporídeos)',
        itens: [
          {
            farmacoId: 'nitazoxanida',
            forma: 'cp',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 2,
            dias: 3,
            orientacaoExtra: 'Tomar 1 comprimido de 12 em 12 horas após as refeições por 3 dias consecutivos. Pode tingir a urina de amarelo-esverdeado.'
          }
        ]
      },
      {
        id: 'parasitose_ivermectina',
        titulo: 'Opção 3 - Ivermectina 6 mg (Estrongiloidíase / Escabiose associada)',
        subtitulo: 'Dose calculada pelo peso corporal (cerca de 200 mcg/kg), repetir após 7 a 14 dias',
        itens: [
          {
            farmacoId: 'ivermectina',
            forma: 'cp',
            dose: 12,
            unidade: 'mg',
            via: 'VO',
            modo: 'agora',
            freq: 1,
            orientacaoExtra: 'Tomar 2 comprimidos de 6 mg (12 mg para 60-80 kg) em jejum com água. Repetir a mesma dose após 7 a 14 dias.'
          }
        ]
      },
      {
        id: 'parasitose_secnidazol',
        titulo: 'Opção 4 - Secnidazol 1000 mg (Amebíase / Giardíase)',
        subtitulo: 'Dose única de 2 g (2 comprimidos de 1000 mg) para protozoários luminais',
        itens: [
          {
            farmacoId: 'secnidazol',
            forma: 'cp',
            dose: 2000,
            unidade: 'mg',
            via: 'VO',
            modo: 'agora',
            freq: 1,
            orientacaoExtra: 'Tomar 2 comprimidos de 1000 mg (2 g) de uma vez em dose única ao fim de uma refeição. Proibido consumo de álcool por 72h (efeito antabuse).'
          }
        ]
      }
    ],
    observacoesClinicas: {
      orientacoesNaoFarmacologicas: [
        'Lavar muito bem as mãos antes das refeições e após usar o banheiro',
        'Lavar cuidadosamente frutas e verduras em água corrente e deixar de molho em solução de hipoclorito de sódio (1 colher de sopa por litro de água por 15 minutos)',
        'Beber somente água filtrada, fervida ou tratada',
        'Andar sempre calçado (prevenção de penetração transcutânea por Ancylostoma e Strongyloides)',
        'Cortar e manter as unhas bem limpas; lavar roupas de cama e toalhas com água quente em caso de oxiuríase'
      ]
    }
  },
  {
    id: 'diarreia_cyclospora_protozoarios',
    titulo: 'Diarreia por Cyclospora, Isospora belli e Protozoários',
    categoria: 'Sistema Gastrointestinal',
    subcategoria: 'Diarreia Prolongada / Imunossuprimidos',
    paginaPdf: 34,
    descricao: 'Esquemas para infecções por coccídeos intestinais (Cyclospora cayetanensis, Cystoisospora belli) e diarreias prolongadas por protozoários luminais (> 7 dias).',
    opcoesPrescricao: [
      {
        id: 'cyclospora_bactrim',
        titulo: 'Opção 1 - Sulfametoxazol + Trimetoprima 400/80 mg (Cyclospora e Isospora)',
        subtitulo: 'Tratamento de primeira escolha: 2 comprimidos de 12/12h por 14 dias (comum em pacientes imunocomprometidos)',
        itens: [
          {
            farmacoId: 'sulfametoxazol-trimetoprima',
            forma: 'cp',
            dose: 160,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 2,
            dias: 14,
            orientacaoExtra: 'Tomar 2 comprimidos de 400/80 mg (ou 1 comprimido F 800/160 mg) de 12 em 12 horas por 14 dias consecutivos com bastante líquido.'
          },
          {
            farmacoId: 'saccharomyces_boulardii',
            forma: 'cap',
            dose: 200,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 2,
            dias: 5,
            orientacaoExtra: 'Tomar 1 cápsula de 12 em 12 horas por 5 dias.'
          },
          {
            farmacoId: 'dipirona',
            forma: 'cp',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'dor ou febre'
          },
          {
            farmacoId: 'escopolamina',
            forma: 'cp',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 3,
            condicao: 'dor em cólica'
          },
          {
            farmacoId: 'metoclopramida',
            forma: 'cp',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 3,
            condicao: 'náuseas ou vômitos'
          },
          {
            farmacoId: 'sro',
            forma: 'sol_sro',
            dose: 250,
            unidade: 'ml',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'evacuações líquidas'
          }
        ]
      },
      {
        id: 'protozoarios_secnidazol',
        titulo: 'Opção 2 - Secnidazol 1000 mg (Diarreia > 7 dias por Protozoários / Nematelmintos)',
        subtitulo: 'Suspeitar se diarreia > 7 dias: cólica, febre e tenesmo (Amebíase) ou fezes volumosas/esteatorreia (Giardíase)',
        itens: [
          {
            farmacoId: 'secnidazol',
            forma: 'cp',
            dose: 2000,
            unidade: 'mg',
            via: 'VO',
            modo: 'agora',
            freq: 1,
            orientacaoExtra: 'Tomar 2 comprimidos de 1000 mg (2 g) de uma vez em dose única ao fim de uma refeição. Proibido ingestão de álcool por 72h.'
          },
          {
            farmacoId: 'saccharomyces_boulardii',
            forma: 'cap',
            dose: 200,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 2,
            dias: 5,
            orientacaoExtra: 'Tomar 1 cápsula de 12 em 12 horas por 5 dias.'
          },
          {
            farmacoId: 'dipirona',
            forma: 'cp',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'dor ou febre'
          },
          {
            farmacoId: 'escopolamina',
            forma: 'cp',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 3,
            condicao: 'dor em cólica'
          },
          {
            farmacoId: 'metoclopramida',
            forma: 'cp',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 3,
            condicao: 'náuseas ou vômitos'
          },
          {
            farmacoId: 'sro',
            forma: 'sol_sro',
            dose: 250,
            unidade: 'ml',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'evacuações líquidas'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'Diarreia prolongada (> 14 dias) em imunodeprimidos ou portadores de HIV pode levar a desidratação grave e choque hipovolêmico.',
        'Sinais de disenteria invasiva com febre alta e toxemia necessitam de hidratação venosa vigorosa e coprocultura.',
        'Proibido uso de antimotílicos (loperamida) em quadros de febre e diarreia inflamatória.'
      ],
      examesSolicitar: [
        'Exame Parasitológico de Fezes (EPF) em 3 amostras seriadas com métodos específicos para coccídeos (coloração de Kinyoun / Ziehl-Neelsen modificado para Cyclospora e Isospora)',
        'Hemograma completo, Eletrólitos, Ureia e Creatinina'
      ]
    }
  }
];
