import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
  title: 'ReyDeV | Kauan Rey - Desenvolvedor & Tecnologia',
  description: 'Portfolio de Kauan Rey Bento da Silva - Desenvolvedor Full-Stack, estudante de Redes de Sistemas e apaixonado por tecnologia e inovacao.',
  keywords: ['Kauan Rey', 'Desenvolvedor', 'Portfolio', 'React', 'Python', 'Java', 'Full-Stack'],
}

export const viewport = {
  themeColor: '#0ea5c9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
