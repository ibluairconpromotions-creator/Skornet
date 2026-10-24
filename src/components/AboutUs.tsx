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

        {/* Minimalist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: 3 Clean Narrative Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="p-8 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all duration-200">
              <span className="text-xs font-semibold text-[#F20A78] bg-pink-50 px-2.5 py-1 rounded-full inline-block mb-3">
                Foundation
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                Grounding in Daily Service Realities
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Our business operates in AC services, where coordinating technicians, managing service calls, tracking work progress, and maintaining service records are essential to delivering reliable service.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all duration-200">
              <span className="text-xs font-semibold text-[#F20A78] bg-pink-50 px-2.5 py-1 rounded-full inline-block mb-3">
                Evolution
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                A Structured Approach to Operations
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                We are building on this experience to develop a more structured approach to service operations—one that supports service businesses, field professionals, and the customers they serve.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all duration-200">
              <span className="text-xs font-semibold text-[#F20A78] bg-pink-50 px-2.5 py-1 rounded-full inline-block mb-3">
                Expansion
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                Expanding Across Multiple Categories
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Our vision extends beyond a single service category. As SKORNET grows, we aim to expand into additional services and build a connected ecosystem where different service needs can be managed through a more organized, technology-driven approach.
              </p>
            </div>
          </div>

          {/* Right Column: Minimalist Summary Panel */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-2xl p-8 sm:p-10 bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-4">
                  Operational Philosophy
                </span>
                
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight leading-snug mb-4">
                  Delivering Services Today. Creating Opportunities for Tomorrow.
                </h3>

                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  We are focused on building a business that delivers services today while creating opportunities for broader service management tomorrow.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/60 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-[#F20A78] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Active Air-Conditioning Execution</p>
                      <p className="text-xs text-slate-500 mt-0.5">Real-world commercial, industrial and residential fieldwork.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/60 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-[#F20A78] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Organized Operational Backbone</p>
                      <p className="text-xs text-slate-500 mt-0.5">Clear records, verification, and end-to-end assignment workflows.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/60 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-[#F20A78] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Multi-Service Expansion Pathway</p>
                      <p className="text-xs text-slate-500 mt-0.5">Scalable digital framework ready for growing trade networks.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                <span className="font-semibold text-sm sm:text-base text-[#F20A78] tracking-wider">
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
