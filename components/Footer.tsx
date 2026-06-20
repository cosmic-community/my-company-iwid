import Link from 'next/link'

interface FooterProps {
  brandName: string
  phone?: string
  logoUrl?: string
}

export default function Footer({ brandName, phone }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto container-px py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-extrabold text-white mb-3">
              🍋 {brandName}
            </h3>
            <p className="text-sm leading-relaxed max-w-md">
              Trusted{' '}
              <a
                href="https://lemonteamoving.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lemon-300 font-semibold hover:underline"
              >
                movers NYC
              </a>{' '}
              with 8+ years of experience providing residential, commercial, local,
              long-distance, packing, and specialty moving services throughout New York City,
              Westchester County, and New Rochelle.
            </p>
            {phone && (
              <a
                href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                className="inline-block mt-4 text-lemon-300 font-bold text-lg"
              >
                📞 {phone}
              </a>
            )}
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-lemon-300">Home</Link></li>
              <li><Link href="/services" className="hover:text-lemon-300">Services</Link></li>
              <li><Link href="/locations" className="hover:text-lemon-300">Locations</Link></li>
              <li><Link href="/#testimonials" className="hover:text-lemon-300">Testimonials</Link></li>
              <li><Link href="/#faqs" className="hover:text-lemon-300">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              <li>New York City</li>
              <li>Westchester County</li>
              <li>New Rochelle</li>
              <li>Manhattan • Brooklyn • Queens</li>
              <li>Bronx • Staten Island</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-400">
          © {year} {brandName}. Licensed & Insured. All rights reserved.
        </div>
      </div>
    </footer>
  )
}