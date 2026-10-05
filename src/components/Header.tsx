import React from 'react';
import { Pub } from '../types';

interface HeaderProps {
  pub: Pub;
  setPub: (p: Pub) => void;
  peso: string;
  setPeso: (p: string) => void;
  anos: string;
  setAnos: (a: string) => void;
  meses: string;
  setMeses: (m: string) => void;
  darkMode: boolean;
  setDarkMode: (d: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  pub,
  setPub,
  peso,
  setPeso,
  anos,
  setAnos,
  meses,
  setMeses,
  darkMode,
  setDarkMode
}) => {
  return (
    <header className="top">
      <div className="brand">Receituário</div>
      <div className="seg" id="pubSeg">
        <button
          className={pub === 'adulto' ? 'on' : ''}
          onClick={() => setPub('adulto')}
        >
          Adulto
        </button>
        <button
          className={pub === 'ped' ? 'on' : ''}
          onClick={() => setPub('ped')}
        >
          Pediátrico
        </button>
      </div>
      <div className="pt">
        <label>
          Peso{' '}
          <input
            id="peso"
            inputMode="decimal"
            placeholder={pub === 'ped' ? '—' : 'opcional'}
            value={peso}
            onChange={e => setPeso(e.target.value)}
          />{' '}
          kg
        </label>
        {pub === 'ped' && (
          <label className="ped-only">
            Idade{' '}
            <input
              id="anos"
              inputMode="numeric"
              placeholder="0"
              value={anos}
              onChange={e => setAnos(e.target.value)}
            />{' '}
            anos{' '}
            <input
              id="meses"
              inputMode="numeric"
              placeholder="0"
              value={meses}
              onChange={e => setMeses(e.target.value)}
            />{' '}
            meses
          </label>
        )}
      </div>
      <button
        className="icon"
        id="tema"
        title="Modo escuro"
        onClick={() => setDarkMode(!darkMode)}
      >
        ◐
      </button>
    </header>
  );
};
