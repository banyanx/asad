import React, { useState } from 'react';
import { Eye, MapPin, Calendar, Layers, X, MessageSquare, Phone, CheckCircle2 } from 'lucide-react';
import { PROJECTS_LIST, ProjectItem } from '../data/projectsData';

export const ProjectsGallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter((p) => p.category === selectedFilter);

  return (
    <section id="gallery" className="py-20 bg-slate-900/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
            <Layers className="w-3.5 h-3.5" />
            <span>معرض المشاريع المنفذة على أرض الواقع بالرياض</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
            نماذج من أعمالنا في زجاج السيكوريت والكلادينج بالرياض
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            شاهد صوراً حية لأحدث أعمال واجهات المعارض، الفلل، درابزين المسابح، وكابينات الشاور في مختلف أحياء الرياض.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'كافة المشاريع' },
            { id: 'glass', label: 'زجاج سيكوريت' },
            { id: 'cladding', label: 'كلادينج ألمنيوم' },
            { id: 'facade', label: 'واجهات استركشر' },
            { id: 'railing', label: 'درابزين استيل' },
            { id: 'shower', label: 'شاورات زجاجية' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-950 rounded-2xl border border-slate-800 hover:border-amber-500/40 overflow-hidden shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => setActiveModalProject(project)}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Location Tag */}
                <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700 text-xs font-semibold text-amber-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{project.location}</span>
                </div>

                <div className="absolute top-3 left-3 bg-slate-900/80 px-2 py-0.5 rounded text-[11px] text-slate-300 border border-slate-800">
                  {project.categoryLabel}
                </div>

                {/* Hover Quick View Trigger */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-4 h-4" />
                    <span>مشاهدة تفاصيل المشروع</span>
                  </span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs mt-1.5 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" /> {project.year}
                  </span>
                  <span className="text-amber-400 font-semibold">{project.area}</span>
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-amber-400 hover:text-amber-300 font-bold text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <span>التفاصيل</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Dialog for Project Details */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 left-4 z-10 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700 cursor-pointer"
                aria-label="إغلاق النافذة"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 bg-slate-950/90 px-3 py-1 rounded-lg border border-slate-700 text-xs font-bold text-amber-400">
                  {activeModalProject.categoryLabel}
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-5 text-right">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white">{activeModalProject.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>مدينة {activeModalProject.location}</span>
                      <span>•</span>
                      <span>المساحة: {activeModalProject.area}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {activeModalProject.description}
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                    المواصفات المنفذة في هذا المشروع:
                  </h4>
                  <div className="space-y-1.5">
                    {activeModalProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA In Modal */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/966579305750?text=${encodeURIComponent(`السلام عليكم، اطلعت على مشروعكم (${activeModalProject.title}) بالرياض وأرغب في تنفيذ عمل مشابه أو طلب معاينة مجانية.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-950/50"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>طلب تنفيذ تصميم مشابه عبر الواتساب</span>
                  </a>
                  <a
                    href="tel:0579305750"
                    className="py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    <span dir="ltr">0579305750</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
