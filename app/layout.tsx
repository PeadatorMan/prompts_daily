import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { SpeedInsights } from "@vercel/speed-insights/next"

import './globals.css'
export const dynamic = "force-dynamic";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Prompts Diary',
  description: 'Prompts diary is a platform for prompts management.',
  icons: {
    icon: '/assets/images/logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>
          {children}
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  )
}
