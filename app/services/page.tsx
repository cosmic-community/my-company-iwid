import type { Metadata } from 'next'
import { getServices, getSiteSettings, getMetafieldValue } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Moving Services NYC | Lemon Team Moving',
  description:
    'Explore professional moving services from Lemon Team Moving — local, long-distance, residential, commercial, packing, furniture, piano moving, and storage solutions in NYC.',
}

export default async function ServicesPage() {
  const [services, settings] = await Promise.all([getServices(), getSiteSettings()])
  const phone = getMetafieldValue(settings?.metadata?.phone_number)

  return (
    <>
      <section className="bg-lemon-50 py-16 lg:py-20 border-b border-lemon-100">
        <div className="max-w-7xl mx-auto container-px text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            Professional Moving &amp; Packing Services
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Reliable movers NYC for every type of move — from apartments to offices and pianos.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto container-px">
          {services.length === 0 ? (
            <p className="text-center text-gray-500">No services available yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        headline="Ready For A Stress-Free Move?"
        subheadline="Get your free moving quote today and let Lemon Team Moving handle everything with care and professionalism."
        phone={phone}
      />
    </>
  )
}