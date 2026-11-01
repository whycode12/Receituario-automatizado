import { Farmaco } from '../../types';

export const secnidazol: Farmaco = {
  id: 'secnidazol',
  nome: 'Secnidazol',
  categoria: 'Antiparasitários e Amebicidas',
  busca: 'secnidazol secnid amebíase ameba giardiase giardia tricomoníase protozoario diarreia dose unica antiparasitario nitroimidazol',
  classe: 'Antiparasitário e Amebicida Sintético da Família dos 5-Nitroimidazóis',
  dosePratica: 'Amebíase Intestinal / Giardíase / Tricomoníase no Adulto: 2000 mg (2 comprimidos de 1000 mg ou 4 comprimidos de 500 mg) VO em DOSE ÚNICA ao final de uma refeição. Vaginose Bacteriana: 2 g VO em dose única.',
  fontes: { HSL: '14/06/2022', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'diarreia por protozoários ou amebíase',
  acessoFonte: 'Disponível em comprimidos de 1000 mg (1 g) e 500 mg sob o nome comercial Secnid e genéricos. RENAME 2024: Não consta na relação nacional básica.',
  apresentacoes: [
    {
      id: 'cp1000',
      forma: 'cp',
      nome: 'Comprimido 1000 mg (1 g)',
      comercial: 'Secnid / Genérico',
      conc: '1000mg',
      rotulo: 'Secnidazol 1000mg comprimido',
      mg: 1000,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 2 comprimidos',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar os 2 comprimidos inteiros de uma só vez com um copo de água ao final de uma refeição. Não mastigar. PROIBIDO consumir qualquer bebida alcoólica durante o uso e por até 72 horas após (risco de efeito dissulfiram/antabuse grave com palpitações, vômitos e calor intenso).',
      obs: 'Apresentação de dose única (2 g total).'
    },
    {
      id: 'cp500',
      forma: 'cp',
      nome: 'Comprimido 500 mg',
      comercial: 'Secnid / Genérico',
      conc: '500mg',
      rotulo: 'Secnidazol 500mg comprimido',
      mg: 500,
      frac: 1,
      vias: ['VO'],
      disp: '1 caixa com 4 comprimidos',
      acesso: { rename: false, fp: false },
      instrucao: 'Tomar os 4 comprimidos juntos ao final da refeição.',
      obs: 'Alternativa fracionada em 500 mg.'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 15 },
      vias: ['VO'],
      tipo: 'mg',
      min: 1000,
      max: 2000,
      padrao: 2000,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 1,
      fonte: 'HSL',
      trecho: 'Adultos: 2000 mg (2 g) VO em dose única tomada ao final de uma refeição.'
    },
    {
      pub: 'ped',
      se: { idadeMinMeses: 12 },
      vias: ['VO'],
      tipo: 'mg_kg_dose',
      min: 30,
      max: 30,
      padrao: 30,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 1,
      fonte: 'HSL',
      trecho: 'Pediatria: 30 mg/kg VO em dose única com alimento (máximo de 2000 mg/dose).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 2000,
      fonte: 'HSL',
      trecho: 'Dose máxima diária de secnidazol: 2000 mg em tomada única.'
    }
  ],
  contra: [
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade a derivados imidazólicos, primeiro trimestre de gestação e lactação. Uso estritamente proibido concomitante com álcool (reação tipo dissulfiram severa com rubor, hipotensão, náuseas e vômitos).',
      fonte: 'BULA',
      trecho: 'Inibição do metabolismo do acetaldeído provoca intoxicação alcoólica aguda severa.',
      strong: false
    }
  ],
  notas: {
    indicacao: 'Giardíase intestinal (Giardia lamblia), amebíase intestinal e hepática (Entamoeba histolytica), tricomoníase urogenital (Trichomonas vaginalis) e vaginose bacteriana.',
    administracao: 'Tomar com água ao final de uma refeição importante para minimizar náuseas e desconforto gástrico.',
    cuidados: 'Na tricomoníase, o parceiro sexual deve ser tratado concomitantemente com a mesma dose para prevenir reinfecção.',
    ajuste: 'Não necessita de ajuste posológico em disfunção renal leve a moderada.'
  }
};
export default secnidazol;
