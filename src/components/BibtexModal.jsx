import React, { useState } from 'react';
import { X, Copy, Check, FileText } from 'lucide-react';

export default function BibtexModal({ manuscript, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!manuscript) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(manuscript.bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm fade-in">
      <div className="glass-card max-w-2xl w-full bg-slate-900 border-indigo-500/30 p-6 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-4 text-indigo-400">
          <FileText className="w-5 h-5" />
          <h3 className="text-lg font-serif-academic font-bold text-white">
            BibTeX Citation
          </h3>
        </div>

        <p className="text-xs text-slate-300 mb-3">
          Citation entry for: <strong className="text-indigo-300">{manuscript.title}</strong>
        </p>

        {/* Code block */}
        <div className="relative mb-6">
          <pre className="p-4 rounded-xl bg-slate-950 text-indigo-300 font-mono-code text-xs overflow-x-auto border border-slate-800 leading-relaxed">
            {manuscript.bibtex}
          </pre>
        </div>

        {/* Modal actions */}
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition"
          >
            Close
          </button>
          
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition shadow-lg shadow-indigo-600/25"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Copied to Clipboard!" : "Copy BibTeX"}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
