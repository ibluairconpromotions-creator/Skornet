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
import { SecurityGovernance } from './components/SecurityGovernance';

const resolveRoute = (pathname: string, hash: string): string => {
  const path = pathname.toLowerCase().replace(/\/$/, '');
  if (path === '/privacy-policy' || path === '/privacy' || hash === '#privacy-policy') {
    return '/privacy-policy';
  }
  if (
    path === '/security-governance' ||
    path === '/security' ||
    path === '/governance' ||
    hash === '#security-governance' ||
    hash === '#security'
  ) {
    return '/security-governance';
  }
  return '/';
};

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return resolveRoute(window.location.pathname, window.location.hash);
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(resolveRoute(window.location.pathname, window.location.hash));
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
      setCurrentPath(resolveRoute(path, ''));
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
        onSecurityClick={() => navigateTo('/security-governance')}
      />
    );
  }

  if (currentPath === '/security-governance') {
    return (
      <SecurityGovernance
        onHomeClick={() => navigateTo('/')}
        onJoinClick={scrollToApplication}
        onPrivacyClick={() => navigateTo('/privacy-policy')}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0B162B]">
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

      {/* Section 12: Footer with Resources & Legal and Contact */}
      <Footer
        onPrivacyClick={() => navigateTo('/privacy-policy')}
        onSecurityClick={() => navigateTo('/security-governance')}
      />
    </div>
  );
};

export default App;
