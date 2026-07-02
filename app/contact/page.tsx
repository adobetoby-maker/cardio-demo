import type { Metadata } from 'next'
import Link from 'next/link'
import { siteContent } from '@/lib/content'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: `Contact Us | Nampa Cardiology Associates`,
  description: `Contact Nampa Cardiology Associates at 4801 Caldwell Blvd, Nampa, ID 83651. Call (208) 555-0398. Office hours Mon–Fri 8am–5pm, Sat 9am–12pm.`,
  alternates: { canonical: `${siteContent.website}/contact` },
  openGraph: {
    title: `Contact Us | Nampa Cardiology Associates`,
    description: `Visit Dr. Torres at 4801 Caldwell Blvd, Nampa, ID. Call (208) 555-0398 for appointments.`,
    url: `${siteContent.website}/contact`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalOrganization', 'LocalBusiness'],
  name: 'Nampa Cardiology Associates',
  url: 'https://nampacardiology.com',
  telephone: '+12085550398',
  email: 'info@nampacardiology.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4801 Caldwell Blvd',
    addressLocality: 'Nampa',
    addressRegion: 'ID',
    postalCode: '83651',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '43.5807',
    longitude: '-116.5636',
  },
  hasMap: 'https://maps.google.com/?q=4801+Caldwell+Blvd+Nampa+ID+83651',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '12:00' },
  ],
  priceRange: 'Accepts Insurance',
  medicalSpecialty: { '@type': 'MedicalSpecialty', name: 'Cardiovascular' },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
                Contact
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Contact Us</h1>
          <p className="text-white/70 mt-2">We&apos;d love to hear from you.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left: Contact info */}
            <div>
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: siteContent.primaryColor }}
              >
                Get in Touch
              </h2>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: siteContent.bgLightColor }}
                    aria-hidden="true"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: siteContent.primaryColor }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-0.5">Address</p>
                    <address className="text-gray-600 text-sm not-italic leading-relaxed">
                      {siteContent.address}
                      <br />
                      {siteContent.city}, {siteContent.state} {siteContent.zip}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: siteContent.bgLightColor }}
                    aria-hidden="true"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: siteContent.primaryColor }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-0.5">Phone</p>
                    <a
                      href="tel:2085550398"
                      className="text-sm transition-colors duration-150 hover:underline"
                      style={{ color: siteContent.secondaryColor }}
                    >
                      {siteContent.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: siteContent.bgLightColor }}
                    aria-hidden="true"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: siteContent.primaryColor }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-0.5">Email</p>
                    <a
                      href={`mailto:${siteContent.email}`}
                      className="text-sm transition-colors duration-150 hover:underline"
                      style={{ color: siteContent.secondaryColor }}
                    >
                      {siteContent.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: siteContent.bgLightColor }}
                    aria-hidden="true"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: siteContent.primaryColor }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-0.5">Hours</p>
                    {/* [DEMO] verify office hours with staff */}
                    <table className="text-sm text-gray-600">
                      <tbody>
                        <tr><td className="pr-4">Monday – Friday</td><td className="font-medium">8:00am – 5:00pm</td></tr>
                        <tr><td className="pr-4">Saturday</td><td className="font-medium">9:00am – 12:00pm</td></tr>
                        <tr><td className="pr-4 text-red-500">Sunday</td><td className="font-medium text-red-500">Closed</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div
                className="w-full h-56 rounded-xl flex items-center justify-center bg-gray-200 mb-4"
                aria-label="Map placeholder — embed Google Maps here"
                role="img"
              >
                <div className="text-center text-gray-500">
                  <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-xs font-medium">Google Maps</p>
                  <p className="text-xs text-gray-400 mt-0.5">{siteContent.address}, {siteContent.city}</p>
                  {/* [DEMO] Replace with: <iframe src="https://www.google.com/maps/embed?..." /> */}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 mt-2">
                <p className="text-sm font-semibold text-gray-800 mb-1">Getting Here</p>
                {/* [DEMO] replace with real parking and directions */}
                <p className="text-xs text-gray-500 leading-relaxed">
                  Located on Caldwell Blvd in Nampa. Free parking available on-site. Building entrance is on the south side.
                  Handicap accessible. Please arrive 15 minutes early for your first visit.
                </p>
              </div>
            </div>

            {/* Right: Contact form */}
            <div>
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: siteContent.primaryColor }}
              >
                Send a Message
              </h2>

              {/* [DEMO] Connect form to email service (Resend, SendGrid, Formspree, etc.) */}
              <ContactForm primaryColor={siteContent.primaryColor} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
