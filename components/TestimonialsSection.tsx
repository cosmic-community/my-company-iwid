import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

function Stars({ rating }: { rating: number }) {
  const count = Math.max(0, Math.min(5, Math.round(rating)))
  return (
    <div className="text-lemon-400 text-lg mb-3">
      {'★'.repeat(count)}
      <span className="text-gray-300">{'★'.repeat(5 - count)}</span>
    </div>
  )
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-lemon-50">
      <div className="max-w-7xl mx-auto container-px">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-gray-600">
            Hundreds of happy customers across New York City.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => {
            const name = getMetafieldValue(t.metadata?.client_name) || t.title
            const quote = getMetafieldValue(t.metadata?.quote)
            const location = getMetafieldValue(t.metadata?.location)
            const ratingRaw = t.metadata?.rating
            const rating =
              typeof ratingRaw === 'number'
                ? ratingRaw
                : parseInt(getMetafieldValue(ratingRaw) || '5', 10) || 5
            return (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100"
              >
                <Stars rating={rating} />
                {quote && (
                  <p className="text-gray-700 leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
                )}
                <div className="mt-5">
                  <p className="font-bold text-gray-900">— {name}</p>
                  {location && <p className="text-sm text-gray-500">{location}</p>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}