import React, { useState, useEffect } from 'react';
import { DRUGS } from './data';
import { Farmaco, Apresentacao, Via, ModoUso, UnidadeDose, Paciente, ItemReceita } from './types';
import { num, VIA_GRUPO, VIA_EXT, leader, fmt, fmtMg } from './utils/constants';
import { calcularPrescricao, viasDisp, mgml } from './engine/calculator';
import { Header } from './components/Header';
import { DrugList } from './components/DrugList';
import { CenterPanel } from './components/CenterPanel';
import { PrescriptionPanel } from './components/PrescriptionPanel';

export const App: React.FC = () => {
  // 1. Estado do Paciente
  const [pub, setPub] = useState<'adulto' | 'ped'>('adulto');
  const [peso, setPeso] = useState<string>('');
  const [anos, setAnos] = useState<string>('');
  const [meses, setMeses] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(() => localStorage.getItem('rx_dark') === '1');

  // 2. Fármaco Selecionado & Busca
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
  const [condText, setCondText] = useState<string>('dor ou febre');
  const [doseVal, setDoseVal] = useState<number | null>(null);
  const [unid, setUnid] = useState<UnidadeDose>('mg');
  const [frascoMl, setFrascoMl] = useState<number | null>(null);

  // Parâmetros EV
  const [evDil, setEvDil] = useState<string>('SF 0,9%');
  const [evVol, setEvVol] = useState<number | null>(null);
  const [evTempo, setEvTempo] = useState<number | null>(null);

  // 4. Receita Montada & Toast
  const [receitaMontada, setReceitaMontada] = useState<ItemReceita[]>([]);
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
    const updated = favorites.includes(id)
      ? favorites.filter(x => x !== id)
      : [...favorites, id];
    setFavorites(updated);
    localStorage.setItem('rx_favs', JSON.stringify(updated));
  };

  // Atualizar apresentação ao trocar fármaco ou via
  useEffect(() => {
    if (!selectedDrug) return;
    const disp = viasDisp(selectedDrug);
    const activeVia = disp.includes(via) ? via : disp[0] || 'VO';
    setVia(activeVia);

    const aps = selectedDrug.apresentacoes.filter(a => a.vias.includes(activeVia));
    const activeApres = aps[0];
    if (activeApres) {
      setApresId(activeApres.id);
      setFrascoMl(activeApres.frascoMl || null);
    }
    setCondText(selectedDrug.snPadrao || 'dor');
    setModo(activeVia === 'EV' || activeVia === 'IM' ? 'agora' : 'sn');
  }, [selectedDrug]);

  const currentApres =
    selectedDrug?.apresentacoes.find(a => a.id === apresId) ||
    selectedDrug?.apresentacoes[0];

  // Objeto Paciente
  const numPeso = num(peso);
  const numAnos = num(anos);
  const numMeses = num(meses);
  const idadeTotalMeses =
    pub === 'ped'
      ? (numAnos != null ? numAnos * 12 : 0) + (numMeses != null ? numMeses : 0)
      : 216; // 18 anos padrão

  const pacienteObj: Paciente = {
    pub,
    peso: numPeso,
    anos: numAnos,
    meses: numMeses,
    idadeM: pub === 'ped' && (numAnos != null || numMeses != null) ? idadeTotalMeses : pub === 'adulto' ? 216 : null
  };

  // Cálculo
  const calcResult =
    selectedDrug && currentApres
      ? calcularPrescricao(
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
          false,
          evTempo
        )
      : {
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

  // Definir dose padrão na troca de regra/apresentação se nula
  useEffect(() => {
    if (!selectedDrug || !currentApres) return;
    const r = calcResult.R[0];
    if (r) {
      if ((r.tipo === 'mg_kg_dose' || r.tipo === 'mg_kg_dia') && pacienteObj.peso) {
        setUnid(r.tipo);
        setDoseVal(r.padrao);
      } else {
        setUnid('mg');
        setDoseVal(r.padrao);
      }
    }
  }, [selectedDrug?.id, currentApres?.id, via]);

  // Geração de Prévia dos Cards de Prescrição
  const previewCards: ItemReceita[] = [];
  if (selectedDrug && currentApres && calcResult.arr) {
    const a = calcResult.arr;
    const h = 24 / n;
    const posExt =
      modo === 'agora'
        ? 'agora'
        : modo === 'sn'
        ? n === 1
          ? `até 1 vez ao dia, se ${condText}`
          : `até de ${h} em ${h} horas, se ${condText}`
        : n === 1
        ? `1 vez ao dia, por ${dias} dias`
        : `de ${h} em ${h} horas, por ${dias} dias`;

    const posAbr =
      modo === 'agora'
        ? 'agora'
        : modo === 'sn'
        ? n === 1
          ? `até 1x/dia, se ${condText}`
          : `até de ${h}/${h}h, se ${condText}`
        : n === 1
        ? `1x/dia, por ${dias} dias`
        : `de ${h}/${h}h, por ${dias} dias`;

    const nomeInt = `${selectedDrug.nome} (${currentApres.conc})`;

    if (via === 'VO' || via === 'VR' || via === 'NASAL') {
      const g = VIA_GRUPO[via];
      const rot =
        typeof currentApres.rotulo === 'function'
          ? currentApres.rotulo(pacienteObj, a)
          : currentApres.rotulo;
      const verbo = via === 'VO' ? 'Tomar' : via === 'VR' ? 'Aplicar' : 'Instilar';

      let disp =
        typeof currentApres.disp === 'function'
          ? currentApres.disp(pacienteObj, a)
          : currentApres.disp;

      if (modo === 'continuo' && (currentApres.frascoMl || frascoMl) && a.ml != null) {
        const fMl = frascoMl || currentApres.frascoMl || 150;
        const mlDia = a.ml * n;
        const mlTotal = mlDia * dias;
        const qtdFrascos = Math.max(1, Math.ceil(mlTotal / fMl));
        disp = `${qtdFrascos} frasco${qtdFrascos > 1 ? 's' : ''}`;
      }

      const rawInstrucao =
        typeof currentApres.instrucao === 'function'
          ? currentApres.instrucao(pacienteObj, a)
          : currentApres.instrucao;
      const extra = rawInstrucao ? `\n   ${rawInstrucao}` : '';
      const doseTxt = a.txt + (via === 'NASAL' ? ' em cada narina' : '');

      previewCards.push({
        grupo: g,
        sub: 'Receita Médica',
        texto: `${leader('1. ' + rot, disp)}\n${verbo} ${doseTxt}, ${VIA_EXT[via]}, ${posExt}.${extra}`
      });

      previewCards.push({
        grupo: g,
        sub: 'Prescrição Interna',
        texto: `${leader('1. ' + nomeInt, a.txt)}\nAdministrar ${doseTxt}${
          currentApres.mg ? ` (${fmtMg(a.mg)})` : ''
        }, ${via}, ${posAbr}.`
      });
    } else if (via === 'IM') {
      const dose = a.whole ? a.txt : `${fmt(a.ml)} mL (${fmtMg(a.mg)})`;
      previewCards.push({
        grupo: VIA_GRUPO.IM,
        sub: '',
        texto: `${leader('1. ' + nomeInt, dose)}\nAdministrar ${dose}, IM, sem diluição, ${posAbr}.`
      });
    } else if (via === 'EV' && calcResult.ev) {
      const E = calcResult.ev;
      const qtdEV = `${fmt(E.vol)} mL (${E.seringa ? 'seringa' : 'bolsa'})`;
      let pre = '';
      if (currentApres.forma === 'fap') {
        const k = Math.ceil((a.mg / (currentApres.mg || 1)) - 1e-9);
        pre = `Reconstituir ${k} frasco${k > 1 ? 's' : ''}-ampola com ${currentApres.reconstMl} mL de ${currentApres.reconstDil}${k > 1 ? ' cada' : ''}. `;
      }
      previewCards.push({
        grupo: VIA_GRUPO.EV,
        sub: '',
        texto: `${leader('1. ' + nomeInt, qtdEV)}\n${pre}Diluir em ${E.vol} mL de ${evDil}. Infundir em ${E.t} minutos (${E.gtt} gotas/min).`
      });
    }
  }

  // Ações de cópia
  const copyToClipboard = (txt: string) => {
    navigator.clipboard.writeText(txt);
    showToast('Copiado para a área de transferência');
  };

  const copyAllReceita = () => {
    const gruposMap = new Map<string, string[]>();
    receitaMontada.forEach(item => {
      if (!gruposMap.has(item.grupo)) {
        gruposMap.set(item.grupo, []);
      }
      gruposMap.get(item.grupo)!.push(item.texto);
    });

    const fullBlocks: string[] = [];
    gruposMap.forEach((textos, grupoNome) => {
      const renumbered = textos.map((t, idx) => t.replace(/^\d+\.\s*/, `${idx + 1}. `));
      fullBlocks.push(`${grupoNome.toUpperCase()}\n\n${renumbered.join('\n\n')}`);
    });

    copyToClipboard(fullBlocks.join('\n\n\n'));
  };

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-notion-darkBg font-sans text-gray-900 dark:text-gray-100 transition-colors">
      {/* Toast flutuante */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg shadow-xl text-xs font-semibold animate-fade-in">
          {toastMsg}
        </div>
      )}

      {/* Header com perfil do paciente */}
      <Header
        pub={pub}
        setPub={setPub}
        peso={peso}
        setPeso={setPeso}
        anos={anos}
        setAnos={setAnos}
        meses={meses}
        setMeses={setMeses}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Corpo com 3 colunas */}
      <div className="flex flex-1 overflow-hidden">
        {/* Coluna 1: Lista de Fármacos */}
        <DrugList
          drugs={DRUGS}
          selectedDrug={selectedDrug}
          onSelectDrug={d => setSelectedDrug(d)}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          search={search}
          setSearch={setSearch}
        />

        {/* Coluna 2: Centro (Configurações da Dose e Cálculos) */}
        {selectedDrug && currentApres ? (
          <CenterPanel
            drug={selectedDrug}
            paciente={pacienteObj}
            via={via}
            setVia={setVia}
            apres={currentApres}
            setApresId={setApresId}
            modo={modo}
            setModo={setModo}
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
            setUnid={setUnid}
            calcResult={calcResult}
            isFav={favorites.includes(selectedDrug.id)}
            onToggleFav={() => toggleFavorite(selectedDrug.id)}
            evDil={evDil}
            setEvDil={setEvDil}
            evVol={evVol}
            setEvVol={setEvVol}
            evTempo={evTempo}
            setEvTempo={setEvTempo}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center text-xs text-gray-400">
            Nenhum fármaco selecionado
          </div>
        )}

        {/* Coluna 3: Prescrição Montada e Prévia */}
        <PrescriptionPanel
          previewCards={previewCards}
          receitaMontada={receitaMontada}
          onAddToReceita={item => {
            setReceitaMontada([...receitaMontada, item]);
            showToast('Adicionado à receita');
          }}
          onRemoveFromReceita={idx => {
            setReceitaMontada(receitaMontada.filter((_, i) => i !== idx));
          }}
          onClearReceita={() => setReceitaMontada([])}
          onUpdateReceitaTexto={(idx, newTxt) => {
            const up = [...receitaMontada];
            up[idx].texto = newTxt;
            setReceitaMontada(up);
          }}
          onCopyAll={copyAllReceita}
          onCopyText={copyToClipboard}
        />
      </div>
    </div>
  );
};

export default App;
