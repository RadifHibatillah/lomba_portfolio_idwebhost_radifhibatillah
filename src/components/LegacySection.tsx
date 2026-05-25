import { useState } from 'react';
import { Target, Cpu, Landmark, Sparkles, Navigation, CheckCircle, Flame, BadgeAlert } from 'lucide-react';
import { LEGACY_ROADMAP } from '../data';

interface LegacySectionProps {
  accentColor: 'blue' | 'purple';
}

export function LegacySection({ accentColor }: LegacySectionProps) {
  const [selectedMilestone, setSelectedMilestone] = useState<string>('l1');

  const accentText = accentColor === 'blue' ? 'text-blue-400' : 'text-purple-400';
  const accentBg = accentColor === 'blue' ? 'bg-blue-500/10 text-blue-400' : 'bg-purple-500/10 text-purple-400';
  const accentBorder = accentColor === 'blue' ? 'border-blue-500/30' : 'border-purple-500/30';
  const accentProgress = accentColor === 'blue' ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-gradient-to-r from-purple-500 to-indigo-500';

  const missionPillars = [
    {
      title: 'Pembangunan Solusi Publik',
      desc: 'Mengarahkan seluruh kecakapan software engineering ke arah optimalisasi ekosistem administrasi desa, kelurahan, dan koperasi agar lebih transparan serta minim latensi manual.',
      icon: <Landmark className="w-5 h-5 text-indigo-400" />
    },
    {
      title: 'Edu-Literasi Coding Gratis',
      desc: 'Menciptakan akademi pembinaan teknologi informal bagi generasi prasejahtera di area Depok guna menyebarkan kesempatan berkarir di industri digital masa depan.',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'Mental Disiplin Kepemimpinan',
      desc: 'Menyalurkan tradisi integritas bela diri Tarung Derajat dan keluwesan memimpin OSIS untuk konsisten melayani publik dengan moralitas tinggi.',
      icon: <Target className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section 
      id="legacy" 
      className="relative py-24 border-t border-slate-900 overflow-hidden"
    >
      <div className="glow-spot-blue bottom-10 left-10" />
      <div className="glow-spot-purple top-10 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <p className={`text-xs font-mono tracking-widest uppercase font-semibold ${accentText}`}>
            [04 // CORE COMPETITION THEME]
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-1.5 tracking-tight">
            Legacy Blueprint 2035: <span className="font-serif italic font-normal text-blue-200">Designing the Future</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 mt-4 rounded-full" />
          <p className="text-slate-400 font-sans mt-4 text-sm sm:text-base leading-relaxed">
            Sesuai tema kompetisi, ini adalah rincian nyata misi hidup, target dampak sosial teknologis, dan peta jalan karier terpadu saya menuju 2035.
          </p>
        </div>

        {/* Vision Panel structured like a startup pitch layout */}
        <div className="p-8 rounded-[32px] bg-slate-950/40 border border-slate-800/80 mb-20 text-left relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-900/40 rounded-full blur-3xl pointer-events-none -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Startup Mission Statement */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-3 bg-indigo-500/10 rounded-2xl w-fit text-indigo-400 border border-indigo-500/20">
                <Flame className="w-6 h-6 animate-pulse" />
              </div>

              <h3 className="text-2xl font-display font-extrabold text-white tracking-tight leading-snug">
                The Technology Vision & Social Impact Misi
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                "Saya tidak ingin sekadar mencetak baris kode untuk dipertukarkan demi pendapatan semata. Keberhasilan tertinggi karier saya dihitung dari seberapa kokoh perangkat lunak yang saya rancang mempermudah hidup urusan administrasi masyarakat luas."
              </p>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-300">
                🚀 STATUS VISI: <span className="text-emerald-400 font-semibold">ACTIVATED (COMMITTED)</span>
              </div>
            </div>

            {/* Core Pillars Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {missionPillars.map((pillar, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-2xl bg-[#090d16] border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col gap-3.5"
                >
                  <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl w-fit">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-200 tracking-wide">{pillar.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Interactive Interactive Carrier Roadmap */}
        <div className="space-y-8">
          <div className="text-left border-b border-slate-900 pb-4">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-2">
              <Navigation className={`w-5 h-5 ${accentText}`} />
              <span>Interactive Roadmap checkpoints</span>
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Klik pada fase di bawah ini untuk melihat detail sasaran, milestone, serta target pencapaian progress.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
            
            {/* Left selector sidebar column */}
            <div className="lg:col-span-4 space-y-3">
              {LEGACY_ROADMAP.map((mile) => {
                const isSelected = selectedMilestone === mile.id;
                return (
                  <button
                    key={mile.id}
                    onClick={() => setSelectedMilestone(mile.id)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? `${accentBg} ${accentBorder} shadow-lg shadow-blue-500/5`
                        : 'bg-slate-950/20 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-mono leading-none text-slate-400 block mb-1">
                        {mile.targetYear}
                      </span>
                      <span className="text-sm font-extrabold block tracking-tight line-clamp-1">
                        {mile.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                      {mile.status === 'ongoing' && (
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-ping" />
                      )}
                      <span className="text-[10px] font-mono font-bold uppercase">
                        {mile.status}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right detailed display card */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-[28px] bg-[#090d16]/90 border border-slate-800 shadow-xl min-h-[300px] flex flex-col justify-between">
              {(() => {
                const mile = LEGACY_ROADMAP.find(m => m.id === selectedMilestone);
                if (!mile) return null;
                return (
                  <div className="space-y-6">
                    <div>
                      <span className={`px-2.5 py-1 text-[10px] font-mono rounded-md font-bold uppercase ${accentBg}`}>
                        {mile.phase}
                      </span>
                      <h4 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-4 tracking-tight leading-tight">
                        {mile.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans mt-3">
                        {mile.description}
                      </p>
                    </div>

                    {/* Progress Bar Module */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-slate-400">FASE PROGRESY STATUS</span>
                        <span className={accentText}>{mile.progress}%</span>
                      </div>
                      <div className="h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-900">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${accentProgress}`}
                          style={{ width: `${mile.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Check goals list */}
                    <div className="pt-4 border-t border-slate-800/80 space-y-3">
                      <p className="text-xs font-mono text-slate-400 uppercase tracking-widest leading-none">
                        Sasaran Implementasi Spesifik:
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                        {mile.goals.map((goal, gIdx) => (
                          <div 
                            key={gIdx}
                            className="p-3 bg-slate-950/40 border border-slate-900/60 rounded-xl flex items-start gap-2.5 text-xs text-slate-300"
                          >
                            <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                            <span className="leading-relaxed">{goal}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                );
              })()}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
