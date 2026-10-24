import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, Lock, Eye, CheckCircle2, Mail, Database, Server, Key, FileCheck2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const currentYear = new Date().getFullYear();

interface SecurityGovernanceProps {
  onHomeClick: () => void;
  onJoinClick?: () => void;
  onPrivacyClick?: () => void;
}

export const SecurityGovernance: React.FC<SecurityGovernanceProps> = ({
  onHomeClick,
  onJoinClick,
  onPrivacyClick,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Security & Governance | SKORNET - Connected HVAC Ecosystem';
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
            <picture>
              <source srcSet="/skornet-logo-transparent.webp" type="image/webp" />
              <img
                src="/skornet-logo-transparent.png"
                alt="SKORNET"
                className="h-9 sm:h-11 w-auto object-contain"
                width="180"
                height="42"
              />
            </picture>
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
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#F20A78]/5 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#F20A78]/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-700 bg-slate-900/60 mb-6 text-xs font-semibold text-emerald-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>ENTERPRISE DATA GOVERNANCE & TRUST</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Security & Governance
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            How SKORNET protects technician identities, operational records, and service workflows with enterprise security and governance controls.
          </p>
          <div className="mt-6 text-xs text-slate-400 font-medium">
            Standard: <span className="text-slate-200">ISO 27001 Aligned</span> • Architecture: <span className="text-slate-200">TLS 1.3 / Strict RBAC</span> • Jurisdiction: <span className="text-slate-200">India</span>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="flex-grow py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Quick Pillar Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col items-start">
              <div className="p-3 bg-[#F20A78]/10 rounded-xl text-[#F20A78] mb-3">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-sm font-bold text-slate-900 mb-1">Confidentiality</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Technician Aadhaar and personal IDs are treated as strictly confidential and never exposed publicly.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col items-start">
              <div className="p-3 bg-[#F20A78]/10 rounded-xl text-[#F20A78] mb-3">
                <Key className="w-5 h-5" />
              </div>
              <h2 className="text-sm font-bold text-slate-900 mb-1">Integrity & RBAC</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strict Role-Based Access Controls ensure only authenticated verification personnel view sensitive records.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col items-start">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-600 mb-3">
                <Server className="w-5 h-5" />
              </div>
              <h2 className="text-sm font-bold text-slate-900 mb-1">Audit Readiness</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Immutable operational activity logs enable full transparency, dispute resolution, and regulatory audit compliance.
              </p>
            </div>
          </div>

          {/* Section 1: Technician Identity & Credential Governance */}
          <article className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-sm mb-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0B162B] text-white font-bold text-sm">1</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Technician Identity & Credential Custody</h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              In the commercial HVAC sector, workforce trust is foundational. SKORNET maintains rigorous governance protocols for all submitted technician documentation:
            </p>

            <div className="space-y-4 pt-2">
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                <h3 className="text-sm font-semibold text-slate-900 mb-1 flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-[#F20A78]" />
                  Aadhaar & Government ID Confidentiality
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Government-issued identification numbers and document images are collected solely to establish verified identity and prevent fraudulent accounts. These documents are stored in secure, access-restricted vaults and are never made searchable or indexed publicly.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                <h3 className="text-sm font-semibold text-slate-900 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F20A78]" />
                  Trade Competency & License Verification
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ITI diplomas, OEM manufacturer certifications, and technical accreditations are verified by designated platform specialists before granting equipment authorization badges (e.g., Chillers, VRF/VRV, AHUs).
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                <h3 className="text-sm font-semibold text-slate-900 mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  No Unsanctioned Third-Party Disclosures
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Technician personal identification records are never sold, monetized, or shared with third-party advertisers. Partner HVAC businesses receive only verified competence summaries and authorized contact methods.
                </p>
              </div>
            </div>
          </article>

          {/* Section 2: Data Encryption & Infrastructure Security */}
          <article className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-sm mb-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0B162B] text-white font-bold text-sm">2</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Data Encryption & Transport Security</h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              SKORNET applies defense-in-depth methodologies across all network layers:
            </p>

            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F20A78] mt-2 shrink-0" />
                <span><strong>Encryption in Transit:</strong> 100% of communications between technicians, businesses, and platform servers are encrypted via TLS 1.3 / HTTPS using robust cipher suites and HSTS enforcement.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F20A78] mt-2 shrink-0" />
                <span><strong>Encryption at Rest:</strong> Cloud data volumes, verification files, and platform databases are encrypted using AES-256 standard encryption.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F20A78] mt-2 shrink-0" />
                <span><strong>Zero Plaintext Storage:</strong> Sensitive tokens and access keys are stored in encrypted secret management facilities with strict rotation cycles.</span>
              </li>
            </ul>
          </article>

          {/* Section 3: Access Control & Governance */}
          <article className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-sm mb-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0B162B] text-white font-bold text-sm">3</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Role-Based Access Control (RBAC)</h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              We enforce the Principle of Least Privilege across all administrative and operational touchpoints:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm mb-1">
                  <Lock className="w-4 h-4 text-[#F20A78]" />
                  <span>Segmented Permissions</span>
                </div>
                <p className="text-xs text-slate-600">
                  Business operators can only view data relating to their dispatched service calls and authorized technician pools.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm mb-1">
                  <Database className="w-4 h-4 text-[#F20A78]" />
                  <span>Audit Logging</span>
                </div>
                <p className="text-xs text-slate-600">
                  Every verification view, document access, and profile update generates an indelible audit log with actor ID and timestamp.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm mb-1">
                  <Key className="w-4 h-4 text-emerald-600" />
                  <span>Mandatory MFA</span>
                </div>
                <p className="text-xs text-slate-600">
                  All administrative accounts and operations dispatch portals require Multi-Factor Authentication.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm mb-1">
                  <Eye className="w-4 h-4 text-amber-600" />
                  <span>Continuous Monitoring</span>
                </div>
                <p className="text-xs text-slate-600">
                  Automated anomaly detection monitors for unauthorized credential access, repeated failed authentication, or data exfiltration attempts.
                </p>
              </div>
            </div>
          </article>

          {/* Section 4: Indian DPDP Act Alignment */}
          <article className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-sm mb-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0B162B] text-white font-bold text-sm">4</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Regulatory Compliance & Governance Standards</h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              SKORNET is aligned with India&rsquo;s Digital Personal Data Protection (DPDP) Act, 2023, and IT Act rules:
            </p>

            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F20A78] mt-0.5 shrink-0" />
                <span><strong>Purpose Limitation:</strong> Data collected during onboarding is strictly utilized for HVAC technician verification, assignment routing, and service coordination.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F20A78] mt-0.5 shrink-0" />
                <span><strong>Data Minimization:</strong> We only request information directly required to confirm identity, competency, and operational service reach.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F20A78] mt-0.5 shrink-0" />
                <span><strong>Right of Correction & Erasure:</strong> Technicians and businesses can request rectification of records or account deactivation through our dedicated compliance channel.</span>
              </li>
            </ul>
          </article>

          {/* Section 5: Security Contact & Vulnerability Reporting */}
          <article className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0B162B] text-white font-bold text-sm">5</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Security Contact & Incident Response</h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              We welcome collaboration with cybersecurity researchers and enterprise compliance auditors. If you identify a potential security vulnerability or have governance inquiries:
            </p>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-2 text-sm text-slate-700">
              <div className="font-bold text-slate-900">SKORNET Security Operations & Governance Team</div>
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
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onHomeClick}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B162B] hover:bg-[#111D36] text-white text-sm font-semibold transition-all cursor-pointer shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-[#F20A78]" />
              <span>Return to SKORNET Home</span>
            </button>
            {onPrivacyClick && (
              <button
                onClick={onPrivacyClick}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 text-sm font-semibold transition-all cursor-pointer shadow-sm"
              >
                <span>View Privacy Policy</span>
              </button>
            )}
          </div>

        </div>
      </main>

      {/* Standard Footer */}
      <footer className="bg-[#0B162B] text-white border-t border-slate-800 py-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {currentYear} <span className="font-semibold text-slate-200">SKORNET</span>. All rights reserved. Designed by Popcix Creative Studio
          </div>
          <div>
            <span>Connecting the HVAC Service Ecosystem across India.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
