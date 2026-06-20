import Link from 'next/link'

interface CTASectionProps {
  headline: string
  subheadline: string
  phone?: string
}

export default function CTASection({ headline, subheadline, phone }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=2400&h=900&fit=crop&auto=format,compress"
          alt="Stress-free moving with Lemon Team Moving"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative max-w-4xl mx-auto container-px py-20 text-center">
        <h2 className="text-3xl lg:text-5xl font-extrabold text-white">
          {headline}
        </h2>
        <p className="mt-5 text-lg text-gray-200 max-w-2xl mx-auto">
          {subheadline}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contact"
            className="bg-lemon-400 hover:bg-lemon-500 text-gray-900 font-bold px-8 py-4 rounded-lg shadow-lg transition-colors"
          >
            Get Free Quote
          </Link>
          {phone && (
            <a
              href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-4 rounded-lg shadow-lg transition-colors"
            >
              📞 Call Now
            </a>
          )}
        </div>
      </div>
    </section>
  )
}