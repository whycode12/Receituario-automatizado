/**
 * MEDICAMENTO: Cloridrato de Metformina
 * CLASSE: Antidiabético Oral / Biguanida (Sensibilizador de Insulina)
 * FONTES:
 *   - HSL: Guia Farmacêutico Hospital Sírio-Libanês (Metformina - Glifage 500mg, 850mg e Glifage XR 500mg)
 *   - SBD: Diretrizes da Sociedade Brasileira de Diabetes
 *   - Ministério da Saúde / RENAME / Farmácia Popular: Medicamento 100% gratuito de 1ª linha
 *   - Bulário ANVISA: Glifage / Genérico
 */

import { Farmaco } from '../../types';

export const metformina: Farmaco = {
  id: 'metformina',
  nome: 'Cloridrato de Metformina',
  categoria: 'Endocrinologia e Antidiabéticos',
  busca: 'metformina cloridrato de metformina glifage glifage xr dimefor glucoformin antidiabetico diabetes glicemia acucar no sangue biguanida',
  classe: 'Biguanida Redutora da Gliconeogênese Hepática e Sensibilizadora dos Receptores Periféricos de Insulina',
  dosePratica: '1. Diabetes Mellitus Tipo 2 (SBD / HSL): Iniciar com 500 mg VO 2 vezes ao dia (ou 850 mg VO 1 vez ao dia) junto ou logo após as refeições principais (almoço e jantar). Titular a cada 1 a 2 semanas conforme tolerância gastrointestinal até dose ótima de 1.500 mg a 2.000 mg/dia divididos em 2 a 3 tomadas (dose máxima: 2.550 mg/dia de liberação padrão ou 2.000 mg/dia de liberação prolongada XR). 2. Síndrome dos Ovários Policísticos (SOP): 1.000 mg a 1.500 mg/dia divididos em 2 tomadas.',
  fontes: { HSL: '14/02/2017', MS: '2023', BULA: '04/10/2026' },
  snPadrao: 'tomada regular junto às refeições para controle glicêmico contínuo',
  acessoFonte: 'RENAME / Programa Farmácia Popular do Brasil: Comprimidos de 500 mg, 850 mg e 500 mg XR distribuídos gratuitamente em farmácias conveniadas e UBS.',
  apresentacoes: [
    {
      id: 'cp_500mg',
      forma: 'cp',
      nome: 'Comprimido 500 mg',
      comercial: 'Glifage / Genérico',
      conc: '500 mg',
      rotulo: 'Cloridrato de Metformina 500 mg comprimido',
      mg: 500,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 a 3 caixas (30 comprimidos)',
      acesso: { rename: true, fp: true },
      instrucao: 'Como tomar a metformina para controle do diabetes:\n1. TOME SEMPRE COM ALIMENTOS: Tome os comprimidos DURANTE ou LOGO APÓS as refeições principais (café da manhã, almoço ou jantar). NUNCA tome com o estômago vazio, pois tomá-la em jejum causa enjoos, gases e cólicas na barriga.\n2. INTESTINO PREGUIÇOSO OU SOLTO NO COMEÇO: Nas primeiras 1 a 2 semanas é comum sentir desconforto na barriga, náusea ou diarreia leve. Fique tranquilo(a): esses efeitos diminuem e desaparecem conforme o corpo se acostuma. Tomar junto com a comida reduz muito esses sintomas.\n3. NÃO CAUSA HIPOGLICEMIA ISOLADA: A metformina não "baixa o açúcar de repente" como a insulina; ela age impedindo que o fígado fabrique açúcar em excesso.\n4. EXAMES COM CONTRASTE: Se for fazer tomografia ou cateterismo com injeção na veia (contraste iodado), avise seu médico: a metformina precisa ser suspensa 48 horas antes do exame.\n5. HÁBITOS DE VIDA: Mantenha caminhadas regulares e evite doces e refrigerantes para o remédio funcionar no seu potencial máximo.',
      obs: 'RENAME / Farmácia Popular. Primeira escolha absoluta no diabetes tipo 2 e pré-diabetes com alto risco cardiovascular.'
    },
    {
      id: 'cp_850mg',
      forma: 'cp',
      nome: 'Comprimido 850 mg',
      comercial: 'Glifage / Genérico',
      conc: '850 mg',
      rotulo: 'Cloridrato de Metformina 850 mg comprimido',
      mg: 850,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 a 3 caixas (30 comprimidos)',
      acesso: { rename: true, fp: true },
      instrucao: 'Como tomar a metformina para controle do diabetes:\n1. TOME SEMPRE JUNTO ÀS REFEIÇÕES: Tome durante o almoço ou jantar, com água, sem mastigar.\n2. DESCONFORTO DE BARRIGA: Desconfortos leves no estômago no início do tratamento costumam desaparecer em poucos dias.\n3. CONTRASTE RADIOLÓGICO: Suspender 48 horas antes de exames radiológicos com contraste iodado na veia.\n4. NÃO INTERROMPA: Medicamento de uso diário e contínuo.',
      obs: 'RENAME / Farmácia Popular. Apresentação clássica do SUS para posologia de 850 mg a 2.550 mg/dia.'
    },
    {
      id: 'cp_xr_500mg',
      forma: 'cp',
      nome: 'Comprimido XR 500 mg (Liberação Prolongada)',
      comercial: 'Glifage XR / Genérico XR',
      conc: '500 mg XR',
      rotulo: 'Cloridrato de Metformina XR 500 mg comprimido de liberação prolongada',
      mg: 500,
      frac: 1,
      vias: ['VO'],
      disp: '1 a 3 caixas (30 comprimidos)',
      acesso: { rename: true, fp: true },
      instrucao: 'Como tomar a metformina XR de liberação lenta:\n1. TOME NO JANTAR: Tome a dose inteira prescrita uma vez ao dia durante o jantar com um copo de água.\n2. ENGULA INTEIRO: NÃO mastigue, NÃO corte e NÃO triture o comprimido. Ele possui uma matriz especial de liberação lenta.\n3. MENOS EFEITOS NO ESTÔMAGO: A fórmula XR é desenvolvida especificamente para liberar o remédio aos poucos no intestino, minimizando náuseas e diarreias.\n4. CASCA NAS FEZES: É completamente normal ver uma "casquinha" esbranquiçada do comprimido nas fezes. É apenas a matriz vazia do remédio que foi eliminada após todo o medicamento ter sido absorvido.',
      obs: 'Farmácia Popular. Excelente opção para pacientes com intolerância gástrica ao comprimido comum.'
    }
  ],
  regras: [
    // 1. Adultos - Diabetes Tipo 2 / SOP (500 mg a 2.550 mg/dia)
    {
      pub: 'adulto',
      vias: ['VO'],
      apres: ['cp_500mg', 'cp_850mg', 'cp_xr_500mg'],
      tipo: 'mg',
      min: 500,
      max: 2550,
      padrao: 1000,
      dosesDia: [1, 3],
      dosesPadrao: 2,
      intervaloFixo: 12,
      duracaoMaxDias: 180,
      fonte: 'HSL / SBD / BULA',
      trecho: 'HSL: Adultos: Iniciar com 500 mg 2 vezes/dia ou 850 mg 1 vez/dia. Dose máxima: 2.550 mg/dia fracionada em 2 a 3 tomadas ou 2.000 mg/dia na apresentação XR no jantar.'
    },
    // 2. Pediatria a partir de 10 anos (HSL / SBD)
    {
      pub: 'ped',
      se: { idadeMinMeses: 120 }, // ≥ 10 anos
      vias: ['VO'],
      apres: ['cp_500mg', 'cp_850mg'],
      tipo: 'mg',
      min: 500,
      max: 2000,
      padrao: 500,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 180,
      fonte: 'HSL / SBD',
      trecho: 'HSL: Pediatria (acima de 10 anos): Dose inicial de 500 mg ou 850 mg ao dia. Dose máxima: 2.000 mg/dia. Não indicado para crianças menores de 10 anos.'
    }
  ],
  contra: [
    {
      vias: ['VO'],
      msg: 'Contraindicado em pacientes com insuficiência renal moderada a grave com ClCr < 30 mL/min (ou TFGe < 30 mL/min/1,73m²) devido ao alto risco de acúmulo e acidose lática fatal.',
      fonte: 'HSL / SBD',
      trecho: 'Contraindicado em casos de Clcr < 30 mL/min.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'Contraindicado em qualquer condição aguda associada a hipoxemia tecidual grave ou hipoperfusão (choque séptico, choque cardiogênico, insuficiência respiratória grave, IAM recente ou insuficiência cardíaca aguda instável).',
      fonte: 'HSL / SBD',
      trecho: 'Condições de hipoxemia aguda aumentam exponencialmente o risco de acidose lática.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'Contraindicado em cetoacidose diabética, pré-coma diabético ou acidose metabólica aguda descompensada.',
      fonte: 'HSL / BULA',
      trecho: 'Contraindicado em quadros acidóticos agudos.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'Contraindicado em insuficiência hepática grave e alcoolismo agudo ou crônico ativo.',
      fonte: 'HSL / BULA',
      trecho: 'Risco elevado de acidose lática por deficiência no clareamento hepático de lactato.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'SUSPENSÃO TEMPORÁRIA EM CONTRASTE IODADO: Suspender a metformina 48 horas antes da administração intravascular de contraste radiológico iodado e reiniciar somente 48 horas após, desde que a função renal esteja reavaliada e estável.',
      fonte: 'HSL / CBR / SBD',
      trecho: 'Suspender 48h antes de contrastes iodados pelo risco de nefropatia induzida por contraste com consequente acúmulo de metformina.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Tratamento de primeira linha do Diabetes Mellitus Tipo 2; prevenção em pré-diabetes de alto risco; coadjuvante na Síndrome dos Ovários Policísticos (SOP) com resistência insulínica.',
    administracao: 'VO: Tomar sempre durante ou imediatamente após as principais refeições. Para a formulação XR, administrar preferencialmente no jantar (engolir inteiro, nunca partir ou mastigar).',
    cuidados: 'TOLERÂNCIA GASTROINTESTINAL: Cerca de 20-30% dos pacientes relatam náusea, plenitude gástrica, cólicas ou diarreia no início. A titulação lenta (iniciar com 500mg e subir após 1-2 semanas) ou migração para a fórmula XR resolve a grande maioria dos casos. Em uso crônico por anos, monitorar vitamina B12 (pode reduzir absorção ileal de B12).',
    ajuste: 'TFGe 45-59 mL/min: dose máxima 1.500 mg/dia com monitoramento renal a cada 3-6 meses. TFGe 30-44 mL/min: dose máxima 1.000 mg/dia com monitoramento renal trimestral. TFGe < 30 mL/min: suspender / contraindicada.'
  }
};

export default metformina;
