import React from 'react';
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-darkbg-subtle py-12 text-slate-400 text-xs border-t border-purple-900/40 text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-purple-900/30">
          
          <div className="text-center sm:text-left">
            <span className="font-extrabold text-white text-base block">Yashodha<span className="text-brand-400">.</span></span>
            <span className="text-slate-400 text-xs">
              {personalInfo.university}
            </span>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-brand-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-brand-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-300 hover:text-brand-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-purple-950/60 border border-purple-500/30 text-slate-300 hover:text-white hover:bg-purple-900/60 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="pt-6 text-center text-slate-400">
          <p>© {currentYear} Yashodha. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
