import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, Lock, Eye, CheckCircle2, Mail, Database } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const currentYear = new Date().getFullYear();

interface PrivacyPolicyProps {
  onHomeClick: () => void;
  onJoinClick?: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onHomeClick, onJoinClick }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Privacy Policy | SKORNET - Connected HVAC Ecosystem';
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-[#0B162B] border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <button
            onClick={onHomeClick}
            type="button"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F20A78] rounded cursor-pointer"
            aria-label="SKORNET Home"
          >
            <img
              src="/skornet-logo-dark.png"
              alt="SKORNET"
              className="h-9 sm:h-11 w-auto object-contain"
              width="180"
              height="42"
            />
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onHomeClick}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#F20A78]" />
              <span>Back to Home</span>
            </button>
            {onJoinClick && (
              <button
                onClick={onJoinClick}
                type="button"
                className="btn-primary hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer"
              >
                <span>Join Network</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-[#0B162B] text-white py-14 md:py-20 border-b border-slate-800 relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#F20A78]/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#249FE8]/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-700 bg-slate-900/60 mb-6 text-xs font-semibold text-[#F20A78]">
            <ShieldCheck className="w-4 h-4 text-[#F20A78]" />
            <span>CONFIDENTIALITY & DATA PROTECTION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            SKORNET Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            How we collect, verify, process, and protect information across the SKORNET connected HVAC service ecosystem.
          </p>
          <div className="mt-6 text-xs text-slate-400 font-medium">
            Last Updated: <span className="text-slate-200">October 2026</span> • Effective Date: <span className="text-slate-200">October 2026</span>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="flex-grow py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Quick Notice Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm mb-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#F20A78]/10 rounded-xl text-[#F20A78] shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">Our Commitment to Privacy</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  SKORNET (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the digital platform connecting HVAC service businesses, certified field technicians, and equipment operations. We value your trust and are committed to protecting your personal, professional, and operational information in compliance with applicable Indian data protection laws and industry standard security practices.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: Information We Collect */}
          <article className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-sm mb-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0B162B] text-white font-bold text-sm">1</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Information We Collect</h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              We collect information to authenticate technician credentials, coordinate HVAC service calls, provide workforce visibility, and maintain high standards of service delivery:
            </p>

            <div className="space-y-4 pt-2">
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                <h3 className="text-sm font-semibold text-slate-900 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F20A78]" />
                  Personal & Contact Information
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Full legal name, verified mobile phone number, primary email address, residential and operational service territory, and emergency contacts.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                <h3 className="text-sm font-semibold text-slate-900 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F20A78]" />
                  Identity Verification Records
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Government-issued identification details (such as Aadhaar card or PAN) submitted strictly for background validation, trust establishment, and fraud prevention within the network.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                <h3 className="text-sm font-semibold text-slate-900 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F20A78]" />
                  Professional & Technical Competency Data
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Years of industry experience, HVAC equipment skill proficiencies (e.g., Chillers, VRF/VRV, AHUs, FCUs, Precision AC, Cooling Towers), ITI/diploma trade certifications, OEM authorizations, and compensation expectations.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                <h3 className="text-sm font-semibold text-slate-900 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F20A78]" />
                  Service Operations & Operational Records
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Job dispatch logs, service call completion status, verified digital check-in timestamps, and communication logs relating to platform coordination.
                </p>
              </div>
            </div>
          </article>

          {/* Section 2: How We Use Your Information */}
          <article className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-sm mb-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0B162B] text-white font-bold text-sm">2</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">How We Use Your Information</h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              We process your data only for legitimate business purposes connected with operating the SKORNET platform:
            </p>

            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F20A78] mt-2 shrink-0" />
                <span><strong>Technician Onboarding & Verification:</strong> Validating credentials, background credentials, and experience to qualify participants for enterprise service dispatch.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F20A78] mt-2 shrink-0" />
                <span><strong>Intelligent Service Matching:</strong> Connecting HVAC businesses with technicians who possess the exact skill sets and location coverage for specific equipment types.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F20A78] mt-2 shrink-0" />
                <span><strong>Operational Coordination:</strong> Enabling real-time job updates, digital job sheets, and clear escalation management.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F20A78] mt-2 shrink-0" />
                <span><strong>Trust & Security:</strong> Preventing fraud, ensuring workplace safety, maintaining audit trails, and resolving disputes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F20A78] mt-2 shrink-0" />
                <span><strong>Support & Communications:</strong> Providing notifications regarding service opportunities, platform updates, and responsive customer support.</span>
              </li>
            </ul>
          </article>

          {/* Section 3: Data Security & Governance */}
          <article className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-sm mb-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0B162B] text-white font-bold text-sm">3</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Data Security & Safeguards</h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              We implement comprehensive technical, administrative, and physical security measures designed to safeguard your personal data:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm mb-1.5">
                  <Lock className="w-4 h-4 text-[#F20A78]" />
                  <span>Encryption in Transit</span>
                </div>
                <p className="text-xs text-slate-600">
                  All web traffic and form submissions are protected via modern Transport Layer Security (TLS 1.3 / HTTPS).
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm mb-1.5">
                  <Database className="w-4 h-4 text-[#249FE8]" />
                  <span>Strict Role-Based Access</span>
                </div>
                <p className="text-xs text-slate-600">
                  Verification documents are accessible exclusively to authorized verification personnel on a need-to-know basis.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Confidential Identity Storage</span>
                </div>
                <p className="text-xs text-slate-600">
                  Government IDs are treated as strictly confidential and are never published publicly on the website or exposed to third parties.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm mb-1.5">
                  <Eye className="w-4 h-4 text-amber-600" />
                  <span>Audit Readiness</span>
                </div>
                <p className="text-xs text-slate-600">
                  All critical operations undergo structured logging to identify and mitigate unauthorized access or data anomalies.
                </p>
              </div>
            </div>
          </article>

          {/* Section 4: Data Sharing & Disclosures */}
          <article className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-sm mb-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0B162B] text-white font-bold text-sm">4</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Information Sharing & Third Parties</h2>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm text-emerald-900 font-medium">
              We do not sell, rent, or trade your personal information or contact details to third-party marketing companies.
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              We share data only under strictly regulated operational circumstances:
            </p>

            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F20A78] mt-2 shrink-0" />
                <span><strong>Verified HVAC Service Businesses:</strong> Relevant technician profile summaries (skills, location, verified experience) are shared with verified HVAC business partners seeking technicians for specific assignments.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F20A78] mt-2 shrink-0" />
                <span><strong>Service Infrastructure Providers:</strong> Trusted cloud infrastructure (e.g., hosting, Google Workspace, secure form pipelines) acting as data processors under confidentiality obligations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F20A78] mt-2 shrink-0" />
                <span><strong>Legal Compliance:</strong> When required by Indian law, subpoena, or competent governmental authority to protect life, property, or legal rights.</span>
              </li>
            </ul>
          </article>

          {/* Section 5: Your Rights & Retention */}
          <article className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-sm mb-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0B162B] text-white font-bold text-sm">5</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Your Rights & Data Retention</h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              You maintain control over your personal information:
            </p>

            <ul className="space-y-2.5 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F20A78] mt-0.5 shrink-0" />
                <span><strong>Right of Access & Correction:</strong> Request a review or update of your registered technician competencies, phone number, or operational location at any time.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F20A78] mt-0.5 shrink-0" />
                <span><strong>Right to Erasure / Account Deactivation:</strong> Request removal of your active profile from the SKORNET service dispatch network.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F20A78] mt-0.5 shrink-0" />
                <span><strong>Data Retention:</strong> We retain information as long as necessary to provide service connections, maintain audit trail integrity, or fulfill statutory obligations.</span>
              </li>
            </ul>
          </article>

          {/* Section 6: Contact & Grievances */}
          <article className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0B162B] text-white font-bold text-sm">6</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Contact Us & Grievance Redressal</h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              If you have any questions, feedback, or requests regarding this Privacy Policy or your personal information, please contact our designated privacy team:
            </p>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-2 text-sm text-slate-700">
              <div className="font-bold text-slate-900">SKORNET Privacy & Compliance Officer</div>
              <div className="text-slate-600">The Connected HVAC Service Ecosystem</div>
              <div className="pt-2 flex items-center gap-2 text-sm text-[#F20A78] font-semibold">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="hover:underline">
                  {SITE_CONFIG.contactEmail}
                </a>
              </div>
              <div className="text-xs text-slate-500 pt-1">
                Official Web Domain: <a href={SITE_CONFIG.domain} className="underline text-slate-700">{SITE_CONFIG.domain}</a>
              </div>
            </div>
          </article>

          {/* Return CTA */}
          <div className="mt-12 text-center">
            <button
              onClick={onHomeClick}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B162B] hover:bg-[#111D36] text-white text-sm font-semibold transition-all cursor-pointer shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-[#F20A78]" />
              <span>Return to SKORNET Home</span>
            </button>
          </div>

        </div>
      </main>

      {/* Standard Footer */}
      <footer className="bg-[#0B162B] text-white border-t border-slate-800 py-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {currentYear} <span className="font-semibold text-slate-200">SKORNET</span>. All rights reserved.
          </div>
          <div>
            <span>Connecting the HVAC Service Ecosystem across India.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
