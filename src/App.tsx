import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceWorkflow } from './components/ServiceWorkflow';
import { ConnectedEcosystem } from './components/ConnectedEcosystem';
import { OperationsInsights } from './components/OperationsInsights';
import { BrandStatement } from './components/BrandStatement';
import { FormSection } from './components/FormSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const scrollToApplication = () => {
    const el = document.getElementById('technician-application');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExplore = () => {
    const el = document.getElementById('workflow');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Section 1: Minimal Navigation */}
      <Navbar onJoinClick={scrollToApplication} />

      <main className="flex-grow">
        {/* Section 2: Split-layout Hero */}
        <Hero
          onJoinClick={scrollToApplication}
          onExploreClick={scrollToExplore}
        />

        {/* Section 3: Bringing Every Stage of Service Together */}
        <ServiceWorkflow />

        {/* Section 4: Connecting Businesses, Field Teams and Customers */}
        <ConnectedEcosystem />

        {/* Section 5: Turning Operations into Useful Insights */}
        <OperationsInsights />

        {/* Section 6: Brand Statement */}
        <BrandStatement />

        {/* Section 7: Technician Information Collection CTA (Google Form) */}
        <FormSection />
      </main>

      {/* Section 8: Professional Minimal Footer */}
      <Footer />
    </div>
  );
};

export default App;
