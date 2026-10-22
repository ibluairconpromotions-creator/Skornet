import React from 'react';
import { ClipboardList, UserCheck, CalendarClock, Compass, FileCheck } from 'lucide-react';

export const ServiceWorkflow: React.FC = () => {
  const workflowStages = [
    {
      icon: ClipboardList,
      title: 'Managing Service Requests',
      desc: 'Centralizing incoming demand and service requirements into unified digital intake.',
    },
    {
      icon: UserCheck,
      title: 'Assigning Work',
      desc: 'Matching skilled field technicians to specific equipment types and client locations.',
    },
    {
      icon: CalendarClock,
      title: 'Coordinating Appointments',
      desc: 'Streamlining schedule visibility across dispatch teams, field technicians, and facility managers.',
    },
    {
      icon: Compass,
      title: 'Tracking Field Progress',
      desc: 'Providing real-time transparency into technician attendance, job milestones, and on-site activity.',
    },
    {
      icon: FileCheck,
      title: 'Maintaining Service Records',
      desc: 'Securing verifiable digital documentation of repairs, maintenance logs, and compliance records.',
    },
  ];

  return (
    <section id="workflow" className="py-20 md:py-28 bg-[#F9FAFB] border-t border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FE246E]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#4A4A4A]">
              Operational Workflow
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight">
            Bringing Every Stage of Service Together
          </h2>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Image Anchor */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-[0_10px_30px_rgba(0,0,0,0.05)] bg-white group">
              <picture>
                <source srcSet="/images/service-operations.webp" type="image/webp" />
                <img
                  src="/images/service-operations.jpg"
                  alt="Indian HVAC maintenance engineer inspecting chilled water pipeline valves and pressure gauges in a commercial facility"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                  width="700"
                  height="500"
                />
              </picture>
              
              <div className="p-5 bg-white border-t border-[#E5E7EB]">
                <p className="text-xs font-mono text-[#6B7280] uppercase tracking-wider mb-1">
                  Facility Infrastructure & Diagnostics
                </p>
                <p className="text-sm text-[#1A1A1A] font-medium">
                  Centralized mechanical plant coordination — ensuring reliability across complex commercial systems.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Source Document Content & Workflow Stages */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="space-y-6 text-base sm:text-lg text-[#4A4A4A] leading-relaxed mb-10">
              <p>
                HVAC service operations often involve multiple stakeholders, communication channels and manual processes. SKORNET aims to bring these activities into a more structured digital workflow — from managing service requests and assigning work to coordinating appointments, tracking field progress and maintaining service records.
              </p>
              <p>
                By bringing essential operational information together, the platform helps service businesses gain better visibility into day-to-day activities and coordinate work across their operations.
              </p>
            </div>

            {/* Structured Stages from Document */}
            <div className="border border-[#E5E7EB] rounded-xl bg-white divide-y divide-[#E5E7EB] shadow-sm">
              {workflowStages.map((stage, idx) => {
                const IconComponent = stage.icon;
                return (
                  <div key={idx} className="p-4 sm:p-5 flex items-start gap-4 hover:bg-[#FDF2F5] transition-colors duration-150">
                    <div className="mt-0.5 p-2 rounded-lg bg-[#FE246E]/10 text-[#FE246E] shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#1A1A1A]">
                        {stage.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4A4A4A] mt-0.5">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
