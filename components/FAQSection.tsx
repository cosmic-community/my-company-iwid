'use client'

import { useState } from 'react'
import type { FAQ } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface FAQSectionProps {
  faqs: FAQ[]
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!faqs || faqs.length === 0) {
    return null
  }

  return (
    <section id="faqs" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto container-px">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to know about hiring movers in NYC.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const question = getMetafieldValue(faq.metadata?.question) || faq.title
            const answer = getMetafieldValue(faq.metadata?.answer)
            const isOpen = openIndex === i
            return (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left px-5 py-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900">{question}</span>
                  <span className="text-lemon-500 text-xl flex-shrink-0 ml-4">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && answer && (
                  <div className="px-5 pb-5 text-gray-700 leading-relaxed">{answer}</div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}