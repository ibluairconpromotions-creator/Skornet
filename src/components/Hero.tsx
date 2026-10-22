import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface HeroProps {
  onJoinClick?: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick: _onJoinClick, onExploreClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 overflow-hidden bg-white">
      {/* Subtle background grid pattern for clean industrial precision */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]" 
        style={{
          backgroundImage: `radial-gradient(#4A4A4A 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] tracking-tight leading-[1.12] mb-6 animate-fade-in-up">
              Connecting the HVAC Service Ecosystem
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#4A4A4A] leading-relaxed mb-8 sm:mb-10 max-w-2xl animate-fade-in-up delay-100 font-normal">
              SKORNET is building a digital platform designed to connect the people, processes and operations that power the HVAC service industry — bringing service demand, business operations, field activities and customer service delivery into one connected ecosystem.
            </p>

            {/* Actions: Primary CTA (direct to Google Form) and Secondary Text Link */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 animate-fade-in-up delay-200">
              <a
                href={SITE_CONFIG.googleForm.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FE246E] focus-visible:ring-offset-2 text-center"
              >
                Join the SKORNET Network
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <button
                onClick={onExploreClick}
                type="button"
                className="inline-flex items-center justify-center gap-1.5 py-3 px-4 text-base font-semibold text-[#4A4A4A] hover:text-[#FE246E] transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FE246E] rounded"
              >
                Explore Our Approach
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Technical Highlights Bar */}
            <div className="mt-12 pt-8 border-t border-[#E5E7EB] grid grid-cols-3 gap-6 animate-fade-in-up delay-300">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#6B7280] font-medium">Domain</p>
                <p className="text-sm sm:text-base font-semibold text-[#1A1A1A] mt-0.5">Commercial & Industrial HVAC</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#6B7280] font-medium">Architecture</p>
                <p className="text-sm sm:text-base font-semibold text-[#1A1A1A] mt-0.5">Unified Digital Platform</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#6B7280] font-medium">Focus</p>
                <p className="text-sm sm:text-base font-semibold text-[#1A1A1A] mt-0.5">Technicians & Operations</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Anchor with Indian Technician */}
          <div className="lg:col-span-5 relative animate-fade-in-up delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#E5E7EB] bg-[#F9FAFB] group">
              <picture>
                <source srcSet="/images/hero-technician.webp" type="image/webp" />
                <img
                  src="/images/hero-technician.jpg"
                  alt="Professional Indian HVAC technician inspecting a commercial rooftop chiller unit with digital manifold gauges"
                  className="w-full h-[420px] sm:h-[480px] lg:h-[540px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="eager"
                  fetchPriority="high"
                  width="800"
                  height="600"
                />
              </picture>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
