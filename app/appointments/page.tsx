import type { Metadata } from 'next'
import Link from 'next/link'
import { siteContent } from '@/lib/content'
import { AppointmentForm } from '@/components/AppointmentForm'

export const metadata: Metadata = {
  title: `Book Appointment | Nampa Cardiology Associates`,
  description: `Schedule an appointment with Dr. Michael Torres, interventional cardiologist in Nampa, ID. Urgent cardiac consultations available within 24 hours. Call (208) 555-0398.`,
  alternates: { canonical: `${siteContent.website}/appointments` },
  openGraph: {
    title: `Book Appointment | Nampa Cardiology Associates`,
    description: `Schedule with Dr. Torres — urgent cardiac consultations available. New and existing patients welcome in Nampa, Idaho.`,
    url: `${siteContent.website}/appointments`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

export default function AppointmentsPage() {
  return (
    <div className="min-h-screen bg-white">
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
                Book Appointment
              </li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4 border border-white/30 bg-white/10">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
            {siteContent.urgency}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Book an Appointment</h1>
          <p className="text-white/70 mt-2">{siteContent.bookingNote}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* Left: Form */}
            <div className="lg:col-span-2">
              {/* New vs Existing Patient Selection */}
              <div className="mb-8">
                <h2
                  className="text-xl font-bold mb-4"
                  style={{ color: siteContent.primaryColor }}
                >
                  Select Patient Type
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="rounded-xl p-5 border-2 text-center cursor-pointer transition-all duration-150 hover:shadow-md"
                    style={{ borderColor: siteContent.primaryColor, backgroundColor: `${siteContent.bgLightColor}` }}
                  >
                    <svg
                      className="w-8 h-8 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={{ color: siteContent.primaryColor }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    <p className="font-semibold text-sm" style={{ color: siteContent.primaryColor }}>
                      New Patient
                    </p>
                  </div>
                  <div className="rounded-xl p-5 border-2 border-gray-200 text-center cursor-pointer transition-all duration-150 hover:border-gray-300 hover:shadow-md">
                    <svg
                      className="w-8 h-8 mx-auto mb-2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="font-semibold text-sm text-gray-600">Existing Patient</p>
                  </div>
                </div>
              </div>

              {/* Booking form */}
              {/* [DEMO] Connect to scheduling system: Zocdoc, SimplePractice, or custom API */}
              <AppointmentForm
                primaryColor={siteContent.primaryColor}
                insurance={siteContent.insurance}
              />
            </div>

            {/* Right sidebar */}
            <aside className="space-y-6">
              {/* Contact alternatives */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3
                  className="font-bold mb-4"
                  style={{ color: siteContent.primaryColor }}
                >
                  Prefer to Call?
                </h3>
                <a
                  href="tel:2085550398"
                  className="flex items-center gap-3 text-sm font-semibold hover:underline transition-colors duration-150"
                  style={{ color: siteContent.secondaryColor }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteContent.phone}
                </a>
              </div>

              {/* Office hours */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3
                  className="font-bold mb-4"
                  style={{ color: siteContent.primaryColor }}
                >
                  Office Hours
                </h3>
                <ul className="text-sm text-gray-600 space-y-1.5">
                  <li className="flex justify-between">
                    <span>Mon – Fri</span>
                    <span className="font-medium">8 AM – 5 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9 AM – 1 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-red-500">Closed</span>
                  </li>
                </ul>
                {/* [DEMO] Update with real office hours */}
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden">
                <div
                  className="w-full h-48 flex items-center justify-center bg-gray-200"
                  aria-label="Map showing practice location"
                  role="img"
                >
                  <div className="text-center text-gray-500">
                    <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-xs">{siteContent.address}</p>
                    <p className="text-xs">{siteContent.city}, {siteContent.state}</p>
                    {/* [DEMO] Embed Google Maps iframe here */}
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-gray-50 rounded-xl p-5">
                <address className="text-sm text-gray-600 not-italic">
                  <strong className="block mb-1 text-gray-900">
                    {siteContent.practiceName}
                  </strong>
                  {siteContent.address}
                  <br />
                  {siteContent.city}, {siteContent.state} {siteContent.zip}
                </address>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
