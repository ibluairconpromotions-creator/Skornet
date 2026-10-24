import React from 'react';
import { FileCheck, Lock, Building2 } from 'lucide-react';

export const DataTrust: React.FC = () => {
  return (
    <section id="trust" className="py-24 lg:py-32 bg-slate-50/60 text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#F20A78] mb-3 block">
            Data Governance
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-[1.15] mb-5">
            Clear Records. Responsible Access.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Service operations involve professional details, assignments, attendance information, and work records. We recognize the importance of managing this information responsibly.
          </p>
        </div>

        {/* 3 Core Trust Principles Grid - Clean Minimalist Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          <div className="p-8 rounded-2xl bg-white border border-slate-200/70 hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-pink-50 text-[#F20A78] flex items-center justify-center mb-5">
                <FileCheck className="w-5 h-5" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Structured Operational Records
              </h3>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Our approach emphasizes structured records and appropriate access to information based on operational requirements and permissions.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200/70 hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-pink-50 text-[#F20A78] flex items-center justify-center mb-5">
                <Building2 className="w-5 h-5" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Visibility with Boundaries
              </h3>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                We aim to support service businesses with better visibility into their own operations while maintaining suitable boundaries around business and professional information.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200/70 hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-pink-50 text-[#F20A78] flex items-center justify-center mb-5">
                <Lock className="w-5 h-5" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Responsible Evolution
              </h3>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                As our platform and operations evolve, responsible information management will remain an important part of our approach.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
