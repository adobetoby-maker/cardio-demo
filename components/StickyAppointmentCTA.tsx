'use client'

import { siteContent } from '@/lib/content'

export function StickyAppointmentCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 lg:hidden" aria-label="Quick contact">
      <a
        href={`tel:${siteContent.phone}`}
        className="flex items-center gap-2 px-4 py-3 rounded-full text-white text-sm font-bold shadow-2xl transition-transform duration-200 hover:scale-105 cursor-pointer relative"
        style={{ backgroundColor: siteContent.accentColor }}
        aria-label={`Call us at ${siteContent.phone}`}
      >
        {/* Pulsing ring animation */}
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-30"
          style={{ backgroundColor: siteContent.accentColor }}
          aria-hidden="true"
        />

        {/* Phone icon */}
        <svg
          className="w-5 h-5 relative z-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          style={{ color: '#1a1a1a' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>

        <span className="relative z-10 text-gray-900">Call Now</span>
      </a>
    </div>
  )
}
