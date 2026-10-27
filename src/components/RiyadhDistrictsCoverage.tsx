import React, { useState } from 'react';
import { MapPin, Search, Check, Clock, Phone, MessageSquare } from 'lucide-react';
import { RIYADH_DISTRICTS } from '../data/districtsData';

export const RiyadhDistrictsCoverage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const allDistricts = RIYADH_DISTRICTS.flatMap((group) =>
    group.districts.map((d) => ({ name: d, region: group.region, time: group.inspectionTime }))
  );

  const filtered = searchQuery.trim() === ''
    ? null
    : allDistricts.filter((d) => d.name.includes(searchQuery.trim()));

  return (
    <section id="districts" className="py-20 bg-slate-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
            <MapPin className="w-3.5 h-3.5" />
            <span>تغطية شاملة لجميع أحياء ومناطق الرياض</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
            خدمات تركيب زجاج السيكوريت والكلادينج في كافة أحياء الرياض
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            فريقنا الهندسي المتنقل متواجد في كافة قطاعات الرياض ومستعد لزيارة موقعك ورفع المقاسات وتقديم عرض سعر مجاناً.
          </p>
        </div>

        {/* Live Search District Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن حيك في الرياض (مثال: حطين، الملقا، الروضة، النرجس...)"
              className="w-full bg-slate-900 border border-slate-700 rounded-2xl py-3.5 pr-11 pl-4 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-xl"
            />
            <Search className="w-5 h-5 text-amber-400 absolute right-4 top-1/2 -translate-y-1/2" />
          </div>

          {filtered !== null && (
            <div className="mt-3 p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300">
              {filtered.length > 0 ? (
                <div className="space-y-2">
                  <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <Check className="w-4 h-4" />
                    <span>تم العثور على {filtered.length} حي مشمول بالتغطية الفورية:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {filtered.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-slate-950 border border-amber-500/30 text-white font-semibold flex items-center gap-1"
                      >
                        <MapPin className="w-3 h-3 text-amber-400" />
                        حي {item.name} ({item.time})
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-amber-400">
                  حي &quot;{searchQuery}&quot; مشمول بخدماتنا بالرياض! تواصل معنا مباشرة لتحديد أقرب موعد معاينة.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Districts Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RIYADH_DISTRICTS.map((group, gIdx) => (
            <div
              key={gIdx}
              className="bg-slate-900/80 rounded-2xl border border-slate-800 p-5 shadow-xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>{group.region}</span>
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>وقت المعاينة: {group.inspectionTime}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {group.districts.map((district, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 text-xs border border-slate-800/80 hover:border-amber-500/40 hover:text-white transition-colors"
                    >
                      {district}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <a
                  href={`https://wa.me/966579305750?text=${encodeURIComponent(`السلام عليكم، أحتاج معاينة لتركيب زجاج أو واجهات في ${group.region}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-slate-950 hover:bg-slate-800 text-amber-400 border border-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>طلب معاينة في هذا القطاع</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
