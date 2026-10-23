import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IndustryChallenges } from './components/IndustryChallenges';
import { IntroducingSkornet } from './components/IntroducingSkornet';
import { ServiceWorkflow } from './components/ServiceWorkflow';
import { PlatformCapabilities } from './components/PlatformCapabilities';
import { StakeholderBenefits } from './components/StakeholderBenefits';
import { EquipmentApplications } from './components/EquipmentApplications';
import { FormSection } from './components/FormSection';
import { DataTrust } from './components/DataTrust';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const scrollToApplication = () => {
    const el = document.getElementById('technician-application');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExplore = () => {
    const el = document.getElementById('challenges');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <Navbar onJoinClick={scrollToApplication} />

      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero
          onJoinClick={scrollToApplication}
          onExploreClick={scrollToExplore}
        />

        {/* Section 2: Industry Challenges */}
        <IndustryChallenges />

        {/* Section 3: Introducing SKORNET */}
        <IntroducingSkornet />

        {/* Section 4: How SKORNET Works */}
        <ServiceWorkflow />

        {/* Section 5: Platform Capabilities */}
        <PlatformCapabilities />

        {/* Section 6: Benefits by Stakeholder */}
        <StakeholderBenefits />

        {/* Section 7: HVAC Equipment & Applications */}
        <EquipmentApplications />

        {/* Section 8: Join the SKORNET Network */}
        <FormSection />

        {/* Section 9: Data Access and Trust */}
        <DataTrust />

        {/* Section 10: Frequently Asked Questions */}
        <FAQSection />

        {/* Section 11: Final Call to Action */}
        <FinalCTA />
      </main>

      {/* Section 12: Footer */}
      <Footer />
    </div>
  );
};

export default App;
