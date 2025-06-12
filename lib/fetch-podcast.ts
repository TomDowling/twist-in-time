import type { PodcastFeed } from "./types"

// This function would normally fetch and parse an actual RSS feed
// For demo purposes, we're returning mock data
export async function fetchPodcastFeed(): Promise<PodcastFeed> {
  // In a real implementation, you would:
  // 1. Fetch the RSS feed from the URL
  // 2. Parse the XML
  // 3. Transform the data into the PodcastFeed format

  // Mock data for demonstration
  return {
    title: "Mindful Tech Talk",
    description: "Exploring the intersection of technology and mindfulness",
    link: "https://mindfultechpodcast.com",
    image: "/podcast-cover.jpg",
    author: "Sarah Chen",
    episodes: [
      {
        id: "ep-001",
        title: "Digital Detox: Reclaiming Your Attention in an Age of Distraction",
        description:
          "In this episode, Sarah talks with Dr. Maya Rodriguez about practical strategies for digital detox and how to build healthier relationships with our devices without giving up technology altogether.",
        pubDate: "2023-06-01T08:00:00Z",
        audioUrl: "https://example.com/episodes/ep001.mp3",
        duration: "45:23",
        category: "Wellness",
      },
      {
        id: "ep-002",
        title: "The Ethics of AI: Building Technology with Humanity in Mind",
        description:
          "Tech ethicist James Wong joins Sarah to discuss how we can ensure AI development remains centered on human wellbeing and ethical considerations as these technologies become more integrated into our daily lives.",
        pubDate: "2023-05-25T08:00:00Z",
        audioUrl: "https://example.com/episodes/ep002.mp3",
        duration: "52:17",
        category: "Ethics",
      },
      {
        id: "ep-003",
        title: "Mindful Social Media: Using Platforms Without Being Used",
        description:
          "Former social media executive Priya Sharma reveals insider strategies for maintaining mental health while using social platforms, and how to recognize manipulative design patterns.",
        pubDate: "2023-05-18T08:00:00Z",
        audioUrl: "https://example.com/episodes/ep003.mp3",
        duration: "48:05",
        category: "Social Media",
      },
      {
        id: "ep-004",
        title: "Digital Minimalism: Less Tech, More Life",
        description:
          "Minimalist lifestyle coach Alex Rivera shares practical tips for decluttering your digital life and focusing on the tools and platforms that truly add value to your existence.",
        pubDate: "2023-05-11T08:00:00Z",
        audioUrl: "https://example.com/episodes/ep004.mp3",
        duration: "41:32",
        category: "Lifestyle",
      },
      {
        id: "ep-005",
        title: "The Science of Screen Time: What Research Really Shows",
        description:
          "Neuroscientist Dr. Leila Johnson breaks down the latest research on how screen time affects our brains, sleep patterns, and overall wellbeing—with some surprising conclusions.",
        pubDate: "2023-05-04T08:00:00Z",
        audioUrl: "https://example.com/episodes/ep005.mp3",
        duration: "56:49",
        category: "Science",
      },
      {
        id: "ep-006",
        title: "Raising Digital Natives: Parenting in the Age of Screens",
        description:
          "Child psychologist Dr. Marcus Lee discusses healthy technology boundaries for children and teens, and how parents can model positive tech habits.",
        pubDate: "2023-04-27T08:00:00Z",
        audioUrl: "https://example.com/episodes/ep006.mp3",
        duration: "49:21",
        category: "Parenting",
      },
      {
        id: "ep-007",
        title: "Mindful Design: Creating Technology That Respects Human Attention",
        description:
          "UX designer Elena Kowalski explains how the next generation of apps and platforms are being designed with user wellbeing in mind, not just engagement metrics.",
        pubDate: "2023-04-20T08:00:00Z",
        audioUrl: "https://example.com/episodes/ep007.mp3",
        duration: "44:18",
        category: "Design",
      },
    ],
  }
}
