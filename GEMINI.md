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

## 3. Apresentações em Frasco-Ampola (`fap`)

- Sempre que um frasco-ampola possuir volume especificado (`volml` ou volume de reconstituição `reconstMl`):
  1. **Seletor de apresentações:** Exibir o sufixo com o volume (ex: `(2 mL)`), caso o nome já não o contenha.
  2. **Cálculo da dose inteira:** No resumo do arredondamento, exibir a quantidade e o volume correspondente (ex: `1 frasco-ampola (2 mL)`).
  3. **Prescrições e Receitas:**
     - No identificador do fármaco (`nomeInt`), incluir a concentração e volume (ex: `Ceftriaxona sódica (500mg / 2 mL)`).
     - Na via **IM**, disponibilizar os cards de **Receita Médica** e **Prescrição Interna** trazendo a especificação do volume em mL.
