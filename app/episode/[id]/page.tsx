import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PodcastPlayer } from "@/components/podcast-player";
import { getEpisodes } from "@/lib/get-episodes"; // <-- New import

interface EpisodePageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: EpisodePageProps): Promise<Metadata> {
  const episodes = await getEpisodes();
  const episode = episodes.find((ep) => ep.id === params.id);

  if (!episode) {
    return {
      title: "Episode Not Found",
    };
  }

  return {
    title: `${episode.title} | Twist In Time`,
    description: episode.description,
    openGraph: {
      title: episode.title,
      description: episode.description,
      type: "article",
      publishedTime: episode.pubDate,
      url: `https://twist-in-time.digital-space.io/episode/${episode.id}`,
      images: [
        {
          url:
            episode.image ||
            "https://twist-in-time.digital-space.iologo-banner.png",
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
      images: [
        episode.image ||
          "https://twist-in-time.digital-space.iologo-banner.png",
      ],
    },
  };
}

export default async function EpisodePage({ params }: EpisodePageProps) {
  const episodes = await getEpisodes();
  const episode = episodes.find((ep) => ep.id === params.id);

  if (!episode) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl py-10">
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
            src={episode.image || "logo-banner.png"}
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
                <time dateTime={episode.pubDate}>
                  {new Date(episode.pubDate).toLocaleDateString()}
                </time>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{episode.duration}</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">{episode.title}</h1>
            <PodcastPlayer audioUrl={episode.audioUrl} title={episode.title} />
            <div className="mt-6">
              {/* <Button
                variant="outline"
                size="sm"
                className="inline-flex items-center gap-1"
              >
                <Share2 className="h-4 w-4" />
                Share Episode
              </Button> */}
            </div>
          </div>
        </div>

        <Separator />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const episodes = await getEpisodes();

  //   @ts-ignore
  return episodes.map((episode) => ({
    id: episode.id,
  }));
}
