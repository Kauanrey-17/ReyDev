import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
 
import { Loader } from "@/components/Loader"
import { CursorGlow } from "@/components/CursorGlow"
import { Particles } from "@/components/Particles"
 
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})
 
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})
 
export const metadata: Metadata = {
  title: "ReyDev | Kauan Rey — Desenvolvedor Full-Stack & IA",
  description:
    "Kauan Rey — Desenvolvedor Full-Stack especializado em sites modernos de alta conversão, automações com IA, sistemas web e soluções digitais que geram resultado real para empresas.",
  keywords: [
    "Kauan Rey",
    "ReyDev",
    "Desenvolvedor Full Stack",
    "Criador de Sites",
    "Sites Profissionais",
    "Freelancer",
    "Next.js",
    "React",
    "Python",
    "Automação com IA",
    "Claude AI",
    "Google Ads",
    "SEO",
    "São Paulo",
    "Desenvolvedor Web São Paulo",
    "Sites que vendem",
    "Landing Page",
  ],
  authors: [{ name: "Kauan Rey", url: "https://reydev.com.br" }],
  creator: "Kauan Rey",
  publisher: "ReyDev",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://reydev.com.br"),
  alternates: {
    canonical: "https://reydev.com.br",
  },
  openGraph: {
    title: "ReyDev | Kauan Rey — Desenvolvedor Full-Stack & IA",
    description:
      "Sites modernos, automações com IA e soluções digitais que geram resultado real. Freelancer Full-Stack em São Paulo.",
    url: "https://reydev.com.br",
    siteName: "ReyDev",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ReyDev — Kauan Rey Desenvolvedor Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReyDev | Kauan Rey — Desenvolvedor Full-Stack & IA",
    description: "Sites modernos, automações com IA e soluções digitais. São Paulo, Brasil.",
    images: ["/og-image.png"],
  },
  verification: {
    // google: "SEU_GOOGLE_SITE_VERIFICATION_CODE_AQUI",
  },
  category: "technology",
}
 
export const viewport = {
  themeColor: "#06b6d4",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
 
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
 
        {/* Schema.org - Rich Results para Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kauan Rey",
              alternateName: "ReyDev",
              description:
                "Desenvolvedor Full-Stack especializado em sites modernos, automações com IA e soluções digitais.",
              url: "https://reydev.com.br",
              sameAs: [
                "https://github.com/Kauanrey-17",
                "https://www.linkedin.com/in/kauanrey",
              ],
              jobTitle: "Desenvolvedor Full-Stack",
              worksFor: {
                "@type": "Organization",
                name: "ReyDev",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                addressCountry: "BR",
              },
              knowsAbout: [
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "Python",
                "IA Generativa",
                "Claude AI",
                "SEO",
                "Google Ads",
                "Desenvolvimento Web",
              ],
              offers: {
                "@type": "Offer",
                description: "Desenvolvimento de sites profissionais, sistemas web e automações com IA",
                areaServed: "Brasil",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans antialiased bg-background text-foreground`}
      >
        {/* Loader inicial */}
        <Loader />
 
        {/* Cursor Glow premium */}
        <CursorGlow />
 
        {/* Partículas tech fundo */}
        <Particles />
 
        {children}
      </body>
    </html>
  )
}
 