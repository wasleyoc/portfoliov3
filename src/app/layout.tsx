import React from 'react'
import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/navbar'
import MouseMoveEffect from '@/components/mouse-move-effect'
import JumpToTop from '@/components/jump-to-top'
import Footer from '@/components/footer'
import SmoothScroll from '@/components/smooth-scroll'
import { Toaster } from '@/components/ui/sonner'
import FramerLazyMotion from '@/components/framer-lazy-motion'
import AnalyticsBeacon from '@/components/analytics-beacon'

const inter = Inter({ subsets: ['latin'] })
// const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Wasley Carvalho – Editor de Vídeo & Vídeomaker',
    template: '%s | Wasley Carvalho',
  },
  description:
    'Impulsionando você e sua marca ao mundo — com estilo, precisão e um toque de magia cinematográfica. Wasley Carvalho é especialista em Premiere Pro, After Effects, Photoshop, Illustrator & DaVinci Resolve — oferecendo edições cinematográficas, motion graphics e narrativas refinadas.',
  keywords: [
    'Wasley Carvalho',
    'Editor de Vídeo',
    'Videomaker',
    'DaVinci Resolve',
    'Premiere Pro',
    'After Effects',
    'Color Grading',
    'YouTube Video Editing',
    'Course Video Editing',
    'Logo Animation',
    'Visual Storytelling',
    'Freelance Video Editor',
    'Bangladesh Video Editor',
    'Cinematic Editing',
    'Content Creator',
    'Lower Thirds',
    'Audio Sync',
  ],
  authors: [{ name: 'Wasley Carvalho', url: 'https://www.wasley.com.br' }],
  creator: 'Wasley Carvalho',
  publisher: 'Wasley Carvalho',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt-BR',
    url: 'https://www.wasley.com.br',
    title: 'Wasley Carvalho – Video Editor & Videomaker',
    description:
      'Editor de vídeo e Videomaker apaixonado, que entrega edições limpas e cinematográficas e uma narrativa visual dinâmica utilizando as ferramentas Photoshop, Premiere Pro, Illustrator, After Effects e DaVinci Resolve.',
    siteName: 'Wasley Carvalho Portfolio',
    images: [
      {
        url: '/wasley.jpg',
        width: 1200,
        height: 630,
        alt: 'Wasley Carvalho - Video Editor & Videomaker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wasley Carvalho – Video Editor & Videomaker',
    description:
      'Crio edições cinematográficas, motion graphics e histórias cativantes. Deixe-nos transformar seu conteúdo em algo especial.',
    creator: '@wasleyoc', // update if you have a real Twitter handle
    images: ['/wasley.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://www.wasley.com.br',
  },
  category: 'Video Editing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#020817" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Wasley Carvalho',
              url: 'https://www.wasley.com.br',
              image: '/wasley.jpg',
              sameAs: [
                'https://www.wasley.com.br',
                'https://linkedin.com/in/wasleyoc', // update if available
                'https://youtube.com/@wasleyoc', // update if available
                'https://twitter.com/wasleyoc', // update if available
              ],
              jobTitle: 'Editor de Vídeo & Videomaker',
              knowsAbout: [
                'Video Editing',
                'Videomaker',
                'Motion Graphics',
                'DaVinci Resolve',
                'Adobe Premiere Pro',
                'Adobe Photoshop',
                'Adobe Illustrator',
                'Adobe After Effects',
                'Color Grading',
                'Audio Syncing',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
              alumniOf: {
                '@type': 'Organization',
                name: 'Descomplica',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen text-white`}
        style={{
          background: '#020817',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="grid-background-large min-h-screen">
          <SmoothScroll>
            <FramerLazyMotion>
              <MouseMoveEffect />
              <Navbar />
              <main className="">{children}</main>
              <Footer />
              <JumpToTop />
              <Toaster position="top-center" />
            </FramerLazyMotion>
          </SmoothScroll>
        </div>
        <AnalyticsBeacon />
      </body>
    </html>
  )
}
