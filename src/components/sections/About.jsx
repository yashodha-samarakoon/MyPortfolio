import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-16 md:py-24 bg-darkbg-subtle border-b border-purple-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title - Centered */}
        <div className="mb-12 text-center">
          <div className="inline-block px-3.5 py-1 rounded-full bg-purple-950/90 border border-purple-400/50 text-brand-300 text-xs font-bold tracking-wider uppercase mb-2 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
            About Me
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Academic Background & Career Focus
          </h2>
        </div>

        {/* Two-Column Layout - Cards Centered, Text Inside Cards Left-Aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left flex flex-col justify-between">
            
            <div className="p-6 rounded-xl card-glow space-y-2 text-left">
              <h3 className="text-base font-bold text-white">Academic Background</h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                {about.academicBackground}
              </p>
            </div>

            <div className="p-6 rounded-xl card-glow space-y-2 text-left">
              <h4 className="text-base font-bold text-white">Learning Journey</h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                {about.learningJourney}
              </p>
            </div>

          </div>

          {/* Right Column - Currently Exploring */}
          <div className="lg:col-span-5 p-6 rounded-xl card-glow space-y-5 text-left flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold tracking-wider text-brand-400 uppercase block mb-1">
                Domain Areas
              </span>
              <h3 className="text-xl font-bold text-white">Currently Exploring</h3>
            </div>

            <div className="space-y-4">
              {about.currentlyExploring.map((item, idx) => (
                <div key={idx} className="pb-3 border-b border-purple-900/40 last:border-b-0 last:pb-0 text-left">
                  <h4 className="text-sm font-semibold text-purple-100 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-brand-400 mr-2.5 shrink-0 shadow-[0_0_8px_rgba(192,132,252,0.8)]"></span>
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5 pl-4 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
