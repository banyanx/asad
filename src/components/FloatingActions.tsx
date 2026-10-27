import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, X } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 left-5 z-40 flex flex-col items-start gap-3">
      
      {/* Floating Tooltip Bubble */}
      {showTooltip && (
        <div className="relative bg-slate-900 text-white text-xs py-2 px-3.5 rounded-xl border border-amber-500/40 shadow-2xl flex items-center gap-2 animate-bounce">
          <span>متواجدون الآن لمعاينة موقعك بالرياض مجاناً</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white"
            aria-label="إغلاق التنبيه"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <div className="flex items-center gap-2.5">
        {/* Floating WhatsApp Action Button */}
        <a
          href="https://wa.me/966579305750?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D9%85%D8%B9%D8%A7%D9%8A%D9%86%D8%A9%20%D9%85%D8%AC%D8%A7%D9%86%D9%8A%D8%A9%20%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84%20%D8%A7%D9%84%D8%B2%D8%AC%D8%A7%D8%AC%20%D9%88%D8%A7%D9%84%D9%83%D9%84%D8%A7%D8%AF%D9%8A%D9%86%D8%AC%20%D8%A8%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-950 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
          aria-label="مراسلة فورية عبر واتساب"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
          </span>
          <MessageSquare className="w-6 h-6 fill-current" />
          <span className="hidden sm:inline-block pr-2 font-bold text-xs">واتساب الفني</span>
        </a>

        {/* Floating Call Action Button */}
        <a
          href="tel:0579305750"
          className="p-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-2xl shadow-amber-950 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
          aria-label="اتصال مباشر"
        >
          <Phone className="w-6 h-6 fill-current" />
          <span className="hidden sm:inline-block pr-2 font-bold text-xs" dir="ltr">0579305750</span>
        </a>
      </div>

    </div>
  );
};
