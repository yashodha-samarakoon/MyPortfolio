import React, { useState } from 'react';
import { ArrowUpRight, Clock, CheckCircle, Link as LinkIcon } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import ProjectModal from '../ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 md:py-24 bg-darkbg-subtle border-b border-purple-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title - Centered */}
        <div className="mb-12 text-center">
          <div className="inline-block px-3.5 py-1 rounded-full bg-purple-950/90 border border-purple-400/50 text-brand-300 text-xs font-bold tracking-wider uppercase mb-2 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
            Portfolio
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Academic & University Projects
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 card-glow flex flex-col justify-between space-y-5 text-left"
            >
              <div className="space-y-3.5 flex flex-col text-left">
                
                {/* Category & Status Pill */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                    {project.category}
                  </span>

                  {project.status === "Currently Developing" ? (
                    <span className="inline-flex items-center text-xs font-bold px-3 py-1 rounded-full bg-cyan-950/90 border border-cyan-400/60 text-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.25)]">
                      <Clock className="w-3.5 h-3.5 mr-1.5 animate-spin text-cyan-300" />
                      Currently Developing
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-xs font-bold px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-400/60 text-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.25)]">
                      <CheckCircle className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                      Completed
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-extrabold text-white leading-snug text-left">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-200 leading-relaxed text-left">
                  {project.shortDescription}
                </p>

                {project.myContribution && (
                  <div className="inner-block p-3.5 space-y-1 w-full text-left">
                    <span className="text-xs font-bold text-brand-300 block text-left">My Contribution:</span>
                    <p className="text-xs text-slate-200 text-left">{project.myContribution}</p>
                  </div>
                )}

                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap justify-start gap-1.5 pt-1">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded bg-purple-950/90 border border-purple-400/40 text-xs font-semibold text-purple-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {project.projectLinksNote && (
                  <div className="pt-2 text-xs font-semibold text-amber-300 flex items-center space-x-1.5">
                    <LinkIcon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{project.projectLinksNote}</span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-purple-900/50 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center text-xs font-bold text-brand-400 hover:text-brand-300 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal render */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}

