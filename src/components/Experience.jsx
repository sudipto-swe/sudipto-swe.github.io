import React from 'react';
import { cvData } from '../data/cvData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';

export default function Experience() {
  const { experience, education } = cvData;

  return (
    <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800/80">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Research Experience Timeline */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-5 h-5 text-indigo-400" />
            <h2 className="text-2xl font-serif-academic font-bold text-white tracking-tight">
              Research Experience & Explorations
            </h2>
          </div>

          <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative group">
                
                {/* Timeline Dot */}
                <div className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:bg-indigo-500 transition"></div>

                <div className="glass-card p-5 border-slate-800/80">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-indigo-950 text-indigo-300 border border-indigo-800">
                      {exp.role}
                    </span>
                    <span className="text-xs font-mono-code text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mt-1">
                    {exp.project}
                  </h3>

                  <div className="text-xs text-amber-400 font-medium mb-3">
                    Target: {exp.target} {exp.supervisor ? `• Supervisor: ${exp.supervisor}` : ''}
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300">
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-indigo-400 font-bold shrink-0 mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Education & Coursework */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-5 h-5 text-indigo-400" />
            <h2 className="text-2xl font-serif-academic font-bold text-white tracking-tight">
              Education
            </h2>
          </div>

          <div className="glass-card p-6 bg-slate-900/60 border-indigo-500/30 space-y-4">
            <div>
              <div className="text-xs font-mono-code text-indigo-400">{education.period}</div>
              <h3 className="text-xl font-serif-academic font-bold text-white">
                {education.degree}
              </h3>
              <p className="text-sm font-medium text-slate-300 mt-0.5">
                {education.institution}, {education.location}
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-1">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Undergraduate Thesis Topic
              </div>
              <p className="text-xs text-indigo-300 font-medium">
                {education.thesis}
              </p>
              <p className="text-[11px] text-slate-400 pt-0.5">
                Supervisor: <strong className="text-slate-300">{education.supervisor}</strong>
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {education.coursework.map((course, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono-code border border-slate-700/60"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
