import { Farmaco } from '../../types';

export const cetoconazol: Farmaco = {
  id: 'cetoconazol',
  nome: 'Cetoconazol',
  categoria: 'Dermatologia e Antifúngicos Tópicos e Orais',
  busca: 'cetoconazol nizoral antifungico creme shampoo xampu caspa dermatite seborreica pitiriase tinea micose',
  classe: 'Antifúngico Derivado Imidazólico Inibidor da Síntese de Ergosterol Fúngico',
  dosePratica: 'Dermatite Seborreica e Caspa: Lavar o couro cabeludo com Cetoconazol Xampu 2%, massageando e deixando agir por 3 a 5 minutos antes de enxaguar abundantemente, 2 vezes por semana durante 2 a 4 semanas. Pitiríase Versicolor ("Pano Branco"): Aplicar o xampu 2% sobre a pele úmida 1 vez ao dia por 5 dias consecutivos; ou Cetoconazol Creme 2% 1 vez ao dia por 2 a 3 semanas. Micoses Superficiais (Tinea corporis, tinea cruris, tinea pedis): Aplicar Cetoconazol Creme 2% 1 vez ao dia por 2 a 4 semanas (manter por mais 1 semana após resolução clínica). Via Oral (200 mg): Reservada para casos refratários de exceção com monitorização estrita de função hepática.',
  fontes: { HSL: '10/06/2016', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'lesões fúngicas ou dermatite seborreica',
  acessoFonte: 'Creme dermatológico 2% disponível na RENAME / Farmácia Básica do SUS. Xampu 2% e comprimidos 200mg amplamente disponíveis comercialmente (Nizoral e genéricos).',
  apresentacoes: [
    {
      id: 'shampoo_2',
      forma: 'sol',
      nome: 'Xampu anticaspa / antifúngico 2% (20 mg/g - frasco 100 mL)',
      comercial: 'Nizoral / Genérico',
      conc: '2% (20mg/g)',
      rotulo: 'Cetoconazol 2% xampu dermatológico (frasco 100mL)',
      mg: 1,
      frascoMl: 100,
      vias: ['TOPICA'],
      disp: '1 frasco (100 mL)',
      acesso: { rename: false, fp: false },
      instrucao: 'Lavar as áreas afetadas do couro cabeludo ou da pele com o xampu, massageando suavemente até formar espuma abundante. Deixar agir em contato com a pele/couro cabeludo por 3 a 5 minutos antes de enxaguar abundantemente com água. Na dermatite seborreica e caspa: aplicar 2 vezes por semana por 2 a 4 semanas (manutenção: 1 vez a cada 1 ou 2 semanas). Na pitiríase versicolor: aplicar 1 vez ao dia por 5 dias consecutivos.',
      obs: 'Tratamento padrão-ouro para dermatite seborreica do couro cabeludo e pitiríase versicolor ("pano branco").'
    },
    {
      id: 'creme_2',
      forma: 'creme',
      nome: 'Creme dermatológico 2% (20 mg/g - bisnaga 30 g)',
      comercial: 'Nizoral / Genérico',
      conc: '2% (20mg/g)',
      rotulo: 'Cetoconazol 2% creme dermatológico (bisnaga 30g)',
      mg: 1,
      vias: ['TOPICA'],
      disp: '1 bisnaga (30 g)',
      acesso: { rename: true, fp: false },
      instrucao: 'Higienizar suavemente a área lesionada com água e sabonete e secar bem antes da aplicação. Aplicar uma camada fina sobre a lesão e área circundante 1 vez ao dia (ou 2 vezes ao dia em infecções graves), espalhando suavemente até absorção. Lavar bem as mãos após a aplicação. Continuar o tratamento por mais alguns dias após o desaparecimento completo de todos os sinais clínicos (duração habitual: 2 a 4 semanas para micoses corporais; 4 a 6 semanas para frieira/pé de atleta).',
      obs: 'RENAME / Atenção Primária. Indicado para dermatofitoses superficiais (tinea corporis, tinea cruris, tinea pedis) e candidíase cutânea.'
    },
    {
      id: 'cp200',
      forma: 'cp',
      nome: 'Comprimido 200 mg',
      comercial: 'Nizoral / Genérico',
      conc: '200mg',
      rotulo: 'Cetoconazol 200mg comprimido',
      mg: 200,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 10 comprimidos',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar o comprimido por via oral durante uma das principais refeições (almoço ou jantar), acompanhado de água, para maximizar a absorção gástrica. Não consumir bebidas alcoólicas durante o tratamento. Realizar exames de função hepática (TGO/TGP) se o uso durar mais de 2 semanas.',
      obs: 'Uso oral restrito: ANVISA e FDA recomendam reservar para micoses recalcitrantes e graves quando outras opções mais seguras (ex: fluconazol, terbinafina, itraconazol) não forem eficazes ou toleradas, devido ao risco de hepatotoxicidade.'
    }
  ],
  regras: [
    // 1. Tópico - Xampu 2% (Dermatite Seborreica / Caspa / Pitiríase)
    {
      pub: 'adulto',
      vias: ['TOPICA'],
      apres: ['shampoo_2'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 28,
      fonte: 'HSL / BULA',
      trecho: 'HSL / Bula: Aplicar na área afetada da pele ou do couro cabeludo, deixando agir por 3 a 5 minutos antes de enxaguar. Caspa e dermatite seborreica: 2 vezes por semana por 2 a 4 semanas. Pitiríase versicolor: 1 vez ao dia por 5 dias consecutivos.'
    },
    // 2. Tópico - Creme 2% (Tineas e Candidíase Cutânea)
    {
      pub: 'adulto',
      vias: ['TOPICA'],
      apres: ['creme_2'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 2],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 28,
      fonte: 'HSL / BULA',
      trecho: 'HSL / Bula: Aplicar o creme 1 vez ao dia nas áreas infectadas (ou 2x/dia em casos mais resistentes) durante 2 a 4 semanas.'
    },
    // 3. Oral - Comprimido 200 mg Adulto
    {
      pub: 'adulto',
      vias: ['VO'],
      apres: ['cp200'],
      tipo: 'mg',
      min: 200,
      max: 400,
      padrao: 200,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 28,
      fonte: 'BULA / PSZERADO',
      trecho: 'Adultos VO: 200 mg a 400 mg 1 vez ao dia junto às refeições para micoses sistêmicas ou profundas recalcitrantes (Bula / PSZerado).'
    },
    // 4. Pediatria (≥ 2 anos) - Uso Tópico Cutâneo e Capilar
    {
      pub: 'ped',
      se: { idadeMinAnos: 2 },
      vias: ['TOPICA'],
      apres: ['shampoo_2', 'creme_2'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 28,
      fonte: 'BULA',
      trecho: 'Pediatria (≥ 2 anos): Uso tópico de xampu e creme seguro e eficaz; aplicar 1 vez ao dia por 2 a 4 semanas conforme indicação médica.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 400,
      fonte: 'BULA',
      trecho: 'Dose máxima oral diária em adultos: 400 mg/dia.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxAnos: 1 },
      vias: ['VO'],
      msg: 'Uso oral contraindicado em lactentes e crianças menores de 2 anos de idade.',
      fonte: 'BULA',
      trecho: 'Contraindicado por via oral em crianças menores de 2 anos.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'ALERTA DE SEGURANÇA HEPATOTOXICIDADE ORAL: O cetoconazol VO possui risco documentado de hepatite medicamentosa grave e insuficiência hepática fatal. Contraindicado em pacientes com hepatopatia aguda ou crônica. Não indicado como tratamento oral de primeira linha para micoses superficiais (ANVISA / FDA).',
      fonte: 'ANVISA / BULA',
      trecho: 'Contraindicado em pacientes com doença hepática ativa ou crônica.',
      strong: true
    },
    {
      vias: ['VO'],
      msg: 'Contraindicado o uso oral concomitante com substratos de CYP3A4 que prolongam o intervalo QT (terfenadina, astemizol, cisaprida, pimozida, quinidina), sinvastatina e lovastatina (risco de rabdomiólise).',
      fonte: 'BULA',
      trecho: 'Contraindicada a coadministração de substratos metabolizados pelo CYP3A4 com risco de arritmias ventriculares graves.',
      strong: true
    },
    {
      msg: 'Em pacientes que estiveram em tratamento prolongado com corticosteroides tópicos, suspender o esteroide gradualmente ao longo de 2 a 3 semanas enquanto inicia o cetoconazol para evitar efeito rebote inflamatório da dermatose.',
      fonte: 'HSL',
      trecho: 'Suspender gradualmente o corticoide tópico por um período de 2 a 3 semanas para evitar efeito rebote.',
      strong: false
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada ao cetoconazol ou a outros antifúngicos do grupo dos imidazólicos.',
      fonte: 'HSL / BULA',
      trecho: 'Hipersensibilidade conhecida ao cetoconazol ou a derivados imidazólicos.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Dermatite seborreica e caspa no couro cabeludo; pitiríase versicolor ("pano branco"); micoses cutâneas superficiais causadas por dermatofitos e leveduras (tinea corporis, tinea cruris, tinea pedis / frieira, candidíase cutânea). Via oral restrita a micoses profundas recalcitrantes (HSL / Guia UBS / Guia UPA / PSZerado).',
    administracao: 'XAMPU: Aplicar, massagear até formar espuma, deixar agir por 3 a 5 minutos e enxaguar. CREME: Aplicar camada fina sobre a pele limpa e seca 1 vez ao dia (ou 2x/dia). VO: Tomar com alimentos (acidez gástrica essencial para absorção oral; antiácidos e inibidores de bomba reduzem drasticamente a biodisponibilidade).',
    cuidados: 'HEPATOTOXICIDADE: O perfil de segurança tópico é excelente (absorção sistêmica desprezível). O risco de hepatotoxicidade é restrito à via oral. ABSORÇÃO ORAL E ACIDEZ: A absorção do comprimido exige pH gástrico ácido; não administrar simultaneamente com omeprazol ou antiácidos. RESPOSTA CLÍNICA: Manter o creme por mais 1 semana após remissão dos sintomas para prevenir recidivas fúngicas.',
    ajuste: 'Insuficiência renal: Não requer ajuste posológico. Insuficiência hepática: Uso oral expressamente contraindicado em hepatopatia ativa ou cirrose hepática (Bula).'
  }
};

export default cetoconazol;
