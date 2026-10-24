import React from 'react';
import { Users, User, Briefcase, Building } from 'lucide-react';

export const WhoWeServe: React.FC = () => {
  const stakeholders = [
    {
      title: 'Customers',
      desc: 'People and businesses seeking dependable service support and clearer communication throughout the service process.',
      icon: Users,
      badge: 'Service Consumers'
    },
    {
      title: 'Service Professionals',
      desc: 'Technicians and skilled professionals who need organized job information, better coordination, and opportunities to grow their work.',
      icon: User,
      badge: 'Skilled Workforce'
    },
    {
      title: 'Service Businesses',
      desc: 'Business owners and service providers looking to organize their workforce, assign jobs, monitor progress, and maintain structured records.',
      icon: Briefcase,
      badge: 'Service Providers'
    },
    {
      title: 'Operations & Administration',
      desc: 'Teams responsible for coordinating service requests, managing assignments, monitoring activities, and maintaining operational visibility.',
      icon: Building,
      badge: 'Management Teams'
    }
  ];

  return (
    <section id="who-we-serve" className="py-24 lg:py-32 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#F20A78] mb-3 block">
            Who We Serve
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-[1.15] mb-5">
            Connecting Every Part of the Service Ecosystem
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A unified operational approach that delivers tangible value to every participant in the service delivery journey.
          </p>
        </div>

        {/* 4 Stakeholder Cards Grid - Clean Minimalist Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {stakeholders.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/70 hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/60 text-[#F20A78] flex items-center justify-center shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-xs font-medium text-slate-500 bg-white border border-slate-200/60 px-2.5 py-1 rounded-full">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {s.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Outro */}
        <div className="text-center max-w-2xl mx-auto pt-8 border-t border-slate-100">
          <p className="text-base sm:text-lg text-slate-800 font-medium">
            As SKORNET expands, we aim to connect these stakeholders across a growing range of service categories.
          </p>
        </div>

      </div>
    </section>
  );
};
