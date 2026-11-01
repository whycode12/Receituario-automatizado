import { Farmaco } from '../../types';

export const betahistina: Farmaco = {
  id: 'betahistina',
  nome: 'Dicloridrato de Betahistina',
  categoria: 'Sistema Nervoso e Psiquiátrico',
  busca: 'betahistina labirin betaserc vertigem tontura labirintite zumbido ouvido meniere cinetose 16mg 24mg vo',
  classe: 'Análogo da Histamina / Antivertiginoso com Ação Vasodilatadora na Microcirculação da Orelha Interna',
  dosePratica: 'Labirintite / Crise Vertiginosa / Síndrome de Menière: Iniciar com 16 mg VO de 8 em 8 horas (3 vezes ao dia) ou 24 mg VO de 12 em 12 horas, sempre durante ou logo após as principais refeições, por 14 a 30 dias.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'tontura, vertigem ou zumbido no ouvido',
  acessoFonte: 'RENAME 2024 (Componente Especializado / Mercado Privado): Betahistina 16 mg e 24 mg comprimido.',
  apresentacoes: [
    {
      id: 'cp16',
      forma: 'cp',
      nome: 'Comprimido 16 mg (sulcado)',
      comercial: 'Labirin®, Betaserc®, Genérico',
      conc: '16mg',
      rotulo: 'Dicloridrato de Betahistina 16 mg comprimido',
      mg: 16,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 caixa com 30 comprimidos',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar 1 comprimido por via oral de 8 em 8 horas com água, preferencialmente durante ou após as refeições para diminuir queixas gástricas.',
      obs: 'Melhora o fluxo sanguíneo na cóclea e diminui a pressão endolinfática labiríntica.'
    },
    {
      id: 'cp24',
      forma: 'cp',
      nome: 'Comprimido 24 mg (sulcado)',
      comercial: 'Labirin®, Betaserc®, Genérico',
      conc: '24mg',
      rotulo: 'Dicloridrato de Betahistina 24 mg comprimido',
      mg: 24,
      frac: 0.5,
      vias: ['VO'],
      disp: '1 caixa com 30 ou 60 comprimidos',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar 1 comprimido de 12 em 12 horas com as refeições.',
      obs: 'Comodidade posológica para manutenção.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 18 },
      vias: ['VO'],
      tipo: 'mg',
      min: 16,
      max: 24,
      padrao: 16,
      dosesDia: [2, 3],
      intervaloFixo: 8,
      fonte: 'PSZERADO',
      trecho: 'Adultos VO: 16 mg de 8/8h ou 24 mg de 12/12h durante as refeições.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 48,
      fonte: 'HSL',
      trecho: 'Dose máxima adulto: até 48 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em feocromocitoma (risco de liberação maciça de catecolaminas e crise hipertensiva severa) e úlcera péptica ativa.',
      fonte: 'HSL',
      trecho: 'Feocromocitoma ou úlcera péptica ativa.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Tratamento de vertigens periféricas, sensação de tontura giratória, zumbido e perda auditiva associados à labirintite e Doença de Menière.',
    administracao: 'Tomar com alimentos para evitar desconforto epigástrico.',
    cuidados: 'Usar com cautela em pacientes com asma brônquica (pode induzir broncoespasmo reflexo).',
    ajuste: 'Não necessita de ajuste de dose em insuficiência renal ou idosos.'
  }
};

export default betahistina;
