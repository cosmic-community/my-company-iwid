interface CredibilitySectionProps {
  badges: string[]
}

const fallbackBadges = [
  '8+ Years Experience',
  'Licensed & Insured',
  'Trained Moving Professionals',
  'Transparent Pricing',
  'Hundreds of Happy Customers',
  'Safe Packing & Transportation',
]

export default function CredibilitySection({ badges }: CredibilitySectionProps) {
  const items = badges.length > 0 ? badges : fallbackBadges

  return (
    <section className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto container-px">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-white text-sm font-semibold">
              <span className="text-lemon-400 text-lg">✓</span>
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}