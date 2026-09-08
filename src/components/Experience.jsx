import React from 'react';
import { cvData } from '../data/cvData';
import { Building2, Calendar, Link } from 'lucide-react';

export default function Experience() {
  const { experience } = cvData;

  return (
    <section id="experience" style={{ padding: '5rem 0', background: 'var(--navy-900)' }}>
      <div className="container">
        <div className="section-label">Trajectory</div>
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>
          Research & Academic Experience
        </h2>

        <div style={{ maxWidth: 800 }}>
          {experience.map((exp, idx) => (
            <div key={idx} className="timeline-item" style={{ position: 'relative', paddingLeft: '2.5rem', paddingBottom: idx !== experience.length - 1 ? '3.5rem' : 0 }}>
              
              {/* Vertical Line */}
              {idx !== experience.length - 1 && (
                <div style={{ position: 'absolute', left: 7, top: 24, bottom: -10, width: 2, background: 'var(--border)' }}></div>
              )}
              
              {/* Dot */}
              <div style={{
                position: 'absolute', left: 0, top: 6,
                width: 16, height: 16, borderRadius: '50%',
                background: 'var(--navy-950)', border: '2px solid var(--indigo)',
                boxShadow: '0 0 0 4px var(--navy-900)',
                zIndex: 2,
                transition: 'all 0.2s'
              }} className="exp-dot"></div>

              <div className="card" style={{ padding: '2rem', transition: 'all 0.2s' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                  
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4, fontFamily: 'Newsreader, Georgia, serif' }}>
                      {exp.role}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', color: 'var(--indigo-light)', fontWeight: 500 }}>
                      <Building2 size={14} /> {exp.institution}
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', color: 'var(--text-muted)', background: 'var(--glass)', padding: '5px 12px', borderRadius: 999, border: '1px solid var(--border)' }}>
                    <Calendar size={12} /> {exp.period}
                  </div>
                </div>

                {exp.advisor && (
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1rem', padding: '8px 12px', background: 'rgba(79,99,210,0.06)', borderRadius: 6, borderLeft: '3px solid var(--indigo-light)' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Advisor:</span> {exp.advisor}
                  </div>
                )}

                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {exp.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', gap: 10, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--teal-light)', marginTop: 6, flexShrink: 0 }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }}></div>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .timeline-item:hover .exp-dot {
          background: var(--indigo);
          box-shadow: 0 0 12px rgba(79,99,210,0.6);
        }
        .timeline-item:hover .card {
          border-color: rgba(79,99,210,0.3);
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}
