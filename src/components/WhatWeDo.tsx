import React from 'react';
import { 
  Wrench, 
  Settings, 
  ShieldCheck, 
  Building2, 
  Cpu, 
  Wind, 
  Clock, 
  ArrowRight,
  ClipboardList
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const WhatWeDo: React.FC = () => {
  const acServices = [
    {
      title: 'AC Installation and Commissioning',
      desc: 'Precision setup, piping, testing, and initial commissioning for new and replacement units.',
      icon: Wrench
    },
    {
      title: 'AC Repair and Breakdown Support',
      desc: 'Rapid diagnostics, electrical troubleshooting, leak detection, and compressor repair support.',
      icon: Settings
    },
    {
      title: 'Preventive Maintenance and Servicing',
      desc: 'Scheduled filter cleaning, coil disinfection, pressure balancing, and system health checks.',
      icon: ShieldCheck
    },
    {
      title: 'Residential and Commercial AC Services',
      desc: 'Tailored service programs covering individual homes, multi-story apartments, retail, and offices.',
      icon: Building2
    },
    {
      title: 'VRF/VRV System Services',
      desc: 'Specialized diagnostic, inverter circuit testing, refnet inspection, and modular maintenance.',
      icon: Cpu
    },
    {
      title: 'Ductable, Cassette & Commercial Systems',
      desc: 'Full-spectrum servicing for central plants, ducted packages, cassette units, and air handling equipment.',
      icon: Wind
    },
    {
      title: 'Service Coordination & Maintenance Support',
      desc: 'End-to-end operational dispatch, AMC scheduling, service tracking, and work documentation.',
      icon: Clock
    }
  ];

  return (
    <section id="what-we-do" className="relative py-20 lg:py-28 bg-[#0B162B] text-white overflow-hidden border-t border-slate-800/80">
      {/* Background ambient lighting glows */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[22rem] bg-[#F20A78]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[20rem] bg-[#F20A78]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#F20A78] mb-3 block">
            Specialized Services
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
            AC Services Backed by Organized Operations
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            AC services are at the heart of our existing business. We support air-conditioning service requirements with an emphasis on coordination, professional execution, and effective service management.
          </p>
        </div>

        {/* 7 AC Services Cards Grid + 1 CTA Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {acServices.map((service, idx) => {
            const Icon = service.icon;
            const indexStr = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
            return (
              <div 
                key={idx}
                className="p-7 rounded-2xl bg-[#111D36] border border-slate-800 hover:border-slate-700 hover:bg-[#142342] hover:shadow-lg hover:shadow-black/20 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-[#F20A78] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-500">
                      {indexStr}
                    </span>
                  </div>
                  
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* 8th Card: Network Registration CTA */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-[#162544] to-[#111D36] border border-[#F20A78]/40 shadow-[0_0_25px_rgba(242,10,120,0.12)] text-white flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#F20A78]/15 border border-[#F20A78]/30 text-[#F20A78] flex items-center justify-center mb-5">
                <ClipboardList className="w-5 h-5" />
              </div>

              <h3 className="text-base font-bold text-white mb-2 leading-snug">
                Need AC Service Support?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Register with SKORNET to coordinate field assignments, manage service calls, or request certified technicians.
              </p>
            </div>
            
            <a
              href={SITE_CONFIG.googleForm.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#F20A78] hover:bg-[#D8086A] text-white text-sm font-semibold transition-all shadow-[0_8px_20px_rgba(242,10,120,0.35)]"
            >
              <span>Join the Network</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Operational Foundation Callout with Visual Asset */}
        <div className="rounded-2xl overflow-hidden bg-[#111D36] border border-slate-800 hover:border-slate-700/80 shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-full overflow-hidden group">
            <picture className="w-full h-full block">
              <source srcSet="/images/ac-technician-maintenance.webp" type="image/webp" />
              <img
                src="/images/ac-technician-maintenance.jpg"
                alt="Young Indian HVAC technician in unbranded uniform conducting digital telemetry inspection on air conditioning unit"
                className="w-full h-full min-h-[260px] object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
                width="1280"
                height="720"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111D36] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#111D36] pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 lg:bottom-4 lg:left-4 text-white">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#F20A78] drop-shadow-sm block">
                Precision Field Execution
              </span>
              <p className="text-xs text-slate-200 drop-shadow-sm mt-0.5">
                Real-time diagnostics & verified service checklists.
              </p>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F20A78] mb-2 block">
                Operational Foundation
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Managing the Entire Process End-to-End
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6">
                Beyond the service itself, we recognize the importance of managing the entire process—from receiving a request to assigning the right professional, coordinating fieldwork, tracking progress, and maintaining service records. This operational foundation is an important part of how we work today and how we plan to grow.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-xs font-semibold text-white">Diagnostic Precision</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Component-level telemetry</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-xs font-semibold text-white">Verified Records</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Digital completion logs</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-xs font-semibold text-white">Fast Dispatch</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Organized technician routing</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Ready to partner or need service support?
              </span>
              <a
                href={SITE_CONFIG.googleForm.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-[0_8px_20px_rgba(242,10,120,0.35)]"
              >
                <span>Request or Provide Service</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
