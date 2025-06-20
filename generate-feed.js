const fs = require("fs");
const path = require("path");

// Load episodes from the static JSON file
const episodesPath = path.join(__dirname, "lib", "episodes.json");
const episodes = JSON.parse(fs.readFileSync(episodesPath, "utf-8"));

// Filter out episodes with a future pubDate
const now = new Date();
const publishedEpisodes = episodes.filter((ep) => new Date(ep.pubDate) <= now);

const podcastInfo = {
  title: "Twist In Time",
  description:
    "What if one small moment in history changed everything? Join us as we rewrite the past and explore the ripple effects on our world today.",
  link: "https://twist-in-time.digital-space.io",
  image: "https://twist-in-time.digital-space.io/logo-banner.png",
  author: "Tom Dowling",
  email: "twist-in-time@digital-space.io",
  language: "en-us",
  explicit: false,
  category: "History",
};

function formatRssDate(dateStr) {
  const date = new Date(dateStr);
  return date.toUTCString();
}

function getFileSizeBytes(audioUrl) {
  try {
    const filePath = path.join(
      __dirname,
      "public",
      decodeURIComponent(new URL(audioUrl).pathname)
    );
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (err) {
    console.warn(`Warning: Unable to get file size for ${audioUrl}`);
    return 0;
  }
}

function generateRssFeed(episodes, podcastInfo) {
  let rssFeed = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  rssFeed += `<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:podcast="https://podcastindex.org/namespace/1.0">\n`;
  rssFeed += `<channel>\n`;
  rssFeed += `<title>${podcastInfo.title}</title>\n`;
  rssFeed += `<link>${podcastInfo.link}</link>\n`;
  rssFeed += `<atom:link href="${podcastInfo.link}/feed.xml" rel="self" type="application/rss+xml"/>\n`;
  rssFeed += `<description>${podcastInfo.description}</description>\n`;
  rssFeed += `<itunes:summary>${podcastInfo.description}</itunes:summary>\n`;
  rssFeed += `<language>${podcastInfo.language}</language>\n`;
  rssFeed += `<managingEditor>${podcastInfo.email} (${podcastInfo.author})</managingEditor>\n`;
  rssFeed += `<itunes:email>${podcastInfo.email}</itunes:email>\n`;
  rssFeed += `<itunes:author>${podcastInfo.author}</itunes:author>\n`;
  rssFeed += `<itunes:image href="${podcastInfo.image}"/>\n`;
  rssFeed += `<itunes:explicit>${podcastInfo.explicit}</itunes:explicit>\n`;
  rssFeed += `<itunes:category text="${podcastInfo.category}"/>\n`;
  rssFeed += `<image>\n`;
  rssFeed += `  <url>${podcastInfo.image}</url>\n`;
  rssFeed += `  <title>${podcastInfo.title}</title>\n`;
  rssFeed += `  <link>${podcastInfo.link}</link>\n`;
  rssFeed += `</image>\n`;

  episodes.forEach((ep) => {
    const fileSize = getFileSizeBytes(ep.audioUrl);

    rssFeed += `<item>\n`;
    rssFeed += `<title>${ep.title}</title>\n`;
    rssFeed += `<description>${ep.description}</description>\n`;
    rssFeed += `<enclosure url="${ep.audioUrl}" length="${fileSize}" type="audio/mpeg"/>\n`;
    rssFeed += `<guid>${ep.id}</guid>\n`;
    rssFeed += `<pubDate>${formatRssDate(ep.pubDate)}</pubDate>\n`;
    rssFeed += `<itunes:duration>${ep.duration}</itunes:duration>\n`;
    rssFeed += `<category>${ep.category}</category>\n`;
    rssFeed += `</item>\n`;
  });

  rssFeed += `</channel>\n`;
  rssFeed += `</rss>`;

  return rssFeed;
}

const rssXml = generateRssFeed(publishedEpisodes, podcastInfo);

// Ensure the 'public' directory exists
const publicDir = path.join(__dirname, "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Write the RSS feed to a file
fs.writeFileSync(path.join(publicDir, "feed.xml"), rssXml, {
  encoding: "utf-8",
});

console.log("✅ RSS feed generated successfully!");
