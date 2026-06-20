'use client'

import { useState } from 'react'
import Link from 'next/link'

interface HeaderProps {
  brandName: string
  phone?: string
  logoUrl?: string
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Services', href: '/services' },
  { label: 'Locations', href: '/locations' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'FAQs', href: '/#faqs' },
  { label: 'Contact', href: '/#contact' },
]

export default function Header({ brandName, phone, logoUrl }: HeaderProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto container-px">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            {logoUrl ? (
              <img
                src={`${logoUrl}?w=200&h=80&fit=max&auto=format,compress`}
                alt={brandName}
                className="h-10 lg:h-12 w-auto"
              />
            ) : (
              <span className="text-xl lg:text-2xl font-extrabold text-gray-900">
                🍋 {brandName}
              </span>
            )}
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-lemon-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {phone && (
              <a
                href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                className="text-sm font-bold text-gray-900 hover:text-lemon-600"
              >
                📞 {phone}
              </a>
            )}
            <Link
              href="/#contact"
              className="bg-lemon-400 hover:bg-lemon-500 text-gray-900 font-bold text-sm px-5 py-2.5 rounded-lg transition-colors shadow"
            >
              Get Free Moving Quote
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-2 py-2 text-base font-semibold text-gray-700 hover:text-lemon-600"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 bg-lemon-400 hover:bg-lemon-500 text-gray-900 font-bold text-center px-5 py-3 rounded-lg"
              >
                Get Free Moving Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}