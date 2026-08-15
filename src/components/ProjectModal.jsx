import React, { useEffect } from 'react';
import { X, Link as LinkIcon } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative bg-[#140c21] w-full max-w-2xl rounded-xl shadow-[0_0_40px_rgba(168,85,247,0.3)] border border-purple-500/40 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-6 bg-[#0f091a] border-b border-purple-900/50 flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
              {project.category}
            </span>
            <h3 id="modal-title" className="text-xl font-bold text-white">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-purple-950/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-5 text-left text-slate-300 text-sm">
          
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Description</h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {project.myContribution && (
            <div className="p-4 rounded-lg bg-purple-950/40 border border-purple-500/25 space-y-1">
              <h4 className="text-xs font-bold text-brand-300 uppercase tracking-wider">My Contribution</h4>
              <p className="text-sm text-slate-200">
                {project.myContribution}
              </p>
            </div>
          )}

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Key Features</h4>
              <ul className="space-y-1 list-disc list-inside text-xs text-slate-300">
                {project.keyFeatures.map((feature, fIdx) => (
                  <li key={fIdx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="px-2.5 py-0.5 rounded bg-purple-950/70 border border-purple-500/30 text-xs font-medium text-purple-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.projectLinksNote && (
            <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-500/30 flex items-center space-x-2 text-xs font-semibold text-amber-300">
              <LinkIcon className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{project.projectLinksNote}</span>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#0f091a] border-t border-purple-900/50 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-medium text-xs shadow-md transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

