import { siteContent } from '@/lib/content'

export function InsuranceLogos() {
  return (
    <section className="py-12 bg-gray-50" aria-labelledby="insurance-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2
            id="insurance-heading"
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{ color: siteContent.primaryColor }}
          >
            We Accept Your Insurance
          </h2>
          <p className="text-gray-600">
            We work with most major insurance providers to make care accessible.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {siteContent.insurance.map((plan) => (
            <div
              key={plan}
              className="flex items-center justify-center px-5 py-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
              aria-label={`Accepts ${plan}`}
            >
              <span
                className="text-sm font-semibold"
                style={{ color: siteContent.primaryColor }}
              >
                {plan}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            {"Don't see your plan?"}
            {' '}
            <a
              href={`tel:${siteContent.phone}`}
              className="font-semibold hover:underline transition-colors duration-150"
              style={{ color: siteContent.secondaryColor }}
            >
              Call us at {siteContent.phone}
            </a>
            {' '}and we&apos;ll verify your coverage.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            We also offer self-pay options. Ask about our payment plans.
          </p>
        </div>
      </div>
    </section>
  )
}
