import React from 'react';
import { Check, X, ShieldAlert, Award, FileCheck } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'نوع ومعالجة الزجاج',
      ourStandard: 'زجاج سيكوريت مقسى حرارياً (Tempered) معالج بأفران حديثة مطابق للمواصفات السعودية SASO',
      marketCheap: 'زجاج نصف مقسى أو تجاري يسهل كسره ويشكل خطورة تناثر الشظايا الحادة',
    },
    {
      feature: 'ألواح الكلادينج (ACP)',
      ourStandard: 'كلادينج ديبوند / خليجي معتمد من الدفاع المدني بتصنيف مقاوم للحريق Fire-Rated B1/A2',
      marketCheap: 'كلادينج صيني غير معتمد قابل للاشتعال السريع وبهتان اللون خلال أقل من عامين',
    },
    {
      feature: 'هيكل حديد تثبيت الكلادينج',
      ourStandard: 'تيوبات حديد مجلفنة ومدهونة بمادة الإيبوكسي المقاومة للصدأ والتآكل الجوي',
      marketCheap: 'حديد أسود خفيف غير معالج يصدأ سريعاً ويهدد بسقوط ألواح الواجهة',
    },
    {
      feature: 'خامة الستانلس ستيل للدرابزين',
      ourStandard: 'ستانلس ستيل أصلي عيار 304 داخلي و 316 لمحيط المسابح ضد الصدأ نهائياً',
      marketCheap: 'ستيل تجاري عيار 201 يصدأ مع أول تعرض لرطوبة مياه المسابح وأمطار الرياض',
    },
    {
      feature: 'ماكينات الأبواب والمفصلات',
      ourStandard: 'ماكينات دفن هيدروليكية إيطالية Dorma معتمدة لا تهبط أو تفرغ زيت',
      marketCheap: 'ماكينات مقلدة رخيصة تسرب الزيت وتسبب صعوبة إغلاق الباب بعد أشهر قليلة',
    },
    {
      feature: 'الضمان وخدمات ما بعد البيع',
      ourStandard: 'ضمان مكتوب وموثق حتى 10 سنوات مع فريق صيانة سريع بالرياض',
      marketCheap: 'وعود شفهية وبدون ضمانات رسمية واختفاء الورشة بعد استلام الدفعة',
    },
  ];

  return (
    <section id="comparison" className="py-20 bg-slate-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>دليل الجودة الشامل للعملاء في الرياض</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
            كيف تضمن جودة زجاج السيكوريت والكلادينج ولا تنخدع بالأسعار الرخيصة؟
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            مقارنة واضحة تكشف لك الفروقات الجوهرية بين المواصفات الهندسية المعتمدة التي ننفذها وبين العروض التجارية الرديئة المنتشرة بالسوق.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-800">
                  <th className="py-4 px-4 sm:px-6 text-slate-300 font-bold w-1/4">وجه المقارنة</th>
                  <th className="py-4 px-4 sm:px-6 text-amber-400 font-extrabold bg-amber-500/10 border-x border-amber-500/20 w-3/8">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>معايير مؤسسة صرح الرياض (المعتمدة)</span>
                    </div>
                  </th>
                  <th className="py-4 px-4 sm:px-6 text-slate-400 font-medium w-3/8">
                    <div className="flex items-center gap-2 text-rose-400">
                      <ShieldAlert className="w-4 h-4 shrink-0" />
                      <span>المواصفات التجارية الرخيصة بالسوق</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {comparisonItems.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white bg-slate-950/40">
                      {item.feature}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-200 bg-amber-500/5 border-x border-amber-500/20">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{item.ourStandard}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{item.marketCheap}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Trust Note */}
          <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
            <span className="flex items-center gap-2 text-amber-400 font-semibold">
              <FileCheck className="w-4 h-4" />
              نوفر عينات مجانية لجميع الخامات والقطاعات أثناء زيارة المعاينة بالرياض
            </span>
            <a
              href="#contact"
              className="text-amber-400 hover:underline font-bold text-xs"
            >
              اطلب موعد معاينة ورفع مقاسات الآن ←
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
