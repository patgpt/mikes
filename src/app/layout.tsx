import Footer from '@/components/Footer'
import Navbar from '@/components/navigation/Navbar'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Lobster, Noto_Sans, Noto_Serif } from 'next/font/google'

import './globals.css'

const fontSerif = Noto_Serif({
  variable: '--font-serif',
  weight: '400',
  subsets: ['latin'],
})

const fontSans = Noto_Sans({
  variable: '--font-serif',
  weight: '400',
  subsets: ['latin'],
})

const fontDisplay = Lobster({
  variable: '--font-display',
  weight: '400',
  subsets: ['latin'],
})

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
    <html lang='en'>
      <body
        className={clsx(
          fontSans.variable,
          fontSerif.variable,
          fontDisplay.variable,
          'antialiased',
          'bg-base-100',
          'min-h-screen'
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
