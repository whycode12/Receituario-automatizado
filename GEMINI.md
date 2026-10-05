# Diretrizes e Memória Fixa do Projeto: Receituário Automatizado

## 1. Alertas Clínicos e Padronização de Cores

### Cor Vermelha (`alert red` / `calcResult.alerts`):
- **Finalidade:** Indicar estritamente que a **DOSE ou FREQUÊNCIA está fora do adequado**, ou que há uma contraindicação direta violada pelos dados do paciente cadastrado.
- **Quando usar vermelho:**
  1. Dose por tomada abaixo do mínimo recomendado (`mg < lo`).
  2. Dose por tomada acima do máximo recomendado (`mg > hi`).
  3. Dose diária acumulada ultrapassa o teto máximo permitido (`dia > dailyMax`).
  4. Frequência de tomadas fora da faixa recomendada pela fonte (`n < dmin` ou `n > dmax`), exceto quando em dose imediata (`modo === 'agora'`).
  5. Concentração final EV ultrapassa o limite máximo seguro (`conc > concMax`).
  6. Contraindicações reais com condição objetiva atendida pelo paciente atual (`c.se`, ex: idade menor que a permitida para o medicamento, peso insuficiente).

### Cor Âmbar / Amarelo (`alert amber` / `calcResult.notes`):
- **Finalidade:** Avisos clínicos gerais, precauções, conflitos de fontes e **alertas fixos**.
- **O que são alertas fixos:** Alertas que não dependem da dose e nem dos dados objetivos do paciente atual (sem bloco `se`), tais como:
  - Alergias e hipersensibilidade (ex: "Contraindicado em pacientes com infecções fúngicas sistêmicas ou hipersensibilidade à prednisona").
  - Interações medicamentosas hipotéticas (ex: "Uso concomitante com apomorfina/levodopa").
  - Cautelas em disfunção hepática, renal ou gestação que dependem de avaliação clínica.
  - Orientações de administração (ex: "Administrar preferencialmente pela manhã após o desjejum").
- **Regra absoluta:** Alertas fixos **NUNCA** devem aparecer em vermelho. Eles são sempre direcionados para `notes` (âmbar).

---

## 2. Banner de Atenção na Prescrição

- O aviso `⚠ Atenção: há itens fora do recomendado (ver alertas).` no painel de prescrição **SÓ DEVE APARECER quando a dose ou frequência estiver de fato fora do recomendado** (ou seja, quando houver erros reais em `calcResult.alerts`).
- Alertas fixos / notas em âmbar **NÃO** disparam esse aviso e **NÃO** impedem a exibição da mensagem verde de `✓ Dentro do recomendado`.

---

## 3. Apresentações em Frasco-Ampola (`fap`) e Injetáveis

- Sempre que um frasco-ampola possuir volume especificado (`volml` ou volume de reconstituição `reconstMl`):
  1. **Seletor de apresentações:** Exibir o sufixo com o volume (ex: `(2 mL)`), caso o nome já não o contenha.
  2. **Cálculo da dose inteira:** No resumo do arredondamento, exibir a quantidade e o volume correspondente (ex: `1 frasco-ampola (2 mL)`).
  3. **Prescrições e Receitas:**
     - No identificador do fármaco (`nomeInt`), incluir a concentração e volume (ex: `Ceftriaxona sódica (500mg / 2 mL)`).
     - Na via **IM**, disponibilizar os cards de **Receita Médica** e **Prescrição Interna** trazendo a especificação do volume em mL.
  4. **Pós liofilizados:** Cadastrar sempre `reconstMl` e `reconstDil`.
  5. **Via EV:** Preencher o bloco `ev` com `concMax`, `diluentes`, `volOpcoes` e faixa de `tempo` diferenciada para adultos e pediatria.

---

## 4. Hierarquia Oficial de Fontes Clínicas (Pasta `Fontes/`)

Sempre consultar em ordem de prioridade:
1. **Fontes Primárias Locais na pasta `Fontes/`**:
   - **Guia Farmacêutico Hospital Sírio-Libanês (`Fontes/HSL/`)**: posologias adultas e pediátricas, apresentações, doses máximas, contraindicações e ajustes renais/hepáticos. Sigla: `'HSL'`.
   - **Manuais de Diluição Einstein (`Einstein ADULTOS.html` e `Einstein PEDIATRICO.html`)**: diluição, compatibilidade, concentrações e tempos de infusão EV. Siglas: `'EINA'` e `'EINP'`.
   - **Guia de Prescrição PSZerado 2ª Edição 2025 (`Fontes/Guia de Prescricao PSZerado 2 Ed 2025.pdf`)**: condutas de pronto-socorro, urgência/emergência médica, doses práticas e esquemas de ataque/manutenção. Sigla: `'PSZERADO'`.
2. **Sociedades Especialistas e Ministério da Saúde**: SBP, MS, PCDTs.
3. **Mercado Farmacêutico e SUS**: RENAME, Farmácia Popular, Bulário Eletrônico da ANVISA (`'BULA'`).

---

## 5. Regras de Dose, Horários e Liberdade Prescritiva

- **Sugestão Inicial (`padrao`):**
  - O valor `padrao` deve ser a dose mais habitual e estar estritamente dentro da faixa `[min, max]`.
- **Faixa de Frequência Recomendada (`dosesDia: [min, max]`):**
  - Baliza a posologia recomendada pelas fontes (ex: de 8/8h = `[3, 3]`; sintomáticos de 6/6h a 8/8h = `[3, 4]`).
- **Liberdade Clínica (Sinalização Sem Bloqueio):**
  - O sistema **NUNCA impede** o médico de prescrever em outro horário ou frequência que ele julgar clinicamente necessário.
  - Se o médico escolher um horário fora de `[min, max]`, o sistema permite a prescrição normalmente, apenas sinalizando o alerta de que a frequência difere da literatura de referência.
- **Intervalo Inicial Padronizado (`intervaloFixo` ou `dosesPadrao`):**
  - Define qual frequência abre pré-selecionada na tela (ex: `intervaloFixo: 8` para 8/8h ou `intervaloFixo: 6` para 6/6h).

---

## 6. Instruções Detalhadas de Aplicação (`instrucao`)

- **Pomadas, Cremes, Géis, Soluções Tópicas e Curativos:**
  - Devem conter obrigatoriamente o campo `instrucao` detalhando o modo de preparo e aplicação na receita médica.
  - Exemplos:
    - *"Higienizar a área lesionada com soro fisiológico 0,9% e secar suavemente antes da aplicação. Aplicar uma camada fina sobre a lesão e cobrir com gaze estéril."*
    - *"Aplicar sobre a área afetada massageando suavemente até completa absorção. Lavar as mãos após o uso."*
- **Colírios, Sprays Nasais e Inalatórios:**
  - Instruções de preparo, posições ou higiene (ex: *"Assoar o nariz antes da aplicação; manter a cabeça ereta e aplicar em cada narina"*).
- Esse texto é impresso automaticamente logo abaixo da posologia na receita do paciente.

---

## 7. Padrões de Cadastro para Evitar Retrabalho

- **Líquidos e Gotas:**
  - `frascoMl` obrigatório em todo xarope, suspensão ou solução líquida para cálculo automático de frascos na receita contínua.
  - `gotasml: 20` obrigatório em apresentações em gotas.
- **Sintoma do "Se Necessário" (`snPadrao`):**
  - Personalizar para a classe do medicamento (ex: `'dor ou febre'`, `'náuseas ou vômitos'`, `'cólica abdominal'`, `'crise alérgica'`).
- **Busca (`busca`):**
  - Incluir os principais nomes comerciais no Brasil, termos sinônimos e grafias populares para facilitar a busca rápida.

---

## 8. Dose Prática Habitual no Brasil (`dosePratica` - Opcional)

- **Objetivo:** Oferecer um guia rápido e prático ao médico prescritor com a conduta mais consagrada na rotina clínica brasileira de pronto atendimento e UBS.
- **Quando preencher:**
  - Apenas quando existir um consenso prático evidente no dia a dia do Brasil (ex.: *"Benzetacil 1.200.000 UI IM dose única para faringoamigdalite estreptocócica"*; *"Dipirona 500mg a 1g até 4x/dia se dor/febre"*; *"Azitromicina 500mg 1x/dia por 3 a 5 dias"*).
- **Regra de Ouro (Nunca Inventar):**
  - Caso o fármaco tenha posologia altamente variável conforme patologia grave, titulação individualizada, ou esquemas múltiplos sem um único consenso absoluto, **NÃO INVENTAR**. Deixar o campo omitido (`undefined`).
- **Comportamento no Sistema:**
  - Exibido como callout visual informativo amigável no topo do painel e detalhado na seção de fontes, sem interferir nem limitar a flexibilidade do médico na prescrição.

