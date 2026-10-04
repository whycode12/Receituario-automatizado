import React, { useState } from 'react';
import { Copy, Plus, Trash2, Check } from 'lucide-react';
import { ItemReceita } from '../types';

interface PrescriptionPanelProps {
  previewCards: ItemReceita[];
  receitaMontada: ItemReceita[];
  onAddToReceita: (item: ItemReceita) => void;
  onRemoveFromReceita: (index: number) => void;
  onClearReceita: () => void;
  onUpdateReceitaTexto: (index: number, newTexto: string) => void;
  onCopyAll: () => void;
  onCopyText: (txt: string) => void;
}

export const PrescriptionPanel: React.FC<PrescriptionPanelProps> = ({
  previewCards,
  receitaMontada,
  onAddToReceita,
  onRemoveFromReceita,
  onClearReceita,
  onUpdateReceitaTexto,
  onCopyAll,
  onCopyText
}) => {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = (txt: string, idx: number) => {
    onCopyText(txt);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  // Agrupar receita montada por Via (Uso Oral, Uso Nasal, etc.)
  const gruposMap = new Map<string, { items: { item: ItemReceita; originalIdx: number }[] }>();
  receitaMontada.forEach((item, originalIdx) => {
    if (!gruposMap.has(item.grupo)) {
      gruposMap.set(item.grupo, { items: [] });
    }
    gruposMap.get(item.grupo)!.items.push({ item, originalIdx });
  });

  return (
    <div className="w-96 border-l border-gray-200 dark:border-notion-darkBorder flex flex-col h-full bg-gray-50/30 dark:bg-notion-darkBg">
      <div className="p-4 border-b border-gray-200 dark:border-notion-darkBorder flex items-center justify-between">
        <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100">Prescrição Médica</h3>
        {receitaMontada.length > 0 && (
          <div className="flex items-center gap-1.5">
            <button
              onClick={onCopyAll}
              className="px-2.5 py-1 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-md shadow-sm transition-all"
            >
              Copiar Tudo
            </button>
            <button
              onClick={onClearReceita}
              title="Limpar Receita"
              className="p-1 text-gray-400 hover:text-red-500 rounded transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Cards de Prévia do Fármaco Atual */}
        {previewCards.length > 0 && (
          <div className="space-y-3">
            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-notion-darkMuted">
              Item Atual (Prévia)
            </div>
            {previewCards.map((c, i) => (
              <div
                key={i}
                className="bg-white dark:bg-notion-darkCard rounded-xl border border-gray-200 dark:border-notion-darkBorder p-3 shadow-sm"
              >
                <div className="flex items-center justify-between text-[11px] font-semibold text-gray-500 mb-2">
                  <span>{c.grupo} {c.sub ? `· ${c.sub}` : ''}</span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleCopy(c.texto, i)}
                      className="p-1 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded"
                      title="Copiar Item"
                    >
                      {copiedIdx === i ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={() => onAddToReceita(c)}
                      className="p-1 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 rounded transition-colors"
                      title="Adicionar à Receita Montada"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <div className="font-mono text-xs text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed">
                  {c.texto}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Receita Montada Agrupada por Via */}
        {receitaMontada.length > 0 && (
          <div className="space-y-4">
            <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Receita Montada ({receitaMontada.length} itens)
            </div>

            {Array.from(gruposMap.entries()).map(([grupoNome, grpData], gIdx) => (
              <div
                key={gIdx}
                className="bg-white dark:bg-notion-darkCard rounded-xl border border-emerald-200 dark:border-emerald-800/40 p-4 shadow-sm space-y-3"
              >
                <div className="text-xs font-bold uppercase tracking-wide text-gray-900 dark:text-gray-100 pb-1 border-b border-gray-100 dark:border-notion-darkBorder flex items-center justify-between">
                  <span>{grupoNome}</span>
                  <button
                    onClick={() => {
                      const textLines = grpData.items.map((it, idx) => {
                        return it.item.texto.replace(/^\d+\.\s*/, `${idx + 1}. `);
                      });
                      const fullGroupText = `${grupoNome.toUpperCase()}\n\n${textLines.join('\n\n')}`;
                      onCopyText(fullGroupText);
                    }}
                    className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 p-0.5"
                    title="Copiar Via"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-3">
                  {grpData.items.map(({ item, originalIdx }, itemIdx) => {
                    // Renumerar para 1, 2, 3... dentro de cada via
                    const formattedTexto = item.texto.replace(/^\d+\.\s*/, `${itemIdx + 1}. `);

                    return (
                      <div key={originalIdx} className="group relative">
                        <textarea
                          rows={3}
                          value={formattedTexto}
                          onChange={e => onUpdateReceitaTexto(originalIdx, e.target.value)}
                          className="w-full font-mono text-xs bg-transparent border-none focus:ring-0 p-0 text-gray-800 dark:text-gray-200 resize-y leading-relaxed outline-none"
                        />
                        <button
                          onClick={() => onRemoveFromReceita(originalIdx)}
                          className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-opacity"
                          title="Remover Item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {previewCards.length === 0 && receitaMontada.length === 0 && (
          <div className="text-center py-16 text-xs text-gray-400 dark:text-notion-darkMuted leading-relaxed">
            Selecione um fármaco e preencha a dose para gerar a prescrição médica.
          </div>
        )}
      </div>
    </div>
  );
};
