import React from 'react';
import { Building2, Users2, ShieldCheck } from 'lucide-react';

export const ConnectedEcosystem: React.FC = () => {
  const pillars = [
    {
      role: 'Service Companies',
      icon: Building2,
      tag: 'Operations & Management',
      details: 'Organizing essential service operations, centralizing call management, and maintaining comprehensive digital records.',
    },
    {
      role: 'Field Teams & Technicians',
      icon: Users2,
      tag: 'Workforce Coordination',
      details: 'Structuring daily assignments, logging technician attendance, and maintaining accurate field activity tracking in real time.',
    },
    {
      role: 'Customer Service Delivery',
      icon: ShieldCheck,
      tag: 'Verified Execution',
      details: 'Ensuring seamless service execution, transparent coordination, and reliable historical service documentation.',
    },
  ];

  return (
    <section id="ecosystem" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FE246E]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#4A4A4A]">
              Tripartite Connection
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-6">
            Connecting Businesses, Field Teams and Customers
          </h2>
          <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
            SKORNET is designed to support the connection between service companies, their workforce and customer service delivery. With capabilities for service-call management, workforce coordination, digital records, attendance and field activity tracking, the platform helps organise information that businesses need to manage their service operations.
          </p>
        </div>

        {/* Visual Sequence: The Tripartite Ecosystem Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#F9FAFB] rounded-xl p-6 sm:p-8 border border-[#E5E7EB] hover:border-[#FE246E]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-5">
                    <div className="inline-flex p-3 rounded-lg bg-white border border-[#E5E7EB] text-[#FE246E] shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-xs font-bold text-[#FE246E] tracking-wide uppercase">
                    {pillar.tag}
                  </span>
                  
                  <h3 className="text-xl font-bold text-[#1A1A1A] mt-1 mb-3">
                    {pillar.role}
                  </h3>
                  
                  <p className="text-sm text-[#4A4A4A] leading-relaxed">
                    {pillar.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Real-World Industrial Imagery */}
        <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-[0_12px_40px_rgba(0,0,0,0.06)] bg-[#F9FAFB] grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <picture>
              <source srcSet="/images/connected-ecosystem.webp" type="image/webp" />
              <img
                src="/images/connected-ecosystem.jpg"
                alt="Indian HVAC engineers collaborating on telemetry data and air handling unit diagnostics in a commercial plant room"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center"
                loading="lazy"
                width="800"
                height="500"
              />
            </picture>
          </div>
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FE246E] font-semibold mb-2">
              Collaborative Field Reality
            </span>
            <h4 className="text-2xl font-bold text-[#1A1A1A] mb-4">
              Real-World Synchronization
            </h4>
            <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
              Bridging the gap between the administrative back-office, skilled on-site technicians, and client premises — transforming fragmented phone calls and paper slips into an organized operational standard.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
