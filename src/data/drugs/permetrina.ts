/**
 * MEDICAMENTO: Permetrina (Loção 5% e Loção/Xampu 1%)
 * CLASSE: Ectoparasiticida Tópico / Escabicida / Pediculicida
 * FONTES:
 *   - Guia de Prescrição PSZerado (2025, pág. 163): Escabiose (Sarna) - Droga de escolha em gestantes e crianças < 15 kg
 *   - Ministério da Saúde / RENAME / Protocolos da Atenção Básica
 *   - SBD (Sociedade Brasileira de Dermatologia) / SBP (Sociedade Brasileira de Pediatria)
 *   - Bulário ANVISA: Permetrina 5% e Permetrina 1%
 */

import { Farmaco } from '../../types';

export const permetrina: Farmaco = {
  id: 'permetrina',
  nome: 'Permetrina (Loção 5% e 1%)',
  categoria: 'Dermatologia e Antiparasitários',
  busca: 'permetrina permetrina 5% permetrina 1% sarna escabiose piolho lendea pediculose nedymer kwell ectoparasita coceira noturna',
  classe: 'Ectoparasiticida Piretroide Tópico (Escabicida e Pediculicida)',
  dosePratica: '1. Escabiose (Sarna - Permetrina 5%): Aplicar à noite do pescoço para baixo em todo o corpo limpo e seco (inclusive sob as unhas, axilas e virilhas). Deixar agir por 8 a 14 horas e retirar no banho pela manhã. REAPLICAR OBRIGATORIAMENTE APÓS 7 A 14 DIAS para matar ácaros recém-nascidos. Droga de escolha na gestação, lactação e crianças < 15 kg. Tratar todos os contatos domiciliares simultaneamente. 2. Pediculose (Piolhos - Permetrina 1%): Aplicar no couro cabeludo e fios úmidos após lavar com xampu neutro, deixar agir por 10 minutos, enxaguar e passar pente fino. Reaplicar após 7 dias.',
  fontes: { PSZERADO: '2025', MS: '2023', BULA: '04/10/2026' },
  snPadrao: 'aplicação noturna para escabiose ou aplicação capilar para pediculose',
  acessoFonte: 'RENAME / Farmácia Básica do SUS: Permetrina loção 5% (escabicida) e permetrina loção 1% (pediculicida) amplamente disponíveis em Unidades Básicas de Saúde.',
  apresentacoes: [
    {
      id: 'locao_5_60ml',
      forma: 'sol',
      nome: 'Loção dermatológica 5% (50 mg/mL - frasco 60 mL)',
      comercial: 'Permetrina 5% / Nedax / Ponto Escabiose / Genérico',
      conc: '50 mg/mL (5%)',
      rotulo: 'Permetrina 5% loção dermatológica (frasco 60 mL)',
      mg: 1,
      frascoMl: 60,
      vias: ['TOPICA'],
      disp: '2 frascos (60 mL cada - para 1ª dose e reforço após 7 dias)',
      acesso: { rename: true, fp: false },
      instrucao: 'COMO USAR PARA SARNA (ESCABIOSE) EM CASA:\n1. TOME UM BANHO MORNO À NOITE e seque bem o corpo com toalha limpa.\n2. AGITE O FRASCO e aplique a loção em TODA A PELE DO PESCOÇO PARA BAIXO, cobrindo todo o corpo sem esquecer nenhuma parte:\n   - Entre os dedos das mãos e pés;\n   - Embaixo das unhas (use escovinha ou corte as unhas curtas);\n   - Axilas, virilhas, nádegas, umbigo e genitais.\n   (Em bebês, idosos ou se houver lesões na cabeça, aplicar também no couro cabeludo e orelhas, com cuidado para NÃO cair nos olhos ou boca).\n3. Vista roupas de dormir limpas e DEIXE O REMÉDIO AGIR POR 8 A 14 HORAS durante toda a noite.\n4. Na manhã seguinte, tome um banho completo para retirar todo o produto da pele.\n5. OBRIGATÓRIO REPETIR O MESMO PROCESSO APÓS 7 A 10 DIAS (o remédio mata o ácaro, mas não mata todos os ovos; a segunda aplicação é fundamental para evitar que a sarna volte!).\n6. MEDIDAS ESSENCIAIS NA CASA:\n   - TODAS AS PESSOAS que moram na mesma casa devem fazer o tratamento no mesmo dia, mesmo que não estejam com coceira!\n   - Lave todas as roupas de corpo, toalhas e lençóis usados nos últimos 3 dias em água quente ou guarde-os fechados em saco plástico por 7 dias.\n   - AVISO: A coceira pode continuar por até 2 a 3 semanas após o tratamento devido à alergia residual dos ácaros mortos. Isso é normal e não significa que o tratamento falhou.',
      obs: 'RENAME / SUS. Padrão-ouro para tratamento da escabiose humana. Seguro em gestantes, nutrizes e crianças acima de 2 meses.'
    },
    {
      id: 'locao_1_60ml',
      forma: 'sol',
      nome: 'Loção capilar / xampu 1% (10 mg/mL - frasco 60 mL)',
      comercial: 'Permetrina 1% / Kwell / Nedax Piolho / Genérico',
      conc: '10 mg/mL (1%)',
      rotulo: 'Permetrina 1% loção capilar (frasco 60 mL)',
      mg: 1,
      frascoMl: 60,
      vias: ['TOPICA'],
      disp: '2 frascos (60 mL cada - para 1ª dose e repetição após 7 dias)',
      acesso: { rename: true, fp: false },
      instrucao: 'COMO USAR PARA PIOLHOS E LÊNDEAS (PEDICULOSE):\n1. Lave o cabelo com xampu normal neutro (NÃO use condicionador nem cremes, pois eles diminuem o efeito do remédio).\n2. Seque o excesso de água com uma toalha, deixando os fios apenas úmidos.\n3. Agite bem o frasco da Permetrina 1% e aplique em todo o couro cabeludo e ao longo dos fios, massageando bem da raiz às pontas, especialmente atrás das orelhas e na nuca.\n4. DEIXE O PRODUTO AGIR POR EXATAMENTE 10 MINUTOS (proteger os olhos com uma toalha).\n5. Enxágue abundantemente com água morna.\n6. Com o cabelo ainda úmido, passe o PENTE FINO mecha por mecha para retirar os piolhos mortos e puxar as lêndeas (ovinhos brancos grudados nos fios).\n7. REPETIR O PROCESSO OBRIGATORIAMENTE APÓS 7 DIAS para matar qualquer piolho recém-nascido dos ovos remanescentes.\n8. Desinfete escovas e pentes em água bem quente por 10 minutos.',
      obs: 'RENAME / SUS. Droga de 1ª escolha para pediculose da cabeça.'
    }
  ],
  regras: [
    // 1. Adulto - Escabiose (Permetrina 5%) ou Pediculose (Permetrina 1%)
    {
      pub: 'adulto',
      vias: ['TOPICA'],
      apres: ['locao_5_60ml', 'locao_1_60ml'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 1,
      fonte: 'PSZERADO / SBD / BULA',
      trecho: 'Dose única noturna (deixar 8-14h no corpo para sarna ou 10 min no cabelo para piolho). Repetir obrigatoriamente dose única idêntica após 7 a 10 dias.'
    },
    // 2. Pediatria (≥ 2 meses de vida)
    {
      pub: 'ped',
      se: { idadeMinMeses: 2 },
      vias: ['TOPICA'],
      apres: ['locao_5_60ml', 'locao_1_60ml'],
      tipo: 'mg',
      min: 1,
      max: 1,
      padrao: 1,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 1,
      fonte: 'SBP / PSZERADO / BULA',
      trecho: 'Lactentes e crianças a partir de 2 meses: Aplicação única corporal noturna por 8 a 12 horas. Repetir impreterivelmente após 7 dias.'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { idadeMaxMeses: 2 },
      vias: ['TOPICA'],
      msg: 'Contraindicado em recém-nascidos e lactentes menores de 2 meses de idade (segurança e eficácia não estabelecidas; risco aumentado de absorção percutânea e toxicidade neurológica). Em menores de 2 meses com sarna, o enxofre precipitado a 5-10% em vaselina é a alternativa segura.',
      fonte: 'SBP / BULA',
      trecho: 'Contraindicado em crianças menores de 2 meses.',
      strong: true
    },
    {
      vias: ['TOPICA'],
      msg: 'Contraindicado em pacientes com hipersensibilidade conhecida a piretróides, piretrinas ou a qualquer componente da formulação.',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade a qualquer piretróide sintético.',
      strong: true
    },
    {
      vias: ['TOPICA'],
      msg: 'Não aplicar sobre mucosas, conjuntiva ocular ou feridas abertas francamente escoriadas e infectadas. Se houver infecção bacteriana secundária intensa (impetinização), avaliar antibioticoterapia concomitante.',
      fonte: 'MS / SBD',
      trecho: 'Evitar contato com olhos e mucosas.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Tratamento de primeira escolha da escabiose (sarna humana - permetrina 5%) e pediculose (piolho e lêndeas da cabeça - permetrina 1%). Droga de eleição e primeira linha para gestantes, lactantes e crianças pequenas onde a ivermectina oral não pode ser utilizada.',
    administracao: 'TOPICA: Na sarna: aplicação corporal noturna do pescoço para baixo (em lactentes incluir cabeça se afetada), deixando agir por 8 a 14h antes de lavar. Na pediculose: aplicação capilar por 10 minutos após lavagem com xampu neutro, seguido de pente fino. EM AMBOS OS CASOS, REAPLICAR APÓS 7 A 10 DIAS.',
    cuidados: 'TRATAMENTO FAMILIAR SIMULTÂNEO: O insucesso terapêutico quase sempre se deve à reinfestação por contatos assintomáticos não tratados ou falta da segunda dose no 7º dia. Roupas usadas devem ser lavadas a 60°C ou ensacadas por 7 dias.',
    ajuste: 'Insuficiência renal e hepática: Absorção percutânea mínima (< 2% da dose tópica); não requer ajuste de dose.'
  }
};

export default permetrina;
