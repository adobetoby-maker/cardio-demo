import type { Metadata } from 'next'
import Link from 'next/link'
import { siteContent } from '@/lib/content'

export const metadata: Metadata = {
  title: `Cardiology Services Nampa ID | ${siteContent.practiceName}`,
  description: `Cardiac catheterization, echocardiography, stress testing, Holter monitoring, pacemaker implantation, heart failure management, and preventive cardiology in Nampa, ID.`,
  openGraph: {
    title: `Cardiology Services Nampa ID | ${siteContent.practiceName}`,
    description: `Complete cardiac care from catheterization to preventive cardiology. Dr. Michael Torres, Board-Certified Interventional Cardiologist, Nampa, Idaho.`,
    url: `${siteContent.website}/services`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: {
    canonical: `${siteContent.website}/services`,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteContent.website },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteContent.website}/services` },
  ],
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@graph': siteContent.services.map((service) => ({
    '@type': 'MedicalProcedure',
    name: service.name,
    description: service.description,
    procedureType: 'https://schema.org/MedicalProcedureType',
    provider: {
      '@type': 'MedicalOrganization',
      name: siteContent.practiceName,
      telephone: siteContent.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteContent.address,
        addressLocality: siteContent.city,
        addressRegion: siteContent.state,
        postalCode: siteContent.zip,
        addressCountry: 'US',
      },
    },
  })),
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
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
                Services
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Our Services</h1>
          <p className="text-white/70 mt-2 max-w-xl">
            Comprehensive {siteContent.specialty} services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16" aria-labelledby="services-grid-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="services-grid-heading" className="sr-only">
            All Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteContent.services.map((service, index) => (
              <article
                key={service.name}
                id={`service-${index}`}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 border-l-4"
                style={{ borderLeftColor: siteContent.primaryColor }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-5"
                  style={{ backgroundColor: siteContent.primaryColor }}
                  aria-hidden="true"
                >
                  {service.icon ? service.icon.charAt(0).toUpperCase() : 'S'}
                </div>

                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: siteContent.primaryColor }}
                >
                  {service.name}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>

                <Link
                  href="/appointments"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150 cursor-pointer hover:underline"
                  style={{ color: siteContent.secondaryColor }}
                >
                  Book for {service.name}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-14 rounded-2xl p-10 text-center text-white"
            style={{ backgroundColor: siteContent.primaryColor }}
          >
            <h2 className="text-2xl font-bold mb-3">
              Questions About Our Services?
            </h2>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              Our team is here to help you understand your options and find the right care plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-colors duration-150 cursor-pointer"
                style={{ backgroundColor: 'white', color: siteContent.primaryColor }}
              >
                Book Appointment
              </Link>
              <a
                href="tel:2085550398"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold border-2 border-white text-white hover:bg-white/10 transition-colors duration-150 cursor-pointer"
              >
                Call {siteContent.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
