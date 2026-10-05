import React from 'react';
import { ItemReceita, Farmaco, ResultadoCalculo } from '../types';

interface PrescriptionPanelProps {
  drug: Farmaco | null;
  calcResult: ResultadoCalculo;
  cards: ItemReceita[];
  receita: ItemReceita[];
  receitaGrp: Record<string, string>;
  onUpdateCardTexto: (index: number, newTexto: string) => void;
  onUpdateGrpTexto: (grupo: string, newTexto: string) => void;
  onAddToReceita: (cardIndex: number) => void;
  onDelGrp: (grupo: string) => void;
  onClear: () => void;
  onCopy: (txt: string) => void;
  onCopyAll: () => void;
  grpTxt: (g: { k: string; items: ItemReceita[] }) => string;
}

interface AutoTextareaProps {
  value: string;
  onChange: (val: string) => void;
}

const AutoTextarea: React.FC<AutoTextareaProps> = ({ value, onChange }) => {
  const ref = React.useRef<HTMLTextAreaElement>(null);

  const resize = React.useCallback(() => {
    if (ref.current) {
      ref.current.style.height = 'auto';
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  }, []);

  React.useLayoutEffect(() => {
    resize();
  }, [value, resize]);

  React.useEffect(() => {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [resize]);

  return (
    <textarea
      ref={ref}
      className="txt"
      spellCheck={false}
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{ overflow: 'hidden', resize: 'none', display: 'block', width: '100%' }}
    />
  );
};

export const PrescriptionPanel: React.FC<PrescriptionPanelProps> = ({
  drug,
  calcResult,
  cards,
  receita,
  receitaGrp,
  onUpdateCardTexto,
  onUpdateGrpTexto,
  onAddToReceita,
  onDelGrp,
  onClear,
  onCopy,
  onCopyAll,
  grpTxt
}) => {
  // Agrupar receita montada por grupo (ex: Uso Oral, Uso Nasal)
  const grps: { k: string; items: ItemReceita[] }[] = [];
  receita.forEach(r => {
    let g = grps.find(x => x.k === r.grupo);
    if (!g) {
      g = { k: r.grupo, items: [] };
      grps.push(g);
    }
    g.items.push(r);
  });

  // Alerta de prescrição só deve disparar quando houver alertas clínicos reais
  const hasDoseError = Boolean(calcResult && calcResult.alerts && calcResult.alerts.length > 0);

  return (
    <section className="col" id="saida">
      <h2>Prescrição</h2>

      {cards.length === 0 && (
        <div className="muted small">
          {drug ? 'Informe a dose para gerar o texto.' : 'Os textos prontos aparecerão aqui.'}
        </div>
      )}

      {hasDoseError && cards.length > 0 && (
        <div className="alert red strong" style={{ margin: '0 0 12px' }}>
          ⚠ Atenção: há itens fora do recomendado (ver alertas).
        </div>
      )}

      {/* Cards de Prévia */}
      {cards.map((c, i) => (
        <React.Fragment key={i}>
          <div className="ghead">
            {c.grupo}
            {c.sub ? <span>({c.sub})</span> : ''}
          </div>
          <div className="card">
            <AutoTextarea
              value={c.texto}
              onChange={val => onUpdateCardTexto(i, val)}
            />
            <div className="acts">
              <button onClick={() => onCopy(c.texto)} title="Copiar">
                ⧉
              </button>
              <button onClick={() => onAddToReceita(i)} title="Adicionar à receita">
                ＋
              </button>
            </div>
          </div>
        </React.Fragment>
      ))}

      {/* Receita Montada */}
      {receita.length > 0 && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '30px'
            }}
          >
            <h2 style={{ margin: 0 }}>Receita montada</h2>
            <div style={{ display: 'flex', gap: '6px' }}>
              <button className="btn" onClick={onCopyAll}>
                Copiar tudo
              </button>
              <button className="btn" onClick={onClear}>
                Limpar
              </button>
            </div>
          </div>

          {grps.map(g => {
            const txt = receitaGrp[g.k] != null ? receitaGrp[g.k] : grpTxt(g);
            return (
              <React.Fragment key={g.k}>
                <div className="ghead">{g.k.toUpperCase()}</div>
                <div className="card">
                  <AutoTextarea
                    value={txt}
                    onChange={val => onUpdateGrpTexto(g.k, val)}
                  />
                  <div className="acts">
                    <button
                      onClick={() => onCopy(`${g.k.toUpperCase()}\n\n${txt}`)}
                      title="Copiar"
                    >
                      ⧉
                    </button>
                    <button onClick={() => onDelGrp(g.k)} title="Remover">
                      ✕
                    </button>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </>
      )}

      <div className="foot">
        Ferramenta de apoio. A conferência final da prescrição é responsabilidade do médico. Edições
        manuais no texto acima são substituídas ao alterar parâmetros.
      </div>
    </section>
  );
};
