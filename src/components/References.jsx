import React from 'react';
import { cvData } from '../data/cvData';
import { Users, Mail, BookOpen, ExternalLink, GraduationCap } from 'lucide-react';

export default function References() {
  const { references } = cvData;

  return (
    <section id="references" className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800/80">
      
      <div className="flex items-center gap-3 mb-8">
        <Users className="w-5 h-5 text-indigo-400" />
        <h2 className="text-2xl font-serif-academic font-bold text-white tracking-tight">
          Academic References
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {references.map((ref, idx) => (
          <div key={idx} className="glass-card p-6 border-slate-800 flex flex-col justify-between">
            <div>
              <div className="p-2.5 rounded-lg bg-indigo-950/80 w-fit mb-3 text-indigo-400 border border-indigo-800/60">
                <GraduationCap className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-bold text-white">
                {ref.name}
              </h3>
              
              <div className="text-xs font-semibold text-indigo-300 mt-0.5">
                {ref.role}
              </div>

              <p className="text-xs text-slate-300 mt-2">
                {ref.department}<br />
                <span className="text-slate-400">{ref.institution}</span>
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2 text-xs">
              <a
                href={`mailto:${ref.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-indigo-400 transition"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span className="truncate">{ref.email}</span>
              </a>

              <a
                href={ref.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition"
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Google Scholar Profile</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
