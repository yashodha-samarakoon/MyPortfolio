import React from 'react';
import { ArrowRight, Download, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Hero() {
  const { personalInfo } = portfolioData;

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      const headerOffset = 80;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleScrollToResume = (e) => {
    e.preventDefault();
    const resumeSection = document.querySelector('#resume');
    if (resumeSection) {
      const headerOffset = 80;
      const elementPosition = resumeSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative py-16 md:py-28 bg-[#0b0712] overflow-hidden border-b border-purple-900/30 text-center">
      
      {/* Ambient Glowing Background Blobs - Purple with complementary cyan glow */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-900/40 via-brand-600/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-purple-950/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-8">
        
        {/* Profile Photo Display */}
        <div className="relative group mx-auto">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-500 via-purple-400 to-cyan-400 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden bg-[#160d27] border-2 border-brand-400/80 shadow-[0_0_35px_rgba(168,85,247,0.4)]">
            <img 
              src={personalInfo.profilePhoto} 
              alt={personalInfo.name}
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Tagline Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-purple-950/90 border border-purple-400/50 text-brand-300 text-xs font-bold tracking-wide shadow-[0_0_12px_rgba(168,85,247,0.25)] mx-auto">
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
          <span>{personalInfo.tagline || personalInfo.university}</span>
        </div>

        {/* Main Greeting & Title */}
        <div className="space-y-3 mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-100 via-brand-300 to-pink-300">Yashodha</span>.
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-purple-200">
            {personalInfo.title}
          </p>
        </div>

        {/* Statement Bio */}
        <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
          {personalInfo.shortBio}
        </p>

        {/* CTA Buttons */}
        <div className="pt-2 flex flex-wrap gap-4 items-center justify-center mx-auto">
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-purple-700 hover:from-brand-500 hover:to-purple-600 text-white font-semibold text-sm shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all group"
          >
            <span>View My Projects</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#resume"
            onClick={handleScrollToResume}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-purple-950/80 hover:bg-purple-900/90 text-white border border-purple-400/50 font-semibold text-sm transition-all shadow-sm"
          >
            <Download className="w-4 h-4 mr-2 text-brand-400" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="pt-2 flex items-center justify-center space-x-3 mx-auto">
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl border border-purple-400/40 bg-[#160d27] text-purple-200 hover:text-white hover:border-brand-400 hover:bg-purple-900/70 transition-all shadow-sm"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl border border-purple-400/40 bg-[#160d27] text-purple-200 hover:text-white hover:border-brand-400 hover:bg-purple-900/70 transition-all shadow-sm"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
