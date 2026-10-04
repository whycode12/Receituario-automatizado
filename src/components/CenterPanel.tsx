import React, { useRef, useState, useEffect } from 'react';
import { Star, AlertTriangle, CheckCircle2, ChevronDown, Info } from 'lucide-react';
import { Farmaco, Apresentacao, Via, ModoUso, UnidadeDose, ResultadoCalculo, Paciente } from '../types';
import { UNID_LBL, fmt, fmtMg, fonteNome } from '../utils/constants';
import { unidades, unidLbl, fromMg, mgml } from '../engine/calculator';

interface CenterPanelProps {
  drug: Farmaco;
  paciente: Paciente;
  via: Via;
  setVia: (v: Via) => void;
  apres: Apresentacao;
  setApresId: (id: string) => void;
  modo: ModoUso;
  setModo: (m: ModoUso) => void;
  n: number;
  setN: (n: number) => void;
  dias: number;
  setDias: (d: number) => void;
  condText: string;
  setCondText: (c: string) => void;
  frascoMl: number | null;
  setFrascoMl: (f: number | null) => void;
  doseVal: number | null;
  setDoseVal: (v: number | null) => void;
  unid: UnidadeDose;
  setUnid: (u: UnidadeDose) => void;
  calcResult: ResultadoCalculo;
  isFav: boolean;
  onToggleFav: () => void;
  // EV
  evDil: string;
  setEvDil: (d: string) => void;
  evVol: number | null;
  setEvVol: (v: number | null) => void;
  evTempo: number | null;
  setEvTempo: (t: number | null) => void;
}

export const CenterPanel: React.FC<CenterPanelProps> = ({
  drug,
  paciente,
  via,
  setVia,
  apres,
  setApresId,
  modo,
  setModo,
  n,
  setN,
  dias,
  setDias,
  condText,
  setCondText,
  frascoMl,
  setFrascoMl,
  doseVal,
  setDoseVal,
  unid,
  setUnid,
  calcResult,
  isFav,
  onToggleFav,
  evDil,
  setEvDil,
  evVol,
  setEvVol,
  evTempo,
  setEvTempo
}) => {
  const [acessoOpen, setAcessoOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);

  // Vias disponíveis para o fármaco selecionado
  const dispVias = (['VO', 'EV', 'IM', 'VR', 'NASAL'] as Via[]).filter(v =>
    drug.apresentacoes.some(a => a.vias.includes(v))
  );

  const curApresList = drug.apresentacoes.filter(a => a.vias.includes(via));
  const us = unidades(apres, paciente.peso, modo);

  // Calcular limites para a barra de dose
  const uLo = calcResult.lo != null ? fromMg(calcResult.lo, unid, apres, paciente.peso, n) : null;
  const uHi = calcResult.hi != null ? fromMg(calcResult.hi, unid, apres, paciente.peso, n) : null;
  const curVal = doseVal || 0;
  const top = uHi != null ? Math.max(uHi * 1.5, curVal) * 1.05 || 1 : Math.max(100, curVal * 1.5);
  const pc = (v: number) => Math.max(0, Math.min(100, (v / top) * 100));

  const isDoseBad =
    doseVal != null &&
    calcResult.mg != null &&
    ((calcResult.hi != null && calcResult.mg > calcResult.hi * 1.0001) ||
      (calcResult.lo != null && calcResult.mg < calcResult.lo * 0.9999));

  // Arrastar barra com snap de números inteiros
  const handleBarInteraction = (clientX: number) => {
    if (!barRef.current || !top) return;
    const rect = barRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const rawInt = Math.round(pct * top);
    setDoseVal(rawInt);
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (dragging) handleBarInteraction(e.clientX);
    };
    const onUp = () => setDragging(false);
    if (dragging) {
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [dragging, top]);

  return (
    <div className="flex-1 overflow-y-auto p-6 max-w-2xl bg-white dark:bg-notion-darkBg">
      {/* Título do Fármaco & Selos SUS */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{drug.nome}</h2>
            <button
              onClick={onToggleFav}
              className={`p-1 rounded transition-colors ${
                isFav ? 'text-amber-400' : 'text-gray-300 dark:text-gray-600 hover:text-amber-400'
              }`}
            >
              <Star className={`w-4 h-4 ${isFav ? 'fill-amber-400' : ''}`} />
            </button>

            {/* Selos de Acesso RENAME / Farmácia Popular */}
            {apres.acesso && (
              <div className="relative inline-flex items-center ml-1">
                <button
                  onClick={() => setAcessoOpen(!acessoOpen)}
                  className="inline-flex gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold border transition-all hover:bg-gray-50 dark:hover:bg-notion-darkCard border-gray-200 dark:border-notion-darkBorder"
                >
                  <span className={apres.acesso.rename ? 'text-emerald-600 font-bold' : 'text-gray-400 line-through'}>
                    RENAME
                  </span>
                  <span className={apres.acesso.fp ? 'text-emerald-600 font-bold' : 'text-gray-400 line-through'}>
                    F. POPULAR
                  </span>
                </button>

                {/* Popover com detalhamento de apresentações */}
                {acessoOpen && (
                  <div className="absolute left-0 top-full mt-2 w-80 p-3 bg-white dark:bg-notion-darkCard border border-gray-200 dark:border-notion-darkBorder rounded-xl shadow-xl z-30 text-xs">
                    <div className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Disponibilidade no SUS por apresentação
                    </div>
                    <div className="space-y-1.5">
                      {drug.apresentacoes
                        .filter(a => a.acesso)
                        .map(a => (
                          <div
                            key={a.id}
                            className={`p-1.5 rounded-md flex items-center justify-between gap-2 ${
                              a.id === apres.id
                                ? 'bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800'
                                : 'hover:bg-gray-50 dark:hover:bg-notion-darkHover'
                            }`}
                          >
                            <span className="truncate text-gray-800 dark:text-gray-200 font-medium">
                              {a.nome}
                            </span>
                            <div className="flex items-center gap-1.5 shrink-0 text-[10px]">
                              <span className={a.acesso?.rename ? 'text-emerald-600 font-bold' : 'text-gray-400'}>
                                {a.acesso?.rename ? '✓' : '✗'} RENAME
                              </span>
                              <span className={a.acesso?.fp ? 'text-emerald-600 font-bold' : 'text-gray-400'}>
                                {a.acesso?.fp ? '✓' : '✗'} FP
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className="mt-3 pt-2 border-t border-gray-100 dark:border-notion-darkBorder text-[11px] text-gray-500 dark:text-notion-darkMuted leading-relaxed">
                      {drug.acessoFonte || 'A disponibilidade final depende da REMUME de cada município.'}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <p className="text-xs text-gray-500 dark:text-notion-darkMuted mt-0.5">{drug.classe}</p>
        </div>
      </div>

      {/* Formulário Clínico */}
      <div className="space-y-5">
        {/* Seletor de Vias */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-notion-darkMuted mb-1.5">
            Via de Administração
          </label>
          <div className="flex flex-wrap gap-1.5">
            {(['VO', 'EV', 'IM', 'VR', 'NASAL'] as Via[])
              .filter(v => dispVias.includes(v) || via === v)
              .map(v => {
                const available = dispVias.includes(v);
                return (
                  <button
                    key={v}
                    disabled={!available}
                    onClick={() => setVia(v)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      via === v
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : available
                        ? 'bg-gray-100 dark:bg-notion-darkCard text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-notion-darkHover'
                        : 'bg-gray-50 dark:bg-notion-darkCard/50 text-gray-300 dark:text-gray-600 cursor-not-allowed'
                    }`}
                  >
                    {v}
                  </button>
                );
              })}
          </div>
        </div>

        {/* Seletor de Apresentação */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-notion-darkMuted mb-1.5">
            Apresentação
          </label>
          <div className="relative">
            <select
              value={apres.id}
              onChange={e => setApresId(e.target.value)}
              className="w-full appearance-none px-3 py-2 bg-white dark:bg-notion-darkCard border border-gray-200 dark:border-notion-darkBorder rounded-lg text-xs text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-emerald-500 pr-8"
            >
              {curApresList.map(a => (
                <option key={a.id} value={a.id}>
                  {a.nome} {a.comercial ? `· ${a.comercial}` : ''}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-2.5 top-2.5 pointer-events-none" />
          </div>
        </div>

        {/* Modo de Uso */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-notion-darkMuted mb-1.5">
            Regime de Uso
          </label>
          <div className="inline-flex rounded-lg p-1 bg-gray-100 dark:bg-notion-darkCard border border-gray-200 dark:border-notion-darkBorder">
            {[
              { id: 'agora', label: 'Agora (Dose Única)' },
              { id: 'sn', label: 'Se Necessário (S/N)' },
              { id: 'continuo', label: 'Uso Contínuo' }
            ].map(m => (
              <button
                key={m.id}
                onClick={() => setModo(m.id as ModoUso)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  modo === m.id
                    ? 'bg-white dark:bg-notion-darkBg text-gray-900 dark:text-gray-100 shadow-sm'
                    : 'text-gray-600 dark:text-notion-darkMuted hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Doses por dia e Parâmetros */}
        {modo !== 'agora' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-notion-darkMuted mb-1.5">
                Doses ao Dia (Intervalo)
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 6].map(k => {
                  const bad = calcResult.R.length > 0 && (k < calcResult.dmin || k > calcResult.dmax);
                  return (
                    <button
                      key={k}
                      onClick={() => setN(k)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                        n === k
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-semibold'
                          : bad
                          ? 'bg-amber-50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800 text-amber-700 dark:text-amber-400'
                          : 'bg-white dark:bg-notion-darkCard border-gray-200 dark:border-notion-darkBorder text-gray-700 dark:text-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {k}× ({24 / k}h)
                    </button>
                  );
                })}
              </div>
            </div>

            {modo === 'sn' ? (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-notion-darkMuted mb-1.5">
                  Indicação (Se...)
                </label>
                <input
                  type="text"
                  value={condText}
                  onChange={e => setCondText(e.target.value)}
                  className="w-full px-3 py-2 bg-white dark:bg-notion-darkCard border border-gray-200 dark:border-notion-darkBorder rounded-lg text-xs text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            ) : (
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-notion-darkMuted mb-1.5">
                    Duração do Tratamento
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      value={dias}
                      onChange={e => setDias(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-24 px-3 py-2 bg-white dark:bg-notion-darkCard border border-gray-200 dark:border-notion-darkBorder rounded-lg text-xs text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                    <span className="text-xs text-gray-500">dias</span>
                  </div>
                </div>

                {/* Campo de Volume do Frasco para formulações líquidas */}
                {(apres.frascoMl || (['sol', 'gotas', 'sol_nasal'].includes(apres.forma) && mgml(apres))) && (
                  <div className="flex-1">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-notion-darkMuted mb-1.5">
                      Volume do Frasco (mL)
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="1"
                        value={frascoMl ?? apres.frascoMl ?? ''}
                        onChange={e => setFrascoMl(e.target.value ? parseFloat(e.target.value) : null)}
                        placeholder={String(apres.frascoMl || 150)}
                        className="w-28 px-3 py-2 bg-white dark:bg-notion-darkCard border border-gray-200 dark:border-notion-darkBorder rounded-lg text-xs text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                      <span className="text-xs text-gray-500">mL</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Campo de Dose & Unidade */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-notion-darkMuted mb-1.5">
            Dose Desejada
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={doseVal != null ? String(doseVal).replace('.', ',') : ''}
              onChange={e => {
                const v = e.target.value.replace(',', '.');
                setDoseVal(v === '' ? null : parseFloat(v) || null);
              }}
              placeholder={paciente.pub === 'ped' && !paciente.peso ? 'informe o peso ou use mg' : '0'}
              className="flex-1 px-3 py-2 text-base font-semibold bg-white dark:bg-notion-darkCard border border-gray-200 dark:border-notion-darkBorder rounded-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <div className="relative">
              <select
                value={unid}
                onChange={e => setUnid(e.target.value as UnidadeDose)}
                className="h-full px-3 py-2 bg-gray-50 dark:bg-notion-darkCard border border-gray-200 dark:border-notion-darkBorder rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-500 pr-8"
              >
                {us.map(u => (
                  <option key={u} value={u}>
                    {unidLbl(u, apres)}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-3 pointer-events-none" />
            </div>
          </div>

          {/* Barra de Dosagem Interativa com Snap de Inteiros */}
          {calcResult.lo != null && calcResult.hi != null && (
            <div className="mt-3">
              <div
                ref={barRef}
                onMouseDown={e => {
                  setDragging(true);
                  handleBarInteraction(e.clientX);
                }}
                className="relative h-2 bg-gray-200 dark:bg-notion-darkHover rounded-full cursor-crosshair select-none"
              >
                {/* Faixa Recomendada em Verde */}
                <div
                  className="absolute top-0 bottom-0 bg-emerald-400 dark:bg-emerald-600 rounded-full"
                  style={{
                    left: `${pc(uLo || 0)}%`,
                    width: `${Math.max(2, pc(uHi || 0) - pc(uLo || 0))}%`
                  }}
                />
                {/* Risco Arrastável */}
                {curVal != null && (
                  <div
                    className={`absolute -top-1 w-1.5 h-4 rounded-full -translate-x-1/2 cursor-ew-resize shadow-sm transition-colors ${
                      isDoseBad ? 'bg-red-500' : 'bg-gray-900 dark:bg-white'
                    }`}
                    style={{ left: `${pc(curVal)}%` }}
                  />
                )}
              </div>

              <div className="flex items-center justify-between mt-1 text-[11px] text-gray-500 dark:text-notion-darkMuted">
                <span>
                  Recomendado:{' '}
                  {uLo === uHi ? fmt(uHi) : `${fmt(uLo)} a ${fmt(uHi)}`} {unidLbl(unid, apres)}
                </span>
                {calcResult.dailyMax && modo !== 'agora' && (
                  <span>máx. {fmtMg(calcResult.dailyMax)}/dia</span>
                )}
              </div>
            </div>
          )}

          {/* Resumo da Conversão de Dose */}
          {calcResult.arr && (
            <div className="mt-3 p-3 bg-gray-50 dark:bg-notion-darkCard rounded-lg border border-gray-100 dark:border-notion-darkBorder">
              <div className="text-sm font-bold text-gray-900 dark:text-gray-100">
                {fmtMg(calcResult.arr.mg)} → {calcResult.arr.txt}
              </div>
              <div className="text-xs text-gray-500 dark:text-notion-darkMuted mt-0.5 space-x-2">
                {paciente.peso && <span>{fmt(calcResult.arr.mg / paciente.peso)} mg/kg/dose</span>}
                {modo !== 'agora' && (
                  <>
                    <span>·</span>
                    <span>{fmtMg(calcResult.arr.mg * n)}/dia</span>
                  </>
                )}
                {calcResult.arr.ml != null && (
                  <>
                    <span>·</span>
                    <span>{fmt(calcResult.arr.ml * n)} mL/dia</span>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Diluição EV */}
        {via === 'EV' && drug.ev && (
          <div className="p-4 bg-gray-50 dark:bg-notion-darkCard rounded-xl border border-gray-200 dark:border-notion-darkBorder space-y-3">
            <div className="text-xs font-semibold text-gray-900 dark:text-gray-100">
              Diluição e Administração EV
            </div>
            <div className="flex gap-2">
              {drug.ev.diluentes.map(dil => (
                <button
                  key={dil}
                  onClick={() => setEvDil(dil)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    evDil === dil
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white dark:bg-notion-darkBg border-gray-200 dark:border-notion-darkBorder text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {dil}
                </button>
              ))}
            </div>

            {calcResult.ev && (
              <div className="text-xs text-gray-600 dark:text-notion-darkMuted leading-relaxed">
                <div>
                  Modo: <b>{calcResult.ev.seringa ? 'Seringa (bolus lento manual)' : 'Bolsa de infusão'}</b> ·{' '}
                  Volume final: {calcResult.ev.vol} mL
                </div>
                {calcResult.ev.gtt && (
                  <div>
                    Velocidade: <b>{calcResult.ev.gtt} gotas/min</b> ({calcResult.ev.mlh} mL/h)
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Alertas Clínicos */}
        {calcResult.alerts.length > 0 && (
          <div className="space-y-2">
            {calcResult.alerts.map((al, idx) => (
              <div
                key={idx}
                className="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-lg flex gap-2.5 text-xs text-red-800 dark:text-red-300"
              >
                <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">{al.t}</div>
                  {al.f && <div className="text-[11px] opacity-80 mt-0.5">Fonte: {al.f}</div>}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Detalhes e Fontes Médicas */}
        <details className="text-xs text-gray-600 dark:text-notion-darkMuted pt-2">
          <summary className="cursor-pointer font-medium hover:text-gray-900 dark:hover:text-gray-200 flex items-center gap-1">
            <Info className="w-3.5 h-3.5" />
            Fontes científicas e notas farmacêuticas
          </summary>
          <div className="mt-3 p-3 bg-gray-50 dark:bg-notion-darkCard rounded-lg space-y-2 border border-gray-200 dark:border-notion-darkBorder">
            <div>
              <b>Indicação:</b> {drug.notas.indicacao}
            </div>
            <div>
              <b>Administração:</b> {drug.notas.administracao}
            </div>
            <div>
              <b>Cuidados:</b> {drug.notas.cuidados}
            </div>
          </div>
        </details>
      </div>
    </div>
  );
};
