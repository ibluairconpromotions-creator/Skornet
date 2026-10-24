import React from 'react';
import { Target, Compass } from 'lucide-react';

export const MissionVision: React.FC = () => {
  return (
    <section id="mission-vision" className="py-24 lg:py-32 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#F20A78] mb-3 block">
            Our Purpose
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-[1.15]">
            Our Mission & Our Vision
          </h2>
        </div>

        {/* Dual Panels: Mission on Left, Vision on Right - Clean Minimalist Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          
          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/70 hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/60 text-[#F20A78] flex items-center justify-center mb-6 shadow-2xs">
                <Target className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                Our Mission
              </h3>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                To deliver AC services while building more organized, efficient, and connected service operations that help businesses and professionals work better together.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/70 hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/60 text-[#F20A78] flex items-center justify-center mb-6 shadow-2xs">
                <Compass className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                Our Vision
              </h3>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                To grow into a connected multi-service ecosystem that brings service businesses, skilled professionals, and customers together across multiple service categories.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
