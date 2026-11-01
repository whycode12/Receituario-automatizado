import { ProtocoloConduta } from '../../types/protocolos';

export const protocolosOculares: ProtocoloConduta[] = [
  {
    id: 'conjuntivite_aguda',
    titulo: 'Conjuntivite Infecciosa Aguda (Bacteriana / Viral)',
    categoria: 'Alterações Oculares',
    subcategoria: 'Superfície Ocular e Córnea',
    paginaPdf: 25,
    descricao: 'Abordagem tópica e cuidados de higiene para conjuntivite bacteriana e ceratoconjuntivite na emergência.',
    opcoesPrescricao: [
      {
        id: 'conjuntivite_tobramicina',
        titulo: 'Opção 1 - Tobramicina Colírio 0,3% + Lavagem Gelada',
        subtitulo: 'Esquema de primeira linha para conjuntivite bacteriana purulenta',
        itens: [
          {
            farmacoId: 'tobramicina',
            forma: 'gotas',
            dose: 1,
            unidade: 'gotas',
            via: 'OFTALMICA',
            modo: 'continuo',
            freq: 4,
            dias: 7,
            orientacaoExtra: 'Instilar 1 gota no saco conjuntival do olho acometido de 6 em 6 horas por 7 dias. Não encostar o bico conta-gotas no olho ou nos cílios.'
          },
          {
            farmacoId: 'soro_fisiologico_nasal',
            forma: 'sol',
            dose: 10,
            unidade: 'ml',
            via: 'TOPICA',
            modo: 'sn',
            freq: 4,
            condicao: 'secreção ou irritação ocular',
            orientacaoExtra: 'Lavar os olhos com compressa de gaze umedecida em soro fisiológico 0,9% gelado 4 vezes ao dia. Usar uma gaze limpa para cada olho.'
          }
        ]
      },
      {
        id: 'conjuntivite_ciprofloxacino',
        titulo: 'Opção 2 - Ciprofloxacino Colírio 0,3% (Alternativa Quinolona)',
        subtitulo: 'Para usuários de lentes de contato (cobertura de Pseudomonas) ou falha inicial',
        itens: [
          {
            farmacoId: 'ciprofloxacino',
            forma: 'gotas',
            dose: 1,
            unidade: 'gotas',
            via: 'OFTALMICA',
            modo: 'continuo',
            freq: 4,
            dias: 7,
            orientacaoExtra: 'Instilar 1 gota no olho afetado de 6 em 6 horas. Suspender imediatamente o uso de lentes de contato.'
          },
          {
            farmacoId: 'soro_fisiologico_nasal',
            forma: 'sol',
            dose: 10,
            unidade: 'ml',
            via: 'TOPICA',
            modo: 'sn',
            freq: 4,
            condicao: 'secreção ocular'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'Redução súbita da acuidade visual ou turvação visual importante',
        'Dor ocular intensa profunda ou fotofobia excruciante (suspeita de ceratite, úlcera de córnea ou uveíte anterior)',
        'Pupila fixa, midriática ou assimétrica (risco de glaucoma agudo de ângulo fechado)',
        'Opacidade corneal ou teste de fluoresceína positivo com lesão dendrítica (ceratite herpética - CONTRAINDICADO CORTICOIDE TÓPICO)',
        'Secreção purulenta hiperaguda copiosa e volumosa (suspeita de Neisseria gonorrhoeae - risco de perfuração corneal em 24-48h)'
      ],
      orientacoesNaoFarmacologicas: [
        'Lavar as mãos frequentemente com água e sabão antes e após tocar o rosto',
        'Usar toalhas de rosto e fronhas individuais, trocando-as diariamente',
        'Evitar coçar ou esfregar os olhos (risco de microtrauma e contaminação contralateral)',
        'Suspender uso de lentes de contato até cura completa e liberação pelo oftalmologista',
        'Compressas frias com soro fisiológico ajudam a aliviar edema e hiperemia'
      ]
    }
  },
  {
    id: 'corpo_estranho_ocular',
    titulo: 'Corpo Estranho Ocular e Abrasão de Córnea',
    categoria: 'Alterações Oculares',
    subcategoria: 'Trauma e Lesões de Superfície',
    paginaPdf: 25,
    descricao: 'Manejo na UPA após remoção do corpo estranho e profilaxia de infecção bacteriana secundária.',
    opcoesPrescricao: [
      {
        id: 'corpo_estranho_tobramicina',
        titulo: 'Opção 1 - Tobramicina Colírio + Lavagem Salina Gelada',
        subtitulo: 'Profilaxia antibiótica de escolha após remoção de corpo estranho superficial',
        itens: [
          {
            farmacoId: 'tobramicina',
            forma: 'gotas',
            dose: 1,
            unidade: 'gotas',
            via: 'OFTALMICA',
            modo: 'continuo',
            freq: 4,
            dias: 5,
            orientacaoExtra: 'Instilar 1 gota no olho afetado de 6 em 6 horas por 5 dias.'
          },
          {
            farmacoId: 'soro_fisiologico_nasal',
            forma: 'sol',
            dose: 10,
            unidade: 'ml',
            via: 'TOPICA',
            modo: 'sn',
            freq: 4,
            condicao: 'desconforto ou irritação',
            orientacaoExtra: 'Lavar delicadamente com soro gelado para conforto térmico.'
          },
          {
            farmacoId: 'dipirona',
            forma: 'cp',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'dor ocular ou cefaleia'
          }
        ]
      },
      {
        id: 'corpo_estranho_quinolona',
        titulo: 'Opção 2 - Ciprofloxacino Colírio (Alto Risco / Vegetal / Lente)',
        subtitulo: 'Para traumas vegetais ou em usuários de lente de contato',
        itens: [
          {
            farmacoId: 'ciprofloxacino',
            forma: 'gotas',
            dose: 1,
            unidade: 'gotas',
            via: 'OFTALMICA',
            modo: 'continuo',
            freq: 4,
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
            condicao: 'dor'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'Suspeita de perfuração do globo ocular (câmara anterior rasa, pupila em gota d’água apontando para a lesão, sinal de Seidel positivo)',
        'Corpo estranho intraocular de alta velocidade (trabalho com metais/esmeril sem EPI)',
        'Anel de ferrugem residual fixo na córnea após remoção de metal (necessita remoção com broca oftalmológica em lâmpada de fenda)'
      ],
      orientacoesNaoFarmacologicas: [
        'NÃO ocluir o olho se houver abrasão em usuário de lentes de contato (risco de infecção agressiva por Pseudomonas sob oclusão)',
        'Manter repouso visual e evitar esforço físico'
      ]
    }
  },
  {
    id: 'celulite_periorbitaria',
    titulo: 'Celulite Periorbitária (Pré-Septal) vs Orbitária',
    categoria: 'Alterações Oculares',
    subcategoria: 'Infecção Palpebral e Periorbitária',
    paginaPdf: 26,
    descricao: 'Diferenciação clínica crucial entre infecção pré-septal (ambulatorial/enfermaria) e orbitária pós-septal (emergência cirúrgica).',
    opcoesPrescricao: [
      {
        id: 'celulite_ambulatorial_cefalexina',
        titulo: 'Celulite Pré-Septal Leve (Ambulatorial) - Cefalexina + AINE',
        subtitulo: 'Paciente em bom estado geral, sem febre alta, acuidade visual e motilidade oculares normais',
        itens: [
          {
            farmacoId: 'cefalexina',
            forma: 'cp',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 4,
            dias: 7,
            orientacaoExtra: 'Tomar 1 comprimido de 6 em 6 horas rigorosamente por 7 a 10 dias.'
          },
          {
            farmacoId: 'ibuprofeno',
            forma: 'cp',
            dose: 600,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 3,
            dias: 5,
            orientacaoExtra: 'Tomar 1 comprimido de 8 em 8 horas após as refeições.'
          },
          {
            farmacoId: 'dipirona',
            forma: 'cp',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'febre ou dor local'
          }
        ]
      },
      {
        id: 'celulite_hospitalar_cefazolina',
        titulo: 'Celulite Moderada/Grave - Hospitalar (Cefazolina EV + Dipirona EV)',
        subtitulo: 'Internação para antibioticoterapia parenteral e monitorização oftalmológica',
        itens: [
          {
            farmacoId: 'cefazolina',
            forma: 'fap',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            modo: 'continuo',
            freq: 3,
            dias: 7,
            orientacaoExtra: 'Diluir em 50 a 100 mL de SF 0,9% e infundir EV em 30 a 60 minutos de 8/8h.'
          },
          {
            farmacoId: 'dipirona',
            forma: 'amp',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            modo: 'sn',
            freq: 4,
            condicao: 'febre ou dor'
          }
        ]
      },
      {
        id: 'celulite_mrsa_oxacilina_vanco',
        titulo: 'Suspeita de MRSA / Falha Inicial (Vancomicina EV)',
        subtitulo: 'Para infecções graves, refratárias ou suspeita de Staphylococcus resistente',
        itens: [
          {
            farmacoId: 'vancomicina',
            forma: 'fap',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            modo: 'continuo',
            freq: 2,
            dias: 10,
            orientacaoExtra: 'Infundir EV diluído em 250 mL de SF 0,9% em no mínimo 60 a 90 minutos de 12/12h.'
          },
          {
            farmacoId: 'dipirona',
            forma: 'amp',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            modo: 'sn',
            freq: 4,
            condicao: 'febre ou dor'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'DIFERENÇA CRUCIAL: Pré-Septal (somente pálpebra edemaciada, motilidade e visão PRESERVADAS) vs Orbitária Pós-Septal (dor à movimentação ocular, proptose, oftalmoplegia/diplopia e baixa acuidade visual)',
        'Sinais de acometimento pós-septal exigem TC de órbitas de urgência, avaliação oftalmológica e internação imediata',
        'Risco de trombose de seio cavernoso, neurite óptica e abscesso intracraniano'
      ],
      examesSolicitar: [
        'Tomografia Computadorizada (TC) de órbitas e seios da face com contraste (padrão-ouro para diferenciar pré de pós-septal e avaliar abscesso subperiosteal)',
        'Hemograma completo, PCR e Hemoculturas em pacientes internados'
      ]
    }
  },
  {
    id: 'epistaxe_urgencia',
    titulo: 'Epistaxe (Sangramento Nasal na Urgência)',
    categoria: 'Alterações Oculares',
    subcategoria: 'Hemorragias de Vias Aéreas Superiores',
    paginaPdf: 21,
    descricao: 'Algoritmo de compressão local, vasoconstrição tópica, ácido tranexâmico e controle pressórico.',
    opcoesPrescricao: [
      {
        id: 'epistaxe_ambulatorial_transamin',
        titulo: 'Prescrição para Casa (Alta) - Ácido Tranexâmico + Soro Nasal',
        subtitulo: 'Para sangramento controlado na UPA com risco de recidiva',
        itens: [
          {
            farmacoId: 'acido_tranexamico',
            forma: 'cp',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 3,
            dias: 4,
            orientacaoExtra: 'Tomar 2 comprimidos de 250 mg (500 mg) de 8 em 8 horas por 3 a 5 dias se sangramentos recorrentes.'
          },
          {
            farmacoId: 'soro_fisiologico_nasal',
            forma: 'sol_nasal',
            dose: 10,
            unidade: 'ml',
            via: 'NASAL',
            modo: 'sn',
            freq: 4,
            condicao: 'ressecamento da mucosa nasal',
            orientacaoExtra: 'Aplicar 2 a 3 jatos em cada narina 4 vezes ao dia para manter a mucosa hidratada e evitar descolamento de crostas.'
          }
        ]
      },
      {
        id: 'epistaxe_urgencia_hospitalar',
        titulo: 'Uso na Emergência (Sangramento Volumoso / PA Elevada)',
        subtitulo: 'Conduta na sala de emergência para controle do sangramento agudo',
        itens: [
          {
            farmacoId: 'acido_tranexamico',
            forma: 'amp',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            modo: 'agora',
            freq: 1,
            orientacaoExtra: 'Infundir 1000 mg EV lento diluído em 100 mL de SF 0,9% em 15 minutos.'
          },
          {
            farmacoId: 'captopril',
            forma: 'cp',
            dose: 25,
            unidade: 'mg',
            via: 'VO',
            modo: 'agora',
            freq: 1,
            orientacaoExtra: 'Administrar sublingual se PA sistólica > 160 mmHg associada.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'Sangramento nasal posterior volumoso (sangue escorrendo copiosamente pela orofaringe)',
        'Instabilidade hemodinâmica, taquicardia, hipotensão ou queda do hematócrito',
        'Pacientes anticoagulados ou com coagulopatia grave prévia',
        'Necessidade de tamponamento posterior com sonda Foley (internação obrigatória)'
      ],
      orientacoesNaoFarmacologicas: [
        'Medidas imediatas: assoar delicadamente para eliminar coágulos; realizar compressão digital contínua das asas nasais por 10 a 15 minutos com a cabeça levemente inclinada para a frente (NÃO inclinar para trás)',
        'Compressa de gaze embebida em vasoconstritor (adrenalina 1:1000 ou oximetazolina) inserida na narina sangrante sob compressão',
        'Repouso com cabeceira elevada e evitar banhos muito quentes, assoar o nariz com força ou manipular o interior das narinas nas próximas 48 horas'
      ]
    }
  }
];
