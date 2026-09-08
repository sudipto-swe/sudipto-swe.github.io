import React from 'react';
import { X, Terminal, CheckCircle2, Globe, Github } from 'lucide-react';

export default function DeployModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm fade-in">
      <div className="glass-card max-w-3xl w-full bg-slate-900 border-indigo-500/30 p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4 text-indigo-400">
          <Globe className="w-6 h-6" />
          <h3 className="text-xl font-serif-academic font-bold text-white">
            GitHub Pages-এ ওয়েবসাইট লাইভ করার উপায় (Deployment Steps)
          </h3>
        </div>

        <p className="text-xs text-slate-300 mb-6 leading-relaxed">
          আপনার এই ওয়েবসাইটটি সম্পূর্ণভাবে GitHub Pages-এ ফ্রী-তে হোস্ট করার উপযোগী করে তৈরি করা হয়েছে। নিচে ২টি সহজ উপায় দেওয়া হলো:
        </p>

        {/* Option 1: Automatic gh-pages npm script */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <h4 className="text-sm font-bold text-teal-400 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>উপায় ১: Command Line দিয়ে ১-ক্লিকে ডিপ্লয় (Recommended)</span>
            </h4>

            <ol className="list-decimal list-inside space-y-2 text-xs text-slate-300 leading-relaxed font-sans">
              <li>আপনার টার্মিনালে পোর্টফোলিও ফোল্ডারে থাকুন (<code className="text-indigo-300 font-mono-code">/home/suuu/A1/Portfolio</code>)।</li>
              <li>নতুন GitHub Repository তৈরি করুন (যেমন: <code className="text-indigo-300 font-mono-code">sudipto-swe.github.io</code> অথবা <code className="text-indigo-300 font-mono-code">portfolio</code>)।</li>
              <li>টার্মিনালে নিচের কমান্ডগুলো চালান:</li>
            </ol>

            <pre className="p-3 rounded-lg bg-slate-900 text-indigo-300 font-mono-code text-xs leading-relaxed border border-slate-800">
{`git init
git add .
git commit -m "Initial commit of US PhD Academic Portfolio"
git branch -M main
git remote add origin https://github.com/sudipto-swe/sudipto-swe.github.io.git
git push -u origin main

# ওয়েবসাইট লাইভ করতে চালান:
npm run deploy`}
            </pre>
            
            <p className="text-[11px] text-slate-400">
              <strong className="text-emerald-400">npm run deploy</strong> কমান্ডটি অটোমেটিক বিল্ড তৈরি করে <code className="text-indigo-300">gh-pages</code> ব্রাঞ্চে আপলোড করে দেবে এবং ৩-৪ মিনিটের মধ্যে আপনার ওয়েবসাইট <code className="text-indigo-300">https://sudipto-swe.github.io</code> ঠিকানায় লাইভ হয়ে যাবে!
            </p>
          </div>
        </div>

        {/* Option 2: GitHub Actions */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 mb-6">
          <h4 className="text-sm font-bold text-indigo-400 flex items-center gap-2">
            <Github className="w-4 h-4" />
            <span>উপায় ২: GitHub Actions Workflow (Auto Deploy on Push)</span>
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            প্রজেক্টের <code className="text-indigo-300 font-mono-code">.github/workflows/deploy.yml</code> ফাইলে অটোমেটিক ডিপ্লয়মেন্ট সেটআপ করা আছে। আপনি শুধু GitHub-এ কোড পুশ করলেই এটি প্রতিবার অটোমেটিক ওয়েবাসাইট আপডেট করে দেবে।
          </p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition"
          >
            বুঝেছি (Got It)
          </button>
        </div>

      </div>
    </div>
  );
}
