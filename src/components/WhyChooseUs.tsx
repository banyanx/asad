import React from 'react';
import { ShieldCheck, Crosshair, Factory, Clock, Wrench, Award, FileText, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: <Crosshair className="w-7 h-7 text-amber-400" />,
      title: 'رفع مقاسات دقيق بالليزر الرقمي',
      desc: 'نستخدم أحدث أجهزة القياس الليزرية لضمان تطابق الأبواب والواجهات والدرابزين بالمليمتر بدون أي فراغات أو أخطاء تركيب.',
    },
    {
      icon: <Factory className="w-7 h-7 text-amber-400" />,
      title: 'أفران ومكائن CNC متطورة',
      desc: 'قص وحفر وتنعيم حواف الزجاج بأحدث مكائن التحكم الرقمي مع معالجة حرارية تضمن أعلى صلابة لزجاج السيكوريت.',
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-amber-400" />,
      title: 'كلادينج معتمد من الدفاع المدني',
      desc: 'نورد ألواح كلادينج ألمنيوم مقاومة للحريق مطابقة للاشتراطات البلدية وكود البناء السعودي مع إصدار شهادات إنجاز معتمدة.',
    },
    {
      icon: <Clock className="w-7 h-7 text-amber-400" />,
      title: 'سرعة الإنجاز والالتزام بالمواعيد',
      desc: 'فريق فني متنقل يصل لموقعك بالرياض خلال ساعتين فقط للمعاينة، مع الالتزام التام بالجدول الزمني لتسليم المشروع.',
    },
    {
      icon: <Award className="w-7 h-7 text-amber-400" />,
      title: 'إكسسوارات إيطالية وأصلية 100%',
      desc: 'نستخدم مفصلات وماكينات دفن Dorma ومقابض ستانلس ستيل عيار 304 و 316 مع ضمان رسمي ضد الصدأ والهبوط.',
    },
    {
      icon: <FileText className="w-7 h-7 text-amber-400" />,
      title: 'عقود موثقة وضمان شامل 10 سنوات',
      desc: 'عقود رسمية واضحة البنود، فواتير ضريبية نظامية، وشهادة ضمان خطية معتمدة على الهيكل والألواح والتركيب.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-900 border-t border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>لماذا نحن الخيار الأول بالرياض؟</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
            معايير هندسية متقدمة تجعلنا رواد واجهات الزجاج والألمنيوم
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            نحن لا نبيع مواد فقط، بل نقدم حلولاً معمارية متكاملة ترفع من قيمة عقارك التجاري أو السكني وتتحمل مناخ الرياض القاسي.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 shadow-xl space-y-3.5 group"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 group-hover:border-amber-500/40 transition-all">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Workflow Steps Banner */}
        <div className="mt-16 bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <h3 className="text-center text-lg sm:text-xl font-black text-white mb-8">
            خطوات تنفيذ مشروعك معنا في 4 مراحل بسيطة:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'اتصال ومعاينة مجانية', desc: 'تواصل معنا لتحديد موعد زيارة المهندس ورفع المقاسات بالليزر مجاناً.' },
              { step: '02', title: 'عرض سعر وتصميم 3D', desc: 'استلام مقايسة تفصيلية بالخامات والأسعار ومخططات التوزيع والتنفيذ.' },
              { step: '03', title: 'التصنيع وتجهيز الزجاج', desc: 'قص وسيكوريت الزجاج في أفران متطورة وتجهيز ألواح الكلادينج والهياكل.' },
              { step: '04', title: 'التركيب وتسليم الضمان', desc: 'تركيب بأيدي فنيين محترفين واختبار العزل وتسليم شهادة الضمان والفاتورة.' },
            ].map((st, i) => (
              <div key={i} className="relative p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-right">
                <span className="text-3xl font-black text-amber-500/20 block mb-1">{st.step}</span>
                <h4 className="text-sm font-bold text-white mb-1">{st.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
