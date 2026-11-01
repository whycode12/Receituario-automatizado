import { Farmaco } from '../../types';

export const isossorbida: Farmaco = {
  id: 'isossorbida',
  nome: 'Dinitrato de Isossorbida',
  categoria: 'Cardiovascular e Antiagregantes',
  busca: 'isossorbida isordil dinitrato mononitrato monocordil sublingual 5mg nitrato angina dor toracica precordial',
  classe: 'Vasodilatador Coronariano (Nitrato Orgânico)',
  dosePratica: 'Crise de dor anginosa aguda: 5 mg sublingual; se persistir a dor, pode repetir a cada 5 minutos até no máximo 3 vezes (dose máxima 15 mg). Prevenção crônica: 10 a 40 mg VO 2 a 3x/dia com período livre de nitrato.',
  fontes: { PSZERADO: '2025', HSL: '2024', BULA: '2024' },
  snPadrao: 'dor no peito anginosa',
  acessoFonte: 'RENAME 2024 (Componente Básico): Dinitrato de isossorbida 5 mg comprimido sublingual.',
  apresentacoes: [
    {
      id: 'cp5_sl',
      forma: 'cp',
      nome: 'Comprimido sublingual 5 mg',
      comercial: 'Isordil®, Angil®',
      conc: '5mg',
      rotulo: 'Dinitrato de Isossorbida 5 mg comprimido sublingual',
      mg: 5,
      frac: 1,
      vias: ['SL'],
      disp: '1 frasco com comprimidos sublinguais',
      acesso: { rename: true, fp: false },
      instrucao: 'Dissolver debaixo da língua na crise de dor torácica. Pode repetir a cada 5 minutos até no máximo 3 vezes consecutivas se a dor persistir.',
      obs: 'Ação vasodilatadora rápida em 2 a 5 minutos. Manter o frasco bem fechado ao abrigo da luz e umidade.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['SL'],
      tipo: 'mg',
      min: 5,
      max: 15,
      padrao: 5,
      dosesDia: [1, 3],
      intervaloFixo: 8,
      fonte: 'PSZERADO',
      trecho: 'Crise anginosa: 5 mg SL; repetir a cada 5 min se dor persistir (máx 15 mg).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 15,
      fonte: 'HSL',
      trecho: 'Dose máxima por crise: até 15 mg (3 comprimidos de 5 mg).'
    }
  ],
  contra: [
    {
      msg: 'CONTRAINDICAÇÃO ABSOLUTA com uso de sildenafil nas últimas 24h ou tadalafil nas últimas 48h (risco de choque circulatório e morte súbita).',
      fonte: 'HSL',
      trecho: 'Uso concomitante de inibidores da 5-fosfodiesterase.',
      strong: true
    },
    {
      msg: 'Contraindicado em infarto de ventrículo direito, hipotensão importante (PAS < 90 mmHg) e estenose aórtica grave.',
      fonte: 'HSL',
      trecho: 'Hipotensão grave ou infarto de VD.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Alívio rápido da dor precordial na crise de angina pectoris e na síndrome coronariana aguda.',
    administracao: 'Colocar debaixo da língua e não engolir. Sentar-se antes de tomar para evitar hipotensão ortostática.',
    cuidados: 'Cefaleia pulsátil e hipotensão são efeitos colaterais comuns secundários à vasodilatação.',
    ajuste: 'Não necessita de ajuste de dose em insuficiência renal.'
  }
};

export default isossorbida;
