import { Farmaco } from '../../types';

export const dolutegravir: Farmaco = {
  id: 'dolutegravir',
  nome: 'Dolutegravir Sódico (DTG)',
  categoria: 'Antivirais e Terapia Antirretroviral (TARV / PEP)',
  busca: 'dolutegravir dtg tivicay pep hiv profilaxia pos exposicao acidente biologico violencia sexual inibidor integrase 50mg',
  classe: 'Inibidor de Integrase dos Antirretrovirais (INI)',
  dosePratica: 'PEP HIV (PCDT Ministério da Saúde): 50 mg VO 1x ao dia (24/24h) por 28 dias consecutivos, associado a Tenofovir + Lamivudina (TDF/3TC 300/300 mg). Iniciar em até 72 horas pós-exposição de risco.',
  fontes: { MS: '2024', PSZERADO: '2025', BULA: '2024' },
  snPadrao: 'profilaxia pós-exposição ao vírus HIV',
  modoPadrao: 'continuo',
  diasPadrao: 28,
  usoContinuoPadrao: false,
  acessoFonte: 'RENAME 2024 / Ministério da Saúde: Frasco com 30 comprimidos de 50 mg disponível gratuitamente na rede de urgência e CTAs.',
  apresentacoes: [
    {
      id: 'cp50',
      forma: 'cp',
      nome: 'Comprimido Revestido 50 mg',
      comercial: 'Tivicay® / Genérico / MS',
      conc: '50mg',
      rotulo: 'Dolutegravir 50 mg comprimido',
      mg: 50,
      frac: 1,
      vias: ['VO'],
      disp: '1 frasco (30 comprimidos)',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar 1 comprimido uma vez ao dia com água, no mesmo horário que o Tenofovir + Lamivudina, por 28 dias seguidos sem pular dias.',
      obs: 'Terceiro fármaco padrão da profilaxia antirretroviral pós-exposição no Brasil devido à alta barreira genética à resistência e excelente tolerabilidade.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 50,
      max: 50,
      padrao: 50,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'MS',
      trecho: '50 mg VO 1x ao dia por 28 dias para PEP.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 50,
      fonte: 'MS',
      trecho: 'Dose máxima de 50 mg/dia em esquemas sem indutores enzimáticos.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado o uso concomitante com dofetilida. Separar administração de antiácidos com cálcio, alumínio ou ferro por pelo menos 2 horas antes ou 6 horas depois.',
      fonte: 'MS',
      trecho: 'Interação com cátions polivalentes e dofetilida.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Profilaxia pós-exposição (PEP) e tratamento regular do HIV/AIDS.',
    administracao: 'Via oral com ou sem alimentos. Se usar sulfato ferroso ou antiácidos, tomar dolutegravir 2 horas antes ou 6 horas depois.',
    cuidados: 'Monitorar queixas de insônia e cefaleia leve autolimitada nos primeiros dias.',
    ajuste: 'Não necessita de ajuste em disfunção renal leve a moderada.'
  }
};

export default dolutegravir;
