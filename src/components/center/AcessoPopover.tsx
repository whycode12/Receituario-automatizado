import React, { useState, useRef, useEffect } from 'react';
import { Farmaco, Apresentacao } from '../../types';

interface AcessoPopoverProps {
  drug: Farmaco;
  apres: Apresentacao;
}

export const AcessoPopover: React.FC<AcessoPopoverProps> = ({ drug, apres }) => {
  const [acessoOpen, setAcessoOpen] = useState(false);
  const accWrapRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (acessoOpen && accWrapRef.current && !accWrapRef.current.contains(e.target as Node)) {
        setAcessoOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [acessoOpen]);

  if (!apres.acesso) return null;

  return (
    <span className="acc-wrap" ref={accWrapRef}>
      <button
        className="acc"
        onClick={() => setAcessoOpen(!acessoOpen)}
        title="Disponibilidade no SUS (apresentação selecionada)"
      >
        <span className={`abadge ${apres.acesso.rename ? 'on' : 'off'}`}>RENAME</span>
        <span className={`abadge ${apres.acesso.fp ? 'on' : 'off'}`}>F. POPULAR</span>
      </button>
      <div className={`apop ${acessoOpen ? 'open' : ''}`}>
        <div className="apt">Disponibilidade no SUS por apresentação</div>
        {drug.apresentacoes
          .filter(a => a.acesso)
          .map(a => (
            <div key={a.id} className={`arow ${a.id === apres.id ? 'cur' : ''}`}>
              <span className="an">{a.nome}</span>
              <span className={`ai ${a.acesso?.rename ? 'y' : 'n'}`}>
                {a.acesso?.rename ? '✓' : '✗'} RENAME
              </span>
              <span className={`ai ${a.acesso?.fp ? 'y' : 'n'}`}>
                {a.acesso?.fp ? '✓' : '✗'} F. Popular
              </span>
            </div>
          ))}
        <div className="afo">
          {drug.acessoFonte || ''}
          <br />
          A disponibilidade real depende da REMUME do município.
        </div>
      </div>
    </span>
  );
};
