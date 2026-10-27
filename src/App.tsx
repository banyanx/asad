import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { ComparisonTable } from './components/ComparisonTable';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Cairo',sans-serif] selection:bg-amber-500 selection:text-slate-950">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Real Projects Gallery in Riyadh (Front & Center) */}
        <ProjectsGallery />

        {/* Services & Architectural Disciplines */}
        <ServicesSection />

        {/* Engineering Quality Comparison Table */}
        <ComparisonTable />

        {/* 6 Engineering Pillars & 4-Step Process */}
        <WhyChooseUs />

        {/* Google SEO FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instant Action Buttons (WhatsApp & Call) */}
      <FloatingActions />
    </div>
  );
}
