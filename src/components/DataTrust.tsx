import React from 'react';
import { Lock, EyeOff, Shield, Users, Clock } from 'lucide-react';

export const DataTrust: React.FC = () => {
  const trustPrinciples = [
    {
      icon: EyeOff,
      title: 'Organizational Data Isolation',
      desc: 'Technician details, customer accounts, and service calls are managed strictly within the relevant business organization. One owner’s technician data is never visible to other owners on the platform.',
    },
    {
      icon: Lock,
      title: 'Confidential Aadhaar & KYC Storage',
      desc: 'Identity verification files and Aadhaar numbers provided during onboarding are stored confidentially and restricted strictly to authorized administrative verification protocols.',
    },
    {
      icon: Clock,
      title: 'Time-Limited Customer Links',
      desc: 'Technicians receive access to necessary customer contact and address details through controlled cloud links configured to expire automatically after service call completion.',
    },
    {
      icon: Users,
      title: 'Governed Workforce Transfers',
      desc: 'Technician transfers between organizations follow established administrative and owner approval workflows when employees join, move, or conclude engagements.',
    },
  ];

  return (
    <section id="trust" className="py-20 md:py-28 bg-[#F4F6FA] border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F20A78]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-600">
              Privacy & Boundaries
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B162B] tracking-tight leading-tight mb-5">
            Structured Records. Controlled Access.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Your team’s data remains your team’s data. SKORNET maintains clear organizational boundaries, strict role-based access controls, and transparent technician record management across the ecosystem.
          </p>
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12">
          {trustPrinciples.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-[#F20A78]/40 hover:shadow-md transition-all duration-200"
              >
                <div className="p-3 rounded-xl bg-[#F20A78]/10 text-[#F20A78] w-fit mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0B162B] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Practical Access Rule Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-5 border border-slate-200 text-center flex items-center justify-center gap-3">
          <Shield className="w-5 h-5 text-[#F20A78] shrink-0" />
          <p className="text-xs sm:text-sm font-medium text-[#0B162B]">
            Role-Based Access: Technicians only see assigned calls; Owners control organization data; Administrators oversee platform compliance.
          </p>
        </div>

      </div>
    </section>
  );
};
