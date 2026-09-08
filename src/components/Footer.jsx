import React from 'react';
import { cvData } from '../data/cvData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const { personal } = cvData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href={`mailto:${personal.email}`} className="btn btn-outline" style={{ width: 44, height: 44, padding: 0, justifyContent: 'center', borderRadius: '50%' }}>
              <Mail size={18} />
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: 44, height: 44, padding: 0, justifyContent: 'center', borderRadius: '50%' }}>
              <Github size={18} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: 44, height: 44, padding: 0, justifyContent: 'center', borderRadius: '50%' }}>
              <Linkedin size={18} />
            </a>
          </div>

          <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.6 }}>
            <div>&copy; {currentYear} {personal.name}. All rights reserved.</div>
            <div style={{ marginTop: 4 }}>
              Actively seeking Ph.D. positions for Fall 2027 / 2026.
            </div>
          </div>

          <button 
            onClick={scrollToTop}
            style={{ 
              background: 'none', border: 'none', color: 'var(--text-secondary)', 
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
              fontSize: '0.75rem', marginTop: '1rem', transition: 'color 0.2s'
            }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--indigo-light)'}
            onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            Back to top <ArrowUp size={14} />
          </button>
          
        </div>
      </div>
    </footer>
  );
}
