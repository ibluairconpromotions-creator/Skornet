import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#F20A78] mb-3 block">
            About Us
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-[1.15] mb-6">
            More Than Service Delivery. <br className="hidden sm:inline" />
            A Connected Way to Work.
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            At SKORNET, we believe service delivery works better when the people, processes, and information behind it are connected.
          </p>
        </div>

        {/* Balanced 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: 3 Clean Narrative Cards with Tight Proper Spacing */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all duration-200">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-semibold text-[#F20A78] bg-pink-50 px-2.5 py-1 rounded-full inline-block">
                  Foundation
                </span>
                <span className="text-xs font-mono font-medium text-slate-400">
                  01 / 03
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Grounding in Daily Service Realities
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3 font-normal">
                Our business operates in AC services, where coordinating technicians, managing service calls, tracking work progress, and maintaining service records are essential to delivering reliable service.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/60">
                <span className="text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200/60">
                  AC Services
                </span>
                <span className="text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200/60">
                  Technician Dispatch
                </span>
                <span className="text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200/60">
                  Service Records
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all duration-200">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-semibold text-[#F20A78] bg-pink-50 px-2.5 py-1 rounded-full inline-block">
                  Evolution
                </span>
                <span className="text-xs font-mono font-medium text-slate-400">
                  02 / 03
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                A Structured Approach to Operations
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3 font-normal">
                We are building on this experience to develop a more structured approach to service operations—one that supports service businesses, field professionals, and the customers they serve.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/60">
                <span className="text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200/60">
                  Structured Operations
                </span>
                <span className="text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200/60">
                  Workforce Support
                </span>
                <span className="text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200/60">
                  Accountability
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all duration-200">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-semibold text-[#F20A78] bg-pink-50 px-2.5 py-1 rounded-full inline-block">
                  Expansion
                </span>
                <span className="text-xs font-mono font-medium text-slate-400">
                  03 / 03
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Expanding Across Multiple Categories
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3 font-normal">
                Our vision extends beyond a single service category. As SKORNET grows, we aim to expand into additional services and build a connected ecosystem where different service needs can be managed through a more organized, technology-driven approach.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/60">
                <span className="text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200/60">
                  Multi-Category Network
                </span>
                <span className="text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200/60">
                  Technology Driven
                </span>
                <span className="text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200/60">
                  Long-Term Scale
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card & Operational Philosophy */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Visual Photo Card */}
            <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs bg-white group">
              <picture className="block relative overflow-hidden aspect-[16/9]">
                <source srcSet="/images/about-connected-team.webp" type="image/webp" />
                <img
                  src="/images/about-connected-team.jpg"
                  alt="Multi-skilled Indian service professionals, electricians, digital telemetry technicians, and facilities engineers connected through SKORNET operations"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                  width="1280"
                  height="720"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B162B]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#F20A78] drop-shadow-sm block">
                    Connected Field Workforce
                  </span>
                  <p className="text-xs sm:text-sm text-slate-100 font-medium drop-shadow-sm mt-0.5">
                    Uniting skilled multi-trade technicians, operational teams, and customer expectations.
                  </p>
                </div>
              </picture>
            </div>

            {/* Operational Philosophy Summary Panel */}
            <div className="w-full rounded-2xl p-6 sm:p-7 bg-slate-50/80 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                  Operational Philosophy
                </span>
                
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug mb-2">
                  Delivering Services Today. Creating Opportunities for Tomorrow.
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  We are focused on building a business that delivers services today while creating opportunities for broader service management tomorrow.
                </p>

                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/60 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#F20A78] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900">Active Air-Conditioning Execution</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">Real-world commercial, industrial and residential fieldwork.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/60 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#F20A78] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900">Organized Operational Backbone</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">Clear records, verification, and end-to-end assignment workflows.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/60 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#F20A78] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900">Multi-Service Expansion Pathway</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">Scalable digital framework ready for growing trade networks.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 text-center">
                <span className="font-semibold text-xs sm:text-sm text-[#F20A78] tracking-wider">
                  Connect • Verify • Manage • Grow
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
