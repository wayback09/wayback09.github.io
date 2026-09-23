import Footer from "@/components/footer/Footer"
import Nav from "@/components/nav/Nav"
import { ThemeProvider } from "@/components/ThemeProvider"
import CrtOverlay from "@/components/CrtOverlay"
import { DiscordEmbed } from "@/lib/discord"
import { cn } from "@/lib/utils"

import "@/css/globals.css"
import { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import React, { ReactNode } from "react"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://wayback09.github.io"),
  title: {
    default: "wayback",
    template: "wayback | %s",
  },
  icons: {
    icon: "/logo.jpg",
  },
  openGraph: {
    title: {
      default: "wayback",
      template: "wayback | %s",
    },
    description: "Hi, I'm wayback!",
    images: "/logo.jpg",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-mono antialiased", jetbrainsMono.variable)}
    >
      <head>
        <DiscordEmbed />
      </head>
      <body className="relative flex min-h-screen flex-col">
        <ThemeProvider>
          <CrtOverlay />
          <Nav />
          <div className="flex min-h-160 flex-1 flex-col px-8 py-16">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
