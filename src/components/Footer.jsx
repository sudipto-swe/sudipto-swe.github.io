import React from 'react';
import { cvData } from '../data/cvData';
import { GraduationCap, Mail, Github, HelpCircle, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenDeployGuide }) {
  const { personal } = cvData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800/80 mt-16 text-slate-400">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & info */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-white font-serif-academic font-bold text-lg">
            <GraduationCap className="w-5 h-5 text-indigo-400" />
            <span>{personal.name}</span>
          </div>
          <p className="text-xs text-slate-400">
            Targeting US Ph.D. Applications in Computer Science / Software Engineering
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 pt-1 text-xs">
            <a href={`mailto:${personal.email}`} className="hover:text-indigo-300 transition flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              <span>{personal.email}</span>
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition flex items-center gap-1">
              <Github className="w-3.5 h-3.5" />
              <span>github.com/sudipto-swe</span>
            </a>
          </div>
        </div>

        {/* Deployment Helper & Scroll top */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onOpenDeployGuide}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-indigo-300 text-xs font-medium border border-slate-700 transition"
          >
            <HelpCircle className="w-4 h-4 text-indigo-400" />
            <span>GitHub Pages Deployment Guide</span>
          </button>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="mt-8 pt-6 border-t border-slate-800/60 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Sudipto Biswas. Designed for CS PhD Admissions. Built with React & Vite.
      </div>

    </footer>
  );
}
