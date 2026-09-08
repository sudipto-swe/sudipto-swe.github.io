import React, { useState, useEffect, useRef } from 'react';
import {
  Download, Mail, Github, BookOpen, Menu, X, ArrowUpRight,
  GraduationCap, Sun, Moon
} from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Demos', href: '#demos' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ onDownloadCV }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#about');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Highlight active section
      const sections = NAV_LINKS.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive('#' + sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#about" className="nav-brand">
            <span className="nav-brand-dot"></span>
            Sudipto Biswas
            <span style={{ color: 'var(--text-muted)', fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.78rem', marginLeft: 4 }}>/ CS PhD Applicant</span>
          </a>

          <ul className="nav-links">
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <a href={l.href} className={active === l.href ? 'active' : ''}>{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              onClick={onDownloadCV}
              className="btn btn-primary"
              style={{ padding: '7px 14px', fontSize: '0.78rem' }}
            >
              <Download size={13} />
              Curriculum Vitae
            </button>
            <button
              onClick={() => setMenuOpen(o => !o)}
              style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'none' }}
              className="mobile-menu-btn"
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <button onClick={onDownloadCV} className="btn btn-primary" style={{ marginTop: '1rem' }}>
            <Download size={14} /> Download CV
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
