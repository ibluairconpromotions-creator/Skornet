/**
 * SKORNET
 * Website Configuration & Source-of-Truth Constants
 *
 * Strict Branding & Visual Identity:
 * Public-facing brand & organization name is strictly "SKORNET".
 * Palette sampled from Hero Reference:
 * - Deep navy: #0B162B
 * - Hot pink: #F20A78
 * - Light grey: #F4F6FA
 * - White: #FFFFFF
 */

export const SITE_CONFIG = {
  companyName: 'SKORNET',
  brandName: 'SKORNET',
  domain: 'https://skornet.in',
  eyebrow: 'CONNECTED SERVICE ECOSYSTEM',
  headline: 'Connecting Services. Powering a Smarter Service Ecosystem.',
  description:
    'We are SKORNET — building a connected service ecosystem that brings businesses, skilled professionals, and customers together through smarter co-ordination, organized operations, and better service experiences.',
  tagline: 'Connect. Verify. Manage. Grow.',
  subTagline: 'Connecting services, powering a smarter service ecosystem.',
  contactEmail: 'contact@skornet.in',

  brandColors: {
    navyBg: '#0B162B',
    navyCard: '#111D36',
    charcoal: '#4A4A4A',
    charcoalDark: '#1A1A1A',
    pink: '#F20A78',
    pinkHover: '#D8086A',
    white: '#FFFFFF',
    bgLight: '#F4F6FA',
    border: '#E5E7EB',
  },

  // Official Google Form Onboarding Registration
  googleForm: {
    directUrl: 'https://forms.gle/J8Z223TY6iwuHT126',
    fields: [
      { id: 'name', label: 'Full Legal Name', required: true, desc: 'Technician / contractor primary contact' },
      { id: 'phone', label: 'Verified Phone Number', required: true, desc: 'Direct contact for service call dispatch and notifications' },
      { id: 'aadhar', label: 'Aadhaar Identity Verification', required: true, desc: 'Confidential identity validation for trusted onboarding' },
      { id: 'address', label: 'Operational Coverage Address', required: true, desc: 'Base location and preferred service territory' },
      { id: 'experience', label: 'Industry Experience', required: true, desc: 'Years in commercial, industrial and residential HVAC service' },
      { id: 'skill', label: 'Specialized Skill Matrix', required: true, desc: 'Competencies: Chillers, VRF/VRV, AHUs, FCUs, Diagnostics, Electrical' },
      { id: 'expected_salary', label: 'Compensation Expectations', required: true, desc: 'Per service tier or monthly engagement terms' },
      { id: 'upload_file', label: 'Certifications & Document Upload', required: true, desc: 'Trade licenses, ITI/diploma certificates, or service resume' },
    ],
  },
};
