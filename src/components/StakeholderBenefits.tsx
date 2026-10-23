import React from 'react';
import { Building2, Wrench, ShieldCheck, Users, Check, X, Sparkles } from 'lucide-react';

export const StakeholderBenefits: React.FC = () => {
  const stakeholderGroups = [
    {
      group: 'For Service Business Owners',
      icon: Building2,
      headline: 'Workforce Control & Cost Visibility',
      points: [
        'Review assigned, pending and completed calls from one dashboard',
        'Review attendance, overtime, incentives and expenses for clearer workforce cost visibility',
        'Plan manpower systematically based on service requirements and incoming call demand',
        'Trace personal and service-call-related follow-ups through structured field activity records',
        'Manage workforce additions, deletions, and employee transfer approvals',
      ],
    },
    {
      group: 'For HVAC Field Technicians',
      icon: Wrench,
      headline: 'Clear Work & Verified Identity',
      points: [
        'Clear assigned work, appointments, customer access, attendance and incentive visibility',
        'Receive assigned service calls, view appointments and required customer information',
        'Record GPS activity, daily attendance and call completion with incentive information',
        'Build a permanent, verifiable digital work history of mechanical skills and repairs',
        'Eliminate paper worksheets with all operational tools in the palm of your hand',
      ],
    },
    {
      group: 'For Platform Administrators',
      icon: ShieldCheck,
      headline: 'Centralized Governance & Trust',
      points: [
        'Centralized verification, monitoring and ecosystem governance',
        'Manage technician identity, KYC documents, and owner organization association',
        'Govern technician transfers when employees change organizations',
        'Monitor platform-wide service quality, repeat complaints, and performance indicators',
        'Enforce strict tenant data isolation rules across all independent organizations',
      ],
    },
    {
      group: 'For Customers & Facility Teams',
      icon: Users,
      headline: 'Accountable Delivery & Less Confusion',
      points: [
        'Better scheduling, faster response and stronger service accountability',
        'Appointment reminders, controlled customer access and digital service records',
        'Verified skilled technicians arriving on-site with authentic qualifications',
        'Time-limited customer links that protect private contact information',
        'Less confusion. Less paperwork. More operational clarity.',
      ],
    },
  ];

  const comparisonRows = [
    {
      area: 'Technician Information',
      without: 'Scattered across personal chats, paper files, and untracked contacts.',
      with: 'Centralized digital identity with verified KYC and skill matrix.',
    },
    {
      area: 'Call Assignment',
      without: 'Unstructured verbal dispatch via phone calls and WhatsApp groups.',
      with: 'Systematic dispatch matched to technician skill, location, and distance in km.',
    },
    {
      area: 'Field Attendance',
      without: 'Manual check-ins prone to attendance disputes and unvalidated hours.',
      with: 'GPS location-validated daily check-in with audit-ready records.',
    },
    {
      area: 'Appointments & Visits',
      without: 'High rate of missed visits, forgotten appointments, and delayed arrivals.',
      with: 'Synchronized appointment reminders and 2-day auto-expiring customer links.',
    },
    {
      area: 'Workforce Costs',
      without: 'Uncontrolled cost leakage in petrol allowance, unverified expenses, and OT.',
      with: 'Transparent overtime approval, travel distance tracking, and incentive visibility.',
    },
    {
      area: 'Service Records',
      without: 'Paper job sheets lost or delayed, with no permanent maintenance history.',
      with: 'Structured digital work history that becomes an operational decision tool.',
    },
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-[#F4F6FA] border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F20A78]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-600">
              Stakeholder Value
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B162B] tracking-tight leading-tight mb-5">
            Practical Benefits for Every Stakeholder
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            One application. Different practical benefits. SKORNET delivers operational clarity, tighter workforce cost control, and structured service delivery across the ecosystem.
          </p>
        </div>

        {/* 4 Stakeholder Benefit Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {stakeholderGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-[#F20A78]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="p-3 rounded-xl bg-[#F20A78]/10 text-[#F20A78] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B162B]">
                        {group.group}
                      </h3>
                      <p className="text-xs text-[#F20A78] font-semibold uppercase tracking-wider mt-0.5">
                        {group.headline}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 pt-4 border-t border-slate-100">
                    {group.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-[#F20A78]/10 text-[#F20A78] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why SKORNET Matters: With SKORNET vs Without SKORNET */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-200 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-poppins font-bold uppercase tracking-wider text-[#F20A78] mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Why SKORNET Matters</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0B162B]">
                Built Around the HVAC Service Workforce
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm">
              SKORNET is designed around technician identity, trust, workforce management, calls, GPS, appointments, and service insights.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-3 px-4 font-semibold text-[#0B162B]">Operational Area</th>
                  <th className="py-3 px-4 font-semibold text-rose-600">Without SKORNET</th>
                  <th className="py-3 px-4 font-semibold text-emerald-700">With SKORNET</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-4 font-medium text-[#0B162B] align-top">{row.area}</td>
                    <td className="py-3.5 px-4 text-slate-600 align-top">
                      <div className="flex items-start gap-2 text-slate-600">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.without}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-[#0B162B] align-top font-medium">
                      <div className="flex items-start gap-2 text-slate-800">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.with}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
