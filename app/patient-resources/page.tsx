import type { Metadata } from 'next'
import Link from 'next/link'
import { siteContent } from '@/lib/content'
import { PatientResourcesClient } from './PatientResourcesClient'

export const metadata: Metadata = {
  title: `Patient Resources | Nampa Cardiology Associates`,
  description: `Insurance accepted, new patient forms, patient portal, and FAQs for Nampa Cardiology Associates. We accept BCBS, Aetna, Cigna, United Healthcare, Medicare, Medicaid, and more.`,
  alternates: { canonical: `${siteContent.website}/patient-resources` },
  openGraph: {
    title: `Patient Resources | Nampa Cardiology Associates`,
    description: `Insurance, forms, FAQs, and patient portal access for Nampa Cardiology Associates, Nampa Idaho.`,
    url: `${siteContent.website}/patient-resources`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: siteContent.faq.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

const bringToAppointment = [
  "Valid photo ID (driver's license or passport)",
  'Insurance card(s)',
  'List of current medications and dosages',
  'List of known allergies',
  'Any relevant medical records or prior cardiac test results',
  'Payment method for co-pays or fees',
  'Names and contact information for other treating physicians',
]

export default function PatientResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page header */}
      <section
        className="py-12"
        style={{ backgroundColor: siteContent.primaryColor }}
        aria-label="Page header"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-150">Home</Link>
              </li>
              <li aria-hidden="true">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li aria-current="page" className="text-white font-medium">Patient Resources</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Patient Resources</h1>
          <p className="text-white/70 mt-2">Everything you need before and after your visit.</p>
        </div>
      </section>

      {/* Insurance Accepted */}
      <section className="py-14 bg-white" aria-labelledby="insurance-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 id="insurance-heading" className="text-2xl font-bold mb-2" style={{ color: siteContent.primaryColor }}>
            Insurance Accepted
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            We accept most major insurance plans. Please call our office to verify your specific plan and coverage before your appointment.
            {/* [DEMO] verify current insurance list with billing department */}
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            {siteContent.insurance.map((plan) => (
              <span
                key={plan}
                className="px-4 py-2 rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: siteContent.primaryColor }}
              >
                {plan}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-500">
            Insurance plans change frequently. Always call{' '}
            <a href="tel:2085550398" className="font-semibold underline" style={{ color: siteContent.secondaryColor }}>
              (208) 555-0398
            </a>{' '}
            to confirm your coverage before scheduling.
          </p>
        </div>
      </section>

      {/* New Patient Forms */}
      <section className="py-12" style={{ backgroundColor: siteContent.bgLightColor }} aria-labelledby="forms-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 id="forms-heading" className="text-2xl font-bold mb-2" style={{ color: siteContent.primaryColor }}>
            New Patient Forms
          </h2>
          <p className="text-gray-600 mb-8 text-sm">
            Download, complete, and bring these forms to your first appointment to save time.
            {/* [DEMO] replace href links with real PDF URLs when forms are finalized */}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: 'New Patient Registration', description: 'Personal and insurance information' },
              { name: 'Medical History Form', description: 'Health history and current medications' },
              { name: 'HIPAA Privacy Notice', description: 'How we protect your health information' },
              { name: 'Financial Policy Agreement', description: 'Payment and insurance policies' },
            ].map((form) => (
              <div
                key={form.name}
                className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 bg-white hover:shadow-sm transition-all duration-200"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: siteContent.bgLightColor }}
                  aria-hidden="true"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: siteContent.primaryColor }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-gray-900 text-sm">{form.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{form.description}</p>
                  {/* [DEMO] Replace # with real PDF URL */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-xs font-semibold mt-2 hover:underline transition-colors duration-150"
                    style={{ color: siteContent.secondaryColor }}
                  >
                    Download PDF
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Portal */}
      <section className="py-12 bg-white" aria-labelledby="portal-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div
            className="rounded-2xl p-8 text-white"
            style={{ backgroundColor: siteContent.primaryColor }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 id="portal-heading" className="text-xl font-bold mb-1">Patient Portal</h2>
                <p className="text-white/80 text-sm mb-4">
                  View test results, request prescription refills, message your care team, and manage appointments — all online.
                  {/* [DEMO] replace with real patient portal URL and system name */}
                </p>
                <a
                  href={siteContent.patientPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white border-2 border-white hover:bg-white/10 transition-colors duration-150 cursor-pointer"
                >
                  Access Patient Portal
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — accordion (client) */}
      <section
        className="py-16"
        style={{ backgroundColor: siteContent.bgLightColor }}
        aria-labelledby="faq-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 id="faq-heading" className="text-2xl font-bold mb-2" style={{ color: siteContent.primaryColor }}>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            Common questions from our patients. Don&apos;t see yours?{' '}
            <a href="tel:2085550398" className="font-semibold hover:underline" style={{ color: siteContent.secondaryColor }}>
              Call us
            </a>.
          </p>
          <PatientResourcesClient faq={siteContent.faq} primaryColor={siteContent.primaryColor} />
        </div>
      </section>

      {/* What to bring */}
      <section className="py-16 bg-white" aria-labelledby="bring-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 id="bring-heading" className="text-2xl font-bold mb-2" style={{ color: siteContent.primaryColor }}>
            What to Bring to Your Appointment
          </h2>
          <p className="text-gray-600 text-sm mb-6">Being prepared helps us provide the best possible care.</p>
          <ul className="space-y-3" role="list">
            {bringToAppointment.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: siteContent.primaryColor }}
                  aria-hidden="true"
                >
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link
              href="/appointments"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white transition-colors duration-150 cursor-pointer"
              style={{ backgroundColor: siteContent.primaryColor }}
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
