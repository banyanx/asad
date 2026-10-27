export interface ServiceOption {
  id: string;
  name: string;
  category: 'glass' | 'cladding' | 'facade' | 'railing' | 'shower';
  basePricePerSqMeter: number; // in SAR
  unitLabel: string;
  thicknessOptions?: { label: string; priceDelta: number }[];
  description: string;
}

export const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: 'securit-10mm',
    name: 'زجاج سيكوريت 10 مم (أبواب وواجهات محلات)',
    category: 'glass',
    basePricePerSqMeter: 220,
    unitLabel: 'متر مربع',
    description: 'زجاج مقسى حرارياً عالي المتانة، إكسسوارات استانلس ستيل، مناسب للمحلات والمعارض.',
  },
  {
    id: 'securit-12mm',
    name: 'زجاج سيكوريت 12 مم فائق القوة (واجهات وفلل)',
    category: 'glass',
    basePricePerSqMeter: 270,
    unitLabel: 'متر مربع',
    description: 'أقصى درجات الأمان ومقاومة الرياح والصدمات، مثالي للارتفاعات الكبيرة والمداخل الفخمة.',
  },
  {
    id: 'cladding-fireproof',
    name: 'واجهات كلادينج ألمنيوم مقاوم للحريق (ACP)',
    category: 'cladding',
    basePricePerSqMeter: 420,
    unitLabel: 'متر مربع',
    description: 'ألواح ديبوند معتمدة، تيوبات حديد مجلفنة، مقاومة للشمس والعوامل الجوية بالرياض وضمان 10 سنوات.',
  },
  {
    id: 'structural-curtain-wall',
    name: 'واجهات استركشر وكارتن وول (زجاج دبل عازل)',
    category: 'facade',
    basePricePerSqMeter: 950,
    unitLabel: 'متر مربع',
    description: 'نظام واجهات زجاجية مزدوجة بقطاعات ألمنيوم معزولة حرارياً، عزل تام للحرارة والصوت وفق كود البناء السعودي.',
  },
  {
    id: 'stainless-glass-railing',
    name: 'درابزين زجاج سيكوريت مع ستانلس ستيل 304',
    category: 'railing',
    basePricePerSqMeter: 480,
    unitLabel: 'متر طولي',
    description: 'درابزين مودرن للدرج، البلكونات، ومحيط المسابح، مقاوم تماماً للصدأ والخدوش.',
  },
  {
    id: 'glass-shower-cabin',
    name: 'كابينات وقواطع شاور زجاج سيكوريت 10 مم',
    category: 'shower',
    basePricePerSqMeter: 380,
    unitLabel: 'متر مربع',
    description: 'شاور حمام عصري (سحب أو مفصلي) مقاوم للبخار والرواسب مع إكسسوارات ألمانية/إيطالية مطلية PVD.',
  },
];

export interface AddonOption {
  id: string;
  name: string;
  costPerSqMeter: number;
}

export const ADDON_OPTIONS: AddonOption[] = [
  { id: 'sandblast', name: 'رش رمل معتم / رسم ليزر هندسي أو لوجو', costPerSqMeter: 40 },
  { id: 'low-e', name: 'طبقة Low-E عازلة للحرارة الشديدة والأشعة فوق البنفسجية', costPerSqMeter: 65 },
  { id: 'italian-hardware', name: 'ترقية الإكسسوارات والمفصلات إلى إيطالية الصنع Dorma معتمدة', costPerSqMeter: 50 },
];

export interface CalculationInput {
  serviceId: string;
  area: number; // m² or linear meter
  selectedAddonIds: string[];
}

export interface CalculationResult {
  basePrice: number;
  addonsPrice: number;
  subtotal: number;
  discountRate: number;
  discountAmount: number;
  estimatedTotal: number;
  vatAmount: number;
  finalTotalWithVat: number;
}

export function calculateQuote(input: CalculationInput): CalculationResult {
  const service = SERVICE_OPTIONS.find((s) => s.id === input.serviceId) || SERVICE_OPTIONS[0];
  const area = Math.max(1, Math.min(10000, Number(input.area) || 1));

  const basePrice = service.basePricePerSqMeter * area;

  let addonsPricePerM2 = 0;
  for (const addonId of input.selectedAddonIds) {
    const addon = ADDON_OPTIONS.find((a) => a.id === addonId);
    if (addon) {
      addonsPricePerM2 += addon.costPerSqMeter;
    }
  }

  const addonsPrice = addonsPricePerM2 * area;
  const subtotal = basePrice + addonsPrice;

  // Volume discounts in Riyadh construction projects
  let discountRate = 0;
  if (area >= 100) {
    discountRate = 0.15; // 15% discount for large projects
  } else if (area >= 50) {
    discountRate = 0.10; // 10% discount for medium projects
  } else if (area >= 20) {
    discountRate = 0.05; // 5% discount
  }

  const discountAmount = Math.round(subtotal * discountRate);
  const estimatedTotal = subtotal - discountAmount;
  const vatAmount = Math.round(estimatedTotal * 0.15); // 15% VAT
  const finalTotalWithVat = estimatedTotal + vatAmount;

  return {
    basePrice: Math.round(basePrice),
    addonsPrice: Math.round(addonsPrice),
    subtotal: Math.round(subtotal),
    discountRate,
    discountAmount,
    estimatedTotal: Math.round(estimatedTotal),
    vatAmount,
    finalTotalWithVat,
  };
}

export function generateWhatsAppMessage(
  serviceName: string,
  area: number,
  unitLabel: string,
  totalEstimate: number,
  clientDistrict?: string
): string {
  const districtText = clientDistrict ? ` في حي ${clientDistrict} بالرياض` : ' بمدينة الرياض';
  const text = `السلام عليكم ورحمة الله،
أرغب في الحصول على عرض سعر ومعاينة مجانية لمشروع${districtText}:
- الخدمة المطلوبة: ${serviceName}
- المقاس التقريبي: ${area} ${unitLabel}
- التكلفة التقديرية بالحاسبة: ${totalEstimate} ريال
يرجى التواصل وتحديد موعد لرفع المقاسات بالليزر. شكراً لكم.`;

  return encodeURIComponent(text);
}
