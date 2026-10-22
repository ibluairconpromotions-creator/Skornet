import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141414] text-white border-t border-[#262626] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#262626]">
          {/* Logo & Legal Name */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <picture>
                <source srcSet="/skornet-logo-dark.webp" type="image/webp" />
                <img
                  src="/skornet-logo-dark.png"
                  alt="Skornet"
                  className="h-10 w-auto object-contain"
                  width="180"
                  height="42"
                />
              </picture>
            </div>
            <p className="text-xs text-[#9CA3AF] max-w-md">
              Connecting the HVAC service ecosystem across service demand, operations, field execution and customer delivery.
            </p>
          </div>

          {/* Quick Anchor Links for SEO & Navigation */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-6 text-xs text-[#9CA3AF]">
            <a href="#workflow" className="hover:text-white transition-colors">Workflow</a>
            <a href="#ecosystem" className="hover:text-white transition-colors">Ecosystem</a>
            <a href="#insights" className="hover:text-white transition-colors">Insights</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#technician-application" className="hover:text-[#FE246E] transition-colors font-medium">Join Network</a>
          </nav>

          {/* Quick Back to Top Action */}
          <div>
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#333333] hover:border-[#FE246E] hover:text-[#FE246E] text-xs font-semibold text-[#D1D5DB] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FE246E]"
            >
              Back to Top
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tagline & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#9CA3AF]">
          <div>
            <span className="font-semibold text-white">SKORNET</span> — Connect. Verify. Manage. Grow.
          </div>
          <div>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.companyName}. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
