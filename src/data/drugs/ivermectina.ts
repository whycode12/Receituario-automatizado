import { Farmaco } from '../../types';

export const ivermectina: Farmaco = {
  id: 'ivermectina',
  nome: 'Ivermectina',
  categoria: 'Antiparasitários',
  busca: 'ivermectina revectina escabiose sarna piolho pediculose estrongiloidiase filariose parasita acaro verme',
  classe: 'Antiparasitário de amplo espectro da classe das avermectinas (atua nos canais de cloro dependentes de glutamato dos neurônios e células musculares dos invertebrados)',
  dosePratica: 'Adultos e crianças com peso ≥ 15 kg (ou > 5 anos): VO: 200 mcg/kg (0,2 mg/kg) em DOSE ÚNICA (esquema prático por faixas de peso com comprimidos de 6 mg: 15-24 kg = 1/2 cp; 25-35 kg = 1 cp; 36-50 kg = 1 e 1/2 cp; 51-65 kg = 2 cp; 66-79 kg = 2 e 1/2 cp; ≥ 80 kg = 3 cp ou 200 mcg/kg). Escabiose (sarna) e pediculose (piolho): repetir a mesma dose única após 7 a 14 dias para erradicar ovos que eclodiram. Tomar com água, em jejum (1 a 2 horas antes de refeição) para parasitoses luminais/escabiose ou com alimentos ricos em gorduras para absorção sistêmica tecidual. Contraindicado em menores de 15 kg, crianças < 5 anos e gestantes.',
  fontes: { HSL: '05/03/2025', PSZERADO: '2025', BULA: '04/10/2026' },
  snPadrao: 'parasitose ou escabiose/pediculose',
  acessoFonte: 'RENAME 2024: Comprimido 6 mg consta no Componente Básico da Assistência Farmacêutica (CBAF) e Componente Estratégico (CESAF - Filariose e Doenças Negligenciadas) do SUS. Farmácia Popular: Não consta no elenco comercial.',
  apresentacoes: [
    {
      id: 'cp6',
      forma: 'cp',
      nome: 'Comprimido 6 mg (sulcado)',
      comercial: 'Revectina / Genérico',
      conc: '6mg',
      rotulo: 'Ivermectina 6mg comprimido sulcado',
      mg: 6,
      frac: 2,
      vias: ['VO'],
      disp: '1 caixa',
      acesso: { rename: true, fp: false },
      obs: 'Consta na RENAME (CBAF/CESAF). Comprimido sulcado divisível ao meio (3 mg cada metade). Tomar com água. Em escabiose e pediculose, recomenda-se repetir a dose após 7 a 14 dias (HSL / Bula).'
    }
  ],
  regras: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12, pesoMin: 15 },
      vias: ['VO'],
      apres: ['cp6'],
      tipo: 'mg_kg_dose',
      min: 0.15,
      max: 0.2,
      padrao: 0.2,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 1,
      fonte: 'HSL',
      trecho: 'HSL / Bula Revectina: Adultos: 150 a 200 mcg/kg (0,15 a 0,2 mg/kg) em dose única oral (tabela prática: 15-24kg: 1/2 cp; 25-35kg: 1 cp; 36-50kg: 1,5 cp; 51-65kg: 2 cp; 66-79kg: 2,5 cp; ≥ 80kg: 3 cp).'
    },
    {
      pub: 'ped',
      se: { idadeMinAnos: 5, idadeMaxAnos: 11, pesoMin: 15 },
      vias: ['VO'],
      apres: ['cp6'],
      tipo: 'mg_kg_dose',
      min: 0.15,
      max: 0.2,
      padrao: 0.2,
      dosesDia: [1, 1],
      dosesPadrao: 1,
      intervaloFixo: 24,
      duracaoMaxDias: 1,
      fonte: 'HSL',
      trecho: 'HSL / Bula Revectina: Crianças com peso ≥ 15kg (maiores de 5 anos): 150 a 200 mcg/kg em dose oral única (ou conforme tabela de peso por frações de comprimido).'
    }
  ],
  maximos: [
    {
      pub: 'adulto',
      se: { idadeMinAnos: 12 },
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 24,
      fonte: 'HSL',
      trecho: 'HSL / Bula: Dose máxima habitual em dose única: até 24 mg (4 comprimidos de 6mg).'
    },
    {
      pub: 'ped',
      vias: ['VO'],
      tipo: 'mg_dia',
      valor: 12,
      fonte: 'HSL',
      trecho: 'HSL / Bula: Dose máxima pediátrica em dose única: até 12 mg (2 comprimidos de 6mg).'
    }
  ],
  contra: [
    {
      pub: 'ped',
      se: { pesoMax: 15 },
      vias: ['VO'],
      msg: 'Contraindicado para crianças com peso inferior a 15 kg ou menores de 5 anos de idade (segurança e integridade da barreira hematoencefálica não estabelecidas; risco de neurotoxicidade grave por permeabilidade ao SNC).',
      fonte: 'BULA',
      trecho: 'Bula Revectina: A segurança e a eficácia do uso em crianças com menos de 15 kg de peso corporal ou menores de 5 anos de idade não foram estabelecidas.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com meningite ou outras afecções do sistema nervoso central associadas ao comprometimento da barreira hematoencefálica (risco de depressão respiratória central e coma).',
      fonte: 'BULA',
      trecho: 'Bula Revectina: Contraindicado para pacientes com doenças associadas a alteração da barreira hematoencefálica.',
      strong: true
    },
    {
      msg: 'Contraindicado durante a gestação e o período de amamentação (salvo estrita avaliação de risco-benefício em filariose/oncocercose endêmica).',
      fonte: 'BULA',
      trecho: 'Bula Revectina: Não deve ser utilizado por mulheres grávidas sem orientação médica.',
      strong: true
    },
    {
      msg: 'Contraindicado em pacientes com hipersensibilidade documentada à ivermectina ou a qualquer componente da fórmula.',
      fonte: 'BULA',
      trecho: 'Bula Revectina: Hipersensibilidade à ivermectina.'
    }
  ],
  notas: {
    indicacao: 'Tratamento de parasitoses causadas por: ácaro Sarcoptes scabiei (escabiose / sarna humana), Pediculus humanus capitis (pediculose / piolho), Strongyloides stercoralis (estrongiloidíase intestinal), Wuchereria bancrofti (filariose linfática), Onchocerca volvulus (oncocercose / cegueira dos rios), Ascaris lumbricoides, Mansonella ozzardi e Larva migrans cutânea (HSL / Bula).',
    administracao: 'VO: Os comprimidos devem ser ingeridos inteiros ou partidos com água. Para o tratamento da escabiose e pediculose, recomenda-se uma segunda dose única após 7 a 14 dias da primeira tomada para eliminar formas recém-eclodidas dos ovos. Recomenda-se tomar o medicamento de estômago vazio (1 hora antes ou 2 horas após refeições) com água quando o objetivo principal for ação em ectoparasitas/lúmen, ou com refeição rica em gorduras se for necessária absorção sistêmica aumentada (HSL / Bula).',
    cuidados: 'REAÇÃO DE MAZZOTTI: Em pacientes parasitados por Onchocerca volvulus ou microfilárias de Wuchereria, a rápida destruição das microfilárias pode desencadear reação imunoalérgica inflamatória intensa (febre, prurido, urticária, artralgia, taquicardia e hipotensão). NÃO UTILIZAR PARA DENGUE NEM COVID-19: O Ministério da Saúde, ANVISA e sociedades científicas alertam que a ivermectina NÃO possui qualquer eficácia comprovada no tratamento ou prevenção de arboviroses (dengue) ou viroses respiratórias.',
    ajuste: 'Insuficiência renal: Menos de 1% da ivermectina é excretada na urina; não requer ajuste posológico na disfunção renal (HSL). Hemodiálise: Não é dialisável; sem necessidade de dose suplementar pós-diálise. Insuficiência hepática: Sofre metabolismo hepático oxidativo pelo CYP3A4 com eliminação biliar/fecal predominante (99%); usar com cautela em hepatopatias graves (HSL).'
  }
};

export default ivermectina;
