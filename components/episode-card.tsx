import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Episode } from "@/lib/types"

interface EpisodeCardProps {
  episode: Episode
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src="/placeholder.svg?height=200&width=400"
          width={400}
          height={200}
          alt={episode.title}
          className="w-full object-cover h-48"
        />
        <Badge className="absolute top-3 left-3" variant="secondary">
          {episode.category}
        </Badge>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <time dateTime={episode.pubDate}>{new Date(episode.pubDate).toLocaleDateString()}</time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{episode.duration}</span>
          </div>
        </div>
        <h3 className="font-bold line-clamp-2 mb-2">{episode.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{episode.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/episode/${episode.id}`}>Listen Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
