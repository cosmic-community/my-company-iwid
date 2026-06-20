// app/services/[slug]/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  getServiceBySlug,
  getSiteSettings,
  getMetafieldValue,
} from '@/lib/cosmic'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = await getServiceBySlug(slug)
  if (!service) {
    return { title: 'Service Not Found | Lemon Team Moving' }
  }
  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const desc =
    getMetafieldValue(service.metadata?.short_description) ||
    `Professional ${name} services in NYC from Lemon Team Moving.`
  return {
    title: `${name} | Lemon Team Moving — Movers NYC`,
    description: desc,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const [service, settings] = await Promise.all([
    getServiceBySlug(slug),
    getSiteSettings(),
  ])

  if (!service) {
    notFound()
  }

  const phone = getMetafieldValue(settings?.metadata?.phone_number)
  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const icon = getMetafieldValue(service.metadata?.icon) || '📦'
  const fullDesc = getMetafieldValue(service.metadata?.full_description)
  const shortDesc = getMetafieldValue(service.metadata?.short_description)
  const image = service.metadata?.featured_image?.imgix_url

  return (
    <>
      <section className="bg-lemon-50 py-14 border-b border-lemon-100">
        <div className="max-w-5xl mx-auto container-px">
          <Link
            href="/services"
            className="text-sm font-semibold text-gray-600 hover:text-lemon-600"
          >
            ← Back to Services
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-5xl">{icon}</span>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900">{name}</h1>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto container-px">
          {image && (
            <img
              src={`${image}?w=2000&h=900&fit=crop&auto=format,compress`}
              alt={name}
              className="w-full rounded-2xl mb-10 object-cover max-h-96"
            />
          )}
          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            {(fullDesc || shortDesc) ? (
              (fullDesc || shortDesc).split(/\n\n+/).map((para, i) => (
                <p key={i}>{para}</p>
              ))
            ) : (
              <p>
                Trusted{' '}
                <a
                  href="https://lemonteamoving.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lemon-600 font-semibold hover:underline"
                >
                  movers NYC
                </a>{' '}
                offering reliable {name.toLowerCase()} across New York City, Westchester
                County, and New Rochelle.
              </p>
            )}
          </div>

          <div className="mt-12 bg-gray-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold text-white">
              Ready to book your {name.toLowerCase()}?
            </h2>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-lemon-400 hover:bg-lemon-500 text-gray-900 font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Get Free Quote
              </Link>
              {phone && (
                <a
                  href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                  className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-4 rounded-lg transition-colors"
                >
                  📞 Call Now
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}