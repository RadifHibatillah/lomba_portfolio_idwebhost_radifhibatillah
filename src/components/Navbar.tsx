import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, FolderGit2, Calendar, Target, Award, Send } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  accentColor: 'blue' | 'purple';
  setAccentColor: (color: 'blue' | 'purple') => void;
}

export function Navbar({ activeTab, setActiveTab, accentColor, setAccentColor }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll height
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Journey' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'legacy', label: 'Legacy & Impact' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.4)]' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Scroll Progress Indicator */}
      <div 
        className="h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand mimicking a premium Elementor brand module */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className={`p-2.5 rounded-xl transition-all duration-300 ${accentColor === 'blue' ? 'bg-blue-600/10 text-blue-400 group-hover:bg-blue-500/20' : 'bg-purple-600/10 text-purple-400 group-hover:bg-purple-500/20'}`}>
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-blue-400 transition-colors">
                RADIF HIBATILLAH
              </span>
              <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest leading-none">
                Beyond Portfolio, Legacy 2026
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'text-white font-semibold' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span 
                      className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full ${accentColor === 'blue' ? 'bg-blue-500' : 'bg-purple-500'}`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Functional Actions Frame (WordPress customization panel simulation) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme / Accent Swapper */}
            <div className="flex items-center gap-1 bg-slate-900/60 border border-slate-800 p-1 rounded-xl">
              <button
                onClick={() => setAccentColor('blue')}
                className={`px-3 py-1 text-xs font-mono rounded-lg transition-all duration-300 cursor-pointer ${
                  accentColor === 'blue' 
                    ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Cyan Glow
              </button>
              <button
                onClick={() => setAccentColor('purple')}
                className={`px-3 py-1 text-xs font-mono rounded-lg transition-all duration-300 cursor-pointer ${
                  accentColor === 'purple' 
                    ? 'bg-purple-500/15 text-purple-400 border border-purple-500/30' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Purple Aura
              </button>
            </div>

            {/* Simulated CTA Button - Elementor Header styling */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-4 py-2.5 rounded-xl font-medium text-xs font-mono tracking-wider uppercase border transition-all duration-300 shadow-md transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 ${
                accentColor === 'blue'
                  ? 'bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-blue-400 border-blue-500/40 hover:bg-blue-600/30 hover:shadow-blue-500/10'
                  : 'bg-gradient-to-r from-purple-600/20 to-indigo-600/20 text-purple-400 border-purple-500/40 hover:bg-purple-600/30 hover:shadow-purple-500/10'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
              Build Legacy
            </button>
          </div>

          {/* Mobile Menu Toggle button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Quick accent toggle on mobile */}
            <button
              onClick={() => setAccentColor(accentColor === 'blue' ? 'purple' : 'blue')}
              className="p-2 bg-slate-900/40 border border-slate-800 rounded-xl text-slate-300 text-xs font-mono cursor-pointer"
            >
              {accentColor === 'blue' ? '🎨 Cyan' : '🎨 Purple'}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 bg-slate-900/60 border border-slate-800 rounded-xl text-slate-300 hover:text-white cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 max-h-screen overflow-y-auto">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isActive 
                      ? 'bg-slate-800/80 text-white font-semibold border-l-4 border-blue-500 pl-3' 
                      : 'text-slate-300 hover:bg-slate-800/30 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.id === 'home' && <Sparkles className="w-4 h-4 text-slate-400" />}
                  {item.id === 'about' && <Calendar className="w-4 h-4 text-slate-400" />}
                  {item.id === 'portfolio' && <FolderGit2 className="w-4 h-4 text-slate-400" />}
                  {item.id === 'legacy' && <Target className="w-4 h-4 text-slate-400" />}
                  {item.id === 'contact' && <Send className="w-4 h-4 text-slate-400" />}
                </button>
              );
            })}

            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
              <span className="text-[11px] text-slate-400 font-mono tracking-widest uppercase px-4">
                Visual Aesthetic Accent
              </span>
              <div className="grid grid-cols-2 gap-2 px-4">
                <button
                  onClick={() => { setAccentColor('blue'); }}
                  className={`py-2 text-xs font-mono rounded-lg border cursor-pointer ${
                    accentColor === 'blue' 
                      ? 'bg-blue-600/20 text-blue-400 border-blue-500/50' 
                      : 'bg-slate-900/40 text-slate-400 border-slate-800'
                  }`}
                >
                  Cyan Aura
                </button>
                <button
                  onClick={() => { setAccentColor('purple'); }}
                  className={`py-2 text-xs font-mono rounded-lg border cursor-pointer ${
                    accentColor === 'purple' 
                      ? 'bg-purple-600/20 text-purple-400 border-purple-500/50' 
                      : 'bg-slate-900/40 text-slate-400 border-slate-800'
                  }`}
                >
                  Purple Aura
                </button>
              </div>

              <div className="px-4 pt-2">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-xs font-mono uppercase tracking-wider font-semibold cursor-pointer text-center"
                >
                  Let's Connect Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
