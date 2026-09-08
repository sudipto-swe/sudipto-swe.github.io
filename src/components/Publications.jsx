import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import { ChevronDown, ChevronUp, Copy, Check, Tag, FileText, Bookmark } from 'lucide-react';

const VENUE_COLORS = {
  'ACM TOSEM Target': 'badge-indigo',
  'IEEE TMC / IEEE Access Target': 'badge-teal',
  'ACM FSE Target': 'badge-gold',
  'USENIX Security Target': 'badge-rose',
};

function BibtexInline({ bibtex }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div style={{ marginTop: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>BibTeX</span>
        <button onClick={copy} className="btn btn-outline" style={{ padding: '4px 10px', fontSize: '0.72rem', gap: 5 }}>
          {copied ? <><Check size={11} style={{ color: '#6ee7b7' }} /> Copied</> : <><Copy size={11} /> Copy</>}
        </button>
      </div>
      <div className="code-block" style={{ fontSize: '0.72rem' }}>{bibtex}</div>
    </div>
  );
}

export default function Publications({ onOpenBibtex }) {
  const { manuscripts } = cvData;
  const [expanded, setExpanded] = useState('flakeguard');
  const [showBibtex, setShowBibtex] = useState({});

  const toggle = (id) => setExpanded(p => p === id ? null : id);

  return (
    <section id="publications" style={{ padding: '5rem 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-label">Academic Output</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', gap: '1rem', flexWrap: 'wrap' }}>
          <h2 className="section-title">Manuscripts & Working Papers</h2>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', background: 'var(--glass)', border: '1px solid var(--border)', borderRadius: 8, padding: '6px 14px', fontFamily: 'JetBrains Mono, monospace' }}>
            ACM TOSEM · IEEE TMC · ACM FSE · USENIX Sec
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {manuscripts.map((ms, idx) => {
            const open = expanded === ms.id;
            return (
              <div key={ms.id} className="pub-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ flex: 1, minWidth: 0 }}>

                    {/* Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                      <span className={`badge ${VENUE_COLORS[ms.badge] || 'badge-indigo'}`}>
                        <Bookmark size={11} /> {ms.badge}
                      </span>
                      <span className="badge badge-teal" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        {ms.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontFamily: 'Newsreader, Georgia, serif',
                      fontSize: '1.22rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.4,
                      marginBottom: 8
                    }}>
                      {idx + 1}. {ms.title}
                    </h3>

                    {/* Authors */}
                    <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: 6 }}>
                      {ms.authors.map((a, i) => (
                        <span key={i}>
                          <span style={a === 'Sudipto Biswas' ? { fontWeight: 700, color: '#818cf8', textDecoration: 'underline', textDecorationColor: 'rgba(129,140,248,0.4)' } : {}}>
                            {a}
                          </span>
                          {i < ms.authors.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>

                    {/* Venue */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.86rem', color: 'var(--gold-light)' }}>
                      <Tag size={12} /> {ms.targetVenue}
                    </div>
                  </div>

                  {/* Expand button */}
                  <button
                    onClick={() => toggle(ms.id)}
                    className="btn btn-outline"
                    style={{ padding: '7px 14px', fontSize: '0.82rem', flexShrink: 0, gap: 5 }}
                  >
                    {open ? <><ChevronUp size={14} /> Collapse</> : <><ChevronDown size={14} /> Abstract</>}
                  </button>
                </div>

                {/* Expanded section */}
                {open && (
                  <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', animation: 'fadeUp 0.2s ease-out' }}>

                    {/* Formula */}
                    {ms.formula && (
                      <div style={{
                        background: 'rgba(79,99,210,0.06)',
                        border: '1px solid rgba(79,99,210,0.2)',
                        borderRadius: 8,
                        padding: '0.875rem 1rem',
                        marginBottom: '1.25rem'
                      }}>
                        <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: 6 }}>
                          Core Sensitivity Formula
                        </div>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1rem', color: '#818cf8', fontWeight: 600 }}>
                          S = 0.3σ̂² + 0.3γ̂ + 0.4τ̂
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 5, lineHeight: 1.6 }}>
                          where σ̂² = norm. activation variance, γ̂ = norm. gradient norm, τ̂ = norm. Hutchinson Hessian trace (K=5)
                        </div>
                      </div>
                    )}

                    {/* Abstract */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: 8 }}>
                        Abstract
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                        {ms.abstract}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: 10 }}>
                        Key Contributions
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 8 }}>
                        {ms.highlights.map((h, i) => (
                          <div key={i} style={{
                            display: 'flex', gap: 10, alignItems: 'flex-start',
                            padding: '10px 12px',
                            background: 'rgba(255,255,255,0.025)',
                            borderRadius: 8,
                            border: '1px solid var(--border)',
                            fontSize: '0.8rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.55
                          }}>
                            <span style={{ color: 'var(--indigo-light)', fontWeight: 700, flexShrink: 0, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', marginTop: 1 }}>
                              [{String(i + 1).padStart(2, '0')}]
                            </span>
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>

                    <BibtexInline bibtex={ms.bibtex} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
