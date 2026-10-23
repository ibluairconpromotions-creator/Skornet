import React from 'react';
import { ArrowUp, Mail, ExternalLink, Shield, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const currentYear = new Date().getFullYear();

interface FooterProps {
  onPrivacyClick?: () => void;
  onJoinClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onPrivacyClick, onJoinClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B162B] text-white border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid with Menus */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info & Tagline (4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <a href="/" className="inline-block" aria-label="SKORNET Home">
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

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              SKORNET brings HVAC service businesses, field technicians and service operations into one connected digital environment.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs font-semibold text-[#F20A78]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F20A78]" />
              <span>Connect • Verify • Manage • Grow</span>
            </div>

            <div className="text-xs text-slate-400 pt-1 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Verified HVAC Service Network • India</span>
            </div>
          </div>

          {/* Navigation Menu: Platform (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-poppins uppercase tracking-wider text-slate-400 font-bold">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('challenges')}
                  className="hover:text-[#F20A78] transition-colors flex items-center gap-1 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>The Industry Challenge</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('introducing-skornet')}
                  className="hover:text-[#F20A78] transition-colors flex items-center gap-1 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Introducing SKORNET</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('how-it-works')}
                  className="hover:text-[#F20A78] transition-colors flex items-center gap-1 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>How SKORNET Works</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('capabilities')}
                  className="hover:text-[#F20A78] transition-colors flex items-center gap-1 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Platform Capabilities</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('stakeholders')}
                  className="hover:text-[#F20A78] transition-colors flex items-center gap-1 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Stakeholder Benefits</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('equipment')}
                  className="hover:text-[#F20A78] transition-colors flex items-center gap-1 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>HVAC Equipment & Applications</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Menu: Resources & Legal (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-poppins uppercase tracking-wider text-slate-400 font-bold">
              Resources & Legal
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => {
                    if (onPrivacyClick) {
                      e.preventDefault();
                      onPrivacyClick();
                    }
                  }}
                  className="hover:text-[#F20A78] transition-colors flex items-center gap-1 cursor-pointer font-medium text-slate-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#F20A78]" />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('data-trust')}
                  className="hover:text-[#F20A78] transition-colors flex items-center gap-1 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Security & Governance</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('faq')}
                  className="hover:text-[#F20A78] transition-colors flex items-center gap-1 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Frequently Asked Questions</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onJoinClick) {
                      onJoinClick();
                    } else {
                      window.open(SITE_CONFIG.googleForm.directUrl, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  className="hover:text-[#F20A78] transition-colors flex items-center gap-1 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Technician Registration</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-poppins uppercase tracking-wider text-slate-400 font-bold">
              Contact & Network
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm text-slate-300">
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
                className="hover:text-[#F20A78] transition-colors flex items-center gap-1.5 text-[#F20A78] font-medium pt-1"
              >
                <span>Join the SKORNET Network</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <p className="text-xs text-slate-400 leading-relaxed pt-2">
                For enterprise partnerships, contractor onboarding, and verified technician dispatch inquiries across India.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Tagline, Privacy Link, Back-to-Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} <span className="font-semibold text-slate-200">SKORNET</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>One Platform for Every Technician, Service Call and Business Operation.</span>
            <span className="hidden sm:inline text-slate-600">•</span>
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
