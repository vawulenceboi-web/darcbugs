import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DarcBugs Innovation Lab',
    short_name: 'DarcBugs',
    description:
      'DarcBugs is an independent R&D innovation lab building the next generation of robotics, autonomous systems, humanoid technology, and aerial systems.',
    start_url: '/',
    display: 'standalone',
    background_color: '#080a0a',
    theme_color: '#080a0a',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
