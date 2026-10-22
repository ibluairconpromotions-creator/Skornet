import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

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
      question: 'What is Skornet and what problems does it solve?',
      answer:
        'Skornet is an industrial digital platform designed to connect the people, processes, and operations that power the HVAC service industry across India. It eliminates manual coordination bottlenecks, fragmented communication, and paper job sheets by bringing service demand, business operations, certified field technicians, and customer service delivery into one synchronized digital ecosystem.',
    },
    {
      category: 'Technician Network',
      question: 'Who can join the Skornet technician and contractor network?',
      answer:
        'Certified HVAC field technicians, maintenance engineers, HVAC service contractors, and facility engineering teams across India can join the network. Whether you are an experienced chiller plant specialist, VRV/VRF technician, or commercial ductable AC installer, Skornet provides direct access to verified service calls and structured operational workflows.',
    },
    {
      category: 'Equipment Coverage',
      question: 'What types of HVAC equipment and commercial systems are supported?',
      answer:
        'Skornet supports all tiers of commercial, industrial, and residential HVAC infrastructure including water-cooled and air-cooled chillers, Variable Refrigerant Flow (VRF/VRV) systems, Air Handling Units (AHUs), Fan Coil Units (FCUs), rooftop packaged units, cooling towers, ventilation exhausts, and precision air conditioning (PAC) units.',
    },
    {
      category: 'Service Workflow',
      question: 'How does the 5-stage digital service workflow operate?',
      answer:
        'The workflow connects: (1) Service Request Management with centralized intake, (2) Intelligent Technician Work Assignment based on skill and location, (3) Synchronized Appointment Scheduling across dispatch and facility managers, (4) Real-Time Field Activity Tracking with attendance and job milestones, and (5) Permanent Digital Service Records with sign-offs and maintenance history.',
    },
    {
      category: 'Onboarding & Verification',
      question: 'What verification details are required for technician onboarding?',
      answer:
        'To ensure verified service quality and customer safety, onboarding technicians provide: Full Legal Name, Verified Phone Number, Aadhaar Identity Verification (held strictly confidential), Operational Coverage Address, Years of Industry Experience, Specialized Skill Matrix, Compensation Expectations, and Document/Certificate Upload.',
    },
    {
      category: 'Privacy & Operations',
      question: 'How does Skornet ensure data security and operational privacy?',
      answer:
        'Skornet employs enterprise-grade data protection standards. All identity records, verification details, facility addresses, and equipment service logs are securely stored and accessible strictly for verified operational dispatch, ensuring full compliance and customer confidentiality.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToApplication = () => {
    const el = document.getElementById('technician-application');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-t border-[#E5E7EB]" aria-labelledby="faq-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FE246E]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#4A4A4A]">
              Frequently Asked Questions
            </span>
          </div>

          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-5"
          >
            Questions & Operational Insights
          </h2>

          <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
            Everything you need to know about the Skornet digital HVAC platform, technician verification, and service ecosystem coordination.
          </p>
        </div>

        {/* Interactive Accordion List */}
        <div className="space-y-4 mb-14" role="region" aria-label="FAQ Accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#F9FAFB] border-[#FE246E]/40 shadow-xs'
                    : 'bg-white border-[#E5E7EB] hover:border-[#D1D5DB]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-5 sm:px-7 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FE246E]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#FE246E] px-2 py-0.5 rounded bg-[#FE246E]/10 self-start">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`shrink-0 p-1.5 rounded-full transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-[#FE246E] text-white'
                        : 'bg-[#F3F4F6] text-[#4A4A4A]'
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
                    className="px-5 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-[#4A4A4A] leading-relaxed border-t border-[#E5E7EB]/50"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick CTA Box */}
        <div className="bg-[#F9FAFB] rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-white border border-[#E5E7EB] text-[#FE246E] shadow-2xs">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#1A1A1A]">
                Have a question not listed here?
              </h4>
              <p className="text-xs sm:text-sm text-[#4A4A4A] mt-0.5">
                Join our network or register your technician profile directly through our official form.
              </p>
            </div>
          </div>

          <button
            onClick={scrollToApplication}
            type="button"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm sm:text-base font-semibold cursor-pointer shrink-0"
          >
            <span>Submit Your Details</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
