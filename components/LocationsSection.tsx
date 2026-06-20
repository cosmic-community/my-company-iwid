import Link from 'next/link'
import type { Location } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface LocationsSectionProps {
  locations: Location[]
}

export default function LocationsSection({ locations }: LocationsSectionProps) {
  if (!locations || locations.length === 0) {
    return null
  }

  return (
    <section id="locations" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto container-px">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Areas We Serve
          </h2>
          <p className="mt-4 text-gray-600">
            Professional movers across NYC, Westchester County, and New Rochelle.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <div className="h-36 overflow-hidden">
                    <img
                      src={`${image}?w=700&h=350&fit=crop&auto=format,compress`}
                      alt={name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-1">
                    📍 {name}
                  </h3>
                  {desc && (
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">{desc}</p>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}