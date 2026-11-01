import { ProtocoloConduta } from '../../types/protocolos';

export const protocolosRespiratorio: ProtocoloConduta[] = [
  {
    id: 'asma_exacerbacao',
    titulo: 'Asma - Exacerbação e Manejo Ambulatorial',
    categoria: 'Sistema Respiratório',
    subcategoria: 'Broncoespasmo e Crise Asmática',
    paginaPdf: 11,
    descricao: 'Estratificação da crise asmática e esquemas terapêuticos escalonados (Steps 1 a 4) conforme o Guia da UPA 2026.',
    opcoesPrescricao: [
      {
        id: 'asma_step1',
        titulo: 'Step 1 - Sintomas Intermitentes / Leve',
        subtitulo: 'Broncodilatador de curta duração de resgate',
        itens: [
          {
            farmacoId: 'salbutamol',
            forma: 'spray',
            dose: 100,
            unidade: 'mcg',
            via: 'INALATORIA',
            modo: 'sn',
            freq: 4,
            condicao: 'falta de ar ou chiado no peito (inalar 1 a 2 puffs com espaçador)',
            orientacaoExtra: 'Inalar 1 a 2 jatos com espaçador, segurando o ar por 10 segundos. Se não houver alívio rápido, buscar a emergência imediatamente.'
          }
        ]
      },
      {
        id: 'asma_step2',
        titulo: 'Step 2 - Corticoide Inalatório Baixa Dose + Resgate',
        subtitulo: 'Manutenção diária associada a broncodilatador de resgate',
        itens: [
          {
            farmacoId: 'beclometasona',
            forma: 'spray',
            dose: 50,
            unidade: 'mcg',
            via: 'INALATORIA',
            modo: 'continuo',
            freq: 2,
            usoContinuo: true,
            orientacaoExtra: 'Inalar 2 jatos em cada tomada, de 12 em 12 horas. Enxaguar a boca e cuspir após o uso.'
          },
          {
            farmacoId: 'salbutamol',
            forma: 'spray',
            dose: 100,
            unidade: 'mcg',
            via: 'INALATORIA',
            modo: 'sn',
            freq: 4,
            condicao: 'crise de falta de ar ou tosse (resgate)'
          }
        ]
      },
      {
        id: 'asma_step3',
        titulo: 'Step 3 - CI Baixa Dose + LABA (Formoterol) + Resgate',
        subtitulo: 'Terapia combinada para asma moderada persistente',
        itens: [
          {
            farmacoId: 'budesonida_formoterol',
            forma: 'cap',
            dose: 100,
            unidade: 'mcg',
            via: 'INALATORIA',
            modo: 'continuo',
            freq: 2,
            usoContinuo: true,
            orientacaoExtra: 'Inalar o conteúdo de 1 cápsula de 12/12 horas no inalador próprio (Aerolizer). Não engolir a cápsula.'
          },
          {
            farmacoId: 'salbutamol',
            forma: 'spray',
            dose: 100,
            unidade: 'mcg',
            via: 'INALATORIA',
            modo: 'sn',
            freq: 4,
            condicao: 'falta de ar ou tosse (resgate)'
          }
        ]
      },
      {
        id: 'asma_step4',
        titulo: 'Step 4 - CI Média/Alta Dose + LABA + Resgate',
        subtitulo: 'Doses moderadas a altas para controle de asma grave',
        itens: [
          {
            farmacoId: 'budesonida_formoterol',
            forma: 'cap',
            dose: 200,
            unidade: 'mcg',
            via: 'INALATORIA',
            modo: 'continuo',
            freq: 2,
            usoContinuo: true,
            orientacaoExtra: 'Inalar 1 cápsula inalatória de 12 em 12 horas. Enxaguar a cavidade oral com água após o uso.'
          },
          {
            farmacoId: 'salbutamol',
            forma: 'spray',
            dose: 100,
            unidade: 'mcg',
            via: 'INALATORIA',
            modo: 'sn',
            freq: 4,
            condicao: 'falta de ar de resgate'
          }
        ]
      },
      {
        id: 'asma_corticoide_oral',
        titulo: 'Crise Aguda - Corticoterapia Sistêmica Curta',
        subtitulo: 'Ciclo curto de corticoide oral de resgate na exacerbação',
        itens: [
          {
            farmacoId: 'prednisona',
            forma: 'cp',
            dose: 40,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 1,
            dias: 5,
            orientacaoExtra: 'Tomar pela manhã após o café da manhã. Ciclo curto de 5 dias não necessita de desmame gradual.'
          },
          {
            farmacoId: 'salbutamol',
            forma: 'spray',
            dose: 100,
            unidade: 'mcg',
            via: 'INALATORIA',
            modo: 'sn',
            freq: 4,
            condicao: 'falta de ar ou chiado no peito'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'Incapacidade de pronunciar frases completas sem pausas respiratórias',
        'Frequência respiratória > 30 irpm e uso de musculatura acessória (tiragem intercostal/supraclavicular)',
        'Movimentação paradoxal do abdome (indica exaustão respiratória iminente)',
        'Saturação de O2 < 92% em ar ambiente',
        'Sonolência, confusão mental, agitação extrema ou rebaixamento do nível de consciência',
        'Tórax silencioso à ausculta pulmonar (ausência de sibilos por colapso do fluxo aéreo)'
      ],
      examesSolicitar: [
        'Gasometria arterial (Fase inicial: alcalose respiratória com PaCO2 baixa; Fase grave/tardia: normalização ou elevação da PaCO2 indicando acidose respiratória e fadiga)',
        'Peak Flow (PFE - Pico de Fluxo Expiratório) antes e após broncodilatador',
        'Radiografia de tórax (PA e perfil) para afastar pneumotórax, pneumomediastino ou consolidação infecciosa',
        'Eletrocardiograma em adultos/idosos para afastar taquiarritmias e isquemia'
      ],
      orientacoesNaoFarmacologicas: [
        'Instalar oxigenoterapia suplementar (cânula nasal ou máscara) com meta de SpO2 entre 93% e 95% em adultos (94-98% em crianças)',
        'Evitar sedativos, hipnóticos ou tranquilizantes durante a crise',
        'Orientar técnica correta de inalação sempre com câmara espaçadora',
        'Higienizar a cavidade bucal (bochechar e cuspir) após o uso de corticoides inalatórios'
      ],
      classificacao: 'Estratificação GINA: Crise Leve/Moderada vs Grave vs Risco Iminente de Parada Respiratória (IOT imediata)'
    }
  },
  {
    id: 'dpoc_descompensada',
    titulo: 'DPOC Descompensada (Exacerbação Aguda)',
    categoria: 'Sistema Respiratório',
    subcategoria: 'Doença Pulmonar Obstrutiva Crônica',
    paginaPdf: 13,
    descricao: 'Abordagem da descompensação infecciosa ou inflamatória de DPOC na UPA com broncodilatadores, corticoide e antibiótico.',
    opcoesPrescricao: [
      {
        id: 'dpoc_opcao1',
        titulo: 'Opção 1 - Amoxicilina + Prednisona + Salbutamol',
        subtitulo: 'Esquema de primeira linha para exacerbação infecciosa não complicada',
        itens: [
          {
            farmacoId: 'amoxicilina',
            forma: 'cp',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 3,
            dias: 7
          },
          {
            farmacoId: 'prednisona',
            forma: 'cp',
            dose: 40,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 1,
            dias: 5,
            orientacaoExtra: 'Tomar 2 comprimidos de 20 mg (40 mg) pela manhã com água.'
          },
          {
            farmacoId: 'salbutamol',
            forma: 'spray',
            dose: 100,
            unidade: 'mcg',
            via: 'INALATORIA',
            modo: 'sn',
            freq: 4,
            condicao: 'falta de ar ou tosse'
          }
        ]
      },
      {
        id: 'dpoc_opcao2',
        titulo: 'Opção 2 - Amoxicilina + Clavulanato + Prednisona',
        subtitulo: 'Para pacientes com exacerbações frequentes ou comorbidades',
        itens: [
          {
            farmacoId: 'amoxicilina_clavulanato',
            forma: 'cp',
            dose: 875,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 2,
            dias: 7
          },
          {
            farmacoId: 'prednisona',
            forma: 'cp',
            dose: 40,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 1,
            dias: 5
          },
          {
            farmacoId: 'salbutamol',
            forma: 'spray',
            dose: 100,
            unidade: 'mcg',
            via: 'INALATORIA',
            modo: 'sn',
            freq: 4,
            condicao: 'falta de ar ou tosse'
          }
        ]
      },
      {
        id: 'dpoc_opcao3',
        titulo: 'Opção 3 - Azitromicina + Prednisona (Alérgicos a Penicilina)',
        subtitulo: 'Opção macrolídea oral em alérgicos aos betalactâmicos',
        itens: [
          {
            farmacoId: 'azitromicina',
            forma: 'cp',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 1,
            dias: 5
          },
          {
            farmacoId: 'prednisona',
            forma: 'cp',
            dose: 40,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 1,
            dias: 5
          },
          {
            farmacoId: 'salbutamol',
            forma: 'spray',
            dose: 100,
            unidade: 'mcg',
            via: 'INALATORIA',
            modo: 'sn',
            freq: 4,
            condicao: 'falta de ar ou tosse'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'Critérios de Anthonisen para indicação de ATB: 1) Aumento da dispneia; 2) Aumento do volume do escarro; 3) Aumento da purulência do escarro. Indicar ATB se houver purulência + pelo menos mais 1 critério, ou necessidade de VNI/IOT',
        'Uso de musculatura acessória e respiração assincrônica',
        'Acidose respiratória com hipercapnia aguda (pH < 7,35 e PaCO2 > 45 mmHg)',
        'Saturação de O2 < 88%'
      ],
      examesSolicitar: [
        'Gasometria arterial para avaliar acidose hipercápnica e oxigenação',
        'Radiografia de tórax para descartar pneumotórax, consolidações e congestão pulmonar associada',
        'Hemograma completo, Proteína C Reativa (PCR), Eletrólitos (Na, K), Ureia e Creatinina',
        'Eletrocardiograma (sobrecarga atrial/ventricular direita, sinais de cor pulmonale, arritmias)'
      ],
      orientacoesNaoFarmacologicas: [
        'Oxigenoterapia controlada com meta de saturação entre 88% e 92% (evitar hiperóxia que agrava retenção de CO2)',
        'Considerar VNI (Ventilação Não Invasiva - BiPAP) precoce se acidose respiratória (pH 7,25 a 7,35)',
        'Cessação imediata do tabagismo e estímulo à hidratação adequada'
      ],
      classificacao: 'Escore GOLD: Exacerbação Leve (apenas broncodilatador) vs Moderada (BD + corticoide e/ou ATB) vs Grave (internação hospitalar/VNI/UTI)'
    }
  },
  {
    id: 'rinossinusite_aguda',
    titulo: 'Rinossinusite Aguda (Viral e Bacteriana)',
    categoria: 'Sistema Respiratório',
    subcategoria: 'Vias Aéreas Superiores',
    paginaPdf: 14,
    descricao: 'Diagnóstico diferencial entre etiologia viral e bacteriana (RSBA) e esquemas de conduta conforme o Guia da UPA 2026.',
    opcoesPrescricao: [
      {
        id: 'rs_viral',
        titulo: 'Rinossinusite Viral (Sintomática e Lavagem)',
        subtitulo: 'Para sintomas com menos de 10 dias sem piora ou febre alta',
        itens: [
          {
            farmacoId: 'soro_fisiologico_nasal',
            forma: 'sol_nasal',
            dose: 10,
            unidade: 'ml',
            via: 'NASAL',
            modo: 'sn',
            freq: 4,
            condicao: 'obstrução e secreção nasal',
            orientacaoExtra: 'Aspirar o soro fisiológico com seringa de 10 a 20 mL e lavar abundantemente cada narina 4 a 6 vezes ao dia.'
          },
          {
            farmacoId: 'budesonida',
            forma: 'spray',
            dose: 50,
            unidade: 'mcg',
            via: 'NASAL',
            modo: 'continuo',
            freq: 2,
            dias: 14,
            orientacaoExtra: 'Aplicar 1 a 2 jatos em cada narina de 12/12h após assoar e higienizar o nariz.'
          },
          {
            farmacoId: 'dipirona',
            forma: 'cp',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'dor facial, cefaleia ou febre'
          }
        ]
      },
      {
        id: 'rs_bacteriana_amox',
        titulo: 'RSBA - Opção 1: Amoxicilina 1ª Linha + Sintomáticos',
        subtitulo: 'Para quadros > 10 dias ou dupla piora (bacteriana comprovada)',
        itens: [
          {
            farmacoId: 'amoxicilina',
            forma: 'cp',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 3,
            dias: 10
          },
          {
            farmacoId: 'soro_fisiologico_nasal',
            forma: 'sol_nasal',
            dose: 10,
            unidade: 'ml',
            via: 'NASAL',
            modo: 'sn',
            freq: 4,
            condicao: 'obstrução nasal'
          },
          {
            farmacoId: 'budesonida',
            forma: 'spray',
            dose: 50,
            unidade: 'mcg',
            via: 'NASAL',
            modo: 'continuo',
            freq: 2,
            dias: 14
          },
          {
            farmacoId: 'dipirona',
            forma: 'cp',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'dor facial, dor de cabeça ou febre'
          }
        ]
      },
      {
        id: 'rs_bacteriana_azitro',
        titulo: 'RSBA - Opção 2: Azitromicina (Alérgicos a Betalactâmicos)',
        subtitulo: 'Esquema macrolídeo alternativo para pacientes alérgicos',
        itens: [
          {
            farmacoId: 'azitromicina',
            forma: 'cp',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 1,
            dias: 7
          },
          {
            farmacoId: 'soro_fisiologico_nasal',
            forma: 'sol_nasal',
            dose: 10,
            unidade: 'ml',
            via: 'NASAL',
            modo: 'sn',
            freq: 4,
            condicao: 'congestão nasal'
          },
          {
            farmacoId: 'budesonida',
            forma: 'spray',
            dose: 50,
            unidade: 'mcg',
            via: 'NASAL',
            modo: 'continuo',
            freq: 2,
            dias: 14
          },
          {
            farmacoId: 'dipirona',
            forma: 'cp',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'dor facial ou febre'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'Edema ou hiperemia periorbitária / palpebral (suspeita de celulite orbitária pós-septal - emergência cirúrgica)',
        'Alterações visuais: diplopia, redução da acuidade visual ou oftalmoplegia',
        'Sinais meníngeos (rigidez de nuca, fotofobia, alteração de comportamento)',
        'Cefaleia frontal intensa refratária com prostração extrema (risco de abscesso cerebral ou empiema)'
      ],
      examesSolicitar: [
        'O diagnóstico da rinossinusite aguda não complicada é ESTRITAMENTE CLÍNICO (radiografia de seios da face NÃO é recomendada pela baixa especificidade)',
        'Tomografia Computadorizada (TC) de seios da face: indicada somente se suspeita de complicações orbitárias/intracranianas ou falha de múltiplos esquemas'
      ],
      orientacoesNaoFarmacologicas: [
        'Lavagem nasal com soro fisiológico em alto volume e baixa pressão (seringa de 10 a 20 mL) 4 a 6 vezes ao dia',
        'Ingestão hídrica abundante para fluidificar as secreções respiratórias',
        'Evitar descongestionantes tópicos vasoconstritores por mais de 3 a 5 dias (risco de rinite medicamentosa rebote)'
      ],
      classificacao: 'Viral (< 10 dias de sintomas) vs Pós-Viral vs Bacteriana Aguda (RSBA: sintomas > 10 dias sem melhora, febre alta > 39°C purulenta ou padrão de dupla piora)'
    }
  },
  {
    id: 'pac_pneumonia',
    titulo: 'Pneumonia Adquirida na Comunidade (PAC)',
    categoria: 'Sistema Respiratório',
    subcategoria: 'Infecção do Trato Respiratório Inferior',
    paginaPdf: 18,
    descricao: 'Estratificação de gravidade pelo escore CURB-65 e opções terapêuticas ambulatoriais e hospitalares.',
    opcoesPrescricao: [
      {
        id: 'pac_ambulatorial_amox',
        titulo: 'PAC Leve - Opção 1: Amoxicilina (1ª Escolha)',
        subtitulo: 'Paciente hígido sem uso prévio de antibióticos nos últimos 90 dias',
        itens: [
          {
            farmacoId: 'amoxicilina',
            forma: 'cp',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 3,
            dias: 7
          },
          {
            farmacoId: 'dipirona',
            forma: 'cp',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'febre ou dor torácica pleurítica'
          }
        ]
      },
      {
        id: 'pac_ambulatorial_azitro',
        titulo: 'PAC Leve - Opção 2: Azitromicina (Atípicos / Alergia)',
        subtitulo: 'Opção em alérgicos a penicilina ou suspeita de germes atípicos',
        itens: [
          {
            farmacoId: 'azitromicina',
            forma: 'cp',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 1,
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
            condicao: 'febre ou dor no corpo'
          }
        ]
      },
      {
        id: 'pac_ambulatorial_clavulin',
        titulo: 'PAC Leve - Opção 3: Amoxicilina + Clavulanato',
        subtitulo: 'Pacientes com comorbidades (DM, DPOC, cardiopatia) ou ATB prévio',
        itens: [
          {
            farmacoId: 'amoxicilina_clavulanato',
            forma: 'cp',
            dose: 875,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 2,
            dias: 7
          },
          {
            farmacoId: 'dipirona',
            forma: 'cp',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'febre ou dor pleurítica'
          }
        ]
      },
      {
        id: 'pac_ambulatorial_levo',
        titulo: 'PAC Leve - Opção 4: Levofloxacino (Quinolona Respiratória)',
        subtitulo: 'Para pacientes com risco elevado de resistência ou comorbidades graves',
        itens: [
          {
            farmacoId: 'levofloxacino',
            forma: 'cp',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 1,
            dias: 7
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
          }
        ]
      },
      {
        id: 'pac_hospitalar',
        titulo: 'PAC Moderada a Grave - Hospitalar (Ceftriaxona + Azitromicina)',
        subtitulo: 'Internação em enfermaria para pacientes CURB-65 >= 2',
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
            orientacaoExtra: 'Infundir 1g a 2g EV diluído em 100 mL de SF 0,9% em 30 a 60 minutos.'
          },
          {
            farmacoId: 'azitromicina',
            forma: 'cp',
            dose: 500,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 1,
            dias: 5
          },
          {
            farmacoId: 'dipirona',
            forma: 'amp',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            modo: 'sn',
            freq: 4,
            condicao: 'febre >= 37,8°C ou dor torácica'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'Escore CURB-65: C (Confusão mental: 1 pt); U (Ureia > 50 mg/dL: 1 pt); R (Respiração >= 30 irpm: 1 pt); B (Blood pressure: PAS < 90 ou PAD <= 60 mmHg: 1 pt); 65 (Idade >= 65 anos: 1 pt)',
        'CURB-65 0-1: Baixo risco de mortalidade -> Tratamento ambulatorial seguro',
        'CURB-65 2: Risco intermediário -> Considerar internação em enfermaria ou observação curta na UPA',
        'CURB-65 3-5: Alto risco de mortalidade -> Internação hospitalar obrigatória; se 4-5, avaliar UTI',
        'Critérios maiores de UTI: Choque séptico refratário ou necessidade de Ventilação Mecânica Invasiva (VMI)'
      ],
      examesSolicitar: [
        'Radiografia de tórax (PA e perfil) para confirmação de infiltrado/consolidação alveolar e avaliar derrame pleural',
        'Hemograma completo (leucocitose com desvio à esquerda ou leucopenia)',
        'Proteína C Reativa (PCR) para acompanhamento inflamatório',
        'Ureia e Creatinina (para cálculo do CURB-65 e ajuste de dose se insuficiência renal)',
        'Eletrólitos (Na, K) e Oximetria de pulso (SpO2)',
        'Hemoculturas (2 pares) nos pacientes que necessitarem de internação'
      ],
      orientacoesNaoFarmacologicas: [
        'Manter hidratação oral vigorosa (pelo menos 2 litros de líquidos ao dia)',
        'Repouso domiciliar e retorno imediato à UPA se piora da falta de ar, confusão ou febre persistente após 48-72h de ATB',
        'Vacinação contra Influenza e Pneumococo recomendada após a recuperação'
      ],
      classificacao: 'CURB-65 e Escore de Fine (PSI) para definição do local de tratamento (Domicílio vs Enfermaria vs UTI)'
    }
  },
  {
    id: 'rinite_alergica',
    titulo: 'Rinite Alérgica (Crise e Controle)',
    categoria: 'Sistema Respiratório',
    subcategoria: 'Alergias Respiratórias',
    paginaPdf: 17,
    descricao: 'Controle de sintomas de prurido nasal, coriza hialina, espirros em salva e obstrução.',
    opcoesPrescricao: [
      {
        id: 'rinite_opcao1',
        titulo: 'Opção 1 - Corticoide Tópico Nasal + Lavagem Salina',
        subtitulo: 'Primeira escolha para rinite alérgica persistente ou moderada',
        itens: [
          {
            farmacoId: 'budesonida',
            forma: 'spray',
            dose: 50,
            unidade: 'mcg',
            via: 'NASAL',
            modo: 'continuo',
            freq: 2,
            dias: 30,
            orientacaoExtra: 'Aplicar 1 a 2 jatos em cada narina de 12/12h após higienizar o nariz.'
          },
          {
            farmacoId: 'soro_fisiologico_nasal',
            forma: 'sol_nasal',
            dose: 10,
            unidade: 'ml',
            via: 'NASAL',
            modo: 'sn',
            freq: 4,
            condicao: 'obstrução ou prurido nasal'
          }
        ]
      },
      {
        id: 'rinite_opcao2',
        titulo: 'Opção 2 - Koid D (Betametasona + Dexclorfeniramina) para Crise Aguda',
        subtitulo: 'Ciclo curto para alívio rápido de exacerbação alérgica grave',
        itens: [
          {
            farmacoId: 'koid_d',
            forma: 'cp',
            dose: 2,
            unidade: 'mg',
            via: 'VO',
            modo: 'continuo',
            freq: 3,
            dias: 5,
            orientacaoExtra: 'Tomar 1 comprimido de 8 em 8 horas por no máximo 5 a 7 dias. Pode causar sonolência.'
          },
          {
            farmacoId: 'soro_fisiologico_nasal',
            forma: 'sol_nasal',
            dose: 10,
            unidade: 'ml',
            via: 'NASAL',
            modo: 'sn',
            freq: 4,
            condicao: 'obstrução e secreção nasal'
          }
        ]
      }
    ],
    observacoesClinicas: {
      orientacoesNaoFarmacologicas: [
        'Controle ambiental de alérgenos: encapar colchões e travesseiros com tecido impermeável',
        'Evitar tapetes, cortinas grossas, bichos de pelúcia e poeira domiciliar no quarto de dormir',
        'Higienizar o nariz com soro fisiológico morno antes das aplicações de sprays nasais'
      ],
      notas: [
        'Evitar o uso de anti-histamínicos de 1ª geração em idosos pelo risco de sedação, retenção urinária e quedas',
        'Corticosteroides intranasais são a terapia mais eficaz para obstrução nasal e sintomas oculares associados'
      ]
    }
  },
  {
    id: 'tosse_seca_resfriado',
    titulo: 'Tosse Seca e Resfriado Comum / Gripe',
    categoria: 'Sistema Respiratório',
    subcategoria: 'Sintomáticos Respiratórios',
    paginaPdf: 16,
    descricao: 'Alívio sintomático de tosse seca irritativa, mialgia, febre e congestão nasal.',
    opcoesPrescricao: [
      {
        id: 'tosse_codeina_lavagem',
        titulo: 'Opção 1 - Antitussígeno (Codeína) + Lavagem Nasal + Dipirona',
        subtitulo: 'Para tosse seca exaustiva que impede o repouso noturno',
        itens: [
          {
            farmacoId: 'codeina',
            forma: 'cp',
            dose: 30,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 3,
            condicao: 'tosse seca intensa (resgate)',
            orientacaoExtra: 'Tomar 1 comprimido de 30 mg se tosse incômoda, com intervalo mínimo de 8 horas.'
          },
          {
            farmacoId: 'dipirona',
            forma: 'cp',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'dor de garganta, cefaleia ou febre'
          },
          {
            farmacoId: 'soro_fisiologico_nasal',
            forma: 'sol_nasal',
            dose: 10,
            unidade: 'ml',
            via: 'NASAL',
            modo: 'sn',
            freq: 4,
            condicao: 'congestão nasal e coriza'
          }
        ]
      },
      {
        id: 'tosse_sintomaticos_simples',
        titulo: 'Opção 2 - Hidratação Salina Nasal + Analgésico / Antitérmico',
        subtitulo: 'Conduta expectante para resfriado comum autolimitado',
        itens: [
          {
            farmacoId: 'soro_fisiologico_nasal',
            forma: 'sol_nasal',
            dose: 10,
            unidade: 'ml',
            via: 'NASAL',
            modo: 'sn',
            freq: 4,
            condicao: 'obstrução e secreção nasal'
          },
          {
            farmacoId: 'dipirona',
            forma: 'cp',
            dose: 1000,
            unidade: 'mg',
            via: 'VO',
            modo: 'sn',
            freq: 4,
            condicao: 'febre ou dores no corpo'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'Sinais de alerta: dispneia, taquipneia > 24 irpm, dor pleurítica intensa, hemoptise ou febre persistente > 3 dias',
        'Presença de estertores crepitantes à ausculta pulmonar (suspeitar de pneumonia e solicitar RX de tórax)'
      ],
      orientacoesNaoFarmacologicas: [
        'Ingestão hídrica abundante (água, chás mornos com mel, sucos naturais) para hidratar as vias aéreas',
        'Umidificação do ambiente e lavagem nasal frequente com soro fisiológico',
        'Repouso e evitar exposição ao frio, fumaça de cigarro e poluentes'
      ]
    }
  },
  {
    id: 'pneumonia_hospitalar',
    titulo: 'Pneumonia Hospitalar (PAV / Nosocomial)',
    categoria: 'Sistema Respiratório',
    subcategoria: 'Infecção Hospitalar',
    paginaPdf: 20,
    descricao: 'Sintomas iniciados após 48-72h de internação: cobertura empírica para Pseudomonas aeruginosa e bacilos gram-negativos multirresistentes.',
    opcoesPrescricao: [
      {
        id: 'pave_cefepime',
        titulo: 'Opção 1 - Cefepime EV (Betalactâmico Antipseudomonas)',
        subtitulo: 'Cefalosporina de 4ª geração antipseudomonas de primeira linha',
        itens: [
          {
            farmacoId: 'cefepime',
            forma: 'fap',
            dose: 2000,
            unidade: 'mg',
            via: 'EV',
            modo: 'continuo',
            freq: 3,
            dias: 7,
            orientacaoExtra: 'Infundir 2g EV diluído em 100 mL de SF 0,9% em 30 a 60 minutos (ou infusão estendida de 3h) de 8/8h.'
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
        id: 'pave_piperacilina_tazo',
        titulo: 'Opção 2 - Piperacilina + Tazobactam EV (Tazocin)',
        subtitulo: 'Cobertura ampliada para gram-negativos entéricos, Pseudomonas e anaeróbios',
        itens: [
          {
            farmacoId: 'piperacilina_tazobactam',
            forma: 'fap',
            dose: 4500,
            unidade: 'mg',
            via: 'EV',
            modo: 'continuo',
            freq: 4,
            dias: 7,
            orientacaoExtra: 'Infundir 4,5 g EV diluído em 100 mL de SF 0,9% em infusão estendida de 3 a 4 horas a cada 6 horas.'
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
        id: 'pave_associacao_mrsa_vanco',
        titulo: 'Opção 3 - Cefepime + Vancomicina (Cobertura de MRSA)',
        subtitulo: 'Indicado se prevalência local de MRSA > 20% ou fatores de risco para estafilococo resistente',
        itens: [
          {
            farmacoId: 'cefepime',
            forma: 'fap',
            dose: 2000,
            unidade: 'mg',
            via: 'EV',
            modo: 'continuo',
            freq: 3,
            dias: 7
          },
          {
            farmacoId: 'vancomicina',
            forma: 'fap',
            dose: 1000,
            unidade: 'mg',
            via: 'EV',
            modo: 'continuo',
            freq: 2,
            dias: 7,
            orientacaoExtra: 'Infundir EV diluído em 250 mL de SF 0,9% em no mínimo 60 a 90 minutos de 12/12h.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'Critérios diagnósticos: Infiltrado radiológico novo ou progressivo no RX/TC + pelo menos 2: Febre (> 38°C) ou hipotermia; Leucocitose (> 12.000) ou leucopenia (< 4.000); Secreção traqueal purulenta; Piora da oxigenação (queda de PaO2/FiO2)',
        'Escore CPIS (Clinical Pulmonary Infection Score) > 6 sugere pneumonia nosocomial',
        'Choque séptico associado ou necessidade de fração inspirada de oxigênio (FiO2) elevada'
      ],
      examesSolicitar: [
        'Aspirado traqueal quantitativo ou lavado broncoalveolar com bacterioscopia (Gram) e cultura com antibiograma',
        'Dois pares de hemoculturas periféricas antes de iniciar o novo esquema de ATB',
        'Gasometria arterial, Hemograma, PCR, Ureia e Creatinina'
      ]
    }
  },
  {
    id: 'iot_sequencia_rapida',
    titulo: 'Intubação Orotraqueal em Sequência Rápida (ISR / IOT)',
    categoria: 'Sistema Respiratório',
    subcategoria: 'Via Aérea Avançada na Emergência',
    paginaPdf: 22,
    descricao: 'Protocolo dos 7 Ps para manejo de via aérea de urgência e sequência rápida de intubação (pág. 22-25)',
    opcoesPrescricao: [
      {
        id: 'iot_etomidato_succinilcolina',
        titulo: 'Opção 1: Padrão Ouro (Fentanil + Etomidato + Succinilcolina)',
        subtitulo: 'Máxima estabilidade hemodinâmica (ideal em choque, sepse, trauma e cardiopatas).',
        itens: [
          {
            farmacoId: 'fentanil',
            dose: 0.1,
            unidade: 'mg',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Pré-tratamento (3 min antes da indução): Administrar 100 mcg (0,1 mg = 2 mL) EV lento em 1 a 2 minutos para atenuar o reflexo adrenérgico da laringoscopia.'
          },
          {
            farmacoId: 'etomidato',
            dose: 20,
            unidade: 'mg',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Indutor hipnótico: Administrar 20 mg (1 ampola de 10 mL = 0,3 mg/kg) EV direto em 30 a 60 segundos.'
          },
          {
            farmacoId: 'succinilcolina',
            dose: 100,
            unidade: 'mg',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Bloqueador neuromuscular: Administrar 100 mg (1 frasco-ampola = 1,0 a 1,5 mg/kg) EV em bolus imediatamente após o etomidato. Aguardar 45 a 60 segundos antes de laringoscopar.'
          }
        ]
      },
      {
        id: 'iot_etomidato_rocuronio',
        titulo: 'Opção 2: Alternativa sem Succinilcolina (Fentanil + Etomidato + Rocurônio)',
        subtitulo: 'Indicado se suspeita de hipercalemia, queimaduras > 48h, trauma por esmagamento ou hipertermia maligna.',
        itens: [
          {
            farmacoId: 'fentanil',
            dose: 0.1,
            unidade: 'mg',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Pré-tratamento: 100 mcg (2 mL) EV lento.'
          },
          {
            farmacoId: 'etomidato',
            dose: 20,
            unidade: 'mg',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Indução: 20 mg (10 mL) EV em bolus lento.'
          },
          {
            farmacoId: 'rocuronio',
            dose: 70,
            unidade: 'mg',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Paralisante não despolarizante: 70 mg (1,0 a 1,2 mg/kg = 7 mL) EV em bolus imediato. Aguardar 60 segundos.'
          }
        ]
      },
      {
        id: 'iot_midazolam_succinilcolina',
        titulo: 'Opção 3: Indução com Benzodiazepínico (Fentanil + Midazolam + Succinilcolina)',
        subtitulo: 'Quando não houver disponibilidade de Etomidato ou em paciente hiperadrenérgico normotenso.',
        itens: [
          {
            farmacoId: 'fentanil',
            dose: 0.1,
            unidade: 'mg',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Pré-tratamento: 100 mcg (2 mL) EV lento.'
          },
          {
            farmacoId: 'midazolam',
            dose: 15,
            unidade: 'mg',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Indutor: 15 mg (0,2 a 0,3 mg/kg = 3 mL da ampola 5 mg/mL) EV lento em 30 segundos.'
          },
          {
            farmacoId: 'succinilcolina',
            dose: 100,
            unidade: 'mg',
            via: 'EV',
            tipoUso: 'agora',
            intervalo: 24,
            dias: 1,
            observacaoUso: 'Bloqueador neuromuscular: 100 mg EV bolus.'
          }
        ]
      }
    ],
    observacoesClinicas: {
      criteriosGravidade: [
        'INDICAÇÕES FORMAIS DE IOT IMEDIATA: Incapacidade de falar, respiração paradoxal com exaustão da musculatura acessória, rebaixamento do nível de consciência (Glasgow ≤ 8), perda de reflexos de proteção de via aérea (deglutição/tosse), hipoxemia refratária (PaO2 < 60 com O2 em máscara reservatória) ou hipercapnia progressiva (PaCO2 > 50 com acidose pH < 7,20).',
        'PREDITORES DE VIA AÉREA DIFÍCIL (Mnemônico LEMON): Look externally (trauma, queixo retraído, barba volumosa); Evaluate 3-3-2 (abertura bucal < 3 dedos, distância tireomentoniana < 3 dedos, distância hiotireóidea < 2 dedos); Mallampati (classes III ou IV); Obstruction (estridor, corpo estranho, abscesso periamigdaliano); Neck mobility (colar cervical rígido, espondilite).'
      ],
      orientacoesNaoFarmacologicas: [
        'PASSO 1 - PREPARAÇÃO: Monitorização multiparamétrica contínua (ECG, oximetria, PNI, capnografia), 2 acessos venosos periféricos calibrosos, aspirador rígido (Yankauer) testado e ligado, laringoscópio testado com lâminas curva (Macintosh 3 e 4) e reta (Miller), tubos orotraqueais 7,5 e 8,0 com balonetes testados e fio-guia lubrificado, coxim suboccipital, material de via aérea cirúrgica (cricotireoidostomia de resgate).',
        'PASSO 2 - PRÉ-OXIGENAÇÃO: O2 a 100% por 3 a 5 minutos sob máscara com reservatório sem ventilar com pressão positiva (evita distensão gástrica e regurgitação).',
        'PASSO 5 - POSICIONAMENTO: Posição de olfateamento ("sniffing position") com coxim sob o occipital e hiperextensão cervical suave (PROIBIDA a extensão cervical em suspeita de trauma raquimedular - manter alinhamento neutro com tração manual em linha).',
        'PASSO 6 - PASSAGEM DO TUBO E CONFIRMAÇÃO: Laringoscopia direta sob visão das cordas vocais, inserção do TOT até marca de 21-23 cm na rima labial, insuflação do balonete, ausculta em 5 pontos (epigástrio primeiro, depois bases e ápices pulmonares bilateralmente) e confirmação ouro por capnografia contínua em onda.'
      ]
    }
  }
];
