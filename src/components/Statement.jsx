import React from 'react';
import { cvData } from '../data/cvData';
import { ShieldAlert, Cpu, Code2, Sparkles } from 'lucide-react';

export default function Statement() {
  const { researchAreas } = cvData;

  const iconMap = {
    ShieldAlert: <ShieldAlert className="w-6 h-6 text-indigo-400" />,
    Cpu: <Cpu className="w-6 h-6 text-teal-400" />,
    Code2: <Code2 className="w-6 h-6 text-amber-400" />
  };

  return (
    <section id="focus" className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800/80">
      
      <div className="flex items-center gap-3 mb-8">
        <Sparkles className="w-5 h-5 text-indigo-400" />
        <h2 className="text-2xl sm:text-3xl font-serif-academic font-bold text-white tracking-tight">
          Research Directions & Philosophy
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {researchAreas.map((area, idx) => (
          <div key={idx} className="glass-card p-6 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full pointer-events-none group-hover:bg-indigo-500/10 transition"></div>
            
            <div>
              <div className="p-3 rounded-lg bg-slate-900/90 w-fit mb-4 border border-slate-800">
                {iconMap[area.icon]}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition">
                {area.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {area.description}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center text-xs font-mono-code text-indigo-400">
              <span>Pillar {idx + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
