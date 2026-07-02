import Link from 'next/link'
import { siteContent } from '@/lib/content'
import * as Icons from 'lucide-react'

interface ServiceCardProps {
  name: string
  description: string
  icon: string
}

function ServiceIcon({ icon }: { icon: string }) {
  const iconName = icon
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('')
  const LucideIcon = (Icons as Record<string, unknown>)[iconName] as React.ComponentType<{ className?: string }> | undefined

  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-4"
      style={{ backgroundColor: siteContent.primaryColor }}
      aria-hidden="true"
    >
      {LucideIcon ? (
        <LucideIcon className="w-6 h-6" />
      ) : (
        <span className="font-bold text-lg">{icon.charAt(0).toUpperCase()}</span>
      )}
    </div>
  )
}

export function ServiceCard({ name, description, icon }: ServiceCardProps) {
  return (
    <div
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col border-t-4"
      style={{ borderTopColor: siteContent.primaryColor }}
    >
      <ServiceIcon icon={icon} />

      <h3
        className="text-base font-bold mb-2"
        style={{ color: siteContent.primaryColor }}
      >
        {name}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed flex-grow">{description}</p>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <Link
          href="/services"
          className="inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-150 cursor-pointer hover:underline"
          style={{ color: siteContent.secondaryColor }}
          aria-label={`Learn more about ${name}`}
        >
          Learn More
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
  )
}
