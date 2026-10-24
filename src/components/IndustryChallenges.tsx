import React from 'react';
import { MessageSquare, PhoneCall, FileSpreadsheet, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export const IndustryChallenges: React.FC = () => {
  const manualChannels = [
    {
      icon: MessageSquare,
      title: 'WhatsApp Groups',
      detail: 'Scattered job updates, unorganized chat threads, lost media, and untraceable customer communications.',
    },
    {
      icon: PhoneCall,
      title: 'Phone Calls',
      detail: 'Manual dispatch coordination and verbal status reports prone to miscommunication and lack of audit trails.',
    },
    {
      icon: FileSpreadsheet,
      title: 'Excel Spreadsheets',
      detail: 'Static rosters and manual trackers that quickly become outdated and fail to reflect live field activity.',
    },
    {
      icon: FileText,
      title: 'Paper Documents',
      detail: 'Physical job sheets vulnerable to loss, delayed invoicing, unverified service history, and fraud.',
    },
  ];

  const operationalFrictions = [
    {
      title: 'Manual Work & Overhead',
      desc: 'Repeated administrative effort spent re-entering job sheets, chasing updates, and compiling reports.',
    },
    {
      title: 'Data Duplication',
      desc: 'Technician information and service records duplicated across chats, notebooks, and spreadsheets.',
    },
    {
      title: 'Limited Visibility',
      desc: 'Business owners lack real-time awareness of active calls, technician location, and daily attendance.',
    },
    {
      title: 'Verification Challenges',
      desc: 'Uncertainty over technician KYC, authentic HVAC credentials, and authorized organizational affiliations.',
    },
    {
      title: 'Operational Delays',
      desc: 'Unassigned calls, missed customer visits, and delayed job closures caused by manual handoffs.',
    },
    {
      title: 'Revenue & Cost Leakage',
      desc: 'Disputed overtime hours, unvalidated travel distance, and untracked field expenses draining margins.',
    },
  ];

  const opportunityQuestions = [
    'Who are my technicians and are they verified?',
    'Which organization are they officially associated with?',
    'What is their verified professional and mechanical history?',
    'What specific equipment service activities have they handled?',
    'What is happening across my distributed field workforce in real time?',
    'Which calls are currently assigned, pending, or completed?',
    'How efficiently are technicians travelling and attending service calls?',
  ];

  return (
    <section id="challenges" className="py-20 md:py-28 bg-[#F4F6FA] border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F20A78]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-600">
              The Industry Challenge
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B162B] tracking-tight leading-tight mb-5">
            HVAC Service Operations Need Better Connections
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            The technicians are connected on personal phones — but the operational information is not. HVAC businesses manage a large and distributed field workforce, yet day-to-day coordination remains trapped in fragmented manual channels.
          </p>
        </div>

        {/* HVAC Service Coordination Scene Visual Banner */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 relative">
            <picture>
              <source srcSet="/images/industry-challenges.webp" type="image/webp" />
              <img
                src="/images/industry-challenges.jpg"
                alt="HVAC service coordination operations room showing disconnected field communication channels"
                className="w-full h-[280px] sm:h-[340px] lg:h-[380px] object-cover object-center"
                loading="lazy"
                width="1200"
                height="675"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B162B]/80 via-transparent to-transparent lg:hidden" />
          </div>
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B162B] mb-3">
              The Reality of HVAC Field Coordination
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              While field technicians carry smartphones, operational information remains trapped across scattered phone calls, disorganized chat groups, and paper job sheets—creating blind spots across active calls, inventory, and attendance.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#F20A78]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F20A78]" />
              <span>Unifying field reality with centralized operations</span>
            </div>
          </div>
        </div>

        {/* Current Manual Channels vs Friction Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-14">
          
          {/* Left Column: Disconnected Channels */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B162B] mb-3">
              Where Information Gets Lost
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              When technician KYC, call status, attendance, and job sheets are managed through multiple disconnected systems, operational delay is guaranteed.
            </p>

            <div className="space-y-3.5">
              {manualChannels.map((channel, idx) => {
                const Icon = channel.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[#F20A78]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0B162B]">{channel.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-normal">{channel.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Operational Frictions */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {operationalFrictions.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200 hover:border-[#F20A78]/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#F20A78]/10 text-[#F20A78] flex items-center justify-center font-poppins font-bold text-xs mb-3.5">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-[#0B162B] mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* The Opportunity: What If Everything Was Connected? */}
        <div className="bg-[#0B162B] text-white rounded-2xl p-6 sm:p-10 lg:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-[#F20A78]/5 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div className="max-w-3xl mb-8 relative z-10">
            <span className="text-xs font-poppins uppercase tracking-widest text-[#F20A78] font-semibold">
              The Operational Opportunity
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3">
              What If Everything Was Connected?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Imagine a unified platform where an HVAC service business can easily answer the fundamental questions of field operations without a single phone call or paper sheet:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 mb-8 relative z-10">
            {opportunityQuestions.map((q, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <CheckCircle2 className="w-5 h-5 text-[#F20A78] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                  {q}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
            <p className="text-xs sm:text-sm text-slate-400">
              This is the exact operational opportunity that <strong className="text-white">SKORNET</strong> addresses.
            </p>
            <a
              href="#platform"
              className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold"
            >
              <span>Explore the Platform</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
