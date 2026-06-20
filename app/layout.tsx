import type { Metadata } from 'next'
import './globals.css'
import { getSiteSettings } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingQuoteButton from '@/components/FloatingQuoteButton'
import CosmicBadge from '@/components/CosmicBadge'

export const metadata: Metadata = {
  title: 'Movers NYC You Can Trust | Lemon Team Moving — NYC Moving Company',
  description:
    'Lemon Team Moving is a trusted NYC moving company with 8+ years of experience. Local, long-distance, residential, commercial, packing & specialty movers serving NYC, Westchester County & New Rochelle. Get a free moving quote today.',
  keywords:
    'movers nyc, nyc movers, nyc moving company, moving company nyc, best moving companies nyc, moving company new york city, best moving service nyc, moving company near me, moving companies in westchester county, moving company in new rochelle',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await getSiteSettings()
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  const brandName = getMetafieldValue(settings?.metadata?.brand_name) || 'Lemon Team Moving'
  const phone = getMetafieldValue(settings?.metadata?.phone_number)
  const logoUrl = settings?.metadata?.logo?.imgix_url

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍋</text></svg>"
        />
        <script src="/dashboard-console-capture.js" />
              <script defer src="https://insights.cosmicinsights.dev/script.js" data-project="6a3661715b2ac5cef3df9520"></script>
      </head>
      <body className="font-sans antialiased">
        <Header brandName={brandName} phone={phone} logoUrl={logoUrl} />
        <main>{children}</main>
        <Footer brandName={brandName} phone={phone} logoUrl={logoUrl} />
        <FloatingQuoteButton phone={phone} />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}