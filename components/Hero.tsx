import Link from 'next/link'

interface HeroProps {
  headline: string
  subheadline: string
  backgroundUrl?: string
  phone?: string
}

export default function Hero({ headline, subheadline, backgroundUrl, phone }: HeroProps) {
  const bg =
    backgroundUrl ||
    'https://images.unsplash.com/photo-1600518464441-9154a4dea21b'

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={`${bg}?w=2400&h=1200&fit=crop&auto=format,compress`}
          alt="Professional movers carrying boxes in a modern NYC apartment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
      </div>

      <div className="relative max-w-7xl mx-auto container-px py-20 lg:py-32">
        <div className="max-w-2xl">
          <span className="inline-block bg-lemon-100 text-lemon-700 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5">
            8+ Years of Professional Experience
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            {headline}
          </h1>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            {subheadline}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="bg-lemon-400 hover:bg-lemon-500 text-gray-900 font-bold px-8 py-4 rounded-lg shadow-lg transition-colors text-center"
            >
              Get Free Quote
            </Link>
            {phone && (
              <a
                href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-colors text-center"
              >
                📞 Call Now
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}