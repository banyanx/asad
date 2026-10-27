import React from 'react';
import { Shield, Award, Ruler, CheckCircle2, Phone, MessageSquare, Eye, Building } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-slate-950">
      {/* Background Glowing Ambient Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Text Content (7 cols on large) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            {/* Top Verification Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>معرض أعمال ومشاريع الزجاج والكلادينج في مدينة الرياض</span>
            </div>

            {/* H1 Primary SEO Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              أفضل أعمال <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-400 via-amber-300 to-amber-500">زجاج السيكوريت</span>، واجهات الكلادينج والألمنيوم بالرياض
            </h1>

            {/* Rich Subheading with Keywords */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              تفصيل وتوريد وتركيب واجهات زجاج سيكوريت (10 و 12 مم)، واجهات كلادينج ألمنيوم مقاوم للحريق، استركشر وكارتن وول عازل للحرارة، ودرابزين ستانلس ستيل عيار 304 و 316. تنفيذ هندسي معتمد وفق كود البناء السعودي مع <strong className="text-amber-400 font-bold">معاينة ورفع مقاسات مجانية بالليزر</strong> بمدينة الرياض وضمان يصل إلى 10 سنوات.
            </p>

            {/* Trust Points Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col items-center sm:items-start text-center sm:text-right">
                <Ruler className="w-5 h-5 text-amber-400 mb-1" />
                <span className="text-white text-xs font-bold">معاينة بالليزر مجاناً</span>
                <span className="text-slate-400 text-[11px]">بمدينة الرياض</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col items-center sm:items-start text-center sm:text-right">
                <Shield className="w-5 h-5 text-emerald-400 mb-1" />
                <span className="text-white text-xs font-bold">ضمان شامل 10 سنوات</span>
                <span className="text-slate-400 text-[11px]">معتمد ضد التسرب والبهتان</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col items-center sm:items-start text-center sm:text-right">
                <Building className="w-5 h-5 text-blue-400 mb-1" />
                <span className="text-white text-xs font-bold">مطابق لكود البناء SBC</span>
                <span className="text-slate-400 text-[11px]">عوازل حرارية وصوتية</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col items-center sm:items-start text-center sm:text-right">
                <Award className="w-5 h-5 text-amber-400 mb-1" />
                <span className="text-white text-xs font-bold">إكسسوارات إيطالية</span>
                <span className="text-slate-400 text-[11px]">ماكينات Dorma وستيل 316</span>
              </div>
            </div>

            {/* Conversion CTA Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={scrollToGallery}
                className="px-6 py-4 rounded-xl bg-gradient-to-l from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transform hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Eye className="w-5 h-5" />
                <span>استعراض معرض المشاريع المنفذة</span>
              </button>

              <a
                href="https://wa.me/966579305750?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%B7%D9%84%D8%A8%20%D9%85%D8%B9%D8%A7%D9%8A%D9%86%D8%A9%20%D9%85%D8%AC%D8%A7%D9%86%D9%8A%D8%A9%20%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84%20%D8%A7%D9%84%D8%B2%D8%AC%D8%A7%D8%AC%20%D9%88%D8%A7%D9%84%D9%88%D8%A7%D8%AC%D9%87%D8%A7%D8%AA%20%D8%A8%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/60 transform hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>تواصل واتساب مع الفني المباشر</span>
              </a>

              <a
                href="tel:0579305750"
                className="px-5 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 hover:text-white border border-slate-700 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span dir="ltr">0579305750</span>
              </a>
            </div>

            {/* Quick Proof Highlights */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> معاينة ورفع مقاسات مجاناً
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> تركيب وتسليم في الوقت المحدد
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> فواتير ضريبية وعقود رسمية
              </span>
            </div>

          </div>

          {/* Right Visual Card (5 cols on large) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl p-1.5">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80"
                alt="واجهات زجاج سيكوريت وكلادينج بالرياض"
                className="w-full h-[420px] object-cover rounded-xl"
                loading="eager"
              />

              {/* Floating Overlay Badge */}
              <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md border border-amber-500/40 p-3 rounded-xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-sm">
                  ⚡ 2h
                </div>
                <div>
                  <div className="text-white text-xs font-bold">جاهزون للمعاينة الآن</div>
                  <div className="text-amber-400 text-[11px]">فريق متنقل في مدينة الرياض</div>
                </div>
              </div>

              {/* Bottom Project Stats Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-slate-800 p-4 rounded-xl shadow-xl">
                <div className="grid grid-cols-3 gap-2 text-center divide-x divide-x-reverse divide-slate-800">
                  <div>
                    <div className="text-amber-400 font-black text-lg">+1,850</div>
                    <div className="text-slate-400 text-[10px]">مشروع منفذ بالرياض</div>
                  </div>
                  <div>
                    <div className="text-white font-black text-lg">100%</div>
                    <div className="text-slate-400 text-[10px]">زجاج سيكوريت مقسى</div>
                  </div>
                  <div>
                    <div className="text-emerald-400 font-black text-lg">4.9 ★</div>
                    <div className="text-slate-400 text-[10px]">تقييم عملاء الرياض</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Trust Ribbon */}
            <div className="mt-4 flex items-center justify-between px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300">
              <span className="text-amber-400 font-semibold">تخصصنا الدقيق:</span>
              <span>واجهات محلات • فلل وقصور • قواطع مكاتب • كلادينج معارض</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
