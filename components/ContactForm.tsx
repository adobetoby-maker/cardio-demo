'use client'

import React, { useState } from 'react'

interface ContactFormProps {
  primaryColor: string
}

export function ContactForm({ primaryColor }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="py-10 text-center">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: primaryColor + '1a' }}
        >
          <svg className="w-7 h-7" fill="none" stroke={primaryColor} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold mb-2" style={{ color: primaryColor }}>
          Message Sent
        </h3>
        <p className="text-gray-600 text-sm max-w-xs mx-auto">
          We&apos;ll get back to you within one business day. For urgent matters, please call us directly.
        </p>
      </div>
    )
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      aria-label="Contact form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contactName"
            type="text"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            id="contactPhone"
            type="tel"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
            placeholder="(208) 555-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="contactEmail"
          type="email"
          required
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label htmlFor="contactMessage" className="block text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contactMessage"
          rows={5}
          required
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm resize-none"
          placeholder="How can we help you?"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 px-6 rounded-lg text-sm font-bold text-white transition-all duration-200 cursor-pointer hover:opacity-90 shadow-md"
        style={{ backgroundColor: primaryColor }}
      >
        Send Message
      </button>

      <p className="text-xs text-gray-500">
        We respond within one business day. For urgent matters, please call us directly.
      </p>
    </form>
  )
}
