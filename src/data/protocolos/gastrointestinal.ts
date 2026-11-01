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
  }
];
