import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
})

export const metadata: Metadata = {
  title: "Prady Neog - Developer & Writer",
  description:
    "Personal website and technical blog by Prady Neog. Sharing tips, tricks, and concepts from the world of software development.",
  authors: [{ name: "Prady Neog" }],
  openGraph: {
    title: "Prady Neog - Developer & Writer",
    description:
      "Personal website and technical blog by Prady Neog.",
    url: "https://www.prady.xyz",
    siteName: "Prady's XYZ",
    type: "website",
  },
  twitter: {
    card: "summary",
    creator: "@pradyneo",
  },
}

export const viewport: Viewport = {
  themeColor: "#fafafa",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
