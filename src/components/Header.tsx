import React from 'react';
import { User, Baby, Moon, Sun, Scale, Calendar } from 'lucide-react';
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
    <header className="border-b border-gray-200 dark:border-notion-darkBorder bg-white dark:bg-notion-darkBg px-6 py-3 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Logo / Título */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg">
            ℞
          </div>
          <div>
            <h1 className="font-semibold text-gray-900 dark:text-gray-100 text-base leading-tight">
              Receituário Automatizado
            </h1>
            <p className="text-xs text-gray-500 dark:text-notion-darkMuted">
              Cálculo de dose e prescrição clínica estruturada
            </p>
          </div>
        </div>

        {/* Controles de Paciente */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Segmented control: Adulto vs Pediatria */}
          <div className="inline-flex rounded-lg p-1 bg-gray-100 dark:bg-notion-darkCard border border-gray-200 dark:border-notion-darkBorder">
            <button
              onClick={() => setPub('adulto')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                pub === 'adulto'
                  ? 'bg-white dark:bg-notion-darkBg text-gray-900 dark:text-gray-100 shadow-sm'
                  : 'text-gray-600 dark:text-notion-darkMuted hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              Adulto
            </button>
            <button
              onClick={() => setPub('ped')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                pub === 'ped'
                  ? 'bg-white dark:bg-notion-darkBg text-gray-900 dark:text-gray-100 shadow-sm'
                  : 'text-gray-600 dark:text-notion-darkMuted hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              <Baby className="w-3.5 h-3.5" />
              Pediatria
            </button>
          </div>

          {/* Idade em Pediatria */}
          {pub === 'ped' && (
            <div className="flex items-center gap-2 bg-gray-50 dark:bg-notion-darkCard px-3 py-1.5 rounded-lg border border-gray-200 dark:border-notion-darkBorder text-xs">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-500 dark:text-notion-darkMuted">Idade:</span>
              <input
                type="number"
                min="0"
                max="18"
                value={anos}
                onChange={e => setAnos(e.target.value)}
                placeholder="0"
                className="w-10 px-1 py-0.5 text-center bg-white dark:bg-notion-darkBg border border-gray-300 dark:border-notion-darkBorder rounded text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <span className="text-gray-500 dark:text-notion-darkMuted">anos</span>
              <input
                type="number"
                min="0"
                max="11"
                value={meses}
                onChange={e => setMeses(e.target.value)}
                placeholder="0"
                className="w-10 px-1 py-0.5 text-center bg-white dark:bg-notion-darkBg border border-gray-300 dark:border-notion-darkBorder rounded text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <span className="text-gray-500 dark:text-notion-darkMuted">meses</span>
            </div>
          )}

          {/* Peso */}
          <div className="flex items-center gap-2 bg-gray-50 dark:bg-notion-darkCard px-3 py-1.5 rounded-lg border border-gray-200 dark:border-notion-darkBorder text-xs">
            <Scale className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-500 dark:text-notion-darkMuted">Peso:</span>
            <input
              type="text"
              value={peso}
              onChange={e => setPeso(e.target.value)}
              placeholder={pub === 'ped' ? 'obrigatório' : 'opcional'}
              className="w-16 px-1.5 py-0.5 text-center bg-white dark:bg-notion-darkBg border border-gray-300 dark:border-notion-darkBorder rounded text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <span className="text-gray-500 dark:text-notion-darkMuted">kg</span>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? 'Modo Claro' : 'Modo Escuro'}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-notion-darkMuted dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-notion-darkCard border border-transparent hover:border-gray-200 dark:hover:border-notion-darkBorder transition-all"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
