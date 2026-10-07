/**
 * MEDICAMENTO: Sinvastatina
 * CLASSE: Hipolipemiante / Inibidor da HMG-CoA Redutase (Estatina)
 * FONTES:
 *   - HSL: Guia Farmacêutico Hospital Sírio-Libanês (Sinvastatina - Zocor 10mg / Sinvascor 20mg)
 *   - SBC: Atualização da Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose
 *   - Ministério da Saúde / RENAME / Farmácia Popular: Medicamento 100% gratuito de 1ª linha
 *   - Bulário ANVISA: Zocor / Sinvascor / Genérico
 */

import { Farmaco } from '../../types';

export const sinvastatina: Farmaco = {
  id: 'sinvastatina',
  nome: 'Sinvastatina',
  categoria: 'Cardiovascular e Dislipidemias',
  busca: 'sinvastatina zocor sinvascor estatina colesterol colesterol alto ldl aterosclerose infarto prevencao cardiovascular dislipidemia',
  classe: 'Inibidor Competitivo da HMG-CoA Redutase (Estatina)',
  dosePratica: '1. Hipercolesterolemia e Prevenção Primária (SBC / HSL): 10 mg a 20 mg VO 1 vez ao dia à noite (ao deitar). 2. Alto Risco Cardiovascular / Prevenção Secundária (Pós-IAM, DAC estável, AVC isquêmico): 20 mg a 40 mg VO 1 vez ao dia à noite. A dose de 80 mg/dia não é recomendada por aumentar expressivamente o risco de miopatia e rabdomiólise.',
  fontes: { HSL: '14/02/2017', MS: '2023', BULA: '04/10/2026' },
  snPadrao: 'tomada noturna contínua para redução do colesterol LDL e proteção vascular',
  acessoFonte: 'RENAME / Programa Farmácia Popular do Brasil: Comprimidos de 10 mg, 20 mg e 40 mg distribuídos gratuitamente em farmácias conveniadas e UBS.',
  apresentacoes: [
    {
      id: 'cp_10mg',
      forma: 'cp',
      nome: 'Comprimido 10 mg',
      comercial: 'Zocor / Genérico',
      conc: '10 mg',
      rotulo: 'Sinvastatina 10 mg comprimido',
      mg: 10,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 a 2 caixas (30 comprimidos)',
      acesso: { rename: true, fp: true },
      instrucao: 'Como tomar a sinvastatina para o colesterol:\n1. TOME SEMPRE À NOITE: Tome 1 comprimido à noite ao se deitar para dormir, com um pouco de água. O fígado produz a maior parte do colesterol durante o sono da madrugada; por isso o remédio é muito mais eficaz quando tomado à noite.\n2. ATENÇÃO A DORES MUSCULARES: Se você começar a sentir dores fortes nos músculos, fraqueza nas pernas ou se sua urina ficar muito escura (cor de refrigerante de cola ou chá escuro), suspenda o remédio imediatamente e procure o posto de saúde para fazer um exame de sangue dos músculos (CPK).\n3. EXAMES DE SANGUE DE ROTINA: Mantenha em dia os exames periódicos de colesterol e de fígado (TGO/TGP) solicitados pelo médico.\n4. DIETA E HÁBITOS: O remédio não substitui os cuidados com a saúde! Mantenha uma alimentação equilibrada, diminua o consumo de frituras, embutidos e gordura animal, e pratique atividades físicas regularmente.',
      obs: 'RENAME / Farmácia Popular. Dose inicial para dislipidemia leve a moderada ou em pacientes com insuficiência renal avançada.'
    },
    {
      id: 'cp_20mg',
      forma: 'cp',
      nome: 'Comprimido 20 mg',
      comercial: 'Sinvascor / Zocor / Genérico',
      conc: '20 mg',
      rotulo: 'Sinvastatina 20 mg comprimido',
      mg: 20,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 a 2 caixas (30 comprimidos)',
      acesso: { rename: true, fp: true },
      instrucao: 'Como tomar a sinvastatina para o colesterol:\n1. TOME SEMPRE À NOITE: Tome 1 comprimido à noite ao se deitar para dormir, com água.\n2. CUIDADO COM DORES MUSCULARES: Avise a equipe de saúde caso sinta dor muscular inexplicada, câimbras intensas ou fraqueza muscular.\n3. ATENÇÃO SE USAR ANLODIPINO: Se você também toma remédio de pressão chamado Anlodipino, a dose máxima permitida de sinvastatina é exatamente esta (20 mg/dia) para proteger seus músculos.\n4. ALIMENTAÇÃO: Reduza gorduras saturadas e mantenha caminhadas regulares.',
      obs: 'RENAME / Farmácia Popular. Apresentação padrão de uso contínuo mais prescrita no SUS.'
    },
    {
      id: 'cp_40mg',
      forma: 'cp',
      nome: 'Comprimido 40 mg',
      comercial: 'Sinvascor / Zocor / Genérico',
      conc: '40 mg',
      rotulo: 'Sinvastatina 40 mg comprimido',
      mg: 40,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 a 2 caixas (30 comprimidos)',
      acesso: { rename: true, fp: true },
      instrucao: 'Como tomar a sinvastatina para o colesterol:\n1. TOME SEMPRE À NOITE: Tome 1 comprimido à noite antes de dormir, com um copo de água.\n2. ALERTA MUSCULAR: Dores musculares generalizadas ou cansaço muscular intenso devem ser comunicados ao médico de imediato.\n3. NÃO INTERROMPA SEM ORIENTAÇÃO: A interrupção faz os níveis de colesterol voltarem a subir, retirando a proteção das artérias do coração e do cérebro.',
      obs: 'RENAME / Farmácia Popular. Dose teto habitual em monoterapia para alto risco cardiovascular.'
    }
  ],
  regras: [
    // 1. Adultos - Hipercolesterolemia e Doença Aterosclerótica (10 mg a 40 mg/dia)
    {
      pub: 'adulto',
      vias: ['VO'],
      apres: ['cp_10mg', 'cp_20mg', 'cp_40mg'],
      tipo: 'mg',
      min: 10,
      max: 40,
      padrao: 20,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 180,
      fonte: 'HSL / SBC / BULA',
      trecho: 'HSL: Doenças coronarianas: 40 mg/dia dose única à noite. Hipercolesterolemia: 10 a 20 mg/dia à noite. Dose máxima recomendada na prática clínica atual: 40 mg/dia.'
    },
    // 2. Pediatria 10 a 17 anos (HSL / SBC)
    {
      pub: 'ped',
      se: { idadeMinMeses: 120 }, // ≥ 10 anos
      vias: ['VO'],
      apres: ['cp_10mg', 'cp_20mg'],
      tipo: 'mg',
      min: 10,
      max: 40,
      padrao: 10,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 180,
      fonte: 'HSL / SBC',
      trecho: 'HSL: Pediatria (10 a 17 anos): 10 mg/dia em dose única à noite. Dose máxima: 40 mg/dia.'
    }
  ],
  contra: [
    {
      vias: ['VO'],
      msg: 'Contraindicado em pacientes com doença hepática ativa ou elevações persistentes e inexplicadas das transaminases séricas (> 3 vezes o limite superior da normalidade).',
      fonte: 'HSL / BULA',
      trecho: 'Hepatopatias ativas ou aumentos inexplicados de transaminases constituem contraindicações.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'Contraindicado durante a gravidez e lactação (Risco Fetal Categoria X - o colesterol é fundamental para a embriogênese e formação das membranas fetais).',
      fonte: 'HSL / BULA / SBC',
      trecho: 'Contraindicado na gestação e lactação.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada à sinvastatina ou a qualquer componente da fórmula.',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade conhecida à sinvastatina.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'ALERTA DE INTERAÇÃO COM ANLODIPINO: O uso concomitante com besilato de anlodipino eleva a concentração sérica de sinvastatina. A dose de sinvastatina não deve exceder 20 mg/dia quando administrada concomitantemente ao anlodipino pelo risco acentuado de rabdomiólise.',
      fonte: 'HSL / FDA / SBC',
      trecho: 'Dose máxima de 20 mg/dia em pacientes que usam anlodipino.',
      strong: false
    },
    {
      vias: ['VO'],
      msg: 'ALERTA DE INTERAÇÃO COM INIBIDORES DO CYP3A4: Evitar uso concomitante com antifúngicos azólicos potentes (itraconazol, cetoconazol), macrolídeos (claritromicina, eritromicina) e inibidores de protease.',
      fonte: 'HSL / SBC',
      trecho: 'Contraindicada a associação com inibidores potentes do CYP3A4.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Tratamento da hipercolesterolemia primária e dislipidemia mista; redução da morbimortalidade cardiovascular em pacientes com doença arterial coronariana (DAC), diabetes mellitus ou alto risco cardiovascular aterosclerótico.',
    administracao: 'VO: Tomar 1 vez ao dia, preferencialmente à noite antes de deitar, com ou sem alimentos.',
    cuidados: 'MIOPATIA E RABDOMIÓLISE: O risco é dose-dependente. Orientar os pacientes a comunicar imediatamente dor, sensibilidade ou fraqueza muscular sem causa aparente, especialmente se acompanhada de mal-estar ou febre. A dose de 80 mg/dia foi praticamente abandonada na prática clínica internacional em virtude do risco elevado de dano muscular.',
    ajuste: 'Insuficiência renal grave (ClCr < 30 mL/min): Iniciar com 10 mg/dia e monitorar rigorosamente. Hemodiálise: Não dialisável; usar com cautela.'
  }
};

export default sinvastatina;
