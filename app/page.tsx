import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Headphones, Rss, Share2, Clock, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { PodcastPlayer } from "@/components/podcast-player"
import { EpisodeCard } from "@/components/episode-card"
import { SubscribeButtons } from "@/components/subscribe-buttons"
import { fetchPodcastFeed } from "@/lib/fetch-podcast"

export const metadata: Metadata = {
  title: "Mindful Tech Talk | Exploring the intersection of technology and mindfulness",
  description:
    "Join host Sarah Chen as she explores how technology impacts our wellbeing and interviews experts on digital mindfulness practices.",
  openGraph: {
    title: "Mindful Tech Talk Podcast",
    description: "Exploring the intersection of technology and mindfulness with host Sarah Chen",
    type: "website",
    url: "https://mindfultechpodcast.com",
    images: [
      {
        url: "/podcast-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Mindful Tech Talk Podcast Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindful Tech Talk Podcast",
    description: "Exploring the intersection of technology and mindfulness with host Sarah Chen",
    images: ["/podcast-cover.jpg"],
  },
}

export default async function PodcastHomepage() {
  const podcastData = await fetchPodcastFeed()
  const featuredEpisode = podcastData.episodes[0]
  const recentEpisodes = podcastData.episodes.slice(1, 7)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Headphones className="h-6 w-6" />
            <span className="text-xl font-bold">Mindful Tech Talk</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#episodes" className="text-sm font-medium hover:underline underline-offset-4">
              Episodes
            </Link>
            <Link href="#subscribe" className="text-sm font-medium hover:underline underline-offset-4">
              Subscribe
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Subscribe
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="inline-flex">
                    New Episode Every Tuesday
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Mindful Tech Talk
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Exploring the intersection of technology and mindfulness with host Sarah Chen
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex items-center justify-center">
                    <Headphones className="mr-2 h-4 w-4" />
                    Listen Now
                  </Button>
                  <Button variant="outline" className="inline-flex items-center justify-center">
                    <Rss className="mr-2 h-4 w-4" />
                    Subscribe
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Weekly</span>
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>45 min episodes</span>
                  </div>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Mindful Tech Talk Podcast Cover"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                priority
              />
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">About the Podcast</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Mindful Tech Talk explores how technology impacts our wellbeing and mental health. Host Sarah Chen
                interviews experts, thought leaders, and practitioners to discover practical ways to use technology
                mindfully in our increasingly digital world.
              </p>
              <div className="flex flex-col gap-6 md:flex-row">
                <Card className="w-full md:max-w-[300px]">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center gap-2 text-center">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        width={100}
                        height={100}
                        alt="Sarah Chen"
                        className="rounded-full border-4 border-background"
                      />
                      <h3 className="text-xl font-bold">Sarah Chen</h3>
                      <p className="text-sm text-muted-foreground">Host & Producer</p>
                      <p className="text-sm">
                        Former tech executive turned digital wellness advocate with 15+ years in Silicon Valley.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">What You'll Learn</h3>
                  <ul className="grid gap-2 md:grid-cols-2">
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm">Digital mindfulness practices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm">Tech-life balance strategies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm">Ethical technology design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm">Mental health in digital age</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">Featured Episode</h2>
                <Card className="overflow-hidden">
                  <div className="md:grid md:grid-cols-[1fr_400px]">
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary">{featuredEpisode.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <time dateTime={featuredEpisode.pubDate}>
                            {new Date(featuredEpisode.pubDate).toLocaleDateString()}
                          </time>
                        </div>
                      </div>
                      <h3 className="mt-4 text-2xl font-bold">{featuredEpisode.title}</h3>
                      <p className="mt-2 line-clamp-3 text-muted-foreground">{featuredEpisode.description}</p>
                      <div className="mt-6">
                        <PodcastPlayer audioUrl={featuredEpisode.audioUrl} title={featuredEpisode.title} />
                      </div>
                      <div className="mt-6 flex items-center gap-4">
                        <Button size="sm" variant="outline" className="inline-flex items-center gap-1">
                          <Share2 className="h-4 w-4" />
                          Share
                        </Button>
                        <Link
                          href={`/episode/${featuredEpisode.id}`}
                          className="text-sm font-medium underline underline-offset-4"
                        >
                          View Show Notes
                        </Link>
                      </div>
                    </div>
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      width={400}
                      height={400}
                      alt={featuredEpisode.title}
                      className="aspect-square h-full w-full object-cover"
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="subscribe" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Subscribe Everywhere</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Never miss an episode. Subscribe to Mindful Tech Talk on your favorite podcast platform.
              </p>
              <SubscribeButtons />
            </div>
          </div>
        </section>

        <section id="episodes" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-8">Recent Episodes</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {recentEpisodes.map((episode) => (
                    <EpisodeCard key={episode.id} episode={episode} />
                  ))}
                </div>
                <div className="mt-10 flex justify-center">
                  <Button variant="outline" size="lg">
                    View All Episodes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-[58rem] gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Get in Touch</h2>
              <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Have a question or suggestion for the podcast? Want to be a guest? Reach out to us.
              </p>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Button className="w-full" size="lg">
                  Contact Us
                </Button>
                <p className="text-xs text-muted-foreground">
                  Or email us directly at{" "}
                  <Link href="mailto:hello@mindfultechpodcast.com" className="underline underline-offset-2">
                    hello@mindfultechpodcast.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Headphones className="h-5 w-5" />
            <p className="text-sm leading-loose text-center md:text-left">
              &copy; {new Date().getFullYear()} Mindful Tech Talk. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm underline underline-offset-4">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="text-sm underline underline-offset-4">
              Sitemap
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
