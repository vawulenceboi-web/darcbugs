import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://darcbugs.com'
const SITE_NAME = 'DarcBugs Innovation Lab'
const DESCRIPTION =
  'DarcBugs is an independent R&D innovation lab building the next generation of robotics, autonomous systems, humanoid technology, and aerial systems.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'DarcBugs — Innovation Lab | Robotics & Autonomous Systems',
    template: '%s | DarcBugs',
  },
  description: DESCRIPTION,
  keywords: [
    'DarcBugs',
    'Darc Bugs',
    'innovation lab',
    'robotics',
    'autonomous systems',
    'humanoid robots',
    'aerial systems',
    'R&D',
    'independent research',
    'AI',
    'machine intelligence',
  ],
  authors: [{ name: 'DarcBugs Innovation Lab', url: SITE_URL }],
  creator: 'DarcBugs',
  publisher: 'DarcBugs Innovation Lab',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'DarcBugs — Innovation Lab | Robotics & Autonomous Systems',
    description: DESCRIPTION,
    images: [
      {
        url: '/darcbugs-logo.jpeg',
        width: 1024,
        height: 1024,
        alt: 'DarcBugs Innovation Lab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DarcBugs — Innovation Lab',
    description: DESCRIPTION,
    images: ['/darcbugs-logo.jpeg'],
    creator: '@darcbugs',
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: 'technology',
  icons: {
    icon: [
      { url: '/darcbugs-logo-clean.png', type: 'image/png' },
    ],
    apple: '/darcbugs-logo-clean.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#080a0a',
  colorScheme: 'dark',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DarcBugs Innovation Lab',
  alternateName: 'DarcBugs',
  url: SITE_URL,
  logo: `${SITE_URL}/darcbugs-logo.jpeg`,
  description: DESCRIPTION,
  foundingDate: '2026',
  email: 'hello@darcbugs.com',
  sameAs: [],
  knowsAbout: [
    'Robotics',
    'Autonomous Systems',
    'Humanoid Technology',
    'Aerial Systems',
    'Artificial Intelligence',
    'Machine Learning',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
