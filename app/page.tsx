import {
  getSiteSettings,
  getServices,
  getLocations,
  getTestimonials,
  getFAQs,
  getMetafieldValue,
} from '@/lib/cosmic'
import { normalizeBadges } from '@/lib/normalize'
import Hero from '@/components/Hero'
import CredibilitySection from '@/components/CredibilitySection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import LocationsSection from '@/components/LocationsSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'

export default async function HomePage() {
  const [settings, services, locations, testimonials, faqs] = await Promise.all([
    getSiteSettings(),
    getServices(),
    getLocations(),
    getTestimonials(),
    getFAQs(),
  ])

  const phone = getMetafieldValue(settings?.metadata?.phone_number)
  const heroHeadline =
    getMetafieldValue(settings?.metadata?.hero_headline) ||
    'Reliable Movers NYC You Can Trust'
  const heroSub =
    getMetafieldValue(settings?.metadata?.hero_subheadline) ||
    'Lemon Team Moving is a trusted NYC moving company with 8+ years of experience providing residential, commercial, local, long-distance, packing, and specialty moving services throughout New York City, Westchester County, and New Rochelle.'
  const heroBg = settings?.metadata?.hero_background_image?.imgix_url

  const aboutTitle =
    getMetafieldValue(settings?.metadata?.about_title) || 'About Lemon Team Moving'
  const aboutContent =
    getMetafieldValue(settings?.metadata?.about_content) ||
    'Lemon Team Moving is a professional moving company with over 8 years of experience serving NYC, Westchester County, and New Rochelle.\n\nWe provide reliable and affordable moving and packing solutions tailored to your needs. Whether you are moving locally, across the city, or long distance, our experienced movers ensure a smooth and stress-free moving experience.'

  const credibilityBadges = normalizeBadges(settings?.metadata?.credibility_badges)
  const whyChoose = normalizeBadges(settings?.metadata?.why_choose_us)

  const ctaHeadline =
    getMetafieldValue(settings?.metadata?.cta_headline) || 'Ready For A Stress-Free Move?'
  const ctaSub =
    getMetafieldValue(settings?.metadata?.cta_subheadline) ||
    'Get your free moving quote today and let Lemon Team Moving handle everything with care and professionalism.'

  // FAQ Schema markup
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: getMetafieldValue(faq.metadata?.question) || faq.title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: getMetafieldValue(faq.metadata?.answer),
      },
    })),
  }

  return (
    <>
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Hero
        headline={heroHeadline}
        subheadline={heroSub}
        backgroundUrl={heroBg}
        phone={phone}
      />
      <CredibilitySection badges={credibilityBadges} />
      <AboutSection title={aboutTitle} content={aboutContent} />
      <ServicesSection services={services} />
      <LocationsSection locations={locations} />
      <WhyChooseUs items={whyChoose} />
      <TestimonialsSection testimonials={testimonials} />
      <FAQSection faqs={faqs} />
      <CTASection headline={ctaHeadline} subheadline={ctaSub} phone={phone} />
    </>
  )
}