import { Sparkles, Calendar, Heart, Shield, Terminal, ArrowDown, ChevronRight, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HomeSectionProps {
  accentColor: 'blue' | 'purple';
  onNavigate: (id: string) => void;
}

export function HomeSection({ accentColor, onNavigate }: HomeSectionProps) {
  const accentGradient = accentColor === 'blue'
    ? 'from-blue-400 via-indigo-400 to-cyan-400'
    : 'from-purple-400 via-pink-400 to-indigo-400';

  const accentBorder = accentColor === 'blue'
    ? 'border-blue-500/20 hover:border-blue-500/50'
    : 'border-purple-500/20 hover:border-purple-500/50';

  const accentText = accentColor === 'blue' ? 'text-blue-400' : 'text-purple-400';
  const accentButton = accentColor === 'blue'
    ? 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/20'
    : 'bg-purple-600 hover:bg-purple-500 shadow-purple-500/20';

  const accentBgGlow = accentColor === 'blue' ? 'bg-blue-500/10' : 'bg-purple-500/10';

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 flex flex-col justify-center overflow-hidden z-10"
    >
      {/* Background glow emitters recreating premium Elementor custom background CSS styles */}
      <div className="glow-spot-blue -top-20 -left-10" />
      <div className="glow-spot-purple top-1/3 -right-20" />
      
      {/* Dynamic Animated Mesh Grid in CSS */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Tagline Badge with typing-like icon indicator */}
            <div className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${accentColor === 'blue' ? 'bg-blue-400' : 'bg-purple-400'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${accentColor === 'blue' ? 'bg-blue-500' : 'bg-purple-500'}`}></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
                Digital Synergy Web Design 2026 Entry
              </span>
            </div>

            {/* Main Display Headline with premium typography tracking-tight */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.1] tracking-tight">
                Beyond Portfolio,<br />
                <span className="font-sans font-extrabold text-white">Build Your </span>
                <span className="font-serif italic font-normal text-blue-200">Legacy.</span>
              </h1>
              <p className="text-lg sm:text-xl font-sans text-slate-300 font-light leading-relaxed max-w-2xl">
                "{PERSONAL_INFO.heroSubtitle}"
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
                {PERSONAL_INFO.extendedSubtitle}
              </p>
            </div>

            {/* Quick Micro Badges showing various statuses */}
            <div className="flex flex-wrap gap-2 pt-3">
              {PERSONAL_INFO.statusTags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-slate-900/60 border border-slate-800/80 rounded-xl text-xs font-medium text-slate-300 font-sans"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Giant Elementor-like CTA Group */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => onNavigate('legacy')}
                className={`px-8 py-4 rounded-2xl text-white font-semibold text-sm tracking-wide shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group ${accentButton}`}
              >
                <span>Explore My Legacy Vision</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('portfolio')}
                className="px-8 py-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:bg-slate-800/60 text-slate-200 hover:text-white font-medium text-sm tracking-wide transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <Briefcase className="w-4 h-4 text-slate-400" />
                <span>View Portfolio Projects</span>
              </button>
            </div>

            {/* Future Vision Summary Alert Box */}
            <div className="pt-8 border-t border-slate-900 max-w-xl flex items-start gap-3 text-slate-400">
              <Terminal className={`w-5 h-5 mt-0.5 shrink-0 ${accentText}`} />
              <div className="text-xs font-mono leading-relaxed">
                <span className="text-slate-200">Terminal Legacy Log:</span> radifh@legacy-2026:~$ init_future_goals --mission="impact-society" --tech="software-engineer"
              </div>
            </div>

          </div>

          {/* Right Hero Column: Premium Interactive Glassmorphism mockup containing Radif's Photo/Visual structure */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Neon Accent Glow Rings surrounding the image frame */}
            <div className={`absolute -inset-4 rounded-[40px] opacity-30 blur-3xl animate-float-slow -z-10 ${accentBgGlow}`} />
            
            {/* Main Visual Frame (mimicking premium Elementor custom widget container with layered glass box) */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-[32px] glass-panel p-4 shadow-[0_30px_60px_rgba(0,0,0,0.6)] group border-slate-800/80">
              
              {/* Photo Frame (representing Radif portrait overlay mockup) */}
              <div className="relative w-full h-[85%] rounded-[24px] overflow-hidden bg-slate-930 group border border-slate-800">
                {/* Visual placeholder or real high-quality illustration using Unsplash abstract geometric render that represents technology & human builder */}
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" 
                  alt="Radif Hibatillah Portrait Concept" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating HUD Badges inside image frame */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-[#090d16]/80 backdrop-blur-md rounded-full border border-slate-800 text-[11px] font-mono text-white select-none">
                  <Shield className="w-3 h-3 text-yellow-400 fill-yellow-400/20" />
                  Tarung Derajat Depok
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-slate-400 uppercase tracking-widest leading-none">Aktivitas Utama</p>
                      <p className="text-sm font-bold text-white mt-1">Student Developer & Organisasi</p>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Bottom decorative stats grid in frame */}
              <div className="py-2.5 flex items-center justify-around text-center">
                <div>
                  <p className="text-xs text-slate-400 font-mono">Kota Asal</p>
                  <p className="text-xs font-bold text-white mt-0.5">Depok, Jabar</p>
                </div>
                <div className="h-4 w-px bg-slate-800" />
                <div>
                  <p className="text-xs text-slate-400 font-mono">Nilai Rapor</p>
                  <p className="text-xs font-bold text-emerald-400 mt-0.5">Sangat Tinggi</p>
                </div>
                <div className="h-4 w-px bg-slate-800" />
                <div>
                  <p className="text-xs text-slate-400 font-mono">Status</p>
                  <p className="text-xs font-bold text-blue-400 mt-0.5">Active</p>
                </div>
              </div>

              {/* Extra Layered visual badge sitting outside the main frame to recreate elementor absolute margins */}
              <div className="absolute -bottom-6 -right-6 bg-[#090d16]/90 border border-slate-800 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-float-slow select-none">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-mono tracking-widest leading-none">Prestasi Utama</p>
                  <p className="text-xs font-bold text-white mt-1">Juara 2 Kota Depok 🥊</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Dynamic Counter Grid (Elementor WordPress Dynamic Counter Module) */}
        <div className="py-16 mt-8 border-t border-slate-900">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`p-6 bg-slate-950/40 rounded-2xl border transition-all duration-300 text-left ${accentBorder}`}
              >
                <p className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight flex items-baseline gap-1">
                  <span className={`bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </span>
                </p>
                <p className="text-sm font-semibold text-slate-200 mt-1.5">{stat.label}</p>
                <p className="text-xs text-slate-400 mt-1 font-sans">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-8 pb-4">
          <button 
            onClick={() => onNavigate('about')}
            className={`flex flex-col items-center gap-1.5 group cursor-pointer ${accentText}`}
          >
            <span className="text-xs font-mono tracking-widest uppercase text-slate-400 group-hover:text-white transition-colors">
              Scroll To Journey
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>

      </div>
    </section>
  );
}
