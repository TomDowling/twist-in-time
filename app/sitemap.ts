import type { MetadataRoute } from "next"
import { fetchPodcastFeed } from "@/lib/fetch-podcast"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://mindfultechpodcast.com"

  // Get podcast data
  const podcastData = await fetchPodcastFeed()

  // Create episode URLs
  const episodeUrls = podcastData.episodes.map((episode) => ({
    url: `${baseUrl}/episode/${episode.id}`,
    lastModified: new Date(episode.pubDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Static routes
  const routes = ["", "/about", "/episodes", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1.0,
  }))

  return [...routes, ...episodeUrls]
}
