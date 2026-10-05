import React, { useRef, useState, useEffect } from 'react';
import { ResultadoCalculo, UnidadeDose, Apresentacao, Paciente } from '../../types';
import { fromMg } from '../../engine/calculator';

interface DoseSliderProps {
  calcResult: ResultadoCalculo;
  unid: UnidadeDose;
  apres: Apresentacao;
  paciente: Paciente;
  n: number;
  doseVal: number | null;
  setDoseVal: (v: number | null) => void;
}

export const DoseSlider: React.FC<DoseSliderProps> = ({
  calcResult,
  unid,
  apres,
  paciente,
  n,
  doseVal,
  setDoseVal
}) => {
  const barRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);

  let uLo: number | null = null;
  let uHi: number | null = null;
  let top = 1;
  let pc = (_v: number) => 0;
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

  if (calcResult.lo == null || calcResult.hi == null) {
    return null;
  }

  return (
    <div
      ref={barRef}
      className="bar"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {uLo != null && uHi != null && (
        <div
          className="ok"
          style={{
            left: `${pc(uLo)}%`,
            width: `${Math.max(1, pc(uHi) - pc(uLo))}%`
          }}
        />
      )}
      {doseVal != null && (
        <div
          className={`mk ${isBad ? 'bad' : ''}`}
          style={{ left: `${pc(doseVal)}%` }}
        />
      )}
    </div>
  );
};
