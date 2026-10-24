import React from 'react';
import { Building2, Wrench, ShieldCheck, UserCheck, Zap, Target, Database, TrendingUp } from 'lucide-react';

export const IntroducingSkornet: React.FC = () => {
  const stakeholders = [
    {
      role: 'Service Business Owners',
      icon: Building2,
      subtitle: 'Workforce Visibility & Operational Control',
      summary:
        'Gain immediate oversight across active, pending, and completed service calls from a centralized dashboard.',
      points: [
        'Real-time workforce visibility and technician daily status',
        'Service-call assignment, monitoring, and dispatch oversight',
        'Attendance tracking with GPS validation points',
        'Operational approvals for overtime, expenses, and incentives',
      ],
      badge: 'Owner Dashboard',
    },
    {
      role: 'HVAC Field Technicians',
      icon: Wrench,
      subtitle: 'Professional Identity & Structured Jobs',
      summary:
        'Equip on-site professionals with digital credentials and a streamlined mobile workflow for assigned work.',
      points: [
        'Verified digital identity and professional service records',
        'Clear daily assignment of calls with customer & equipment data',
        'Appointment schedule reminders and GPS-associated activity',
        'Transparent call completion records and incentive visibility',
      ],
      badge: 'Technician Mobile App',
    },
    {
      role: 'Platform Administrators',
      icon: ShieldCheck,
      subtitle: 'Verification & Ecosystem Oversight',
      summary:
        'Standardize verification workflows and govern organizational associations across the network.',
      points: [
        'Thorough technician KYC and credential verification',
        'Organizational mapping and technician association rules',
        'Ecosystem-wide audit trails and quality reviews',
        'Controlled technician transfer protocols between entities',
      ],
      badge: 'Admin Oversight',
    },
    {
      role: 'Customers & Facility Teams',
      icon: UserCheck,
      subtitle: 'Punctual Coordination & Service Transparency',
      summary:
        'Experience predictable service delivery with verified field professionals and clear digital history.',
      points: [
        'Synchronized appointment scheduling and arrival reminders',
        'Access to relevant service information via time-controlled links',
        'Verified technician credentials arriving on facility premises',
        'Verifiable service records and equipment diagnostic logs',
      ],
      badge: 'Supported Workflows',
    },
  ];

  const operatingModelFlow = [
    { step: '1', title: 'OEM / Demand', subtitle: 'Service Demand', icon: Target, desc: 'Centralized intake of facility calls and service contracts' },
    { step: '2', title: 'Service Owner', subtitle: 'Operational Control', icon: Building2, desc: 'Workforce allocation, dispatching, and approvals' },
    { step: '3', title: 'SKORNET', subtitle: 'Platform Connect', icon: Zap, desc: 'Digital hub unifying identity, GPS, and job data' },
    { step: '4', title: 'Technician', subtitle: 'Field Execution', icon: Wrench, desc: 'Mobile app navigation, on-site diagnostics, and attendance' },
    { step: '5', title: 'Customer', subtitle: 'Service Delivery', icon: UserCheck, desc: 'Punctual appointments, sign-offs, and transparency' },
    { step: '6', title: 'Field Data', subtitle: 'Operational Logs', icon: Database, desc: 'Diagnostic readings, part logs, and verified attendance' },
    { step: '7', title: 'Insights', subtitle: 'Informed Decisions', icon: TrendingUp, desc: 'Budget control, manpower planning, and quality audits' },
  ];

  return (
    <section id="platform" className="py-20 md:py-28 bg-white relative">
      <span id="introducing-skornet" className="sr-only" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F20A78]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-600">
              Unified Architecture
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B162B] tracking-tight leading-tight mb-5">
            One Connected Platform. Multiple Stakeholders.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            SKORNET brings together the key participants in the HVAC service lifecycle into one structured digital environment — linking business management, field execution, platform administration, and customer service delivery.
          </p>
        </div>

        {/* Stakeholder Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {stakeholders.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F4F6FA] rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-[#F20A78]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-5">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-[#F20A78] shadow-2xs w-fit">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B162B] mb-1">
                    {item.role}
                  </h3>
                  <p className="text-xs font-semibold text-[#F20A78] uppercase tracking-wider mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.summary}
                  </p>

                  <div className="pt-4 border-t border-slate-200 space-y-2.5">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F20A78] mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Connected Operating Model */}
        <div className="bg-[#0B162B] text-white rounded-2xl p-6 sm:p-10 lg:p-12 border border-slate-800 shadow-xl mb-16 relative overflow-hidden">
          <div
            className="absolute -top-20 -right-20 w-80 h-80 bg-[#F20A78]/5 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div className="max-w-3xl mb-10 text-center sm:text-left relative z-10">
            <span className="text-xs font-poppins uppercase tracking-widest text-[#F20A78] font-semibold">
              The Connected Operating Model
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-2">
              From Demand to Decision in One Flow
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              How SKORNET connects the HVAC service business from the initial service request to data-driven operational decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 relative z-10">
            {operatingModelFlow.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/70 flex flex-col justify-between hover:border-[#F20A78]/50 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-6 h-6 rounded-full bg-[#F20A78]/20 text-[#F20A78] font-poppins text-xs font-bold flex items-center justify-center">
                        {item.step}
                      </span>
                      <Icon className="w-4 h-4 text-slate-400" />
                    </div>
                    <p className="text-xs font-poppins uppercase tracking-wider text-[#F20A78] font-semibold">
                      {item.subtitle}
                    </p>
                    <h4 className="text-sm font-bold text-white mt-0.5 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 relative z-10">
            <span>SMARTER • FASTER • MORE TRANSPARENT • MORE CONNECTED</span>
            <span className="text-slate-300">Technology that makes service operations simpler.</span>
          </div>
        </div>

        {/* Real-world industrial image banner */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-[#F4F6FA] grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <picture>
              <source srcSet="/images/connected-ecosystem.webp" type="image/webp" />
              <img
                src="/images/connected-ecosystem.jpg"
                alt="HVAC service operations coordination showing engineers collaborating on technical plant room diagnostics"
                className="w-full h-[320px] sm:h-[380px] object-cover object-center"
                loading="lazy"
                width="800"
                height="500"
              />
            </picture>
          </div>
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center">
            <span className="text-xs font-poppins uppercase tracking-widest text-[#F20A78] font-semibold mb-2">
              Collaborative Field Ecosystem
            </span>
            <h4 className="text-2xl font-bold text-[#0B162B] mb-4">
              Real-World Operational Synchronization
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Bridging the gap between the administrative office, verified on-site technicians, and client premises — transforming fragmented phone calls and paper slips into an organized operational standard.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
