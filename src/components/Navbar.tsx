import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface NavbarProps {
  onJoinClick?: () => void;
  onHomeClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick, onHomeClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onHomeClick) {
      e.preventDefault();
      onHomeClick();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 text-slate-900 backdrop-blur-md shadow-xs border-b border-slate-200/90'
          : 'bg-[#0B162B]/90 backdrop-blur-xs border-b border-slate-800/80 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* SKORNET Official Logo with transparent background */}
        <a
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F20A78] rounded shrink-0"
          aria-label="SKORNET - Connect. Verify. Manage. Grow."
        >
          <picture>
            <source
              srcSet={scrolled ? '/skornet-logo.webp' : '/skornet-logo-dark.webp'}
              type="image/webp"
            />
            <img
              src={scrolled ? '/skornet-logo.png' : '/skornet-logo-dark.png'}
              alt="SKORNET"
              className="h-9 sm:h-11 w-auto object-contain transition-opacity duration-200"
              width="180"
              height="42"
            />
          </picture>
        </a>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href={SITE_CONFIG.googleForm.directUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onJoinClick}
            className="btn-primary inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold tracking-tight cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F20A78]"
          >
            <span>Join Network</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};
