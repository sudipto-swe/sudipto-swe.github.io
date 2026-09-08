import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import { BookOpen, FileText, ChevronDown, ChevronUp, Copy, Check, ExternalLink, Tag } from 'lucide-react';

export default function Publications({ onOpenBibtex }) {
  const { manuscripts } = cvData;
  const [expandedId, setExpandedId] = useState('flakeguard'); // default open first paper

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="publications" className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800/80">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            <h2 className="text-2xl sm:text-3xl font-serif-academic font-bold text-white tracking-tight">
              Manuscripts & Working Papers
            </h2>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Academic manuscripts derived from formal undergraduate research and independent investigations.
          </p>
        </div>

        <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 text-xs font-mono-code border border-indigo-800">
          Target Venues: ACM TOSEM • IEEE TMC • ACM FSE • USENIX Sec
        </span>
      </div>

      <div className="space-y-6">
        {manuscripts.map((item, idx) => {
          const isExpanded = expandedId === item.id;

          return (
            <div key={item.id} className="glass-card p-6 border-slate-800 transition">
              
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-indigo-900/60 text-indigo-300 border border-indigo-700/50">
                      {item.badge}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono-code bg-slate-800 text-slate-300">
                      {item.status} ({item.year})
                    </span>
                  </div>

                  <h3 className="text-xl font-serif-academic font-bold text-white leading-snug">
                    {idx + 1}. {item.title}
                  </h3>

                  {/* Authors */}
                  <div className="text-sm text-slate-300">
                    {item.authors.map((author, aIdx) => (
                      <span key={aIdx} className={author === "Sudipto Biswas" ? "font-bold text-indigo-300 underline decoration-indigo-500/50" : ""}>
                        {author}{aIdx < item.authors.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </div>

                  {/* Target Venue */}
                  <div className="text-xs text-amber-400 font-medium flex items-center gap-1.5 pt-1">
                    <Tag className="w-3.5 h-3.5 text-amber-400" />
                    <span>{item.targetVenue}</span>
                  </div>

                </div>

                {/* Quick Actions */}
                <div className="flex items-center gap-2 self-start">
                  <button
                    onClick={() => onOpenBibtex(item)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
                  >
                    <FileText className="w-3.5 h-3.5 text-indigo-400" />
                    <span>BibTeX</span>
                  </button>

                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-950/80 hover:bg-indigo-900 text-indigo-300 text-xs font-medium border border-indigo-800/80 transition"
                  >
                    <span>{isExpanded ? "Hide Abstract" : "Abstract & Findings"}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Expandable Section */}
              {isExpanded && (
                <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-4 fade-in">
                  
                  {/* LaTeX Formula if present */}
                  {item.formula && (
                    <div className="math-box my-3">
                      <div className="text-[11px] text-slate-400 mb-1">Composite Sub-Layer Sensitivity Metric:</div>
                      <div className="text-base text-indigo-300 font-mono-code">
                        {item.formula}
                      </div>
                    </div>
                  )}

                  {/* Abstract */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Manuscript Abstract
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-3.5 rounded-lg border border-slate-800/60">
                      {item.abstract}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Key Methodological Contributions
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {item.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 bg-slate-900/40 p-2 rounded border border-slate-800/40">
                          <span className="text-indigo-400 font-bold">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              )}

            </div>
          );
        })}
      </div>

    </section>
  );
}
