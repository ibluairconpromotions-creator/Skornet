import React from 'react';
import { ArrowUp, Mail, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const currentYear = new Date().getFullYear();

interface FooterProps {
  onPrivacyClick?: () => void;
  onSecurityClick?: () => void;
  onHomeClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onPrivacyClick, onSecurityClick, onHomeClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B162B] text-white border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info & Tagline (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            <a
              href="/"
              onClick={(e) => {
                if (onHomeClick) {
                  e.preventDefault();
                  onHomeClick();
                }
              }}
              className="inline-block"
              aria-label="SKORNET Home"
            >
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

            <p className="text-sm text-slate-300 max-w-lg leading-relaxed">
              We are SKORNET — building a connected service ecosystem that brings businesses, skilled professionals, and customers together through smarter co-ordination, organized operations, and better service experiences.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs font-semibold text-[#F20A78]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F20A78]" />
              <span>Connect • Verify • Manage • Grow</span>
            </div>
          </div>

          {/* Contact & Network (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Contact & Registration
            </h4>
            <div className="flex flex-col space-y-3 text-sm text-slate-300">
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="hover:text-white transition-colors flex items-center gap-2 text-slate-300"
              >
                <Mail className="w-4 h-4 text-[#F20A78] shrink-0" />
                <span>{SITE_CONFIG.contactEmail}</span>
              </a>
              <a
                href={SITE_CONFIG.googleForm.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5 text-[#F20A78] font-semibold"
              >
                <span>Join the SKORNET Network</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                Whether you are a service professional, a service business, or an organization looking for service support, SKORNET aims to build meaningful connections that help work move forward.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Tagline, Legal Links, Back-to-Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} <span className="font-semibold text-slate-200">SKORNET</span>. All rights reserved. Connect. Verify. Manage. Grow.
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <a
              href="/privacy-policy"
              onClick={(e) => {
                if (onPrivacyClick) {
                  e.preventDefault();
                  onPrivacyClick();
                }
              }}
              className="hover:text-[#F20A78] transition-colors underline underline-offset-2 cursor-pointer"
            >
              Privacy Policy
            </a>
            <span className="text-slate-600">•</span>
            <a
              href="/security-governance"
              onClick={(e) => {
                if (onSecurityClick) {
                  e.preventDefault();
                  onSecurityClick();
                }
              }}
              className="hover:text-[#F20A78] transition-colors underline underline-offset-2 cursor-pointer"
            >
              Security & Governance
            </a>
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
