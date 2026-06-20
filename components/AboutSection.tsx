interface AboutSectionProps {
  title: string
  content: string
}

const highlights = [
  'Licensed and insured',
  'Experienced moving crew',
  'Affordable pricing',
  'Flexible scheduling',
  'Customer-first approach',
]

export default function AboutSection({ title, content }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto container-px">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
              {title}
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              {content.split(/\n\n+/).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
          <div className="bg-lemon-50 rounded-2xl p-8 border border-lemon-100">
            <ul className="space-y-4">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-lemon-400 text-gray-900 flex items-center justify-center font-bold text-sm">
                    ✓
                  </span>
                  <span className="text-gray-800 font-semibold pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}