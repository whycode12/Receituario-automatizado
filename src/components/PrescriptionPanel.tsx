import React from 'react';
import { ItemReceita, Farmaco, ResultadoCalculo } from '../types';

interface PrescriptionPanelProps {
  drug: Farmaco | null;
  calcResult: ResultadoCalculo;
  cards: ItemReceita[];
  receita: ItemReceita[];
  receitaGrp?: Record<string, string>;
  onUpdateCardTexto: (index: number, newTexto: string) => void;
  onUpdateGrpTexto?: (grupo: string, newTexto: string) => void;
  onUpdateReceitaItem: (id: string, newTexto: string) => void;
  onDeleteReceitaItem: (id: string) => void;
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
  onUpdateCardTexto,
  onUpdateReceitaItem,
  onDeleteReceitaItem,
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

          {grps.map(g => (
            <React.Fragment key={g.k}>
              <div
                className="ghead"
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span>{g.k.toUpperCase()}</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button
                    className="btn"
                    style={{ fontSize: '11.5px', padding: '2px 8px' }}
                    onClick={() => onCopy(`${g.k.toUpperCase()}\n\n${grpTxt(g)}`)}
                    title="Copiar medicamentos desta seção"
                  >
                    Copiar seção
                  </button>
                  <button
                    className="btn"
                    style={{ fontSize: '11.5px', padding: '2px 8px' }}
                    onClick={() => onDelGrp(g.k)}
                    title="Remover toda esta seção"
                  >
                    Remover seção
                  </button>
                </div>
              </div>

              {g.items.map((item, itemIdx) => {
                const lines = item.texto.split('\n');
                const firstLine = lines[0].replace(/^\d+\.\s*/, `${itemIdx + 1}. `);
                const currentText = [firstLine, ...lines.slice(1)].join('\n');

                return (
                  <div className="card" key={item.id || itemIdx}>
                    <AutoTextarea
                      value={currentText}
                      onChange={val => item.id && onUpdateReceitaItem(item.id, val)}
                    />
                    <div className="acts">
                      <button
                        onClick={() => onCopy(currentText)}
                        title="Copiar este medicamento"
                      >
                        ⧉
                      </button>
                      <button
                        onClick={() => item.id && onDeleteReceitaItem(item.id)}
                        title="Remover este medicamento da receita"
                        style={{ color: 'var(--red)' }}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </>
      )}

      <div className="foot">
        Ferramenta de apoio. A conferência final da prescrição é responsabilidade do médico. Edições
        manuais no texto acima são substituídas ao alterar parâmetros.
      </div>
    </section>
  );
};
