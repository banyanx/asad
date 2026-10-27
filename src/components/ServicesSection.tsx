import React, { useState } from 'react';
import { ShieldCheck, Building2, Layers, Maximize2, Sparkles, CheckCircle2, Phone, MessageSquare, ChevronDown, Clock } from 'lucide-react';
import { SERVICES_LIST } from '../data/servicesData';

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(SERVICES_LIST[0].id);

  const filteredServices = activeTab === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter((s) => s.id === activeTab);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-amber-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-amber-400" />;
      case 'Maximize2':
        return <Maximize2 className="w-6 h-6 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading with SEO Priority */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
            <span>تخصصاتنا الشاملة في الرياض</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
            خدمات توريد وتفصيل وتركيب زجاج السيكوريت والواجهات بالرياض
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            نجمع بين دقة المعايير الهندسية وأفخم الخامات العالمية لتقديم حلول متكاملة للمحلات، المعارض، الفلل، والأبراج التجارية بمدينة الرياض.
          </p>
        </div>

        {/* Categories Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            كافة الخدمات (5)
          </button>
          {SERVICES_LIST.map((svc) => (
            <button
              key={svc.id}
              onClick={() => setActiveTab(svc.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === svc.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {svc.category}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                className="bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between group"
              >
                {/* Image & Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 right-3 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700 text-amber-400 text-xs font-bold">
                    {service.category}
                  </div>

                  {/* Execution Badge Overlay */}
                  <div className="absolute bottom-3 right-3 left-3 flex justify-between items-end">
                    <span className="text-white font-bold text-xs bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{service.executionTime}</span>
                    </span>
                    <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-800/40">
                      معاينة بالليزر مجاناً
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Quick Features List */}
                    <div className="space-y-1.5 pt-2">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expandable Specifications Toggle */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                        className="text-amber-400 hover:text-amber-300 text-xs font-bold flex items-center gap-1 cursor-pointer focus:outline-none"
                      >
                        <span>{isExpanded ? 'إخفاء المواصفات الفنية' : 'عرض المواصفات الفنية المعتمدة'}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {isExpanded && (
                        <div className="mt-3 p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-2 animate-in fade-in duration-200">
                          {service.specifications.map((spec, sIdx) => (
                            <div key={sIdx} className="flex justify-between border-b border-slate-900 pb-1 last:border-0 last:pb-0">
                              <span className="text-slate-400">{spec.label}:</span>
                              <span className="text-slate-200 font-medium text-left">{spec.value}</span>
                            </div>
                          ))}
                          <div className="text-[11px] text-emerald-400 font-bold pt-1">
                            ✓ {service.warranty}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2">
                    <a
                      href={`https://wa.me/966579305750?text=${encodeURIComponent(`السلام عليكم، أرغب في طلب تنفيذ أو معاينة لـ ${service.title} بالرياض.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-lg shadow-emerald-950/40"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>طلب تنفيذ عبر الواتساب</span>
                    </a>
                    <a
                      href="tel:0579305750"
                      className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1 transition-all cursor-pointer"
                      title="اتصال هاتفي مباشر"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
