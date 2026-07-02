import Link from 'next/link'
import { siteContent } from '@/lib/content'

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background: `linear-gradient(135deg, ${siteContent.primaryColor} 0%, ${siteContent.secondaryColor} 100%)`,
      }}
      aria-label="Hero section"
    >
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25px 25px, white 2px, transparent 0)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            {/* Urgency badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
              {siteContent.urgency}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-2">
              {siteContent.practiceName}
            </h1>
            <p className="text-xl sm:text-2xl font-light text-white/80 mb-4 italic">
              &ldquo;{siteContent.tagline}&rdquo;
            </p>

            <p className="text-base sm:text-lg text-white/75 mb-8 leading-relaxed max-w-lg">
              {siteContent.patientJourney}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-base font-bold transition-all duration-200 cursor-pointer shadow-lg bg-white text-red-900 hover:bg-red-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold border-2 border-white/60 text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
              >
                Meet Dr. Torres
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Click-to-call */}
            <a
              href="tel:2085550398"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors duration-150"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {siteContent.phone}
            </a>
          </div>

          {/* Right: Physician photo */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20" style={{ minHeight: '360px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/doctor.jpg"
                alt={siteContent.heroImageAlt}
                className="w-full h-full object-cover object-top absolute inset-0"
                style={{ minHeight: '360px' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-10">
                <p className="text-white text-sm font-semibold">{siteContent.physicianName}</p>
                <p className="text-white/80 text-xs">{siteContent.physicianTitle}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-wrap justify-center sm:justify-start gap-6">
            {/* Star rating badge */}
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <div className="flex gap-0.5" aria-label="5 star rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4"
                    fill="#fbbf24"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold">5.0 Patient Rating</span>
            </div>

            {/* Years experience badge */}
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <svg
                className="w-4 h-4 text-white/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <span className="text-sm font-semibold">
                {siteContent.physicianYears}+ Years Experience
              </span>
            </div>

            {/* Accepting new patients badge */}
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <svg
                className="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-semibold">Accepting New Patients</span>
            </div>

            {/* Available slots */}
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <svg
                className="w-4 h-4 text-white/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-semibold">{siteContent.availableSlots}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
