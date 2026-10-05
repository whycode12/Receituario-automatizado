import { Farmaco } from '../../types';

export const ciprofloxacinoDexametasona: Farmaco = {
  id: 'ciprofloxacino-dexametasona',
  nome: 'Ciprofloxacino + Dexametasona',
  categoria: 'Oftalmológicos',
  busca: 'ciprofloxacino dexametasona cilodex colirio pomada oftamica conjuntivite blefarite blefaroconjuntivite tercol calazio olhos',
  classe: 'Associação tópica ocular de antibacteriano fluoroquinolona (ciprofloxacino 0,35%) e corticosteroide anti-inflamatório potente (dexametasona 0,1%)',
  dosePratica: 'Adultos e crianças (≥ 1 ano): Uso Oftálmico Exclusivo. Suspensão oftálmica (colírio 3,5 mg + 1 mg / mL): Pingar 1 a 2 gotas no(s) olho(s) afetado(s) a cada 4 horas (4 a 6 vezes ao dia) por 7 dias (em infecções graves, pode-se iniciar com 1 a 2 gotas a cada 2 horas nas primeiras 24 a 48h). Pomada oftálmica (3,5 mg + 1 mg / g): Aplicar uma pequena quantidade (~1 a 1,5 cm) no saco conjuntival inferior 3 a 4 vezes ao dia ou ao deitar associada ao colírio diurno. ADVERTÊNCIA CRUCIAL: Uso estritamente ocular. CONTRAINDICADO em ceratite por herpes simples dendrítica, infecções oculares fúngicas ou virais (risco de perfuração de córnea). Não usar lentes de contato durante o tratamento.',
  fontes: { BULA: '04/10/2026', HSL: '05/03/2025' },
  snPadrao: 'infecção e inflamação ocular',
  acessoFonte: 'RENAME 2024: Não consta na Relação Nacional de Medicamentos Essenciais (disponibilizada no SUS via consultas especializadas em oftalmologia ou aquisição direta em farmácias comerciais sob retenção de receita médica). Farmácia Popular: Não consta.',
  apresentacoes: [
    {
      id: 'colirio',
      forma: 'gotas',
      nome: 'Suspensão Oftálmica 3,5 mg/mL + 1 mg/mL frasco conta-gotas 5 mL',
      comercial: 'Cilodex / Genérico',
      conc: '3,5mg/mL + 1mg/mL',
      rotulo: 'Ciprofloxacino 0,35% + dexametasona 0,1% suspensão oftálmica',
      mgml: 4.5,
      gotasml: 20,
      frascoMl: 5,
      vias: ['OFTALMICA'],
      disp: '1 frasco',
      acesso: { rename: false, fp: false },
      instrucao: 'Agitar bem o frasco antes de usar. Inclinar a cabeça para trás, puxar suavemente a pálpebra inferior para baixo e instilar a(s) gota(s) no saco conjuntival sem encostar a ponta do conta-gotas no olho ou nos dedos (evitar contaminação). Fechar os olhos suavemente por 1 a 2 minutos e pressionar levemente o canto interno do olho (ponto lacrimal) para diminuir a absorção sistêmica. Não usar lentes de contato durante o tratamento.',
      obs: 'Frasco conta-gotas com 5 mL. Cada 1 mL contém 3,5 mg de cloridrato de ciprofloxacino e 1,0 mg de dexametasona. Agitar antes de usar.'
    },
    {
      id: 'pomada_oft',
      forma: 'pomada_oft',
      nome: 'Pomada Oftálmica 3,5 mg/g + 1 mg/g bisnaga 3,5 g',
      comercial: 'Cilodex pomada',
      conc: '3,5mg/g + 1mg/g',
      rotulo: 'Ciprofloxacino 0,35% + dexametasona 0,1% pomada oftálmica',
      mg: 1,
      vias: ['OFTALMICA'],
      disp: '1 bisnaga',
      acesso: { rename: false, fp: false },
      instrucao: 'Lavar bem as mãos antes da aplicação. Puxar suavemente a pálpebra inferior para baixo formando uma pequena bolsa e aplicar uma quantidade de aproximadamente 1 cm de pomada no saco conjuntival. Piscar suavemente algumas vezes para espalhar o produto. Pode causar visão turva temporária passageira logo após a aplicação. Não encostar a ponta da bisnaga nos olhos.',
      obs: 'Bisnaga com 3,5 g. Indicada para aplicação 3 a 4 vezes ao dia ou ao deitar para ação prolongada durante a noite.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['OFTALMICA'],
      apres: ['colirio'],
      tipo: 'ml',
      min: 1, // 1 gota
      max: 2, // 2 gotas
      padrao: 1,
      dosesDia: [4, 6],
      dosesPadrao: 6,
      intervaloFixo: 4,
      duracaoMaxDias: 7,
      fonte: 'BULA',
      trecho: 'Bula Cilodex: Instilar 1 a 2 gotas no saco conjuntival a cada 4 horas (6 vezes ao dia) por aproximadamente 7 dias (nas primeiras 24 a 48h pode-se instilar a cada 2h a critério médico).'
    },
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['OFTALMICA'],
      apres: ['pomada_oft'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 7,
      fonte: 'BULA',
      trecho: 'Bula Cilodex Pomada: Aplicar uma pequena quantidade (~1 a 1,5 cm) no saco conjuntival inferior 3 a 4 vezes ao dia por até 7 a 10 dias.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 12, idadeMaxAnos: 11 },
      vias: ['OFTALMICA'],
      apres: ['colirio'],
      tipo: 'ml',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [4, 6],
      dosesPadrao: 4,
      intervaloFixo: 6,
      duracaoMaxDias: 7,
      fonte: 'BULA',
      trecho: 'Bula Cilodex: Crianças acima de 1 ano de idade: Instilar 1 gota no olho afetado a cada 4 a 6 horas durante 7 dias.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 12, idadeMaxAnos: 11 },
      vias: ['OFTALMICA'],
      apres: ['pomada_oft'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [3, 4],
      dosesPadrao: 3,
      intervaloFixo: 8,
      duracaoMaxDias: 7,
      fonte: 'BULA',
      trecho: 'Bula Cilodex Pomada: Crianças acima de 1 ano: Aplicar pequena quantidade no saco conjuntival 3 vezes ao dia.'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['OFTALMICA'],
      tipo: 'mg_dia',
      valor: 12,
      fonte: 'BULA',
      trecho: 'Bula: Máximo de até 2 gotas a cada 2 horas nas primeiras 48 horas (até 12 aplicações diárias).'
    },
    {
      pub: 'ped',
      vias: ['OFTALMICA'],
      tipo: 'mg_dia',
      valor: 6,
      fonte: 'BULA',
      trecho: 'Bula: Em pediatria não exceder 1 gota a cada 4 horas (máximo 6 aplicações ao dia).'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 11 },
      vias: ['OFTALMICA'],
      msg: 'Contraindicado para lactentes menores de 1 ano de vida (segurança e eficácia clínica não foram estabelecidas).',
      fonte: 'BULA',
      trecho: 'Bula Cilodex: A segurança e eficácia em crianças com menos de 1 ano de idade não foram estabelecidas.',
      strong: true
    },
    {
      msg: 'CONTRAINDICAÇÃO ABSOLUTA em infecções oculares virais da córnea e conjuntiva, incluindo ceratite epitelial por herpes simples (dendrítica), vacínia e varicela (corticoides tópicos causam proliferação viral desenfreada e risco iminente de perfuração da córnea e cegueira).',
      fonte: 'BULA',
      trecho: 'Bula Cilodex: Contraindicado na ceratite por herpes simples (ceratite dendrítica), vacínia, varicela e muitas outras doenças virais da córnea e conjuntiva.',
      strong: true
    },
    {
      msg: 'Contraindicado em infecções oculares fúngicas, tuberculose ocular e afecções que causem adelgaçamento da córnea ou esclera (risco de perfuração ocular).',
      fonte: 'BULA',
      trecho: 'Bula Cilodex: Infecções micobacterianas do olho e doenças fúngicas das estruturas oculares.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com glaucoma prévio não controlado e hipersensibilidade ao ciprofloxacino, outras fluoroquinolonas, dexametasona ou corticoides.',
      fonte: 'BULA',
      trecho: 'Bula Cilodex: Hipersensibilidade aos componentes da fórmula ou a outras quinolonas.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Tratamento de infecções oculares externas e seus anexos causadas por bactérias sensíveis ao ciprofloxacino, quando acompanhadas de processo inflamatório agudo significativo que justifique o uso associado de corticosteroide: conjuntivites bacterianas, blefarites, blefaroconjuntivites, ceratoconjuntivites bacterianas não ulcerativas, meibomite, hordéolo (terçol) e profilaxia/tratamento anti-inflamatório e antibacteriano pós-cirúrgico de catarata e cirurgias refrativas (Bula Cilodex).',
    administracao: 'VIA OFTÁLMICA EXCLUSIVA: Não ingerir nem aplicar nos ouvidos. Suspensão oftálmica: agitar vigorosamente antes de cada uso. Pomada: aplicar no fundo de saco conjuntival inferior (visão turva passageira pode ocorrer por alguns minutos após o uso da pomada; evitar dirigir imediatamente após). Recomenda-se oclusão nasolacrimal por compressão digital do canto medial por 1 a 2 minutos para diminuir absorção sistêmica da dexametasona e ciprofloxacino. Não utilizar lentes de contato durante todo o curso do tratamento.',
    cuidados: 'PRESSÃO INTRAOCULAR E CATARATA: O uso prolongado de corticosteroides tópicos oculares (> 10 a 14 dias) pode causar elevação da pressão intraocular (glaucoma induzido por corticoide com dano ao nervo óptico) e formação de catarata subcapsular posterior. Se o tratamento for mantido por mais de 10 dias, é OBRIGATÓRIA a monitorização da pressão intraocular por oftalmologista. SUPERINFECÇÃO FÚNGICA: A proliferação fúngica é frequente após corticoterapia tópica ocular prolongada; suspeitar de micose se úlcera corneana persistente.',
    ajuste: 'Insuficiência renal e hepática: A absorção sistêmica após aplicação oftálmica tópica correta é mínima; não requer ajuste de dose em disfunção renal ou hepática (Bula).'
  }
};

export default ciprofloxacinoDexametasona;
