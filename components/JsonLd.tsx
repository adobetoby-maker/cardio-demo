'use client'

import { siteContent } from '@/lib/content'

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(siteContent.jsonLd) }}
    />
  )
}
