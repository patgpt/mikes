import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Lobster } from "next/font/google";
import clsx from "clsx";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const fontDisplay = Lobster({
  variable: "--font-display",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Mike Kelly",
  description: "Mike Kelly's personal website",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(geistSans.variable, geistMono.variable, fontDisplay.variable, "antialiased", "bg-base-100", "min-h-screen")}
      >

        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
