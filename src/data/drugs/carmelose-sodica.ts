/**
 * MEDICAMENTO: Carmelose Sódica 0,5% (Colírio Lubrificante / Lágrima Artificial)
 * CLASSE: Lubrificante Oftálmico / Lágrima Artificial
 * FONTES:
 *   - HSL: Guia Farmacêutico Hospital Sírio-Libanês (Carmelose sódica - Fresh Tears 10mL)
 *   - Guia de Prescrição PSZerado (2025, pág. 149): Tratamento sintomático de irritação conjuntival e conjuntivite viral
 *   - CBO (Conselho Brasileiro de Oftalmologia): Síndrome do olho seco e desconforto ocular
 *   - Bulário ANVISA: Fresh Tears / Lacribell / Genérico
 */

import { Farmaco } from '../../types';

export const carmeloseSodica: Farmaco = {
  id: 'carmelose-sodica',
  nome: 'Carmelose Sódica 0,5% (Colírio Lubrificante)',
  categoria: 'Oftalmologia e Colírios',
  busca: 'carmelose sodica fresh tears lacribell lagrima artificial colirio lubrificante olho seco sensacao de areia ardencia ocular conjuntivite viral',
  classe: 'Lubrificante Oftálmico e Protetor Epitelial Corneano (Lágrima Artificial)',
  dosePratica: 'Olho Seco, Ardência, Sensação de Areia e Conjuntivite Viral (PSZerado 2025 pág. 149 / HSL): Pingar 1 a 2 gotas no(s) olho(s) acometido(s) de 3 a 6 vezes ao dia (a cada 4 ou 6 horas) ou quantas vezes se fizer necessário para alívio do desconforto. Dica clínica consagrada: manter o frasco na porta da geladeira para efeito calmante e descongestionante imediato.',
  fontes: { HSL: '14/02/2017', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'se ardência, ressecamento, sensação de areia ou irritação ocular',
  acessoFonte: 'Padronizada em guias hospitalares (HSL: Fresh Tears colírio frasco 10 mL/15 mL) e disponível livremente nas farmácias comunitárias e ambulatórios do SUS.',
  apresentacoes: [
    {
      id: 'colirio_15ml',
      forma: 'gotas',
      nome: 'Solução oftálmica 0,5% (5 mg/mL - frasco conta-gotas 15 mL)',
      comercial: 'Fresh Tears / Lacribell / Genérico',
      conc: '5 mg/mL (0,5%)',
      rotulo: 'Carmelose sódica 0,5% colírio lubrificante (frasco 15 mL)',
      mg: 1,
      gotasml: 20,
      volml: 15,
      frascoMl: 15,
      vias: ['OFTALMICA'],
      disp: '1 frasco conta-gotas (15 mL)',
      acesso: { rename: true, fp: false },
      instrucao: 'Como usar a lágrima artificial para hidratar e aliviar os olhos:\n1. HIGIENE: Lave bem as mãos com água e sabão antes de usar.\n2. APLICAÇÃO: Incline a cabeça para trás, puxe suavemente a pálpebra de baixo para formar uma bolsinha e pingue 1 a 2 gotas dentro do olho.\n3. CUIDADO COM O BICO: Não encoste a pontinha do frasco nos olhos, nos cílios nem nos dedos, para manter o líquido estéril e livre de contaminações.\n4. DISTRIBUIÇÃO: Pisque suavemente algumas vezes para o líquido se espalhar de forma homogênea por toda a superfície do olho.\n5. FREQUÊNCIA: Pode pingar quantas vezes sentir necessidade de hidratação ou alívio ao longo do dia (geralmente de 3 a 6 vezes ao dia, ou a cada 4 horas se necessário).\n6. DICA PARA CONJUNTIVITE OU OLHOS IRRITADOS: Guardar o frasco na porta da geladeira proporciona uma sensação refrescante muito agradável que diminui a coceira e o ardor nos olhos.\n7. SE USAR OUTROS COLÍRIOS: Aguarde sempre um intervalo de 10 a 15 minutos entre o uso deste lubrificante e qualquer outro colírio medicamentoso.',
      obs: 'RENAME / SUS. Polímero viscoelástico com propriedades mucomiméticas que restaura e estabiliza o filme lacrimal pré-corneano.'
    },
    {
      id: 'colirio_10ml',
      forma: 'gotas',
      nome: 'Solução oftálmica 0,5% (5 mg/mL - frasco conta-gotas 10 mL)',
      comercial: 'Fresh Tears / Genérico',
      conc: '5 mg/mL (0,5%)',
      rotulo: 'Carmelose sódica 0,5% colírio lubrificante (frasco 10 mL)',
      mg: 1,
      gotasml: 20,
      volml: 10,
      frascoMl: 10,
      vias: ['OFTALMICA'],
      disp: '1 frasco conta-gotas (10 mL)',
      acesso: { rename: false, fp: false },
      instrucao: 'Pingar 1 a 2 gotas no(s) olho(s) afetado(s) quantas vezes forem necessárias ao longo do dia para alívio dos sintomas de secura e ardor.',
      obs: 'Apresentação padrão do guia farmacêutico HSL.'
    }
  ],
  regras: [
    // 1. Adultos
    {
      pub: 'adulto',
      vias: ['OFTALMICA'],
      apres: ['colirio_15ml', 'colirio_10ml'],
      tipo: 'mg',
      min: 1,
      max: 2,
      padrao: 1,
      dosesDia: [2, 8],
      dosesPadrao: 4,
      intervaloFixo: 6,
      fonte: 'HSL / PSZERADO / BULA',
      trecho: 'HSL: 1 ou 2 gotas, quantas vezes se fizer necessário. PSZerado pág. 149: Pingar 1 gota no olho acometido a cada 4 horas até melhora dos sintomas.'
    },
    // 2. Pediatria
    {
      pub: 'ped',
      vias: ['OFTALMICA'],
      apres: ['colirio_15ml', 'colirio_10ml'],
      tipo: 'mg',
      min: 1,
      max: 2,
      padrao: 1,
      dosesDia: [2, 6],
      dosesPadrao: 3,
      intervaloFixo: 8,
      fonte: 'SBP / CBO',
      trecho: 'Crianças: Pingar 1 a 2 gotas quando houver ressecamento ocular ou irritação conjuntival viral.'
    }
  ],
  contra: [
    {
      vias: ['OFTALMICA'],
      msg: 'Contraindicado exclusivamente em caso de hipersensibilidade conhecida à carboximetilcelulose (carmelose sódica) ou aos componentes da fórmula.',
      fonte: 'BULA',
      trecho: 'Hipersensibilidade aos componentes da fórmula.',
      strong: true
    }
  ],
  notas: {
    indicacao: 'Alívio sintomático de secura ocular, ardência, irritação, sensação de areia ou corpo estranho nos olhos decorrentes de síndrome do olho seco, exposição a vento, sol, fumaça, ar-condicionado, uso de telas de computador e celular, conjuntivite viral (lubrificação refrigerada) e conforto em usuários de lentes de contato.',
    administracao: 'OFTALMICA: Instilar 1 a 2 gotas no saco conjuntival inferior. Piscar para espalhar uniformemente.',
    cuidados: 'TURVAÇÃO VISUAL PASSAGEIRA: Devido à consistência lubrificante protetora do polímero, pode haver discreto e breve embaçamento da visão por alguns segundos após a aplicação. Orientar o paciente a aguardar a visão clarear antes de dirigir veículos ou operar máquinas.',
    ajuste: 'Insuficiência renal e hepática: Agente inerte tópico sem absorção sistêmica; dispensa ajuste de dose.'
  }
};

export default carmeloseSodica;
