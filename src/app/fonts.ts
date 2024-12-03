/**
 * Font configurations for the application using Next.js Google Fonts.
 * Defines serif, sans-serif and display fonts with their respective CSS variables.
 */

import {Noto_Serif, Noto_Sans, Lobster} from 'next/font/google'

/** Noto Serif font configuration for body text */
const fontSerif = Noto_Serif({
  variable: '--font-serif',
  weight: '400',
  subsets: ['latin'],
})

/** Noto Sans font configuration for UI elements */
const fontSans = Noto_Sans({
  variable: '--font-sans',  // Fixed variable name
  weight: '400',
  subsets: ['latin'],
})

/** Lobster font configuration for decorative headings */
const fontDisplay = Lobster({
  variable: '--font-display',
  weight: '400',
  subsets: ['latin'],
})

export {fontDisplay, fontSans, fontSerif}
