import React, { useRef, useState, useEffect } from 'react';
import { Farmaco, Apresentacao, Via, ModoUso, UnidadeDose, ResultadoCalculo, Paciente } from '../types';
import { CFG, fmt, fmtMg, fonteNome, regraLabel } from '../utils/constants';
import { unidades, unidLbl, fromMg, toMg, mgml } from '../engine/calculator';

interface CenterPanelProps {
  drug: Farmaco | null;
  paciente: Paciente;
  via: Via;
  onViaChange: (v: Via) => void;
  apres: Apresentacao | null;
  onApresChange: (id: string) => void;
  modo: ModoUso;
  onModoChange: (m: ModoUso) => void;
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
  onUnidChange: (u: UnidadeDose) => void;
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
  onViaChange,
  apres,
  onApresChange,
  modo,
  onModoChange,
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
  onUnidChange,
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
  const accWrapRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);

  // Fecha o popover ao clicar fora
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (acessoOpen && accWrapRef.current && !accWrapRef.current.contains(e.target as Node)) {
        setAcessoOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [acessoOpen]);

  if (!drug || !apres) {
    return (
      <section className="col" id="centro">
        <div className="empty">Selecione um fármaco à esquerda</div>
      </section>
    );
  }

  const dispVias = (['VO', 'EV', 'IM', 'VR', 'NASAL'] as Via[]).filter(v =>
    drug.apresentacoes.some(a => a.vias.includes(v))
  );

  const curApresList = drug.apresentacoes.filter(a => a.vias.includes(via));
  const us = unidades(apres, paciente.peso, modo);

  // Barra de cálculo
  let uLo: number | null = null;
  let uHi: number | null = null;
  let top = 1;
  let pc = (v: number) => 0;
  let isBad = false;

  if (calcResult.lo != null && calcResult.hi != null) {
    uLo = fromMg(calcResult.lo, unid, apres, paciente.peso, n);
    uHi = fromMg(calcResult.hi, unid, apres, paciente.peso, n);
    const cur = doseVal;
    top = Math.max((uHi || 0) * 1.5, cur || 0) * 1.05 || 1;
    pc = (v: number) => Math.max(0, Math.min(100, (v / top) * 100));
    isBad = cur != null && calcResult.mg != null && (calcResult.mg > calcResult.hi * 1.0001 || calcResult.mg < calcResult.lo * 0.9999);
  }

  const applyBarDrag = (clientX: number) => {
    if (!barRef.current || !top) return;
    const rect = barRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const raw = Math.round(pct * top);
    setDoseVal(raw);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    applyBarDrag(e.clientX);
    e.preventDefault();
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setDragging(true);
    applyBarDrag(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (dragging) applyBarDrag(e.clientX);
    };
    const handleMouseUp = () => {
      if (dragging) setDragging(false);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (dragging && e.touches[0]) applyBarDrag(e.touches[0].clientX);
    };
    const handleTouchEnd = () => {
      if (dragging) setDragging(false);
    };

    if (dragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [dragging, top]);

  // Montar partes descritivas do cálculo
  const calcParts: string[] = [];
  if (calcResult.arr) {
    const mg = calcResult.arr.mg;
    if (paciente.peso) calcParts.push(`${fmt(mg / paciente.peso)} mg/kg/dose`);
    if (modo !== 'agora') {
      calcParts.push(`${fmtMg(mg * n)}/dia`);
      if (paciente.peso) calcParts.push(`${fmt((mg * n) / paciente.peso)} mg/kg/dia`);
      if (calcResult.arr.ml != null) {
        const mlDia = calcResult.arr.ml * n;
        calcParts.push(`${fmt(mlDia)} mL/dia`);
        const fMl = frascoMl || apres.frascoMl;
        if (modo === 'continuo' && fMl) {
          const mlTotal = mlDia * (dias || 1);
          const qtdF = Math.max(1, Math.ceil(mlTotal / fMl));
          calcParts.push(`total ${fmt(mlTotal)} mL (${qtdF} frasco${qtdF > 1 ? 's' : ''})`);
        }
      }
    } else if (calcResult.arr.ml != null && !String(calcResult.arr.txt).startsWith(fmt(calcResult.arr.ml))) {
      calcParts.push(`${fmt(calcResult.arr.ml)} mL`);
    }
  }

  return (
    <section className="col" id="centro">
      {/* Cabeçalho do fármaco */}
      <div className="dhead">
        <h1>{drug.nome}</h1>
        <button
          className={`star ${isFav ? 'on' : ''}`}
          onClick={onToggleFav}
          title="Favorito"
        >
          ★
        </button>

        {apres.acesso && (
          <span className="acc-wrap" ref={accWrapRef}>
            <button
              className="acc"
              onClick={() => setAcessoOpen(!acessoOpen)}
              title="Disponibilidade no SUS (apresentação selecionada)"
            >
              <span className={`abadge ${apres.acesso.rename ? 'on' : 'off'}`}>RENAME</span>
              <span className={`abadge ${apres.acesso.fp ? 'on' : 'off'}`}>F. POPULAR</span>
            </button>
            <div className={`apop ${acessoOpen ? 'open' : ''}`}>
              <div className="apt">Disponibilidade no SUS por apresentação</div>
              {drug.apresentacoes
                .filter(a => a.acesso)
                .map(a => (
                  <div key={a.id} className={`arow ${a.id === apres.id ? 'cur' : ''}`}>
                    <span className="an">{a.nome}</span>
                    <span className={`ai ${a.acesso?.rename ? 'y' : 'n'}`}>
                      {a.acesso?.rename ? '✓' : '✗'} RENAME
                    </span>
                    <span className={`ai ${a.acesso?.fp ? 'y' : 'n'}`}>
                      {a.acesso?.fp ? '✓' : '✗'} F. Popular
                    </span>
                  </div>
                ))}
              <div className="afo">
                {drug.acessoFonte || ''}
                <br />
                A disponibilidade real depende da REMUME do município.
              </div>
            </div>
          </span>
        )}
      </div>

      <div className="muted small">{drug.classe}</div>

      {/* Via */}
      <div className="field">
        <div className="lbl">Via</div>
        <div className="chips">
          {(['VO', 'EV', 'IM', 'VR', 'NASAL'] as Via[])
            .filter(v => dispVias.includes(v) || via === v)
            .map(v => (
              <button
                key={v}
                className={`chip ${via === v ? 'on' : ''}`}
                disabled={!dispVias.includes(v)}
                title={!dispVias.includes(v) ? 'Não disponível nas fontes' : undefined}
                onClick={() => onViaChange(v)}
              >
                {v}
              </button>
            ))}
        </div>
      </div>

      {/* Apresentação */}
      <div className="field">
        <div className="lbl">Apresentação</div>
        <select value={apres.id} onChange={e => onApresChange(e.target.value)}>
          {curApresList.map(a => (
            <option key={a.id} value={a.id}>
              {a.nome}
              {a.comercial ? ` · ${a.comercial}` : ''}
            </option>
          ))}
        </select>
      </div>

      {/* Modo de Uso */}
      <div className="field">
        <div className="lbl">Uso</div>
        <div className="seg">
          {(
            [
              ['agora', 'Agora'],
              ['sn', 'Se necessário'],
              ['continuo', 'Contínuo']
            ] as [ModoUso, string][]
          ).map(([k, l]) => (
            <button
              key={k}
              className={modo === k ? 'on' : ''}
              onClick={() => onModoChange(k)}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Parâmetros se não for 'agora' */}
      {modo !== 'agora' && (
        <>
          <div className="field">
            <div className="lbl">Doses por dia</div>
            <div className="chips">
              {[1, 2, 3, 4].map(k => {
                const bad = calcResult.R.length > 0 && (k < calcResult.dmin || k > calcResult.dmax);
                return (
                  <button
                    key={k}
                    className={`chip ${n === k ? 'on' : ''} ${bad ? 'warn' : ''}`}
                    title={bad ? 'Fora do recomendado pela fonte' : undefined}
                    onClick={() => setN(k)}
                  >
                    {k}× · {24 / k}/{24 / k}h
                  </button>
                );
              })}
            </div>
          </div>

          {modo === 'sn' ? (
            <div className="field">
              <div className="lbl">Se…</div>
              <input
                value={condText}
                onChange={e => setCondText(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
          ) : (
            <div className="row" style={{ marginTop: '18px' }}>
              <label className="field" style={{ flex: 1, marginTop: 0 }}>
                <div className="lbl">Duração (dias)</div>
                <input
                  inputMode="numeric"
                  value={dias}
                  onChange={e => setDias(parseInt(e.target.value) || 1)}
                  style={{ width: '100%' }}
                />
              </label>
              {(apres.frascoMl ||
                (['sol', 'gotas', 'susp', 'sol_nasal'].includes(apres.forma) && mgml(apres))) && (
                <label className="field" style={{ flex: 1, marginTop: 0 }}>
                  <div className="lbl">Volume do frasco (mL)</div>
                  <input
                    inputMode="numeric"
                    placeholder={apres.frascoMl ? String(apres.frascoMl) : 'ex: 150'}
                    value={frascoMl != null ? frascoMl : ''}
                    onChange={e => setFrascoMl(e.target.value ? parseFloat(e.target.value) : null)}
                    style={{ width: '100%' }}
                  />
                </label>
              )}
            </div>
          )}
        </>
      )}

      {/* Campo Dose e Calculadora */}
      <div className="field">
        <div className="lbl">Dose</div>
        <div className="row dose">
          <input
            inputMode="decimal"
            value={doseVal != null ? String(doseVal).replace('.', ',') : ''}
            placeholder={paciente.pub === 'ped' && !paciente.peso ? 'informe o peso ou use mg' : ''}
            onChange={e => {
              const v = e.target.value.replace(',', '.');
              setDoseVal(v === '' ? null : parseFloat(v) || null);
            }}
          />
          <select value={unid} onChange={e => onUnidChange(e.target.value as UnidadeDose)}>
            {us.map(u => (
              <option key={u} value={u}>
                {unidLbl(u, apres)}
              </option>
            ))}
          </select>
        </div>

        <div id="calc" className="calc">
          {calcResult.lo != null && calcResult.hi != null && uLo != null && uHi != null && (
            <>
              <div
                ref={barRef}
                className="bar"
                data-top={top}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                <div
                  className="ok"
                  style={{
                    left: `${pc(uLo)}%`,
                    width: `${Math.max(1, pc(uHi) - pc(uLo))}%`
                  }}
                />
                {doseVal != null && (
                  <div
                    className={`mk ${isBad ? 'bad' : ''}`}
                    style={{ left: `${pc(doseVal)}%` }}
                  />
                )}
              </div>
              <div className="sub">
                Recomendado:{' '}
                {uLo === uHi || Math.abs(uLo - uHi) < 1e-9 ? fmt(uHi) : `${fmt(uLo)} – ${fmt(uHi)}`}{' '}
                {unidLbl(unid, apres)}
                {unid !== 'mg'
                  ? ` (${calcResult.lo === calcResult.hi ? fmtMg(calcResult.hi) : fmt(calcResult.lo, 1) + ' – ' + fmtMg(calcResult.hi)})`
                  : ''}
                {modo !== 'agora' && calcResult.dailyMax != null
                  ? ` · máx. ${fmtMg(calcResult.dailyMax)}/dia`
                  : ''}
              </div>
            </>
          )}

          {calcResult.arr && (
            <>
              <div className="big">
                {fmtMg(calcResult.arr.mg)} → {calcResult.arr.txt}
              </div>
              {calcParts.length > 0 && <div className="sub">{calcParts.join(' · ')}</div>}
            </>
          )}
        </div>
      </div>

      {/* Diluição EV */}
      {via === 'EV' && drug.ev && (
        <div className="box">
          <div className="lbl" style={{ marginBottom: '10px' }}>
            Diluição e administração EV
          </div>
          <div className="chips">
            {drug.ev.diluentes.map(x => (
              <button
                key={x}
                className={`chip ${evDil === x ? 'on' : ''}`}
                onClick={() => setEvDil(x)}
              >
                {x}
              </button>
            ))}
          </div>

          <div className="row" style={{ marginTop: '10px' }}>
            <label className="muted small" style={{ flex: 1 }}>
              Volume final
              <select
                style={{ marginTop: '4px' }}
                value={evVol ?? calcResult.ev?.vol ?? ''}
                onChange={e => setEvVol(parseFloat(e.target.value) || null)}
              >
                {drug.ev.volOpcoes.map(v => (
                  <option key={v} value={v}>
                    {v} mL · {v <= CFG.limiteSeringaMl ? 'seringa' : 'bolsa'}
                  </option>
                ))}
              </select>
            </label>

            <label className="muted small" style={{ flex: 1 }}>
              Tempo (min)
              <input
                inputMode="decimal"
                style={{ marginTop: '4px', width: '100%' }}
                value={
                  evTempo != null
                    ? String(evTempo).replace('.', ',')
                    : calcResult.ev?.t != null
                    ? String(calcResult.ev.t).replace('.', ',')
                    : ''
                }
                onChange={e => {
                  const v = parseFloat(e.target.value.replace(',', '.'));
                  setEvTempo(isNaN(v) ? null : v);
                }}
              />
            </label>
          </div>

          <input
            type="range"
            style={{ width: '100%', marginTop: '10px', border: 0, padding: 0 }}
            min={calcResult.ev?.tMin ? Math.max(1, Math.floor(calcResult.ev.tMin)) : 1}
            max={calcResult.ev?.tMax || Math.max(30, Math.ceil((calcResult.ev?.t || 0) * 1.5))}
            step={1}
            value={
              evTempo ??
              calcResult.ev?.t ??
              (calcResult.ev?.tMin ? Math.max(1, Math.floor(calcResult.ev.tMin)) : 1)
            }
            onChange={e => setEvTempo(parseFloat(e.target.value))}
          />

          {calcResult.ev && (
            <div id="evcalc" className="sub" style={{ marginTop: '6px' }}>
              <b>{calcResult.ev.seringa ? 'Seringa' : 'Bolsa'}</b>{' '}
              {calcResult.ev.seringa ? '(bolus lento manual)' : ''} · volume da dose{' '}
              {fmt(calcResult.ev.vDose)} mL · conc. final {fmt(calcResult.ev.conc)} mg/mL
              {drug.ev.concMax ? ` (máx. ${fmt(drug.ev.concMax)})` : ''}
              {!calcResult.ev.seringa && calcResult.ev.gtt != null && (
                <>
                  <br />
                  <b>≈ {calcResult.ev.gtt} gotas/min</b> · {calcResult.ev.mlh} mL/h (macrogotas{' '}
                  {CFG.gotasPorMl} gts/mL)
                </>
              )}
              <br />
              {(calcResult.ev.tMin || calcResult.ev.tMax) && (
                <>
                  Faixa:{' '}
                  {calcResult.ev.tMin ? fmt(Math.ceil(calcResult.ev.tMin * 10) / 10, 1) : '—'}
                  {calcResult.ev.tMax ? ` – ${calcResult.ev.tMax}` : '+'} min.{' '}
                </>
              )}
              {calcResult.ev.tTxt}
            </div>
          )}
        </div>
      )}

      {/* Alertas */}
      <div id="alerts" style={{ marginTop: '16px' }}>
        {calcResult.alerts.map((x, i) => (
          <div key={`al-${i}`} className={`alert red ${x.strong ? 'strong' : ''}`}>
            {x.t}
            {x.f && <span className="src">Fonte: {x.f}</span>}
            {x.tr && <span className="tr">"{x.tr}"</span>}
          </div>
        ))}
        {calcResult.alerts.length === 0 && calcResult.arr && calcResult.R.length > 0 && (
          <div className="alert green">
            ✓ Dentro do recomendado ·{' '}
            {[...new Set(calcResult.R.map(r => fonteNome(drug, r.fonte)))].join(' · ')}
          </div>
        )}
        {calcResult.notes.map((x, i) => (
          <div key={`no-${i}`} className={`alert amber ${x.strong ? 'strong' : ''}`}>
            {x.t}
            {x.f && <span className="src">Fonte: {x.f}</span>}
            {x.tr && <span className="tr">"{x.tr}"</span>}
          </div>
        ))}
        {calcResult.infos.map((x, i) => (
          <div key={`in-${i}`} className={`alert gray ${x.strong ? 'strong' : ''}`}>
            {x.t}
            {x.f && <span className="src">Fonte: {x.f}</span>}
            {x.tr && <span className="tr">"{x.tr}"</span>}
          </div>
        ))}
      </div>

      {/* Fontes e detalhes */}
      <details>
        <summary>Fontes e detalhes</summary>
        <p>
          <span className="k">Fontes:</span>{' '}
          {Object.keys(drug.fontes)
            .map(f => fonteNome(drug, f))
            .join(' · ')}
        </p>
        <p>
          <span className="k">Indicação:</span> {drug.notas.indicacao}
        </p>
        <p>
          <span className="k">Regras de dose:</span>
        </p>
        {drug.regras.map((r, i) => (
          <p key={i} className="small">
            • <b>{regraLabel(r)}</b>
            {r.apres
              ? ` (${r.apres
                  .map(id => drug.apresentacoes.find(a => a.id === id)?.nome)
                  .filter(Boolean)
                  .join(', ')})`
              : ''}{' '}
            — <i>"{r.trecho}"</i> <span className="muted">({r.fonte})</span>
          </p>
        ))}
        {(drug.maximos || []).map((m, i) => (
          <p key={i} className="small">
            • <b>Máximo:</b> <i>"{m.trecho}"</i> <span className="muted">({m.fonte})</span>
          </p>
        ))}
        {(drug.contra || []).map((c, i) => (
          <p key={i} className="small">
            • <b>Contraindicação:</b> <i>"{c.trecho}"</i> <span className="muted">({c.fonte})</span>
          </p>
        ))}
        {drug.ev && (
          <p>
            <span className="k">Diluição EV:</span> {drug.ev.fonteTxt}
          </p>
        )}
        <p>
          <span className="k">Administração:</span> {drug.notas.administracao}
        </p>
        <p>
          <span className="k">Cuidados:</span> {drug.notas.cuidados}
        </p>
        <p>
          <span className="k">Ajuste de dose:</span> {drug.notas.ajuste}
        </p>
      </details>
    </section>
  );
};
