import Link from 'next/link'
import { HeroSection } from '@/components/HeroSection'
import { ServiceCard } from '@/components/ServiceCard'
import { PhysicianCard } from '@/components/PhysicianCard'
import { TestimonialCard } from '@/components/TestimonialCard'
import { InsuranceLogos } from '@/components/InsuranceLogos'
import { siteContent } from '@/lib/content'

const trustItems = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    headline: 'Expert Care',
    text: `Board-certified ${siteContent.specialty} specialists with ${siteContent.physicianYears}+ years of experience providing the highest standard of care.`,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    headline: 'Proven Results',
    text: `Our evidence-based approach to ${siteContent.specialty.toLowerCase()} care consistently delivers measurable improvements in patient health outcomes.`,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    headline: 'Patient-First Approach',
    text: `We listen, understand, and partner with you throughout your ${siteContent.specialty.toLowerCase()} care journey — always keeping your health and comfort first.`,
  },
]

export default function HomePage() {
  const previewServices = siteContent.services.slice(0, 6)

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Why Choose Us */}
      <section className="py-16 bg-white" aria-labelledby="why-choose-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="why-choose-heading"
              className="text-2xl sm:text-3xl font-bold mb-3"
              style={{ color: siteContent.primaryColor }}
            >
              Why Choose {siteContent.practiceName}?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              {siteContent.mission}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustItems.map((item) => (
              <div
                key={item.headline}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-200"
              >
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 text-white"
                  style={{ backgroundColor: siteContent.secondaryColor }}
                >
                  {item.icon}
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: siteContent.primaryColor }}
                >
                  {item.headline}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section
        className="py-16"
        style={{ backgroundColor: siteContent.bgLightColor }}
        aria-labelledby="services-preview-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
            <div>
              <h2
                id="services-preview-heading"
                className="text-2xl sm:text-3xl font-bold mb-1"
                style={{ color: siteContent.primaryColor }}
              >
                Our Services
              </h2>
              <p className="text-gray-600">
                Comprehensive {siteContent.specialty} care under one roof.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-semibold hover:underline transition-colors duration-150 whitespace-nowrap cursor-pointer"
              style={{ color: siteContent.secondaryColor }}
            >
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewServices.map((service) => (
              <ServiceCard
                key={service.name}
                name={service.name}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Physician Teaser */}
      <section className="py-16 bg-white" aria-labelledby="physician-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              id="physician-heading"
              className="text-2xl sm:text-3xl font-bold mb-2"
              style={{ color: siteContent.primaryColor }}
            >
              Meet Your Doctor
            </h2>
            <p className="text-gray-600">
              Experienced, compassionate care you can count on.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <PhysicianCard />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-16"
        style={{ backgroundColor: siteContent.bgLightColor }}
        aria-labelledby="testimonials-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              id="testimonials-heading"
              className="text-2xl sm:text-3xl font-bold mb-2"
              style={{ color: siteContent.primaryColor }}
            >
              What Our Patients Say
            </h2>
            <p className="text-gray-600">Real stories from real patients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteContent.testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <InsuranceLogos />

      {/* New vs Existing Patient split CTA */}
      <section className="py-16 bg-white" aria-labelledby="patient-cta-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="patient-cta-heading"
            className="text-2xl sm:text-3xl font-bold text-center mb-10"
            style={{ color: siteContent.primaryColor }}
          >
            Ready to Get Started?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* New Patient */}
            <div
              className="rounded-2xl p-8 text-center text-white"
              style={{ backgroundColor: siteContent.primaryColor }}
            >
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">New Patient?</h3>
              <p className="text-white/80 text-sm mb-6">
                Welcome! Book your first appointment and let us take care of you.
              </p>
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center w-full px-5 py-2.5 rounded-lg text-sm font-bold transition-colors duration-150 cursor-pointer bg-white hover:bg-white/90"
                style={{ color: siteContent.primaryColor }}
              >
                Book New Patient Appointment
              </Link>
            </div>

            {/* Existing Patient */}
            <div className="rounded-2xl p-8 text-center border-2 border-gray-200 hover:border-blue-300 transition-colors duration-200">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: siteContent.bgLightColor }}
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{ color: siteContent.primaryColor }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: siteContent.primaryColor }}
              >
                Existing Patient?
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Access your patient portal, request refills, or schedule a follow-up.
              </p>
              <a
                href={siteContent.patientPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-5 py-2.5 rounded-lg text-sm font-bold border-2 transition-colors duration-150 cursor-pointer"
                style={{
                  borderColor: siteContent.primaryColor,
                  color: siteContent.primaryColor,
                }}
              >
                Access Patient Portal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-12"
        style={{
          background: `linear-gradient(135deg, ${siteContent.primaryColor}, ${siteContent.secondaryColor})`,
        }}
        aria-labelledby="cta-banner-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-banner-heading" className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            {siteContent.bookingNote} {siteContent.availableSlots}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2085550398"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all duration-200 cursor-pointer shadow-lg bg-white hover:bg-white/90"
              style={{ color: siteContent.primaryColor }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {siteContent.phone}
            </a>
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold border-2 border-white text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
