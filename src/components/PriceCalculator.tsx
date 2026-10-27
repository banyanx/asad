import React, { useState, useId } from 'react';
import { Calculator, MessageSquare, Check, Sparkles, Tag, ArrowRight, Info, ShieldAlert } from 'lucide-react';
import { SERVICE_OPTIONS, ADDON_OPTIONS, calculateQuote, generateWhatsAppMessage } from '../utils/calculator';

interface PriceCalculatorProps {
  onDirectConsult?: () => void;
}

export const PriceCalculator: React.FC<PriceCalculatorProps> = ({ onDirectConsult }) => {
  const serviceSelectId = useId();
  const areaInputId = useId();
  const districtSelectId = useId();

  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICE_OPTIONS[0].id);
  const [area, setArea] = useState<number>(20);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [district, setDistrict] = useState<string>('حطين / شمال الرياض');

  const selectedService = SERVICE_OPTIONS.find((s) => s.id === selectedServiceId) || SERVICE_OPTIONS[0];

  const calculation = calculateQuote({
    serviceId: selectedServiceId,
    area,
    selectedAddonIds: selectedAddons,
  });

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleWhatsAppQuote = () => {
    const encoded = generateWhatsAppMessage(
      selectedService.name,
      area,
      selectedService.unitLabel,
      calculation.estimatedTotal,
      district
    );
    window.open(`https://wa.me/966500000000?text=${encoded}`, '_blank');
  };

  return (
    <section id="calculator" className="py-16 bg-slate-900/90 border-y border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with SEO Anchor */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
            <Calculator className="w-3.5 h-3.5" />
            <span>حاسبة الأسعار التقديرية الذكية بالرياض</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            احسب تكلفة أعمال الزجاج والكلادينج والاستيل لمشروعك
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            اختر نوع العمل والمساحة التقريبية للحصول على سعر استرشادي فوري وخصومات تصل إلى 15% للمشاريع في الرياض.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
            
            {/* Step 1: Select Service */}
            <div>
              <label htmlFor={serviceSelectId} className="block text-sm font-bold text-slate-200 mb-2">
                1. اختر نوع الخدمة أو المادة المطلوبة:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICE_OPTIONS.map((svc) => {
                  const isSelected = svc.id === selectedServiceId;
                  return (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => setSelectedServiceId(svc.id)}
                      className={`text-right p-3.5 rounded-xl border transition-all text-xs cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-amber-500 bg-amber-500/10 text-white shadow-md shadow-amber-500/10'
                          : 'border-slate-800 bg-slate-900/70 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-bold text-sm text-slate-100">{svc.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                      </div>
                      <div className="mt-2 text-slate-400 text-[11px] leading-tight">
                        {svc.description}
                      </div>
                      <div className="mt-2 text-amber-400 font-extrabold text-xs">
                        يبدأ من {svc.basePricePerSqMeter} ريال / {svc.unitLabel}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Set Area / Dimensions */}
            <div className="pt-2 border-t border-slate-800/80">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={areaInputId} className="text-sm font-bold text-slate-200">
                  2. المساحة التقريبية ({selectedService.unitLabel}):
                </label>
                <div className="text-amber-400 font-black text-lg bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                  {area} {selectedService.unitLabel}
                </div>
              </div>

              {/* Range Slider */}
              <input
                id={areaInputId}
                type="range"
                min="2"
                max="300"
                step="1"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />

              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>2 {selectedService.unitLabel} (شاور / باب صغير)</span>
                <span>50 {selectedService.unitLabel} (معرض متوسط)</span>
                <span>300+ {selectedService.unitLabel} (عمائر / واجهات كبرى)</span>
              </div>

              {/* Quick Area Buttons */}
              <div className="flex flex-wrap gap-2 mt-3">
                {[5, 12, 25, 50, 100, 200].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setArea(preset)}
                    className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer border ${
                      area === preset
                        ? 'bg-amber-500 text-slate-950 border-amber-500'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {preset} {selectedService.unitLabel}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Optional Addons */}
            <div className="pt-2 border-t border-slate-800/80">
              <label className="block text-sm font-bold text-slate-200 mb-2">
                3. خيارات إضافية للمواصفات الخاصة (اختياري):
              </label>
              <div className="space-y-2">
                {ADDON_OPTIONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border text-right cursor-pointer transition-all ${
                        isChecked
                          ? 'border-amber-500/80 bg-amber-500/10 text-white'
                          : 'border-slate-800 bg-slate-900/50 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 ${
                            isChecked ? 'bg-amber-500 border-amber-500 text-slate-950' : 'border-slate-700'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs sm:text-sm font-medium">{addon.name}</span>
                      </div>
                      <span className="text-xs font-bold text-amber-400 shrink-0">
                        +{addon.costPerSqMeter} ريال/{selectedService.unitLabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Riyadh District */}
            <div className="pt-2 border-t border-slate-800/80">
              <label htmlFor={districtSelectId} className="block text-sm font-bold text-slate-200 mb-2">
                4. موقع المشروع (حي الرياض للمعاينة المجانية):
              </label>
              <select
                id={districtSelectId}
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 text-slate-200 text-sm rounded-xl p-3 focus:outline-none focus:border-amber-500"
              >
                <option value="حطين / شمال الرياض">حي حطين (شمال الرياض) - وصول خلال ساعتين</option>
                <option value="الملقا / شمال الرياض">حي الملقا (شمال الرياض)</option>
                <option value="النرجس / شمال الرياض">حي النرجس (شمال الرياض)</option>
                <option value="الياسمين / شمال الرياض">حي الياسمين (شمال الرياض)</option>
                <option value="الصحافة / شمال الرياض">حي الصحافة (شمال الرياض)</option>
                <option value="الروضة / شرق الرياض">حي الروضة (شرق الرياض)</option>
                <option value="اليرموك / شرق الرياض">حي اليرموك (شرق الرياض)</option>
                <option value="العليا / وسط الرياض">حي العليا (وسط الرياض)</option>
                <option value="السويدي / غرب الرياض">حي السويدي (غرب الرياض)</option>
                <option value="الشفا / جنوب الرياض">حي الشفا (جنوب الرياض)</option>
                <option value="حي آخر بالرياض">حي آخر بمدينة الرياض أو الدرعية</option>
              </select>
            </div>

          </div>

          {/* Results Summary Box (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 to-slate-900 p-6 sm:p-8 rounded-2xl border border-amber-500/30 shadow-2xl space-y-6 sticky top-28">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">ملخص المقايسة التقديرية</span>
                <h3 className="text-lg font-bold text-white mt-0.5">{selectedService.name}</h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/30">
                سعر فوري
              </span>
            </div>

            {/* Breakdown List */}
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">سعر الأساس ({area} {selectedService.unitLabel}):</span>
                <span className="font-semibold text-white">{calculation.basePrice.toLocaleString()} ريال</span>
              </div>

              {calculation.addonsPrice > 0 && (
                <div className="flex justify-between">
                  <span className="text-slate-400">الإضافات والمواصفات الخاصة:</span>
                  <span className="font-semibold text-amber-300">+{calculation.addonsPrice.toLocaleString()} ريال</span>
                </div>
              )}

              <div className="flex justify-between">
                <span className="text-slate-400">المجموع الفرعي:</span>
                <span className="font-semibold text-white">{calculation.subtotal.toLocaleString()} ريال</span>
              </div>

              {calculation.discountAmount > 0 && (
                <div className="flex justify-between text-emerald-400 font-bold p-2 bg-emerald-950/40 border border-emerald-800/40 rounded-lg">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" />
                    خصم مساحة المشروع ({(calculation.discountRate * 100).toFixed(0)}%):
                  </span>
                  <span>-{calculation.discountAmount.toLocaleString()} ريال</span>
                </div>
              )}

              <div className="pt-2 border-t border-slate-800 flex justify-between items-baseline">
                <div>
                  <span className="text-xs text-slate-400 block">السعر التقديري قبل الضريبة:</span>
                  <span className="text-2xl sm:text-3xl font-black text-amber-400">
                    {calculation.estimatedTotal.toLocaleString()} <span className="text-sm font-normal">ريال</span>
                  </span>
                </div>
                <div className="text-left text-xs text-slate-400">
                  <span>شامل التوريد والتركيب بالرياض</span>
                </div>
              </div>

              <div className="text-xs text-slate-500 flex justify-between">
                <span>ضريبة القيمة المضافة التقريبية (15%):</span>
                <span>{calculation.vatAmount.toLocaleString()} ريال</span>
              </div>
            </div>

            {/* Direct WhatsApp Quote Button */}
            <div className="pt-2 space-y-2.5">
              <button
                onClick={handleWhatsAppQuote}
                className="w-full py-4 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/80 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5" />
                <span>إرسال هذه المقايسة لحجز معاينة مجانية عبر الواتساب</span>
              </button>

              <p className="text-[11px] text-slate-400 text-center leading-relaxed flex items-center justify-center gap-1">
                <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>الأسعار استرشادية وتثبت نهائياً بعد الزيارة الفنية ورفع المقاسات بالليزر مجاناً.</span>
              </p>
            </div>

            {/* Special Guarantees in Quote */}
            <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1.5">
              <div className="text-amber-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                ماذا يشمل هذا السعر؟
              </div>
              <ul className="space-y-1 text-slate-400 text-[11px]">
                <li>• رفع المقاسات الهندسية بأحدث أجهزة الليزر مجاناً</li>
                <li>• قص وتجهيز حراري Tempered للزجاج وفق المواصفات</li>
                <li>• مسامير ومفصلات وإكسسوارات ستانلس ستيل غير قابلة للصدأ</li>
                <li>• شهادة ضمان رسمية معتمدة وفاتورة ضريبية للمشروع</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
