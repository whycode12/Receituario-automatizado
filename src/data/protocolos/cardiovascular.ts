import { ProtocoloConduta } from '../../types/protocolos';

export const protocolosCardiovascular: ProtocoloConduta[] = [
  {
    id: 'crise_hipertensiva',
    titulo: 'Crise Hipertensiva (Urgência vs Emergência Hipertensiva)',
    categoria: 'Doenças Cardiovasculares',
    subtitulo: 'Diferenciação clínica, manejo ambulatorial da urgência e tratamento intensivo da emergência hipertensiva',
    paginaPdf: 42,
    opcoesPrescricao: [
      {
        id: 'urgencia_captopril',
        titulo: 'Opção 1: Urgência Hipertensiva (Captopril VO)',
        subtitulo: 'PA ≥ 180x120 mmHg SEM lesão aguda de órgão-alvo (LOA). Redução lenta em 24 a 48h.',
        itens: [
          {
            farmacoId: 'captopril',
            tipoUso: 'agora',
            dose: 25,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Administrar 1 comprimido VO agora e reavaliar a pressão após 30 a 45 minutos em repouso.'
          },
          {
            farmacoId: 'furosemida',
            tipoUso: 'agora',
            dose: 40,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Associar 1 comprimido VO se paciente apresentar sinais de hipervolemia, estase jugular ou edema de MMII.'
          }
        ]
      },
      {
        id: 'urgencia_anlodipino',
        titulo: 'Opção 2: Urgência Hipertensiva (Anlodipino VO)',
        subtitulo: 'Alternativa com Bloqueador dos Canais de Cálcio para pacientes intolerantes a IECA.',
        itens: [
          {
            farmacoId: 'anlodipino',
            tipoUso: 'agora',
            dose: 5,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Administrar 1 comprimido VO agora. Monitorar pressão arterial a cada 30 a 60 minutos.'
          }
        ]
      },
      {
        id: 'emergencia_nitroprussiato',
        titulo: 'Opção 3: Emergência Hipertensiva (Nitroprussiato EV)',
        subtitulo: 'PA ≥ 180x120 mmHg COM lesão aguda de órgão-alvo. Vaga de UTI imediata + BIC.',
        itens: [
          {
            farmacoId: 'nitroprussiato_de_sodio',
            tipoUso: 'continuo',
            dose: 50,
            unidade: 'mg',
            via: 'EV',
            intervalo: 24,
            observacaoUso: 'Diluir 1 ampola (50 mg) em 250 mL de SF 0,9% ou SG 5% (frasco e equipo fotossensíveis). Iniciar em BIC a 0,3 mcg/kg/min (≈ 6 a 10 mL/h em adulto 70 kg) e titular a cada 5 min conforme PAM. Meta: reduzir PA em 20-25% nas primeiras 3h.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'Diferenciação crucial: URGÊNCIA (sem LOA; meta é reduzir para ~160x100 em 24-48h ambulatorialmente) vs EMERGÊNCIA (com LOA ativa encefálica, cardíaca, renal ou vascular; risco iminente de morte; requer UTI e vasodilatador EV imediato).',
        'CUIDADO: NUNCA baixar a pressão de forma abrupta na urgência hipertensiva sem LOA (risco de hipoperfusão cerebral e coronariana, AIT ou infarto watershed). Nifedipino de liberação rápida sublingual é PROIBIDO pelo risco de morte súbita.',
        'Metas específicas: na Dissecção Aguda de Aorta, a redução deve ser rápida (PAS < 120 mmHg e FC < 60 bpm em 20 minutos). No AVC Isquêmico agudo, NÃO reduzir a PA a menos que seja > 220x120 mmHg (ou > 185x110 mmHg se for candidato a trombólise).'
      ],
      criteriosInternacao: [
        'Emergência hipertensiva com qualquer LOA: encefalopatia hipertensiva, AVC agudo, dissecção aórtica, IAM, edema agudo de pulmão hipertensivo, eclampsia ou insuficiência renal aguda rapidamente progressiva.',
        'Sintomas refratários a 2 doses de anti-hipertensivo oral na sala de observação.',
        'Instabilidade hemodinâmica, arritmias graves associadas ou troponina positiva.'
      ],
      examesRecomendados: [
        'Eletrocardiograma de 12 derivações (buscar sobrecarga de VE, ondas T isquêmicas ou supra de ST).',
        'Radiografia de tórax PA e perfil (avaliar área cardíaca, congestão hilar e alargamento de mediastino para dissecção aórtica).',
        'Creatinina sérica, ureia, sódio, potássio e gasometria venosa.',
        'Urina tipo I (EAS) para pesquisar hematúria e proteinúria agudas.',
        'Troponina e marcadores de necrose miocárdica se dor torácica ou dispneia.',
        'Tomografia de crânio sem contraste se déficit neurológico focal, cefaleia súbita intensa, confusão mental ou rebaixamento.'
      ],
      orientacoesNaoFarmacologicas: [
        'Acomodar o paciente em ambiente calmo e silencioso em repouso por 30 minutos antes de repetir a aferição (muitas "crises" são pseudocrises emocionais que normalizam apenas com repouso).',
        'Reforçar adesão terapêutica diária aos medicamentos de uso crônico.',
        'Restrição estrita do consumo de sódio (máximo 2 g de sódio / 5 g de sal por dia) e cessação de tabagismo e álcool.'
      ]
    }
  },
  {
    id: 'iam_com_supra',
    titulo: 'Infarto Agudo do Miocárdio com Supra de ST (IAM com Supra / STEMI)',
    categoria: 'Doenças Cardiovasculares',
    subtitulo: 'Abordagem na sala de emergência, dupla antiagregação, anticoagulação e estratégia de reperfusão imediata',
    paginaPdf: 45,
    opcoesPrescricao: [
      {
        id: 'iam_supra_ataque',
        titulo: 'Opção 1: Abordagem Inicial / DAPT + Anticoagulação',
        subtitulo: 'Conduta imediata na sala vermelha: AAS mastigado + Clopidogrel + Enoxaparina.',
        itens: [
          {
            farmacoId: 'aas',
            tipoUso: 'agora',
            dose: 300,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Mastigar 3 comprimidos de 100 mg imediatamente para rápida absorção bucal antiplaquetária.'
          },
          {
            farmacoId: 'clopidogrel',
            tipoUso: 'agora',
            dose: 300,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Administrar 4 comprimidos de 75 mg VO imediatamente (ou 600 mg se cateterismo imediato previsto). Em idosos > 75 anos que receberão fibrinolítico, omitir ataque e fazer 75 mg.'
          },
          {
            farmacoId: 'enoxaparina',
            tipoUso: 'agora',
            dose: 60,
            unidade: 'mg',
            via: 'SC',
            intervalo: 12,
            observacaoUso: 'Administrar 30 mg IV em bólus + 1 mg/kg SC (em adultos < 75 anos). Manutenção de 1 mg/kg SC de 12/12h.'
          },
          {
            farmacoId: 'isossorbida',
            tipoUso: 'se_necessario',
            dose: 5,
            unidade: 'mg',
            via: 'SL',
            intervalo: 8,
            observacaoUso: 'Colocar 1 comprimido sob a língua se dor precordial persistente e PAS > 100 mmHg. Repetir a cada 5 min até 3x se necessário. Proibido se suspeita de infarto de VD ou uso de sildenafil.'
          }
        ]
      },
      {
        id: 'iam_supra_adjuvantes',
        titulo: 'Opção 2: Tratamento Adjuvante e Alívio da Dor Isquêmica',
        subtitulo: 'Estatina de alta intensidade + IBP + Morfina para dor refratária.',
        itens: [
          {
            farmacoId: 'atorvastatina',
            tipoUso: 'agora',
            dose: 80,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Dose de ataque de 80 mg VO administrada na emergência. Manter 80 mg 1x ao dia.'
          },
          {
            farmacoId: 'pantoprazol',
            tipoUso: 'agora',
            dose: 40,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Proteção gástrica para dupla antiagregação associada à heparinização.'
          },
          {
            farmacoId: 'morfina',
            tipoUso: 'se_necessario',
            dose: 3,
            unidade: 'mg',
            via: 'EV',
            intervalo: 4,
            observacaoUso: 'Diluir 1 ampola (10 mg/mL) em 9 mL de SF 0,9% (1 mg/mL); aplicar 2 a 4 mL lentamente por via endovenosa se dor precordial refratária ao nitrato sob monitorização contínua.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'EMERGÊNCIA MÉDICA TEMPO-DEPENDENTE: "Tempo é músculo". Realizar ECG de 12 derivações em no máximo 10 minutos da chegada à UPA.',
        'Metas de reperfusão: Tempo Porta-Balão (Angioplastia primária/Cateterismo) ≤ 90 minutos (ou até 120 min se transferência). Se transferência para hemodinâmica levar mais de 120 minutos: realizar TROMBÓLISE QUÍMICA (Alteplase ou Tenecteplase) em até 30 minutos (Tempo Porta-Agulha ≤ 30 min), desde que tempo de início dos sintomas < 12 horas.',
        'CONTRAINDICAÇÃO FORMAL A NITRATOS E MORFINA: Infarto de ventrículo direito (derivações inferiores D2, D3, aVF com supra em V3R e V4R), PAS < 90 mmHg, FC < 50 bpm ou uso de sildenafil/tadalafil nas últimas 24-48h.'
      ],
      criteriosInternacao: [
        'Indicação absoluta de vaga zero / regulação imediata para Centro Hemodinâmico com UTI Coronariana.',
        'Monitorização contínua em sala vermelha com desfibrilador manual à beira-leito com pás carregadas e acesso venoso duplo calibroso.'
      ],
      examesRecomendados: [
        'ECG de 12 derivações seriado (repetir a cada 15-30 minutos se dor persistente ou dúvida diagnóstica; rodar derivações direitas V3R/V4R e posteriores V7/V8 se supra em parede inferior).',
        'Troponina ultrassensível e CK-MB (NÃO aguardar resultado para iniciar terapia de reperfusão).',
        'Hemograma, coagulograma (TAP, TTPA, INR), função renal, eletrólitos e glicemia capilar.',
        'Radiografia de tórax no leito para descartar alargamento mediastinal e avaliar congestão pulmonar.'
      ],
      orientacoesNaoFarmacologicas: [
        'Oxigênio suplementar sob cateter nasal (2 a 3 L/min) APENAS SE SatO2 < 90% ou dispneia evidente (hiperóxia causa vasoconstrição coronariana reflexa nociva).',
        'Repouso absoluto no leito com monitorização multiparamétrica de ritmo cardíaco, oximetria e pressão arterial.',
        'Jejum absoluto e manter veias periféricas exclusivas (evitar punção subclávia se trombólise prevista).'
      ]
    }
  },
  {
    id: 'iam_sem_supra',
    titulo: 'Infarto sem Supra de ST e Angina Instável (NSTEMI / SCA-SSST)',
    categoria: 'Doenças Cardiovasculares',
    subtitulo: 'Estratificação de risco (TIMI / GRACE), dupla antiagregação, anticoagulação e estabilização clínica',
    paginaPdf: 48,
    opcoesPrescricao: [
      {
        id: 'iam_sem_supra_clopidogrel',
        titulo: 'Opção 1: Esquema com Clopidogrel (SCA sem Supra)',
        subtitulo: 'AAS + Clopidogrel 300 mg ataque + Enoxaparina 1 mg/kg SC + Estatina + IBP.',
        itens: [
          {
            farmacoId: 'aas',
            tipoUso: 'agora',
            dose: 300,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: '3 comprimidos de 100 mg mastigados agora, seguido de 100 mg VO 1x ao dia pela manhã.'
          },
          {
            farmacoId: 'clopidogrel',
            tipoUso: 'agora',
            dose: 300,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: '4 comprimidos de 75 mg VO agora (ou 600 mg se cateterismo previsto em menos de 24h). Manutenção: 75 mg 1x ao dia.'
          },
          {
            farmacoId: 'enoxaparina',
            tipoUso: 'continuo',
            dose: 60,
            unidade: 'mg',
            via: 'SC',
            intervalo: 12,
            observacaoUso: '1 mg/kg SC de 12 em 12 horas. Se idade > 75 anos: 0,75 mg/kg SC 12/12h. Se ClCr < 30 mL/min: 1 mg/kg SC a cada 24h.'
          },
          {
            farmacoId: 'atorvastatina',
            tipoUso: 'agora',
            dose: 80,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: '80 mg VO agora; manter 80 mg VO 1x ao dia.'
          },
          {
            farmacoId: 'pantoprazol',
            tipoUso: 'continuo',
            dose: 40,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Tomar 1 comprimido VO em jejum pela manhã para proteção gástrica.'
          }
        ]
      },
      {
        id: 'iam_sem_supra_ticagrelor',
        titulo: 'Opção 2: Esquema Preferencial com Ticagrelor',
        subtitulo: 'AAS + Ticagrelor 180 mg ataque + Enoxaparina + Betabloqueador VO.',
        itens: [
          {
            farmacoId: 'aas',
            tipoUso: 'agora',
            dose: 300,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Mastigar 300 mg imediatamente.'
          },
          {
            farmacoId: 'ticagrelor',
            tipoUso: 'agora',
            dose: 180,
            unidade: 'mg',
            via: 'VO',
            intervalo: 12,
            observacaoUso: 'Dose de ataque: 2 comprimidos de 90 mg VO imediatamente. Manutenção: 90 mg VO de 12 em 12 horas.'
          },
          {
            farmacoId: 'enoxaparina',
            tipoUso: 'continuo',
            dose: 60,
            unidade: 'mg',
            via: 'SC',
            intervalo: 12,
            observacaoUso: '1 mg/kg SC de 12/12h.'
          },
          {
            farmacoId: 'metoprolol',
            tipoUso: 'continuo',
            dose: 25,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Tomar 25 mg VO 1x ao dia pela manhã se FC > 60 bpm, PAS > 100 mmHg e sem sinais de congestão pulmonar ou broncoespasmo.'
          },
          {
            farmacoId: 'atorvastatina',
            tipoUso: 'continuo',
            dose: 80,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Tomar 80 mg VO 1x ao dia à noite.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'Estratificar o risco com escores validados (TIMI risk score ou GRACE score). Alto risco: instabilidade hemodinâmica, angina refratária, arritmias ventriculares malignas ou alteração dinâmica de ST/T.',
        'SCA sem supra NÃO tem indicação de trombólise química (risco elevado de sangramento sem benefício de patência vascular comprovado); indicação é estratificação invasiva (CATE) precoce.',
        'Se dor persistente apesar do tratamento, considerar infusão de Nitroglicerina EV (Tridil) em BIC com titulação pressórica.'
      ],
      criteriosInternacao: [
        'Todos os pacientes com suspeita ou confirmação de SCA-SSST devem ser internados em unidade monitorizada / UCO.',
        'Alto risco exige angiografia coronariana em até 24 horas; risco muito alto exige CATE de emergência em até 2 horas.'
      ],
      examesRecomendados: [
        'Curva enzimática de Troponina ultrassensível (0h e 2 a 3h após).',
        'ECG de 12 derivações na admissão e seriado a cada nova queixa de dor torácica.',
        'Ecocardiograma transtorácico durante a internação para avaliar contratilidade segmentar e fração de ejeção.',
        'Função renal, potássio sérico, hemograma e coagulograma.'
      ],
      orientacoesNaoFarmacologicas: [
        'Repouso no leito durante as primeiras 12 a 24 horas.',
        'Dieta branda hipossódica e evitar esforço para evacuar (prescrever laxativo suave se necessário).'
      ]
    }
  },
  {
    id: 'angina_estavel',
    titulo: 'Dor Torácica e Angina Estável (Manejo Ambulatorial)',
    categoria: 'Doenças Cardiovasculares',
    subtitulo: 'Controle de sintomas isquêmicos, profilaxia secundária com antiplaquetário, estatina e betabloqueador',
    paginaPdf: 50,
    opcoesPrescricao: [
      {
        id: 'angina_padrao',
        titulo: 'Opção 1: Terapia Médica Otimizada (Manutenção Ambulatorial)',
        subtitulo: 'AAS 100 mg + Betabloqueador + Estatina + Nitrato SL se necessário.',
        itens: [
          {
            farmacoId: 'aas',
            tipoUso: 'continuo',
            dose: 100,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Tomar 1 comprimido VO uma vez ao dia após o almoço.'
          },
          {
            farmacoId: 'metoprolol',
            tipoUso: 'continuo',
            dose: 50,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Tomar 1 comprimido de 50 mg VO pela manhã para reduzir o duplo produto (alvo FC de repouso entre 55 e 60 bpm).'
          },
          {
            farmacoId: 'sinvastatina',
            tipoUso: 'continuo',
            dose: 40,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Tomar 1 comprimido VO à noite após o jantar (ou Atorvastatina 20 a 40 mg 1x ao dia).'
          },
          {
            farmacoId: 'isossorbida',
            tipoUso: 'se_necessario',
            dose: 5,
            unidade: 'mg',
            via: 'SL',
            intervalo: 8,
            observacaoUso: 'Colocar 1 comprimido sob a língua se dor no peito. Se não aliviar em 5 minutos, pode repetir até 3 doses e procurar o pronto-socorro imediatamente.'
          }
        ]
      },
      {
        id: 'angina_vasoespastica',
        titulo: 'Opção 2: Angina Vasoespástica (Prinzmetal) ou Intolerância a Betabloqueador',
        subtitulo: 'Bloqueador dos Canais de Cálcio (Anlodipino) como primeira escolha dilatadora.',
        itens: [
          {
            farmacoId: 'anlodipino',
            tipoUso: 'continuo',
            dose: 5,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Tomar 1 comprimido VO 1x ao dia pela manhã.'
          },
          {
            farmacoId: 'aas',
            tipoUso: 'continuo',
            dose: 100,
            unidade: 'mg',
            via: 'VO',
            intervalo: 24,
            observacaoUso: 'Tomar 1 comprimido VO 1x ao dia.'
          },
          {
            farmacoId: 'isossorbida',
            tipoUso: 'se_necessario',
            dose: 5,
            unidade: 'mg',
            via: 'SL',
            intervalo: 8,
            observacaoUso: '1 comprimido SL se crise de dor.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'Sinais de instabilidade (Angina Instável / Urgência): dor aos mínimos esforços ou em repouso > 20 minutos, início recente (< 2 meses) classe CCS III/IV ou padrão em crescendo (maior frequência, duração ou intensidade). Exige avaliação imediata em pronto-socorro com ECG e enzimas.',
        'Classificação Funcional CCS: Classe I (esforço extenuante), Classe II (limitação leve, caminhar > 2 quarteirões), Classe III (limitação marcante, caminhar 1 a 2 quarteirões ou 1 lance de escada), Classe IV (incapacidade de realizar qualquer atividade sem desconforto ou dor em repouso).'
      ],
      criteriosInternacao: [
        'Evolução para padrão instável ou eletrocardiograma demonstrando alterações isquêmicas agudas.',
        'Sintomas refratários à terapia medicamentosa otimizada.'
      ],
      examesRecomendados: [
        'ECG basal de 12 derivações em repouso.',
        'Teste Ergométrico ou Ecocardiograma de Estresse para avaliação funcional de isquemia miocárdica.',
        'Angiotomografia de Artérias Coronárias ou Cineangiocoronariografia conforme probabilidade pré-teste.',
        'Perfil lipídico completo, glicemia de jejum, HbA1c e função renal.'
      ],
      orientacoesNaoFarmacologicas: [
        'Controle rigoroso dos fatores de risco cardiovascular: cessação do tabagismo, perda de peso com IMC < 25 kg/m², controle da PA < 130x80 mmHg e LDL < 50 mg/dL.',
        'Atividade física aeróbica orientada e supervisionada (30 a 60 min, 5x/semana) respeitando o limiar isquêmico.',
        'Evitar estresse físico ou emocional abrupto e refeições hipercalóricas copiosas.'
      ]
    }
  },
  {
    id: 'bradiarritmias',
    titulo: 'Bradiarritmias Sintomáticas e Bloqueios AV na Emergência',
    categoria: 'Doenças Cardiovasculares',
    subtitulo: 'Algoritmo ACLS para FC < 50 bpm: atropina, marcapasso transcutâneo e infusão de catecolaminas',
    paginaPdf: 52,
    opcoesPrescricao: [
      {
        id: 'bradi_atropina',
        titulo: 'Opção 1: Tratamento Farmacológico Inicial (Atropina EV)',
        subtitulo: 'FC < 50 bpm associada a sinais de instabilidade hemodinâmica (ACLS).',
        itens: [
          {
            farmacoId: 'atropina',
            tipoUso: 'agora',
            dose: 1,
            unidade: 'mg',
            via: 'EV',
            intervalo: 24,
            observacaoUso: 'Administrar 1 mg (2 ampolas de 0,5 mg) em bólus EV rápido direto. Repetir a cada 3 a 5 minutos se FC persistir instável, até a dose máxima acumulada de 3 mg. NUNCA dar doses < 0,5 mg.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'Sinais de instabilidade (4Ds do ACLS): Hipotensão/Choque, Alteração aguda do estado mental, Dor torácica isquêmica, Sinais de insuficiência cardíaca aguda.',
        'Bloqueios de alto grau (BAV 2º grau Mobitz II, bloqueio 2:1 ou BAVT com QRS largo): a ATROPINA GERALMENTE É INEFICAZ (sítio infranodal no feixe de His). NÃO atrasar a instalação de MARCAPASSO TRANSCUTÂNEO ou infusão de Adrenalina/Dopamina!',
        'Causas reversíveis frequentes: intoxicação por betabloqueadores, digitálicos ou bloqueadores de canais de cálcio, hipercalemia severa, hipotermia, IAM de parede inferior com isquemia do nó AV.'
      ],
      criteriosInternacao: [
        'Indicação de internação em UTI / sala vermelha e parecer cardiológico para implante de marcapasso provisório transvenoso ou definitivo.',
        'Monitorização contínua com desfibrilador/marcapasso transcutâneo colado no tórax do paciente (posição anteroposterior).'
      ],
      examesRecomendados: [
        'ECG de 12 derivações com D2 longo para diagnóstico do tipo de ritmo e bloqueio AV.',
        'Dosagem urgente de eletrólitos (principalmente Potássio e Cálcio iônico).',
        'Troponina para descartar IAM de parede inferior ou de ventrículo direito.',
        'Gasometria venosa ou arterial, hemograma e coagulograma pré-punção central.'
      ],
      orientacoesNaoFarmacologicas: [
        'Posicionar as pás adesivas do marcapasso transcutâneo imediatamente à beira-leito.',
        'Se necessidade de acionar marcapasso transcutâneo: sedar o paciente para tolerar a estimulação elétrica muscular (Fentanil 1,5 mcg/kg + Midazolam 0,1 mg/kg ou Etomidato 0,1 mg/kg se hipotensão).',
        'Garantir acesso venoso periférico calibroso e oxigenoterapia se SatO2 < 90%.'
      ]
    }
  },
  {
    id: 'taquiarritmias',
    titulo: 'Taquiarritmias Estáveis (TSV vs Taquicardia Ventricular)',
    categoria: 'Doenças Cardiovasculares',
    subtitulo: 'Diferenciação pelo QRS: manobras vagais, adenosina para TSV e amiodarona para TV com pulso',
    paginaPdf: 53,
    opcoesPrescricao: [
      {
        id: 'tsv_adenosina',
        titulo: 'Opção 1: Taquicardia Supraventricular de QRS Estreito (TSV Regular)',
        subtitulo: 'Manobras vagais seguidas de Adenosina em bólus ultrarrápido + flush.',
        itens: [
          {
            farmacoId: 'adenosina',
            tipoUso: 'agora',
            dose: 6,
            unidade: 'mg',
            via: 'EV',
            intervalo: 24,
            observacaoUso: '1ª dose: 6 mg (2 mL) em bólus EV ultrarrápido (1 a 2 seg) em veia antecubital com torneirinha de 3 vias, seguido IMEDIATAMENTE por flush de 20 mL de SF 0,9% e elevação do membro. Se não reverter em 2 min, administrar 2ª dose de 12 mg (4 mL).'
          }
        ]
      },
      {
        id: 'tv_amiodarona',
        titulo: 'Opção 2: Taquicardia Monomórfica de QRS Largo Estável (TV com Pulso)',
        subtitulo: 'Amiodarona EV em infusão controlada em SG 5%.',
        itens: [
          {
            farmacoId: 'amiodarona',
            tipoUso: 'agora',
            dose: 150,
            unidade: 'mg',
            via: 'EV',
            intervalo: 24,
            observacaoUso: 'Ataque: diluir 150 mg (1 ampola de 3 mL) em 100 mL de SG 5% e infundir em 10 a 20 minutos. Se reverter, manter manutenção de 900 mg em 250 a 500 mL de SG 5% em 24h em BIC (1 mg/min por 6h, depois 0,5 mg/min por 18h). Diluir exclusivamente em SG 5%.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'SE O PACIENTE APRESENTAR SINAIS DE INSTABILIDADE (Hipotensão, dor precordial anginosa, dispneia/congestão pulmonar, síncope ou alteração mental): NÃO PERDER TEMPO COM DROGAS. REALIZAR CARDIOVERSÃO ELÉTRICA SINCRONIZADA IMEDIATA COM SEDAÇÃO RÁPIDA (Fentanil 1 mcg/kg + Midazolam ou Etomidato).',
        'Cargas da Cardioversão Elétrica Sincronizada: QRS estreito e regular (TSV): 50 a 100 J. QRS estreito irregular (FA): 120 a 200 J bifásico. QRS largo monomórfico (TV): 100 J. QRS largo irregular / polimórfico: desfibrilar sem sincronizar (modo assincrônico 200 J) como na PCR.',
        'Adenosina é CONTRAINDICADA em pacientes com asma ativa ou broncoespasmo grave. Avisar o paciente antes da injeção de que sentirá sensação de aperto torácico e calor por alguns segundos.'
      ],
      criteriosInternacao: [
        'Todas as taquicardias ventriculares com pulso exigem internação em UTI cardiológica para investigação etiológica (isquemia, canalopatia ou miocardiopatia).',
        'TSVs refratárias a duas doses de adenosina e cardioversor elétrico.'
      ],
      examesRecomendados: [
        'ECG de 12 derivações antes e após a reversão (avaliar pré-excitação/onda Delta de Wolff-Parkinson-White, intervalo QT longo, padrão de Brugada).',
        'Eletrólitos séricos (Potássio, Magnésio e Cálcio iônico) para afastar distúrbios arritmogênicos.',
        'Gasometria, troponina seriada e ecocardiograma.'
      ],
      orientacoesNaoFarmacologicas: [
        'Para TSV de QRS estreito: realizar manobra de Valsalva modificada antes da adenosina (soprar em seringa de 10-20 mL por 15 segundos na posição sentada e em seguida deitar o paciente elevando as pernas a 45º por 15 segundos - taxa de reversão superior a 40%).',
        'Nunca realizar compressão do seio carotídeo bilateralmente ou em idosos com sopro carotídeo prévio.'
      ]
    }
  },
  {
    id: 'fibrilacao_atrial',
    titulo: 'Fibrilação Atrial e Flutter Atrial com Alta Resposta (FA com RVR)',
    categoria: 'Doenças Cardiovasculares',
    subtitulo: 'Controle agudo da frequência cardíaca ventricular, estratificação tromboembólica e anticoagulação',
    paginaPdf: 55,
    opcoesPrescricao: [
      {
        id: 'fa_controle_fc',
        titulo: 'Opção 1: Controle Agudo da Resposta Ventricular (Metoprolol EV/VO)',
        subtitulo: 'Alvo: FC < 110 bpm em repouso sem sinais de choque ou congestão pulmonar grave.',
        itens: [
          {
            farmacoId: 'metoprolol',
            tipoUso: 'agora',
            dose: 5,
            unidade: 'mg',
            via: 'EV',
            intervalo: 24,
            observacaoUso: 'Administrar 2,5 a 5 mg EV lentamente em 2 a 5 minutos sob monitorização. Pode repetir após 10 minutos se FC > 110 bpm e PAS estável > 100 mmHg (máx 15 mg).'
          },
          {
            farmacoId: 'rivaroxabana',
            tipoUso: 'continuo',
            dose: 15,
            unidade: 'mg',
            via: 'VO',
            intervalo: 12,
            observacaoUso: 'Iniciar anticoagulação oral com 15 mg VO de 12/12h junto com alimento (ou Enoxaparina 1 mg/kg SC 12/12h) se escore CHA2DS2-VASc ≥ 2 em homens ou ≥ 3 em mulheres.'
          }
        ]
      },
      {
        id: 'fa_cardioversao_quimica',
        titulo: 'Opção 2: Reversão de Ritmo com Amiodarona (Duração < 48h ou Anticoagulada)',
        subtitulo: 'Indicado apenas com início comprovado em < 48h ou após ecocardiograma transesofágico afastar trombo em apêndice atrial.',
        itens: [
          {
            farmacoId: 'amiodarona',
            tipoUso: 'agora',
            dose: 150,
            unidade: 'mg',
            via: 'EV',
            intervalo: 24,
            observacaoUso: 'Ataque: 150 mg em 100 mL de SG 5% EV em 10 a 20 min. Manutenção: 900 mg em 250 a 500 mL de SG 5% em 24h em BIC. Manter anticoagulação por pelo menos 4 semanas pós-cardioversão.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'FA COM INSTABILIDADE HEMODINÂMICA (PAS < 90, angina, edema pulmonar, choque): CARDIOVERSÃO ELÉTRICA SINCRONIZADA IMEDIATA (120 a 200 J bifásico) sob sedação rápida.',
        'REGRA DAS 48 HORAS: Se a FA tiver mais de 48 horas de duração ou tempo de início indeterminado, É PROIBIDO TENTAR REVERTER O RITMO sem anticoagulação plena prévia por no mínimo 3 semanas ou Ecocardiograma Transesofágico (TEE) prévio para afastar trombo em apêndice atrial esquerdo (risco elevadíssimo de AVC cardioembólico maciço na reversão). A conduta correta é apenas CONTROLE DA FC com betabloqueador + anticoagulação plena.',
        'Se paciente tiver Síndrome de Wolff-Parkinson-White com FA pré-excitada (QRS largo e irregular): NÃO USAR betabloqueadores, diltiazem, verapamil ou adenosina (bloqueiam o nó AV e aceleram condução pela via acessória, causando Fibrilação Ventricular e PCR). Usar Procainamida, Amiodarona ou Cardioversão Elétrica.'
      ],
      criteriosInternacao: [
        'FA de alta resposta ventricular refratária com sintomas descompensados.',
        'Necessidade de infusão contínua de amiodarona para reversão de ritmo.',
        'Novo início de insuficiência cardíaca descompensada associada à arritmia.'
      ],
      examesRecomendados: [
        'ECG de 12 derivações (intervalos R-R irregularmente irregulares sem ondas P identificáveis).',
        'TSH e T4 livre para investigar hipertireoidismo como causa desencadeante.',
        'Ecocardiograma transtorácico para avaliar tamanho do átrio esquerdo, função sistólica do VE e valvopatias (estenose mitral).',
        'Cálculo do escore CHA2DS2-VASc (estratificação de risco de AVC) e HAS-BLED (risco hemorrágico).'
      ],
      orientacoesNaoFarmacologicas: [
        'Evitar consumo excessivo de álcool (síndrome do coração em férias / holiday heart), cafeína, energéticos e drogas simpaticomiméticas.',
        'Orientar sinais de alerta para AVC: fraqueza súbita em um lado do corpo, boca torta, fala enrolada ou perda visual.'
      ]
    }
  },
  {
    id: 'tep_tvp',
    titulo: 'Tromboembolismo Pulmonar (TEP) e Trombose Venosa Profunda (TVP)',
    categoria: 'Doenças Cardiovasculares',
    subtitulo: 'Estratificação com Escore de Wells, anticoagulação plena (Enoxaparina vs DOACs) e critérios de trombólise',
    paginaPdf: 56,
    opcoesPrescricao: [
      {
        id: 'tep_enoxaparina',
        titulo: 'Opção 1: Anticoagulação Plena com Enoxaparina (Hospitalar / Emergência)',
        subtitulo: 'HBPM padrão para internação em TEP de risco intermediário/baixo ou TVP extensa.',
        itens: [
          {
            farmacoId: 'enoxaparina',
            tipoUso: 'continuo',
            dose: 60,
            unidade: 'mg',
            via: 'SC',
            intervalo: 12,
            observacaoUso: '1 mg/kg SC a cada 12 horas (ex: 60 mg de 12/12h para 60 kg; 80 mg de 12/12h para 80 kg). Em > 75 anos: 0,75 mg/kg SC 12/12h. Em TFG < 30 mL/min: 1 mg/kg SC 1x/dia.'
          }
        ]
      },
      {
        id: 'tep_doac_rivaroxabana',
        titulo: 'Opção 2: Anticoagulação Oral com DOAC (Rivaroxabana)',
        subtitulo: 'Esquema oral simplificado sem necessidade de ponte com heparina para TVP/TEP estável.',
        itens: [
          {
            farmacoId: 'rivaroxabana',
            tipoUso: 'continuo',
            dose: 15,
            unidade: 'mg',
            via: 'VO',
            intervalo: 12,
            observacaoUso: 'Tomar 1 comprimido de 15 mg VO de 12 em 12 horas durante as primeiras 3 semanas (21 dias) sempre acompanhado de alimentos; a partir do 22º dia, transicionar para 20 mg VO 1x ao dia. Manter por no mínimo 3 a 6 meses.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'TEP MACIÇO / ALTO RISCO: Paciente com hipotensão persistente (PAS < 90 mmHg ou queda > 40 mmHg por mais de 15 min não explicada por hipovolemia, sepse ou arritmia) ou parada cardiorrespiratória. INDICAÇÃO ABSOLUTA DE TROMBÓLISE QUÍMICA SISTÊMICA (Alteplase 100 mg EV em 2 horas ou Tenecteplase em bólus único conforme peso) ou embolectomia percutânea/cirúrgica.',
        'Score de Wells para TEP: TVP clínica (+3), diagnóstico alternativo menos provável (+3), FC > 100 (+1,5), imobilização ou cirurgia nas últimas 4 semanas (+1,5), TEP/TVP prévio (+1,5), hemoptise (+1), neoplasia ativa (+1). > 4 pontos = Alta probabilidade clínica (proceder diretamente para AngioTC de tórax).',
        'D-dímero: UTILIZAR APENAS SE Wells ≤ 4 pontos (baixa/moderada probabilidade). D-dímero normal (< 500 ng/mL ajustado pela idade) EXCLUI TEP com segurança de 99%. NÃO solicitar D-dímero se a probabilidade já for alta (indicar AngioTC direta).'
      ],
      criteriosInternacao: [
        'Todos os pacientes com TEP confirmado ou com TVP íleo-femoral extensa devem ser internados para estabilização e anticoagulação.',
        'TEP com dilatação de VD no ecocardiograma ou troponina/BNP elevados exige leito de UTI (risco intermediário-alto).'
      ],
      examesRecomendados: [
        'Angiotomografia de Tórax com protocolo para TEP (padrão ouro confirmatório).',
        'Ultrassonografia com Doppler venoso de membros inferiores.',
        'Ecocardiograma transtorácico à beira-leito (pesquisar sobrecarga e disfunção do VD, sinal de McConnell, hipertensão pulmonar).',
        'Eletrocardiograma (taquicardia sinusal é o achado mais frequente; padrão S1Q3T3 e sobrecarga de VD indicam acometimento grave).',
        'Gasometria arterial (hipoxemia com hipocapnia por taquipneia) e troponina/BNP.'
      ],
      orientacoesNaoFarmacologicas: [
        'Estimular deambulação precoce assim que instituída a anticoagulação plena em pacientes estáveis.',
        'Meias elásticas compressivas graduadas (20-30 mmHg) após melhora do edema agudo para prevenção de síndrome pós-trombótica.',
        'Evitar longos períodos de imobilização e manter hidratação hídrica adequada.'
      ]
    }
  },
  {
    id: 'edema_agudo_pulmao',
    titulo: 'Edema Agudo de Pulmão Cardiogênico (EAP / Congestão Pulmonar)',
    categoria: 'Doenças Cardiovasculares',
    subtitulo: 'Insuficiência cardíaca descompensada perfil B (quente e úmido): diurético de alça, vasodilatadores e VNI',
    paginaPdf: 58,
    opcoesPrescricao: [
      {
        id: 'eap_padrao',
        titulo: 'Opção 1: Conduta Padrão no EAP (Furosemida EV + Nitroglicerina)',
        subtitulo: 'Para paciente hipertenso ou normotenso com estertoração pulmonar crepitante difusa.',
        itens: [
          {
            farmacoId: 'furosemida',
            tipoUso: 'agora',
            dose: 40,
            unidade: 'mg',
            via: 'EV',
            intervalo: 24,
            observacaoUso: '2 ampolas (40 mg) EV em bólus direto (se paciente já usava furosemida oral crônica, fazer de 2 a 2,5x a dose habitual diária em dose EV). Repetir após 2 horas se débito urinário insuficiente.'
          },
          {
            farmacoId: 'nitroglicerina',
            tipoUso: 'continuo',
            dose: 25,
            unidade: 'mg',
            via: 'EV',
            intervalo: 24,
            observacaoUso: 'Diluir 1 ampola (25 mg/5 mL) em 245 mL de SG 5% ou SF 0,9% (100 mcg/mL). Iniciar em BIC a 5 mcg/min (≈ 3 mL/h) e titular a cada 5 a 10 min em 5 a 10 mcg/min conforme resposta clínica e PAS (> 100 mmHg).'
          }
        ]
      },
      {
        id: 'eap_hipertensivo_severo',
        titulo: 'Opção 2: EAP Hipertensivo Severo (Nitroprussiato EV + Morfina)',
        subtitulo: 'Para crises com PAS > 180 mmHg e congestão maciça "flash pulmonary edema".',
        itens: [
          {
            farmacoId: 'furosemida',
            tipoUso: 'agora',
            dose: 40,
            unidade: 'mg',
            via: 'EV',
            intervalo: 24,
            observacaoUso: 'Administrar 40 mg EV em bólus lento.'
          },
          {
            farmacoId: 'nitroprussiato_de_sodio',
            tipoUso: 'continuo',
            dose: 50,
            unidade: 'mg',
            via: 'EV',
            intervalo: 24,
            observacaoUso: 'Diluir 1 ampola (50 mg) em 250 mL de SF 0,9% fotossensível. Iniciar a 0,3 a 0,5 mcg/kg/min em BIC com titulação a cada 5 min. Reduz pós-carga rapidamente e descarrega o ventrículo esquerdo.'
          },
          {
            farmacoId: 'morfina',
            tipoUso: 'se_necessario',
            dose: 2,
            unidade: 'mg',
            via: 'EV',
            intervalo: 4,
            observacaoUso: 'Diluir 1 ampola (10 mg/mL) em 9 mL SF 0,9% (1 mg/mL). Aplicar 2 mL (2 mg) lentamente por via endovenosa apenas se ansiedade e dispneia angustiante extrema sob monitorização contínua.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      alertasGravidade: [
        'VENTILAÇÃO NÃO INVASIVA (VNI) É PADRÃO-OURO: Iniciar CPAP (5 a 10 cmH2O) ou BiPAP (IPAP 10-15, EPAP 5-8 cmH2O) imediatamente. A VNI diminui a pré e pós-carga cardíaca, melhora a troca gasosa alveolar e reduz a necessidade de intubação orotraqueal e mortalidade em mais de 50%.',
        'CONTRAINDICAÇÕES DA VNI: Rebaixamento importante do nível de consciência (Glasgow < 8), PCR, vômitos incoercíveis com risco de broncoaspiração, instabilidade hemodinâmica extrema (choque) e trauma facial.',
        'EAP COM HIPOTENSÃO (PAS < 90 mmHg / Choque Cardiogênico - Perfil Frio e Úmido): VASODILATADORES E BETABLOQUEADORES SÃO PROIBIDOS! Iniciar inotrópico (Dobutamina 2,5 a 20 mcg/kg/min) associado a vasopressor (Noradrenalina 0,05 a 1 mcg/kg/min) e preparar para IOT e UTI.'
      ],
      criteriosInternacao: [
        'Indicação absoluta de internação em leito de UTI.',
        'Sinais de choque cardiogênico ou necessidade de intubação orotraqueal imediata.'
      ],
      examesRecomendados: [
        'Radiografia de tórax no leito (infiltrado peri-hilar em asa de borboleta, linhas B de Kerley, cardiomegalia, derrame pleural).',
        'Gasometria arterial (avaliar acidose respiratória/mista e índice de oxigenação PaO2/FiO2).',
        'Eletrocardiograma de 12 derivações (investigar síndrome coronariana aguda como gatilho descompensador).',
        'Troponina ultrassensível, BNP ou NT-proBNP sérico.',
        'Eletrólitos (avaliar hipocalemia ou hipercalemia), creatinina e ureia.'
      ],
      orientacoesNaoFarmacologicas: [
        'Posição de Fowler alta (cabeceira a 90º) com pernas pendentes fora do leito (diminui o retorno venoso de 300 a 500 mL para o coração direito).',
        'Instalação de sonda vesical de demora para monitorização estrita do débito urinário horário.'
      ]
    }
  }
];

export default protocolosCardiovascular;
