import React from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="relative py-12 sm:py-16 lg:py-18 bg-[#0B162B] text-white overflow-hidden border-t border-slate-800/80">
      {/* Background ambient lighting glows */}
      <div
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[22rem] bg-[#F20A78]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[30rem] h-[20rem] bg-[#F20A78]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Responsive 2-Column Horizon Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Eyebrow, Main Heading, Action Buttons */}
          <div className="lg:col-span-6 xl:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111D36] border border-slate-700/80 mb-5 text-xs font-semibold tracking-wider uppercase text-[#F20A78]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Be Part of the SKORNET Network</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.14] mb-6">
              Let’s Build a More Connected Service Ecosystem.
            </h2>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <a
                href={SITE_CONFIG.googleForm.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F20A78] shadow-[0_10px_25px_rgba(242,10,120,0.35)] hover:shadow-[0_12px_28px_rgba(242,10,120,0.45)] transition-all"
              >
                <span>Join the SKORNET Network</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${SITE_CONFIG.contactEmail}?subject=Inquiry%20regarding%20SKORNET%20Service%20Network`}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm sm:text-base font-medium text-slate-200 hover:text-white bg-[#111D36] hover:bg-slate-800 transition-all duration-200 border border-slate-700 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <Mail className="w-4 h-4 text-[#F20A78]" />
                <span>{SITE_CONFIG.contactEmail}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Redesigned Spacious Narrative Copy */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-3.5">
            <div className="p-4 sm:p-5 rounded-xl bg-[#111D36]/60 border border-slate-800 hover:border-slate-700/80 transition-all duration-200 backdrop-blur-xs">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                We believe the future of service delivery lies in better coordination, stronger professional networks, and more organized operations.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#111D36]/60 border border-slate-800 hover:border-slate-700/80 transition-all duration-200 backdrop-blur-xs">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Whether you are a service professional, a service business, or an organization looking for service support, SKORNET aims to build meaningful connections that help work move forward.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#111D36]/80 border border-[#F20A78]/30 hover:border-[#F20A78]/50 shadow-[0_0_20px_rgba(242,10,120,0.08)] transition-all duration-200 backdrop-blur-xs">
              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F20A78] flex-shrink-0 animate-pulse shadow-[0_0_8px_#F20A78]" />
                <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                  Join us as we strengthen our existing AC services business and work toward a broader, multi-service future.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Dedicated Tagline Pill Badge - Given Prominent Visual Attention */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex justify-center">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 px-5 sm:px-6 py-2.5 rounded-full bg-[#111D36] border border-slate-700 shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:border-[#F20A78]/50 transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F20A78] shadow-[0_0_10px_#F20A78] animate-pulse" />
            <span className="text-white text-xs sm:text-sm font-extrabold tracking-widest uppercase">SKORNET</span>
            <span className="text-slate-600">—</span>
            <span className="text-slate-200 text-xs sm:text-sm font-semibold tracking-wider uppercase">Connect. Verify. Manage. Grow.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
