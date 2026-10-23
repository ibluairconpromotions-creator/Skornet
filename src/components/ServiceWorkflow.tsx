import React from 'react';
import { ShieldCheck, UserCheck, CalendarClock, Navigation, CheckCircle2 } from 'lucide-react';

export const ServiceWorkflow: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: ShieldCheck,
      title: 'Verify Technician Identity and Professional Records',
      summary:
        'Structured onboarding verifies KYC documents, Aadhaar identity, specialized skill certifications, and industry experience before associating the technician with the service organization.',
      keyAspects: ['Aadhaar & identity verification', 'Skill matrix assessment', 'Owner organization association'],
    },
    {
      num: '02',
      icon: UserCheck,
      title: 'Assign Service Calls to Relevant Technicians',
      summary:
        'Dispatch managers assign incoming service requests systematically based on technician technical capability, operational base, and real-time availability.',
      keyAspects: ['Equipment-specific matching', 'Case-by-case status tracking', 'Distance & territory alignment'],
    },
    {
      num: '03',
      icon: CalendarClock,
      title: 'Coordinate Appointments and Customer Information',
      summary:
        'Schedules are confirmed with clear technician appointment reminders, while customer contact and facility location details are provided through controlled, time-limited access.',
      keyAspects: ['Appointment reminders', 'Controlled cloud link access', 'Reduced missed visits'],
    },
    {
      num: '04',
      icon: Navigation,
      title: 'Track Supported GPS-Based Field Activity and Attendance',
      summary:
        'Technicians record daily attendance with GPS validation. Field progress, travel distance, and on-site milestones are updated directly through the mobile application.',
      keyAspects: ['Location-validated attendance', 'Job status milestones', 'Travel distance tracking'],
    },
    {
      num: '05',
      icon: CheckCircle2,
      title: 'Record Service Progress and Completed Work',
      summary:
        'Upon job completion, diagnostic checklists and service reports are logged to the technician’s digital work history, and eligible incentive or expense entries are registered for owner review.',
      keyAspects: ['Permanent digital service history', 'Incentive & expense logging', 'Customer service sign-off'],
    },
  ];

  return (
    <section id="workflow" className="py-20 md:py-28 bg-[#F4F6FA] border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F20A78]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-600">
              Standardized Field Workflow
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B162B] tracking-tight leading-tight mb-5">
            From Technician Verification to Service Completion
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            SKORNET transforms ad-hoc communication into a repeatable 5-stage digital operating flow — ensuring accountability from technician onboarding all the way to verified job completion.
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual Asset Anchor */}
          <div className="lg:col-span-5 static lg:sticky lg:top-28">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.05)] bg-white group">
              <picture>
                <source srcSet="/images/service-operations.webp" type="image/webp" />
                <img
                  src="/images/service-operations.jpg"
                  alt="HVAC technician inspecting chilled water pipeline valves and pressure gauges in a commercial facility"
                  className="w-full h-[360px] sm:h-[440px] object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                  width="700"
                  height="500"
                />
              </picture>
              
              <div className="p-5 bg-white border-t border-slate-200">
                <p className="text-xs font-poppins text-slate-500 uppercase tracking-wider mb-1">
                  Structured Service Delivery
                </p>
                <p className="text-sm text-[#0B162B] font-medium">
                  Centralizing mechanical diagnostics, scheduled preventive checks, and verified field attendance.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Sequential Workflow Stages */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#F20A78]/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#F20A78]/10 text-[#F20A78] shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-poppins font-bold text-[#F20A78] tracking-wider uppercase">
                          Step {step.num}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[#0B162B] mb-2 leading-snug">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3.5">
                        {step.summary}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                        {step.keyAspects.map((aspect, aIdx) => (
                          <span
                            key={aIdx}
                            className="inline-flex items-center text-[11px] font-medium text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200"
                          >
                            {aspect}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
