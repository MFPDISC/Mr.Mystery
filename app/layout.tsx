import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'BROADCAST // Mr. Mystery',
  description: 'Mr. Mystery - Digital Brutalism Artist Experience. Unreleased music, studio transmissions, and late night frequencies. MRMYSTERY.com',
  keywords: 'Mr. Mystery, BROADCAST, artist, music, digital brutalism, unreleased music, studio sessions',
  authors: [{ name: 'Mr. Mystery' }],
  openGraph: {
    title: 'BROADCAST // Mr. Mystery',
    description: 'Tune into the frequency. Unreleased cuts and studio secrets.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-black text-white antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18057281118"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18057281118');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
