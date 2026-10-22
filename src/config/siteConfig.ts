/**
 * Skornet
 * Website Configuration & Source-of-Truth Constants
 */

export const SITE_CONFIG = {
  companyName: 'Skornet',
  brandName: 'Skornet',
  tagline: 'Skornet — Connect. Verify. Manage. Grow.',
  subTagline: 'Building the Digital Future of HVAC Service.',
  brandColors: {
    charcoal: '#4A4A4A',
    charcoalDark: '#1A1A1A',
    pink: '#FE246E',
    white: '#FFFFFF',
    bgLight: '#F9FAFB',
    border: '#E5E7EB',
  },
  // Google Form Integration URL
  googleForm: {
    // Direct link to the official Google Form (redirects directly)
    directUrl: 'https://forms.gle/J8Z223TY6iwuHT126',
    // Required form fields explicitly documented from the official form specification
    fields: [
      { id: 'name', label: 'Name', required: true, desc: 'Full legal name' },
      { id: 'phone', label: 'Phone no', required: true, desc: 'Primary contact number for service call assignments' },
      { id: 'aadhar', label: 'Aadhar card', required: true, desc: 'Identity verification for secure onboarding (stored confidentially)' },
      { id: 'address', label: 'Address', required: true, desc: 'Current operational base / service coverage area' },
      { id: 'experience', label: 'Experience', required: true, desc: 'Years in commercial & residential HVAC service' },
      { id: 'skill', label: 'Skill', required: true, desc: 'Specializations (e.g. Chillers, AHUs, VRF, Diagnostics, Electrical)' },
      { id: 'expected_salary', label: 'Expected Salary', required: true, desc: 'Compensation expectations per service tier' },
      { id: 'upload_file', label: 'Upload file', required: true, desc: 'Resume, certifications or ID documents (requires Google sign-in)' },
    ],
  },
};
