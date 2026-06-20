interface WhyChooseUsProps {
  items: string[]
}

const fallbackItems = [
  '8+ Years Experience',
  'Fully Licensed & Insured',
  'Affordable Rates',
  'No Hidden Charges',
  'Trained Movers',
  'Modern Equipment',
  'Packing Experts',
  'Excellent Customer Service',
]

export default function WhyChooseUs({ items }: WhyChooseUsProps) {
  const list = items.length > 0 ? items : fallbackItems

  return (
    <section className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto container-px">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white text-center mb-12">
          Why Choose Lemon Team Moving
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {list.map((item, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-lemon-400 transition-colors"
            >
              <div className="text-lemon-400 text-2xl mb-2">★</div>
              <p className="text-white font-semibold text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}