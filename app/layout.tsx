import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import LayoutWrapper from "./layout-wrapper" 

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Meet - Your ultimate platform for virtual and hybrid events",
  description: "Host, connect, and engage seamlessly with Meet, the powerful virtual meeting platform for teams and organizations.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  )
}
