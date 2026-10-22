import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onJoinClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.06)] border-b border-[#E5E7EB]'
          : 'bg-white border-b border-[#F3F4F6]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Skornet Official Logo */}
        <a
          href="#"
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FE246E] rounded"
          aria-label="Skornet Home"
        >
          <img
            src="/skornet-logo.png"
            alt="Skornet"
            className="h-10 sm:h-12 w-auto object-contain"
            width="200"
            height="46"
          />
        </a>

        {/* Desktop Anchor Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A4A4A]" aria-label="Main Navigation">
          <a href="#workflow" className="hover:text-[#FE246E] transition-colors">Workflow</a>
          <a href="#ecosystem" className="hover:text-[#FE246E] transition-colors">Ecosystem</a>
          <a href="#insights" className="hover:text-[#FE246E] transition-colors">Insights</a>
          <a href="#faq" className="hover:text-[#FE246E] transition-colors">FAQ</a>
        </nav>

        {/* Primary Action Button: Smooth scroll to application */}
        <div className="flex items-center">
          <button
            onClick={onJoinClick}
            type="button"
            className="btn-primary inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold tracking-tight cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FE246E]"
          >
            Join the Network
          </button>
        </div>
      </div>
    </header>
  );
};
