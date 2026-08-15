import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-16 md:py-24 bg-[#0b0712] border-b border-purple-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title - Centered */}
        <div className="mb-12 text-center">
          <div className="inline-block px-3.5 py-1 rounded-full bg-purple-950/90 border border-purple-400/50 text-brand-300 text-xs font-bold tracking-wider uppercase mb-2 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
            Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Skills & Knowledge Base
          </h2>
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.categories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-xl card-glow flex flex-col justify-between space-y-4 text-left"
            >
              <div>
                <h3 className="text-base font-bold text-white pb-3 border-b border-purple-900/50 mb-4 text-left">
                  {category.name}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between py-1 border-b border-purple-950/40 last:border-b-0"
                    >
                      <span className="text-sm font-medium text-slate-200 text-left">
                        {skill.name}
                      </span>
                      <span className="text-xs text-brand-300 font-semibold px-2.5 py-0.5 rounded-full bg-purple-950/90 border border-purple-400/40 shadow-xs">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
