import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const keywords = [
    'زجاج سكريت الرياض',
    'زجاج سيكوريت بالرياض',
    'واجهات كلادينج الرياض',
    'معلم كلادينج محلات',
    'واجهات استركشر',
    'كارتن وول الرياض',
    'درابزين استيل',
    'درابزين زجاج مودرن',
    'كابينات شاور سيكوريت',
    'ابواب زجاجية اوتوماتيكية',
    'تفصيل زجاج سيكوريت بالرياض',
    'مقاول واجهات بالرياض',
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl overflow-hidden border border-amber-500/40 p-0.5 bg-slate-900 shadow-md">
                <img
                  src="/favicon.svg"
                  alt="شعار صرح الرياض"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-white font-black text-lg block">صرح الرياض</span>
                <span className="text-amber-400 text-xs">لزجاج السيكوريت والكلادينج</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              المؤسسة الرائدة في مدينة الرياض المتخصصة في توريد وتفصيل وتركيب زجاج السيكوريت، واجهات الاستركشر، كلادينج الألمنيوم المقاوم للحريق، ودرابزين الستانلس ستيل بأعلى المواصفات وضمان رسمي 10 سنوات.
            </p>
            <div className="text-xs text-slate-300 space-y-1 pt-1">
              <p>سجل تجاري معتمد: 1010XXXXXX</p>
              <p>الرقم الضريبي: 300XXXXXXXXXXXX</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm border-b border-slate-800 pb-2">روابط الموقع</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">الرئيسية</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">خدمات الزجاج والواجهات</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">معرض المشاريع بالرياض</a></li>
              <li><a href="#comparison" className="hover:text-amber-400 transition-colors">دليل معايير الجودة والمقارنة</a></li>
              <li><a href="#why-us" className="hover:text-amber-400 transition-colors">عن المؤسسة وخطوات العمل</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">الأسئلة الشائعة وإجاباتها</a></li>
            </ul>
          </div>

          {/* Contact Details (NAP Consistency for Local SEO) */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm border-b border-slate-800 pb-2">بيانات التواصل المباشر</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>طريق الملك فهد، مدينة الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:0579305750" className="text-white font-bold hover:text-amber-400" dir="ltr">0579305750</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/966579305750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold hover:text-emerald-400"
                  dir="ltr"
                >
                  +966 57 930 5750 (واتساب مباشر)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>يومياً: من 8:00 صباحاً حتى 10:00 مساءً</span>
              </li>
            </ul>
          </div>

          {/* Popular Search Keywords Tag Cloud (SEO Booster) */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm border-b border-slate-800 pb-2">الكلمات الأكثر بحثاً بالرياض</h4>
            <div className="flex flex-wrap gap-1.5">
              {keywords.map((kw, i) => (
                <span
                  key={i}
                  className="text-[11px] px-2 py-1 bg-slate-900 rounded-md border border-slate-800 text-slate-300"
                >
                  {kw}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 pt-2">
              خدمات احترافية لمدينة الرياض مع معاينة بالليزر مجاناً وضمان 10 سنوات.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} مؤسسة صرح الرياض لأعمال زجاج السيكوريت والكلادينج والألمنيوم. كافة الحقوق محفوظة.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 cursor-pointer"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
