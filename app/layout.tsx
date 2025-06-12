import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://mindfultechpodcast.com"),
  title: {
    default: "Mindful Tech Talk Podcast",
    template: "%s | Mindful Tech Talk",
  },
  description: "Exploring the intersection of technology and mindfulness with host Sarah Chen",
  keywords: ["podcast", "technology", "mindfulness", "digital wellbeing", "tech ethics"],
  authors: [{ name: "Sarah Chen" }],
  creator: "Sarah Chen",
  publisher: "Mindful Tech Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PodcastSeries",
              name: "Mindful Tech Talk",
              description: "Exploring the intersection of technology and mindfulness with host Sarah Chen",
              url: "https://mindfultechpodcast.com",
              author: {
                "@type": "Person",
                name: "Sarah Chen",
              },
              image: "https://mindfultechpodcast.com/podcast-cover.jpg",
              webFeed: "https://mindfultechpodcast.com/feed.xml",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
