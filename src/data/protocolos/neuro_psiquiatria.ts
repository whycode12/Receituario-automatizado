import { ProtocoloConduta } from '../../types/protocolos';

export const protocolosNeuroPsiquiatria: ProtocoloConduta[] = [
  {
    id: 'cefaleias',
    titulo: 'Cefaleia Tensional e Enxaqueca na Urgência',
    categoria: 'Sistema Nervoso e Psiquiátrico',
    subtitulo: 'Analgesia geral multimodal (Dipirona + Naproxeno), antiemético e sinais de alerta ("red flags")',
    paginaPdf: 87,
    opcoesPrescricao: [
      {
        id: 'cefaleia_multimodal',
        titulo: 'Opção 1: Analgesia Multimodal (Dipirona + Naproxeno + Metoclopramida)',
        subtitulo: 'Associação sinérgica de analgésico comum, AINE de meia-vida longa e antiemético pró-cinético.',
        itens: [
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido de 1.000 mg (ou 2 de 500 mg) VO se dor de cabeça, podendo repetir a cada 6 horas.'
          },
          {
            farmacoId: 'naproxeno',
            tipoUso: 'se_necessario',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            intervalo: 12,
            dias: 3,
            observacaoUso: 'Tomar 1 comprimido de 500 mg VO no início da crise de dor, podendo repetir a cada 12 horas por no máximo 3 a 5 dias seguidos.'
          },
          {
            farmacoId: 'metoclopramida',
            tipoUso: 'se_necessario',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            intervalo: 8,
            observacaoUso: 'Tomar 1 comprimido de 10 mg VO se náuseas ou vômitos associados à dor de cabeça (além de antiemético, acelera a absorção gástrica dos analgésicos).'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'SINAIS DE ALERTA EM CEFALEIA ("SNOOP4"): 1) Início súbito explosivo ("em trovoada" / thunderclap, atingindo intensidade máxima em segundos - pensar em Hemorragia Subaracnóidea por rotura de aneurisma!); 2) Sinais neurológicos focais (fraqueza, alteração visual, afasia, diplopia); 3) Idade de início recente > 50 anos (pensar em Arterite Temporal se dor em têmpora com VHS alto!); 4) Cefaleia associada a febre, rigidez de nuca ou alteração do estado mental (Meningite bacteriana); 5) Mudança do padrão habitual de dor ou piora progressiva em crescendo; 6) Piora com manobra de Valsalva, tosse ou decúbito (hipertensão intracraniana).',
        'EMERGÊNCIA MÉDICA: Cefaleia súbita de forte intensidade ("a pior dor de cabeça da minha vida") exige Tomografia de Crânio sem contraste imediata e, se normal, Punção Lombar para pesquisa de xantocromia.',
        'Evitar o uso abusivo de analgésicos simples e triptanos (> 10 a 15 dias no mês) para prevenir a Cefaleia por Uso Excessivo de Medicamentos (rebote crônico).'
      ],
      criteriosInternacao: [
        'Qualquer sinal de alerta sugestivo de causa secundária potencialmente fatal.',
        'Estado de Mal Enxaquecoso (crise incapacitante contínua com duração > 72 horas refratária a medicações orais e parenterais na UPA).'
      ],
      examesRecomendados: [
        'Tomografia Computadorizada de Crânio sem contraste se red flags.',
        'Punção lombar diagnóstica com bacterioscopia, cultura e pressão de abertura.',
        'Glicemia capilar e pressão arterial na admissão.'
      ],
      orientacoesNaoFarmacologicas: [
        'Permanecer em repouso em ambiente calmo, escuro e silencioso durante as crises.',
        'Aplicação de compressas frias ou geladas sobre a fronte e têmporas.',
        'Hidratação oral adequada e evitar jejum prolongado.'
      ]
    }
  },
  {
    id: 'convulsao_epilepsia',
    titulo: 'Crise Convulsiva Aguda e Estado de Mal Epiléptico',
    categoria: 'Sistema Nervoso e Psiquiátrico',
    subtitulo: 'Conduta na crise tônico-clônica generalizada com duração > 5 minutos: Diazepam EV direto lento',
    paginaPdf: 88,
    opcoesPrescricao: [
      {
        id: 'convulsao_diazepam_ev',
        titulo: 'Opção 1: Controle Agudo da Crise Convulsiva (Diazepam EV)',
        subtitulo: '1ª Linha: Benzodiazepínico EV em bólus direto para crises com duração > 5 minutos.',
        itens: [
          {
            farmacoId: 'diazepam',
            tipoUso: 'agora',
            dose: 10,
            unidade: 'mg',
            via: 'EV',
            intervalo: 24,
            observacaoUso: 'Administrar 1 ampola (10 mg/2 mL) por via endovenosa direta lenta sem diluir em 2 a 3 minutos. Se a crise persistir após 5 minutos, pode repetir mais uma dose de 10 mg EV (máximo acumulado de 20 mg).'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'ESTADO DE MAL EPILÉPTICO (STATUS EPILEPTICUS): Crise convulsiva com duração contínua > 5 minutos OU duas ou mais crises consecutivas sem recuperação completa da consciência entre elas. Risco iminente de lesão neuronal excitotóxica irreversível, rabdomiólise, hipertermia maligna e PCR!',
        'CUIDADOS BÁSICOS IMEDIATOS NA CRISE: 1) Proteger a cabeça de traumas; 2) Posicionar o paciente em decúbito lateral para evitar broncoaspiração de saliva/vômitos; 3) Manter vias aéreas pérvias com oxigênio sob máscara; 4) NUNCA introduzir dedos, colheres ou objetos dentro da boca do paciente (risco de mordedura mutilante e quebra dentária com aspiração); 5) Testar GLICEMIA CAPILAR IMEDIATAMENTE (hipoglicemia é causa tratável frequente de crise convulsiva!).',
        'SE A CRISE PERSISTIR APÓS DUAS DOSES DE BENZODIAZEPÍNICO: Iniciar imediatamente a segunda linha farmacológica com Fenitoína EV (20 mg/kg em infusão em SF 0,9% em 30-60 min) ou Levetiracetam EV. Se persistir > 30 minutos: refratariedade exige IOT e anestésico geral contínuo (Midazolam ou Propofol em BIC) em UTI.'
      ],
      criteriosInternacao: [
        'Primeiro episódio convulsivo na vida (investigação neurológica hospitalar obrigatória com TC/RM e EEG).',
        'Estado de mal epiléptico ou crises em salva.',
        'Crise convulsiva associada a febre em adultos, TCE recente ou déficit neurológico focal pós-ictal persistente (paralisia de Todd > 24h).'
      ],
      examesRecomendados: [
        'Glicemia capilar à beira-leito imediata.',
        'Eletrólitos completos (Sódio: hiponatremia grave < 120 mEq/L causa convulsões; Cálcio e Magnésio).',
        'Gasometria venosa (avaliação de acidose lática pós-ictal).',
        'Tomografia Computadorizada de Crânio sem contraste.',
        'Punção lombar se suspeita de meningoencefalite (febre, meningismo).'
      ],
      orientacoesNaoFarmacologicas: [
        'Manter grades da cama elevadas e acolchoadas.',
        'Monitorização contínua de saturação de oxigênio e ritmo cardíaco no leito de emergência.'
      ]
    }
  },
  {
    id: 'labirintite_vertigem',
    titulo: 'Labirintite e Síndromes Vestibulares Periféricas (Vertigem Aguda)',
    categoria: 'Sistema Nervoso e Psiquiátrico',
    subtitulo: 'Vertigem rotatória, náuseas e instabilidade postural: Betahistina oral e antieméticos',
    paginaPdf: 89,
    opcoesPrescricao: [
      {
        id: 'vertigem_betahistina_ondansetrona',
        titulo: 'Opção 1: Tratamento Clínico Completo (Betahistina + Ondansetrona)',
        subtitulo: 'Vasodilatação da microcirculação cocleovestibular + alívio potente de náuseas/vômitos.',
        itens: [
          {
            farmacoId: 'betahistina',
            tipoUso: 'continuo',
            dose: 16,
            unidade: 'mg',
            via: 'VO',
            intervalo: 8,
            dias: 14,
            observacaoUso: 'Tomar 1 comprimido de 16 mg VO de 8 em 8 horas junto com as principais refeições por 14 a 30 dias. Sugestão de horários: 6h, 14h, 22h.'
          },
          {
            farmacoId: 'ondansetrona',
            tipoUso: 'se_necessario',
            dose: 4,
            unidade: 'mg',
            via: 'VO',
            intervalo: 8,
            observacaoUso: 'Tomar 1 comprimido de 4 mg (sublingual ou oral) se náuseas ou sensação de vômito na crise.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'DIFERENCIAÇÃO: VERTIGEM PERIFÉRICA VS CENTRAL (PROTOCOLO HINTS): Em pacientes com síndrome vestibular aguda contínua, o protocolo HINTS (Head Impulse, Nystagmus, Test of Skew) possui sensibilidade SUPERIOR À RESSONÂNCIA MAGNÉTICA nas primeiras 24 a 48 horas para detectar AVC DE TRONCO OU CEREBELO! Sinais sugestivos de AVC central: nistagmo puramente vertical ou que inverte a direção com o olhar lateral, desvio de skew (desalinhamento vertical ocular) ou head impulse test NORMAL.',
        'VERTIGEM POSICIONAL PAROXÍSTICA BENIGNA (VPPB): Crises breves de tontura giratória com duração de segundos (< 1 minuto) desencadeadas por movimentos da cabeça ao se deitar ou virar na cama, sem perda auditiva. O tratamento padrão-ouro NÃO É MEDICAMENTO, MAS SIM A MANOBRA DE EPLEY para reposicionamento dos otólitos no canal semicircular posterior!',
        'A Betahistina é indicada para neurite vestibular, síndrome de Menière e labirintite periférica, atuando como agonista parcial H1 e antagonista H3 na orelha interna.'
      ],
      criteriosInternacao: [
        'HINTS sugestivo de etiologia central (suspeita de AVC de circulação posterior/Fossa posterior).',
        'Presença de déficits neurológicos focais associados (ataxia de marcha severa, dismetria, disartria, disfagia ou diplopia).',
        'Vômitos incoercíveis com desidratação exigindo reposição hidroeletrolítica parenteral.'
      ],
      examesRecomendados: [
        'Exame neurológico detalhado com pesquisa de nistagmo, marcha em tandem, sinal de Romberg e manobra de Dix-Hallpike.',
        'Ressonância Magnética de Crânio com protocolo de difusão (DWI) se suspeita de AVC de circulação posterior ou protocolo HINTS central.',
        'Glicemia e eletrocardiograma.'
      ],
      orientacoesNaoFarmacologicas: [
        'Realizar manobra de Dix-Hallpike para diagnóstico e manobra de Epley para tratamento da VPPB.',
        'Evitar movimentos bruscos da cabeça e levantar-se lentamente da cama em etapas.',
        'Evitar consumo excessivo de cafeína, álcool, tabaco e alimentos ricos em açúcar ou sal refinado.'
      ]
    }
  },
  {
    id: 'avc_isquemico',
    titulo: 'Acidente Vascular Cerebral Isquêmico (AVCi Agudo)',
    categoria: 'Sistema Nervoso e Psiquiátrico',
    subtitulo: 'Conduta inicial na emergência, protocolo de trombólise (Alteplase) e cuidados na fase aguda sem trombólise',
    paginaPdf: 90,
    opcoesPrescricao: [
      {
        id: 'avci_sem_trombolise',
        titulo: 'Opção 1: Conduta na Fase Aguda sem Trombólise (AAS + Estatina + Profilaxia)',
        subtitulo: 'Paciente fora da janela de 4h30 ou com contraindicação a trombolíticos.',
        itens: [
          {
            farmacoId: 'aas',
            tipoUso: 'agora',
            dose: 300,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Dose de ataque: 3 comprimidos de 100 mg (300 mg) VO mastigados imediatamente após TC afastar sangramento. Manutenção: 100 mg VO 1x ao dia pela manhã.'
          },
          {
            farmacoId: 'atorvastatina',
            tipoUso: 'continuo',
            dose: 80,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            dias: 30,
            usoContinuo: true,
            observacaoUso: 'Tomar 1 comprimido de 80 mg VO à noite. Estatina de alta potência promove estabilização de placa e neuroproteção anti-inflamatória precoce.'
          },
          {
            farmacoId: 'enoxaparina',
            tipoUso: 'continuo',
            dose: 40,
            unidade: 'mg',
            via: 'SC',
            intervalo: 24,
            dias: 14,
            usoContinuo: true,
            observacaoUso: '40 mg SC 1x ao dia para profilaxia de TVP/TEP no paciente com hemiplegia ou imobilidade no leito (iniciar após 24h).'
          },
          {
            farmacoId: 'omeprazol',
            tipoUso: 'continuo',
            dose: 20,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            dias: 30,
            usoContinuo: true,
            observacaoUso: 'Tomar 1 comprimido de 20 mg em jejum para profilaxia de úlcera de estresse.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'EMERGÊNCIA MÉDICA TEMPO-DEPENDENTE ("TEMPO É CÉREBRO"): A cada minuto sem tratamento no AVCi, 1,9 milhão de neurônios são perdidos! Aplicar Escala Pré-Hospitalar de Cincinnati (Paralisia facial, Fraqueza do braço, Fala anormal - SAMU) e calcular NIHSS na admissão.',
        'JANELA TERAPÊUTICA PARA TROMBÓLISE QUÍMICA COM ALTEPLASE (rt-PA): Até 4 horas e 30 minutos (4,5h) do início exato dos sintomas (ou da última vez em que o paciente foi visto bem). DOSE DO ALTEPLASE: 0,9 mg/kg (dose máxima 90 mg) sendo 10% em bólus EV em 1 minuto e os 90% restantes infundidos em Bomba de Infusão Contínua (BIC) em 60 minutos.',
        'SE O PACIENTE RECEBER ALTEPLASE (TROMBÓLISE): É FORMALMENTE PROIBIDO ADMINISTRAR AAS, HEPARINA OU QUALQUER ANTICOAGULANTE NAS PRIMEIRAS 24 HORAS pós-trombolítico devido ao risco de transformação hemorrágica maciça! Realizar nova TC de crânio após 24h antes de liberar antiplaquetários.',
        'MANEJO DA PRESSÃO ARTERIAL NO AVCI: No paciente SEM indicação de trombólise, NÃO BAIXAR A PRESSÃO a menos que PAS > 220 mmHg ou PAD > 120 mmHg (a hipertensão reflexa é necessária para manter a Perfusão Cerebral [PPC] na área de penumbra isquêmica ao redor do infarto!). Se for candidato a trombólise, a PA deve ser mantida obrigatoriamente < 185x110 mmHg antes do trombolítico e < 180x105 mmHg durante as primeiras 24 horas.'
      ],
      criteriosInternacao: [
        'Indicação absoluta de internação em Unidade de AVC (U-AVC) ou leito de UTI.',
        'Monitorização neurológica seriada horária com escala de NIHSS e pupilas.'
      ],
      examesRecomendados: [
        'Tomografia Computadorizada de Crânio sem contraste IMEDIATA (objetivo: afastar hemorragia intracraniana e avaliar sinais precoces de isquemia como apagamento de sulcos corticais e perda da diferenciação cortico-subcortical - escore ASPECTS).',
        'Glicemia capilar imediata (a hipoglicemia simula perfeitamente um AVC com déficit focal - "stroke mimic").',
        'Coagulograma completo (TAP, INR, TTPA), hemograma com plaquetas, troponina e ECG de 12 derivações (pesquisar fibrilação atrial cardioembólica).',
        'Angiotomografia de vasos intracranianos e cervicais (identificar oclusão de grandes vasos para indicação de Trombectomia Mecânica até 24 horas!).'
      ],
      orientacoesNaoFarmacologicas: [
        'Manter a cabeceira a 0º nas primeiras 24 horas em pacientes hemodinamicamente estáveis para otimizar o fluxo sanguíneo cerebral de perfusão na penumbra.',
        'Teste de deglutição à beira-leito OBRIGATÓRIO antes de liberar qualquer dieta ou medicação oral para prevenir pneumonia broncoaspirativa.',
        'Controle rigoroso da glicemia (alvo 100 a 180 mg/dL; hiperglicemia agrava o dano tecidual neuronal) e da temperatura (< 37,5°C).'
      ]
    }
  },
  {
    id: 'avc_hemorragico',
    titulo: 'Acidente Vascular Cerebral Hemorrágico (AVCh / HSA)',
    categoria: 'Sistema Nervoso e Psiquiátrico',
    subtitulo: 'Controle pressórico intensivo com Nitroprussiato em BIC, reversão de coagulopatia e prevenção de vasoespasmo',
    paginaPdf: 89,
    opcoesPrescricao: [
      {
        id: 'avch_nitroprussiato_bic',
        titulo: 'Opção 1: Controle Pressórico Intensivo (Nitroprussiato de Sódio EV)',
        subtitulo: 'Redução rápida e segura da PA para alvo de PAS <= 140 mmHg na hemorragia intraparenquimatosa.',
        itens: [
          {
            farmacoId: 'nitroprussiato_de_sodio',
            tipoUso: 'continuo',
            dose: 50,
            unidade: 'mg',
            via: 'EV',
            intervalo: 24,
            observacaoUso: 'Diluir 1 ampola (50 mg/2 mL) em 250 mL de SF 0,9% fotossensível. Iniciar em BIC a 0,3 mcg/kg/min e titular a cada 5 minutos com meta rigorosa de PAS entre 130 e 140 mmHg para conter a expansão do hematoma intraparenquimatoso.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'EMERGÊNCIA NEUROCIRÚRGICA: O AVCh (hemorragia intraparenquimatosa hipertensiva ou hemorragia subaracnóidea por aneurisma roto) apresenta taxa de letalidade superior a 40-50% nas primeiras 48 horas!',
        'METAS PRESSÓRICAS NO AVCh: Reduzir a pressão arterial de forma rápida e segura para meta de PAS entre 130 e 140 mmHg (ou PAM < 130 mmHg) nas primeiras 2 a 6 horas para diminuir o crescimento do hematoma.',
        'REVERSÃO IMEDIATA DE ANTICOAGULANTES: Se paciente usava Varfarina: aplicar Concentrado de Complexo Protrombínico (CCP 25 a 50 UI/kg EV) + Vitamina K (Fitomenadiona 10 mg EV). Se usava Heparina: Protamina EV. Se usava DOAC (Rivaroxabana/Apixabana): Andexanet alfa ou CCP 50 UI/kg.',
        'PREVENÇÃO DE VASOESPASMO NA HEMORRAGIA SUBARACNÓIDEA (HSA): Nimodipino 60 mg VO ou por sonda a cada 4 horas por 21 dias contínuos.'
      ],
      criteriosInternacao: [
        'Internação obrigatória em UTI Neurológica com parecer neurocirúrgico de emergência.',
        'Indicação cirúrgica de urgência: hematomas cerebelares com diâmetro > 3 cm comprimindo o tronco encefálico ou hidrocefalia obstrutiva aguda exigindo Derivação Ventricular Externa (DVE).'
      ],
      examesRecomendados: [
        'Tomografia Computadorizada de Crânio sem contraste imediata (hiperdensidade branca espontânea intraparenquimatosa ou nas cisternas subaracnóideas).',
        'Coagulograma urgente (TAP, INR, TTPA), hemograma completo com plaquetas.',
        'Angiotomografia de crânio para pesquisar sinal do "spot sign" (extravasamento ativo de contraste prevendo expansão fatal do hematoma) e aneurismas cerebrais.',
        'Ureia, creatinina e eletrólitos (vigiar hiponatremia por síndrome perdedora de sal cerebral).'
      ],
      orientacoesNaoFarmacologicas: [
        'Cabeceira elevada a 30º centralizada (sem rotação cervical para facilitar a drenagem venosa jugular e reduzir a pressão intracraniana - PIC).',
        'Jejum absoluto e proteção estrita de via aérea (IOT se Glasgow <= 8).',
        'Evitar hipertermia e hiperglicemia.'
      ]
    }
  },
  {
    id: 'paralisia_bell',
    titulo: 'Paralisia Facial Periférica de Bell e Síndrome de Ramsay Hunt',
    categoria: 'Sistema Nervoso e Psiquiátrico',
    subtitulo: 'Déficit motor facial periférico (acometimento de fronte e oclusão ocular): Corticoterapia oral precoce e proteção de córnea',
    paginaPdf: 91,
    opcoesPrescricao: [
      {
        id: 'bell_prednisona_aciclovir',
        titulo: 'Opção 1: Paralisia de Bell Idiopática (Prednisona + Cuidados Oculares)',
        subtitulo: 'Corticoterapia em alta dose iniciada nas primeiras 72 horas para rápida descompressão do VII par.',
        itens: [
          {
            farmacoId: 'prednisona',
            tipoUso: 'continuo',
            dose: 40,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            dias: 5,
            observacaoUso: 'Tomar 2 comprimidos de 20 mg (40 mg) VO em dose única pela manhã após o café por 5 dias seguidos, seguido de redução progressiva (20 mg por 3 dias, 10 mg por 2 dias e suspender).'
          },
          {
            farmacoId: 'carmelose-sodica',
            tipoUso: 'continuo',
            dose: 1,
            unidade: 'gotas',
            via: 'OFTALMICA',
            intervalo: 2,
            dias: 30,
            usoContinuo: true,
            observacaoUso: 'Instilar 1 gota no olho paralisado de 1 em 1 hora ou de 2 em 2 horas durante o dia. PROTEÇÃO OCULAR INDISPENSÁVEL para evitar ceratite e úlcera de córnea por lagoftalmo.'
          }
        ]
      },
      {
        id: 'ramsay_hunt_esquema',
        titulo: 'Opção 2: Síndrome de Ramsay Hunt (Herpes Zóster Ótico)',
        subtitulo: 'Paralisia facial periférica associada a vesículas no pavilhão/conduto auditivo: Aciclovir + Prednisona.',
        itens: [
          {
            farmacoId: 'aciclovir',
            tipoUso: 'continuo',
            dose: 800,
            unidade: 'mg',
            via: 'VO',
            intervalo: 4,
            dias: 7,
            observacaoUso: 'Tomar 2 comprimidos de 400 mg (800 mg) VO 5 vezes ao dia de 4 em 4 horas (06h, 10h, 14h, 18h, 22h) por 7 dias seguidos.'
          },
          {
            farmacoId: 'prednisona',
            tipoUso: 'continuo',
            dose: 40,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            dias: 5,
            observacaoUso: 'Tomar 40 mg VO pela manhã por 5 dias.'
          },
          {
            farmacoId: 'carmelose-sodica',
            tipoUso: 'continuo',
            dose: 1,
            unidade: 'gotas',
            via: 'OFTALMICA',
            intervalo: 2,
            dias: 30,
            usoContinuo: true,
            observacaoUso: 'Instilar lágrima artificial frequentemente no olho afetado.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'DIFERENÇA CRUCIAL ENTRE PARALISIA FACIAL CENTRAL E PERIFÉRICA: PARALISIA CENTRAL (AVC): poupa o terço superior da face (o paciente CONSEGUE franzir a testa e fechar os olhos com força, pois a fronte possui inervação cortical bilateral). PARALISIA PERIFÉRICA (DE BELL): acomete TODOS os ramos do nervo facial VII (o paciente NÃO CONSEGUE franzir a testa nem fechar o olho do lado paralisado - lagoftalmo com Sinal de Bell positivo).',
        'CUIDADOS CRÍTICOS COM O OLHO PARALISADO: O lagoftalmo (impossibilidade de fechamento palpebral completo) expõe a córnea ao ressecamento contínuo, podendo causar Ceratite Actínica e ÚLCERA DE CÓRNEA GRAVE COM PERFURAÇÃO OCULAR! É OBRIGATÓRIO prescrever lágrima artificial de dia e OCLUSÃO COM GAZE E POMADA LUBRIFICANTE À NOITE para dormir.',
        'SÍNDROME DE RAMSAY HUNT: Exame otoscópico atento! A presença de vesículas no conduto auditivo, pavilhão auricular ou palato indica reativação de Herpes Zóster no gânglio geniculado; prognóstico motor pior, exigindo Aciclovir em alta dose associado.'
      ],
      criteriosInternacao: [
        'Dúvida diagnóstica com AVC de tronco encefálico ou lesão expansiva da ponte.',
        'Ceratite ulcerada ocular já instalada.'
      ],
      examesRecomendados: [
        'Otoscopia bilateral minuciosa.',
        'Glicemia em jejum (diabetes é fator de risco independente para paralisia de Bell).',
        'Tomografia ou Ressonância se acometimento progressivo após 3 semanas ou sem melhora motora em 3 a 4 meses.'
      ],
      orientacoesNaoFarmacologicas: [
        'Curativo oclusivo frouxo à noite: fechar a pálpebra do olho paralisado manualmente com o dedo e cobrir com gaze estéril microporada sem apertar.',
        'Usar óculos escuros durante o dia para proteger da poeira e vento.',
        'Fisioterapia motora facial precoce (exercícios de mímica facial: fazer caretas, mandar beijos, inflar as bochechas).'
      ]
    }
  },
  {
    id: 'abstinencia_alcoolica',
    titulo: 'Síndrome de Abstinência Alcoólica e Prevenção de Wernicke',
    categoria: 'Sistema Nervoso e Psiquiátrico',
    subtitulo: 'Tremores, sudorese, taquicardia e risco de delirium tremens: Diazepam escalonado e Tiamina preventiva',
    paginaPdf: 93,
    opcoesPrescricao: [
      {
        id: 'abstinencia_domiciliar_ciwa_baixo',
        titulo: 'Opção 1: Abstinência Leve Ambulatorial (CIWA < 15)',
        subtitulo: 'Para paciente com rede familiar de apoio, sem histórico de delirium tremens ou convulsão.',
        itens: [
          {
            farmacoId: 'tiamina',
            tipoUso: 'continuo',
            dose: 300,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            dias: 30,
            usoContinuo: true,
            observacaoUso: 'Tomar 1 comprimido de 300 mg VO uma vez ao dia pela manhã com o desjejum por 30 dias.'
          },
          {
            farmacoId: 'diazepam',
            tipoUso: 'continuo',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            intervalo: 12,
            dias: 7,
            observacaoUso: 'Tomar 1 comprimido de 10 mg VO de 12 em 12 horas (ou ao deitar) por 7 dias, reduzindo gradualmente a dose para prevenir convulsões de privação.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido de 1.000 mg se cefaleia ou mialgia.'
          }
        ]
      },
      {
        id: 'abstinencia_hospitalar_ciwa_alto',
        titulo: 'Opção 2: Abstinência Moderada a Grave Hospitalar (CIWA >= 15 / Delirium Tremens)',
        subtitulo: 'Internação em observação/sala vermelha com Diazepam titulado e Tiamina parenteral.',
        itens: [
          {
            farmacoId: 'tiamina',
            tipoUso: 'agora',
            dose: 300,
            unidade: 'mg',
            via: 'EV',
            intervalo: 24,
            observacaoUso: 'Diluir 3 ampolas (300 mg) em 100 mL de SF 0,9% EV em 30 minutos imediatamente ANTES de qualquer infusão de soro glicosado. Manter 100 mg EV de 8/8h por 3 a 5 dias.'
          },
          {
            farmacoId: 'diazepam',
            tipoUso: 'agora',
            dose: 10,
            unidade: 'mg',
            via: 'EV',
            intervalo: 24,
            observacaoUso: 'Administrar 10 mg EV direto lento a cada 1 a 2 horas conforme escala de CIWA-Ar até atingir sedação leve consciente (CIWA < 8 a 10).'
          },
          {
            farmacoId: 'soro_ev',
            tipoUso: 'agora',
            dose: 1000,
            unidade: 'ml',
            via: 'EV',
            intervalo: 24,
            observacaoUso: 'Infundir SF 0,9% para hidratação e correção hidroeletrolítica.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'DELIRIUM TREMENS (EMERGÊNCIA MÉDICA POTENCIALMENTE FATAL): Surge tipicamente entre 48 e 96 horas após a última dose de álcool. Caracteriza-se por confusão mental severa, alucinações vívidas visuais/táteis (zoopsias: ver pequenos bichos/insetos andando sobre o corpo), agitação psicomotora extrema e hiperatividade autonômica maciça (hipertermia, diaforese profusa, hipertensão grave e taquicardia descontrolada). Taxa de mortalidade de até 15-20% sem tratamento adequado!',
        'PREVENÇÃO DE ENCEFALOPATIA DE WERNICKE (TIAMINA ANTES DA GLICOSE): NUNCA INFUNDIR SORO GLICOSADO SEM TIAMINA PREVENTIVA! A carga de carboidratos acelera o consumo da escassa tiamina cerebral, desencadeando ataxia, oftalmoplegia e coma agudos irreversíveis.',
        'NUNCA USAR HALOPERIDOL ISOLADAMENTE NA ABSTINÊNCIA ALCOÓLICA: Antipsicóticos diminuem o limiar convulsivo e aumentam drasticamente o risco de convulsões graves e arritmias. O esteio do tratamento é EXCLUSIVAMENTE BENZODIAZEPÍNICO (Diazepam) em doses vigorosas.'
      ],
      criteriosInternacao: [
        'Escore CIWA-Ar >= 15 ou histórico prévio de Delirium Tremens ou convulsões de privação.',
        'Presença de alucinações, confusão mental ou instabilidade autonômica (FC > 120 bpm, PA descontrolada).',
        'Comorbidades clínicas graves concomitantes (cirrose com ascite, hemorragia digestiva alta, pancreatite aguda ou pneumonia).'
      ],
      examesRecomendados: [
        'Avaliação seriada pela Escala CIWA-Ar (Clinical Institute Withdrawal Assessment for Alcohol).',
        'Eletrólitos séricos (especialmente Potássio e Magnésio: a hipomagnesemia refratária piora os tremores e as arritmias).',
        'Glicemia capilar, hemograma completo, coagulograma, CPK (rabdomiólise por agitação) e transaminases.',
        'ECG de 12 derivações.'
      ],
      orientacoesNaoFarmacologicas: [
        'Manter o paciente em quarto bem iluminado, calmo e acolhedor (diminui as alucinações visuais e sombras persecutórias).',
        'Reidratação hidroeletrolítica adequada e aporte de calorias.',
        'Encaminhamento pós-estabilização para Centro de Atenção Psicossocial Álcool e Drogas (CAPS-AD) ou grupos de apoio (Alcoólicos Anônimos).'
      ]
    }
  },
  {
    id: 'agitacao_surto',
    titulo: 'Agitação Psicomotora e Surto Psicótico na Emergência',
    categoria: 'Sistema Nervoso e Psiquiátrico',
    subtitulo: 'Contenção verbal, física protetora e farmacológica segura: Haloperidol + Prometazina IM profunda',
    paginaPdf: 96,
    opcoesPrescricao: [
      {
        id: 'contencao_haldol_fenergan',
        titulo: 'Opção 1: Contenção Química Padrão de Emergência (Haloperidol + Prometazina IM)',
        subtitulo: 'Padrão ouro nas UPAs e pronto-socorros psiquiátricos no Brasil.',
        itens: [
          {
            farmacoId: 'haloperidol',
            tipoUso: 'agora',
            dose: 5,
            unidade: 'mg',
            via: 'IM',
            intervalo: 24,
            observacaoUso: 'Aplicar 1 ampola (5 mg/mL) por via intramuscular profunda exclusiva no glúteo. Pode ser associado na mesma seringa à Prometazina.'
          },
          {
            farmacoId: 'prometazina',
            tipoUso: 'agora',
            dose: 50,
            unidade: 'mg',
            via: 'IM',
            intervalo: 24,
            observacaoUso: 'Aplicar 1 ampola (50 mg/2 mL) IM profunda na mesma seringa. Previne distonia aguda extrapiramidal induzida pelo haloperidol e potencializa a tranquilização rápida.'
          }
        ]
      },
      {
        id: 'contencao_diazepam_oral_im',
        titulo: 'Opção 2: Agitação Leve a Moderada com Ansiedade (Diazepam VO/IM)',
        subtitulo: 'Para paciente cooperativo ou agitação reativa a estresse agudo sem delírios.',
        itens: [
          {
            farmacoId: 'diazepam',
            tipoUso: 'agora',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Administrar 1 comprimido de 10 mg VO agora com meio copo de água (ou 1 ampola de 10 mg IM profunda).'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'ETAPAS OBRIGATÓRIAS NA ABORDAGEM DA AGITAÇÃO: 1) DESESCALONAMENTO VERBAL: tom de voz calmo, postura aberta, manter distância de segurança de 2 passos, nunca confrontar delírios, oferecer água e medicação oral; 2) CONTENÇÃO FÍSICA PROTETORA: se risco iminente de auto ou heteroagressividade, realizada por equipe treinada de no mínimo 5 profissionais (um para a cabeça e um para cada membro) em decúbito dorsal (NUNCA sufocar em decúbito ventral!); 3) CONTENÇÃO FARMACOLÓGICA: Haloperidol 5 mg + Prometazina 50 mg IM profunda.',
        'SEMPRE INVESTIGAR CAUSAS ORGÂNICAS DO DELIRIUM NO IDOSO: Infecção urinária, pneumonia oculta, hipóxia, hipoglicemia, intoxicações por drogas de abuso ou abstinência, AVC agudo e retenção urinária aguda (bexigoma).',
        'VIGILÂNCIA DE DISTONIA AGUDA: Espasmos involuntários dolorosos de músculos cervicais (torcicolo agudo), desvio ocular conjugado para cima (crise oculógira) ou trismo por impregnação estafilocócica/antidopaminérgica; reverter imediatamente com Prometazina 50 mg IM ou Biperideno 5 mg IM.'
      ],
      criteriosInternacao: [
        'Risco grave iminente de autoextermínio (suicídio) ou heteroagressão descontrolada.',
        'Psicose aguda inaugural ou esquizofrenia grave descompensada sem suporte social.',
        'Delirium orgânico secundário a afecção clínica aguda grave.'
      ],
      examesRecomendados: [
        'Glicemia capilar e oximetria de pulso imediatas.',
        'EAS (urina tipo 1) e urocultura.',
        'Hemograma, eletrólitos, função renal e hepática.',
        'Eletrocardiograma após estabilização para avaliar intervalo QTc.'
      ],
      orientacoesNaoFarmacologicas: [
        'Ambiente tranquilo e silencioso, evitando excesso de estímulos sonoros e visuais.',
        'Retirar objetos perfurocortantes, cintos, cadarços e bolsas do alcance do paciente.',
        'Manter sempre uma via de escape desimpedida entre o médico e a porta de saída da sala.'
      ]
    }
  },
  {
    id: 'ansiedade_panico',
    titulo: 'Crise de Ansiedade Aguda e Ataque de Pânico',
    categoria: 'Sistema Nervoso e Psiquiátrico',
    subtitulo: 'Palpitações, taquipneia, parestesias em mãos/face e medo iminente de morte: acolhimento e Diazepam VO',
    paginaPdf: 97,
    opcoesPrescricao: [
      {
        id: 'panico_diazepam_oral',
        titulo: 'Opção 1: Alívio Rápido da Crise de Pânico (Diazepam VO Dose Única)',
        subtitulo: 'Redução rápida da hiperativação autonômica simpática e alívio do medo incapacitante.',
        itens: [
          {
            farmacoId: 'diazepam',
            tipoUso: 'agora',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Tomar 1 comprimido de 5 a 10 mg VO em dose única com água na sala de observação.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'DIAGNÓSTICO DE EXCLUSÃO: O ataque de pânico causa sintomas autonômicos exuberantes (taquicardia sinusal, dor torácica atípica, dispneia com hiperventilação, sudorese, tremores e parestesias periorais e nas mãos por alcalose respiratória aguda). É OBRIGATÓRIO DESCARTAR CAUSAS ORGÂNICAS POTENCIALMENTE GRAVES: IAM, TEP, crise asmática, arritmias paroxísticas e hipoglicemia antes de firmar diagnóstico puramente emocional.',
        'TÉCNICA DE RESPIRAÇÃO DIAFRAGMÁTICA: Orientar o paciente a desacelerar o ritmo respiratório (inspirar pelo nariz em 4 segundos, segurar 2 segundos e expirar lentamente pela boca em 6 segundos). Interrompe a hiperventilação que causa hipocapnia, alcalose e espasmos carpopodais por hipocalcemia iônica transitória.',
        'EVITAR A PRESCRIÇÃO CRÔNICA PROLONGADA DE BENZODIAZEPÍNICOS: Benzodiazepínicos devem ser usados exclusivamente para alívio pontual da crise aguda na emergência devido ao elevado risco de tolerância e dependência química. O tratamento de manutenção do Transtorno de Pânico deve ser feito com Inibidores Seletivos da Recaptação de Serotonina (ISRS: Sertralina, Escitalopram) na Atenção Básica.'
      ],
      criteriosInternacao: [
        'Raro; internação apenas se ideação suicida ativa associada ou se exames complementares revelarem causa orgânica de base.'
      ],
      examesRecomendados: [
        'Eletrocardiograma de 12 derivações (obrigatório se queixa de dor no peito ou palpitações).',
        'Glicemia capilar e oximetria de pulso.',
        'Troponina e D-dímero se fatores de risco para SCA ou TEP.'
      ],
      orientacoesNaoFarmacologicas: [
        'Acolhimento empático com validação dos sintomas: assegurar com firmeza e tranquilidade ao paciente de que ele não está tendo um infarto nem vai morrer, e que os sintomas físicos são reais decorrentes da adrenalina e vão ceder.',
        'Acomodar o paciente em ambiente silencioso e arejado.'
      ]
    }
  },
  {
    id: 'lombalgia_mecanica',
    titulo: 'Lombalgia Aguda Mecânica e Lombociatalgia',
    categoria: 'Sistema Musculoesquelético',
    subtitulo: 'Dor lombar aguda com contratura paravertebral: AINE oral + Ciclobenzaprina relaxante muscular + Analgesia',
    paginaPdf: 97,
    opcoesPrescricao: [
      {
        id: 'lombalgia_diclofenaco_ciclo',
        titulo: 'Opção 1: Tratamento Padrão (Diclofenaco + Ciclobenzaprina + Dipirona)',
        subtitulo: 'Controle anti-inflamatório, quebra do ciclo espasmo-dor e analgesia de resgate.',
        itens: [
          {
            farmacoId: 'diclofenaco',
            tipoUso: 'continuo',
            dose: 50,
            unidade: 'mg',
            via: 'VO',
            intervalo: 8,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 50 mg VO de 8 em 8 horas após as refeições por 5 dias seguidos. Sugestão de horários: 6h, 14h, 22h.'
          },
          {
            farmacoId: 'ciclobenzaprina',
            tipoUso: 'continuo',
            dose: 5,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 5 mg VO à noite antes de dormir por 5 dias seguidos. Relaxa a musculatura paravertebral e melhora o sono.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido de 1.000 mg se dor lombar aguda.'
          }
        ]
      },
      {
        id: 'lombalgia_celecoxibe',
        titulo: 'Opção 2: Alternativa com Inibidor de COX-2 (Celecoxibe)',
        subtitulo: 'Maior segurança gástrica em pacientes com dispepsia leve ou idosos.',
        itens: [
          {
            farmacoId: 'celecoxibe',
            tipoUso: 'continuo',
            dose: 200,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 200 mg VO uma vez ao dia com água por 5 dias seguidos.'
          },
          {
            farmacoId: 'ciclobenzaprina',
            tipoUso: 'continuo',
            dose: 5,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 5 mg à noite por 5 dias.'
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
        'RED FLAGS EM LOMBALGIA (INDICADORES DE PATOLOGIA GRAVE): 1) SÍNDROME DA CAUDA EQÜINA (EMERGÊNCIA CIRÚRGICA ABSOLUTA: anestesia em sela no períneo, incontinência urinária/fecal ou retenção urinária aguda com bexigoma, fraqueza motora progressiva nos membros inferiores com perda do reflexo aquileu - descompressão neurocirúrgica urgente!); 2) Febre associada, perda de peso inexplicada ou história prévia de neoplasia (investigar metástase óssea vertebral ou espondilodiscite infecciosa / abscesso epidural); 3) Déficit neurológico motor focal agudo (ex: pé caído / fraqueza na dorsiflexão do pé L4-L5); 4) Idade > 50 anos com dor de início noturno contínua que não melhora com o repouso.',
        'EXAMES DE IMAGEM NÃO SÃO NECESSÁRIOS NA LOMBALGIA MECÂNICA AGUDA SEM RED FLAGS: Radiografias simples na fase aguda inicial não alteram a conduta clínica e aumentam a radiação desnecessária.',
        'REPOUSO ABSOLUTO PROLONGADO NO LEITO É PREJUDICIAL: Retarda a recuperação e enfraquece a musculatura do core; orientar repouso relativo por no máximo 24 a 48 horas e estímulo precoce à deambulação leve.'
      ],
      criteriosInternacao: [
        'Síndrome da cauda equina ou déficit motor neurológico progressivo.',
        'Suspeita de espondilodiscite infecciosa, abscesso peridural ou fratura vertebral instável.'
      ],
      examesRecomendados: [
        'Ressonância Magnética de Coluna Lombossacra de urgência se sinais de cauda equina ou déficit motor.',
        'Radiografia de coluna em 2 incidências se história de trauma de alta energia em idosos (fratura por osteoporose).',
        'Hemograma, VHS e PCR se suspeita de infecção ou malignidade.'
      ],
      orientacoesNaoFarmacologicas: [
        'Aplicação de compressas mornas locais por 20 minutos 3 vezes ao dia para relaxamento da musculatura espasmada.',
        'Evitar carregar pesos, agachar-se dobrando os joelhos e não a coluna.',
        'Encaminhamento pós-fase aguda para Fisioterapia e fortalecimento da musculatura estabilizadora abdominal e paravertebral (Core).'
      ]
    }
  },
  {
    id: 'torcicolo',
    titulo: 'Torcicolo Espasmódico e Cervicalgia Aguda',
    categoria: 'Sistema Musculoesquelético',
    subtitulo: 'Espasmo doloroso agudo do músculo esternocleidomastóideo e trapézio: AINE + Ciclobenzaprina',
    paginaPdf: 99,
    opcoesPrescricao: [
      {
        id: 'torcicolo_cetoprofeno_ciclo',
        titulo: 'Opção 1: Tratamento com Cetoprofeno + Ciclobenzaprina',
        subtitulo: 'Alívio rápido da inflamação cervical e quebra do espasmo muscular em rotação.',
        itens: [
          {
            farmacoId: 'cetoprofeno',
            tipoUso: 'continuo',
            dose: 150,
            unidade: 'mg',
            via: 'VO',
            intervalo: 12,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 150 mg VO de 12 em 12 horas após as refeições por até 5 dias seguidos. Sugestão de horários: 8h e 20h.'
          },
          {
            farmacoId: 'ciclobenzaprina',
            tipoUso: 'continuo',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 10 mg VO à noite ao deitar por até 5 dias.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido de 1.000 mg se dor aguda.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'DIFERENCIAR TORCICOLO MUSCULAR DE DISTONIA CERVICAL AGUDA POR MEDICAMENTOS: Uso recente de antieméticos (Plasil, bromoprida) ou antipsicóticos (haloperidol) causa distonia extrapiramidal aguda com rotação cervical forçada, que NÃO responde a anti-inflamatórios! O tratamento é Prometazina 50 mg IM ou Biperideno 5 mg IM.',
        'Sinais de gravidade: febre associada a dor cervical e rigidez de nuca (pesquisar meningite), história de trauma cervical automobilístico ou mergulho em água rasa (risco de fratura de vértebras cervicais e lesão medular - exigir colar cervical rígido e TC).'
      ],
      criteriosInternacao: [
        'Trauma cervical com dor óssea à palpação das apófises espinhosas.',
        'Déficit neurológico irradiado para membros superiores com perda de reflexos ou força (cervicobraquialgia aguda grave).'
      ],
      examesRecomendados: [
        'O exame físico neurológico minucioso é suficiente na grande maioria dos casos musculares posturais.',
        'Radiografia simples ou TC de coluna cervical em casos de trauma.'
      ],
      orientacoesNaoFarmacologicas: [
        'Compressas mornas locais por 15 a 20 minutos no pescoço para relaxamento das fibras musculares.',
        'Adequar a altura do travesseiro ao dormir e evitar correntes de ar condicionado direto sobre a nuca.',
        'Alongamentos suaves e graduais após o alívio da dor aguda inicial.'
      ]
    }
  },
  {
    id: 'trauma_toracico',
    titulo: 'Trauma Torácico Fechado e Contusão de Costela',
    categoria: 'Sistema Musculoesquelético',
    subtitulo: 'Dor ventilatório-dependente pós-trauma: analgesia potente para evitar hipoventilação e atelectasia',
    paginaPdf: 100,
    opcoesPrescricao: [
      {
        id: 'trauma_toracico_analgesia',
        titulo: 'Opção 1: Analgesia Escalonada Otimizada (Naproxeno + Dipirona + Codeína)',
        subtitulo: 'Permite ventilação profunda sem dor e previne complicações pulmonares restritivas.',
        itens: [
          {
            farmacoId: 'naproxeno',
            tipoUso: 'continuo',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            intervalo: 12,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 500 mg VO de 12 em 12 horas após as refeições por 5 dias seguidos. Sugestão de horários: 8h e 20h.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'continuo',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 1.000 mg VO de 6 em 6 horas fixo nos primeiros 3 dias. Sugestão de horários: 6h, 12h, 18h, 00h.'
          },
          {
            farmacoId: 'codeina',
            tipoUso: 'se_necessario',
            dose: 30,
            unidade: 'mg',
            via: 'VO',
            intervalo: 8,
            observacaoUso: 'Tomar 1 comprimido de 30 mg VO se dor respiratória intensa persistente.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'O PRINCIPAL OBJETIVO NA FRATURA/CONTUSÃO DE COSTELA É A ANALGESIA ADEQUADA: A dor intensa leva o paciente a respirar superficialmente (respiração restritiva antiálgica), o que causa atelectasia alveolar maciça e acúmulo de secreções, culminando frequentemente em PNEUMONIA GRAVE EM IDOSOS!',
        'PROIBIDO FAZER FAIXAS OU ENFAIXAMENTOS COMPRESSIVOS NO TÓRAX: O enfaixamento restringe a expansão torácica e precipita insuficiência respiratória aguda e atelectasias!',
        'EXCLUIR COMPLICAÇÕES PLEUROPULMONARES AGUDAS: 1) Pneumotórax (hipertimpanismo e redução do murmúrio vesicular); 2) Hemotórax (macicez à percussão e hipotensão); 3) Tórax instável / Flail chest (fratura de 3 ou mais costelas consecutivas em 2 ou mais pontos com respiração paradoxal).'
      ],
      criteriosInternacao: [
        'Presença de pneumotórax ou hemotórax exigindo drenagem pleural em selo d’água.',
        'Fratura de 3 ou mais costelas em pacientes idosos (> 65 anos) ou portadores de DPOC/asma.',
        'Fraturas das primeiras costelas (1ª e 2ª costelas: indicam trauma de alta energia com risco de lesão da aorta e vasos subclávios) ou das últimas (9ª a 12ª costelas: investigar lesão de fígado e baço no abdome!).'
      ],
      examesRecomendados: [
        'Radiografia de tórax PA e perfil em inspiração e expiração (pesquisar pneumotórax laminar apical e contusão pulmonar).',
        'Tomografia Computadorizada de Tórax sem contraste se trauma de alto impacto ou dúvida diagnóstica.',
        'Ultrassonografia FAST de tórax e abdome à beira-leito (E-FAST).'
      ],
      orientacoesNaoFarmacologicas: [
        'Exercícios de fisioterapia respiratória frequentes (fisioterapia incentivadora com inspirômetro de incentivo / Respiron) para expandir os alvéolos.',
        'Deambulação precoce assistida.'
      ]
    }
  },
  {
    id: 'bursite_tendinite',
    titulo: 'Bursite e Tendinite Aguda (Ombro / Quadril / Joelho)',
    categoria: 'Sistema Musculoesquelético',
    subtitulo: 'Sinovite e inflamação aguda periarticular: AINE potente + relaxante muscular + repouso relativo',
    paginaPdf: 100,
    opcoesPrescricao: [
      {
        id: 'bursite_cetorolaco_ciclo',
        titulo: 'Opção 1: Tratamento Rápido com Cetorolaco Sublingual + Ciclobenzaprina',
        subtitulo: 'Excelente potência analgésica sublingual para alívio rápido de crises agudas.',
        itens: [
          {
            farmacoId: 'cetorolaco',
            tipoUso: 'continuo',
            dose: 10,
            unidade: 'mg',
            via: 'SL',
            intervalo: 8,
            dias: 3,
            observacaoUso: 'Colocar 1 comprimido sublingual de 10 mg debaixo da língua a cada 8 horas por no máximo 3 a 5 dias. Sugestão de horários: 6h, 14h, 22h.'
          },
          {
            farmacoId: 'ciclobenzaprina',
            tipoUso: 'continuo',
            dose: 5,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 5 a 10 mg VO à noite ao deitar por 5 dias.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido de 1.000 mg se dor articular residual.'
          }
        ]
      },
      {
        id: 'bursite_diclofenaco_oral',
        titulo: 'Opção 2: Tratamento Convencional com Diclofenaco VO',
        subtitulo: 'Opção do elenco básico para tendinite do manguito rotador ou bursite trocantérica.',
        itens: [
          {
            farmacoId: 'diclofenaco',
            tipoUso: 'continuo',
            dose: 50,
            unidade: 'mg',
            via: 'VO',
            intervalo: 8,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 50 mg VO de 8 em 8 horas após as refeições por 5 dias. Sugestão de horários: 6h, 14h, 22h.'
          },
          {
            farmacoId: 'ciclobenzaprina',
            tipoUso: 'continuo',
            dose: 5,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 5 mg à noite.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'DIFERENCIAR BURSITE SÉPTICA (INFECTADA) DE BURSITE INFLAMATÓRIA ASSÉPTICA: A bursite séptica (frequente no olécrano do cotovelo ou pré-patelar no joelho) apresenta rubor intenso, calor local exuberante, dor extrema e flutuação purulenta, frequentemente com febre. A bursite séptica EXIGE punção aspirativa diagnóstica, drenagem e antibioticoterapia para Staphylococcus aureus (Oxacilina EV ou Cefalexina VO)! Não dar apenas AINE.',
        'Limitar o uso contínuo de AINEs a no máximo 5 a 7 dias para evitar nefrotoxicidade e sangramentos digestivos.'
      ],
      criteriosInternacao: [
        'Bursite séptica refratária ou com celulite extensa circundante.',
        'Artrite séptica bacteriana intra-articular concomitante.'
      ],
      examesRecomendados: [
        'Ultrassonografia da articulação acometida (confirma derrame bursal espessado, roturas parciais ou calcificações tendíneas).',
        'Punção e análise do líquido sinovial com bacterioscopia (Gram) e cultura se suspeita de infecção.',
        'Radiografia simples para descartar calcificações e fraturas por avulsão.'
      ],
      orientacoesNaoFarmacologicas: [
        'Crioterapia: compressas de gelo envolvidas em pano úmido por 15 a 20 minutos de 3 a 4 vezes ao dia na fase aguda.',
        'Repouso relativo do membro com uso temporário de tipoia em lesões de ombro (evitar imobilização rígida prolongada para não causar capsulite adesiva / "ombro congelado").',
        'Fisioterapia motora para reabilitação do manguito rotador.'
      ]
    }
  },
  {
    id: 'artrite_gotosa',
    titulo: 'Artrite Gotosa Aguda (Crise de Gota / Podagra)',
    categoria: 'Sistema Musculoesquelético',
    subtitulo: 'Monoartrite inflamatória súbita hiperálgica (tipicamente 1ª MTF do hálux): Colchicina e manejo do ácido úrico',
    paginaPdf: 101,
    opcoesPrescricao: [
      {
        id: 'gota_colchicina_ataque',
        titulo: 'Opção 1: Colchicina Oral (1ª Linha Específica)',
        subtitulo: 'Esquema de baixa dose recomendado pelos consensos internacionais (ACR / EULAR).',
        itens: [
          {
            farmacoId: 'colchicina',
            tipoUso: 'agora',
            dose: 1,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Tomar 2 comprimidos de 0,5 mg (1 mg) VO imediatamente; após 1 hora, tomar mais 1 comprimido de 0,5 mg (dose total de 1,5 mg no 1º dia). A partir do dia seguinte, tomar 1 comprimido de 0,5 mg de 12 em 12 horas até a melhora completa da dor.'
          },
          {
            farmacoId: 'dipirona',
            tipoUso: 'se_necessario',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido de 1.000 mg se dor articular residual.'
          }
        ]
      },
      {
        id: 'gota_naproxeno_aine',
        titulo: 'Opção 2: Anti-inflamatório Não Esteroidal (Naproxeno VO)',
        subtitulo: 'Para pacientes com função renal normal e sem histórico de sangramento digestivo.',
        itens: [
          {
            farmacoId: 'naproxeno',
            tipoUso: 'continuo',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            intervalo: 12,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 500 mg VO de 12 em 12 horas após as refeições por até 5 dias. Sugestão de horários: 8h e 20h.'
          },
          {
            farmacoId: 'omeprazol',
            tipoUso: 'continuo',
            dose: 20,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 20 mg em jejum pela manhã para proteção gástrica.'
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
      },
      {
        id: 'gota_corticoide_prednisona',
        titulo: 'Opção 3: Corticoterapia Oral (Contraindicação a AINE e Colchicina)',
        subtitulo: 'Indicado em idosos com insuficiência renal, gastropatia ou insuficiência cardíaca.',
        itens: [
          {
            farmacoId: 'prednisona',
            tipoUso: 'continuo',
            dose: 40,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            dias: 5,
            observacaoUso: 'Tomar 2 comprimidos de 20 mg (40 mg) VO pela manhã após o desjejum por 5 dias seguidos, reduzindo para 20 mg por 3 dias e suspendendo.'
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
        'REGRA DE OURO NA CRISE AGUDA DE GOTA: NUNCA INICIAR OU SUSPENDER O ALOPURINOL DURANTE UMA CRISE AGUDA! A variação abrupta dos níveis séricos de ácido úrico mobiliza mais cristais de urato monossódico para dentro da cavidade articular, perpetuando e agravando a sinovite aguda. Se o paciente já usava alopurinol cronicamente, MANTER a mesma dose; se nunca usou, NÃO começar agora (iniciar apenas 2 a 4 semanas após a resolução completa da crise inflamatória sob cobertura profilática de colchicina).',
        'DIFERENCIAR DE ARTRITE SÉPTICA: A gota é a artrite mais dolorosa da medicina (podagra clássica: dor excruciante na 1ª articulação metatarsofalângica do dedão do pé, com eritema vivo que lembra celulite). Se houver febre alta ou dúvida com artrite séptica bacteriana, a punção articular diagnóstica (artrocentese) é mandatória para pesquisa de cristais birrefringentes negativos à luz polarizada e culturas.',
        'EVITAR ÁCIDO ACETILSALICÍLICO (AAS): Em doses baixas (< 2 g/dia), o AAS inibe a secreção tubular renal de ácido úrico, piorando a hiperuricemia.'
      ],
      criteriosInternacao: [
        'Dúvida diagnóstica com artrite séptica de grandes articulações (joelho, quadril).',
        'Crise poliarticular grave com incapacidade de autocuidado.',
        'Insuficiência renal aguda concomitante.'
      ],
      examesRecomendados: [
        'Ácido úrico sérico (atenção: até 30-40% dos pacientes na fase aguda da crise apresentam níveis séricos normais ou paradoxalmente baixos de ácido úrico, pois o urato precipitou na articulação!).',
        'Artrocentese com análise do líquido sinovial (pesquisa de cristais de urato monossódico em forma de agulha com birrefringência negativa e cultura bacteriológica).',
        'Creatinina e ureia (avaliação de nefropatia por urato e segurança medicamentosa).',
        'Radiografia simples da articulação acometida (erosões ósseas em "saca-bocado" com bordas salientes na gota crônica tofácea).'
      ],
      orientacoesNaoFarmacologicas: [
        'Crioterapia: bolsas de gelo por 20 minutos várias vezes ao dia sobre a articulação inflamada reduzem a inflamação e a dor local.',
        'Repouso e elevação do membro afetado durante a crise.',
        'Orientações dietéticas pós-crise: evitar bebidas alcoólicas (especialmente cerveja, rica em purinas e indutora de lactacidemia), frutos do mar, miúdos (fígado, coração, moela) e carnes vermelhas; incentivar consumo de laticínios magros, café, cerejas e hidratação hídrica abundante (> 2 a 3 L/dia).'
      ]
    }
  },
  {
    id: 'soluco_incoercivel_pos_avc',
    titulo: 'Soluços Incoercíveis e Vômitos (Sequelas de AVCi)',
    categoria: 'Sistema Nervoso e Psiquiátrico',
    subcategoria: 'Neurologia e Complicações Pós-AVC',
    paginaPdf: 91,
    descricao: 'Abordagem farmacológica de soluços intratáveis e êmese decorrentes de lesão isquêmica do tronco cerebral (Clorpromazina VO / EV).',
    opcoesPrescricao: [
      {
        id: 'soluco_clorpromazina_oral',
        titulo: 'Opção 1 - Clorpromazina (Amplictil) Via Oral em Gotas',
        subtitulo: 'Conduta padrão do Guia UPA 2026: 5 a 10 gotas VO de 12/12h até cessação dos soluços',
        itens: [
          {
            farmacoId: 'clorpromazina',
            forma: 'gotas',
            dose: 10,
            unidade: 'gotas',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 12,
            dias: 3,
            observacaoUso: 'Pingar 5 a 10 gotas (5 a 10 mg) em uma colher com um pouco de água de 12 em 12 horas por até 3 a 5 dias. Suspender assim que os soluços cessarem.'
          },
          {
            farmacoId: 'ondansetrona',
            forma: 'cp',
            dose: 8,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'se_necessario',
            intervalo: 8,
            observacaoUso: 'Tomar 1 comprimido se náuseas ou vômitos associados, podendo repetir a cada 8 horas.'
          }
        ]
      },
      {
        id: 'soluco_clorpromazina_ev',
        titulo: 'Opção 2 - Clorpromazina Endovenosa (Crise Aguda Hospitalar)',
        subtitulo: '1/3 a 1 ampola (8 a 25 mg) diluída em SF 0,9% infundida lentamente (pág. 91)',
        itens: [
          {
            farmacoId: 'clorpromazina',
            forma: 'amp',
            dose: 10,
            unidade: 'mg',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            observacaoUso: '1/3 a 1/2 ampola (cerca de 8 a 12,5 mg) diluída em 100 mL de SF 0,9% EV infundida em 30 a 45 minutos. Paciente deve permanecer deitado (risco de hipotensão postural).'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'Soluços persistentes (> 48h) ou intratáveis (> 1 mês) após AVC sugerem acometimento isquêmico do tronco encefálico (síndrome bulbar lateral de Wallenberg) ou irritação frênica/vagal.',
        'Clorpromazina EV pode causar hipotensão ortostática acentuada e taquicardia reflexa. Monitorar PA.',
        'Atenção ao risco de sedação excessiva, broncoaspiração em disfágicos e efeitos extrapiramidais (distonia aguda).'
      ],
      orientacoesNaoFarmacologicas: [
        'Manobras de estimulação vagal para casos leves: manobra de Valsalva, ingerir água gelada em pequenos goles rápidos, engolir uma colher de açúcar refinado.',
        'Manter cabeceira elevada a 45º se paciente acamado para evitar broncoaspiração de saliva ou conteúdo gástrico.'
      ]
    }
  },
  {
    id: 'coma_alcoolico',
    titulo: 'Coma Alcoólico e Intoxicação Etílica Aguda',
    categoria: 'Sistema Nervoso e Psiquiátrico',
    subcategoria: 'Emergências Toxicológicas e Sala Vermelha',
    paginaPdf: 96,
    descricao: 'Protocolo de estabilização imediata na Sala Vermelha: suporte de via aérea, reposição de Tiamina pré-glicose e hidratação parenteral.',
    opcoesPrescricao: [
      {
        id: 'coma_alcoolico_sala_vermelha',
        titulo: 'Protocolo de Emergência UPA - Sala Vermelha (Tiamina EV + SG 5% + Ondansetrona)',
        subtitulo: 'Conduta estrita da página 96 do Guia UPA 2026 com prevenção mandatória da Encefalopatia de Wernicke',
        itens: [
          {
            farmacoId: 'tiamina',
            forma: 'amp',
            dose: 300,
            unidade: 'mg',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            observacaoUso: '3 ampolas (300 mg) diluídas em 100 mL de SF 0,9% EV em 30 minutos. ADMINISTRAR OBRIGATORIAMENTE ANTES DA INFUSÃO DE GLICOSE para não precipitar encefalopatia de Wernicke irreversível.'
          },
          {
            farmacoId: 'glicose_50',
            forma: 'amp',
            dose: 40,
            unidade: 'ml',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            observacaoUso: '4 ampolas de Glicose 50% (40 mL = 20 g) EV direto lento se glicemia capilar < 70 mg/dL.'
          },
          {
            farmacoId: 'ondansetrona',
            forma: 'amp',
            dose: 8,
            unidade: 'mg',
            via: 'EV',
            tipoUso: 'continuo',
            intervalo: 8,
            dias: 1,
            observacaoUso: '1 ampola (8 mg / 4 mL) diluída em 100 mL de SF 0,9% EV lento de 8 em 8 horas.'
          },
          {
            farmacoId: 'diazepam',
            forma: 'amp',
            dose: 10,
            unidade: 'mg',
            via: 'EV',
            tipoUso: 'se_necessario',
            intervalo: 8,
            observacaoUso: '1 ampola (10 mg / 2 mL) EV lento (ou IM) se agitação psicomotora violenta ou convulsão de abstinência.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'DIETA ORAL ZERO IMEDIATA (alto risco de vômitos incoercíveis com broncoaspiração maciça e pneumonite química / Síndrome de Mendelson).',
        'PROTEÇÃO DE VIA AÉREA: Se Escala de Coma de Glasgow <= 8 ou ausência de reflexo de proteção laríngea, indicar Intubação Orotraqueal em Sequência Rápida (IOT/ISR).',
        'NUNCA INFUNDIR SORO GLICOSADO ANTES DA TIAMINA: O metabolismo de carboidratos consome os estoques cerebrais já esgotados de tiamina pirofosfato, induzindo hemorragia dos corpos mamilares e encefalopatia de Wernicke aguda fatal.',
        'SEMPRE MEDIR GLICEMIA CAPILAR DE IMEDIATO: O etanol inibe a gliconeogênese hepática e esgota as reservas de glicogênio, provocando hipoglicemia severa que mimetiza morte encefálica ou convulsão.'
      ],
      examesRecomendados: [
        'Glicemia capilar na admissão e de horário a cada 2 a 4 horas;',
        'Gasometria venosa ou arterial com Lactato sérico (pesquisar cetoacidose alcoólica e acidose lática);',
        'Eletrólitos séricos (Sódio, Potássio, Magnésio e Fósforo - distúrbios graves são universais no etilista crônico);',
        'Hemograma, CPK (pesquisa de rabdomiólise após longos períodos de decúbito no chão), Ureia, Creatinina e ECG de 12 derivações (intervalo QTc alargado).'
      ],
      orientacoesNaoFarmacologicas: [
        'Manter cabeceira lateralizada ou em decúbito lateral de segurança se o paciente mantiver respiração espontânea e reflexos presentes;',
        'Monitorização multiparamétrica de oximetria de pulso contínua e pressão arterial;',
        'Aquecimento ativo com cobertores térmicos (o etanol causa vasodilatação periférica intensa e hipotermia grave).'
      ]
    }
  },
  {
    id: 'depressao_esquizofrenia_ambulatorial',
    titulo: 'Depressão, Esquizofrenia e Calmantes Fitoterápicos',
    categoria: 'Sistema Nervoso e Psiquiátrico',
    subcategoria: 'Acolhimento Psiquiátrico Inicial e Transição Ambulatorial',
    paginaPdf: 88,
    descricao: 'Esquemas iniciais da UPA para alívio agudo de sintomas depressivos com insônia, ansiedade leve com fitoterápicos e encaminhamento ao PSF/CAPS.',
    opcoesPrescricao: [
      {
        id: 'depressao_insonia_upa',
        titulo: 'Opção 1 - Depressão com Ansiedade/Insônia (Tiamina + Diazepam + Amitriptilina)',
        subtitulo: 'Conduta inicial recomendada no Guia UPA 2026 (páginas 88 e 94) para estabilização até consulta no PSF',
        itens: [
          {
            farmacoId: 'tiamina',
            forma: 'cp',
            dose: 300,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 12,
            dias: 7,
            observacaoUso: 'Tomar 1 comprimido de 12 em 12 horas por 7 dias, depois 1 comprimido ao dia pela manhã.'
          },
          {
            farmacoId: 'diazepam',
            forma: 'cp',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 20,
            observacaoUso: 'Tomar 1 comprimido à noite antes de dormir por 20 dias seguidos. Não estender o benzodiazepínico além deste período.'
          },
          {
            farmacoId: 'amitriptilina',
            forma: 'cp',
            dose: 25,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 30,
            observacaoUso: 'Tomar 1 comprimido à noite antes de dormir. Retornar ao Posto de Saúde da Família (PSF) após 21 dias para reavaliação clínica.'
          }
        ]
      },
      {
        id: 'calmante_fitoterapico_passiflora',
        titulo: 'Opção 2 - Calmante Fitoterápico (Passiflora incarnata / Maracujá)',
        subtitulo: 'Tratamento natural de venda livre para ansiedade leve e insônia sem indução de tolerância ou dependência (pág. 95)',
        itens: [
          {
            farmacoId: 'passiflora',
            forma: 'cp',
            dose: 360,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 24,
            dias: 30,
            observacaoUso: 'Tomar 1 comprimido de 360 mg por via oral à noite antes de dormir durante 30 dias.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'INVESTIGAÇÃO OBRIGATÓRIA DE RISCO DE SUICÍDIO: Todo paciente com queixa depressiva aguda deve ser ativamente questionado sobre ideação de morte, planejamento e intenção suicida.',
        'Se ideação suicida ativa ou tentativa prévia recente: paciente tem indicação de observação hospitalar, suporte familiar contínuo e acionamento de emergência da Rede de Atenção Psicossocial (RAPS/CAPS).',
        'LIMITAÇÃO DO BENZODIAZEPÍNICO: O diazepam deve ser prescrito apenas como terapia-ponte sintomática inicial por prazo fixo curto (< 2 a 4 semanas) devido ao risco de dependência e tolerância.'
      ],
      orientacoesNaoFarmacologicas: [
        'Higiene do sono: quarto escuro, silencioso, evitar telas e luz azul 1 hora antes de deitar, evitar cafeína após as 14h;',
        'Prática diária de atividade física aeróbica moderada;',
        'Encaminhamento formal por escrito para acompanhamento longitudinal na Unidade Básica de Saúde (UBS/PSF) e apoio psicoterápico.'
      ]
    }
  },
  {
    id: 'analgesia_padrao_pronto_socorro',
    titulo: 'Analgesia Padrão e Manejo da Dor Aguda na UPA',
    categoria: 'Sistema Musculoesquelético',
    subcategoria: 'Escada Analgésica e Receitas Prontas de Pronto Atendimento',
    paginaPdf: 10,
    descricao: 'Esquemas práticos consagrados do Guia UPA 2026 para analgesia padrão de posto, traumas e dor abdominal.',
    opcoesPrescricao: [
      {
        id: 'analgesia_posto_ibuprofeno',
        titulo: 'Opção 1 - Analgesia Posto / Traumas Leves (Ibuprofeno + Dipirona + Codeína se dor intensa)',
        subtitulo: 'Receita padrão de pronto atendimento (página 10 do Guia UPA 2026)',
        itens: [
          {
            farmacoId: 'ibuprofeno',
            forma: 'cp',
            dose: 600,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 6,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 600 mg de 6 em 6 horas por 5 dias.'
          },
          {
            farmacoId: 'dipirona',
            forma: 'cp',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'se_necessario',
            intervalo: 6,
            observacaoUso: 'Tomar 1 a 2 comprimidos se dor ou febre, podendo repetir a cada 6 horas.'
          },
          {
            farmacoId: 'paracetamol-codeina',
            forma: 'cp',
            dose: 530,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'se_necessario',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido se dor intensa refratária, podendo repetir a cada 6 horas se necessário.'
          }
        ]
      },
      {
        id: 'analgesia_posto_diclofenaco',
        titulo: 'Opção 2 - Analgesia Posto / Traumas (Diclofenaco + Dipirona + Codeína se dor intensa)',
        subtitulo: 'Esquema com anti-inflamatório de 8/8h (página 10 do Guia UPA 2026)',
        itens: [
          {
            farmacoId: 'diclofenaco',
            forma: 'cp',
            dose: 50,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 8,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 50 mg de 8 em 8 horas por 5 dias seguidos.'
          },
          {
            farmacoId: 'dipirona',
            forma: 'cp',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'se_necessario',
            intervalo: 6,
            observacaoUso: 'Tomar 1 a 2 comprimidos se dor ou febre, podendo repetir a cada 6 horas.'
          },
          {
            farmacoId: 'paracetamol-codeina',
            forma: 'cp',
            dose: 530,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'se_necessario',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido se dor intensa, podendo repetir a cada 6 horas se necessário.'
          }
        ]
      },
      {
        id: 'analgesia_potente_traumas',
        titulo: 'Opção 3 - Analgesia Potente para Traumas (Cetoprofeno + Dipirona + Codeína)',
        subtitulo: 'Para fraturas, contusões e entorses com dor acentuada (página 11 do Guia UPA 2026)',
        itens: [
          {
            farmacoId: 'cetoprofeno',
            forma: 'cp',
            dose: 150,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'continuo',
            intervalo: 12,
            dias: 5,
            observacaoUso: 'Tomar 1 comprimido de 150 mg de 12 em 12 horas após as refeições por 5 dias.'
          },
          {
            farmacoId: 'dipirona',
            forma: 'cp',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'se_necessario',
            intervalo: 6,
            observacaoUso: 'Tomar 1 a 2 comprimidos se dor ou febre, podendo repetir a cada 6 horas.'
          },
          {
            farmacoId: 'paracetamol-codeina',
            forma: 'cp',
            dose: 530,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'se_necessario',
            intervalo: 6,
            observacaoUso: 'Tomar 1 comprimido se dor intensa, podendo repetir a cada 6 horas.'
          }
        ]
      },
      {
        id: 'analgesia_dor_abdominal',
        titulo: 'Opção 4 - Analgesia Padrão para Dor Abdominal (Dipirona + Buscopan + Plasil)',
        subtitulo: 'Conduta clássica de pronto-socorro para cólica gastrointestinal benigna (página 11 do Guia UPA 2026)',
        itens: [
          {
            farmacoId: 'dipirona',
            forma: 'cp',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'se_necessario',
            intervalo: 6,
            observacaoUso: 'Tomar 1 a 2 comprimidos VO se dor ou febre, podendo repetir de 6 em 6 horas.'
          },
          {
            farmacoId: 'escopolamina',
            forma: 'cp',
            dose: 10,
            unidade: 'mg',
            via: 'VO',
            tipoUso: 'se_necessario',
            intervalo: 8,
            observacaoUso: 'Tomar 1 comprimido se cólica, podendo repetir de 8 em 8 horas.'
          },
          {
            farmacoId: 'metoclopramida',
            forma: 'cp',
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
      alertasGravidade: [
        'AINEs (Ibuprofeno, Diclofenaco, Cetoprofeno) são contraindicados em pacientes com úlcera péptica ativa, insuficiência renal crônica (TFG < 30), insuficiência cardíaca descompensada e anticoagulação plena.',
        'Sempre investigar abdome agudo cirúrgico antes de mascarar dor abdominal com opioides sem avaliação diagnóstica adequada.',
        'Na dor abdominal com náuseas/vômitos intensos, preferir a via endovenosa com hidratação parenteral.'
      ],
      orientacoesNaoFarmacologicas: [
        'Aplicação de calor local seco em espasmos musculares e cólicas;',
        'Crioterapia (bolsa de gelo por 20 min) nas primeiras 48h de traumas e contusões osteomusculares;',
        'Repouso articular relativo e imobilização provisória em entorses.'
      ]
    }
  }
];

export default protocolosNeuroPsiquiatria;
