import React, { useState, useEffect, useMemo } from 'react';
import { Paciente, ItemReceita, ProtocoloConduta, OpcaoPrescricao, ProtocoloItemFarmaco, Via, ModoUso, UnidadeDose } from '../types';
import { DRUGS, getDrugById } from '../data';
import { PROTOCOLOS, CATEGORIAS_PROTOCOLOS } from '../data/protocolos';
import { processarOpcaoProtocolo, processarItemProtocolo } from '../engine/protocolManager';

interface ProtocolosViewProps {
  paciente: Paciente;
  onAddToReceita: (items: ItemReceita[]) => void;
  showToast: (msg: string) => void;
}

export const ProtocolosView: React.FC<ProtocolosViewProps> = ({
  paciente,
  onAddToReceita,
  showToast
}) => {
  const [search, setSearch] = useState<string>('');
  const [selectedCat, setSelectedCat] = useState<string>('Todas');
  const [selectedProtoId, setSelectedProtoId] = useState<string>(() => PROTOCOLOS[0]?.id || '');

  // Cópia local editável das opções da doença selecionada (permite reordenar, excluir e adicionar)
  const [opcoesEditaveis, setOpcoesEditaveis] = useState<OpcaoPrescricao[]>([]);

  // Modal para adicionar medicamento a uma opção específica
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [targetOpcaoIndex, setTargetOpcaoIndex] = useState<number>(0);
  const [novoFarmacoId, setNovoFarmacoId] = useState<string>(DRUGS[0]?.id || '');
  const [novaVia, setNovaVia] = useState<Via>('VO');
  const [novoModo, setNovoModo] = useState<ModoUso>('continuo');
  const [novaFreq, setNovaFreq] = useState<number>(2);
  const [novaDose, setNovaDose] = useState<number>(500);
  const [novaUnid, setNovaUnid] = useState<UnidadeDose>('mg');
  const [novosDias, setNovosDias] = useState<number>(7);
  const [novaCondicao, setNovaCondicao] = useState<string>('se necessário');

  // Filtragem de protocolos
  const filteredProtocolos = useMemo(() => {
    const q = search.trim().toLowerCase();
    return PROTOCOLOS.filter(p => {
      const matchCat = selectedCat === 'Todas' || p.categoria === selectedCat;
      if (!matchCat) return false;
      if (!q) return true;
      return (
        p.titulo.toLowerCase().includes(q) ||
        (p.subcategoria && p.subcategoria.toLowerCase().includes(q)) ||
        (p.descricao && p.descricao.toLowerCase().includes(q))
      );
    });
  }, [search, selectedCat]);

  // Protocolo atualmente selecionado
  const currentProto = useMemo(() => {
    return PROTOCOLOS.find(p => p.id === selectedProtoId) || filteredProtocolos[0] || PROTOCOLOS[0];
  }, [selectedProtoId, filteredProtocolos]);

  // Atualizar cópia local quando muda de protocolo
  useEffect(() => {
    if (currentProto) {
      setOpcoesEditaveis(JSON.parse(JSON.stringify(currentProto.opcoesPrescricao)));
    }
  }, [currentProto?.id]);

  // Handlers de edição de itens dentro de uma opção
  const handleMoveItem = (opcaoIdx: number, itemIdx: number, direction: 'up' | 'down') => {
    setOpcoesEditaveis(prev => {
      const copy = JSON.parse(JSON.stringify(prev)) as OpcaoPrescricao[];
      const itens = copy[opcaoIdx].itens;
      const targetIdx = direction === 'up' ? itemIdx - 1 : itemIdx + 1;
      if (targetIdx < 0 || targetIdx >= itens.length) return prev;
      const temp = itens[itemIdx];
      itens[itemIdx] = itens[targetIdx];
      itens[targetIdx] = temp;
      return copy;
    });
  };

  const handleDeleteItem = (opcaoIdx: number, itemIdx: number) => {
    setOpcoesEditaveis(prev => {
      const copy = JSON.parse(JSON.stringify(prev)) as OpcaoPrescricao[];
      copy[opcaoIdx].itens.splice(itemIdx, 1);
      return copy;
    });
    showToast('Medicamento removido da conduta');
  };

  const handleOpenAddModal = (opcaoIdx: number) => {
    setTargetOpcaoIndex(opcaoIdx);
    setModalOpen(true);
  };

  const handleConfirmAddFarmaco = () => {
    const itemToAdd: ProtocoloItemFarmaco = {
      id: `${novoFarmacoId}_${Date.now()}`,
      farmacoId: novoFarmacoId,
      dose: novaDose,
      unidade: novaUnid,
      via: novaVia,
      modo: novoModo,
      freq: novaFreq,
      dias: novosDias,
      condicao: novoModo === 'sn' ? novaCondicao : undefined
    };

    setOpcoesEditaveis(prev => {
      const copy = JSON.parse(JSON.stringify(prev)) as OpcaoPrescricao[];
      copy[targetOpcaoIndex].itens.push(itemToAdd);
      return copy;
    });

    setModalOpen(false);
    showToast('Medicamento adicionado à conduta');
  };

  // Copiar o texto completo de uma opção para o prontuário
  const handleCopyOpcao = (opcao: OpcaoPrescricao) => {
    const itensVisuais = processarOpcaoProtocolo(opcao, paciente);
    if (itensVisuais.length === 0) return;

    let fullText = `${currentProto.titulo.toUpperCase()}\n[${opcao.titulo}]\n\n`;
    itensVisuais.forEach((it, idx) => {
      const renumberedText = it.textoExibicao.replace(/^\d+\.\s*/, `${idx + 1}. `);
      fullText += `${renumberedText}\n\n`;
    });

    navigator.clipboard.writeText(fullText.trim()).then(() => {
      showToast('Receita copiada para a área de transferência!');
    });
  };

  // Enviar itens de uma opção diretamente para a receita montada do paciente
  const handleEnviarParaReceitaPaciente = (opcao: OpcaoPrescricao) => {
    const itensVisuais = processarOpcaoProtocolo(opcao, paciente);
    const itensParaEnviar: ItemReceita[] = [];

    itensVisuais.forEach((it, idx) => {
      if (it.cardReceita) {
        itensParaEnviar.push({
          id: `${it.id}_rec_${Date.now()}_${idx}`,
          grupo: it.cardReceita.grupo,
          sub: it.cardReceita.sub,
          texto: it.textoExibicao
        });
      }
    });

    if (itensParaEnviar.length > 0) {
      onAddToReceita(itensParaEnviar);
      showToast(`${itensParaEnviar.length} item(ns) adicionado(s) à receita do paciente!`);
    }
  };

  return (
    <div className="protocolos-container">
      {/* Barra Lateral / Seletor de Protocolos */}
      <aside className="protocolos-sidebar">
        <div className="protocolos-search-box">
          <input
            type="text"
            placeholder="Buscar doença no Guia UPA..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Categorias / Especialidades */}
        <div className="protocolos-cat-scroll">
          {CATEGORIAS_PROTOCOLOS.map(cat => (
            <button
              key={cat}
              className={`protocolos-cat-pill ${selectedCat === cat ? 'active' : ''}`}
              onClick={() => setSelectedCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Lista de Doenças */}
        <div className="protocolos-list">
          {filteredProtocolos.map(proto => (
            <div
              key={proto.id}
              className={`protocolos-list-item ${currentProto?.id === proto.id ? 'active' : ''}`}
              onClick={() => setSelectedProtoId(proto.id)}
            >
              <div className="protocolos-list-title">{proto.titulo}</div>
              <div className="protocolos-list-sub">
                <span>{proto.categoria}</span>
                <span className="protocolos-badge-page">p. {proto.paginaPdf}</span>
              </div>
            </div>
          ))}
          {filteredProtocolos.length === 0 && (
            <div className="empty" style={{ padding: '20px', textAlign: 'center' }}>
              Nenhuma condição encontrada.
            </div>
          )}
        </div>
      </aside>

      {/* Área Principal de Exibição do Protocolo */}
      <main className="protocolos-main">
        {currentProto ? (
          <>
            {/* Cabeçalho da Doença */}
            <div className="protocolos-header">
              <div className="protocolos-header-tags">
                <span className="tag-cat">{currentProto.categoria}</span>
                <span className="tag-pdf">Guia da UPA 2026 • Página {currentProto.paginaPdf}</span>
                {currentProto.subcategoria && (
                  <span className="tag-sub">{currentProto.subcategoria}</span>
                )}
              </div>
              <h1 className="protocolos-title">{currentProto.titulo}</h1>
              {currentProto.descricao && (
                <p className="protocolos-desc">{currentProto.descricao}</p>
              )}
            </div>

            {/* Prescrições / Opções Lado a Lado */}
            <div className="protocolos-options-section">
              <div className="protocolos-section-label">
                Esquemas Terapêuticos Recomendados ({opcoesEditaveis.length} {opcoesEditaveis.length > 1 ? 'opções' : 'opção'})
              </div>

              <div className="protocolos-cards-grid">
                {opcoesEditaveis.map((opcao, opIdx) => {
                  const itensVisuais = processarOpcaoProtocolo(opcao, paciente);

                  return (
                    <div key={opcao.id || opIdx} className="protocolo-card-col">
                      <div className="protocolo-card-header">
                        <div>
                          <div className="protocolo-card-opt-title">{opcao.titulo}</div>
                          {opcao.subtitulo && (
                            <div className="protocolo-card-opt-sub">{opcao.subtitulo}</div>
                          )}
                        </div>
                        <div className="protocolo-card-actions">
                          <button
                            className="btn-proto-action"
                            title="Copiar texto formatado desta conduta"
                            onClick={() => handleCopyOpcao(opcao)}
                          >
                            📋 Copiar
                          </button>
                          <button
                            className="btn-proto-action btn-add-receita"
                            title="Inserir na Receita Montada do Paciente"
                            onClick={() => handleEnviarParaReceitaPaciente(opcao)}
                          >
                            ➕ Prescrever
                          </button>
                        </div>
                      </div>

                      {/* Lista de Fármacos Formatados */}
                      <div className="protocolo-card-body">
                        {itensVisuais.map((itVisual, itIdx) => {
                          const displayNum = itIdx + 1;
                          const formattedTexto = itVisual.textoExibicao.replace(/^\d+\.\s*/, `${displayNum}. `);

                          return (
                            <div key={itVisual.id || itIdx} className="protocolo-item-card">
                              <div className="protocolo-item-reorder-col">
                                <button
                                  className="btn-order"
                                  disabled={itIdx === 0}
                                  title="Mover para cima"
                                  onClick={() => handleMoveItem(opIdx, itIdx, 'up')}
                                >
                                  ▲
                                </button>
                                <button
                                  className="btn-order"
                                  disabled={itIdx === itensVisuais.length - 1}
                                  title="Mover para baixo"
                                  onClick={() => handleMoveItem(opIdx, itIdx, 'down')}
                                >
                                  ▼
                                </button>
                                <button
                                  className="btn-order btn-del"
                                  title="Remover medicamento"
                                  onClick={() => handleDeleteItem(opIdx, itIdx)}
                                >
                                  ✕
                                </button>
                              </div>

                              <div className="protocolo-item-content">
                                <pre className="protocolo-item-text">{formattedTexto}</pre>
                              </div>
                            </div>
                          );
                        })}

                        {itensVisuais.length === 0 && (
                          <div className="empty" style={{ padding: '16px', fontSize: '13px' }}>
                            Nenhum medicamento nesta opção.
                          </div>
                        )}
                      </div>

                      {/* Botão para Adicionar Medicamento à Opção */}
                      <div className="protocolo-card-footer">
                        <button
                          className="btn-proto-add-drug"
                          onClick={() => handleOpenAddModal(opIdx)}
                        >
                          + Adicionar Fármaco
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Box de Conduta & Observações Clínicas Abaixo das Receitas */}
            {currentProto.observacoesClinicas && (
              <div className="protocolos-obs-box">
                <div className="protocolos-obs-title">
                  💡 Conduta Clínica, Alertas & Orientações (Guia UPA 2026)
                </div>

                <div className="protocolos-obs-grid">
                  {/* Sinais de Alarme & Critérios de Gravidade */}
                  {currentProto.observacoesClinicas.criteriosGravidade && (
                    <div className="obs-panel obs-alert">
                      <div className="obs-panel-title">🚨 Critérios de Gravidade & Sinais de Alarme</div>
                      <ul>
                        {currentProto.observacoesClinicas.criteriosGravidade.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Exames a Solicitar */}
                  {currentProto.observacoesClinicas.examesSolicitar && (
                    <div className="obs-panel obs-lab">
                      <div className="obs-panel-title">🧪 Exames a Solicitar na UPA</div>
                      <ul>
                        {currentProto.observacoesClinicas.examesSolicitar.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Orientações Não Farmacológicas */}
                  {currentProto.observacoesClinicas.orientacoesNaoFarmacologicas && (
                    <div className="obs-panel obs-info">
                      <div className="obs-panel-title">📋 Orientações Não Farmacológicas</div>
                      <ul>
                        {currentProto.observacoesClinicas.orientacoesNaoFarmacologicas.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Classificação / Escores / Notas */}
                  {(currentProto.observacoesClinicas.classificacao || currentProto.observacoesClinicas.notas) && (
                    <div className="obs-panel obs-notes">
                      <div className="obs-panel-title">🏷️ Escores, Classificações & Notas</div>
                      {currentProto.observacoesClinicas.classificacao && (
                        <p style={{ margin: '0 0 8px 0', fontWeight: 500 }}>
                          {currentProto.observacoesClinicas.classificacao}
                        </p>
                      )}
                      {currentProto.observacoesClinicas.notas && (
                        <ul>
                          {currentProto.observacoesClinicas.notas.map((n, i) => (
                            <li key={i}>{n}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="empty">Selecione uma condição clínica na barra lateral.</div>
        )}
      </main>

      {/* Modal para Adicionar Medicamento à Opção */}
      {modalOpen && (
        <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Adicionar Fármaco à Opção</h3>
              <button className="icon" onClick={() => setModalOpen(false)}>✕</button>
            </div>

            <div className="modal-body">
              <label className="lbl">Fármaco do Banco do App:</label>
              <select
                value={novoFarmacoId}
                onChange={e => {
                  const fid = e.target.value;
                  setNovoFarmacoId(fid);
                  const d = getDrugById(fid);
                  if (d && d.apresentacoes[0]) {
                    const ap = d.apresentacoes[0];
                    setNovaVia(ap.vias[0] || 'VO');
                    if (ap.mg) setNovaDose(ap.mg);
                  }
                }}
              >
                {DRUGS.map(d => (
                  <option key={d.id} value={d.id}>
                    {d.nome} ({d.classe || d.categoria})
                  </option>
                ))}
              </select>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '12px' }}>
                <div>
                  <label className="lbl">Via de Administração:</label>
                  <select value={novaVia} onChange={e => setNovaVia(e.target.value as Via)}>
                    <option value="VO">Oral (VO)</option>
                    <option value="EV">Intravenoso (EV)</option>
                    <option value="IM">Intramuscular (IM)</option>
                    <option value="NASAL">Nasal</option>
                    <option value="INALATORIA">Inalatória</option>
                    <option value="TOPICA">Tópica</option>
                    <option value="OFTALMICA">Oftálmica</option>
                    <option value="OTOLOGICA">Otológica</option>
                    <option value="SC">Subcutânea (SC)</option>
                  </select>
                </div>

                <div>
                  <label className="lbl">Modo de Uso:</label>
                  <select value={novoModo} onChange={e => setNovoModo(e.target.value as ModoUso)}>
                    <option value="continuo">Uso Contínuo / Dias Fixos</option>
                    <option value="sn">Se Necessário (SN)</option>
                    <option value="agora">Dose Imediata (Agora)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '12px' }}>
                <div>
                  <label className="lbl">Dose e Unidade:</label>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <input
                      type="number"
                      value={novaDose}
                      onChange={e => setNovaDose(Number(e.target.value) || 0)}
                      style={{ width: '80px' }}
                    />
                    <select value={novaUnid} onChange={e => setNovaUnid(e.target.value as UnidadeDose)}>
                      <option value="mg">mg</option>
                      <option value="mcg">mcg</option>
                      <option value="ml">mL</option>
                      <option value="gotas">gotas</option>
                      <option value="sachet">sachê</option>
                      <option value="puff">puff</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="lbl">Frequência:</label>
                  <select value={novaFreq} onChange={e => setNovaFreq(Number(e.target.value) || 1)}>
                    <option value={1}>1x ao dia (24/24h)</option>
                    <option value={2}>2x ao dia (12/12h)</option>
                    <option value={3}>3x ao dia (8/8h)</option>
                    <option value={4}>4x ao dia (6/6h)</option>
                  </select>
                </div>
              </div>

              {novoModo === 'continuo' && (
                <div style={{ marginTop: '12px' }}>
                  <label className="lbl">Duração (dias):</label>
                  <input
                    type="number"
                    value={novosDias}
                    onChange={e => setNovosDias(Number(e.target.value) || 1)}
                    style={{ width: '100px' }}
                  />
                </div>
              )}

              {novoModo === 'sn' && (
                <div style={{ marginTop: '12px' }}>
                  <label className="lbl">Sintoma / Condição:</label>
                  <input
                    type="text"
                    value={novaCondicao}
                    onChange={e => setNovaCondicao(e.target.value)}
                    placeholder="ex: dor ou febre, náuseas, cólica..."
                  />
                </div>
              )}
            </div>

            <div className="modal-footer" style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '18px' }}>
              <button className="btn-secondary" onClick={() => setModalOpen(false)}>Cancelar</button>
              <button className="btn-primary" onClick={handleConfirmAddFarmaco}>Inserir Medicamento</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
