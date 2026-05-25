import { useState } from 'react';
import { Award, Briefcase, BookOpen, Users, ChevronRight, User, Heart, Shield, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, TIMELINE_EVENTS, SKILLS } from '../data';

interface AboutSectionProps {
  accentColor: 'blue' | 'purple';
}

export function AboutSection({ accentColor }: AboutSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const accentText = accentColor === 'blue' ? 'text-blue-400' : 'text-purple-400';
  const accentBg = accentColor === 'blue' ? 'bg-blue-500/10 text-blue-400' : 'bg-purple-500/10 text-purple-400';
  const accentBorder = accentColor === 'blue' ? 'border-blue-500/30' : 'border-purple-500/30';
  const accentProgress = accentColor === 'blue' ? 'bg-blue-500' : 'bg-purple-500';
  const accentDotGlow = accentColor === 'blue' 
    ? 'bg-blue-500 shadow-[0_0_12px_#3b82f6]' 
    : 'bg-purple-500 shadow-[0_0_12px_#8b5cf6]';

  // Filter timeline events locally
  const filteredEvents = selectedCategory === 'all'
    ? TIMELINE_EVENTS
    : TIMELINE_EVENTS.filter(event => event.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'Semua Jejak' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'experience', label: 'Magang' },
    { id: 'education', label: 'Akademis' },
    { id: 'awards', label: 'Prestasi' },
  ];

  // Helper to select icon for timeline categories
  const getTimelineIcon = (cat: string) => {
    switch (cat) {
      case 'leadership': return <Users className="w-5 h-5" />;
      case 'experience': return <Briefcase className="w-5 h-5" />;
      case 'education': return <BookOpen className="w-5 h-5" />;
      case 'awards': return <Award className="w-5 h-5" />;
      default: return <User className="w-5 h-5" />;
    }
  };

  const values = [
    { title: 'Kedisiplinan Ekstrim', desc: 'Nilai luhur bela diri Tarung Derajat diaplikasikan penuh dalam konsistensi berkarya dan menyelesaikan proyek tepat waktu.', icon: <Shield className="w-5 h-5 text-amber-500" /> },
    { title: 'Integritas & Akurasi', desc: 'Pengalaman di Metrologi Legal menumbuhkan kecintaan terhadap akurasi presisi data serta penyusunan kode yang andal (zero bug).', icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" /> },
    { title: 'Legacy Mindset', desc: 'fokus utama tidak hanya mencari keuntungan cepat, melainkan bagaimana melahirkan solusi digital yang bermanfaat secara komunal.', icon: <Heart className="w-5 h-5 text-pink-500" /> }
  ];

  return (
    <section 
      id="about" 
      className="relative py-24 border-t border-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <p className={`text-xs font-mono tracking-widest uppercase font-semibold ${accentText}`}>
            [02 // SECTIONS DECK]
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-1.5 tracking-tight">
            Journey <span className="font-serif italic font-normal text-blue-200">Beyond Standard</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 mt-4 rounded-full" />
        </div>

        {/* Story Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Block: Bio narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-2">
              <span className={accentText}>#</span> Biografi Radif Hibatillah
            </h3>
            
            <p className="text-slate-300 leading-relaxed font-sans text-base">
              {PERSONAL_INFO.aboutStory}
            </p>

            {/* Core Values grid mimicking a premium content elementor layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {values.map((val, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col gap-3">
                  <div className="p-2 bg-slate-950 rounded-xl w-fit">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide">{val.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 lines-clamp-3">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Skill bars with interactive counter look from Elementor */}
          <div className="lg:col-span-5 p-6 rounded-[24px] bg-[#090d16]/80 border border-slate-800/60 shadow-xl text-left">
            <h3 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-2">
              <Award className={`w-5 h-5 ${accentText}`} />
              <span>Expertise & Action Skills</span>
            </h3>

            <div className="space-y-4">
              {SKILLS.map((skill, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-200 flex items-center gap-2 font-semibold">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: skill.color }} />
                      {skill.name}
                    </span>
                    <span className="text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-900">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${accentProgress}`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-slate-950/60 border border-slate-900/80 flex items-start gap-3">
              <span className="text-xs text-amber-500 font-bold font-mono">⚡ VALUE AD:</span>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Skill di atas terus dikonversikan ke dalam pencapaian nyata di wilayah Depok melalui kontribusi digitalisasi organisasi remaja, OSIS, dan sistem instansi.
              </p>
            </div>
          </div>

        </div>

        {/* Timeline Interactive Element */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 border-b border-slate-900 pb-6">
            <div className="text-left">
              <h3 className="text-2xl font-display font-bold text-white">
                Interactive Journey Tracker
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                Gunakan filter untuk meninjau secara khusus rekam jejak kepemimpinan, kontribusi, dan pencapaian kompetisi.
              </p>
            </div>

            {/* Filter Categories Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-mono rounded-xl border cursor-pointer transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? `${accentBg} border-l-3 ${accentBorder}`
                      : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Vertical Timeline Tree Layout (Advanced Gutenberg/Elementor design) */}
          <div className="relative py-4 max-w-4xl mx-auto text-left">
            {/* Direct center divider line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800/80 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {filteredEvents.map((event, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div 
                    key={event.id}
                    className="relative flex flex-col md:flex-row items-start"
                  >
                    {/* Centered timeline badge circle */}
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border border-slate-700 bg-[#090d16] flex items-center justify-center transform -translate-x-[15px] md:-translate-x-1/2 z-10 transition-colors">
                      <div className={`w-3.5 h-3.5 rounded-full ${accentDotGlow}`} />
                    </div>

                    {/* Outer card grid */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2'}`}>
                      <div className="p-6 rounded-[22px] bg-slate-950/40 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 shadow-md">
                        {/* Period Badge */}
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase mb-3 ${accentBg}`}>
                          {getTimelineIcon(event.category)}
                          <span>{event.year}</span>
                        </div>

                        {/* Title Headings */}
                        <h4 className="text-lg font-display font-extrabold text-white leading-snug">{event.title}</h4>
                        <p className={`text-xs font-semibold mt-1 font-sans ${accentText}`}>{event.subtitle}</p>
                        
                        {/* Description block */}
                        <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                          {event.description}
                        </p>

                        {/* Tags list */}
                        {event.tags && (
                          <div className={`flex flex-wrap gap-1.5 mt-4 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                            {event.tags.map((tag, tIdx) => (
                              <span 
                                key={tIdx}
                                className="px-2.5 py-0.5 bg-slate-900 border border-slate-800/60 rounded-lg text-[10px] font-mono text-slate-400"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Dummy col for space balancing on large desktop screen */}
                    <div className="hidden md:block w-1/2" />
                  </div>
                );
              })}

              {filteredEvents.length === 0 && (
                <div className="text-center py-10 text-slate-500 font-mono text-sm border border-dashed border-slate-800 rounded-2xl">
                  Data dengan filter "{selectedCategory}" tidak tersedia saat ini.
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
