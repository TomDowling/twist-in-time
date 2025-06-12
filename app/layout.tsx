import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://twist-in-time.digital-space.io"),
  title: {
    default: "Twist In Time Podcast",
    template: "%s | Twist In Time",
  },
  description:
    "Twist In Time is the podcast where we tweak a moment in history and explore the ripple effects. Each week, we ask what if one small event changed everything?",
  keywords: [
    "podcast",
    "alternate history",
    "history",
    "what if",
    "Twist In Time",
    "historical podcast",
  ],
  authors: [{ name: "Tom Dowling" }],
  creator: "Tom Dowling",
  publisher: "Twist In Time Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
              name: "Twist In Time",
              description:
                "Twist In Time is the podcast where we tweak a moment in history and explore the ripple effects. Each week, we ask what if one small event changed everything?",
              url: "https://twist-in-time.digital-space.io",
              author: {
                "@type": "Person",
                name: "Tom Dowling",
              },
              image: "https://twist-in-time.digital-space.io/podcast-cover.jpg",
              webFeed: "https://twist-in-time.digital-space.io/feed.xml",
              publisher: {
                "@type": "Organization",
                name: "Twist In Time Media",
              },
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
  );
}
