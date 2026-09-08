import React from 'react';
import { cvData } from '../data/cvData';
import { Mail, Github, BookOpen, Download, MapPin, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Hero({ onDownloadCV }) {
  const { personal, stats } = cvData;

  return (
    <section id="about" className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Target PhD Banner */}
      <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium tracking-wide">
        <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-ping"></span>
        <span className="flex h-2 w-2 rounded-full bg-indigo-500 -ml-4"></span>
        <Award className="w-4 h-4 text-indigo-400 ml-1" />
        <span>{personal.targetDegree}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left main info */}
        <div className="lg:col-span-8 space-y-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-serif-academic font-bold tracking-tight text-white">
              {personal.name}
            </h1>
            <p className="mt-2 text-xl font-medium text-indigo-400">
              {personal.title} — <span className="text-slate-300 font-normal">{personal.subtitle}</span>
            </p>
            <p className="mt-1 text-sm text-slate-400 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>{personal.institution}, {personal.location}</span>
            </p>
          </div>

          <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
            {personal.about}
          </p>

          {/* Research Interest Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {["Software Testing & QA", "Flaky Test Detection", "Benchmark Reproducibility", "On-Device ML", "Model Quantization", "AST Code Analysis"].map((tag, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 rounded-md text-xs font-mono-code bg-slate-800/80 text-indigo-300 border border-slate-700/60"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Contact / Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition shadow-lg shadow-indigo-600/20"
            >
              <Mail className="w-4 h-4" />
              <span>Contact via Email</span>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-sm transition"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href={personal.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-sm transition"
            >
              <BookOpen className="w-4 h-4" />
              <span>Google Scholar</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <button
              onClick={onDownloadCV}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-teal-600/90 hover:bg-teal-500 text-white font-medium text-sm transition shadow-lg shadow-teal-600/20"
            >
              <Download className="w-4 h-4" />
              <span>CV (PDF)</span>
            </button>
          </div>
        </div>

        {/* Right Stats & Highlights */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-6 glass-card bg-slate-900/60 border-indigo-500/20">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>Research Metrics</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-2xl font-bold font-serif-academic text-indigo-400">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-200 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 leading-tight">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Undergraduate Thesis Supervisor:</span>
              <span className="font-semibold text-indigo-300">Dr. Md. Abdul Kader</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
