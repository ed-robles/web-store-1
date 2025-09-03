import React from 'react'
import Link from 'next/link'

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  heading: string
  links: FooterLink[]
}

export interface FooterProps {
  sections?: FooterSection[]
  logoAlt?: string
  socials?: { kind: 'x' | 'facebook' | 'instagram'; href: string }[]
  copyrightName?: string
  className?: string
}

const defaultSections: FooterSection[] = [
  {
    heading: 'Featured',
    links: [
      { label: 'Air Force 1', href: '#' },
      { label: 'Huarache', href: '#' },
      { label: 'Air Max 90', href: '#' },
      { label: 'Air Max 95', href: '#' },
    ],
  },
  {
    heading: 'Shoes',
    links: [
      { label: 'All Shoes', href: '#' },
      { label: 'Custom Shoes', href: '#' },
      { label: 'Jordan Shoes', href: '#' },
      { label: 'Running Shoes', href: '#' },
    ],
  },
  {
    heading: 'Clothing',
    links: [
      { label: 'All Clothing', href: '#' },
      { label: 'Modest Wear', href: '#' },
      { label: 'Hoodies & Pullovers', href: '#' },
      { label: 'Shirts & Tops', href: '#' },
    ],
  },
  {
    heading: "Kids'",
    links: [
      { label: 'Infant & Toddler Shoes', href: '#' },
      { label: "Kids' Shoes", href: '#' },
      { label: "Kids' Jordan Shoes", href: '#' },
      { label: "Kids' Basketball Shoes", href: '#' },
    ],
  },
]

const defaultSocials: FooterProps['socials'] = [
  { kind: 'x', href: '#' },
  { kind: 'facebook', href: '#' },
  { kind: 'instagram', href: '#' },
]

function SocialIcon({ kind }: { kind: NonNullable<FooterProps['socials']>[number]['kind'] }) {
  const src =
    kind === 'x' ? '/x.svg' : kind === 'facebook' ? '/facebook.svg' : '/instagram.svg'
  const label = kind === 'x' ? 'X' : kind[0].toUpperCase() + kind.slice(1)
  return (
    <img
      src={src}
      width={24}
      height={24}
      alt={label}
      className="h-6 w-6"
    />
  )
}

export default function Footer({
  sections = defaultSections,
  logoAlt = 'Logo',
  socials = defaultSocials,
  copyrightName = 'Nike, Inc.',
  className = '',
}: FooterProps) {
  const year = new Date().getFullYear()
  return (
    <footer
      aria-label="Footer"
      className={`mt-16 bg-[color:var(--color-dark-900)] text-[color:var(--color-light-100)] ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="flex items-start">
            <img src="/logo.svg" alt={logoAlt} width={36} height={36} />
          </div>

          {sections.map((section) => (
            <div key={section.heading}>
              <h4 className="mb-4 text-[length:var(--text-heading-3)] leading-[var(--text-heading-3--line-height)] font-[var(--text-heading-3--font-weight)]">
                {section.heading}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[color:var(--color-dark-500)] hover:text-[color:var(--color-light-100)] text-[length:var(--text-body)] leading-[var(--text-body--line-height)] font-[var(--text-body--font-weight)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex items-start justify-start md:justify-end gap-4">
            {socials?.map((s) => (
              <Link
                key={s.kind}
                href={s.href}
                aria-label={s.kind}
                className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--color-light-100)] text-[color:var(--color-dark-900)] hover:opacity-90 transition"
              >
                <SocialIcon kind={s.kind} />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[length:var(--text-footnote)] leading-[var(--text-footnote--line-height)] font-[var(--text-footnote--font-weight)] text-[color:var(--color-dark-500)]">
            © {year} {copyrightName} All Rights Reserved
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {['Guides', 'Terms of Sale', 'Terms of Use', 'Nike Privacy Policy'].map((label) => (
              <Link
                key={label}
                href="#"
                className="text-[length:var(--text-footnote)] leading-[var(--text-footnote--line-height)] font-[var(--text-footnote--font-weight)] text-[color:var(--color-dark-500)] hover:text-[color:var(--color-light-100)]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
