import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  onJoinClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B162B]/95 backdrop-blur-md shadow-lg border-b border-slate-800'
          : 'bg-[#0B162B] border-b border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* SKORNET Official Logo */}
        <a
          href="#"
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F20A78] rounded"
          aria-label="SKORNET - Connecting the HVAC Service Ecosystem"
        >
          <img
            src="/skornet-logo-dark.png"
            alt="SKORNET"
            className="h-9 sm:h-11 w-auto object-contain"
            width="180"
            height="42"
          />
        </a>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onJoinClick}
            type="button"
            className="btn-primary inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold tracking-tight cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F20A78]"
          >
            <span>Join Network</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
