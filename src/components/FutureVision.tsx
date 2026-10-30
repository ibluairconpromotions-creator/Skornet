import React from 'react';
import { 
  Zap, 
  Droplets, 
  Tv, 
  Hammer, 
  Paintbrush, 
  Sparkles, 
  Building2, 
  Building,
  CalendarCheck2,
  Wrench,
  ClipboardCheck,
  CheckCircle2,
  Info
} from 'lucide-react';

export const FutureVision: React.FC = () => {
  const standardCategories = [
    {
      title: 'Electrical Services',
      icon: Zap,
      image: '/images/roadmap-electrical.webp',
      fallbackImage: '/images/roadmap-electrical.jpg',
      alt: 'Certified professional electrician inspecting electrical distribution panel with digital multimeter',
      badge: 'Electrical Systems',
      items: [
        'Electrical installation and repair',
        'Wiring, lighting, switches, and electrical troubleshooting',
        'Residential and commercial electrical maintenance'
      ]
    },
    {
      title: 'Plumbing Services',
      icon: Droplets,
      image: '/images/roadmap-plumbing.webp',
      fallbackImage: '/images/roadmap-plumbing.jpg',
      alt: 'Professional plumber servicing high-grade copper piping, drainage valves, and water systems',
      badge: 'Plumbing & Water',
      items: [
        'Plumbing installation and repairs',
        'Pipe leakage and drainage solutions',
        'Water supply systems, pumps, and pipeline maintenance'
      ]
    },
    {
      title: 'Home Appliance Services',
      icon: Tv,
      image: '/images/roadmap-appliances.webp',
      fallbackImage: '/images/roadmap-appliances.jpg',
      alt: 'Home appliance specialist servicing smart refrigerator and kitchen appliances with digital tablet',
      badge: 'Household & Kitchen',
      items: [
        'Refrigerator and washing machine servicing',
        'Kitchen appliance repairs',
        'Other household appliance maintenance'
      ]
    },
    {
      title: 'Carpentry and Handyman Services',
      icon: Hammer,
      image: '/images/roadmap-carpentry.webp',
      fallbackImage: '/images/roadmap-carpentry.jpg',
      alt: 'Skilled carpenter and handyman fitting solid wood cabinetry and door fixtures with precision tools',
      badge: 'Woodwork & Fixtures',
      items: [
        'Furniture assembly and repairs',
        'Door, lock, hinge, and fixture maintenance',
        'General household repair work'
      ]
    },
    {
      title: 'Painting and Property Maintenance',
      icon: Paintbrush,
      image: '/images/roadmap-painting.webp',
      fallbackImage: '/images/roadmap-painting.jpg',
      alt: 'Professional painter applying precision interior paint with extension roller and clean finish',
      badge: 'Surfaces & Coating',
      items: [
        'Interior and exterior painting',
        'Wall repairs and surface maintenance',
        'Waterproofing and related maintenance work'
      ]
    },
    {
      title: 'Cleaning Services',
      icon: Sparkles,
      image: '/images/roadmap-cleaning.webp',
      fallbackImage: '/images/roadmap-cleaning.jpg',
      alt: 'Deep cleaning professional operating commercial floor scrubber in pristine corporate lobby',
      badge: 'Sanitization & Deep Clean',
      items: [
        'Home and office cleaning',
        'Deep cleaning for kitchens and bathrooms',
        'Commercial space cleaning'
      ]
    }
  ];

  const commercialCapabilities = [
    {
      title: 'Scheduled Maintenance Coordination',
      desc: 'Predictive and routine servicing cycles designed to prevent downtime.',
      icon: CalendarCheck2
    },
    {
      title: 'Electrical & Mechanical Support',
      desc: 'Essential facility systems, heavy machinery, power, and equipment continuity.',
      icon: Wrench
    },
    {
      title: 'Equipment Maintenance & Inspection',
      desc: 'Structured inspection coordination, compliance checks, and health audits.',
      icon: ClipboardCheck
    },
    {
      title: 'Multi-Facility Support',
      desc: 'Maintenance coverage for offices, warehouses, retail spaces, and industrial facilities.',
      icon: Building
    }
  ];

  return (
    <section id="vision" className="py-24 lg:py-32 bg-slate-50/60 text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#F20A78] mb-3 block">
            Expansion Roadmap
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-[1.15] mb-5">
            One Connected Ecosystem. <br className="hidden sm:inline" />
            Multiple Service Categories.
          </h2>

          <div className="space-y-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            <p>
              We are building SKORNET with a long-term vision that extends beyond AC services.
            </p>
            <p className="text-slate-600 text-sm sm:text-base">
              As our business grows, we aim to expand into additional service categories, connecting more professionals, supporting more service requirements, and creating a broader ecosystem for residential, commercial, and business services.
            </p>
          </div>
        </div>

        {/* Categories Grid - 6 Standard Cards with Real Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {standardCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Real Image Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                    <picture className="w-full h-full block">
                      <source srcSet={cat.image} type="image/webp" />
                      <img
                        src={cat.fallbackImage}
                        alt={cat.alt}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        width="1376"
                        height="768"
                      />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                    
                    <div className="absolute top-3 right-3">
                      <span className="text-[11px] font-semibold text-white/95 bg-slate-900/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 shadow-xs">
                        {cat.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md text-[#F20A78] flex items-center justify-center shrink-0 shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white drop-shadow-sm tracking-tight leading-tight">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <ul className="space-y-2.5">
                      {cat.items.map((item, itemIdx) => (
                        <li 
                          key={itemIdx} 
                          className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#F20A78] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 7th Category: Redesigned Commercial & Industrial Facility Maintenance */}
        <div className="rounded-3xl bg-white border border-slate-200/80 shadow-xs p-7 sm:p-10 lg:p-12 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Side: Overview, Facility Scopes & Photo Asset */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-[#F20A78] text-xs font-semibold">
                <Building2 className="w-4 h-4" />
                <span>Enterprise & Facility Scale</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-snug mb-3">
                  Commercial and Industrial Facility Maintenance
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Full-spectrum maintenance coordination tailored for offices, warehouses, retail spaces, and industrial facilities.
                </p>
              </div>

              {/* Target Facility Scopes */}
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-3">
                  Managed Environments
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Offices', 'Warehouses', 'Retail Spaces', 'Industrial Facilities'].map((space, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-700 text-xs font-semibold"
                    >
                      {space}
                    </span>
                  ))}
                </div>
              </div>

              {/* Photo Asset */}
              <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-white group relative">
                <picture className="block relative overflow-hidden">
                  <source srcSet="/images/facility-maintenance-commercial.webp?v=3" type="image/webp" />
                  <img
                    src="/images/facility-maintenance-commercial.jpg?v=3"
                    alt="Young Indian facility engineers inspecting commercial building mechanical and electrical systems with digital diagnostic tablet"
                    className="w-full h-56 sm:h-64 object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                    width="1280"
                    height="720"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B162B]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#F20A78] drop-shadow-sm block">
                      Facility Engineering & Inspection
                    </span>
                    <p className="text-xs text-slate-200 drop-shadow-sm mt-0.5">
                      Cross-disciplinary maintenance for high-value building assets.
                    </p>
                  </div>
                </picture>
              </div>
            </div>

            {/* Right Side: 2x2 Clean Capability Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commercialCapabilities.map((cap, cIdx) => {
                const CapIcon = cap.icon;
                return (
                  <div 
                    key={cIdx}
                    className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/70 text-[#F20A78] flex items-center justify-center mb-4 shadow-2xs">
                        <CapIcon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                        {cap.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Development Note: Redesigned Strategic Horizon Banner */}
        <div className="rounded-2xl p-7 sm:p-9 bg-white border border-slate-200/80 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: Development Note Context */}
            <div className="md:col-span-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-pink-50 text-[#F20A78] flex items-center justify-center shrink-0 mt-0.5">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-1.5">
                  Development Note
                </span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  These categories represent our expansion vision, not a claim that every service is currently available. We intend to develop our network and capabilities progressively.
                </p>
              </div>
            </div>

            {/* Right Column: Long-Term Ambition Quote */}
            <div className="md:col-span-6 md:border-l md:border-slate-200 md:pl-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F20A78] block mb-1.5">
                Long-Term Ambition
              </span>
              <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                Our long-term ambition is to create a connected service ecosystem that helps customers access services, professionals find opportunities, and businesses coordinate operations more effectively.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
