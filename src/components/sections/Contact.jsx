import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0b0712] border-b border-purple-900/30 text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12 text-center">
          <div className="inline-block px-3.5 py-1 rounded-full bg-purple-950/90 border border-purple-400/50 text-brand-300 text-xs font-bold tracking-wider uppercase mb-2 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Contact Me
          </h2>
          <p className="mt-2 text-sm text-slate-200">
            Feel free to connect for academic discussions, project collaborations, or career opportunities.
          </p>
        </div>

        {/* Contact Grid Cards */}
        <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 mx-auto">
          
          {/* Email Card */}
          <div className="p-6 rounded-xl card-glow space-y-4 flex flex-col items-center justify-between text-center">
            <div className="space-y-2 flex flex-col items-center text-center">
              <div className="p-2.5 rounded-xl bg-purple-950/90 border border-purple-400/50 text-brand-300 shadow-[0_0_12px_rgba(168,85,247,0.25)]">
                <Mail className="w-5 h-5 text-brand-400" />
              </div>
              <h3 className="text-base font-bold text-white">Email</h3>
              <p className="text-xs font-mono text-slate-200 break-all text-center">
                {personalInfo.email}
              </p>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center px-3.5 py-2 rounded-lg bg-purple-950/90 border border-purple-400/50 text-white hover:bg-purple-900/90 hover:border-brand-400 font-bold text-xs transition-colors w-full"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 mr-1 text-brand-400" />
                  Copy Email
                </>
              )}
            </button>
          </div>

          {/* LinkedIn Card */}
          <div className="p-6 rounded-xl card-glow space-y-4 flex flex-col items-center justify-between text-center">
            <div className="space-y-2 flex flex-col items-center text-center">
              <div className="p-2.5 rounded-xl bg-purple-950/90 border border-purple-400/50 text-brand-300 shadow-[0_0_12px_rgba(168,85,247,0.25)]">
                <Linkedin className="w-5 h-5 text-brand-400" />
              </div>
              <h3 className="text-base font-bold text-white">LinkedIn</h3>
              <p className="text-xs font-mono text-slate-200 break-all text-center">
                yashodha-samarakoon
              </p>
            </div>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-3.5 py-2 rounded-lg bg-purple-950/90 border border-purple-400/50 text-white hover:bg-purple-900/90 hover:border-brand-400 font-bold text-xs transition-colors w-full"
            >
              Connect
            </a>
          </div>

          {/* GitHub Card */}
          <div className="p-6 rounded-xl card-glow space-y-4 flex flex-col items-center justify-between text-center">
            <div className="space-y-2 flex flex-col items-center text-center">
              <div className="p-2.5 rounded-xl bg-purple-950/90 border border-purple-400/50 text-brand-300 shadow-[0_0_12px_rgba(168,85,247,0.25)]">
                <Github className="w-5 h-5 text-brand-400" />
              </div>
              <h3 className="text-base font-bold text-white">GitHub</h3>
              <p className="text-xs font-mono text-slate-200 break-all text-center">
                yashodha-samarakoon
              </p>
            </div>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-3.5 py-2 rounded-lg bg-purple-950/90 border border-purple-400/50 text-white hover:bg-purple-900/90 hover:border-brand-400 font-bold text-xs transition-colors w-full"
            >
              View Profile
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
