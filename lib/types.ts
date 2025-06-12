export interface Episode {
  id: string
  title: string
  description: string
  pubDate: string
  audioUrl: string
  duration: string
  category: string
  image?: string
}

export interface PodcastFeed {
  title: string
  description: string
  link: string
  image: string
  author: string
  episodes: Episode[]
}
