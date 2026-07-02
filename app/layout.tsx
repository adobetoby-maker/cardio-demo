import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { StickyAppointmentCTA } from '@/components/StickyAppointmentCTA'
import { JsonLd } from '@/components/JsonLd'
import { siteContent } from '@/lib/content'

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.website || 'https://demo.local'),
  title: {
    default: siteContent.seoTitle,
    template: `%s | ${siteContent.practiceName}`,
  },
  description: siteContent.seoDescription,
  keywords: siteContent.seoKeywords,
  openGraph: {
    title: siteContent.seoTitle,
    description: siteContent.seoDescription,
    url: siteContent.website,
    siteName: siteContent.practiceName,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.seoTitle,
    description: siteContent.seoDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className="font-sans antialiased text-gray-900 bg-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <StickyAppointmentCTA />
      </body>
    </html>
  )
}
