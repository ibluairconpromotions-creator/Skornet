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

        {/* Collaborative Ecosystem Showcase Banner */}
        <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/90 shadow-sm mb-16 grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-6 relative min-h-[280px] sm:min-h-[340px] overflow-hidden group">
            <picture className="w-full h-full block">
              <source srcSet="/images/who-we-serve-ecosystem.webp" type="image/webp" />
              <img
                src="/images/who-we-serve-ecosystem.jpg"
                alt="Young Indian customer welcoming verified professional service technician with digital tablet confirmation"
                className="w-full h-full min-h-[280px] object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
                width="1280"
                height="720"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B162B]/75 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 text-white">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#F20A78] drop-shadow-sm block">
                Trust & Verification
              </span>
              <p className="text-xs text-slate-100 font-medium drop-shadow-sm mt-0.5">
                Clear digital sign-offs for transparent customer-technician relations.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F20A78] mb-2 block">
                Ecosystem Synergy
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Bridging the Gap Between People, Work, and Trust
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                By providing transparent job tracking, verified professional profiles, and structured communication, SKORNET ensures that customers receive dependable service while technicians and service businesses gain the tools they need to operate and grow with confidence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                  <p className="text-xs font-bold text-slate-900">Customer Peace of Mind</p>
                  <p className="text-[11px] text-slate-500 mt-1">Verified professionals with clear service history.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                  <p className="text-xs font-bold text-slate-900">Organized Fieldwork</p>
                  <p className="text-[11px] text-slate-500 mt-1">Direct job scopes, navigation, and digital checklists.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                  <p className="text-xs font-bold text-slate-900">Business Control</p>
                  <p className="text-[11px] text-slate-500 mt-1">Real-time team visibility and job assignment tracking.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500">
              Connecting service consumers and field teams through structured digital accountability.
            </div>
          </div>
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
