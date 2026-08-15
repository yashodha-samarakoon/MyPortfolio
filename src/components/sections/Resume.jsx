import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Resume() {
  const { personalInfo } = portfolioData;

  return (
    <section id="resume" className="py-16 md:py-24 bg-darkbg-subtle border-b border-purple-900/30 text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12 text-center">
          <div className="inline-block px-3.5 py-1 rounded-full bg-purple-950/90 border border-purple-400/50 text-brand-300 text-xs font-bold tracking-wider uppercase mb-2 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
            Curriculum Vitae
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Resume / CV
          </h2>
        </div>

        {/* Resume Card */}
        <div className="max-w-3xl card-glow rounded-xl p-6 sm:p-8 space-y-6 mx-auto text-center flex flex-col items-center justify-center">
          <div className="text-center">
            <h3 className="text-xl font-extrabold text-white">
              {personalInfo.name}'s Curriculum Vitae
            </h3>
            <p className="text-sm font-semibold text-purple-200 mt-1">
              {personalInfo.title} • {personalInfo.university}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-center pt-2">
            <a
              href={personalInfo.cvPath}
              download="Yashodha_CV.pdf"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-purple-700 hover:from-brand-500 hover:to-purple-600 text-white font-semibold text-sm shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all"
            >
              <Download className="w-4 h-4 mr-2 text-white" />
              <span>Download My CV</span>
            </a>

            <a
              href={personalInfo.cvPath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-purple-950/90 hover:bg-purple-900/90 text-white border border-purple-400/50 font-semibold text-sm transition-all shadow-sm"
            >
              <ExternalLink className="w-4 h-4 mr-2 text-brand-400" />
              <span>View CV</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
