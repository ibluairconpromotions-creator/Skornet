import React from 'react';
import { Layers, Activity, FileSpreadsheet, CheckCircle2 } from 'lucide-react';

export const OperationsInsights: React.FC = () => {
  const insightCapabilities = [
    {
      icon: FileSpreadsheet,
      title: 'Structured Service Records',
      description: 'Systematizing diagnostic checks, mechanical histories, and maintenance actions for immediate reference.',
    },
    {
      icon: Activity,
      title: 'Field Activity Data',
      description: 'Aggregating verified technician logs, arrival milestones, and diagnostic parameters from on-site jobs.',
    },
    {
      icon: Layers,
      title: 'Workflow Review & Visibility',
      description: 'Enabling businesses to examine operational patterns, eliminate service bottlenecks, and optimize resource allocation.',
    },
  ];

  return (
    <section id="insights" className="py-20 md:py-28 bg-[#F9FAFB] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Source Document Content & Capabilities */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FE246E]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#4A4A4A]">
                Operational Intelligence
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-6">
              Turning Operations into Useful Insights
            </h2>

            <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed mb-8">
              Beyond coordinating daily activities, SKORNET aims to make operational information more accessible and useful. Structured service records and field activity data can help businesses review workflows, understand service progress and make more informed operational decisions.
            </p>

            <div className="space-y-4">
              {insightCapabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#E5E7EB] shadow-xs flex items-start gap-4 hover:border-[#FE246E]/30 transition-all duration-150"
                  >
                    <div className="p-2.5 rounded-lg bg-[#FE246E]/10 text-[#FE246E] shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1A1A1A] flex items-center gap-2">
                        {cap.title}
                        <CheckCircle2 className="w-4 h-4 text-[#FE246E]" />
                      </h3>
                      <p className="text-sm text-[#4A4A4A] mt-1 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: High Quality Technical Composition Anchor */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-[0_16px_48px_rgba(0,0,0,0.06)] bg-white group">
              <picture>
                <source srcSet="/images/operational-insights.webp" type="image/webp" />
                <img
                  src="/images/operational-insights.jpg"
                  alt="Indian HVAC specialist reviewing technical ductwork schematics and recording maintenance logs at an inspection workbench"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                  width="700"
                  height="500"
                />
              </picture>

              {/* Technical Geometric Framework Card */}
              <div className="p-6 bg-white border-t border-[#E5E7EB]">
                <div className="flex items-center justify-between text-xs font-mono text-[#6B7280] uppercase tracking-wider mb-2">
                  <span>Structured Field Documentation</span>
                  <span className="text-[#FE246E] font-bold">Standardized Records</span>
                </div>
                <p className="text-sm text-[#1A1A1A] font-medium leading-normal">
                  Converting mechanical field verifications and diagnostic logbooks into organized digital intelligence for operational excellence.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
