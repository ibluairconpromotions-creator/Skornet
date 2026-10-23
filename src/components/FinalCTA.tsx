import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[#0B162B] text-white overflow-hidden">
      {/* Background glow effects matching hero aesthetic */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[22rem] bg-[#F20A78]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[30rem] h-[20rem] bg-[#249FE8]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        


        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
          Build a More Connected HVAC Service Operation
        </h2>

        {/* Description */}
        <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          Bring technician information, service calls and field operations into a more structured digital workflow with SKORNET.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
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
            href={`mailto:${SITE_CONFIG.contactEmail}?subject=Inquiry%20regarding%20SKORNET%20HVAC%20Platform`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-7 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 transition-all duration-200 border border-slate-700 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            <Mail className="w-5 h-5 text-[#F20A78]" />
            <span>Contact SKORNET</span>
          </a>
        </div>

        {/* Reassurance line */}
        <p className="text-xs text-slate-400 mt-8">
          One platform for every technician, service call and business operation.
        </p>

      </div>
    </section>
  );
};
