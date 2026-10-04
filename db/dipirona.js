/* =====================================================================
   DIPIRONA
   Fontes: HSL 05/05/2025 · Einstein Adulto · Einstein Pediátrico
   ===================================================================== */
DB.push({
  id:'dipirona', nome:'Dipirona', busca:'metamizol novalgina dipirona sodica', classe:'Analgésico e antipirético',
  fontes:{HSL:'05/05/2025', EINP:'', EINA:''}, snPadrao:'dor ou febre',
  acessoFonte:'RENAME 2024 (Ministério da Saúde, PDF oficial, p. 98, Componente Básico): dipirona comprimido 500 mg, solução oral 500 mg/mL e solução injetável 500 mg/mL. Farmácia Popular: não consta no elenco (consulta em 03/10/2026).',
  apresentacoes:[
    {id:'cp1g', forma:'cp',  nome:'Comprimido 1 g', comercial:'Novalgina', conc:'1g', rotulo:'Dipirona 1g', mg:1000, frac:0.5, vias:['VO'], disp:'1 caixa',
     acesso:{rename:false, fp:false},
     obs:'Fracionamento em ½ comprimido: confirmar presença de sulco (informação não consta nas fontes).'},
    {id:'cp500', forma:'cp', nome:'Comprimido 500 mg', conc:'500mg', rotulo:'Dipirona 500mg', mg:500, frac:1, vias:['VO'], disp:'1 caixa',
     acesso:{rename:true, fp:false}},
    {id:'gts',  forma:'gotas', nome:'Gotas 500 mg/mL (20 gotas/mL)', comercial:'Novalgina', conc:'500mg/mL', rotulo:'Dipirona 500mg/mL gotas', mgml:500, gotasml:20, frascoMl:20, vias:['VO'], disp:'1 frasco',
     acesso:{rename:true, fp:false}},
    {id:'sol',  forma:'sol', nome:'Solução oral 50 mg/mL', comercial:'Novalgina', conc:'50mg/mL', rotulo:'Dipirona 50mg/mL solução oral', mgml:50, frascoMl:100, vias:['VO'], disp:'1 frasco',
     acesso:{rename:false, fp:false},
     obs:'Solução oral contém tartrazina; em diabéticos preferir comprimidos ou gotas (HSL).'},
    {id:'amp',  forma:'amp', nome:'Ampola 500 mg/mL – 2 mL', conc:'500mg/mL', rotulo:'Dipirona 500mg/mL', mgml:500, volml:2, vias:['EV','IM'], disp:'1 ampola',
     acesso:{rename:true, fp:false}},
    {id:'sup',  forma:'sup', nome:'Supositório infantil 300 mg', comercial:'Novalgina', conc:'300mg', rotulo:'Dipirona 300mg supositório infantil', mg:300, frac:1, vias:['VR'], disp:'1 caixa',
     acesso:{rename:false, fp:false}}
  ],
  regras:[
    {pub:'adulto', se:{ou:[{idadeMinAnos:15},{pesoMin:31}]}, vias:['VO'], tipo:'mg', min:500, max:1000, padrao:1000, dosesDia:[1,4],
     fonte:'HSL', trecho:'Adulto e adolescentes acima de 15 anos (> 31kg) — VO: 500 - 1000 mg até 4 vezes/dia.'},
    {pub:'adulto', se:{ou:[{idadeMinAnos:15},{pesoMin:31}]}, vias:['EV','IM'], tipo:'mg', min:1000, max:2500, padrao:1000, dosesDia:[1,4],
     fonte:'HSL', trecho:'Adulto e adolescentes acima de 15 anos (> 31kg) — EV ou IM: 1000 - 2500 mg até 4 vezes/dia.'},
    {pub:'ped', se:{idadeMinMeses:3, pesoMax:31}, vias:['VO'], tipo:'mg_kg_dose', min:10, max:15, padrao:15, dosesDia:[1,4],
     fonte:'HSL', trecho:'Pediatria (acima de 03 meses) — VO: Até 30 kg: 10 a 15mg/kg até 4 vezes/dia.'},
    {pub:'ped', se:{idadeMinMeses:3}, vias:['EV'], tipo:'mg_kg_dose', min:20, max:25, padrao:20, dosesDia:[1,4], intervaloFixo:6,
     fonte:'HSL', trecho:'Pediatria (acima de 03 meses) — EV: 20-25 mg/kg/dose, a cada 6 horas.'},
    {pub:'ped', se:{idadeMinMeses:3}, vias:['VR'], tipo:'mg', min:300, max:300, padrao:300, dosesDia:[1,4],
     fonte:'HSL', trecho:'Pediatria (acima de 03 meses) — VR: 300 mg, até 4 vezes/dia.'}
  ],
  maximos:[
    {pub:'adulto', se:{ou:[{idadeMinAnos:15},{pesoMin:31}]}, tipo:'mg_dia', valor:5000, fonte:'HSL', trecho:'Dose Máxima — Adultos: 5000 mg/dia.'},
    {pub:'ped', tipo:'mg_dia_peso', faixas:[[5,9,500],[9,16,1000],[16,24,1500],[24,31,2000],[31,46,3000],[46,54,3500]],
     fonte:'HSL', trecho:'Dose Máxima — Pediatria: 05 a 08 kg: 500 mg/dia; 09 a 15 kg: 1000 mg/dia; 16 a 23 kg: 1500 mg/dia; 24 a 30 kg: 2000 mg/dia; 31 a 45 kg: 3000 mg/dia; 46 a 53 kg: 3500 mg/dia.'}
  ],
  contra:[
    {pub:'ped', se:{idadeMaxMeses:3}, msg:'Não administrar em crianças menores de 3 meses.', fonte:'HSL',
     trecho:'Não administrar o medicamento em crianças menores de 3 meses de idade ou pesando menos de 5kg.'},
    {pub:'ped', se:{pesoMax:5}, msg:'Não administrar em crianças com menos de 5 kg.', fonte:'HSL',
     trecho:'Não administrar o medicamento em crianças menores de 3 meses de idade ou pesando menos de 5kg.'},
    {pub:'ped', vias:['EV'], se:{ou:[{idadeMaxMeses:12},{pesoMax:9}]}, msg:'Não administrar EV em crianças entre 3 e 11 meses ou com menos de 9 kg.', fonte:'HSL',
     trecho:'Não se deve administrar o medicamento por via intravenosa em crianças com idade entre 3 e 11 meses ou pesando menos de 9kg.'}
  ],
  ev:{
    diluentes:['SF 0,9%','SG 5%'],
    concMax:50, concUsualPed:25,
    volPadraoAdulto:[[1000,20],[2500,50]],
    volOpcoes:[5,10,20,50,100],
    velMaxMgMin:500,
    tempo:{
      adulto:{min:null, max:null, padrao:15, txt:'Velocidade máx. 500 mg/min (HSL). Padrão HSL: 2 g em 15 min.'},
      ped:{min:10, max:20, padrao:10, txt:'Infusão 10–20 min (Einstein Ped). Velocidade máx. 500 mg/min (HSL).'}
    },
    fonteTxt:'HSL: diluir cada ampola com 20 mL de SF ou SG; conc. máx. 50 mg/mL; padrão SF 20 mL (até 1 g) e SF 50 mL (até 2,5 g). Einstein Ped: SF/SG5%, conc. usual 25 mg/mL, máx. 50 mg/mL, IV direto < 1 mL/min, infusão 10–20 min. Einstein Adulto: SF/SG5%, IV direto 1 mL/min.'
  },
  conflitos:[
    {vias:['EV'], txt:'Concentração máxima: Einstein Adulto 500 mg/mL × HSL e Einstein Ped 50 mg/mL → considerado 50 mg/mL (mais restritivo).'}
  ],
  notas:{
    indicacao:'Manifestações dolorosas e febre.',
    administracao:'VO com ou sem alimentos. EV: infusão máxima de 500 mg/min. Efeito em 30–60 min, duração ~4 h. Crianças < 12 anos não devem usar supositórios de adulto.',
    cuidados:'Dipirona injetável pode causar hipotensão. Supositório não deve ser usado em crianças em uso de clorpromazina (risco de hipotermia grave). Solução oral contém tartrazina (risco de reação alérgica, principalmente em alérgicos ao AAS).',
    ajuste:'Insuficiência renal e hepática: desaconselha-se altas doses; para tratamento a curto prazo não é necessária redução.'
  }
});
