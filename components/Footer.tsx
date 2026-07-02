import Link from 'next/link'
import { siteContent } from '@/lib/content'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Conditions', href: '/conditions' },
  { label: 'Appointments', href: '/appointments' },
  { label: 'Contact', href: '/contact' },
  { label: 'Patient Resources', href: '/patient-resources' },
  { label: 'Blog', href: '/blog' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">

          {/* Column 1: Practice info */}
          <div>
            <h3 className="text-lg font-bold mb-1" style={{ color: '#fee2e2' }}>
              {siteContent.practiceName}
            </h3>
            <p className="text-white/60 text-sm mb-4 italic">{siteContent.tagline}</p>
            <p className="text-white/50 text-xs leading-relaxed mb-4">
              {siteContent.address}<br />
              {siteContent.city}, {siteContent.state} {siteContent.zip}
            </p>
            <a
              href="tel:2085550398"
              className="text-white/80 hover:text-white text-sm font-semibold transition-colors duration-150 block mb-1"
            >
              {siteContent.phone}
            </a>
            <a
              href={`mailto:${siteContent.email}`}
              className="text-white/50 hover:text-white/80 text-xs transition-colors duration-150 block"
            >
              {siteContent.email}
            </a>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours + social */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">
              Office Hours
            </h4>
            {/* [DEMO] replace with real office hours */}
            <table className="w-full text-sm text-white/70 mb-6">
              <tbody>
                <tr>
                  <td className="pr-4 py-0.5">Monday – Friday</td>
                  <td className="text-white/50">8:00am – 5:00pm</td>
                </tr>
                <tr>
                  <td className="pr-4 py-0.5">Saturday</td>
                  <td className="text-white/50">9:00am – 12:00pm</td>
                </tr>
                <tr>
                  <td className="pr-4 py-0.5">Sunday</td>
                  <td className="text-white/50">Closed</td>
                </tr>
              </tbody>
            </table>

            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-3">
              Connect
            </h4>
            {/* [DEMO] replace with real social media links */}
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook [DEMO]"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-150"
              >
                <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn [DEMO]"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-150"
              >
                <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Google Business Profile [DEMO]"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-150"
              >
                <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Insurance row */}
        <div className="py-6 border-b border-white/10">
          <p className="text-xs text-white/30 uppercase tracking-widest mb-3 text-center">
            Accepted Insurance
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {siteContent.insurance.map((plan) => (
              <span
                key={plan}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/60"
              >
                {plan}
              </span>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-5 pb-2">
          <p className="text-white/30 text-xs text-center leading-relaxed max-w-3xl mx-auto">
            This website is for informational purposes only and does not constitute medical advice.
            If you are experiencing a medical emergency, call 911 or go to your nearest emergency room.
            This information is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>

        {/* Copyright bar */}
        <div className="pt-4 text-center text-white/25 text-xs">
          &copy; {currentYear} {siteContent.practiceName} | ADA Compliant |{' '}
          {/* [DEMO] replace with real privacy policy and HIPAA notice URLs */}
          <a href="#" className="hover:text-white/50 transition-colors duration-150">Privacy Policy</a>{' '}|{' '}
          <a href="#" className="hover:text-white/50 transition-colors duration-150">HIPAA Notice of Privacy Practices</a>
        </div>
      </div>
    </footer>
  )
}
