import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { PodcastPlayer } from "@/components/podcast-player"
import { fetchPodcastFeed } from "@/lib/fetch-podcast"

interface EpisodePageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: EpisodePageProps): Promise<Metadata> {
  const podcastData = await fetchPodcastFeed()
  const episode = podcastData.episodes.find((ep) => ep.id === params.id)

  if (!episode) {
    return {
      title: "Episode Not Found",
    }
  }

  return {
    title: `${episode.title} | Mindful Tech Talk`,
    description: episode.description,
    openGraph: {
      title: episode.title,
      description: episode.description,
      type: "article",
      publishedTime: episode.pubDate,
      url: `https://mindfultechpodcast.com/episode/${episode.id}`,
      images: [
        {
          url: episode.image || "/podcast-cover.jpg",
          width: 1200,
          height: 630,
          alt: episode.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: episode.title,
      description: episode.description,
      images: [episode.image || "/podcast-cover.jpg"],
    },
  }
}

export default async function EpisodePage({ params }: EpisodePageProps) {
  const podcastData = await fetchPodcastFeed()
  const episode = podcastData.episodes.find((ep) => ep.id === params.id)

  if (!episode) {
    notFound()
  }

  return (
    <div className="container max-w-4xl py-10">
      <Link
        href="/#episodes"
        className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to all episodes</span>
      </Link>

      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <Image
            src="/placeholder.svg?height=300&width=300"
            width={300}
            height={300}
            alt={episode.title}
            className="rounded-lg object-cover aspect-square md:w-64 md:h-64"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{episode.category}</Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <time dateTime={episode.pubDate}>{new Date(episode.pubDate).toLocaleDateString()}</time>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{episode.duration}</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">{episode.title}</h1>
            <PodcastPlayer audioUrl={episode.audioUrl} title={episode.title} />
            <div className="mt-6">
              <Button variant="outline" size="sm" className="inline-flex items-center gap-1">
                <Share2 className="h-4 w-4" />
                Share Episode
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        <div className="prose max-w-none">
          <h2>Episode Notes</h2>
          <p>{episode.description}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl
            aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl
            aliquam nisl, eget aliquam nisl nisl sit amet nisl.
          </p>

          <h3>In this episode:</h3>
          <ul>
            <li>Introduction to the topic (02:15)</li>
            <li>Interview with our guest (08:45)</li>
            <li>Key insights and takeaways (24:30)</li>
            <li>Practical tips and strategies (35:10)</li>
            <li>Closing thoughts and next steps (42:18)</li>
          </ul>

          <h3>Resources mentioned:</h3>
          <ul>
            <li>
              <a href="#">Guest's website</a>
            </li>
            <li>
              <a href="#">Recommended book</a>
            </li>
            <li>
              <a href="#">Useful tool mentioned in the episode</a>
            </li>
            <li>
              <a href="#">Research paper discussed</a>
            </li>
          </ul>

          <h3>Connect with our guest:</h3>
          <p>
            Follow our guest on <a href="#">Twitter</a>, <a href="#">LinkedIn</a>, or visit their
            <a href="#"> personal website</a> to learn more about their work.
          </p>

          <div className="bg-muted p-4 rounded-lg mt-6">
            <h4>Subscribe to Mindful Tech Talk</h4>
            <p>
              Never miss an episode! Subscribe to Mindful Tech Talk on
              <a href="#"> Apple Podcasts</a>, <a href="#"> Spotify</a>,<a href="#"> Google Podcasts</a>, or wherever
              you get your podcasts.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const podcastData = await fetchPodcastFeed()

  return podcastData.episodes.map((episode) => ({
    id: episode.id,
  }))
}
