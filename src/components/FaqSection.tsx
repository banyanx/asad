import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare, Phone } from 'lucide-react';
import { FAQ_LIST } from '../data/faqData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-900 scroll-mt-20 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>الأسئلة الشائعة وإجابات المهندسين</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
            كل ما تود معرفته عن زجاج السيكوريت والكلادينج بالرياض
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            إجابات واضحة ودقيقة لأهم استفسارات عملائنا حول الأسعار، المواصفات، شروط الدفاع المدني، والضمان.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full py-4 px-5 sm:px-6 text-right flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-extrabold flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span className="font-bold text-sm sm:text-base text-white hover:text-amber-400 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transform transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-850/60 bg-slate-900/30 animate-in fade-in">
                    <div className="pt-2 text-slate-300">
                      {faq.answer}
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-[11px] text-amber-400/90 font-medium">
                      <span>التصنيف: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions banner */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div>
            <h4 className="text-base font-bold text-white">لديك استفسار خاص بمشروعك أو تصميم هندسي محدد؟</h4>
            <p className="text-slate-400 text-xs mt-1">تواصل مباشرة مع المهندس المشرف واستشرنا بدون أي التزام مالي.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/966579305750?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D9%84%D8%AF%D9%8A%20%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D9%87%D9%86%D8%AF%D8%B3%D9%8A%20%D8%AD%D9%88%D9%84%20%D8%A3%D8%B9%D9%85%D8%A7%D9%84%20%D8%A7%D9%84%D8%B2%D8%AC%D8%A7%D8%AC%20%D9%88%D8%A7%D9%84%D9%83%D9%84%D8%A7%D8%AF%D9%8A%D9%86%D8%AC"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>استشارة واتساب</span>
            </a>
            <a
              href="tel:0579305750"
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span dir="ltr">0579305750</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
