import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, JetBrains_Mono, Syne } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: 'Ashish Meena — Backend Engineer | Distributed Systems | AI/ML',
    template: '%s | Ashish Meena',
  },
  description: 'Backend Engineer specializing in scalable distributed systems, FastAPI, PostgreSQL, Kafka, and AI-powered applications. IIT (ISM) Dhanbad CSE 2027.',
  keywords: [
    'Backend Engineer',
    'Software Engineer',
    'FastAPI',
    'PostgreSQL',
    'Kafka',
    'Redis',
    'Docker',
    'Distributed Systems',
    'AI/ML',
    'RAG',
    'System Design',
    'Competitive Programming',
  ],
  authors: [{ name: 'Ashish Meena' }],
  creator: 'Ashish Meena',
  publisher: 'Ashish Meena',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashishmeena.dev',
    siteName: 'Ashish Meena — Portfolio',
    title: 'Ashish Meena — Backend Engineer',
    description: 'Building scalable backend systems & AI-powered applications',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ashish Meena — Backend Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashish Meena — Backend Engineer',
    description: 'Building scalable backend systems & AI-powered applications',
    images: ['/og-image.png'],
    creator: '@ashishmeena9785',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#030712' },
    { media: '(prefers-color-scheme: dark)', color: '#030712' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${syne.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}