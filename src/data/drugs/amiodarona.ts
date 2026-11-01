import { Farmaco } from '../../types';

export const amiodarona: Farmaco = {
  id: 'amiodarona',
  nome: 'Cloridrato de Amiodarona',
  categoria: 'Cardiovascular e Antiagregantes',
  busca: 'amiodarona ancoron antiarritmico classe iii taquicardia ventricular tv fibrilacao atrial fa flutter pcr bic ev vo',
  classe: 'Antiarritmico da Classe III de Vaughan-Williams (Bloqueador de Canais de Potássio)',
  dosePratica: 'Arritmias Estáveis (TV monomórfica com pulso / FA aguda): Ataque de 150 a 300 mg (1 a 2 ampolas) diluídos em 100 mL de SG 5% infundidos em 10 a 20 minutos. Manutenção: 900 mg (6 ampolas) diluídos em 250 a 500 mL de SG 5% em 24h em BIC (1 mg/min nas primeiras 6h = 16 a 18 mL/h; depois 0,5 mg/min nas 18h seguintes = 8 a 9 mL/h). PCR (FV/TVSP refratária): 300 mg IV bólus rápido após 3º choque; segunda dose de 150 mg.',
  fontes: { PSZERADO: '2025', HSL: '2024', EINA: '2024', ACLS: '2025' },
  snPadrao: 'taquiarritmia ventricular ou supraventricular grave',
  acessoFonte: 'RENAME 2024 (Componente Hospitalar / Básico): Amiodarona 50 mg/mL injetável e 200 mg comprimido.',
  apresentacoes: [
    {
      id: 'amp150_3ml',
      forma: 'amp',
      nome: 'Ampola 150 mg / 3 mL (50 mg/mL) EV',
      comercial: 'Ancoron®, Atlansil®',
      conc: '150mg / 3 mL',
      rotulo: 'Cloridrato de Amiodarona 150 mg / 3 mL ampola EV',
      mg: 150,
      volml: 3,
      mgml: 50,
      vias: ['EV'],
      disp: '1 ampola (3 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Diluir OBRIGATORIAMENTE em Soro Glicosado 5% (SG 5%). Incompatível com SF 0,9% (precipitação). Infundir preferencialmente em acesso calibroso ou central.',
      obs: 'Ataque em 10 a 20 minutos para taquicardias com pulso. Pode causar flebite e hipotensão se infusão muito rápida.'
    },
    {
      id: 'cp200',
      forma: 'cp',
      nome: 'Comprimido 200 mg (Uso oral)',
      comercial: 'Ancoron®, Atlansil®',
      conc: '200mg',
      rotulo: 'Cloridrato de Amiodarona 200 mg comprimido',
      mg: 200,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      instrucao: 'Tomar por via oral durante ou imediatamente após as refeições.',
      obs: 'Manutenção crônica de ritmo sinusal após reversão de arritmias.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['EV'],
      tipo: 'mg',
      min: 150,
      max: 900,
      padrao: 150,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'PSZERADO',
      trecho: 'Ataque: 150 a 300 mg EV diluído em 100 mL SG 5% em 10 a 20 min. Manutenção: 900 mg em 250 a 500 mL SG 5% em 24h em BIC.'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 200,
      max: 400,
      padrao: 200,
      dosesDia: [1, 1],
      intervaloFixo: 24,
      fonte: 'HSL',
      trecho: 'Manutenção oral: 200 mg VO 1x ao dia (após impregnação).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      tipo: 'mg_dia',
      valor: 1200,
      fonte: 'HSL',
      trecho: 'Dose máxima acumulada nas primeiras 24 horas: até 1.200 mg.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em bradicardia sinusal importante, disfunção do nó sinusal e BAV de 2º ou 3º grau em pacientes sem marcapasso.',
      fonte: 'HSL',
      trecho: 'Bradicardia severa ou BAV avançado.',
      strong: true
    }
  ],
  ev: {
    diluentes: ['SG 5%'],
    concMax: 6,
    volOpcoes: [100, 250, 500],
    tempo: {
      adulto: { min: 10, padrao: 20, max: 1440, txt: '10 a 20 min no ataque; 24h na manutenção em BIC' },
      ped: { min: 20, padrao: 30, max: 60 }
    },
    fonteTxt: 'DILUIR EXCLUSIVAMENTE EM SG 5%. Incompatível com SF 0,9%. Ataque em 10 a 20 min; manutenção contínua em 24h.'
  },
  notas: {
    indicacao: 'Controle e reversão de fibrilação atrial aguda, flutter atrial, taquicardia ventricular monomórfica e parada cardiorrespiratória em FV/TVSP.',
    administracao: 'Infundir o ataque em 10 a 20 min com monitorização contínua de ECG e pressão arterial.',
    cuidados: 'Prolonga o intervalo QT; monitorar para prevenir Torsades de Pointes. Risco de hipotensão e bradicardia.',
    ajuste: 'Não necessita de ajuste para insuficiência renal (eliminação hepática/biliar predominante).'
  }
};

export default amiodarona;
