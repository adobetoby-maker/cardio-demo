'use client'

import { useState } from 'react'
import Link from 'next/link'
import { siteContent } from '@/lib/content'

export function PhysicianCard() {
  const [expanded, setExpanded] = useState(false)

  const initials = siteContent.physicianName
    .split(' ')
    .filter((part) => part !== 'Dr.' && !part.includes(','))
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 2)

  const bio = siteContent.physicianBio
  const shortBio = bio.length > 150 ? bio.slice(0, 150) + '…' : bio
  const showToggle = bio.length > 150

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        {/* Photo placeholder */}
        <div
          className="w-full sm:w-48 lg:w-56 flex-shrink-0 flex items-center justify-center py-10 sm:py-0"
          style={{ backgroundColor: siteContent.primaryColor }}
          aria-label={`Photo of ${siteContent.physicianName}`}
          role="img"
        >
          <div className="text-center">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-3"
              style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: 'white',
                border: '3px solid rgba(255,255,255,0.3)',
              }}
            >
              {initials}
            </div>
            <p className="text-white/60 text-xs">
              {/* [DEMO] Replace with actual physician photo */}
              Photo Coming Soon
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between flex-grow">
          <div>
            <h3
              className="text-xl font-bold mb-1"
              style={{ color: siteContent.primaryColor }}
            >
              {siteContent.physicianName}
            </h3>
            <p
              className="text-sm font-semibold mb-1"
              style={{ color: siteContent.secondaryColor }}
            >
              {siteContent.physicianTitle}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              {siteContent.physicianYears}+ Years of Experience
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-1">
              {expanded ? bio : shortBio}
            </p>
            {showToggle && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-sm font-semibold mt-1 cursor-pointer hover:underline transition-colors duration-150"
                style={{ color: siteContent.secondaryColor }}
                aria-expanded={expanded}
              >
                {expanded ? 'Read Less' : 'Read More'}
              </button>
            )}

            <div className="mt-4 flex items-start gap-2">
              <svg
                className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <p className="text-sm text-gray-500">{siteContent.physicianEducation}</p>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors duration-150 cursor-pointer"
              style={{ backgroundColor: siteContent.primaryColor }}
            >
              Meet {siteContent.physicianName.split(' ').slice(0, 2).join(' ')}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
