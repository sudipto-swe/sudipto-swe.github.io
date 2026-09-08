import React from 'react';
import { cvData } from '../data/cvData';
import { Code, Cpu, Terminal, Sparkles } from 'lucide-react';

export default function Skills() {
  const { skills } = cvData;

  return (
    <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800/80">
      
      <div className="flex items-center gap-3 mb-8">
        <Sparkles className="w-5 h-5 text-indigo-400" />
        <h2 className="text-2xl font-serif-academic font-bold text-white tracking-tight">
          Technical Skills & Research Methodology
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Languages */}
        <div className="glass-card p-6 border-slate-800">
          <div className="flex items-center gap-2 mb-4 text-indigo-400">
            <Code className="w-5 h-5" />
            <h3 className="text-base font-bold text-white">Programming Languages</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.programming.map((lang, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-slate-900 text-slate-200 text-xs font-mono-code border border-slate-800 hover:border-indigo-500/50 transition"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* ML & Program Analysis */}
        <div className="glass-card p-6 border-slate-800">
          <div className="flex items-center gap-2 mb-4 text-teal-400">
            <Cpu className="w-5 h-5" />
            <h3 className="text-base font-bold text-white">ML & Program Analysis</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.mlAndAnalysis.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-slate-900 text-teal-300 text-xs font-mono-code border border-slate-800 hover:border-teal-500/50 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Developer Tools */}
        <div className="glass-card p-6 border-slate-800">
          <div className="flex items-center gap-2 mb-4 text-amber-400">
            <Terminal className="w-5 h-5" />
            <h3 className="text-base font-bold text-white">Tools & Infrastructure</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.toolsAndInfra.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-slate-900 text-amber-300 text-xs font-mono-code border border-slate-800 hover:border-amber-500/50 transition"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
