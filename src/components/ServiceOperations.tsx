import React from 'react';
import { 
  UserCheck, 
  Send, 
  CalendarClock, 
  Activity, 
  FileText, 
  BarChart3
} from 'lucide-react';

export const ServiceOperations: React.FC = () => {
  const operations = [
    {
      num: '01',
      title: 'Professional Onboarding and Verification',
      desc: 'We aim to maintain organized professional profiles and relevant verification information to support workforce coordination and accountability.',
      icon: UserCheck
    },
    {
      num: '02',
      title: 'Service Request and Job Assignment',
      desc: 'Service requirements can be organized and assigned to suitable professionals, helping businesses coordinate work more efficiently.',
      icon: Send
    },
    {
      num: '03',
      title: 'Appointment and Field Coordination',
      desc: 'Clear job details, appointment information, and service updates help professionals and service businesses stay aligned during execution.',
      icon: CalendarClock
    },
    {
      num: '04',
      title: 'Attendance and Work Tracking',
      desc: 'Supported attendance and field activity tracking help businesses maintain better visibility into workforce operations.',
      icon: Activity
    },
    {
      num: '05',
      title: 'Digital Service Records',
      desc: 'Structured records of assigned jobs, service progress, and completed work help improve follow-ups and operational continuity.',
      icon: FileText
    },
    {
      num: '06',
      title: 'Operational Visibility',
      desc: 'Organized information helps business owners and administrators monitor activities, identify pending work, and make more informed operational decisions.',
      icon: BarChart3
    }
  ];

  return (
    <section id="operations" className="py-24 lg:py-32 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#F20A78] mb-3 block">
            Operational Workflow
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-[1.15] mb-5">
            From Service Request to Service Completion
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Effective service delivery requires more than finding a technician. It requires coordination, accountability, clear communication, and visibility throughout the process.
          </p>
        </div>

        {/* 6 Operations Steps Grid - Clean Minimalist Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {operations.map((op, idx) => {
            const Icon = op.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/70 hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-semibold text-[#F20A78] bg-pink-50 px-2.5 py-1 rounded-full">
                      Step {op.num}
                    </span>

                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/60 text-[#F20A78] flex items-center justify-center shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug">
                    {op.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {op.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Outro Highlight */}
        <div className="text-center max-w-4xl mx-auto pt-8 border-t border-slate-100">
          <p className="text-base sm:text-lg text-slate-800 font-medium sm:whitespace-nowrap">
            Our goal is to make service operations easier to coordinate, manage, and scale.
          </p>
        </div>

      </div>
    </section>
  );
};
