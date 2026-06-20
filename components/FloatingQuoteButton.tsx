'use client'

import Link from 'next/link'

interface FloatingQuoteButtonProps {
  phone?: string
}

export default function FloatingQuoteButton({ phone }: FloatingQuoteButtonProps) {
  return (
    <div className="fixed bottom-5 left-5 z-40 flex flex-col gap-2">
      <Link
        href="/#contact"
        className="bg-lemon-400 hover:bg-lemon-500 text-gray-900 font-bold px-5 py-3 rounded-full shadow-lg transition-colors flex items-center gap-2"
      >
        💬 Get Free Quote
      </Link>
      {phone && (
        <a
          href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
          className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-5 py-3 rounded-full shadow-lg transition-colors flex items-center gap-2 text-center justify-center"
        >
          📞 Call Now
        </a>
      )}
    </div>
  )
}