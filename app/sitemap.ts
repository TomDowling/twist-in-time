import episodes from "@/lib/episodes.json";

export default async function sitemap() {
  const baseUrl = "https://twist-in-time.digital-space.io";

  // Create episode URLs
  const episodeUrls = episodes.map((episode) => ({
    url: `${baseUrl}/episode/${episode.id}`,
    lastModified: new Date(episode.pubDate),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Static routes
  const routes = [""].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  }));

  return [...routes, ...episodeUrls];
}
