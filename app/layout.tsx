import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nitin Sharma - Senior Software Developer',
  description: 'Senior Software Developer specializing in Web3, React, Next.js, and full-stack development. Currently working at Spheron with expertise in blockchain integration and modern web technologies.',
  keywords: ['Web3', 'React', 'Next.js', 'TypeScript', 'Blockchain', 'Full-stack Developer', 'Spheron'],
  authors: [{ name: 'Nitin Sharma' }],
  creator: 'Nitin Sharma',
  openGraph: {
    title: 'Nitin Sharma - Senior Software Developer',
    description: 'Senior Software Developer specializing in Web3, React, Next.js, and full-stack development.',
    url: 'https://nitinshr135.github.io',
    siteName: 'Nitin Sharma Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nitin Sharma - Senior Software Developer',
    description: 'Senior Software Developer specializing in Web3, React, Next.js, and full-stack development.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 