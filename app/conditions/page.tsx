import type { Metadata } from 'next'
import Link from 'next/link'
import { siteContent } from '@/lib/content'
import { ConditionsClient } from './ConditionsClient'

export const metadata: Metadata = {
  title: `Heart Conditions Treated | ${siteContent.practiceName}`,
  description: `Coronary artery disease, heart failure, atrial fibrillation, hypertension, valve disease, arrhythmia, PAD, and high cholesterol treatment in Nampa, ID. Call (208) 555-0398.`,
  alternates: { canonical: `${siteContent.website}/conditions` },
  openGraph: {
    title: `Heart Conditions Treated | ${siteContent.practiceName}`,
    description: `Expert diagnosis and treatment for all major cardiovascular conditions in Nampa, Idaho. Dr. Michael Torres, FACC.`,
    url: `${siteContent.website}/conditions`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteContent.website },
    { '@type': 'ListItem', position: 2, name: 'Conditions', item: `${siteContent.website}/conditions` },
  ],
}

export default function ConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
                <Link href="/" className="hover:text-white transition-colors duration-150">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li aria-current="page" className="text-white font-medium">
                Conditions We Treat
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Conditions We Treat</h1>
          <p className="text-white/70 mt-2 max-w-xl">
            Expert evaluation and treatment for a wide range of cardiovascular conditions — right here in Nampa.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            At {siteContent.practiceName}, Dr. Torres provides comprehensive evaluation, diagnosis, and
            treatment for patients experiencing a wide range of cardiovascular conditions. Every care plan
            is personalized — built around your specific diagnosis, risk factors, and health goals.
          </p>
        </div>
      </section>

      {/* Conditions grid with "We treat this" badges */}
      <section
        className="py-10 pb-16"
        style={{ backgroundColor: siteContent.bgLightColor }}
        aria-labelledby="conditions-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="conditions-heading"
            className="text-2xl font-bold mb-8 max-w-3xl mx-auto"
            style={{ color: siteContent.primaryColor }}
          >
            Cardiovascular Conditions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {siteContent.conditions.map((condition) => (
              <div
                key={condition.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold" style={{ color: siteContent.primaryColor }}>
                    {condition.name}
                  </h3>
                  <span
                    className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold text-white flex-shrink-0 ml-2"
                    style={{ backgroundColor: siteContent.secondaryColor }}
                  >
                    We treat this
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{condition.description}</p>
                <Link
                  href="/appointments"
                  className="inline-flex items-center gap-1 text-sm font-semibold hover:underline transition-colors duration-150"
                  style={{ color: siteContent.secondaryColor }}
                >
                  Schedule a consultation
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client accordion for mobile-friendly detail view */}
      <ConditionsClient />

      {/* CTA */}
      <section className="py-14 bg-white" aria-labelledby="conditions-cta-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="conditions-cta-heading"
            className="text-2xl font-bold mb-4"
            style={{ color: siteContent.primaryColor }}
          >
            Not Sure If We Can Help?
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Call us to speak with our care team — we&apos;ll help determine the right next step for your cardiac health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white transition-colors duration-150 cursor-pointer"
              style={{ backgroundColor: siteContent.primaryColor }}
            >
              Book a Consultation
            </Link>
            <a
              href="tel:2085550398"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold border-2 transition-colors duration-150 cursor-pointer"
              style={{ borderColor: siteContent.primaryColor, color: siteContent.primaryColor }}
            >
              Call {siteContent.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
