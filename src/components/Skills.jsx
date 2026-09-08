import React from 'react';
import { cvData } from '../data/cvData';
import { Code2, PenTool, Database, Terminal } from 'lucide-react';

const CATEGORY_ICONS = {
  'Languages': <Code2 size={16} />,
  'Frameworks & Libraries': <Database size={16} />,
  'Tools & Platforms': <Terminal size={16} />,
  'Core Strengths': <PenTool size={16} />
};

export default function Skills() {
  const { technicalSkills } = cvData;

  return (
    <section id="skills" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div className="section-label">Capabilities</div>
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>
          Technical Arsenal
        </h2>

        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {technicalSkills.map((category, idx) => (
            <div key={idx} className="card card-lift" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                <div style={{ color: 'var(--indigo-light)' }}>
                  {CATEGORY_ICONS[category.category] || <Code2 size={16} />}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {category.category}
                </h3>
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
