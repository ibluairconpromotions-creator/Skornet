import React from 'react';
import {
  ShieldCheck,
  Users,
  History,
  PhoneCall,
  LayoutDashboard,
  Smartphone,
  Calendar,
  MapPin,
  Receipt,
} from 'lucide-react';

export const PlatformCapabilities: React.FC = () => {
  const capabilities = [
    {
      icon: ShieldCheck,
      title: 'Technician KYC & Verification',
      category: 'Workforce Trust',
      desc: 'Structured onboarding capturing Aadhaar verification, certified skill matrix, past mechanical experience, and trade documentation into a digital profile.',
      benefit: 'Builds a trusted technician network and validates authentic qualifications before dispatching personnel to client equipment.',
    },
    {
      icon: Users,
      title: 'Technician Profile & Workforce Management',
      category: 'Organization Control',
      desc: 'Technician details are managed strictly within the relevant owner organization. One owner’s technician data is never visible to other owners.',
      benefit: 'Protects proprietary company rosters while providing controlled transfer workflows when employees join, move, or conclude engagements.',
    },
    {
      icon: History,
      title: 'Digital Work History',
      category: 'Service Records',
      desc: 'Maintains ongoing service activity, customer feedback, and equipment logs. Repeated complaints linked to a customer or technician trigger quality reviews.',
      benefit: 'Past experience and service history provide a stronger basis for technician assignment and training than claims alone.',
    },
    {
      icon: PhoneCall,
      title: 'Smart Call Assignment & Tracking',
      category: 'Dispatch Operations',
      desc: 'Service calls are assigned systematically to the specific technician required. Assigned, pending, and completed calls remain visible, with travel distance calculated in kilometers.',
      benefit: 'Monitors case-by-case progress without relying only on manual reporting, reducing follow-up and escalation gaps.',
    },
    {
      icon: LayoutDashboard,
      title: 'Owner & Administrator Dashboards',
      category: 'Executive Oversight',
      desc: 'One clear view of field operations showing assigned calls, pending calls, completed calls, total coverage, approval requests, and technician attendance.',
      benefit: 'Provides business owners and platform administrators with complete operational visibility from a single screen.',
    },
    {
      icon: Smartphone,
      title: 'Technician Mobile Application',
      category: 'Field Execution',
      desc: 'Simple mobile workflow: 1. Assign (receive call), 2. Track (appointment & GPS navigation), 3. Complete (update work), 4. Record (close with incentive info).',
      benefit: 'Field service operations in the technician’s hand, eliminating paper job sheets and lost verbal updates.',
    },
    {
      icon: Calendar,
      title: 'Appointments & Controlled Customer Access',
      category: 'Customer Coordination',
      desc: 'Appointments are fixed with reminders in the technician view. Customer details are provided via a controlled cloud link configured to expire automatically after two days.',
      benefit: 'The right information, for the right call, at the right time — reducing missed visits while strictly protecting customer privacy.',
    },
    {
      icon: MapPin,
      title: 'GPS Attendance & Overtime Accountability',
      category: 'Field Accountability',
      desc: 'Daily login and attendance recorded through the app, with GPS validating the attendance point. Overtime is recorded, reviewed, validated, and approved by the owner.',
      benefit: 'Attendance + Location + Approval = Better workforce accountability, with approved OT included directly in the salary process.',
    },
    {
      icon: Receipt,
      title: 'Incentive, Salary & Expense Control',
      category: 'Workforce Cost Visibility',
      desc: 'Incentives entered once and reflected when eligible calls close. Petrol allowance, expenses, and overtime are reviewed against field activity to identify leakage.',
      benefit: 'Transitions operations from manual calculations to clearer workforce cost visibility, supporting monthly and yearly workforce budgeting.',
    },
  ];

  return (
    <section id="capabilities" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F20A78]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-600">
              Platform Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B162B] tracking-tight leading-tight mb-5">
            Everything You Need to Organize HVAC Field Operations
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            SKORNET provides a connected digital environment for managing the technician and service lifecycle — linking identity, verification, dispatch, attendance, and workforce costs.
          </p>
        </div>

        {/* 9 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="bg-[#F4F6FA] rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#F20A78]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-[#F20A78] shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-poppins uppercase tracking-wider text-slate-600 font-semibold bg-white px-2.5 py-1 rounded-md border border-slate-200">
                      {cap.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B162B] mb-2 leading-snug">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-200 mt-2">
                  <p className="text-xs font-semibold text-[#F20A78] uppercase tracking-wider mb-1">
                    Practical Benefit
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cap.benefit}
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
