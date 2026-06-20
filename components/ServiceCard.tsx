import Link from 'next/link'
import type { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const icon = getMetafieldValue(service.metadata?.icon) || '📦'
  const desc = getMetafieldValue(service.metadata?.short_description)
  const image = service.metadata?.featured_image?.imgix_url

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
      {image && (
        <div className="h-44 overflow-hidden">
          <img
            src={`${image}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="text-3xl mb-3">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        {desc && <p className="text-gray-600 text-sm leading-relaxed flex-1">{desc}</p>}
        <div className="mt-5 flex flex-col sm:flex-row gap-2">
          <Link
            href={`/services/${service.slug}`}
            className="flex-1 text-center border border-gray-300 hover:border-lemon-400 text-gray-800 font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
          >
            Learn More
          </Link>
          <Link
            href="/#contact"
            className="flex-1 text-center bg-lemon-400 hover:bg-lemon-500 text-gray-900 font-bold text-sm px-4 py-2.5 rounded-lg transition-colors"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </div>
  )
}