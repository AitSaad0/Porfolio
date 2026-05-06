import type { Metadata } from 'next'
import './globals.css'
import { LangProvider } from '@/context/Langcontext'

export const metadata: Metadata = {
  title: 'Portfolio — Amzazi',
  description: 'Étudiant en informatique passionné par la cybersécurité, le développement et les CTFs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  )
}