import type { Metadata } from 'next'
import Link from 'next/link'
import { PhysicianCard } from '@/components/PhysicianCard'
import { siteContent } from '@/lib/content'

export const metadata: Metadata = {
  title: `About Dr. Torres | ${siteContent.practiceName}`,
  description: `Meet Dr. Michael A. Torres, MD, FACC — board-certified interventional cardiologist in Nampa, ID. Johns Hopkins MD, Cleveland Clinic fellowship. 22 years of cardiac expertise.`,
  alternates: { canonical: `${siteContent.website}/about` },
  openGraph: {
    title: `About Dr. Torres | ${siteContent.practiceName}`,
    description: `Meet Dr. Michael A. Torres, MD, FACC — board-certified interventional cardiologist in Nampa, ID. Johns Hopkins MD, Cleveland Clinic fellowship.`,
    url: `${siteContent.website}/about`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

const physicianJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Michael A. Torres',
  credentials: 'MD, FACC',
  jobTitle: 'Interventional Cardiologist',
  description:
    'Board-certified interventional cardiologist with 22 years of experience. Fellowship trained at Cleveland Clinic. MD from Johns Hopkins School of Medicine. Serving Nampa, Idaho.',
  medicalSpecialty: {
    '@type': 'MedicalSpecialty',
    name: 'Cardiovascular',
  },
  worksFor: {
    '@type': ['MedicalOrganization', 'LocalBusiness'],
    name: 'Nampa Cardiology Associates',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4801 Caldwell Blvd',
      addressLocality: 'Nampa',
      addressRegion: 'ID',
      postalCode: '83651',
      addressCountry: 'US',
    },
  },
  alumniOf: [
    { '@type': 'EducationalOrganization', name: 'Johns Hopkins School of Medicine' },
    { '@type': 'MedicalOrganization', name: 'Cleveland Clinic' },
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Board Certification', recognizedBy: { '@type': 'Organization', name: 'American Board of Internal Medicine — Cardiovascular Disease' } },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Fellowship', recognizedBy: { '@type': 'Organization', name: 'American College of Cardiology (FACC)' } },
  ],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
      />
      {/* Page header */}
      <section
        className="py-12"
        style={{ backgroundColor: siteContent.primaryColor }}
        aria-label="Page header"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
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
                About
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">About Us</h1>
          <p className="text-white/70 mt-2 max-w-xl">
            Serving {siteContent.city}, {siteContent.state} with trusted {siteContent.specialty} care.
          </p>
        </div>
      </section>

      {/* Practice Story */}
      <section className="py-16" aria-labelledby="story-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2
              id="story-heading"
              className="text-2xl font-bold mb-4"
              style={{ color: siteContent.primaryColor }}
            >
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{siteContent.story}</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section
        className="py-14"
        style={{ backgroundColor: siteContent.bgLightColor }}
        aria-labelledby="mission-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <div className="flex gap-4 items-start">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: siteContent.primaryColor }}
              aria-hidden="true"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h2
                id="mission-heading"
                className="text-xl font-bold mb-3"
                style={{ color: siteContent.primaryColor }}
              >
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg italic">
                &ldquo;{siteContent.mission}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Physician Card */}
      <section className="py-16" aria-labelledby="physician-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="physician-heading"
            className="text-2xl font-bold mb-8 text-center"
            style={{ color: siteContent.primaryColor }}
          >
            Meet Our Physician
          </h2>
          <div className="max-w-3xl mx-auto">
            <PhysicianCard />
          </div>

          {/* Extended credentials / education */}
          <div className="max-w-3xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-base font-bold mb-3" style={{ color: siteContent.primaryColor }}>
                Education
              </h3>
              <ul className="text-sm text-gray-600 space-y-1.5 list-none">
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: siteContent.secondaryColor }} aria-hidden="true" />
                  Johns Hopkins School of Medicine, MD
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: siteContent.secondaryColor }} aria-hidden="true" />
                  Cleveland Clinic — Interventional Cardiology Fellowship
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-base font-bold mb-3" style={{ color: siteContent.primaryColor }}>
                Board Certifications
              </h3>
              <ul className="text-sm text-gray-600 space-y-1.5 list-none">
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: siteContent.secondaryColor }} aria-hidden="true" />
                  Cardiovascular Disease (ABIM)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: siteContent.secondaryColor }} aria-hidden="true" />
                  Interventional Cardiology (ABIM)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: siteContent.secondaryColor }} aria-hidden="true" />
                  Fellow, American College of Cardiology (FACC)
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-base font-bold mb-3" style={{ color: siteContent.primaryColor }}>
                Hospital Affiliation
              </h3>
              <p className="text-sm text-gray-600 mb-2">{siteContent.hospital}</p>
              <div className="flex items-center gap-2 mt-3">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: siteContent.primaryColor }}
                >
                  {siteContent.physicianYears} Years Experience
                </span>
              </div>
            </div>
          </div>

          {/* Patients seen + reviews badges [DEMO] */}
          <div className="max-w-3xl mx-auto mt-8 flex flex-wrap gap-4 justify-center">
            {/* [DEMO] replace with real verified statistics */}
            <div className="flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-5 py-2">
              <svg className="w-4 h-4" style={{ color: siteContent.secondaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-semibold" style={{ color: siteContent.primaryColor }}>5,000+ Patients Seen</span>
            </div>
            <div className="flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-5 py-2">
              <svg className="w-4 h-4" fill="#fbbf24" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold" style={{ color: siteContent.primaryColor }}>5.0 Patient Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section
        className="py-14"
        style={{ backgroundColor: siteContent.bgLightColor }}
        aria-labelledby="location-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h2
            id="location-heading"
            className="text-2xl font-bold mb-8"
            style={{ color: siteContent.primaryColor }}
          >
            Location &amp; Hours
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">Address</h3>
              <address className="text-gray-600 text-sm not-italic leading-relaxed">
                {siteContent.address}
                <br />
                {siteContent.city}, {siteContent.state} {siteContent.zip}
                <br />
                <a
                  href={`tel:${siteContent.phone}`}
                  className="hover:underline mt-2 inline-block"
                  style={{ color: siteContent.secondaryColor }}
                >
                  {siteContent.phone}
                </a>
                <br />
                <a
                  href={`mailto:${siteContent.email}`}
                  className="hover:underline"
                  style={{ color: siteContent.secondaryColor }}
                >
                  {siteContent.email}
                </a>
              </address>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">Office Hours</h3>
              <ul className="text-gray-600 text-sm space-y-1.5">
                <li className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="font-medium">8:00 AM – 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM – 1:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-red-500">Closed</span>
                </li>
              </ul>
              {/* [DEMO] Update with real office hours */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white" aria-labelledby="about-cta-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="about-cta-heading"
            className="text-2xl font-bold mb-4"
            style={{ color: siteContent.primaryColor }}
          >
            Schedule an Appointment
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">{siteContent.bookingNote}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white transition-colors duration-150 cursor-pointer"
              style={{ backgroundColor: siteContent.primaryColor }}
            >
              Book Appointment
            </Link>
            <a
              href={`tel:${siteContent.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold border-2 transition-colors duration-150 cursor-pointer"
              style={{ borderColor: siteContent.primaryColor, color: siteContent.primaryColor }}
            >
              {siteContent.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
