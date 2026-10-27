import React, { useState, useId } from 'react';
import { Calendar, Phone, MapPin, User, CheckCircle2, MessageSquare, Clock, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { InquiryFormData, ValidationErrors, validateInquiryForm } from '../utils/validation';

interface ConsultationFormProps {
  initialService?: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({ initialService }) => {
  const fullNameId = useId();
  const phoneId = useId();
  const districtId = useId();
  const serviceId = useId();
  const areaId = useId();
  const notesId = useId();

  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phoneNumber: '',
    district: 'حطين',
    serviceType: initialService || 'زجاج سيكوريت 10 مم و 12 مم',
    estimatedArea: '',
    notes: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateInquiryForm(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleSendViaWhatsAppDirect = () => {
    const msg = `السلام عليكم ورحمة الله،
أرغب في تأكيد حجز معاينة مجانية ورفع مقاسات لمشروعي بالرياض:
- الاسم: ${formData.fullName}
- الجوال: ${formData.phoneNumber}
- الحي بالرياض: ${formData.district}
- نوع العمل: ${formData.serviceType}
- المساحة / الواجهة: ${formData.estimatedArea || 'غير محددة'}
- ملاحظات: ${formData.notes || 'لا توجد'}`;

    window.open(`https://wa.me/966579305750?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Side (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-right">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
              <Calendar className="w-3.5 h-3.5" />
              <span>معاينة ورفع مقاسات بالليزر مجاناً</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
              احجز زيارة المهندس لموقعك بالرياض اليوم مجاناً
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              سيتوجه فني متخصص بأحدث أجهزة قياس الليزر إلى موقع مشروعك لرفع المقاسات بدقة، معاينة الموقع، واقتراح أفضل الحلول الهندسية المناسبة لمشروعك بدون أي رسوم معاينة.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">سرعة الوصول للمعاينة</h4>
                  <p className="text-xs text-slate-400">خلال ساعتين في أحياء شمال وشرق وغرب الرياض، ونفس اليوم لبقية المناطق.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">دراسة ومخطط تنفيذي</h4>
                  <p className="text-xs text-slate-400">نقدم دراسة فنية دقيقة توضح مواصفات الزجاج، القطاعات، الإكسسوارات، والضمان المعتمد.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <Sparkles className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">عينات حية في الموقع</h4>
                  <p className="text-xs text-slate-400">إمكانية فحص عينات الزجاج والكلادينج وكتالوج ألوان قطاعات الألمنيوم أثناء الزيارة.</p>
                </div>
              </div>
            </div>

            {/* Direct Phone Box */}
            <div className="pt-2 flex items-center justify-between p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
              <div>
                <span className="text-xs text-slate-400 block">هل تفضل الاتصال المباشر؟</span>
                <span className="text-amber-400 font-black text-lg" dir="ltr">0579305750</span>
              </div>
              <a
                href="tel:0579305750"
                className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"
              >
                اتصل بنا الآن
              </a>
            </div>
          </div>

          {/* Form Box (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-800 shadow-2xl relative">
            
            {isSubmitted ? (
              <div className="py-12 text-center space-y-5 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                  <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white">تم استلام طلب المعاينة بنجاح!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    شكراً لك أستاذ <strong className="text-amber-400">{formData.fullName}</strong>. تم تسجيل موعد مبدئي لمعاينة موقعك في <strong className="text-white">حي {formData.district}</strong> بالرياض.
                  </p>
                  <p className="text-xs text-slate-400">
                    سيتصل بك الفني المشرف على الرقم <strong className="text-white" dir="ltr">{formData.phoneNumber}</strong> لتأكيد الموعد المناسب لسيادتكم.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={handleSendViaWhatsAppDirect}
                    className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>تأكيد الموعد فوراً عبر الواتساب</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phoneNumber: '',
                        district: 'حطين',
                        serviceType: 'زجاج سيكوريت 10 مم و 12 مم',
                        estimatedArea: '',
                        notes: '',
                      });
                    }}
                    className="py-3 px-5 rounded-xl bg-slate-950 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold cursor-pointer"
                  >
                    طلب موعد آخر
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-800 pb-3 mb-4">
                  <h3 className="text-xl font-black text-white">نموذج حجز المعاينة ورفع المقاسات</h3>
                  <p className="text-xs text-slate-400 mt-1">تعبئة هذا النموذج مجانية 100% ولا تلزمك بأي دفع مسبق</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor={fullNameId} className="block text-xs font-bold text-slate-300 mb-1.5">
                      الاسم الكريم *
                    </label>
                    <div className="relative">
                      <input
                        id={fullNameId}
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="مثال: صالح القحطاني"
                        className={`w-full bg-slate-950 border text-slate-100 text-sm rounded-xl py-3 pr-3.5 pl-3 focus:outline-none ${
                          errors.fullName ? 'border-rose-500' : 'border-slate-800 focus:border-amber-500'
                        }`}
                      />
                    </div>
                    {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor={phoneId} className="block text-xs font-bold text-slate-300 mb-1.5">
                      رقم الجوال السعودي *
                    </label>
                    <div className="relative">
                      <input
                        id={phoneId}
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="05XXXXXXXX"
                        dir="ltr"
                        className={`w-full bg-slate-950 border text-slate-100 text-sm rounded-xl py-3 px-3.5 focus:outline-none text-right ${
                          errors.phoneNumber ? 'border-rose-500' : 'border-slate-800 focus:border-amber-500'
                        }`}
                      />
                    </div>
                    {errors.phoneNumber && <p className="text-[11px] text-rose-400 mt-1">{errors.phoneNumber}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* District in Riyadh */}
                  <div>
                    <label htmlFor={districtId} className="block text-xs font-bold text-slate-300 mb-1.5">
                      الحي بمدينة الرياض *
                    </label>
                    <input
                      id={districtId}
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      placeholder="مثال: حطين، الملقا، الروضة..."
                      className={`w-full bg-slate-950 border text-slate-100 text-sm rounded-xl py-3 px-3.5 focus:outline-none ${
                        errors.district ? 'border-rose-500' : 'border-slate-800 focus:border-amber-500'
                      }`}
                    />
                    {errors.district && <p className="text-[11px] text-rose-400 mt-1">{errors.district}</p>}
                  </div>

                  {/* Service Type */}
                  <div>
                    <label htmlFor={serviceId} className="block text-xs font-bold text-slate-300 mb-1.5">
                      نوع العمل المطلوب *
                    </label>
                    <select
                      id={serviceId}
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-100 text-sm rounded-xl py-3 px-3.5 focus:outline-none focus:border-amber-500"
                    >
                      <option value="زجاج سيكوريت 10 مم و 12 مم">زجاج سيكوريت (أبواب / واجهات محلات)</option>
                      <option value="واجهات كلادينج ألمنيوم">واجهات كلادينج ألمنيوم مقاوم للحريق</option>
                      <option value="واجهات استركشر وكارتن وول">واجهات استركشر وكارتن وول (دبل جلاس)</option>
                      <option value="درابزين ستانلس ستيل وزجاج">درابزين ستانلس ستيل 304/316 وزجاج</option>
                      <option value="كابينات وقواطع شاور زجاجية">كابينات وقواطع شاور زجاجية</option>
                      <option value="أعمال متكاملة للمبنى">أعمال متكاملة (زجاج + كلادينج + استيل)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Estimated Area */}
                  <div>
                    <label htmlFor={areaId} className="block text-xs font-bold text-slate-300 mb-1.5">
                      المقاس التقريبي أو عدد الأبواب (اختياري)
                    </label>
                    <input
                      id={areaId}
                      type="text"
                      name="estimatedArea"
                      value={formData.estimatedArea}
                      onChange={handleChange}
                      placeholder="مثال: واجهة 10 أمتار أو بابين سيكوريت"
                      className="w-full bg-slate-950 border border-slate-800 text-slate-100 text-sm rounded-xl py-3 px-3.5 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Extra Notes */}
                  <div>
                    <label htmlFor={notesId} className="block text-xs font-bold text-slate-300 mb-1.5">
                      ملاحظات أو مواعيد الزيارة المفضلة
                    </label>
                    <input
                      id={notesId}
                      type="text"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="مثال: متواجد بالموقع بعد العصر"
                      className="w-full bg-slate-950 border border-slate-800 text-slate-100 text-sm rounded-xl py-3 px-3.5 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-l from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-5 h-5" />
                    <span>{isSubmitting ? 'جاري الإرسال...' : 'تأكيد حجز المعاينة المجانية بالرياض'}</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-3 text-[11px] text-slate-500 pt-1 text-center">
                  <span>✓ معاينة مجانية بدون التزام</span>
                  <span>•</span>
                  <span>✓ فنيون متخصصون وأجهزة ليزر</span>
                  <span>•</span>
                  <span>✓ وصول سريع خلال ساعتين</span>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
