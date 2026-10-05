import React, { useMemo } from 'react';
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
  // Pré-indexar termos normalizados dos fármacos (calculado apenas quando a lista de fármacos mudar)
  const indexedDrugs = useMemo(() => {
    return drugs.map(d => {
      const searchCorpus = norm(`${d.nome} ${d.busca || ''}`);
      return {
        drug: d,
        searchCorpus,
        words: searchCorpus.split(' ').filter(Boolean)
      };
    });
  }, [drugs]);

  const q = norm(search.trim());

  const { favList, restList, categories } = useMemo(() => {
    const matched = indexedDrugs.filter(({ searchCorpus, words }) => {
      if (!q) return true;
      if (searchCorpus.includes(q)) return true;
      return words.some(w => lev(q, w.slice(0, q.length)) <= (q.length > 4 ? 2 : 1));
    }).map(x => x.drug);

    matched.sort((a, b) => a.nome.localeCompare(b.nome));

    const favs = matched.filter(d => favorites.includes(d.id));
    const rest = matched.filter(d => !favorites.includes(d.id));

    // Agrupar por categorias
    const categoriesMap = new Map<string, Farmaco[]>();
    rest.forEach(d => {
      const cat = d.categoria || 'Geral';
      if (!categoriesMap.has(cat)) {
        categoriesMap.set(cat, []);
      }
      categoriesMap.get(cat)!.push(d);
    });

    return {
      favList: favs,
      restList: rest,
      categories: Array.from(categoriesMap.entries())
    };
  }, [indexedDrugs, q, favorites]);

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
        {/* Favoritos */}
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
          </>
        )}

        {/* Fármacos agrupados por categoria */}
        {categories.map(([catName, catDrugs]) => (
          <React.Fragment key={catName}>
            <div className="sec">{catName}</div>
            {catDrugs.map(d => (
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
          </React.Fragment>
        ))}

        {favList.length === 0 && restList.length === 0 && (
          <div className="muted small" style={{ padding: '6px 10px' }}>
            Nenhum fármaco encontrado
          </div>
        )}
      </div>
    </aside>
  );
};
