# 📋 Diretrizes Oficiais para Cadastro de Novos Fármacos

Este documento estabelece o protocolo obrigatório e padronizado para o cadastro de novos medicamentos no sistema **Receituário Automatizado**. Qualquer novo fármaco deve seguir estritamente estas regras de fontes, dados clínicos e implementação técnica.

---

## 1. Hierarquia de Fontes (Ordem Estrita de Prioridade)

1. **Prioridade 1 — Arquivos Locais na Pasta `Fontes/`**:
   - É a **fonte primária e soberana**. Sempre consultar primeiro os arquivos salvos pelo usuário em `Fontes/`:
     - **Guia Farmacêutico Hospital Sírio-Libanês (`HSL - [Medicamento].html`)**: posologias adultas e pediátricas, indicações, apresentações, doses máximas, contraindicações, cuidados e ajustes renais/hepáticos.
     - **Manuais Einstein (`Einstein ADULTOS.html` e `Einstein PEDIATRICO.html`)**: diluição, compatibilidade, concentrações e tempos de infusão EV.
2. **Prioridade 2 — Sociedades Especialistas e Ministério da Saúde**:
   - Manuais e diretrizes clínicas oficiais:
     - **SBP**: Sociedade Brasileira de Pediatria (ex: higiene nasal, cuidados neonatais/pediátricos).
     - **MS**: Manuais do Ministério da Saúde e PCDTs (ex: Manual de Terapia de Reidratação Oral - TRO).
3. **Prioridade 3 — Mercado Brasileiro e SUS**:
   - **RENAME vigente (Ministério da Saúde)**: verificar no Componente Básico e Especializado se cada apresentação consta no elenco público.
   - **Farmácia Popular do Brasil**: conferir se a apresentação tem gratuidade ou copagamento no programa.
   - **Bulário Eletrônico da ANVISA (`BULA`)**: verificar as apresentações comerciais que realmente circulam nas farmácias do Brasil (dosagens usuais, tipos de frascos, concentrações em gotas/suspensão). Se alguma informação clínica for obtida exclusivamente de bula (fora de HSL/Einstein), sinalizar com a fonte `'BULA'` (o sistema gera aviso para conferência).

---

## 2. Mapeamento de Apresentações Práticas (Brasil & SUS)

Ao preencher o array `apresentacoes`:
- **Realidade Clínica Nacional**: cadastrar as apresentações usuais encontradas em drogarias e postos de saúde no Brasil (evitar dosagens importadas ou descontinuadas).
- **Campos Obrigatórios**:
  - `id`: identificador curto único (ex: `'cp400'`, `'gts100'`, `'susp20'`).
  - `forma`: tipo farmacêutico (`'cp'`, `'cap'`, `'gotas'`, `'sol'`, `'amp'`, `'fap'`, `'sup'`, `'sachet'`, `'sol_nasal'`, etc.).
  - `nome`: nome descritivo completo (ex: `'Comprimido 400 mg'`, `'Gotas 100 mg/mL (20 gotas/mL)'`).
  - `comercial`: nome comercial de referência mais conhecido no Brasil (ex: `'Alivium'`, `'Novalgina'`, `'Advil'`).
  - `conc`: texto conciso da concentração (ex: `'400mg'`, `'100mg/mL'`).
  - `rotulo`: nome padronizado para a receita impressa ao paciente.
  - `mg`: miligramas unitários por comprimido/cápsula/supositório (se aplicável).
  - `mgml`: miligramas por mL para líquidos/gotas/suspensões (se aplicável).
  - `gotasml`: número de gotas por mL (geralmente 20 gotas/mL, exceto gotejadores especiais de 10 gotas/mL).
  - `frascoMl`: volume comercial comum do frasco (ex: 20, 60, 100, 150, 200 mL). Fundamental para cálculo automático de frascos a dispensar no uso contínuo.
  - `frac`: fracionamento permitido (`0.5` ou `1`). Só permitir `0.5` se o comprimido possuir sulco confirmado nas fontes.
  - `vias`: array das vias aplicáveis (`['VO']`, `['EV', 'IM']`, `['VR']`, `['NASAL']`).
  - `disp`: texto padrão ou função de dispensação (ex: `'1 caixa'`, `'1 frasco'`).
  - `acesso`: selos do SUS `{ rename: boolean, fp: boolean }`.
- **Nota SUS (`acessoFonte`)**:
  - Explicar em texto claro a situação do medicamento na RENAME e Farmácia Popular.

---

## 3. Rastreabilidade Médica Absoluta (Trechos Literais)

Para a segurança do médico prescritor e transparência das regras:
- **Toda regra deve ter dono**: nenhum valor de dose, teto diário ou contraindicação pode existir sem citação literal da fonte.
- **Campos obrigatórios em cada item**:
  - `fonte`: sigla da fonte consultada (`'HSL'`, `'EINP'`, `'EINA'`, `'MS'`, `'SBP'`, `'BULA'`).
  - `trecho`: texto literal retirado da fonte entre aspas (ex: `trecho: 'Dose habitual: 20 a 30 mg/kg/dia dividida em 3 a 4 tomadas.'`).
- **Seção "Fontes e detalhes" integral (`notas`)**:
  - Preencher obrigatoriamente sem resumir:
    - `notas.indicacao`: indicações clínicas aprovadas e usuais.
    - `notas.administracao`: instruções de tomada (jejum, com alimentos, mastigar, engolir inteiro, etc.).
    - `notas.cuidados`: advertências de segurança, reações adversas e monitoramento.
    - `notas.ajuste`: recomendações completas para insuficiência renal e insuficiência hepática.

---

## 4. Diluição e Administração EV — ⚠️ CUIDADO CRÍTICO (Adulto vs. Pediatria)

> ### ⚠️ ALERTA DE SEGURANÇA MÁXIMA: NUNCA CONFUNDIR OS MANUAIS ADULTO E PEDIÁTRICO
> A administração intravenosa em pediatria é completamente diferente de adultos:
> - **Adultos**: usa `Einstein ADULTOS.html` (`EINA`). Suporta volumes maiores, infusões em bolsas de 100 mL ou 250 mL e velocidades padronizadas de adultos.
> - **Pediatria**: usa `Einstein PEDIATRICO.html` (`EINP`). Volumes devem ser restritos (risco crítico de sobrecarga hídrica), requer frequentemente seringa (bolus lento manual) ou microgotas/bomba de infusão, concentração máxima menor e tempo de infusão específico para a faixa etária/peso.
> - **Regra**: Nunca transportar parâmetros de adulto para pediatria ou vice-versa. Se o fármaco não tiver padronização EV para pediatria na fonte, **não habilitar a via EV pediátrica**.

**Ao preencher o bloco `ev`**:
- `diluentes`: lista de diluentes compatíveis (ex: `['SF 0,9%', 'SG 5%']`).
- `concMax`: concentração máxima em mg/mL.
- `concUsualPed`: concentração usual recomendada para pediatria (quando especificada).
- `volOpcoes`: volumes permitidos (ex: `[10, 20, 50, 100, 250]`). Volumes $\le 20\text{ mL}$ são administrados em seringa (bolus lento manual); acima são administrados em bolsa.
- `tempo`: faixa de tempo de infusão `{ min, padrao, max }` em minutos.
- `fonteTxt`: orientação literal completa extraída da tabela do Einstein.

---

## 5. Estrutura Técnica do Código

1. **Local do Arquivo**:
   - Salvar exclusivamente em `src/data/drugs/[id-farmaco].ts` (ex: `src/data/drugs/ibuprofeno.ts`).
2. **Exportação Padrão**:
   - O arquivo deve importar a tipagem e exportar a constante como `default`:
   ```ts
   import { Farmaco } from '../../types';

   export const meuFarmaco: Farmaco = { ... };
   export default meuFarmaco;
   ```
3. **Autodescoberta**:
   - Não precisa registrar o arquivo manualmente no `index.ts`. O Vite localiza todos os arquivos da pasta dinamicamente.
4. **Validação Obrigatória de Build**:
   - Sempre rodar no terminal após cadastrar:
   ```bash
   npm run build
   ```
   - O build deve compilar com código 0 (sem erros de TypeScript nem falhas de lint).
