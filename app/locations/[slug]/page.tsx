// app/locations/[slug]/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  getLocationBySlug,
  getSiteSettings,
  getMetafieldValue,
} from '@/lib/cosmic'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const location = await getLocationBySlug(slug)
  if (!location) {
    return { title: 'Location Not Found | Lemon Team Moving' }
  }
  const name = getMetafieldValue(location.metadata?.location_name) || location.title
  const desc =
    getMetafieldValue(location.metadata?.seo_description) ||
    `Professional moving services in ${name} from Lemon Team Moving.`
  return {
    title: `${name} | Lemon Team Moving — Movers NYC`,
    description: desc,
  }
}

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const [location, settings] = await Promise.all([
    getLocationBySlug(slug),
    getSiteSettings(),
  ])

  if (!location) {
    notFound()
  }

  const phone = getMetafieldValue(settings?.metadata?.phone_number)
  const name = getMetafieldValue(location.metadata?.location_name) || location.title
  const desc = getMetafieldValue(location.metadata?.seo_description)
  const image = location.metadata?.featured_image?.imgix_url

  return (
    <>
      <section className="relative overflow-hidden bg-gray-900">
        {image && (
          <div className="absolute inset-0">
            <img
              src={`${image}?w=2400&h=900&fit=crop&auto=format,compress`}
              alt={name}
              className="w-full h-full object-cover opacity-40"
            />
          </div>
        )}
        <div className="relative max-w-5xl mx-auto container-px py-20">
          <Link
            href="/locations"
            className="text-sm font-semibold text-lemon-300 hover:text-lemon-400"
          >
            ← Back to Locations
          </Link>
          <h1 className="mt-5 text-4xl lg:text-5xl font-extrabold text-white flex items-center gap-2">
            📍 {name}
          </h1>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto container-px">
          <div className="text-gray-700 leading-relaxed space-y-4">
            {desc ? (
              desc.split(/\n\n+/).map((para, i) => <p key={i}>{para}</p>)
            ) : (
              <p>
                Looking for reliable{' '}
                <a
                  href="https://lemonteamoving.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lemon-600 font-semibold hover:underline"
                >
                  movers NYC
                </a>{' '}
                in {name}? Lemon Team Moving has 8+ years of experience providing local,
                long-distance, residential, and commercial moving services with transparent
                pricing and trained professionals.
              </p>
            )}
          </div>

          <div className="mt-12 bg-lemon-50 border border-lemon-100 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900">
              Moving in {name}?
            </h2>
            <p className="mt-3 text-gray-600">
              Get a free, no-obligation quote from Lemon Team Moving today.
            </p>
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
                  className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-lg transition-colors"
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