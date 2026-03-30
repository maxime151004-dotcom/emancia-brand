import type { Metadata } from 'next'
import { getGoogleFontsUrl } from '@/lib/brand'
import { Sidebar } from '@/components/Sidebar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emancia — Charte Graphique',
  description: 'Guide de marque et système de design Emancia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={getGoogleFontsUrl()} rel="stylesheet" />
      </head>
      <body className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 ml-64 p-12 max-w-4xl">
          {children}
        </main>
      </body>
    </html>
  )
}
