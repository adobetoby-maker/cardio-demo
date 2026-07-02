'use client'

import React, { useState } from 'react'

interface AppointmentFormProps {
  primaryColor: string
  insurance: string[]
}

export function AppointmentForm({ primaryColor, insurance }: AppointmentFormProps) {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: primaryColor + '1a' }}
        >
          <svg className="w-8 h-8" fill="none" stroke={primaryColor} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2" style={{ color: primaryColor }}>
          Request Received
        </h3>
        <p className="text-gray-600 max-w-sm mx-auto">
          Thank you! Our office will contact you within one business day to confirm your appointment.
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
      aria-label="Appointment booking form"
    >
      <h2 className="text-xl font-bold mb-4" style={{ color: primaryColor }}>
        Your Information
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
            placeholder="Smith"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="dob"
            type="date"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
            placeholder="(208) 555-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label htmlFor="insurance" className="block text-sm font-medium text-gray-700 mb-1">
          Insurance Carrier
        </label>
        <select
          id="insurance"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm bg-white"
        >
          <option value="">Select your insurance carrier</option>
          <option value="bcbs">Blue Cross Blue Shield</option>
          <option value="aetna">Aetna</option>
          <option value="cigna">Cigna</option>
          <option value="uhc">United Healthcare</option>
          <option value="medicare">Medicare</option>
          <option value="medicaid">Medicaid</option>
          <option value="selecthealth">Select Health</option>
          <option value="tricare">Tricare</option>
          <option value="other">Other</option>
          <option value="selfpay">Self-Pay / No Insurance</option>
        </select>
      </div>

      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
          Reason for Visit <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="reason"
          rows={3}
          required
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm resize-none"
          placeholder="Briefly describe your symptoms or reason for the visit…"
        />
      </div>

      <div>
        <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Date
        </label>
        <input
          id="preferredDate"
          type="date"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
        />
      </div>

      <div>
        <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Time
        </label>
        <select
          id="preferredTime"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent text-sm bg-white"
        >
          <option value="">Any time</option>
          <option value="morning">Morning (8 AM – 12 PM)</option>
          <option value="afternoon">Afternoon (12 PM – 5 PM)</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-6 rounded-lg text-sm font-bold text-white transition-all duration-200 cursor-pointer hover:opacity-90 shadow-md"
        style={{ backgroundColor: primaryColor }}
      >
        Request Appointment
      </button>

      <p className="text-xs text-gray-500 text-center">
        By submitting, you agree to be contacted by our office. This is a request —
        not a confirmed appointment. We will call to confirm your date and time.
      </p>
    </form>
  )
}
