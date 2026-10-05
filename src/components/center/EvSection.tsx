import React from 'react';
import { Farmaco, ResultadoCalculo } from '../../types';
import { CFG, fmt } from '../../utils/constants';

interface EvSectionProps {
  drug: Farmaco;
  calcResult: ResultadoCalculo;
  evDil: string;
  setEvDil: (d: string) => void;
  evVol: number | null;
  setEvVol: (v: number | null) => void;
  evTempo: number | null;
  setEvTempo: (t: number | null) => void;
}

export const EvSection: React.FC<EvSectionProps> = ({
  drug,
  calcResult,
  evDil,
  setEvDil,
  evVol,
  setEvVol,
  evTempo,
  setEvTempo
}) => {
  if (!drug.ev) return null;

  return (
    <div className="box" style={{ marginTop: '16px' }}>
      <div className="lbl">Diluição e Infusão Endovenosa</div>
      <div className="chips" style={{ marginTop: '6px' }}>
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
  );
};
