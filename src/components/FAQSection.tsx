import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: 'Platform Overview',
      question: 'What is SKORNET?',
      answer:
        'SKORNET is a digital platform designed to connect the HVAC service ecosystem across India. It brings service businesses, certified field technicians, administrators, and customer service workflows into one connected digital environment—organizing technician verification, service-call dispatch, attendance tracking, and digital work history.',
    },
    {
      category: 'Business Operations',
      question: 'How does SKORNET help HVAC service businesses?',
      answer:
        'SKORNET provides service business owners with complete operational visibility. Owners can monitor assigned, pending, and completed service calls from a single dashboard, track GPS-validated technician attendance, calculate travel distance in kilometers, and review overtime, travel allowances, expenses, and call-based incentives without relying on scattered WhatsApp chats or paper sheets.',
    },
    {
      category: 'Network Eligibility',
      question: 'Who can join the SKORNET network?',
      answer:
        'The SKORNET network is open to HVAC field technicians, maintenance engineers, service contractors, and HVAC business owners. Whether you specialize in commercial chillers, VRF/VRV systems, AHUs, FCUs, packaged units, or residential air conditioning, SKORNET provides a structured environment to verify credentials, receive assignments, and coordinate operations.',
    },
    {
      category: 'Onboarding & KYC',
      question: 'How does technician verification work?',
      answer:
        'Technicians submit an onboarding application including full legal name, contact number, Aadhaar identity verification (held strictly confidential), service coverage area, years of industry experience, and specialized skill matrix along with trade licenses or certificates. Platform administrators verify these records before the technician is approved and associated with a service business organization.',
    },
    {
      category: 'Call Management',
      question: 'How are HVAC service calls assigned and tracked?',
      answer:
        'Service business owners or dispatchers assign service requests case-by-case based on the technician’s validated skill set, location, and availability. Technicians receive call details and appointment reminders directly on the mobile app. Call status progresses transparently through assigned, pending, and completed states, allowing real-time monitoring across the entire service lifecycle.',
    },
    {
      category: 'Attendance & GPS',
      question: 'Does SKORNET support GPS-based attendance?',
      answer:
        'Yes. Technicians record their daily login and check-out through the mobile application, where device GPS coordinates validate their attendance point. The platform also associates location data with service calls and calculates travel distance in kilometers, providing owners with audit-ready attendance history and objective data for travel allowance reviews.',
    },
    {
      category: 'Digital Records',
      question: 'How does SKORNET organize technician records?',
      answer:
        'SKORNET maintains a structured digital profile for every technician containing verified identity documents, KYC information, certified equipment proficiencies, and an ongoing digital work history of all completed service calls and repairs. These records remain centralized within the technician’s profile and the associated service organization.',
    },
    {
      category: 'Equipment Coverage',
      question: 'Which HVAC equipment categories are relevant to SKORNET?',
      answer:
        'SKORNET is structured around all major commercial, industrial, and residential HVAC equipment categories, including water-cooled and air-cooled Chillers, Variable Refrigerant Flow (VRF/VRV) systems, Air Handling Units (AHUs), Fan Coil Units (FCUs), Rooftop Packaged Units, Cooling Towers, Ventilation and Exhaust systems, and Precision Air Conditioning (PAC) units.',
    },
    {
      category: 'Registration Flow',
      question: 'How can technicians and service businesses register?',
      answer:
        'Technicians and service businesses can register by submitting the official SKORNET registration form at https://forms.gle/J8Z223TY6iwuHT126. After providing required verification documents, skill matrix selections, and operational details, our team reviews the submission for platform onboarding and organizational association.',
    },
    {
      category: 'Data Privacy & Control',
      question: 'How does SKORNET manage technician information?',
      answer:
        'SKORNET manages technician information under strict organizational data isolation. A service business owner’s technician records, KYC details, and service histories are private to that organization and are never visible to competing owners. When personnel changes occur, technicians can be transferred between organizations in accordance with authorized owner and administrator governance rules.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-t border-slate-200" aria-labelledby="faq-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F20A78]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-600">
              Frequently Asked Questions
            </span>
          </div>

          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B162B] tracking-tight leading-tight mb-5"
          >
            Questions & Answers
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything you need to know about the SKORNET platform, technician verification, dispatch workflows, and workforce management.
          </p>
        </div>

        {/* Interactive Accordion List */}
        <div className="space-y-3.5 mb-14" role="region" aria-label="FAQ Accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#F4F6FA] border-[#F20A78]/40 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-5 sm:px-7 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F20A78]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                    <span className="text-[11px] font-poppins font-semibold uppercase tracking-wider text-[#F20A78] px-2.5 py-0.5 rounded bg-[#F20A78]/10 self-start">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#0B162B] leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`shrink-0 p-1.5 rounded-full transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-[#F20A78] text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="px-5 sm:px-7 pb-6 pt-2 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/50"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Card */}
        <div className="bg-[#F4F6FA] rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-white border border-slate-200 text-[#F20A78] shadow-2xs">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#0B162B]">
                Ready to connect your HVAC operations?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Submit your technician profile or register your service business with SKORNET.
              </p>
            </div>
          </div>

          <a
            href={SITE_CONFIG.googleForm.directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-semibold cursor-pointer shrink-0"
          >
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
