import React from 'react';
import { Search, Star } from 'lucide-react';
import { Farmaco } from '../types';
import { norm } from '../utils/constants';

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

  const filtered = drugs.filter(d => {
    if (!q) return true;
    const hay = norm(`${d.nome} ${d.busca}`);
    return hay.includes(q);
  });

  const favList = filtered.filter(d => favorites.includes(d.id));
  const restList = filtered.filter(d => !favorites.includes(d.id));

  return (
    <div className="w-64 border-r border-gray-200 dark:border-notion-darkBorder flex flex-col h-full bg-gray-50/50 dark:bg-notion-darkBg">
      {/* Campo de Busca */}
      <div className="p-3 border-b border-gray-200 dark:border-notion-darkBorder">
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-2.5 top-2.5" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar fármaco..."
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-white dark:bg-notion-darkCard border border-gray-200 dark:border-notion-darkBorder rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-notion-darkMuted focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Lista de Fármacos com scroll suave */}
      <div className="flex-1 overflow-y-auto p-2 space-y-4">
        {favList.length > 0 && (
          <div>
            <div className="px-2 pb-1 text-[10px] font-semibold tracking-wider text-gray-400 dark:text-notion-darkMuted uppercase">
              Favoritos
            </div>
            <div className="space-y-0.5">
              {favList.map(drug => (
                <div
                  key={drug.id}
                  onClick={() => onSelectDrug(drug)}
                  className={`group flex items-center justify-between px-2.5 py-2 rounded-md text-xs cursor-pointer transition-all ${
                    selectedDrug?.id === drug.id
                      ? 'bg-white dark:bg-notion-darkCard text-emerald-600 dark:text-emerald-400 font-medium shadow-sm border border-gray-200/80 dark:border-notion-darkBorder'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-notion-darkHover'
                  }`}
                >
                  <span className="truncate">{drug.nome}</span>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      onToggleFavorite(drug.id);
                    }}
                    className="opacity-80 hover:opacity-100 text-amber-400"
                  >
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          {favList.length > 0 && (
            <div className="px-2 pb-1 text-[10px] font-semibold tracking-wider text-gray-400 dark:text-notion-darkMuted uppercase">
              Todos ({restList.length})
            </div>
          )}
          <div className="space-y-0.5">
            {restList.map(drug => (
              <div
                key={drug.id}
                onClick={() => onSelectDrug(drug)}
                className={`group flex items-center justify-between px-2.5 py-2 rounded-md text-xs cursor-pointer transition-all ${
                  selectedDrug?.id === drug.id
                    ? 'bg-white dark:bg-notion-darkCard text-emerald-600 dark:text-emerald-400 font-medium shadow-sm border border-gray-200/80 dark:border-notion-darkBorder'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-notion-darkHover'
                }`}
              >
                <span className="truncate">{drug.nome}</span>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    onToggleFavorite(drug.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-amber-400 transition-opacity"
                >
                  <Star className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-8 text-xs text-gray-400 dark:text-notion-darkMuted">
            Nenhum fármaco encontrado
          </div>
        )}
      </div>
    </div>
  );
};
