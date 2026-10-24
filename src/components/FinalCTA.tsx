import React from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="relative py-20 lg:py-28 bg-[#0B162B] text-white overflow-hidden border-t border-slate-800/80">
      {/* Background ambient lighting glows */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[22rem] bg-[#F20A78]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[30rem] h-[20rem] bg-[#F20A78]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111D36] border border-slate-700/80 mb-6 text-xs font-semibold tracking-wider uppercase text-[#F20A78]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Be Part of the SKORNET Network</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Let’s Build a More Connected Service Ecosystem.
        </h2>

        {/* Narrative Copy */}
        <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          <p>
            We believe the future of service delivery lies in better coordination, stronger professional networks, and more organized operations.
          </p>
          <p>
            Whether you are a service professional, a service business, or an organization looking for service support, SKORNET aims to build meaningful connections that help work move forward.
          </p>
          <p className="text-white font-medium">
            Join us as we strengthen our existing AC services business and work toward a broader, multi-service future.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10">
          <a
            href={SITE_CONFIG.googleForm.directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base sm:text-lg font-semibold cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F20A78] shadow-[0_10px_25px_rgba(242,10,120,0.35)]"
          >
            <span>Join the SKORNET Network</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href={`mailto:${SITE_CONFIG.contactEmail}?subject=Inquiry%20regarding%20SKORNET%20Service%20Network`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-7 text-base font-medium text-slate-200 hover:text-white bg-[#111D36] hover:bg-slate-800 transition-all duration-200 border border-slate-700 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            <Mail className="w-5 h-5 text-[#F20A78]" />
            <span>{SITE_CONFIG.contactEmail}</span>
          </a>
        </div>

        {/* Tagline footer */}
        <div className="pt-8 border-t border-slate-800/80">
          <p className="text-sm sm:text-base font-bold text-white tracking-wide">
            SKORNET — Connect. Verify. Manage. Grow.
          </p>
        </div>

      </div>
    </section>
  );
};
