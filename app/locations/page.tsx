import type { Metadata } from 'next'
import Link from 'next/link'
import { getLocations, getSiteSettings, getMetafieldValue } from '@/lib/cosmic'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Areas We Serve | Lemon Team Moving — Movers NYC',
  description:
    'Lemon Team Moving serves NYC, Manhattan, Brooklyn, Queens, Bronx, Staten Island, Westchester County, and New Rochelle with professional moving services.',
}

export default async function LocationsPage() {
  const [locations, settings] = await Promise.all([getLocations(), getSiteSettings()])
  const phone = getMetafieldValue(settings?.metadata?.phone_number)

  return (
    <>
      <section className="bg-lemon-50 py-16 lg:py-20 border-b border-lemon-100">
        <div className="max-w-7xl mx-auto container-px text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">Areas We Serve</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Professional movers NYC across all five boroughs, Westchester County, and New Rochelle.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto container-px">
          {locations.length === 0 ? (
            <p className="text-center text-gray-500">No locations available yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location) => {
                const name = getMetafieldValue(location.metadata?.location_name) || location.title
                const desc = getMetafieldValue(location.metadata?.seo_description)
                const image = location.metadata?.featured_image?.imgix_url
                return (
                  <Link
                    key={location.id}
                    href={`/locations/${location.slug}`}
                    className="group block bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {image && (
                      <div className="h-44 overflow-hidden">
                        <img
                          src={`${image}?w=800&h=440&fit=crop&auto=format,compress`}
                          alt={name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-1">
                        📍 {name}
                      </h2>
                      {desc && <p className="mt-2 text-sm text-gray-600 line-clamp-4">{desc}</p>}
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <CTASection
        headline="Moving Within Our Service Area?"
        subheadline="Get your free moving quote today and let Lemon Team Moving handle everything with care and professionalism."
        phone={phone}
      />
    </>
  )
}