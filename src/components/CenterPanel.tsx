import React, { useState, useEffect } from 'react';
import { Farmaco, Apresentacao, Via, ModoUso, UnidadeDose, ResultadoCalculo, Paciente } from '../types';
import { fmt, fmtMg, fonteNome } from '../utils/constants';
import { unidades, unidLbl, fromMg, mgml, viasDisp } from '../engine/calculator';
import { AcessoPopover } from './center/AcessoPopover';
import { DoseSlider } from './center/DoseSlider';
import { EvSection } from './center/EvSection';
import { DrugDetails } from './center/DrugDetails';

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
  const [doseInput, setDoseInput] = useState<string>(
    doseVal != null ? String(doseVal).replace('.', ',') : ''
  );

  useEffect(() => {
    // Sincroniza quando doseVal muda externamente (mudança de remédio, slider, presets)
    const curParsed = doseInput.trim() === '' ? null : parseFloat(doseInput.replace(',', '.'));
    if (doseVal !== curParsed) {
      setDoseInput(doseVal != null ? String(doseVal).replace('.', ',') : '');
    }
  }, [doseVal]);

  if (!drug || !apres) {
    return (
      <section className="col" id="centro">
        <div className="empty">Selecione um fármaco à esquerda</div>
      </section>
    );
  }

  const dispVias = viasDisp(drug);
  const curApresList = drug.apresentacoes.filter(a => a.vias.includes(via));
  const us = unidades(apres, paciente.peso, modo);

  const uLo = calcResult.lo != null ? fromMg(calcResult.lo, unid, apres, paciente.peso, n) : null;
  const uHi = calcResult.hi != null ? fromMg(calcResult.hi, unid, apres, paciente.peso, n) : null;

  let uPadrao: number | null = null;
  const activeRegra = calcResult.R[0];
  if (activeRegra) {
    if (activeRegra.tipo === unid) {
      uPadrao = activeRegra.padrao;
    } else {
      const pMg =
        activeRegra.tipo === 'mg_kg_dose' && paciente.peso
          ? activeRegra.padrao * paciente.peso
          : activeRegra.tipo === 'mg_kg_dia' && paciente.peso
          ? (activeRegra.padrao * paciente.peso) / n
          : activeRegra.tipo === 'mg'
          ? activeRegra.padrao
          : null;
      if (pMg != null) {
        uPadrao = fromMg(pMg, unid, apres, paciente.peso, n);
      }
    }
  }

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

        <AcessoPopover drug={drug} apres={apres} />
      </div>

      <div className="muted small">{drug.classe}</div>

      {(drug.dosePratica || drug.notas.dosePratica) && (
        <div className="dose-pratica-box">
          💡 <b>Dose prática mais usual (Brasil):</b> {drug.dosePratica || drug.notas.dosePratica}
        </div>
      )}

      {/* Via */}
      <div className="field">
        <div className="lbl">Via</div>
        <div className="chips">
          {(['VO', 'EV', 'IM', 'VR', 'NASAL', 'INALATORIA', 'TOPICA'] as Via[])
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
          {curApresList.map(a => {
            const fapVol = a.forma === 'fap' ? (a.volml != null ? a.volml : a.reconstMl != null ? a.reconstMl : null) : null;
            const hasVolInName = fapVol != null && (
              a.nome.toLowerCase().includes(`${fapVol} ml`) ||
              a.nome.toLowerCase().includes(`${fapVol}ml`) ||
              a.nome.toLowerCase().includes(`${fmt(fapVol)} ml`) ||
              a.nome.toLowerCase().includes(`${fmt(fapVol)}ml`)
            );
            const volSuffix = fapVol != null && !hasVolInName ? ` (${fmt(fapVol)} mL)` : '';
            return (
              <option key={a.id} value={a.id}>
                {a.nome}{volSuffix}
                {a.comercial ? ` · ${a.comercial}` : ''}
              </option>
            );
          })}
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
            value={doseInput}
            placeholder={paciente.pub === 'ped' && !paciente.peso ? 'informe o peso ou use mg' : ''}
            onChange={e => {
              const raw = e.target.value;
              // Permite apenas números, vírgula e ponto
              if (!/^[\d.,]*$/.test(raw)) return;
              setDoseInput(raw);
              const normalized = raw.replace(',', '.');
              if (normalized === '' || normalized === '.') {
                setDoseVal(null);
              } else {
                const parsed = parseFloat(normalized);
                if (!isNaN(parsed)) {
                  setDoseVal(parsed);
                }
              }
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
              <DoseSlider
                calcResult={calcResult}
                unid={unid}
                apres={apres}
                paciente={paciente}
                n={n}
                doseVal={doseVal}
                setDoseVal={setDoseVal}
              />
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

              {/* Atalhos rápidos de dose (Mín / Padrão / Máx) */}
              <div className="chips" style={{ marginTop: '8px' }}>
                {uLo === uHi || Math.abs(uLo - uHi) < 1e-9 ? (
                  <button
                    type="button"
                    className={`chip ${doseVal === Math.round(uLo * 100) / 100 ? 'on' : ''}`}
                    style={{ fontSize: '11.5px', padding: '3px 10px' }}
                    onClick={() => setDoseVal(Math.round(uLo * 100) / 100)}
                  >
                    Usual: {fmt(uLo)} {unidLbl(unid, apres)}
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      className={`chip ${doseVal === Math.round(uLo * 100) / 100 ? 'on' : ''}`}
                      style={{ fontSize: '11.5px', padding: '3px 10px' }}
                      onClick={() => setDoseVal(Math.round(uLo * 100) / 100)}
                    >
                      Mín: {fmt(uLo)}
                    </button>
                    {uPadrao != null &&
                      Math.abs(uPadrao - uLo) > 1e-4 &&
                      Math.abs(uPadrao - uHi) > 1e-4 && (
                        <button
                          type="button"
                          className={`chip ${doseVal === Math.round(uPadrao * 100) / 100 ? 'on' : ''}`}
                          style={{ fontSize: '11.5px', padding: '3px 10px' }}
                          onClick={() => setDoseVal(Math.round(uPadrao! * 100) / 100)}
                        >
                          Padrão: {fmt(uPadrao)}
                        </button>
                      )}
                    <button
                      type="button"
                      className={`chip ${doseVal === Math.round(uHi * 100) / 100 ? 'on' : ''}`}
                      style={{ fontSize: '11.5px', padding: '3px 10px' }}
                      onClick={() => setDoseVal(Math.round(uHi * 100) / 100)}
                    >
                      Máx: {fmt(uHi)}
                    </button>
                  </>
                )}
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
        <EvSection
          drug={drug}
          calcResult={calcResult}
          evDil={evDil}
          setEvDil={setEvDil}
          evVol={evVol}
          setEvVol={setEvVol}
          evTempo={evTempo}
          setEvTempo={setEvTempo}
        />
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
      <DrugDetails drug={drug} />
    </section>
  );
};
