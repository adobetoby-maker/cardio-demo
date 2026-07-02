import type { Metadata } from 'next'
import Link from 'next/link'
import { siteContent } from '@/lib/content'
import { blogPosts } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: `Cardiology Health Blog | Nampa Cardiology Associates`,
  description: `Expert heart health articles from Dr. Michael Torres, MD, FACC — cardiologist in Nampa, Idaho. Heart attack signs, AFib treatment, heart disease prevention, and more.`,
  alternates: { canonical: `${siteContent.website}/blog` },
  openGraph: {
    title: `Cardiology Health Blog | Nampa Cardiology Associates`,
    description: `Evidence-based heart health education from Dr. Michael Torres, interventional cardiologist in Nampa, Idaho.`,
    url: `${siteContent.website}/blog`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <section
        className="py-12"
        style={{ backgroundColor: siteContent.primaryColor }}
        aria-label="Page header"
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
              <li aria-current="page" className="text-white font-medium">
                Blog
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Health Blog</h1>
          <p className="text-white/70 mt-2">
            Expert insights and health tips from {siteContent.physicianName}.
          </p>
        </div>
      </section>

      {/* Blog post grid */}
      <section className="py-16" aria-labelledby="blog-grid-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="blog-grid-heading" className="sr-only">
            Blog Posts
          </h2>

          {blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <p className="text-gray-500">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col border border-gray-100"
                >
                  {/* Card header color bar */}
                  <div
                    className="h-2"
                    style={{ backgroundColor: siteContent.primaryColor }}
                    aria-hidden="true"
                  />

                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category badge + meta */}
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span
                        className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: siteContent.secondaryColor }}
                      >
                        {post.keyword || 'Cardiology'}
                      </span>
                      <time dateTime={post.date} className="text-xs text-gray-400">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span aria-hidden="true" className="text-gray-300">&bull;</span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-lg font-bold mb-2 leading-snug"
                      style={{ color: siteContent.primaryColor }}
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:underline transition-colors duration-150"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                      {post.excerpt}
                    </p>

                    {/* Author + CTA row */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                          style={{ backgroundColor: siteContent.primaryColor }}
                          aria-hidden="true"
                        >
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-xs text-gray-600">{post.author}</span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold hover:underline transition-colors duration-150"
                        style={{ color: siteContent.secondaryColor }}
                        aria-label={`Read more about ${post.title}`}
                      >
                        Read More
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* CTA to book */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              Have a health question? Our team is ready to help.
            </p>
            <Link
              href="/appointments"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white transition-colors duration-150 cursor-pointer"
              style={{ backgroundColor: siteContent.primaryColor }}
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
