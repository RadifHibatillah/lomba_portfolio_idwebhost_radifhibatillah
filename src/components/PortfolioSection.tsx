import { useState } from 'react';
import { ExternalLink, Github, Layers, Code, Play, X, ArrowUpRight, CheckCircle } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

interface PortfolioSectionProps {
  accentColor: 'blue' | 'purple';
}

export function PortfolioSection({ accentColor }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'python' | 'uiux'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const accentText = accentColor === 'blue' ? 'text-blue-400' : 'text-purple-400';
  const accentBg = accentColor === 'blue' ? 'bg-blue-500/10 text-blue-400' : 'bg-purple-500/10 text-purple-400';
  const accentBorder = accentColor === 'blue' ? 'border-blue-500/30' : 'border-purple-500/30';
  const accentButton = accentColor === 'blue' ? 'bg-blue-600 hover:bg-blue-500' : 'bg-purple-600 hover:bg-purple-500';

  const filterOptions = [
    { id: 'all', label: 'Semua Karya' },
    { id: 'web', label: 'Web Development' },
    { id: 'python', label: 'Python Scripting' },
    { id: 'uiux', label: 'UI/UX Design' },
  ] as const;

  // Filter projects based on active pill
  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section 
      id="portfolio" 
      className="relative py-24 border-t border-slate-900 bg-slate-950/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left">
            <p className={`text-xs font-mono tracking-widest uppercase font-semibold ${accentText}`}>
              [03 // COMPREHENSIVE ARCHIVE]
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-1.5 tracking-tight">
              Featured <span className="font-serif italic font-normal text-blue-200">Lab Works</span>
            </h2>
            <div className="h-1 w-20 bg-blue-500 mt-4 rounded-full" />
            <p className="text-xs text-slate-400 font-mono mt-3">
              Koleksi prototipe riil hasil konversi ide kepemimpinan & magang ke solusi digital fungsional.
            </p>
          </div>

          {/* Filtering Control Bar */}
          <div className="flex flex-wrap gap-1.5">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`px-4 py-2 text-xs font-mono rounded-xl border cursor-pointer transition-all duration-300 ${
                  activeFilter === opt.id
                    ? `${accentBg} border-l-2 ${accentBorder}`
                    : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Bento/Card Grid (Elementor WordPress portfolio module styling) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col rounded-3xl bg-slate-900/40 border border-slate-800/80 overflow-hidden hover:border-slate-700/80 transition-all duration-300 hover:shadow-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
            >
              {/* Card Image Hover Reveal Layout */}
              <div className="relative w-full aspect-video overflow-hidden border-b border-slate-900 bg-slate-950">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out select-none pointer-events-none opacity-80"
                  referrerPolicy="no-referrer"
                />
                
                {/* Tech category pill on upper right corner */}
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800 text-[10px] font-mono text-slate-300">
                  {project.category.toUpperCase()}
                </div>
              </div>

              {/* Card Content Section */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left">
                <div>
                  {/* Skill Badges for matching techs */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 bg-[#090d16] border border-slate-800 rounded text-[9px] font-mono text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-display font-extrabold text-white leading-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Inspect Action Row */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-mono">CODE EXCELLENCE</span>
                  
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`inline-flex items-center gap-1 text-xs font-semibold font-mono cursor-pointer ${accentText} hover:brightness-125`}
                  >
                    <span>Inspect Specs</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal System simulation */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Blur Backdrop */}
            <div 
              className="absolute inset-0 bg-[#05070c]/85 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />
            
            {/* Main Modal Box Grid */}
            <div className="relative w-full max-w-2xl glass-panel md:rounded-3xl rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] border-slate-800 z-10 max-h-[90vh] overflow-y-auto">
              
              {/* Closer bar block */}
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Banner Image */}
              <div className="relative w-full h-48 sm:h-64 bg-slate-950">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover select-none pointer-events-none opacity-50"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 text-left">
                  <span className={`px-2.5 py-1 text-[10px] font-mono rounded-md font-semibold ${accentBg}`}>
                    {selectedProject.category.toUpperCase()} PROJECT
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mt-2 leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Core Contents */}
              <div className="p-6 text-left space-y-6">
                <div>
                  <h4 className="text-xs text-slate-500 font-mono uppercase tracking-widest">Keterangan Umum</h4>
                  <p className="text-sm text-slate-300 mt-1.5 leading-relaxed font-sans">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Sub-lists showing custom specs simulation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  
                  {/* Specifications Points */}
                  <div>
                    <h4 className="text-xs text-slate-400 font-mono uppercase tracking-widest flex items-center gap-1">
                      <Code className="w-3.5 h-3.5" />
                      <span>Arsitektur Sistem</span>
                    </h4>
                    <ul className="mt-2.5 space-y-2">
                      {selectedProject.details.map((detail, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                          <CheckCircle className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${accentText}`} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights Features */}
                  {selectedProject.features && (
                    <div>
                      <h4 className="text-xs text-slate-400 font-mono uppercase tracking-widest flex items-center gap-1">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Fitur Utama</span>
                      </h4>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {selectedProject.features.map((feat, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-slate-950/80 border border-slate-900 rounded-lg text-xs font-mono text-emerald-400 font-semibold"
                          >
                            ✓ {feat}
                          </span>
                        ))}
                      </div>

                      {/* Stack Badges utilized */}
                      <div className="mt-6">
                        <h4 className="text-xs text-slate-400 font-mono uppercase tracking-widest">Pilar Teknologi</h4>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {selectedProject.tags.map((tag, idx) => (
                            <span 
                              key={idx}
                              className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-md text-[10px] font-mono text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                {/* Simulated Interactive Launch Actions Bar */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs font-mono text-slate-400">
                    STATUS: <span className="text-emerald-400 font-semibold">PRODUCTION READY</span>
                  </div>

                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => alert(`Simulasi meluncurkan Live Demo untuk: ${selectedProject.title}\n(Tautan riil tidak valid pada sandbox preview)`)}
                      className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase cursor-pointer text-white flex items-center justify-center gap-1.5 ${accentButton}`}
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Live Demo</span>
                    </button>
                    
                    <button
                      onClick={() => alert(`Membuka simulasi repositori GitHub untuk: ${selectedProject.title}`)}
                      className="flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase cursor-pointer bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 flex items-center justify-center gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
