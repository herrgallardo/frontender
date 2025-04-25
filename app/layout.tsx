import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Antonio Gallardo Girela | Full-stack Developer",
  description:
    "Full-stack developer with experience in JavaScript, TypeScript, React, Next.js, and C#. Based in Lund, Sweden.",
  keywords: [
    "full-stack developer",
    "frontend",
    "backend",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "C#",
    "web development",
    "Lund",
    "Sweden",
  ],
  authors: [{ name: "Antonio Gallardo Girela" }],
  creator: "Antonio Gallardo Girela",
  openGraph: {
    title: "Antonio Gallardo Girela | Full-stack Developer",
    description:
      "Full-stack developer with experience in JavaScript, TypeScript, React, Next.js, and C#. Based in Lund, Sweden.",
    url: "https://www.frontender.se/",
    siteName: "Antonio Gallardo Girela's Portfolio",
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-20 bg-deep-teal">
          {children}
          <div />
        </main>
        <Footer />
      </body>
    </html>
  )
}
