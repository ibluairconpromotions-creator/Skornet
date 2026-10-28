import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { WhatWeDo } from './components/WhatWeDo';
import { ServiceOperations } from './components/ServiceOperations';
import { FutureVision } from './components/FutureVision';
import { WhoWeServe } from './components/WhoWeServe';
import { WhySkornet } from './components/WhySkornet';
import { DataTrust } from './components/DataTrust';
import { MissionVision } from './components/MissionVision';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { SecurityGovernance } from './components/SecurityGovernance';
import { SITE_CONFIG } from './config/siteConfig';

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
      document.title = 'SKORNET | Connected Service Ecosystem — Connect. Verify. Manage. Grow.';
    }
  }, [currentPath]);

  const navigateTo = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(resolveRoute(path, ''));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleJoinClick = () => {
    window.open(SITE_CONFIG.googleForm.directUrl, '_blank', 'noopener,noreferrer');
  };

  const scrollToExplore = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (currentPath === '/privacy-policy') {
    return (
      <PrivacyPolicy
        onHomeClick={() => navigateTo('/')}
        onJoinClick={handleJoinClick}
        onSecurityClick={() => navigateTo('/security-governance')}
      />
    );
  }

  if (currentPath === '/security-governance') {
    return (
      <SecurityGovernance
        onHomeClick={() => navigateTo('/')}
        onJoinClick={handleJoinClick}
        onPrivacyClick={() => navigateTo('/privacy-policy')}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Navigation Bar */}
      <Navbar
        onJoinClick={handleJoinClick}
        onHomeClick={() => navigateTo('/')}
      />

      <main className="flex-grow">
        {/* Section 1: Home / Hero Section */}
        <Hero
          onJoinClick={handleJoinClick}
          onExploreClick={scrollToExplore}
        />

        {/* Section 2: About Us */}
        <AboutUs />

        {/* Section 3: What We Do */}
        <WhatWeDo />

        {/* Section 4: Our Service Operations */}
        <ServiceOperations />

        {/* Section 5: Our Vision for the Future */}
        <FutureVision />

        {/* Section 6: Who We Serve */}
        <WhoWeServe />

        {/* Section 7: Why SKORNET */}
        <WhySkornet />

        {/* Section 8: Building Trust Through Structured Information */}
        <DataTrust />

        {/* Section 9: Our Mission & Our Vision */}
        <MissionVision />

        {/* Section 10: Final Call to Action */}
        <FinalCTA />
      </main>

      {/* Section 11: Footer */}
      <Footer
        onPrivacyClick={() => navigateTo('/privacy-policy')}
        onSecurityClick={() => navigateTo('/security-governance')}
        onHomeClick={() => navigateTo('/')}
      />
    </div>
  );
};

export default App;
