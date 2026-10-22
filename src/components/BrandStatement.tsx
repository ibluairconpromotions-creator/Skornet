import React from 'react';

export const BrandStatement: React.FC = () => {
  return (
    <section className="relative py-24 md:py-36 bg-[#1A1A1A] text-white overflow-hidden">
      {/* Subtle industrial grid lines in charcoal */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Subtle Brand Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
          <span className="w-2 h-2 rounded-full bg-[#FE246E]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#E5E7EB]">
            Mission & Vision
          </span>
        </div>

        {/* Main Statement */}
        <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight leading-[1.28] mb-12 max-w-4xl mx-auto font-sans">
          “Our focus is to simplify complex workflows, improve coordination between stakeholders and support a more connected, transparent and organised HVAC service ecosystem.”
        </blockquote>

        {/* Supporting Line */}
        <div className="pt-8 border-t border-white/10 max-w-2xl mx-auto text-center">
          <p className="text-base sm:text-lg text-[#9CA3AF] italic font-normal">
            Building the Digital Future of HVAC Service.
          </p>
        </div>

      </div>
    </section>
  );
};
