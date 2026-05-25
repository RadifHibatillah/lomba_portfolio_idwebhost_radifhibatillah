import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { LegacySection } from './components/LegacySection';
import { ContactSection } from './components/ContactSection';
import { Sparkles, ArrowUp, Github, Linkedin, Shield, Heart } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [accentColor, setAccentColor] = useState<'blue' | 'purple'>('blue');
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Initial premium page loading mockup (WordPress preloader style)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      
      // Auto-toggle active navigation links on scroll (Intersection observer logic simulated simply)
      const sections = ['home', 'about', 'portfolio', 'legacy', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section occupies the majority of the view
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050811] text-white">
        {/* Dynamic Glow background */}
        <div className="absolute w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute w-[250px] h-[250px] bg-purple-500/10 blur-[100px] rounded-full animate-pulse delay-500" />
        
        <div className="relative text-center space-y-4">
          <div className="inline-flex p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-blue-400 animate-bounce">
            <Sparkles className="w-8 h-8" />
          </div>
          
          <div>
            <h1 className="text-xl sm:text-2xl font-display font-bold tracking-tight uppercase">
              RADIF HIBATILLAH
            </h1>
            <p className="text-xs text-slate-400 font-mono tracking-widest uppercase mt-1">
              "Beyond Portfolio, Build Your Legacy"
            </p>
          </div>

          {/* Loading tracker indicator bar */}
          <div className="w-48 h-[2px] bg-slate-900 rounded-full mx-auto overflow-hidden border border-slate-950">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 animate-[pulse_1.5s_infinite] w-full" />
          </div>
          
          <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider scale-90">
            DIGITAL SYNERGY 2026 // ESTABLISHING NODE...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] gradient-bg relative overflow-hidden text-slate-100 font-sans selection:bg-blue-600/30 selection:text-white">
      {/* Universal Background Noise HUD (WordPress stylized theme panel indicator) */}
      <div className="fixed top-24 left-6 hidden xl:flex flex-col gap-2 z-40 select-none opacity-40">
        <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase rotate-90 origin-left translate-y-24 mt-4">
          ⚡ DIGITAL_SYNERGY_2026
        </span>
      </div>

      <div className="fixed top-24 right-6 hidden xl:flex flex-col gap-2 z-40 select-none opacity-40 text-right">
        <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase -rotate-90 origin-right translate-y-36">
          PORTFOLIO_LEGACY_REV_1.4
        </span>
      </div>

      {/* Styled Sticky Navigation Header */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        accentColor={accentColor} 
        setAccentColor={setAccentColor} 
      />

      {/* Main Core Content Sections Stacked */}
      <main className="relative">
        
        {/* SECTION 1: HOME */}
        <HomeSection accentColor={accentColor} onNavigate={(id) => {
          setActiveTab(id);
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }} />

        {/* SECTION 2: ABOUT */}
        <AboutSection accentColor={accentColor} />

        {/* SECTION 3: PORTFOLIO */}
        <PortfolioSection accentColor={accentColor} />

        {/* SECTION 4: LEGACY & IMPACT */}
        <LegacySection accentColor={accentColor} />

        {/* SECTION 5: CONTACT */}
        <ContactSection accentColor={accentColor} />

      </main>

      {/* Master CMS-like Footer Module */}
      <footer className="relative bg-[#05070c] border-t border-slate-900 overflow-hidden py-16 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          
          {/* Brand/Credentials block */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-600/10 text-blue-400 rounded-lg">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-display font-extrabold text-sm tracking-wider uppercase text-white">
                RADIF HIBATILLAH
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans max-w-sm">
              Membangun kompetensi riil perangkat lunak, disiplin fisik mental bela diri Tarung Derajat Kota Depok, kolaborasi kepemimpinan OSIS, serta integritas kearsipan Metrologi Legal.
            </p>

            <div className="flex items-center gap-3 pt-2 text-slate-500">
              <Shield className="w-4 h-4 text-amber-500/80" />
              <span className="text-[10px] font-mono tracking-widest uppercase">
                Kejuaraan Resmi Tarung Derajat Kota Depok 🥈
              </span>
            </div>
          </div>

          {/* Quick CMS Page-jump Links */}
          <div>
            <h4 className="text-xs text-white font-mono uppercase tracking-widest font-semibold mb-4">
              Legacy Sections
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white cursor-pointer"
                >
                  ✓ Home Base
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white cursor-pointer"
                >
                  ✓ About Journey
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white cursor-pointer"
                >
                  ✓ Featured Lab
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('legacy')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white cursor-pointer"
                >
                  ✓ Legacy Blueprint
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white cursor-pointer"
                >
                  ✓ Communication Box
                </button>
              </li>
            </ul>
          </div>

          {/* WP Custom Template Attributes simulation info */}
          <div className="space-y-4">
            <h4 className="text-xs text-white font-mono uppercase tracking-widest font-semibold">
              WordPress Design Engine
            </h4>
            
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              Terstruktur secara modular dengan kerangka UI/UX berkelas layaknya rancangan Elementor Pro premium dan blok editor terpadu.
            </p>

            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-[10px] font-mono leading-relaxed text-slate-400">
              ⚡ MODE: <span className="text-blue-400 font-bold">CLIENT CORE</span><br />
              🛠️ BUILD: <span className="text-slate-300">REACT 19 SPA</span><br />
              🔥 COMPETITION: <span className="text-amber-500 font-bold">SYNERGY 2026</span>
            </div>
          </div>

        </div>

        {/* Legal copyright bar */}
        <div className="mt-16 pt-8 border-t border-slate-900/80 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-slate-500">
            © 2026 Radif Hibatillah. All Rights Reserved. Built for Web Design Competition.
          </p>

          <div className="flex items-center gap-1 text-slate-500">
            <span>Designed with</span>
            <Heart className="w-3 h-3 text-red-500 fill-current" />
            <span>by Radif for future impact.</span>
          </div>
        </div>
      </footer>

      {/* Floating Back To Top button (Elementor Pro common widget) */}
      {showBackToTop && (
        <button
          onClick={handleScrollToTop}
          className={`fixed bottom-6 right-6 p-3 rounded-full text-white shadow-xl transition-all duration-300 cursor-pointer hover:scale-110 z-40 animate-bounce ${
            accentColor === 'blue' ? 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/20' : 'bg-purple-600 hover:bg-purple-500 shadow-purple-500/20'
          }`}
          title="Kembali Ke Atas"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
