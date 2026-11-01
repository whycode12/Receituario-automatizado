import { Farmaco } from '../../types';

export const nitroprussiato: Farmaco = {
  id: 'nitroprussiato_de_sodio',
  nome: 'Nitroprussiato de Sódio',
  categoria: 'Cardiovascular e Antiagregantes',
  busca: 'nitroprussiato sodio nipride vasodilatador arterial venoso pressao alta emergencia hipertensiva eap bic ev',
  classe: 'Vasodilatador Direto Arterial e Venoso',
  dosePratica: 'Emergência Hipertensiva / EAP grave: Diluir 1 ampola (50 mg/2 mL) em 250 mL de SF 0,9% ou SG 5% (200 mcg/mL). Iniciar em BIC a 0,3 a 0,5 mcg/kg/min (ex: 70 kg ≈ 6 a 10 mL/h); titular a cada 5 min conforme PAM. Dose alvo 1 a 3 mcg/kg/min; dose máxima 10 mcg/kg/min.',
  fontes: { PSZERADO: '2025', HSL: '2024', EINA: '2024' },
  snPadrao: 'emergência hipertensiva com lesão de órgão-alvo',
  acessoFonte: 'RENAME 2024 (Componente Hospitalar): Nitroprussiato de sódio 25 mg/mL (50 mg/2 mL) solução injetável.',
  apresentacoes: [
    {
      id: 'amp50_2ml',
      forma: 'amp',
      nome: 'Ampola 50 mg / 2 mL (25 mg/mL) EV (Fotossensível)',
      comercial: 'Nipride®, Nitropress®',
      conc: '50mg / 2 mL',
      rotulo: 'Nitroprussiato de Sódio 50 mg / 2 mL ampola fotossensível',
      mg: 50,
      volml: 2,
      mgml: 25,
      vias: ['EV'],
      disp: '1 ampola (2 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Diluir 1 ampola (50 mg) em 250 mL de SF 0,9% ou SG 5% em frasco e equipo com capa fotossensível. Infundir estritamente em Bomba de Infusão Contínua (BIC) com titulação a cada 5 minutos.',
      obs: 'Início de ação imediato (segundos). Proteger da luz.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV'],
      tipo: 'mg',
      min: 25,
      max: 100,
      padrao: 50,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: 'Emergência hipertensiva: diluir 50 mg em 250 mL de SF 0,9%; iniciar em BIC a 0,3 a 0,5 mcg/kg/min e titular até a meta pressórica.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 200,
      fonte: 'HSL',
      trecho: 'Velocidade máxima: 10 mcg/kg/min (evitar doses > 3 mcg/kg/min por mais de 48-72h).'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em hipertensão compensatória (coarctação aórtica, fístula AV), atrofia óptica de Leber e choque cardiogênico sem suporte inotrópico.',
      fonte: 'HSL',
      trecho: 'Hipotensão severa ou hipertensão compensatória.',
      strong: true
    }
  ],
  ev: {
    diluentes: ['SF 0,9%', 'SG 5%'],
    concMax: 0.4,
    volOpcoes: [250, 500],
    tempo: {
      adulto: { txt: 'Infusão contínua em BIC com titulação a cada 5 minutos' },
      ped: { txt: 'Infusão contínua em BIC' }
    },
    fonteTxt: 'Diluir 50 mg em 250 mL de SF 0,9% ou SG 5%. Proteger frasco e equipo da luz. Infusão contínua em BIC.'
  },
  notas: {
    indicacao: 'Emergências hipertensivas (encefalopatia hipertensiva, dissecção aórtica, edema agudo de pulmão hipertensivo).',
    administracao: 'Infundir exclusivamente em Bomba de Infusão Contínua com equipo fotossensível.',
    cuidados: 'Monitorar sinais de intoxicação por cianeto/tiocianato (acidose lática, confusão mental, náuseas) em infusões prolongadas.',
    ajuste: 'Evitar em insuficiência hepática ou renal graves se alternativas disponíveis.'
  }
};

export default nitroprussiato;
