import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { LanguageProvider } from "./providers/LanguageProvider"
import { ThemeProvider } from "@/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nicolas Mendoza - Portfolio",
  description: "Portfolio personal de Nicolas",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}