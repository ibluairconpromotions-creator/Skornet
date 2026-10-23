import React from 'react';
import { ExternalLink, ShieldCheck, Lock, AlertCircle, Wrench, Building2, UserCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const FormSection: React.FC = () => {
  const directFormUrl = SITE_CONFIG.googleForm.directUrl;
  const requiredFields = SITE_CONFIG.googleForm.fields;

  const applicantTypes = [
    {
      icon: Wrench,
      title: 'HVAC Field Technicians',
      desc: 'Skilled technicians seeking structured work, digital identity, and direct service-call assignments.',
    },
    {
      icon: Building2,
      title: 'Service Contractors & Businesses',
      desc: 'HVAC service business owners seeking workforce visibility, dispatch coordination, and attendance tracking.',
    },
    {
      icon: UserCheck,
      title: 'Maintenance Engineers & Specialists',
      desc: 'Chiller, VRF, AHU, and central plant maintenance specialists looking to verify their professional credentials.',
    },
  ];

  return (
    <section id="technician-application" className="py-20 md:py-32 bg-white border-t border-[#E5E7EB] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F20A78]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-600">
              Network Onboarding
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B162B] tracking-tight leading-tight mb-5">
            Be Part of a More Connected HVAC Service Ecosystem
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We invite HVAC technicians, service contractors, maintenance professionals and service businesses to connect with the SKORNET platform. Share your details, experience, and specialized skills to join the verified network.
          </p>
        </div>

        {/* Who Can Join Mini Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {applicantTypes.map((type, idx) => {
            const Icon = type.icon;
            return (
              <div key={idx} className="p-4 rounded-xl bg-[#F4F6FA] border border-slate-200 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-[#F20A78] shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B162B]">{type.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{type.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Application Details Card */}
        <div className="bg-[#F4F6FA] rounded-2xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#F20A78]/10 text-[#F20A78]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B162B]">
                  Required Onboarding Details
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Please have the following 8 verified items ready when submitting the official application:
                </p>
              </div>
            </div>
          </div>

          {/* 8 Required Fields in 2-Column Clean Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-10">
            {requiredFields.map((field, idx) => (
              <div
                key={field.id}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 hover:border-[#F20A78]/30 transition-colors shadow-2xs"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#F20A78]/10 text-[#F20A78] font-poppins text-xs font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <span className="font-bold text-sm sm:text-base text-[#0B162B]">
                    {field.label}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 block mt-0.5 leading-relaxed">
                    {field.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Direct CTA Action: Redirect Straight to Google Form */}
          <div className="text-center pt-2 pb-6 border-b border-slate-200">
            <a
              href={directFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-bold shadow-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F20A78]"
            >
              <span>Join the SKORNET Network</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            <p className="text-xs text-slate-500 mt-3">
              Opens the official SKORNET Google Form registration in a new tab.
            </p>
          </div>

          {/* Privacy & Confidentiality Notice */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 text-left">
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-[#F20A78] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#0B162B]">
                  Aadhaar Confidentiality & Protection
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Identity documentation and Aadhaar details are requested solely for authorized verification within the SKORNET ecosystem and are stored with strict confidentiality.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#0B162B]">
                  Google Account Sign-In
                </h4>
                <p className="text-xs text-[#4A4A4A] mt-1 leading-relaxed">
                  Google Forms mandates signing into your Google Account to safely upload certificate documents, resumes, and ID files.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
