import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { DRUGS } from './data';
import { Farmaco, Apresentacao, Via, ModoUso, UnidadeDose, Paciente, ItemReceita } from './types';
import { num } from './utils/constants';
import { calcularPrescricao, viasDisp, toMg, fromMg, aplica } from './engine/calculator';
import { generatePrescriptionCards } from './engine/prescriptionGenerator';
import { Header } from './components/Header';
import { DrugList } from './components/DrugList';
import { CenterPanel } from './components/CenterPanel';
import { PrescriptionPanel } from './components/PrescriptionPanel';

export const App: React.FC = () => {
  // 1. Paciente
  const [pub, setPub] = useState<'adulto' | 'ped'>('adulto');
  const [peso, setPeso] = useState<string>('');
  const [anos, setAnos] = useState<string>('');
  const [meses, setMeses] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(() => localStorage.getItem('rx_dark') === '1');

  // 2. Fármaco & Busca & Favoritos
  const [search, setSearch] = useState<string>('');
  const [selectedDrug, setSelectedDrug] = useState<Farmaco | null>(() => DRUGS[0] || null);
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('rx_favs') || '[]');
    } catch {
      return [];
    }
  });

  // 3. Parâmetros Clínicos
  const [via, setVia] = useState<Via>('VO');
  const [apresId, setApresId] = useState<string>('');
  const [modo, setModo] = useState<ModoUso>('sn');
  const [n, setN] = useState<number>(4);
  const [dias, setDias] = useState<number>(7);
  const [condText, setCondText] = useState<string>('dor');
  const [doseVal, setDoseVal] = useState<number | null>(null);
  const [unid, setUnid] = useState<UnidadeDose>('mg');
  const [frascoMl, setFrascoMl] = useState<number | null>(null);

  // Parâmetros EV
  const [evDil, setEvDil] = useState<string>('SF 0,9%');
  const [evVol, setEvVol] = useState<number | null>(null);
  const [volManual, setVolManual] = useState<boolean>(false);
  const [evTempo, setEvTempo] = useState<number | null>(null);

  // 4. Receita Montada, Edições e Toast
  const [receita, setReceita] = useState<ItemReceita[]>([]);
  const [receitaGrp, setReceitaGrp] = useState<Record<string, string>>({});
  const [previewCardTexts, setPreviewCardTexts] = useState<Record<number, string>>({});
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2000);
  };

  // Sincronizar dark mode na tag HTML
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('rx_dark', '1');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('rx_dark', '0');
    }
  }, [darkMode]);

  // Sincronizar favoritos
  const toggleFavorite = (id: string) => {
    const updated = favorites.includes(id) ? favorites.filter(x => x !== id) : [...favorites, id];
    setFavorites(updated);
    localStorage.setItem('rx_favs', JSON.stringify(updated));
  };

  // Montar objeto Paciente
  const numPeso = num(peso);
  const numAnos = num(anos);
  const numMeses = num(meses);
  const idadeTotalMeses =
    pub === 'ped'
      ? (numAnos != null ? numAnos * 12 : 0) + (numMeses != null ? numMeses : 0)
      : 216;

  const pacienteObj: Paciente = useMemo(
    () => ({
      pub,
      peso: numPeso,
      anos: numAnos,
      meses: numMeses,
      idadeM: pub === 'ped' && (numAnos != null || numMeses != null) ? idadeTotalMeses : pub === 'adulto' ? 216 : null
    }),
    [pub, numPeso, numAnos, numMeses, idadeTotalMeses]
  );

  // Apresentação atual
  const currentApres = useMemo(() => {
    if (!selectedDrug) return null;
    const aps = selectedDrug.apresentacoes.filter(a => a.vias.includes(via));
    return aps.find(a => a.id === apresId) || aps[0] || selectedDrug.apresentacoes[0] || null;
  }, [selectedDrug, via, apresId]);

  // Definir padrões (equivalente a setDefaults da versão legada)
  const applyDefaults = useCallback(
    (
      targetDrug: Farmaco | null,
      targetVia: Via | null,
      targetApresId: string | null,
      p: Paciente
    ) => {
      if (!targetDrug) return;
      const disp = viasDisp(targetDrug);
      const chosenVia = targetVia && disp.includes(targetVia) ? targetVia : disp[0] || 'VO';
      setVia(chosenVia);

      const aps = targetDrug.apresentacoes.filter(a => a.vias.includes(chosenVia));
      const chosenApres = aps.find(a => a.id === targetApresId) || aps[0] || targetDrug.apresentacoes[0];
      if (chosenApres) {
        setApresId(chosenApres.id);
        setFrascoMl(chosenApres.frascoMl || null);
      }

      const chosenModo: ModoUso = chosenVia === 'EV' || chosenVia === 'IM' ? 'agora' : 'sn';
      setModo(chosenModo);
      setCondText(targetDrug.snPadrao || 'dor');

      const r = chosenApres
        ? targetDrug.regras.find(reg => aplica(reg, p, chosenVia, chosenApres.id) === true)
        : null;

      const newN = r ? (r.intervaloFixo ? 24 / r.intervaloFixo : (r.dosesPadrao || (r.dosesDia || [1, 4])[1])) : 4;
      setN(newN);

      if (r && (r.tipo === 'mg_kg_dose' || r.tipo === 'mg_kg_dia')) {
        if (p.peso) {
          setUnid(r.tipo);
          setDoseVal(r.padrao);
        } else {
          setUnid('mg');
          setDoseVal(null);
        }
      } else if (r) {
        setUnid('mg');
        setDoseVal(r.padrao);
      } else {
        setUnid('mg');
        setDoseVal(null);
      }

      setVolManual(false);
      setEvVol(null);
      setEvTempo(null);
      setEvDil(targetDrug.ev ? targetDrug.ev.diluentes[0] : 'SF 0,9%');
    },
    []
  );

  // Inicialização no primeiro carregamento
  useEffect(() => {
    if (selectedDrug) {
      applyDefaults(selectedDrug, via, apresId, pacienteObj);
    }
  }, []);

  // Handlers
  const handleSelectDrug = (drug: Farmaco) => {
    setSelectedDrug(drug);
    setPreviewCardTexts({});
    applyDefaults(drug, null, null, pacienteObj);
  };

  const handlePubChange = (newPub: 'adulto' | 'ped') => {
    setPub(newPub);
    const updatedPac: Paciente = {
      ...pacienteObj,
      pub: newPub,
      idadeM: newPub === 'adulto' ? 216 : (numAnos != null ? numAnos * 12 : 0) + (numMeses != null ? numMeses : 0)
    };
    if (selectedDrug) {
      applyDefaults(selectedDrug, via, apresId, updatedPac);
    }
  };

  const handlePesoChange = (newPeso: string) => {
    setPeso(newPeso);
    const pVal = num(newPeso);
    if (selectedDrug && doseVal == null) {
      const updatedPac: Paciente = { ...pacienteObj, peso: pVal };
      applyDefaults(selectedDrug, via, apresId, updatedPac);
    }
  };

  const handleAnosChange = (newAnos: string) => {
    setAnos(newAnos);
    const aVal = num(newAnos);
    const mVal = num(meses);
    if (selectedDrug && doseVal == null) {
      const updatedPac: Paciente = {
        ...pacienteObj,
        anos: aVal,
        idadeM: (aVal != null ? aVal * 12 : 0) + (mVal != null ? mVal : 0)
      };
      applyDefaults(selectedDrug, via, apresId, updatedPac);
    }
  };

  const handleMesesChange = (newMeses: string) => {
    setMeses(newMeses);
    const aVal = num(anos);
    const mVal = num(newMeses);
    if (selectedDrug && doseVal == null) {
      const updatedPac: Paciente = {
        ...pacienteObj,
        meses: mVal,
        idadeM: (aVal != null ? aVal * 12 : 0) + (mVal != null ? mVal : 0)
      };
      applyDefaults(selectedDrug, via, apresId, updatedPac);
    }
  };

  const handleViaChange = (newVia: Via) => {
    setVia(newVia);
    setPreviewCardTexts({});
    if (selectedDrug) {
      applyDefaults(selectedDrug, newVia, null, pacienteObj);
    }
  };

  const handleApresChange = (newApresId: string) => {
    setApresId(newApresId);
    setPreviewCardTexts({});
    if (selectedDrug) {
      applyDefaults(selectedDrug, via, newApresId, pacienteObj);
    }
  };

  const handleModoChange = (newModo: ModoUso) => {
    if (newModo === 'agora' && unid === 'mg_kg_dia' && currentApres) {
      const mg = toMg(doseVal, unid, currentApres, pacienteObj.peso, n);
      setModo('agora');
      setUnid('mg_kg_dose');
      const nv = fromMg(mg, 'mg_kg_dose', currentApres, pacienteObj.peso, 1);
      setDoseVal(nv != null ? Math.round(nv * 100) / 100 : null);
    } else {
      setModo(newModo);
    }
    setPreviewCardTexts({});
  };

  const handleUnidChange = (newUnid: UnidadeDose) => {
    if (currentApres) {
      const mg = toMg(doseVal, unid, currentApres, pacienteObj.peso, n);
      setUnid(newUnid);
      const nv = fromMg(mg, newUnid, currentApres, pacienteObj.peso, n);
      setDoseVal(nv != null ? Math.round(nv * 100) / 100 : null);
    } else {
      setUnid(newUnid);
    }
  };

  // Cálculo de Prescrição
  const calcResult = useMemo(() => {
    if (!selectedDrug || !currentApres) {
      return {
        R: [],
        dmin: 1,
        dmax: 4,
        n,
        lo: null,
        hi: null,
        dailyMax: null,
        dailySrc: null,
        mgRaw: null,
        arr: null,
        mg: null,
        ev: null,
        alerts: [],
        notes: [],
        infos: []
      };
    }
    return calcularPrescricao(
      selectedDrug,
      currentApres,
      pacienteObj,
      via,
      modo,
      n,
      doseVal,
      unid,
      evDil,
      evVol,
      volManual,
      evTempo
    );
  }, [selectedDrug, currentApres, pacienteObj, via, modo, n, doseVal, unid, evDil, evVol, volManual, evTempo]);

  // Geração de Cards
  const generatedCards: ItemReceita[] = useMemo(() => {
    if (!selectedDrug || !currentApres || !calcResult.arr) return [];
    return generatePrescriptionCards({
      drug: selectedDrug,
      apres: currentApres,
      calcResult,
      paciente: pacienteObj,
      via,
      modo,
      n,
      condText,
      dias,
      frascoMl,
      evDil
    });
  }, [selectedDrug, currentApres, calcResult, pacienteObj, via, modo, n, condText, dias, frascoMl, evDil]);

  // Cards ativos com possíveis edições manuais
  const activeCards = useMemo(() => {
    return generatedCards.map((c, i) => ({
      ...c,
      texto: previewCardTexts[i] != null ? previewCardTexts[i] : c.texto
    }));
  }, [generatedCards, previewCardTexts]);

  // Funções de formatação de receita
  const grpTxt = useCallback((g: { k: string; items: ItemReceita[] }): string => {
    return g.items
      .map((r, idx) => {
        const lines = r.texto.split('\n');
        const first = lines[0].replace(/^\d+\.\s*/, `${idx + 1}. `);
        return [first, ...lines.slice(1)].join('\n');
      })
      .join('\n\n');
  }, []);

  const getTextoReceita = useCallback((): string => {
    const grps: { k: string; items: ItemReceita[] }[] = [];
    receita.forEach(r => {
      let g = grps.find(x => x.k === r.grupo);
      if (!g) {
        g = { k: r.grupo, items: [] };
        grps.push(g);
      }
      g.items.push(r);
    });
    return grps
      .map(g => {
        const body = receitaGrp[g.k] != null ? receitaGrp[g.k] : grpTxt(g);
        return g.k.toUpperCase() + '\n\n' + body;
      })
      .join('\n\n');
  }, [receita, receitaGrp, grpTxt]);

  // Ações de cópia e receita montada
  const handleCopy = (txt: string) => {
    navigator.clipboard.writeText(txt).then(() => {
      showToast('Copiado');
    });
  };

  const handleAddToReceita = (cardIndex: number) => {
    const c = activeCards[cardIndex];
    if (!c) return;
    setReceita(prev => [...prev, { grupo: c.grupo, sub: c.sub, texto: c.texto }]);
    setReceitaGrp(prev => {
      const next = { ...prev };
      delete next[c.grupo];
      return next;
    });
    showToast('Adicionado à receita');
  };

  const handleUpdateCardTexto = (index: number, newTexto: string) => {
    setPreviewCardTexts(prev => ({ ...prev, [index]: newTexto }));
  };

  const handleUpdateGrpTexto = (grupo: string, newTexto: string) => {
    setReceitaGrp(prev => ({ ...prev, [grupo]: newTexto }));
  };

  const handleDelGrp = (grupo: string) => {
    setReceita(prev => prev.filter(r => r.grupo !== grupo));
    setReceitaGrp(prev => {
      const next = { ...prev };
      delete next[grupo];
      return next;
    });
  };

  const handleClear = () => {
    setReceita([]);
    setReceitaGrp({});
  };

  return (
    <>
      <Header
        pub={pub}
        setPub={handlePubChange}
        peso={peso}
        setPeso={handlePesoChange}
        anos={anos}
        setAnos={handleAnosChange}
        meses={meses}
        setMeses={handleMesesChange}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main className="grid">
        <DrugList
          drugs={DRUGS}
          selectedDrug={selectedDrug}
          onSelectDrug={handleSelectDrug}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          search={search}
          setSearch={setSearch}
        />
        <CenterPanel
          drug={selectedDrug}
          paciente={pacienteObj}
          via={via}
          onViaChange={handleViaChange}
          apres={currentApres}
          onApresChange={handleApresChange}
          modo={modo}
          onModoChange={handleModoChange}
          n={n}
          setN={setN}
          dias={dias}
          setDias={setDias}
          condText={condText}
          setCondText={setCondText}
          frascoMl={frascoMl}
          setFrascoMl={setFrascoMl}
          doseVal={doseVal}
          setDoseVal={setDoseVal}
          unid={unid}
          onUnidChange={handleUnidChange}
          calcResult={calcResult}
          isFav={selectedDrug ? favorites.includes(selectedDrug.id) : false}
          onToggleFav={() => selectedDrug && toggleFavorite(selectedDrug.id)}
          evDil={evDil}
          setEvDil={setEvDil}
          evVol={evVol}
          setEvVol={v => {
            setEvVol(v);
            setVolManual(true);
          }}
          evTempo={evTempo}
          setEvTempo={setEvTempo}
        />
        <PrescriptionPanel
          drug={selectedDrug}
          calcResult={calcResult}
          cards={activeCards}
          receita={receita}
          receitaGrp={receitaGrp}
          onUpdateCardTexto={handleUpdateCardTexto}
          onUpdateGrpTexto={handleUpdateGrpTexto}
          onAddToReceita={handleAddToReceita}
          onDelGrp={handleDelGrp}
          onClear={handleClear}
          onCopy={handleCopy}
          onCopyAll={() => handleCopy(getTextoReceita())}
          grpTxt={grpTxt}
        />
      </main>
      <div className={`toast ${toastMsg ? 'on' : ''}`} id="toast">
        {toastMsg || 'Copiado'}
      </div>
    </>
  );
};
export default App;
