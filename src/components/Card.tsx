import React from 'react'
import Link from 'next/link'

type Tone = 'default' | 'success' | 'warning' | 'danger'

export interface CardProps {
  title: string
  description?: string
  price?: string | number
  imageSrc: string
  imageAlt?: string
  badge?: { label: string; tone?: Tone }
  meta?: string
  colorsCount?: number
  href?: string
  className?: string
}

function badgeClasses(tone: Tone = 'default') {
  if (tone === 'success') return 'bg-[color:var(--color-green)]/10 text-[color:var(--color-green)]'
  if (tone === 'warning') return 'bg-[color:var(--color-orange)]/10 text-[color:var(--color-orange)]'
  if (tone === 'danger') return 'bg-[color:var(--color-red)]/10 text-[color:var(--color-red)]'
  return 'bg-[color:var(--color-light-200)] text-[color:var(--color-dark-900)]'
}

export default function Card({
  title,
  description,
  price,
  imageSrc,
  imageAlt = '',
  badge,
  meta,
  colorsCount,
  href,
  className = '',
}: CardProps) {
  const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) =>
    href ? (
      <Link href={href} aria-label={title} className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[color:var(--color-dark-900)]">
        {children}
      </Link>
    ) : (
      <>{children}</>
    )

  return (
    <div
      className={`group overflow-hidden rounded-2xl border border-[color:var(--color-light-300)] bg-[color:var(--color-light-100)] shadow-sm transition hover:shadow-md ${className}`}
    >
      <Wrapper>
        <div className="relative">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-auto w-full object-cover aspect-[4/3] md:aspect-[16/9] bg-[color:var(--color-light-200)]"
            loading="lazy"
          />
          {badge ? (
            <span
              className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[length:var(--text-footnote)] leading-[var(--text-footnote--line-height)] font-[var(--text-footnote--font-weight)] ${badgeClasses(badge.tone)}`}
            >
              {badge.label}
            </span>
          ) : null}
        </div>

        <div className="space-y-2 p-4 sm:p-5">
          <h3 className="text-[length:var(--text-heading-3)] leading-[var(--text-heading-3--line-height)] font-[var(--text-heading-3--font-weight)] text-[color:var(--color-dark-900)]">
            {title}
          </h3>
          {description ? (
            <p className="text-[length:var(--text-body)] leading-[var(--text-body--line-height)] font-[var(--text-body--font-weight)] text-[color:var(--color-dark-700)]">
              {description}
            </p>
          ) : null}
          <div className="flex items-center justify-between pt-2">
            <div className="flex flex-col">
              {meta ? (
                <span className="text-[length:var(--text-caption)] leading-[var(--text-caption--line-height)] font-[var(--text-caption--font-weight)] text-[color:var(--color-dark-700)]">
                  {meta}
                </span>
              ) : null}
              {typeof colorsCount === 'number' ? (
                <span className="text-[length:var(--text-footnote)] leading-[var(--text-footnote--line-height)] font-[var(--text-footnote--font-weight)] text-[color:var(--color-dark-500)]">
                  {colorsCount} Colour
                </span>
              ) : null}
            </div>
            {price !== undefined ? (
              <span className="text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] font-[var(--text-lead--font-weight)] text-[color:var(--color-dark-900)]">
                {typeof price === 'number' ? `$${price.toFixed(2)}` : price}
              </span>
            ) : null}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
