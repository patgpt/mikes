import Footer from '@/components/Footer'
import Navbar from '@/components/navigation/Navbar'
import clsx from 'clsx'
import type {Metadata} from 'next'
import {Providers} from './providers'

import './globals.css'
import {fontSans, fontSerif, fontDisplay} from '@/app/fonts'

export const metadata: Metadata = {
  title: 'Mike Kelly',
  description: "Mike Kelly's personal website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={clsx(
          fontSans.variable,
          fontSerif.variable,
          fontDisplay.variable,
          'antialiased',
          'bg-base-100',
          'min-h-screen'
        )}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
