import React from 'react';
import { 
  Workflow, 
  ShieldCheck, 
  Eye, 
  MessageSquare, 
  TrendingUp, 
  Network
} from 'lucide-react';

export const WhySkornet: React.FC = () => {
  const reasons = [
    {
      title: 'Organized Operations',
      desc: 'We focus on bringing service activities, assignments, and records into a more structured workflow.',
      icon: Workflow
    },
    {
      title: 'Professional Accountability',
      desc: 'Organized professional information and verification processes support better workforce management.',
      icon: ShieldCheck
    },
    {
      title: 'Improved Visibility',
      desc: 'Clearer job statuses and accessible records help businesses understand what is assigned, in progress, pending, or completed.',
      icon: Eye
    },
    {
      title: 'Connected Communication',
      desc: 'Better coordination between businesses and field professionals can reduce confusion and support smoother service execution.',
      icon: MessageSquare
    },
    {
      title: 'Designed for Growth',
      desc: 'Our vision allows SKORNET to build on its existing AC services business and expand into additional service categories over time.',
      icon: TrendingUp
    },
    {
      title: 'A Broader Service Ecosystem',
      desc: 'We are working toward a future where different service needs and professional networks can be connected through a more unified approach.',
      icon: Network
    }
  ];

  return (
    <section id="why-skornet" className="py-24 lg:py-32 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#F20A78] mb-3 block">
            Why Skornet
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-[1.15] mb-5">
            Built Around Better Service Coordination
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Addressing fragmented field operations through structured workflows, verifiable accountability, and connected technology.
          </p>
        </div>

        {/* 6 Reasons Grid - Clean Minimalist Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/70 hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-pink-50 text-[#F20A78] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-base text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
