import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nike Web Store',
  description: 'A modern Nike web store built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}