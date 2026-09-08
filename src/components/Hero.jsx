import React, { useEffect, useRef, useState } from 'react';
import { cvData } from '../data/cvData';
import { Mail, Github, BookOpen, Download, MapPin, Phone, ArrowUpRight, ChevronDown } from 'lucide-react';

function useCountUp(target, duration = 1800, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const targetStr = String(target);
    const numeric = parseFloat(targetStr.replace(/[^0-9.]/g, '')) || 0;
    const suffix  = targetStr.replace(/[0-9.,]/g, '');
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(+(numeric * eased).toFixed(numeric % 1 !== 0 ? 1 : 0));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return val;
}

function StatCard({ stat, animate }) {
  const num = useCountUp(stat.value, 1600, animate);
  const suffix = stat.value.replace(/[0-9.,]/g, '');
  return (
    <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
      <div className="stat-number" style={{ color: 'var(--indigo-light)' }}>
        {animate ? `${num}${suffix}` : stat.value}
      </div>
      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', marginTop: 4 }}>
        {stat.label}
      </div>
      <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: 3, lineHeight: 1.4 }}>
        {stat.detail}
      </div>
    </div>
  );
}

export default function Hero({ onDownloadCV }) {
  const { personal, stats } = cvData;
  const heroRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.2 });
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="hero" ref={heroRef}>
      <div className="hero-bg"></div>
      <div className="hero-grid-lines"></div>

      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem', position: 'relative', zIndex: 1, width: '100%' }}>
        
        <div className="hero-layout" style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>

          {/* ── Left: Bio ── */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Status badge */}
            <div className={`fade-up fade-up-1`} style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '5px 14px', borderRadius: 999,
                background: 'rgba(79,99,210,0.12)', border: '1px solid rgba(79,99,210,0.3)',
                fontSize: '0.72rem', fontWeight: 600, color: '#a5b4fc',
                letterSpacing: '0.03em'
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#818cf8', display: 'inline-block' }}></span>
                Targeting Ph.D. in CS / Software Engineering — Fall 2027 / 2026
              </span>
            </div>

            {/* Name */}
            <h1 className="fade-up fade-up-2" style={{
              fontFamily: 'Newsreader, Georgia, serif',
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              fontWeight: 700,
              color: '#f8fafc',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '0.5rem'
            }}>
              Sudipto Biswas
            </h1>

            {/* Title line */}
            <p className="fade-up fade-up-2" style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              fontWeight: 400,
              marginBottom: '1.5rem',
              lineHeight: 1.5
            }}>
              <span style={{ color: '#818cf8', fontWeight: 600 }}>Undergraduate Researcher</span>
              {' · '}B.Sc. Software Engineering
              {' · '}Daffodil International University
            </p>

            {/* About text */}
            <p className="fade-up fade-up-3" style={{
              color: 'var(--text-secondary)',
              fontSize: '0.93rem',
              lineHeight: 1.8,
              maxWidth: 560,
              marginBottom: '1.75rem'
            }}>
              My research spans <strong style={{ color: 'var(--text-primary)' }}>empirical software testing</strong>, 
              flaky test benchmark reproducibility, and{' '}
              <strong style={{ color: 'var(--text-primary)' }}>on-device LLM quantization</strong> for 
              edge hardware. I am actively seeking Ph.D. positions in the United States for Fall 2027 / 2026 
              in Computer Science and Software Engineering.
            </p>

            {/* Research tags */}
            <div className="fade-up fade-up-3" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '2rem' }}>
              {['Software Testing', 'Flaky Test Detection', 'Benchmark Reproducibility', 'On-Device ML', 'LLM Quantization', 'AST Analysis'].map(t => (
                <span key={t} className="badge badge-indigo">{t}</span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="fade-up fade-up-4" style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <a href={`mailto:${personal.email}`} className="btn btn-primary">
                <Mail size={14} /> Contact Me
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <Github size={14} /> GitHub <ArrowUpRight size={12} />
              </a>
              <a href={personal.scholar} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <BookOpen size={14} /> Google Scholar <ArrowUpRight size={12} />
              </a>
              <button onClick={onDownloadCV} className="btn btn-teal">
                <Download size={14} /> CV (PDF)
              </button>
            </div>

            {/* Contact meta */}
            <div className="fade-up fade-up-4" style={{ display: 'flex', gap: 20, marginTop: '1.25rem', flexWrap: 'wrap' }}>
              {[
                { icon: <Mail size={13} />, text: personal.email },
                { icon: <Phone size={13} />, text: personal.phone },
                { icon: <MapPin size={13} />, text: `${personal.institution}, ${personal.location}` },
              ].map(({ icon, text }) => (
                <span key={text} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--indigo-light)' }}>{icon}</span> {text}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Photo + Stats ── */}
          <div className="fade-up fade-up-2" style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            {/* Photo */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'relative', zIndex: 1,
                width: 220, height: 270,
                borderRadius: 18,
                overflow: 'hidden',
                border: '1px solid var(--border-strong)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
              }}>
                <img
                  src="./profile.jpg"
                  alt="Sudipto Biswas"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>
              {/* Institution badge */}
              <div style={{
                position: 'absolute', bottom: -14, left: '50%', transform: 'translateX(-50%)',
                background: 'var(--navy-800)', border: '1px solid var(--border-strong)',
                borderRadius: 8, padding: '5px 12px',
                display: 'flex', alignItems: 'center', gap: 6,
                whiteSpace: 'nowrap', boxShadow: '0 4px 16px rgba(0,0,0,0.4)', zIndex: 2
              }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>B.Sc. SWE</span>
                <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--text-muted)' }}></span>
                <span style={{ fontSize: '0.7rem', color: '#818cf8', fontWeight: 600 }}>DIU, 2026</span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="stat-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, width: 260, marginTop: '1rem' }}>
              {stats.map((s, i) => <StatCard key={i} stat={s} animate={inView} />)}
            </div>
          </div>

        </div>

        {/* Scroll cue */}
        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
          <a href="#research" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, color: 'var(--text-muted)', fontSize: '0.7rem', textDecoration: 'none', opacity: 0.6 }}>
            <span>Scroll to explore</span>
            <ChevronDown size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
