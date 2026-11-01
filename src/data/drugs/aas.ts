import { Farmaco } from '../../types';

export const aas: Farmaco = {
  id: 'aas',
  nome: 'Ácido Acetilsalicílico (AAS)',
  categoria: 'Cardiovascular e Antiagregantes',
  busca: 'aas aspirina acido acetilsalicilico antiagregante plaquetario coronariopatia iam sca avci vascular 100mg',
  classe: 'Antiagregante Plaquetário / Anti-inflamatório Não Esteroidal',
  dosePratica: 'Prevenção secundária cardiovascular: 100 mg VO 1x/dia com água após o almoço. SCA / IAM (Ataque): 200 a 300 mg VO (2 a 3 comprimidos) mastigados imediatamente.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'síndrome coronariana aguda ou evento isquêmico',
  acessoFonte: 'RENAME 2024 (Componente Básico): Ácido acetilsalicílico 100 mg comprimido. Farmácia Popular: Disponível gratuitamente para hipertensão/doença cardiovascular.',
  apresentacoes: [
    {
      id: 'cp100',
      forma: 'cp',
      nome: 'Comprimido 100 mg',
      comercial: 'Aspirina Prevent®, Somalgin®, AAS®',
      conc: '100mg',
      rotulo: 'Ácido Acetilsalicílico 100 mg comprimido',
      mg: 100,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: true },
      instrucao: 'Tomar com água, preferencialmente após as refeições. Em suspeita de infarto (SCA), mastigar os comprimidos da dose de ataque para absorção rápida.',
      obs: 'Antiagregante plaquetário de escolha na prevenção secundária e na fase aguda do infarto do miocárdio.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 100,
      max: 300,
      padrao: 100,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: 'Prevenção cardiovascular: 100 mg VO 1x/dia. SCA / IAM fase aguda: 200 a 300 mg VO mastigados imediatamente.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 300,
      fonte: 'HSL',
      trecho: 'Dose antiplaquetária máxima: 300 a 325 mg/dia.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com alergia ao AAS/AINEs, tríade de Widal (asma + pólipos nasais + intolerância ao AAS) ou sangramento gastrointestinal ativo.',
      fonte: 'HSL',
      trecho: 'Alergia a salicilatos ou sangramento ativo.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Prevenção secundária de eventos aterotrombóticos (infarto, angina, AVC isquêmico) e fase aguda de SCA.',
    administracao: 'Tomar após as refeições. Na suspeita de infarto na emergência, mastigar os comprimidos para acelerar a ação.',
    cuidados: 'Risco de sangramento gástrico; associar inibidor da bomba de prótons em pacientes com alto risco de sangramento.',
    ajuste: 'Evitar em insuficiência renal ou hepática graves.'
  }
};

export default aas;
