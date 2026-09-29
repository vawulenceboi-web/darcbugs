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
      { url: '/icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
  logo: `${SITE_URL}/icon-512x512.png`,
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
        <link rel="icon" href="/icon-48x48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="/icon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="icon" href="/icon-192x192.png" sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
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
