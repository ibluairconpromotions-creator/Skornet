import React, { useState, useEffect } from 'react';
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
import { PrivacyPolicy } from './components/PrivacyPolicy';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
      if (path === '/privacy-policy' || path === '/privacy' || window.location.hash === '#privacy-policy') {
        return '/privacy-policy';
      }
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
      if (path === '/privacy-policy' || path === '/privacy' || window.location.hash === '#privacy-policy') {
        setCurrentPath('/privacy-policy');
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (currentPath === '/') {
      document.title = 'SKORNET — Connecting the HVAC Service Ecosystem';
    }
  }, [currentPath]);

  const navigateTo = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToApplication = () => {
    if (currentPath !== '/') {
      navigateTo('/');
      setTimeout(() => {
        const el = document.getElementById('technician-application');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
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

  if (currentPath === '/privacy-policy') {
    return (
      <PrivacyPolicy
        onHomeClick={() => navigateTo('/')}
        onJoinClick={scrollToApplication}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <Navbar
        onJoinClick={scrollToApplication}
        onHomeClick={() => navigateTo('/')}
      />

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

      {/* Section 12: Footer with Platform, Resources, Legal & Contact Menus */}
      <Footer
        onPrivacyClick={() => navigateTo('/privacy-policy')}
        onJoinClick={scrollToApplication}
      />
    </div>
  );
};

export default App;
