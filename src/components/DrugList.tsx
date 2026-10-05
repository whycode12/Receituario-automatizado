import React from 'react';
import { Farmaco } from '../types';
import { norm, lev } from '../utils/constants';

interface DrugListProps {
  drugs: Farmaco[];
  selectedDrug: Farmaco | null;
  onSelectDrug: (d: Farmaco) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  search: string;
  setSearch: (s: string) => void;
}

export const DrugList: React.FC<DrugListProps> = ({
  drugs,
  selectedDrug,
  onSelectDrug,
  favorites,
  onToggleFavorite,
  search,
  setSearch
}) => {
  const q = norm(search.trim());

  let ls = drugs.filter(d => {
    if (!q) return true;
    const h = norm(`${d.nome} ${d.busca || ''}`);
    if (h.includes(q)) return true;
    return h.split(' ').some(w => lev(q, w.slice(0, q.length)) <= (q.length > 4 ? 2 : 1));
  });

  ls.sort((a, b) => a.nome.localeCompare(b.nome));

  const favList = ls.filter(d => favorites.includes(d.id));
  const restList = ls.filter(d => !favorites.includes(d.id));

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const first = favList[0] || restList[0];
      if (first) {
        onSelectDrug(first);
      }
    }
  };

  return (
    <aside className="col">
      <input
        id="busca"
        placeholder="Buscar fármaco…"
        autoComplete="off"
        value={search}
        onChange={e => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div id="lista">
        {favList.length > 0 && (
          <>
            <div className="sec">Favoritos</div>
            {favList.map(d => (
              <div
                key={d.id}
                className={`item ${selectedDrug?.id === d.id ? 'on' : ''}`}
                onClick={() => onSelectDrug(d)}
              >
                <span>{d.nome}</span>
                <span
                  className="st"
                  onClick={e => {
                    e.stopPropagation();
                    onToggleFavorite(d.id);
                  }}
                >
                  ★
                </span>
              </div>
            ))}
            <div className="sec">Todos</div>
          </>
        )}
        {restList.map(d => (
          <div
            key={d.id}
            className={`item ${selectedDrug?.id === d.id ? 'on' : ''}`}
            onClick={() => onSelectDrug(d)}
          >
            <span>{d.nome}</span>
            {favorites.includes(d.id) && (
              <span
                className="st"
                onClick={e => {
                  e.stopPropagation();
                  onToggleFavorite(d.id);
                }}
              >
                ★
              </span>
            )}
          </div>
        ))}
        {ls.length === 0 && (
          <div className="muted small" style={{ padding: '6px 10px' }}>
            Nenhum fármaco encontrado
          </div>
        )}
      </div>
    </aside>
  );
};
