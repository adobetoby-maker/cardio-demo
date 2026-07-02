'use client'

import { useState } from 'react'
import Link from 'next/link'
import { siteContent } from '@/lib/content'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Conditions', href: '/conditions' },
  { label: 'Appointments', href: '/appointments' },
  { label: 'Contact', href: '/contact' },
  { label: 'Patient Resources', href: '/patient-resources' },
  { label: 'Blog', href: '/blog' },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 bg-white shadow-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Practice Name */}
          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0"
          >
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: siteContent.primaryColor }}
              aria-hidden="true"
            >
              ♥
            </span>
            <span
              className="font-bold text-base sm:text-lg leading-tight"
              style={{ color: siteContent.primaryColor }}
            >
              {siteContent.practiceName}
            </span>
          </Link>

          {/* Desktop nav links — center */}
          <div className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors duration-150"
                style={{ ['--hover-color' as string]: siteContent.secondaryColor }}
                onMouseEnter={e => (e.currentTarget.style.color = siteContent.secondaryColor)}
                onMouseLeave={e => (e.currentTarget.style.color = '')}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA — right */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:2085550398"
              className="text-sm font-semibold"
              style={{ color: siteContent.primaryColor }}
              onMouseEnter={e => (e.currentTarget.style.color = siteContent.secondaryColor)}
              onMouseLeave={e => (e.currentTarget.style.color = siteContent.primaryColor)}
            >
              {siteContent.phone}
            </a>
            <Link
              href="/appointments"
              className="inline-flex items-center px-4 py-2 rounded-md text-sm font-bold text-white transition-colors duration-150 cursor-pointer"
              style={{ backgroundColor: siteContent.primaryColor }}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-150 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-red-50 rounded-md transition-colors duration-150"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-2 border-t border-gray-100 space-y-2">
              <a
                href="tel:2085550398"
                className="block px-3 py-2 text-base font-semibold rounded-md transition-colors duration-150"
                style={{ color: siteContent.primaryColor }}
              >
                {siteContent.phone}
              </a>
              <Link
                href="/appointments"
                className="block w-full text-center px-4 py-3 rounded-md text-base font-bold text-white transition-colors duration-150 cursor-pointer"
                style={{ backgroundColor: siteContent.primaryColor }}
                onClick={() => setMobileOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
