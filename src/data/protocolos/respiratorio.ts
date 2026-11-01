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
            farmacoId: 'soro_fisiologico',
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
            farmacoId: 'soro_fisiologico',
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
            farmacoId: 'soro_fisiologico',
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
            farmacoId: 'soro_fisiologico',
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
            farmacoId: 'soro_fisiologico',
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
  }
];
