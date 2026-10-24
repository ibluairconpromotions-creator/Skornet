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
      items: [
        'Electrical installation and repair',
        'Wiring, lighting, switches, and electrical troubleshooting',
        'Residential and commercial electrical maintenance'
      ]
    },
    {
      title: 'Plumbing Services',
      icon: Droplets,
      items: [
        'Plumbing installation and repairs',
        'Pipe leakage and drainage solutions',
        'Water supply systems, pumps, and pipeline maintenance'
      ]
    },
    {
      title: 'Home Appliance Services',
      icon: Tv,
      items: [
        'Refrigerator and washing machine servicing',
        'Kitchen appliance repairs',
        'Other household appliance maintenance'
      ]
    },
    {
      title: 'Carpentry and Handyman Services',
      icon: Hammer,
      items: [
        'Furniture assembly and repairs',
        'Door, lock, hinge, and fixture maintenance',
        'General household repair work'
      ]
    },
    {
      title: 'Painting and Property Maintenance',
      icon: Paintbrush,
      items: [
        'Interior and exterior painting',
        'Wall repairs and surface maintenance',
        'Waterproofing and related maintenance work'
      ]
    },
    {
      title: 'Cleaning Services',
      icon: Sparkles,
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

        {/* Categories Grid - 6 Standard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {standardCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200/70 hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-pink-50 text-[#F20A78] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                    {cat.title}
                  </h3>

                  <ul className="space-y-2.5">
                    {cat.items.map((item, itemIdx) => (
                      <li 
                        key={itemIdx} 
                        className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#F20A78] shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* 7th Category: Redesigned Commercial & Industrial Facility Maintenance (Split Asymmetric Layout) */}
        <div className="rounded-3xl bg-white border border-slate-200/80 shadow-xs p-8 sm:p-12 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Side: Overview & Target Facilities */}
            <div className="lg:col-span-5 space-y-6">
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
              <div className="pt-2">
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
            </div>

            {/* Right Side: 2x2 Clean Capability Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commercialCapabilities.map((cap, cIdx) => {
                const CapIcon = cap.icon;
                return (
                  <div 
                    key={cIdx}
                    className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/70 text-[#F20A78] flex items-center justify-center mb-3.5 shadow-2xs">
                        <CapIcon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-1.5 leading-snug">
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
