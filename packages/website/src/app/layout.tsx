import type { Metadata } from 'next'
import { Providers } from '@/app/providers'
import './globals.css'

import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
        <Toaster position="bottom-center" />
      </body>
    </html>
  )
}
