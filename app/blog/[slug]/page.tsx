import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { siteContent } from '@/lib/content'
import { blogPosts } from '@/lib/blog-posts'

interface Params {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: `${post.title} | ${siteContent.practiceName}`,
    description: post.excerpt,
    keywords: post.keyword,
    alternates: { canonical: `${siteContent.website}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteContent.website}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      siteName: siteContent.practiceName,
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt },
  }
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Article JSON-LD
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: siteContent.physicianTitle,
      worksFor: { '@type': 'MedicalOrganization', name: siteContent.practiceName },
    },
    publisher: {
      '@type': 'Organization',
      name: siteContent.practiceName,
      url: siteContent.website,
    },
    datePublished: post.date,
    url: `${siteContent.website}/blog/${post.slug}`,
    keywords: post.keyword,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteContent.website}/blog/${post.slug}` },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteContent.website },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteContent.website}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${siteContent.website}/blog/${post.slug}` },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Page header */}
      <section
        className="py-12"
        style={{ backgroundColor: siteContent.primaryColor }}
        aria-label="Article header"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-150">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors duration-150">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li aria-current="page" className="text-white font-medium truncate max-w-[200px]">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-4">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span aria-hidden="true">&bull;</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white max-w-3xl leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article body */}
      <article className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Author byline */}
            <div className="flex items-center gap-3 pb-6 mb-6 border-b border-gray-100">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{ backgroundColor: siteContent.primaryColor }}
                aria-hidden="true"
              >
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-500">
                  {siteContent.physicianTitle} &bull; {siteContent.practiceName}
                </p>
              </div>
            </div>

            {/* Excerpt / lead */}
            <p
              className="text-lg text-gray-600 italic mb-8 leading-relaxed border-l-4 pl-4"
              style={{ borderLeftColor: siteContent.primaryColor }}
            >
              {post.excerpt}
            </p>

            {/* Body HTML */}
            <div
              className="prose prose-gray max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.body }}
              style={{
                '--tw-prose-headings': siteContent.primaryColor,
                '--tw-prose-links': siteContent.secondaryColor,
              } as React.CSSProperties}
            />

            {/* About the Author */}
            <div
              className="mt-12 rounded-2xl p-6 border"
              style={{ borderColor: siteContent.accentColor, backgroundColor: siteContent.bgLightColor }}
            >
              <h2 className="text-base font-bold mb-3" style={{ color: siteContent.primaryColor }}>
                About the Author
              </h2>
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ backgroundColor: siteContent.primaryColor }}
                  aria-hidden="true"
                >
                  MT
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{siteContent.physicianName}</p>
                  <p className="text-sm text-gray-500 mb-2">{siteContent.physicianTitle}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Dr. Torres is a board-certified interventional cardiologist with 22 years of experience treating complex cardiovascular conditions.
                    He completed his medical training at Johns Hopkins and his fellowship at the Cleveland Clinic.
                    He practices at Nampa Cardiology Associates, serving patients throughout the Treasure Valley.
                    {/* [DEMO] update if physician bio differs */}
                  </p>
                </div>
              </div>
            </div>

            {/* Appointment CTA */}
            <div
              className="mt-8 rounded-2xl p-8 text-white"
              style={{ backgroundColor: siteContent.primaryColor }}
            >
              <h2 className="text-xl font-bold mb-2">
                Have Cardiac Concerns? Schedule a Consultation
              </h2>
              <p className="text-white/80 text-sm mb-5">
                Dr. Torres and the team at {siteContent.practiceName} provide expert cardiac care close to home.
                Urgent consultations available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/appointments"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold bg-white hover:bg-white/90 transition-colors duration-150 cursor-pointer"
                  style={{ color: siteContent.primaryColor }}
                >
                  Book Appointment
                </Link>
                <a
                  href="tel:2085550398"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold border-2 border-white text-white hover:bg-white/10 transition-colors duration-150 cursor-pointer"
                >
                  Call (208) 555-0398
                </a>
              </div>
            </div>

            {/* Back to blog */}
            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:underline transition-colors duration-150"
                style={{ color: siteContent.secondaryColor }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
