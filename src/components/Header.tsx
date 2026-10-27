import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Menu, X, Eye } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'خدماتنا', href: '#services' },
    { label: 'معرض الأعمال', href: '#gallery' },
    { label: 'معايير الجودة', href: '#comparison' },
    { label: 'عن المؤسسة', href: '#why-us' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 font-semibold text-xs md:text-sm py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center bg-slate-950 text-amber-400 text-xs px-2 py-0.5 rounded-full font-bold">
              معاينة فورية
            </span>
            <span>معاينة ورفع مقاسات مجانية بالليزر بالرياض خلال ساعتين | ضمان معتمد 10 سنوات</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs text-slate-950/90 font-medium">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> الرياض - طريق الملك فهد
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> يومياً 8:00 ص - 10:00 م
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-md border-slate-800 shadow-xl py-3'
            : 'bg-slate-950/80 backdrop-blur-sm border-slate-800/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="الرئيسية - صرح الرياض للزجاج والكلادينج"
          >
            <div className="w-11 h-11 md:w-13 md:h-13 rounded-xl overflow-hidden border border-amber-500/40 p-0.5 bg-slate-900 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform flex items-center justify-center">
              <img
                src="/favicon.svg"
                alt="شعار صرح الرياض للزجاج والواجهات"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-white font-extrabold text-base md:text-lg leading-tight tracking-wide flex items-center gap-1.5">
                <span>صرح الرياض</span>
                <span className="text-amber-400 text-xs font-semibold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                  واجهات وزجاج
                </span>
              </div>
              <p className="text-slate-400 text-xs font-normal">
                زجاج سيكوريت • كلادينج ألمنيوم • درابزين استيل
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-slate-300 hover:text-amber-400 text-sm font-medium transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#gallery')}
              className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-amber-300 border border-amber-500/30 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>معرض الأعمال</span>
            </button>
            <a
              href="https://wa.me/966579305750?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D9%85%D8%B9%D8%A7%D9%8A%D9%86%D8%A9%20%D9%85%D8%AC%D8%A7%D9%86%D9%8A%D8%A9%20%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84%20%D8%A7%D9%84%D8%B2%D8%AC%D8%A7%D8%AC%20%D9%88%D8%A7%D9%84%D9%83%D9%84%D8%A7%D8%AF%D9%8A%D9%86%D8%AC%20%D8%A8%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all flex items-center gap-1.5 shadow-lg shadow-emerald-950/50 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>واتساب مباشر</span>
            </a>
            <a
              href="tel:0579305750"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs transition-all flex items-center gap-1.5 shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span dir="ltr">0579305750</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800"
            aria-label="القائمة الرئيسية"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-right py-2 px-3 rounded-lg text-slate-200 hover:text-amber-400 hover:bg-slate-900 text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick('#gallery');
                }}
                className="w-full py-2.5 rounded-lg bg-slate-900 text-amber-400 border border-amber-500/30 text-sm font-bold flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>مشاهدة معرض المشاريع والأعمال</span>
              </button>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/966579305750?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D9%85%D8%B9%D8%A7%D9%8A%D9%86%D8%A9%20%D9%85%D8%AC%D8%A7%D9%86%D9%8A%D8%A9%20%D8%A8%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-lg bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>واتساب</span>
                </a>
                <a
                  href="tel:0579305750"
                  className="py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>اتصال</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
