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
  title: "ReyDev | Kauan Rey - Desenvolvedor Full-Stack",
  description:
    "Portfolio premium de Kauan Rey. Desenvolvedor Full-Stack especializado em sites modernos, automações e soluções digitais que geram resultado.",
  keywords: [
    "Kauan Rey",
    "Desenvolvedor Full Stack",
    "Criador de Sites",
    "Freelancer",
    "Next.js",
    "React",
    "Python",
    "Automação",
  ],
}

export const viewport = {
  themeColor: "#06b6d4",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
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