import React from 'react';
import { Farmaco } from '../../types';
import { fonteNome, regraLabel } from '../../utils/constants';

interface DrugDetailsProps {
  drug: Farmaco;
}

export const DrugDetails: React.FC<DrugDetailsProps> = ({ drug }) => {
  return (
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
      {(drug.dosePratica || drug.notas.dosePratica) && (
        <p>
          <span className="k">Prática Clínica Brasil:</span>{' '}
          <b>{drug.dosePratica || drug.notas.dosePratica}</b>
        </p>
      )}
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
  );
};
