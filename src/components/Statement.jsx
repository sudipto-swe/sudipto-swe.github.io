import React from 'react';
import { cvData } from '../data/cvData';
import { ShieldAlert, Cpu, Code2 } from 'lucide-react';

const ICONS = {
  ShieldAlert: <ShieldAlert size={22} />,
  Cpu: <Cpu size={22} />,
  Code2: <Code2 size={22} />,
};

const COLORS = ['var(--indigo)', 'var(--teal)', 'var(--gold)'];

export default function Statement() {
  const { researchAreas } = cvData;

  return (
    <section id="research" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div className="section-label">Research Philosophy</div>
        <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
          Core Research Directions
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: 540, marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Three interconnected research pillars addressing evaluation rigour, 
          hardware efficiency, and code generation robustness.
        </p>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
          {researchAreas.map((area, idx) => (
            <div key={idx} className="card card-lift" style={{ padding: '1.75rem', position: 'relative', overflow: 'hidden' }}>
              {/* Accent corner */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: 80, height: 80,
                background: `radial-gradient(circle at top right, ${COLORS[idx]}18, transparent 70%)`,
                pointerEvents: 'none'
              }}></div>

              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: `${COLORS[idx]}18`,
                border: `1px solid ${COLORS[idx]}35`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: COLORS[idx],
                marginBottom: '1rem'
              }}>
                {ICONS[area.icon]}
              </div>

              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: COLORS[idx], letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>
                Pillar {idx + 1}
              </div>

              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10, lineHeight: 1.35 }}>
                {area.title}
              </h3>

              <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
