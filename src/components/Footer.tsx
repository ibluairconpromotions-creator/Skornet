import React from 'react';
import { ArrowUp, Mail, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B162B] text-white border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info & Tagline (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <a href="#" className="inline-block" aria-label="SKORNET Home">
              <picture>
                <source srcSet="/skornet-logo-dark.webp" type="image/webp" />
                <img
                  src="/skornet-logo-dark.png"
                  alt="SKORNET"
                  className="h-10 w-auto object-contain"
                  width="180"
                  height="42"
                />
              </picture>
            </a>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              SKORNET brings HVAC service businesses, field technicians and service operations into one connected digital environment.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#F20A78]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F20A78]" />
              <span>Connect • Verify • Manage • Grow</span>
            </div>
          </div>

          {/* Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-poppins uppercase tracking-wider text-slate-400 font-bold">
              Contact
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm text-slate-300">
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="hover:text-white transition-colors flex items-center gap-2 text-slate-300"
              >
                <Mail className="w-4 h-4 text-[#F20A78]" />
                <span>{SITE_CONFIG.contactEmail}</span>
              </a>
              <a
                href={SITE_CONFIG.googleForm.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F20A78] transition-colors flex items-center gap-1.5 text-[#F20A78] font-medium"
              >
                <span>Join the SKORNET Network</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Tagline, Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} <span className="font-semibold text-slate-200">SKORNET</span>. All rights reserved.
          </div>

          <div className="text-center sm:text-left">
            <span>One Platform for Every Technician, Service Call and Business Operation.</span>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-700 hover:border-[#F20A78] hover:text-[#F20A78] text-xs font-medium text-slate-300 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F20A78]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
