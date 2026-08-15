import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 md:py-24 bg-darkbg-subtle border-b border-purple-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title - Centered */}
        <div className="mb-12 text-center">
          <div className="inline-block px-3.5 py-1 rounded-full bg-purple-950/90 border border-purple-400/50 text-brand-300 text-xs font-bold tracking-wider uppercase mb-2 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
            Exposure & Roles
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Experience & Leadership
          </h2>
        </div>

        {/* Experience Cards - Text Left Aligned */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {experience.map((item) => (
            <div
              key={item.id}
              className="p-6 card-glow space-y-3 text-left flex flex-col justify-between"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-purple-900/40 pb-3 w-full text-left">
                <div className="text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-400 block">{item.type}</span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    {item.title} — {item.organization}
                  </h3>
                </div>

                <span className="text-xs text-brand-300 font-semibold px-3 py-1 rounded-full bg-purple-950/90 border border-purple-400/40 self-start sm:self-center">
                  {item.duration}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed text-left">
                {item.description}
              </p>

              {item.highlights && item.highlights.length > 0 && (
                <div className="pt-1 text-left w-full">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1.5 text-left">Highlights</h4>
                  <ul className="space-y-1 list-disc list-inside text-xs text-slate-200 text-left">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
