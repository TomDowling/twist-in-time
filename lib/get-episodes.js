import path from "path";
import { promises as fs } from "fs";

export async function getEpisodes() {
  const filePath = path.join(process.cwd(), "lib", "episodes.json");
  const data = await fs.readFile(filePath, "utf-8");
  const episodes = JSON.parse(data);

  const now = new Date();

  return episodes.filter((ep) => new Date(ep.pubDate) <= now);
}
