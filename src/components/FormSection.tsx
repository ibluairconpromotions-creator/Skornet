import React from 'react';
import { ExternalLink, ShieldCheck, Lock, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const FormSection: React.FC = () => {
  const directFormUrl = SITE_CONFIG.googleForm.directUrl;
  const requiredFields = SITE_CONFIG.googleForm.fields;

  return (
    <section id="technician-application" className="py-20 md:py-32 bg-[#F9FAFB] border-t border-[#E5E7EB] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FE246E]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#4A4A4A]">
              Technician Onboarding
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-5">
            Join the SKORNET Network
          </h2>

          <p className="text-base sm:text-xl text-[#4A4A4A] leading-relaxed">
            Share your details, experience and skills to connect with the SKORNET HVAC service ecosystem.
          </p>
        </div>

        {/* Focused Centered Application Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 border border-[#E5E7EB] shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
          
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#FE246E]/10 text-[#FE246E]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                  Required Application Details
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4A4A] mt-0.5">
                  Please have the following 8 verified items ready when submitting the official application form:
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-flex text-xs font-mono font-medium text-[#6B7280] bg-[#F9FAFB] px-3 py-1.5 rounded-full border border-[#E5E7EB]">
              Official Registration
            </span>
          </div>

          {/* 8 Required Fields in 2-Column Clean Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10">
            {requiredFields.map((field, idx) => (
              <div
                key={field.id}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#FE246E]/30 transition-colors"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-[#E5E7EB] text-[#1A1A1A] font-mono text-xs font-bold shrink-0 mt-0.5 shadow-2xs">
                  {idx + 1}
                </span>
                <div>
                  <span className="font-bold text-sm sm:text-base text-[#1A1A1A]">
                    {field.label}
                  </span>
                  <span className="text-xs sm:text-sm text-[#6B7280] block mt-0.5 leading-relaxed">
                    {field.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Direct CTA Action: Redirect Straight to Google Form */}
          <div className="text-center pt-2 pb-6 border-b border-[#E5E7EB]">
            <a
              href={directFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-lg sm:text-xl font-bold shadow-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FE246E]"
            >
              Submit Your Details
              <ExternalLink className="w-5 h-5" />
            </a>
            <p className="text-xs text-[#6B7280] mt-3">
              Opens the official Google Form application in a new tab.
            </p>
          </div>

          {/* Privacy & Google Sign-in Verification Notices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 text-left">
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-[#FE246E] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#1A1A1A]">
                  Confidentiality & Aadhaar Protection
                </h4>
                <p className="text-xs text-[#4A4A4A] mt-1 leading-relaxed">
                  Aadhaar and identity data are requested strictly for authorized identity verification and compliance within the Skornet service ecosystem. Access is strictly restricted to authorized onboarding personnel.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#6B7280] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#1A1A1A]">
                  Google Account Sign-In Note
                </h4>
                <p className="text-xs text-[#4A4A4A] mt-1 leading-relaxed">
                  Google Forms mandates sign-in to your Google Account when uploading file attachments (resumes/certifications) to store them safely.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
