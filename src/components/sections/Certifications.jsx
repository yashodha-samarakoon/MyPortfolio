import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-16 md:py-24 bg-[#0b0712] border-b border-purple-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title - Centered */}
        <div className="mb-12 text-center">
          <div className="inline-block px-3.5 py-1 rounded-full bg-amber-950/90 border border-amber-400/50 text-amber-300 text-xs font-bold tracking-wider uppercase mb-2 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
            Learning & Recognition
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Certifications & Achievements
          </h2>
        </div>

        {/* Certifications Grid - Text Left Aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((item) => (
            <div
              key={item.id}
              className="p-6 card-glow space-y-3 flex flex-col justify-between text-left"
            >
              <div className="space-y-3 flex flex-col text-left w-full">
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                    {item.category}
                  </span>

                  <span className="text-xs text-amber-300 font-bold px-2.5 py-0.5 rounded-full bg-amber-950/90 border border-amber-400/40">
                    {item.date}
                  </span>
                </div>

                <div className="flex items-start space-x-3 text-left">
                  <div className="p-2.5 rounded-xl bg-amber-950/90 border border-amber-400/50 text-amber-300 shrink-0 shadow-[0_0_12px_rgba(245,158,11,0.25)]">
                    <Award className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-white leading-snug text-left">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-purple-200 mt-0.5 text-left">
                      {item.organization}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-200 leading-relaxed text-left">
                  {item.description}
                </p>
              </div>

              {item.credentialUrl ? (
                <div className="pt-3 border-t border-purple-900/40 w-full text-left">
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-xs font-bold text-brand-400 hover:text-brand-300 transition-colors"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              ) : (
                <div className="pt-3 border-t border-purple-900/40 w-full text-left text-xs text-slate-300 font-medium">
                  Physical Certificate Awarded
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
