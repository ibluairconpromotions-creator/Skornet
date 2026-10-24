import React from 'react';
import { ArrowRight, ChevronDown, ShieldCheck, Layers, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface HeroProps {
  onJoinClick?: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section id="hero" className="relative min-h-[720px] lg:min-h-[820px] xl:min-h-[880px] bg-[#0B162B] text-white pt-24 pb-14 lg:py-0 overflow-hidden flex items-center">
      {/* Merged Background Image Layer with edge-to-edge bleed and smooth gradient dissolves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <picture
          className="w-full h-full block"
          style={{
            maskImage:
              'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.5) 8%, black 22%, black 100%)',
            WebkitMaskImage:
              'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.5) 8%, black 22%, black 100%)',
          }}
        >
          <source srcSet="/images/skornet-hero-bg.webp" type="image/webp" />
          <img
            src="/images/skornet-hero-bg.jpg"
            alt="SKORNET Connected HVAC Service Ecosystem"
            className="w-full h-full object-cover object-right"
            loading="eager"
            fetchPriority="high"
            width="2560"
            height="1440"
          />
        </picture>

        {/* Subtle ambient lighting glow matching deep navy and hot pink */}
        <div
          className="absolute top-1/4 left-0 w-96 h-96 bg-[#F20A78]/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-10 right-1/4 w-[32rem] h-[32rem] bg-[#F20A78]/5 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Subtle background tech grid overlay — visible on text side (left) alone, masked away from artwork */}
        <div
          className="absolute inset-y-0 left-0 w-full max-w-2xl pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(90deg, black 0%, black 50%, transparent 95%)',
            WebkitMaskImage: 'linear-gradient(90deg, black 0%, black 50%, transparent 95%)',
          }}
          aria-hidden="true"
        />

        {/* Smooth, soft-gradient effect blending seamlessly from deep #0B162B into the crystal-clear hero artwork */}
        <div
          className="absolute inset-0 w-full pointer-events-none z-1"
          style={{
            background:
              'linear-gradient(90deg, #0B162B 0%, #0B162B 18%, rgba(11, 22, 43, 0.85) 30%, rgba(11, 22, 43, 0.40) 42%, rgba(11, 22, 43, 0.05) 54%, transparent 64%)',
          }}
          aria-hidden="true"
        />
        
        {/* Top edge blend under header */}
        <div className="absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-[#0B162B] via-[#0B162B]/70 to-transparent" />
        
        {/* Bottom edge blend into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-t from-[#0B162B] via-[#0B162B]/80 to-transparent" />

        {/* Right edge fade on ultra-wide screens */}
        <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#0B162B]/50 to-transparent hidden 2xl:block" />

        {/* Mobile/Tablet readability overlay */}
        <div className="absolute inset-0 bg-[#0B162B]/80 sm:bg-[#0B162B]/60 lg:hidden" />
      </div>

      {/* Hero Foreground Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-xl lg:max-w-[32rem] xl:max-w-[35rem] py-8 sm:py-12 lg:py-24 xl:py-28">
          
          {/* Large, bold, highly readable H1 headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.15rem] font-extrabold text-white tracking-tight leading-[1.12] mb-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            Connecting Services. Powering a Smarter Service Ecosystem.
          </h1>

          {/* Supporting paragraphs from updated content */}
          <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed mb-8 font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
            <p>
              We are SKORNET — building a connected service ecosystem that brings businesses, skilled professionals, and customers together through smarter co-ordination, organized operations, and better service experiences.
            </p>
            <p className="hidden sm:block text-slate-300 text-sm">
              Today, we provide AC services while building the foundation for a broader service ecosystem that can grow into multiple service categories.
            </p>
          </div>

          {/* Primary and secondary CTA buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={SITE_CONFIG.googleForm.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-xl text-base font-semibold cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F20A78] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B162B] text-center shadow-[0_10px_25px_rgba(242,10,120,0.35)]"
            >
              <span>Join the SKORNET Network</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <button
              onClick={onExploreClick}
              type="button"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-6 text-base font-medium text-slate-200 hover:text-white bg-[#0B162B]/80 hover:bg-[#0B162B] transition-all duration-200 cursor-pointer border border-slate-700/90 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 shadow-sm backdrop-blur-xs"
            >
              <span>Explore Our Ecosystem</span>
              <ChevronDown className="w-4 h-4 text-[#F20A78]" />
            </button>
          </div>

          {/* Four Tagline Pillars: Connect, Verify, Manage, Grow */}
          <div className="mt-10 pt-6 border-t border-slate-800/90 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg">
            <div className="flex items-start gap-2">
              <Layers className="w-4 h-4 text-[#F20A78] shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-poppins">Connect</p>
                <p className="text-xs font-medium text-slate-200 mt-0.5">Ecosystem</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F20A78] shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-poppins">Verify</p>
                <p className="text-xs font-medium text-slate-200 mt-0.5">Profiles</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#F20A78] shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-poppins">Manage</p>
                <p className="text-xs font-medium text-slate-200 mt-0.5">Workflows</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-[#F20A78] shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-poppins">Grow</p>
                <p className="text-xs font-medium text-slate-200 mt-0.5">Categories</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
