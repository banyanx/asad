export interface ProjectItem {
  id: string;
  title: string;
  category: 'glass' | 'cladding' | 'facade' | 'railing' | 'shower';
  categoryLabel: string;
  location: string;
  year: string;
  area: string;
  image: string;
  description: string;
  highlights: string[];
}

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'واجهة معرض سيارات فاخر وكلادينج أسود ملكي',
    category: 'cladding',
    categoryLabel: 'كلادينج وزجاج',
    location: 'الرياض',
    year: '2024',
    area: '480 م²',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80',
    description: 'تنفيذ تكسية واجهة متكاملة بألواح الكلادينج الأسود المقاوم للحريق مع واجهات زجاج سيكوريت 12 مم بارتفاع 6 أمتار بنظام سبايدر مفتوح.',
    highlights: ['كلادينج ديبوند مقاوم للحريق A2', 'زجاج سيكوريت 12 مم نظام سبايدر', 'إنارة مخفية LED مدمجة'],
  },
  {
    id: 'proj-2',
    title: 'واجهات استركشر وكارتن وول فيلا مودرن',
    category: 'facade',
    categoryLabel: 'واجهات استركشر',
    location: 'الرياض',
    year: '2024',
    area: '260 م²',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'تصميم وتركيب واجهات زجاجية دبل عازل للحرارة والصوت مع قطاعات ألمنيوم ثيرمال بريك معزولة لمقاومة حرارة صيف الرياض.',
    highlights: ['زجاج دبل Low-E عاكس خفيف', 'عزل صوتي فائق 36 ديسيبل', 'قطاعات ألمنيوم بسماكة 2.2 مم'],
  },
  {
    id: 'proj-3',
    title: 'أبواب وواجهات محلات تجارية زجاج سيكوريت',
    category: 'glass',
    categoryLabel: 'زجاج سيكوريت',
    location: 'الرياض',
    year: '2024',
    area: '180 م²',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    description: 'توريد وتركيب واجهات زجاجية سيكوريت 12 مم شفافة فائقة النقاء لمحلات ومقاهي مع ماكينات دفن إيطالية ومقابض ستانلس ستيل طويلة.',
    highlights: ['زجاج Clear Float مقسى', 'ماكينات Dorma إيطالية معتمدة', 'أقفال أمان إلكترونية'],
  },
  {
    id: 'proj-4',
    title: 'درابزين ستانلس ستيل وزجاج لمسبح وبلكونات قصر',
    category: 'railing',
    categoryLabel: 'درابزين استيل',
    location: 'الرياض',
    year: '2024',
    area: '95 متر طولي',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    description: 'تنفيذ سياج مسبح ودرابزين بلكونات خارجي من الستانلس ستيل 316 المقاوم لعوامل الجو مع زجاج لتد سيكوريت 16 مم مصفح لأعلى معايير الأمان.',
    highlights: ['ستانلس ستيل 316 البحري المقاوم للصدأ', 'زجاج لتد مصفح أمان 8+8 مم', 'حوامل أرضية Spigots بدون إطار علوي'],
  },
  {
    id: 'proj-5',
    title: 'قواطع مكاتب زجاجية ذكية وساند بلاست',
    category: 'glass',
    categoryLabel: 'زجاج سيكوريت',
    location: 'الرياض',
    year: '2023',
    area: '320 م²',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    description: 'تقسيم قاعات اجتماعات ومكاتب تنفيذية بقواطع زجاج سيكوريت 10 مم مع رش رمل ساند بلاست مزخرف هندسياً وأبواب سحب هيدروليكية ناعمة.',
    highlights: ['عزل صوتي للمكاتب التنفيذية', 'رسم ليزر وشعار الشركة بدقة', 'إكسسوارات سوداء مودرن'],
  },
  {
    id: 'proj-6',
    title: 'كابينات شاور زجاجية فندقية لفلل سكنية',
    category: 'shower',
    categoryLabel: 'شاورات زجاجية',
    location: 'الرياض',
    year: '2024',
    area: '14 كابينة مخصصة',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    description: 'تفصيل كابينات شاور زجاج سيكوريت 10 مم مفصلية وسحب مع إكسسوارات ذهبية مقاومة للماء والرطوبة والمنظفات الكيميائية.',
    highlights: ['طلاء نانو ضد التكلس المائي', 'مفصلات نحاسية مطلية PVD ذهبي', 'عوازل سيليكون ألمانية مانعة للرشح'],
  },
];
