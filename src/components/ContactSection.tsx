import { useState, FormEvent } from 'react';
import { Mail, Github, Linkedin, Instagram, Send, Star, HelpCircle, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { FAQS } from '../data';

interface ContactSectionProps {
  accentColor: 'blue' | 'purple';
}

export function ContactSection({ accentColor }: ContactSectionProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Contact Form States
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const accentText = accentColor === 'blue' ? 'text-blue-400' : 'text-purple-400';
  const accentBg = accentColor === 'blue' ? 'bg-blue-500/10 text-blue-400' : 'bg-purple-500/10 text-purple-400';
  const accentBorder = accentColor === 'blue' ? 'border-blue-500/30' : 'border-purple-500/30';
  const accentFocusedBorder = accentColor === 'blue' ? 'focus:border-blue-500/80' : 'focus:border-purple-500/80';
  const accentButton = accentColor === 'blue'
    ? 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/20'
    : 'bg-purple-600 hover:bg-purple-500 shadow-purple-500/20';

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Mohon isi semua field wajib.');
      return;
    }

    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const socialLinks = [
    { label: 'Email', value: 'radifhibatillah8@gmail.com', href: 'mailto:radifhibatillah8@gmail.com', icon: <Mail className="w-5 h-5 text-red-400" /> },
    { label: 'GitHub', value: 'github.com/radifhibatillah', href: 'https://github.com', icon: <Github className="w-5 h-5 text-slate-300" /> },
    { label: 'LinkedIn', value: 'Radif Hibatillah', href: 'https://linkedin.com', icon: <Linkedin className="w-5 h-5 text-blue-400" /> },
    { label: 'Instagram', value: '@radifhibatillah', href: 'https://instagram.com', icon: <Instagram className="w-5 h-5 text-pink-400" /> }
  ];

  return (
    <section 
      id="contact" 
      className="relative py-24 border-t border-slate-900 bg-slate-950/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <p className={`text-xs font-mono tracking-widest uppercase font-semibold ${accentText}`}>
            [05 // COLLABORATIVE BRIDGE]
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-1.5 tracking-tight">
            Initiate <span className="font-serif italic font-normal text-blue-200">Conversation</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 mt-4 rounded-full" />
          <p className="text-xs text-slate-400 font-mono mt-3">
            Koneksikan ide Anda atau tanyakan lebih jauh seputar proyek dan rencana aksi legacy saya.
          </p>
        </div>

        {/* Contact info grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left Column: Contact details & info card */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white leading-tight">
              Let's Build Something Meaningful Together.
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Terbuka untuk kolaborasi proyek piranti lunak, bimbingan teknis komunitas, ide digitalisasi sekolah/daerah, maupun peluang studi magang yang menantang.
            </p>

            {/* Social media connections deck */}
            <div className="space-y-3 pt-2">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#090d16] border border-slate-800 hover:border-slate-700 transition-all duration-300 group"
                >
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">{link.label}</p>
                    <p className="text-sm font-bold text-slate-200 mt-0.5">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact form block (WordPress typical layout) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-[32px] bg-slate-900/40 border border-slate-800 shadow-xl text-left">
            <h3 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-2">
              <Send className={`w-4 h-4 ${accentText}`} />
              <span>Direct Communication Box</span>
            </h3>

            {formStatus === 'success' ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-full w-fit mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white">Pesan Anda Berhasil Terkirim!</h4>
                <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
                  Terima kasih telah memulai perbincangan. Radif akan meninjau pesan Anda dan segera menghubungi Anda kembali melalui alamat Gmail dalam waktu kurang dari 24 jam.
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="px-6 py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:bg-slate-900 text-xs font-mono font-bold text-slate-300 cursor-pointer"
                >
                  Kirim Pesan Baru
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400 font-mono font-medium">NAMA LENGKAP *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Raditya Akbar"
                      className={`w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 outline-none transition-all ${accentFocusedBorder}`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400 font-mono font-medium">ALAMAT EMAIL *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Contoh: radf@domain.com"
                      className={`w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 outline-none transition-all ${accentFocusedBorder}`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-slate-400 font-mono font-medium">SUBJEK HUBUNGAN</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Contoh: Diskusi Proyek Metrologi Digital / Kolaborasi OSIS"
                    className={`w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 outline-none transition-all ${accentFocusedBorder}`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-slate-400 font-mono font-medium">PESAN PESAN ATAU TAWARAN ANDA *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan gagasan, target proyek, atau pertanyaan spesifik..."
                    className={`w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 outline-none transition-all resize-none ${accentFocusedBorder}`}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className={`w-full py-4 rounded-xl text-white font-semibold text-sm tracking-wide shadow-lg cursor-pointer transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 ${accentButton} disabled:opacity-50`}
                  >
                    <span>{formStatus === 'sending' ? 'Mengirim Data...' : 'Let\'s Connect Now'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* FAQs Accordion Module */}
        <div className="border-t border-slate-900 pt-20">
          <div className="text-left mb-12">
            <h3 className="text-2xl font-display font-extrabold text-white flex items-center gap-2">
              <HelpCircle className={`w-5 h-5 ${accentText}`} />
              <span>Frequently Asked Questions</span>
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Jawaban seputar dedikasi, bela diri Tarung Derajat, and visi di balik pengerjaan teknologi ini.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 text-left">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl bg-slate-950/20 border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 flex items-center justify-between text-left font-sans font-bold text-sm sm:text-base text-slate-200 hover:text-white cursor-pointer select-none"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className={`w-4 h-4 ${accentText}`} />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="p-5 pt-0 border-t border-slate-900 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
