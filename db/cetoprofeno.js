/* =====================================================================
   CETOPROFENO
   Fontes: HSL 05/03/2025 · Einstein Adulto · Einstein Pediátrico
   ===================================================================== */
DB.push({
  id:'cetoprofeno', nome:'Cetoprofeno', busca:'profenid artrinid cetoprofeno', classe:'Anti-inflamatório não esteroidal, antirreumático',
  fontes:{HSL:'05/03/2025', EINP:'', EINA:'', BULA:'03/10/2026'}, snPadrao:'dor',
  acessoFonte:'RENAME 2024 (Ministério da Saúde, PDF oficial): cetoprofeno não consta. Farmácia Popular: não consta no elenco (consulta em 03/10/2026).',
  apresentacoes:[
    {id:'cap50',  forma:'cap', nome:'Cápsula 50 mg', comercial:'Profenid', conc:'50mg', rotulo:'Cetoprofeno 50mg', mg:50, frac:1, vias:['VO'], disp:'1 caixa',
     acesso:{rename:false, fp:false},
     obs:"Ingerir com alimentação, leite ou um copo d'água (HSL)."},
    {id:'ent100', forma:'cp', nome:'Comprimido entérico 100 mg', comercial:'Profenid Entérico', conc:'100mg', rotulo:'Cetoprofeno 100mg entérico', mg:100, frac:1, vias:['VO'], disp:'1 caixa',
     acesso:{rename:false, fp:false},
     obs:'Não partir nem triturar (revestimento gastrorresistente) (HSL).'},
    {id:'cp100', forma:'cp', nome:'Comprimido 100 mg', conc:'100mg', rotulo:'Cetoprofeno 100mg', mg:100, frac:1, vias:['VO'], disp:'1 caixa',
     acesso:{rename:false, fp:false},
     obs:'Dose segue a regra HSL do cetoprofeno oral (100 mg VO 2×/dia ou 50 mg 3×/dia). Conferir a forma farmacêutica do produto dispensado (se for entérico, não partir).'},
    {id:'lp150', forma:'cp', nome:'Comprimido liberação prolongada 150 mg', conc:'150mg', rotulo:'Cetoprofeno 150mg LP', mg:150, frac:0.5, vias:['VO'], disp:'1 caixa',
     acesso:{rename:false, fp:false},
     obs:'⚠ Regra de dose desta apresentação vem da BULA do fabricante — NÃO do HSL nem do Einstein. Engolir inteiro, sem mastigar, com água, durante ou após refeição; só partir ao meio (75 mg) se o comprimido for sulcado, conforme bula.'},
    {id:'fap100', forma:'fap', nome:'Frasco-ampola 100 mg (pó)', comercial:'Artrinid IV', conc:'100mg', rotulo:'Cetoprofeno 100mg', mg:100, reconstMl:5, reconstDil:'SF 0,9%', vias:['EV'], disp:'1 frasco-ampola',
     acesso:{rename:false, fp:false},
     obs:'Após reconstituição/diluição: uso imediato (HSL).'}
  ],
  regras:[
    {pub:'adulto', se:{idadeMinAnos:15}, vias:['VO'], apres:['cap50','cp100'], tipo:'mg', min:50, max:100, padrao:50, dosesDia:[2,3], dosesPadrao:3,
     fonte:'HSL', trecho:'Profenid: 100mg, VO, 2 vezes/dia ou 50mg 3 vezes/dia.'},
    {pub:'adulto', se:{idadeMinAnos:15}, vias:['VO'], apres:['ent100'], tipo:'mg', min:100, max:100, padrao:100, dosesDia:[2,2], dosesPadrao:2,
     fonte:'HSL', trecho:'Profenid Entérico: Dose usual 200mg/dia, VO, fracionados em 2 doses.'},
    {pub:'adulto', se:{idadeMinAnos:18}, vias:['VO'], apres:['lp150'], tipo:'mg', min:75, max:150, padrao:150, dosesDia:[1,2], dosesPadrao:1,
     fonte:'BULA', trecho:'Bula do cetoprofeno 150 mg comprimido de liberação prolongada (posologia, conforme transcrições da bula em Mevo Farma, Qualidoc e Consulta Remédios; texto original no Bulário ANVISA): manutenção 150 mg ao dia em dose única; ataque até 300 mg/dia divididos em 2 doses; enxaqueca: ½ comprimido (75 mg), nova dose só com intervalo mínimo de 12 h; dose máxima 300 mg/dia. Segurança em crianças não estabelecida.'},
    {pub:'adulto', se:{idadeMinAnos:15}, vias:['EV'], tipo:'mg_dia', min:100, max:300, padrao:100, dosesDia:[1,3], dosesPadrao:2, duracaoMaxDias:2,
     fonte:'HSL', trecho:'Injetável: 100-300mg/dia, EV. O tratamento deve durar no máximo 48h.'}
  ],
  maximos:[
    {pub:'adulto', se:{idadeMinAnos:15}, tipo:'mg_dia', valor:300, fonte:'HSL', trecho:'Dose Máxima: 300mg/dia.'}
  ],
  contra:[
    {pub:'ped', se:{idadeMaxAnos:15}, msg:'Não deve ser administrado em menores de 15 anos.', fonte:'HSL', trecho:'Pediatria: Não deve ser administrado em menores de 15 anos.'}
  ],
  ev:{
    diluentes:['SF 0,9%','SG 5%'],
    concMax:1, volMin:100,
    volOpcoes:[100,150,250],
    velMaxMgMin:null,
    tempo:{
      adulto:{min:20, max:60, padrao:30, txt:'Mínimo 20 min (HSL; padrão HSL 30 min). Einstein Adulto: 30 min. Einstein Ped: 20–60 min.'}
    },
    fonteTxt:'HSL: reconstituir cada frasco com 5 mL de SF; diluir em 100–150 mL de SF 0,9% ou SG 5% (padrão HSL 250 mL – protocolo risco de flebite); infundir em no mínimo 20 min (padrão HSL 30 min). Einstein Adulto: SF/SG5% 100–150 mL, conc. máx. 1 mg/mL, 30 min. Einstein Ped: conc. usual 0,66 mg/mL, máx. 1 mg/mL, 20–60 min.'
  },
  conflitos:[
    {vias:['EV'], txt:'Volume de diluição: HSL/Einstein 100–150 mL × padrão institucional HSL 250 mL. Ambos disponíveis; concentração máx. 1 mg/mL (Einstein) aplicada.'}
  ],
  notas:{
    indicacao:'Inflamações e dores decorrentes de processos reumáticos, traumatismos e dores em geral.',
    administracao:'Profenid 50 mg: ingerir com alimentação, leite ou água. Entérico: não partir/triturar. EV: infundir em no mínimo 20 min.',
    cuidados:'Tratamento injetável: no máximo 48 h.',
    ajuste:'Insuficiência renal: ClCr < 25 mL/min → máx. 100 mg/dia VO; ClCr > 25 mL/min → máx. 150 mg/dia VO. Insuficiência hepática: máx. 100 mg/dia.'
  }
});
