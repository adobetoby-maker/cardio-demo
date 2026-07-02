'use client'

import { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
}

interface PatientResourcesClientProps {
  faq: FaqItem[]
  primaryColor: string
}

function FaqAccordion({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)
  const id = `faq-${index}`

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        id={`${id}-btn`}
        className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-gray-50 transition-colors duration-150"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="text-sm font-semibold text-gray-800 pr-4">{question}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div
          id={id}
          role="region"
          aria-labelledby={`${id}-btn`}
          className="px-5 pb-5 border-t border-gray-100"
        >
          <p className="text-gray-600 text-sm leading-relaxed mt-4">{answer}</p>
        </div>
      )}
    </div>
  )
}

export function PatientResourcesClient({ faq, primaryColor: _primaryColor }: PatientResourcesClientProps) {
  return (
    <div className="space-y-3">
      {faq.map((item, index) => (
        <FaqAccordion key={item.question} question={item.question} answer={item.answer} index={index} />
      ))}
    </div>
  )
}
