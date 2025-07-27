// app/layout.tsx
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Eliobros Tech – Inovação e Inteligência Artificial',
  description: 'Site oficial da Eliobros Tech. Desenvolvemos soluções com IA, automações, apps web e muito mais.',
  keywords: ['Eliobros Tech', 'Inteligência Artificial', 'Desenvolvimento Web', 'Automação', 'Firebase', 'Next.js'],
  authors: [{ name: 'Eliobros Tech', url: 'https://eliobrostech.vercel.app' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Eliobros Tech – IA e Inovação',
    description: 'Conheça a Eliobros Tech: IA, automações e desenvolvimento de aplicativos sob medida.',
    url: 'https://eliobrostech.vercel.app',
    siteName: 'Eliobros Tech',
    images: [
      {
        url: '/eliobrostech.png',
        width: 1200,
        height: 630,
        alt: 'Logo da Eliobros Tech',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="google-site-verification" content="SPjkbvWtTfpARv6P8piJ3v5sEEwEeBlg7HnrO6iGXkM" />
        <link rel="icon" href="/eliobrostech.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Eliobros Tech",
              "url": "https://eliobrostech.vercel.app",
              "logo": "https://eliobrostech.vercel.app/eliobrostech.png",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61561277020899",
                "https://mz.linkedin.com/in/habibo-salimo-2397a7313",
                "https://twitter.com/@tech12384",
                "https://instagram.com/eliobros.tech3"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+258862840075",
                "contactType": "Customer Support",
                "email": "suporteeliobrostech@gmail.com",
                "availableLanguage": ["Portuguese", "English"]
              },
              "foundingDate": "2024-05-15",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Habibo Salimo Julio"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Costa do sol, Mapulene, 123",
                "addressLocality": "Maputo",
                "addressRegion": "Maputo",
                "postalCode": "1107",
                "addressCountry": "MZ"
              }
            }),
          }}
        />

      </head>
      <body className="bg-white text-gray-800 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}