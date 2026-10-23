import React from 'react';
import { ArrowRight, ChevronDown, ShieldCheck, Layers, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface HeroProps {
  onJoinClick?: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-[720px] lg:min-h-[820px] xl:min-h-[880px] bg-[#0B162B] text-white pt-24 pb-14 lg:py-0 overflow-hidden flex items-center">
      {/* Merged Background Image Layer with edge-to-edge bleed and smooth gradient dissolves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <picture>
          <source srcSet="/images/skornet-hero-bg.webp" type="image/webp" />
          <img
            src="/images/skornet-hero-bg.jpg"
            alt="SKORNET Connected HVAC Service Ecosystem"
            className="w-full h-full object-cover object-[78%_center] sm:object-[75%_center] lg:object-[88%_center] xl:object-[86%_center] 2xl:object-right"
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
        </picture>

        {/* Subtle ambient lighting glows matching deep navy, hot pink and electric blue */}
        <div
          className="absolute top-1/4 left-0 w-96 h-96 bg-[#F20A78]/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-10 right-1/4 w-[32rem] h-[32rem] bg-[#249FE8]/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Subtle background tech grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
          aria-hidden="true"
        />

        {/* Primary Left-to-Right Soft Edge Gradient Fill to Seamlessly Highlight Text and Buttons */}
        <div
          className="absolute inset-0 w-full pointer-events-none z-1"
          style={{
            background:
              'linear-gradient(90deg, #0B162B 0%, #0B162B 34%, rgba(11, 22, 43, 0.94) 46%, rgba(11, 22, 43, 0.70) 58%, rgba(11, 22, 43, 0.32) 72%, rgba(11, 22, 43, 0.08) 85%, transparent 100%)',
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
        <div className="absolute inset-0 bg-[#0B162B]/85 sm:bg-[#0B162B]/65 lg:hidden" />
      </div>

      {/* Hero Foreground Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-xl lg:max-w-[36rem] xl:max-w-[40rem] py-8 sm:py-12 lg:py-24 xl:py-28">
          
          {/* Large, bold, highly readable H1 headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.12] mb-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            Connecting the HVAC Service Ecosystem
          </h1>

          {/* Supporting paragraph */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-xl font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
            One connected platform for HVAC technicians, service businesses and field operations. Verify technician information, coordinate service calls and improve workforce visibility through structured digital workflows.
          </p>

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
              <span>Explore the Platform</span>
              <ChevronDown className="w-4 h-4 text-[#F20A78]" />
            </button>
          </div>

          {/* Restrained feature highlights bar */}
          <div className="mt-10 pt-6 border-t border-slate-800/90 grid grid-cols-3 gap-4 max-w-lg">
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F20A78] shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-poppins">Verification</p>
                <p className="text-xs font-medium text-slate-200 mt-0.5">KYC &amp; Skills</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Layers className="w-4 h-4 text-[#249FE8] shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-poppins">Coordination</p>
                <p className="text-xs font-medium text-slate-200 mt-0.5">Service Calls</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#F20A78] shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-poppins">Visibility</p>
                <p className="text-xs font-medium text-slate-200 mt-0.5">GPS Activity</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
