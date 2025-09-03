import React, { useState } from 'react'
import Link from 'next/link'

export interface NavLink {
  label: string
  href: string
}

export interface NavbarProps {
  links?: NavLink[]
  logoAlt?: string
  cta?: { label: string; href: string } | null
  className?: string
}

const defaultLinks: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'Men', href: '#' },
  { label: 'Women', href: '#' },
  { label: 'Kids', href: '#' },
  { label: 'Sale', href: '#' },
]

export default function Navbar({
  links = defaultLinks,
  logoAlt = 'Logo',
  cta = { label: 'Shop Now', href: '#' },
  className = '',
}: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <nav
      role="navigation"
      aria-label="Primary"
      className={`sticky top-0 z-40 w-full bg-[color:var(--color-light-100)]/90 backdrop-blur border-b border-[color:var(--color-light-300)] ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="#" aria-label="Home" className="flex items-center">
              <img src="/logo.svg" width={32} height={32} alt={logoAlt} />
            </Link>
            <span className="hidden sm:inline-block text-[length:var(--text-heading-3)] leading-[var(--text-heading-3--line-height)] font-[var(--text-heading-3--font-weight)] text-[color:var(--color-dark-900)]">
              Nike Store
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[color:var(--color-dark-700)] hover:text-[color:var(--color-dark-900)] text-[length:var(--text-body)] leading-[var(--text-body--line-height)] font-[var(--text-body--font-weight)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            {cta ? (
              <Link
                href={cta.href}
                className="rounded-full bg-[color:var(--color-dark-900)] text-[color:var(--color-light-100)] px-4 py-2 text-[length:var(--text-caption)] leading-[var(--text-caption--line-height)] font-[var(--text-caption--font-weight)] hover:opacity-90 transition"
              >
                {cta.label}
              </Link>
            ) : null}
          </div>

          <div className="md:hidden">
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-[color:var(--color-dark-900)] hover:bg-[color:var(--color-light-200)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-dark-900)]"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${open ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 ${open ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="space-y-1 px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="block rounded-md px-3 py-2 text-[color:var(--color-dark-700)] hover:text-[color:var(--color-dark-900)] hover:bg-[color:var(--color-light-200)] text-[length:var(--text-body)] leading-[var(--text-body--line-height)] font-[var(--text-body--font-weight)]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          {cta ? (
            <Link
              href={cta.href}
              className="mt-2 inline-flex rounded-full bg-[color:var(--color-dark-900)] text-[color:var(--color-light-100)] px-4 py-2 text-[length:var(--text-caption)] leading-[var(--text-caption--line-height)] font-[var(--text-caption--font-weight)]"
              onClick={() => setOpen(false)}
            >
              {cta.label}
            </Link>
          ) : null}
        </div>
      </div>
    </nav>
  )
}
