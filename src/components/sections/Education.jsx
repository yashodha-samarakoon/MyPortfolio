import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 md:py-24 bg-[#0b0712] border-b border-purple-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title - Centered */}
        <div className="mb-12 text-center">
          <div className="inline-block px-3.5 py-1 rounded-full bg-purple-950/90 border border-purple-400/50 text-brand-300 text-xs font-bold tracking-wider uppercase mb-2 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
            Academic Qualifications
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Education Timeline
          </h2>
        </div>

        {/* Education List - Cards Left-Aligned */}
        <div className="space-y-6 max-w-4xl mx-auto">
          
          {/* University Card */}
          <div className="p-6 sm:p-7 card-glow space-y-4 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-900/50 pb-3 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Higher Education</span>
                <h3 className="text-xl font-extrabold text-white mt-0.5">
                  {education.university.institution}
                </h3>
                <p className="text-sm font-semibold text-purple-200">
                  {education.university.degree}
                </p>
              </div>

              <span className="text-xs text-brand-300 font-bold px-3.5 py-1 rounded-full bg-purple-950/90 border border-purple-400/40 self-start sm:self-center shadow-xs">
                {education.university.duration}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 text-left">
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider mb-2">Key Modules & Coursework</h4>
                <ul className="space-y-1.5 list-disc list-inside">
                  {education.university.relevantCoursework.map((course, cIdx) => (
                    <li key={cIdx}>{course}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white uppercase tracking-wider mb-2">Highlights</h4>
                <ul className="space-y-1.5 list-disc list-inside">
                  {education.university.achievements.map((achievement, aIdx) => (
                    <li key={aIdx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Secondary School Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.schools.map((school, sIdx) => (
              <div key={sIdx} className="p-6 card-glow space-y-3 flex flex-col justify-between text-left">
                <div className="space-y-2 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-400">School Education</span>
                    <span className="text-xs text-brand-300 font-bold px-3 py-0.5 rounded-full bg-purple-950/90 border border-purple-400/40">
                      {school.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug">
                    {school.institution}
                  </h3>

                  <p className="text-sm font-semibold text-purple-200">
                    {school.qualification}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
