import { Farmaco } from '../../types';

export const tenofovirLamivudina: Farmaco = {
  id: 'tenofovir-lamivudina',
  nome: 'Tenofovir + Lamivudina (TDF + 3TC)',
  categoria: 'Antivirais e Terapia Antirretroviral (TARV / PEP)',
  busca: 'tenofovir lamivudina tdf 3tc pep profilaxia pos exposicao hiv acidente material biologico violencia sexual 300mg',
  classe: 'Inibidores da Transcriptase Reversa Análogos de Nucleosídeos / Nucleotídeos (ITRN)',
  dosePratica: 'Profilaxia Pós-Exposição (PEP HIV - PCDT MS): 1 comprimido combinado (TDF 300 mg + 3TC 300 mg) VO 1x ao dia (24/24h), no mesmo horário, por 28 dias consecutivos. Iniciar preferencialmente nas primeiras 2 a 72 horas pós-exposição. Sempre associar ao Dolutegravir 50 mg.',
  fontes: { MS: '2024', PSZERADO: '2025', BULA: '2024' },
  snPadrao: 'profilaxia pós-exposição de risco para o HIV',
  modoPadrao: 'continuo',
  diasPadrao: 28,
  usoContinuoPadrao: false,
  acessoFonte: 'RENAME 2024 / Programa Nacional de IST/Aids e Hepatites Virais do Ministério da Saúde: Frasco com 30 comprimidos distribuído gratuitamente em serviços de emergência (UPAs/Hospitais) e Centros de Testagem e Aconselhamento (CTA).',
  apresentacoes: [
    {
      id: 'cp_tdf_3tc',
      forma: 'cp',
      nome: 'Comprimido Revestido Combinado (Tenofovir 300 mg + Lamivudina 300 mg)',
      comercial: 'Tenofovir + Lamivudina FDC / Ministério da Saúde',
      conc: '300mg + 300mg',
      rotulo: 'Tenofovir 300 mg + Lamivudina 300 mg',
      mg: 600,
      frac: 1,
      vias: ['VO'],
      disp: '1 frasco (30 comprimidos)',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar 1 comprimido por via oral uma vez ao dia com água, no mesmo horário todos os dias, com ou sem alimentos, durante 28 dias seguidos sem interrupção.',
      obs: 'Componente da espinha dorsal padrão da PEP contra HIV no SUS. Tomar no mesmo horário junto com o Dolutegravir 50 mg.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 600,
      max: 600,
      padrao: 600,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'MS',
      trecho: '1 comprimido VO 1x ao dia por 28 dias para profilaxia pós-exposição.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 600,
      fonte: 'MS',
      trecho: '1 comprimido ao dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade prévia aos componentes ou disfunção renal severa sem ajuste de dose (ClCr < 50 mL/min requer formulações isoladas com ajuste de intervalo).',
      fonte: 'MS',
      trecho: 'Disfunção renal severa.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Profilaxia pós-exposição (PEP) ao HIV após violência sexual, acidente ocupacional com material biológico ou relação sexual desprotegida consentida.',
    administracao: 'Via oral com água. Manter horário fixo diário para garantir níveis terapêuticos séricos constantes.',
    cuidados: 'Monitorar creatinina e função hepática. Realizar teste rápido para HIV no dia zero (não usar se HIV prévio confirmado; encaminhar para TARV regular).',
    ajuste: 'Se ClCr < 50 mL/min, separar os fármacos para ajuste posológico individual.'
  }
};

export default tenofovirLamivudina;
